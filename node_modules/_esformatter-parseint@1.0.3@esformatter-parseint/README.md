# esformatter-parseint [![Build Status](https://travis-ci.org/kewah/esformatter-parseint.svg?branch=master)](https://travis-ci.org/kewah/esformatter-parseint)

[esformatter](https://github.com/millermedeiros/esformatter) plugin that adds the radix parameter to parseInt

```js
parseInt(1.1);
// transformed to:
parseInt(1.1, 10);
```

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install esformatter-parseint
```

## Usage

esformatter config file:

```json
{
  "plugins": [
    "esformatter-parseint"
  ]
}
```

## License

MIT
