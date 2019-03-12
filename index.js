module.exports = {
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["inside-block", "blockless-after-same-name-blockless"],
        ignore: ["after-comment", "first-nested"],
        ignoreAtRules: ["import", "if", "else"]
      }
    ],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "for",
          "each",
          "if",
          "else",
          "mixin",
          "/^mixin-/",
          "include"
        ]
      }
    ],
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": [
      "always-multi-line",
      {
        ignoreAtRules: ["if", "else"]
      }
    ],
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-after": "always-single-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-newline-before": null,
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": [
      "lower",
      {
        message: "Lowercase letters are easier to distinguish from numbers"
      }
    ],
    "color-hex-length": "short",
    "color-no-hex": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment", "stylelint-commands"]
      }
    ],
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "custom-property-empty-line-before": "never",
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"]
      }
    ],
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "declaration-no-important": true,
    "font-family-name-quotes": [
      "always-where-recommended",
      { severity: "warning" }
    ],
    "font-family-no-duplicate-names": [
      true,
      {
        severity: "warning"
      }
    ],
    "font-family-no-missing-generic-family-keyword": [
      true,
      {
        severity: "warning"
      }
    ],
    "font-weight-notation": [
      "numeric",
      { ignore: ["relative"], severity: "warning" }
    ],
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": [
      "lower",
      {
        ignoreFunctions: ["/^get.*$/"]
      }
    ],
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    indentation: null,
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-line-length": [
      80,
      {
        ignorePattern: ["/https?://[0-9,a-z]*.*/"],
        severity: "warning"
      }
    ],
    "max-nesting-depth": 5,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": [
      true,
      {
        severity: "warning"
      }
    ],
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "no-descending-specificity": [
      true,
      {
        severity: "warning"
      }
    ],
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-first-line": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "never",
    "number-max-precision": 5,
    "number-no-trailing-zeros": true,
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: ["appearance"]
      }
    ],
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment", "inside-block"]
      }
    ],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": 2,
    "selector-max-class": 4,
    "selector-max-compound-selectors": 4,
    "selector-max-empty-lines": 0,
    "selector-max-id": 0,
    "selector-max-specificity": "0,4,2",
    "selector-max-type": 2,
    "selector-max-universal": 1,
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute", "class"]
      }
    ],
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": [true, { severity: "warning" }],
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": "double",
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": [
      true,
      {
        ignoreValues: ["tap-highlight-color"]
      }
    ]
  }
};
