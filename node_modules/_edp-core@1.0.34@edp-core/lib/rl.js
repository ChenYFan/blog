/**
 * @file 对readline接口的封装处理
 * @author leeight(liyubei@baidu.com)
 */

/**
 * 类似浏览器里面的prompt方法，给用户提示信息，然后让用户输入.
 *
 * @param {string} msg 提示信息.
 * @param {function(string)} callback 处理用户输入的回调函数.
 */
exports.prompt = function (msg, callback) {
    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(msg, function (answer) {
        rl.close();
        callback(answer);
    });
};
