/**
 * @file rule: lowercase-id-with-hyphen
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'lowercase-id-with-hyphen',

    desc: 'Id should be lowercase words connected with hyphens.',

    lint: function (getCfg, document, reporter) {
        document.querySelectorAll('[id]').forEach(function (element) {
            if (!getCfg(element)) {
                return;
            }

            if (element.id.toLowerCase() !== element.id) {
                reporter.warn(element.startIndex, '020', 'Id should be lowercase words.');
            }
            if (element.id.indexOf('_') >= 0) {
                reporter.warn(element.startIndex, '021', 'Id parts should be connected with "-" insteadof "_".');
            }
        });
    }

};
