module.exports = loop

// this weird little engine is to loop if the cb's keep getting
// called synchronously, since that's faster and makes shallower
// stack traces, but recurse if any of them don't fire this tick

function once (cb) {
  var called = false
  return function (er) {
    if (called)
      return
    called = true
    return cb.call(this, er)
  }
}

function loop (self, arr, cb, onerr, i) {
  if (!i)
    i = 0

  var running = false
  while (i < arr.length && !running) {
    var onceNext = once(next)
    running = true
    var sync = true
    try {
      var ret = arr[i].call(self, onceNext)
    } catch (er) {
      return onerr.call(self, er)
    }
    if (ret && typeof ret.then === 'function')
      ret.then(onceNext.bind(self, null), onerr.bind(self))
    i++
    sync = false
  }

  function next (er) {
    if (er)
      return onerr.call(self, er)
    else if (!sync)
      return loop(self, arr, cb, onerr, i)
    running = false
  }

  if (i >= arr.length && !running)
    return cb.call(self)
}
