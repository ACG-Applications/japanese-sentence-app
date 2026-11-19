var VocabularyTab = {
  filter: "all",
  searchTerm: "",

  init: function () {
    this.render();
  },

  render: function () {
    var container = document.getElementById("tab-vocabulary");
    if (!container) return;
    var vocab = this.getVocab();
    var filtered = vocab.slice();
    if (this.filter !== "all") {
      filtered = filtered.filter(function (v) {
        return v.category === VocabularyTab.filter;
      });
    }
    if (this.searchTerm) {
      var term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(function (v) {
        return (
          (v.jp && v.jp.includes(term)) ||
          (v.kana && v.kana.includes(term)) ||
          (v.en && v.en.toLowerCase().includes(term))
        );
      });
    }
    var categories = ["all"];
    var seen = {};
    for (var i = 0; i < vocab.length; i++) {
      var cat = vocab[i].category || "uncategorized";
      if (!seen[cat]) {
        seen[cat] = true;
        categories.push(cat);
      }
    }
    var html = "";
    html += "<div class='vocab-container'>";
    html += "<div class='vocab-search'>";
    html +=
      "<input type='text' placeholder='Search vocabulary...' oninput='VocabularyTab.search(this.value)' value='" +
      this.searchTerm +
      "'>";
    html += "<div class='vocab-filters'>";
    for (var j = 0; j < categories.length; j++) {
      var cat = categories[j];
      html +=
        "<button class='vocab-filter-btn" +
        (cat === this.filter ? " active" : "") +
        "' onclick='VocabularyTab.setFilter(\"" +
        cat +
        "\")'>";
      html += cat;
      html += "</button>";
    }
    html += "</div>";
    html += "</div>";
    html += "<div class='vocab-list'>";
    if (filtered.length === 0) {
      html += "<p>No vocabulary found.</p>";
    } else {
      for (var k = 0; k < filtered.length; k++) {
        var v = filtered[k];
        html += "<div class='vocab-item'>";
        html +=
          "<span class='vocab-jp'>" +
          (v.furigana || v.jp || v.kanji || "") +
          "</span>";
        html += "<span class='vocab-kana'>" + (v.kana || "") + "</span>";
        if (window.App ? App.translationVisible !== false : true) {
          html +=
            "<span class='vocab-en'>" + (v.en || v.meaning || "") + "</span>";
        }
        html +=
          "<span class='vocab-tag'>" +
          (v.category || "uncategorized") +
          "</span>";
        html += "</div>";
      }
    }
    html += "</div>";
    html +=
      "<p style='margin-top:12px;color:#666;font-size:13px;'>Showing " +
      filtered.length +
      " of " +
      vocab.length +
      " entries</p>";
    html += "</div>";
    container.innerHTML = html;
  },

  getVocab: function () {
    var md = window.MasterDictionary || {};
    var result = [];
    // Every vocabulary group in the dictionary, so nothing is silently left out.
    var groups = [
      { data: md.verbs, label: "verb" },
      { data: md.nouns, label: null },
      { data: md.adjectives, label: null },
      { data: md.adverbs, label: null },
      { data: md.expressions, label: "expression" },
    ];
    for (var g = 0; g < groups.length; g++) {
      var data = groups[g].data || {};
      var keys = Object.keys(data);
      for (var i = 0; i < keys.length; i++) {
        var arr = data[keys[i]];
        if (!Array.isArray(arr)) continue;
        for (var j = 0; j < arr.length; j++) {
          var entry = arr[j];
          if (!entry) continue;
          // Copy rather than tag the dictionary entry, so tabs never mutate the data.
          var copy = {};
          for (var field in entry) {
            if (Object.prototype.hasOwnProperty.call(entry, field)) copy[field] = entry[field];
          }
          copy.category = groups[g].label || keys[i];
          result.push(copy);
        }
      }
    }
    return result;
  },

  setFilter: function (filter) {
    this.filter = filter;
    this.render();
  },

  search: function (term) {
    this.searchTerm = term;
    this.render();
  },
};

if (typeof window !== "undefined") window.VocabularyTab = VocabularyTab;
