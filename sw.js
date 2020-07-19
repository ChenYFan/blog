/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","8b3b0e2a6e518564dde04df0b9f32a72"],["/2019/07/17/巧妙去除百度首页广告/index.html","0384257a4bb089384f920deec9f85b9d"],["/2019/07/19/国内加快NPM下载速度/index.html","c63f3fa956e3066c811e5ae2e151e8fa"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","33a367b935b79b4afffe1001f99f3af6"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","71e21c1bada1e6721e45d7315e9c6e09"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","8b01aa7e09b84943e3de47627bd6c1c9"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","417082152e0c92c58a1bd26c483e4ab9"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","74859e689277e7291d69c255b682b8c0"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","fb666434f09950c02e7a696734aa7e08"],["/2019/07/28/【公告】关于宕机/index.html","4b22f6cb3610802188d9fbe7cff4bc26"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","d5751f35422e5d5986cbfe54bcc789ee"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","33bd15a48bfc046aa60e30159944c748"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","66941326072dbae49f593b4ba6204908"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","b2d6adcc2faa76b087c71d64876fb835"],["/2019/08/08/每日bing美图获取/index.html","2d010d3ad8a0ef656b80e090956e8bea"],["/2019/08/13/User-Agent野史/index.html","15b548652f48f1f5bd6282b4c0105715"],["/2019/08/14/【公告】博客多域名/index.html","73fc9fad72d42b260224d675483d6d8d"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","e8e823365f0d9e76a7256b353a84c638"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","ee66ae0a33539f493e239f00b1f74fc6"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","a7c710fa4fcbb9229d8e94e90f60b99e"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","3d64aa6c43bd0e5880d9c8bd8077fa07"],["/2019/09/14/来，破解版的Google访问助手/index.html","3495b01ccdd384578f34e743d4842182"],["/2020/01/20/回归啦！这是见面礼/index.html","3d641031cb0d128f8ecb34c8f31f8786"],["/2020/01/24/我们一起解题目吧/index.html","29e4a3598cf5bde90f1b677bea2d7927"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","8b0b10925039cefdde97fe1a5b079650"],["/2020/02/26/Gitalk详细踩坑记录/index.html","134131db2154249f1a03fc5675597ba4"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","76ef99267b8cd2e731212966de7666b9"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","736fb418f6e7f5018e9fbaa5efb2ccd4"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","965fe317ae28c518f129b3653bec9973"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","07f555569408487d4140d7f89f68e8da"],["/2020/03/12/白菜价域名的问题/index.html","33d17c61a97ff535e2b3384bc139403b"],["/2020/03/13/工具箱和私有云恢复！/index.html","af099f24dfeb2ef5d8fa60ec2ae76a63"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","30ba49b7b56a46587443cb1a830057da"],["/2020/03/16/浅谈什么是好软件（1）/index.html","589903a6a9bea45c8d472fd82b96ea79"],["/2020/03/17/一次愉快的更换域名经历/index.html","71c6ac16887e109ae579014d9d802a9d"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","3d6af4fd996bacde67335a2a730a8134"],["/2020/03/19/如何-CloudFlare-Warp/index.html","08715bd962aea029b4da82b54b721e10"],["/2020/03/20/一次糟糕的换主题过程/index.html","f2bc3af2634978cc49cf051f30788ff6"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","e591c5420c753d82d1e3974077b4f84f"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","15cb376286b5a464dfe64a9f0721ebe1"],["/2020/03/22/回形针-真的辱华了吗/index.html","89cd29fbc12dd8bb022f6a48d336a54f"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","10073993e629b1c4c62d3355f0fe7dda"],["/2020/03/25/天体运动/index.html","c08f43792311d6eef973312b7348ce7b"],["/2020/03/26/一次“修”冰箱的经历/index.html","edde9746f21769a309db2cc26d2c69ad"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","1247dd4ed60d3a162c9770b08c2ea54f"],["/2020/03/29/PHPnow/index.html","7e2a9f081530257d69ae9f5494f086e3"],["/2020/04/02/AVorBV/index.html","2d813ae490412ae5204aad103573d10b"],["/2020/04/04/2020QM/index.html","346fe0e8b5a04ad09a1b25aacc5c8a2b"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","dd7fb76a098613f7bb976ada02c76e0a"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","f8bfa9cafc245f8bb5be700170c04c92"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","945de4abbcac04964735597926b512e9"],["/2020/05/30/What-I-Do-2020-04-05/index.html","9039f55adf72a2d40e40306ca58766ec"],["/2020/06/07/Blog-sChanges/index.html","142cf29ca15ab946a5fcc189ef5cde6c"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","c95e51bf8749e34b3df85ceed9ce6d25"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","5ffad9fdbd59af314e5d838d521250b0"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","c165b3e726142253947d33940faa6316"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","1800fa27930387eca0853e07461dafb4"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","d3d0e99db99a7949637c0ffa9dc1081b"],["/9999/12/31/博客暂更预警/index.html","52834f6f262fb83410eb27e5c26796fa"],["/about/ads.html","44152cf77ab799397d9c48f9638baabf"],["/about/index.html","3d15a2ec9d4055f18cb8291f3c726412"],["/archives/2019/07/index.html","fdb98f6cd06f32a5d2881cd6a8007d9f"],["/archives/2019/08/index.html","81dffdaa1c31439935b38fa8aa3c4b2c"],["/archives/2019/09/index.html","85024158097ff24f228b1e986de697e3"],["/archives/2019/index.html","6cf728746ae59efe0c41db39017762fb"],["/archives/2019/page/2/index.html","4822824461a5e83d5492dfd44d26bf36"],["/archives/2019/page/3/index.html","1255768e38e20d7e149dd7e90f250955"],["/archives/2020/01/index.html","1025b6c69837032e0de4d34084549d64"],["/archives/2020/02/index.html","2e370226270505c5366b1c3f15d6631f"],["/archives/2020/03/index.html","25d5b57d78d5d08db26f34f4c06ae0ef"],["/archives/2020/03/page/2/index.html","897f8ca0b1a92fa4169fe4efee9edc9a"],["/archives/2020/04/index.html","1a7ea93428209a49adca62b1ff629469"],["/archives/2020/05/index.html","7409e10464599ffb9cd46418238c9c97"],["/archives/2020/06/index.html","4a6e7bd4ad3e509a5dfe11b973a2b6b0"],["/archives/2020/07/index.html","cc6378b3247e1d0c09b7b09e08cf3c59"],["/archives/2020/index.html","f6560596601aaf22d1001602245bad82"],["/archives/2020/page/2/index.html","3c7ef74cceaf280b1b488c7da6686db7"],["/archives/2020/page/3/index.html","bec9d2e32c9654176b08f49475631417"],["/archives/2020/page/4/index.html","ef486b72cb1332c680f986a611f4b33c"],["/archives/index.html","4ab1cc3a9ae9ac60aa3c2ae74d7be52b"],["/archives/page/2/index.html","ca214ce2233e6ef7636879074fa8b09c"],["/archives/page/3/index.html","fca077a21f412413057aa6aeab0032a3"],["/archives/page/4/index.html","0f6b3bf53eaac7c7486fc840063ddbd0"],["/archives/page/5/index.html","a286985fdca68c55af8c9b1eef305dd3"],["/archives/page/6/index.html","e0d4c02f6164e764d5f2a57fcce6ced8"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","83c677537df18a7f91c3ab923e6ded59"],["/categories/丆插件/index.html","afa689bc098aa42735b5a50719a0a04e"],["/categories/又双叒叕是水文/index.html","7a79e0eb923c77e484f8c5206a3bc76d"],["/categories/好方法/index.html","45039930b1271b5922892e59ceb21b1c"],["/categories/好方法/page/2/index.html","40e9ce9500825be20e528b95a4f9f951"],["/categories/屌代码/index.html","c5ff66a2bbf64397b15cc1ed4dae2b45"],["/categories/干问题/index.html","1aee97b240bc0d61d50bc57f425006aa"],["/categories/撸羊毛/index.html","c7906f5dd297a51ebba6b9b0ef58dfac"],["/categories/有故事/index.html","4cf8100be1d72f996746fd98d7c46b5d"],["/categories/爱分享/index.html","0129658333709ed0b321e594614ee0a8"],["/categories/爱学习/index.html","4271258c806f3d9e34ae6c675167ba79"],["/categories/爱学习/物理/index.html","97090835d0b3080952516e0775bb88e4"],["/categories/爱折腾/index.html","d8add6f944fbbc9d7dbdc2ea88a21bb3"],["/categories/瞎扯淡/index.html","9823e3d9f5c5f585e122799ca8ce6a59"],["/categories/繡软件/index.html","d08edb3f9e1a4a718527d3d8800b90e7"],["/categories/要公告/index.html","e01c792be96343e96bd4a011cc73f7d9"],["/categories/随心记/index.html","202aae53d065615752e2283fcf939ac2"],["/css/gitalk.css","c852fa9d4f97ca1eabfb8aa62c87847c"],["/css/main.css","218db6097662361a6b127b2ddc696783"],["/css/matery.css","abfb666a82809b0a0c416cfe61f5d8fd"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","c1c46472526e3f8c03f45d0a5d7fc043"],["/js/copyright.js","2f44332d3199de8d97ece4ef4e5df32c"],["/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["/js/fire.js","53daa1039bfdfec4415ce83ca9e7e31b"],["/js/gitalk.min.js","251a1f977bb7733e584390a01ceceb97"],["/js/index.js","140e3f6be2a04ac4ba558a6c65636f4a"],["/js/lazyload.js","1fa470189608a5e4110e56169cecb0d0"],["/js/local-search.js","e9093657a10085d74435b313a4b8c557"],["/js/main.js","fc0c3bcbdfa6c63971922742a575c803"],["/js/md5.min.js","91d98ebf28303805138cc0e2566037b3"],["/lib/prettify/github-v2.min.css","5c9b5b96ea14366295d459a67eb2fe26"],["/lib/prettify/tomorrow-night-eighties.min.css","58e4655d0e213fe5af02c45e2750d4ff"],["/lib/prettify/tomorrow-night.min.css","833e280aac0fe342a5dac45c7724f934"],["/lib/prettify/tomorrow.min.css","9e812ec8ca03c4d9764113fa3f4ff8b6"],["/links/index.html","c5ef9fdcaf0d9edf8342fb651135bd5d"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","e44d867efc8dd3409679c1c6a3c896fb"],["/page/3/index.html","7786e7b199059ca93d55cf2df7c3ef46"],["/page/4/index.html","41ada75668ebf9823c51c4ef6a563e43"],["/page/5/index.html","332a65f050f1a0fe9f99e7c7c46d6404"],["/page/6/index.html","979cfe51b8a5ae5235a6db615e867263"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","be5f8a23cf3ba99bb8f973688f104492"],["/tags/000webhost/index.html","db5ad361f2222f47f98376706db7a2ac"],["/tags/API/index.html","63ac812b3ca9fb92490ddcaa08d215d2"],["/tags/AV/index.html","8893178bc0f5ff5d1d6bc39b7deb0646"],["/tags/Adobe/index.html","43a4d1a658665a33a72ed9d731bf74cf"],["/tags/Adsense/index.html","e2dc5916f60b805f8790c82ebd1e36e6"],["/tags/BV/index.html","d5d5726248780625d62dea13d3772207"],["/tags/Bilibili/index.html","dbfac79d57010e1c2c0acfb85c4ce741"],["/tags/Bing/index.html","403894fe22839f34f6b2717ff14d763d"],["/tags/C/index.html","f774d0beb679baa1bffe356728e8a446"],["/tags/CDN/index.html","c401f34dbe2e330cbd865f492832906a"],["/tags/COS/index.html","945c4bcdc515dc4a3d3224ea6e1b1829"],["/tags/Chrome/index.html","5d3aaa94bc2e8805fad4738227d0f1e0"],["/tags/CloudFlare/index.html","a3f4cadf091339a1b4cb7b852c8c085b"],["/tags/DNS/index.html","55b3125f566df8ab016629928c07822c"],["/tags/Diaspora/index.html","97a38f724f2bef9c7b7ef64634a412b6"],["/tags/Gitalk/index.html","961f0fc65f70e49b840350597e6d0c7c"],["/tags/Github/index.html","777dee2480fc9bcc9830091aed31daf7"],["/tags/Google/index.html","e37c2f6c0b152ba608b5cb1da6e6c334"],["/tags/GoogleDrive/index.html","31dee68108043ec6c2956f611c7eb786"],["/tags/GooseDesktop/index.html","5a404c05422f7c3ea46e9c38b6490ed9"],["/tags/Heroku/index.html","df209f48f954f12c7c0d4c2d51fc492b"],["/tags/Hexo/index.html","99d96d632b4f21bf152bab3e430964ec"],["/tags/IP/index.html","bd90be704cabbbfdc9c2dca2ca0600e3"],["/tags/IPFS/index.html","547a47b19b82446f6dae5229af38acf4"],["/tags/JavaScript/index.html","12ac03ca61d3a796e89f61241c9ef785"],["/tags/LazyLoad/index.html","8b7c1fbeaf67bece3007c4e650ffd064"],["/tags/Live2D/index.html","3ce7f9188e00d994cbae6838da8517a1"],["/tags/MarkDown/index.html","9aef12f71e095e716e33e4ede5535108"],["/tags/NPM/index.html","3e866fa267d57cef82bede70716749fc"],["/tags/NexT/index.html","4ba91a4d7269eef6b55e341a9d564e4c"],["/tags/Node-js/index.html","fb1c04fb448899b280861c6a5bddf8b5"],["/tags/PHP/index.html","98ea8e9c436048d864a99f9d358fa0ef"],["/tags/PanDownload/index.html","8a75244a528e6324a53c88d9ae595fba"],["/tags/Repository/index.html","da795ab6c7cca6e6079f48541be4069e"],["/tags/SS/index.html","a03d7132ae2e5636a46adb98ae1cad3c"],["/tags/SSL/index.html","2e10521970bd9c5767d61ed163d7d470"],["/tags/TLS/index.html","520b2f3fe7528b242d82feed3ebe250c"],["/tags/Tampermonkey/index.html","ea2e686cc11abd058aca3fc6910fbc77"],["/tags/Travis-CI/index.html","17322df5b4ca4018833ff8dfc72f0a97"],["/tags/User-Agent/index.html","8ece9f461889cbe4e25a0896babbc1d9"],["/tags/Valine/index.html","2db133688550d10ba6b7cf70d98e7366"],["/tags/Warp/index.html","21f14ca2274eedf3644560678874b323"],["/tags/Windows/index.html","2e906d58cc60ce4774356efbe9b801f0"],["/tags/Workers/index.html","106e8e083e348f61d0f54679ecb125b4"],["/tags/css/index.html","5967710323ddc9f85fcdc5b3d6a97a9e"],["/tags/index.html","4a6035fdb6c0ba2d2d4c0e9b2f930d29"],["/tags/ipv6/index.html","0e35ac5606402cea2e677427526e228b"],["/tags/下载/index.html","22ba4317f2837d0ca739731ad7485a0f"],["/tags/主题/index.html","ebfb96532285c8040e4089200f7968ea"],["/tags/京东/index.html","d291faa56637739c48d51cfce529af5d"],["/tags/人机验证/index.html","49d2a84b34e1925a979748ca4f3a2416"],["/tags/代理/index.html","925a8a66ac05e9a5496725d3cecd5df0"],["/tags/优良/index.html","872f51e7755b2578b1ea1476c6389c0c"],["/tags/便宜/index.html","ddd1e91217c5cd5888774d879936d586"],["/tags/修理/index.html","8e5d1c158354da16b2a9952617f7afef"],["/tags/免流/index.html","17bf3d2929733ce42369ede7f5c946c0"],["/tags/免费/index.html","90df8cbd480acf0963b39ccbd4258206"],["/tags/全家桶/index.html","18a7567508b82fa4f69ab3b194453dfc"],["/tags/公告/index.html","b8a87efb42b1377941b0772f03968fcd"],["/tags/关键字/index.html","def1528bed2316914e636f7a011fb9da"],["/tags/冰箱/index.html","0f5e6a230564c6dc38ba74168105e4eb"],["/tags/加载/index.html","4c2f79a2c48d7471b2d1994f04868f19"],["/tags/动手实践/index.html","4f4a35108a207f59fc7bdfc79d851205"],["/tags/劫持/index.html","2f8d2b54b505fc46f746be9f7c1e1b09"],["/tags/历史/index.html","7bec38db157c2ac56c6cbf8cd469730e"],["/tags/压缩软件/index.html","1118044154b0a196d23733e390f89601"],["/tags/台湾/index.html","a4fd3ee68d9b7c15b3a50cdc76a96845"],["/tags/回形针/index.html","656483a21d8d11fbf37ff69e28aee8ab"],["/tags/国家/index.html","ae281177f16451a2465a196dee2bd350"],["/tags/图床/index.html","8cb0ad05a24b12f50021fb33ca5c66bc"],["/tags/图片/index.html","02bcad9886211f336b7ea7a287e331fb"],["/tags/在线更新/index.html","b3b7f7d3197416ed4102f26cbc92b9dd"],["/tags/域名/index.html","74d09316a9c32ef8ac19e91b11044c38"],["/tags/填色/index.html","31b8b8b10d7b98eb3f6913710d4435a9"],["/tags/壁纸/index.html","f93db9e44d406267e9d1559c6e80fbf1"],["/tags/天体运动/index.html","cb7e9e9a732fd69c8d258d465ddb6a3b"],["/tags/头像/index.html","23ac98fda87a9bec59db7c707e262f09"],["/tags/奇淫巧技/index.html","2c22bec40811b23690d2e397288a949e"],["/tags/奇淫巧计/index.html","ba9ba7d012d0f4153c10dac3057f578d"],["/tags/字体/index.html","f3302d70aba85bf504bed92dfd4a130f"],["/tags/学习/index.html","07eddcd6d99f77dafef9d07b5cf33f75"],["/tags/安全/index.html","502b55ae0c9f89ac2061d3a193262e5b"],["/tags/宕机/index.html","9b75c0f48f5819536c80be52a90c8355"],["/tags/实践/index.html","7f30ede176f008e72ed864ab3e3c5405"],["/tags/宠物/index.html","8de6e27415d8575c4062be909aa2fcf3"],["/tags/寒蝉/index.html","a3fb448e661ab83e20440ff4306dddad"],["/tags/对象存储/index.html","93b51faadf72142b856a47ebc06d5005"],["/tags/工具箱/index.html","cb71035e931d9285ba13ccc20f838bc2"],["/tags/干货/index.html","ec55a4aa41c8eb2b0f1bc97811073493"],["/tags/年度/index.html","17ed48a99099755a1fa504e6a4ac04bc"],["/tags/广告/index.html","36d5800b0cce0b2ca6edf2f49bb709ee"],["/tags/总结/index.html","987c1c824a0e3db7d04c64380b33bd91"],["/tags/恢复/index.html","d2d3d75abdaadc055ee80385ba2c83c2"],["/tags/悼念/index.html","ef40f89ea66b89ded58e4f892fb58583"],["/tags/悼文/index.html","d0a6b392f2d439bc20fd2a9c6129dc82"],["/tags/手动填坑/index.html","7ff4b860e7d8f64c22914ee90ae85052"],["/tags/插件/index.html","d2c18979939fd0b47fd55d062505853a"],["/tags/撸羊毛/index.html","99f4ab31c115f38d51542f4a2ef8eeea"],["/tags/无限制/index.html","f28c70dff29f62cce9c29ab45d4cb5f5"],["/tags/日常/index.html","f58fd1fb08184a19097160dd34ee583b"],["/tags/更换/index.html","b4ff19f3d3c18b348cc2bc680141af4b"],["/tags/标签页/index.html","adeec9772f6efe170d5035572be3fa38"],["/tags/桌面/index.html","16258c445eb6b444ec545d56b1f2c589"],["/tags/流氓/index.html","905f08c402d9b8b6b6784b42734c81ad"],["/tags/浏览器/index.html","567a0445adb84c15b662d2022f3e8170"],["/tags/版权/index.html","d9d1b580090336cf428d82fe206bcf33"],["/tags/物理/index.html","867f471d5bbf449677545c4334bc3054"],["/tags/特效/index.html","b517c7f41f9e4193d6a1c438c0db7d2b"],["/tags/用户信息/index.html","3e1e7e1b1decea829d9a301043b7c479"],["/tags/电器/index.html","3d184e1c1d95d1963ae1f86280820523"],["/tags/疫情/index.html","fc23f32083a10203248b9f53cb93eeb1"],["/tags/白嫖/index.html","1512ca26f7c2f067df6afd97cc4ef63e"],["/tags/百度/index.html","666defd0a49f526012c0981e012a4d2a"],["/tags/看板娘/index.html","6e70a7bc77f033d7338d68685358fb83"],["/tags/破解/index.html","5be4420bd9f90595c2109e1ad896b2b7"],["/tags/神器/index.html","f48aa014995537d55f39826f32f65345"],["/tags/私人/index.html","94e7a8ec1cfbdd58134b5e87ad2b1c81"],["/tags/私有云/index.html","83088b8334e07c4656b3d7cc3671299a"],["/tags/科学上网/index.html","4ad78359416fd50da1d58054018fee6b"],["/tags/站长必备/index.html","a0132650ab2ca0a1169887b470994727"],["/tags/等待/index.html","ff8eff8eca760cbe18936a914aa94033"],["/tags/精简/index.html","423b8bd4347883f1d4281808997d9c49"],["/tags/素描/index.html","da915fa0e88e234295dcae935ee0d69a"],["/tags/编程/index.html","97ad89e129100a013b1dc0bcd26c1a3f"],["/tags/编辑/index.html","d490898da415ca7e733c397a297948f9"],["/tags/网盘/index.html","bafffe65c4db8b46134b11c2214ba38a"],["/tags/网站/index.html","8c6817378b1bd1fcfadaa40af2471d7d"],["/tags/网络/index.html","a85615b724c9498f9855150bd85eb2f9"],["/tags/美化/index.html","6c1addc6f369e66e3219287db52666b7"],["/tags/美图/index.html","a3706314c02413e5dcd3cdf3f119f584"],["/tags/脚本/index.html","0afdbc35c74f6814b7b203f0e4bc938c"],["/tags/致歉/index.html","0bd3e5498cff93ab789aed099bae086f"],["/tags/萌哒哒/index.html","67aa1e68a32779459b12cb1217edeadc"],["/tags/萌娘百科/index.html","a60258b9a393c955823e307db22c6260"],["/tags/萌萌哒/index.html","8d7cb3909a67563dc5175ada822f8764"],["/tags/解析/index.html","3834aa1613ba70fa354815a277b10e69"],["/tags/评论/index.html","30157da26d690c6afc20f2231cd01f8d"],["/tags/评论系统/index.html","ae426c6784d56fe66a2c907756d6b966"],["/tags/语法/index.html","2215a155e5e6b89497ecb1add378dc59"],["/tags/谷雨解字/index.html","c1b082a28dfb51fb43926d9d2767c195"],["/tags/赚钱/index.html","aa87324a41ec2f28dd465d002872ef64"],["/tags/踩坑/index.html","0c47df8558dd3795b6b44f67a9f6c962"],["/tags/软件/index.html","a15ec1158a944b67ae169f4dcc163e5a"],["/tags/辱华/index.html","efde4f86ce4de14a1bf75b920d6f8b9b"],["/tags/迁址/index.html","5ddb4e659254c552a5f9f05df5a5d4c9"],["/tags/速度/index.html","a5ebbc875514a4405eb5ba57cf75b7b9"],["/tags/错误/index.html","9acc0a837f2ec1a92eacc995009e4a20"],["/tags/阉割/index.html","dffae45ca5618121e320ccc886da43bc"],["/tags/阴文/index.html","71d8958c5bd188565bbd18e51744bbb9"],["/tags/音乐/index.html","45b7dab2578cc18f6a790562eb5d7ef9"],["/tags/题目/index.html","bc7d3995fa43ffe4b250c4255614b2ee"],["/tags/黑科技/index.html","0e163f8b585544f19f76f8facd2c8c53"],["/捐款吧/index.html","085c9fcf7d31169e9aa206549365dc7c"],["/随口胡说/index.html","c8207b84fa5b1afb6e4f90d2721d7b67"]];
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
