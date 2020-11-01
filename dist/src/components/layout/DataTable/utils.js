"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchController = exports.SortController = exports.getFilters = exports.adjustData = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TableSortButton = require("../TableSortButton");

var _TableSearchField = require("../TableSearchField");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var adjustData = function adjustData(rows, columns) {
  var renderedColumns = columns.filter(function (c) {
    return c.render && !(c.field in rows[0]);
  });

  var renderedFields = function renderedFields(row) {
    var obj = {};

    if (renderedColumns.length > 0) {
      renderedColumns.forEach(function (column) {
        if (column.sort) {
          obj[column.field] = column.sort(row);
        }
      });
      return obj;
    } else {
      return;
    }
  }; // add the rendered fields to rows


  return rows.map(function (row) {
    return _objectSpread({}, renderedFields(row), {}, row);
  });
};

exports.adjustData = adjustData;

var getFilters = function getFilters(columns) {
  var result = {};
  columns.forEach(function (column) {
    if (column.search) {
      result[column.field] = {
        value: '',
        active: false
      };
    }
  });
  return result;
};

exports.getFilters = getFilters;

var SortController = function SortController(_ref) {
  var field = _ref.field,
      label = _ref.label,
      sorting = _ref.sorting,
      onSort = _ref.onSort,
      setPage = _ref.setPage;
  var handleSorting = (0, _react.useCallback)(function () {
    var value = !sorting[field] ? 'asc' : sorting[field] === 'asc' ? 'desc' : 'asc';
    setPage(0);
    onSort(_defineProperty({}, field, value));
  }, [sorting, field, onSort, setPage]);
  return /*#__PURE__*/_react.default.createElement(_TableSortButton.TableSortButton, {
    label: label,
    sortOrder: sorting[field],
    onSort: handleSorting
  });
};

exports.SortController = SortController;

var SearchController = function SearchController(_ref2) {
  var field = _ref2.field,
      searching = _ref2.searching,
      onSearch = _ref2.onSearch,
      focused = _ref2.focused,
      setFocused = _ref2.setFocused,
      setPage = _ref2.setPage;
  var inputEl = (0, _react.useRef)();
  var handleSearch = (0, _react.useCallback)(function (e) {
    var query = _objectSpread({}, searching, _defineProperty({}, field, {
      active: searching[field].active,
      value: e.target.value
    }));

    setPage(0);
    onSearch(query);
  }, [field, searching, onSearch, setPage]);
  var handleToggle = (0, _react.useCallback)(function () {
    setFocused(searching[field].active ? null : field);

    var query = _objectSpread({}, searching, _defineProperty({}, field, {
      active: !searching[field].active,
      value: ''
    }));

    onSearch(query);
  }, [field, searching, setFocused, onSearch]);
  var handleBlur = (0, _react.useCallback)(function () {
    return setFocused(null);
  }, [setFocused]);
  (0, _react.useEffect)(function () {
    if (inputEl && focused === field) {
      inputEl.current.focus();
    }
  });
  return /*#__PURE__*/_react.default.createElement(_TableSearchField.TableSearchField, {
    active: searching[field].active,
    value: searching[field].value,
    name: field,
    ref: inputEl,
    onSearch: handleSearch,
    onToggle: handleToggle,
    onBlur: handleBlur
  });
};

exports.SearchController = SearchController;

//# sourceMappingURL=utils.js.map