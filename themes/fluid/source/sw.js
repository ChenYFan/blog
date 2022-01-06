const CACHE_NAME = 'ICDNCache';
let cachelist = [];
const controller = new AbortController()
const signal = controller.signal
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

const handleerr = async (req, msg) => {
    return new Response(`<h1>ICDN用户端错误</h2>
    <b>${msg}</b>`, { headers: { "content-type": "text/html; charset=utf-8" } })
}

let cdn = {
    "gh": {
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/gh"
        }
    },
    "npm": {
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/npm"

        },
        zhimg: {
            "url": "https://unpkg.zhimg.com"
        },
        unpkg: {
            "url": "https://unpkg.com"
        },
        /*bdstatic: {
            "url": "https://code.bdstatic.com/npm"
        },*/
        eleme: {
            "url": "https://npm.elemecdn.com"
        }
    }
}
const testurl = {
    gh: "/jquery/jquery@main/package.json",
    npm: "/jquery@3.6.0/package.json"
    //npm: "xx"
}
const blog = {
    origin: [
        "blog.cyfan.top",

        "127.0.0.1:9999"
    ],
    plus: [
        "119.91.80.151:59996",
        "blog.cyfan.top"
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
    const query = (() => {
        let n = {}
        if (pathname.indexOf('?') === -1) { return {} }
        for (let y of pathname.split('?')[1].split('&')) {
            n[y.split('=')[0]] = y.split('=')[1]
        }
        return n
    })()
    for (let i in cdn) {
        for (let j in cdn[i]) {
            if (!!urlStr.match(cdn[i][j].url)) {
                res = await Promise.any((() => {
                    p = []
                    for (let k in cdn[i]) {
                        p.push(new Promise((resolve, reject) => {
                            fetch(urlStr.replace(cdn[i][j].url, cdn[i][k].url), {
                                signal: signal
                            }).then(res => {
                                if (res.status === 200) {
                                    resolve(res)
                                } else {
                                    reject(res)
                                }
                            })
                        }))
                    }
                    return p
                })());
                console.log("Origin:" + urlStr + " | " + "Get Source From:", res.url)
                //controller.abort();
                return res

            }
        }
    }
    for (var i in blog.origin) {
        if (!!urlStr.match(blog.origin[i])) {
            res = await Promise.any((() => {
                p = []
                for (let i in blog.plus) {
                    p.push(new Promise((resolve, reject) => {
                        fetch(urlStr.replace(domain, blog.plus[i]).replace(domain + ":" + port, blog.plus[i]).replace('http://',"https://"))
                        .then(res => {
                            if (res.status === 200) {
                                resolve(res)
                            } else {
                                reject(res)
                            }
                        }).catch(err => {
                            reject(err)
                        })
                    })
                    )
                }
                return p
            })());
            console.log("Get Blog From:", res.url)
            //controller.abort();
            return res
        }
    }
    return fetch(req)
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