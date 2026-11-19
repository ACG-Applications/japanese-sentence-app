var App = {
  patterns: [],
  currentTab: "learn",
  masterDictionary: null,
  furiganaVisible: true,
  translationVisible: true,
  ttsEnabled: false,

  init: function () {
    this.masterDictionary = window.MasterDictionary || {};
    this.patterns = this.masterDictionary.patterns || [];

    // Initialize core modules
    if (window.Furigana) Furigana.init();
    if (window.Toggles) Toggles.init();

    // Initialize all tabs
    if (window.LearnTab) LearnTab.init();
    if (window.CardsTab) CardsTab.init();
    if (window.QuizTab) QuizTab.init();
    if (window.VocabularyTab) VocabularyTab.init();
    if (window.GrammarTab) GrammarTab.init();

    this.updateProgress();
    this.attachEventListeners();
    this.renderTab("learn");

    console.log(
      "Japanese Study App initialized! Loaded " +
        this.patterns.length +
        " patterns",
    );
  },

  updateProgress: function () {
    var count = document.getElementById("progress-count");
    if (count) count.textContent = this.patterns.length;
  },

  // ─── NAVIGATION & RENDERING ───
  navigate: function (tab) {
    this.currentTab = tab;
    var navBtns = document.querySelectorAll(".nav-btn");
    for (var i = 0; i < navBtns.length; i++) {
      navBtns[i].classList.toggle("active", navBtns[i].dataset.tab === tab);
    }
    var contents = document.querySelectorAll(".tab-content");
    for (var j = 0; j < contents.length; j++) {
      contents[j].classList.toggle("active", contents[j].id === "tab-" + tab);
    }
    this.renderTab(tab);
  },

  // Return to the top of the current section without changing tab.
  scrollToTop: function () {
    var reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    try {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    } catch (e) {
      window.scrollTo(0, 0);
    }
    // drop any #pattern-n the reader arrived on, so the URL matches the view
    if (window.history && history.replaceState) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  },

  renderTab: function (tab) {
    switch (tab) {
      case "learn":
        if (window.LearnTab) LearnTab.render();
        break;
      case "cards":
        if (window.CardsTab) CardsTab.render();
        break;
      case "quiz":
        if (window.QuizTab) QuizTab.render();
        break;
      case "vocabulary":
        if (window.VocabularyTab) VocabularyTab.render();
        break;
      case "grammar":
        if (window.GrammarTab) GrammarTab.render();
        break;
    }
    // Re-attach TTS listeners whenever a tab renders
    this.attachTTSListeners();
  },

  // ─── EVENT LISTENERS (Toggles & Nav) ───
  attachEventListeners: function () {
    var self = this;

    // Navigation
    var navBtns = document.querySelectorAll(".nav-btn");
    for (var i = 0; i < navBtns.length; i++) {
      navBtns[i].addEventListener("click", function () {
        var tab = this.dataset.tab;
        // Tapping the tab you are already on means "take me back to the top of this
        // section" - the Learn tab is long enough that switching tabs and back was the
        // only way to get there.
        if (tab === self.currentTab) {
          self.scrollToTop();
          return;
        }
        self.navigate(tab);
      });
    }

    // Cross-reference navigation. A "See #n" link jumps to that card, but an
    // installed PWA has no browser Back button, so the destination card offers a
    // way back - shown only on the card you jumped to, and only until used.
    document.addEventListener("click", function (e) {
      var link = e.target.closest ? e.target.closest(".xref") : null;
      if (!link) return;
      var from = link.closest(".pattern-card");
      var targetId = link.getAttribute("href") || "";
      var target = targetId.charAt(0) === "#" ? document.getElementById(targetId.slice(1)) : null;
      if (!from || !from.id || !target) return;
      self.showXrefBack(target, from.id);
    });

    // Toggles
    var fBtn = document.getElementById("furigana-toggle");
    if (fBtn)
      fBtn.addEventListener("click", function () {
        self.toggleFurigana();
      });

    var tBtn = document.getElementById("translation-toggle");
    if (tBtn)
      tBtn.addEventListener("click", function () {
        self.toggleTranslation();
      });

    // Sticky bar: the header (with the toggles) and the tab bar ride together at the
    // top. A sentinel + IntersectionObserver drives the "stuck" state - it also fires
    // on iOS momentum scrolling - with a passive scroll listener alongside it.
    var header = document.getElementById("app-header");
    var nav = document.getElementById("app-nav");
    var stickyBar = null;

    if (header && nav && nav.parentNode === header.parentNode) {
      stickyBar = document.createElement("div");
      stickyBar.id = "sticky-bar";
      header.parentNode.insertBefore(stickyBar, header);
      stickyBar.appendChild(header);
      stickyBar.appendChild(nav);
    }

    var stuckTarget = stickyBar || header;
    if (stuckTarget) {
      var setStuck = function (stuck) {
        stuckTarget.classList.toggle("is-stuck", stuck);
      };

      if ("IntersectionObserver" in window) {
        var sentinel = document.createElement("div");
        sentinel.setAttribute("aria-hidden", "true");
        sentinel.style.cssText =
          "position:absolute;top:0;left:0;width:1px;height:60px;pointer-events:none;";
        document.body.insertBefore(sentinel, document.body.firstChild);
        new IntersectionObserver(
          function (entries) {
            setStuck(!entries[0].isIntersecting);
          },
          { threshold: 0 },
        ).observe(sentinel);
      }

      // Also listen for scroll directly: the observer settles on the next frame, so a
      // fast flick can otherwise paint one frame with the wrong chrome height.
      window.addEventListener(
        "scroll",
        function () {
          setStuck((window.scrollY || window.pageYOffset || 0) > 40);
        },
        { passive: true },
      );
    }

    var sBtn = document.getElementById("tts-toggle");
    if (sBtn)
      sBtn.addEventListener("click", function () {
        self.toggleTTS();
      });
  },

  // ─── TOGGLE LOGIC ───
  toggleFurigana: function () {
    this.furiganaVisible = !this.furiganaVisible;
    if (this.furiganaVisible) {
      document.body.classList.remove("furigana-hidden");
    } else {
      document.body.classList.add("furigana-hidden");
    }
    var status = document.querySelector("#furigana-toggle .toggle-status");
    if (status) {
      status.textContent = this.furiganaVisible ? "ON" : "OFF";
      status.className =
        "toggle-status " + (this.furiganaVisible ? "on" : "off");
    }
    this.renderTab(this.currentTab);
  },

  toggleTranslation: function () {
    this.translationVisible = !this.translationVisible;
    var status = document.querySelector("#translation-toggle .toggle-status");
    if (status) {
      status.textContent = this.translationVisible ? "ON" : "OFF";
      status.className =
        "toggle-status " + (this.translationVisible ? "on" : "off");
    }

    // Re-render all tabs to apply translation visibility globally
    if (window.LearnTab) LearnTab.render();
    if (window.CardsTab) CardsTab.render();
    if (window.VocabularyTab) VocabularyTab.render();
    if (window.QuizTab) QuizTab.render();
    if (window.GrammarTab) GrammarTab.render();

    this.attachTTSListeners();
  },

  toggleTTS: function () {
    this.ttsEnabled = !this.ttsEnabled;
    var status = document.querySelector("#tts-toggle .toggle-status");
    if (status) {
      status.textContent = this.ttsEnabled ? "ON" : "OFF";
      status.className = "toggle-status " + (this.ttsEnabled ? "on" : "off");
    }
    console.log("TTS is now " + (this.ttsEnabled ? "ON" : "OFF"));
  },

  // Put a "back to #n" control on the card you jumped to.
  showXrefBack: function (targetCard, fromId) {
    var existing = document.querySelector(".xref-back");
    if (existing) existing.parentNode.removeChild(existing);

    var header = targetCard.querySelector(".card-header");
    var num = targetCard.querySelector(".card-number");
    if (!header || !num) return;

    var label = fromId.replace("pattern-", "#");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "xref-back no-print";
    btn.textContent = "\u2190 " + label;
    btn.title = "Back to card " + label;
    btn.setAttribute("aria-label", "Back to card " + label);
    btn.addEventListener("click", function () {
      var src = document.getElementById(fromId);
      if (src) src.scrollIntoView({ block: "start", behavior: "smooth" });
      if (window.history && history.replaceState) {
        history.replaceState(null, "", "#" + fromId);
      }
      if (btn.parentNode) btn.parentNode.removeChild(btn);
    });

    num.parentNode.insertBefore(btn, num.nextSibling);
  },

  // ─── TTS (Text-to-Speech) ───
  stripHtml: function (html) {
    var temp = document.createElement("div");
    temp.innerHTML = html;

    // Remove furigana tags so it doesn't read the hiragana twice
    var rtElements = temp.querySelectorAll("rt");
    for (var i = 0; i < rtElements.length; i++) {
      rtElements[i].parentNode.removeChild(rtElements[i]);
    }

    // Unwrap ruby tags
    var rubyElements = temp.querySelectorAll("ruby");
    for (var j = 0; j < rubyElements.length; j++) {
      var ruby = rubyElements[j];
      var parent = ruby.parentNode;
      while (ruby.firstChild) {
        parent.insertBefore(ruby.firstChild, ruby);
      }
      parent.removeChild(ruby);
    }

    return temp.textContent || temp.innerText || "";
  },

  speakText: function (text) {
    if (!this.ttsEnabled) {
      console.log("TTS is disabled. Click the S button to enable.");
      return;
    }
    var cleanText = this.stripHtml(text);
    if (window.speechSynthesis) {
      var utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = "ja-JP";
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
      console.log("Speaking: " + cleanText);
    } else {
      console.log("Speech synthesis not supported in this browser.");
    }
  },

  attachTTSListeners: function () {
    var selectors = [
      "#tab-learn .jp-example",
      "#tab-cards .jp-text",
      "#tab-vocabulary .vocab-jp",
      "#tab-quiz .quiz-prompt",
      "#tab-grammar .jp-example",
    ];

    for (var s = 0; s < selectors.length; s++) {
      var elements = document.querySelectorAll(selectors[s]);
      for (var i = 0; i < elements.length; i++) {
        elements[i].removeEventListener("click", this._ttsHandler);
        elements[i].addEventListener("click", this._ttsHandler);
      }
    }
  },

  _ttsHandler: function (e) {
    e.stopPropagation();
    var text =
      this.getAttribute("data-jp") || this.innerHTML || this.textContent;
    App.speakText(text);
    this.classList.add("tts-speaking");
    setTimeout(
      function () {
        this.classList.remove("tts-speaking");
      }.bind(this),
      1500,
    );
  },
};

document.addEventListener("DOMContentLoaded", function () {
  App.init();
});
