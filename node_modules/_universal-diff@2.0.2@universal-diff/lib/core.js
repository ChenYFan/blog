/*
 * core compare method
 * By: nighca@live.cn
 */

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