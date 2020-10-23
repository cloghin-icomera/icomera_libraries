"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _color = require("@theme-ui/color");

var _Flex = _interopRequireDefault(require("../Flex/Flex"));

var _Box = _interopRequireDefault(require("../Box/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getPosition = function getPosition(position) {
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

  return sxPos;
};

var Tooltip = function Tooltip(_ref) {
  var label = _ref.label,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom' : _ref$position,
      children = _ref.children;
  var sxPos = getPosition(position);
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

Tooltip.propTypes = {
  label: _propTypes.default.string.isRequired,
  position: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
  children: _propTypes.default.element.isRequired
};
var _default = Tooltip;
exports.default = _default;

//# sourceMappingURL=Tooltip.js.map