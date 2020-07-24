/**
 * @file rule: css-in-head
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'css-in-head',

    desc: 'All css contents are recommended to be imported in <head>.',

    lint: function (getCfg, document, reporter) {
        var head = document.querySelector('head');

        document.querySelectorAll('link[rel="stylesheet"], style').forEach(function (css) {
            if (!getCfg(css)) {
                return;
            }

            if (!(head && head.contains(css))) {
                reporter.warn(css.startIndex, '008', 'CSS contents are recommended to be imported in <head>.');
            }
        });
    },

    format: function (getCfg, document, options) {
        if (!getCfg()) {
            return;
        }

        var head = document.querySelector('head');
        head && document.querySelectorAll('link[rel="stylesheet"], style').forEach(function (css) {
            if (!getCfg(css) || head.contains(css)) {
                return;
            }

            head.appendChild(css);
        });
    }

};
