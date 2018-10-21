# Fylgja stylelint

[![NPM version](https://img.shields.io/npm/v/@fylgja/stylelint-config.svg)](https://www.npmjs.org/package/@fylgja/stylelint-config)

A sharable stylelint config object that enforces Fylgja's css rules

## Installation

```bash
npm i --save-dev @fylgja/stylelint-config
```

## Usage

If you've installed `@fylgja/stylelint-config` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "@fylgja/stylelint-config"
}
```

If you've globally installed `stylelint-config-fylgja` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-fylgja` in your config e.g.

```json
{
  "extends": "<PATH-TO>/@fylgja/stylelint-config"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

```json
{
  "extends": "@fylgja/stylelint-config",
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
[MIT](LICENSE) © [Fylgja](https://getfylgja.com/)
