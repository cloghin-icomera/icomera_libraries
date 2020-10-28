"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("../Box/Box"));

var _Text = _interopRequireDefault(require("../Text/Text"));

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

var CheckboxChecked = function CheckboxChecked(props) {
  return /*#__PURE__*/_react.default.createElement(SVG, props, /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
};

var CheckboxUnchecked = function CheckboxUnchecked(props) {
  return /*#__PURE__*/_react.default.createElement(SVG, props, /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }));
};

var CheckboxIndeterminate = function CheckboxIndeterminate(props) {
  return /*#__PURE__*/_react.default.createElement(SVG, props, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(3.000000, 3.000000)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M4,8 L14,8 C14.5522847,8 15,8.44771525 15,9 C15,9.55228475 14.5522847,10 14,10 L4,10 C3.44771525,10 3,9.55228475 3,9 C3,8.44771525 3.44771525,8 4,8 Z M16,0 L2,0 C0.9,0 0,0.9 0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 Z"
  })));
};

var CheckboxIcon = function CheckboxIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(CheckboxChecked, _extends({}, props, {
    __css: {
      display: 'none',
      'input:checked ~ &': {
        display: 'block'
      }
    }
  })), /*#__PURE__*/_react.default.createElement(CheckboxUnchecked, _extends({}, props, {
    __css: {
      display: 'block',
      'input:checked ~ &': {
        display: 'none'
      },
      '&.indeterminate': {
        display: 'none'
      }
    }
  })), /*#__PURE__*/_react.default.createElement(CheckboxIndeterminate, _extends({}, props, {
    __css: {
      display: 'none',
      '&.indeterminate': {
        display: 'block'
      }
    }
  })));
};

var _default = _react.default.forwardRef(function (_ref2, ref) {
  var indeterminate = _ref2.indeterminate,
      checked = _ref2.checked,
      _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? 'checkbox' : _ref2$variant,
      label = _ref2.label,
      onChange = _ref2.onChange,
      rest = _objectWithoutProperties(_ref2, ["indeterminate", "checked", "variant", "label", "onChange"]);

  return /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    as: "label",
    variant: "label"
  }, rest, {
    __themeKey: "forms",
    __css: {
      display: 'flex'
    }
  }), /*#__PURE__*/_react.default.createElement(_Box.default, {
    ref: ref,
    as: "input",
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    sx: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: 1,
      height: 1,
      overflow: 'hidden'
    }
  }), /*#__PURE__*/_react.default.createElement(_Box.default, {
    as: CheckboxIcon,
    "aria-hidden": "true",
    __themeKey: "forms",
    variant: variant,
    className: indeterminate ? 'indeterminate' : undefined,
    __css: {
      mr: 1,
      borderRadius: 4,
      flexShrink: 0,
      'input:checked ~ &': {
        color: 'primary'
      },
      'input:focus ~ &': {
        color: 'primary',
        bg: 'highlight'
      },
      '&.indeterminate': {
        color: 'muted'
      }
    }
  }), label);
});

exports.default = _default;

//# sourceMappingURL=_Checkbox.js.map