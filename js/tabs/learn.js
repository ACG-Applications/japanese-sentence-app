var LearnTab = {
    init: function() { this.render(); },

    render: function() {
        var container = document.getElementById("tab-learn");
        if (!container) return;
        var patterns = window.MasterDictionary ? window.MasterDictionary.patterns : [];
        if (patterns.length === 0) {
            container.innerHTML = "<p>No patterns loaded. Check console for errors.</p>";
            return;
        }
        var showFurigana = !document.body.classList.contains("furigana-hidden");
        var showTranslation = window.Toggles ? window.Toggles.translationVisible !== false : true;
        var html = '<div class="card-container">';
        for (var i = 0; i < patterns.length; i++) {
            html += LearnTab.renderPatternCard(patterns[i], showFurigana, showTranslation);
        }
        html += '</div>';
        container.innerHTML = html;
    },

    // Helper function for rendering a single pattern card
    renderPatternCard: function(p, showFurigana, showTranslation) {
        var html = '';
        html += '<div class="pattern-card">';
        html += '<div class="card-header">';
        html += '<span class="card-number">#' + p.number + '</span>';
        html += '<span class="card-category">' + p.category + '</span>';
        html += '</div>';
        html += '<div class="card-title">' + p.name + '</div>';
        html += '<div class="card-meaning">' + p.meaning + '</div>';
        html += '<div class="card-structure">' + p.structure + '</div>';
        html += '<div class="card-examples">';
        for (var i = 0; i < p.examples.length; i++) {
            var ex = p.examples[i];
            html += '<div class="card-example">';
            // Use furigana if available, otherwise use jp
            var displayText = ex.furigana || ex.jp;
            html += '<div class="jp-example">' + displayText + '</div>';
            if (showTranslation) {
                html += '<div class="en-example">→ ' + ex.en + '</div>';
            }
            html += '</div>';
        }
        html += '</div>';
        if (p.notes) {
            html += '<div class="card-notes">💡 ' + p.notes + '</div>';
        }
        if (p.conjugations) {
            html += '<div class="card-conjugations"><strong>Conjugations:</strong>';
            var keys = Object.keys(p.conjugations);
            for (var j = 0; j < keys.length; j++) {
                var key = keys[j];
                var value = p.conjugations[key];
                html += '<div class="conj-row"><span class="conj-label">' + key + ':</span> ';
                var subKeys = Object.keys(value);
                var parts = [];
                for (var k = 0; k < subKeys.length; k++) {
                    parts.push(subKeys[k] + ': ' + value[subKeys[k]]);
                }
                html += parts.join(' | ');
                html += '</div>';
            }
            html += '</div>';
        }
        html += '</div>';
        return html;
    }
};

if (typeof window !== "undefined") window.LearnTab = LearnTab;