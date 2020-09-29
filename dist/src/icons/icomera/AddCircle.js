"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _themeUi = require("theme-ui");

var _SVG = _interopRequireDefault(require("../SVG/SVG"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx jsx */
var AddCircle = function AddCircle(props) {
  var variant = props.variant ? 'icons.' + props.variant : 'icons.primary';
  return (0, _themeUi.jsx)(_SVG.default, props, (0, _themeUi.jsx)("g", {
    sx: {
      variant: variant
    }
  }, (0, _themeUi.jsx)("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), (0, _themeUi.jsx)("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }), (0, _themeUi.jsx)("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  })));
};

var _default = AddCircle;
exports.default = _default;

//# sourceMappingURL=AddCircle.js.map