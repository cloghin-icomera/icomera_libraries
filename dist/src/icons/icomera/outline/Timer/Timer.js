"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SVG = _interopRequireDefault(require("../../../SVG/SVG"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  return /*#__PURE__*/_react.default.createElement(_SVG.default, props, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    strokeLinecap: "round"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "12 7 12 12 16 12"
  })));
};

exports.default = _default;

//# sourceMappingURL=Timer.js.map