/**
 * @file rule: style-disabled
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'style-disabled',

    desc: 'Style tag can not be used.',

    lint: function (getCfg, document, reporter) {
        document.getElementsByTagName('style').forEach(function (element) {
            if (!getCfg(element)) {
                return;
            }

            reporter.warn(
                element.startIndex,
                '034',
                'Style tag can not be used.'
            );
        });
    }

};
