# Fylgja stylelint-config

[![NPM version](https://img.shields.io/npm/v/@fylgja/stylelint-config.svg)](https://www.npmjs.org/package/@fylgja/stylelint-config)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/fylgja/stylelint-config/Test?color=%2343a047)](https://github.com/fylgja/stylelint-config/actions/workflows/test.yml)
[![License](https://img.shields.io/github/license/fylgja/stylelint-config?color=%23234&style=flat-square)](https://github.com/fylgja/stylelint-config/blob/main/LICENSE)

A sharable stylelint config object that enforces Fylgja's CSS rules.

<details><summary>Table of Contents</summary>

- [Installation](#installation)
- [Usage](#usage)
- [Extending](#extending)
- [Extra Syntax Support](#extra-syntax-support)
  - [SCSS](#scss)
  - [TailwindCSS](#tailwindcss)
  - [Vue](#vue)
  - [CSS Order](#css-order)
  - [Custom config](#custom-config)
  - [Inline CSS support](#inline-css-support)
- [Rules](#rules)

</details>

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

_SCSS, Tailwind and Vue support found under the [Extra Syntax Support](#extra-syntax-support)_

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

To include these rules, add `scss` to the end of the extend path;

```json
{
    "extends": "@fylgja/stylelint-config/scss",
}
```

[For more infomation checkout the SCSS Doc on fylgja.dev.](https://fylgja.dev/components/stylelint-config/scss/)

### TailwindCSS

To include these rules, add `tailwind` to the end of the extend path;

Use it with;

```json
{
    "extends": "@fylgja/stylelint-config/tailwind",
}
```

<!-- [For more infomation checkout the Tailwind Doc on fylgja.dev.](https://fylgja.dev/components/stylelint-config/tailwind/) -->

### Vue

We have added the plugin [stylelint-config-html](https://github.com/ota-meshi/stylelint-config-html) to add support styles in Vue Components (inline styles).

These rules are part of each other options,
and automatically used if the file type is vue.

Use any of the **extends** options mention above and this will alos work with Vue.

<!-- [For more infomation checkout the Vue Doc on fylgja.dev.](https://fylgja.dev/components/stylelint-config/vue/) -->

### CSS Order

We do follow a specific style of ordering our code, it's is described in our [CSS order DOC](https://fylgja.dev/components/stylelint-config/order/).

### Custom config

<!-- TODO add docs for this section -->

### Inline CSS support

With fylgja-stylelint-config we also install the the [stylelint-config-html](https://github.com/ota-meshi/stylelint-config-html) plugin, for Vue support.

This plugin will add support to check your project not just for errors in CSS files,
but also checks in the style tags in your HTML.

To use this also include the stylelint-config-html after any other extends;

```json
{
    "extends": [
        "@fylgja/stylelint-config",
        "stylelint-config-html"
    ]
}
```

_For more configuration options see the [github page](https://github.com/ota-meshi/stylelint-config-html#book-usage),_
_And for [VSCode support](https://github.com/ota-meshi/stylelint-config-html#visual-studio-code) see the also the github page._

## Rules

For information on what each rule does.
[Checkout the original DOC](https://stylelint.io/user-guide/rules/)
or the rules folder on [Stylelint Github Page](https://github.com/stylelint/stylelint/tree/master/lib/rules).

Since we extend on the [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-standard). You should also checkout the rules set there.

Down here are only the rules we have set.

_We have not set any [allowed/disallowed]-list values._
_it's better to set those project specific, if needed._

**At-rule**

- `at-rule-empty-line-before`: always
  - except: blockless-after-same-name-blockless, first-nested
  - ignore: after-comment, inside-block
  - ignoreAtRules: use, forward, import, if, else
- `at-rule-no-vendor-prefix`: true
- `at-rule-semicolon-space-before`: never
  - _If there was a option for never, it would be never_

**Block**

- `block-closing-brace-newline-after`: always-multi-line
  - ignoreAtRules: if, else
- `block-closing-brace-newline-before`: always-multi-line

**Color**

- `alpha-value-notation`: null
- `color-hex-case`: lower
  - _Lowercase letters are easier to distinguish from numbers_
- `color-hex-length`: short
- `color-no-invalid-hex`: true

**Comment**

- `comment-empty-line-before`: always
  - except: first-nested
  - ignore: after-comment, stylelint-commands

**Custom Property**

- `custom-property-empty-line-before`: never

**Declaration**

- `declaration-colon-newline-after`: null
  - _Works better with Prettier and does not always makes sense anyway._
    _So giving freedom to the dev._
- `declaration-block-no-redundant-longhand-properties`: true
- `declaration-block-semicolon-newline-before`: never-multi-line
  - _Would be never if this was an option_
- `declaration-empty-line-before`: never
- `declaration-no-important`: true

**Font family**

- `font-family-no-missing-generic-family-keyword`: true
  - severity: warning

**Function**

- `function-name-case`: lower
  - ignoreFunctions: _Starting with: get, (e.g getColor)_
- `function-url-no-scheme-relative`: true

**General / Sheet**

- `indentation`: 4
- `max-line-length`: 80
  - ignorePattern: URI's
  - severity: warning
- `max-nesting-depth`: 5
  - _5 allows easier setting of `if`'s and `mixins`._
  _The CSS dept is enforced via `selector-max`._
- `no-descending-specificity`: true
  - severity: warning
- `import-notation`: null
  - Allow both string and url

**Media**

- `media-feature-name-no-unknown`: true
  - severity: warning
- `media-query-list-comma-newline-before`: never-multi-line
  - _Would be never if this was an option_

**Number**

- `number-max-precision`: 5

> Notes about `number-leading-zero`.
> Just as Bootstrap & Google we support no leading zero's.
> 
> But since pretty much all compilers and prettier use leading zero's,
> we have kept the rule set to the default value.

**Property**

- `property-no-vendor-prefix`: true
  - ignoreProperties: appearance, text-size-adjust, tap-highlight-color

**Rule**

- `rule-empty-line-before`: always-multi-line
  - except: first-nested,
  - ignore: after-comment, inside-block

**Selector**

- `selector-list-comma-newline-before`: never-multi-line
  - _Would be never if this was an option_
- `selector-list-comma-space-after`: always-single-line
- `selector-max-attribute`: 2
- `selector-max-class`: 4
- `selector-max-compound-selectors`: 4
- `selector-max-empty-lines`: 0,
- `selector-max-id`: 1
- `selector-max-type`: 2
- `selector-max-universal`: 2
- `selector-no-qualifying-type`: true
  - ignore: attribute, class
- `selector-type-no-unknown`: true
  - severity: warning

**Value**

- `value-keyword-case`: lower
  - ignoreProperties: with the name `family`
  - _Font families may have uppercase letters_
- `value-list-comma-newline-before`: never-multi-line
- `value-no-vendor-prefix`: true
  - ignoreValues: tap-highlight-color
