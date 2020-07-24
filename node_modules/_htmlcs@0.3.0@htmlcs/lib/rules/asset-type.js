/**
 * @file rule: asset-type
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'asset-type',

    desc: 'Default value of attribute "type" (<link>/<style>/<script>) does not need to be set.',

    lint: function (getCfg, document, reporter) {
        document.querySelectorAll('link[type="text/css"], style[type="text/css"]').forEach(function (element) {
            if (!getCfg(element)) {
                return;
            }

            reporter.warn(
                element.startIndex,
                '001',
                'Default value of attribute "type" ("text/css") does not need to be set.'
            );
        });

        document.querySelectorAll('script[type="text/javascript"]').forEach(function (element) {
            if (!getCfg(element)) {
                return;
            }

            reporter.warn(
                element.startIndex,
                '002',
                'Default value of attribute "type" ("text/javascript") does not need to be set.'
            );
        });
    },

    format: function (getCfg, document, options) {
        document.querySelectorAll(
            'link[type="text/css"], style[type="text/css"], script[type="text/javascript"]'
        ).forEach(function (element) {
            if (!getCfg(element)) {
                return;
            }

            element.removeAttribute('type');
        });
    }

};
