CSSHint
===
[![csshint](https://travis-ci.org/ecomfe/node-csshint.svg?branch=master)](https://travis-ci.org/ecomfe/node-csshint)
[![npm version](https://badge.fury.io/js/csshint.svg)](http://badge.fury.io/js/csshint)
[![Coverage Status](https://img.shields.io/coveralls/ecomfe/node-csshint.svg?style=flat)](https://coveralls.io/r/ecomfe/node-csshint)
[![Dependency Status](https://david-dm.org/ecomfe/node-csshint.png)](https://david-dm.org/ecomfe/node-csshint)
[![devDependency Status](https://david-dm.org/ecomfe/node-csshint/dev-status.png)](https://david-dm.org/ecomfe/node-csshint#info=devDependencies)

CSSHint is a code review tool based on NodeJS. The current rules are based on ecomfe [CSS STYLE SPEC](https://github.com/ecomfe/spec/blob/master/css-style-guide.md). It also covers [CSSLint](https://github.com/CSSLint/csslint) [rules](https://github.com/CSSLint/csslint/wiki/Rules).

After a period of code refactoring, we finally came to this version, in which `CSS` parser is replaced with [postcss](https://github.com/postcss/postcss).
In addition, we changed the way of implementation which was also able to improve the performance by a large margin. Meanwhile, the following `global` object has three attributes as follows:

- `global.CSSHINT_INVALID_ALL_COUNT`: it is used to count the number of `warn` to serve `max-error`.
- `global.CSSHINT_HEXCOLOR_CASE_FLAG`: it is used to record project's color value, whether the letters are small or capital. `0` is for small and `1` is for capital. This attribute is to serve `unifying-color-case-sensitive`.
- `global.CSSHINT_FONTFAMILY_CASE_FLAG`: it is used to record whether `font-family` is small or capital to serve `unifying-font-family-case-sensitive`.

[CONFIG Reference](https://github.com/ecomfe/node-csshint/blob/master/lib/config.js)


Install & Update
-------

CSSHint has been released on npm. It can be installed following the instructions.

    $ [sudo] npm install csshint [-g]

Follow the following instruction if you are to update your CSSHint.

    $ [sudo] npm update csshint [-g]
    

Usage
------

- in CLI
	
		$ csshint -v   // show version
		$ csshint [filePath|dirPath]   // run csshint on file or dir

- in Node.js
        
    	/**
	     * detect css file content
	     *
	     * @param {string} fileContent file content
	     * @param {Object=} config config of rule, optional
	     *
	     * @return {Promise} Promise Object
	     * reject and resolve arguments:
	     * {
	     * 		path: {string} file path
	     * 		messages: {Array.<Object>} warning messages, [{ruleName, line, col, errorChar, message, colorMessage}]
	     * }
	     */
	    exports.checkString(fileContent, config);
    
    
	    /**
	     * detect file
	     *
	     * @param {Object} file the object has path and content key
	     * @param {Array} errors warning messages
	     * @param {Function} done detect callback
	     */
	    check(file, errors, done);
 

TODO
------

- [x] Complete coverage [csslint](https://github.com/CSSLint/csslint) [rule](https://github.com/CSSLint/csslint/wiki/Rules)。
- [ ] support `/* csshint-disable ruleName */` and `/* csshint-enable ruleName1 */`.

### [CHANGELOG](https://github.com/ecomfe/node-csshint/blob/master/CHANGELOG.md)
