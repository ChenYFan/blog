const kuromoji = require('kuromoji')
const fs       = require('fs')
const pathFn   = require('path')
const util     = require('./util.js')
const lg       = require('./log.js')

let negativeWords  = []
let wordsLimit     = null
let _tokenizer     = null
let isBuildWaiting = false

/*
Support language is as follow.

- ja
- en

Please cooperate with support of other languages.
https://github.com/tea3/hexo-related-popular-posts/pulls
*/

/**
 * function
 * @param {Object} config - hexo's Global Variables 'config' (https://hexo.io/docs/variables.html)
 * @param {Object} post - hexo's Global Variables 'page.posts[i]'
 * @param {function} callbackFn - callback function. Function to be executed when finished.
 */

 /*
 About callBackFn
 callbackFn(err , keyword , wordsLength);

 @param {String} err - Error message.
 @param {Array} keyword - Characters included in contents. ex. [{w: keyword{String} , f: frequency(The words which appear frequency.){Number} } , ... ]
 @param {Number} wordsLength - Total number of keywords analyzed.
 */
module.exports.getKeyword = (config, post, callbackFn) => {
    if (config.popularPosts && config.popularPosts.morphologicalAnalysis !== undefined ) {
        lg.setConfig(config)

        let kuromoji_path1 = pathFn.normalize(__dirname+'/../node_modules/kuromoji/dict/')
        let kuromoji_path2 = pathFn.normalize(__dirname+'/../../kuromoji/dict/')
        let path_case1     =  fs.existsSync( kuromoji_path1 )
        let path_case2     =  fs.existsSync( kuromoji_path2 )

        if (config.popularPosts.morphologicalAnalysis && config.popularPosts.morphologicalAnalysis.negativeKeywordsList) {
            let nwPath = pathFn.join(process.env.PWD || process.cwd(), config.popularPosts.morphologicalAnalysis.negativeKeywordsList)

            if (fs.existsSync( nwPath )) {
                let negativeWordTmp = fs.readFileSync( nwPath, 'utf-8')
                negativeWords = negativeWordTmp.split('\n')
            }
        }

        if (config.popularPosts.morphologicalAnalysis && config.popularPosts.morphologicalAnalysis.limit) {
            wordsLimit = Number(config.popularPosts.morphologicalAnalysis.limit)
        }
        if (path_case1 || path_case2) {
            if (_tokenizer == null) {
                if (!isBuildWaiting) {
                    isBuildWaiting = true
                    lg.log('info', '(Loading Directory) Plugin is loading a morphological analysis dictionary. Please wait for a little while...', null, false)
                    kuromoji.builder({dicPath: path_case1 ? kuromoji_path1 : kuromoji_path2}).build((err, tokenizer) => {
                        _tokenizer = tokenizer
                        isBuildWaiting = false
                        takenize(post, callbackFn)
                    })
                } else {
                    wait_takenize(post, callbackFn)
                }
            } else {
                takenize(post, callbackFn)
            }
        } else {
            callbackFn('Not found path', [], 0 )
        }
    } else {
        callbackFn('Please set options', [], 0 )
    }
};


let wait_takenize = ( post, callbackFn ) => {
    if (_tokenizer == null) {
        setTimeout( () => {
            call_wait_takenize(post, callbackFn)
        }, 1000 )
    } else {
        takenize( post, callbackFn )
    }
}


let call_wait_takenize = ( post, callbackFn ) => {
    wait_takenize(post, callbackFn)
}


let takenize = ( post, callbackFn ) => {
    let i         = 0
    let k         = 0
    let keyword   = []
    let resultTKR = _tokenizer.tokenize(post.title +'\n' + util.decord_unicode(util.replaceHTMLtoText(post.content)))

    for ( i = 0; i < resultTKR.length; i++) {
        if (resultTKR[i].pos == '名詞' && !isMatchedOtherDetail(resultTKR[i].pos_detail_1) && !isMatchOneByteChar(resultTKR[i].surface_form) && !util.isMatchedElement(resultTKR[i].surface_form, negativeWords)) {
            // console.log(resultTKR[i].surface_form + ' - ' + resultTKR[i].pos_detail_1);
            let findFlg = false
            for (k = 0; k < keyword.length; k++) {
                if (keyword[k].w == resultTKR[i].surface_form) {
                    keyword[k].f = keyword[k].f + 1
                    findFlg = true
                    break
                }
            }
            if (!findFlg) {
                // w: keyword
                // f: frequency (The words which appear frequency.)
                keyword.push({'w': resultTKR[i].surface_form, 'f': 1})
            }
        }
    }

    keyword.sort((a, b) => {
        return (b.f - a.f)
    })

    let wordsLength = keyword.length
    if (wordsLimit != 0 && wordsLimit) {
        let tmpKeyWord = []
        for (i = 0; i < wordsLimit && i < keyword.length; i++) {
            tmpKeyWord.push(keyword[i])
        }
        keyword = null
        keyword = tmpKeyWord
    } else if (wordsLimit == 0) {
        keyword = null
        keyword = []
    }
    callbackFn(null, keyword, wordsLength)
}

let isMatchedOtherDetail = (inDetail) => {
    if (!inDetail) return true
    return inDetail == '数' || inDetail == '非自立' || inDetail == '形容動詞語幹' || inDetail == '接尾' || inDetail == '代名詞' || inDetail == '特殊' || inDetail == '副詞可能'
}

let isMatchOneByteChar = (inStr) => {
    if (!inStr) return true
    return inStr.match(/^([0-9A-Za-z]|[ -~｡-ﾟ])$/)
}
