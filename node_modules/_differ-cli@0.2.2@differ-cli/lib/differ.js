var compare = require('universal-diff').compare;
var clc = require('cli-color');

// num of lines around diff blocks
var aroundLineNum = 3;

// make string with given length
var toLen = function(source, len){
    return (source + '').length >= len ? source : (Array.prototype.join.call({length:len + 1}, ' ') + source).slice(-len);
};

// simple split
var simpleSplit = function(cnt){
    return cnt.split('');
};

// participle code / word
var participle = function(cnt){
    if(cnt.length <= 1) return cnt.split('');

    var arr = [];
    for(var i = 1, l = cnt.length, pos = 0; i < l; i++){
        var isPlainPattern = /[\w\_\$]+/,
            isPrevPlain = isPlainPattern.test(cnt[i-1]),
            isPlain = isPlainPattern.test(cnt[i]);

        if(
            !(isPrevPlain && isPlain)
        ){
            arr.push(cnt.slice(pos, i));
            pos = i;
        }

        if(i === l-1){
            arr.push(cnt.slice(pos));
        }
    }
    return arr;
};

// method to wrap line number
var wrapNum = function(num){
    return toLen(num, 5) + ' |';
};

// header of lines in different lines
var header = {
    normal: function(line){
        return ['|', wrapNum(line.pos1), wrapNum(line.pos2), ' '];
    },
    remove: function(line){
        return ['|', wrapNum(line.pos1), wrapNum(''), '-'];
    },
    insert: function(line){
        return ['|', wrapNum(''), wrapNum(line.pos2), '+'];
    }
};

// effects of lines in different lines
var effect = {
    line: {
        normal: function(cnt){
            return cnt;
        },
        remove: function(cnt){
            return clc.red(cnt);
        },
        insert: function(cnt){
            return clc.green(cnt);
        }
    },
    word: {
        normal: function(cnt){
            return cnt;
        },
        remove: function(cnt){
            return clc.bgRed.white(cnt);
        },
        insert: function(cnt){
            return clc.bgGreen.black(cnt);
        }
    }
};

// wrap a word
var getWord = function(word){
    return effect.word[word.type](word.cnt);
};

// wrap one line
var getLine = function(line){
    var transform = effect.line[line.type];

    var cnt = line.cnt.map(function(word){
        return transform(getWord(word));
    }).join('');

    var headerParts = header[line.type](line).map(function(part){
        return transform(part);
    });

    return '  ' + headerParts.concat(cnt).join(' ');
};

// wrap a block
var getBlock = function(block){
    return block.lines.map(getLine).join('\n');
};

// diff by lines
var diffByLines = function(cnt1, cnt2){
    var lines1 = cnt1.split('\n'),
        lines2 = cnt2.split('\n'),
        lines = [];

    var curr = {
        pos1: 0,
        pos2: 0,
        prevEnd: 0
    };

    // deal with diffs
    compare(lines1, lines2).forEach(function(diff, i){
        var start = diff[0],
            len = diff[1],
            to = diff[2];

        lines1.slice(curr.prevEnd, start).forEach(function(cnt){
            lines.push({
                type: 'normal',
                cnt: cnt,
                pos1: ++curr.pos1,
                pos2: ++curr.pos2
            });
        });

        lines1.slice(start, start + len).forEach(function(cnt){
            lines.push({
                type: 'remove',
                cnt: cnt,
                pos1: ++curr.pos1,
                pos2: ''
            });
        });

        to && to.forEach(function(cnt){
            lines.push({
                type: 'insert',
                cnt: cnt,
                pos1: '',
                pos2: ++curr.pos2
            });
        });

        curr.prevEnd = start + len;
    });

    // same content after the last diff
    lines1.slice(curr.prevEnd).forEach(function(cnt){
        lines.push({
            type: 'normal',
            cnt: cnt,
            pos1: ++curr.pos1,
            pos2: ++curr.pos2
        });
    });

    return lines;
};

// diff by words 
var diffByWords = function(line1, line2){
    var prevEnd = 0,
        origin = participle(line1.cnt),
        target = participle(line2.cnt),
        originArr = [],
        targetArr = [];

    compare(origin, target).forEach(function(diff, i){
        var start = diff[0],
            len = diff[1],
            to = diff[2];

        var kept = origin.slice(prevEnd, start).join('');
        if(kept){
            kept = {
                type: 'normal',
                cnt: kept
            };
            originArr.push(kept);
            targetArr.push(kept);
        }
        
        var removed = origin.slice(start, start + len).join('');
        if(removed){
            removed = {
                type: 'remove',
                cnt: removed
            };
            originArr.push(removed);
        }

        var inserted = to;
        if(inserted){
            inserted = {
                type: 'insert',
                cnt: inserted.join('')
            };

            targetArr.push(inserted);
        }

        prevEnd = start + len;
    });

    var leftKept = origin.slice(prevEnd).join('');
    if(leftKept){
        leftKept = {
            type: 'normal',
            cnt: leftKept
        };

        originArr.push(leftKept);
        targetArr.push(leftKept);
    }

    line1.cnt = originArr;
    line2.cnt = targetArr;
};

// diff in line (between words)
var diffInline = function(lines){

    lines.forEach(function(line, i){
        var curr = lines[i],
            next = lines[i+1];

        if(
            (curr.type === 'remove') &&
            (next && next.type === 'insert')
        ){
            var removeNum = 0,
                insertNum = 0;
            while(curr && curr.type === 'remove'){
                removeNum++;
                curr = lines[i - removeNum];
            }
            while(next && next.type === 'insert'){
                insertNum++;
                next = lines[i + 1 + insertNum];
            }

            if(removeNum === insertNum){
                for(var j = 0; j < insertNum; j++){
                    diffByWords(lines[i - removeNum + 1 + j], lines[i + 1 + j]);
                }
            }

        }
    });

    lines.forEach(function(line){
        if(typeof line.cnt === 'string'){
            line.cnt = [{
                type: 'normal',
                cnt: line.cnt
            }];
        }
    });

    return lines;
};

// get diff output between two cnts
var getOutput = function(cnt1, cnt2){
    var linesDiff = diffInline(diffByLines(cnt1, cnt2));

    var curr, blocks = [];

    for(var i = 0, l = linesDiff.length, line, start, end; i < l; i++){
        line = linesDiff[i];

        if(line.type !== 'normal'){
            if(curr && i <= curr.end){
                curr.end = Math.min(l - 1, i + aroundLineNum);
            }else{
                if(curr){
                    //console.log(curr);
                    blocks.push({
                        start: linesDiff[curr.start].pos1,
                        end: linesDiff[curr.end].pos1,
                        lines: linesDiff.slice(curr.start, curr.end + 1)
                    });
                }

                curr = {
                    start: Math.max(0, i - aroundLineNum),
                    end: Math.min(l - 1, i + aroundLineNum)
                };
            }
        }

        if(i === l - 1  && curr){
            blocks.push({
                start: linesDiff[curr.start].pos1,
                end: linesDiff[curr.end].pos1,
                lines: linesDiff.slice(curr.start, curr.end + 1)
            });
        }

    }

    var splitter = '\n\n  ...\n\n';

    return blocks.length ?
        splitter + blocks.map(getBlock).join(splitter) + splitter :
        '> No change.';
};

module.exports = getOutput;