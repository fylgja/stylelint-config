const postcssScss = require("postcss-scss");
const ignoreAtRules = ["tailwind", "apply", "layer", "screen", "config"];
const ignoreFunctions = ["theme"];

module.exports = {
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules }],
    "function-no-unknown": [true, { ignoreFunctions }],
    "import-notation": "string",
  },
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: postcssScss,
      plugins: ["stylelint-scss"],
      rules: {
        "at-rule-no-unknown": null,
        "function-no-unknown": null,
        "scss/at-rule-no-unknown": [true, { ignoreAtRules }],
        "scss/function-no-unknown": [true, { ignoreFunctions }],
      },
    },
  ],
};
