'use strict';

const Prism = require('prismjs');
const stripIndent = require('strip-indent');
const prismLoadLanguages = require('prismjs/components/');

// https://github.com/PrismJS/prism/issues/2145
const prismComponents = require('prismjs/components');
const prismSupportedLanguages = Object.keys(prismComponents.languages);

const escapeHTML = require('./escape_html');

/**
 * Wrapper of Prism.highlight()
 * @param {String} code
 * @param {String} language
 */
function prismHighlight(code, language) {
  // Prism has not load the language pattern
  if (!Prism.languages[language] && prismSupportedLanguages.includes(language)) prismLoadLanguages(language);

  if (Prism.languages[language]) {
    // Prism escapes output by default
    return Prism.highlight(code, Prism.languages[language], language);
  }

  // Current language is not supported by Prism, return origin code;
  return escapeHTML(code);
}

/**
 * Generate line number required HTML snippet
 * @param {String} code - Highlighted code
 */
function lineNumberUtil(code) {
  const matched = code.match(/\n(?!$)/g);
  const num = matched ? matched.length + 1 : 1;
  const lines = new Array(num + 1).join('<span></span>');

  return `<span aria-hidden="true" class="line-numbers-rows">${lines}</span>`;
}

function replaceTabs(str, tab) {
  return str.replace(/^\t+/gm, match => {
    let result = '';

    for (let i = 0, len = match.length; i < len; i++) {
      result += tab;
    }

    return result;
  });
}

function PrismUtil(str, options = {}) {
  if (typeof str !== 'string') throw new TypeError('str must be a string!');
  str = stripIndent(str);

  const {
    lineNumber = true,
    lang = 'none',
    tab,
    mark,
    firstLine,
    isPreprocess = true
  } = options;

  // To be consistent with highlight.js
  const language = lang === 'plain' || lang === 'none' ? 'none' : lang;

  const preTagClassArr = [];
  const preTagAttrArr = [];
  let preTagAttr = '';

  if (lineNumber) preTagClassArr.push('line-numbers');
  preTagClassArr.push(`language-${language}`);

  // Show Languages plugin
  // https://prismjs.com/plugins/show-language/
  if (language !== 'none') preTagAttrArr.push(`data-language="${language}"`);

  if (!isPreprocess) {
    // Shift Line Numbers ('firstLine' option) should only be added under non-preprocess mode
    // https://prismjs.com/plugins/line-numbers/
    if (lineNumber && firstLine) preTagAttrArr.push(`data-start="${firstLine}"`);

    // Line Highlight ('mark' option) should only be added under non-preprocess mode
    // https://prismjs.com/plugins/line-highlight/
    if (mark) preTagAttrArr.push(`data-line="${mark}"`);

    // Apply offset for 'mark' option
    // https://github.com/hexojs/hexo-util/pull/172#issuecomment-571882480
    if (firstLine && mark) preTagAttrArr.push(`data-line-offset="${firstLine - 1}"`);
  }

  if (preTagAttrArr.length) preTagAttr = ' ' + preTagAttrArr.join(' ');

  if (tab) str = replaceTabs(str, tab);

  const startTag = `<pre class="${preTagClassArr.join(' ')}"${preTagAttr}><code class="language-${language}">`;
  const endTag = '</code></pre>';

  let parsedCode = '';

  if (language === 'none' || !isPreprocess) {
    parsedCode = escapeHTML(str);
  } else {
    parsedCode = prismHighlight(str, language);
  }

  // lineNumberUtil() should be used only under preprocess mode
  if (lineNumber && isPreprocess) {
    parsedCode += lineNumberUtil(parsedCode);
  }

  return startTag + parsedCode + endTag;
}

module.exports = PrismUtil;
