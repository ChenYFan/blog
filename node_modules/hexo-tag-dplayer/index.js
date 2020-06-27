/**
* hexo-tag-dplayer
* Embed DPlayer(https://github.com/DIYgod/DPlayer) in Hexo posts/pages.
* Syntax:
*  {% dplayer key=value ... %}
*/
'use strict';

const fs = require('hexo-fs'),
  util = require('hexo-util'),
  log = require('hexo-log')({name:"hexo-tag-dplayer",debug:false}), // logger
  urlFn = require('url'),
  path = require('path'),
  srcDir = path.dirname(require.resolve('dplayer')),
  scriptDir = '/assets/js/', // default script directories
  styleDir = '/assets/css/',
  files = [
    ['DPlayer.min.css', styleDir],
    ['DPlayer.min.js', scriptDir],
    // some map for debug use
    //['DPlayer.min.css.map', styleDir],
    //['DPlayer.min.js.map', scriptDir],
    // if there be any other dplayer file
    //['someDplayerFile.xxx', targetDir],
  ];

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    //log.debug(target.split(search))
    return target.split(search).join(replacement);
};
  
var counter = 0,
  conf = hexo.config['hexo-tag-dplayer'] || {},
  tbIns=[];

  
if (!conf.cdn){
  files.forEach(item => {
    var destPath = item[1], filePath = path.join(srcDir, item[0]);
    if (item[1] === scriptDir){
      destPath = conf.js_path || item[1];
    } else if (item[1] === styleDir){
      destPath = conf.css_path || item[1];
    }
    fs.access(filePath, (fs.constants || fs).R_OK , (err) => {
      if(err){
        log.info(item[0]+' is not found in this version of dplayer, skip it.');
      } else {
        hexo.extend.generator.register(path.posix.join(destPath, item[0]), (_) => {
          return {
            path: path.relative(hexo.config.root, path.posix.join(destPath, item[0])),
            data: function() {
              return fs.createReadStream(filePath);
            }
          }
        });
        tbIns.push(path.posix.join(destPath, item[0]));
      }
    })
  })
}

hexo.extend.filter.register('after_render:html', (str, data) => {
  if(str.includes('</html>') && str.includes('class="dplayer hexo-tag-dplayer-mark"')){ //make sure dplayer used in final html
    log.debug("got page that dplayer used");
    var target = conf.cdn || tbIns,
      s = str;
    target.forEach(item => {
      //console.log(item);
      if (item.endsWith('.css')) {
        var tag = util.htmlTag('link', {rel: 'stylesheet', type: 'text/css', href: item });
        s = s.replace(/<\/head>/, tag + '</head>');
      }else if (item.endsWith('.js')) {
        var tag = util.htmlTag('script', {src: item}, '');
        s = s.replace(/<\/head>/, tag + '</head>');
      }else if (item.endsWith('.map')) {
        //do nothing when sorce map used
      }else{
        log.info('unknown file type of dplayer file:'+item);
      }
    })
    //log.debug('postfilter: '+s);
    return s;
  }
  return str;
})



// {% dplayer key=value ... %}
hexo.extend.tag.register('dplayer', function (args) {
  
  //hexo.locals.get('posts').forEach(console.log)

  const def = conf['default'] || {};
  //log.debug("default setting:"+def)
  
  var  id = 'dplayer' + (counter++), opt = {};
  
  for (var i in args) {
    var k = args[i].split('=')[0],
      v = args[i].split("=").length < 2 ? "true" : args[i].slice(args[i].indexOf('=')+1);
    if (['autoplay', 'loop', 'screenshot', 'hotkey', 'mutex', 'dmunlimited'].indexOf(k) >= 0){
      // bool
      v = v.toLowerCase();
      opt[k] = ['true', 'yes', '1', 'y', 'on', ''].indexOf(v) >= 0;
    } else if (['preload', 'theme', 'lang', 'logo', 'url', 'pic', 'thumbnails', 'vidtype', 'suburl', 'subtype', 'subbottom', 'subcolor', 'subcolor', 'id', 'api', 'token', 'addition', 'dmuser', 'width', 'height', 'code'].indexOf(k) >= 0){
      // string
      opt[k] = v.toString();
    } else if (['volume', 'maximum'].indexOf(k) >= 0){
      // number
      opt[k] = Number(v) || undefined;
    } else if (['yet not implemented'].indexOf(k) >= 0){
      // native
      continue;
    }
  }
  
  const width = opt.width || def.width,
    height = opt.height || def.height;
  var url = opt.url || def.url;
  var raw =  '<div id="'+ id + '" class="dplayer hexo-tag-dplayer-mark" style="margin-bottom: 20px;'+(width ?' width:'+width+';':'')+(height?' height:'+height+';':'')+'"></div>';
  if(url != undefined){
    if (hexo.config['post_asset_folder'] == true ){
      //for #10, if post_asset_folder is enable, regard url as relative url
      if (! (url.startsWith('https://') || url.startsWith('http://') || url.startsWith('/'))){
        var PostAsset = hexo.model('PostAsset');
        var asset = PostAsset.findOne({post: this._id, slug: url});
        if (!asset) return 'bad asset path...';
        opt.url = urlFn.resolve(hexo.config.root, asset.path);
      }
    }
    raw += '<script>(function(){var player = new DPlayer(' +
      JSON.stringify({
        //element: "document.getElementById('')",
        container: "document.getElementById('')",
        autoplay: 'autoplay',
        theme: 'theme',
        loop: 'loop',
        lang: 'lang',
        screenshot: 'screenshot',
        hotkey: 'hotkey',
        preload: 'preload',
        logo: 'logo',
        volume: 'volume',
        mutex: 'mutex',
        video: {
            url: 'url',
            pic: 'pic',
            thumbnails: 'thumbnails',
            type: 'vidtype',
        },
        subtitle: {
            url: 'suburl',
            type: 'subtype',
            fontSize: 'subsize',
            bottom: 'subbottom',
            color: 'subcolor',
        },
        danmaku: {
            id: 'id',
            api: 'api',
            token: 'token',
            maximum: 'maximum',
            addition: ['addition'],
            user: 'dmuser',
            unlimited: 'dmunlimited',
        },
        icons: 'icons',
        contextmenu: 'menu',
      },(k,v)=>{
        //log.debug("k",k,"v",v,"?",opt[k],"?a", def[k])
        if (typeof v === 'string') {
          if (v !== "document.getElementById('')"){
            return opt[v] || def[v];
          } else {
            return v;
          }
        } else if (k === "subtitle" && !(opt.suburl || def.suburl)) {
          return undefined;
        } else if (k === "danmaku" && !(opt.api || def.api)) {
          return undefined;
        } else if (k === "addition" && !(opt.addition || def.addition)) {
          return undefined;
        } else {
          return v;
        }
      }).replace("\"document.getElementById('')\"",'document.getElementById("'+ id +'")') +
    ');window.dplayers||(window.dplayers=[]);window.dplayers.push(player);' + (opt.code || def.code || '') + '})()</script>';
    //console.log(opt.code,def.code,(opt.code || def.code || ''));
  }
  else{
    raw += '<p>no url specified, no dplayer _(:3」∠)_</p>';
  }
  return raw;
});
