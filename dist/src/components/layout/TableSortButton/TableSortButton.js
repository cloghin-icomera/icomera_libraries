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

var TableSortButton = _react.default.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      sortOrder = _ref.sortOrder,
      onSort = _ref.onSort,
      rest = _objectWithoutProperties(_ref, ["label", "sortOrder", "onSort"]);

  return /*#__PURE__*/_react.default.createElement(_atoms.Box, _extends({
    as: "button",
    ref: ref,
    onClick: onSort
  }, rest, {
    __css: {
      appearance: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      border: 0,
      padding: 0,
      outline: 'none',
      fontFamily: 'inherit',
      bg: 'transparent'
    }
  }), /*#__PURE__*/_react.default.createElement(_atoms.Text, {
    variant: "tableHeader",
    color: sortOrder ? 'text' : undefined,
    sx: {
      textAlign: 'left'
    }
  }, label), /*#__PURE__*/_react.default.createElement(_atoms.Box, {
    sx: {
      width: '19px',
      height: '19px'
    }
  }, sortOrder === 'asc' && /*#__PURE__*/_react.default.createElement(_outline.ArrowUp, {
    stroke: "text",
    size: 19
  }), sortOrder === 'desc' && /*#__PURE__*/_react.default.createElement(_outline.ArrowDown, {
    stroke: "text",
    size: 19
  })));
});

TableSortButton.propTypes = {
  label: _propTypes.default.string.isRequired,
  sortOrder: _propTypes.default.string,
  onSort: _propTypes.default.func.isRequired,
  refProp: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.instanceOf(Element)
  })])
};
var _default = TableSortButton;
exports.default = _default;

//# sourceMappingURL=TableSortButton.js.map