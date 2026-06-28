var Toggles = {
    translationVisible: true,
    ttsEnabled: false,

    init: function() {
        var transToggle = document.getElementById("translation-toggle");
        if (transToggle) {
            transToggle.addEventListener("click", this.toggleTranslation.bind(this));
        }
        var ttsToggle = document.getElementById("tts-toggle");
        if (ttsToggle) {
            ttsToggle.addEventListener("click", this.toggleTTS.bind(this));
        }
    },

    toggleTranslation: function() {
        this.translationVisible = !this.translationVisible;
        var toggle = document.getElementById("translation-toggle");
        var status = toggle ? toggle.querySelector(".toggle-status") : null;
        if (status) {
            status.textContent = this.translationVisible ? "ON" : "OFF";
            status.className = "toggle-status " + (this.translationVisible ? "on" : "off");
        }
        if (window.LearnTab) LearnTab.render();
        if (window.CardsTab) CardsTab.render();
        if (window.VocabularyTab) VocabularyTab.render();
        if (window.QuizTab) QuizTab.render();
        if (window.GrammarTab) GrammarTab.render();
    },

    toggleTTS: function() {
        this.ttsEnabled = !this.ttsEnabled;
        var toggle = document.getElementById("tts-toggle");
        var status = toggle ? toggle.querySelector(".toggle-status") : null;
        if (status) {
            status.textContent = this.ttsEnabled ? "ON" : "OFF";
            status.className = "toggle-status " + (this.ttsEnabled ? "on" : "off");
        }
    }
};

if (typeof window !== "undefined") window.Toggles = Toggles;