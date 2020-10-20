"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("../Box/Box"));

var _IconButton = _interopRequireDefault(require("../IconButton/IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getSize = function getSize(size) {
  switch (size) {
    case 'small':
      return 19;

    case 'large':
      return 28;

    default:
      return 24;
  }
};

var MenuIcon = function MenuIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    css: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }, props), /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    strokeWidth: "2"
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }))));
};

var _default = _react.default.forwardRef(function (_ref2, ref) {
  var icon = _ref2.icon,
      props = _objectWithoutProperties(_ref2, ["icon"]);

  icon = icon ? icon : /*#__PURE__*/_react.default.createElement(MenuIcon, {
    size: getSize(props.size)
  });
  return /*#__PURE__*/_react.default.createElement(_IconButton.default, _extends({
    ref: ref,
    icon: icon
  }, props));
});

exports.default = _default;

//# sourceMappingURL=MenuButton.js.map