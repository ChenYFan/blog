/**
 * @since 15-08-19 16:37
 * @author vivaxy
 */
'use strict';
var log = require('../index.js');

console.log('--- test output ---');
log.verbose('verbose', log.Log.VERBOSE);
log.debug('debug', log.Log.DEBUG);
log.info('info', log.Log.INFO);
log.warn('warn', log.Log.WARN);
log.error('error', log.Log.ERROR);

console.log('--- test set level and set date format ---');
log.setLevel(3);
log.setDateFormat('yyyy-mm-dd');
log.verbose('verbose', log.Log.VERBOSE);
log.debug('debug', log.Log.DEBUG);
log.info('info', log.Log.INFO);
log.warn('warn', log.Log.WARN);
log.error('error', log.Log.ERROR);

console.log('--- test new instance ---');
var anotherLog = new log.Log(1);
anotherLog.verbose('verbose', log.Log.VERBOSE);
anotherLog.debug('debug', log.Log.DEBUG);
anotherLog.info('info', log.Log.INFO);
anotherLog.warn('warn', log.Log.WARN);
anotherLog.error('error', log.Log.ERROR);

console.log('--- new instance should not affects others ---');
log.verbose('verbose', log.Log.VERBOSE);
log.debug('debug', log.Log.DEBUG);
log.info('info', log.Log.INFO);
log.warn('warn', log.Log.WARN);
log.error('error', log.Log.ERROR);

console.log('--- access to level array, new instances should not have levelArray ---');
console.log(log.levelArray);
console.log(anotherLog.levelArray);

console.log('--- output objects ---');
log.error({
    string: 'string',
    number: 1,
    boolean: true,
    functions: function () {
        log.debug('output function');
    },
    date: new Date(),
    array: [1, 'string', false],
    object: {
        string: 'string',
        number: 2
    }
});
