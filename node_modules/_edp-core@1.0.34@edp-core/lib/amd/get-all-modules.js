/**
 * @file lib/amd/get-all-modules.js
 * @author leeight(liyubei@baidu.com)
 *         errorrik(errorrik@gmail.com)
 */

var fs = require('fs');
var path = require('path');

var util = require('../util');
var log = require('../log');
var getModuleId = require('./get-module-id');

function getAllModules(moduleConfigFile, dir) {
    var allModules = [];

    function scanDir(dir) {
        if (!fs.existsSync(dir)) {
            log.error('No such file or directory: %s', dir);
        }
        else {
            util.scanDir(dir, function (file) {
                if (!/\.js$/.test(file)) {
                    return;
                }

                var moduleIds = getModuleId(path.resolve(file), moduleConfigFile);
                if (moduleIds.length) {
                    allModules.push.apply(allModules, moduleIds);
                }
            });
        }
    }

    if (!dir) {
        // var config = JSON.parse(fs.readFileSync(moduleConfigFile, 'utf-8'));
        var projectDir = path.dirname(moduleConfigFile);
        scanDir(projectDir);

        // 大部分情况下，我们扫描projectDir即可
        // 但是有时候module.conf里面配置的packages，并不是在当前目录的dep，而是在当前目录的上一级
        // 例如fc-ue和一些测试用例里面的case
        // 因此我们还需要扫描这些目录才可以
        var config = JSON.parse(fs.readFileSync(moduleConfigFile, 'utf-8'));
        if (config && config.packages) {
            config.packages.forEach(function (pkg) {
                var location = path.join(config.baseUrl, pkg.location);
                if (/\.\.\//.test(location)) {
                    // 已经超出当前项目目录的范围了
                    scanDir(path.resolve(projectDir, location));
                }
            });
        }

        // @errorrik 2014-3-25
        // get-module-id在碰到package main的时候，会返回['pkg','pkg/main']。这里无需特殊处理了
        //
        // if (config.packages && config.packages.length) {
        //     config.packages.forEach(function(pkg){
        //         scanDir(path.resolve(projectDir, config.baseUrl, pkg.location));
        //         // 对于etpl/2.0.8/src/main.js来说，计算出的moduleId是etpl，而不是etpl/main
        //         // 但是某些代码里面是直接require('etpl/main')，虽然也是正确的，但是我们的allModules
        //         // 不存在，所以想ignore的时候就不行了，因此我们这里人肉补充，虽然可能有重复
        //         // 但是不会有啥影响.
        //         if (pkg.main) {
        //             allModules.push(path.normalize(pkg.name + '/' + pkg.main));
        //         }
        //     });
        // }
    }
    else {
        scanDir(dir);
    }

    return allModules;
}

module.exports = exports = getAllModules;
