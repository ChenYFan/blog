/***************************************************************************
 *
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/



/**
 * test_log.js ~ 2014/02/09 22:54:42
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$
 * @description
 *
 **/
var log = require('../lib/log');

describe('log', function(){
    it('default', function(){
        log.trace('hello %s', 'world');
        log.debug('hello %s', 'world');
        log.info('hello %s %d %j', 'world', 123, {'a': true});
        log.warn('hello %s', 'world');
        log.error('hello %s', 'world');
        log.fatal('hello %s', 'world');
        console.log();
        log.raw( 'hello world' );
        log.raw( 'hello world 2' );
        log.raw( '\nhello world 3' );
    });
});



















/* vim: set ts=4 sw=4 sts=4 tw=100: */
