'use strict';

function truncate(str, options = {}) {
  if (typeof str !== 'string') throw new TypeError('str must be a string!');

  const length = options.length || 30;
  const omission = options.omission || '...';
  const { separator } = options;
  const omissionLength = omission.length;

  if (str.length < length) return str;

  if (separator) {
    const words = str.split(separator);
    let result = '';
    let resultLength = 0;

    for (const word of words) {
      if (resultLength + word.length + omissionLength < length) {
        result += word + separator;
        resultLength = result.length;
      } else {
        return result.substring(0, resultLength - 1) + omission;
      }
    }
  } else {
    return str.substring(0, length - omissionLength) + omission;
  }
}

module.exports = truncate;
