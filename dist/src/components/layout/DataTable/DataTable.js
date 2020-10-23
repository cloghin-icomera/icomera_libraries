"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _atoms = require("../../atoms");

var _DataTableHeader = _interopRequireDefault(require("./DataTableHeader"));

var _DataTableBody = _interopRequireDefault(require("./DataTableBody"));

var _DataTableFooter = _interopRequireDefault(require("./DataTableFooter"));

var _DataTablePagination = _interopRequireDefault(require("./DataTablePagination"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DataTable = _react.default.forwardRef(function (_ref, ref) {
  var _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$pageSize = _ref.pageSize,
      pageSize = _ref$pageSize === void 0 ? undefined : _ref$pageSize,
      _ref$primaryKey = _ref.primaryKey,
      primaryKey = _ref$primaryKey === void 0 ? undefined : _ref$primaryKey,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? [] : _ref$rows,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? undefined : _ref$selected,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? undefined : _ref$onSelect,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? undefined : _ref$title,
      rest = _objectWithoutProperties(_ref, ["columns", "pageSize", "primaryKey", "rows", "selected", "onSelect", "title"]);

  var primary = (0, _react.useMemo)(function () {
    return (0, _utils.getPrimary)(columns, primaryKey);
  }, [columns, primaryKey]);

  var _useMemo = (0, _react.useMemo)(function () {
    return (0, _utils.adjustData)(columns, rows);
  }, [columns, rows]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      adjustedColumns = _useMemo2[0],
      adjustedRows = _useMemo2[1];

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      activePage = _useState2[0],
      setActivePage = _useState2[1];

  var _useState3 = (0, _react.useState)(adjustedRows),
      _useState4 = _slicedToArray(_useState3, 2),
      sortedRows = _useState4[0],
      setSortedRows = _useState4[1];

  var selectAll = (0, _react.useCallback)(function (e) {
    if (!onSelect) {
      console.warn("To enable selection, provide the 'onSelect' function to 'DataTable' component. If you are storing select state via a 'useState' hook, you can do something like: '<DataTable select={select} onSelect={setSelect} />'. See https://bit.dev/icomera/components/layout/data-table for more information.");
    } else {
      onSelect(e.target.checked ? sortedRows.map(function (row) {
        return row[primary];
      }) : []);
    }
  }, [primary, sortedRows, onSelect]);
  var selectRow = (0, _react.useCallback)(function (e, row) {
    if (!onSelect) {
      console.warn("To enable selection, provide the 'onSelect' function to 'DataTable' component. If you are storing select state via a 'useState' hook, you can do something like: '<DataTable select={select} onSelect={setSelect} />'. See https://bit.dev/icomera/components/layout/data-table for more information.");
    } else {
      onSelect(e.target.checked ? selected.concat(row[primary]) : selected.filter(function (val) {
        return val !== row[primary];
      }));
    }
  }, [primary, selected, onSelect]);
  var sortData = (0, _react.useCallback)(function (field, direction) {
    console.log('sort function called:', field, direction);

    var sorted = _toConsumableArray(adjustedRows).sort(function (a, b) {
      if (a[field] < b[field]) {
        return direction === 'asc' ? -1 : 1;
      }

      if (a[field] > b[field]) {
        return direction === 'asc' ? 1 : -1;
      }

      return 0;
    });

    setSortedRows(sorted);
  }, [adjustedRows, setSortedRows]);

  if (selected) {
    adjustedColumns = (0, _react.useMemo)(function () {
      return (0, _utils.addCheckboxes)(adjustedColumns, sortedRows, selected, selectAll, selectRow, primary);
    }, [adjustedColumns, sortedRows, selected, selectAll, selectRow, primary]);
  }

  var pages = (0, _react.useMemo)(function () {
    return (0, _utils.getPages)(sortedRows, pageSize, primary);
  }, [sortedRows, pageSize, primary]);
  return /*#__PURE__*/_react.default.createElement(_atoms.Box, _extends({
    ref: ref
  }, rest), /*#__PURE__*/_react.default.createElement(_DataTableHeader.default, {
    columns: adjustedColumns,
    rows: adjustedRows,
    setSorted: setSortedRows,
    sortData: sortData
  }), /*#__PURE__*/_react.default.createElement(_DataTableBody.default, {
    pages: pages,
    activePage: activePage,
    pageSize: pageSize,
    selected: selected,
    columns: adjustedColumns,
    rows: sortedRows,
    primary: primary
  }), pageSize && sortedRows.length > pageSize && /*#__PURE__*/_react.default.createElement(_DataTableFooter.default, null, /*#__PURE__*/_react.default.createElement(_DataTablePagination.default, {
    pages: pages,
    active: activePage,
    setActive: setActivePage
  })));
});

DataTable.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    align: _propTypes.default.oneOf(['center', 'left', 'right']),
    field: _propTypes.default.string.isRequired,
    fixed: _propTypes.default.bool,
    header: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    render: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.element]),
    primary: _propTypes.default.bool,
    sortable: _propTypes.default.bool,
    sortOn: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.number]),
    width: _propTypes.default.number
  })).isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  onSelect: _propTypes.default.func,
  pageSize: _propTypes.default.number,
  primaryKey: _propTypes.default.string,
  selected: _propTypes.default.array,
  title: _propTypes.default.string
};
var _default = DataTable;
exports.default = _default;

//# sourceMappingURL=DataTable.js.map