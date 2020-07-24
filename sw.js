/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","4f563f365b822d38d9e70e7e994d9f5e"],["/2019/07/17/巧妙去除百度首页广告/index.html","6f2c3323887ce43223492f9479812a86"],["/2019/07/19/国内加快NPM下载速度/index.html","e948eea63fbe7ed832c2867c38a59ed0"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","1d016720abcbc330249880ec5567d07e"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","ed99a48d07c86a69e2f6c938b2bcaf20"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","e89f4645e09cf18f067209528f67a98a"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","8ac5901c81580b73566c3630948636f6"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","c7d44f9c875b6400c0954b291bd13fe4"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","bab270573698d1172442c0fd750e8f8f"],["/2019/07/28/【公告】关于宕机/index.html","55a8d639782659ef13d876476ef88daf"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","c283272b9b2e7b2a20d06a72f0a4b50c"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","eac963df0c80dc75fb189364f93e28e5"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","1aa7a112648c30e6cdd960c0bb330f45"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","0ac51c412f225353ea76a7d72cef09fa"],["/2019/08/08/每日bing美图获取/index.html","a137cf7571ee37b1fae9b038f45445ec"],["/2019/08/13/User-Agent野史/index.html","0b362ef5f01dd7c34c00ae3d50d245f2"],["/2019/08/14/【公告】博客多域名/index.html","5a4fb75e85d33201a7942a4d65d3ade0"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","be82d76f35df0ec383cf73c62a17c7c8"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","6d542dbb833a7986811a81688b087caf"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","0a2b177ed3ea3e0ed6b28481cd970bec"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","4ed523dc74ece736325b0482ca7ff61d"],["/2019/09/14/来，破解版的Google访问助手/index.html","7ae0bc8f1582fe6a164e868bb3396649"],["/2020/01/20/回归啦！这是见面礼/index.html","a325a5888149df57b764522666a5b605"],["/2020/01/24/我们一起解题目吧/index.html","8d132424bfb41b69c7871f436bc6d8dc"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","26eda1526c5084b4df2fb80c6c916413"],["/2020/02/26/Gitalk详细踩坑记录/index.html","3d0a367d926692754d014243a1355f4d"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","bd1ac3291896bf9a852083a33b63a1fd"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","d13f5f1f892811e52c39f7f75cd1e9d3"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","a63fbc635e577d411873ca6bdc811689"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","b2bccff99d8972a1634745a0dd2b52ff"],["/2020/03/12/白菜价域名的问题/index.html","7521b29abbad45aca72c6ddd1a7ba921"],["/2020/03/13/工具箱和私有云恢复！/index.html","abd068b1361ea37b9e777d4e60e1d482"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","b76144a95408803891c161c2165da855"],["/2020/03/17/一次愉快的更换域名经历/index.html","990a791737c08a829dbd505180fd4c2f"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","674d85b4317d96e0376d0bb8892a9fd5"],["/2020/03/19/如何-CloudFlare-Warp/index.html","39b8e9ed4d9b454a39c300d7b952564c"],["/2020/03/20/一次糟糕的换主题过程/index.html","58bb7549358903be75be7c3a5a8d32c9"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","88e75eef288bb5a2065914471045eb72"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","4dc70ffda4139268cad3f23bffaf643a"],["/2020/03/22/回形针-真的辱华了吗/index.html","150392a230f2e4a5ce20490360c297a3"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","54232a4b94340fcf5e9b6d313c45c483"],["/2020/03/25/天体运动/index.html","a09b93e74f6a359e733e20dae6745776"],["/2020/03/26/一次“修”冰箱的经历/index.html","72d08dae61019db17771a8c111fc9537"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","9b832be798492085e4a51f2e70393704"],["/2020/03/29/PHPnow/index.html","e813bd1946318c4b7ee629a53159f7bd"],["/2020/04/02/AVorBV/index.html","7745501609e05e52b4cba1a4767612f7"],["/2020/04/04/2020QM/index.html","4e865bec84986972dc6be93d3b54beee"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","49d1ddbc4ac165089f788ffcd1026274"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","89fa6f11fec013ccb1b4affd58add7a3"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","77389182eba7294fee298699a04312fd"],["/2020/05/30/What-I-Do-2020-04-05/index.html","aef81eef29ba680ca08ac9c2c3c29e67"],["/2020/06/07/Blog-sChanges/index.html","6f39f49a75df09a9a54e22cdf503f4d0"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","7fa56f5f7bd8594d5190d0486826f774"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","536c14f54f1ba9f6d80abbafddf18fb1"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","4c3f88447f942184b5e73990ad815039"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","2ca47414d433d02d59ea4e5801baf1db"],["/2020/07/24/浅谈什么是好软件（1）/index.html","3fefbf844717ca10f48c89f9b4aa2aff"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","323dcf74dfd60bb051a2d47e9dcfedeb"],["/9999/12/31/博客暂更预警/index.html","8d786af2957331bd983426153763925e"],["/about/ads.html","795d4505b46bbbc30022e8041d9cd6e9"],["/about/index.html","a89b15ec6058813a79f5c99975c326f9"],["/archives/2019/07/index.html","60ab4760598a852a26e61138eee7d712"],["/archives/2019/08/index.html","5b42ebf7242409ba21ef373e65bec3e3"],["/archives/2019/09/index.html","d1b4a7c7cea4b5cf7c592f0bad49d461"],["/archives/2019/index.html","42e08ac8fce31622b31b9e294e4fc92f"],["/archives/2019/page/2/index.html","da186fdf93d10ab935f2a56e3e5644ed"],["/archives/2019/page/3/index.html","cb83ade68ce6030f70fdd7df3d285b17"],["/archives/2020/01/index.html","7a0e7d741fab591b345ef644cd1f73de"],["/archives/2020/02/index.html","bba3a2be1058b619d2fa440cd5b84b4f"],["/archives/2020/03/index.html","eef1b8202aeb8e4ed49a816233d3a861"],["/archives/2020/03/page/2/index.html","b6dae572ce1dd306ab8004b214a28c50"],["/archives/2020/04/index.html","4b75853383516b7f77852ee64c7f2530"],["/archives/2020/05/index.html","ad1bd494797f463da885bbc8b3be84d8"],["/archives/2020/06/index.html","2ce918e5580c607330bbe572fc595877"],["/archives/2020/07/index.html","81d8a49115db8d4751db5d7f2213ed02"],["/archives/2020/index.html","7ba0ef1247a12b0aa8aff4f6906b4cf5"],["/archives/2020/page/2/index.html","b02f1ae9fb56b8841cbd04dfee18ef7b"],["/archives/2020/page/3/index.html","24fc6862af8d52e2ee6da5847ffc8b92"],["/archives/2020/page/4/index.html","9eea5fe4fbe99ad0f2f5de15d6fe42b8"],["/archives/index.html","486f4c5bc6af7544ff1a21197628a1d9"],["/archives/page/2/index.html","ea4e8f79fedf5ab38bd0eceee98d4a25"],["/archives/page/3/index.html","542fafecde6b12bd6b443778f9aef473"],["/archives/page/4/index.html","fca41c2940ad5f8ef51693f2951a7cc0"],["/archives/page/5/index.html","45f66dd25253964a965b4aa9cf3f3932"],["/archives/page/6/index.html","9aaaffe04d0d1d08ffad116650ddb823"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","1ce06559fb721058645c43a145c8cbcb"],["/categories/丆插件/index.html","857cc7519a79d18103d7fc8d65a725a1"],["/categories/又双叒叕是水文/index.html","a98eb8a6d41d647a740044f86b14d621"],["/categories/好方法/index.html","50348310af61266ddc757b106071d2f1"],["/categories/好方法/page/2/index.html","e312293d8de350d2fdf4dc8970977fdd"],["/categories/屌代码/index.html","8444b2ff559263b0864f6cd5f997f91e"],["/categories/干问题/index.html","18c29364d47ccdc0d1bf789e9a2d6af8"],["/categories/撸羊毛/index.html","b2497396106342afb5ad40aa52f83e8b"],["/categories/有故事/index.html","09ab795b6c4702d73accbc21fb4c4c62"],["/categories/爱分享/index.html","5bd141a278f0ee980d12ea9da619a0d5"],["/categories/爱学习/index.html","f1299e3c0456a3abe87ab34b4b92d78d"],["/categories/爱学习/物理/index.html","2da28e4f895ee7c25cc3af1ce09d6bc5"],["/categories/爱折腾/index.html","588f6d66f37c63aec9d0c82b16aeeed8"],["/categories/瞎扯淡/index.html","4d5a850daefe166f79be0660c1c41ab9"],["/categories/繡软件/index.html","8bdf8b8aff2e8b913e9be81fae8cb52f"],["/categories/要公告/index.html","f8c47c0f1b858bf430aa1b8de2fd4599"],["/categories/随心记/index.html","2e9823c1a5469676f72d71f440fc5cca"],["/css/main.css","fe5908b803b94350b4abecdadf0b076a"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","6e7aea81644a633017fc4e0ef9ffa67e"],["/js/clipboard-use.js","f8982b9e48c880368c3cd559f058f9b9"],["/js/color-schema.js","b91dc34c62e9bf53f17a1c4430d3dbfd"],["/js/debouncer.js","b191fcef450414f12dd272f9a75b4576"],["/js/lazyload.js","1526525e9fcf5d992a7c884deeec7224"],["/js/local-search.js","53461574609e41159a714670d9b66c0b"],["/js/main.js","e58bfe07cc0fa76da851c07d037972a3"],["/js/utils.js","edf4e1b7dbed6c7aef486133f319b75d"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","afdfb9c4abf05acf8c168b6efc526053"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c1a0a3e5ad12096d9e9e3697408bf1cb"],["/page/3/index.html","e764177d319860fa39c29dfc515bf7b0"],["/page/4/index.html","1d5e1519e8ada68724790eadfa87d506"],["/page/5/index.html","75ef5d53fce7323dc829cd200cdcfb41"],["/page/6/index.html","b595630ba628ee4a4a341d4d8c3427b9"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","030d5fac88927509a31b250478545785"],["/tags/000webhost/index.html","a10bca4753b47ab60937f8a55c1265a7"],["/tags/API/index.html","65b0bf9602289dd4500f5e5fe36705bf"],["/tags/AV/index.html","22421da5b14f036319c3e5c5aa1e3e3e"],["/tags/Adobe/index.html","2e87337376672010429bf0580b9875d2"],["/tags/Adsense/index.html","d8147b77e1e01bdea23ef33bfd5751b6"],["/tags/BV/index.html","e57bcc0a85d6ee5be2bd8a9bc26600dc"],["/tags/Bilibili/index.html","5d83cdbce0e12dbb491c23193398a4fd"],["/tags/Bing/index.html","214fe3fd3b62ca74287468e7690cfb86"],["/tags/C/index.html","f13d60e2d5c19c30250c24db417a35e8"],["/tags/CDN/index.html","3c29939eae6859b91c5d6b65f5dd290a"],["/tags/COS/index.html","fb2e6b6a408e802316278569baf24ca2"],["/tags/Chrome/index.html","5580fedf4cdb1073369f59c7ecdfb105"],["/tags/CloudFlare/index.html","c41839f7edf45b272f6d45b8553be97b"],["/tags/DNS/index.html","63d7bde1fd31bf74e532e0c805b78f4f"],["/tags/Diaspora/index.html","bc2d5be63b52d5e8b4820cfb18593dc8"],["/tags/Gitalk/index.html","c8ec74933d00a4b6ce216b64db4d79c7"],["/tags/Github/index.html","36cbdf8cb3f6cb10a631ccfb5630411b"],["/tags/Google/index.html","386989f1d08a7052770fa50e81e0e902"],["/tags/GoogleDrive/index.html","91a192065006be8f3f4478d76f9ce62a"],["/tags/GooseDesktop/index.html","2acd7d2c353fc67e4cc1eb226fa246d6"],["/tags/Heroku/index.html","8f65bd6c129d4bb0aa863bd5b8f2a305"],["/tags/Hexo/index.html","42b97f8b0c94927a2a2f88ee1ff4f8e9"],["/tags/IP/index.html","35e1bb485d663d2323a7536788552b91"],["/tags/IPFS/index.html","65f361cf9b25766181c3f83ab4941de6"],["/tags/JavaScript/index.html","4ee3564e2f9b4d208ce950d49d90e52e"],["/tags/LazyLoad/index.html","78b11aed581ebb2b716cbf5133ba7c4b"],["/tags/Live2D/index.html","1eb7c688299519bd66a2df1b6814df89"],["/tags/MarkDown/index.html","3d168a8edf3573a89167d9cfb954f714"],["/tags/NPM/index.html","66993f71ddf19852d3027effc6e916ac"],["/tags/NexT/index.html","be480b41b2c4ed02a68eaee21127bfba"],["/tags/Node-js/index.html","d3a1ebf33d03ec5e0192cadb6cabaadd"],["/tags/PHP/index.html","4e2f3587e87ac67b47dc1a7d8d1cf25c"],["/tags/PanDownload/index.html","8f03f862e60ffab5a49cdf21b37b13fe"],["/tags/Repository/index.html","6562782ef742ad4141f10be7e0168434"],["/tags/SS/index.html","d4bf86a7a25b2090d6714dc7aed87c08"],["/tags/SSL/index.html","ea8ea333cd8f455c6af15eebc0c44771"],["/tags/TLS/index.html","429a3b3aa1b6e958ea4bd73f4dedff49"],["/tags/Tampermonkey/index.html","30dec56e9b379105a84954e473b6b4fb"],["/tags/Travis-CI/index.html","eac14fad684f2abc81ebf2018554afaa"],["/tags/User-Agent/index.html","0131dad925675d1c7b346165c9816bb6"],["/tags/Valine/index.html","282dd0fdf9094ab7527a3fde06328ab3"],["/tags/Warp/index.html","8a7bdc1bc2c5e13a7ad05db17ecce8fe"],["/tags/Windows/index.html","b09cee1bd3bf84789511038b0739a594"],["/tags/Workers/index.html","66a90499829bb465f43c68d6b156328f"],["/tags/css/index.html","9a19f998f935474f6925bbd4762c5a7a"],["/tags/index.html","8d786cbe0e418168c6c5f626f57a579d"],["/tags/ipv6/index.html","8763e045f16e3d3a6114e9b4b33c77ea"],["/tags/下载/index.html","9b285a3f455667a40275ce6794f5835e"],["/tags/主题/index.html","0580e2094ad2f194eed555b5d387d5e7"],["/tags/京东/index.html","7b2665e70282052c257a6cbdb233622e"],["/tags/人机验证/index.html","ac833d5f2e334f5ad0e6931633e67671"],["/tags/代理/index.html","47fbf4edeba3a0cf2d7b71f2dcfab7ab"],["/tags/优良/index.html","fb8b2dc03ab9c12e8a4ef6e76c91e861"],["/tags/便宜/index.html","de8bdfc3d205bdefd9861c0877585bae"],["/tags/修理/index.html","b2ab06efaf906dd721e1671826a74685"],["/tags/免流/index.html","d37b04773dc8789f3deb34d51bb94d3c"],["/tags/免费/index.html","0ee1559b9eb7325b8ba304e99a4edc8b"],["/tags/全家桶/index.html","ffb58a1ab00dd4adf65556735bf21975"],["/tags/公告/index.html","9ccb07a36d4513b3884b39b403fe08e6"],["/tags/关键字/index.html","5ee5adffdc8371be08652c40e3a41a30"],["/tags/冰箱/index.html","b41c13ef7f6ab3492ed7c21a167dfb7a"],["/tags/加载/index.html","fef02b103c993f620ba27196f507bf71"],["/tags/动手实践/index.html","a1b8a2f2eb081bdf178f04d7a53ad6bd"],["/tags/劫持/index.html","74820e48c7302520cd64ef9a63dca589"],["/tags/历史/index.html","11058904f4dae43378bb779dbcd27e1c"],["/tags/压缩软件/index.html","2c1c943a0a4ccba30ab6fee37ffea321"],["/tags/台湾/index.html","c51e9e3af53b8286771fa42280a5100d"],["/tags/回形针/index.html","7c4eb3949ac294b9b64ac20bdb3f1a14"],["/tags/国家/index.html","a4c8b4e27506cfff92d5cb62e360d776"],["/tags/图床/index.html","99942327bf837c932caec28c675f91a4"],["/tags/图片/index.html","d7fce7cd85aecb87a04206002992e99b"],["/tags/在线更新/index.html","67198475f3d2e5042706425bd8169615"],["/tags/域名/index.html","98e940b5fa7723e1e0a089d1a94c8d6f"],["/tags/填色/index.html","b7b512b63b6b8e536d1ae8ddea72688e"],["/tags/壁纸/index.html","7a08db5d52bf6b74549019be40170b3b"],["/tags/天体运动/index.html","c3f439fccdfd0c7951cdea430b7808c1"],["/tags/头像/index.html","97beac02d7927e1c73d7509993527891"],["/tags/奇淫巧技/index.html","431e21bec3fec813c4b5737ac7a8ee25"],["/tags/奇淫巧计/index.html","9d6268bf563b7b9842dc0834a8acd9df"],["/tags/字体/index.html","e104f16920b101b54f7e35019e3fe1db"],["/tags/学习/index.html","42e906463bf74be7111f8f84f43d2f76"],["/tags/安全/index.html","c0f827d3cc800e415e662b59e105e980"],["/tags/宕机/index.html","92e540821b238eb2a0f50d348b7e7fd3"],["/tags/实践/index.html","99500a20a15a36c9c29df73e3cdef7ac"],["/tags/宠物/index.html","2861a4d8aa72be9292a263807d869153"],["/tags/寒蝉/index.html","d2ed2572ea495830f7f6766ad56d44ec"],["/tags/对象存储/index.html","131095d5f8391716dc9af1384e52caa9"],["/tags/工具箱/index.html","21c844aded228afea188e3e601323d76"],["/tags/干货/index.html","8503d208be4969343d2af14c8ddda241"],["/tags/年度/index.html","103abc30003c026c42dabe0a9253b24d"],["/tags/广告/index.html","3b79387054b5441cd183d6ed0ec00225"],["/tags/总结/index.html","7e1c8ac65265bf8aa5fa6845748a5e58"],["/tags/恢复/index.html","faf51a65e1936a69d220ce6daa7dfb4d"],["/tags/悼念/index.html","8248efc5befd060ec0860424a6825b80"],["/tags/悼文/index.html","1168bb3bee627fa91afbf46c3d7f1835"],["/tags/手动填坑/index.html","f840f722d81336ec388217610ef4171c"],["/tags/插件/index.html","f5e85d6914c62a331a0e82adc1ec590c"],["/tags/撸羊毛/index.html","5b69b66764b097c48ae2a980eb681003"],["/tags/无限制/index.html","614a82b5bbea5ca9d1df88252e47d504"],["/tags/日常/index.html","13140776652cb9f1164b7e0a6d1e262f"],["/tags/更换/index.html","f31e4bafb6fb7699d34a2aad044e4878"],["/tags/标签页/index.html","06416099ca31f94b755b9992fce043c7"],["/tags/桌面/index.html","06693f8ed5a3deca5c6191aa690e4b13"],["/tags/流氓/index.html","ebd2960b8bf7b8da0e6ae6305a818262"],["/tags/浏览器/index.html","dc21589a2eb9c31b407207f745ffe999"],["/tags/版权/index.html","c0a23a794cb93fbe2d9e9c4926f1801a"],["/tags/物理/index.html","cac774ecf0bbf7078709ece90b72dfed"],["/tags/特效/index.html","b4456216152dc1dbee7118624bb8be1e"],["/tags/用户信息/index.html","b93b681291a2256f597c7ab40d25d0bf"],["/tags/电器/index.html","f0bd858ded7a1a38992c1d4682c25380"],["/tags/疫情/index.html","bf6876b3596ae8c0102a5d49d5d760ec"],["/tags/白嫖/index.html","8dfb0880871a7d699f7226a00b829b29"],["/tags/百度/index.html","f713eff2c6ce20ea7abb2b7b64c9f826"],["/tags/看板娘/index.html","9335b0adb0bd08f09a3fe8fe5d7bea6e"],["/tags/破解/index.html","c1d7d58658706f90ac682aace6b754e2"],["/tags/神器/index.html","be6739eed0ac3a1857a7c9a6a8ac6ce6"],["/tags/私人/index.html","1a68edcbec264ff044efa9be4c1f31f8"],["/tags/私有云/index.html","165d763521c15f5e28682be4e5ffc763"],["/tags/科学上网/index.html","6d35a8683a99a0aa1989db8310a53f83"],["/tags/站长必备/index.html","04b383bf0e6a4c172d89fd9da96eec96"],["/tags/等待/index.html","265ade6c4d965f1bd673382735507de8"],["/tags/精简/index.html","80da3e488410f11b0f256bcd5d57a549"],["/tags/素描/index.html","d0a1f5aa855dc1bfef1d4b4ea6c02c84"],["/tags/编程/index.html","532e015b6207b21918b3f0aa7afc851a"],["/tags/编辑/index.html","fb65913aba74b2164437bcafbc2850f6"],["/tags/网盘/index.html","c9141c32574004bef6521b5ba1ecda73"],["/tags/网站/index.html","76a4c0273a240bbd518f4639d05032e1"],["/tags/网络/index.html","e7d93bd630d0068bcb6e1ea5a22dd265"],["/tags/美化/index.html","67a63a4c33eaa5cdc6cb20b3682fab06"],["/tags/美图/index.html","a41a16edafc1824911c826eb2d50fdca"],["/tags/脚本/index.html","bba1cfcd3c56b1e3a0dda67dce0ed18e"],["/tags/致歉/index.html","3b9d7d4610d488f07edb665a1b2c7e78"],["/tags/萌哒哒/index.html","65a4b1a4ff087e26820f7894d2209dc0"],["/tags/萌娘百科/index.html","d8b1e9d259848e5ea803a0b482b91136"],["/tags/萌萌哒/index.html","d398e8cabf52b757517b09d698326ca5"],["/tags/解析/index.html","1a972dcb6144d81bba9cbb39acc26cf0"],["/tags/评论/index.html","04286d606d4985aa7eb7050a7eccaa0c"],["/tags/评论系统/index.html","acf43902f165c7b8b6751f9ef7617fd2"],["/tags/语法/index.html","9445ea65c441942423de3165959e5f94"],["/tags/谷雨解字/index.html","d38b5f08fb452afc695a2a867e5ff63d"],["/tags/赚钱/index.html","2ec1713273b9c1fb33c96afae1a189b3"],["/tags/踩坑/index.html","3b53212535fc8a3c1052cdbf19908735"],["/tags/软件/index.html","beaec88fd68ec38144783e8461180696"],["/tags/辱华/index.html","e99b24102e817ef69bbc99afeb9a843b"],["/tags/迁址/index.html","5f9ec7b61fba19f4aca0bc663c612c78"],["/tags/速度/index.html","4c9730099e4c75c75b5821ce58a1e5ee"],["/tags/错误/index.html","0d355daaa0e0554e3fb028909acbff9c"],["/tags/阉割/index.html","52d2e4aa417af950bdb6d74895af6063"],["/tags/阴文/index.html","f4aa49fe02c7d823e88eb7893d387741"],["/tags/音乐/index.html","798bb4accbeb6597ee2a3d863868e44b"],["/tags/题目/index.html","bbd74f3bd74555fc2bbdf5580ebea98e"],["/tags/黑科技/index.html","9eceb43e3ca9f4c5cda84301c78a9f03"],["/捐款吧/index.html","41bb6e1b4eae145c992f4ebd354df95d"],["/随口胡说/index.html","51c664e1efc4132572784114058af794"]];
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









/* eslint-enable */
