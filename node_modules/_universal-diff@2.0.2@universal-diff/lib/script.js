/*
 * stepMap to edit-script
 */

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