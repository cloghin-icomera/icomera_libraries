"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _color = require("@theme-ui/color");

var _Box = _interopRequireDefault(require("../Box/Box"));

var _utils = require("../../utils");

var _themeUi = require("theme-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getColors = function getColors(variant, color, activeMode) {
  if (color) {
    switch (variant) {
      case 'default':
        return {
          color: color,
          fill: color,
          stroke: color,
          '&:not(.active):hover': {
            bg: (0, _color.alpha)(color, 0.1),
            color: activeMode === 'dark' ? (0, _color.lighten)(color, 0.2) : (0, _color.darken)(color, 0.15),
            fill: activeMode === 'dark' ? (0, _color.lighten)(color, 0.2) : (0, _color.darken)(color, 0.15),
            stroke: activeMode === 'dark' ? (0, _color.lighten)(color, 0.2) : (0, _color.darken)(color, 0.15)
          }
        };

      case 'primary':
        return {
          bg: color,
          '&:not(.active):hover': {
            bg: activeMode === 'dark' ? (0, _color.lighten)(color, 0.2) : (0, _color.darken)(color, 0.15)
          }
        };

      case 'outlined':
        return {
          color: color,
          fill: color,
          stroke: color,
          '&:not(.active):hover': {
            bg: (0, _color.alpha)(color, 0.1),
            color: activeMode === 'dark' ? (0, _color.lighten)(color, 0.2) : (0, _color.darken)(color, 0.15),
            fill: activeMode === 'dark' ? (0, _color.lighten)(color, 0.2) : (0, _color.darken)(color, 0.15),
            stroke: activeMode === 'dark' ? (0, _color.lighten)(color, 0.2) : (0, _color.darken)(color, 0.15)
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

  var _useColorMode = (0, _themeUi.useColorMode)(),
      _useColorMode2 = _slicedToArray(_useColorMode, 1),
      colorMode = _useColorMode2[0];

  var localMode = (0, _react.useContext)(_utils.ColorContext);
  var activeMode = localMode;

  if (colorMode !== 'default' && localMode === 'default') {
    activeMode = colorMode;
  }

  var className = getClassName(active, rounded, disabled);
  var sxColor = getColors(variant, color, activeMode);
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