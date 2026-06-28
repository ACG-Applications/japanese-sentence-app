var QuizEngine = {
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false,

    loadQuestions: function(questions) {
        this.questions = questions || [];
        this.currentIndex = 0;
        this.score = 0;
        this.answered = false;
        return this;
    },

    getCurrentQuestion: function() {
        return this.questions[this.currentIndex] || null;
    },

    selectOption: function(index) {
        if (this.answered) return null;
        this.answered = true;
        var q = this.getCurrentQuestion();
        var correct = index === q.correct;
        if (correct) this.score++;
        return { correct: correct, explanation: q.explanation };
    },

    next: function() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.answered = false;
            return true;
        }
        return false;
    },

    getResults: function() {
        return {
            score: this.score,
            total: this.questions.length,
            percentage: Math.round((this.score / this.questions.length) * 100)
        };
    }
};

if (typeof window !== "undefined") window.QuizEngine = QuizEngine;