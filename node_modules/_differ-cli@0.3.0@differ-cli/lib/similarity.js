var compare = require('universal-diff').compare;

var config = require('./config');

var filter = function(arr){
    return arr.filter(function(str){ return str.trim();});
};

var getSimilarity = function(arr1, arr2){
    arr1 = filter(arr1);
    arr2 = filter(arr2);

    var diffs = compare(arr1, arr2),
        totalNum = arr1.length + arr2.length,
        diffNum = 0;

    diffs.forEach(function(diff){
        diffNum += diff[1] + ((diff[2] && diff[2].length) || 0);
    });

    return (1 - (diffNum * diffs.length) / (totalNum * totalNum)) + (totalNum / (totalNum + 30) * 0.2);
};

var isSimilar = function(arr1, arr2){
    return getSimilarity(arr1, arr2) >= config.similarityLimit;
};

module.exports = {
    get: getSimilarity,
    judge: isSimilar
};