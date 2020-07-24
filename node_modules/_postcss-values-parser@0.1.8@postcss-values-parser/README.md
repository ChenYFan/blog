# postcss-values-parser

<img align="right" width="95" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo.svg">

[![Build Status](https://travis-ci.org/lesshint/postcss-values-parser.svg?branch=master)](https://travis-ci.org/lesshint/postcss-values-parser)

A CSS property value parser for use with [PostCSS](https://github.com/postcss/postcss),
following the same node, container, and traversal patterns as PostCSS.

As with PostCSS and postcss-selector-parser, this parser generates an
[Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree),
(aka "AST") which allows for ease of traversal and granular inspection of each
part of a property's value.

## postcss-values-parser vs. postcss-value-parser

Yeah, it's a tad confusing. The [Lesshint](https://github.com/lesshint/lesshint)
project needed a parser that would allow detailed inspection of property values
to the same degree that PostCSS and [postcss-selector-parser](https://github.com/postcss/postcss-selector-parser)
provided. This was especailly important for the Lesshint project, as it provides
for very granular rules for linting LESS.

[postcss-value-parser](https://github.com/TrySound/postcss-value-parser)
makes a lot of assumption about how values should be parsed and how the resulting
AST should be organized. It was also fairly out of sync with the tokenzing and
traversal patterns and convenience methods found in PostCSS and
postcss-selector-parser.

So we needed an alternative, and drew upon all three projects to put together a
value parser that met and exceeded our needs. The improvements include:

- Written using ES6
- Uses the same Gulp toolchain as PostCSS
- Doesn't strip characters; eg. parenthesis
- Full AST traversal
- AST traversal based on node type
- Simple methods to derive strings from the parsed result
- Follows PostCSS patterns for whitespace between Nodes
- Provides convenience properties for number units, colors, etc.

## Usage

Please see the [API Documentation](API.md) for full usage information.

As with any NPM module, start with the install:

```
npm install postcss-values-parser
```

Using this parser is straightforward and doesn't require callbacks:

```js
// ES6
let parser = require('postcss-values-parser');
let ast = parser('#fff').parse();

let color = ast       // the Root node
              .first  // the Value node
              .first; // a Word node, containing the color value.
```

```js
// ES5
var parser = require('postcss-values-parser');
var ast = parser('#fff').parse();

var color = ast       // the Root node
              .first  // the Value node
              .first; // a Word node, containing the color value.
```

## Acknowledgements

This project was heavily influenced by [postcss-selector-parser](https://github.com/postcss/postcss-selector-parser)
and utilized many patterns and logical constructs from the project.

Tests and some tokenizing techniques found in [postcss-value-parser](https://github.com/TrySound/postcss-value-parser)
and were used.
