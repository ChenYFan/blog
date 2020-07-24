const pathFn       = require('path')
const fs           = require('hexo-fs')
const util         = require('./lib/util.js')
const dr           = require('./lib/dateRange.js')
const su           = require('./lib/settingsUpdate.js')
const lg           = require('./lib/log.js')
const pjson        = require('./package.json')
const shash        = su.chkUpdate(hexo.config)
const ngwHash      = su.chkUpdate_ngw(hexo.config)

// option
let gaData                       = null
let dateRangeArr                 = null
let dateRange                    = 30
let id                           = null
let email                        = null
let key                          = null
let viewId                       = null
let cache_path                   = null
let rankingSheet                 = null
let cache_exexpires              = 10
let pvMeasurementsStartDate      = ''
let weight_of_tag_relevancy      = 1.0
let weight_of_contents_relevancy = 1.0
let isLog                        = true

// get setting from _config.yml
if ( hexo.config.popularPosts ) {
    if ( hexo.config.popularPosts.googleAnalyticsAPI ) {
        // Deprecated message
        if ( hexo.config.popularPosts.googleAnalyticsAPI.cache && ( hexo.config.popularPosts.googleAnalyticsAPI.cache.path != undefined || hexo.config.popularPosts.googleAnalyticsAPI.cache.expiresDate != undefined ) ) {
            lg.log('error', '(Deprecated option) \'googleAnalyticsAPI.cache.path\' and \'googleAnalyticsAPI.cache.expiresDate\' are deprecated. Please set the \'cache.path\' and \'googleAnalyticsAPI.expiresDate\' option.', '_config.yml', true)
            return
        }

        // google analytics option
        if ( hexo.config.popularPosts.googleAnalyticsAPI.dateRange) {
            dateRange = Number(hexo.config.popularPosts.googleAnalyticsAPI.dateRange)
        }

        if ( hexo.config.popularPosts.googleAnalyticsAPI.clientId && hexo.config.popularPosts.googleAnalyticsAPI.serviceEmail && hexo.config.popularPosts.googleAnalyticsAPI.key && hexo.config.popularPosts.googleAnalyticsAPI.viewId) {
            id          = hexo.config.popularPosts.googleAnalyticsAPI.clientId
            email       = hexo.config.popularPosts.googleAnalyticsAPI.serviceEmail
            key         = pathFn.join(process.env.PWD || process.cwd(), hexo.config.popularPosts.googleAnalyticsAPI.key)
            viewId      = 'ga:' + hexo.config.popularPosts.googleAnalyticsAPI.viewId
        } else if ( process.env.GOOGLEAPI_CLIENTID && process.env.GOOGLEAPI_EMAIL && process.env.GOOGLEAPI_KEY && process.env.GOOGLEAPI_ANALYTICS_TABLE ) {
            id          = process.env.GOOGLEAPI_CLIENTID
            email       = process.env.GOOGLEAPI_EMAIL
            key         = process.env.GOOGLEAPI_KEY
            viewId      = process.env.GOOGLEAPI_ANALYTICS_TABLE
        } else {
            lg.log('error', 'Please set the googleAnalyticsAPI options or environment variables.', '_config.yml', true)
            return
        }

        if ( hexo.config.popularPosts.googleAnalyticsAPI.pvMeasurementsStartDate != undefined) {
            let pvmstd = String(hexo.config.popularPosts.googleAnalyticsAPI.pvMeasurementsStartDate)
            pvmstd = dr.getDateStrFromDate( new Date(pvmstd) )
            if (pvmstd.match(/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/)) {
                pvMeasurementsStartDate = pvmstd
            } else {
                lg.log('error', 'Please check the \'pvMeasurementsStartDate\' option. This option should be written in the form \'YYYY-MM-DD\' .', '_config.yml', true)
                return
            }
        }

        if ( hexo.config.popularPosts.googleAnalyticsAPI.expiresDate != undefined) {
            cache_exexpires = Number(hexo.config.popularPosts.googleAnalyticsAPI.expiresDate)
        }

        if ( hexo.config.popularPosts.googleAnalyticsAPI.rankingSheet && hexo.config.popularPosts.googleAnalyticsAPI.rankingSheet) {
            rankingSheet = pathFn.join(process.env.PWD || process.cwd(), hexo.config.popularPosts.googleAnalyticsAPI.rankingSheet)
        }
    }

    // related posts weight option
    if ( hexo.config.popularPosts.weight ) {
        if ( hexo.config.popularPosts.weight.tagRelevancy != undefined) {
            weight_of_tag_relevancy = Number(hexo.config.popularPosts.weight.tagRelevancy)
        }
        if ( hexo.config.popularPosts.weight.contentsRelevancy != undefined) {
            weight_of_contents_relevancy = Number(hexo.config.popularPosts.weight.contentsRelevancy)
        }
    }

    // cache option
    if ( hexo.config.popularPosts.cache && hexo.config.popularPosts.cache.path) {
        cache_path = pathFn.join(process.env.PWD || process.cwd(), hexo.config.popularPosts.cache.path)
    }

    // log option
    if ( hexo.config.popularPosts.log != undefined) {
        isLog = hexo.config.popularPosts.log
    }
}
dateRangeArr = dr.getDateRange(dateRange)


// orverride config.popularPosts
hexo.config.popularPosts = Object.assign( {},
    hexo.config.popularPosts, {
        'tmp': {
            'isLog': isLog,
            'negativewordsUpdate': ngwHash,
            'cacheUpdate': '',
            'isNgwUpdate': true,
            'isGaUpdate': true,
            'settingsUpdate': shash,
            'version': pjson.version,
            'dateRange': dateRange,
            'id': id,
            'email': email,
            'key': key,
            'viewId': viewId,
            'cache_path': cache_path,
            'rankingSheet': rankingSheet,
            'cache_exexpires': cache_exexpires,
            'pvMeasurementsStartDate': pvMeasurementsStartDate,
            'old_cacheDate': '',
            'weight_of_tag_relevancy': weight_of_tag_relevancy,
            'weight_of_contents_relevancy': weight_of_contents_relevancy,
            'startDate': dateRangeArr[0],
            'endDate': dateRangeArr[1],
            'gaData': [],
            'postPath': [],
        },
    }
)

lg.setConfig(hexo.config)

// load cache data
if (cache_path && fs.existsSync(cache_path)) {
    const ndt = new Date().getTime()
    let gaDataStr = fs.readFileSync(cache_path)
    gaData = JSON.parse(gaDataStr)
    hexo.config.popularPosts.tmp.cacheUpdate = su.getMD5(gaDataStr)

    // check update of morphologicalAnalysis's negativeKeywordsList
    let isNgwUpdate = !gaData[0].ngwHash || gaData[0].ngwHash != ngwHash
    hexo.config.popularPosts.tmp.isNgwUpdate = isNgwUpdate

    // check the cache format version and hash data
    if (gaData[0].version && gaData[0].version == pjson.version && gaData[0].hash && gaData[0].hash == shash) {
        if (gaData[0].cachedDate &&  (ndt - gaData[0].cachedDate) < cache_exexpires*24*60*60*1000 ) {
            hexo.config.popularPosts.tmp.isGaUpdate = false
        }
        hexo.config.popularPosts.tmp.old_cacheDate = gaData[0].cachedDate
    } else {
        gaData = null
    }

    if (gaData) {
        util.orverrideTmp(gaData[0].gaData, hexo)
    } else {
        util.orverrideTmp([], hexo)
    }
} else if (!cache_path) {
    hexo.config.popularPosts.tmp.isNgwUpdate = false
    hexo.config.popularPosts.tmp.isGaUpdate = false
}


hexo.extend.filter.register('after_init', () => {
    return require('./lib/googleAnalytics')(hexo)
}, {async: true})
hexo.extend.filter.register('after_post_render', ( post ) => {
    return require('./lib/collector')(post, hexo)
}, {async: true})
hexo.extend.filter.register('after_generate', () => {
    return require('./lib/cache')(hexo)
})
hexo.extend.helper.register('popular_posts', (options, post) => {
    return require('./lib/helper')(post, options, hexo)
})
hexo.extend.helper.register('popular_posts_json', (options, post) => {
    return require('./lib/helper-json')(post, options, hexo)
})
hexo.extend.helper.register('popular_posts_pv', (post) => {
    return require('./lib/pv')(post, hexo)
})

