/**
 * @file lib/util/pkg.js ~ 2014/05/07 14:14:24
 * @author leeight(liyubei@baidu.com)
 */
var fs = require('fs');
var path = require('path');

var edp = require('../../index');
var Deferred = require('../base/Deferred');

/**
 * 简单的过滤一下是否是package
 *
 * @param {string} item 文件路径
 * @return {boolean}
 */
function filter(item) {
    var stat = fs.statSync(item);
    if (!stat.isDirectory()) {
        return false;
    }

    var isPackage = false;
    // 检查item下面的任何一个目录是否存在package.json
    fs.readdirSync(item).filter(function (x) {
        return fs.statSync(path.join(item, x)).isDirectory();
    }).some(function (x) {
        if (fs.existsSync(path.join(item, x, 'package.json'))) {
            isPackage = true;

            // break loop
            return true;
        }
    });

    return isPackage;
}

/**
 * 读取dep目录下面的东东，返回多个版本
 *
 * @return {Array.<Object>}
 */
exports.getPrjPackages = function () {
    var cwd = process.cwd();
    if (!fs.existsSync(path.join(cwd, '.edpproj'))) {
        return [];
    }

    if (!fs.existsSync(path.join(cwd, 'dep'))) {
        return [];
    }

    var isV2 = false;
    if (fs.existsSync('package.json')) {
        var pkgConfig = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
        if (pkgConfig && pkgConfig.edp && pkgConfig.edp.layout === 'v2') {
            isV2 = true;
        }
    }

    var pkgs = [];
    try {
        var depDir = path.join(cwd, 'dep');
        if (isV2) {
            fs.readdirSync(depDir).filter(function (x) {
                return fs.existsSync(path.join(depDir, x, 'package.json'));
            }).forEach(function (x) {
                var version = JSON.parse(
                    fs.readFileSync(path.join(depDir, x, 'package.json'), 'utf-8')).version;
                pkgs.push({name: x, version: version});
            });
        }
        else {
            fs.readdirSync(depDir).filter(function (x) {
                return filter(path.join(depDir, x));
            }).forEach(check);
        }
    }
    catch (ex) {
        console.log(ex);
    }

    function check(item) {
        var p = [];
        var dir = path.join(depDir, item);

        fs.readdirSync(dir).filter(function (x) {
            return fs.statSync(path.join(dir, x)).isDirectory();
        }).forEach(function (x) {
            var target = path.join(dir, x, 'package.json');
            if (fs.existsSync(target)) {
                var pkg = JSON.parse(fs.readFileSync(target, 'utf-8'));
                if (pkg) {
                    p.push(pkg.version);
                }
            }
        });

        if (p.length) {
            var semver = require('semver');
            pkgs.push({
                name: item,
                version: semver.maxSatisfying(p, '*')
            });
        }
    }

    return pkgs;
};

exports.getEdpPackages = function (chunks) {
    var builtin = [];
    var user = [];
    chunks.forEach(function (line) {
        var p1 = /^\s+(edpx?-\S+)\s+\(([^\(\)]+)\)$/;
        var p2 = /^([^@]+)@(\S+)\s+/;

        var match = p1.exec(line) || p2.exec(line);
        if (match) {
            var name = match[1];
            var version = match[2];
            var pkg = {name: name, version: version};

            if (/^edp-/.test(name)) {
                builtin.push(pkg);
            }
            else {
                user.push(pkg);
            }
        }
    });

    return builtin.concat(user);
};

exports.checkUpdate = function (pkgs, registryUrl) {
    var i = 0;
    var l = pkgs.length;
    var d = new Deferred();

    function next() {
        if (i >= l) {
            d.resolve(pkgs);
            return;
        }

        checkPackage(pkgs[i], registryUrl).done(function (pkg) {
            pkgs[i] = pkg;
        }).fail(function (e) {
            // IGNORE
        }).ensure(function () {
            i++;
            next();
        });
    }
    next();

    return d.promise;
};

function checkPackage(pkg, registryUrl) {
    var registry = registryUrl || require('edp-config').get('npm.registry') || 'http://npm.internal.baidu.com';
    var url = registry + '/' + pkg.name + '/latest';
    edp.log.write('  %s', url);

    var d = new Deferred();
    var http = require('http');
    var options = require('url').parse(url);
    options.method = 'GET';
    options.headers = {Connection: 'close'};
    var req = http.request(options, function (res) {
        if (res.statusCode !== 200) {
            d.reject(new Error(res.statusCode));
            return;
        }

        var body = [];
        res.on('data', function (data) {
            body.push(data);
        });
        res.on('end', function () {
            try {
                var meta = JSON.parse(Buffer.concat(body).toString('utf-8'));
                if (meta.name === pkg.name) {
                    pkg.latest = meta.version;
                    d.resolve(pkg);
                }
                else {
                    d.reject(new Error(meta.name + ' !== ' + pkg.name));
                }
            }
            catch (ex) {
                d.reject(ex);
            }
        });
    });
    req.on('error', function (e) {
        d.reject(e);
    });
    req.end();
    return d.promise;
}
