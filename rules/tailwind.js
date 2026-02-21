import postcssScss from "postcss-scss";

const ignoreAtRules = [
  "apply",
  "config",
  // Tailwind 4
  "variant",
  "custom-variant",
  "plugin",
  "reference",
  "theme",
  "utility",
  // Tailwind 3
  "tailwind",
  "screen",
];
const ignoreFunctions = ["theme"];

export default {
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
