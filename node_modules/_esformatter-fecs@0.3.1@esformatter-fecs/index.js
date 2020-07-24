/**
 * @file api
 * @author chris<wfsr@foxmail.com>
 */
'use strict';


const util = require('./lib/util');
const rules = require('./lib/rules');


module.exports = {

    setOptions(options) {
        util.indent.setOptions(options.indent);
        util.linebreak.setOptions(options.lineBreak);
        util.whitespace.setOptions(options.whiteSpace);

        rules.register();
    },

    nodeAfter(node) {
        rules.transform(node);
    }
};
