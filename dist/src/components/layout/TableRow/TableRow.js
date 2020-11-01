"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _atoms = require("../../atoms");

var _color = require("@theme-ui/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableRow = function TableRow(_ref) {
  var selected = _ref.selected,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["selected", "children"]);

  return /*#__PURE__*/_react.default.createElement(_atoms.Box, _extends({
    as: "tr",
    className: selected ? 'selected' : undefined
  }, rest, {
    variant: "row",
    __themeKey: "tables",
    __css: {
      borderBottomColor: (0, _color.alpha)('border', 0.5),
      borderBottomWidth: 'thin',
      borderBottomStyle: 'solid'
    }
  }), children);
};

var _default = TableRow;
exports.default = _default;

//# sourceMappingURL=TableRow.js.map