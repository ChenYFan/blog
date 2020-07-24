/*
 * tail part of browser-dist file
 * By: nighca@live.cn
 */

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
