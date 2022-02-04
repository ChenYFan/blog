const CACHE_NAME = 'ChenBlogHelperCache';
let cachelist = [
    '/offline.html',
    'https://npm.elemecdn.com/chenyfan-os@0.0.0-r6'
];
self.db = {
    read: (key, config) => {
        if (!config) { config = { type: "text" } }
        return new Promise((resolve, reject) => {
            caches.match(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`)).then(function (res) {
                res.text().then(text => resolve(text))
            }).catch(() => {
                resolve(null)
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
/*
(async () => {
    try {
        self.broadcast = new BroadcastChannel('count-channel');

        broadcast.onmessage = async (event) => {
            switch (event.data.type) {
                case 'upload':
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
                        broadcast.postMessage({
                            ip: data.data.ip,
                            addr: data.data.addr,
                            user: data.data.user,
                            delay: new Date().getTime() - data.data.time,
                        })

                    })

                    break;
                default:
                    if (await db.read('sw_install') == 'true') {
                        broadcast.postMessage({ ok: true })
                    } else {
                        await db.write('sw_install', 'true')
                        broadcast.postMessage({ ok: false })

                    }

                    break;
                //event.postMessage({ ok:true})
            }
        }
    } catch (e) {
        console.log("Broadcast无法建立，原因:" + e)
        ws_sw({
            type: "send",
            data: JSON.stringify({
                type: 'info',
                data: {
                    error: true,
                    msg: e
                },
                uuid: await db.read('uuid')
            })
        })
    }
})()
*/
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
        }
    },
    "combine": {
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/combine"
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

const cache_url_list = [
    /(http:\/\/|https:\/\/)rmt\.ladydaily\.com/g,
    /(http:\/\/|https:\/\/)rmt\.dogedoge\.com/g
]

const blog = {
    local: 1,
    origin: [
        "blog.cyfan.top",
        "127.0.0.1:12121"
    ],
    plus: [
        "blog.cyfan.top",
        "119.91.80.151:59996",
        "blog-six-iota.vercel.app",
        "cblog.deno.dev"
    ]
};
const handle = async function (req) {
    const urlStr = req.url
    let urlObj = new URL(urlStr)
    const uuid = await db.read('uuid')
    //console.log(uuid)
    const pathname = urlObj.href.substr(urlObj.origin.length)
    const port = urlObj.port
    //setItem('origin',pathname)
    const domain = (urlStr.split('/'))[2]
    const path = pathname.split('?')[0]
    const query = q => urlObj.searchParams.get(q)
    let urls = []
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
            if (blog.local) { return fetch(req) }

            urls = []
            for (let k in blog.plus) {
                urls.push(urlStr.replace(domain, blog.plus[k]).replace(domain + ":" + port, blog.plus[k]).replace('http://', "https://"))
            }

            return lfetch(urls, urlStr).then(function (res) {
                if (!res) { throw 'error' }
                return caches.open(CACHE_NAME).then(function (cache) {
                    cache.delete(req);
                    cache.put(req, res.clone());
                    return res;
                });
            }).catch(function (err) {
                return caches.match(req).then(function (resp) {
                    return resp || caches.match(new Request('/offline.html'))
                }
                )
            })/*
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
    let results = Promise.any(urls.map(urls => {
        return new Promise((resolve, reject) => {
            fetch(urls, {
                signal: controller.signal
            })
                .then(PauseProgress)
                .then(res => {
                    const resn = res.clone()
                    if (resn.status == 200) {
                        setTimeout(() => {
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


/*
const test_func = async () => {
    for (let i in cdn) {
        for (let j in cdn[i]) {
            let t1 = new Date().getTime()
            const n = await fetch(cdn[i][j].url + testurl[i] + '?' + Math.random())
            let t2 = new Date().getTime()
            if (n.status === 200) {
                cdn[i][j].time = t2 - t1
                console.log(`TEST:${cdn[i][j].url + testurl[i]} WITH ${t2 - t1}ms`)
            } else {
                cdn[i][j].time = 20000
                console.log(`TEST:${cdn[i][j].url + testurl[i]} WITH Erorr ${t2 - t1}ms`)
            }
        }
    }
    console.log(cdn)
}
//(async () => { await test_func() })();
//setInterval(async () => { test_func() }, 10000);*/