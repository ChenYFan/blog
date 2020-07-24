# passive voice [![Build Status](https://travis-ci.org/btford/passive-voice.svg?branch=master)](https://travis-ci.org/btford/passive-voice)

npm module for detecting passive voice.

Based on this [shell script](http://matt.might.net/articles/shell-scripts-for-passive-voice-weasel-words-duplicates/).


## Install

```shell
npm install passive-voice
```


## Use

```javascript
var passive = require('passive-voice');

var problems = passive('He was judged.');
// problems -> [{ index: 3, offset: 10 }]
```


## License
MIT
