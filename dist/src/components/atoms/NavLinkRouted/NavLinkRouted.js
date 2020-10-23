"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Flex = _interopRequireDefault(require("../Flex/Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = _react.default.forwardRef(function (props, ref) {
  var icon = null;
  var match = (0, _reactRouterDom.useRouteMatch)({
    path: props.to,
    exact: props.exact ? true : false
  });

  if (props.icon) {
    icon = _react.default.cloneElement(props.icon, {
      mr: 2
    });
  }

  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: props.to,
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(_Flex.default, _extends({
    ref: ref,
    variant: props.variant || 'nav'
  }, props, {
    __themeKey: "links",
    className: match ? "active" : ""
  }), icon, props.label));
});

exports.default = _default;

//# sourceMappingURL=NavLinkRouted.js.map