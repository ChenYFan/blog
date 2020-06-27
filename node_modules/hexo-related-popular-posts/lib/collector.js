const util    = require('./util.js')
const ma_jp   = require('./morphologicalAnalysis-jp')
const cheerio = require('cheerio')

module.exports = (post, inHexo) => {
    let _this = inHexo

    return checkUpdate(_this, post)
        .then(internalLinkAnalytics)
        .then(morphologicalAnalysis)
        .then(postMetaCollector)
        .then((inArgs) => {
            let post             = inArgs[0]
            let thisTmp          = inArgs[1]

            _this.config.popularPosts.tmp.gaData = null
            _this.config.popularPosts.tmp.gaData = thisTmp

            return new Promise((resolve, reject) => {
                resolve(post)
        })
    })
}


let postMetaCollector = (inArgs) => {
    let _this              = inArgs[0]
    let post               = inArgs[1]
    let internalLinks      = inArgs[2]
    let keywords           = inArgs[3]
    let wordsLength        = inArgs[4]
    let isUpdatePermission = inArgs[5]

    let description   = null
    let eyeCatchImage = null

    return new Promise((resolve, reject) => {
        if (post.published && isUpdatePermission) {
            
            // get description
            if (post.description && post.description != '') {
                description = post.description
                // description = util.replaceHTMLtoText(post.description).replace(/\%0D\%0A/g,'')
            } else if (post.excerpt && post.excerpt != '') {
                description = post.excerpt
                // description = util.replaceHTMLtoText(post.excerpt).replace(/\%0D\%0A/g,"")
            }

            // get eyecatch image
            if (post.eyeCatchImage || post.postImage || (post.ampSettings && post.ampSettings.titleImage.path) ) {
                eyeCatchImage = post.eyeCatchImage  || post.postImage || ( (post.ampSettings && post.ampSettings.titleImage.path) ? post.ampSettings.titleImage.path : null )
                
            } else {
                                   
                let $ = cheerio.load(post.content)
                if( $("img") && $("img").length > 0){
                    $("img").each(function(i){
                      if( i == 0 ){
                        let imgsrc = $(this).attr("src")
                        eyeCatchImage = imgsrc
                      }
                    })
                }
            }
         

            let isMatched = false


            for (let i=0; i<_this.config.popularPosts.tmp.gaData.length; i++) {
                if ( _this.config.popularPosts.tmp.gaData[i].path == post.path ) {
                    let gaData_tmp = _this.config.popularPosts.tmp.gaData

                    gaData_tmp[i].updated        = String(post.updated._i)
                    gaData_tmp[i].path           = post.path
                    gaData_tmp[i].title          = post.title
                    gaData_tmp[i].eyeCatchImage  = eyeCatchImage
                    gaData_tmp[i].excerpt        = description
                    gaData_tmp[i].date           = post.date
                    gaData_tmp[i].categories     = util.categorieName(post.categories)
                    gaData_tmp[i].tags           = util.tagName(post.tags)
                    gaData_tmp[i].internalLinks  = internalLinks
                    gaData_tmp[i].keywords       = keywords
                    gaData_tmp[i].keywordsLength = wordsLength

                    _this.config.popularPosts.tmp.gaData = null
                    _this.config.popularPosts.tmp.gaData = gaData_tmp
                    isMatched = true

                    // backup to hexo@3.2's cache
                    // ---------------------------------
                    post.eyeCatchImage = eyeCatchImage
                    post.popularPost_tmp_gaData = gaData_tmp[i]
                }
            }

            if (!isMatched) {
                let gaData_tmp  = _this.config.popularPosts.tmp.gaData
                let newGaData   = util.gaDataModel({
                    'updated': String(post.updated._i),
                    'title': post.title,
                    'path': post.path,
                    'eyeCatchImage': eyeCatchImage,
                    'excerpt': description,
                    'date': post.date,
                    'pv': 0,
                    'categories': util.categorieName(post.categories),
                    'tags': util.tagName(post.tags),
                    'internalLinks': internalLinks,
                    'keywords': keywords,
                    'keywordsLength': wordsLength,
                })
                gaData_tmp.push( newGaData )

                // if(keywords.length > 0)console.log(keywords)

                _this.config.popularPosts.tmp.gaData = null
                _this.config.popularPosts.tmp.gaData = gaData_tmp

                // backup to hexo@3.2's cache
                // ---------------------------------
                post.eyeCatchImage = eyeCatchImage
                post.popularPost_tmp_gaData = gaData_tmp[gaData_tmp.length -1]
            }
        }

        resolve([post, _this.config.popularPosts.tmp.gaData])
    })
}


let morphologicalAnalysis = (inArgs) => {
    let _this              = inArgs[0]
    let post               = inArgs[1]
    let internalLinks      = inArgs[2]
    let isUpdatePermission = inArgs[3]

    return new Promise((resolve, reject) => {
        if ( post.published) {
            if ( isUpdatePermission || _this.config.popularPosts.tmp.isNgwUpdate ) {
                if (_this.config.language == 'ja' || _this.config.language == 'en') {
                    ma_jp.getKeyword(_this.config, post, (err, keyword_results, wordsLength ) => {
                        if (keyword_results && keyword_results.length > 0) {
                            // debug keywords
                            if (_this.config.popularPosts.tmp.isLog) {
                                console.log('\u001b[32m [hexo-related-popular-posts] Keywords Updated : ' + post.path +'\u001b[0m')
                                console.log('  ' + wordsLength + ' keywords found.')
                                for (let i=0; i<keyword_results.length && i<10; i++ ) {
                                    console.log( '  -> (' + keyword_results[i].f + ') : '  +keyword_results[i].w)
                                }
                            }
                        }
                        resolve([_this, post, internalLinks, keyword_results, wordsLength, isUpdatePermission])
                    })
                } else {
                    // ----------------------------
                    // Other Languages are not supported.
                    //
                    // Please cooperate with support of other languages.
                    // https://github.com/tea3/hexo-related-popular-posts/pulls
                    // ----------------------------
                    resolve([_this, post, internalLinks, [], 0, isUpdatePermission])
                }
            } else {
                resolve([_this, post, internalLinks, [], 0, isUpdatePermission])
            }
        } else {
            resolve([_this, post, internalLinks, [], 0, isUpdatePermission])
        }
    })
}

let internalLinkAnalytics = (inArgs) => {
    let _this              = inArgs[0]
    let post               = inArgs[1]
    let isUpdatePermission = inArgs[2]

    return new Promise((resolve, reject) => {
        let ilinks = post.content.match(/\<a\s*?href\=\"(.*?)\".*?\>/g)
        let internalLinks = []

        if (ilinks) {
            for (let i=0; i < ilinks.length; i++) {
                let ilink = ilinks[i].match(/href\=\"\/(.*?)\"/)
                if (ilink && ilink.length >= 2) {
                    internalLinks.push(ilink[1])
                }
            }
        }

        resolve([_this, post, internalLinks, isUpdatePermission])
    })
}


let checkUpdate = (inThis, inPost) => {
    let _this  = inThis
    let post   = inPost
    let gaData = _this.config.popularPosts.tmp.gaData

    return new Promise((resolve, reject) => {
        let isUpdatePermission = true
        if (post.published) {
            for (let i=0; i < gaData.length; i++) {
                if (!gaData[i]){
                    isUpdatePermission = false
                    break
                }
                if (gaData[i].path == post.path) {
                    if ( gaData[i].updated == String(post.updated._i)) {
                        isUpdatePermission = false
                    }
                    break
                }
            }


            let addedPath = false
            for (let j=0; j < _this.config.popularPosts.tmp.postPath.length; j++) {
                if (_this.config.popularPosts.tmp.postPath[j] == post.path) {
                    addedPath = true
                    break
                }
            }
            if (!addedPath)_this.config.popularPosts.tmp.postPath.push(post.path)

            // backup to hexo@3.2's cache
            // ---------------------------------
            post.popularPost_tmp_postPath = !addedPath
            // ---------------------------------
        } else {
            isUpdatePermission = false
        }

        resolve([_this, post, isUpdatePermission])
    })
}
