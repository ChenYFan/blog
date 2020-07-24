/**
 * @file rule: doctype
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'doctype',

    desc: 'DOCTYPE needed.',

    lint: function (getCfg, document, reporter) {
        var doctype = document.doctype;
        var html = document.querySelector('html');

        if (!html || !getCfg(html) || doctype && doctype.name === 'html') {
            return;
        }

        if (doctype) {
            reporter.warn(doctype.startIndex, '041', 'DOCTYPE must be html5.');
        }
        else {
            reporter.warn(document.startIndex, '009', 'DOCTYPE needed.');
        }

    },

    format: function (getCfg, document, options) {
        var doctype = document.doctype;
        var html = document.querySelector('html');

        if (!html || !getCfg(html) || doctype && doctype.name === 'html') {
            return;
        }

        if (doctype) {
            doctype.name = 'html';
        }
        else {
            doctype = document.implementation.createDocumentType('html', '', '');
            document.insertBefore(doctype, document.firstElementChild);
            document.doctype = doctype;
        }
    }

};
