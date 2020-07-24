/**
 * @file rule: no-bom
 * @author chris<wfsr@foxmail.com>
 */

module.exports = {

    name: 'no-bom',

    desc: 'HTML file should save with UTF-8 encoding without BOM.',

    target: 'parser',

    lint: function (getCfg, parser, reporter, code) {

        if (!getCfg()) {
            return;
        }

        if (code.charCodeAt(0) === 0xFEFF) {
            reporter.warn(0, '046', 'Unexpected Unicode BOM (Byte Order Mark).');
        }
    }

};
