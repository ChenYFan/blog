module.exports = (inPost, inOptions, inHexo) => {
    const lj = require('./list-json.js')
    let list = lj.getList(inOptions, inPost, inHexo)
    return list
}
