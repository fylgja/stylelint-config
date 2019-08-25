# Changelog

## 2.2.6 - (2019-08-30)
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
