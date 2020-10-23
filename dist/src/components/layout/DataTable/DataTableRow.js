"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _atoms = require("../../atoms");

var _DataTableCell = _interopRequireDefault(require("./DataTableCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Row = _react.default.memo(function (_ref) {
  var columns = _ref.columns,
      row = _ref.row,
      primary = _ref.primary,
      selected = _ref.selected,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'row' : _ref$variant,
      rest = _objectWithoutProperties(_ref, ["columns", "row", "primary", "selected", "variant"]);

  return /*#__PURE__*/_react.default.createElement(_atoms.Flex, _extends({
    className: selected ? 'selected' : undefined,
    variant: variant
  }, rest, {
    __themeKey: "tables"
  }), columns.map(function (column, index) {
    return /*#__PURE__*/_react.default.createElement(_DataTableCell.default, {
      key: row[primary] + index,
      width: column.width || 100 / columns.length,
      align: column.align,
      fixed: column.fixed,
      data: column.render ? column.render(row) : row[column.field]
    });
  }));
});

var _default = Row;
exports.default = _default;

//# sourceMappingURL=DataTableRow.js.map