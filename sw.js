/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","fcab25f507110d087318d92d2b4f70da"],["/2019/07/17/巧妙去除百度首页广告/index.html","c5ac842f6afb738b4384288419770f8a"],["/2019/07/19/国内加快NPM下载速度/index.html","94538c93db9973e62d1514be471fdab1"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","81c06d6221431d49f7f58f7a493a6bbc"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","8594e1ff1222cb04ed7f3095a58e3576"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","61132ed27a9d47180bd04f778fc85dde"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","94a220465da31e649e8d61958853d0c9"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","3b4c57f5409c32555e81b5a7ab45970e"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","dd2bb5d8f0a51267a63d4b1f284ce2e5"],["/2019/07/28/【公告】关于宕机/index.html","03854625c640f67e1704b36885e745d3"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","3e2dbaf385bb5a1b26dca6af917f2bc7"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","c69e57ff8232f285a4ea200206879e69"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","d19e40a9155d47cb869aa22f15db5a0e"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","4b88d37d59dbed883d3e66697c794b2b"],["/2019/08/08/每日bing美图获取/index.html","4ed65d6924dac1a4923f23ce7fd77b48"],["/2019/08/13/User-Agent野史/index.html","e700b31c599e069957bc056954429663"],["/2019/08/14/【公告】博客多域名/index.html","19c65771db2709d5434b83c014ce88fa"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","b6cdedb57687575750e165af64464aaf"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","b7fbcaa883a421b7fc9f43738bb414e2"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","5c37d313ab2491f760915c4155895045"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","3757f6f81731a36b7d29667be54c2802"],["/2019/09/14/来，破解版的Google访问助手/index.html","2cc7d85acf77de6eb183f4e02145ef81"],["/2020/01/20/回归啦！这是见面礼/index.html","7985b2c49d17bde21ec7bc3a57219605"],["/2020/01/24/我们一起解题目吧/index.html","8a86b4caa070299326e3aa6e54efba2b"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","4911e4ea2ac52600184d8f279be30001"],["/2020/02/26/Gitalk详细踩坑记录/index.html","01191214159e0595a67d90942d4aa63c"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","b28778d88b2287ad3f70b4eb5c69e2fe"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","2ccca14807f8c9c3bb5e6c345a147eb6"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","296c762e64fb06a72edaef18f7b2b9e1"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","f1aac348bc941cea70d0fa3187d3c5bb"],["/2020/03/12/白菜价域名的问题/index.html","cadef9d322ae11ba18deb49aee96e437"],["/2020/03/13/工具箱和私有云恢复！/index.html","ba42e57a5c7cf98eb71e66ab43e09c27"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","6f53880c401f11edf6ddb5aaac51f60b"],["/2020/03/16/浅谈什么是好软件（1）/index.html","4528da0f649aa42ec2c394427756f11e"],["/2020/03/17/一次愉快的更换域名经历/index.html","ff4df3df5548c32b29e2c02f8944632d"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","d22bae7e043e56b75ded8c34ebb6f018"],["/2020/03/19/如何-CloudFlare-Warp/index.html","b48f5a4692fd69064a290ccb2624b262"],["/2020/03/20/一次糟糕的换主题过程/index.html","f35ae54536b84e02ec734326fac1292d"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","a8f8f660491eabf2021b8776795d6109"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","52f07490bf1aca82c038dc6aa2dd3d77"],["/2020/03/22/回形针-真的辱华了吗/index.html","6e611f52977bbaeea725c2dbb082c5df"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","de221acc71e9cd20c315287081c4d64e"],["/2020/03/25/天体运动/index.html","1e7ed6f122d6d535ed14ca2953319ed5"],["/2020/03/26/一次“修”冰箱的经历/index.html","a0d74f3b5c83d82567e2de291e128f06"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","242ca341bb39fe825d1920a657425b59"],["/2020/03/29/PHPnow/index.html","d51f5761985b23aa69c4c9f2f0f26b7e"],["/2020/04/02/AVorBV/index.html","21c145e0409c6f732b5926c4eef77e18"],["/2020/04/04/2020QM/index.html","19c4db517dcb4cc9cf576a760d73fff9"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","c127c21c4be01bef7c09049b88638874"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","be7599953a1d9e15ea297a54acacce4d"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","1ad3537b37a64ca588c58742c776ba30"],["/2020/05/30/What-I-Do-2020-04-05/index.html","b076b04b41c082db9fdf4a93c79057bf"],["/2020/06/07/Blog-sChanges/index.html","75bd0e7f7f31809d3aed64cf98197535"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","5685834a5d94b03edf60a50fe4cf7648"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","9f2de9dba485f834a20680d072e14433"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","33f11a9ac0224a9c3d8ac2f16091cfe0"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","f6de2933103caba2756cee542e1953a3"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","10239233030d886ee972bb52dee214de"],["/9999/12/31/博客暂更预警/index.html","76b89eac9ac24f3f3157a6cc4e1480a4"],["/about/ads.html","2bb751d1f29b1250f42903bf148bc877"],["/about/index.html","78bfa5b3de8cdd27d9597bece2439ab7"],["/archives/2019/07/index.html","04ef8dd94d469e676f0b4237ca9fa8eb"],["/archives/2019/08/index.html","3537e8713e8bb5c1647b3eb9f6401d93"],["/archives/2019/09/index.html","04b694fb5c53c25a9cbf1f4dc5fde3d4"],["/archives/2019/index.html","c13a038c02f545bfaf93dfb520425a7a"],["/archives/2019/page/2/index.html","0e767a5780171ec05b14c4594475f5ec"],["/archives/2019/page/3/index.html","67735265e1e52543d252d7e3d4be97db"],["/archives/2020/01/index.html","75ee1bfe8c7fc02165d71ee508df582e"],["/archives/2020/02/index.html","18d7092735e8475456f9f92aec069c39"],["/archives/2020/03/index.html","8d2ed56edb42e054d64deb82e953c361"],["/archives/2020/03/page/2/index.html","be36c32289bf72745774525b72f90c18"],["/archives/2020/04/index.html","1629858d99507a8eba3c410033c6ccc0"],["/archives/2020/05/index.html","b9ec6aba88627868a396e4f5c369286e"],["/archives/2020/06/index.html","de1f62f1e7eb9ac169df7c79e6f90545"],["/archives/2020/07/index.html","03d0ae93569f4424c6d9d9ff9a105ef6"],["/archives/2020/index.html","71deb1a6576c4d6209760959c35b07f5"],["/archives/2020/page/2/index.html","6963026b13edce87aef3a6e20c1af4e4"],["/archives/2020/page/3/index.html","05c6e56d8a89da0329bd1e7dabb7ab9f"],["/archives/2020/page/4/index.html","399440fc5f6a024d58fcce3bee3ff362"],["/archives/index.html","df6b778dfb17f8262db1dd07750da521"],["/archives/page/2/index.html","dddde57458d274b9cdd7bba6f143f733"],["/archives/page/3/index.html","45b6c9d0833d3a76b1383b824d1e57a7"],["/archives/page/4/index.html","5319c48dd3be2adf8cc689888996bedb"],["/archives/page/5/index.html","916ebec3d9b8268c43d731e60ea85383"],["/archives/page/6/index.html","5bdb48ae02b119f0c3ee95c27e8227c6"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","e0b2922f390f84535eed20e35cea5841"],["/categories/丆插件/index.html","a8f6f3759ac7c17b49d2e545fe4224af"],["/categories/又双叒叕是水文/index.html","f77babd53d55d058a581b05de6326b2a"],["/categories/好方法/index.html","0c4c0f63b903cc111d6e1d2713a4cf1f"],["/categories/好方法/page/2/index.html","a1015e452c98bf512b1af4e089787110"],["/categories/屌代码/index.html","4b19ec52028e5c03d1c9f3052cf0c62e"],["/categories/干问题/index.html","f2bdb5492a63f2ce7f9554b62dc2cc55"],["/categories/撸羊毛/index.html","43121840c73eb7a260c6acd5590182e9"],["/categories/有故事/index.html","04d719831460a1c471692310094c4925"],["/categories/爱分享/index.html","a0d6637d2d751ad3361936d85f21d9f3"],["/categories/爱学习/index.html","6117f37a7749a06e4c83d33b8775989c"],["/categories/爱学习/物理/index.html","0e803aa84c1899171a5846801e27b217"],["/categories/爱折腾/index.html","a1e5288eafdb59e8d042b949c33985e9"],["/categories/瞎扯淡/index.html","b6bb2f556a04cdc043ccb2c673a27cd0"],["/categories/繡软件/index.html","6692bc0e363720bfc7bf2adeb91abc60"],["/categories/要公告/index.html","eb92db9c54c1631c2a6eb52c41ac72d5"],["/categories/随心记/index.html","857d7cae7af8ebc4b00b7b2c321c0bf2"],["/css/gitalk.css","de4859bff472da75c7e57cacaad68b35"],["/css/main.css","2093b35bc8356c06ef9b16a911dd3cc6"],["/css/matery.css","cc7aea05b403278cf3f9470470169523"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","da560b0d1e26aadbacf53a87b25a16eb"],["/js/copyright.js","2f44332d3199de8d97ece4ef4e5df32c"],["/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["/js/fire.js","53daa1039bfdfec4415ce83ca9e7e31b"],["/js/gitalk.min.js","251a1f977bb7733e584390a01ceceb97"],["/js/index.js","140e3f6be2a04ac4ba558a6c65636f4a"],["/js/lazyload.js","1fa470189608a5e4110e56169cecb0d0"],["/js/local-search.js","e9093657a10085d74435b313a4b8c557"],["/js/main.js","fc0c3bcbdfa6c63971922742a575c803"],["/js/md5.min.js","91d98ebf28303805138cc0e2566037b3"],["/lib/prettify/github-v2.min.css","7e0f0e29f43c395a37af8560b1362285"],["/lib/prettify/tomorrow-night-eighties.min.css","5999a3c1bf9481a6becd57fda4363418"],["/lib/prettify/tomorrow-night.min.css","4ae1cca7f04218d26c0d1f99c931c4cf"],["/lib/prettify/tomorrow.min.css","7a3fed42c8fc5d2772544f339bd504ab"],["/links/index.html","78e805e7ebfb8b8b00eb41b2596a68b7"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","7df9b8a79a52ecaec3ae8a9d78a91f46"],["/page/3/index.html","6457a9ad0f845788e8c6c9b2f626d35d"],["/page/4/index.html","f465aaf6903064ce04b004d5f5585cb2"],["/page/5/index.html","6a6c63da4076aec4efb82bffb3bfc005"],["/page/6/index.html","7e16d522d04c863a8be014e311a91c68"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","06e687b04a4eb22cf02a130e5d6d6616"],["/tags/000webhost/index.html","b594daa649ff6731ebf0d6851caea42f"],["/tags/API/index.html","a1e2958a20db4bd7b7968a4b1d7917ba"],["/tags/AV/index.html","a1b4a8506ce1012d5b1b448be93b7fb6"],["/tags/Adobe/index.html","23b985910c837e0810346fb105dacd06"],["/tags/Adsense/index.html","ff2d43a822f42c8baa0b73589069d8db"],["/tags/BV/index.html","e88732a387026f26cf08c3edea8ddad0"],["/tags/Bilibili/index.html","5e5cf6ddbde49a83744a33182303195b"],["/tags/Bing/index.html","facade8b3ea51ae5b253decc5a18f84d"],["/tags/C/index.html","2a45b91626ea0a955253ceb22c6d7e8e"],["/tags/CDN/index.html","9aa77dcbff67d4e7c9483ca8131ace1e"],["/tags/COS/index.html","1a557b9490ab30931b535840490e881c"],["/tags/Chrome/index.html","beecef5ef48cf8e882e39848df13b91c"],["/tags/CloudFlare/index.html","08d697a5896fec57f90bcd30ffa1de42"],["/tags/DNS/index.html","105bad416f8d0aadb24d2bcef2290fea"],["/tags/Diaspora/index.html","7280106d29c1acdd1009f7a47ea58c9c"],["/tags/Gitalk/index.html","02b7393c4bfdba6ac857f0e4f3321360"],["/tags/Github/index.html","f751d3adeecb7375e5428e6e7450e74d"],["/tags/Google/index.html","bcde23444175c2673efcc4e32f8f9459"],["/tags/GoogleDrive/index.html","58580c47ad1d5bbabae77342661cb350"],["/tags/GooseDesktop/index.html","f1eb232e4d10bea32b278030b80eba4b"],["/tags/Heroku/index.html","01bc4897904c47ab7b42f9ad06a7f743"],["/tags/Hexo/index.html","7c1d0b6bb624a07fc761e03ead2a5b83"],["/tags/IP/index.html","920504f51107c6bdb26030f57fdec27f"],["/tags/IPFS/index.html","55eb908e2d4a5ad1b3c2238412e76649"],["/tags/JavaScript/index.html","b3101c97fd67111f03ccd86d69e54288"],["/tags/LazyLoad/index.html","89140f3ff865372ce8a31dd2e2c0a1be"],["/tags/Live2D/index.html","1598e70c2eb485af2919b71f574b2553"],["/tags/MarkDown/index.html","863590b175b76fd2a0382582bb32e937"],["/tags/NPM/index.html","c37fbff868fa672960a7ba0b33895400"],["/tags/NexT/index.html","611f9109eb4afd610dd13f8656b14f5e"],["/tags/Node-js/index.html","e445bb926a6ee0b9dec445327989bcac"],["/tags/PHP/index.html","0528e2ae5013953a7dfb43f8cc5ee30c"],["/tags/PanDownload/index.html","d3ec25f9b7f0de0d5bac30cc5a935ccc"],["/tags/Repository/index.html","71229eea8f33416a763085363e2874c4"],["/tags/SS/index.html","c91a7960cd7e05d4c229780d9d310dd1"],["/tags/SSL/index.html","2ae73e9fe4c3be9f960726e726e60b8c"],["/tags/TLS/index.html","a2dfc5cdd83dc4174e1bb4f023feb795"],["/tags/Tampermonkey/index.html","91cece5c99a67265dbe71bf5b46ed9f0"],["/tags/Travis-CI/index.html","cbe3e2ab2e178b2ee56140849c39e487"],["/tags/User-Agent/index.html","72cf73927370ff8f2ea6c13335ad2be9"],["/tags/Valine/index.html","08012d4171920b03ea5c9058b8aeb23f"],["/tags/Warp/index.html","de41b6dd525cd7f7246d7fbbac97caa1"],["/tags/Windows/index.html","0add5d0c99883b225a83440723eef23e"],["/tags/Workers/index.html","19c7bfd3790c53d6a1ba7c0687eb7955"],["/tags/css/index.html","05ca396cffd12e55cc1695ea4b5bca71"],["/tags/index.html","fc637c7c6ff25becd9084013d5a1e516"],["/tags/ipv6/index.html","f2f2a3f62248f363f408d1cb67e1e496"],["/tags/下载/index.html","9874281c6eef8160475126abb3c13c9d"],["/tags/主题/index.html","033e8948055951961082bf5190d8411d"],["/tags/京东/index.html","b3692191c08f488dd790138780d1709b"],["/tags/人机验证/index.html","e4cbba4ead3d36c763dade3e371c591e"],["/tags/代理/index.html","520b3431045158129c3eb74984a38cdb"],["/tags/优良/index.html","bf4db4dc81e8cb865cfd053257add53e"],["/tags/便宜/index.html","5c1d5426b5836c2392d6a689536df936"],["/tags/修理/index.html","a9b20d13e60c6fe1a7cfe595c406d2c7"],["/tags/免流/index.html","e8f0abe4fd53cd52329404a297092ce9"],["/tags/免费/index.html","3fae8d2a7127246a63855a5a562bdf89"],["/tags/全家桶/index.html","381cb2ef0e7c20455ddd99742067d0a3"],["/tags/公告/index.html","3f7732092c47d9eef4d2c5cf8ce475d6"],["/tags/关键字/index.html","c976e64dd53bce6309b9a020beb3ca28"],["/tags/冰箱/index.html","d17162023bc2760fac6d5855308bd1b1"],["/tags/加载/index.html","8e473fbafc979feda00c52e869604b17"],["/tags/动手实践/index.html","00c497759b875f37b481c85455a181b1"],["/tags/劫持/index.html","9763b75d9a156f980f8e9414f3371fb2"],["/tags/历史/index.html","0b742cc7fee8117747e925d3f986a920"],["/tags/压缩软件/index.html","b76c096ccdec577783c410e28778c415"],["/tags/台湾/index.html","4c528644e228d5e85030e22ab7cb5b71"],["/tags/回形针/index.html","05dfb4e65fd37946224580b3fdd20b4e"],["/tags/国家/index.html","14d31bff2719343f87a6412422f15d9b"],["/tags/图床/index.html","cd014753f0a55c840e42c42198ad0da1"],["/tags/图片/index.html","eedd2862ca46c507c1d8edf097c2aaab"],["/tags/在线更新/index.html","4d528ca4952d6845f9212f5d08e60aab"],["/tags/域名/index.html","9401c14559dfc26e7fd5bf46f310d2dd"],["/tags/填色/index.html","5c9925ac94650ecb8f834f5700bf0f03"],["/tags/壁纸/index.html","12095f61f3434595d775d87cc176ab51"],["/tags/天体运动/index.html","56b454e66d205bbb329da54a7739daa6"],["/tags/头像/index.html","9c30eafa2ab0755f158a5dffc0fa79d3"],["/tags/奇淫巧技/index.html","f6d1b44fc783be7439a237a3aff6f7a2"],["/tags/奇淫巧计/index.html","21289fd32f2075ec2bb7410520e60210"],["/tags/字体/index.html","e20931a24062ff6ee0ac3bbb3668ea3d"],["/tags/学习/index.html","2f965b1b43ac496d166d365e0a3d7105"],["/tags/安全/index.html","dbe529f00bb6bca1a02d8bc3f6b7e6d0"],["/tags/宕机/index.html","1931a17576105f46497dfbf831ac7bf2"],["/tags/实践/index.html","d500c245ce8bb502b7d9b2f968129478"],["/tags/宠物/index.html","d7e186ea3097e5d05a299de9c0a31b78"],["/tags/寒蝉/index.html","01320d34f54a77e0ba1856a53eec45ef"],["/tags/对象存储/index.html","48bbc66bb7b687c50027cc2635e8d198"],["/tags/工具箱/index.html","6a95205572a48864d68bb2e229995fcf"],["/tags/干货/index.html","2023dd9c5e518376e34a9fa054464052"],["/tags/年度/index.html","3d71a9ee465d3428e05449a76f35d32b"],["/tags/广告/index.html","4c86686f7afb2b8aca12033b6d6bf1e1"],["/tags/总结/index.html","760c717546819e12935398d7dfa948ed"],["/tags/恢复/index.html","67a72fc8c14d107b4881d8c60b55f986"],["/tags/悼念/index.html","7dfce31c3ce1d444439dae14d3279b36"],["/tags/悼文/index.html","17655954cb6aa3dfcbda7fe5b6afce96"],["/tags/手动填坑/index.html","fcbf8645af938fd59afc5bd9180c6758"],["/tags/插件/index.html","8f42a94da98bd3ae02b5d55973f92b69"],["/tags/撸羊毛/index.html","9f7333784c1a78721f8228bc132459cf"],["/tags/无限制/index.html","3d47f75605731c6d46c891eb9e420225"],["/tags/日常/index.html","23fad2602576d2700e67e23a35015f65"],["/tags/更换/index.html","f077257cdc1c0b12397bc2eee832ff11"],["/tags/标签页/index.html","55bd99a4cf2db6e1fcdd3bf90eefea18"],["/tags/桌面/index.html","7bdb1dd0995d97d1b1b61a59b2204c6b"],["/tags/流氓/index.html","cbaeaeea825799f87f0196f1d2a2cf6f"],["/tags/浏览器/index.html","b8fdcd8079535aa4fcdaa0a299729099"],["/tags/版权/index.html","8eed6f5fccce17aa41b1f48ff29b8b9b"],["/tags/物理/index.html","edbdccd64710e232156ac584b7fddad5"],["/tags/特效/index.html","11dd05bca4d0f330fbf289499256b1fb"],["/tags/用户信息/index.html","a5f7c981f3b65f4bcff90589239a0e62"],["/tags/电器/index.html","b933dd3c54e1d59c4b8bc0ea4698a1fc"],["/tags/疫情/index.html","1e2fb999b3137b0a4ad3341ca0e5c66e"],["/tags/白嫖/index.html","a458ee9e19eab695b9f829fe8f3416d9"],["/tags/百度/index.html","9644e8b44b208dd0a91f8f8e99b9ed68"],["/tags/看板娘/index.html","41440f5c1d25b44a7be7bb6fefd12170"],["/tags/破解/index.html","b6ac1301b47ebd441f4a47ee7de11475"],["/tags/神器/index.html","c6abae8d7eea3a1eae7b31eb4e4539fe"],["/tags/私人/index.html","83171b3ddd35699970c58317ed278c10"],["/tags/私有云/index.html","1aa80eef6c36a8edacabd792b583199a"],["/tags/科学上网/index.html","e17a0e1b96a49aeb13c3e19e98950cb7"],["/tags/站长必备/index.html","bcad168bd2c4521ed8eefc95310d56d2"],["/tags/等待/index.html","dd67d613f54539faf8c30ec8a7c4d760"],["/tags/精简/index.html","13a63f6220b2e76aae31e5c2b1ae035f"],["/tags/素描/index.html","020f70298c048b7ff0f3701b942d7fe1"],["/tags/编程/index.html","c41cfa993fe02aa5d647cb35c13990f6"],["/tags/编辑/index.html","75b43b0b3761bda346e1af7381950913"],["/tags/网盘/index.html","38210d6fd7ae1fd89ecc7be92336da8e"],["/tags/网站/index.html","c906800cf504f143e795b454c41b920f"],["/tags/网络/index.html","24281f140a13c393f77d195b7876fe16"],["/tags/美化/index.html","f66365b54eced60b3e88e2653bab5d7a"],["/tags/美图/index.html","b208052759cad9ee0c5065df6bba5b73"],["/tags/脚本/index.html","0fda861bb2f60ce7f81147d2249c0529"],["/tags/致歉/index.html","43a55493d79f28ec46c4d74dd4486c6b"],["/tags/萌哒哒/index.html","08d898a062b1c459a422c7b741010d52"],["/tags/萌娘百科/index.html","4b59d89fdd20a7bcd3f0cf1934fc0c94"],["/tags/萌萌哒/index.html","b50f77cb12af76613ff225c2eee50f8b"],["/tags/解析/index.html","e79ef2c2fdef4b59de07296162a91d7f"],["/tags/评论/index.html","29a1571ab1501748e530f3df68bbbd1d"],["/tags/评论系统/index.html","4b043f15473e0ba089512f17a45747df"],["/tags/语法/index.html","9ddc46a32a86e3d20f14b1ce85cc18bc"],["/tags/谷雨解字/index.html","14d505b9d4db34f6d10b0d08960ed2cf"],["/tags/赚钱/index.html","659a1227c996a8821196e4dd3f65cb1b"],["/tags/踩坑/index.html","4a0c45c30cc27075ff20cdeaaed0ae5c"],["/tags/软件/index.html","b852eb41cb962f293e4258fdcf7550b7"],["/tags/辱华/index.html","379f49076f4cfc33f2ccbef39b8db8f9"],["/tags/迁址/index.html","cb3bf4d7624aa2bcb709fba2fd5bb849"],["/tags/速度/index.html","f20813743676f161c4b2cc12a917366c"],["/tags/错误/index.html","dfc3fa3110757397cbed2ba965784bee"],["/tags/阉割/index.html","1aaaca7e540aceea2bbe136fb78ac013"],["/tags/阴文/index.html","e1a782583c6a5dc1a7d0bceea97c85bd"],["/tags/音乐/index.html","305f8d4bed14a91915d1f9ae23677796"],["/tags/题目/index.html","4c389619299db7292aa619dc72f26b30"],["/tags/黑科技/index.html","dafeb6e49fa7352d0331445d2dd519b5"],["/捐款吧/index.html","93648bd2bcb41a832ebf578e0c5b1213"],["/随口胡说/index.html","e4afb834874188a1297fe3aa614ad8d1"]];
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
