define(function(require, exports, module){

var Canvas = require('i-canvas');

var canvas = Canvas.create($('#container')),
    doc = canvas.document,
    body = doc.body;

var rec1 = doc.createElement('rectangle', {
    top: 100,
    left: 100,
    width: 100,
    height: 100,
    background: 'yellow',
    border: 'blue',
    'border-width': 5
});
/*
var img1 = doc.createElement('image', {
    top: 0,
    left: 0,
    width: 80,
    height: 80,
    background: null,
    url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=222842970,3679440991&fm=58'
});

var circle1 = doc.createElement('circle', {
    top: 300,
    left: 300,
    radius: 30,
    background: 'blue',
    border: 'yellow',
    'border-width': 10
});

var circle2 = doc.createElement('circle', {
    top: 50,
    left: 50,
    radius: 20,
    background: 'green',
    position: 'relative',
    'z-index': 10
});*/

body.appendChild(rec1);
rec1.draggable();
/*body.appendChild(circle1);
rec1.appendChild(circle2);

circle1.draggable();
circle2.draggable();
rec1.draggable();

body.appendChild(img1);
img1.draggable();*/

});