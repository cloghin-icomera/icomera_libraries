"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorModeProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _themeUi = require("theme-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var applyColorMode = function applyColorMode(theme, mode) {
  if (!mode) return theme;
  var modes = (0, _themeUi.get)(theme, 'colors.modes', {});
  return _themeUi.merge.all({}, theme, {
    colors: (0, _themeUi.get)(modes, mode, {})
  });
};

var ColorModeProvider = function ColorModeProvider(_ref) {
  var mode = _ref.mode,
      children = _ref.children;

  var _useThemeUI = (0, _themeUi.useThemeUI)(),
      theme = _useThemeUI.theme;

  var new_theme = applyColorMode(theme, mode);
  return /*#__PURE__*/_react.default.createElement(_themeUi.ThemeProvider, {
    theme: new_theme
  }, children);
};

exports.ColorModeProvider = ColorModeProvider;

//# sourceMappingURL=index.js.map