"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColors = void 0;

var _color2 = require("@theme-ui/color");

var getHoverColor = function getHoverColor(t, color) {
  if (t.colors.modeID === 'dark') {
    // dark color mode
    return (0, _color2.lighten)(color, 0.2);
  } else {
    // default color mode
    return (0, _color2.darken)(color, 0.2);
  }
};

var getColors = function getColors(variant, _color) {
  if (_color) {
    switch (variant) {
      case 'default':
        return {
          color: _color,
          fill: _color,
          stroke: _color,
          '&:not(.active):hover': {
            bg: (0, _color2.alpha)(_color, 0.1),
            color: function color(t) {
              return getHoverColor(t, _color);
            },
            fill: function fill(t) {
              return getHoverColor(t, _color);
            },
            stroke: function stroke(t) {
              return getHoverColor(t, _color);
            }
          }
        };

      case 'primary':
        return {
          bg: _color,
          '&:not(.active):hover': {
            bg: function bg(t) {
              return getHoverColor(t, _color);
            }
          }
        };

      case 'outlined':
        return {
          color: _color,
          fill: _color,
          stroke: _color,
          '&:not(.active):hover': {
            bg: (0, _color2.alpha)(_color, 0.1),
            color: function color(t) {
              return getHoverColor(t, _color);
            },
            fill: function fill(t) {
              return getHoverColor(t, _color);
            },
            stroke: function stroke(t) {
              return getHoverColor(t, _color);
            }
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