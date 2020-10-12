"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _color = require("@theme-ui/color");

var _Box = _interopRequireDefault(require("../Box/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getVariant = function getVariant(id) {
  var variant;
  return variant;
};

var _default = _react.default.forwardRef(function (_ref, ref) {
  var icon = _ref.icon,
      label = _ref.label,
      color = _ref.color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      active = _ref.active,
      rounded = _ref.rounded,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["icon", "label", "color", "variant", "active", "rounded", "disabled"]);

  /* let match = useRouteMatch({
  	path: props.to,
  	exact: props.exact ? true : false
     });
     */
  if (icon && label) {
    icon = _react.default.cloneElement(icon, {
      mr: 2,
      ml: -1
    });
  } else if (icon) {
    icon = _react.default.cloneElement(icon, {
      mr: -1,
      ml: -1
    });
  }

  var className = active ? 'active' : disabled ? 'disabled' : '';
  className += rounded ? ' rounded' : '';
  /*
  let color = {
  //bg: 'primary',
  hover: darken('primary', 0.15),
  fill: 'card',
  stroke: 'card',
  //color: 'card'
  }
  if (props.variant === 'primary') {
  color = (props.color) ?
  {
  ...color,
  bg: props.color,
  hover: darken(props.color, 0.15),
  } : {
  ...color
  }
  }
   */

  return /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    ref: ref,
    as: "button",
    className: className,
    variant: variant
  }, props, {
    __themeKey: "buttons",
    __css: {
      appearance: 'none',
      display: 'inline-flex',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 3,
      py: 2,
      border: 0
    }
  }), icon, label);
});

exports.default = _default;

//# sourceMappingURL=NewButton.js.map