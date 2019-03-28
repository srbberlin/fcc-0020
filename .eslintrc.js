module.exports = {
    "parserOptions": { 
        "sourceType": "module",
        "ecmaFeatures": {
            jsx: true
        }
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "angular": true,
        "React": true,
        "ReactDOM": true,
        "d3": true,
        "topojson": true,
        "__dirname": true
    },
    "rules": {
        "no-console":0,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
}
