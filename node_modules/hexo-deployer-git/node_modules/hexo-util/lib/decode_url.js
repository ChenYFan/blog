'use strict';

const { parse, URL } = require('url');
const { toUnicode } = require('punycode.js');

const safeDecodeURI = str => {
  try {
    return decodeURI(str);
  } catch (err) {
    return str;
  }
};

const decodeURL = str => {
  if (parse(str).protocol) {
    const parsed = new URL(str);

    // Exit if input is a data url
    if (parsed.origin === 'null') return str;

    // TODO: refactor to `url.format()` once Node 8 is dropped
    const url = parsed.toString().replace(parsed.hostname, toUnicode(parsed.hostname));
    return safeDecodeURI(url);
  }

  return safeDecodeURI(str);
};

module.exports = decodeURL;
