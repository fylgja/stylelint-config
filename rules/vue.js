const defaultRules = require("./default");
const valueKeywordCaseOptions = defaultRules.rules["value-keyword-case"][1];

module.exports = {
  customSyntax: "postcss-html",
  rules: {
    "function-no-unknown": [true, { ignoreFunctions: ["v-bind"] }],
    "value-keyword-case": [
      "lower",
      {
        ...valueKeywordCaseOptions,
        ignoreFunctions: [...valueKeywordCaseOptions.ignoreFunctions, "v-bind"],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["deep", "global", "slotted"] },
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      { ignorePseudoElements: ["v-deep", "v-global", "v-slotted"] },
    ],
  },
};
