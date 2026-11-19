var LearnTab = {
  init: function () {
    this.render();
  },

  render: function () {
    var container = document.getElementById("tab-learn");
    if (!container) return;
    var patterns = window.MasterDictionary
      ? window.MasterDictionary.patterns
      : [];
    if (patterns.length === 0) {
      container.innerHTML =
        "<p>No patterns loaded. Check console for errors.</p>";
      return;
    }
    var showFurigana = !document.body.classList.contains("furigana-hidden");
    var showTranslation = window.App ? App.translationVisible !== false : true;
    var html = '<div class="card-container">';
    for (var i = 0; i < patterns.length; i++) {
      html += LearnTab.renderPatternCard(
        patterns[i],
        showFurigana,
        showTranslation,
      );
    }
    html += "</div>";
    container.innerHTML = html;
  },
  // Helper function for rendering a single pattern card
  renderPatternCard: function (p, showFurigana, showTranslation) {
    var html = "";
    html += '<div class="pattern-card">';
    html += '<div class="card-header">';
    html += '<span class="card-number">#' + p.number + "</span>";
    html += '<span class="card-category">' + p.category + "</span>";
    html += "</div>";
    html += '<div class="card-title">' + p.name + "</div>";
    html += '<div class="card-meaning">' + p.meaning + "</div>";
    html += '<div class="card-structure">' + p.structure + "</div>";
    html += '<div class="card-examples">';

    // Helper: render a single example block
    var renderExample = function (ex) {
      var h = '<div class="card-example">';
      var displayText = ex.furigana || ex.jp;
      if (window.ParticleHighlight) {
        displayText = ParticleHighlight.apply(displayText, p.particles || []);
      }
      h += '<div class="jp-example">' + displayText + "</div>";
      if (showTranslation) {
        h += '<div class="en-example">→ ' + ex.en + "</div>";
      }
      h += "</div>";
      return h;
    };

    if (p.number === 1 && p.examples.length >= 3) {
      // Card #1 only: a 2-up grid, so noun / na-adj / i-adj / plain stay compact for
      // printing instead of stacking into one tall column.
      for (var r = 0; r < p.examples.length; r += 2) {
        html += '<div class="example-row">';
        html += renderExample(p.examples[r]);
        if (p.examples[r + 1]) html += renderExample(p.examples[r + 1]);
        html += "</div>";
      }
    } else {
      // All other cards: unchanged stacked layout.
      for (var i = 0; i < p.examples.length; i++) {
        html += renderExample(p.examples[i]);
      }
    }

    html += "</div>";
    if (p.notes) {
      html += '<div class="card-notes">💡 ' + p.notes + "</div>";
    }
    if (p.conjugations) {
      html += '<div class="card-conjugations"><strong>Conjugations:</strong>';
      var keys = Object.keys(p.conjugations);
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        var value = p.conjugations[key];
        html +=
          '<div class="conj-row"><span class="conj-label">' + key + ":</span> ";
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
};

if (typeof window !== "undefined") window.LearnTab = LearnTab;
