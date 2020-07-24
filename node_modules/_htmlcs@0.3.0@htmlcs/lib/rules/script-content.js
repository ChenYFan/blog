/**
 * @file rule: script-content
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    name: 'script-content',

    desc: 'Content of <script> must meet standard.',

    lint: function (getCfg, document, reporter, code) {
        document.querySelectorAll('script:not([type]), script[type="text/javascript"]').forEach(function (script) {
            if (!getCfg(script)) {
                return;
            }

            var linters = getCfg(script, 'linters');
            var linter = linters && linters.script;
            if (typeof linter !== 'function') {
                return;
            }

            if (!script.childNodes.length) {
                return;
            }

            var textNode = script.childNodes[0];
            var indent = (function (content) {
                return content.slice(content.lastIndexOf('\n') + 1);
            })(code.slice(0, script.startIndex));

            linter(
                textNode.textContent,
                util.getPosition(code, textNode.startIndex),
                script,
                indent
            );
        });
    }

};
