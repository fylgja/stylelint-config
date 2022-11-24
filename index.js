const baseRules = ["stylelint-config-standard", "./rules/default"];

module.exports = {
  extends: baseRules,
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [...baseRules, "./rules/vue"],
    },
  ],
};
