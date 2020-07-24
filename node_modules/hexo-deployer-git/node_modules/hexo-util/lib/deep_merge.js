'use strict';

const deepmerge = require('deepmerge');

const arrayMerge = (target, source, options) => {
  const destination = target.slice();

  source.forEach((item, index) => {
    if (typeof destination[index] === 'undefined') {
      destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
    } else if (options.isMergeableObject(item)) {
      destination[index] = deepmerge(target[index], item, options);
    } else if (!target.includes(item)) {
      destination.push(item);
    }
  });
  return destination;
};


function deepMerge(target, source) {
  return deepmerge(target, source, { arrayMerge });
}

module.exports = deepMerge;
