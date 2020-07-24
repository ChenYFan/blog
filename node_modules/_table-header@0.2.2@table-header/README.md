[![npm](https://nodei.co/npm/table-header.png)](https://nodei.co/npm/table-header/)

# table-header

[![Build Status](https://travis-ci.org/eush77/table-header.svg?branch=master)](https://travis-ci.org/eush77/table-header) [![Dependency Status][david-badge]][david]

Add header to a text table, with border.

Text table is array of rows of equal length:

```js
var table = [
  ['red', '#ff0000'],
  ['green', '#00ff00'],
  ['blue', '#0000ff']
];
```

[david]: https://david-dm.org/eush77/table-header
[david-badge]: https://david-dm.org/eush77/table-header.png

## Example

```js
var tableHeader = require('table-header');

tableHeader(table, ['color', 'code'])
//=> [
//     ['color', 'code'],
//     ['-----', '-------'],
//     ['red', '#ff0000'],
//     ['green', '#00ff00'],
//     ['blue', '#0000ff']
//   ]
```

## API

### `tableHeader(table, header, [opts])`

Returns a new table with `header` and the same data.

Options:

- `border` — `false` for no border, `true` (default) for `-`-delimited border, single-character string for custom-delimited border.

- `stringLength` — string length function, e.g. to ignore escape codes.

## `tableHeader.add(table, header, [opts])`

Add header to existing `table`, modifying it.

## Related

- [text-table] module turns these tables to strings.
- [string-length] — string length function that ignores escape codes.

[text-table]: http://npm.im/text-table
[string-length]: http://npm.im/string-length

## Install

```
npm install table-header
```

## License

MIT
