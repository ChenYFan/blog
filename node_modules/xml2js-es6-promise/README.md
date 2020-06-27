# xml2js-es6-promise

ES6 promise wrapper for xml2js

### Installation

```
npm install xml2js-es6-promise
```

### Usage

```javascript
var xml2js = require('xml2js-es6-promise');

xml2js(xml).then(function(js) {
  console.log(JSON.stringify(js));
});

xml2js(xml, options).then(function(js) {
  console.log(JSON.stringify(js));
});

// e.g.
xml2js("<root>Hello xml2js!</root>", {trim: true}).then(function(js) {
  console.log(JSON.stringify(js));
});
```