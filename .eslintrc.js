module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-global-assign": 2,
        "indent": [
            2,
            4
        ],
        "linebreak-style": [
            2,
            /*"unix",*/
            "windows"
        ],
        "quotes": [
            2,
            "single"
        ],
        "semi": [
            2,
            "always"
        ],
        "curly": [
            2,
            "all"
        ],
        "camelcase": [
            2,
            {
                "properties": "always"
            }
        ],
        "eqeqeq": [
            2,
            "smart"
        ],
        "one-var-declaration-per-line": [
            2,
            "always"
        ],
        "new-cap": 2
    },
    "globals": {
        "Mozilla": true,
        "dataLayer": true,
        "jQuery": true,
        "Clipboard": true,
        "KonamIRL": true,
        "site": true
    }
};
