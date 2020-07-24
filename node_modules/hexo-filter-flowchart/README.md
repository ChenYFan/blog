# hexo-filter-flowchart

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/hexo-filter-flowchart/blob/master/LICENSE)

[![npm:](https://img.shields.io/npm/v/hexo-filter-flowchart.svg?style=flat-square)](https://www.npmjs.com/packages/hexo-filter-flowchart)
[![Package Quality](http://npm.packagequality.com/shield/hexo-filter-flowchart.svg)](http://packagequality.com/#?package=hexo-filter-flowchart)

> Generate flowchart diagrams for Hexo.

## Install

```
npm install --save hexo-filter-flowchart
```

## Usage

This plugin is based on [flowchart.js](https://github.com/adrai/flowchart.js), so you can defined the chart as follow:

    ```flow
    st=>start: Start|past:>http://www.google.com[blank]
    e=>end: End:>http://www.google.com
    op1=>operation: My Operation|past
    op2=>operation: Stuff|current
    sub1=>subroutine: My Subroutine|invalid
    cond=>condition: Yes
    or No?|approved:>http://www.google.com
    c2=>condition: Good idea|rejected
    io=>inputoutput: catch something...|request

    st->op1(right)->cond
    cond(yes, right)->c2
    cond(no)->sub1(left)->op1
    c2(yes)->io->e
    c2(no)->op2->e
    ```

![snapshot.svg](https://cdn.rawgit.com/bubkoo/hexo-filter-flowchart/master/snapshot.svg)

## Config

In your site's `_config.yml`:

```yaml
flowchart:
  # raphael:   # optional, the source url of raphael.js
  # flowchart: # optional, the source url of flowchart.js
  options: # options used for `drawSVG`
```

Your config will be merged into default config:

```json
{
  "raphael": "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js",
  "flowchart": "https://cdnjs.cloudflare.com/ajax/libs/flowchart/1.6.5/flowchart.min.js",
  "options": {
    "scale": 1,
    "line-width": 2,
    "line-length": 50,
    "text-margin": 10,
    "font-size": 12
  }
}
```

## Related

- [hexo-toc](https://github.com/bubkoo/hexo-toc) Insert a markdown TOC before posts be rendered.
- [hexo-filter-fenced-code](https://github.com/bubkoo/hexo-filter-fenced-code) Extend syntax for the native fenced code block.
- [hexo-filter-sequence](https://github.com/bubkoo/hexo-filter-sequence) Generate UML sequence diagrams for Hexo.
- [hexo-filter-sub](https://github.com/bubkoo/hexo-filter-sub) Generate subscript (`<sub>`) tag for Hexo.
- [hexo-filter-sup](https://github.com/bubkoo/hexo-filter-sup) Generate superscript (`<sup>`) tag for Hexo.
- [hexo-theme-formula](https://github.com/bubkoo/hexo-theme-formula) Hexo theme base on jade and less.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/hexo-filter-flowchart/issues/new).
