var TTS = {
    synth: null,

    init: function() {
        this.synth = window.speechSynthesis;
    },

    speak: function(text) {
        if (!this.synth) this.init();
        if (!this.synth) return;
        if (window.Toggles && window.Toggles.ttsEnabled !== true) return;
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "ja-JP";
        utterance.rate = 0.9;
        utterance.pitch = 1;
        this.synth.speak(utterance);
    }
};

if (typeof window !== "undefined") window.TTS = TTS;