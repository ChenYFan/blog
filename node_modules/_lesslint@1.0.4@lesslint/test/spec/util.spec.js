/**
 * @file lib/util.js 的测试用例
 * @author ielgnaw(wuji0223@gmail.com)
 */

'use strict';

import chai from 'chai';
import fs from 'fs';
import path from 'path';

let util = require(path.join(__dirname, '../../src', 'util'));

const expect = chai.expect;

/* globals describe, it */

/* eslint-disable max-nested-callbacks */
describe('util test suite\n', () => {
    describe('formatMsg: ', () => {
        it('should return right message', () => {
            const ret = util.formatMsg('abcdefg', 5);
            expect(ret).to.equal('     abcdefg');
        });
    });

    describe('lineContent: ', () => {
        const candidateLineNumber = 1;

        const fileContent = fs.readFileSync(
            path.join(__dirname, '../fixture/test.less'),
            'utf8'
        ).replace(/\r\n?/g, '\n');

        it('should return right linecontent: ', () => {
            const lineContent = util.getLineContent(candidateLineNumber, fileContent);
            expect(lineContent).to.equal('@foo: 1px;');
        });
    });

    describe('uniqueMsg: ', () => {
        it('should return right result', () => {
            const msg = [
                {
                    uniqueFlag: '111',
                    ruleName: 'hex-color',
                    line: 1,
                    message: ''
                        + '`@color1: green;` Color value must use the hexadecimal mark forms '
                        + 'such as `#RRGGBB`. Don\'t use RGB、HSL expression',
                    colorMessage: ''
                        + '`@color1\u001b[35m: green\u001b[39m;` \u001b[90mColor value must use '
                        + 'the hexadecimal mark forms such as `#RRGGBB`. Don\'t use RGB、HSL '
                        + 'expression\u001b[39m'
                },
                {
                    uniqueFlag: '111',
                    ruleName: 'hex-color',
                    line: 2,
                    message: ''
                        + '`@color2: rgb(255, 255, 255);` Color value must use the hexadecimal mark forms '
                        + 'such as `#RRGGBB`. Don\'t use RGB、HSL expression',
                    colorMessage: ''
                        + '`@color2: \u001b[35mrgb\u001b[39m(255, 255, 255);` \u001b[90mColor value '
                        + 'must use the hexadecimal mark forms such as `#RRGGBB`. Don\'t use RGB、HSL '
                        + 'expression\u001b[39m'
                },
                {
                    ruleName: 'hex-color',
                    line: 2,
                    message: ''
                        + '`@color2: rgb(255, 255, 255);` Color value must use the hexadecimal mark forms '
                        + 'such as `#RRGGBB`. Don\'t use RGB、HSL expression',
                    colorMessage: ''
                        + '`@color2: \u001b[35mrgb\u001b[39m(255, 255, 255);` \u001b[90mColor value '
                        + 'must use the hexadecimal mark forms such as `#RRGGBB`. Don\'t use RGB、HSL '
                        + 'expression\u001b[39m'
                }
            ];
            expect(util.uniqueMsg(msg).length).to.equal(2);
        });
    });

    describe('getCandidates: ', function () {
        this.timeout(50000);
        it('should return right result', () => {
            const patterns = [
                '**/block-indent.less',
                '!**/{output,node_modules,asset,dist,release,doc,dep,report,*.bak}/**'
            ];

            const candidates = util.getCandidates([], patterns);
            expect(candidates.length).to.equal(1);
            expect(candidates[0]).to.equal('test/fixture/block-indent.less');

            const patterns1 = [
                '**/*.less',
                '!**/{output,node_modules,asset,dist,release,doc,dep,report,*.bak}/**'
            ];
            const candidates1 = util.getCandidates([], patterns1);
            expect(candidates1.length).to.equal(17);

            process.chdir(__dirname);
            const patterns2 = [
                '**/*.js',
                '!**/{output,node_modules,asset,dist,release,doc,dep,report,*.bak}/**'
            ];
            const candidates2 = util.getCandidates(['rule.spec.js', '.'], patterns2);
            expect(candidates2[0]).to.equal('rule.spec.js');

            const patterns3 = [
                '**/*.js',
                '!**/{output,node_modules,asset,dist,release,doc,dep,report,*.bak}/**'
            ];
            const candidates3 = util.getCandidates(['not-exist.js', '.'], patterns3);
            expect(candidates3.length).to.equal(0);

            const patterns4 = [
                '**/*.js',
                '!**/{output,node_modules,asset,dist,release,doc,dep,report,*.bak}/**'
            ];
            const candidates4 = util.getCandidates(['aaa', '.'], patterns4);
            expect(candidates4.length).to.equal(0);
        });
    });


    describe('getIgnorePatterns: ', () => {
        it('should return right result', () => {
            expect(
                util.getIgnorePatterns(path.join(__dirname, '../', 'fixture/block-indent.less')).length
            ).to.equal(63);
        });
        it('should return right result', () => {
            expect(
                util.getIgnorePatterns(path.join(__dirname, '../', 'fixture/no-exist.less')).length
            ).to.equal(0);
        });
    });
});
/* eslint-enable max-nested-callbacks */
