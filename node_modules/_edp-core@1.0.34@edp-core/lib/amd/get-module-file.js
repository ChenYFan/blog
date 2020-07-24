/**
 * @file 根据模块Id获取模块的文件路径
 * @author errorrik[errorrik@gmail.com]
 */

var path = require('../path');
var fs = require('fs');

/**
 * 获取module文件路径
 *
 * @param {string} moduleId module id
 * @param {string} moduleConfigFile module配置文件路径
 * @param {Object=} moduleConfig module.conf的内容
 * @return {string}
 */
module.exports = exports = function (moduleId, moduleConfigFile, moduleConfig) {
    if (!moduleConfig && !fs.existsSync(moduleConfigFile)) {
        return null;
    }

    moduleConfig = moduleConfig || JSON.parse(fs.readFileSync(moduleConfigFile, 'utf-8'));
    var basePath = path.dirname(moduleConfigFile);

    var baseUrl = moduleConfig.baseUrl + '/';

    // try match packages
    var packages = moduleConfig.packages || [];
    for (var i = 0; i < packages.length; i++) {
        var pkg = packages[i];
        var pkgName = pkg.name;

        if (moduleId.split('/')[0] === pkgName) {
            if (moduleId === pkgName) {
                moduleId += '/' + (pkg.main || 'main');
            }

            var pkgPath = pkg.location;
            if (!path.isRelativePath(pkgPath)) {
                return null;
            }

            return path.resolve(
                basePath,
                baseUrl,
                pkgPath,
                moduleId.replace(pkgName, '.')
           ) + '.js';
        }
    }

    // try match paths
    var pathKeys = Object.keys(moduleConfig.paths || {}).slice(0);
    pathKeys.sort(function (a, b) {
        return b.length - a.length;
    });
    for (var j = 0; j < pathKeys.length; j++) {
        var key = pathKeys[j];

        if (moduleId.indexOf(key) === 0) {
            var modulePath = moduleConfig.paths[key];
            if (!path.isRelativePath(modulePath)) {
                return null;
            }

            return path.resolve(
                basePath,
                baseUrl,
                modulePath,
                moduleId.replace(key, '.')
           ) + '.js';
        }
    }

    return path.resolve(
        basePath,
        baseUrl,
        moduleId
   ) + '.js';
};
