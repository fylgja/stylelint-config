module.exports = {
  extends: ["../index.js"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["plugin"],
        severity: "warning"
      }
    ],
    "media-feature-name-no-unknown": null,
    "no-extra-semicolons": null,
    "selector-max-compound-selectors": 6,
    "selector-max-id": 1
  }
};
