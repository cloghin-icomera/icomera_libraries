"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("../Box/Box"));

var _Label = _interopRequireDefault(require("../Label/Label"));

var _Input = _interopRequireDefault(require("../Input/Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* utils */
var getProps = function getProps(test) {
  return function (props) {
    var next = {};

    for (var key in props) {
      if (test(key || '')) next[key] = props[key];
    }

    return next;
  };
};

var MRE = /^m[trblxy]?$/;
var getMargin = getProps(function (k) {
  return MRE.test(k);
});
var omitMargin = getProps(function (k) {
  return !MRE.test(k);
});
/* utils */

var _default = _react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Control = _ref$as === void 0 ? _Input.default : _ref$as,
      label = _ref.label,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["as", "label", "name"]);

  return /*#__PURE__*/_react.default.createElement(_Box.default, getMargin(props), /*#__PURE__*/_react.default.createElement(_Label.default, {
    htmlFor: name
  }, label), /*#__PURE__*/_react.default.createElement(Control, _extends({
    ref: ref,
    id: name,
    name: name
  }, omitMargin(props))));
});

exports.default = _default;

//# sourceMappingURL=Field.js.map