module.exports = {
  extends: ["../index.js"],
  plugins: ["stylelint-scss"],
  rules: {
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-else-if-parentheses-space-before": "always",
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-if-no-null": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/at-mixin-parentheses-space-before": "never",
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-newline-after": null,
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/function-color-relative": [
      true,
      {
        severity: "warning",
        message: "Use the new scss color functions instead!"
      }
    ],
    "scss/media-feature-value-dollar-variable": [
      "always",
      { severity: "warning" }
    ],
    "scss/operator-no-newline-after": null,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": null,
    "scss/selector-no-redundant-nesting-selector": true
  }
};
