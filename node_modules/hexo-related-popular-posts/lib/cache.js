module.exports = ( hexo ) => {
    const mkdirp     = require('mkdirp')
    const pathFn     = require('path')
    const fs         = require('hexo-fs')
    const cm         = require('columnify')
    const lg         = require('./log.js')
    const su         = require('./settingsUpdate.js')

    const root                    = hexo.config.root.slice(1)
    const cache_path              = hexo.config.popularPosts.tmp.cache_path
    const rankingSheet            = hexo.config.popularPosts.tmp.rankingSheet
    const pvMeasurementsStartDate = hexo.config.popularPosts.tmp.pvMeasurementsStartDate
    const isGaUpdate              = hexo.config.popularPosts.tmp.isGaUpdate

    let gaData_removedDeadLink    = []
    let cacheData                 = ''
    let gaData                    = hexo.config.popularPosts.tmp.gaData


    lg.setConfig(hexo.config)


    // load hexo@3.2's cache
    // --------------------------------------------
    // If the article is not updated, hexo internally caches the previous data (db.json).
    if (hexo && hexo.locals && hexo.locals.cache.cache && hexo.locals.cache.cache.posts.length && hexo.locals.cache.cache.posts.data[0].popularPost_tmp_gaData && hexo.locals.cache.cache.posts.data[hexo.locals.cache.cache.posts.length - 1].popularPost_tmp_gaData) {
        let tmp_gaData = hexo.config.popularPosts.tmp.gaData
        hexo.config.popularPosts.tmp.postPath = null
        hexo.config.popularPosts.tmp.postPath = []
        hexo.config.popularPosts.tmp.gaData   = null
        hexo.config.popularPosts.tmp.gaData   = []

        for (let v=0; v<hexo.locals.cache.cache.posts.length; v++) {
            // PV update
            if (hexo.config.popularPosts.tmp.isGaUpdate) {
                for (let w=0; w<tmp_gaData.length; w++) {
                    if (root + hexo.locals.cache.cache.posts.data[v].popularPost_tmp_gaData.path == tmp_gaData[w].path) {
                        hexo.locals.cache.cache.posts.data[v].popularPost_tmp_gaData.pv = tmp_gaData[w].pv;
                        hexo.locals.cache.cache.posts.data[v].popularPost_tmp_gaData.totalPV = tmp_gaData[w].totalPV;
                        break;
                    }
                }
            }

            hexo.config.popularPosts.tmp.gaData.push(hexo.locals.cache.cache.posts.data[v].popularPost_tmp_gaData)
            if (hexo.locals.cache.cache.posts.data[v].popularPost_tmp_postPath)hexo.config.popularPosts.tmp.postPath.push(hexo.locals.cache.cache.posts.data[v].path)
        }
        gaData = hexo.config.popularPosts.tmp.gaData
        tmp_gaData = null

    // Use plugin's cache
    // -----------------------------------------------
    // When you use the hexo clean command, the internal cache of hexo is cleared.
    // In this case , merge the updated article data and plugin's cache data (e.g. hexo-rpp-cached.json).
    } else if (hexo && hexo.locals && hexo.locals.cache.cache && hexo.locals.cache.cache.posts.length && !hexo.locals.cache.cache.posts.data[0].popularPost_tmp_gaData && cache_path) {
        for (let i = 0; i < gaData.length; i++) {
            let matchedPath = true
            for (let k = 0; k < hexo.config.popularPosts.tmp.postPath.length; k++) {
                if (gaData[i] && hexo.config.popularPosts.tmp.postPath[k] == gaData[i].path) {
                    matchedPath = false
                }
            }
            if (matchedPath)hexo.config.popularPosts.tmp.postPath.push(gaData[i].path)
        }
    // When use hexo new command
    // -----------------------------------------------
    // When you use the hexo clean command, the internal cache of hexo is cleared.
    // In this case , merge the postPath data
    } else if (hexo && hexo.locals && hexo.locals.cache.cache && hexo.locals.cache.cache.posts.length && hexo.locals.cache.cache.posts.data[0].popularPost_tmp_gaData && !hexo.locals.cache.cache.posts.data[hexo.locals.cache.cache.posts.length - 1].popularPost_tmp_gaData) {
        if (hexo.config.popularPosts.tmp.postPath.length == 0) {
            for (let i = 0; i < gaData.length; i++) {
                hexo.config.popularPosts.tmp.postPath.push(gaData[i].path)
            }
        }
    }


    // --------------------------------------------
    // remove dead link & private page
    for (let i = 0; i < gaData.length; i++) {
        for (let k = 0; k < hexo.config.popularPosts.tmp.postPath.length; k++) {
            if (!gaData[i])lg.log('error', 'Because the post\'s path has been changed, the link can not be created successfully. Please remove the cache with the following command.\r\n$ hexo clean' + (cache_path ? ('\r\n$ rm -f '+cache_path) : ''), null, false)
            if (gaData[i] && hexo.config.popularPosts.tmp.postPath[k] == gaData[i].path) {
                gaData_removedDeadLink.push(gaData[i])
            }
        }
    }

    // writing page view ranking sheet
    if (isGaUpdate && rankingSheet) {
        let cmData               = []
        let cmData_sortByPV      = []
        let cmData_sortByTotalPV = []

        for (let i=0; i < gaData_removedDeadLink.length; i++) {
            cmData.push({
                'PV': Number(gaData_removedDeadLink[i].pv),
                'TotalPV': Number(gaData_removedDeadLink[i].totalPV),
                'Permalink': gaData_removedDeadLink[i].path,
                'Title': gaData_removedDeadLink[i].title,
            })
        }

        cmData.sort( (a, b) => {
            if (b.PV != a.PV) {
                return (b.PV - a.PV)
            } else {
                return (b.TotalPV - a.TotalPV)
            }
        })
        cmData_sortByPV = [].concat(cmData)

        if (pvMeasurementsStartDate != '') {
            cmData.sort( (a, b) => {
                if (b.TotalPV != a.TotalPV) {
                    return (b.TotalPV - a.TotalPV)
                } else {
                    return (b.PV - a.PV)
                }
            })
            cmData_sortByTotalPV = [].concat(cmData)
        }

        let sortByPV_Str = cmData_sortByPV.length > 0 ? 'Pageview Ranking\n\n' + cm(cmData_sortByPV) : ''
        let sortByPV_TotalStr = cmData_sortByTotalPV.length > 0 ? '\n\n\n\nPageview Ranking (Total)\n\n' + cm(cmData_sortByTotalPV) : ''

        mkdirp.sync( pathFn.dirname( rankingSheet ))
        fs.writeFileSync( rankingSheet, sortByPV_Str + sortByPV_TotalStr )

        lg.log('info', 'updated rankingSheet file.', null, false)

        cmData               = null
        cmData_sortByPV      = null
        cmData_sortByTotalPV = null
    }

    // generate cache file
    if (cache_path && gaData) {
        cacheData = JSON.stringify( [{
            'version': hexo.config.popularPosts.tmp.version,
            'hash': hexo.config.popularPosts.tmp.settingsUpdate,
            'ngwHash': hexo.config.popularPosts.tmp.negativewordsUpdate,
            'cachedDate': hexo.config.popularPosts.tmp.old_cacheDate,
            'gaData': gaData_removedDeadLink,
        }] )

        // check updating cache file.
        // console.log('Before Cache Hash: ' + hexo.config.popularPosts.tmp.cacheUpdate)
        // console.log('Saved Cache Hash:' + su.getMD5(cacheData))
        if ( hexo.config.popularPosts.tmp.cacheUpdate != su.getMD5(cacheData) ) {
            cacheData = JSON.stringify( [{
                'version': hexo.config.popularPosts.tmp.version,
                'hash': hexo.config.popularPosts.tmp.settingsUpdate,
                'ngwHash': hexo.config.popularPosts.tmp.negativewordsUpdate,
                'cachedDate': new Date().getTime(),
                'gaData': gaData_removedDeadLink,
            }] )

            mkdirp.sync( pathFn.dirname( cache_path ))
            fs.writeFileSync( cache_path, cacheData )

            lg.log('info', 'saved cache file.', null, false)
        }
    }
}
