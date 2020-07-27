/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","5bfb9703925dd331be7ba79c4970be9a"],["/2019/07/17/巧妙去除百度首页广告/index.html","b414c76a45924f79af805791bdbbe6cd"],["/2019/07/19/国内加快NPM下载速度/index.html","6f144afac9f350d8adb290ed20171ed8"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","8db394e711330553d1382dde42865820"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","e4492122c64cec1a6d1fd4953bc9020b"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","6b567bb64f9592ec49b16af8a333082d"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","2a05cb288c1fb4634f367220a5425c60"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","0040969959d2175d22469c65d18a9659"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","8261b33ae6bf16b98181c109029ac4d5"],["/2019/07/28/【公告】关于宕机/index.html","8c56f431b302618358f125c6eb44a11e"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","2bd4900281b314d98727611fd48305f4"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","a8205bb7a76166269b39e64ac8b00231"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","94dd52a152833badcd022a3a1549b44a"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","9f4293e34162b9bb530cf2810e2d4cd9"],["/2019/08/08/每日bing美图获取/index.html","91ec76ef6506a1c7a100bc036d26c580"],["/2019/08/13/User-Agent野史/index.html","97c5742d9f2114c9093c1a4a73a376e3"],["/2019/08/14/【公告】博客多域名/index.html","da5193b5cdf365c3098d76d9407f5771"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","332003384ac54129ea75d5ec7985aa8d"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","d6ed25b081231792854cf9d0994cbeb7"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","d61a66d9320da9c8502b38dfbf68549e"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","5954e6279a56a130f06aea133f9b871a"],["/2019/09/14/来，破解版的Google访问助手/index.html","dad1bc58d43cb9263315c08798479155"],["/2020/01/20/回归啦！这是见面礼/index.html","c692d4fa776d53f2404d55a5e4e99c98"],["/2020/01/24/我们一起解题目吧/index.html","86fbe7220551af0797c43b886b72c0a3"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","64b48e855ef2c6d96700977d58b1256e"],["/2020/02/26/Gitalk详细踩坑记录/index.html","24dedbb49323b850bc91e8f1a4c92d22"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","495b5130bd844aa4297bbe7abb12c77e"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","d46bb426387c38ec899a631c7551e6a2"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","68ca05ee6fc884be46c90fe9bbea1bb0"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","3857cba5fac5c4082560d49db607f67c"],["/2020/03/12/白菜价域名的问题/index.html","4d6a398e054cdba23e11cc2f175213e1"],["/2020/03/13/工具箱和私有云恢复！/index.html","c827ca4e0d2ef9c73250d086b354f664"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","8c77e30aa2ee6522ab914ebd8273728f"],["/2020/03/17/一次愉快的更换域名经历/index.html","9f1acb1124b28f1e34a1c6cc876afa91"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","c8a588a98e2907bcfd92dee37f1a01d3"],["/2020/03/19/如何-CloudFlare-Warp/index.html","8c4658052a9ea73a5e47f6439d27de67"],["/2020/03/20/一次糟糕的换主题过程/index.html","0783080cf88012e2d29d9ebbc86105f4"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","f7eaf7d8143e81702bc6dc56696330a3"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","01cab467375206c30aa8901167375fff"],["/2020/03/22/回形针-真的辱华了吗/index.html","64c115740add223a14577f1180f4b2e4"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","ddcfa3b5bbb776f02fad63c7af821817"],["/2020/03/25/天体运动/index.html","4bd39b09ce41b9b990b03e5a41fd92d5"],["/2020/03/26/一次“修”冰箱的经历/index.html","810465eb55b47e382016711d9a1dc7b2"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","19d8c833d05c9d36cb4589074857979e"],["/2020/03/29/PHPnow/index.html","7902ad587f6727b1ac8562f344b35f7d"],["/2020/04/02/AVorBV/index.html","fa731c296a5501c15ddd60b946fe22e6"],["/2020/04/04/2020QM/index.html","033da427d4bbe61505e58ab72866f3ea"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","547c17ef160dc026e69b7d1ee801bd2a"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","74496db964ff37fb8718adbb3454a91f"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","79c214eafcc698725c927220097f3f68"],["/2020/05/30/What-I-Do-2020-04-05/index.html","a528b456a5f6ea2bfaa959a87255b7f9"],["/2020/06/07/Blog-sChanges/index.html","48b4703e8782516120c3feca7fcadb73"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","d4ffb2e47a394425925cd30212759540"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","44dbd90f5f152c78eed9922a84c21138"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","c30f183ade16ecb4c9ba868885a600d8"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","31d1d9efb65504a690986732df1ae54a"],["/2020/07/27/浅谈什么是好软件（1）/index.html","73acf6ebefa0015b487ab9c1312440a5"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","f920a95134695cc98a0eccca8f674502"],["/9999/12/31/博客暂更预警/index.html","a8ea68193a94e34c080d86a7ee4861e8"],["/about/ads.html","6c9e43306aab9b061ebbfdb14a97ecce"],["/about/index.html","9ba9c61a31934a86c88d66182a92b5c1"],["/archives/2019/07/index.html","9eede647f7bab7df75117700192ee86a"],["/archives/2019/08/index.html","4d1641176894e4111f479201a43ec9a3"],["/archives/2019/09/index.html","ae5064921c6cdc18aba733aad6bea807"],["/archives/2019/index.html","e99beef81d9abee584b577c7f83150ef"],["/archives/2019/page/2/index.html","d521f4550d1da704a6e49d777412734e"],["/archives/2019/page/3/index.html","b768c06b9496fabcd2624bf897aa83ae"],["/archives/2020/01/index.html","12d817a6227956b0e89523bc526bd253"],["/archives/2020/02/index.html","ed0285fe108dd5b7cc1360fc9e08fde7"],["/archives/2020/03/index.html","ea2cf773c97a0de05f179f0ea216793e"],["/archives/2020/03/page/2/index.html","313b4072919f95e5aa773ff8b04a903e"],["/archives/2020/04/index.html","0596a5174245fc485fd3fd7e1b7546af"],["/archives/2020/05/index.html","0c79cebcef17ad7469218317fdae01e8"],["/archives/2020/06/index.html","555c47309af59d7cfc1eabe79605de9f"],["/archives/2020/07/index.html","e0e36911b6de28e08d4d4901b46a2ba2"],["/archives/2020/index.html","70a62c5a6408ca77957a9d2fe1a6de03"],["/archives/2020/page/2/index.html","40ee32349d58a28e99ab855fd01a8613"],["/archives/2020/page/3/index.html","d653b4cebbe51a6ecc33c7dbfe94b66e"],["/archives/2020/page/4/index.html","1b02f75346e00e388b961523fb21435e"],["/archives/index.html","848cf7c5d82a8577f17371e1fd2bdc93"],["/archives/page/2/index.html","eab700fe3f4578f848288439aa5d10b5"],["/archives/page/3/index.html","15ad3cbcfff89640e6b63243607c65d5"],["/archives/page/4/index.html","7e03d804a5af627ebd493f7a6ebb04ce"],["/archives/page/5/index.html","b1ba6b6c9e5a8cd3c0035f003de0c3ee"],["/archives/page/6/index.html","fdcbcf2ce831cd52551ef564882e8b32"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/categories/index.html","26f7cb5d7a703a56770d95aef1f4bffb"],["/categories/丆插件/index.html","e2430550647f868fd27461859dca7d06"],["/categories/又双叒叕是水文/index.html","66d44b04fc45db527d3d2c1c567cc1db"],["/categories/好方法/index.html","a2e52f88c507226fb507b4f0b1886c74"],["/categories/好方法/page/2/index.html","de50389ea085f4d7aee7752324f7d158"],["/categories/屌代码/index.html","f6253da7e998e793b48223185af2c8bd"],["/categories/干问题/index.html","28f274fbb7b3f62705aa8b26aa788954"],["/categories/撸羊毛/index.html","e9e032ac2b153440d611d6a9d08a80d1"],["/categories/有故事/index.html","2c7fc736ff54db26ac86386da75184a2"],["/categories/爱分享/index.html","a92796e9e0df1146f60936c2ff914627"],["/categories/爱学习/index.html","4e4be90cf695ed374e3a91d6b559be1f"],["/categories/爱学习/物理/index.html","dcdc0232f6aaec1e8be8f2ee3a971bd8"],["/categories/爱折腾/index.html","ab90650c5f36d16e0f05237145489018"],["/categories/瞎扯淡/index.html","6fd6e4e2e4f77519ea894d5a1fc6de7e"],["/categories/繡软件/index.html","4d513c0b70227da66667708b9fcaa1d9"],["/categories/要公告/index.html","cce4cabb34c6b67144e9f2d90d07c7df"],["/categories/随心记/index.html","7d4fdf6b4707c67cec8a660bb6ba3430"],["/css/main.css","fe5908b803b94350b4abecdadf0b076a"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","a1fe34d9c04c0279aed25087ff1b5c6c"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","d3e85380caa3a0c1c984635d3f3c9807"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/page/2/index.html","5dd7ddab5a38099766d06f6fe0d02ea3"],["/page/3/index.html","3c40597ba572e1ff2acf7025fb579bbd"],["/page/4/index.html","e8845f74fe30508133b69726b8c40cc8"],["/page/5/index.html","0e6dbeb12b770592f56908d5284c9771"],["/page/6/index.html","102a963d2daececfd4a52889e1e4fc0a"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","db4ec0a95310af9a9ecaf26232152eef"],["/tags/000webhost/index.html","b13d78b3981986ac3ddce47bba80a04a"],["/tags/API/index.html","73aa03fcb01b6916ad492fa094bd50fc"],["/tags/AV/index.html","fbf905869a7a915de1d56e8d1e42d69c"],["/tags/Adobe/index.html","f494489316a27ecbe21a5348ae629e02"],["/tags/Adsense/index.html","18578302ddf1c618d13ffad5eb1086d6"],["/tags/BV/index.html","b4eb69c61a5e842606150c30f6437cb4"],["/tags/Bilibili/index.html","02ddb993ce2b0d3d3ba94f9038459de8"],["/tags/Bing/index.html","213e69c1a07932a871784a803728bc61"],["/tags/C/index.html","1f433eb174a7a66c9fb6d71caf90822e"],["/tags/CDN/index.html","f7b21efc1f115549772e437835f5e278"],["/tags/COS/index.html","aa22642a08f5a70a0fd919531ce5daae"],["/tags/Chrome/index.html","6ca1385061158764b3e8985c9437a4dc"],["/tags/CloudFlare/index.html","d46123dede0ea0dba1ca74693ff73842"],["/tags/DNS/index.html","d8db2e619c9c8009231d4457458b7659"],["/tags/Diaspora/index.html","c7c9a1ca2279ed451621ed2903ba8686"],["/tags/Gitalk/index.html","1db845003489c0fe3800437eb0c08990"],["/tags/Github/index.html","68e90852140e8d31797db0590fbb3622"],["/tags/Google/index.html","a568d797d3e34cdae3bf5e52b4b0ab18"],["/tags/GoogleDrive/index.html","876f10f5f9097ba3b15ddfefefc46fb3"],["/tags/GooseDesktop/index.html","5b98b2f21742bc7d1c5257dfb22a1ee0"],["/tags/Heroku/index.html","db00de966cf357f9972038c1d2406eeb"],["/tags/Hexo/index.html","5eac125d15332d4172801a574960b1d8"],["/tags/IP/index.html","28e2d799790e29c3da960731ab82e6a3"],["/tags/IPFS/index.html","1fbeae142d0a8c2c56a5eafc5a3a10aa"],["/tags/JavaScript/index.html","bfb7084ac2f410583214dd057642b2ca"],["/tags/LazyLoad/index.html","a53105a94a7c2f9a16d00c80533e94dd"],["/tags/Live2D/index.html","d5a3603d8265b4ab93ab82d6b2aef626"],["/tags/MarkDown/index.html","3f8b428dd127064cc24495b8d9b2e3bd"],["/tags/NPM/index.html","e30a98813d5cf5c78609cc5849c2ddf6"],["/tags/NexT/index.html","44648fa5f2752018173ae690a8c99779"],["/tags/Node-js/index.html","0e68c0a4da4ae89fc501c26629e01777"],["/tags/PHP/index.html","02531d606aa9158de2e223dc3b34bbbc"],["/tags/PanDownload/index.html","3cf1dc00158d3e35b00dab48f3def362"],["/tags/Repository/index.html","16c956f77793cf5051cd572948d18d26"],["/tags/SS/index.html","2d2323aebea3a922c4eb5dccae5b68bb"],["/tags/SSL/index.html","609d1e02fb69cbdea7ed291633bd619c"],["/tags/TLS/index.html","119113153ecca6173f5e5501b3aca7d8"],["/tags/Tampermonkey/index.html","445b1b2712b68a7d414056fda31f4732"],["/tags/Travis-CI/index.html","ba417e0de7ee094628bd9ac32b2e47bf"],["/tags/User-Agent/index.html","666b3fcb63f5837d329c78b5b002ac8e"],["/tags/Valine/index.html","61b7b3e25a621f097e4a7cb6a9e8bdda"],["/tags/Warp/index.html","2e0dceafa1edf5eeb36a3f19866fe05a"],["/tags/Windows/index.html","780aaa816796710c8a15bc31a3b0c98a"],["/tags/Workers/index.html","3c9d84b584b882407e4d0608eb8ae3af"],["/tags/css/index.html","cd55e544b0ce6e35a3f90618dcc704a1"],["/tags/index.html","b1d038a5d860e526fefbc5375473c053"],["/tags/ipv6/index.html","30f8010a3afe7d7acf8feeda8419bdbc"],["/tags/下载/index.html","a0c18cd444aaff482945d71b34639607"],["/tags/主题/index.html","4a6bb5db5da36ece19b0df9e0a5d78d9"],["/tags/京东/index.html","9bf83993b0074f792b555dd06b48f1ea"],["/tags/人机验证/index.html","e934108612e7233eade2532f79f789d6"],["/tags/代理/index.html","7eb76a36dc393b68dd80331cc0bccd3c"],["/tags/优良/index.html","7daf23153bc986236416dad0f670418e"],["/tags/便宜/index.html","52d2364ef446ac86c6389774c8315cf2"],["/tags/修理/index.html","972eaf8eab1a132c5b259f1e9bc54132"],["/tags/免流/index.html","08473d365647ca13fc95d0d2a437304d"],["/tags/免费/index.html","00935fb05f7d8aa216333966f9a6733d"],["/tags/全家桶/index.html","7cca67329b734e036b21400b20857250"],["/tags/公告/index.html","f84ea2c20a5a9951dc1770f1574fb6bd"],["/tags/关键字/index.html","976bf2f1b1bd899c296f6ccc7fdc801d"],["/tags/冰箱/index.html","531d91b59a3c01475aa018ccaf1b9ab4"],["/tags/加载/index.html","341a6e55837d3ad57c5be24f67fd545f"],["/tags/动手实践/index.html","de15f214d490c2095dc9853c5ad368ca"],["/tags/劫持/index.html","0bf620234ee91d94f917a42cfd56f0e2"],["/tags/历史/index.html","7bdfdbd1ede19cef721e47b0f4d15cc0"],["/tags/压缩软件/index.html","97b7d46ca42a8902a3540c4ace92238f"],["/tags/台湾/index.html","d6cfdf3e5fbd0849470ab49819fcc3ac"],["/tags/回形针/index.html","594f05c6f475c8eec12544b72ad1af14"],["/tags/国家/index.html","a64007d6ccec252b247bfa14261aab89"],["/tags/图床/index.html","26e6fc54e6e2f74e34ae9cec47d4e8f9"],["/tags/图片/index.html","a254cd69b113509b91c9efd7f3eafdd5"],["/tags/在线更新/index.html","c7cf232a1d6df873a988226358f4d9c8"],["/tags/域名/index.html","744dc9ebb8eb7486dd024346b6e2bb9a"],["/tags/填色/index.html","3e0c04984aa7b85a4061e490ef04dbcb"],["/tags/壁纸/index.html","dfbfee303ddd66db2b35f1b59873259c"],["/tags/天体运动/index.html","7d16e09792a487f87103e096ce583b5e"],["/tags/头像/index.html","758ce08dbea1b35ef07c3c13314c63fb"],["/tags/奇淫巧技/index.html","a373cb80a6d1c2510b3fb9400c876aac"],["/tags/奇淫巧计/index.html","fe8149360a2a21453dc6d36a46a4252b"],["/tags/字体/index.html","159856b53cdb94c60661c430cf2d5549"],["/tags/学习/index.html","2b53cacf703b92bc1625b00f74c0ebb5"],["/tags/安全/index.html","4c6b9690b9ed663d1e43753e2f073c68"],["/tags/宕机/index.html","535499139a7b6e71f0dd3d79b80bedc1"],["/tags/实践/index.html","07960a2588bedcfe3d02b493cd566eec"],["/tags/宠物/index.html","c58e9693443668e637b6725e2b895861"],["/tags/寒蝉/index.html","f296fca3e50f036d56b0c7985aa1ee1c"],["/tags/对象存储/index.html","44d3ccd73c4621d2aaf755736608c68e"],["/tags/工具箱/index.html","9f963c0b34d25e7df03cfb08dc8a5c44"],["/tags/干货/index.html","c51bdd4551263b0e219f084ff7206469"],["/tags/年度/index.html","33716876caa542b24b504f73315adf2f"],["/tags/广告/index.html","4a8d5ce599d7fbe177c97c4b01e9d3f9"],["/tags/总结/index.html","37b16f74a3f0f5822dd347bb30a95b64"],["/tags/恢复/index.html","f0e3df003c0c4606a841d272b7fa4c40"],["/tags/悼念/index.html","20c97655ecaf65463eb160ce4fd9a133"],["/tags/悼文/index.html","e1b80006c6bd70f8da97669379af843e"],["/tags/手动填坑/index.html","ccd1432bb0a1a421f7814b4d35eabac4"],["/tags/插件/index.html","7556f26e8cf3ef9c7ac178865ae6035d"],["/tags/撸羊毛/index.html","343de5bb63358b6455d5e372ece70e0b"],["/tags/无限制/index.html","8e64d91dbc1b4b070e5a2fc0c4cf864f"],["/tags/日常/index.html","af5c4f82523477ada5c26adf63ab2a34"],["/tags/更换/index.html","2bd6154298a08c685e421f713b8aea49"],["/tags/标签页/index.html","673de802098951a26b9e5d57ebae05ba"],["/tags/桌面/index.html","5d32d6e99c9439a46ac1866b63ee4db6"],["/tags/流氓/index.html","93b7a3d5316946ffbe635f9908226ac2"],["/tags/浏览器/index.html","b6e78f1c3c850061be8c73072ccc36c4"],["/tags/版权/index.html","a5b5b09cafa3e6a31fac3d4e340d42b6"],["/tags/物理/index.html","4ad8fba6ca85fc69c62db98fec45c98d"],["/tags/特效/index.html","40cdad0a376c6f95e0c3742566abd745"],["/tags/用户信息/index.html","c09c2cff0dfeb83fe133aeefc6de65ed"],["/tags/电器/index.html","a180f7acf369af6b4fe3cb4408cb7c02"],["/tags/疫情/index.html","e6f9bfc3b38c488acf107af0f5b3e33c"],["/tags/白嫖/index.html","a50ae4126e3340837e75bdc73bb9af2c"],["/tags/百度/index.html","93911fb788441f9b241609cd36fc8cfb"],["/tags/看板娘/index.html","3f42edd2de6c746e302a4c1bb07ac027"],["/tags/破解/index.html","daf8c8c18886542577fd7ff3e7f10abe"],["/tags/神器/index.html","1c5a9cbe575b34f44d46fbd8a8919d68"],["/tags/私人/index.html","b25c832c0ad42491b73c2a5a7da4a79b"],["/tags/私有云/index.html","907e2f5d0ec1149fde6ad09e64dd264c"],["/tags/科学上网/index.html","2ffd8a0c0261e97c6e406df620d59da9"],["/tags/站长必备/index.html","c729e697338a76d30dbfd2c937ef1c48"],["/tags/等待/index.html","2f488f3c5eb4928e90c17897ce2eda68"],["/tags/精简/index.html","921bf0a6ad1b53f95e43468898824d21"],["/tags/素描/index.html","31ebb4449deceebe59ee63203d1a7314"],["/tags/编程/index.html","3197b1e1cf1d8b03a34d99c229b93989"],["/tags/编辑/index.html","27b03888fd1ba928ab88d4a498b27184"],["/tags/网盘/index.html","eecd2330741cd9584f10d3c0aeb45a39"],["/tags/网站/index.html","404bb60732205dbd7e890b83abb87a17"],["/tags/网络/index.html","9f3e47005e108d12e285f2351da2da97"],["/tags/美化/index.html","e680ba6f2acc22aee18d73eb3a13fcef"],["/tags/美图/index.html","afbea03225d6a5af9897420f038a0ebf"],["/tags/脚本/index.html","cf2b527cf4a5d17ec8ecd41d0f172dde"],["/tags/致歉/index.html","5a1aa151e37b0fc8795c7977ffd84375"],["/tags/萌哒哒/index.html","45e17cb44232069ab625efc60f5fb9fb"],["/tags/萌娘百科/index.html","e0c63de5a9918b3d64d8e391b9373a3d"],["/tags/萌萌哒/index.html","cc695feb7a01de2c7699b69925b5d399"],["/tags/解析/index.html","4021aab9a382327f64ee2ee75b2de3ac"],["/tags/评论/index.html","e939a3a5f3f21161a797482af37a6c35"],["/tags/评论系统/index.html","22dfd9e18e4ba80855f992ff96f5301d"],["/tags/语法/index.html","56a3a6a4571a567e98fb32c5c559c190"],["/tags/谷雨解字/index.html","ed17c788e7fd78709fc0fe4e9c308dbf"],["/tags/赚钱/index.html","b0d08f0c06099239ca36b904f853f366"],["/tags/踩坑/index.html","3b1e7529d36a801e204564b6b5ff6cb0"],["/tags/软件/index.html","0a71887fde0687ffb288299277bd0933"],["/tags/辱华/index.html","0b523f03a48cc7f321334edaeda1c3bc"],["/tags/迁址/index.html","7dd2c90bff89c33d819f2288c4d59708"],["/tags/速度/index.html","a1ba64d5f73def1f2e256c65566b3d62"],["/tags/错误/index.html","7575bdbaa067539797d4c5f57842755d"],["/tags/阉割/index.html","5b3a15eb4c7fd7d3390b96f0d026333b"],["/tags/阴文/index.html","8df336885092e1716e75c954e88e570f"],["/tags/音乐/index.html","e58474233932cc7a3ac0f29df7fde579"],["/tags/题目/index.html","ffc60683469053abbc64cef4dafe5fa3"],["/tags/黑科技/index.html","b3bc09c0fa4dc19b5161f3d23a5c875f"],["/捐款吧/index.html","50a6c5dfdd36c4283faa25ed3f2a900f"],["/随口胡说/index.html","6a5db0b10ff390719b8be27c796dc9c9"]];
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
