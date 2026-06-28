var Router = {
    currentTab: "learn",

    init: function() {
        var navBtns = document.querySelectorAll(".nav-btn");
        for (var i = 0; i < navBtns.length; i++) {
            navBtns[i].addEventListener("click", function() {
                Router.navigate(this.dataset.tab);
            });
        }
    },

    navigate: function(tab) {
        this.currentTab = tab;
        var navBtns = document.querySelectorAll(".nav-btn");
        for (var i = 0; i < navBtns.length; i++) {
            navBtns[i].classList.toggle("active", navBtns[i].dataset.tab === tab);
        }
        var contents = document.querySelectorAll(".tab-content");
        for (var j = 0; j < contents.length; j++) {
            contents[j].classList.toggle("active", contents[j].id === "tab-" + tab);
        }
        switch(tab) {
            case "learn": if (window.LearnTab) LearnTab.render(); break;
            case "cards": if (window.CardsTab) CardsTab.render(); break;
            case "quiz": if (window.QuizTab) QuizTab.render(); break;
            case "vocabulary": if (window.VocabularyTab) VocabularyTab.render(); break;
            case "grammar": if (window.GrammarTab) GrammarTab.render(); break;
        }
    }
};

if (typeof window !== "undefined") window.Router = Router;