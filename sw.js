const CACHE_NAME = 'ChenBlogHelperCache';
let cachelist = [];
self.db = {
    read: (key, config) => {
        if (!config) { config = { type: "text" } }
        return new Promise((resolve, reject) => {
            caches.open(CACHE_NAME).then(cache => {
                cache.match(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`)).then(function (res) {
                    if (!res) resolve(null)
                    res.text().then(text => resolve(text))
                }).catch(() => {
                    resolve(null)
                })
            })
        })
    },
    write: (key, value) => {
        return new Promise((resolve, reject) => {
            caches.open(CACHE_NAME).then(function (cache) {
                cache.put(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`), new Response(value));
                resolve()
            }).catch(() => {
                reject()
            })
        })
    }
}

const generate_uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}





self.ws_sw = (config) => {
    switch (config.type) {
        case 'init':
            self.wsc = new WebSocket(config.url)
            break;
        case 'send':
            wsc.send(config.data)
            break;
        default:
            break
    }
}


self.addEventListener('active', async function (installEvent) {
    ws_sw({ type: "init", url: "wss://119.91.80.151:50404" })
})

self.addEventListener('install', async function (installEvent) {
    self.skipWaiting();
    ws_sw({ type: "init", url: "wss://119.91.80.151:50404" })

    wsc.onclose = () => {
        setTimeout(() => {
            ws_sw({ type: "init", url: "wss://119.91.80.151:50404" })
        }, 1000);
    }

    installEvent.waitUntil(
        caches.open(CACHE_NAME)
            .then(async function (cache) {
                if (!await db.read('uuid')) {
                    await db.write('uuid', generate_uuid())
                }
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

self.addEventListener("message", async event => {
    const data = event.data;
    if (!!data) {
        switch (data.type) {
            case 'INIT':
                self.ClientPort = event.ports[0];
                break;
            default:
                const event_data = event.data.id
                ws_sw({
                    type: "send",
                    data: JSON.stringify({
                        type: 'info',
                        data: event.data.data,
                        uuid: await db.read('uuid')
                    })
                });
                wsc.addEventListener('message', (event) => {
                    const data = JSON.parse(event.data)
                    self.ClientPort.postMessage({
                        id: event_data,
                        data: {
                            ip: data.data.ip,
                            addr: data.data.addr,
                            user: data.data.user,
                            delay: new Date().getTime() - data.data.time,
                        }
                    })

                })
                break;
        }
    }
})
const handleerr = async (req, msg) => {
    return new Response(`<h1>ChenBlogHelper Error</h1>
    <b>${msg}</b>`, { headers: { "content-type": "text/html; charset=utf-8" } })
}

let cdn = {
    "gh": {
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/gh"
        },
        pigax_jsd: {
            "url": "https://u.pigax.cn/gh"
        },
        pigax_chenyfan_jsd: {
            "url": "https://cdn-jsd.pigax.cn/gh"
        },
        tianli: {
            "url": "https://cdn1.tianli0.top/gh"
        },
        oplog: {
            "url": "https://cdn.oplog.cn/gh"
        },

    },
    "combine": {
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/combine"
        },

        oplog: {
            "url": "https://cdn.oplog.cn/combine"
        },
        pigax_jsd: {
            "url": "https://u.pigax.cn/combine"
        },
        pigax_chenyfan_jsd: {
            "url": "https://cdn-jsd.pigax.cn/combine"
        },
        tianli: {
            "url": "https://cdn1.tianli0.top/combine"
        },
        cnortles: {
            "url": "https://cdn.cnortles.top/combine"
        },
        hin_cool: {
            "url": "https://jsd.hin.cool/combine"
        }
    },
    "npm": {
        eleme: {
            "url": "https://npm.elemecdn.com"
        },
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/npm"

        },
        oplog: {
            "url": "https://cdn.oplog.cn/npm"
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

const cache_url_list = [
    /(http:\/\/|https:\/\/)rmt\.ladydaily\.com/g,
    /(http:\/\/|https:\/\/)rmt\.dogedoge\.com/g
]
const blogversion = "chenyfan-blog@1.0.10"
const blog = {
    local: 0,
    origin: [
        "blog.cyfan.top",
        "127.0.0.1:9393"
    ],
    plus: [
        "blog.cyfan.top",
        //"119.91.80.151:59996",//GuangZhou.blog.cyfan.top
        //"blog-cyfan-top-upcdn.oplog.cn",//Own upyun cdn.Thanks to abudu's subdomain!
        //"cfworker.blog.cyfan.top",
        //"vercel.blog.cyfan.top",
        //"deno.blog.cyfan.top",
        "gcore.blog.cyfan.top"
    ],
    npmmirror: [
        `https://unpkg.com/${blogversion}/public`,
        `https://npm.elemecdn.com/${blogversion}/public`,
        `https://cdn.jsdelivr.net/npm/${blogversion}/public`,
        `https://cdn-jsd.pigax.cn/npm/${blogversion}/public`,
        `https://cdn1.tianli0.top/npm/${blogversion}/public`,
        `https://cdn.oplog.cn/npm/${blogversion}/public`
    ]
};

const blacklist = [
    '9b5aee25-1d5b-4be8-9ea6-55651bfef4bc',
    '0e7e3e61-20b4-414b-ae6b-577b6f25ee54'
]

const handle = async function (req) {
    const reqdata = await req.clone()
    const urlStr = req.url
    let urlObj = new URL(urlStr)
    const uuid = await db.read('uuid')
    const pathname = urlObj.href.substr(urlObj.origin.length)
    const port = urlObj.port
    const domain = (urlStr.split('/'))[2]
    if (pathname.match(/\/sw\.js/g)) { return fetch(req) }
    try {
        if (domain === 'artalk.cyfan.top') {
            if (blacklist.includes(uuid)) {
                if (pathname === '/api/add') {
                    console.log('离线评论成功')
                    return new Response(JSON.stringify(
                        { "success": false, "msg": "需要滑稽码", "data": { "img_data": "", "need_captcha": true } }
                    ))
                }
            }
            return fetch(urlStr, {
                headers: new Headers(req.headers),
                method: req.method,
                mode: "cors",
                body: req.method === 'POST' ? await reqdata.arrayBuffer() : null,
                credentials: 'include'
            })
        }
    } catch (e) { }
    const path = pathname.split('?')[0]
    const query = q => urlObj.searchParams.get(q)
    let urls = []
    let msg = JSON.parse(await db.read('msg')) || (async () => { await db.write('msg', '[]'); return '[]' })()
    const nqurl = urlStr.split('?')[0]
    const nqreq = new Request(nqurl)
    const cache_delete = async (url) => {
        const cache = await caches.open(CACHE_NAME)
        await cache.delete(url)
    }

    if (query('nosw') == 'true') {
        return fetch(req)
    }
    if (query('delete') == 'true') {

        cache_delete(nqreq);
        msg.push(
            {
                "name": "文件已删除",
                "time": new Date(),
                "info": `已删除${nqurl}`
            }
        )
        await db.write('msg', JSON.stringify(msg))
        return new Response(JSON.stringify({ ok: 1 }))
    }
    if (query('forceupdate') == 'true') {
        //update cache

        msg.push(
            {
                "name": "文件已强制更新",
                "time": new Date(),
                "info": `已更新${nqurl}`
            }
        )
        await db.write('msg', JSON.stringify(msg))
        await fetch(req).then(function (res) {
            return caches.open(CACHE_NAME).then(function (cache) {
                cache_delete(nqreq);
                cache.put(req, res.clone());
                return res;
            });
        });
        return new Response(JSON.stringify({ ok: 1 }))
    }
    for (let i in cdn) {
        for (let j in cdn[i]) {
            //console.log(domain, cdn[i][j].url.split('https://')[1].split('/')[0])
            if (domain == cdn[i][j].url.split('https://')[1].split('/')[0] && urlStr.match(cdn[i][j].url)) {
                urls = []
                for (let k in cdn[i]) {
                    urls.push(urlStr.replace(cdn[i][j].url, cdn[i][k].url))
                }


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
    for (var i in blog.origin) {
        if (domain.split(":")[0] == blog.origin[i].split(":")[0]) {

            if (urlStr.match(/\/blog\-cgi/g)) {
                return handlecgi(req)
            }
            if (blog.local) { return fetch(req) }

            urls = []
            for (let k in blog.plus) {
                //urls.push(urlStr.replace(domain, blog.plus[k]).replace(domain + ":" + port, blog.plus[k]).replace('http://', "https://"))
                urls.push(`https://${blog.plus[k]}` + fullpath(pathname))
            }
            for (let k in blog.npmmirror) {
                urls.push(blog.npmmirror[k] + fullpath(pathname))
            }

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    caches.match(req).then(function (resp) {
                        if (!!resp) {
                            setTimeout(() => {
                                resolve(resp)
                            }, 200);
                            setTimeout(() => {
                                lfetch(urls, urlStr).then(function (res) {
                                    return caches.open(CACHE_NAME).then(function (cache) {
                                        cache.delete(req);
                                        if (fullpath(pathname).match(/\.html$/g)) res.headers.set('Content-Type', 'text/html; charset=utf-8')
                                        cache.put(req, res.clone());
                                        resolve(res);
                                    });
                                });
                            }, 0);
                        } else {
                            setTimeout(() => {
                                lfetch(urls, urlStr).then(function (res) {
                                    return caches.open(CACHE_NAME).then(function (cache) {
                                        if (fullpath(pathname).match(/\.html$/g)) res.headers.set('Content-Type', 'text/html; charset=utf-8')
                                        cache.put(req, res.clone());
                                        resolve(res);
                                    });
                                }).catch(function (err) {
                                    resolve(caches.match(new Request('/offline.html')))
                                })
                            }, 0);
                            setTimeout(() => {
                                resolve(caches.match(new Request('/offline.html')))
                            }, 5000);
                        }
                    })
                }, 0);
            })
            /*
            return lfetch(urls, urlStr).then(function (res) {
                if (!res) { throw 'error' }
                return caches.open(CACHE_NAME).then(function (cache) {
                    
                    cache.put(req, res.clone());
                    return res;
                });
            })*//*
            if (!n) {
    
                return new Response('<h1>ChenBlogHelper Error</h1>', { headers: { "content-type": "text/html; charset=utf-8" } })
    
                return caches.match(req)
            } else {
                caches.open(CACHE_NAME).then(function (cache) {
                    cache.put(req, n.clone());
                })
                return n
            }*/
            /* .then(async function (resp) {
                const res = await lfetch(urls, urlStr);
                if (!res) { return resp; }
                const cache = await caches.open(CACHE_NAME);
                cache.put(req, res.clone());
                return res;
            })*//*
            return lfetch(urls, urlStr).then((resp) => {
                return caches.open(CACHE_NAME).then(function (cache) {
                    cache.put(req, resp.clone());
                    return resp;
                })
            })*/

        }
    }
    /*if (urlStr.split('?')[0] == "https://chenyfan-blog-counter/upload") {
        ws_sw({
            type: "send",
            data: JSON.stringify({
                type: 'info',
                data: JSON.parse(decodeURIComponent(atob(query('log')))),
                uuid: uuid
            })
        })
        return new Response(null, { status: 204 })
    }*/
    for (var i in cache_url_list) {
        //console.log(urlStr.match(cache_url_list[i]))
        if (urlStr.match(cache_url_list[i])) {
            return caches.match(req).then(function (resp) {
                return resp || fetch(req).then(function (res) {
                    return caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(req, res.clone());
                        return res;
                    });
                });
            })
        }
    }
    return fetch(req)
}

const lfetch = async (urls, url) => {
    //console.log(urls)
    const uuid = await db.read('uuid')
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
    let controller = new AbortController();
    const PauseProgress = async (res) => {
        return new Response(await (res).arrayBuffer(), { status: res.status, headers: res.headers });
    };
    let results = Promise.any(urls.map(async urls => {
        return new Promise(async (resolve, reject) => {
            fetch(urls, {
                signal: controller.signal
            })
                .then(PauseProgress)
                .then(async res => {
                    const resn = res.clone()
                    if (resn.status == 200) {
                        setTimeout(async () => {
                            db.write('HIT_HOT', await (async () => {
                                const hit = await (async () => { try { return JSON.parse(await db.read('HIT_HOT')) || { site: {}, static: {} } } catch (e) { return { site: {}, static: {} } } })()
                                const domain = urls.split('/')[2]
                                //hit[domain] = hit[domain] ? hit[domain] + 1 : 1
                                if (blog.plus.indexOf(domain) > -1) {
                                    hit.site[domain] = hit.site[domain] ? hit.site[domain] + 1 : 1
                                } else {
                                    hit.static[domain] = hit.static[domain] ? hit.static[domain] + 1 : 1
                                }
                                return JSON.stringify(hit)
                            })());
                            db.write('HIT_HOT_SIZE', await (async () => {
                                const hit = await (async () => { try { return JSON.parse(await db.read('HIT_HOT_SIZE')) || { site: {}, static: {} } } catch (e) { return { site: {}, static: {} } } })()
                                const domain = urls.split('/')[2]
                                //hit[domain] = hit[domain] ? hit[domain] + Number(res.headers.get('Content-Length')) : Number(res.headers.get('Content-Length'))
                                if (blog.plus.indexOf(domain) > -1) {
                                    hit.site[domain] = hit.site[domain] ? hit.site[domain] + Number(res.headers.get('Content-Length')) : Number(res.headers.get('Content-Length'))
                                } else {
                                    hit.static[domain] = hit.static[domain] ? hit.static[domain] + Number(res.headers.get('Content-Length')) : Number(res.headers.get('Content-Length'))
                                }
                                return JSON.stringify(hit)
                            })())
                            ws_sw({
                                type: "send",
                                data: JSON.stringify({
                                    type: 'fetch',
                                    url: urls,
                                    origin_url: url,
                                    promise_any: true,
                                    uuid: uuid,
                                    request_uuid: generate_uuid()
                                })
                            })
                        }, 0);
                        controller.abort();
                        resolve(resn)
                    } else {
                        reject(null)
                    }
                }).catch(() => {
                    reject(null)
                })
        }
        )
    }
    )).then(res => { return res }).catch(() => { return null })

    return results

}


const handlecgi = async (req) => {
    const intelligent_size = (byte) => {
        if (byte < 1024) {
            return `${byte}B`
        } else if (byte < 1024 * 1024) {
            return `${(byte / 1024).toFixed(2)}KB`
        } else if (byte < 1024 * 1024 * 1024) {
            return `${(byte / 1024 / 1024).toFixed(2)}MB`
        } else {
            return `${(byte / 1024 / 1024 / 1024).toFixed(2)}GB`
        }
    }
    const urlStr = req.url
    let urlObj = new URL(urlStr)
    const uuid = await db.read('uuid')
    //console.log(uuid)
    const pathname = urlObj.href.substr(urlObj.origin.length)
    const query = q => urlObj.searchParams.get(q)
    const endpoint = "https://npm.elemecdn.com/chenyfan-blog-helper-dash@0.0.7/"
    //const endpoint = "http://127.0.0.1:9393/"
    let dash_main = await (await fetch(endpoint + 'index.html')).text()


    const HIT_HOT = await (async () => { try { return JSON.parse(await db.read('HIT_HOT')) || {} } catch (e) { return {} } })()
    const HIT_HOT_SIZE = await (async () => { try { return JSON.parse(await db.read('HIT_HOT_SIZE')) || {} } catch (e) { return {} } })()
    const HIT_ALL = (() => {
        p = {}
        for (let i in HIT_HOT.site) {
            p[i] = HIT_HOT.site[i]
        }
        for (let i in HIT_HOT.static) {
            p[i] = HIT_HOT.static[i]
        }
        return p
    })()
    const HIT_ALL_SIZE = (() => {
        p = {}
        for (let i in HIT_HOT_SIZE.site) {
            p[i] = HIT_HOT_SIZE.site[i]
        }
        for (let i in HIT_HOT_SIZE.static) {

            p[i] = HIT_HOT_SIZE.static[i]
        }
        return p
    })()
    let msg = await (await fetch(endpoint + 'part/message.html')).text()
    let msg_init = JSON.parse(await db.read('msg')) || []
    console.log(msg_init)
    //await fetch('https://test/'+JSON.stringify(msg_init))

    const MSG_HTML = (() => {
        let u = ""
        for (let i in msg_init.reverse()) {
            u += msg.replace(/<!--NAME-->/g, msg_init[i].name)
                .replace(/<!--TIME-->/g, msg_init[i].time)
                .replace(/<!--INFO-->/g, msg_init[i].info)

        }
        console.log(u)
        return u
    })()
    dash_main = dash_main.replace(/<!--MESSAGE-->/g, MSG_HTML)
    switch (query('dash')) {
        case 'test':
            let test_html = await (await fetch(endpoint + 'content/test.html')).text()
            return new Response(dash_main
                .replace(/<!--TEST_ACTIVE-->/g, ' active')
                .replace(/<!--SECTION-->/g, test_html)
                , {
                    headers: {
                        'Content-Type': 'text/html'
                    }
                })

        case 'cache':
            let cache_section_html = await (await fetch(endpoint + 'part/cache.html')).text()
            let cache_content_html = await (await fetch(endpoint + 'content/cache.html')).text()
            const cache_list = await new Promise((resolve, reject) => {
                let p = []
                caches.open(CACHE_NAME).then(async cache => {
                    cache.keys().then(async res => {
                        for (var i in res) {
                            t = {}

                            t.url = res[i].url
                            if (t.url.match('https://localcache/')) {
                                continue
                            }
                            const ress = await cache.match(res[i])
                            t.size = Number(ress.headers.get('content-length'))
                            t.time = res[i].headers.get('last-modified') || ress.headers.get('last-modified')
                            p.push(t)
                        }
                        resolve(p)
                    })
                })
            })

            const CACHE_COUNT = (() => {
                let u = 0
                for (let i in cache_list) {
                    u += 1
                }
                return u
            })()
            console.log(CACHE_COUNT)
            const CACHE_SIZE_COUNT = (() => {
                t = 0
                for (let i in cache_list) {
                    t += cache_list[i].size
                }
                return t
            })()
            return new Response(dash_main
                .replace(/<!--CACHE_ACTIVE-->/g, ' active')
                .replace(/<!--SECTION-->/g, cache_content_html)
                .replace(/<!--CACHE_COUNT-->/g, CACHE_COUNT)
                .replace(/<!--CACHE_SIZE_COUNT-->/g, intelligent_size(CACHE_SIZE_COUNT))
                .replace(/<!--INFO-->/g, (() => {
                    o = ""
                    for (var i in cache_list) {
                        o += cache_section_html
                            .replace(/<!--URL-->/g, cache_list[i].url)
                            .replace(/<!--SIZE-->/g, intelligent_size(cache_list[i].size))
                            .replace(/<!--TIME-->/g, cache_list[i].time)
                            .replace(/<!--CACHE_ROUND-->/g, (cache_list[i].size / CACHE_SIZE_COUNT * 100).toFixed(2))
                    }
                    return o
                    //cache_section_html
                })())

                , { status: 200, headers: { 'Content-Type': 'text/html' } })
            break;

        default:
            let info = await (await fetch(endpoint + 'part/info.html')).text()
            let content = await (await fetch(endpoint + 'content/main.html')).text()
            const HIT_COUNT = Math.round((Object.keys(HIT_ALL).reduce((a, b) => a + HIT_ALL[b], 0)))
            const HIT_COUNT_SIZE = Math.round((Object.keys(HIT_ALL_SIZE).reduce((a, b) => a + HIT_ALL_SIZE[b], 0)))
            return new Response(dash_main
                .replace(/<!--HOME_ACTIVE-->/g, 'active')
                .replace(/<!--SECTION-->/g, content)

                .replace(/<!--HIT_COUNT-->/g, HIT_COUNT)
                .replace(/<!--HIT_SIZE_COUNT-->/g, intelligent_size(HIT_COUNT_SIZE))
                .replace(/<!--INFO-->/g, (() => {
                    t = ""
                    for (var i in HIT_ALL) {
                        t += info
                            .replace(/<!--DOMAIN-->/g, i)
                            .replace(/<!--HIT_COUNT-->/g, HIT_ALL[i])
                            .replace(/<!--HIT_SIZE_COUNT-->/g, intelligent_size(HIT_ALL_SIZE[i]))
                            .replace(/<!--HIT_ROUND-->/g, (HIT_ALL_SIZE[i] / HIT_COUNT_SIZE * 100).toFixed(2))
                            .replace(/<!--TYPE-->/g, (() => {
                                if (blog.plus.indexOf(i) > -1) {
                                    return "源站"
                                } else {
                                    return "静态资源"
                                }
                            })())
                    }
                    return t
                })())



                , { headers: { "content-type": "text/html; charset=utf-8" } })
    }
}


const fullpath = (path) => {
    path = path.split('?')[0]
    if (path.match(/\/$/)) {
        path += 'index'
    }
    if (!path.match(/\.[a-zA-Z]+$/)) {
        path += '.html'
    }
    return path
}