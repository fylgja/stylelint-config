const postcssScss = require("postcss-scss");

module.exports = {
  customSyntax: postcssScss,
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
        ignoreAtRules: ["import", "if", "else"],
      },
    ],
    "scss/dollar-variable-colon-newline-after": null, // Allow multiline
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/function-color-relative": [
      true,
      { message: "Use the new scss color functions instead!" },
    ],
    "scss/dollar-variable-empty-line-before": [
      "always",
      {
        except: ["after-dollar-variable", "first-nested"],
        ignore: [
          "after-comment",
          "after-dollar-variable",
          "inside-single-line-block",
        ],
      },
    ],
    "scss/double-slash-comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["between-comments", "inside-block", "stylelint-commands"],
      },
    ],
    "scss/media-feature-value-dollar-variable": [
      "always",
      {
        severity: "warning",
        ignore: ["keywords"],
      },
    ],
    "scss/operator-no-newline-after": null, // Allow multiline
    "scss/selector-no-redundant-nesting-selector": true,
  },
};
