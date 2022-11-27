# Fylgja stylelint-config

[![NPM version](https://img.shields.io/npm/v/@fylgja/stylelint-config.svg)](https://www.npmjs.org/package/@fylgja/stylelint-config)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/fylgja/stylelint-config/Test?color=%2343a047)](https://github.com/fylgja/stylelint-config/actions/workflows/test.yml)
[![License](https://img.shields.io/github/license/fylgja/stylelint-config?color=%23234&style=flat-square)](https://github.com/fylgja/stylelint-config/blob/main/LICENSE)

A sharable stylelint config object that enforces Fylgja's CSS rules.

## Installation

```bash
npm install @fylgja/stylelint-config --save-dev
```

## Usage

If you've installed @fylgja/stylelint-config, just set your stylelint config to:

```json
{
  "extends": "@fylgja/stylelint-config"
}
```

_SCSS, Tailwind and Inline CSS support found under the [Extra Syntax Support](#extra-syntax-support)_

## Extending

Simply add a `"rules"` key to your config,
then add your overrides and additions there.

```json
{
  "extends": "@fylgja/stylelint-config",
  "rules": {
    "rule-empty-line-before": [
        "always-multi-line", {
            "except": ["first-nested"],
            "ignore": ["after-comment"]
        }
    ],
  }
}
```

## Extra Syntax Support

The core rules take some preprocessors rules in account,
if they do not impact any CSS defaults.

For better support pre-processors and post-processors support,
use the following options below.

### SCSS

This adds support for Sass (scss syntax) support.

To include these rules, add `scss` to the end of the extend path;

```json
{
    "extends": "@fylgja/stylelint-config/scss",
}
```

[For more infomation checkout the SCSS Doc on fylgja.dev.](https://fylgja.dev/components/stylelint-config/scss/)

### TailwindCSS

This adds support for TailwindCSS functions in CSS.

To include these rules, add `tailwind` to the end of the extend path;

```json
{
    "extends": "@fylgja/stylelint-config/tailwind",
}
```

### CSS Order

There are no rules,
since we do feel there should be a form flexibility on that part.

But we do follow a specific style of ordering for our CSS,
it's is described in our [CSS order DOC at fylgja.dev](https://fylgja.dev/components/stylelint-config/order/).

### Inline CSS support (HTML and more)

Any of the Fylgja Stylelint Config options will, as of v5.0 also check any inline CSS by default.

This done thx to the Stylelint plugin [stylelint-config-html](https://github.com/ota-meshi/stylelint-config-html).

This plugin will add support to check your project not just for errors in CSS files,
but also checks in the style tags in your HTML.

_You can opt out of this behavior by using the rules directly,_
_found in the rules folder._

## Rules

For information on what each rule does and what is set,
see the [Fylgja stylelint-config docs, on fylgja.dev](https://fylgja.dev/components/stylelint-config/#rules)

All rules are base on the [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-standard). You should also checkout the rules set there.
