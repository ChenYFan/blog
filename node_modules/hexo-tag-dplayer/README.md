# hexo-tag-dplayer
本项目是将diygod的dplayer运行在hexo的插件

感谢关注这个插件的人们，感谢aplayer的hexo插件作者@grzhan，感谢A or D播放器作者@Diygod

感谢插件豆子@dixyes的移植

借鉴项目：https://github.com/grzhan/hexo-tag-aplayer

这个项目的两个维护者一个只会卖萌，一个又沉迷屁股(这是豆子)

所以有什么bug很长时间没解决的，请谅解

如果您能修复的话，也希望请您修复一下提交个pr什么的，祝君安康


---------------------------------------------



Embed DPlayer([https://github.com/DIYgod/DPlayer](https://github.com/DIYgod/DPlayer)) in Hexo posts/pages.

[Hexo Demo](https://morz.org/archives/2016-09-09/%E8%A7%86%E9%A2%91%E5%88%86%E4%BA%AB-%E3%80%90%E6%9D%B1%E6%96%B9Vocal%E3%80%91%E8%8A%B1%E6%98%A0%E3%80%8C%E3%82%BF%E3%83%9E%E3%82%B7%E3%82%A4%E3%83%8E%E3%83%8F%E3%83%8A%E3%80%8D-%E5%87%8B%E5%8F%B6%E6%A3%95-%E3%80%8CSubbed%E3%80%8D.html)

![plugin screenshot](https://video-cache.morz.org/data/img/dplayer-1.jpg)



## npm install

	npm install hexo-tag-dplayer --save

## Usage

	{% dplayer key=value ... %}

key can be 

    dplayer options:
        'autoplay', 'loop', 'screenshot', 'hotkey', 'mutex', 'dmunlimited' : bool options, use "yes" "y" "true" "1" "on" or just without value to enable
        'preload', 'theme', 'lang', 'logo', 'url', 'pic', 'thumbnails', 'vidtype', 'suburl', 'subtype', 'subbottom', 'subcolor', 'subcolor', 'id', 'api', 'token', 'addition', 'dmuser' : string arguments
        'volume', 'maximum' : number arguments
    container options:
        'width', 'height' : string, used in container element style
    other:
        'code' : value of this key will be append to script tag

arguments to DPlayer options mapping:

    {
        container: "you needn't set this",
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
    }
    
see dplayer documents for more infomation.

for example:

    {% dplayer "url=https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.mp4" "addition=https://dplayer.daoapp.io/bilibili?aid=4157142" "api=https://api.prprpr.me/dplayer/" "pic=https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.jpg" "id=9E2E3368B56CDBB4" "loop=yes" "theme=#FADFA3" "autoplay=false" "token=tokendemo" %}
    {% dplayer 'url=some.mp4' "id=someid" "api=https://api.prprpr.me/dplayer/" "addition=/some.json" 'code=player.on("loadstart",function(){console.log("loadstart")})' "autoplay" %} 


## PJAX compatible

```js
$(document).on('pjax:start', function () {
    if (window.dplayers) {
        for (let i = 0; i < window.dplayers.length; i++) {
            window.dplayers[i].destroy();
        }
        window.dplayers = [];
    }
});
```

## Customization

You can modify variables `scriptDir`(default: "/assets/js/" ) and `styleDir`(default: "/assets/css/") in `index.js` according to your blog's directory structure.

or just use _config.yml configuration:

    # on _config.yml of hexo-site
    hexo-tag-dplayer:
      js_path: /path/to/your/default/path
      css_path: /sth
      default: #default tag argument 
        id: somedefid # equals to setting id=somedefid in all {%dplayer%} tags
        api: https://api.prprpr.me/dplayer/
        #and other options...

## Issue

If any issue occurs, tell me via issue, use a hexo raw tag like below to use dplayer:

    {% raw %}
    <div id="player1" class="dplayer"></div>
    <script src="dist/DPlayer.min.js"></script><!-- use your path -->
    <script>
    var dp = new DPlayer({{
        container: document.getElementById('dplayer'),
        autoplay: false,
        theme: '#FADFA3',
        loop: true,
        screenshot: true,
        hotkey: true,
        logo: 'logo.png',
        volume: 0.2,
        mutex: true,
        video: {
            url: 'demo.mp4',
            pic: 'demo.png',
            thumbnails: 'thumbnails.jpg',
            type: 'auto'
        },
        subtitle: {
            url: 'webvtt.vtt',
            type: 'webvtt',
            fontSize: '25px',
            bottom: '10%',
            color: '#b7daff'
        },
        danmaku: {
            id: 'demo',
            api: 'https://api.prprpr.me/dplayer/',
            token: 'demo',
            maximum: 3000,
            user: 'DIYgod',
            margin: {
                bottom: '15%'
            },
            unlimited: true
        },
        contextmenu: [
            {
                text: 'custom contextmenu',
                link: 'https://github.com/MoePlayer/DPlayer'
            }
        ]
    });
    </script>
    {% endraw %}
    
see [DPlayer](https://github.com/DIYgod/DPlayer) for usage detail

## Todo

- [x] Publish it to the [hexo plugin list](https://hexo.io/plugins) and npm

## LICENSE

MIT
