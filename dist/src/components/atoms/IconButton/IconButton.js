"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _color = require("@theme-ui/color");

var _Box = _interopRequireDefault(require("../Box/Box"));

var _Flex = _interopRequireDefault(require("../Flex/Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getClassName = function getClassName(active, rounded, disabled, hoverIndicator) {
  var className = '';
  className = active ? 'active' : disabled ? 'disabled' : '';
  className += rounded ? ' rounded' : '';
  className += hoverIndicator ? 'hover-back' : '';
  return className;
};

var getHoverColor = function getHoverColor(t, color) {
  if (t.colors.modeID === 'dark') {
    // dark color mode
    return (0, _color.lighten)(color, 0.2);
  } else {
    // default color mode
    return (0, _color.darken)(color, 0.2);
  }
};

var getColors = function getColors(variant, color) {
  if (color) {
    switch (variant) {
      case 'icon':
        return {
          fill: color,
          stroke: color,
          '&:not(.active):hover': {
            fill: function fill(t) {
              return getHoverColor(t, color);
            },
            stroke: function stroke(t) {
              return getHoverColor(t, color);
            }
          },
          '&.hover-back:hover': {
            bg: (0, _color.alpha)(color, 0.15)
          }
        };

      case 'action':
        return {
          fill: color,
          stroke: color,
          '&:not(.active):hover': {
            bg: color
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
          p: 1
        },
        icon: {
          size: 19
        }
      };

    case 'medium':
      return {
        button: {
          p: 2
        },
        icon: {
          m: 0
        }
      };

    case 'large':
      return {
        button: {
          p: 3
        },
        icon: {
          size: 28
        }
      };

    default:
      return;
  }
};

var Tooltip = function Tooltip(_ref) {
  var label = _ref.label,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom' : _ref$position,
      children = _ref.children;
  var sxPos = {};

  switch (position) {
    case 'top':
      sxPos = {
        bottom: '48px'
      };
      break;

    case 'left':
      sxPos = {
        right: '48px'
      };
      break;

    case 'right':
      sxPos = {
        left: '48px'
      };
      break;

    default:
      sxPos = {
        top: '48px'
      };
  }

  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    sx: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover .label': {
        opacity: '100%',
        visibility: 'visible',
        transitionDelay: '.2s'
      }
    }
  }, children, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: "label",
    as: "span",
    sx: _objectSpread({
      width: 'max-content',
      opacity: 0,
      transition: 'all .25s ease-in-out',
      visibility: 'hidden',
      bg: (0, _color.alpha)('text', 0.85),
      color: 'card',
      textAlign: 'center',
      py: 1,
      px: 2,
      fontSize: 0,
      borderRadius: 'small',
      position: 'absolute',
      zIndex: '1',
      pointerEvents: 'none'
    }, sxPos)
  }, label));
};

var IconButton = _react.default.forwardRef(function (_ref2, ref) {
  var _ref2$active = _ref2.active,
      active = _ref2$active === void 0 ? false : _ref2$active,
      _ref2$rounded = _ref2.rounded,
      rounded = _ref2$rounded === void 0 ? false : _ref2$rounded,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$hoverIndicator = _ref2.hoverIndicator,
      hoverIndicator = _ref2$hoverIndicator === void 0 ? false : _ref2$hoverIndicator,
      icon = _ref2.icon,
      color = _ref2.color,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'medium' : _ref2$size,
      _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? 'icon' : _ref2$variant,
      wrapper = _ref2.wrapper,
      _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? undefined : _ref2$label,
      _ref2$labelPosition = _ref2.labelPosition,
      labelPosition = _ref2$labelPosition === void 0 ? undefined : _ref2$labelPosition,
      props = _objectWithoutProperties(_ref2, ["active", "rounded", "disabled", "hoverIndicator", "icon", "color", "size", "variant", "wrapper", "label", "labelPosition"]);

  var className = getClassName(active, rounded, disabled, hoverIndicator);
  var sxColor = getColors(variant, color);
  var sxSize = getSizes(size);
  icon = _react.default.cloneElement(icon, sxSize.icon);

  var buttonJSX = /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    ref: ref,
    as: "button",
    variant: variant,
    className: className
  }, props, {
    __themeKey: "buttons",
    __css: {
      appearance: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'inherit',
      bg: 'transparent',
      border: 'none',
      borderRadius: 4
    },
    sx: _objectSpread({}, sxColor, {}, sxSize.button)
  }), icon);

  if (wrapper) {
    return _react.default.cloneElement(wrapper, {
      children: buttonJSX
    });
  } else {
    if (label) {
      return /*#__PURE__*/_react.default.createElement(Tooltip, {
        label: label,
        position: labelPosition
      }, buttonJSX);
    } else {
      return buttonJSX;
    }
  }
});

var _default = IconButton;
exports.default = _default;

//# sourceMappingURL=IconButton.js.map