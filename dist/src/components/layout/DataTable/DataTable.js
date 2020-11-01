"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _atoms = require("../../atoms");

var _Table = require("../Table");

var _TableHeader = require("../TableHeader");

var _TableBody = require("../TableBody");

var _TableFooter = require("../TableFooter");

var _TableRow = require("../TableRow");

var _TableCell = require("../TableCell");

var _TablePagination = require("../TablePagination");

var _utils = require("../../utils");

var _utils2 = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DataTable = function DataTable(_ref) {
  var columns = _ref.columns,
      rows = _ref.rows,
      rowsPerPage = _ref.rowsPerPage,
      _ref$rowsPerPageOptio = _ref.rowsPerPageOptions,
      rowsPerPageOptions = _ref$rowsPerPageOptio === void 0 ? [5, 10, 25] : _ref$rowsPerPageOptio,
      primaryKey = _ref.primaryKey,
      selected = _ref.selected,
      onSelect = _ref.onSelect;
  rows = (0, _utils2.adjustData)(rows, columns);
  var primary = columns.filter(function (col) {
    return col.primary;
  }).field || primaryKey || columns[0].field;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var _useState3 = (0, _react.useState)(rowsPerPage),
      _useState4 = _slicedToArray(_useState3, 2),
      perPage = _useState4[0],
      setPerPage = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      page = _useState6[0],
      setPage = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      sorting = _useState8[0],
      setSorting = _useState8[1];

  var _useReducer = (0, _react.useReducer)(function (state, newState) {
    return _objectSpread({}, state, {}, newState);
  }, (0, _utils2.getFilters)(columns)),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      searching = _useReducer2[0],
      setSearching = _useReducer2[1];

  var modifiedRows = (0, _react.useMemo)(function () {
    return (0, _utils.sortAndFilterData)(rows, searching, sorting);
  }, [rows, sorting, searching]);
  var slice = (0, _react.useMemo)(function () {
    if (perPage) {
      return {
        start: page * perPage,
        end: page * perPage + perPage
      };
    } else {
      return {
        start: 0,
        end: modifiedRows.length
      };
    }
  }, [page, perPage, modifiedRows]);
  var handleSelectAll = (0, _react.useCallback)(function (e) {
    return onSelect(e.target.checked ? modifiedRows.map(function (row) {
      return row[primary];
    }) : []);
  }, [modifiedRows, primary, onSelect]);
  var handleSelectRow = (0, _react.useCallback)(function (e, row) {
    return onSelect(e.target.checked ? selected.concat(row[primary]) : selected.filter(function (val) {
      return val !== row[primary];
    }));
  }, [primary, selected, onSelect]);

  var handleChangePerPage = function handleChangePerPage(e) {
    setPerPage(parseInt(e.target.value));
    setPage(0);
  };

  var handleChangePage = function handleChangePage(newPage) {
    return setPage(newPage);
  };

  return /*#__PURE__*/_react.default.createElement(_Table.Table, null, /*#__PURE__*/_react.default.createElement(_TableHeader.TableHeader, null, /*#__PURE__*/_react.default.createElement(_TableRow.TableRow, null, selected && /*#__PURE__*/_react.default.createElement(_TableCell.TableCell, {
    as: "th",
    sx: {
      width: '64px'
    }
  }, /*#__PURE__*/_react.default.createElement(_atoms.Checkbox, {
    indeterminate: selected.length > 0 && selected.length < modifiedRows.length,
    checked: modifiedRows.length > 0 && selected.length === modifiedRows.length,
    onChange: function onChange(e) {
      return handleSelectAll(e);
    }
  })), columns.map(function (column) {
    return /*#__PURE__*/_react.default.createElement(_TableCell.TableCell, {
      as: "th",
      key: column.field
    }, /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
      sx: {
        justifyContent: !column.align ? 'space-between' : column.align === 'end' ? 'flex-end' : 'center',
        alignItems: 'center'
      }
    }, !column.sort && /*#__PURE__*/_react.default.createElement(_atoms.Text, {
      variant: "tableHeader"
    }, column.header), column.sort && /*#__PURE__*/_react.default.createElement(_utils2.SortController, {
      field: column.field,
      label: column.header,
      sorting: sorting,
      onSort: setSorting,
      setPage: setPage
    }), column.search && /*#__PURE__*/_react.default.createElement(_utils2.SearchController, {
      field: column.field,
      searching: searching,
      onSearch: setSearching,
      focused: focused,
      setFocused: setFocused,
      setPage: setPage
    })));
  }))), /*#__PURE__*/_react.default.createElement(_TableBody.TableBody, null, modifiedRows.slice(slice.start, slice.end).map(function (row) {
    return /*#__PURE__*/_react.default.createElement(_TableRow.TableRow, {
      key: row[primary],
      selected: selected && selected.indexOf(row[primary]) !== -1
    }, selected && /*#__PURE__*/_react.default.createElement(_TableCell.TableCell, null, /*#__PURE__*/_react.default.createElement(_atoms.Checkbox, {
      checked: selected.indexOf(row[primary]) !== -1,
      onChange: function onChange(e) {
        return handleSelectRow(e, row);
      }
    })), columns.map(function (column) {
      return /*#__PURE__*/_react.default.createElement(_TableCell.TableCell, {
        key: row[primary] + row[column.field],
        align: column.align
      }, row[column.field] && !column.render ? /*#__PURE__*/_react.default.createElement(_atoms.Text, null, row[column.field]) : column.render(row));
    }));
  })), /*#__PURE__*/_react.default.createElement(_TableFooter.TableFooter, null, /*#__PURE__*/_react.default.createElement(_TableRow.TableRow, null, /*#__PURE__*/_react.default.createElement(_TableCell.TableCell, {
    colSpan: (selected ? columns.length + 1 : columns.length).toString()
  }, /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
    sx: {
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_atoms.Flex, null, modifiedRows.length < rows.length && /*#__PURE__*/_react.default.createElement(_atoms.Text, {
    pr: 3,
    mr: 3,
    sx: {
      borderRightWidth: 'thin',
      borderRightStyle: 'solid',
      borderRightColor: 'border'
    }
  }, "Filtered: ", modifiedRows.length, " of ", rows.length), selected && /*#__PURE__*/_react.default.createElement(_atoms.Text, {
    color: selected.length > 0 ? 'text' : 'muted'
  }, "Selected: ", selected.length, " of ", rows.length)), perPage && /*#__PURE__*/_react.default.createElement(_TablePagination.TablePagination, {
    count: modifiedRows.length,
    page: page,
    rowsPerPage: perPage,
    rowsPerPageOptions: rowsPerPageOptions,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangePerPage
  }))))));
};

DataTable.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    align: _propTypes.default.oneOf(['start', 'center', 'end']),
    field: _propTypes.default.string.isRequired,
    header: _propTypes.default.string,
    render: _propTypes.default.func,
    primary: _propTypes.default.bool,
    search: _propTypes.default.bool,
    sort: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func])
  })).isRequired,
  rows: _propTypes.default.array.isRequired,
  rowsPerPage: _propTypes.default.number,
  rowsPerPageOptions: _propTypes.default.array,
  primaryKey: _propTypes.default.string,
  selected: _propTypes.default.array,
  onSelect: _propTypes.default.func
};
var _default = DataTable;
exports.default = _default;

//# sourceMappingURL=DataTable.js.map