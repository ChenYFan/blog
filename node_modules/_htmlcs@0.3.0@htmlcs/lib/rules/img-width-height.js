/**
 * @file rule: img-width-height
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'img-width-height',

    desc: 'Attribute "width" & "height" of <img> is recommended to be set.',

    lint: function (getCfg, document, reporter) {
        document.querySelectorAll('img').forEach(function (img) {
            if (!getCfg(img)) {
                return;
            }

            var width = img.getAttribute('width');
            var height = img.getAttribute('height');

            if (!width && !height) {
                reporter.warn(img.startIndex, '015', 'Attribute "width" & "height" of <img> is recommended to be set.');
            }
            else if (!width) {
                reporter.warn(img.startIndex, '016', 'Attribute "width" of <img> is recommended to be set.');
            }
            else if (!height) {
                reporter.warn(img.startIndex, '017', 'Attribute "height" of <img> is recommended to be set.');
            }
        });

    }

};
