/**
 * @file command: hint
 * @author nighca<nighca@live.cn>
 */

var helper = require('./helper');
var htmlcs = require('../../');

module.exports = {
    name: 'hint',
    describe: 'Do hint given file(s)',
    examples: [
        ['$0 hint foo.html', 'do hint foo.html'],
        ['$0 hint foo.html bar.html', 'do hint foo.html & bar.html'],
        ['$0 hint ./', 'do hint html files under ./']
    ],

    handler: function (options, targetFiles) {
        // hint directly
        var hint = htmlcs.hintFile;

        // specified config
        if (options.config) {
            var config = helper.loadSpecifiedConfig(options.config);
            // hint with specified config
            hint = function (filePath) {
                return htmlcs.hint(helper.readFile(filePath), config);
            };
        }

        var hasError = false;

        targetFiles.forEach(function (filePath) {
            var result = hint(filePath);

            console.log(filePath + ':');

            if (result.length) {
                hasError = true;

                result.forEach(function (item) {
                    console.log(
                        '[%s] line %d, column %d: %s (%s, %s)',
                        item.type,
                        item.line,
                        item.column,
                        item.message,
                        item.rule,
                        item.code
                    );
                });
            }
            else {
                console.log('No hint result.');
            }

            console.log('');
        });

        if (hasError) {
            process.exit(1);
        }
    }
};
