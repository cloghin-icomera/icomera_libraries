"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassName = void 0;

var getClassName = function getClassName(active, rounded, disabled, href, onClick) {
  var className = rounded ? 'rounded' : '';

  if (!href && !onClick) {
    return className + ' disabled';
  }

  className = active ? 'active' : disabled ? 'disabled' : '';
  return className;
};

exports.getClassName = getClassName;

//# sourceMappingURL=classes.js.map