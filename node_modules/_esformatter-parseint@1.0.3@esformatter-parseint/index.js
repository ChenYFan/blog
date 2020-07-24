'use strict';

var tk = require('rocambole-token');
var rocambole = require('rocambole');


exports.transformBefore = transformBefore;
function transformBefore(ast) {
  rocambole.moonwalk(ast, radixParam);
}


function radixParam(node) {
  if (node.type !== 'CallExpression'
    || (!node.callee || node.callee.name !== 'parseInt')) {
    return;
  }

  if (node.arguments && node.arguments.length === 1) {
    var radix = tk.after(node.arguments[0].endToken, {
      value: 10
    });

    tk.before(radix, {
      value: ','
    });
  }
}
