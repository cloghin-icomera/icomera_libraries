"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSizes = void 0;

var getSizes = function getSizes(size) {
  switch (size) {
    case 'small':
      return {
        button: {
          p: 1
        },
        icon: {
          size: 19
        }
      };

    case 'medium':
      return {
        button: {
          p: 2
        },
        icon: {
          m: 0
        }
      };

    case 'large':
      return {
        button: {
          p: 3
        },
        icon: {
          size: 28
        }
      };

    default:
      return;
  }
};

exports.getSizes = getSizes;

//# sourceMappingURL=sizes.js.map