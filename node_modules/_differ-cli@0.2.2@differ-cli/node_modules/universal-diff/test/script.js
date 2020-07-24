var assert = require('assert');

var diff = require('../dist/diff');

describe('compare', function(){
    
    describe('compare()', function(){
        it('should return compare result', function(){
            var seq1 = [1, 2, 3],
                seq2 = [1, 4, 3],
                result = diff.compare(seq1, seq2);

            assert.strictEqual(result.length, 1);
            assert.deepEqual(result[0], [1, 1, [4]]);
        });
    });

    describe('merge()', function(){
        it('should merge origin with result', function(){
            var tryCompareAndMerge = function(origin, target){
                assert.deepEqual(diff.merge(origin, diff.compare(origin, target)), target);
            };

            tryCompareAndMerge([1, 2, 3], [1, 2, 3]);
            tryCompareAndMerge([1, [2], 3], [1, 4, 3]);
            tryCompareAndMerge([1, 2, '3'], [1, '2', 3]);
            tryCompareAndMerge([1, 21, 3, 'a'], [1, 4, 3, [1, 2]]);
            tryCompareAndMerge(['a', [], 1435, 'i\'m test', 3], [1, 2, 'a', [2, '4', [1]], 3]);
        });
    });

});