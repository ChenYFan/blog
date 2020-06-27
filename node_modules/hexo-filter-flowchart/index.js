var assign = require('deep-assign');
var renderer = require('./lib/renderer');

hexo.config.flowchart = assign({
  flowchart: 'https://cdnjs.cloudflare.com/ajax/libs/flowchart/1.6.5/flowchart.min.js',
  raphael: 'https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js',
  options: {
    'scale': 1,
    'line-width': 2,
    'line-length': 50,
    'text-margin': 10,
    'font-size': 12
  }
}, hexo.config.flowchart);

hexo.extend.filter.register('before_post_render', renderer.render, 9);
