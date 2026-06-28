var MultipleChoiceQuiz = {
    generate: function(patterns) {
        var result = [];
        for (var i = 0; i < patterns.length; i++) {
            var p = patterns[i];
            result.push({
                type: "multiple_choice",
                question: "What is the meaning of '" + p.name + "'?",
                prompt: "",
                options: [p.meaning, "To do something", "A type of food", "A place"],
                correct: 0,
                explanation: p.notes || p.meaning
            });
        }
        return result;
    }
};

if (typeof window !== "undefined") window.MultipleChoiceQuiz = MultipleChoiceQuiz;