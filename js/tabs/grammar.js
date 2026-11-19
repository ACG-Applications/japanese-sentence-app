var GrammarTab = {
  init: function () {
    this.render();
  },

  render: function () {
    var container = document.getElementById("tab-grammar");
    if (!container) return;
    var particles = window.MasterDictionary
      ? window.MasterDictionary.particles
      : [];
    var mistakes = window.MasterDictionary
      ? window.MasterDictionary.common_mistakes
      : [];
    var html = "";
    html += "<div style='max-width:800px;margin:0 auto;'>";
    html += "<h2>Grammar Reference</h2>";
    html +=
      "<p style='color:#666;margin-bottom:20px;'>Detailed explanations of Japanese grammar concepts.</p>";
    html += "<h3>Particles</h3>";
    if (particles.length === 0) {
      html += "<p>No particles data loaded.</p>";
    } else {
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        html +=
          "<div style='border:1px solid #eee;border-radius:8px;padding:16px;margin-bottom:12px;'>";
        html +=
          '<div style="font-size:20px;font-weight:700;font-family:var(--font-jp);">';
        html += p.kana;
        if (p.romaji) {
          html +=
            "<span style='font-size:14px;font-weight:400;color:#666;margin-left:8px;'>(" +
            p.romaji +
            ")</span>";
        }
        html += "</div>";
        if (p.role) {
          html += "<div style='font-weight:600;'>" + p.role + "</div>";
        }
        if (p.meaning) {
          html +=
            "<div style='color:#444;margin:4px 0;'>" + p.meaning + "</div>";
        }
        if (p.example) {
          var displayText = p.example.furigana || p.example.jp || "";
          html +=
            '<div style="background:#f7f7f7;padding:8px 12px;border-radius:4px;font-family:var(--font-jp);">';
          html += "<span class='jp-example'>" + displayText + "</span>";
          if (
            p.example.en &&
            (window.App ? App.translationVisible !== false : true)
          ) {
            html +=
              "<span style='font-family:inherit;color:#666;margin-left:12px;'>→ " +
              p.example.en +
              "</span>";
          }
          html += "</div>";
        }
        if (p.note) {
          html +=
            "<div style='color:#666;font-size:13px;margin-top:4px;'>💡 " +
            p.note +
            "</div>";
        }
        html += "</div>";
      }
    }
    if (mistakes.length > 0) {
      html += "<h3 style='margin-top:24px;'>Common Mistakes</h3>";
      for (var j = 0; j < mistakes.length; j++) {
        var m = mistakes[j];
        html +=
          "<div style='border-left:4px solid #c0392b;padding:8px 16px;margin-bottom:8px;background:#fdf2f2;'>";
        // Use furigana if available, otherwise use plain text
        var mistakeText = m.furigana_mistake || m.mistake;
        var correctionText = m.furigana_correction || m.correction;
        html +=
          "<div style='color:#c0392b;'>❌ <span class='jp-example'>" +
          mistakeText +
          "</span>";
        // Show English translation for the mistake if available
        if (
          m.mistake_en &&
          (window.App ? App.translationVisible !== false : true)
        ) {
          html +=
            "<span style='color:#666;font-size:13px;margin-left:8px;'>(" +
            m.mistake_en +
            ")</span>";
        }
        html += "</div>";
        html +=
          "<div style='color:#27ae60;'>✅ <span class='jp-example'>" +
          correctionText +
          "</span>";
        // Show English translation for the correction if available
        if (
          m.correction_en &&
          (window.App ? App.translationVisible !== false : true)
        ) {
          html +=
            "<span style='color:#666;font-size:13px;margin-left:8px;'>(" +
            m.correction_en +
            ")</span>";
        }
        html += "</div>";
        html +=
          "<div style='color:#666;font-size:13px;'>" +
          (m.explanation || m.note || "") +
          "</div>";
        html += "</div>";
      }
    }
    html += "</div>";
    container.innerHTML = html;
  },
};

if (typeof window !== "undefined") window.GrammarTab = GrammarTab;
