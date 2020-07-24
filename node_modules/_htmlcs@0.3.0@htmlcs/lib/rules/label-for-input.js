/**
 * @file rule: label-for-input
 * @author chris<wfsr@foxmail.com>
 */

module.exports = {

    name: 'label-for-input',

    desc: 'Most <input> should be associate with <label>.',

    lint: function (getCfg, document, reporter) {

        document.querySelectorAll('input').forEach(function (input) {
            if (!getCfg(input)
                || /^(?:reset|submit|button|image)$/i.test(input.getAttribute('type'))
                || input.matches('label input')
            ) {
                return;
            }

            var id = input.getAttribute('id');
            var label = id && document.querySelector('label[for=' + id + ']');

            if (!label) {
                reporter.warn(input.startIndex, '044', '<input> should be associate with <label>.');
            }

        });
    }

};
