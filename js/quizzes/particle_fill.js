var ParticleFillQuiz = {
    generate: function(patterns) {
        var questions = [];
        for (var i = 0; i < patterns.length; i++) {
            var p = patterns[i];
            if (p.particles && p.particles.length > 0 && p.examples) {
                for (var j = 0; j < p.examples.length; j++) {
                    var ex = p.examples[j];
                    var jp = ex.furigana || ex.jp;
                    var particle = p.particles[0];
                    if (jp && particle) {
                        var prompt = jp.replace(particle, "___");
                        questions.push({
                            type: "particle_fill",
                            question: "Fill in the missing particle:",
                            prompt: prompt,
                            options: ["は", "が", "を", "に", "で", "へ"],
                            correct: p.particles.indexOf(particle),
                            explanation: "The particle " + particle + " marks the " + p.meaning
                        });
                    }
                }
            }
        }
        return questions;
    }
};

if (typeof window !== "undefined") window.ParticleFillQuiz = ParticleFillQuiz;