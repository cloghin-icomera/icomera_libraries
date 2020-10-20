"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _atoms = require("../../atoms");

var _outline = require("../../../icons/icomera/outline");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var pages = _ref.pages,
      active = _ref.active,
      setActive = _ref.setActive;
  return /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
    ml: "auto"
  }, /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_outline.ArrowLeft, null),
    mr: 2,
    onClick: function onClick() {
      var index = active - 1 >= 0 ? active - 1 : pages.length - 1;
      setActive(index);
    }
  }), pages.map(function (page, index) {
    return /*#__PURE__*/_react.default.createElement(_atoms.Button, {
      key: index,
      onClick: function onClick() {
        setActive(index);
      },
      label: index + 1,
      active: index === active,
      mr: 2,
      css: {
        fontWeight: '400',
        minWidth: '40px',
        justifyContent: 'center'
      }
    });
  }), /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_outline.ArrowRight, null),
    onClick: function onClick() {
      var index = active + 1 < pages.length ? active + 1 : 0;
      setActive(index);
    }
  }));
};

exports.default = _default;

//# sourceMappingURL=DataTablePagination.js.map