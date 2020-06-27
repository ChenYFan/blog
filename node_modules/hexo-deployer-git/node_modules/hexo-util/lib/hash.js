'use strict';

const { Transform } = require('stream');
const crypto = require('crypto');

const ALGORITHM = 'sha1';

function createSha1Hash() {
  return crypto.createHash(ALGORITHM);
}

/**
 * @deprecated
 * createHash() is stream class.
 */
function HashStream() {
  Transform.call(this);
  this._hash = createSha1Hash();
}

require('util').inherits(HashStream, Transform);

HashStream.prototype._transform = function(chunk, enc, callback) {
  this._hash.update(chunk);
  callback();
};

HashStream.prototype._flush = function(callback) {
  this.push(this._hash.digest());
  callback();
};

exports.hash = content => {
  const hash = createSha1Hash();
  hash.update(content);
  return hash.digest();
};

exports.HashStream = HashStream;
exports.createSha1Hash = createSha1Hash;
