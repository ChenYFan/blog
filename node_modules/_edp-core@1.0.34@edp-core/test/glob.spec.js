/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * glob.spec.js ~ 2014/03/24 15:48:36
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
var glob = require( '../lib/glob' );
var path = require( 'path' );

var ALL_CANDIDATES = [
    'er',
    'er/Model',
    'er/Controller',
    'er/sub/Model',
    'er/sub/Controller',
    'esui'
];

describe( 'glob', function (){
    it( 'default', function(){
        var patterns = [];
        var expected = [];
        expect( glob.filter( patterns, ALL_CANDIDATES ) ).toEqual( expected );

        patterns = [ 'er/**', '!er/Controller', 'esui' ];
        expected = [ 'er/Model', 'er/sub/Model', 'er/sub/Controller', 'esui' ];
        expect( glob.filter( patterns, ALL_CANDIDATES ) ).toEqual( expected );

        patterns = [ '!*', 'esui', 'er' ];
        expected = [ 'esui', 'er' ];
        expect( glob.filter( patterns, ALL_CANDIDATES ) ).toEqual( expected );

        patterns = [ /^er/, '!er/Model', '!er/Controller' ];
        expected = [ 'er', 'er/sub/Model', 'er/sub/Controller' ];
        expect( glob.filter( patterns, ALL_CANDIDATES ) ).toEqual( expected );
    });

    it( 'sync', function(){
        var cwd = path.join( __dirname, 'data/util/glob' );
        var options = { nodir: true, cwd: cwd };
        expect( glob.sync( [ '*.js' ], options ) ).toEqual( [ 'a.js' ] );
        expect( glob.sync( [ '**/*.js' ], options ) ).toEqual( [ 'a.js', 'b/b.js' ] );
        expect( glob.sync( [ '**/b**' ], options ) ).toEqual( [ 'b/b.js' ] );
        expect( glob.sync( [ '**/b*' ], { cwd: cwd } ) ).toEqual( [ 'b', 'b/b.js' ] );
    });
});

 




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
