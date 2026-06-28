var Helpers = {
    escapeHtml: function(str) {
        if (!str) return "";
        return str.replace(/[&<>"]/g, function(m) {
            if (m === "&") return "&amp;";
            if (m === "<") return "&lt;";
            if (m === ">") return "&gt;";
            if (m === """) return "&quot;";
            return m;
        });
    }
};

if (typeof window !== "undefined") window.Helpers = Helpers;