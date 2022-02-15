---
title: 用户端面板
banner_img: 'https://npm.elemecdn.com/chenyfan-os@0.0.0-r6'
---

<p id="info"></p>

<script>

    const mCh = {
        init: () => {
            window.messageChannel = new MessageChannel();
            navigator.serviceWorker.controller.postMessage({
                type: 'INIT',
            }, [messageChannel.port2]);
        },
        send: (data) => {

            return new Promise((resolve, reject) => {
                const uuid = (() => {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                })()
                navigator.serviceWorker.controller.postMessage({
                    type: 'DATA',
                    data: data,
                    id: uuid
                });
                setTimeout(() => {
                    reject({
                        message: 'timeout',
                        ok: false
                    })
                }, 2000);
                messageChannel.port1.onmessage = (event) => {
                    if (event.data.id === uuid) {
                        resolve({
                            message: event.data.data,
                            ok: true
                        })
                    };
                }
            })
        }
    };
    mCh.init()
    mCh.send({type:"GET"}).then(data=>{console.log(data);document.getElementById('info').innerText = 'Hello World!'})
</script>