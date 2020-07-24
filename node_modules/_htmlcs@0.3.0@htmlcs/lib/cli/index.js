/**
 * @file cli methods
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    commands: [
        require('./hint'),
        require('./format')
    ],

    options: [
        {
            name: 'c',
            alias: 'config',
            describe: 'Path to custom configuration file.',
            type: 'string'
        },
        {
            name: 'diff',
            describe: 'Check code style and output char diff.',
            type: 'boolean'
        },
        {
            name: 'i',
            alias: 'in-place',
            describe: 'Edit input files in place; use with care!',
            type: 'boolean'
        }
    ],

    helper: require('./helper')
};
