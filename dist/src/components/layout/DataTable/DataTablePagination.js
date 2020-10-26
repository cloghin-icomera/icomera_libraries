"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _atoms = require("../../atoms");

var _outline = require("../../../icons/icomera/outline");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(_ref) {
  var totalPages = _ref.totalPages,
      totalRows = _ref.totalRows,
      perPage = _ref.perPage,
      active = _ref.active,
      setActive = _ref.setActive,
      handlePerPage = _ref.handlePerPage;
  var start = active === 0 ? 1 : active * perPage + 1;
  var end = active === totalPages - 1 ? totalRows : active * perPage + perPage;
  return /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
    sx: {
      ml: 'auto',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
    mr: 2,
    sx: {
      alignItems: 'center'
    }
  }, "Rows per page:", /*#__PURE__*/_react.default.createElement(_atoms.Select, {
    defaultValue: perPage,
    sx: {
      width: 64,
      ml: 2
    },
    onChange: function onChange(e) {
      handlePerPage(parseInt(e.target.value));
    }
  }, /*#__PURE__*/_react.default.createElement("option", null, "5"), /*#__PURE__*/_react.default.createElement("option", null, "10"), /*#__PURE__*/_react.default.createElement("option", null, "20"), /*#__PURE__*/_react.default.createElement("option", null, "50"))), /*#__PURE__*/_react.default.createElement(_atoms.Box, {
    mx: 4,
    color: "muted"
  }, start, "\u2013", end, " of ", totalRows), /*#__PURE__*/_react.default.createElement(_atoms.Box, null, totalPages >= 10 && /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_outline.ArrowStart, null),
    onClick: function onClick() {
      setActive(0);
    }
  }), /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_outline.ArrowLeft, null),
    onClick: function onClick() {
      var index = active - 1 >= 0 ? active - 1 : totalPages - 1;
      setActive(index);
    }
  }), /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_outline.ArrowRight, null),
    onClick: function onClick() {
      var index = active + 1 < totalPages ? active + 1 : 0;
      setActive(index);
    }
  }), totalPages >= 10 && /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_outline.ArrowEnd, null),
    onClick: function onClick() {
      setActive(totalPages - 1);
    }
  })));
};

var _default = Pagination;
exports.default = _default;

//# sourceMappingURL=DataTablePagination.js.map