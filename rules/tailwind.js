const twFunctions = [
  "tailwind",
  "apply",
  "layer",
  "config",
  /** TailwindCSS v2 */
  "variants",
  "responsive",
  "screen",
];

module.exports = {
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: twFunctions }],
    "function-no-unknown": [true, { ignoreFunctions: ["theme"] }],
  },
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: "postcss-scss",
      plugins: ["stylelint-scss"],
      rules: {
        "at-rule-no-unknown": null,
        "function-no-unknown": null,
        "scss/at-rule-no-unknown": [true, { ignoreAtRules: twFunctions }],
        "scss/function-no-unknown": [true, { ignoreFunctions: ["theme"] }],
      },
    },
  ],
};
