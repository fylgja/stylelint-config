# Fylgja stylelint

[![NPM version](https://img.shields.io/npm/v/stylelint-config-fylgja.svg)](https://www.npmjs.org/package/stylelint-config-fylgja)

A sharable stylelint config object that enforces Fylgja's css rules

## Installation

```bash
npm i --save-dev stylelint-config-fylgja
```

## Usage

If you've installed `stylelint-config-fylgja` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-fylgja"
}
```

If you've globally installed `stylelint-config-fylgja` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-fylgja` in your config e.g.

```json
{
  "extends": "<PATH-TO>/stylelint-config-fylgja"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

```json
{
  "extends": "stylelint-config-fylgja",
  "rules": {
    "comment-empty-line-before": ["always", {
      "except": ["first-nested"],
      "ignore": ["after-comment", "stylelint-commands"]
    }]
  }
}
```

## TODO
* Add code order, maybe?
* Include scss rules from [stylelint-scss](https://github.com/kristerkari/stylelint-scss), or add it as extension

## License
[MIT](LICENSE) © [Siteation](https://siteation.nl/)
