/***************************************************************************
 * 
 * Copyright (c) 2013 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * edp-build-config.js ~ 2013/10/15 17:48:25
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
var cwd = __dirname;
var path = require( 'path' );

/**
 * 输入目录
 * 
 * @type {string}
 */
exports.input = cwd;

exports.inputs = [path.resolve( cwd, '..', 'base' )];

/**
 * 输出目录
 * 
 * @type {string}
 */
exports.output = path.resolve( cwd, 'output' );

/**
 * 排除文件pattern列表
 * 
 * @type {Array}
 */
exports.exclude = [
    '/tool',
    '/doc',
    '/test',
    '/module.conf',
    '/dep/packages.manifest',
    '/dep/*/*/test',
    '/dep/*/*/doc',
    '/dep/*/*/demo',
    '/dep/*/*/tool',
    '/dep/*/*/*.md',
    '/dep/*/*/package.json',
    '/edp-*',
    '/.edpproj',
    '.svn',
    '.git',
    '.gitignore',
    '.idea',
    '.project',
    'Desktop.ini',
    'Thumbs.db',
    '.DS_Store',
    '*.tmp',
    '*.bak',
    '*.swp'
];


var moduleEntries = 'html,htm,phtml,tpl,vm,js';
var pageEntries = 'html,htm,phtml,tpl,vm';

/**
 * 获取构建processors的方法
 * 
 * @return {Array}
 */
exports.getProcessors = function () {
    return [ 
        new LessCompiler( {
            entryExtnames: pageEntries
        } ), 
        new CssCompressor(),
        new ModuleCompiler( {
            configFile: 'module.conf',
            entryExtnames: moduleEntries
        } ), 
        new JsCompressor({
            compressOptions: {
                warnings: false
            },
            sourceMapOptions: {
                enable: true
            }
        }), 
        new PathMapper( {
            replacements: [
                { type: 'html', tag: 'link', attribute: 'href', extnames: pageEntries },
                { type: 'html', tag: 'img', attribute: 'src', extnames: pageEntries },
                { type: 'html', tag: 'script', attribute: 'src', extnames: pageEntries },
                { extnames: moduleEntries, replacer: 'module-config' }
            ],
            mapper: function(value) {
                // 我承认比较难看，不过暂时能WORK，还有改进的空间.
                return value.replace(/(^|\/)src(\/|$)/, function(match, head, tail) {
                    return (head === '/' ? head : '') + 'asset' + (tail === '/' ? tail : '');
                }).replace('../base', 'base')
            }
        } ) 
    ];
};

/**
 * builder主模块注入processor构造器的方法
 * 
 * @param {Object} processors 
 */
exports.injectProcessor = function ( processors ) {
    for ( var key in processors ) {
        global[ key ] = processors[ key ];
    }
};




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
