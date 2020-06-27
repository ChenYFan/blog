'use strict';

var highlight = require('highlight.js');
var Highlights = require('highlights');
var highlighter = new Highlights();
var util = require('../lib');
var fs = require('fs');
var pathFn = require('path');
var fixture = fs.readFileSync(pathFn.join(__dirname, 'fixtures', 'q3.js'), 'utf8');

// Run util.highlight to load highlight.js
util.highlight('');

module.exports = {
  name: 'Highlight',
  tests: [
    {
      name: 'highlight.js - auto detect',
      fn: function(){
        highlight.highlightAuto(fixture);
      }
    },
    {
      name: 'highlight.js - language set',
      fn: function(){
        highlight.highlight('js', fixture);
      }
    },
    {
      name: 'util.highlight - auto detect',
      fn: function(){
        util.highlight(fixture);
      }
    },
    {
      name: 'util.highlight - language set',
      fn: function(){
        util.highlight(fixture, {lang: 'js'});
      }
    },
    {
      name: 'highlights',
      fn: function(){
        highlighter.highlightSync({
          fileContents: fixture,
          scopeName: 'q3.js'
        });
      }
    }
  ]
};