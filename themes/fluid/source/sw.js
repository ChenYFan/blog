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
        "blog.cyfan.top",
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
    const query = (() => {
        let n = {}
        if (pathname.indexOf('?') === -1) { return {} }
        for (let y of pathname.split('?')[1].split('&')) {
            n[y.split('=')[0]] = y.split('=')[1]
        }
        return n
    })()
    let urls = []
    for (let i in cdn) {
        for (let j in cdn[i]) {
            if (!!urlStr.match(cdn[i][j].url)) {
                urls = []
                for (let k in cdn[i]) {
                    urls.push(urlStr.replace(cdn[i][j].url, cdn[i][k].url))
                }
                return lfetch(urls)
            }
        }
    }
    for (var i in blog.origin) {
        if (!!urlStr.match(blog.origin[i])) {
            urls = []
            for (let k in blog.plus) {
                urls.push(urlStr.replace(domain, blog.plus[k]).replace(domain + ":" + port, blog.plus[k]).replace('http://', "https://"))
            }
            return lfetch(urls)
        }
    }
    return fetch(req)
}

const lfetch = async (urls) => {
    //console.log(urls)
    try {
        let controller = new AbortController();
        const PauseProgress = async (res) => {
            return new Response(await (res).arrayBuffer(), { headers: res.headers });
        };
        let results = Promise.any(urls.map(urls => fetch(urls, {
            signal: controller.signal
        }).then(PauseProgress).then(res => {
            controller.abort();
            return res
        })));
        return results
    }
    catch (err) {
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