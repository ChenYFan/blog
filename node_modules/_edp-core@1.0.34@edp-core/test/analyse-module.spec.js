/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * analyse-module.spec.js ~ 2014/02/11 11:26:16
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 * 测试分析模块的功能
 **/
var fs = require('fs');
var path = require('path');

var amd = require( '../lib/amd' );
var baseDir = path.resolve( __dirname, 'data', 'analyse-module' );
var analyseModule= require( '../lib/amd/analyse-module.js' );

function getModuleInfo(name) {
    var code = fs.readFileSync( path.resolve(baseDir, name), 'utf-8' );
    var ast = amd.getAst( code );
    var moduleInfo = analyseModule( ast );

    return moduleInfo;
}

describe('analyse-module', function() {
    it('not amd module should return null', function () {
        var moduleInfo = getModuleInfo('notModule.js');

        expect(moduleInfo).toBeNull();
    });

    it('anonymous defined should pass', function () {
        var moduleInfo = getModuleInfo('anonymous.js');

        expect(moduleInfo).not.toBeNull();
        expect(moduleInfo.id).toBeUndefined();
        expect(moduleInfo.dependencies).toBeUndefined();
        expect(moduleInfo.actualDependencies)
            .toEqual([
                'require',
                'io/File',
                'net/Http',
                'er/View'
            ]);
    });

    it('defined with moduleId should pass', function () {
        var moduleInfo = getModuleInfo('hasId.js');

        expect(moduleInfo).not.toBeNull();
        expect(moduleInfo.id).toEqual('foo');
        expect(moduleInfo.dependencies).toBeUndefined();
        expect(moduleInfo.actualDependencies)
            .toEqual([
                'require',
                'exports',
                'module',
                'er'
            ]);
    });

    it('defined with dependenciess should pass', function () {
        var moduleInfo = getModuleInfo('hasDeps.js');

        expect(moduleInfo).not.toBeNull();
        expect(moduleInfo.id).toBeUndefined();
        expect(moduleInfo.dependencies).toEqual(['foo', 'bar']);
        expect(moduleInfo.actualDependencies)
            .toEqual([
                'foo',
                'bar',
                'base'
            ]);
    });

    it('defined with all arguments should pass', function () {
        var moduleInfo = getModuleInfo('hasAll.js');

        expect(moduleInfo).not.toBeNull();
        expect(moduleInfo.id).toBe('foo');
        expect(moduleInfo.dependencies).toEqual(['bar', 'base']);
        expect(moduleInfo.actualDependencies)
            .toEqual([
                'bar',
                'base',
                'more'
            ]);
    });

    it('defined with wrapper should pass', function () {
        var moduleInfo = getModuleInfo('etpl-2.0.8.js');

        expect(moduleInfo).not.toBeNull();
        expect(moduleInfo.id).toBeUndefined();
        expect(moduleInfo.dependencies).toBeUndefined();
        expect(moduleInfo.actualDependencies).toEqual([]);
        expect(moduleInfo.factoryAst.name).toBe('etpl');
    });

    it('multi defined should return array', function () {
        var moduleInfo = getModuleInfo('multi.js');

        expect(moduleInfo).not.toBeNull();
        expect(moduleInfo instanceof Array).toBeTruthy();
        expect(moduleInfo.length).toBe(2);

        expect(moduleInfo[0].id).toBe('foo');
        expect(moduleInfo[1].id).toBe('bar');
    });
});




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
