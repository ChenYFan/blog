const hasha  = require('hasha')
const fs     = require('fs')
const pathFn = require('path')

// simple update checker
module.exports.chkUpdate = (config) => {
    if (!config.popularPosts) return '0'
    let settingsStr = JSON.stringify(config.popularPosts)
    let shash       = hasha(settingsStr, {algorithm: 'md5'} )
    return shash
}

// morphologicalAnalysis's negativeKeywordsList update checker
module.exports.chkUpdate_ngw = (config) => {
    if (!config.popularPosts || !config.popularPosts.morphologicalAnalysis || !config.popularPosts.morphologicalAnalysis.negativeKeywordsList) return '0'

    let negativeWordStr = '0'
    let nwPath          = pathFn.join( process.env.PWD || process.cwd(), config.popularPosts.morphologicalAnalysis.negativeKeywordsList )

    if (fs.existsSync( nwPath )) {
        negativeWordStr = fs.readFileSync( nwPath, 'utf-8')
    }

    let shash = hasha(negativeWordStr, {algorithm: 'md5'} )
    return shash
}

module.exports.getMD5 = (inStr) => {
    if (!inStr || inStr == '') return ''
    let shash = hasha(inStr, {algorithm: 'md5'} )
    return shash
}
