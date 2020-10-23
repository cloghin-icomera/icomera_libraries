"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColors = void 0;

var _color = require("@theme-ui/color");

var getHoverColor = function getHoverColor(t, color) {
  if (t.colors.modeID === 'dark') {
    // dark color mode
    return (0, _color.lighten)(color, 0.2);
  } else {
    // default color mode
    return (0, _color.darken)(color, 0.2);
  }
};

var getColors = function getColors(variant, color) {
  if (color) {
    switch (variant) {
      case 'icon':
        return {
          fill: color,
          stroke: color,
          '&:not(.active):hover': {
            fill: function fill(t) {
              return getHoverColor(t, color);
            },
            stroke: function stroke(t) {
              return getHoverColor(t, color);
            }
          },
          '&.hover-back:hover': {
            bg: (0, _color.alpha)(color, 0.15)
          }
        };

      case 'action':
        return {
          fill: color,
          stroke: color,
          '&:not(.active):hover': {
            bg: color
          }
        };

      default:
        return;
    }
  } else {
    return;
  }
};

exports.getColors = getColors;

//# sourceMappingURL=colors.js.map