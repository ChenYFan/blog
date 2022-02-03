---
title: 艹,你怎么能这样 - SWの奇技淫巧
author: ChenYFan
tags:
  - ServiceWorker
  - 黑科技
categories:
  - 随心扯
des: 从各种奇葩的目的和案例中挖掘sw是如何做到这些看起来匪夷所思的事物
#hide: false
key: 'serviceworker,sw'
abbrlink: c0af8604
hide: false
index_img: 'https://npm.elemecdn.com/chenyfan-os@0.0.0-r11/1.jpg'
banner_img: 'https://npm.elemecdn.com/chenyfan-os@0.0.0-r11/1.jpg'
date: 2022-02-2 13:57:45
---


ServiceWorker很厉害,那他能干什么?这篇文章我将写出几个我写的\我在用的\我看到的几个奇葩但很有用处的小项目,希望这些能够帮到你.

<!--more-->

> 本文所标记的内容,大多是直接复制粘贴即可实现的.但依然会存在这和您的服务存在冲突这一情况.请阅读上一篇基础文章[欲善其事，必利其器 - 论如何善用ServiceWorker](/p/c0af86bb.html)进行合理的修改.


# 前端智能切换NPM/Github CDN节点 - IntelligentCDN计划

众所周知,jsd国内掉备案,能用的节点几乎不存在.这个脚本将在SW端通过Promise.any的方式,在用户界面上劫持所有著名的CDN托管服务,并并发访问其他所有CDN,优选选择最快的节点并返回内容,同时可以避免部分CDN单点故障,提升页面静态资源加载速度和加载可用性.

同时,这个脚本还会将非latest资源永久缓存,提升二次访问速度.

> 注意,此方法是以流量换速度的方式进行的,虽然在任何一个节点返回正确内容后会打断其余请求,但依然会造成不可避免的流量消耗(+~20%).如果你面向的是手机流量用户,请三思而后行

> 在这其中,`pigax_chenyfan`为我赞助的JP海外二次落地+pigax国内流量分发,此节点屏蔽色情与政治;`tianli`有自己的许可条款,建议前往[Tianli免费JSD镜像申请页](https://tianli-blog.club/2022/01/26/cdn/)查看详细


> 此代码与[freecdn-js](https://github.com/EtherDream/freecdn-js)核心功能相似,但实现方法并不同,并且完全支持动态网页.

> 此脚本仅加速npm\gh\jsd上的combine内容;WP加速原理类似,请自行更改.

代码:

```js
const CACHE_NAME = 'ICDNCache';
let cachelist = [];
self.addEventListener('install', async function (installEvent) {
    self.skipWaiting();
    installEvent.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cachelist);
            })
    );
});
self.addEventListener('fetch', async event => {
    try {
        event.respondWith(handle(event.request))
    } catch (msg) {
        event.respondWith(handleerr(event.request, msg))
    }
});
const handleerr = async (req, msg) => {
    return new Response(`<h1>CDN分流器遇到了致命错误</h1>
    <b>${msg}</b>`, { headers: { "content-type": "text/html; charset=utf-8" } })
}
let cdn = {
    "gh": {
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/gh"
        },
        jsdelivr_fastly: {
            "url": "https://fastly.jsdelivr.net/gh"
        },
        jsdelivr_gcore: {
            "url": "https://gcore.jsdelivr.net/gh"
        },
        pigax_jsd: {
            "url": "https://u.pigax.cn/gh"
        },
        pigax_chenyfan_jsd: {
            "url": "https://cdn-jsd.pigax.cn/gh"
        },
        tianli: {
            "url": "https://cdn1.tianli0.top/gh"
        }
    },
    "combine": {
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/combine"
        },
        jsdelivr_fastly: {
            "url": "https://fastly.jsdelivr.net/combine"
        },
        jsdelivr_gcore: {
            "url": "https://gcore.jsdelivr.net/combine"
        },
        pigax_jsd: {
            "url": "https://u.pigax.cn/combine"
        },
        pigax_chenyfan_jsd: {
            "url": "https://cdn-jsd.pigax.cn/combine"
        },
        tianli: {
            "url": "https://cdn1.tianli0.top/combine"
        }
    },
    "npm": {
        eleme: {
            "url": "https://npm.elemecdn.com"
        },
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/npm"
        },
        zhimg: {
            "url": "https://unpkg.zhimg.com"
        },
        unpkg: {
            "url": "https://unpkg.com"
        },
        bdstatic: {
            "url": "https://code.bdstatic.com/npm"
        },
        pigax_jsd: {
            "url": "https://u.pigax.cn/npm"
        },
        pigax_unpkg: {
            "url": "https://unpkg.pigax.cn/"
        },
        pigax_chenyfan_jsd: {
            "url": "https://cdn-jsd.pigax.cn/npm"
        },
        tianli: {
            "url": "https://cdn1.tianli0.top/npm"
        }

    }
}
const handle = async function (req) {
    const urlStr = req.url
    const domain = (urlStr.split('/'))[2]
    let urls = []
    for (let i in cdn) {
        for (let j in cdn[i]) {
            if (domain == cdn[i][j].url.split('https://')[1].split('/')[0] && urlStr.match(cdn[i][j].url)) {
                urls = []
                for (let k in cdn[i]) {
                    urls.push(urlStr.replace(cdn[i][j].url, cdn[i][k].url))
                }
                if (urlStr.indexOf('@latest/') > -1) {
                    return lfetch(urls, urlStr)
                } else {
                    return caches.match(req).then(function (resp) {
                        return resp || lfetch(urls, urlStr).then(function (res) {
                            return caches.open(CACHE_NAME).then(function (cache) {
                                cache.put(req, res.clone());
                                return res;
                            });
                        });
                    })
                }
            }
        }
    }
    return fetch(req)
}
const lfetch = async (urls, url) => {
    let controller = new AbortController();
    const PauseProgress = async (res) => {
        return new Response(await (res).arrayBuffer(), { status: res.status, headers: res.headers });
    };
    if (!Promise.any) {
        Promise.any = function (promises) {
            return new Promise((resolve, reject) => {
                promises = Array.isArray(promises) ? promises : []
                let len = promises.length
                let errs = []
                if (len === 0) return reject(new AggregateError('All promises were rejected'))
                promises.forEach((promise) => {
                    promise.then(value => {
                        resolve(value)
                    }, err => {
                        len--
                        errs.push(err)
                        if (len === 0) {
                            reject(new AggregateError(errs))
                        }
                    })
                })
            })
        }
    }
    return Promise.any(urls.map(urls => {
        return new Promise((resolve, reject) => {
            fetch(urls, {
                signal: controller.signal
            })
                .then(PauseProgress)
                .then(res => {
                    if (res.status == 200) {
                        controller.abort();
                        resolve(res)
                    } else {
                        reject(res)
                    }
                })
        })
    }))
}
```

额外的,这个功能还可以与CloudFlare新出的`Zaraz`插件完美匹配.`Zaraz`可以为托管在CF的网站上的网页添加一段html代码,配合CloudFlareWorker虚拟化sw脚本路径,即可做到每一个页面都用此脚本加速,无需手动一个一个适配.

## Zaraz + IntelligentCDN
