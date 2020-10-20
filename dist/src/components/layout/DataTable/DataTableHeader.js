"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _atoms = require("../../atoms");

var _outline = require("../../../icons/icomera/outline");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var sortRows = function sortRows(rows, column, direction) {
  return _toConsumableArray(rows).sort(function (a, b) {
    if (a[column] < b[column]) {
      return direction === 'asc' ? -1 : 1;
    }

    if (a[column] > b[column]) {
      return direction === 'asc' ? 1 : -1;
    }

    return 0;
  });
};

var ColumnTitle = function ColumnTitle(_ref) {
  var label = _ref.label,
      isSorted = _ref.isSorted,
      setIsSorted = _ref.setIsSorted,
      setSorted = _ref.setSorted,
      sortFn = _ref.sortFn,
      rows = _ref.rows,
      field = _ref.field;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      sortOrder = _useState2[0],
      setSortOrder = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_atoms.Heading, {
    as: "h5",
    color: isSorted === field ? 'text' : 'muted',
    sx: {
      mr: 1,
      textTransform: 'uppercase',
      letterSpacing: 1,
      cursor: 'pointer',
      lineHeight: '16px'
    },
    onClick: function onClick() {
      if (!sortOrder) {
        setSortOrder('asc');
        setSorted(sortFn(rows, field, 'asc'));
        setIsSorted(field);
      }

      if (sortOrder === 'asc') {
        setSortOrder('desc');
        setSorted(sortFn(rows, field, 'desc'));
        setIsSorted(field);
      }

      if (sortOrder === 'desc') {
        setSortOrder(false);
        setSorted(rows);
        setIsSorted(false);
      }
    }
  }, label), sortOrder === 'desc' && isSorted === field && /*#__PURE__*/_react.default.createElement(_outline.ArrowUp, {
    stroke: "text",
    size: 16
  }), sortOrder === 'asc' && isSorted === field && /*#__PURE__*/_react.default.createElement(_outline.ArrowDown, {
    stroke: "text",
    size: 16
  }));
};

var _default = function _default(_ref2) {
  var columns = _ref2.columns,
      rows = _ref2.rows,
      setSorted = _ref2.setSorted,
      rest = _objectWithoutProperties(_ref2, ["columns", "rows", "setSorted"]);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSorted = _useState4[0],
      setIsSorted = _useState4[1];

  return /*#__PURE__*/_react.default.createElement(_atoms.Flex, _extends({
    sx: sxRow
  }, rest), columns.map(function (column, index) {
    //console.log(column)
    return /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
      key: index,
      sx: sxCell(column.width || 100 / columns.length)
    }, column.headerName && /*#__PURE__*/_react.default.createElement(ColumnTitle, {
      label: column.headerName,
      rows: rows,
      field: column.field,
      setSorted: setSorted,
      isSorted: isSorted,
      setIsSorted: setIsSorted,
      sortFn: column.sortFn ? column.sortFn : sortRows
    }), column.headerObj);
  }));
};

exports.default = _default;

//# sourceMappingURL=DataTableHeader.js.map