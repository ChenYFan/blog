/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","12733430bf90688c3e7636b5ed0793b6"],["/2019/07/17/巧妙去除百度首页广告/index.html","9e60634f180a4eb1a95a2f0dbfa999a1"],["/2019/07/19/国内加快NPM下载速度/index.html","f22cf36b45bb55a6edaed99390d01593"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","84e24b103e266a0786566b71f782c1e4"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","75178257dbbd838762ce2cf1ff28f667"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","8cf87f8b18200a2e58e24bfddda704de"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","0cee4c4a9372484b1f11ad026ccaa22d"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","a5d23821a136ef7e20c28df539cfc671"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","561e6c2fd7ef509b8dd6f5cbdf5c7720"],["/2019/07/28/【公告】关于宕机/index.html","0bd88e2ab463b080db8bc5d55253dfbb"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","9c185fa8f132b243f2fa36dafc84a261"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","0fa8852ae2a249fd08eee3a887f9fd51"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","0f4465ae0e3a1c55d7eaed9e7472c131"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","62f0154f75f9b19aac8072560bb0ee80"],["/2019/08/08/每日bing美图获取/index.html","d19c704e1a5a596d7b4ab3ffc57ca04f"],["/2019/08/13/User-Agent野史/index.html","6c69a60e15cc0561f0a1cef348d23fd2"],["/2019/08/14/【公告】博客多域名/index.html","4035fdced7aa1750ee2e9f6b92e75244"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","bca924b2bf7ee6118f9e2ec00001d540"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","20537723441626223258c04342b56ac9"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","48eab6e843b994e0a381606f2ffd8c03"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","a45cc477740c6810d3e359b51e675ebf"],["/2019/09/14/来，破解版的Google访问助手/index.html","7b65d8be33ee579b54171a30c18e5788"],["/2020/01/20/回归啦！这是见面礼/index.html","7f3c33676189d498a9126320fc122871"],["/2020/01/24/我们一起解题目吧/index.html","5fac7065a3a78ad4d2e98a9ee8b7cc57"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","66967b6ef4c5721429adc507ab59d978"],["/2020/02/26/Gitalk详细踩坑记录/index.html","5fba1c9e255cc301e8875e115d94f2bb"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","a2826006c6d2787f849a6f0e623154cc"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","c6b96393127ef9c50baabbb63a750c49"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","c0a84854b8b82c0b963fbd76bd236e97"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","5638d5e5494e3bea8977c583a4ee3018"],["/2020/03/12/白菜价域名的问题/index.html","4bd083fcb309e773bb9b273f2920b3d3"],["/2020/03/13/工具箱和私有云恢复！/index.html","e26395d58790edde0719890892e53f2e"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","ea28572d9a3aaf9b902a1ee77508ecde"],["/2020/03/16/浅谈什么是好软件（1）/index.html","123db129759dc088626c78014173a440"],["/2020/03/17/一次愉快的更换域名经历/index.html","f9a01cfc42213e7a349b4d006ab1e384"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","818a7d8f4297ca57b20b20b7b80bd12e"],["/2020/03/19/如何-CloudFlare-Warp/index.html","dff273c8d0bba8b9b37549c7542bb6cc"],["/2020/03/20/一次糟糕的换主题过程/index.html","75a09c7475e17fc3e6ca1f75da17e578"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","36fa9c7639168901485ed5beb0b6bde5"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","d19b8cfb0f5e2a43bc6f5a8890c00bd7"],["/2020/03/22/回形针-真的辱华了吗/index.html","02b4af8b45c8ccfcf2d7291e3ed00ce5"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","117b693312a1564b068569e7a2e6dccf"],["/2020/03/25/天体运动/index.html","0ca51d37ebaafa3bfd2e6f317184219b"],["/2020/03/26/一次“修”冰箱的经历/index.html","19f53aff92ec3659014b3ff88b4f0ed8"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","cab155df770d99a5eba1d71653e760ac"],["/2020/03/29/PHPnow/index.html","be0c91509619487be7a7294808688ec0"],["/2020/04/02/AVorBV/index.html","8acdf5d3a39007caa75e15af26fedc75"],["/2020/04/04/2020QM/index.html","faeb90b3eb4330ebf89a131d4a467b4a"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","a7b9775cf008fe956aa244d1e2bcf92d"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","67a12192d048498af84953eecb713723"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","0f057e0153a76540a01e11e530b5dbd9"],["/2020/05/30/What-I-Do-2020-04-05/index.html","a7af72f375ac94a6e1f0d7387f5e7ad0"],["/2020/06/07/Blog-sChanges/index.html","06df44a8064171dc2d5280a062e64899"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","35717814860aa8a626a4813e63ce9521"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","31d492fbbf4f7809ead101df251ff407"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","e6862dbea367128fc70b5208a5d913c6"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","6878947b5ef26a1931c3fe3f54d64fe1"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","376ddd6d2f2f23b626e8fea4c67b6725"],["/9999/12/31/博客暂更预警/index.html","0d2c15fef7487f3bfcf764799bbe44a4"],["/about/ads.html","d7da19089eae5a6624900648eaff1b27"],["/about/index.html","5a74355db4407d9f543b80bc49910437"],["/archives/2019/07/index.html","440ce2a6002b5740c64d9f07700ae71f"],["/archives/2019/08/index.html","2b196a4a8cc33a29fe9e78fd095e7f0f"],["/archives/2019/09/index.html","4113fed920f6feb192880c77b794e740"],["/archives/2019/index.html","fb149374448ee0b613afd62a34292442"],["/archives/2019/page/2/index.html","de461e548d92fa5e239f88ee3204c64c"],["/archives/2019/page/3/index.html","9872bc8a846af94c03f7e9219698a2d1"],["/archives/2020/01/index.html","135daa5c2ef7892eb126a8f95821754b"],["/archives/2020/02/index.html","e47e380f9a56858c28a191568dcaf7f1"],["/archives/2020/03/index.html","b442c190cd489d7ea3b7441cac3f6710"],["/archives/2020/03/page/2/index.html","8dfae71ee6d2d9baeb54fab03f56b353"],["/archives/2020/04/index.html","1fcd548228384e0b867ffebbe2310126"],["/archives/2020/05/index.html","d70f3ff5f8a4dcb4ecfbbd1bc67bd333"],["/archives/2020/06/index.html","b44b840219b8ab9b603b4424c099becf"],["/archives/2020/07/index.html","36312fbc624d8b0804aace6583826153"],["/archives/2020/index.html","a4a5929d11f212054575d1939495b422"],["/archives/2020/page/2/index.html","011a8e864d30685b3315fd83527083d1"],["/archives/2020/page/3/index.html","62eed7816b9b099dab2b0e91f37d2b87"],["/archives/2020/page/4/index.html","1dc19ca0829d66d89671994c82f94a46"],["/archives/index.html","52b8c845b871caed7dc3c8719cc14841"],["/archives/page/2/index.html","b312df33e114ab35068459b48c6f74b4"],["/archives/page/3/index.html","6f1644ccff879336d4bb55dd7d6efd0f"],["/archives/page/4/index.html","09306edc32d970216a2accd28da55ed8"],["/archives/page/5/index.html","182f11c86702e6a8b4e977af264ca510"],["/archives/page/6/index.html","4c6b287776ba7dc97746028e6a90ae19"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","392bdb5c2b536b2b4a6a85944a80022b"],["/categories/丆插件/index.html","a47827e72e352b6510fa805f798fa756"],["/categories/又双叒叕是水文/index.html","1e3c2aa6484bd1f2d0c251f695513145"],["/categories/好方法/index.html","085856171325dd2231bbcc4e6d6f73e8"],["/categories/好方法/page/2/index.html","33484dd84e16a9bdfcdf040ee99d6e8c"],["/categories/屌代码/index.html","f693881b2e8e61f6a19a7087b590d46c"],["/categories/干问题/index.html","cc2fd64de39fcd2bdd66666ce5a33993"],["/categories/撸羊毛/index.html","5a098da555b7e54fe5c2f4c6c0853582"],["/categories/有故事/index.html","59942c700e233e65195a353d0720de25"],["/categories/爱分享/index.html","24a54df5995f9a9edc719efa413f093d"],["/categories/爱学习/index.html","98bf7599936253e2561c5fc9ec5b6232"],["/categories/爱学习/物理/index.html","95d6933fcb5a1e7432f6851989829268"],["/categories/爱折腾/index.html","91eb2c1d3fc6f2de56d0914bd396a375"],["/categories/瞎扯淡/index.html","c348d8a14406963ca7686a744ba4ddc9"],["/categories/繡软件/index.html","72729be2996c772e9275629e2ec9eb79"],["/categories/要公告/index.html","b4a8284c16e1008d3643c3f52f6799af"],["/categories/随心记/index.html","210ff2d96ea2e72ef9bc045951c9e79b"],["/css/gitalk.css","de4859bff472da75c7e57cacaad68b35"],["/css/main.css","2093b35bc8356c06ef9b16a911dd3cc6"],["/css/matery.css","cc7aea05b403278cf3f9470470169523"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","7c1c57b931a5fa849e17760b69a87a82"],["/js/copyright.js","2f44332d3199de8d97ece4ef4e5df32c"],["/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["/js/fire.js","53daa1039bfdfec4415ce83ca9e7e31b"],["/js/gitalk.min.js","251a1f977bb7733e584390a01ceceb97"],["/js/index.js","140e3f6be2a04ac4ba558a6c65636f4a"],["/js/lazyload.js","1fa470189608a5e4110e56169cecb0d0"],["/js/local-search.js","e9093657a10085d74435b313a4b8c557"],["/js/main.js","fc0c3bcbdfa6c63971922742a575c803"],["/js/md5.min.js","91d98ebf28303805138cc0e2566037b3"],["/lib/prettify/github-v2.min.css","7e0f0e29f43c395a37af8560b1362285"],["/lib/prettify/tomorrow-night-eighties.min.css","5999a3c1bf9481a6becd57fda4363418"],["/lib/prettify/tomorrow-night.min.css","4ae1cca7f04218d26c0d1f99c931c4cf"],["/lib/prettify/tomorrow.min.css","7a3fed42c8fc5d2772544f339bd504ab"],["/links/index.html","63c69a2f1fbc16d258ce8bc2de41350b"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","f17e36362305e785341d92a9b6cd46fe"],["/page/3/index.html","b3ac6e434537bd9d9c6da090a67095ac"],["/page/4/index.html","8bf7eb5d68d13698cbf50a0c6b4138e7"],["/page/5/index.html","588fc456fb29a1a604e2ba58b85c9d4b"],["/page/6/index.html","ffe266fa6742cb1d2c396f1f86fd7473"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","f76fa265fba3a45217aa14898ea8a3c6"],["/tags/000webhost/index.html","23e277facc03dbc41e3c0bc46aaa73a7"],["/tags/API/index.html","5fb15f925ede72406471eaf7d55f7133"],["/tags/AV/index.html","e9de892781c26176eb4648f9f9dce797"],["/tags/Adobe/index.html","82911e833702dbc9fe3d53ebf1ccaf41"],["/tags/Adsense/index.html","522bf7989619e19dad6ece511edab696"],["/tags/BV/index.html","983490b80b7b909dcd6632893acaaef5"],["/tags/Bilibili/index.html","091c20ba6c486f17363dcc9f51428553"],["/tags/Bing/index.html","8443534a35071cd0c93bdc92dd007477"],["/tags/C/index.html","73c0fec0fd4cba2483471a471fde7bf5"],["/tags/CDN/index.html","b302008363b08cf1c60e4cf30bfa6af6"],["/tags/COS/index.html","dc00ee9d364b8ce7974deb444075b59a"],["/tags/Chrome/index.html","d8b148b612d7de3826c524de2226dec4"],["/tags/CloudFlare/index.html","7c18bea14e5911d0d7b50a574d18b364"],["/tags/DNS/index.html","ea5ae78ca7f719f721fae5db625464e9"],["/tags/Diaspora/index.html","4620e915325ba5709189c0fbc1d793a2"],["/tags/Gitalk/index.html","954fa67f21ed2766a3c04bcaf22c7696"],["/tags/Github/index.html","3b60aadd8d22c3a0a16d1d0c9c230fb1"],["/tags/Google/index.html","1300f3dc4baa24c0ab1d70bb7d42f63d"],["/tags/GoogleDrive/index.html","5285e3c4c5f87f51183f28704d5310c7"],["/tags/GooseDesktop/index.html","06014ef0ed89ee0fe82fbe28f5365258"],["/tags/Heroku/index.html","12c190eb079f9931e93faad9e8fb125e"],["/tags/Hexo/index.html","fa64d9ed49872466f6996109168d03e2"],["/tags/IP/index.html","be21c1c13f05fbc1539441c8bd7c9d18"],["/tags/IPFS/index.html","b1c65a0c906888558a0dd24b5e4ebfde"],["/tags/JavaScript/index.html","a7d55a6587bd13cdb56d85685bb246ad"],["/tags/LazyLoad/index.html","a271d6eacda6d9e89b22e4e9fd37d3a0"],["/tags/Live2D/index.html","ab8410a0525ba2f0e20bc59ca96abdc7"],["/tags/MarkDown/index.html","ca691b58931a4416c599ea6aea51ffbb"],["/tags/NPM/index.html","d2ac7e947867e078fd6d1b89041be3b1"],["/tags/NexT/index.html","14b5ac6a2dcbf702f7297681c99a4100"],["/tags/Node-js/index.html","784b5b84b7b053b39dee2affbf86d3d9"],["/tags/PHP/index.html","ee373ba896bafbe595b417941774a6e6"],["/tags/PanDownload/index.html","8a1286d6589d31d845e6acb2cfdad44c"],["/tags/Repository/index.html","a877780498f9a2440b35474588b65bd8"],["/tags/SS/index.html","be9f83ae2314e473662c313dc76cd341"],["/tags/SSL/index.html","5531f58c909bb4630b9eb977dc3893e3"],["/tags/TLS/index.html","95966c279136e4a54169d8cf1115b9b2"],["/tags/Tampermonkey/index.html","ed0302d8ee24de3709847a7036e0bc18"],["/tags/Travis-CI/index.html","600eeec01739eb8ff5b1adf44830812c"],["/tags/User-Agent/index.html","85cb2ed3d223b0287202d374d37f4157"],["/tags/Valine/index.html","93f65ff56b76433845d8460467293fad"],["/tags/Warp/index.html","0dd3d5e0ef093c2b757db76529deebcd"],["/tags/Windows/index.html","b9d1d0c86dd05cf37dfff2c93d09e22d"],["/tags/Workers/index.html","86636236027005b58a790ba3a194e210"],["/tags/css/index.html","0e1c11b1d26c975f81b730db75d57fee"],["/tags/index.html","beb305f6a4455c578af11a627e288138"],["/tags/ipv6/index.html","b8ebf1bd815f1f72d8bb03dcf2914d0a"],["/tags/下载/index.html","f421f37438960117ff8c7534b12b495b"],["/tags/主题/index.html","3bb7874e72e14761ab57b217f8289919"],["/tags/京东/index.html","5247d96b0e0f93b0afeb6d6f43c2b17d"],["/tags/人机验证/index.html","338d12cb269ceb888f331ebff4892085"],["/tags/代理/index.html","5592f454cfa6ea6b2c1662a1a57f3fa4"],["/tags/优良/index.html","1c2d30e9e7d3537bae816fbfb02e1ce7"],["/tags/便宜/index.html","7565a40fd7553154d42d57cc245afeb7"],["/tags/修理/index.html","2d67d5d3d863f6cf86d1ff3131f3c1ca"],["/tags/免流/index.html","fecbc58868cc0954c1324bed4cc21f0e"],["/tags/免费/index.html","2740333d4f82c3baa9e33465759224d4"],["/tags/全家桶/index.html","49459d61be5953cd2f2918137a693810"],["/tags/公告/index.html","8b0771c19791a5e559bf73da8f1166db"],["/tags/关键字/index.html","7c2cc74bcd8ee4f3d5fc651bfcb38932"],["/tags/冰箱/index.html","162dbe3badd86a5fd2089b581439c599"],["/tags/加载/index.html","1db6d23a3e738dcb349d1053080a935f"],["/tags/动手实践/index.html","0dd3d400287588b8f96f57e561deecce"],["/tags/劫持/index.html","6e6d89eb4ec282dfdaafa9a277361fe6"],["/tags/历史/index.html","63619f8820e9cd7f81763b528f9cb0a4"],["/tags/压缩软件/index.html","4bf102974aa0e5b03e937dc9e3786073"],["/tags/台湾/index.html","23b03bce5591c1edd46502feb6d87162"],["/tags/回形针/index.html","2a295799d9eb86ba0bcb02361a07055f"],["/tags/国家/index.html","c778628b1819ddab45f035d7e164072e"],["/tags/图床/index.html","fd166179c95daf7ece8a89df3ddc5feb"],["/tags/图片/index.html","2a6e2ec93a5da0465b5d9ae773247ecd"],["/tags/在线更新/index.html","cfc2950f3caec157b5188f0f5e1b3e06"],["/tags/域名/index.html","803b7f68f4225b7d4821f0e6ee1d6f44"],["/tags/填色/index.html","854f744ef4040a8131d040f7f308733e"],["/tags/壁纸/index.html","6478bdda7688e76357865fa2bfadc5a6"],["/tags/天体运动/index.html","df2ef22bcbfac379eeb913910f7be448"],["/tags/头像/index.html","0a0a210d92edd1704e36b923bbd88ce1"],["/tags/奇淫巧技/index.html","3f10f5efe5ca28280bce68ba355d4678"],["/tags/奇淫巧计/index.html","4a3c0332072ab11f39e580fae1f41717"],["/tags/字体/index.html","1470bd2aabd9ffada3a7b82f005653b8"],["/tags/学习/index.html","352fe47605154b2fd650d26296b927e9"],["/tags/安全/index.html","9d052b1f85c46289d033b97d5566c0cd"],["/tags/宕机/index.html","1720dcba11677b7ba32567bf47fe881f"],["/tags/实践/index.html","ca850d27cbf26683f593e363d9ecf76a"],["/tags/宠物/index.html","8361989de133fb805dac19edb0ae8a00"],["/tags/寒蝉/index.html","f380630adfc72e2c93ced3fc2a7c5da2"],["/tags/对象存储/index.html","087de48219d6660c12854f9fea223f8f"],["/tags/工具箱/index.html","961d826591ed7ae9e06dc5891caedb22"],["/tags/干货/index.html","55d8948a159e1f02acae37901d06ef19"],["/tags/年度/index.html","1a6e726507d57a519ff6d379e4161779"],["/tags/广告/index.html","4ed61c55f42c95cb8c768cb9fd5e84e5"],["/tags/总结/index.html","08101d8ba19ea7d4ec92e40116233576"],["/tags/恢复/index.html","2ff8100bf6e31a39e49e572c319de94b"],["/tags/悼念/index.html","036c534da9152c434c8728304e93dd3a"],["/tags/悼文/index.html","230cbc37f9fcc163e50be2d2821d9000"],["/tags/手动填坑/index.html","9eb34f1d567c9cb8d389080c3ac09680"],["/tags/插件/index.html","5fe6f6df3bd92112a46c669ca41dce48"],["/tags/撸羊毛/index.html","0c3962749fc986afeeb609c694fe09a3"],["/tags/无限制/index.html","b42421ab032ba887f8199c6a43db6fe6"],["/tags/日常/index.html","9d41ebee3cc937e46838ea8c3d3aef35"],["/tags/更换/index.html","30e7a22538b43dae0bb818bcc70531ce"],["/tags/标签页/index.html","324e3bace46c32c640c2dfe27fd9a313"],["/tags/桌面/index.html","0ee67cf5f54e9b15c4d0391c1a2added"],["/tags/流氓/index.html","58f1bb581c2f00ef53383d8eaa2793f0"],["/tags/浏览器/index.html","8e6b32c5f9fd6f9d44a69e7a5d1697a9"],["/tags/版权/index.html","170b9b6af85939fed1dadbff4f19c298"],["/tags/物理/index.html","3b8c2f0e10d2af16cbe3f1f01e97211f"],["/tags/特效/index.html","a6cd123a31831b0784446c354a0db98b"],["/tags/用户信息/index.html","5ca67ea6d9b98e5afd81591ea70bff2d"],["/tags/电器/index.html","a8697e9438d6952b4929c7020c3045f1"],["/tags/疫情/index.html","815333ca1bd72f8b213b746b082d3741"],["/tags/白嫖/index.html","7211fc03f0e13a8001a0d83a0931f04f"],["/tags/百度/index.html","6854af7d126bb5528e66a2f5be028f03"],["/tags/看板娘/index.html","ac05dcc2b9240ed48b032cd4e347c2ca"],["/tags/破解/index.html","63fd8f97b8e16f457017b670026651c6"],["/tags/神器/index.html","3d87ac2aebb30a2acb2b0138a4210437"],["/tags/私人/index.html","503a733ab5f40c39949e26d6dc1e5915"],["/tags/私有云/index.html","1f4389862851937a75c171ecdeffcffd"],["/tags/科学上网/index.html","65193392431546d3b50243b2f4fb6f99"],["/tags/站长必备/index.html","3388a88bf66003431aa61842a689518e"],["/tags/等待/index.html","a681e12b887e6323e8a6ce7b7f8bbccf"],["/tags/精简/index.html","a2f1b9e2b147134e40dbb275d738268c"],["/tags/素描/index.html","1b77ad9515bffd7186cbb91442f8c8ad"],["/tags/编程/index.html","eee73b8691a1d4a8334066eab8651bcb"],["/tags/编辑/index.html","c19ceccbd264735d2230edb9685dd3e6"],["/tags/网盘/index.html","d4909547a6b00ebe75957993a07e2594"],["/tags/网站/index.html","c65cc9ca045c5106317383c909026059"],["/tags/网络/index.html","2fa1e07369b3757a8109984192c8a827"],["/tags/美化/index.html","f73edf1206f6a147aa060124fe770626"],["/tags/美图/index.html","d0d6435028fc638ba64a0aa4baf84b6b"],["/tags/脚本/index.html","c65e47b681918018e7a92fff804fd403"],["/tags/致歉/index.html","74ef9cd94e4287b3f63cdb5fa5107609"],["/tags/萌哒哒/index.html","ddd991bcc32b5fa4582bb2c8097f3774"],["/tags/萌娘百科/index.html","6ff998f9ff49df22c4784dbcb2d12960"],["/tags/萌萌哒/index.html","c36432a27d40111e855177f09acb4d11"],["/tags/解析/index.html","92fd1f3c81009ea75df8473aa915f266"],["/tags/评论/index.html","00a2bbd5a37d0fadabaa5fdc7f80da2a"],["/tags/评论系统/index.html","37174d174a263d28c88f2c8d6f40b135"],["/tags/语法/index.html","68cf3f60edd1d4f356fd26f857591c72"],["/tags/谷雨解字/index.html","da5ee84c278b6650dabfbfb56324a261"],["/tags/赚钱/index.html","74c12fe6f5810618b6d0551a09d9c589"],["/tags/踩坑/index.html","be021ea2dedfdb73cc50c2c832bd11f0"],["/tags/软件/index.html","917eb3af972577cbcaf517844e13cb68"],["/tags/辱华/index.html","1ffc71678a46fcc12550f88ae1e907ea"],["/tags/迁址/index.html","f11a6be286347830727b3d35fa0ae6c7"],["/tags/速度/index.html","f5d14c6db0cfdf23c1a7a82ec909760c"],["/tags/错误/index.html","e3a631172e40116b1b1fc31d2e409b18"],["/tags/阉割/index.html","cf236a61bcf3696fe901746f7628caae"],["/tags/阴文/index.html","5cf08b5e7b18bb792c5f15aff5533905"],["/tags/音乐/index.html","2c630bf3f8d90e3d27db22cf63b1e867"],["/tags/题目/index.html","6468b43a86b5896ff49b9dbe9deca75b"],["/tags/黑科技/index.html","cdd9eb9a709a93897067e65583e68893"],["/捐款吧/index.html","0022436446a9abf7270593412eb04606"],["/随口胡说/index.html","17334379530cc583e6e9714da54a3075"]];
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
