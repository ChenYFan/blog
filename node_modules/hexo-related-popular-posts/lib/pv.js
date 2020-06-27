module.exports = (inPost, inHexo) => {
    let pv = getPV(inPost, inHexo)
    return pv
}

let getPV = ( inPost, inHexo) => {
    let pv     = 0

    if (inPost != undefined) {
        for (let i = 0; i < inHexo.config.popularPosts.tmp.gaData.length; i++) {
            if (inHexo.config.popularPosts.tmp.gaData[i].path == inPost.path) {
                if (inHexo.config.popularPosts.tmp.pvMeasurementsStartDate != '') {
                    pv = inHexo.config.popularPosts.tmp.gaData[i].totalPV
                } else {
                    pv = inHexo.config.popularPosts.tmp.gaData[i].pv
                }
                break
            }
        }
    }

    return pv
}
