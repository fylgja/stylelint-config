module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html",
    "./rules/default",
  ],
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      extends: [
        "stylelint-config-standard-scss",
        "./rules/default",
        "./rules/scss",
      ],
    },
    {
      files: ["*.vue", "**/*.vue"],
      extends: ["./rules/vue"],
    },
    {
      files: ["*.svelte", "**/*.svelte"],
      extends: ["./rules/svelte"],
    },
    {
      files: [
        "tailwind*.{css,scss}",
        "tailwind/*.{css,scss}",
        "tailwind/**/*.{css,scss}",
        "**/tailwind*.{css,scss}",
        "**/tailwind/*.{css,scss}",
        "**/tailwind/**/*.{css,scss}",
      ],
      extends: ["./rules/tailwind"],
    },
  ],
};
