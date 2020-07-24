/**
 * @file command: format
 * @author nighca<nighca@live.cn>
 */

var fs = require('fs');
var differ = require('differ-cli/lib/differ');
var helper = require('./helper');
var htmlcs = require('../../');

module.exports = {
    name: 'format',
    describe: 'Do format given file(s)',
    examples: [
        ['$0 format foo.html', 'do format foo.html'],
        ['$0 format --diff foo.html', 'do format foo.html & show diff result'],
        ['$0 format --in-place foo.html', 'do format foo.html & write file in place']
    ],

    handler: function (options, targetFiles) {
        // format directly
        var format = htmlcs.formatFile;

        // specified config
        if (options.config) {
            var config = helper.loadSpecifiedConfig(options.config);
            // format with specified config
            format = function (filePath) {
                return htmlcs.format(helper.readFile(filePath), config);
            };
        }

        targetFiles.forEach(function (filePath) {
            var result = format(filePath);

            if (options.diff) {
                console.log(
                    filePath
                    + ':'
                    + differ(helper.readFile(filePath), result)
                );
                return;
            }

            if (options['in-place']) {
                fs.writeFileSync(filePath, result);
                console.log('√', filePath);
                return;
            }

            console.log(result);
        });
    }
};
