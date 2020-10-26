"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _atoms = require("../../atoms");

var _outline = require("../../../icons/icomera/outline");

var _DataTableCell = _interopRequireDefault(require("./DataTableCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var buttonStyle = {
  fontFamily: 'heading',
  fontWeight: 'bold',
  fontSize: 0,
  color: 'muted',
  textTransform: 'uppercase',
  letterSpacing: 1,
  outline: 'none'
};

var handleSort = function handleSort(column, sorting, sortData) {
  var order = sorting.field !== column.field ? 'asc' : sorting.direction === 'asc' ? 'desc' : 'asc';
  sortData(column.field, order);
};

var SortButton = function SortButton(_ref) {
  var column = _ref.column,
      sortData = _ref.sortData,
      sorting = _ref.sorting,
      rest = _objectWithoutProperties(_ref, ["column", "sortData", "sorting"]);

  return /*#__PURE__*/_react.default.createElement(_atoms.Flex, _extends({
    as: "button",
    variant: "headerTitle",
    color: sorting.field === column.field ? 'text' : 'muted',
    onClick: function onClick() {
      return handleSort(column, sorting, sortData);
    },
    __themeKey: "table",
    __css: _objectSpread({
      appearance: 'none',
      border: 0,
      p: 0,
      bg: 'transparent'
    }, buttonStyle)
  }, rest), column.header, sorting.direction === 'desc' && sorting.field === column.field && /*#__PURE__*/_react.default.createElement(_outline.ArrowUp, {
    stroke: "text",
    size: 16
  }), sorting.direction === 'asc' && sorting.field === column.field && /*#__PURE__*/_react.default.createElement(_outline.ArrowDown, {
    stroke: "text",
    size: 16
  }));
};

var SearchField = function SearchField(_ref2) {
  var name = _ref2.name,
      value = _ref2.value,
      handleChange = _ref2.handleChange,
      show = _ref2.show,
      toggleShow = _ref2.toggleShow;
  return /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
    ml: "auto"
  }, /*#__PURE__*/_react.default.createElement(_atoms.Box, {
    sx: {
      flex: '1 1 auto',
      visibility: show[name] ? 'visible' : 'visible'
    }
  }, /*#__PURE__*/_react.default.createElement(_atoms.Input, {
    size: "small",
    name: name,
    value: value,
    placeholder: "filter",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  })), false && /*#__PURE__*/_react.default.createElement(_atoms.Box, {
    sx: {
      flex: '0 0 32px'
    }
  }, /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: show[name] ? /*#__PURE__*/_react.default.createElement(_outline.Remove, null) : /*#__PURE__*/_react.default.createElement(_outline.Search, null),
    onClick: function onClick() {
      return toggleShow(name);
    },
    size: "small"
  })));
};

var getColumnHeader = function getColumnHeader(column, sortData, sorting, search, handleSearch, show, toggleShow) {
  if (_react.default.isValidElement(column.header)) {
    return column.header;
  } else if (column.sortable) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_atoms.Box, {
      sx: {
        alignSelf: 'center',
        flex: '1 1 60%'
      }
    }, /*#__PURE__*/_react.default.createElement(SortButton, {
      column: column,
      sortData: sortData,
      sorting: sorting
    })), column.search && /*#__PURE__*/_react.default.createElement(SearchField, {
      name: column.field,
      value: search[column.field],
      show: show,
      toggleShow: toggleShow,
      handleChange: handleSearch
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
      variant: "headerTitle",
      __themeKey: "table",
      __css: _objectSpread({}, buttonStyle)
    }, /*#__PURE__*/_react.default.createElement(_atoms.Box, null, column.header), column.search && /*#__PURE__*/_react.default.createElement(SearchField, {
      name: column.field,
      value: search[column.field],
      handleChange: handleSearch
    }));
  }
};

var Header = _react.default.memo(function (_ref3) {
  var columns = _ref3.columns,
      sortData = _ref3.sortData,
      search = _ref3.search,
      sorting = _ref3.sorting,
      handleSearch = _ref3.handleSearch,
      rest = _objectWithoutProperties(_ref3, ["columns", "sortData", "search", "sorting", "handleSearch"]);

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var toggleShow = (0, _react.useCallback)(function (name) {
    setShow(_objectSpread({}, show, _defineProperty({}, name, !show[name])));
  }, [show, setShow]);
  return /*#__PURE__*/_react.default.createElement(_atoms.Flex, rest, columns.map(function (column, index) {
    return /*#__PURE__*/_react.default.createElement(_DataTableCell.default, {
      key: index,
      align: column.align,
      data: getColumnHeader(column, sortData, sorting, search, handleSearch, show, toggleShow),
      fixed: column.fixed,
      variant: "header",
      width: column.width || 100 / columns.length
    });
  }));
});

var _default = Header;
exports.default = _default;

//# sourceMappingURL=DataTableHeader.js.map