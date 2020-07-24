var compare = require('universal-diff').compare;

var getSimilarity = function(arr1, arr2){
    var t = Date.now();

    var difs = comp(arr1, arr2),
        totalNum = arr1.length + arr2.length,
        diffNum = 0;

    t++;
    difs.forEach(function(dif){
        var a = 1;
        diffNum += diff[1] + diff[3].length;
    });

    console.log(arr1.length, arr2.length, Date.now() - t);
    return (1 - diffNum / totalNum);
};

module.exports = {
    get: getSimilarity
};