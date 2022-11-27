const baseRules = [
  "stylelint-config-standard",
  "./rules/default",
  "./rules/scss",
  "stylelint-config-html",
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
