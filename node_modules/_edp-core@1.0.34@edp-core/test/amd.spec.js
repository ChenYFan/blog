/***************************************************************************
 *
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/



/**
 * amd.spec.js ~ 2014/02/27 15:05:18
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$
 * @description
 *
 **/
var fs = require( 'fs' );
var path = require('path');

var amd = require( '../lib/amd' );


describe('amd', function(){
    it('resolveModuleId', function(){
        expect( amd.resolveModuleId( './main.tpl.html', 'common/require-tpl' ) ).toBe( 'common/main.tpl.html' );
    });

    it('getAllModules', function(){
        var moduleConfig = './data/dummy-project/module.conf';
        var allModules = amd.getAllModules( moduleConfig );
        allModules.sort();

        var expected = [ 'bar', 'case1', 'common/main', 'er', 'er/View', 'er/main', 'etpl-2.0.8', 'foo', 'io/File', 'net/Http' ];
        expect( allModules ).toEqual( expected );
    });

    it('getModuleFile', function () {
        var moduleConfig = path.resolve( __dirname, 'data/dummy-project/module.conf' );
        var testDir = path.resolve( __dirname );

        expect( amd.getModuleFile('main', moduleConfig) )
            .toBe( path.resolve( testDir, 'data/dummy-project/src/main.js' ) );
        expect( amd.getModuleFile('hello', moduleConfig) )
            .toBe( path.resolve( testDir, 'data/dummy-project/src/bar/hello.js' ) );
        expect( amd.getModuleFile('hello/hy', moduleConfig) )
            .toBe( path.resolve( testDir, 'data/dummy-project/src/bar/hello/hy.js' ) );
        expect( amd.getModuleFile('er', moduleConfig) )
            .toBe( path.resolve( testDir, 'data/dummy-project/dep/er/3.0.2/src/main.js' ) );
        expect( amd.getModuleFile('er/test', moduleConfig) )
            .toBe( path.resolve( testDir, 'data/dummy-project/dep/er/3.0.2/src/test.js' ) );
        expect( amd.getModuleFile('moment', moduleConfig) )
            .toBe( path.resolve( testDir, 'data/dummy-project/dep/moment/2.0.0/src/moment.js' ) );
        expect( amd.getModuleFile('io', moduleConfig) )
            .toBe( path.resolve( testDir, 'data/base/io/1.0.0/src/main.js' ) );
    });

    it('getModuleId', function () {
        var projectDir = path.resolve( __dirname, 'data/dummy-project' );
        var moduleConfig = path.resolve( projectDir, 'module.conf' );

        expect( amd.getModuleId(path.resolve(projectDir,'src/main.js'), moduleConfig) )
            .toEqual( ['main'] );
        expect( amd.getModuleId(path.resolve(projectDir,'src/common/config.js'), moduleConfig) )
            .toEqual( ['common/config'] );
        expect( amd.getModuleId(path.resolve(projectDir,'src/bar/hello.js'), moduleConfig) )
            .toEqual( ['hello','bar/hello'] );
        expect( amd.getModuleId(path.resolve(projectDir,'src/bar/hello/hy.js'), moduleConfig) )
            .toEqual( ['hello/hy','bar/hello/hy'] );
        expect( amd.getModuleId(path.resolve(projectDir,'dep/er/3.0.2/src/main.js'), moduleConfig) )
            .toEqual( ['er','er/main'] );
        expect( amd.getModuleId(path.resolve(projectDir,'dep/er/3.0.2/src/test.js'), moduleConfig) )
            .toEqual( ['er/test'] );
        expect( amd.getModuleId('dep/er/3.0.2/src/test.js', moduleConfig) )
            .toEqual( ['er/test'] );
    });

    it( 'toUrl', function(){
        var projectDir = path.resolve( __dirname, 'data/dummy-project' );
        var moduleConfigFile = path.resolve( projectDir, 'module.conf' );

        var moduleId = 'io/File';
        var baseId = null;
        var baseFile = path.resolve( projectDir, 'src', 'foo.js' );
        expect( amd.toUrl( moduleId, baseId, baseFile, moduleConfigFile ).file ).toBe(
            path.resolve( __dirname, 'data/base/io/1.0.0/src/File.js' ) );

        moduleId = 'tpl!./tpl/list.tpl.html';
        baseId = 'case1';
        baseFile = path.resolve( projectDir, 'src', 'case1.js' );

        var result = amd.toUrl( moduleId, baseId, baseFile, moduleConfigFile );
        expect( result.file ).toBe( path.resolve( __dirname, 'data/dummy-project/src/tpl.js' ) );
        expect( result.resource ).toBe( path.resolve( __dirname, 'data/dummy-project/src/tpl/list.tpl.html.js' ) );

        moduleId = 'no-such-plugin!./tpl/list.tpl.html';
        baseId = 'case1';
        baseFile = path.resolve( projectDir, 'src', 'case1.js' );

        var result = amd.toUrl( moduleId, baseId, baseFile, moduleConfigFile );
        expect( result.file ).toBe( path.resolve( __dirname, 'data/dummy-project/src/no-such-plugin.js' ) );
        expect( result.resource ).toBe( path.resolve( __dirname, 'data/dummy-project/src/tpl/list.tpl.html.js' ) );
    });
});




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
