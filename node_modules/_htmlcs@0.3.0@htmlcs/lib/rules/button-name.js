/**
 * @file rule: button-name
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'button-name',

    desc: 'Attribute "name" of <button> is not recommended to be set.',

    lint: function (getCfg, document, reporter) {
        document.querySelectorAll('button[name]').forEach(function (button) {
            if (!getCfg(button)) {
                return;
            }

            reporter.warn(button.startIndex, '004', 'Attribute "name" of <button> is not recommended to be set.');
        });
    }

};
