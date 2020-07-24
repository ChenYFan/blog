'use strict'
const x = () => this
const o = { a: 1 }
console.log(x.call(o) === this)
