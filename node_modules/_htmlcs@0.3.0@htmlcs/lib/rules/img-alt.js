/**
 * @file rule: img-alt
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'img-alt',

    desc: 'Attribute "alt" of <img> is recommended to be set.',

    lint: function (getCfg, document, reporter) {
        document.querySelectorAll('img:not([alt]), img[alt=""]').forEach(function (img) {
            if (!getCfg(img)) {
                return;
            }

            reporter.warn(img.startIndex, '012', 'Attribute "alt" of <img> is recommended to be set.');
        });
    }

};
