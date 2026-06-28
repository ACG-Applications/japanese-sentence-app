var ConjugationQuiz = {
    generate: function(verbs) {
        return [
            {
                type: "conjugation",
                question: "What is the past tense of 食べる?",
                prompt: "食べる -> ?",
                options: ["食べた", "食べました", "食べて", "食べる"],
                correct: 0,
                explanation: "食べる is an ichidan verb -> た-form is 食べた"
            }
        ];
    }
};

if (typeof window !== "undefined") window.ConjugationQuiz = ConjugationQuiz;