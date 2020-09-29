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

var SVG = function SVG(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    as: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: size + '',
    height: size + '',
    viewBox: "0 0 24 24",
    fill: "currentcolor"
  }, props));
};

var RadioChecked = function RadioChecked(props) {
  return /*#__PURE__*/_react.default.createElement(SVG, props, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
};

var RadioUnchecked = function RadioUnchecked(props) {
  return /*#__PURE__*/_react.default.createElement(SVG, props, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
};

var RadioIcon = function RadioIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(RadioChecked, _extends({}, props, {
    __css: {
      display: 'none',
      'input:checked ~ &': {
        display: 'block'
      }
    }
  })), /*#__PURE__*/_react.default.createElement(RadioUnchecked, _extends({}, props, {
    __css: {
      display: 'block',
      'input:checked ~ &': {
        display: 'none'
      }
    }
  })));
};

var _default = _react.default.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      sx = _ref2.sx,
      _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? 'radio' : _ref2$variant,
      props = _objectWithoutProperties(_ref2, ["className", "sx", "variant"]);

  return /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    ref: ref,
    as: "input",
    type: "radio"
  }, props, {
    sx: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: 1,
      height: 1,
      overflow: 'hidden'
    }
  })), /*#__PURE__*/_react.default.createElement(_Box.default, {
    as: RadioIcon,
    "aria-hidden": "true",
    __themeKey: "forms",
    variant: variant,
    className: className,
    sx: sx,
    __css: {
      mr: 2,
      borderRadius: 9999,
      color: 'gray',
      flexShrink: 0,
      'input:checked ~ &': {
        color: 'primary'
      },
      'input:focus ~ &': {
        bg: 'highlight'
      }
    }
  }));
});

exports.default = _default;

//# sourceMappingURL=Radio.js.map