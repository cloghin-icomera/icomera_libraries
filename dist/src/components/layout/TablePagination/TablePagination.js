"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _atoms = require("../../atoms");

var _outline = require("../../../icons/icomera/outline");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TablePagination = function TablePagination(_ref) {
  var count = _ref.count,
      page = _ref.page,
      _ref$rowsPerPage = _ref.rowsPerPage,
      rowsPerPage = _ref$rowsPerPage === void 0 ? 10 : _ref$rowsPerPage,
      _ref$rowsPerPageOptio = _ref.rowsPerPageOptions,
      rowsPerPageOptions = _ref$rowsPerPageOptio === void 0 ? [5, 10, 25] : _ref$rowsPerPageOptio,
      onChangePage = _ref.onChangePage,
      _ref$onChangeRowsPerP = _ref.onChangeRowsPerPage,
      onChangeRowsPerPage = _ref$onChangeRowsPerP === void 0 ? undefined : _ref$onChangeRowsPerP;
  return /*#__PURE__*/_react.default.createElement(_atoms.Flex, null, /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
    sx: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_atoms.Label, {
    htmlFor: "perPage",
    mr: 2
  }, "Rows per page:"), /*#__PURE__*/_react.default.createElement(_atoms.Select, {
    value: rowsPerPage,
    id: "perPage",
    onChange: onChangeRowsPerPage
  }, rowsPerPageOptions.map(function (value) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: value
    }, value);
  }))), /*#__PURE__*/_react.default.createElement(_atoms.Flex, {
    ml: 6,
    sx: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_atoms.Text, {
    mr: 3
  }, page * rowsPerPage + 1, "\u2013", (page + 1) * rowsPerPage > count ? count : rowsPerPage * (page + 1), "\xA0of ", count), count / rowsPerPage >= 10 && /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_outline.ArrowStart, null),
    onClick: function onClick() {
      return onChangePage(0);
    },
    disabled: page === 0,
    hoverIndicator: true
  }), /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_outline.ArrowLeft, null),
    onClick: function onClick() {
      return onChangePage(page - 1);
    },
    disabled: page === 0,
    hoverIndicator: true
  }), /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_outline.ArrowRight, null),
    onClick: function onClick() {
      return onChangePage(page + 1);
    },
    disabled: (page + 1) * rowsPerPage >= count,
    hoverIndicator: true
  }), count / rowsPerPage >= 10 && /*#__PURE__*/_react.default.createElement(_atoms.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_outline.ArrowEnd, null),
    onClick: function onClick() {
      return onChangePage(Math.floor(count / rowsPerPage - 1));
    },
    disabled: (page + 1) * rowsPerPage >= count,
    hoverIndicator: true
  })));
};

TablePagination.propTypes = {
  count: _propTypes.default.number.isRequired,
  page: _propTypes.default.number.isRequired,
  rowsPerPage: _propTypes.default.number,
  rowsPerPageOptions: _propTypes.default.arrayOf(_propTypes.default.number),
  onChangePage: _propTypes.default.func.isRequired,
  onChangeRowsPerPage: _propTypes.default.func
};
var _default = TablePagination;
exports.default = _default;

//# sourceMappingURL=TablePagination.js.map