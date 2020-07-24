/**
 * @file util spec
 * @author treelite(c.xinle@gmail.com)
 */

var path = require('path');
var util = require('../lib/util');

describe('util', function () {

    describe('readJSONFile', function () {

        it('should return json from a file', function () {
            var data = util.readJSONFile(path.resolve('./data/util/normal.json'));

            expect(Object.keys(data).length).toBe(1);
            expect(data.name).toEqual('edp-core');
        });

        it('should return json from a file with BOM', function () {
            var data = util.readJSONFile(path.resolve('./data/util/bomb.json'));

            expect(Object.keys(data).length).toBe(1);
            expect(data.name).toEqual('edp-core');
        });
    });

    describe('scanDir', function(){
        var dir = path.join( __dirname, './data/dummy-project' );
        var files = [];
        util.scanDir( dir, function( file ){
            if ( /\.js$/.test( file ) ) {
                files.push( path.relative( dir, file ) );
            }
        });

        files.sort();
        expect( files ).toEqual( [
            'dep/er/3.0.2/src/View.js',
            'dep/er/3.0.2/src/main.js',
            'edp-build-config.js',
            'src/bar.js',
            'src/case1.js',
            'src/common/main.js',
            'src/etpl-2.0.8.js',
            'src/foo.js'] );
    });

    describe('rmdir', function () {

        var fs = require('fs');

        var baseDir = path.resolve('./data/rmdir');

        beforeEach(function () {
            if (!fs.existsSync(baseDir)) {
                fs.mkdirSync(baseDir);
            }
        });

        it('should remove not empty directory', function () {

            fs.writeFileSync(path.resolve(baseDir, 'foo.txt'), 'hello', 'utf-8');

            util.rmdir(baseDir);

            expect(fs.existsSync(baseDir)).toBeFalsy();
        });

        it('should remove nested directory', function () {

            fs.writeFileSync(path.resolve(baseDir, 'foo.txt'), 'hello', 'utf-8');
            fs.mkdirSync(path.resolve(baseDir, 'bar'));
            fs.writeFileSync(path.resolve(baseDir, 'bar/bar.txt'), 'world', 'utf-8');

            util.rmdir(baseDir);

            expect(fs.existsSync(baseDir)).toBeFalsy();
        });

    });

    it( 'getConfig', function(){
        var id = 0;
        var options = {
            name: '.xrc',
            factory: function( file ){
                var key = 'xrc' + (id ++);
                var config = {};
                config[ key ] = 10;

                return config;
            }
        };

        spyOn( util, 'getParentDir' ).andCallThrough();
        var config = util.getConfig( path.resolve( __dirname, 'data', 'base' ), options );
        expect( config ).toEqual( { xrc0: 10, xrc1: 10 } );
        expect( util.getParentDir.callCount ).toEqual( 3 );
    });

    it( 'getConfig2', function(){
        spyOn( util, 'getParentDir' ).andCallThrough();
        var options = {
            name: '.xyzrc',
            factory: function( item ){
                return {};
            }
        };
        var config = util.getConfig( __dirname, options );
        expect( util.getParentDir.callCount ).toEqual( 1 );
    });

});
