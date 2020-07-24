/**
 * @file rule: img-title
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'img-title',

    desc: 'Attribute "title" of <img> is not recommended to be set.',

    lint: function (getCfg, document, reporter) {
        document.querySelectorAll('img[title]').forEach(function (img) {
            if (!getCfg(img)) {
                return;
            }

            reporter.warn(img.startIndex, '014', 'Attribute "title" of <img> is not recommended to be set.');
        });

    }

};
