const baseRules = [
  "stylelint-config-standard",
  "./rules/default",
  "./rules/scss",
  "./rules/tailwind",
];

module.exports = {
  extends: baseRules,
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [...baseRules, "./rules/vue"],
    },
  ],
};
