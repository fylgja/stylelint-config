# Changelog

## 3.2.0 - (2020-05-13)
* DEL: rule dollar-variable-first-in-block
* ADD: ignore for mq's with specific values

## 3.1.0 - (2020-05-10)
* UP: stylelint dependencies
* ADD:
  * rule comment-no-empty
  * rule dollar-variable-first-in-block

## 3.0.2 - (2019-12-27)
* IMP: add more ignore rules to property-no-vendor-prefix.

## 3.0.1 - (2019-12-10)
* IMP: Unset `declaration-colon-newline-after`, works better with Prettier
  and does not always makes sense anyway. So giving freedom to the dev.

## 3.0.0 - (2019-11-17)
* DEL:
  * scss ignoreAtRules, fixed in [stylelint-scss v3.12](https://github.com/kristerkari/stylelint-scss/releases/tag/3.12.0)
  * rules that are the same as stylelint-config-standard
* IMP:
  * update styleint-scss to v3.12
  * cleanup LESS rules
  * rules for better compatibility with other stylelint-configs and prettier
* ADD: stylelint-config-standard as dependencies to simplify our own rules

## 2.2.8 - (2019-10-02)
* IMP: set scss/operator-no-unspaced to null to support the new sass modules.
* ADD: scss ignoreAtRules for `@use` and `@forward` to support the new sass modules

## 2.2.7 - (2019-10-02)
* IMP: lower rule strength of scss @media use vars
  to work easier with native css

## 2.2.6 - (2019-08-31)
* IMP: version of dependencies

## 2.2.5 - (2019-08-11)
* FIX: issue with variables and font family stacks

## 2.2.4 - (2019-07-26)
* IMP:
  * changelog date format to ISO standard
  * make at-rule-empty-line-before less strict, via swap
    * "inside-block" should be ignored
    * "first-nested" should be except

## 2.2.3 - (2019-06-17)
* FIX: Set scss/operator-no-newline-after to null
  * This rule caused issues with the background shorthand
    position size separator (`/`).
    Also in JS and other languages it is common to split long lines after operators.

## 2.2.2 - (2019-05-19)
* IMP:
  * Git URL Changed
  * doc
  * pkg dependencies

## 2.2.1 - (2019-05-05)
* IMP: formating

## 2.2.0 - (2019-04-14)
* ADD: title to changelog
* IMP: Set indentation rule to 4
  * Originally wanted this done via the editorconfig instead, but chose to set this.
  As this fixes issue with the VSCode plugin and the cli cmd.

## 2.1.0 - (2019-03-12)
* IMP: make selector-no-qualifying-type less strict by allowing classes
* DEL: font-weight-notation rule
  * This rule give issues with some style cases and scss functions like nth

## 2.0.0 - (2019-02-22)
* IMP:
  * Order doc
  * main stylelintconfig rules → _See readme what is include_
  * main Doc
  * stylelint version in pkg
* ADD:
  * SCSS plugin as dependency
  * LESS Rules
  * Less Doc

## 1.0.4 - (2019-01-06)
* FIX: peerDep version
* DEL: lockfile

## 1.0.3 - (2019-01-03)
* FIX: rule selector-max-type, missing ignore rules
* IMP: editorconfig indent rule for index.js (stylelint-config)

## 1.0.2 - (2018-12-30)
* IMP:
  * add new rules to editorconfig
  * gitingnore
  * 📦 info: add empty scripts

## 1.0.1 - (2018-10-22)
* IMP: improve readme

## 1.0.0 - (2018-10-21)
* Initial release 🎉
