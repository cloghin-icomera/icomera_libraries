"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrimary = exports.getPages = exports.adjustData = exports.addCheckboxes = void 0;

var _react = _interopRequireDefault(require("react"));

var _atoms = require("../../atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var addCheckboxes = function addCheckboxes(columns, rows, selected, selectAll, selectRow, primaryKey) {
  return [{
    field: 'select',
    width: 72,
    fixed: true,
    header: /*#__PURE__*/_react.default.createElement(TableCheckbox, {
      checked: selected.length === rows.length,
      indeterminate: selected.length > 0 && selected.length < rows.length,
      onChange: function onChange(e) {
        return selectAll(e);
      }
    }, selected.length > 0 && "(".concat(selected.length, ")")),
    render: function render(row) {
      return /*#__PURE__*/_react.default.createElement(TableCheckbox, {
        key: row[primaryKey],
        checked: selected.indexOf(row[primaryKey]) !== -1,
        onChange: function onChange(e) {
          return selectRow(e, row);
        }
      });
    }
  }].concat(_toConsumableArray(columns));
};

exports.addCheckboxes = addCheckboxes;

var adjustData = function adjustData(columns, rows) {
  var renderedColumns = columns.filter(function (c) {
    return c.render && !(c.field in rows[0]);
  });

  var renderedFields = function renderedFields(row) {
    var obj = {};

    if (renderedColumns.length > 0) {
      renderedColumns.forEach(function (column) {
        if (column.sortOn) {
          obj[column.field] = column.sortOn(row);
        }
      });
      return obj;
    } else {
      return;
    }
  }; // add the rendered fields to rows


  var adjustedRows = rows.map(function (row) {
    return _objectSpread({}, renderedFields(row), {}, row);
  });
  var adjustedColumns = columns.map(function (c) {
    if (!c.sortOn && c.render && !(c.field in rows[0])) {
      console.warn("Sorting on rendered column '".concat(c.header, "' is disabled. To enable, use the 'sortOn' property to return a sortable value eg. sortOn: row => value"));
      c.sortable = false;
    } else if (c.sortable === undefined) {
      c.sortable = true;
    }

    return c;
  });
  return [adjustedColumns, adjustedRows];
};

exports.adjustData = adjustData;

var getPages = function getPages(rows, pageSize, primaryKey) {
  var pages = [];

  if (pageSize && rows.length > pageSize) {
    var _loop = function _loop(index) {
      var start = index * pageSize;
      var end = index * pageSize + pageSize;
      var page = [];
      rows.slice(start, end).forEach(function (row) {
        page.push(row[primaryKey]);
      });
      pages.push(page);
    };

    for (var index = 0; index < Math.ceil(rows.length / pageSize); index++) {
      _loop(index);
    }
  } else {
    var page = [];
    rows.forEach(function (row) {
      page.push(row[primaryKey]);
    });
    pages.push(page);
  }

  return pages;
};

exports.getPages = getPages;

var getPrimary = function getPrimary(columns, primaryKey) {
  var primary;
  columns.forEach(function (column) {
    if ('primary' in column) {
      primary = column.field;
    } else if (primaryKey) {
      primary = primaryKey;
    } else {
      primary = columns[0].field;
    }
  });
  return primary;
};

exports.getPrimary = getPrimary;

//# sourceMappingURL=utils.js.map