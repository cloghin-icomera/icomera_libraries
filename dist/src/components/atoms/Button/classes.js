"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassName = void 0;

var getClassName = function getClassName(active, rounded, disabled, href, onClick) {
  var classes = [];

  if (active) {
    classes.push('active');
  }

  if (rounded) {
    classes.push('rounded');
  }

  if (disabled || !href && !onClick) {
    classes.push('disabled');
  }

  return classes.join(' ');
};

exports.getClassName = getClassName;

//# sourceMappingURL=classes.js.map