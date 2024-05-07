# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Allow selector attributes with or without quotes

## [7.0.0] - 2024-03-24

### Added

- Support for webc, liquid and nunjucks

### Changed

- Updated stylelint to version v16

### Removed

- [stylelint-config-html](https://github.com/ota-meshi/stylelint-config-html) for our own solution with more html syntaxes

## [6.0.2] - 2023-08-10

### Fixed

- Unset rule `media-feature-range-notation`, closes #47
  until support for [media range](https://caniuse.com/?search=media%20range) is at a minimal of 2 mayor browser versions

## [6.0.1] - 2023-08-10

### Added

- Support for camelCase in custom media query names
- Support for camelCase in custom properties in all languages, not just Astro

### Fixed

- scss rules conflicting with our Fylgja styleguide
  - dollar variables should be allowed after a comment
  - double slash comments should be allow between properties
- Broke the `value-keyword-case` rule compare to previous versions, for font family names
  - added back rule to ignore value case in variables named `family`
  - added rule to ignore value case in functions named `local()`, used in `@font-face`
- Support for private custom properties, e.g. `--_custom`

### Removed

- `camelCaseSvgKeywords` in `value-keyword-case` rule to match previous versions,
  also the lower case version should be used as per CSS4 Color spec, e.g. `currentcolor`

## [6.0.0] - 2023-08-08

### Added

- Support for Astro and Svelte
- Better tests for each specific language difference compared to our default rules

### Changed

- Updated stylelint to version v15, closes #39,
  this update [droppes stylistic rules](https://stylelint.io/migration-guide/to-15) that are deprecated by stylelint
- Updated the and cleaned the rules for TailwindCSS and Vue
- Replaced our own defaults for Scss with [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)
  - This makes it easier maintain this part of our own rules
  - The defaults are more inline with ours compared to a few years ago
  - We still have some rules set in our own rules in `./rules/scss.js`
- Dropped node 14 support, node 16 or higher is now required

### Removed

- The import options for `scss` and `tailwind`, in favour for 1 import
  - This import will check the file type and use the right syntax
  - This removes the need to import the right config for a specific language

## [5.0.3] - 2023-02-05

### Changed

- Set `color-function-notation`, to `modern`, closes #36

### Fixed

- peerDependencies

## [5.0.2] - 2022-12-31

### Added

- `stylelint-ignore` to ignorePattern for `max-line-length`

### Fixed

- Small docs issues
- `value-no-vendor-prefix` add missing ignores from [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

## [5.0.1] - 2022-11-28

### Fixed

- Line length rule on Tailwind by unsetting it

## [5.0.0] - 2022-11-27

### Added

- Support for Tailwind specific syntax, with new extend option
- Support for inline styles with `stylelint-config-html`

### Changed

- Split rules from export bundles,
  each rule is now in the rules folder and extended in the options offered in the root of this project,
  It is now easier to build your own config based on these rules
- Dropped `at-rule-no-unknown` for default

## [4.2.1] - 2022-11-24

### Changed

- Updated stylelint to [version 14.14](https://github.com/stylelint/stylelint/releases/tag/14.14.0)
- Unset `import-notation`, respects the import syntax for both cases

## [4.2.0] - 2022-08-16

### Changed

- Updated stylelint to [version 14.10](https://github.com/stylelint/stylelint/releases/tag/14.10)
- Set `hue-degree-notation` to number

## [4.1.1] - 2022-04-12

### Changed

- Enable `no-invalid-position-at-import-rule` for SCSS with `@use` and `@forward` support

### Fixed

- Unset `function-no-unknown` for sass
  This does not play wel with namespaced `@use`'s

## [4.1.0] - 2022-04-12

### Changed
- Updated stylelint to [version 14.6](https://github.com/stylelint/stylelint/releases/tag/14.6.1)
- Allow 1 ID selector in your CSS,
  there are cases that work best with id's,
  just keep the limit to 1 selector,
  but there should never be a case where you need to 2 (or more) id's in 1 CSS selector.

## [4.0.1] - 2021-11-08

### Fixed

- Unset `custom-property-pattern` for scss
- Unset `scss/no-global-function-names` and fixed issue with native min and max
- Unset `color-function-notation` for SCSS based rgba color
- Allow css modifier classes 

## [4.0.0] - 2021-11-08

### Added

- Unset `alpha-value-notation` rule set by [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard/issues/210) until fixed
- syntax support to scss rules
- rule `scss/declaration-nested-properties-no-divided-groups`
- rule `scss/no-duplicate-mixins`
- warning rule `scss/no-global-function-names`

### Changed

- Updated stylelint to [version 14](https://github.com/stylelint/stylelint/releases/tag/14.0.0)
  and dropped support for version 13

### Removed

- LessCSS specific syntax support
- Rules now part of recommend rules
  - `font-family-name-quotes`
  - `function-url-quotes`
  - `media-feature-name-no-vendor-prefix`
  - `no-empty-first-line`
  - `selector-attribute-quotes`
  - `selector-no-vendor-prefix`
  - `shorthand-property-no-redundant-values`
  - `string-quotes`

## [3.5.1] - 2021-08-23

### Added

- Workflow and tests

### Fixed

- sass conflict with `@use` and `@import` order

## [3.5.0] - 2021-08-06

### Added

- Dependabot

### Changed

- Changelog is now using the keepachangelog syntax
- Updated stylelint, stylelint-config-standard and stylelint-scss

### Fixed

- selector-max-universal by allowing 2 for using the magic margin rule, `* + *`.

## [3.4.0] - 2021-03-09

### Added

- `@screen` to at-rule-no-unknown for Tailwind support

### Changed

- Update dependencies and drop older stylelint support

## [3.3.0] - 2021-01-02

### Changed

- Allow @use, @forward without line break between
- Update dependencies

## [3.2.3] - 2020-11-30

### Fixed

- Opening-brace multiline if else in scss

## [3.2.0] - 2020-05-13

### Added

- Ignore for mq's with specific values

### Removed

- Rule dollar-variable-first-in-block

## [3.1.0] - 2020-05-10

### Added

- Rule comment-no-empty
- Rule dollar-variable-first-in-block

### Changed

- Update dependencies

## [3.0.2] - 2019-12-27

### Added

- More ignore rules to property-no-vendor-prefix.

## [3.0.1] - 2019-12-10

### Changed

- Unset `declaration-colon-newline-after`, works better with Prettier
  and does not always makes sense anyway. So giving freedom to the dev.

## [3.0.0] - 2019-11-17

### Added

- stylelint-config-standard as dependencies to simplify our own rules

### Changed

- Update stylelint-scss to v3.12
- Cleanup LESS rules
- Improved rules for better compatibility with other stylelint-configs and prettier

### Removed

- SCSS ignoreAtRules, fixed in [stylelint-scss v3.12](https://github.com/kristerkari/stylelint-scss/releases/tag/3.12.0)
- Rules that are the same as stylelint-config-standard

## [2.2.8] - 2019-10-02

### Added

- scss ignoreAtRules for `@use` and `@forward` to support the new sass modules

### Changed

- Set scss/operator-no-unspaced to null to support the new sass modules.

## [2.2.7] - 2019-10-02

### Changed

- Lower rule strength of scss @media use vars, to work easier with native css

## [2.2.6] - 2019-08-31

### Changed

- Updated dependencies

## [2.2.5] - 2019-08-11

### Fixes

- Issue with variables and font family stacks

## [2.2.4] - 2019-07-26

### Changed

- Changelog date format to ISO standard
- Make at-rule-empty-line-before less strict, via swap
  - "inside-block" should be ignored
  - "first-nested" should be except

## [2.2.3] - 2019-06-17

### Fixes

- Set scss/operator-no-newline-after to null
  This rule caused issues with the background shorthand
  position size separator `/`.
  Also in JS and other languages it is common to split long lines after operators.

## [2.2.2] - 2019-05-19

### Changed

- Git URL Changed
- Docs
- Updated dependencies

## [2.2.0] - 2019-04-14

### Added

- Title to changelog

### Changed

- Set indentation rule to 4
  Originally wanted this done via the editorconfig instead, but chose to set this.
  As this fixes issue with the VSCode plugin and the cli cmd.

## [2.1.0] - 2019-03-12

### Changed

- Make selector-no-qualifying-type less strict by allowing classes

### Removed

- Font-weight-notation rule
  This rule give issues with some style cases and scss functions like nth

## [2.0.0] - 2019-02-22

### Added

- SCSS plugin as dependency
- LESS Rules
- Less Doc

### Changed

- Order doc
- Main stylelint-config rules → _See readme what is include_
- Main Doc
- Stylelint version in pkg

## [1.0.4] - 2019-01-06

### Removed

- Lockfile

### Fixed

- PeerDep version

## [1.0.3] - 2019-01-03

### Changed
- Editorconfig indent rule for index.js stylelint-config

### Fixed

- Rule selector-max-type, missing ignore rules

## [1.0.2] - 2018-12-30

### Added
- New rules to editorconfig

### Changed
- gitignore
- package.json add empty scripts

## 1.0.0 - 2018-10-21

Initial release 🎉

[Unreleased]: https://github.com/fylgja/stylelint-config/compare/v7.0.0...HEAD

[7.0.0]: https://github.com/fylgja/stylelint-config/compare/6.0.2...7.0.0

[6.0.2]: https://github.com/fylgja/stylelint-config/compare/6.0.1...6.0.2
[6.0.1]: https://github.com/fylgja/stylelint-config/compare/6.0.0...6.0.1
[6.0.0]: https://github.com/fylgja/stylelint-config/compare/5.0.3...6.0.0

[5.0.3]: https://github.com/fylgja/stylelint-config/compare/5.0.2...5.0.3
[5.0.2]: https://github.com/fylgja/stylelint-config/compare/5.0.1...5.0.2
[5.0.1]: https://github.com/fylgja/stylelint-config/compare/5.0.0...5.0.1
[5.0.0]: https://github.com/fylgja/stylelint-config/compare/4.2.1...5.0.0

[4.2.1]: https://github.com/fylgja/stylelint-config/compare/4.2.0...4.2.1
[4.2.0]: https://github.com/fylgja/stylelint-config/compare/4.1.1...4.2.0
[4.1.1]: https://github.com/fylgja/stylelint-config/compare/4.1.0...4.1.1
[4.1.1]: https://github.com/fylgja/stylelint-config/compare/4.1.0...4.1.1
[4.1.0]: https://github.com/fylgja/stylelint-config/compare/4.0.1...4.1.0
[4.0.1]: https://github.com/fylgja/stylelint-config/compare/4.0.0...4.0.1
[4.0.0]: https://github.com/fylgja/stylelint-config/compare/3.5.1...4.0.0

[3.5.1]: https://github.com/fylgja/stylelint-config/compare/3.5.0...3.5.1
[3.5.0]: https://github.com/fylgja/stylelint-config/compare/3.4.0...3.5.0
[3.4.0]: https://github.com/fylgja/stylelint-config/compare/3.3.0...3.4.0
[3.3.0]: https://github.com/fylgja/stylelint-config/compare/3.2.3...3.3.0
[3.2.3]: https://github.com/fylgja/stylelint-config/compare/3.2.0...3.2.3
[3.2.0]: https://github.com/fylgja/stylelint-config/compare/3.1.0...3.2.0
[3.1.0]: https://github.com/fylgja/stylelint-config/compare/3.0.2...3.1.0
[3.0.2]: https://github.com/fylgja/stylelint-config/compare/3.0.1...3.0.2
[3.0.1]: https://github.com/fylgja/stylelint-config/compare/3.0.0...3.0.1
[3.0.0]: https://github.com/fylgja/stylelint-config/compare/2.2.8...3.0.0
[3.0.0]: https://github.com/fylgja/stylelint-config/compare/2.2.8...3.0.0

[2.2.8]: https://github.com/fylgja/stylelint-config/compare/2.2.7...2.2.8
[2.2.7]: https://github.com/fylgja/stylelint-config/compare/2.2.6...2.2.7
[2.2.6]: https://github.com/fylgja/stylelint-config/compare/2.2.5...2.2.6
[2.2.5]: https://github.com/fylgja/stylelint-config/compare/2.2.4...2.2.5
[2.2.4]: https://github.com/fylgja/stylelint-config/compare/2.2.3...2.2.4
[2.2.3]: https://github.com/fylgja/stylelint-config/compare/2.2.2...2.2.3
[2.2.2]: https://github.com/fylgja/stylelint-config/compare/2.2.0...2.2.2
[2.2.0]: https://github.com/fylgja/stylelint-config/compare/2.1.0...2.2.0
[2.1.0]: https://github.com/fylgja/stylelint-config/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/fylgja/stylelint-config/compare/1.0.4...2.0.0

[1.0.4]: https://github.com/fylgja/stylelint-config/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/fylgja/stylelint-config/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/fylgja/stylelint-config/releases/tag/1.0.2
