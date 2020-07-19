/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","12daac7b7c1ae426436b349d5e9a7214"],["/2019/07/17/巧妙去除百度首页广告/index.html","2772e08199db47b43871584276977ba6"],["/2019/07/19/国内加快NPM下载速度/index.html","5809cab1b5af67fe304fc77d0c14b7c0"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","53111a16c990e3fa274d5accc9a5e753"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","181f58fe3257d38f07a7e885a4c06975"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","427aac175f167ff4f1cba9c498afcdf3"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","0a911f16441ae6ac5558d9e6ba8019a9"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","11d97ed16783b15871b11654730b8217"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","12e0247e33aa64697895713b2003c284"],["/2019/07/28/【公告】关于宕机/index.html","4ce73a99d9768f1a12b8f81e8472364d"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","2080ee5c4d51d682062f3def70b0661a"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","933ac8bddd0a8e2f7737972d2a63ad1b"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","dc7dcd05966765882139a43be5b15ac0"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","c04e7704dc244f44e5c652d4ef33fdc0"],["/2019/08/08/每日bing美图获取/index.html","9e50f0ab4cd32901eba47214f4d29fa6"],["/2019/08/13/User-Agent野史/index.html","b7d5a6572f15a3fc6795ee70faabf76d"],["/2019/08/14/【公告】博客多域名/index.html","4244b377f925e8c0b1db00336ad33c75"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","b66f63f84a8e58dfaa2b7a6a5f7b2a6d"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","a529aee538c189e8d4b3dd9d9bb83657"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","74f9f3745ec5b7bbd712db857c0c3f12"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","1e09def394b35a56e82b3f6a87d14b41"],["/2019/09/14/来，破解版的Google访问助手/index.html","373292e65d40eb062849133dfee7a4ba"],["/2020/01/20/回归啦！这是见面礼/index.html","6776c0007a0f7e69fc37a56e4630ba2e"],["/2020/01/24/我们一起解题目吧/index.html","d11d9ae562404a34aa7be3681b6e0860"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","c9187f492a72ff9f8f97ac24d4b7ba49"],["/2020/02/26/Gitalk详细踩坑记录/index.html","9a4bb7b8277b525d34c5857587e92294"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","58b468942d8f3f77c7914ea3f17bee2b"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","899a05ad2ee209b80d669bbf3aa271f7"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","664955d43563c2cc07de0c808d93191f"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","5b2d4bea09e8f6a30eb804d3e7ad0eff"],["/2020/03/12/白菜价域名的问题/index.html","86e6f9c4cc949f831c8b9e84f1eec2c8"],["/2020/03/13/工具箱和私有云恢复！/index.html","04158543fb26c969103f78db2382934b"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","23c3a08231a1166f10ba84b8e1bcb766"],["/2020/03/16/浅谈什么是好软件（1）/index.html","cdaa81f256d9c6d3c7ace2c1d2d7c944"],["/2020/03/17/一次愉快的更换域名经历/index.html","ac9ff54d59bba118084736b4e6f4b1d5"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","e9036fd5985826321f3f4b174bf423ef"],["/2020/03/19/如何-CloudFlare-Warp/index.html","6f22a027e9c4f1eef80fe9bc794f8178"],["/2020/03/20/一次糟糕的换主题过程/index.html","82b2e28ab815081339a8b1dd8192018d"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","60232e8d583a363c489ac37e1530ee80"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","88920dcbc44913169c42d2b4d9944393"],["/2020/03/22/回形针-真的辱华了吗/index.html","fd7bed5d5b69a2a625d7be44180258ca"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","884c095ff0c6272443b2dac3b1558d02"],["/2020/03/25/天体运动/index.html","5ae5758f6841c89ddb072b7192452054"],["/2020/03/26/一次“修”冰箱的经历/index.html","1dd9915969d087c01b7d8b4abd488baa"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","cfef14ab60584753dc76b2a7fcd84af2"],["/2020/03/29/PHPnow/index.html","be471303b0ffc43b9445f6d8460f4e8e"],["/2020/04/02/AVorBV/index.html","b2f0adc0da2e23be08b951fb2d2b75ad"],["/2020/04/04/2020QM/index.html","60e05903a05788398fbae83dd7caf4db"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","0e7945fc54afce1cbc9a989502e97a4d"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","6fb9c5c138366ac8ab47757fee135a34"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","92115dd80c91824a0b4cb0028b717131"],["/2020/05/30/What-I-Do-2020-04-05/index.html","a92016cea9064120a94f93d34e9f7cf8"],["/2020/06/07/Blog-sChanges/index.html","281571b6c67488017584a1b4e5dc8523"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","ecf81112f92a5a6e0490d97f5901a333"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","cdbbb6c3e476027f60ae9741ac8c8695"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","cd23cbab49dec9714d3f1021d2e20c42"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","9b3eb1c57d2257d156e43bfbc151f618"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","837aa3f18c71da3bc47a4461805c37fc"],["/9999/12/31/博客暂更预警/index.html","cfe517f4383c9e474052e1ff5f7477fd"],["/about/ads.html","03efe6a0885804e8d2ebf24b12059a22"],["/about/index.html","af3452954377bb93501119fd5122081a"],["/archives/2019/07/index.html","d926dca49e9e23abd073cb7a7c7f4ba3"],["/archives/2019/08/index.html","a6550fcd101d19bf9b2b8163b1cd92eb"],["/archives/2019/09/index.html","f75bc96dbc79e7b7316d551d600b6a29"],["/archives/2019/index.html","97f5d9398c9753163fc5fde609fdd783"],["/archives/2019/page/2/index.html","10c28cedb5f28b00e1065c62ef23e3be"],["/archives/2019/page/3/index.html","f8a3e39642cd4fa92f9881987361aef3"],["/archives/2020/01/index.html","2b892ddb5a92baa588863b23a44ecfd3"],["/archives/2020/02/index.html","ac86148a3a1d4420ed7770c11245b823"],["/archives/2020/03/index.html","ae3576cee9700b30258de43a373428c2"],["/archives/2020/03/page/2/index.html","16aab60a873959ff8f86ce15f7fea188"],["/archives/2020/04/index.html","f8ffbad7fd1e7d868ccc7ee7118b8f79"],["/archives/2020/05/index.html","fba3f2ed2e7e505721363d43e19345bd"],["/archives/2020/06/index.html","a542bd40cc03f3f95a94f28ddea24150"],["/archives/2020/07/index.html","20bffe07450187147352039112abc433"],["/archives/2020/index.html","d3bd3460bddd15dcb94e46bfbed50fd0"],["/archives/2020/page/2/index.html","b25b9b60a845abf23d65af5ab5339013"],["/archives/2020/page/3/index.html","90d978a3af942e23c44ba456e99a6c22"],["/archives/2020/page/4/index.html","6b2e8587dee867ca0285ef4ea1a2d8f7"],["/archives/index.html","f2e7d557563295e91adc722652d04368"],["/archives/page/2/index.html","e0c54501103c99debb424b5d901b82be"],["/archives/page/3/index.html","0c8785b13341aa61523125c0fcacebca"],["/archives/page/4/index.html","fea1fc92575d0dc809ebd32f65c47d6b"],["/archives/page/5/index.html","5e893f18f26583b5d9acf857406c4351"],["/archives/page/6/index.html","26a6b8cc314206d13bed6fd05e272f63"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","2f674267ed92ad017442592f385b6df9"],["/categories/丆插件/index.html","ec06b915b796a6c10157a1f46245623f"],["/categories/又双叒叕是水文/index.html","a105bdb2278a5734a21ca0b4b4e9f35f"],["/categories/好方法/index.html","31e1efbe3f02b60588ff90deecb55474"],["/categories/好方法/page/2/index.html","941a7ae586637131d21b457ceb394fe1"],["/categories/屌代码/index.html","779b2dc1d9ef305e715d82abf498af84"],["/categories/干问题/index.html","dd282a78792fa6cd77ae1ccc1a900a49"],["/categories/撸羊毛/index.html","690c74baaa6cf0b30a84bc619b2c57f1"],["/categories/有故事/index.html","8825c774af6482bece9172f3431d240d"],["/categories/爱分享/index.html","3f11ef123e15038a8c947c03dc91a74f"],["/categories/爱学习/index.html","f03810122931ff1f5740fad60ac00e4c"],["/categories/爱学习/物理/index.html","75f53cee86152db517f616156169628e"],["/categories/爱折腾/index.html","2197bc999bdc7c6b978ba5622aad8571"],["/categories/瞎扯淡/index.html","abb5bf87315f3e51bfdf31f6ef07f4d8"],["/categories/繡软件/index.html","d673499089da04a2b815a7c17aa7335c"],["/categories/要公告/index.html","63033bf4312da969affe0b62231109c6"],["/categories/随心记/index.html","04b49d6c2334d9545e41661889329f56"],["/css/gitalk.css","7b229c229da5e7943308bfc4d26ad07d"],["/css/main.css","4dfb6b9be3477fc50c3a134b124294fc"],["/css/matery.css","6de3ce0825d9195be5034281f1ea8dfb"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","3fd53f1a8e410d783d1231318c3f8498"],["/js/copyright.js","2f44332d3199de8d97ece4ef4e5df32c"],["/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["/js/fire.js","53daa1039bfdfec4415ce83ca9e7e31b"],["/js/gitalk.min.js","251a1f977bb7733e584390a01ceceb97"],["/js/index.js","140e3f6be2a04ac4ba558a6c65636f4a"],["/js/lazyload.js","1fa470189608a5e4110e56169cecb0d0"],["/js/local-search.js","e9093657a10085d74435b313a4b8c557"],["/js/main.js","fc0c3bcbdfa6c63971922742a575c803"],["/js/md5.min.js","91d98ebf28303805138cc0e2566037b3"],["/lib/prettify/github-v2.min.css","41393d2e5f2d4d71838258dba77fb79d"],["/lib/prettify/tomorrow-night-eighties.min.css","ade30ac794ec986ea0dc59ab5cd8d571"],["/lib/prettify/tomorrow-night.min.css","d24540f24848e4647e20cfdbbd9a63cf"],["/lib/prettify/tomorrow.min.css","ba0345b15797e92ced89f018aaac35d3"],["/links/index.html","fcab5be17c85e0c763e6ec4e02a31c67"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","d6666a4969bb8d032b98cec2244c175b"],["/page/3/index.html","e6e4c612fdde79977abcfd1044d13d1b"],["/page/4/index.html","7e8c45e1812deca865c47e1e3f2e77e4"],["/page/5/index.html","e1c61e07d2d168ca58a9457f3012955f"],["/page/6/index.html","bc9f43c332dc1ecb627ca7745a51928b"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","cbe9f5b55a2af14c27af69654fa3f4c9"],["/tags/000webhost/index.html","309d77be8a61fb4a90f36cf6b5d1c408"],["/tags/API/index.html","4a7ecd9752d51fbfca407b1bc7687fb8"],["/tags/AV/index.html","875d2d3e26e6b313f8e5c0e1ee267080"],["/tags/Adobe/index.html","b2d54bdc62f6f8deb2dd62fe362e0b79"],["/tags/Adsense/index.html","a59f9c7e7e1e3cec0c65697e0cd86fc1"],["/tags/BV/index.html","2c666722d3a9ec6d00caf616a0767d20"],["/tags/Bilibili/index.html","96feb0b48f7d20ba876e98510e413648"],["/tags/Bing/index.html","ed747f86d6d172c3bb334c4f78568d99"],["/tags/C/index.html","a847a354ff0a121fa29558550af3bb76"],["/tags/CDN/index.html","bf5ea54ba4450c6da80380163093db04"],["/tags/COS/index.html","a0e5e5b49c1a4a842885a0a098a3d0d7"],["/tags/Chrome/index.html","c3c52c7bbab8515a0bd95e6ce6f84565"],["/tags/CloudFlare/index.html","ce1db0b0bd03040a08786267b760fae7"],["/tags/DNS/index.html","f525ce93b83db07422248bd2a3746ecb"],["/tags/Diaspora/index.html","9bac54b639eaf8e54109520f76782816"],["/tags/Gitalk/index.html","05168dcae6e6a1461658ad5e83f0ca93"],["/tags/Github/index.html","dc99b563ab17cc54d6b738c9ed9d669b"],["/tags/Google/index.html","31a5afdef316dd5af855ef767b7bbc9d"],["/tags/GoogleDrive/index.html","80057108a704404b9ca50fc6d7225198"],["/tags/GooseDesktop/index.html","d6e11b606f630d0465f94a624eddd49b"],["/tags/Heroku/index.html","3a983e2b1eedfada2765966a442a00b2"],["/tags/Hexo/index.html","a597c23c3a2ac0c90f4caf0a3405066d"],["/tags/IP/index.html","c5f2fdfe55202806f695130531ae7574"],["/tags/IPFS/index.html","36bfa962e13ffdf7ae3a2e1f10898bd2"],["/tags/JavaScript/index.html","15479b7d4c50a6cc242848195ec0119a"],["/tags/LazyLoad/index.html","08123010d3d7f3dfce226c40fc219e09"],["/tags/Live2D/index.html","f9170e65ab3f971beb4927bcfc0ed357"],["/tags/MarkDown/index.html","55df38ea379c84ff144dec9c697fa2c7"],["/tags/NPM/index.html","ad79533b8377f0e23bc9b7cf8edbb1c2"],["/tags/NexT/index.html","24f464324baa25a6680d9867d2afd927"],["/tags/Node-js/index.html","6a2d49e9372ec6549b1c157ac5eaa9f7"],["/tags/PHP/index.html","2de964a514864ebb1e338a3d3129f50f"],["/tags/PanDownload/index.html","21ccaae84545af86f33f7cabd67535dd"],["/tags/Repository/index.html","305d7cb22317034d83bdfdd282d2e476"],["/tags/SS/index.html","e3577e539d00cb3c8ebacaf5a276f3e6"],["/tags/SSL/index.html","2d4c366c460b198ec9b5daf386f1e0e7"],["/tags/TLS/index.html","15786fad28f43014babaf183307db154"],["/tags/Tampermonkey/index.html","46cb37d576cbe91298f5a0d88aeb8eb9"],["/tags/Travis-CI/index.html","dfe66bfec539a607c3448e9ff09501b5"],["/tags/User-Agent/index.html","4472caa8f258d91a6e0e22614e3cb842"],["/tags/Valine/index.html","34934b168a1670263f8d0b89cbea9ed6"],["/tags/Warp/index.html","930cec4bbafdec40672afddc3dfef6e3"],["/tags/Windows/index.html","d21b8dd959d5711c4fbf5264648544c6"],["/tags/Workers/index.html","83671c51586a04c0a2609e8cae94d81e"],["/tags/css/index.html","ac754967a72bcb9b2d7c716386935ece"],["/tags/index.html","0a647093c3d629c160430c2338f0b9bd"],["/tags/ipv6/index.html","91eba498fa721ad891c2652611d78dd9"],["/tags/下载/index.html","9f4e88b8060898dc12de46e60b97ef48"],["/tags/主题/index.html","6dddf890b5127eab57d4a87868e2f6a4"],["/tags/京东/index.html","44bd65de3791e4083489e5742b1b1b51"],["/tags/人机验证/index.html","fe71498de127f6e483411fcb9713a85c"],["/tags/代理/index.html","3cdc9297d2cb00581ce202accb42e139"],["/tags/优良/index.html","49e3eb9b51f36d0d2363a209d52654f4"],["/tags/便宜/index.html","71d8f10ab34504e9d99f8e277e98533d"],["/tags/修理/index.html","26895da3dca0f9294f80337c76757f6c"],["/tags/免流/index.html","e19b9d732ce2806c13d4f668efbe1d73"],["/tags/免费/index.html","ec684b1c715356a56fd8668a7b05a42d"],["/tags/全家桶/index.html","e25be486535db348ad8b11c7a7f782ec"],["/tags/公告/index.html","89899af0e86c414fcc71236af34148a3"],["/tags/关键字/index.html","90df310e7a7fffbeaaf5fbe0500c782b"],["/tags/冰箱/index.html","34b606b7084deea9d4e183f42aeadec2"],["/tags/加载/index.html","8aceac3ff9df0fe1668560254d7db098"],["/tags/动手实践/index.html","97a5fc1f60fa1612ef254e711922fbd8"],["/tags/劫持/index.html","e9a4fe26eba6081278fac91cba2a7185"],["/tags/历史/index.html","d17ab0c1923fb4d01a30f99a1e1f25d9"],["/tags/压缩软件/index.html","3f2cb05c1ab7873e963b33842bab7798"],["/tags/台湾/index.html","dff44228221a37ab2ccd994635cf2ccb"],["/tags/回形针/index.html","0f3186ccb5a2e8c576d557ab07db9571"],["/tags/国家/index.html","e273947d080af228c68a8cd644ce2f9c"],["/tags/图床/index.html","f46e13c6d4245bdaff8d2677650cfd86"],["/tags/图片/index.html","6ea67653cc66716501d9b0c545ac8e1b"],["/tags/在线更新/index.html","fb74a20bf4ab1e3ac20ead8c150407d0"],["/tags/域名/index.html","421e2aeb68f4e52f2ff6c857dcac8b0b"],["/tags/填色/index.html","dd65a25755479a0ff129511c29269c1d"],["/tags/壁纸/index.html","7c9cc37b5e73030852189bd9e788b3e8"],["/tags/天体运动/index.html","7ef6ab30e1e01bb1ba05727fd4a7e53c"],["/tags/头像/index.html","db12f2c0ebe3874305fe83215cb7967e"],["/tags/奇淫巧技/index.html","0a25fc384b5b2205c3e1ef32711a1c65"],["/tags/奇淫巧计/index.html","bbc055240ac432f8a2c7c28180bcb9cf"],["/tags/字体/index.html","c78bf9bb1c16b53c40cb1f6c665174a4"],["/tags/学习/index.html","f571320c8433cc6e49baf2a39f11d640"],["/tags/安全/index.html","3585ff8f3c3929c30b792213dfcfaa55"],["/tags/宕机/index.html","37c5350f534a8d1556a7a1ca2632a56a"],["/tags/实践/index.html","75df5616724233ae99a9ca47d8d0d0b8"],["/tags/宠物/index.html","5628304130fa96334c60b11330f90135"],["/tags/寒蝉/index.html","fea339274722a7fd5b97d0544b449f60"],["/tags/对象存储/index.html","b29361cb9238706c22b72b921fbd3b98"],["/tags/工具箱/index.html","704ff835e96d6a6626a7651e0d1d8cfb"],["/tags/干货/index.html","d4d0883db6b424a46760437808caab56"],["/tags/年度/index.html","624370be4fa48c54cecee30fae30628d"],["/tags/广告/index.html","7e699203b4556c466dafa2dbd54e28ed"],["/tags/总结/index.html","1c6dda1413675af89e24100c0f30b2f1"],["/tags/恢复/index.html","e1821f5779a6f615f9b41a88c270b1e6"],["/tags/悼念/index.html","d0918e4fdfef2f8e653941664065124d"],["/tags/悼文/index.html","e763c4ca0d5c4b9eb643ab8833028403"],["/tags/手动填坑/index.html","73c20142822d704251128ce23094b636"],["/tags/插件/index.html","b77099e01156ad2159a8b9c25906f1a8"],["/tags/撸羊毛/index.html","81561dacd84a12075147acb593afb708"],["/tags/无限制/index.html","bbf9fec5838f26405046a30a785fc2e2"],["/tags/日常/index.html","cfc5b6318df5970bc7c7f8f2680acfbe"],["/tags/更换/index.html","54a2d80910fe409503c457ab5bd32d54"],["/tags/标签页/index.html","7c6fced3ec64aefb71623228b0223af8"],["/tags/桌面/index.html","b3560ca50fa1321c1a13ac521bbbb14e"],["/tags/流氓/index.html","4fb76a2b6c1d1b521da491b86f387d56"],["/tags/浏览器/index.html","2731656733ad2cc3f88e79877663eda3"],["/tags/版权/index.html","4ed389662d55b61e36bce88a3f576215"],["/tags/物理/index.html","b3e0abebe24d62454af05e48db70be31"],["/tags/特效/index.html","29a3fe1275de31fa8ecfd88f677c0922"],["/tags/用户信息/index.html","48973a415713113e97c69b47132881c4"],["/tags/电器/index.html","b9dbd293e7bff9fb52837a7de8fa1c0c"],["/tags/疫情/index.html","d11dd329c114947fbe43f262788b8874"],["/tags/白嫖/index.html","6ae9335a0a0a54da94a85405003add1c"],["/tags/百度/index.html","f3544c93bb9d906d6552fd4167bfc0f2"],["/tags/看板娘/index.html","00b0394ff86b5b3eb1cd2d56e539c60f"],["/tags/破解/index.html","dccd38e5b98cf4a47dde829458213740"],["/tags/神器/index.html","d454f3440f92465e9eadb93d5c22166d"],["/tags/私人/index.html","de3039a51dbb6c6a85465eec8bef8efc"],["/tags/私有云/index.html","24b73f36730ca44b32882690bbf80fd6"],["/tags/科学上网/index.html","30191993a29b7e0e7c06d6cfcb888815"],["/tags/站长必备/index.html","18f30dd4d5c97eaa9b2401e79d25f16c"],["/tags/等待/index.html","6feed05ccefc89345cb593e83fb7e6e3"],["/tags/精简/index.html","6b4f3776c6b7a2685fe7ea243b101210"],["/tags/素描/index.html","aea271ceb3be11df86474de18d2a3b68"],["/tags/编程/index.html","ef0175935cab71c2f4479349276c2f8b"],["/tags/编辑/index.html","bd8f783b08dbb399b28647b1ec2aa7df"],["/tags/网盘/index.html","c80635ab2ae6317b50a40c2bbfaa0827"],["/tags/网站/index.html","0b87c98fc144e7c6b3990dcb3a5e143f"],["/tags/网络/index.html","2ca1604c23907a0a6f361ff07a7067fb"],["/tags/美化/index.html","85a9dcc383c69acfab181edfb37f21a0"],["/tags/美图/index.html","c5a38e2184f9a4d6eb387fa5d730c0a2"],["/tags/脚本/index.html","c8f02fdbaa9e2ad848d3cb404c6be4c4"],["/tags/致歉/index.html","52346a6f81916d63cd1e368420c98376"],["/tags/萌哒哒/index.html","58d2cbb0f1f9dc64801c79158468bf7d"],["/tags/萌娘百科/index.html","b2bf943feaaf0c68a73d52856c8bfda2"],["/tags/萌萌哒/index.html","5d063a1f110022b3d68964b5a5a9c114"],["/tags/解析/index.html","524b66adfc873bd39abf57609d1e69e9"],["/tags/评论/index.html","b2c2dfa9b9edf760ab3ce591a80d2148"],["/tags/评论系统/index.html","5c90f48d1235b2256d128bde002194c8"],["/tags/语法/index.html","aa7d14fc4855abc06a72fbaed7719856"],["/tags/谷雨解字/index.html","6be46704d34159bf43c3b4589bbbe2c8"],["/tags/赚钱/index.html","3fc9624347a3e80d191113e3a829582d"],["/tags/踩坑/index.html","eff9103d8929d5b440f054a2587259ca"],["/tags/软件/index.html","c5b058bee08cd9a6cbbc4c52493c136e"],["/tags/辱华/index.html","e98a714546e927fb43dcf908550bbdf5"],["/tags/迁址/index.html","5e1cb867581aa8768d3a395aca926340"],["/tags/速度/index.html","07ecb8a9eb4a7d257403dfd5fd6a0d06"],["/tags/错误/index.html","6ac2e3e9c6fda0f4ef15745fcf4b5c77"],["/tags/阉割/index.html","35de5f0fcbda4f4777066020b12614e5"],["/tags/阴文/index.html","1ace02d09ba0e634e0a3a753f74d2f74"],["/tags/音乐/index.html","0d9cd8735c8434b94c76f936e836f27f"],["/tags/题目/index.html","e939d7b56d2d27f8c141ce640653daf2"],["/tags/黑科技/index.html","04da8e46bca4b35ce6465c92f9d808ee"],["/捐款吧/index.html","a216c073fbbdf9bec7931a9e75ece20c"],["/随口胡说/index.html","2b717634290b524fcccdbb1dce88087a"]];
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
