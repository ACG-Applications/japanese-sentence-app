var Storage = {
    get: function(key, defaultVal) {
        try {
            var val = localStorage.getItem("japanese_" + key);
            return val ? JSON.parse(val) : defaultVal;
        } catch {
            return defaultVal;
        }
    },

    set: function(key, value) {
        try {
            localStorage.setItem("japanese_" + key, JSON.stringify(value));
            return true;
        } catch {
            return false;
        }
    }
};

if (typeof window !== "undefined") window.Storage = Storage;