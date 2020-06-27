'use strict';

const unescapeHTML = require('./unescape_html');

const htmlEntityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
  '`': '&#96;',
  '/': '&#x2F;',
  '=': '&#x3D;'
};

function escapeHTML(str) {
  if (typeof str !== 'string') throw new TypeError('str must be a string!');

  str = unescapeHTML(str);

  // http://stackoverflow.com/a/12034334
  return str.replace(/[&<>"'`/=]/g, a => htmlEntityMap[a]);
}

module.exports = escapeHTML;
