"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _color = require("@theme-ui/color");

var _atoms = require("../../atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sxRow = {
  p: 3,
  borderBottomColor: 'border',
  borderBottomWidth: 'thin',
  borderBottomStyle: 'solid'
};

var sxCell = function sxCell(width) {
  return {
    flexBasis: width,
    flexGrow: width,
    flexShrink: 0,
    alignItems: 'center'
  };
};

var Row = _react.default.memo(function (_ref) {
  var id = _ref.id,
      row = _ref.row,
      template = _ref.template,
      selected = _ref.selected;
  return /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
    className: selected ? 'selected' : '',
    sx: _objectSpread({}, sxRow, {
      borderBottomColor: (0, _color.alpha)('border', 0.5),
      '&.selected': {
        bg: (0, _color.alpha)('border', 0.25),
        boxShadow: function boxShadow(t) {
          return "4px 0 ".concat(t.colors.brand, " inset");
        }
      }
    })
  }, template.map(function (column, index) {
    return /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
      key: index,
      sx: sxCell(column.width)
    }, !column.render ? row[column.field] : column.render(row[column.field], id));
  }));
});

var _default = function _default(_ref2) {
  var pages = _ref2.pages,
      template = _ref2.template,
      activePage = _ref2.activePage,
      _ref2$pageSize = _ref2.pageSize,
      pageSize = _ref2$pageSize === void 0 ? 0 : _ref2$pageSize,
      _ref2$selected = _ref2.selected,
      selected = _ref2$selected === void 0 ? [] : _ref2$selected;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, pages.map(function (page, pIndex) {
    return /*#__PURE__*/_react.default.createElement(_atoms.Box, {
      key: pIndex,
      sx: {
        display: activePage === pIndex ? 'block' : 'none'
      }
    }, page.map(function (row) {
      return /*#__PURE__*/_react.default.createElement(Row, {
        key: row.uid,
        id: row.uid,
        row: row,
        template: template,
        selected: selected.indexOf(row.uid) !== -1
      });
    }));
  }));
};

exports.default = _default;

//# sourceMappingURL=DataTableBody.js.map