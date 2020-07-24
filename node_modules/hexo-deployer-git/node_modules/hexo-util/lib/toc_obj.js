'use strict';
const { DomHandler, DomUtils, Parser } = require('htmlparser2');
const escapeHTML = require('./escape_html');
const nonWord = /^\s*[^a-zA-Z0-9]\s*$/;

const parseHtml = html => {
  const handler = new DomHandler(null, {});
  new Parser(handler, {}).end(html);
  return handler.dom;
};

const getId = ({ attribs, parent }) => {
  return attribs.id || (!parent ? '' : getId(parent));
};

function tocObj(str, options = {}) {
  const { min_depth, max_depth } = Object.assign({
    min_depth: 1,
    max_depth: 6
  }, options);

  const headingsSelector = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].slice(min_depth - 1, max_depth);
  const headings = DomUtils.find(({ tagName }) => headingsSelector.includes(tagName), parseHtml(str), true);
  const headingsLen = headings.length;

  if (!headingsLen) return [];

  const result = [];

  for (let i = 0; i < headingsLen; i++) {
    const el = headings[i];
    const level = +el.name[1];
    const id = getId(el);
    let text = '';
    for (const element of el.children) {
      const elText = DomUtils.getText(element);
      // Skip permalink symbol wrapped in <a>
      // permalink is a single non-word character, word = [a-Z0-9]
      // permalink may be wrapped in whitespace(s)
      if (element.name !== 'a' || !nonWord.test(elText)) {
        text += escapeHTML(elText);
      }
    }
    if (!text) text = escapeHTML(DomUtils.getText(el));

    result.push({ text, id, level });
  }

  return result;
}

module.exports = tocObj;
