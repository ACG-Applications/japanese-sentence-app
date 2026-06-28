var Furigana = {
    visible: true,

    init: function() {
        var toggle = document.getElementById("furigana-toggle");
        if (toggle) {
            toggle.addEventListener("click", this.toggle.bind(this));
        }
        document.body.classList.add("furigana-visible");
        document.body.classList.remove("furigana-hidden");
        this.updateToggleUI(true);
    },

    toggle: function() {
        this.visible = !this.visible;
        if (this.visible) {
            document.body.classList.remove("furigana-hidden");
            document.body.classList.add("furigana-visible");
        } else {
            document.body.classList.add("furigana-hidden");
            document.body.classList.remove("furigana-visible");
        }
        this.updateToggleUI(this.visible);
        if (window.LearnTab) LearnTab.render();
        if (window.CardsTab) CardsTab.render();
        if (window.VocabularyTab) VocabularyTab.render();
        if (window.QuizTab) QuizTab.render();
    },

    updateToggleUI: function(visible) {
        var toggle = document.getElementById("furigana-toggle");
        if (toggle) {
            var status = toggle.querySelector(".toggle-status");
            if (status) {
                status.textContent = visible ? "ON" : "OFF";
                status.className = "toggle-status " + (visible ? "on" : "off");
            }
        }
    }
};

if (typeof window !== "undefined") window.Furigana = Furigana;