exports.id = 1162;
exports.ids = [1162];
exports.modules = {

/***/ 1162:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_theme; }
});

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8604);
;// CONCATENATED MODULE: ./src/theme/themeColors.ts
const grey = {
  900: '#2B3445',
  // Main Text
  800: '#373F50',
  // Paragraph
  700: '#4B566B',
  600: '#7D879C',
  // Low Priority form Title/Text
  500: '#AEB4BE',
  400: '#DAE1E7',
  // Border
  300: '#E3E9EF',
  200: '#F3F5F9',
  // Line Stroke
  100: '#F6F9FC'
};
const primary = {
  100: '#FCE9EC',
  200: '#F8C7CF',
  300: '#F07D90',
  400: '#EC6178',
  500: '#D23F57',
  600: '#E63E58',
  700: '#E3364E',
  800: '#DF2E44',
  900: '#D91F33'
};
const secondary = {
  100: '#e8e8ee',
  200: '#b9bacb',
  300: '#8a8ca8',
  400: '#5b5d85',
  500: '#141850',
  600: '#0F3460',
  700: '#101340',
  800: '#0e1138',
  900: '#0c0e30',
  main: '#0F3460',
  dark: '#0c0e30'
};
const error = {
  100: '#FFEAEA',
  200: '#FFCBCB',
  300: '#FFA9A9',
  400: '#FF6D6D',
  500: '#FF5353',
  600: '#FF4C4C',
  700: '#FF4242',
  800: '#FF3939',
  900: '#FF2929',
  main: '#E94560'
};
const success = {
  100: '#E7F9ED',
  200: '#C2F1D1',
  300: '#99E8B3',
  400: '#52D77E',
  500: '#33D067',
  600: '#2ECB5F',
  700: '#27C454',
  800: '#20BE4A',
  900: '#0b7724',
  main: 'rgb(51, 208, 103)'
};
const warning = {
  main: '#FFCD4E',
  contrastText: '#FFFFFF'
};
const loyalty = {
  primary: '#0098CE'
};
;// CONCATENATED MODULE: ./src/theme/theme.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const fontSize = 14; // const fontFamily = [
//   'Open Sans',
//   'Roboto',
//   '-apple-system',
//   'BlinkMacSystemFont',
//   'Segoe UI',
//   'Oxygen',
//   'Ubuntu',
//   'Cantarell',
//   'Fira Sans',
//   'Droid Sans',
//   'Helvetica Neue',
//   'sans-serif',
// ].join(',')

const customTheme = (0,styles_.createTheme)({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
}); // Create a theme instance.

const bazarTheme = (0,styles_.createTheme)({
  palette: {
    primary: {
      main: loyalty.primary
    },
    secondary: secondary,
    error: error,
    warning: warning,
    success: success,
    text: {
      primary: grey[900],
      secondary: grey[800],
      disabled: grey[400]
    },
    divider: grey[200],
    grey: _objectSpread({}, grey),
    background: {
      default: grey[100]
    }
  },
  typography: {
    fontSize,
    //fontFamily,
    htmlFontSize: 16,
    body1: {
      fontSize
    },
    body2: {
      fontSize
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none'
        },
        p: {
          lineHeight: 1.75
        },
        a: {
          textDecoration: 'none',
          color: 'inherit'
        },
        button: {
          //fontFamily,
          fontSize
        },
        '.MuiRating-sizeSmall': {
          fontSize: '20px'
        },
        '#nprogress .bar': {
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px !important',
          borderRadius: '0px 300px 300px 0px !important',
          zIndex: 1031,
          background: `${primary[500]} !important`,
          overflow: 'hidden'
        },
        '#nprogress .peg': {
          boxShadow: `0 0 10px ${primary[500]}, 0 0 5px ${primary[500]} !important`
        }
      }
    },
    MuiPagination: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingBottom: 8
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: 'capitalize',
          minWidth: 0,
          minHeight: 0
        }
      },
      defaultProps: {
        color: 'inherit'
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [customTheme.breakpoints.up('sm')]: {
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 8
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: grey[600]
        }
      }
    }
  }
});

const theme = _objectSpread(_objectSpread({}, customTheme), bazarTheme);

theme.shadows[1] = '0px 1px 3px rgba(3, 0, 71, 0.09)';
theme.shadows[2] = '0px 4px 16px rgba(43, 52, 69, 0.1)';
theme.shadows[3] = '0px 8px 45px rgba(3, 0, 71, 0.09)';
theme.shadows[4] = '0px 0px 28px rgba(3, 0, 71, 0.01)';
/* harmony default export */ var theme_theme = (theme);

/***/ })

};
;