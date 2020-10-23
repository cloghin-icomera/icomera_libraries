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
          px: 2,
          py: 1,
          fontSize: 0
        },
        icon: {
          label: {
            mr: 1,
            ml: -1,
            size: 19
          },
          default: {
            mr: -1,
            ml: -1,
            size: 19
          }
        }
      };

    case 'medium':
      return {
        button: {
          px: 3,
          py: 2
        },
        icon: {
          label: {
            mr: 2,
            ml: -1
          },
          default: {
            mr: -1,
            ml: -1
          }
        }
      };

    case 'large':
      return {
        button: {
          px: 4,
          py: 3,
          fontSize: 3
        },
        icon: {
          label: {
            mr: 2,
            ml: -1,
            size: 28
          },
          default: {
            mr: -1,
            ml: -1,
            size: 28
          }
        }
      };

    default:
      return;
  }
};

exports.getSizes = getSizes;

//# sourceMappingURL=sizes.js.map