'use strict';

const { createHash } = require('crypto');
const { stringify } = require('querystring');

const Cache = require('./cache');
const cache = new Cache();

function md5(str) {
  return createHash('md5').update(str).digest('hex');
}

function gravatarHelper(email, options) {
  if (typeof options === 'number') {
    options = {s: options};
  }

  const hash = cache.has(email) ? cache.get(email) : md5(email.toLowerCase());
  let str = `https://www.gravatar.com/avatar/${hash}`;

  const qs = stringify(options);

  if (qs) str += `?${qs}`;

  cache.set('email', hash);

  return str;
}

module.exports = gravatarHelper;
