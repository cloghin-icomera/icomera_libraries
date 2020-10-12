"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = require("@theme-ui/color");

var alerts = {
  primary: {
    color: 'background',
    bg: 'brand',
    fontSize: 1
  },
  secondary: {
    color: 'background',
    bg: 'secondary'
  },
  muted: {
    color: 'text',
    bg: 'muted'
  },
  error: {
    color: 'background',
    bg: 'error',
    fontSize: 1
  },
  error_outline: {
    fontSize: 1,
    color: 'error',
    bg: 'background',
    borderColor: 'error',
    borderWidth: 'thin',
    borderStyle: 'solid'
  }
};
var colors = {
  primary: '#009de9',
  brand: '#009de9',
  //secondary: '#13568f',
  secondary: (0, _color.darken)('#009de9', 0.15)(),
  muted: (0, _color.lighten)('#191919', 0.25)(),
  disabled: (0, _color.lighten)('#191919', 0.5)(),
  text: '#191919',
  background: '#f2f2ff',
  card: (0, _color.lighten)('#f2f2ff', 0.15)(),
  border: '#dfdfe6',
  error: '#e10019',
  warning: '#ffbf00',
  success: '#19d400',
  modes: {
    dark: {
      //secondary: '#9cd4fc',
      secondary: (0, _color.lighten)('#009de9', 0.15)(),
      muted: (0, _color.darken)('#fbfbfb', 0.25)(),
      disabled: (0, _color.darken)('#fbfbfb', 0.5)(),
      text: '#fbfbfb',
      background: '#0C0F21',
      card: (0, _color.lighten)('#0C0F21', 0.1)(),
      border: '#18345f'
    }
  }
};
var layout = {
  container: {},
  sidebar: {
    bg: 'card',
    flexBasis: 'sidebar',
    flexGrow: '0',
    flexShrink: '0',
    height: '100%'
  }
};
var links = {
  nav: {
    px: 2,
    py: 1,
    color: 'text'
  },
  sidebar: {
    display: 'block',
    color: 'muted',
    stroke: 'muted',
    strokeWidth: '1px',
    fill: 'muted',
    bg: 'card',
    px: 4,
    py: 3,
    borderLeftWidth: 'heavy',
    borderLeftStyle: 'solid',
    borderLeftColor: 'transparent',
    transition: 'all .25s ease-in-out',
    ':hover': {
      bg: 'background',
      color: 'text',
      stroke: 'text',
      fill: 'text'
    },
    '&.active': {
      bg: 'background',
      borderLeftWidth: 'heavy',
      borderLeftColor: 'brand',
      color: 'text',
      stroke: 'text',
      fill: 'text'
    }
  }
};
var buttons = {
  default: {
    bg: 'background',
    color: 'muted',
    fill: 'muted',
    stroke: 'muted',
    fontWeight: 'bold',
    fontFamily: 'body',
    borderRadius: 'small',
    transition: 'all .25s ease-in-out',
    boxShadow: '0 0 0 1px inset transparent',
    cursor: 'pointer',
    '&:not(.active):hover': {
      color: 'text',
      fill: 'text',
      stroke: 'text',
      boxShadow: '0 0 0 1px inset'
    },
    '&.active': {
      bg: 'muted',
      color: 'background',
      fill: 'background',
      stroke: 'background',
      borderColor: 'muted'
    },
    '&.disabled': {
      color: 'disabled',
      fill: 'disabled',
      stroke: 'disabled',
      pointerEvents: 'none'
    },
    '&.rounded': {
      borderRadius: 'rounded'
    }
  },
  primary: {
    bg: 'brand',
    color: 'card',
    fill: 'card',
    stroke: 'card',
    fontWeight: 'bold',
    fontFamily: 'body',
    borderRadius: 'small',
    transition: 'all .25s ease-in-out',
    cursor: 'pointer',
    '&.rounded': {
      borderRadius: 'rounded'
    }
  },
  action: {
    bg: 'background',
    color: 'muted',
    fill: 'muted',
    stroke: 'muted',
    fontWeight: 'bold',
    fontFamily: 'body',
    borderRadius: 'small',
    transition: 'all .25s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      bg: 'muted',
      color: 'card',
      fill: 'card',
      stroke: 'card'
    }
  },
  icon: {
    bg: 'transparent',
    color: 'muted',
    fill: 'muted',
    stroke: 'muted',
    fontWeight: 'bold',
    fontFamily: 'body',
    borderRadius: 'small',
    borderColor: 'border',
    transition: 'all .25s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      color: 'text',
      fill: 'text',
      stroke: 'text'
    }
  },
  outlined: {
    color: 'muted',
    fill: 'muted',
    stroke: 'muted',
    bg: 'transparent',
    boxShadow: '0 0 0 1px inset ',
    boxShadowColor: 'muted',
    transition: 'all .25s ease-in-out',
    borderRadius: 'small',
    fontWeight: 'bold',
    fontFamily: 'body',
    cursor: 'pointer',
    ':hover': {
      boxShadow: '0 0 0 2px inset',
      color: 'text',
      fill: 'text',
      stroke: 'text'
    },
    '&.rounded': {
      borderRadius: 'rounded'
    }
  },
  close: {}
};
var _default = {
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 72],
  sizes: {
    container: '75%',
    sidebar: '256px'
  },
  fonts: {
    body: '"Lato", system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  text: {
    default: {
      color: 'text'
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    },
    heading: {
      color: 'text',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: colors,
  buttons: buttons,
  icons: {
    primary: {
      fill: 'none',
      stroke: 'brand',
      strokeWidth: '2',
      strokeLinecap: 'round'
    },
    light: {
      fill: 'none',
      stroke: 'card',
      strokeWidth: '2',
      strokeLinecap: 'round'
    },
    error: {
      fill: 'error'
    }
  },
  radii: {
    small: '4px',
    medium: '8px',
    rounded: '99999px'
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 'medium',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      backgroundColor: 'card'
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'border'
    }
  },
  forms: {
    label: {
      color: 'brand',
      fontWeight: 'bold'
    },
    checkbox: {
      color: 'brand'
    },
    radio: {
      color: 'brand'
    },
    input: {
      borderColor: 'border'
    },
    select: {
      borderColor: 'border'
    },
    slider: {
      color: 'brand'
    },
    textarea: {
      backgroundColor: 'card',
      borderColor: 'border'
    }
  },
  borders: {},
  borderWidths: {
    thin: '1px',
    heavy: '4px'
  },
  borderStyles: {
    solid: 'solid'
  },
  links: links,
  alerts: alerts,
  messages: {
    color: 'text',
    bg: 'card'
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'brand'
    },
    outline: {
      color: 'brand',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    },
    circle: {
      borderRadius: 99999
    }
  },
  layout: layout,
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'brand',
      fontWeigth: 'body'
    },
    img: {
      maxWidth: '100%'
    },
    hr: {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'border'
    }
  }
};
exports.default = _default;

//# sourceMappingURL=icomera.js.map