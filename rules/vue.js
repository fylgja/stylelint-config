module.exports = {
  extends: ["stylelint-config-html/vue"],
  customSyntax: "postcss-html",
  rules: {
    "value-keyword-case": [
      "lower",
      {
        ignoreFunctions: ["v-bind"],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep", "global"],
      },
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep", "v-global", "v-slotted"],
      },
    ],
  },
};
