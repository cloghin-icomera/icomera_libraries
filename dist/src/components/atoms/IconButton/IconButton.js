"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box/Box"));

var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));

var _classes = require("./classes");

var _colors = require("./colors");

var _sizes = require("./sizes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var IconButton = _react.default.forwardRef(function (_ref, ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'button' : _ref$as,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? null : _ref$color,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$hoverIndicator = _ref.hoverIndicator,
      hoverIndicator = _ref$hoverIndicator === void 0 ? false : _ref$hoverIndicator,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? undefined : _ref$href,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? undefined : _ref$icon,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? undefined : _ref$label,
      _ref$labelPosition = _ref.labelPosition,
      labelPosition = _ref$labelPosition === void 0 ? undefined : _ref$labelPosition,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? undefined : _ref$onClick,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? false : _ref$rounded,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'icon' : _ref$variant,
      _ref$wrapper = _ref.wrapper,
      wrapper = _ref$wrapper === void 0 ? undefined : _ref$wrapper,
      rest = _objectWithoutProperties(_ref, ["active", "as", "color", "disabled", "hoverIndicator", "href", "icon", "label", "labelPosition", "onClick", "rounded", "size", "variant", "wrapper"]);

  var className = (0, _classes.getClassName)(active, rounded, disabled, href, onClick, hoverIndicator);
  var sxColor = (0, _colors.getColors)(variant, color);
  var sxSize = (0, _sizes.getSizes)(size);
  icon = _react.default.cloneElement(icon, sxSize.icon);

  if (href && !onClick) {
    as = 'a';
  }

  var buttonJSX = /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    ref: ref,
    as: as,
    href: href ? href : undefined,
    onClick: onClick ? onClick : undefined,
    variant: variant,
    className: className
  }, rest, {
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
      return /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
        label: label,
        position: labelPosition
      }, buttonJSX);
    } else {
      return buttonJSX;
    }
  }
});

IconButton.propTypes = {
  active: _propTypes.default.bool,
  as: _propTypes.default.oneOf(['button', 'a']),
  color: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  hoverIndicator: _propTypes.default.bool,
  href: _propTypes.default.string,
  icon: _propTypes.default.element.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  labelPosition: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
  onClick: _propTypes.default.func,
  ref: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })]),
  rounded: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  variant: _propTypes.default.oneOf(['icon', 'action']),
  wrapper: _propTypes.default.element
};
var _default = IconButton;
exports.default = _default;

//# sourceMappingURL=IconButton.js.map