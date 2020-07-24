/**
 * @file rule: script-in-tail
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'script-in-tail',

    desc: 'All javascript contents are recommended to be imported in the tail of <body>.',

    lint: function (getCfg, document, reporter) {
        var html = document.querySelector('html');
        var body = document.querySelector('body');

        if (!(html  || body)) {
            return;
        }

        var isInTail = function (element) {
            var tagName = element.tagName;

            // should: no parent, or parent is <html>, or parent is <body>
            if (
                document.children.indexOf(element) < 0
                && (!html || html.children.indexOf(element) < 0)
                && (!body || body.children.indexOf(element) < 0)
            ) {
                return false;
            }

            // should: no followed elements unless with the same tag
            while (element = element.nextElementSibling) {
                if (element.tagName !== tagName) {
                    return false;
                }
            }

            return true;
        };

        document.querySelectorAll('script:not([type]), script[type="text/javascript"]').forEach(function (script) {
            if (!getCfg(script)) {
                return;
            }

            if (!isInTail(script)) {
                reporter.warn(
                    script.startIndex,
                    '023',
                    'JavaScript contents are recommended to be imported in the tail of <body>.'
                );
            }
        });
    }

};
