var QuizTab = {
    mode: "pattern_match",
    patterns: [],
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false,
    lastCorrect: false,

    init: function() {
        this.patterns = window.MasterDictionary ? window.MasterDictionary.patterns : [];
        this.loadQuestions();
        this.render();
    },

    loadQuestions: function() {
        var quizData = window.MasterDictionary ? window.MasterDictionary.quiz_questions : {};
        this.questions = quizData[this.mode] || this.generateQuestions();
    },

    generateQuestions: function() {
        var result = [];
        for (var i = 0; i < this.patterns.length; i++) {
            var p = this.patterns[i];
            result.push({
                question: "What is the meaning of '" + p.name + "'?",
                prompt: "",
                options: [p.meaning, "A different meaning", "Another option", "Something else"],
                correct: 0,
                explanation: p.notes || p.meaning
            });
        }
        return result;
    },

    render: function() {
        var container = document.getElementById("tab-quiz");
        if (!container) return;
        if (this.questions.length === 0) {
            container.innerHTML = "<p>No quiz questions available.</p>";
            return;
        }
        var q = this.questions[this.currentIndex];
        var total = this.questions.length;
        var modes = ["pattern_match", "particle_fill", "conjugation", "translation"];
        var html = "";
        html += "<div class='quiz-container'>";
        html += "<div class='quiz-mode-selector'>";
        for (var i = 0; i < modes.length; i++) {
            var m = modes[i];
            html += "<button class='quiz-mode-btn" + (m === this.mode ? " active" : "") + "' onclick='QuizTab.setMode(\"" + m + "\")'>";
            html += m.replace("_", " ");
            html += "</button>";
        }
        html += "</div>";
        html += "<div class='quiz-header'>";
        html += "<div class='quiz-progress'>Question <strong>" + (this.currentIndex + 1) + "</strong> of " + total + "</div>";
        html += "<div class='quiz-progress'>Score: <strong>" + this.score + "</strong></div>";
        html += "</div>";
        html += "<div class='quiz-question'>" + q.question + "</div>";
        if (q.prompt) {
            html += "<div class='quiz-prompt'>" + q.prompt + "</div>";
        }
        html += "<div class='quiz-options'>";
        var labels = ["A", "B", "C", "D"];
        for (var j = 0; j < q.options.length; j++) {
            var opt = q.options[j];
            var cls = "quiz-option";
            if (this.answered) {
                cls += j === q.correct ? " correct" : "";
                cls += " disabled";
            }
            html += "<button class='" + cls + "' onclick='QuizTab.selectOption(" + j + ")'" + (this.answered ? " disabled" : "") + ">";
            html += "<span class='option-label'>" + labels[j] + ".</span> " + opt;
            html += "</button>";
        }
        html += "</div>";
        if (this.answered) {
            html += "<div class='quiz-feedback " + (this.lastCorrect ? "correct" : "wrong") + "'>";
            html += (this.lastCorrect ? "✅ Correct!" : "❌ Incorrect.") + " " + (q.explanation || "");
            html += "</div>";
        }
        html += "<div class='quiz-actions'>";
        html += "<button class='btn btn-primary' onclick='QuizTab.nextQuestion()'>";
        html += this.answered ? "Next →" : "Check Answer";
        html += "</button>";
        html += "</div>";
        html += "</div>";
        container.innerHTML = html;
    },

    setMode: function(mode) {
        this.mode = mode;
        this.currentIndex = 0;
        this.score = 0;
        this.answered = false;
        this.loadQuestions();
        this.render();
    },

    selectOption: function(index) {
        if (this.answered) return;
        this.answered = true;
        var q = this.questions[this.currentIndex];
        this.lastCorrect = index === q.correct;
        if (this.lastCorrect) this.score++;
        this.render();
    },

    nextQuestion: function() {
        if (!this.answered) {
            return;
        }
        this.answered = false;
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.render();
        } else {
            this.renderResults();
        }
    },

    renderResults: function() {
        var container = document.getElementById("tab-quiz");
        var total = this.questions.length;
        var pct = Math.round((this.score / total) * 100);
        var msg = pct >= 80 ? "Excellent work! Keep it up!" :
                  pct >= 60 ? "Good job! Keep practicing!" :
                  "Keep studying! You'll get there!";
        var html = "";
        html += "<div class='quiz-container'>";
        html += "<div class='quiz-result'>";
        html += "<div class='score'>" + this.score + "/" + total + "</div>";
        html += "<div class='score-label'>" + pct + "%</div>";
        html += "<p style='margin:16px 0;'>" + msg + "</p>";
        html += "<button class='btn btn-primary' onclick='QuizTab.reset()'>Retry Quiz</button>";
        html += "</div>";
        html += "</div>";
        container.innerHTML = html;
    },

    reset: function() {
        this.currentIndex = 0;
        this.score = 0;
        this.answered = false;
        this.render();
    }
};

if (typeof window !== "undefined") window.QuizTab = QuizTab;