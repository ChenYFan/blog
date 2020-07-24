/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * data/dummy-project/src/case1.js ~ 2014/02/11 11:34:44
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
define('case1', ['foo', 'tpl!./tpl/123.html'], function(foo, require, exports, module){
    require('tpl!./tpl/list.tpl.html');
    require('no-such-plugin!./tpl/list.tpl.html');
    require('tpl!er/tpl/hello.tpl.html');
    var z = require('jquery');
    return 'case1';
});




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
