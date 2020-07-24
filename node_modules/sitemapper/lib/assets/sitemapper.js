"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _xml2jsEs6Promise = _interopRequireDefault(require("xml2js-es6-promise"));

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @typedef {Object} Sitemapper
 */
var Sitemapper =
/*#__PURE__*/
function () {
  /**
   * Construct the Sitemapper class
   *
   * @params {Object} options to set
   * @params {string} [options.url] - the Sitemap url (e.g http://wp.seantburke.com/sitemap.xml)
   * @params {Timeout} [options.timeout] - @see {timeout}
   *
   * @example let sitemap = new Sitemapper({
   *   url: 'http://wp.seantburke.com/sitemap.xml',
   *   timeout: 15000
   *  });
   */
  function Sitemapper(options) {
    _classCallCheck(this, Sitemapper);

    var settings = options || {};
    this.url = settings.url;
    this.timeout = settings.timeout || 15000;
    this.timeoutTable = {};
  }
  /**
   * Gets the sites from a sitemap.xml with a given URL
   *
   * @public
   * @param {string} [url] - the Sitemaps url (e.g http://wp.seantburke.com/sitemap.xml)
   * @returns {Promise<SitesData>}
   * @example sitemapper.fetch('example.xml')
   *  .then((sites) => console.log(sites));
   */


  _createClass(Sitemapper, [{
    key: "fetch",
    value: function fetch() {
      var _this = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.url;
      return new Promise(function (resolve) {
        return _this.crawl(url).then(function (sites) {
          return resolve({
            url: url,
            sites: sites
          });
        });
      });
    }
    /**
     * Get the timeout
     *
     * @example console.log(sitemapper.timeout);
     * @returns {Timeout}
     */

  }, {
    key: "parse",

    /**
     * Requests the URL and uses xmlParse to parse through and find the data
     *
     * @private
     * @param {string} [url] - the Sitemaps url (e.g http://wp.seantburke.com/sitemap.xml)
     * @returns {Promise<ParseData>}
     */
    value: function parse() {
      var _this2 = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.url;
      var requestOptions = {
        method: 'GET',
        uri: url,
        resolveWithFullResponse: true,
        gzip: true
      };
      return new Promise(function (resolve) {
        var requester = (0, _requestPromiseNative["default"])(requestOptions).then(function (response) {
          if (!response || response.statusCode !== 200) {
            clearTimeout(_this2.timeoutTable[url]);
            return resolve({
              error: response.error,
              data: response
            });
          }

          return (0, _xml2jsEs6Promise["default"])(response.body);
        }).then(function (data) {
          return resolve({
            error: null,
            data: data
          });
        })["catch"](function (response) {
          return resolve({
            error: response.error,
            data: {}
          });
        });

        _this2.initializeTimeout(url, requester, resolve);
      });
    }
    /**
     * Timeouts are necessary for large xml trees. This will cancel the call if the request is taking
     * too long, but will still allow the promises to resolve.
     *
     * @private
     * @param {string} url - url to use as a hash in the timeoutTable
     * @param {Promise} requester - the promise that creates the web request to the url
     * @param {Function} callback - the resolve method is used here to resolve the parent promise
     */

  }, {
    key: "initializeTimeout",
    value: function initializeTimeout(url, requester, callback) {
      var _this3 = this;

      // this resolves instead of rejects in order to allow other requests to continue
      this.timeoutTable[url] = setTimeout(function () {
        requester.cancel();
        callback({
          error: "request timed out after ".concat(_this3.timeout, " milliseconds"),
          data: {}
        });
      }, this.timeout);
    }
    /**
     * Recursive function that will go through a sitemaps tree and get all the sites
     *
     * @private
     * @recursive
     * @param {string} url - the Sitemaps url (e.g http://wp.seantburke.com/sitemap.xml)
     * @returns {Promise<SitesArray> | Promise<ParseData>}
     */

  }, {
    key: "crawl",
    value: function crawl(url) {
      var _this4 = this;

      return new Promise(function (resolve) {
        _this4.parse(url).then(function (_ref) {
          var error = _ref.error,
              data = _ref.data;
          // The promise resolved, remove the timeout
          clearTimeout(_this4.timeoutTable[url]);

          if (error) {
            // Fail silently
            return resolve([]);
          } else if (data && data.urlset && data.urlset.url) {
            var sites = data.urlset.url.map(function (site) {
              return site.loc && site.loc[0];
            });
            return resolve([].concat(sites));
          } else if (data && data.sitemapindex) {
            // Map each child url into a promise to create an array of promises
            var sitemap = data.sitemapindex.sitemap.map(function (map) {
              return map.loc && map.loc[0];
            });
            var promiseArray = sitemap.map(function (site) {
              return _this4.crawl(site);
            }); // Make sure all the promises resolve then filter and reduce the array

            return Promise.all(promiseArray).then(function (results) {
              var sites = results.filter(function (result) {
                return !result.error;
              }).reduce(function (prev, curr) {
                return prev.concat(curr);
              }, []);
              return resolve(sites);
            });
          } // Fail silently


          return resolve([]);
        });
      });
    }
    /**
     * /**
     * Gets the sites from a sitemap.xml with a given URL
     * @deprecated
     * @param {string} url - url to query
     * @param {getSitesCallback} callback - callback for sites and error
     * @callback
     */

  }, {
    key: "getSites",
    value: function getSites() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.url;
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      console.warn( // eslint-disable-line no-console
      'function getSites() is deprecated, please use the function fetch()');
      var err = {};
      var sites = [];
      this.fetch(url).then(function (response) {
        sites = response.sites;
      })["catch"](function (error) {
        err = error;
      });
      return callback(err, sites);
    }
  }], [{
    key: "timeout",
    get: function get() {
      return this.timeout;
    }
    /**
     * Set the timeout
     *
     * @public
     * @param {Timeout} duration
     * @example sitemapper.timeout = 15000; // 15 seconds
     */
    ,
    set: function set(duration) {
      this.timeout = duration;
    }
    /**
     *
     * @param {string} url - url for making requests. Should be a link to a sitemaps.xml
     * @example sitemapper.url = 'http://wp.seantburke.com/sitemap.xml'
     */

  }, {
    key: "url",
    set: function set(url) {
      this.url = url;
    }
    /**
     * Get the url to parse
     * @returns {string}
     * @example console.log(sitemapper.url)
     */
    ,
    get: function get() {
      return this.url;
    }
  }]);

  return Sitemapper;
}();
/**
 * Callback for the getSites method
 *
 * @callback getSitesCallback
 * @param {Object} error - error from callback
 * @param {Array} sites - an Array of sitemaps
 */

/**
 * Timeout in milliseconds
 *
 * @typedef {Number} Timeout
 * the number of milliseconds before all requests timeout. The promises will still resolve so
 * you'll still receive parts of the request, but maybe not all urls
 * default is 15000 which is 15 seconds
 */

/**
 * Resolve handler type for the promise in this.parse()
 *
 * @typedef {Object} ParseData
 *
 * @property {Error} error that either comes from `xmlParse` or `request` or custom error
 * @property {Object} data
 * @property {string} data.url - URL of sitemap
 * @property {Array} data.urlset - Array of returned URLs
 * @property {string} data.urlset.url - single Url
 * @property {Object} data.sitemapindex - index of sitemap
 * @property {string} data.sitemapindex.sitemap - Sitemap
 * @example {
 *   error: "There was an error!"
 *   data: {
 *     url: 'linkedin.com',
 *     urlset: [{
 *       url: 'www.linkedin.com/project1'
 *     },[{
 *       url: 'www.linkedin.com/project2'
 *     }]
 *   }
 * }
 */

/**
 * Resolve handler type for the promise in this.parse()
 *
 * @typedef {Object} SitesData
 *
 * @property {string} url - the original url used to query the data
 * @property {SitesArray} sites
 * @example {
 *   url: 'linkedin.com/sitemap.xml',
 *   sites: [
 *     'linkedin.com/project1',
 *     'linkedin.com/project2'
 *   ]
 * }
 */

/**
 * An array of urls
 *
 * @typedef {String[]} SitesArray
 * @example [
 *   'www.google.com',
 *   'www.linkedin.com'
 * ]
 */


exports["default"] = Sitemapper;
module.exports = exports.default;
module.exports.default = exports.default;
//# sourceMappingURL=sitemapper.js.map