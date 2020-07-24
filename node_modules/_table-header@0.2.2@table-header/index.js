'use strict';

var repeat = require('repeat-string');


var columnWidths = function (table, stringLength) {
  return table.reduce(function (widths, row) {
    row.map(stringLength)
      .forEach(function (width, i) {
        if (widths[i] < width) {
          widths[i] = width;
        }
      });
    return widths;
  }, table[0].map(function () { return 0 }));
};


var addHeader = function (table, header, opts) {
  opts = opts || {};
  opts.stringLength = opts.stringLength || function (s) { return String(s).length };
  if (opts.border == null) {
    opts.border = true;
  }

  table.unshift(header);

  if (opts.border) {
    if (opts.border == true) {
      opts.border = '-';
    }

    var border = columnWidths(table, opts.stringLength).map(function (width, i) {
      var headerWidth = opts.stringLength(header[i]);
      if (width < headerWidth) {
        width = headerWidth;
      }
      return repeat(opts.border, width);
    });

    table.splice(1, 0, border);
  }
};


exports = module.exports = function (table, header, opts) {
  table = table.slice();
  addHeader(table, header, opts);
  return table;
};

exports.add = addHeader;
