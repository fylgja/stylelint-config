module.exports = {
  rules: {
    "alpha-value-notation": null,
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment", "inside-block"],
        ignoreAtRules: ["import", "if", "else", "when"],
      },
    ],
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-space-before": "never",
    "block-closing-brace-newline-after": [
      "always-multi-line",
      { ignoreAtRules: ["if", "else", "when"] },
    ],
    "block-closing-brace-newline-before": "always-multi-line",
    "block-opening-brace-space-before": [
      "always",
      { ignoreAtRules: ["if", "else", "when"] },
    ],
    "color-hex-case": [
      "lower",
      { message: "Lowercase letters are easier to distinguish from numbers" },
    ],
    "color-hex-length": "short",
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment", "stylelint-commands"],
      },
    ],
    "custom-property-empty-line-before": "never",
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-trailing-semicolon": [
      "always",
      { ignore: ["single-declaration"] },
    ],
    "declaration-colon-newline-after": null,
    "declaration-empty-line-before": "never",
    "declaration-no-important": true,
    "font-family-no-duplicate-names": [true, { severity: "warning" }],
    "font-family-no-missing-generic-family-keyword": [
      true,
      { severity: "warning" },
    ],
    "function-url-no-scheme-relative": true,
    "hue-degree-notation": "number",
    indentation: 4,
    "import-notation": null,
    "max-line-length": [
      80,
      {
        ignorePattern: ["/stylelint-ignore/", "/https?://[0-9,a-z]*.*/"],
        severity: "warning",
      },
    ],
    "max-nesting-depth": 5,
    "media-feature-name-no-unknown": [true, { severity: "warning" }],
    "media-query-list-comma-newline-before": "never-multi-line",
    "no-descending-specificity": [true, { severity: "warning" }],
    "number-max-precision": 5,
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
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment", "inside-block"],
      },
    ],
    "selector-class-pattern": [
      "^(?:[a-z]|-)([a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be kebab-case`,
      },
    ],
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-max-attribute": 2,
    "selector-max-class": 4,
    "selector-max-compound-selectors": 4,
    "selector-max-id": 1,
    "selector-max-type": 2,
    "selector-max-universal": 2,
    "selector-no-qualifying-type": [true, { ignore: ["attribute", "class"] }],
    "selector-type-no-unknown": [true, { severity: "warning" }],
    "value-keyword-case": ["lower", { ignoreProperties: ["/family/"] }],
    "value-list-comma-newline-after": null,
    "value-list-comma-newline-before": "never-multi-line",
    "value-no-vendor-prefix": [
      true,
      {
        // `-webkit-box` is allowed as standard. See https://www.w3.org/TR/css-overflow-3/#webkit-line-clamp
        ignoreValues: ["box", "inline-box", "tap-highlight-color"],
      },
    ],
  },
};
