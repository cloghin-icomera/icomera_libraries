"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _atoms = require("../../atoms");

var _DataTableHeader = _interopRequireDefault(require("./DataTableHeader"));

var _DataTableBody = _interopRequireDefault(require("./DataTableBody"));

var _DataTableFooter = _interopRequireDefault(require("./DataTableFooter"));

var _DataTablePagination = _interopRequireDefault(require("./DataTablePagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableCheckbox = function TableCheckbox(_ref) {
  var checked = _ref.checked,
      indeterminate = _ref.indeterminate,
      onChange = _ref.onChange,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["checked", "indeterminate", "onChange", "children"]);

  return /*#__PURE__*/_react.default.createElement(_atoms.Label, _extends({}, props, {
    sx: {
      fontSize: 1,
      color: 'muted',
      pl: 1
    }
  }), /*#__PURE__*/_react.default.createElement(_atoms.Checkbox, {
    checked: checked,
    className: indeterminate ? 'indeterminate' : '',
    onChange: onChange
  }), children);
};

var getTemplate = function getTemplate(columns) {
  return columns.map(function (column) {
    return {
      field: column.field,
      width: column.width || 100 / columns.length,
      render: column.render
    };
  });
};

var getPages = function getPages(rows, pageSize) {
  var pages = [];

  if (pageSize && rows.length > pageSize) {
    for (var index = 0; index < Math.ceil(rows.length / pageSize); index++) {
      var start = index * pageSize;
      var end = index * pageSize + pageSize;
      pages.push(rows.slice(start, end));
    }
  } else {
    pages.push(rows);
  }

  return pages;
}; //TODO: Optimize code so that it only re-renders components that change


var getSelectionColumns = function getSelectionColumns(columns, rows, selected, setSelected) {
  return [{
    field: 'select',
    width: 32,
    headerObj: /*#__PURE__*/_react.default.createElement(TableCheckbox, {
      checked: selected.length === rows.length,
      indeterminate: selected.length > 0 && selected.length < rows.length,
      onChange: function onChange(e) {
        setSelected(e.target.checked ? rows.map(function (r, i) {
          return i;
        }) : []);
      }
    }, selected.length > 0 && "(".concat(selected.length, ")")),
    render: function render() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var id = arguments.length > 1 ? arguments[1] : undefined;
      return /*#__PURE__*/_react.default.createElement(TableCheckbox, {
        key: id,
        checked: selected.indexOf(id) !== -1,
        onChange: function onChange(e) {
          setSelected(e.target.checked ? selected.concat(id) : selected.filter(function (val) {
            return val !== id;
          }));
        }
      });
    }
  }].concat(_toConsumableArray(columns));
};

var generateRowsUID = function generateRowsUID(rows) {
  return rows.map(function (row, index) {
    return _objectSpread({
      uid: index
    }, row);
  });
};

var DataTable = _react.default.forwardRef(function (_ref2, ref) {
  var title = _ref2.title,
      _ref2$rows = _ref2.rows,
      rows = _ref2$rows === void 0 ? [] : _ref2$rows,
      _ref2$columns = _ref2.columns,
      columns = _ref2$columns === void 0 ? [] : _ref2$columns,
      pageSize = _ref2.pageSize,
      _ref2$checkboxSelecti = _ref2.checkboxSelection,
      checkboxSelection = _ref2$checkboxSelecti === void 0 ? false : _ref2$checkboxSelecti,
      selected = _ref2.selected,
      setSelected = _ref2.setSelected,
      props = _objectWithoutProperties(_ref2, ["title", "rows", "columns", "pageSize", "checkboxSelection", "selected", "setSelected"]);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      activePage = _useState2[0],
      setActivePage = _useState2[1];

  rows = generateRowsUID(rows);

  var _useState3 = (0, _react.useState)(rows),
      _useState4 = _slicedToArray(_useState3, 2),
      sortedRows = _useState4[0],
      setSortedRows = _useState4[1];

  if (checkboxSelection) {
    columns = (0, _react.useMemo)(function () {
      return getSelectionColumns(columns, sortedRows, selected, setSelected);
    }, [columns, sortedRows, selected, setSelected]);
  }

  var template = (0, _react.useMemo)(function () {
    return getTemplate(columns);
  }, [columns]);
  var pages = (0, _react.useMemo)(function () {
    return getPages(sortedRows, pageSize);
  }, [sortedRows, pageSize]);
  return /*#__PURE__*/_react.default.createElement(_atoms.Box, _extends({
    ref: ref
  }, props), /*#__PURE__*/_react.default.createElement(_DataTableHeader.default, {
    columns: columns,
    rows: rows,
    setSorted: setSortedRows
  }), /*#__PURE__*/_react.default.createElement(_DataTableBody.default, {
    pages: pages,
    activePage: activePage,
    template: template,
    pageSize: pageSize,
    selected: selected
  }), pageSize && sortedRows.length > pageSize && /*#__PURE__*/_react.default.createElement(_DataTableFooter.default, null, /*#__PURE__*/_react.default.createElement(_DataTablePagination.default, {
    pages: pages,
    active: activePage,
    setActive: setActivePage
  })));
});

var _default = DataTable;
exports.default = _default;

//# sourceMappingURL=DataTable.js.map