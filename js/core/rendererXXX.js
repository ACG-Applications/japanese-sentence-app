var Renderer = {
    renderPatternCard: function(pattern, showFurigana, showTranslation) {
        var html = "";
        html += "<div class="pattern-card" data-pattern-id="" + pattern.id + "">";
        html += "<div class="card-header">";
        html += "<span class="card-number">#" + pattern.number + "</span>";
        html += "<span class="card-category">" + pattern.category + "</span>";
        html += "</div>";
        html += "<div class="card-title">" + pattern.name + "</div>";
        html += "<div class="card-meaning">" + pattern.meaning + "</div>";
        html += "<div class="card-structure">" + pattern.structure + "</div>";
        html += "<div class="card-examples">";
        if (pattern.examples) {
            for (var i = 0; i < pattern.examples.length; i++) {
                var ex = pattern.examples[i];
                html += "<div class="card-example">";
                html += "<div class="jp-example">" + (ex.furigana || ex.jp) + "</div>";
                if (showTranslation !== false) {
                    html += "<div class="en-example">-> " + ex.en + "</div>";
                }
                html += "</div>";
            }
        }
        html += "</div>";
        if (pattern.notes) {
            html += "<div class="card-notes">[i] " + pattern.notes + "</div>";
        }
        if (pattern.conjugations) {
            html += "<div class="card-conjugations"><strong>Conjugations:</strong>";
            var keys = Object.keys(pattern.conjugations);
            for (var j = 0; j < keys.length; j++) {
                var key = keys[j];
                var value = pattern.conjugations[key];
                html += "<div class="conj-row"><span class="conj-label">" + key + ":</span> ";
                var subKeys = Object.keys(value);
                var parts = [];
                for (var k = 0; k < subKeys.length; k++) {
                    parts.push(subKeys[k] + ": " + value[subKeys[k]]);
                }
                html += parts.join(" | ");
                html += "</div>";
            }
            html += "</div>";
        }
        html += "</div>";
        return html;
    },

    renderAllPatterns: function(patterns, showFurigana, showTranslation) {
        var html = "";
        for (var i = 0; i < patterns.length; i++) {
            html += this.renderPatternCard(patterns[i], showFurigana, showTranslation);
        }
        return html;
    }
};

if (typeof window !== "undefined") window.Renderer = Renderer;