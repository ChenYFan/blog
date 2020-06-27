module.exports.getList = (inOptions, inPost, inHexo) => {
    const moment       = require('moment')
    const pathFn       = require('path')
    const lg           = require('./log.js')
    const config       = inHexo.config
    const postData     = inPost

    let retrunJson   = []
    let relatedPosts = []
    let popularPosts = []
    let relatedCnt   = 0
    let popularCnt   = 0
    let postsCat     = ''
    let postsTag     = ''
    let weight_of_tag_relevancy
    let weight_of_contents_relevancy
    let i = 0
    let k = 0
    let n = 0


    // load hexo@3.2's cache
    // --------------------------------------------
    if (!config.popularPosts.tmp.cache_path && inHexo && inHexo.locals && inHexo.locals.cache.cache && inHexo.locals.cache.cache.posts.length && inHexo.locals.cache.cache.posts.data[0].popularPost_tmp_gaData) {
        let tmp_gaData = config.popularPosts.tmp.gaData
        config.popularPosts.tmp.postPath = null
        config.popularPosts.tmp.postPath = []
        config.popularPosts.tmp.gaData   = null
        config.popularPosts.tmp.gaData   = []
        for (let i = 0; i < inHexo.locals.cache.cache.posts.length; i++) {
            // PV update
            if (config.popularPosts.tmp.isGaUpdate) {
                for (k=0; k<tmp_gaData.length; k++) {
                    if (inHexo.locals.cache.cache.posts.data[i].popularPost_tmp_gaData.path == tmp_gaData[k].path) {
                        inHexo.locals.cache.cache.posts.data[i].popularPost_tmp_gaData.pv = tmp_gaData[k].pv
                        inHexo.locals.cache.cache.posts.data[i].popularPost_tmp_gaData.totalPV = tmp_gaData[k].totalPV
                        break
                    }
                }
            }

            config.popularPosts.tmp.gaData.push(inHexo.locals.cache.cache.posts.data[i].popularPost_tmp_gaData)
            if (inHexo.locals.cache.cache.posts.data[i].popularPost_tmp_postPath)config.popularPosts.tmp.postPath.push(inHexo.locals.cache.cache.posts.data[i].path)
        }
        tmp_gaData = null
    }
    // --------------------------------------------


    lg.setConfig(config)


    if (!inOptions)inOptions = {}
    inOptions = Object.assign({
        maxCount: 5,
        ulClass: 'popular-posts',
        PPMixingRate: 0.0,
        isDate: false,
        isImage: false,
        isExcerpt: false,
        PPCategoryFilter: '',
        PPTagFilter: '',
    }, inOptions)

    if (Number(inOptions.PPMixingRate) <= 1.0 && Number(inOptions.maxCount) > 0) {
        relatedCnt =  Math.floor( Number(inOptions.maxCount) * ( 1 - Number(inOptions.PPMixingRate) ) )
    } else {
        lg.log('error', '(Option Error) Please correctly set the option value of helper tag. ', null, true)
        relatedCnt = 0
        return ''
    }

    if (inOptions.PPCategoryFilter && inOptions.PPCategoryFilter != '') {
        postsCat = inOptions.PPCategoryFilter
    }

    if (inOptions.PPTagFilter && inOptions.PPTagFilter != '') {
        postsTag = inOptions.PPTagFilter
    }

    weight_of_tag_relevancy = config.popularPosts.tmp.weight_of_tag_relevancy
    weight_of_contents_relevancy = config.popularPosts.tmp.weight_of_contents_relevancy


    // -------------------------------------------
    // popular posts
    // -------------------------------------------
    if ( Number(inOptions.PPMixingRate) != 0 ) {
        let gaData_opt = []

        if (postData != undefined && postsCat == '') {
            for (i = 0; i < config.popularPosts.tmp.gaData.length; i++) {
                if (config.popularPosts.tmp.gaData[i].path == postData.path) {
                    postsCat = config.popularPosts.tmp.gaData[i].categories
                    break
                }
            }
        }

        // filtering items tag
        if (postsTag != undefined && postsTag != '') {
            for ( i = 0; i < config.popularPosts.tmp.gaData.length; i++) {
                if (config.popularPosts.tmp.gaData[i].date != '') {
                    let p_tags = config.popularPosts.tmp.gaData[i].tags

                    if (p_tags && p_tags.length > 0) {
                        for (k = 0; k < p_tags.length; k++) {
                            if (p_tags[k] == postsTag) {
                                gaData_opt.push(config.popularPosts.tmp.gaData[i])
                            }
                        }
                    }
                }
            }
        // filtering items category
        } else {
            for ( i = 0; i < config.popularPosts.tmp.gaData.length; i++) {
                if (config.popularPosts.tmp.gaData[i].date != '') {
                    let cat_spl
                    if ( config.popularPosts.tmp.gaData[i].categories.match(/\s\>\s/) ) {
                        cat_spl = config.popularPosts.tmp.gaData[i].categories.split(' > ')
                        cat_spl = cat_spl[cat_spl.length -1]
                    } else {
                        cat_spl = config.popularPosts.tmp.gaData[i].categories
                    }

                    let postsCat_spl
                    if ( postsCat.match(/\s\>\s/) ) {
                        postsCat_spl = postsCat.split(' > ')
                        postsCat_spl = postsCat_spl[postsCat_spl.length -1]
                    } else {
                        postsCat_spl = postsCat
                    }

                    if (postsCat_spl == '' || cat_spl == postsCat_spl ) {
                        gaData_opt.push(config.popularPosts.tmp.gaData[i])
                    }
                }
            }
        }

        gaData_opt.sort((a, b) => {
            return (b.pv - a.pv)
        })

        // Remove self page
        if ( postData ) {
            let tmpList = []
            for ( i = 0; i < gaData_opt.length; i++ ) {
                if ( gaData_opt[i] && gaData_opt[i].path && gaData_opt[i].path != postData.path )tmpList.push(gaData_opt[i])
            }
            gaData_opt = tmpList
        }
        popularPosts = gaData_opt
    }


    // // -------------------------------------------
    // // (debug) popular posts
    // // -------------------------------------------
    // console.log('\n\n--- popularPosts ('+ popularPosts.length +') ---')
    // // console.log(popularPosts)
    // for(i=0; i<popularPosts.length; i++){
    //     console.log(' -> '+i +' : '+ popularPosts[i].title + ' (' + popularPosts[i].pv + ' pv)')
    // }


    if ( Number(inOptions.PPMixingRate) != 1.0 ) {
        // -------------------------------------------
        // Related posts (tag)
        // -------------------------------------------
        if (postData) {
            if (postData.tags && postData.tags.length > 0) {
                postData.tags.each((tag) => {
                    tag.posts.each((post) => {
                        let description   = null
                        let eyeCatchImage = null
                        let post_title    = null
                        let post_date     = null
                        let post_path     = null

                        for (i = 0; i < config.popularPosts.tmp.gaData.length; i++) {
                            if (config.popularPosts.tmp.gaData[i] && config.popularPosts.tmp.gaData[i].path == post.path) {
                                description   = config.popularPosts.tmp.gaData[i].excerpt
                                eyeCatchImage = config.popularPosts.tmp.gaData[i].eyeCatchImage
                                post_path     = config.popularPosts.tmp.gaData[i].path
                                post_date     = config.popularPosts.tmp.gaData[i].date
                                post_title    = config.popularPosts.tmp.gaData[i].title
                                break
                            }
                        }

                        if (post.published) {
                            let isExistPost = false
                            for ( i = 0; i < relatedPosts.length; i++) {
                                if (relatedPosts[i].path == post.path) {
                                    relatedPosts[i].relatedDegree++
                                    isExistPost = true
                                    break
                                }
                            }
                            if (!isExistPost && postData.path != post.path) {
                                let pv = 0
                                if (popularPosts.length > 0) {
                                    for ( i = 0; i < popularPosts.length; i++) {
                                        if (popularPosts[i].path == post.path) {
                                            pv = popularPosts[i].pv
                                            break
                                        }
                                    }
                                }
                                relatedPosts.push({
                                    'title': post_title,
                                    'path': post_path,
                                    'eyeCatchImage': eyeCatchImage,
                                    'excerpt': description,
                                    'date': post_date,
                                    'pv': pv,
                                    'relatedDegree': 1,
                                    'relatedDegree_ma': 0,
                                    'matchKeyWord': [],
                                })
                            }
                        }
                    })
                })
            }
        } else {
            lg.log('error', '(list-json.js)The theme you are using doesn\'t support \"post\" data. Please set the data manually. (e.g. <%- popular_posts( {} , post ) %> )\nFor detail , please see this url.\nhttps://github.com/tea3/hexo-related-popular-posts/issues?utf8=%E2%9C%93&q=Cannot%20read%20property%20%27tags%27%20of%20undefined', null, false)
        }

        // -------------------------------------------
        // Related posts ( Contents morphological analysis )
        // -------------------------------------------
        if (config.popularPosts.morphologicalAnalysis && config.popularPosts.tmp.gaData) {
            let postsGaData

            for ( i = 0; i < config.popularPosts.tmp.gaData.length; i++) {
                if (config.popularPosts.tmp.gaData[i].path == postData.path) {
                    postsGaData = config.popularPosts.tmp.gaData[i]
                    break
                }
            }

            if (postsGaData) {
                for ( i = 0; i < config.popularPosts.tmp.gaData.length; i++) {
                    let matchScore   = 0
                    let matchKeyWord = []
                    if (config.popularPosts.tmp.gaData[i].path != postData.path) {
                        // Relevance of content's keywords
                        for (k = 0; k < postsGaData.keywords.length; k++) {
                            for (n = 0; n < config.popularPosts.tmp.gaData[i].keywords.length; n++) {
                                if (postsGaData.keywords[k].w == config.popularPosts.tmp.gaData[i].keywords[n].w && postsGaData.categories == config.popularPosts.tmp.gaData[i].categories ) {
                                    matchScore += Number(postsGaData.keywords[k].f) / (Number(postsGaData.keywordsLength) || 500 )  + Number(config.popularPosts.tmp.gaData[i].keywords[n].f) / (Number(config.popularPosts.tmp.gaData[i].keywordsLength) || 500)

                                    matchKeyWord.push({'w': config.popularPosts.tmp.gaData[i].keywords[n].w, 'f': config.popularPosts.tmp.gaData[i].keywords[n].f})
                                }
                            }
                        }

                        // Relevance of internal link
                        for (k = 0; k < postsGaData.internalLinks.length; k++) {
                            if (pathFn.normalize(postsGaData.internalLinks[k]) == pathFn.normalize(config.popularPosts.tmp.gaData[i].path)) {
                                matchScore += 5.0
                            }
                        }
                    }

                    if (matchScore > 0) {
                        let isAleadyCreatedList = false
                        for ( k = 0; k < relatedPosts.length; k++) {
                            if (relatedPosts[k].path == config.popularPosts.tmp.gaData[i].path) {
                                relatedPosts[k].relatedDegree_ma = matchScore
                                relatedPosts[k].matchKeyWord     = matchKeyWord
                                isAleadyCreatedList              = true
                                break
                            }
                        }

                        if ( !isAleadyCreatedList ) {
                            relatedPosts.push({
                                'title': config.popularPosts.tmp.gaData[i].title,
                                'path': config.popularPosts.tmp.gaData[i].path,
                                'eyeCatchImage': config.popularPosts.tmp.gaData[i].eyeCatchImage,
                                'excerpt': config.popularPosts.tmp.gaData[i].excerpt,
                                'date': config.popularPosts.tmp.gaData[i].date,
                                'pv': config.popularPosts.tmp.gaData[i].pv,
                                'relatedDegree': 0,
                                'relatedDegree_ma': matchScore,
                                'matchKeyWord': matchKeyWord,
                            })
                        }
                    }
                }
            }
        }

        // sort by relatedDegree & pv
        relatedPosts.sort((a, b) => {
            let degreeA = a.relatedDegree * weight_of_tag_relevancy + a.relatedDegree_ma * weight_of_contents_relevancy
            let degreeB = b.relatedDegree * weight_of_tag_relevancy + b.relatedDegree_ma * weight_of_contents_relevancy

            if (degreeB == degreeA) {
                return (b.pv - a.pv)
            } else {
                return (degreeB - degreeA)
            }
        });
    }


    // -------------------------------------------
    // (debug) Related posts
    // -------------------------------------------
    // console.log('\n\n--- relatedPosts ('+ relatedPosts.length +') ---')
    // if(relatedPosts && relatedPosts.length > 0){
    //     for(i=0; i<relatedPosts.length; i++){
    //         console.log('\n-> '+i)
    //         console.log('  title: ' + relatedPosts[i].title)
    //         console.log('  path: ' + relatedPosts[i].path)
    //         console.log('  score: ' + relatedPosts[i].relatedDegree + ' pt & ' + relatedPosts[i].relatedDegree_ma + ' pt & ' + relatedPosts[i].pv +' pv')
    //         // if(relatedPosts[i].matchKeyWord)console.log('  keywords: ')
    //         // if(relatedPosts[i].matchKeyWord)console.log(relatedPosts[i].matchKeyWord)
    //     }
    // }

    // -------------------------------------------
    // checked lists
    // -------------------------------------------
    let isWarning = false
    for ( i = 0; i < popularPosts.length; i++ ) {
        if (popularPosts[i] == null || popularPosts[i] == undefined) {
            isWarning = true
            break
        }
    }
    for ( i = 0; i < relatedPosts.length; i++ ) {
        if (relatedPosts[i] == null || relatedPosts[i] == undefined) {
            isWarning = true
            break
        }
    }
    if (isWarning)lg.log('error', '(list-json.js)Because the post\'s path has been changed, the link can not be created successfully. Please remove the cache with the following command.\r\n$ hexo clean' + config.popularPosts.tmp.cache_path ? ('\r\n$ rm -f '+config.popularPosts.tmp.cache_path) : '', null, false)

    // -------------------------------------------
    // Generated posts
    // -------------------------------------------
    // retrunJson
    let addedPath = []
    let getElm = (list) => {
        if ( addedPath.indexOf( list.path ) != -1 ) return null
        addedPath.push( list.path )

        let ret = {
            'date': '',
            'img': '',
            'title': '',
            'path': '',
            'excerpt': '',
        }


        if (inOptions.isDate && list.date != '') {
            ret.date =  moment(list.date).format(config.date_format || 'YYYY-MM-DD')
        }

        if (inOptions.isImage && list.eyeCatchImage != '') {
            ret.img = list.eyeCatchImage
        }
        ret.title = list.title
        ret.path  = pathFn.join(config.root , list.path)
        if (inOptions.isExcerpt && list.excerpt != '') {
            ret.excerpt = list.excerpt
        }

        return ret
    }


    // mixing related posts
    for ( i = 0; i < relatedCnt; i++) {
        if ( i < relatedPosts.length) {
            let elm = getElm(relatedPosts[i])
            if ( elm ) retrunJson.push( elm )
        } else {
            break
        }
    }

    // mixing popular posts
    popularCnt = Number(inOptions.maxCount) - relatedCnt
    i = 0
    while ( addedPath.length < Number(inOptions.maxCount) && popularCnt > 0 && i < popularPosts.length ) {
        let elm = getElm( popularPosts[i] )
        if ( elm ) {
            retrunJson.push( elm )
            popularCnt--
        }
        i++
    }
  return {'json': retrunJson, 'class': inOptions.ulClass}
}
