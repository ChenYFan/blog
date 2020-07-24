"use strict";

var _sitemapper = _interopRequireDefault(require("../assets/sitemapper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Google = new _sitemapper["default"]({
  url: 'https://www.google.com/work/sitemap.xml',
  timeout: 15000 // 15 seconds

});
Google.fetch().then(function (data) {
  return console.log(data.sites);
}) // eslint-disable-line no-console
["catch"](function (error) {
  return console.log(error);
}); // eslint-disable-line no-console
//# sourceMappingURL=google.js.map