'use strict';

const escapeRegExp = require('./escape_regexp');

const rParam = /([:*])([\w?]*)?/g;

function Pattern(rule) {
  if (rule instanceof Pattern) {
    return rule;
  } else if (typeof rule === 'function') {
    this.match = rule;
  } else if (rule instanceof RegExp) {
    this.match = regexFilter(rule);
  } else if (typeof rule === 'string') {
    this.match = stringFilter(rule);
  } else {
    throw new TypeError('rule must be a function, a string or a regular expression.');
  }
}

Pattern.prototype.test = function(str) {
  return Boolean(this.match(str));
};

function regexFilter(rule) {
  return str => str.match(rule);
}

function stringFilter(rule) {
  const params = [];

  const regex = escapeRegExp(rule)
    .replace(/\\([*?])/g, '$1')
    .replace(rParam, (match, operator, name) => {
      let str = '';

      if (operator === '*') {
        str = '(.*)?';
      } else {
        str = '([^\\/]+)';
      }

      if (name) {
        if (name[name.length - 1] === '?') {
          name = name.slice(0, name.length - 1);
          str += '?';
        }

        params.push(name);
      }

      return str;
    });

  return str => {
    const match = str.match(regex);
    if (!match) return;

    const result = {};

    for (let i = 0, len = match.length; i < len; i++) {
      const name = params[i - 1];
      result[i] = match[i];
      if (name) result[name] = match[i];
    }

    return result;
  };
}

module.exports = Pattern;
