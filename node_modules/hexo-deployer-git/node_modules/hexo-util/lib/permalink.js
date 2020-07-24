'use strict';

const escapeRegExp = require('./escape_regexp');

const rParam = /:(\w*[^_\W])/g;

function Permalink(rule, options) {
  if (!rule) throw new TypeError('rule is required!');
  options = options || {};

  const segments = options.segments || {};
  const params = [];

  const regex = escapeRegExp(rule)
    .replace(rParam, (match, name) => {
      params.push(name);

      if (Object.prototype.hasOwnProperty.call(segments, name)) {
        const segment = segments[name];

        if (segment instanceof RegExp) {
          return segment.source;
        }

        return segment;
      }

      return '(.+?)';
    });

  this.rule = rule;
  this.regex = new RegExp(`^${regex}$`);
  this.params = params;
}

Permalink.prototype.test = function(str) {
  return this.regex.test(str);
};

Permalink.prototype.parse = function(str) {
  const match = str.match(this.regex);
  const { params } = this;
  const result = {};

  if (!match) return;

  for (let i = 1, len = match.length; i < len; i++) {
    result[params[i - 1]] = match[i];
  }

  return result;
};

Permalink.prototype.stringify = function(data) {
  return this.rule.replace(rParam, (match, name) => data[name]);
};

module.exports = Permalink;
