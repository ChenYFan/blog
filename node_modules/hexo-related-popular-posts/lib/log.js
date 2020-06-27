const logu         = require('log-util')
const PLUGIN_LABEL = '[hexo-related-popular-posts]'
let config

module.exports.log = (cat, mes, path, inForce) => {
  let filePath = !(path=='' || !path) ? '\n\nPlease check the following file.\n-> ' + path : ''
  if (cat == 'success') {
    if (inForce || config.popularPosts.tmp.isLog) logu.debug(PLUGIN_LABEL +' '+ mes + filePath)
  } else if (cat == 'info') {
    if (inForce || config.popularPosts.tmp.isLog) logu.info(PLUGIN_LABEL +' '+ mes + filePath)
  } else if (cat == 'warn') {
    logu.warn(PLUGIN_LABEL + ' warning: ' +' '+ mes + filePath)
  } else if (cat == 'error') {
    logu.error(PLUGIN_LABEL + ' error: ' +' '+ mes + filePath)
  }
}

module.exports.setConfig = (inConfig) => config = inConfig
