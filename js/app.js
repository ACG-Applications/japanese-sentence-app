var App = {
    patterns: [],
    currentTab: "learn",
    masterDictionary: null,

    init: function() {
        this.masterDictionary = window.MasterDictionary || {};
        this.patterns = this.masterDictionary.patterns || [];

        if (window.Furigana) Furigana.init();
        if (window.Toggles) Toggles.init();
        if (window.Router) Router.init();
        if (window.LearnTab) LearnTab.init();
        if (window.CardsTab) CardsTab.init();
        if (window.QuizTab) QuizTab.init();
        if (window.VocabularyTab) VocabularyTab.init();
        if (window.GrammarTab) GrammarTab.init();

        this.updateProgress();
        console.log("Japanese Study App initialized! Loaded " + this.patterns.length + " patterns");
        console.log("Patterns:", this.patterns);
    },

    updateProgress: function() {
        var count = document.getElementById("progress-count");
        if (count) count.textContent = "0/" + this.patterns.length;
    }
};

document.addEventListener("DOMContentLoaded", function() { App.init(); });