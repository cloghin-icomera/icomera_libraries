"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassName = void 0;

var getClassName = function getClassName(active, rounded, disabled, href, onClick, hoverIndicator) {
  var className = rounded ? 'rounded ' : '';
  className += hoverIndicator ? 'hover-back' : '';

  if (!href && !onClick) {
    return className + 'disabled ';
  }

  className = active ? 'active ' : disabled ? 'disabled ' : '';
  return className;
};

exports.getClassName = getClassName;

//# sourceMappingURL=classes.js.map