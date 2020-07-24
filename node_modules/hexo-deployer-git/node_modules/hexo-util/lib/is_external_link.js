'use strict';

const { parse, URL } = require('url');

const Cache = require('./cache');
const cache = new Cache();

/**
 * Check whether the link is external
 * @param {String} input The url to check
 * @returns {Boolean} True if the link doesn't have protocol or link has same host with config.url
 */

function isExternalLink(input, sitehost, exclude) {
  return cache.apply(`${input}-${sitehost}-${exclude}`, () => {
    // Return false early for internal link
    if (!/^(\/\/|http(s)?:)/.test(input)) return false;

    sitehost = parse(sitehost).hostname || sitehost;

    if (!sitehost) return false;

    // handle relative url and invalid url
    let data;
    try {
      data = new URL(input, `http://${sitehost}`);
    } catch (e) { }

    // if input is invalid url, data should be undefined
    if (typeof data !== 'object') return false;

    // handle mailto: javascript: vbscript: and so on
    if (data.origin === 'null') return false;

    const host = data.hostname;

    if (exclude) {
      exclude = Array.isArray(exclude) ? exclude : [exclude];

      if (exclude && exclude.length) {
        for (const i of exclude) {
          if (host === i) return false;
        }
      }
    }

    if (host !== sitehost) return true;

    return false;
  });
}

module.exports = isExternalLink;
