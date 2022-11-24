module.exports = {
  extends: ["../scss/index.js"],
  rules: {
    "scss/at-rule-no-unknown": [
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
  },
};
