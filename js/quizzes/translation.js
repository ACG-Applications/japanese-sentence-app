var TranslationQuiz = {
    generate: function(patterns) {
        var questions = [];
        for (var i = 0; i < patterns.length; i++) {
            var p = patterns[i];
            if (p.examples) {
                for (var j = 0; j < p.examples.length; j++) {
                    var ex = p.examples[j];
                    questions.push({
                        type: "translation",
                        question: "Translate: '" + ex.en + "'",
                        prompt: "",
                        options: [
                            ex.furigana || ex.jp,
                            "Something else",
                            "Another option",
                            "A different translation"
                        ],
                        correct: 0,
                        explanation: "Correct translation: " + (ex.furigana || ex.jp)
                    });
                }
            }
        }
        return questions;
    }
};

if (typeof window !== "undefined") window.TranslationQuiz = TranslationQuiz;