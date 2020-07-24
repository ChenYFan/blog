"use strict";

var _sitemapper = _interopRequireDefault(require("../assets/sitemapper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sitemapper = new _sitemapper["default"]();
var Google = new _sitemapper["default"]({
  url: 'https://www.google.com/work/sitemap.xml',
  timeout: 15000 // 15 seconds

});
Google.fetch().then(function (data) {
  return console.log(data.sites);
})["catch"](function (error) {
  return console.log(error);
});
sitemapper.timeout = 5000;
sitemapper.fetch('http://wp.seantburke.com/sitemap.xml').then(function (_ref) {
  var url = _ref.url,
      sites = _ref.sites;
  return console.log("url:".concat(url), 'sites:', sites);
})["catch"](function (error) {
  return console.log(error);
});
sitemapper.fetch('http://www.cnn.com/sitemaps/sitemap-index.xml').then(function (data) {
  return console.log(data);
})["catch"](function (error) {
  return console.log(error);
});
sitemapper.fetch('http://www.stubhub.com/new-sitemap/us/sitemap-US-en-index.xml').then(function (data) {
  return console.log(data);
})["catch"](function (error) {
  return console.log(error);
});
//# sourceMappingURL=index.js.map