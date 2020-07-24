var assert = require('assert');

var diff = require('../dist/diff');

describe('string', function(){
    
    describe('compare()', function(){
        it('should return compare result', function(){
            var str1 = '123',
                str2 = '143',
                result = diff.compareStr(str1, str2);

            assert.strictEqual(result.splitter, '');
            assert.strictEqual(result.diff.length, 1);
            assert.deepEqual(result.diff[0], [1, 1, '4']);
        });
    });

    describe('merge()', function(){
        it('should merge origin with result', function(){
            var tryCompareAndMerge = function(origin, target){
                assert.strictEqual(diff.mergeStr(origin, diff.compareStr(origin, target)), target);
            };

            tryCompareAndMerge('123', '143');
            tryCompareAndMerge('arr[3]', '1killowmeters43');
            tryCompareAndMerge('', 'takeiteasy');
            tryCompareAndMerge('var a=1;', 'var b = [];');
            tryCompareAndMerge('hello world', 'HELLO 42!');
            tryCompareAndMerge('how about a sentence?', '');
        });
    });

});