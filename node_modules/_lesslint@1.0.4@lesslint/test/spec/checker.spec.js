/**
 * @file lib/checker.js 的测试用例
 * @author ielgnaw(wuji0223@gmail.com)
 */

'use strict';

import chai from 'chai';
import path from 'path';

let checker = require(path.join(__dirname, '../../src', 'checker'));
let config = require(path.join(__dirname, '../../src', 'config'));

const expect = chai.expect;

/* globals describe, it */

/* eslint-disable max-nested-callbacks */
describe('checker test suite\n', () => {
    describe('checkString: \n', () => {
        it('should be return right result', () => {
            const filePath = 'path/to/file.css';
            const fileContent = '\np {\n    height: 0px;}\n\n';
            return checker.checkString(fileContent, filePath, config.loadConfig(filePath, false)).then(invalidList => {
                expect(invalidList[0].messages.length).to.equal(1);
            });
        });

        it('should catch error with line', () => {
            const filePath = 'path/to/file.css';
            const fileContent = '\np {\nheight: 0px\n\n';
            return checker.checkString(fileContent, filePath, config.loadConfig(filePath, false)).then(() => {
            }).catch(invalidList => {
                const messages = invalidList[0].messages;
                expect(messages[0].line).to.equal(2);
                expect(messages[0].ruleName).to.equal('CssSyntaxError');
            });
        });
    });

    describe('check: \n', () => {
        it('should be return right result', () => {
            const errors = [];
            const file = {
                path: 'path/to/file.css',
                content: '\np {\n height: 0px;}\n\n'
            };
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(2);
            });
        });

        it('should catch error with line', () => {
            const errors = [];
            const file = {
                path: 'path/to/file.css',
                content: '\np {\n height: 0px\ncolor: ccc;\n\n'
            };
            return checker.check(file, errors, () => {}).then(() => {
                config.clearStorage();
                const messages = errors[0].messages;
                expect(messages[0].line).to.equal(3);
                expect(messages[0].ruleName).to.equal('CssSyntaxError');
            });
        });
    });
});
/* eslint-enable max-nested-callbacks */
