const gaAnalytics = require('ga-analytics')
const dr          = require('./dateRange.js')
const util        = require('./util.js')
const lg          = require('./log.js')

module.exports = ( inHexo ) => {
    lg.setConfig(inHexo.config)

    return getPVfromGA(inHexo)
        .then(getTotalPVfromGA)
        .then((inArgs) => {
            if (inArgs[1]) lg.log('info', 'Google Analytics Page View Data was refreshed.', null, false)

            return new Promise( (resolve, reject) => {
                resolve(inArgs[0])
        })
    })
}

let getTotalPVfromGA = (inArgs) => {
    let inHexo     = inArgs[0]
    let isUpdated = inArgs[1]

    return new Promise( (resolve, reject) => {
        // load google analytics data
        if (inHexo.config.popularPosts.tmp.isGaUpdate) {
            if (inHexo.config.popularPosts.tmp.id && inHexo.config.popularPosts.tmp.email && inHexo.config.popularPosts.tmp.key && inHexo.config.popularPosts.tmp.viewId && inHexo.config.popularPosts.tmp.pvMeasurementsStartDate != '') {
                gaAnalytics({
                    'dimensions': 'ga:pagePath',
                    'metrics': 'ga:pageviews',
                    'clientId': inHexo.config.popularPosts.tmp.id,
                    'serviceEmail': inHexo.config.popularPosts.tmp.email,
                    'key': inHexo.config.popularPosts.tmp.key,
                    'ids': inHexo.config.popularPosts.tmp.viewId,
                    'startDate': inHexo.config.popularPosts.tmp.pvMeasurementsStartDate,
                    'endDate': dr.getYesterdayDateStr(),
                    'sort': '-ga:pageviews',
                }, (err, res) => {
                    if (err) {
                        lg.log('error', '(ga-analytics totalPV error) ' + err + '\nPlease check the Google AnalyticsAPI Options or Environment Variables.', '_config.yml', true )
                        resolve([inHexo])
                    } else {
                        if ( res.rows && res.rows.length > 0) {
                            for ( let i = 0; i < res.rows.length; i++) {
                                for (let k = 0; k < inHexo.config.popularPosts.tmp.gaData.length; k++) {
                                    if ( inHexo.config.popularPosts.tmp.gaData[k].path == util.normalizeURL(res.rows[i][0]) ) {
                                        inHexo.config.popularPosts.tmp.gaData[k].totalPV = inHexo.config.popularPosts.tmp.gaData[k].totalPV + Number(res.rows[i][1])
                                        break
                                    }
                                }
                            }
                        }

                        let gaDataTmp = inHexo.config.popularPosts.tmp.gaData

                        util.orverrideTmp(gaDataTmp, inHexo)

                        resolve([inHexo, (true || isUpdated )])
                    }
                })
            } else {
                resolve([inHexo, ( false || isUpdated )])
            }
        } else {
            resolve([inHexo, ( false || isUpdated )])
        }
    })
}

let getPVfromGA = (inHexo) => {
    return new Promise( (resolve, reject) => {
        let gaData

        // load google analytics data
        if (inHexo.config.popularPosts.tmp.isGaUpdate) {
            if (inHexo.config.popularPosts.tmp.id && inHexo.config.popularPosts.tmp.email && inHexo.config.popularPosts.tmp.key && inHexo.config.popularPosts.tmp.viewId) {
                gaAnalytics({
                    'dimensions': 'ga:pagePath',
                    'metrics': 'ga:pageviews',
                    'clientId': inHexo.config.popularPosts.tmp.id,
                    'serviceEmail': inHexo.config.popularPosts.tmp.email,
                    'key': inHexo.config.popularPosts.tmp.key,
                    'ids': inHexo.config.popularPosts.tmp.viewId,
                    'startDate': inHexo.config.popularPosts.tmp.startDate,
                    'endDate': inHexo.config.popularPosts.tmp.endDate,
                    'sort': '-ga:pageviews',
                }, (err, res) => {
                    if (err) {
                        lg.log('error', '(ga-analytics pv error) ' + err + '\nPlease check the Google AnalyticsAPI Options or Environment Variables.', '_config.yml', true )
                        resolve([inHexo])
                    } else {
                        const ndt = new Date().getTime()
                        gaData = [{'cachedDate': ndt, 'gaData': []}]
                        if ( res.rows && res.rows.length > 0) {
                            for ( let i = 0; i < res.rows.length; i++) {
                                let isAleadyCreated = false
                                for (let k = 0; k < inHexo.config.popularPosts.tmp.gaData.length; k++) {
                                    if ( inHexo.config.popularPosts.tmp.gaData[k].path == util.normalizeURL(res.rows[i][0]) ) {
                                        gaData[0].gaData.push( util.gaDataModel({
                                            'updated': inHexo.config.popularPosts.tmp.gaData[k].updated || '0',
                                            'title': inHexo.config.popularPosts.tmp.gaData[k].title || '',
                                            'path': res.rows[i][0],
                                            'eyeCatchImage': inHexo.config.popularPosts.tmp.gaData[k].eyeCatchImage || '',
                                            'excerpt': inHexo.config.popularPosts.tmp.gaData[k].excerpt || '',
                                            'date': inHexo.config.popularPosts.tmp.gaData[k].date || '',
                                            'pv': Number(res.rows[i][1]),
                                            'totalPV': 0,
                                            'categories': inHexo.config.popularPosts.tmp.gaData[k].categories || [],
                                            'tags': inHexo.config.popularPosts.tmp.gaData[k].tags || [],
                                            'internalLinks': inHexo.config.popularPosts.tmp.gaData[k].internalLinks || [],
                                            'keywords': inHexo.config.popularPosts.tmp.gaData[k].keywords || [],
                                            'keywordsLength': inHexo.config.popularPosts.tmp.gaData[k].keywordsLength || 0,
                                        }) )

                                        isAleadyCreated = true
                                        break
                                    }
                                }

                                if (!isAleadyCreated) {
                                    gaData[0].gaData.push( util.gaDataModel({
                                        'path': res.rows[i][0],
                                        'pv': Number( res.rows[i][1] ),
                                    }) )
                                }
                            }
                        }

                        // Adding a page without access.
                        for (let k = 0; k < inHexo.config.popularPosts.tmp.gaData.length; k++) {
                            let isNotMatch = true
                            if ( res.rows && res.rows.length > 0 ) {
                                for ( let i = 0; i < res.rows.length; i++) {
                                    if ( inHexo.config.popularPosts.tmp.gaData[k].path == util.normalizeURL(res.rows[i][0]) ) {
                                        isNotMatch = false
                                    }
                                }
                            }
                            if (isNotMatch) {
                                gaData[0].gaData.push( inHexo.config.popularPosts.tmp.gaData[k] )
                            }
                        }

                        // normalized URL
                        let gaData_temp = util.normalizeGaData( gaData[0].gaData )
                        gaData[0].gaData = null
                        gaData[0].gaData = gaData_temp


                        util.orverrideTmp(gaData[0].gaData, inHexo)


                        resolve([inHexo, true])
                    }
                })
            } else {
                resolve([inHexo, false])
            }
        } else {
            resolve([inHexo, false])
        }
    })
}
