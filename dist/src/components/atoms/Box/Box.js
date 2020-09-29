"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Box = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _css = require("@theme-ui/css");

var _shouldForwardProp = require("@styled-system/should-forward-prop");

var _space = _interopRequireDefault(require("@styled-system/space"));

var _color = _interopRequireDefault(require("@styled-system/color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var shouldForwardProp = (0, _shouldForwardProp.createShouldForwardProp)([].concat(_toConsumableArray(_space.default.propNames), _toConsumableArray(_color.default.propNames)));

var sx = function sx(props) {
  return (0, _css.css)(props.sx)(props.theme);
};

var base = function base(props) {
  return (0, _css.css)(props.__css)(props.theme);
};

var variant = function variant(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      _ref$__themeKey = _ref.__themeKey,
      __themeKey = _ref$__themeKey === void 0 ? 'variants' : _ref$__themeKey;

  return (0, _css.css)((0, _css.get)(theme, __themeKey + '.' + variant, (0, _css.get)(theme, variant)));
};

var Box = (0, _styled.default)('div', {
  shouldForwardProp: shouldForwardProp
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0
}, base, variant, _space.default, _color.default, sx, function (props) {
  return props.css;
});
exports.Box = Box;
var _default = Box;
exports.default = _default;

//# sourceMappingURL=Box.js.map