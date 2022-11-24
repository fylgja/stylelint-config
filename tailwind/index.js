module.exports = {
  extends: ["../index.js"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          "config",
          /** tailwindcss v1, v2 */
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["theme"],
      },
    ],
  },
};
