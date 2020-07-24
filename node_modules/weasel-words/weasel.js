var weasels = [
  'are a number',
  'clearly',
  'completely',
  'exceedingly',
  'excellent',
  'extremely',
  'fairly',
  'few',
  'huge',
  'interestingly',
  'is a number',
  'largely',
  'many',
  'mostly',
  'obviously',
  'quite',
  'relatively',
  'remarkably',
  'several',
  'significantly',
  'substantially',
  'surprisingly',
  'tiny',
  'various',
  'vast',
  'very'
];

// Allow "too many" and "too few"
var exceptions = [
  'many',
  'few'
]

var re = new RegExp('\\b(' + weasels.join('|') + ')\\b', 'gi');

module.exports = function (text, opts) {
  var suggestions = [];
  while (match = re.exec(text)) {
    var weasel = match[0].toLowerCase();
    if (exceptions.indexOf(weasel) === -1 ||
        text.substr(match.index-4, 4) !== 'too ') {
      suggestions.push({
        index: match.index,
        offset: weasel.length,
      });
    }
  }
  return suggestions;
};
