var CardsTab = {
  patterns: [],
  currentIndex: 0,
  flipped: false,

  init: function () {
    this.patterns = window.MasterDictionary
      ? window.MasterDictionary.patterns
      : [];
    this.render();
  },

  render: function () {
    var container = document.getElementById("tab-cards");
    if (!container) return;
    if (this.patterns.length === 0) {
      container.innerHTML = "<p>No patterns loaded.</p>";
      return;
    }
    var p = this.patterns[this.currentIndex];
    var total = this.patterns.length;
    var html = "";
    html += "<div class='flashcard-container'>";
    html +=
      "<div class='flashcard" +
      (this.flipped ? " flipped" : "") +
      "' onclick='CardsTab.flip()'>";
    html += "<div class='flashcard-inner'>";

    // ─── FRONT FACE ───
    html += "<div class='flashcard-front'>";
    html +=
      "<div style='font-size:14px;color:#666;margin-bottom:12px;'>" +
      (this.currentIndex + 1) +
      " / " +
      total +
      " | " +
      p.category +
      "</div>";
    var displayText =
      p.examples && p.examples[0]
        ? p.examples[0].furigana || p.examples[0].jp
        : p.name;
    var cleanText = this.stripHtml(displayText);
    html +=
      "<div class='jp-text' data-jp='" +
      cleanText +
      "'>" +
      displayText +
      "</div>";
    if (window.App ? App.translationVisible !== false : true) {
      html +=
        "<div class='en-text'>" +
        (p.examples && p.examples[0] ? p.examples[0].en : p.meaning) +
        "</div>";
    }
    html +=
      "<div style='font-size:13px;color:#999;margin-top:8px;'>Tap to flip | Click the Japanese text to hear it</div>";
    html += "</div>"; // CLOSE FRONT FACE

    // ─── BACK FACE ───
    html += "<div class='flashcard-back'>";
    html +=
      "<div style='font-size:18px;font-weight:700;margin-bottom:8px;'>" +
      p.name +
      "</div>";
    html +=
      "<div style='font-size:14px;color:#666;margin-bottom:8px;'>" +
      p.structure +
      "</div>";
    html += "<div style='font-size:14px;color:#333;'>" + p.meaning + "</div>";
    if (p.notes) {
      html +=
        "<div style='font-size:13px;color:#999;margin-top:8px;'>" +
        p.notes +
        "</div>";
    }
    html += "</div>"; // CLOSE BACK FACE

    html += "</div>"; // CLOSE FLASHCARD-INNER
    html += "</div>"; // CLOSE FLASHCARD

    // ─── CONTROLS ───
    html += "<div class='flashcard-controls'>";
    html +=
      "<button class='btn btn-secondary' onclick='CardsTab.prev()'>Previous</button>";
    html +=
      "<button class='btn btn-primary' onclick='CardsTab.flip()'>Flip</button>";
    html +=
      "<button class='btn btn-secondary' onclick='CardsTab.next()'>Next</button>";
    html += "</div>";

    html += "</div>"; // CLOSE FLASHCARD-CONTAINER
    container.innerHTML = html;
  },

  // ─── TTS: Strip HTML tags for clean speech (removes furigana) ───
  stripHtml: function (html) {
    var temp = document.createElement("div");
    temp.innerHTML = html;
    var rtElements = temp.querySelectorAll("rt");
    for (var i = 0; i < rtElements.length; i++) {
      rtElements[i].parentNode.removeChild(rtElements[i]);
    }
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

  flip: function () {
    this.flipped = !this.flipped;
    this.render();
  },

  next: function () {
    if (this.currentIndex < this.patterns.length - 1) {
      this.currentIndex++;
      this.flipped = false;
      this.render();
    }
  },

  prev: function () {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.flipped = false;
      this.render();
    }
  },
};

if (typeof window !== "undefined") window.CardsTab = CardsTab;
