var Furigana = {
    visible: true,

    init: function() {
        // App.js handles the click listener now
        document.body.classList.add("furigana-visible");
        document.body.classList.remove("furigana-hidden");
        this.updateToggleUI(true);
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