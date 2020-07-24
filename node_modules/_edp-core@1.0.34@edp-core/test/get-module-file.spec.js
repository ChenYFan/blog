/**
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */
var path = require('path');

var GetModuleFile = require('../lib/amd/get-module-file');
var GetModuleId = require('../lib/amd/get-module-id');
var Project = path.join(__dirname, 'data', 'dummy-project');

describe('GetModuleFile', function () {
    var moduleConfig = path.join(Project, 'get-module-file.conf');

    it('default', function () {
        var expected = path.join(Project, 'src', 'ui', 'js', 'widgets', 'footer.js');
        var moduleIds = GetModuleId(expected, moduleConfig);
        expect(moduleIds).toEqual(['ui/widgets/footer']);
        var m1 = GetModuleFile('ui/widgets/footer', moduleConfig);
        expect(m1).toBe(expected);
        var m2 = GetModuleFile('hello', moduleConfig);
        var m3 = GetModuleFile('bar/hello', moduleConfig);
        expect(m2).toBe(m3);
    });

    xit('x', function () {
        var Project = '/Volumes/HDD/Users/leeight/local/case/FOR_2015_4_20_BRANCH/embed_src';
        var moduleConfig = path.join(Project, 'module.conf');
        var file = path.join(Project, 'src', 'common', 'css.js');
        console.log(GetModuleId(file, moduleConfig));
    });
});










/* vim: set ts=4 sw=4 sts=4 tw=120: */
