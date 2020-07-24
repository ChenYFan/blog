htmlcs
========

[![Build Status](https://img.shields.io/travis/ecomfe/htmlcs.svg?style=flat)](http://travis-ci.org/ecomfe/htmlcs)
[![NPM version](https://img.shields.io/npm/v/htmlcs.svg?style=flat)](https://www.npmjs.com/package/htmlcs)
[![Coverage Status](https://img.shields.io/coveralls/ecomfe/htmlcs.svg?style=flat)](https://coveralls.io/r/ecomfe/htmlcs)
[![Dependencies](https://img.shields.io/david/ecomfe/htmlcs.svg?style=flat)](https://david-dm.org/ecomfe/htmlcs)
[![DevDependencies](https://img.shields.io/david/dev/ecomfe/htmlcs.svg?style=flat)](https://david-dm.org/ecomfe/htmlcs)


HTML code style check & format tool.

### Install

	npm i -g htmlcs

### Usage

* in CLI

	```shell
	Usage: htmlcs <command> [options] [target...]

	Commands:
	  hint    Do hint given file(s)
	  format  Do format given file(s)

	Options:
	  -h, --help      Show help                                            [boolean]
	  -c, --config    Path to custom configuration file.                    [string]
	  --diff          Check code style and output char diff.               [boolean]
	  -i, --in-place  Edit input files in place; use with care!            [boolean]
	  -v, --version   Show version number                                  [boolean]

	Examples:
	  htmlcs hint foo.html               do hint foo.html
	  htmlcs hint foo.html bar.html      do hint foo.html & bar.html
	  htmlcs hint ./                     do hint html files under ./
	  htmlcs format foo.html             do format foo.html
	  htmlcs format --diff foo.html      do format foo.html & show diff result
	  htmlcs format --in-place foo.html  do format foo.html & write file in place

	```

* in Node.js / browser (with [browserify](https://github.com/substack/node-browserify))

	* hint file

		```javascript
		var htmlcs = require('htmlcs');
		var result = htmlcs.hintFile(filePath);
		```

	* hint code (string)

		```javascript
		var htmlcs = require('htmlcs');
		var result = htmlcs.hint(code);
		// Or
		htmlcs.hintAsync(code).then(
			result => { /* ... */ }
		);
		```

	* use hint result

		```javascript
		result.forEach(function(item){
		    console.log(
		        '[%s] line %d, column %d: %s (%s, %s)',
		        item.type,
		        item.line,
		        item.column,
		        item.message,
		        item.rule,
		        item.code
		    );
		});
		```

	* format file

		```javascript
		var htmlcs = require('htmlcs');
		console.log(htmlcs.formatFile(filePath));
		```

	* format code (string)

		```javascript
		var htmlcs = require('htmlcs');
		console.log(htmlcs.format(code));
		// Or
		htmlcs.formatAsync(code).then(
			result => console.log(result)
		);
		```

	* add rule

		```javascript
		var htmlcs = require('htmlcs');
		htmlcs.addRule({
		    name: 'test-rule',
		    desc: 'Just a test rule.',
		    lint: function (getCfg, document, reporter) {
		        reporter.warn(
		            1,
		            '099',
		            'This is a test waring!'
		        );
		    }
		});
		var result = htmlcs.hint(code);
		```

* with Gulp/Grunt

	There is no official Gulp/Grunt plugin yet. We recommend [fecs](https://github.com/ecomfe/fecs), which uses htmlcs to hint HTML code and provides a wealth of tools.

	- [fecs-gulp](https://github.com/ecomfe/fecs-gulp)

	- [fecs-grunt](https://github.com/ecomfe/fecs-grunt)

### Rules & Codes

[lib/rules/](./lib/rules/)

[rule map](./lib/default/rule-map.json)

### Config

* default: [lib/default/.htmlcsrc](./lib/default/htmlcsrc)

* custom:

	Custom rule file (.htmlcsrc) can be placed in the same/parent directory of target file, or the `~/` directory.

	If found in neither paths, the default config will be used.

* inline:

	- disable

		```html
		<!-- htmlcs-disable -->
		<!-- htmlcs-disable img-alt -->
		<!-- htmlcs-disable img-alt, img-src, attr-value-double-quotes -->
		```

	- enable

		```html
		<!-- htmlcs-enable -->
		<!-- htmlcs-enable img-alt -->
		<!-- htmlcs-enable img-alt, img-src, attr-value-double-quotes -->
		```

	- config

		```html
		<!-- htmlcs img-width-height: true -->
		<!-- htmlcs img-width-height: true, indent-char: "tab" -->
		```

### Relative third-party tools

* [grunt-htmlcs](https://github.com/RRMoelker/grunt-htmlcs)
