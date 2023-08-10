module.exports = {
  rules: {
    "custom-property-empty-line-before": "never",
    "custom-property-pattern": [
      "^(?:[a-z]|_)([a-z0-9]*)+|[a-z]+[A-Z]+[a-z]*$",
      {
        message: (val) =>
          `Expected custom property "${val}" to be kebab-case or camelCase`,
      },
    ],
    "custom-media-pattern": [
      "^([a-z0-9]*)+|[a-z]+[A-Z]+[a-z]*$",
      {
        message: (val) =>
          `Expected custom media "${val}" to be kebab-case or camelCase`,
      },
    ],
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
        message: (val) => `Expected class selector "${val}" to be kebab-case`,
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
    "value-keyword-case": [
      "lower",
      { ignoreFunctions: ["local"], ignoreProperties: ["/family/"] },
    ],
    "value-no-vendor-prefix": [
      true,
      {
        // `-webkit-box` is allowed as standard. See https://www.w3.org/TR/css-overflow-3/#webkit-line-clamp
        ignoreValues: ["box", "inline-box", "tap-highlight-color"],
      },
    ],
  },
};
