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
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "10 4 3 12 10 20"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  })));
};

exports.default = _default;

//# sourceMappingURL=Back.js.map