/*! universal-diff v2.0.2 | nighca(nighca@live.cn) | Apache License(2.0) */

(function(global, undefined){


// steps

var STEP_NOCHANGE = 0,
    STEP_REPLACE = 1,
    STEP_REMOVE = 2,
    STEP_INSERT = 3;


// script marks

var MARK_EMPTY = -1,
    MARK_SAME = 0;


var defaultEqual = function(a, b){
    return a === b;
};

// caculate min-edit-script (naive)
var naiveCompare = function(seq1, seq2, eq){

    var l1 = seq1.length,
        l2 = seq2.length,
        distMap = Array.apply(null, {length: l1 + 1}).map(function(){return [];}),
        stepMap = Array.apply(null, {length: l1 + 1}).map(function(){return [];}),
        i, j;

    eq = eq || defaultEqual;

    for(i = 0; i <= l1; i++){
        for(j = 0; j <= l2; j++){

            if(i === 0 || j === 0){
                distMap[i][j] = i || j;
                stepMap[i][j] = i > 0 ? STEP_REMOVE : STEP_INSERT;

            }else{
                var equal = eq(seq1[i-1], seq2[j-1]),

                    removeDist = distMap[i-1][j] + 1,
                    insertDist = distMap[i][j-1] + 1,
                    replaceDist = distMap[i-1][j-1] + (equal ? 0 : 2),
                    dist = Math.min(replaceDist, removeDist, insertDist);

                distMap[i][j] = dist;

                switch(dist){
                
                case replaceDist:
                    stepMap[i][j] = equal ? STEP_NOCHANGE : STEP_REPLACE;
                    break;
                
                case removeDist:
                    stepMap[i][j] = STEP_REMOVE;
                    break;
                
                case insertDist:
                    stepMap[i][j] = STEP_INSERT;

                }
            }
        }
    }

    return stepMap;
};

// caculate min-edit-script (myers)
var myersCompare = function(seq1, seq2, eq){

    var N = seq1.length,
        M = seq2.length,
        MAX = N + M,
        stepMap = Array.apply(null, {length: M+N+1}).map(function(){return [];}),
        furthestReaching = [],
        dist = -1;

    eq = eq || defaultEqual;

    furthestReaching[MAX + 1] = 0;

    // caculate min distance & log each step
    for(var D = 0; D <= MAX && dist === -1; D++){
        for(var k = -D, x, y, step; k <= D && dist === -1; k+=2){
            if(k === -D || (k !== D && furthestReaching[k - 1 + MAX] < furthestReaching[k + 1 + MAX])){
                x = furthestReaching[k + 1 + MAX];
                step = STEP_INSERT;
            }else{
                x = furthestReaching[k - 1 + MAX] + 1;
                step = STEP_REMOVE;
            }

            y = x - k;
            stepMap[x][y] = step;

            while(x < N && y < M && eq(seq1[x], seq2[y])){
                x++;
                y++;
                stepMap[x][y] = STEP_NOCHANGE;
            }

            furthestReaching[k + MAX] = x;

            if(x >= N && y >= M){
                dist = D;
            }
        }
    }

    return stepMap;
};

// use myers as default
var coreCompare = myersCompare;

// stepMap to contrast array
var transformStepMap = function(seq1, seq2, stepMap){
    // get contrast arrays (src & target) by analyze step by step
    var l1 = seq1.length,
        l2 = seq2.length,
        src = [], target = [];

    for(var i = l1,j = l2; i > 0 || j > 0;){
        switch(stepMap[i][j]){

        case STEP_NOCHANGE:
            src.unshift(seq1[i-1]);
            target.unshift(MARK_SAME);
            i -= 1;
            j -= 1;
            break;

        case STEP_REPLACE:
            src.unshift(seq1[i-1]);
            target.unshift(seq2[j-1]);
            i -= 1;
            j -= 1;
            break;

        case STEP_REMOVE:
            src.unshift(seq1[i-1]);
            target.unshift(MARK_EMPTY);
            i -= 1;
            j -= 0;
            break;

        case STEP_INSERT:
            src.unshift(MARK_EMPTY);
            target.unshift(seq2[j-1]);
            i -= 0;
            j -= 1;
            break;

        }
    }

    return {
        src: src,
        target: target
    };
};

// get edit script
var compare = function(seq1, seq2, eq){

    // do compare
    var stepMap = coreCompare(seq1, seq2, eq);

    // transform stepMap
    var contrast = transformStepMap(seq1, seq2, stepMap),
        src = contrast.src,
        target = contrast.target;

    // convert contrast arrays to edit script
    var l = target.length,
        start, len, to,
        notEmpty = function(s){return s !== MARK_EMPTY;},
        script = [],
        i, j;

    for(i = l - 1; i >= 0;){
        // join continuous diffs
        for(j = i; target[j] !== MARK_SAME && j >= 0; j--){}

        if(j < i){
            start = src.slice(0, j + 1).filter(notEmpty).length;            // start pos of diffs (on src)
            len = src.slice(j + 1, i + 1).filter(notEmpty).length;          // length should be replaced (on src)
            to = target.slice(j + 1, i + 1).filter(notEmpty);               // new content

            script.unshift(
                to.length ?
                [start, len, to] :                                          // replace
                [start, len]                                                // remove
            );
        }

        i = j - 1;
    }

    return script;
};

// merge
var merge = function(seq, script){
    var result = seq.slice();

    for(var i = script.length - 1, modify; i >= 0; i--){
        modify = script[i];
        var to = modify[2];
        if(to){
            modify = modify.slice(0, 2).concat(to);
        }
        result.splice.apply(result, modify);
    }

    return result;
};

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

var diff = {
    coreCompare: coreCompare,
    compare: compare,
    merge: merge,
    compareStr: compareStr,
    mergeStr: mergeStr
};

// RequireJS && SeaJS
if(typeof define === 'function'){
    define(function(){
        return diff;
    });

// NodeJS
}else if(typeof exports !== 'undefined'){
    module.exports = diff;
}else{
    global.diff = diff;
}

})(this);
