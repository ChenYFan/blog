/**
 * @file lib/rule 的测试用例
 * @author ielgnaw(wuji0223@gmail.com)
 */

'use strict';

import chai from 'chai';
import fs from 'fs';
import path from 'path';

let checker = require(path.join(__dirname, '../../src', 'checker'));
let config = require(path.join(__dirname, '../../src', 'config'));

const expect = chai.expect;

/* globals describe, it */

/* eslint-disable max-nested-callbacks */
describe('rule test suite\n', () => {
    describe('block-indent: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/block-indent.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/block-indent.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(8);
            });
        });
    });

    describe('hex-color: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/hex-color.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/hex-color.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(9);
            });
        });
    });

    describe('import: ', () => {
        it('should return right message length', () => {
            // 清空 config storage，设置成默认的 config
            // 因为 fixture 目录下的 .lesslintrc 中配置了 import: false
            config.clearStorage();
            config.loadConfig('.', true);

            const filePath = path.join(__dirname, '../fixture/import.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/import.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(6);
            });
        });
    });

    describe('leading-zero: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/leading-zero.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/leading-zero.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(14);
            });
        });
    });

    describe('operate-unit: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/operate-unit.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/operate-unit.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(2);
            });
        });
    });

    describe('require-after-space: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/require-after-space.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/require-after-space.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(8);
            });
        });
    });

    describe('require-around-space: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/require-around-space.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/require-around-space.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(5);
            });
        });
    });

    describe('require-before-space: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/require-before-space.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/require-before-space.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(9);
            });
        });
    });

    describe('require-newline: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/require-newline.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/require-newline.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(7);
            });
        });
    });

    describe('shorthand: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/shorthand.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/shorthand.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(4);
            });
        });
    });

    describe('single-comment: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/single-comment.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/single-comment.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(9);
            });
        });
    });

    describe('variable-name: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/variable-name.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/variable-name.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(10);
            });
        });
    });

    describe('zero-unit: ', () => {
        it('should return right message length', () => {
            const filePath = path.join(__dirname, '../fixture/zero-unit.less');
            const fileContent = fs.readFileSync(
                path.join(__dirname, '../fixture/zero-unit.less'),
                'utf8'
            ).replace(/\r\n?/g, '\n');

            const file = {
                path: filePath,
                content: fileContent
            };

            const errors = [];
            return checker.check(file, errors, () => {}).then(() => {
                expect(errors[0].messages.length).to.equal(7);
            });
        });
    });
});
/* eslint-enable max-nested-callbacks */
