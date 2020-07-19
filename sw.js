/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","98ea1e692cc59bf7581f354a88942e38"],["/2019/07/17/巧妙去除百度首页广告/index.html","d7ccbc83e94fad5f6f330a27666b9aa8"],["/2019/07/19/国内加快NPM下载速度/index.html","0df687ed13c6e32a544b2f568f06bb1e"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","8128f691d0ccbc4794b27c3d2330a2e8"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","d5ef11237a180d6bb9ad056da6ced4bb"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","264eb0f1ec3f79763c07b2afa66b59e2"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","9a0f437f58b7cb3200d1f560c313725a"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","8ae8c57007775c8dc21a30d8899a018b"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","ff6e736e5dd914c0e7ae2005be2d0089"],["/2019/07/28/【公告】关于宕机/index.html","04220278aec4be9dbf1aa6a1ef49356b"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","e7c7c22d676581018dbb9bb5d76fd7b2"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","71e2e46d0d0d0f5c6b671d0002e473cd"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","d7872bf7b2b6a56e60e4f3e0e467b910"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","06133c6d82d50574c87cf314aa43ba14"],["/2019/08/08/每日bing美图获取/index.html","90dcbdb59fbe2b84b6d332ee250b6bad"],["/2019/08/13/User-Agent野史/index.html","0a06de1adae8a2bf44861d70d254b147"],["/2019/08/14/【公告】博客多域名/index.html","f47c1afa6bec74fc878d5c8c17f65322"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","e60a1b59d70738c8924b1aee1ed9d106"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","dc4b90ddfff403a481042ef30624aad7"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","475916ca0cb17d9ad1347e86c09a898f"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","137631f5dbdd2d6bc00f7eac7b294015"],["/2019/09/14/来，破解版的Google访问助手/index.html","afaf5563aa82fbfc02fd823a280ad4c1"],["/2020/01/20/回归啦！这是见面礼/index.html","2752030f64c2289b8e5221a7035e5fc3"],["/2020/01/24/我们一起解题目吧/index.html","d1dee40940fa325420344ef0abcfa6c1"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","87ccc1bac57261a25731fa6f4ebf60c8"],["/2020/02/26/Gitalk详细踩坑记录/index.html","634e4a989c4e3305880426e852ce732c"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","4ee2e082317bd7c3642586f7fbb489a8"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","f9b549983fb657415469b7ac8fda89af"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","0f6c50a02cdf9967d7c168ebc6ffb965"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","f32c3ea25e8aa84428de129991b57fb0"],["/2020/03/12/白菜价域名的问题/index.html","5efc8d0ddab55a961e09c407be1fcc48"],["/2020/03/13/工具箱和私有云恢复！/index.html","e22343b7bebf95b0ff8dd84fff0daac5"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","13c9f422db830b461e31e53305d665c7"],["/2020/03/16/浅谈什么是好软件（1）/index.html","396107fc0d9bc3a7db57e2bc522fb97a"],["/2020/03/17/一次愉快的更换域名经历/index.html","0be0a516e892d932bae26523f0b53e45"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","0d668a22abe890c89f95f3447e4c0839"],["/2020/03/19/如何-CloudFlare-Warp/index.html","85f6dd9bbde1fdcca16315cc30bdf8b3"],["/2020/03/20/一次糟糕的换主题过程/index.html","707477d7b57fac6ee6fb020ee2fdeda0"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","7629418538d951893409825a20831f37"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","ba658063afe374a8b710740ff496da3b"],["/2020/03/22/回形针-真的辱华了吗/index.html","d1d76c2669b2d43fa30a4ea3afa39f27"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","6f82b3368ce0f203dbb4760d2ba3bebd"],["/2020/03/25/天体运动/index.html","2ac7cd7830b1693163f2af9b886263eb"],["/2020/03/26/一次“修”冰箱的经历/index.html","445279e56fd2de0866f3ace037e4da58"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","97a4ada131a8950e342215b8540bea5b"],["/2020/03/29/PHPnow/index.html","70cf91ef04e964bfdfdcbe6f27ed02e6"],["/2020/04/02/AVorBV/index.html","38e8831e62fa2ba463b6cdf40e461d89"],["/2020/04/04/2020QM/index.html","c3cc0c62852a399f9a8af2fe5ba29df0"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","7d8eebb443f97d2e2e76d625756096fc"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","a559edec4e256271613cb5980f6fbd0b"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","e5d701b103ae4723599f81211b3b64a9"],["/2020/05/30/What-I-Do-2020-04-05/index.html","5707cda7576782775b7e994d6126cb13"],["/2020/06/07/Blog-sChanges/index.html","9bc7a17483b257aaae1bc97aedd2341d"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","245fec146d1b61f646656836ed2fe60c"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","2744d704f9c9bd3b5d68522b901dcc11"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","c30d3fd93c4b45202d9b56d7763f76dc"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","cf1e96fb0c1f54ed67e3666f1210eafa"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","c144a0ee92db38859cd4b61604136baf"],["/9999/12/31/博客暂更预警/index.html","4afbd839618cfa1ebead68b980a5148a"],["/about/ads.html","98da0b2d7de38407f414d7c229a90745"],["/about/index.html","e48805407001b3ec9b717b6e3c788761"],["/archives/2019/07/index.html","d2d1d25cd4b86ad10a8ce43ab09c797c"],["/archives/2019/08/index.html","cf109ccde02a297bf50346eeb4026944"],["/archives/2019/09/index.html","cf2ce63c7ad49632582c63f454c17912"],["/archives/2019/index.html","082ece96131918fdff13628b5f3786e5"],["/archives/2019/page/2/index.html","28f741b4f11c47dff6be29a4ad40d25a"],["/archives/2019/page/3/index.html","7f073862f202cd10bf66fb7472ec35c2"],["/archives/2020/01/index.html","2942c160b4332ff7c40c857ac846fb34"],["/archives/2020/02/index.html","cdad225cf3e960b8f2d2fd62d815a772"],["/archives/2020/03/index.html","9b355ac27accebb735fce3db0bda8621"],["/archives/2020/03/page/2/index.html","263174a43ed76bc591204ec44d25837f"],["/archives/2020/04/index.html","1c78c7788fa66aeaf8508fbcc9a0d75d"],["/archives/2020/05/index.html","58990af5d4ccf6dd2bed6a63a8164a01"],["/archives/2020/06/index.html","9459cf06f34c0ffbd69bf496d6b2ddfc"],["/archives/2020/07/index.html","d298049b56069d6137aa0bdafe58babe"],["/archives/2020/index.html","171f804e21bf837983ace35b3cd67857"],["/archives/2020/page/2/index.html","f0d4c89bf040d82ff311aca6f139589b"],["/archives/2020/page/3/index.html","b7f746c950d66c2414714462e8d8c945"],["/archives/2020/page/4/index.html","0dc17effed14e4ea9af9c636726e928d"],["/archives/index.html","24d6b0d378f45d8270be35ae45052ac4"],["/archives/page/2/index.html","8dadb38d9b9ca56183777c29b43495a2"],["/archives/page/3/index.html","e607b2c1ad8ce16e6d4ad9ca079f6db6"],["/archives/page/4/index.html","0b1a3b6586f0c85a374f55dc34cb387d"],["/archives/page/5/index.html","b86ca658a64b73e07970a7d8272123f2"],["/archives/page/6/index.html","acc68d28ab32f718f8a40cbb60f27511"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","9c29912105dc07de43e0043575688a79"],["/categories/丆插件/index.html","ccd28d5e9a7a1f0fa10118bcea201aca"],["/categories/又双叒叕是水文/index.html","c816d3dcf544a189630c874a6a54eafb"],["/categories/好方法/index.html","8802798eae6868527a4a3473e0cb8dd7"],["/categories/好方法/page/2/index.html","ad169bae385ecde65d270f09fae52e48"],["/categories/屌代码/index.html","763f7cd0f6d790dccb54f3038b56976a"],["/categories/干问题/index.html","f04d64aa53ae426a8dcc8b4b4072d88d"],["/categories/撸羊毛/index.html","b94a40636d13fcd8d852ab267c4a8ed0"],["/categories/有故事/index.html","a7f0f7ddd63d4d8be7665f2d95e973ac"],["/categories/爱分享/index.html","36efc25a1119032b55eece2cc23a18d8"],["/categories/爱学习/index.html","98953ce084113b8e9a83f1b782d0bec2"],["/categories/爱学习/物理/index.html","c02f0b90d2e013cb78c4bdfa53b4adfe"],["/categories/爱折腾/index.html","0b13533bfe43057613ca3d678605597f"],["/categories/瞎扯淡/index.html","f2bb4c3e7761f97fe3dee962bbe36ba7"],["/categories/繡软件/index.html","2cee736beee1dd7994b6c94dbed199c2"],["/categories/要公告/index.html","7a9a424b6385417f4fb4b54bef2b08d8"],["/categories/随心记/index.html","1adef10c3e061f6960982d56e0033cc4"],["/css/gitalk.css","de4859bff472da75c7e57cacaad68b35"],["/css/main.css","2093b35bc8356c06ef9b16a911dd3cc6"],["/css/matery.css","cc7aea05b403278cf3f9470470169523"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","25ba107a7978a5df26ac55bd05996026"],["/js/copyright.js","2f44332d3199de8d97ece4ef4e5df32c"],["/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["/js/fire.js","53daa1039bfdfec4415ce83ca9e7e31b"],["/js/gitalk.min.js","251a1f977bb7733e584390a01ceceb97"],["/js/index.js","140e3f6be2a04ac4ba558a6c65636f4a"],["/js/lazyload.js","1fa470189608a5e4110e56169cecb0d0"],["/js/local-search.js","e9093657a10085d74435b313a4b8c557"],["/js/main.js","fc0c3bcbdfa6c63971922742a575c803"],["/js/md5.min.js","91d98ebf28303805138cc0e2566037b3"],["/lib/prettify/github-v2.min.css","7e0f0e29f43c395a37af8560b1362285"],["/lib/prettify/tomorrow-night-eighties.min.css","5999a3c1bf9481a6becd57fda4363418"],["/lib/prettify/tomorrow-night.min.css","4ae1cca7f04218d26c0d1f99c931c4cf"],["/lib/prettify/tomorrow.min.css","7a3fed42c8fc5d2772544f339bd504ab"],["/links/index.html","384cd99d3f8e20f45f4c19a6e4237fd3"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","b3b49515c8d55c52302d637b527960af"],["/page/3/index.html","c743451473cd75be1bc36c3dd9afeb11"],["/page/4/index.html","774a6f67401edced3188546dda48f186"],["/page/5/index.html","22aa74afe5196ddf8d32382fc8b2036f"],["/page/6/index.html","7147da80472af1c54d2004eae51de347"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","cb954b9dfd68d133ad4eee0d3a2eeb62"],["/tags/000webhost/index.html","f1c41d6d4e9a3f347062e48c443d971f"],["/tags/API/index.html","6c3c3394d511479ba3f9f9bfa95824fb"],["/tags/AV/index.html","c5bb178d7c34bb20dc92bd7e571f9df8"],["/tags/Adobe/index.html","e6db990fe2a387675a73f203a93f9d15"],["/tags/Adsense/index.html","772a1374d7c9ba33f986a32ac7176d92"],["/tags/BV/index.html","12377cbef028d5edf077b7e81ac35698"],["/tags/Bilibili/index.html","52d075d938f6fee32080d4552cc11e06"],["/tags/Bing/index.html","fb48e4da3685d3c8df5063059909c9bd"],["/tags/C/index.html","93e8716bb006cdaa3af2e99244c135eb"],["/tags/CDN/index.html","b27d6300989ad19478e90004ec6b8f5f"],["/tags/COS/index.html","7c1be8a35368abb13dc1889ecbe3df6c"],["/tags/Chrome/index.html","16acfb25661ec4c10093e7f3dbd24b99"],["/tags/CloudFlare/index.html","108cbf39b34b0dde19d50e740785e2cc"],["/tags/DNS/index.html","981928ccf5b0dabdd5ec197a37abd311"],["/tags/Diaspora/index.html","0c39019def8441aa2d986e9061b5be1a"],["/tags/Gitalk/index.html","a3bccc9e9eb6ff67426ed6eb6a66deb6"],["/tags/Github/index.html","059ee6f42a347725fcaf32f42e9cc4ae"],["/tags/Google/index.html","aef0b093ace6808e05bf351d77e57baa"],["/tags/GoogleDrive/index.html","010b37b7a99164af994204152a87b36c"],["/tags/GooseDesktop/index.html","e21b8b3fb4856ef6fca0190f08bf6a74"],["/tags/Heroku/index.html","d144365351b154c3bc3a8c8bf3c550fe"],["/tags/Hexo/index.html","9bd8d716fb20fdc64aece4ae717e2bdb"],["/tags/IP/index.html","abb728edded01b7259123ecc04d16a2e"],["/tags/IPFS/index.html","d60f99e4ccfbe21cede8a5a846539b06"],["/tags/JavaScript/index.html","d5b4886175f4bc12b06ec05191ac0d9d"],["/tags/LazyLoad/index.html","54fe8c7f88a92ee5ef3827d0f3ba4c08"],["/tags/Live2D/index.html","6abec2af076b4cb40146dabe55de0a3d"],["/tags/MarkDown/index.html","7647f3d36f82bc10524ff66cd1db2e63"],["/tags/NPM/index.html","c9cbd3cd074b0693ffe4a2266eca3c18"],["/tags/NexT/index.html","3fe57f43a0c349f18f71f134c0d8f6d2"],["/tags/Node-js/index.html","3fa1b0fb204d830fa77a0f35533cab06"],["/tags/PHP/index.html","fe607be3105d98344ca5e911f0be5c07"],["/tags/PanDownload/index.html","32df3bcc653f52aeb5f705ce328732b0"],["/tags/Repository/index.html","595e252f18b3fa3bf4744954dcb31c0c"],["/tags/SS/index.html","d1cd92a4c8837fec4fb6b3470ef8f859"],["/tags/SSL/index.html","4b4df4ca41d6f7408bbe2ea3ca9121ff"],["/tags/TLS/index.html","5066a6c505b426e7dee5017a7da66de0"],["/tags/Tampermonkey/index.html","d6ff43e0512dc03dc1a6459982b6dbbe"],["/tags/Travis-CI/index.html","71b0b5117c84f5e625253b99f49cdf16"],["/tags/User-Agent/index.html","cf9e54be12cfc6602276df24f266c66e"],["/tags/Valine/index.html","9cc79d76fe6ac9fef167d312272ea65e"],["/tags/Warp/index.html","57d73394630c3ebbce1d792fb7d1e4d0"],["/tags/Windows/index.html","c788d5c5bdcd5fa431630417d29bbbce"],["/tags/Workers/index.html","10ecdddc74276c57161063426582e257"],["/tags/css/index.html","58715528a97692f8689e8118e127f28e"],["/tags/index.html","a642bb33a2211e7618475959ac180736"],["/tags/ipv6/index.html","e9fc91ac3274b538fb69de909debbb95"],["/tags/下载/index.html","c5ad634268f8b630404afb2c7cd89d78"],["/tags/主题/index.html","d4d90c664be380e2ca2fe96176251374"],["/tags/京东/index.html","9d3b89450d44820d07000666aab86926"],["/tags/人机验证/index.html","ceef3579c83ae38474f61cddbc947e2d"],["/tags/代理/index.html","c5a4ee7e298e4a0e23e45b90f600c4e6"],["/tags/优良/index.html","a7f72a99ca78dbf19a76a57d9f78b58d"],["/tags/便宜/index.html","d32381c38038eb7434c1fbc52732e263"],["/tags/修理/index.html","0ef1dd95d9d90c7a5f46c6aea226be13"],["/tags/免流/index.html","a47f5dee1b9762314cc5b4572027075c"],["/tags/免费/index.html","5665fc36adc03bd26f67e50b433dd503"],["/tags/全家桶/index.html","367505bd4c4ed874fd291554c522864d"],["/tags/公告/index.html","25bc61586d9b737cd71165175c034dbc"],["/tags/关键字/index.html","358b277bf13a927bcec9f055b6e81c68"],["/tags/冰箱/index.html","3914fe2112e25364f75371ac9272e3d3"],["/tags/加载/index.html","b938152436ed990aa28878776f65ba8d"],["/tags/动手实践/index.html","3db1ebe007d8f6e39db3a63f0094a5c5"],["/tags/劫持/index.html","70a35441700f4c20ff9711af7a1f7524"],["/tags/历史/index.html","90ba35d33930444af8691b3425cc628c"],["/tags/压缩软件/index.html","5e5b5a717670c95f671cd61f2407a457"],["/tags/台湾/index.html","97e6016368384cc01eb072580a489892"],["/tags/回形针/index.html","d295069899a66d7ab50da05050797f90"],["/tags/国家/index.html","a4e020e7ed9be409cf7df56454fe3f0f"],["/tags/图床/index.html","2b49f3cc1880f07159aa17e4c3ec09bb"],["/tags/图片/index.html","2129cd518a605a1358c4f6077496fab5"],["/tags/在线更新/index.html","b83e41e474bf86c5590c9a3973a20f80"],["/tags/域名/index.html","7b8cc239d65ff00b10e4877a9fac287b"],["/tags/填色/index.html","564d2dd01936415cb4b69d932438bb08"],["/tags/壁纸/index.html","03425edd4d1c131a11f07ef3a7f8853c"],["/tags/天体运动/index.html","947986dc08e67b9653092faa8d8057d0"],["/tags/头像/index.html","e85325e32c6acd9b44ddfa1148022a80"],["/tags/奇淫巧技/index.html","83da68a372b476101b2c0e25eb214c58"],["/tags/奇淫巧计/index.html","a643472e8169780bf1709382b9c672ea"],["/tags/字体/index.html","39131e439b213577599161924347c9c7"],["/tags/学习/index.html","2b625276ba2fe049b47e5b804a200e88"],["/tags/安全/index.html","bec188414f6ace3a4839522677ad3fdb"],["/tags/宕机/index.html","edd56f1a8f04beedebe8e3e30112db29"],["/tags/实践/index.html","52724cdc886a803edfbfc687ac8f5a9c"],["/tags/宠物/index.html","5089af0548945a3d5f8b790cafe8274e"],["/tags/寒蝉/index.html","8a81070350f9b7b5e61dc20cb2ce1165"],["/tags/对象存储/index.html","b8e4614e38622d2b7b92004df5df6ffb"],["/tags/工具箱/index.html","4394b667c43ff5f702f6d0be2b255e55"],["/tags/干货/index.html","b5f625847e1826c6bd4eb08d550902f8"],["/tags/年度/index.html","0d1cced87599dfd013a24c42a19e0f33"],["/tags/广告/index.html","f25c117806994f8df0cf6ccab1782866"],["/tags/总结/index.html","16457bbe8fba58258d4c6271a556dcbc"],["/tags/恢复/index.html","f13b2b8e494f9d75edeccf8119b7830b"],["/tags/悼念/index.html","fdbf4acf713640906f23acecb15413f1"],["/tags/悼文/index.html","d332528e0a8c5c6c0cc05cf686d7cb46"],["/tags/手动填坑/index.html","36778565450368928759f2310ac92ff9"],["/tags/插件/index.html","c31b5b0aefd2b49dbc7c486447ac9048"],["/tags/撸羊毛/index.html","619c3d55cf989b311715adf808c44fa1"],["/tags/无限制/index.html","7d8b43a1d29a9de1fe84cff8dffff35f"],["/tags/日常/index.html","1785c3167f66ed8110fad2841b6245cd"],["/tags/更换/index.html","2753e618f6f023e69588514fa2b14fe7"],["/tags/标签页/index.html","578a6cc66394253a53e3879f977dd688"],["/tags/桌面/index.html","ae45473193dcf0b98613778bd5bbd586"],["/tags/流氓/index.html","7794061c6793d98bfc56584956ee72dc"],["/tags/浏览器/index.html","fecee8246354e53294940f66487cf93c"],["/tags/版权/index.html","a336d7367a62366b2f5c4b87d4d08cc5"],["/tags/物理/index.html","4e68522461a3709cecc2d753ddfcf3ab"],["/tags/特效/index.html","aefcbbae89453ae8111a5c925b0f569e"],["/tags/用户信息/index.html","2172bdde8613ee4f5244654fb9569b82"],["/tags/电器/index.html","edaa1df5240edcc680999a6ac0027e95"],["/tags/疫情/index.html","c366c2ad7f0febcd0aa6eec112a1f925"],["/tags/白嫖/index.html","1d697613f31ee19398ac657a8d29acf1"],["/tags/百度/index.html","7a068a9f898e5f5f14546a3e5e01132f"],["/tags/看板娘/index.html","eb223eda2d43c807022fa50cb1833a63"],["/tags/破解/index.html","8948160bea17ad68fb449d3f8530621f"],["/tags/神器/index.html","c8b2a10c7a0904408a2f78fed007ef36"],["/tags/私人/index.html","8f4fa9c6c0f50686d283facc9853aa35"],["/tags/私有云/index.html","dc4a168053ac135c6763879d76f48848"],["/tags/科学上网/index.html","5b8548861c2f9df022574fa7a2d58cfb"],["/tags/站长必备/index.html","cf3df235595e9a4efa29e2bbba23372a"],["/tags/等待/index.html","5157adc7b230adc54d024430b516ec8c"],["/tags/精简/index.html","11d8cd2d8f1e795fee5b3252371725b0"],["/tags/素描/index.html","f9a3f3cac7596b1fa0ff09395986f193"],["/tags/编程/index.html","cc42ae7ce06b2ad9c7496057c0b5ca3b"],["/tags/编辑/index.html","5cdd51081c9a9f189fa5e3c7b0d9082b"],["/tags/网盘/index.html","d64567302418d4e8abcc335d51806fa4"],["/tags/网站/index.html","00aea8f98c814e76932fa18853f09387"],["/tags/网络/index.html","002d6c11922bff2ad0e4b2a7fd3b514d"],["/tags/美化/index.html","a6fd9017df16a34bbaee2eda9b048a0e"],["/tags/美图/index.html","46213c15bb37ac8bb198889626959fca"],["/tags/脚本/index.html","e9ded0032c8aaa84d1bf38c45a0dcf01"],["/tags/致歉/index.html","8d062e8dbf2b2591d67a0df41966b263"],["/tags/萌哒哒/index.html","fe1caeb9ca739b47153a528d77821f48"],["/tags/萌娘百科/index.html","6c9153aa24dbbd2db59d82ed181fef78"],["/tags/萌萌哒/index.html","2fd7cae9e3ee7eae95a4a91d691439d6"],["/tags/解析/index.html","54dccbced341d6aed78a7aafab0fd617"],["/tags/评论/index.html","2f8e55596f3ed656463bc71bac61349e"],["/tags/评论系统/index.html","16402587c21b173602a551d9f020a128"],["/tags/语法/index.html","76e0beaf5bde97c435f4bb0b5afa0597"],["/tags/谷雨解字/index.html","0c50d2eceb6a836dfc6efa74ad9ce405"],["/tags/赚钱/index.html","aa6762449ee633278066325e8f5c8ef3"],["/tags/踩坑/index.html","ef940b215b013b729f2c192698ebcc47"],["/tags/软件/index.html","6db6f941b5836e23c52516caf1b17931"],["/tags/辱华/index.html","8ae28566b08f29a080fac7d9f4ce6f96"],["/tags/迁址/index.html","1e5fca9a16f1a33d7cea9522b4091f57"],["/tags/速度/index.html","64219ebb5c0af2db09f4f00e8fcdb388"],["/tags/错误/index.html","d84a22e77184c5e8d8dbd8583b69bccc"],["/tags/阉割/index.html","26f92fb488a836a861178fb53ca8c3bd"],["/tags/阴文/index.html","870c791cd7ff0600f30ea172f7069a3b"],["/tags/音乐/index.html","92d6e944ff58a7b224af29401e508c62"],["/tags/题目/index.html","46d7eaab8120f620a9b813edd754f018"],["/tags/黑科技/index.html","7d2afdcd5cb82ef82631559034ff4d33"],["/捐款吧/index.html","f1a94d5fda8dce2b9ad7f1829c2a2f6c"],["/随口胡说/index.html","2c8fb9f13a5d20c21cfe6de12a113d9c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.staticfile.org"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"assets.cyfan.top"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"img.cyfan.top"});





/* eslint-enable */
