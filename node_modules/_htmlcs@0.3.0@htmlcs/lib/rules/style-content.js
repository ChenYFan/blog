/**
 * @file rule: style-content
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    name: 'style-content',

    desc: 'Content of <style> must meet standard.',

    lint: function (getCfg, document, reporter, code) {
        document.getElementsByTagName('style').forEach(function (style) {
            if (!getCfg(style)) {
                return;
            }

            var linters = getCfg(style, 'linters');
            var linter = linters && linters.style;
            if (typeof linter !== 'function') {
                return;
            }

            if (!style.childNodes.length) {
                return;
            }

            var textNode = style.childNodes[0];
            var indent = (function (content) {
                return content.slice(content.lastIndexOf('\n') + 1);
            })(code.slice(0, style.startIndex));

            linter(
                textNode.textContent,
                util.getPosition(code, textNode.startIndex),
                style,
                indent
            );
        });
    }

};
