var toBe = [
    'am',
    'are',
    'aren\'t',
    'be',
    'been',
    'being',
    'he\'s',
    'here\'s',
    'here\'s',
    'how\'s',
    'i\'m',
    'is',
    'isn\'t',
    'she\'s',
    'that\'s',
    'there\'s',
    'they\'re',
    'was',
    'wasn\'t',
    'we\'re',
    'were',
    'weren\'t',
    'what\'s',
    'where\'s',
    'who\'s',
    'you\'re'
];

var re = new RegExp('\\b(' + toBe.join('|') + ')\\b', 'gi');

module.exports = function (text) {
    var suggestions = [];
    if (!text || text.length === 0) return suggestions;
    text = text.replace(/[\u2018\u2019]/g, "'"); // convert smart quotes
    while (match = re.exec(text)) {
        var be = match[0].toLowerCase();
        suggestions.push({
            index: match.index,
            offset: be.length
        });
    }

    return suggestions;
};