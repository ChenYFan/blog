'use strict';

const hljs = require('highlight.js');
const languages = hljs.listLanguages();
const fs = require('fs');

const result = {
  languages: languages,
  aliases: {}
};

languages.forEach(lang => {
  result.aliases[lang] = lang;

  const def = require('highlight.js/lib/languages/' + lang)(hljs);
  const aliases = def.aliases;

  if (aliases) {
    aliases.forEach(alias => {
      result.aliases[alias] = lang;
    });
  }
});

const stream = fs.createWriteStream('highlight_alias.json');
stream.write(JSON.stringify(result));
stream.on('end', () => {
  stream.end();
});
