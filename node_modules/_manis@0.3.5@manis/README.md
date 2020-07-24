Manis
==========

For build system plugins that need to fetch relative config files (like .fecsrc).



[![Build Status](https://img.shields.io/travis/ecomfe/manis.svg?style=flat)](http://travis-ci.org/ecomfe/manis)
[![NPM version](https://img.shields.io/npm/v/manis.svg?style=flat)](https://www.npmjs.com/package/manis)
[![Coverage Status](https://img.shields.io/coveralls/ecomfe/manis.svg?style=flat)](https://coveralls.io/r/ecomfe/manis)
[![DevDependencies](https://img.shields.io/david/dev/ecomfe/manis.svg?style=flat)](https://david-dm.org/ecomfe/manis)

## Install

```sh
npm install manis
```


## Usage

### Using `strip-json-comments`

```javascript
var Manis = require('manis');
var stripJSONComments = require('strip-json-comments');

var loader = function (text) {
    return JSON.parse(stripJSONComments(text));
};

var manis = new Manis({
    files: [
        {
            // just for example, it should be loaded as yaml in fact.
            name: '.eslintrc',
            get: function (json) {
                return {eslint: json};
            }
        },
        '.fecsrc',
        {
            name: 'package.json',
            get: function (json) {
                return json.fecs || {};
            }
        }
    ],
    loader: loader
});

var options = manis.from('path/to/file.js');

// do something cool with options
```

#### NOTICE: the default loader strip comment after manis@0.3.0.

### Loading `.yml` with `js-yaml`

```javascript
var yaml = require('js-yaml');

var Manis = require('manis');

var loader = function (text) {
    return yaml.load(text);
};

var manis = new Manis('.travis.yml', {loader: loader});

var options = manis.from('path/to/file.js');

// do something cool with options
```

#### NOTICE: the default loader used `js-yaml` to load YAML and JSON content after manis@0.3.0.


### With defaults

```javascript
var Manis = require('manis');

var manis = new Manis({
    files: [
        '.fecsrc',
        {
            name: 'package.json',
            get: 'fecs'
        }
    ]
});

manis.setDefault('default/path/to/config/fecs.json');

var options = manis.from('path/to/file.js');

// do something cool with options
```


### User config

```javascript
var Manis = require('manis');

var manis = new Manis({
    files: [
        '.fecsrc',
        {
            name: 'package.json',
            get: 'fecs'
        }
    ]
});

manis.setDefault('default/path/to/config/fecs.json');

// will find `~/.fecsrc`
manis.setUserConfig();

var options = manis.from('path/to/file.js');

// do something cool with options
```


### Within a gulp plugin

```javascript
var Manis = require('manis');
var map = require('map-stream');

module.exports = function MyGulpPlugin(options) {
    var manis = new Manis('.fecsrc', options);

    return map(function (file, cb) {

        // get the options for this file specifically
        var options = manis.from(file.path);

        // do something cool

        // send the file along
        cb(null, file);

    });
};
```


## API

### new Manis(string fileName[, Object options]);
### new Manis(string[] fileNames[, Object options]);
### new Manis(Object[] finderOptioins[, Object options]);
### new Manis(Object options);

### void Manis#setDefault(Object defaultValue);
### void Manis#setDefault(string filePath[, Object finderOptions]);

### void Manis#setUserConfig();
### void Manis#setUserConfig(Object userConfig);
### void Manis#setUserConfig(string userConfigPathOrName[, Object finderOptions]);

### Object Manis#from(string path);

### Manis.yaml;

Alias for `js-yaml` module.

### Object Manis.loader;

The default loader, parse JSON or YAML content with `js-yaml`.


### Object Manis#from(string path);

#### options

 - `files`, Array or string, items could be string or Object.

 - `loader`, Function，parser for config content.

 - `lookup`, Boolean, Find all up-level config files. default is true.

 - `merge`, Boolean, Merge all config objects. default is true.

 - `cache`, Boolean, Cache config files. default is true.

 - `rootName`, String, The name of flag when `enableRoot` set to true. default is 'root'.

 - `enableRoot`, Boolean, Enable the root flag to stop lookup in up-level directory. default is false.

 - `stopper`, Function, the predicate for stopping search. default is null.

#### finderOptions

 - `name`, string, the file name to be searched.

 - `loader`, Funtion, the same as options.loader above;

 - `stopper`, Function, the predicate for stopping search.

 - `get`, string or Function, the field name to retrieve from config object.

 - `cache`, Boolean, Cache config files. default is true.
