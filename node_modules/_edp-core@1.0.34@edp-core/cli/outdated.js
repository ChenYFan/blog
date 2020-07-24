/**
 * @file edp outdated
 * @author leeight(liyubei@baidu.com)
 */

var edp = require('../index');
var util = require('../lib/util/pkg');

/**
 * 命令行配置项
 *
 * @inner
 * @type {Object}
 */
var cli = {};

/**
 * 命令描述信息
 *
 * @type {string}
 */
cli.description = '检查edp的扩展包的版本状态';

/**
 * 模块命令行运行入口
 *
 * @param {Array} args 命令运行参数
 */
cli.main = function (args) {
    var upgradeInstruction = [];
    var stdout = [];

    function displayOutdatedPackages(outdatedPkgs, prefix) {
        outdatedPkgs = outdatedPkgs.filter(filterPackage);
        if (outdatedPkgs.length) {
            console.log(outdatedPkgs.map(formatPackage).join('\n'));
            upgradeInstruction.push(
                edp.util.colorize(prefix, 'warning')
                + ' '
                + outdatedPkgs.map(function (pkg) {
                    return pkg.name + '@' + pkg.latest;
                }).join(' ')
            );
        }
        else {
            console.log('  All packages are the latest.');
        }
    }

    function displayUpgradeInstruction() {
        if (upgradeInstruction.length) {
            edp.log.info('Upgrade instructions');
            console.log('%s', upgradeInstruction.join('\n'));
        }
    }

    var prjPkgs = util.getPrjPackages();
    if (prjPkgs.length) {
        // 处于项目中
        edp.log.info('Checking dep pacakges...');
        util.checkUpdate(prjPkgs, 'http://edp-registry.baidu.com').done(
            function (outdatedPkgs) {
                edp.log.write('');
                displayOutdatedPackages(outdatedPkgs, '  edp import');
                displayUpgradeInstruction();
            }
        );
    }
    else {
        // 没有处于项目中
        // 因为edp-core不方便的获取edp的安装目录，所以也就不方便的扫描所有安装的packages
        // 因此我们通过获取edp -v的输出，解析出我们需要的内容.
        var cmd = require('../lib/util').spawn('edp', ['-v']);
        cmd.stdout.on('data', function (data) {
            stdout.push(data);
        });
        cmd.on('close', function (code) {
            stdout = Buffer.concat(stdout).toString('utf-8').split(/[\r?\n]+/g);
            var edpPkgs = util.getEdpPackages(stdout);

            edp.log.info('Checking edp pacakges...');
            util.checkUpdate(edpPkgs).done(function (outdatedPkgs) {
                edp.log.write('');
                displayOutdatedPackages(outdatedPkgs, '  [sudo] npm i -g');
                displayUpgradeInstruction();
            });
        });
    }
};

function filterPackage(pkg) {
    if (!pkg.latest) {
        return false;
    }

    var version = pkg.version;
    var latest = pkg.latest;
    var semver = require('semver');
    return semver.gt(latest, version);
}

function formatPackage(pkg) {
    var name = pkg.name;
    var version = pkg.version;
    var latest = pkg.latest;

    return '  ' + edp.util.colorize(name, 'success')
        + ' (' + version + ' → ' + edp.util.colorize(latest, 'error') + ')';
}


/**
 * 命令行配置项
 *
 * @type {Object}
 */
exports.cli = cli;
