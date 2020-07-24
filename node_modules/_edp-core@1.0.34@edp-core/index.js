/**
 * @file index.js
 * @author leeight(leeight@gmail.com)
 */


require('fs').readdirSync(__dirname + '/lib').forEach(
    function (file) {
        if (/\.js$/.test(file)) {
            file = file.replace(/\.js$/, '');
            exports[file] = require('./lib/' + file);
        }
    }
);

// 暴露Deferred的构造函数，所有需要的地方都可以用了
exports.Deferred = require('./lib/base/Deferred');
exports.chalk = require('chalk');
