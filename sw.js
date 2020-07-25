/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","37677b168cf1a13ce272db31f011bbb0"],["/2019/07/17/巧妙去除百度首页广告/index.html","829adb7e7c15d99432c80ce19166e0d4"],["/2019/07/19/国内加快NPM下载速度/index.html","87153758ef4e06db2bb8d027cee70919"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","ba1b9b372991740506190574f53c8163"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","dfe6b9a71bddb93bd8d7edb1976c6ab9"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","16315d75b342ba3515f7fe816ef6c164"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","4eb1a18246a2489652fe546332bdb562"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","7f5d8c398e1aedbe995c0d8fa065628b"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","c209c4f7d134d8d26d2e78d9c514ae83"],["/2019/07/28/【公告】关于宕机/index.html","bd8f65cb57730cad4c45f84a3979cd49"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","387df12143602c687b0414b73064aab8"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","eaf32bef4c68706e28e9d00a3ddfb710"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","867b87bb6827359c192d88ffaf483bc4"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","7ca454953e4d288ad6578c3b532be22f"],["/2019/08/08/每日bing美图获取/index.html","8f6539410e0bf266271cad657cdbc807"],["/2019/08/13/User-Agent野史/index.html","c90087dba53c18302025c81fe1dc10bc"],["/2019/08/14/【公告】博客多域名/index.html","ab2a839a84f529020ae929ba718412a3"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","3e12330f6fcbca30faea18b0c13c4ed4"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","5c83e8230f82cd35aed54bb16860c45c"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","bf6275e3368f8bc9a75ddb6254fca7bd"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","ad5e53b1996d4a5f5cdc2ff9b57a0ac9"],["/2019/09/14/来，破解版的Google访问助手/index.html","fbc724ec2739c685c3b5498aa2def994"],["/2020/01/20/回归啦！这是见面礼/index.html","7916ef4e47a7b8fb63a06b8725da4452"],["/2020/01/24/我们一起解题目吧/index.html","48d40154a988b1ad1791715013cb1a6c"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","5947b84cfd664698fbae58ea3e394935"],["/2020/02/26/Gitalk详细踩坑记录/index.html","946446aa608dd230f84eacf3fdb95438"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","9392bdcf033f7d4e92ca7691a0ecf359"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","a15b84be9771cef31c8f26a2338c0fd3"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","8128c052c5d12c1160fe7e83a9a7c909"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","df4ad8495b9b0bcc586766671008972b"],["/2020/03/12/白菜价域名的问题/index.html","19dfa1d2514ccd7e8342f0caabfa5886"],["/2020/03/13/工具箱和私有云恢复！/index.html","c57235226e309c62089cc48e70064d2f"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","efaab6699da4b2d6c67be33ea09a3886"],["/2020/03/17/一次愉快的更换域名经历/index.html","e9b2df20991d0b90e07c1941ad43fd5c"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","c56aeb7fd600c386c5e2bdbb52a0fe49"],["/2020/03/19/如何-CloudFlare-Warp/index.html","6a83fc85f75872c182a02342e773d94d"],["/2020/03/20/一次糟糕的换主题过程/index.html","554e68323bac431dfe98c0bf5dbe9b26"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","125ebdc11e462c15a14fe3bf719de8f4"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","750f9dd7b7a77b0eaf9b1fa43d260c78"],["/2020/03/22/回形针-真的辱华了吗/index.html","48bd1aa136965847e21742f5e66ce6dd"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","39c5f9a2ff4c3a9d7075d2df5fd09794"],["/2020/03/25/天体运动/index.html","5eb57d03627978498df4e07ab259b944"],["/2020/03/26/一次“修”冰箱的经历/index.html","1c7fe7c0b5c4509285850cf2f2e21058"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","1638e94c195618dd3b6f93aaeac053f8"],["/2020/03/29/PHPnow/index.html","5a1b66de333f12104acedb1b0d3a5355"],["/2020/04/02/AVorBV/index.html","1570cc40cb23e9409eabacf7bfc5f6c8"],["/2020/04/04/2020QM/index.html","4f8c2a1a8fe833669412d76b4c992588"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","4102f7bcfe07b1edb3cbf1d8a4c67d70"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","47aae494c871e4cb13cef8efb04aab54"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","c6df9fb9c51bff90a2e65b06e311e49e"],["/2020/05/30/What-I-Do-2020-04-05/index.html","6df2d9745b34594f3ce001965b259496"],["/2020/06/07/Blog-sChanges/index.html","45a7af8450b4cab838a5439919714e5a"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","d29f7c116860ce35ed78b39cb910d7f8"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","bc833d0794f17ba96b1641dbf0b5feeb"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","f229f905eabd9844109ddd94facf2a59"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","7fb0d7c6b83faada4b9c8b1fe6460863"],["/2020/07/25/浅谈什么是好软件（1）/index.html","ac6278ff884fe0c7ec8e4e91226991df"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","2be448dfab385eb246d37f03182e280a"],["/9999/12/31/博客暂更预警/index.html","0aad1e1a63533ecc2f4626dd20ef31f9"],["/about/ads.html","91c7c7a9982c7464948cb7a1d32c43f1"],["/about/index.html","903053ddd0849070784c7a8f34eb72fa"],["/archives/2019/07/index.html","8fbff60e9e584c618e440f5291d7892c"],["/archives/2019/08/index.html","7bac797bc546e9016868eeb37d91757c"],["/archives/2019/09/index.html","cac3eaecfe2a65afcb6db8aef4c06f1d"],["/archives/2019/index.html","b5f220a92d20bc3d28e62d93e455d746"],["/archives/2019/page/2/index.html","8743f3b69f374f02950ff84da707b04a"],["/archives/2019/page/3/index.html","d710c33c6b976f442943d647f8afffaf"],["/archives/2020/01/index.html","2a9c89f735f6f017478e3b6448724ff9"],["/archives/2020/02/index.html","1ee6f21805a8ccbf02c14a481b1d70fc"],["/archives/2020/03/index.html","24049ac3c6c64426c6dca4725cc1c36f"],["/archives/2020/03/page/2/index.html","3a17c0e5bd9c00a2c4cd9eedeaa1c240"],["/archives/2020/04/index.html","632ff2b838b2a28014d53d0d1de58e2e"],["/archives/2020/05/index.html","86075fc713f5d212e682b5541d5bbd28"],["/archives/2020/06/index.html","1721c40e565491c841bd5ce698997ad8"],["/archives/2020/07/index.html","1c3a1d2b7019ed82cfbba05b1f2a6834"],["/archives/2020/index.html","ec9d33a4cdd8656eae724cabc317fbbd"],["/archives/2020/page/2/index.html","1dcb3376818d113a0f1b9bcfaa4ead00"],["/archives/2020/page/3/index.html","60a2d2c5bc516e091b11ab2e52ec628d"],["/archives/2020/page/4/index.html","f0a486ad7ffb8551c1e86de097902b88"],["/archives/index.html","4eddafc5d4e5172dc1dbc7d26fae2676"],["/archives/page/2/index.html","9e8ada0aebb5d3253b1cc7c78efb30a9"],["/archives/page/3/index.html","450d372cd4612c4e5c5ec292f00c5b3e"],["/archives/page/4/index.html","b84f66681d25a7824b92a9ddfc694232"],["/archives/page/5/index.html","97bc5704679838e301af334b2b33584a"],["/archives/page/6/index.html","55933d1bc2e3d82ab67e2272acb21653"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","29ce49fc42b4576bb99e5feaa4bf7fe1"],["/categories/丆插件/index.html","813717f075f643fd1d9b0ae94b99c47b"],["/categories/又双叒叕是水文/index.html","1f159c1589e7f24c51d29de88534e56a"],["/categories/好方法/index.html","52ea994c48818e4f831577bd9b109790"],["/categories/好方法/page/2/index.html","33ff0b7ab2a4f85338c8ed7909892df5"],["/categories/屌代码/index.html","cbb51405fc9dc3033f1719fc62a36c76"],["/categories/干问题/index.html","75fa3a1b2d2c948a709b2e728d9fad12"],["/categories/撸羊毛/index.html","7ce7e4e557779b20b983f69b81ca02bd"],["/categories/有故事/index.html","74431174d617ce59d41e4be46bd57e67"],["/categories/爱分享/index.html","1503132c026222e72926c0fd91e5bf99"],["/categories/爱学习/index.html","c3f53d5cccce5108e18b3570f019b79c"],["/categories/爱学习/物理/index.html","68a10a366bcdd49739142e81b50b3f55"],["/categories/爱折腾/index.html","9e03896977e0017730592f98852412ca"],["/categories/瞎扯淡/index.html","c105611437c716327d4480b268a6537f"],["/categories/繡软件/index.html","4721642352ce248e1e81650f5c85e9a0"],["/categories/要公告/index.html","52e20143828bf483e0419f1509a4cfbf"],["/categories/随心记/index.html","ed305e686b161d6630969253c1ab4131"],["/css/main.css","fe5908b803b94350b4abecdadf0b076a"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","e06e23a850a3d484593d6720fec7b34d"],["/js/clipboard-use.js","f8982b9e48c880368c3cd559f058f9b9"],["/js/color-schema.js","b91dc34c62e9bf53f17a1c4430d3dbfd"],["/js/debouncer.js","b191fcef450414f12dd272f9a75b4576"],["/js/lazyload.js","1526525e9fcf5d992a7c884deeec7224"],["/js/local-search.js","53461574609e41159a714670d9b66c0b"],["/js/main.js","e58bfe07cc0fa76da851c07d037972a3"],["/js/utils.js","edf4e1b7dbed6c7aef486133f319b75d"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","e2b723234c736a56abda1d11fc081fe0"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","f7c5366da6c545880d6eb03cb52cdd5c"],["/page/3/index.html","20979d4bcb529aefbabf8c86a1b66e7d"],["/page/4/index.html","ab4014b42c1bc773af8daade97a4d8a4"],["/page/5/index.html","a91555d60e34405b55fdf8ddbe29d02b"],["/page/6/index.html","e153bb573e591f5ccd4f8b1b2e80e046"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","b2d86f0121ae6d9ccac01dfafebdf4d0"],["/tags/000webhost/index.html","3b09835c4c6f78646eb28f14f7eb7dba"],["/tags/API/index.html","0a951e8bea68c4ce277b1a9e8e271fc1"],["/tags/AV/index.html","24ae9ab55c31aecc3775ddc1235a1b94"],["/tags/Adobe/index.html","38e5622bea9f7e4cff626b08c5a849fd"],["/tags/Adsense/index.html","6d27422bfefa14b279d7e6f540de699e"],["/tags/BV/index.html","71752df9ae46dde2a1c4fba7a08ebc9d"],["/tags/Bilibili/index.html","6b78f82908d908a51325c1b755855717"],["/tags/Bing/index.html","3f095efb1071fcf276bb7ae5bc0a3b75"],["/tags/C/index.html","854941cf3a749b510a0cc407082cca85"],["/tags/CDN/index.html","ae96445f3204692008300e6c9685c558"],["/tags/COS/index.html","735f995ea5c53974f27b30bba60d93a3"],["/tags/Chrome/index.html","d4447e292f43275b10c26dbe511a7bc3"],["/tags/CloudFlare/index.html","36d26059bfe3ce575e5eb65ed6b3b0ef"],["/tags/DNS/index.html","b117ab1a6c2f7a0f84bc51e8120c449c"],["/tags/Diaspora/index.html","f45f9dbed2a59255a8f3755d39896ef1"],["/tags/Gitalk/index.html","264d905bd3720f7433ac0bf914663990"],["/tags/Github/index.html","3c80bae60504fc506e5f50fa8dd12faa"],["/tags/Google/index.html","23fbb0d0c480acdea710903114abe8e6"],["/tags/GoogleDrive/index.html","ac2b99f4802eff0363670640dab47ce2"],["/tags/GooseDesktop/index.html","09f63a1dd245711aa1b12e3542e925a0"],["/tags/Heroku/index.html","fbd06103f8e71128d8a395af1480165e"],["/tags/Hexo/index.html","535ab89fb697c1ec9f963e3254a33f96"],["/tags/IP/index.html","517176061edffd50a24faf6a7d58850f"],["/tags/IPFS/index.html","c5be418475fded178c7433100aac6c11"],["/tags/JavaScript/index.html","398bac58cafab3263f069e7dffb920b5"],["/tags/LazyLoad/index.html","6797ad78fe8d5dd0977085e36442483f"],["/tags/Live2D/index.html","899aea7e3b723eaf52ddc6ddf73227d7"],["/tags/MarkDown/index.html","5f49a242cd10af4d0b35da2087f1ad0d"],["/tags/NPM/index.html","346eb11ed9e6261ed93f940fbbaeea06"],["/tags/NexT/index.html","e719d0af18fe927d3a36782cdae8122e"],["/tags/Node-js/index.html","e76121555ada967122818ca35366df20"],["/tags/PHP/index.html","b80c72686f7570625b2bd9edddc71b97"],["/tags/PanDownload/index.html","3b46519164ebba08a93d29707a60605e"],["/tags/Repository/index.html","2f35a920bbb8896bb238b824adf4a15e"],["/tags/SS/index.html","7f6d751eb4276790b2c79dab5e337b92"],["/tags/SSL/index.html","2e3fd7c4c71f3d08f0d5d44171874348"],["/tags/TLS/index.html","79e0822114b440b0bdc5c54cd78e2604"],["/tags/Tampermonkey/index.html","461d3b495afab0527679ae52a6440aae"],["/tags/Travis-CI/index.html","ac86b31b65209831f80565db48888ee6"],["/tags/User-Agent/index.html","c274ab810b7a3acb4c6933efc8c07143"],["/tags/Valine/index.html","59acedf89e433341447fdbca0f1c3824"],["/tags/Warp/index.html","70b9cbcff37e93ecbca30caeb8394780"],["/tags/Windows/index.html","c00dcac64bb815d1eae1b2afdb775e3b"],["/tags/Workers/index.html","b59cd1ceee8a9da3e19d0f7dc2ec0296"],["/tags/css/index.html","4c2e8ebb38d4443c790a8e9b96d447be"],["/tags/index.html","ceebe21b6f943f02e85f63cd212cd4b1"],["/tags/ipv6/index.html","19433f177633e38239d94b02a8a731b0"],["/tags/下载/index.html","179df5613d06b9ce81c470efe4674187"],["/tags/主题/index.html","4727abe2821d36e15304243733aa4aba"],["/tags/京东/index.html","96ab766d8d2d7a3cd2a43636a33430a2"],["/tags/人机验证/index.html","ec8d2d1822d7ed9d1c0047867e157f77"],["/tags/代理/index.html","97602c952a29a959b0baa62593fe49a8"],["/tags/优良/index.html","34e26c98e2ed3f75a97a8b65892a5910"],["/tags/便宜/index.html","f2c49e79ee904fbe6925904781c85696"],["/tags/修理/index.html","a288a2812938579e7747dea90935b98e"],["/tags/免流/index.html","9f5884a50fe1f540118e4d078bf58711"],["/tags/免费/index.html","face56466d16b7babbcaa599d0382b2f"],["/tags/全家桶/index.html","c235230a64c8438595e9bdd01b831324"],["/tags/公告/index.html","e8e986dbaf961b463c1a268ca02c5b05"],["/tags/关键字/index.html","dfa0b838d2f6b6dcb03a7cbb305bd1ce"],["/tags/冰箱/index.html","db0f86fb71f8aec3f36e7a6fe68328a5"],["/tags/加载/index.html","7e66749ef89d01c30de7944a2a5773be"],["/tags/动手实践/index.html","9bd7f0673836b8ced7d5e3e489ded14a"],["/tags/劫持/index.html","1a3806efbec2f9e76d5b8ac36dcad707"],["/tags/历史/index.html","33c04b4a018f62c1d9df71503762d0f3"],["/tags/压缩软件/index.html","470b37adf86444ea0585ad468a3fb684"],["/tags/台湾/index.html","699a9ead19f214dd53919a717ac6c2fe"],["/tags/回形针/index.html","cbd30912e363cb989a3b4ba3e3703d75"],["/tags/国家/index.html","0260810495c44859bcef8f9938040582"],["/tags/图床/index.html","f0416e2f33d3240863064c99e7c66653"],["/tags/图片/index.html","a601f4988ddc37a51aec0d42f69e4917"],["/tags/在线更新/index.html","d0bed07745b154d120430a8aa916393d"],["/tags/域名/index.html","520ab48311f036955b967d97e0212c33"],["/tags/填色/index.html","87f13581bbab821c28c01da8d0b19c95"],["/tags/壁纸/index.html","1aa10c3c5a41468c40603c48ad7872a5"],["/tags/天体运动/index.html","0e7d9d0d0406d48bebf8b02906ffb598"],["/tags/头像/index.html","5888ea4ba6cacac3aeb09babad9b6898"],["/tags/奇淫巧技/index.html","cda592bf4da6df6a171569ae540ec91a"],["/tags/奇淫巧计/index.html","70c1880c72b3a2536971f81516953d7f"],["/tags/字体/index.html","80932aa7b174604763eac77279a40faa"],["/tags/学习/index.html","d134004982baba427e1f63a911a05a6b"],["/tags/安全/index.html","8dd4753605459ddaea2ac98f85759869"],["/tags/宕机/index.html","893af977ab8e5fe20a008ab14d8dc766"],["/tags/实践/index.html","bf38f163f4744e203fd9dfd5046d1540"],["/tags/宠物/index.html","7a77ebc0ccad393d3668fedc5d61156f"],["/tags/寒蝉/index.html","aec6a31784442dacca03e1425d707a3a"],["/tags/对象存储/index.html","3096d8ec78be87ce0ef5111cc83f9a2a"],["/tags/工具箱/index.html","033e656d65b658f996cb2dca9489518d"],["/tags/干货/index.html","2d51be06390231bd41e6012b47d4ea76"],["/tags/年度/index.html","ca82b55f71c2dd7225ff28859250916f"],["/tags/广告/index.html","48828160cb0fdfe7d4e1486264010d24"],["/tags/总结/index.html","f23019b5165b4c6e31c7e9ec137c9b77"],["/tags/恢复/index.html","4188360a2250c4104e46ec85e4441b80"],["/tags/悼念/index.html","2865a3fad6fb2a9df5d2974cf0e2061a"],["/tags/悼文/index.html","5557692d5abf506e9e5a4d3715a47ef1"],["/tags/手动填坑/index.html","9e6962e590167acde9706f2c489e9813"],["/tags/插件/index.html","b23f416f670f6da72530bf79c2fc0ad4"],["/tags/撸羊毛/index.html","904f25e5210088181cbc432362e94abe"],["/tags/无限制/index.html","1f57b6211a2b47d3fbc170e82f394625"],["/tags/日常/index.html","444c01c366efdf57296c3d7501adf3fd"],["/tags/更换/index.html","e8776f5812a5185883d7ce1cdb97d496"],["/tags/标签页/index.html","85f8bdcde03f0093026ff7550ed44b17"],["/tags/桌面/index.html","b28839d0c9cb28420f134c47ee36596d"],["/tags/流氓/index.html","edece87680c0cbc2efae7aedaec15d52"],["/tags/浏览器/index.html","8ae2fc6c07f4781225ca0f244007a743"],["/tags/版权/index.html","ba30b72357d317abe8623acc6085fd21"],["/tags/物理/index.html","462a7bc7abc6084f2badda833d8b3ed4"],["/tags/特效/index.html","6e8eb6ad4b1ac3249a209ba20ff477d1"],["/tags/用户信息/index.html","2814aae6bb7bec2f21d48392c8cb6b01"],["/tags/电器/index.html","b2f11b49529f7d48f5682f31030a0357"],["/tags/疫情/index.html","49a9b1482799db01606a46f2f9105c3e"],["/tags/白嫖/index.html","650ee5ebcec874a65e28779d4d14ad66"],["/tags/百度/index.html","8b2d4dc0f4181583e9b3f440185ebf00"],["/tags/看板娘/index.html","f09ada3da455a9157f339a9e31d877aa"],["/tags/破解/index.html","55eecb59469fb9d762f9d675fc6a1218"],["/tags/神器/index.html","cb946c19bf88cd04862b985b62627416"],["/tags/私人/index.html","e1251f58c8860dd8790992a7d89fb0d8"],["/tags/私有云/index.html","50768f4127c5ca63a9263b8f9f77d668"],["/tags/科学上网/index.html","938d0e0a124150891ea3f9bb63a128d0"],["/tags/站长必备/index.html","35ec7ea3fb0270236cb2d5fe5c862904"],["/tags/等待/index.html","96b1f5371d3ada1b9093af3a8861ff4f"],["/tags/精简/index.html","1d1c0b223566e62ce2e55620c867d6e8"],["/tags/素描/index.html","359926fcd12802f1601cfcf771513ad0"],["/tags/编程/index.html","5dc44528107927b27cc5ec1cef646344"],["/tags/编辑/index.html","e6f1868d062c26e9df7ab3b2afac72ff"],["/tags/网盘/index.html","d54c11e6f81b172c25827f328a156b00"],["/tags/网站/index.html","5eee3c935eeec764b0b9253a7bd80983"],["/tags/网络/index.html","ca168cbeaebf6db71cecb2b9eae7cc0c"],["/tags/美化/index.html","6eac944294e0e5f353040edbdd2c76b7"],["/tags/美图/index.html","43a7bf93a69d891abf5613d0d7a687f2"],["/tags/脚本/index.html","30f400d8ff8cd351903baa02759d12c0"],["/tags/致歉/index.html","26b1a474b9ad620d0d8864c4ee318c21"],["/tags/萌哒哒/index.html","eb1d2ffb1701111859f5c3d7c499bd32"],["/tags/萌娘百科/index.html","175ff9452f7f71f330d692a883bef146"],["/tags/萌萌哒/index.html","e698785f8164ad6478bc56e0e3969f47"],["/tags/解析/index.html","83c766500859108a649fbf9f925ba4f8"],["/tags/评论/index.html","e8f3a4f49de91291155c29943186845d"],["/tags/评论系统/index.html","2ab60e0cc11c1d1880955cc7df826023"],["/tags/语法/index.html","46b99a2388546c83083418d53ac9bf00"],["/tags/谷雨解字/index.html","8b461eaa1fb2cfc5e5818dcccad0fce1"],["/tags/赚钱/index.html","deb0cf58a786fbf9841f35925d9ea1db"],["/tags/踩坑/index.html","f6da621a37aab418978cdb36ef59d421"],["/tags/软件/index.html","d5d35725c78d2a4c611454311f0ac2d4"],["/tags/辱华/index.html","6c5649d0ddca8fc82fea4b2ebb5be1e0"],["/tags/迁址/index.html","7df5d6b21e0e0b62fa0193fe7c1685e7"],["/tags/速度/index.html","16841a888e1428b4d592fa5a552e6b2b"],["/tags/错误/index.html","75a2a703d8a4e6ffd8c3131c227c72a2"],["/tags/阉割/index.html","63a73a1476b8369bb664b19d045ddfaa"],["/tags/阴文/index.html","159440757a72f6ac164a63b1743f8253"],["/tags/音乐/index.html","45573ad730cb2dbcc5fa4ec7610bf738"],["/tags/题目/index.html","fc01481d226d0c0e5bd8e9aa0c694fbc"],["/tags/黑科技/index.html","4147bb37ae376bf13fc8ec943c67d658"],["/捐款吧/index.html","50b05b089f55b659a849a7e87b7a59b1"],["/随口胡说/index.html","829df4a254fb3ff517e88c069799a316"]];
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
