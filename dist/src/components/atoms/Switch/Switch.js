"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("../Box/Box"));

var _Flex = _interopRequireDefault(require("../Flex/Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = _react.default.forwardRef(function (_ref, ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label,
      rest = _objectWithoutProperties(_ref, ["checked", "onChange", "label"]);

  return /*#__PURE__*/_react.default.createElement(_Flex.default, _extends({
    as: "label",
    variant: "label"
  }, rest, {
    __themeKey: "forms"
  }), /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    ref: ref,
    as: "input",
    type: "checkbox"
  }, rest, {
    sx: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: 1,
      height: 1,
      overflow: 'hidden'
    }
  })), /*#__PURE__*/_react.default.createElement(_Flex.default, {
    variant: "switch",
    __themeKey: "forms",
    __css: {
      'input:checked ~ &': {
        bg: 'brand'
      },
      'input:checked ~ & > .handle': {
        ml: '16px',
        bg: 'card'
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: "handle"
  })), label && /*#__PURE__*/_react.default.createElement(_Box.default, {
    as: "span",
    ml: 2
  }, label));
});

exports.default = _default;

//# sourceMappingURL=Switch.js.map