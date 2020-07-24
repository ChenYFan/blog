/**
 * @file 根据模块Id计算文件路径
 * @author leeight(liyubei@baidu.com)
 *         errorrik(errorrik@gmail.com)
 */

var edp = require('../../index');

/**
 * 根据moduleId计算它的文件路径，如果是远程的文件路径，则直接忽略.
 *
 * @param {string} moduleId 模块的Id，也就是require函数的参数.
 * @param {string} baseId 所在模块的Id.
 * @param {string} baseFile 如果是匿名模块的话，就必须传递匿名模块所在的文件路径了.
 * @param {string} moduleConfigFile module.conf的文件内容.
 *
 * @return {{file: string, resource: string}}
 */
function toUrl(moduleId, baseId, baseFile, moduleConfigFile) {
    var file = null;
    var resource = null;

    var parts = moduleId.split('!');

    var resourceId = parts[1];
    if (resourceId && edp.path.isLocalPath(resourceId)) {
        resource = toUrl(resourceId, baseId, baseFile, moduleConfigFile).file;
    }

    moduleId = parts[0];
    if (moduleId[0] === '.') {
        // relative id
        if (!baseId) {
            file = edp.path.normalize(
                    edp.path.join(
                        edp.path.dirname(baseFile), moduleId
                    )
                ) + '.js';
        }
        else {
            // translate `relative id` to `top level id`
            moduleId = require('./resolve-module-id')(moduleId, baseId);
        }
    }

    if (!file) {
        // top level id
        file = require('./get-module-file')(moduleId, moduleConfigFile);
    }

    return {file: file, resource: resource};
}

module.exports = exports = toUrl;
