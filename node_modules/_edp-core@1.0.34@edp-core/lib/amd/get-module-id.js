/**
 * @file 根据模块Id获取模块的文件路径
 * @author errorrik[errorrik@gmail.com]
 */
var path = require('../path');
var fs = require('../fs');


/**
 * 获取module id
 *
 * @param {string} moduleFile module文件路径
 * @param {string} moduleConfigFile module配置文件路径
 * @return {Array.<string>}
 */
module.exports = exports = function (moduleFile, moduleConfigFile) {
    var moduleConfig = JSON.parse(fs.readFileSync(moduleConfigFile));

    var filePath = path.resolve(
        path.dirname(moduleConfigFile),
        moduleFile.replace(/\.js$/, '')
   );

    var baseUrl = path.resolve(
        path.dirname(moduleConfigFile),
        moduleConfig.baseUrl
   );

    var resultModules = [];
    var resultModulesMap = {};
    function addModule(moduleId) {
        if (!resultModulesMap[moduleId]) {
            resultModulesMap[moduleId] = 1;
            resultModules.push(moduleId);
        }
    }

    // try match packages
    var packages = moduleConfig.packages || [];
    for (var i = 0; i < packages.length; i++) {
        var pkg = packages[i];
        var pkgName = pkg.name;
        var pkgMain = pkg.main || 'main';
        var pkgLoc = pkg.location;

        if (!path.isRelativePath(pkgLoc)) {
            continue;
        }

        pkgLoc = path.resolve(baseUrl, pkgLoc);
        if (filePath.indexOf(pkgLoc + '/') === 0) {
            if (filePath === pkgLoc + '/' + pkgMain) {
                addModule(pkgName);
            }

            addModule(pkgName + filePath.replace(pkgLoc, ''));
        }
    }

    // try match paths
    var skipBaseUrl = false;
    var paths = moduleConfig.paths || {};
    var pathKeys = Object.keys(paths).slice(0);
    pathKeys.sort(function (a, b) {
        return paths[b].length - paths[a].length;
    });
    for (i = 0; i < pathKeys.length; i++) {
        var key = pathKeys[i];
        var modulePath = paths[key];

        if (!path.isRelativePath(modulePath)) {
            continue;
        }

        modulePath = path.resolve(baseUrl, modulePath);
        if ((new RegExp('^' + modulePath + '(/|$)')).test(filePath)) {
            var moduleId = filePath.replace(modulePath, key);
            addModule(moduleId);
            if (paths[key].indexOf(key + '/') === 0) {
                skipBaseUrl = true;
            }
        }
    }

    // try match baseUrl
    if (filePath.indexOf(baseUrl) === 0 && !skipBaseUrl) {
        addModule(filePath.replace(baseUrl + '/', ''));
    }

    return resultModules;
};
