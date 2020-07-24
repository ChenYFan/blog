/**
 * @file fs.js
 * @author leeight(liyubei@baidu.com)
 */

var fs = require('fs');

/**
 * 读取文件的内容，返回utf-8编码的东东
 *
 * @param {string} file 文件路径.
 * @param {string=} fileEncoding 指定的文件编码.
 * @return {string}
 */
exports.readFileSync = function (file, fileEncoding) {
    var data = fs.readFileSync(file);
    if (!fileEncoding) {
        if (exports.isBinary(data)) {
            return data;
        }
        else {
            // 默认编码
            fileEncoding = 'UTF-8';
        }
    }

    if (fileEncoding) {
        var iconv = require('iconv-lite');

        if (/^utf-?8$/i.test(fileEncoding)) {
            // 删除UTF-8文件BOM
            if (data[0] === 0xEF && data[1] === 0xBB && data[2] === 0xBF) {
                data = data.slice(3);
            }

            return data.toString(fileEncoding);
        }
        else if (iconv.encodingExists(fileEncoding)) {
            return iconv.decode(data, fileEncoding);
        }
        else {
            return data;
        }
    }
};

/**
 * @param {Buffer} buffer 判断buffer是不是二进制的内容.
 * @return {boolean}
 */
exports.isBinary = function (buffer) {
    // 该检测方法为王杨提供
    var hexString = buffer.toString(
        'hex',
        0,
        Math.min(buffer.length, 4096)
    );

    while (1) {
        var zzIndex = hexString.indexOf('00');
        if (zzIndex < 0) {
            return false;
        }
        else if (zzIndex % 2 === 0) {
            return true;
        }

        hexString = hexString.slice(zzIndex + 1);
    }
};
