/**
 * @file rule: img-src
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'img-src',

    desc: 'Attribute "src" of <img> should not be empty.',

    lint: function (getCfg, document, reporter) {
        document.querySelectorAll('img[src=""]').forEach(function (img) {
            if (!getCfg(img)) {
                return;
            }

            reporter.warn(img.startIndex, '013', 'Attribute "src" of <img> should not be empty.');
        });
    }

};
