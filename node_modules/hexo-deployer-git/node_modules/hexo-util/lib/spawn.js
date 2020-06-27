'use strict';

const spawn = require('cross-spawn');
const Promise = require('bluebird');
const CacheStream = require('./cache_stream');

function promiseSpawn(command, args = [], options) {
  if (!command) throw new TypeError('command is required!');

  if (!options && !Array.isArray(args)) {
    options = args;
    args = [];
  }

  options = options || {};

  return new Promise((resolve, reject) => {
    const task = spawn(command, args, options);
    const verbose = options.verbose;
    const { encoding = 'utf8' } = options;
    const stdoutCache = new CacheStream();
    const stderrCache = new CacheStream();

    if (task.stdout) {
      const stdout = task.stdout.pipe(stdoutCache);
      if (verbose) stdout.pipe(process.stdout);
    }

    if (task.stderr) {
      const stderr = task.stderr.pipe(stderrCache);
      if (verbose) stderr.pipe(process.stderr);
    }

    task.on('close', code => {
      if (code) {
        const e = new Error(getCache(stderrCache, encoding));
        e.code = code;

        return reject(e);
      }

      resolve(getCache(stdoutCache, encoding));
    });

    task.on('error', reject);

    // Listen to exit events if neither stdout and stderr exist (inherit stdio)
    if (!task.stdout && !task.stderr) {
      task.on('exit', code => {
        if (code) {
          const e = new Error('Spawn failed');
          e.code = code;

          return reject(e);
        }

        resolve();
      });
    }
  });
}

function getCache(stream, encoding) {
  const buf = stream.getCache();
  stream.destroy();
  if (!encoding) return buf;

  return buf.toString(encoding);
}

module.exports = promiseSpawn;
