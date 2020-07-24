var tk = require('rocambole-token');

var limit;

exports.setOptions = function(opts) {
  limit = (opts && opts.LimitLineBreaks) || 2;
};

exports.tokenAfter = function(token) {
  if (!tk.isBr(token)) return;
  var tokens = getPrev(token, limit);
  if (tokens.length == limit && tokens.every(tk.isBr)) {
    tk.remove(token);
  }
};

function getPrev(token, n) {
  var tokens = [];
  token = token.prev;
  for (var x = 0; x < n && token; x++) {
    tokens.push(token);
    token = token.prev;
  }
  return tokens;
}
