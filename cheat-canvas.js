'use strict';

var Canvas = require('canvas');

module.exports = function (canvasOrBuffer) {
  var isBuffer = false;
  var canvas;
  var ctx;

  if (Buffer.isBuffer(canvasOrBuffer)) {
    isBuffer = true;

    var image = new Canvas.Image();
    image.src = canvasOrBuffer;

    canvas = new Canvas(image.width, image.height);
    ctx = canvas.getContext('2d');

    ctx.drawImage(image, 0, 0);
  }

  if (!ctx) {
    ctx = canvasOrBuffer.getContext('2d');
  }

  // make the top-left pixel transparent
  ctx.clearRect(0, 0, 1, 1);

  if (isBuffer) {
    canvasOrBuffer = canvas.toBuffer();
  }

  return canvasOrBuffer;
};
