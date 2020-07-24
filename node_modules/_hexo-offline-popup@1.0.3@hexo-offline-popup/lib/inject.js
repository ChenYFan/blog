'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = inject;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file inject service worker to hexo page
 * @author mj(zoumiaojiang@gmail.com)
 */

var injectScriptCon = _fs2.default.readFileSync(_path2.default.join(__dirname, 'templates', 'inject.tpl.js'), 'utf-8');
var injectScript = `<script async>${injectScriptCon}</script>`;

function inject(publicDir) {

    _fs2.default.readdirSync(publicDir).forEach(function (item) {
        var itemPath = _path2.default.resolve(publicDir, item);

        if (_fs2.default.statSync(itemPath).isFile()) {
            if (/\.html$/.test(item)) {
                var indexHTMLPath = _path2.default.join(publicDir, item);
                var fileContent = _fs2.default.readFileSync(indexHTMLPath, 'utf-8').toString();

                // if it has not been injected before
                if (!fileContent.includes(`${injectScript}</body></html>`)) {
                    var injectedContent = fileContent.replace(/<\/body>\s*<\/html>\s*$/, `${injectScript}</body></html>`);
                    _fs2.default.writeFileSync(indexHTMLPath, injectedContent);
                }
            }
        } else if (_fs2.default.statSync(itemPath).isDirectory()) {
            inject(itemPath);
        }
    });
}