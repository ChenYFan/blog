'use strict';

module.exports = function(str){
  if (typeof str !== 'string') throw new TypeError('str must be a string!');

  // http://stackoverflow.com/a/6969486
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};
