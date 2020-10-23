"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DataTableRow = _interopRequireDefault(require("./DataTableRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = _react.default.memo(function (_ref) {
  var activePage = _ref.activePage,
      columns = _ref.columns,
      pages = _ref.pages,
      rows = _ref.rows,
      selected = _ref.selected,
      primary = _ref.primary;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, rows.filter(function (row) {
    return pages[activePage].indexOf(row[primary]) !== -1;
  }).map(function (row) {
    return /*#__PURE__*/_react.default.createElement(_DataTableRow.default, {
      columns: columns,
      key: row[primary],
      row: row,
      primary: primary,
      selected: selected ? selected.indexOf(row[primary]) !== -1 : undefined
    });
  }));
});

var _default = Body;
exports.default = _default;

//# sourceMappingURL=DataTableBody.js.map