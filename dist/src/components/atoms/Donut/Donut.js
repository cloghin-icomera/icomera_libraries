"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("../Box/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = _react.default.forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 128 : _ref$size,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 2 : _ref$strokeWidth,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 0 : _ref$value,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 1 : _ref$max,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["size", "strokeWidth", "value", "min", "max", "title"]);

  var r = 16 - strokeWidth;
  var C = 2 * r * Math.PI;
  var offset = C - (value - min) / (max - min) * C;
  return /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    ref: ref,
    as: "svg",
    viewBox: "0 0 32 32",
    width: size,
    height: size,
    strokeWidth: strokeWidth,
    fill: "none",
    stroke: "currentcolor",
    role: "img"
  }, props, {
    __css: {
      color: 'primary'
    }
  }), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("circle", {
    cx: 16,
    cy: 16,
    r: r,
    opacity: 1 / 8
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: 16,
    cy: 16,
    r: r,
    strokeDasharray: C,
    strokeDashoffset: offset,
    transform: "rotate(-90 16 16)"
  }));
});

exports.default = _default;

//# sourceMappingURL=Donut.js.map