'use strict';

var spawn = require('child_process').spawn;
var Promise = require('bluebird');

module.exports = function(command, args, options){
  if (!command) throw new TypeError('command is required!');

  if (!options && args && !Array.isArray(args)){
    options = args;
    args = [];
  }

  args = args || [];
  options = options || {};

  return new Promise(function(resolve, reject){
    var task = spawn(command, args, options);
    var verbose = options.verbose;
    var encoding = options.hasOwnProperty('encoding') ? options.encoding : 'utf8';
    var stdout = [];
    var stdoutLength = 0;
    var stderr = [];
    var stderrLength = 0;

    task.stdout.on('data', function(data){
      stdout.push(data);
      stdoutLength += data.length;

      if (verbose) process.stdout.write(data);
    });

    task.stderr.on('data', function(data){
      stderr.push(data);
      stderrLength += data.length;

      if (verbose) process.stderr.write(data);
    });

    task.on('close', function(code){
      if (code){
        var e = new Error(concatBuffer(stderr, stderrLength, encoding));
        e.code = code;

        return reject(e);
      }

      resolve(concatBuffer(stdout, stdoutLength, encoding));
    });
  });
};

function concatBuffer(buffer, length, encoding){
  var data = Buffer.concat(buffer, length);
  if (!encoding) return data;

  return data.toString(encoding);
}
