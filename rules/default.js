module.exports = {
  rules: {
    "custom-property-empty-line-before": "never",
    "declaration-empty-line-before": "never",
    "declaration-no-important": true,
    "font-family-no-duplicate-names": [true, { severity: "warning" }],
    "font-family-no-missing-generic-family-keyword": [
      true,
      { severity: "warning" },
    ],
    "function-url-no-scheme-relative": true,
    "hue-degree-notation": "number",
    "max-nesting-depth": 5,
    "media-feature-name-no-unknown": [true, { severity: "warning" }],
    "no-descending-specificity": [true, { severity: "warning" }],
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: [
          "appearance",
          "text-size-adjust",
          "tap-highlight-color",
        ],
      },
    ],
    "selector-class-pattern": [
      "^(?:[a-z]|-)([a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be kebab-case`,
      },
    ],
    "selector-max-attribute": 2,
    "selector-max-class": 4,
    "selector-max-compound-selectors": 4,
    "selector-max-id": 1,
    "selector-max-type": 2,
    "selector-max-universal": 2,
    "selector-no-qualifying-type": [true, { ignore: ["attribute", "class"] }],
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
    "value-keyword-case": ["lower", { camelCaseSvgKeywords: true }],
    "value-no-vendor-prefix": [
      true,
      {
        // `-webkit-box` is allowed as standard. See https://www.w3.org/TR/css-overflow-3/#webkit-line-clamp
        ignoreValues: ["box", "inline-box", "tap-highlight-color"],
      },
    ],
  },
};
