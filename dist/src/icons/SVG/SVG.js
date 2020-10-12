"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _themeUi = require("theme-ui");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SVG = function SVG(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? undefined : _ref$title,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["title", "size", "children"]);

  var _useThemeUI = (0, _themeUi.useThemeUI)(),
      theme = _useThemeUI.theme;

  var svg_style = {};

  if (theme) {
    if (props.stroke && theme.colors[props.stroke]) {
      svg_style.stroke = theme.colors[props.stroke];
    } else {
      svg_style.stroke = props.stroke;
    }

    if (props.fill && theme.colors[props.fill]) {
      svg_style.fill = theme.colors[props.fill];
    } else {
      svg_style.fill = props.fill;
    }
  } else {
    svg_style = {
      stroke: props.stroke || '#000',
      fill: props.fill || '#000'
    };
  }

  return (0, _themeUi.jsx)(_themeUi.Box, _extends({
    css: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }, props), (0, _themeUi.jsx)("svg", _extends({
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, svg_style, {
    strokeWidth: "2"
  }), title && (0, _themeUi.jsx)("title", null, title), children));
};

var _default = SVG;
exports.default = _default;

//# sourceMappingURL=SVG.js.map