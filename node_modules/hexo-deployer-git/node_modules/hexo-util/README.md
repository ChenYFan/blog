# hexo-util

[![Build Status](https://travis-ci.com/hexojs/hexo-util.svg?branch=master)](https://travis-ci.com/hexojs/hexo-util)
[![NPM version](https://badge.fury.io/js/hexo-util.svg)](https://www.npmjs.com/package/hexo-util)
[![Coverage Status](https://coveralls.io/repos/hexojs/hexo-util/badge.svg?branch=master&service=github)](https://coveralls.io/github/hexojs/hexo-util?branch=master)
[![dependencies Status](https://david-dm.org/hexojs/hexo-util/status.svg)](https://david-dm.org/hexojs/hexo-util)
[![devDependencies Status](https://david-dm.org/hexojs/hexo-util/dev-status.svg)](https://david-dm.org/hexojs/hexo-util?type=dev)

Utilities for [Hexo].

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Cache](#cache)
- [CacheStream](#cachestream)
- [camelCaseKeys](#camelcasekeysobj-options)
- [createSha1Hash](#createsha1hash)
- [decodeURL](#decodeurlstr)
- [deepMerge](#deepmergetarget-source)
- [encodeURL](#encodeurlstr)
- [escapeDiacritic](#escapediacriticstr)
- [escapeHTML](#escapehtmlstr)
- [escapeRegex](#escaperegexstr)
- [full_url_for](#full_url_forpath)
- [gravatar](#gravatarstr-options)
- [hash](#hashstr)
- [highlight](#highlightstr-options)
- [htmlTag](#htmltagtag-attrs-text-escape)
- [isExternalLink](#isexternallinkurl-sitehost-exclude)
- [Pattern](#patternrule)
- [Permalink](#permalinkrule-options)
- [prettyUrls](#prettyurlsurl-options)
- [prismHighlight](#prismhighlightstr-options)
- [relative_url](#relative_urlfrom-to)
- [slugize](#slugizestr-options)
- [spawn](#spawncommand-args-options)
- [stripHTML](#striphtmlstr)
- [wordWrap](#wordwrapstr-options)
- [tocObj](#tocobjstr-options)
- [truncate](#truncatestr-options)
- [unescapeHTML](#unescapehtmlstr)
- [url_for](#url_forpath-option)
- [bind(hexo)](#bindhexo)

## Installation

``` bash
$ npm install hexo-util --save
```

## Usage

``` js
var util = require('hexo-util');
```

### Cache()

A simple plain object cache

``` js
const cache = new Cache();

// set(key, value)
cache.set('foo', 'bar');

// get(key) => value
cache.get('foo');
// 'bar'

// has(key) => Boolean
cache.has('foo');
// true
cache.has('bar');
// false

// apply(key. value)
cache.apply('baz', () => 123);
// 123
cache.apply('baz', () => 456);
// 123
cache.apply('qux', 456);
// 456
cache.apply('qux', '789');
// 456

// del(key)
cache.del('baz');
cache.has('baz');
// false

// flush()
cache.flush();
cache.has('foo');
// false
```

### CacheStream()

Caches contents piped to the stream.

``` js
var stream = new CacheStream();

fs.createReadStream('/path/to/file').pipe(stream);

stream.on('finish', function(){
  // Read cache piped to the stream
  console.log(stream.getCache());

  // Destroy cache
  stream.destroy();
});
```

### camelCaseKeys(obj, options)

Convert object keys to camelCase. Original keys will be converted to getter/setter and sync to the camelCase keys.

``` js
camelCaseKeys({
  foo_bar: 'test'
});
// { fooBar: 'test', foo_bar: 'test' }
```

### createSha1Hash()
return SHA1 hash object.
 This is the same as calling `createHash('utf8')` in the node.js native module crypto.
 ``` js
const sha1 = createSha1Hash();
 fs.createReadStream('/path/to/file')
  .pipe(sha1)
  .on('finish', () => {
    console.log(sha1.read());
  });
```

### decodeURL(str)

Decode [encoded](https://en.wikipedia.org/wiki/Percent-encoding) URL or path. An alternative to the native [`decodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI) function, with added ability to decode [punycoded](https://en.wikipedia.org/wiki/Punycode) domain.

``` js
decodeURL('http://foo.com/b%C3%A1r')
// http://foo.com/bár

decodeURL('http://xn--br-mia.com/baz')
// http://bár.com/baz

decodeURL('/foo/b%C3%A1r/')
// /foo/bár/

/* Alternatively, Node 10+ offers native API to decode punycoded domain */
const {format} = require('url')
decodeURI(format(new URL('http://xn--br-mia.com.com/b%C3%A1r'), {unicode: true}))
// http://bár.com/báz
```

### deepMerge(target, source)

Merges the enumerable properties of two objects deeply. `target` and `source` remain untouched.

``` js
// Merge deeply
const obj1 = {a: {b: 1, c: 1, d: {e: 1, f: 1}}};
const obj2 = {a: {b: 2, d: {f: 'f'} }};

deepMerge(obj1, obj2);
// {a: {b: 2, c: 1, d: {e: 1, f: 'f'} }}
```

``` js
// Arrays will be combined in the same property, similar to lodash.merge
const obj1 = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
const obj2 = { 'a': [{ 'c': 3 }, { 'e': 5 }] };

deepMerge(obj1, obj2);
// { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] };
```

### encodeURL(str)

Encode URL or path into a [safe format](https://en.wikipedia.org/wiki/Percent-encoding).

``` js
encodeURL('http://foo.com/bár')
// http://foo.com/b%C3%A1r

encodeURL('/foo/bár/')
// /foo/b%C3%A1r/
```

### escapeDiacritic(str)

Escapes diacritic characters in a string.

### escapeHTML(str)

Escapes HTML entities in a string.

``` js
escapeHTML('<p>Hello "world".</p>')
// &lt;p&gt;Hello &quot;world&quot;.&lt;&#x2F;p&gt;

/* support escaped characters */
escapeHTML('&lt;foo>bar</foo&gt;')
// &lt;foo&gt;bar&lt;&#x2F;foo&gt;
```

### escapeRegex(str)

Escapes special characters in a regular expression.

### full_url_for(path)

Returns a url with the config.url prefixed. Output is [encoded](#encodeurlstr) automatically. Requires [`bind(hexo)`](#bindhexo).

``` yml
_config.yml
url: https://example.com/blog # example
```

``` js
full_url_for('/a/path')
// https://example.com/blog/a/path
```

### gravatar(str, [options])

Returns the gravatar image url from an email.

If you didn't specify the [options] parameter, the default options will apply. Otherwise, you can set it to a number which will then be passed on as the size parameter to Gravatar. Finally, if you set it to an object, it will be converted into a query string of parameters for Gravatar.

Option | Description | Default
--- | --- | ---
`s` | Output image size | 80
`d` | Default image |
`f` | Force default |
`r` | Rating |

More info: [Gravatar](https://en.gravatar.com/site/implement/images/)

``` js
gravatar('a@abc.com')
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787
gravatar('a@abc.com', 40)
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40
gravatar('a@abc.com' {s: 40, d: 'https://via.placeholder.com/150'})
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=https%3A%2F%2Fvia.placeholder.com%2F150
```

### hash(str)

Generates SHA1 hash.

``` js
hash('123456');
// <Buffer 7c 4a 8d 09 ca 37 62 af 61 e5 95 20 94 3d c2 64 94 f8 94 1b>
```

### HashStream()
**\[deprecated\]** use [`createSha1Hash()`](#createsha1hash).

Generates SHA1 hash with a transform stream.

``` js
var stream = new HashStream();

fs.createReadStream('/path/to/file')
  .pipe(stream)
  .on('finish', function(){
    console.log(stream.read());
  });
```

### highlight(str, [options])

Syntax highlighting for a code block.

Option | Description | Default
--- | --- | ---
`gutter` | Whether to show line numbers | true
`wrap` | Whether to wrap the code block in [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) | true
`firstLine` | First line number | 1
`hljs` | Whether to use the `hljs-*` prefix for CSS classes | false
`lang` | Language |
`caption` | Caption |
`tab`| Replace tabs |
`autoDetect` | Detect language automatically | false
`mark` | Line highlight specific line(s) |

### htmlTag(tag, attrs, text, escape)

Creates a html tag.

Option | Description | Default
--- | --- | ---
`tag` | Tag / element name |
`attrs` | Attribute(s) and its value.<br>Value is always [escaped](#escapehtmlstr), URL is always [encoded](#encodeurlstr). |
`text` | Text, the value is always escaped<br>_(except for `<style>` tag)_ |
`escape` | Whether to escape the text | true

``` js
htmlTag('img', {src: 'example.png'})
// <img src="example.png">

htmlTag('a', {href: 'http://hexo.io/'}, 'Hexo')
// <a href="http://hexo.io/">Hexo</a>

htmlTag('link', {href: 'http://foo.com/'}, '<a>bar</a>')
// <a href="http://foo.com/">&lt;bar&gt;</a>

htmlTag('a', {href: 'http://foo.com/'}, '<b>bold</b>', false)
// <a href="http://foo.com/"><b>bold</b></a>

/* text value of <style> won't be escaped, url is still encoded */
htmlTag('style', {}, 'p { content: "<"; background: url("bár.jpg"); }')
// <style>p { content: "<"; background: url("b%C3%A1r.jpg"); }</style>

/* support script tag with async/defer */
htmlTag('script', {src: '/foo.js', async: true}, '')
// <script src="/foo.js" async></script>
```

### isExternalLink(url, sitehost, [exclude])

Option | Description | Default
--- | --- | ---
`url` | The input URL. |
`sitehost` | The hostname / url of website. You can also pass `hexo.config.url`. |
`exclude` | Exclude hostnames. Specific subdomain is required when applicable, including www. | `[]`

Returns if a given url is external link relative to given `sitehost` and `[exclude]`.

``` js
// 'sitehost' can be a domain or url
isExternalLink('https://example.com', 'example.com');
// false
isExternalLink('https://example.com', 'https://example.com');
// false
isExternalLink('https://example.com', '//example.com/blog/');
// false
```

``` js
isExternalLink('/archives/foo.html', 'example.com');
// false
isExternalLink('https://foo.com/', 'example.com');
// true
```

``` js
isExternalLink('https://foo.com', 'example.com', ['foo.com', 'bar.com']);
// false
isExternalLink('https://bar.com', 'example.com', ['foo.com', 'bar.com']);
// false
isExternalLink('https://baz.com/', 'example.com', ['foo.com', 'bar.com']);
// true
```


### Pattern(rule)

Parses the string and tests if the string matches the rule. `rule` can be a string, a regular expression or a function.

``` js
var pattern = new Pattern('posts/:id');

pattern.match('posts/89');
// {0: 'posts/89', 1: '89', id: '89'}
```

``` js
var pattern = new Pattern('posts/*path');

pattern.match('posts/2013/hello-world');
// {0: 'posts/2013/hello-world', 1: '2013/hello-world', path: '2013/hello-world'}
```

### Permalink(rule, [options])

Parses a permalink.

Option | Description
--- | ---
`segments` | Customize the rule of a segment in the permalink

``` js
var permalink = new Permalink(':year/:month/:day/:title', {
  segments: {
    year: /(\d{4})/,
    month: /(\d{2})/,
    day: /(\d{2})/
  }
});

permalink.parse('2014/01/31/test');
// {year: '2014', month: '01', day: '31', title: 'test'}

permalink.test('2014/01/31/test');
// true

permalink.stringify({year: '2014', month: '01', day: '31', title: 'test'})
// 2014/01/31/test
```

### prettyUrls(url, [options])

Rewrite urls to pretty URLs.

Option | Description | Default
--- | --- | ---
`trailing_index` | `/about/index.html -> /about/` when `false` | `true`
`trailing_html` | `/about.html -> /about` when `false` | `true`

Note: `trailing_html` ignores any link with a trailing `index.html`. (will not be rewritten to `index`).

``` js
prettyUrls('/foo/bar.html');
// /foo/bar.html
prettyUrls('/foo/bar/index.html');
// /foo/bar/index.html

prettyUrls('/foo/bar.html', { trailing_index: false });
// /foo/bar.html
prettyUrls('/foo/bar/index.html', { trailing_index: false });
// /foo/bar/

prettyUrls('/foo/bar.html', { trailing_html: false });
// /foo/bar
prettyUrls('/foo/bar/index.html', { trailing_html: false });
// /foo/bar/index.html

prettyUrls('/foo/bar.html', { trailing_index: false, trailing_html: false });
// /foo/bar
prettyUrls('/foo/bar/index.html', { trailing_index: false, trailing_html: false });
// /foo/bar/
```

### prismHighlight(str, [options])

Syntax highlighting for a code block using PrismJS.

Option | Description | Default
--- | --- | ---
`lineNumber` | Whether to show line numbers | true
`lang` | Language | `'none'`
`tab`| Replace tabs |
`isPreprocess` | Enable preprocess or not | true
`mark` | Highlight specific line |
`firstLine` | First line number |

When `isPreprocess` is enabled, `prismHighlight()` will return PrismJS processed HTML snippet. Otherwise `str` will only be escaped and `prismHighlight()` will return the HTML snippet that is suitable for `prism.js` working in the Browser.

`mark` and `firstLine` options will have effect only when `isPreprocess` is disabled.

### relative_url(from, to)

Returns the relative URL from `from` to `to`. Output is [encoded](#encodeurlstr) automatically. Requires [`bind(hexo)`](#bindhexo).

``` js
relative_url('foo/bar/', 'css/style.css')
// ../../css/style.css
```

### slugize(str, [options])

Transforms a string into a clean URL-friendly string.

Option | Description | Default
--- | --- | ---
`separator` | Separator | -
`transform` | Transform the string into lower case (`1`) or upper case (`2`) |

``` js
slugize('Hello World') = 'Hello-World'
slugize('Hellô Wòrld') = 'Hello-World'
slugize('Hello World', {separator: '_'}) = 'Hello_World'
slugize('Hello World', {transform: 1}) = 'hello-world'
slugize('Hello World', {transform: 2}) = 'HELLO-WORLD'
```

### spawn(command, [args], [options])

Launches a new process with the given `command`. This method returns a promise.

Option | Description | Default
--- | --- | ---
`cwd` | Current working directory of the child process |
`env` | Environment key-value pairs |
`stdio` | Child's stdio configuration |
`detached` | The child will be a process group leader |
`uid` | Sets the user identity of the process |
`gid` | Sets the group identity of the process |
`verbose` | Display messages on the console | `false`
`encoding` | Sets the encoding of the output string | `utf8`

``` js
spawn('cat', 'test.txt').then(function(content){
  console.log(content);
});
```

### stripHTML(str)

Removes HTML tags in a string.

### stripIndent(str)

Strip leading whitespace from each line in a string. The line with the least number of leading whitespace, ignoring empty lines, determines the number to remove. Useful for removing redundant indentation.

### wordWrap(str, [options])

Wraps the string no longer than line width. This method breaks on the first whitespace character that does not exceed line width.

Option | Description | Default
--- | --- | ---
`width` | Line width | 80

``` js
wordWrap('Once upon a time')
// Once upon a time

wordWrap('Once upon a time, in a kingdom called Far Far Away, a king fell ill, and finding a successor to the throne turned out to be more trouble than anyone could have imagined...')
// Once upon a time, in a kingdom called Far Far Away, a king fell ill, and finding\na successor to the throne turned out to be more trouble than anyone could have\nimagined...

wordWrap('Once upon a time', {width: 8})
// Once\nupon a\ntime

wordWrap('Once upon a time', {width: 1})
// Once\nupon\na\ntime
```

### tocObj(str, [options])

Generate a table of contents in JSON format based on the given html string.

Option | Description | Default
--- | --- | ---
`min_depth` | The minimum level of TOC | 1
`max_depth` | The maximum level of TOC | 6


``` js
const html = [
  '<h1 id="title_1">Title 1</h1>',
  '<div id="title_1_1"><h2>Title 1.1</h2></div>',
  '<h3 id="title_1_1_1">Title 1.1.1</h3>',
  '<h2 id="title_1_2">Title 1.2</h2>',
  '<h2 id="title_1_3">Title 1.3</h2>',
  '<h3 id="title_1_3_1">Title 1.3.1</h3>',
  '<h1 id="title_2">Title 2</h1>',
  '<h2 id="title_2_1">Title 2.1</h2>'
].join('\n');

tocObj(html);
/*
[
  { text: 'Title 1', id: 'title_1', level: 1 },
  { text: 'Title 1.1', id: 'title_1_1', level: 2 },
  { text: 'Title 1.1.1', id: 'title_1_1_1', level: 3 },
  { text: 'Title 1.2', id: 'title_1_2', level: 2 },
  { text: 'Title 1.3', id: 'title_1_3', level: 2 },
  { text: 'Title 1.3.1', id: 'title_1_3_1', level: 3 },
  { text: 'Title 2', id: 'title_2', level: 1 },
  { text: 'Title 2.1', id: 'title_2_1', level: 2 },
]
*/

tocObj(html, { min_depth: 2 });
/*
[
  { text: 'Title 1.1', id: 'title_1_1', level: 2 },
  { text: 'Title 1.1.1', id: 'title_1_1_1', level: 3 },
  { text: 'Title 1.2', id: 'title_1_2', level: 2 },
  { text: 'Title 1.3', id: 'title_1_3', level: 2 },
  { text: 'Title 1.3.1', id: 'title_1_3_1', level: 3 },
  { text: 'Title 2.1', id: 'title_2_1', level: 2 },
]
*/

tocObj(html, { max_depth: 2 });
/*
[
  { text: 'Title 1', id: 'title_1', level: 1 },
  { text: 'Title 1.1', id: 'title_1_1', level: 2 },
  { text: 'Title 1.2', id: 'title_1_2', level: 2 },
  { text: 'Title 1.3', id: 'title_1_3', level: 2 },
  { text: 'Title 2', id: 'title_2', level: 1 },
  { text: 'Title 2.1', id: 'title_2_1', level: 2 },
]
*/
```

### truncate(str, [options])

Truncates a given text after a given `length` if text is longer than `length`. The last characters will be replaced with the `omission` option for a total length not exceeding `length`.

Option | Description | Default
--- | --- | ---
`length` | Max length of the string | 30
`omission` | Omission text | ...
`separator` | truncate text at a natural break |

``` js
truncate('Once upon a time in a world far far away')
// "Once upon a time in a world..."

truncate('Once upon a time in a world far far away', {length: 17})
// "Once upon a ti..."

truncate('Once upon a time in a world far far away', {length: 17, separator: ' '})
// "Once upon a..."

truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'})
// "And they f... (continued)"
```

### unescapeHTML(str)

Unescapes HTML entities in a string.

``` js
unescapeHTML('&lt;p&gt;Hello &quot;world&quot;.&lt;&#x2F;p&gt;')
// <p>Hello "world".</p>
```

### url_for(path, [option])

Returns a url with the root path prefixed. Output is [encoded](#encodeurlstr) automatically. Requires [`bind(hexo)`](#bindhexo).

Option | Description | Default
--- | --- | ---
`relative` | Output relative link | Value of `config.relative_link`

``` yml
_config.yml
root: /blog/ # example
```

``` js
url_for('/a/path')
// /blog/a/path
```

Relative link, follows `relative_link` option by default
e.g. post/page path is '/foo/bar/index.html'

``` yml
_config.yml
relative_link: true
```

``` js
url_for('/css/style.css')
// ../../css/style.css

/* Override option
 * you could also disable it to output a non-relative link,
 * even when `relative_link` is enabled and vice versa.
 */
url_for('/css/style.css', {relative: false})
// /css/style.css
```

## bind(hexo)

Following utilities require `bind(hexo)` / `bind(this)` / `call(hexo, input)` / `call(this, input)` to parse the user config when initializing:
- [`full_url_for()`](#full_url_forpath)
- [`url_for()`](#url_forpath)
- [`relative_url()`](#relative_urlfrom-to)

Below examples demonstrate different approaches to creating a [helper](https://hexo.io/api/helper) (each example is separated by `/******/`),

``` js
// Single function
const url_for = require('hexo-util').url_for.bind(hexo);

hexo.extend.helper.register('test_url', (str) => {
  return url_for(str);
})


/******/
// Multiple functions
const url_for = require('hexo-util').url_for.bind(hexo)

function testurlHelper(str) {
  return url_for(str);
}

hexo.extend.helper.register('test_url', testurlHelper);


/******/
// Functions separated into different files.
// test_url.js
module.exports = function(str) {
  const url_for = require('hexo-util').url_for.bind(this);
  return url_for(str);
}

// index.js
hexo.extend.helper.register('test_url', require('./test_url'));


/******/
// Function.call() approach also works
const {url_for} = require('hexo-util');
module.exports = function(str) {
  return url_for.call(this, str);
}

hexo.extend.helper.register('test_url', require('./test_url'));


/******/
// Separating functions into individual files
// Each file has multiple functions
// test_url.js
function testurlHelper(str) {
  const url_for = require('hexo-util').url_for.bind(this);
  return url_for(str);
}

module.exports =  {
  testurlHelper: testurlHelper
}

// index.js
hexo.extend.helper.register('test_url', require('./test_url').testurlHelper);
```

## License

MIT

[Hexo]: http://hexo.io/
