"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _atoms = require("../../atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sxCell = function sxCell(width, align, fixed) {
  return {
    flexBasis: width,
    flexGrow: fixed ? 0 : width,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'
  };
};

var Cell = _react.default.memo(function (_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      data = _ref.data,
      _ref$fixed = _ref.fixed,
      fixed = _ref$fixed === void 0 ? false : _ref$fixed,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'body' : _ref$variant,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, ["align", "data", "fixed", "variant", "width"]);

  return /*#__PURE__*/_react.default.createElement(_atoms.Flex, _extends({
    sx: sxCell(width, align, fixed)
  }, rest, {
    variant: variant,
    __themeKey: "tables"
  }), data);
});

var _default = Cell;
exports.default = _default;

//# sourceMappingURL=DataTableCell.js.map