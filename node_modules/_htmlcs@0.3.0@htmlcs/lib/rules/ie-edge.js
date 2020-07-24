/**
 * @file rule: ie-edge
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'ie-edge',

    desc: '<meta http-equiv="X-UA-Compatible" content="IE=Edge"> recommended.',

    lint: function (getCfg, document, reporter) {
        var head = document.querySelector('head');
        if (!head || !getCfg(head)) {
            return;
        }

        var hasEdgeMeta = false;
        head.querySelectorAll('meta').forEach(function (meta) {
            if (
                (meta.getAttribute('http-equiv') || '').toLowerCase() === 'x-ua-compatible'
                && (meta.getAttribute('content') || '').toLowerCase() === 'ie=edge'
            ) {
                hasEdgeMeta = true;
            }
        });

        if (!hasEdgeMeta) {
            reporter.warn(head.startIndex, '011', '<meta http-equiv="X-UA-Compatible" content="IE=Edge"> recommended.');
        }
    },

    format: function (getCfg, document, options) {
        var head = document.querySelector('head');
        if (!head || !getCfg(head)) {
            return;
        }

        var edgeMeta = head.querySelector('meta[http-equiv="X-UA-Compatible"]');

        if (edgeMeta) {
            edgeMeta.setAttribute('content', 'IE=Edge');
        }
        else {
            edgeMeta = document.createElement('meta');
            edgeMeta.setAttribute('http-equiv', 'X-UA-Compatible');
            edgeMeta.setAttribute('content', 'IE=Edge');

            var title = head.querySelector('title');
            if (title && title.nextSibling) {
                head.insertBefore(edgeMeta, title.nextSibling);
            }
            else {
                head.appendChild(edgeMeta);
            }
        }
    }

};
