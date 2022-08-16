# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.2.0] - 2022-08-16
### Changed
- Updated stylelint to [version 14.10](https://github.com/stylelint/stylelint/releases/tag/14.10)
- Set `hue-degree-notation` to number

## [4.1.1] - 2022-04-12
### Changed
- Enable `no-invalid-position-at-import-rule` for SCSS with `@use` and `@forward` support

### Fixed
- unset function-no-unknown for sass
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
- Lower rule strength of scss @media use vars
  to work easier with native css

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

## [1.0.0] - 2018-10-21
Initial release 🎉
