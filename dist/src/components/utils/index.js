"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortAndFilterData = exports.MyThemeProvider = exports.ColorModeProvider = exports.MyThemeContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _themeUi = require("theme-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var theme = {
  colors: {
    modes: {
      light: {
        brand: 'blue'
      },
      dark: {
        brand: 'yellow'
      }
    }
  }
};

var MyThemeContext = _react.default.createContext({
  theme: theme,
  mode: 'light'
});

exports.MyThemeContext = MyThemeContext;

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

var MyThemeProvider = function MyThemeProvider(_ref2) {
  var theme = _ref2.theme,
      _ref2$mode = _ref2.mode,
      mode = _ref2$mode === void 0 ? 'light' : _ref2$mode,
      children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement(MyThemeContext.Provider, {
    value: {
      theme: theme,
      mode: mode
    }
  }, children);
};

exports.MyThemeProvider = MyThemeProvider;

var sortData = function sortData(data, sorting) {
  var field, order;

  for (var _i = 0, _Object$entries = Object.entries(sorting); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    field = key;
    order = value;
  }

  return _toConsumableArray(data).sort(function (a, b) {
    if (a[field] < b[field]) {
      return order === 'asc' ? -1 : 1;
    }

    if (a[field] > b[field]) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  });
};

var filterData = function filterData(data, searching) {
  return data.filter(function (datum) {
    var match = true;

    for (var prop in searching) {
      var source = datum[prop].toString().toLowerCase();
      var target = searching[prop].value.toLowerCase();

      if (!source.includes(target)) {
        match = false;
      }
    }

    return match;
  });
};

var sortAndFilterData = function sortAndFilterData(data, searching, sorting) {
  return sortData(filterData(data, searching), sorting);
};

exports.sortAndFilterData = sortAndFilterData;

//# sourceMappingURL=index.js.map