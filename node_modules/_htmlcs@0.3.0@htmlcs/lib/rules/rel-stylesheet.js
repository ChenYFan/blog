/**
 * @file rule: rel-stylesheet
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'rel-stylesheet',

    desc: 'Attribute "rel" of <link> should be set as "stylesheet".',

    lint: function (getCfg, document, reporter) {
        document.querySelectorAll('link').forEach(function (element) {
            if (!getCfg(element)) {
                return;
            }

            if (!element.getAttribute('rel')) {
                reporter.warn(element.startIndex, '022', 'Attribute "rel" of <link> should be set as "stylesheet".');
            }
        });

    },

    format: function (getCfg, document, options) {
        document.querySelectorAll('link').forEach(function (element) {
            if (!getCfg(element)) {
                return;
            }

            if (!element.getAttribute('rel')) {
                element.setAttribute('rel', 'stylesheet');
            }
        });
    }

};
