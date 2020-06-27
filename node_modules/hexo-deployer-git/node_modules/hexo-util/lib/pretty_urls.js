'use strict';

function prettyUrls(url, options = {}) {
  options = Object.assign({
    trailing_index: true,
    trailing_html: true
  }, options);

  const indexPattern = /index\.html$/;
  if (options.trailing_index === false) url = url.replace(indexPattern, '');
  if (options.trailing_html === false && !indexPattern.test(url)) {
    url = url.replace(/\.html$/, '');
  }

  return url;
}

module.exports = prettyUrls;
