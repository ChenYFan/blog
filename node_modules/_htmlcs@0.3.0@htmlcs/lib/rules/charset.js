/**
 * @file rule: charset
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'charset',

    desc: '<meta charset> recommended.',

    lint: function (getCfg, document, reporter) {
        var head = document.querySelector('head');
        if (!head || !getCfg(head)) {
            return;
        }

        var charsetMeta = head.querySelector('meta[charset]');
        if (!charsetMeta) {
            reporter.warn(head.startIndex, '006', '<meta charset> recommended.');
        }
        else if (charsetMeta !== head.firstElementChild) {
            reporter.warn(charsetMeta.startIndex, '007', '<meta> charset should be the first element child of <head>.');
        }
    },

    format: function (getCfg, document, options) {
        var head = document.querySelector('head');
        if (!head || !getCfg(head)) {
            return;
        }

        var charsetMeta = document.querySelector('meta[charset]');

        if (!charsetMeta) {
            charsetMeta = document.createElement('meta');
            charsetMeta.setAttribute('charset', 'utf-8');
        }

        if (charsetMeta !== head.firstElementChild) {
            if (head.firstElementChild) {
                head.insertBefore(charsetMeta, head.firstChild);
            }
            else {
                head.appendChild(charsetMeta);
            }
        }
    }

};
