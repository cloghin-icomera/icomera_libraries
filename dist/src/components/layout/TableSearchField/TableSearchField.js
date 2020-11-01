"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _atoms = require("../../atoms");

var _outline = require("../../../icons/icomera/outline");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableSearchField = _react.default.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      name = _ref.name,
      onSearch = _ref.onSearch,
      onToggle = _ref.onToggle,
      onBlur = _ref.onBlur,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["active", "name", "onSearch", "onToggle", "onBlur", "value"]);

  return /*#__PURE__*/_react.default.createElement(_atoms.Flex, _extends({
    ml: 2,
    sx: {
      justifyContent: 'flex-end'
    }
  }, rest), active && /*#__PURE__*/_react.default.createElement(_atoms.Input, {
    ref: ref,
    name: name,
    value: value,
    size: "small",
    onChange: onSearch,
    onBlur: onBlur
  }), /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
    sx: {
      flex: '0 0 29px',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: !active ? /*#__PURE__*/_react.default.createElement(_outline.Search, null) : /*#__PURE__*/_react.default.createElement(_outline.Remove, null),
    size: "small",
    onClick: onToggle,
    hoverIndicator: true
  })));
});

TableSearchField.propTypes = {
  active: _propTypes.default.bool,
  name: _propTypes.default.string,
  onSearch: _propTypes.default.func.isRequired,
  onToggle: _propTypes.default.func.isRequired,
  value: _propTypes.default.string
};
var _default = TableSearchField;
exports.default = _default;

//# sourceMappingURL=TableSearchField.js.map