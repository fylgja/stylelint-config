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

// Tailwind uses the same logic as any post processor for the syntax,
// so where reusing the SCSS syntax for any rules
module.exports = {
  customSyntax: "postcss-scss",
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "function-no-unknown": [true, { ignoreFunctions: ["theme"] }],
    "scss/at-rule-no-unknown": [true, { ignoreAtRules: twFunctions }],
  },
};
