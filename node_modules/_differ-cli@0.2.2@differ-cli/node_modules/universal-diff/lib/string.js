/*
 * method to compare string
 */

// compare string (use splitter)
var compareStr = function(str1, str2, splitter){
    splitter = typeof splitter === 'string' ? splitter : '';

    var seq1 = str1.split(splitter),
        seq2 = str2.split(splitter),
        script = compare(seq1, seq2);

    script.forEach(function(change){
        if(change[2]){
            change[2] = change[2].join(splitter);
        }
    });

    return {
        splitter: splitter,
        diff: script
    };
};

// merge string (add spliter back)
var mergeStr = function(cnt, compareResult){
    var splitter = compareResult.splitter,
        diff = compareResult.diff,
        result = cnt.split(splitter);

    for(var i = diff.length - 1, item; i >= 0; i--){
        item = diff[i];
        result.splice.apply(result, item);
    }

    return result.join(splitter);
};