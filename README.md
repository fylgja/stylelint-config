# Fylgja stylelint-config

[![NPM version](https://img.shields.io/npm/v/@fylgja/stylelint-config.svg)](https://www.npmjs.org/package/@fylgja/stylelint-config)

A sharable stylelint config object that enforces Fylgja's css rules.

Based on the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
But not used as a dependency in our config.

<details><summary>Table of Contents</summary>

- [Installation](#installation)
- [Usage](#usage)
- [Extending](#extending)
- [Extensions](#extensions)
  - [SCSS](#scss)
  - [LESS](#less)
  - [Order](#order)
- [Rules](#rules)
  - [At-rule](#at-rule)
  - [Block](#block)
  - [Color](#color)
  - [Comment](#comment)
  - [Custom Property](#custom-property)
  - [Declaration](#declaration)
  - [Font family](#font-family)
  - [Function](#function)
  - [General / Sheet](#general--sheet)
  - [Keyframe/Animation](#keyframeanimation)
  - [Media feature](#media-feature)
  - [Media query List](#media-query-list)
  - [Number](#number)
  - [Propery](#propery)
  - [Rule](#rule)
  - [Selector](#selector)
  - [Shorthand property](#shorthand-property)
  - [String](#string)
  - [Unit](#unit)
  - [Value](#value)
- [License](#license)

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

_SCSS support found onder the [Extensions](#Extensions)_

## Extending

Simply add a `"rules"` key to your config,
then add your overrides and additions there.

```json
{
  "extends": "@fylgja/stylelint-config",
  "rules": {
    "rule-empty-line-before": [
        "always-multi-line", {
            except: ["first-nested"],
            ignore: ["after-comment"]
        }
    ],
  }
}
```

## Extensions

While the core rules already take preprocessors in account.
There are some times extra's rules needed.
To add support for a specific preprcessor.

### SCSS

We have added the stylelint plugin SCSS to better support SCSS styles

To include these rules.
Add to the end of the extend path `scss`

```JSON
{
    "extends": "@fylgja/stylelint-config/scss",
}
```

[For more infomation checkout the SCSS DOC.](./scss/README.md)

### LESS

We have super small config to unset some rules,
that conflict with the LESS naming.

```JSON
{
    "extends": "@fylgja/stylelint-config/less",
}
```

[For more infomation checkout the LESS DOC.](./less/README.md)

### Order

There are some parties that do this.

Why don't we?
Well we don't like strict code order.

We do follow a specific style of ordering our code.

That is described in our [CSS order DOC](./order/README.md).

## Rules

For information on what each rule does.
[Checkout the orignal DOC](https://stylelint.io/user-guide/rules/)
or the rules folder on [Stylelint Github Page](https://github.com/stylelint/stylelint/tree/master/lib/rules).

_We have not set any [white/black]-list values._
_These are better for project specific rules (if needed)._

### At-rule

- `at-rule-empty-line-before`: always
  - except: inside-block, blockless-after-same-name-blockless
  - ignore: after-comment, first-nested
  - ignoreAtRules: import, if, else
- `at-rule-name-case`: lower
- `at-rule-name-space-after`: always-single-line,
- `at-rule-no-unknown`: true
  - ignoreAtRules: for, each, if, else, mixin, mixin-*, include
    - _Includes support for PostCSS plugins_
- `at-rule-no-vendor-prefix`: true
- `at-rule-semicolon-newline-after`: always
- `at-rule-semicolon-space-before`: never

### Block

- `block-closing-brace-empty-line-before`: never
- `block-closing-brace-newline-after`: always-multi-line
  - ignoreAtRules: if, else
- `block-closing-brace-newline-before`: always-multi-line
- `block-closing-brace-space-after`: always-single-line
- `block-closing-brace-space-before`: always-single-line
- `block-no-empty`: true
- `block-opening-brace-newline-after`: always-multi-line
- `block-opening-brace-newline-before`: null
  - _If there was a option for never, it would be never_
- `block-opening-brace-space-after`: always-single-line
- `block-opening-brace-space-before`: always

### Color

- `color-hex-case`: lower
  - _Lowercase letters are easier to distinguish from numbers_
- `color-hex-length`: short
- `color-no-hex`: null
  - _This is set to null._
    _But only because this is something that should never be blocked_
- `color-no-invalid-hex`: true

### Comment

- `comment-empty-line-before`: always
  - except: first-nested
  - ignore: after-comment, stylelint-commands
- `comment-no-empty`: true
- `comment-whitespace-inside`: always

### Custom Property

- `custom-property-empty-line-before`: never

### Declaration

- `declaration-bang-space-after`: never
- `declaration-bang-space-before`: always
- `declaration-block-no-duplicate-properties`: true
  - ignore: consecutive-duplicates-with-different-values
- `declaration-block-no-redundant-longhand-properties`: true
- `declaration-block-no-shorthand-property-overrides`: true
- `declaration-block-semicolon-newline-after`: always-multi-line
- `declaration-block-semicolon-newline-before`: never-multi-line
- `declaration-block-semicolon-space-after`: always-single-line
- `declaration-block-semicolon-space-before`: never
- `declaration-block-trailing-semicolon`: always
- `declaration-colon-newline-after`: always-multi-line
- `declaration-colon-space-after`: always-single-line
- `declaration-colon-space-before`: never
- `declaration-empty-line-before`: never
- `declaration-no-important`: true

### Font family

- `font-family-name-quotes`: always-where-recommended
  - severity: warning
- `font-family-no-duplicate-names`: true,
  - severity: warning
- `font-family-no-missing-generic-family-keyword`: true
  - severity: warning
- `font-weight-notation`: numeric
  - ignore: relative
  - severity: warning

### Function

- `function-calc-no-unspaced-operator`: true
- `function-comma-newline-after` always-multi-line
- `function-comma-space-after`: always-single-line
- `function-comma-space-before`: never
- `function-linear-gradient-no-nonstandard-direction`: true
- `function-max-empty-lines`: 0
- `function-name-case`: lower
  - ignoreFunctions: _Starting with: get, (e.g getColor)_
- `function-parentheses-newline-inside`: always-multi-line
- `function-parentheses-space-inside`: never-single-line
- `function-url-quotes`: always
- `function-whitespace-after`: "always

### General / Sheet

- `indentation`: null
  - _This is done via the [editorconfig](https://editorconfig.org/) instead._
- `max-empty-lines`: 1
- `max-line-length`: 80
  - ignorePattern: URI's
  - severity: warning
- `max-nesting-depth`: 5
  - _5 allows easier setting of `if`'s and `mixins`._
  _The css dept is enforced via `selector-max`._
- `no-descending-specificity`: true
  - severity: warning

### Keyframe/Animation

- `keyframe-declaration-no-important`: true

### Media feature

- `media-feature-colon-space-after`: always
- `media-feature-colon-space-before`: never
- `media-feature-name-case`: lower
- `media-feature-name-no-unknown`: true
  - severity: warning
- `media-feature-name-no-vendor-prefix`: true
- `media-feature-parentheses-space-inside`: true
- `media-feature-range-operator-space-after`: always
- `media-feature-range-operator-space-before` always

### Media query List

- `media-query-list-comma-newline-after`: always-multi-line
- `media-query-list-comma-newline-before`: never-multi-line
- `media-query-list-comma-space-after`: always-multi-line
- `media-query-list-comma-space-before`: never

### Number

- `number-leading-zero`: never
- `number-max-precision`: 5
- `number-no-trailing-zeros`: true

### Propery

- `property-case`: lower
- `property-no-unknown`: true
- `property-no-vendor-prefix`: true
  - ignoreProperties: appearance

### Rule

- `rule-empty-line-before`: always-multi-line
  - except: first-nested,
  - ignore: after-comment, inside-block
    - _inside-block is not for everyone._
    _We like our css components compact._
    _Some like line-breaks between classes modifiers instead._

### Selector

- `selector-attribute-brackets-space-inside`: never
- `selector-attribute-operator-space-after`: never
- `selector-attribute-operator-space-before`: never
- `selector-attribute-quotes`: always
- `selector-combinator-space-after`: always
- `selector-combinator-space-before`: always
- `selector-descendant-combinator-no-non-space`: true
- `selector-list-comma-newline-after`: always
- `selector-list-comma-newline-before`: never-multi-line
- `selector-list-comma-space-after`: always-single-line
- `selector-list-comma-space-before`: never
- `selector-max-attribute`: 2
- `selector-max-class`: 4
- `selector-max-compound-selectors`: 4
- `selector-max-empty-lines`: 0,
- `selector-max-id`: 0
- `selector-max-specificity`: 0, 4, 2,
- `selector-max-type`: 2
- `selector-max-universal`: 1
- `selector-no-qualifying-type`: true
  - ignore: attribute
- `selector-no-vendor-prefix`: true
- `selector-pseudo-class-case`: lower
- `selector-pseudo-class-no-unknown`: true
- `selector-pseudo-class-parentheses-space-inside`: never
- `selector-pseudo-element-case`: lower
- `selector-pseudo-element-colon-notation`: double
- `selector-pseudo-element-no-unknown`: true

### Shorthand property

- `shorthand-property-no-redundant-values`: true

### String

- `string-no-newline`: true
- `string-quotes`: double

### Unit

- `length-zero-no-unit`: true
- `unit-case`: lower
- `unit-no-unknown`: true

### Value

- `value-keyword-case`: lower
- `value-list-comma-newline-after`: always-multi-line
- `value-list-comma-newline-before`: never-multi-line
- `value-list-comma-space-after`: always-single-line
- `value-list-comma-space-before`: never
- `value-list-max-empty-lines`: 0
- `value-no-vendor-prefix`: true
  - ignoreValues: tap-highlight-color

## License
[MIT](LICENSE) © [Fylgja](http://getfylgja.com/)
