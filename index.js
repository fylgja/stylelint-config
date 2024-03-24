const extensions = [
  ".html",
  ".htm",
  ".shtml",
  ".xhtml",
  ".xht",
  ".mdoc",
  ".jsp",
  ".asp",
  ".aspx",
  ".jshtm",
  ".volt",
  ".ejs",
  ".rhtml",
  ".webc",
  ".liquid",
  ".njk",
  ".mustache",
  ".hbs",
  ".pug",
  ".php",
  ".phtml",
  ".ctp",
];

module.exports = {
  extends: ["stylelint-config-standard", "./rules/default"],
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
      files: extensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
      customSyntax: "postcss-html",
    },
    {
      files: ["*.astro", "**/*.astro"],
      extends: ["./rules/astro"],
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
