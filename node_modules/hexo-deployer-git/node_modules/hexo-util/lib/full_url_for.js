'use strict';

const { parse, URL } = require('url');
const encodeURL = require('./encode_url');
const prettyUrls = require('./pretty_urls');

const Cache = require('./cache');
const cache = new Cache();

function fullUrlForHelper(path = '/') {
  const { config } = this;
  const prettyUrlsOptions = Object.assign({
    trailing_index: true,
    trailing_html: true
  }, config.pretty_urls);

  // cacheId is designed to works across different hexo.config & options
  return cache.apply(`${config.url}-${prettyUrlsOptions.trailing_index}-${prettyUrlsOptions.trailing_html}-${path}`, () => {
    if (/^(\/\/|http(s)?:)/.test(path)) return path;

    const sitehost = parse(config.url).hostname || config.url;
    const data = new URL(path, `http://${sitehost}`);

    // Exit if input is an external link or a data url
    if (data.hostname !== sitehost || data.origin === 'null') return path;

    path = encodeURL(config.url + `/${path}`.replace(/\/{2,}/g, '/'));
    path = prettyUrls(path, prettyUrlsOptions);

    return path;
  });
}

module.exports = fullUrlForHelper;
