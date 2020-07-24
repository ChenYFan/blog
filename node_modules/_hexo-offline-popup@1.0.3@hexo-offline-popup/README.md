# hexo-offline-popup

hexo-offline-popup 是一个 [hexo](https://hexo.io) 插件， 它可加速您的Hexo网站的加载速度，以及网站内容更新弹窗提示。

该插件基于停止维护已久的hexo-service-worker插件，并在它的基础上加以改进。

## Install

```bash
npm i hexo-offline-popup --save
```

安装后, 运行 `hexo clean && hexo generate` 激活插件.

## Usage

如果网站提供的所有内容来自原始服务器，你不需要添加任何配置。只需安装和运行 `hexo clean && hexo generate`。

在博客根目录的 `_config.yml` 中添加以下配置.

```yaml
# offline config passed to sw-precache.
service_worker:
  maximumFileSizeToCacheInBytes: 5242880
  staticFileGlobs:
  - public/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}
  stripPrefix: public
  verbose: true
```

如果你有CDN资源，例：

```yaml
- https://cdn.some.com/some/path/some-script.js
- http://cdn.some-else.org/some/path/deeply/some-style.css
```

将此配置添加到根目录的 `_config.yml`

```yaml
service_worker:
  runtimeCaching:
    - urlPattern: /*
      handler: cacheFirst
      options:
        origin: cdn.some.com
    - urlPattern: /*
      handler: cacheFirst
      options:
        origin: cdn.some-else.org
```
