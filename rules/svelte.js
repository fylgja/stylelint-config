module.exports = {
  customSyntax: "postcss-html",
  rules: {
    // Adds support for `-global-` syntax
    "keyframes-name-pattern": [
      "^(?:[a-z]|-)([a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: (selector) =>
          `Expected keyframes name "${selector}" to be kebab-case`,
      },
    ],
  },
};
