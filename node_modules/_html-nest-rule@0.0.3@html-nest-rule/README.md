html-nest-rule
========

[![Build Status](https://img.shields.io/travis/ecomfe/html-nest-rule.svg?style=flat)](http://travis-ci.org/ecomfe/html-nest-rule)
[![NPM version](https://img.shields.io/npm/v/html-nest-rule.svg?style=flat)](https://www.npmjs.com/package/html-nest-rule)
[![Coverage Status](https://img.shields.io/coveralls/ecomfe/html-nest-rule.svg?style=flat)](https://coveralls.io/r/ecomfe/html-nest-rule)
[![Dependencies](https://img.shields.io/david/ecomfe/html-nest-rule.svg?style=flat)](https://david-dm.org/ecomfe/html-nest-rule)
[![DevDependencies](https://img.shields.io/david/dev/ecomfe/html-nest-rule.svg?style=flat)](https://david-dm.org/ecomfe/html-nest-rule)


html-nest-rule is nesting rule realization for [HTML spec](https://www.w3.org/TR/html5/Overview.html).

### Install

``` shell
npm i html-nest-rule
```

### Usage

```javascript
var element = document.createElement('p');
var rule = require('html-nest-rule').from(element);

rule.getCategories(element);        // ['flow content', 'palpable content'], categories of given element
rule.validateContext(element);      // [], do context validate
rule.validateContent(element);      // [], do content validate
```
