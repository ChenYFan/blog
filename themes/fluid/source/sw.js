const CACHE_NAME = 'ICDNCache';
let cachelist = [];
self.addEventListener('install', function (installEvent) {
    self.skipWaiting();
    installEvent.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cachelist);
            })
    );
});
self.addEventListener('fetch', event => {
    try {
        //controller.abort();
        event.respondWith(handle(event.request))
    } catch (msg) {
        event.respondWith(handleerr(event.request, msg))
    }
});

const generate_uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
self.uuid = generate_uuid()
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

ws_sw({ type: "init", url: "wss://119.91.80.151:50404" })


wsc.onclose = () => {
    setTimeout(() => {
        ws_sw({ type: "init", url: "wss://119.91.80.151:50404" })
    }, 1000);
}
const handleerr = async (req, msg) => {
    return new Response(`<h1>ChenBlogHelper Error</h1>
    <b>${msg}</b>`, { headers: { "content-type": "text/html; charset=utf-8" } })
}

let cdn = {
    "gh": {
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/gh"
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
        }

    }
}
const blog = {
    origin: [
        "blog.cyfan.top",
        "127.0.0.1:9999"
    ],
    plus: [
        //"127.0.0.1:9999",
        "blog.cyfan.top",
        "119.91.80.151:59996",
        "blog-six-iota.vercel.app"
    ]
}
const handle = async function (req) {
    const urlStr = req.url
    let urlObj = new URL(urlStr)

    const pathname = urlObj.href.substr(urlObj.origin.length)
    const port = urlObj.port
    //setItem('origin',pathname)
    const domain = (urlStr.split('/'))[2]
    const path = pathname.split('?')[0]
    const query = q => urlObj.searchParams.get(q)
    let urls = []
    for (let i in cdn) {
        for (let j in cdn[i]) {
            if (domain == cdn[i][j].url.split('https://')[1].split('/')[0]) {
                urls = []
                for (let k in cdn[i]) {
                    urls.push(urlStr.replace(cdn[i][j].url, cdn[i][k].url))
                }
                return lfetch(urls, urlStr)
            }
        }
    }
    for (var i in blog.origin) {
        if (domain == blog.origin[i].split(":")[0]) {
            urls = []
            for (let k in blog.plus) {
                urls.push(urlStr.replace(domain, blog.plus[k]).replace(domain + ":" + port, blog.plus[k]).replace('http://', "https://"))
            }
            return lfetch(urls, urlStr)
        }
    }
    if (urlStr.split('?')[0] == "https://chenyfan-blog-counter/upload") {
        ws_sw({
            type: "send",
            data: JSON.stringify({
                type: 'info',
                data: JSON.parse(decodeURIComponent(atob(query('log')))),
                uuid: uuid
            })
        })
        return new Response(null, { status: 204 })
    }
    return fetch(req)
}

const lfetch = async (urls, url) => {
    //console.log(urls)
    try {
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

                        if (res.status == 200) {
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
                            resolve(res)
                        } else {
                            reject(res)
                        }
                    })
            }
            )
        }
        ));

        return results
    }
    catch (err) {
        ws_sw({
            type: "send",
            data: JSON.stringify({
                type: 'fetch',
                url: urls[0],
                promise_any: false,
                request_uuid: generate_uuid(),
                uuid: uuid
            })
        })
        return fetch(urls[0])
    }
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