var renderWebGL = require('../../utils/NOOP');
var renderCanvas = require('../../utils/NOOP');

if (typeof WEBGL_RENDERER) {
  renderWebGL = require('./ImageWebGLRenderer');
}

if (typeof CANVAS_RENDERER) {
  renderCanvas = require('./ImageCanvasRenderer');
}

module.exports = {
  renderWebGL: renderWebGL,
  renderCanvas: renderCanvas
};
