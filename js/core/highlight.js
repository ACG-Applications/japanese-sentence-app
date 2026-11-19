// Particle highlighting for the sentence app.
//
// These examples are written without spaces (私は学生です), so we cannot match
// space-delimited tokens the way n5-study-app does. Instead a card highlights only
// the particles its pattern actually teaches: MasterDictionary stores them in
// pattern.particles, and those examples are authored around exactly those particles.
// Matching every particle character instead would light up です, でき, もう and こと.
(function () {
  var ESCAPE = /[.*+?^${}()|[\]\\]/g;

  function escapeRe(s) {
    return String(s).replace(ESCAPE, "\\$&");
  }

  // Wrap declared particles inside a run of text, leaving markup alone.
  function highlightText(text, declared) {
    if (!text || !declared || !declared.length) return text;
    // Longest first so から wins over か.
    var list = declared
      .filter(function (p) {
        return p && String(p).length > 0;
      })
      .sort(function (a, b) {
        return String(b).length - String(a).length;
      });
    if (!list.length) return text;
    var re = new RegExp("(" + list.map(escapeRe).join("|") + ")", "g");
    return text.replace(re, '<span class="particle-highlight">$1</span>');
  }

  var ParticleHighlight = {
    /**
     * @param {string} html  example markup, possibly containing <ruby>/<rt>
     * @param {string[]} declared  particles this pattern teaches
     * @returns {string} html with <span class="particle-highlight"> around them
     */
    apply: function (html, declared) {
      if (!html) return html || "";
      var parts = String(html).split(/(<[^>]*>)/g);
      var out = [];
      var insideReading = 0;
      for (var i = 0; i < parts.length; i++) {
        var seg = parts[i];
        if (seg.charAt(0) === "<") {
          if (/^<rt[\s>]/i.test(seg)) insideReading++;
          else if (/^<\/rt>/i.test(seg)) insideReading = Math.max(0, insideReading - 1);
          out.push(seg);
          continue;
        }
        // Never touch the furigana reading itself.
        out.push(insideReading > 0 ? seg : highlightText(seg, declared));
      }
      return out.join("");
    },

    // Strip highlighting again (used when text is reused for speech or data attributes).
    strip: function (html) {
      return String(html || "").replace(/<\/?span[^>]*>/g, "");
    },
  };

  if (typeof window !== "undefined") window.ParticleHighlight = ParticleHighlight;
})();
