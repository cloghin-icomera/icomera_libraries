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
  brand_hover: '#0077b3',
  secondary: (0, _color.darken)('#009de9', 0.2)(),
  muted: '#6e7c91',
  disabled: '#a8b0bd',
  text: '#0C090A',
  // text colour on light backgrounds
  background: '#f2f2ff',
  card: '#ffffff',
  border: '#dfdfe6',
  error: '#db001a',
  warning: '#ffbf00',
  success: '#19d400',
  modeID: 'default',
  modes: {
    dark: {
      secondary: (0, _color.lighten)('#009de9', 0.2)(),
      brand_hover: '#4dc4ff',
      muted: '#a8b0bd',
      text: '#fcfcfc',
      background: '#0C0F21',
      card: '#131836',
      border: '#18345f',
      error: '#FC001D',
      disabled: '#6e7c91',
      modeID: 'dark'
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
    color: 'text',
    fill: 'text',
    stroke: 'text',
    fontSize: 2,
    fontWeight: 'bold',
    fontFamily: 'body',
    borderRadius: 'small',
    transition: 'all .25s ease-in-out',
    cursor: 'pointer',
    '&:not(.active):hover': {
      bg: (0, _color.alpha)('text', 0.15)
    },
    '&.active': {
      bg: 'muted',
      color: 'card',
      fill: 'card',
      stroke: 'card'
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
    fontSize: 2,
    fontWeight: 'bold',
    fontFamily: 'body',
    borderRadius: 'small',
    transition: 'all .25s ease-in-out',
    cursor: 'pointer',
    '&:not(.active):hover': {
      bg: 'brand_hover'
    },
    '&.active': {
      bg: 'text'
    },
    '&.disabled': {
      bg: 'disabled',
      pointerEvents: 'none'
    },
    '&.rounded': {
      borderRadius: 'rounded'
    }
  },
  icon: {
    bg: 'transparent',
    color: 'muted',
    fill: 'muted',
    stroke: 'muted',
    fontSize: 2,
    fontWeight: 'bold',
    fontFamily: 'body',
    borderRadius: 'small',
    transition: 'all .25s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      fill: 'text',
      stroke: 'text'
    },
    '&.disabled': {
      fill: 'disabled',
      stroke: 'disabled',
      pointerEvents: 'none'
    },
    '&.rounded': {
      borderRadius: 'rounded'
    },
    '&.hover-back:hover': {
      bg: (0, _color.alpha)('text', 0.15)
    },
    '&.active': {
      fill: 'card',
      stroke: 'card',
      bg: 'text'
    }
  },
  action: {
    bg: 'card',
    color: 'muted',
    fill: 'muted',
    stroke: 'muted',
    fontSize: 2,
    fontWeight: 'bold',
    fontFamily: 'body',
    borderRadius: 'small',
    transition: 'all .25s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      bg: 'muted',
      fill: 'card',
      stroke: 'card'
    },
    '&.disabled': {
      fill: 'disabled',
      stroke: 'disabled',
      pointerEvents: 'none'
    },
    '&.rounded': {
      borderRadius: 'rounded'
    }
  },
  outlined: {
    color: 'brand',
    fill: 'brand',
    stroke: 'brand',
    bg: 'transparent',
    boxShadow: '0 0 0 1px inset ',
    boxShadowColor: 'muted',
    transition: 'all .25s ease-in-out',
    borderRadius: 'small',
    fontSize: 2,
    fontWeight: 'bold',
    fontFamily: 'body',
    cursor: 'pointer',
    '&:not(.active):hover': {
      color: 'brand_hover',
      fill: 'brand_hover',
      stroke: 'brand_hover',
      bg: (0, _color.alpha)('brand', 0.15),
      boxShadow: '0 0 0 2px inset'
    },
    '&.active': {
      boxShadow: 'none',
      color: 'card',
      fill: 'card',
      stroke: 'card',
      bg: 'text'
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
  close: {}
};
var tables = {
  table_body: {},
  body: {
    bg: 'transparent',
    borderBottomColor: (0, _color.alpha)('border', 0.5),
    borderBottomWidth: 'thin',
    borderBottomStyle: 'solid',
    p: 3
  },
  header: {
    bg: 'transparent',
    borderBottomColor: 'border',
    borderBottomWidth: 'thin',
    borderBottomStyle: 'solid',
    p: 3
  },
  headerTitle: {
    fontSize: 0,
    fontFamily: 'heading',
    textTransform: 'uppercase',
    color: 'muted',
    letterSpacing: 1,
    fontWeight: 'bold'
  },
  footer: {},
  row: {
    '&.selected': {
      bg: (0, _color.alpha)('border', 0.25),
      boxShadow: "4px 0 ".concat(colors.brand, " inset")
    }
  }
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
  fontSizes: [13, 14, 15, 16, 20, 24, 28, 32, 48, 64],
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
    },
    tableHeader: {
      fontSize: 0,
      fontFamily: 'heading',
      textTransform: 'uppercase',
      color: 'muted',
      letterSpacing: 1,
      fontWeight: 'bold'
    }
  },
  lineHeights: {
    compact: 1.25,
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
      color: 'text'
    },
    checkbox: {
      color: (0, _color.alpha)('muted', 0.5)
    },
    radio: {
      color: 'muted'
    },
    input: {
      p: 2,
      fontFamily: 'body',
      fontSize: 2,
      lineHeight: 'inherit',
      borderColor: 'border',
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderRadius: 4,
      color: 'inherit',
      bg: 'transparent',
      outline: 'none',
      '&.small': {
        p: 1,
        fontSize: 0
      },
      '&:focus': {
        borderColor: 'text'
      }
    },
    select: {
      borderColor: 'border',
      minWidth: 64
    },
    slider: {
      color: 'brand'
    },
    textarea: {
      backgroundColor: 'card',
      borderColor: 'border'
    },
    switch: {
      width: '40px',
      height: '24px',
      borderRadius: 'rounded',
      bg: 'border',
      color: 'muted',
      p: 1,
      transition: 'all .35s ease-in-out',
      '.handle': {
        width: '16px',
        height: '16px',
        borderRadius: 'rounded',
        bg: 'muted',
        ml: 0,
        transition: 'all .25s ease-in-out'
      }
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
  tables: tables,
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
      fontWeight: 'body',
      fontSize: 3
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 6
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3
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