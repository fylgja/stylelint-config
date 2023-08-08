# Fylgja stylelint-config

[![NPM version](https://img.shields.io/npm/v/@fylgja/stylelint-config.svg?style=flat-square)](https://www.npmjs.org/package/@fylgja/stylelint-config)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/fylgja/stylelint-config/test.yml?branch=main&color=%2343a047&style=flat-square)](https://github.com/fylgja/stylelint-config/actions/workflows/test.yml)
[![License](https://img.shields.io/github/license/fylgja/stylelint-config?color=%23234&style=flat-square)](/LICENSE)

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

## Rules

For information on what each rule does and what is set,
see the [Fylgja stylelint-config docs, on fylgja.dev](https://fylgja.dev/components/stylelint-config/#rules)

All rules are base on the [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-standard). You should also checkout the rules set there.
