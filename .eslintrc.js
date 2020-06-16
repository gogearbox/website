module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "airbnb",
        'prettier'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "react/jsx-props-no-spreading": "off",
        "react/no-array-index-key": "off",
        "react/jsx-filename-extension": "off",
        "react/require-default-props": "off",
        "import/no-unresolved": "off",
        "prettier/prettier": "error"
    }
};
