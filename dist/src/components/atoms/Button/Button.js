"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _color2 = require("@theme-ui/color");

var _Box = _interopRequireDefault(require("../Box/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getHoverColor = function getHoverColor(t, color) {
  if (t.colors.modeID === 'dark') {
    // dark color mode
    return (0, _color2.lighten)(color, 0.2);
  } else {
    // default color mode
    return (0, _color2.darken)(color, 0.2);
  }
};

var getColors = function getColors(variant, _color) {
  if (_color) {
    switch (variant) {
      case 'default':
        return {
          color: _color,
          fill: _color,
          stroke: _color,
          '&:not(.active):hover': {
            bg: (0, _color2.alpha)(_color, 0.1),
            color: function color(t) {
              return getHoverColor(t, _color);
            },
            fill: function fill(t) {
              return getHoverColor(t, _color);
            },
            stroke: function stroke(t) {
              return getHoverColor(t, _color);
            }
          }
        };

      case 'primary':
        return {
          bg: _color,
          '&:not(.active):hover': {
            bg: function bg(t) {
              return getHoverColor(t, _color);
            }
          }
        };

      case 'outlined':
        return {
          color: _color,
          fill: _color,
          stroke: _color,
          '&:not(.active):hover': {
            bg: (0, _color2.alpha)(_color, 0.1),
            color: function color(t) {
              return getHoverColor(t, _color);
            },
            fill: function fill(t) {
              return getHoverColor(t, _color);
            },
            stroke: function stroke(t) {
              return getHoverColor(t, _color);
            }
          }
        };

      default:
        return;
    }
  } else {
    return;
  }
};

var getSizes = function getSizes(size) {
  switch (size) {
    case 'small':
      return {
        button: {
          px: 2,
          py: 1,
          fontSize: 0
        },
        icon: {
          label: {
            mr: 1,
            ml: -1,
            size: 19
          },
          default: {
            mr: -1,
            ml: -1,
            size: 19
          }
        }
      };

    case 'medium':
      return {
        button: {
          px: 3,
          py: 2
        },
        icon: {
          label: {
            mr: 2,
            ml: -1
          },
          default: {
            mr: -1,
            ml: -1
          }
        }
      };

    case 'large':
      return {
        button: {
          px: 4,
          py: 3,
          fontSize: 3
        },
        icon: {
          label: {
            mr: 2,
            ml: -1,
            size: 28
          },
          default: {
            mr: -1,
            ml: -1,
            size: 28
          }
        }
      };

    default:
      return;
  }
};

var getClassName = function getClassName(active, rounded, disabled) {
  var className = '';
  className = active ? 'active' : disabled ? 'disabled' : '';
  className += rounded ? ' rounded' : '';
  return className;
};

var Button = _react.default.forwardRef(function (_ref, ref) {
  var icon = _ref.icon,
      label = _ref.label,
      color = _ref.color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? false : _ref$rounded,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      wrapper = _ref.wrapper,
      props = _objectWithoutProperties(_ref, ["icon", "label", "color", "variant", "size", "active", "rounded", "disabled", "wrapper"]);

  var className = getClassName(active, rounded, disabled);
  var sxColor = getColors(variant, color);
  var sxSize = getSizes(size);

  if (icon && label) {
    icon = _react.default.cloneElement(icon, sxSize.icon.label);
  } else if (icon) {
    icon = _react.default.cloneElement(icon, sxSize.icon.default);
  }

  var buttonJSX = /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    ref: ref,
    as: "button",
    className: className,
    variant: variant
  }, props, {
    __themeKey: "buttons",
    __css: {
      appearance: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      border: 0
    },
    sx: _objectSpread({}, sxColor, {}, sxSize.button)
  }), icon, label);

  if (wrapper) {
    return _react.default.cloneElement(wrapper, {
      children: buttonJSX
    });
  } else {
    return buttonJSX;
  }
});

var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.js.map