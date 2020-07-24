/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * path.spec.js ~ 2014/03/20 14:17:28
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
var path = require( '../lib/path' );

describe('path', function (){
    it('default', function(){
        expect( path.satisfy( 'er/main', 'er/*' ) ).toBe( true );
        expect( path.satisfy( 'er/main/123', 'er/*' ) ).toBe( false );
        expect( path.satisfy( '123/er/main/123', '/er/*/*' ) ).toBe( false );

        expect( path.satisfy( '/er/main/123', '/er/*/*' ) ).toBe( true );
        expect( path.satisfy( 'er/main/123', '/er/*/*' ) ).toBe( false );
        expect( path.satisfy( 'er/main/123', '!er/**' ) ).toBe( false );
        expect( path.satisfy( 'er/main/123', 'er/**' ) ).toBe( true );
        expect( path.satisfy( 'er/main/123/1/1/1/1/1', 'er/**' ) ).toBe( true );
        expect( path.satisfy( 'er/main/123', 'er/*' ) ).toBe( false );
        expect( path.satisfy( 'er', 'er/*' ) ).toBe( false );

        expect( path.satisfy( 'dep/esf-ms/1.0.2/src/copyright.less', '*.less' ) ).toBe( true );
        expect( path.satisfy( 'dep/ef/3.1.0-alpha.3/demo/chi/server/affair.js', '/dep/*/*/demo' ) ).toBe( false );
        expect( path.satisfy( 'dep/est/1.1.0/example/prettify/lang-scala.js', 'prettify/*.js' ) ).toBe( false );
        expect( path.satisfy( 'dep/est/1.1.0/example/prettify/lang-scala.js', '**/prettify/*.js' ) ).toBe( true );

        // A leading "**"
        expect( path.satisfy( 'foo', '**/foo' ) ).toBe( true );
        expect( path.satisfy( '123/foo', '**/foo' ) ).toBe( true );
        expect( path.satisfy( '123/foo/456', '**/foo' ) ).toBe( false );

        // A trailing "/**"
        expect( path.satisfy( 'abc', 'abc/**' ) ).toBe( false );
        expect( path.satisfy( 'abc/123', 'abc/**' ) ).toBe( true );
        expect( path.satisfy( 'abc/123/456', 'abc/**' ) ).toBe( true );
        expect( path.satisfy( '123/abc/456', 'abc/**' ) ).toBe( false );

        // A slash followed by two consecutive asterisks
        expect( path.satisfy( 'a/b', 'a/**/b' ) ).toBe( true );
        expect( path.satisfy( 'a/123/b', 'a/**/b' ) ).toBe( true );
        expect( path.satisfy( 'a/123/456/b', 'a/**/b' ) ).toBe( true );
    });

    it('extension', function(){
        expect( path.satisfy( 'esui', '~esui' ) ).toBe( true );
        expect( path.satisfy( 'abc/esui', '~esui' ) ).toBe( false );

        expect( path.satisfy( 'esui/Button', '~esui' ) ).toBe( true );
        expect( path.satisfy( 'abc/esui/Button', '~esui' ) ).toBe( false );

        expect( path.satisfy( 'esui/Button/Button', '~esui' ) ).toBe( true );
        expect( path.satisfy( 'abc/esui/Button/Button', '~esui' ) ).toBe( false );

        expect( path.satisfy( 'esui', '~esui/' ) ).toBe( false );
        expect( path.satisfy( 'esui/Button', '~esui/' ) ).toBe( true );
        expect( path.satisfy( 'esui/Button/Button', '~esui/' ) ).toBe( true );
    });

    it('regexp', function(){
        expect( path.satisfy( 'esui', /esui/ ) ).toBe( true );
    });
});




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
