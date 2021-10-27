exports.id = "src_theme_theme_ts";
exports.ids = ["src_theme_theme_ts"];
exports.modules = {

/***/ "./src/theme/theme.ts":
/*!****************************!*\
  !*** ./src/theme/theme.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themeColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themeColors */ "./src/theme/themeColors.ts");
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

const customTheme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
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

const bazarTheme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    primary: {
      main: _themeColors__WEBPACK_IMPORTED_MODULE_1__.loyalty.primary
    },
    secondary: _themeColors__WEBPACK_IMPORTED_MODULE_1__.secondary,
    error: _themeColors__WEBPACK_IMPORTED_MODULE_1__.error,
    warning: _themeColors__WEBPACK_IMPORTED_MODULE_1__.warning,
    success: _themeColors__WEBPACK_IMPORTED_MODULE_1__.success,
    text: {
      primary: _themeColors__WEBPACK_IMPORTED_MODULE_1__.grey[900],
      secondary: _themeColors__WEBPACK_IMPORTED_MODULE_1__.grey[800],
      disabled: _themeColors__WEBPACK_IMPORTED_MODULE_1__.grey[400]
    },
    divider: _themeColors__WEBPACK_IMPORTED_MODULE_1__.grey[200],
    grey: _objectSpread({}, _themeColors__WEBPACK_IMPORTED_MODULE_1__.grey),
    background: {
      default: _themeColors__WEBPACK_IMPORTED_MODULE_1__.grey[100]
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
          background: `${_themeColors__WEBPACK_IMPORTED_MODULE_1__.primary[500]} !important`,
          overflow: 'hidden'
        },
        '#nprogress .peg': {
          boxShadow: `0 0 10px ${_themeColors__WEBPACK_IMPORTED_MODULE_1__.primary[500]}, 0 0 5px ${_themeColors__WEBPACK_IMPORTED_MODULE_1__.primary[500]} !important`
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
          color: _themeColors__WEBPACK_IMPORTED_MODULE_1__.grey[600]
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
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/theme/themeColors.ts":
/*!**********************************!*\
  !*** ./src/theme/themeColors.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grey": function() { return /* binding */ grey; },
/* harmony export */   "primary": function() { return /* binding */ primary; },
/* harmony export */   "secondary": function() { return /* binding */ secondary; },
/* harmony export */   "error": function() { return /* binding */ error; },
/* harmony export */   "success": function() { return /* binding */ success; },
/* harmony export */   "warning": function() { return /* binding */ warning; },
/* harmony export */   "loyalty": function() { return /* binding */ loyalty; }
/* harmony export */ });
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXphci8uL3NyYy90aGVtZS90aGVtZS50cyIsIndlYnBhY2s6Ly9iYXphci8uL3NyYy90aGVtZS90aGVtZUNvbG9ycy50cyJdLCJuYW1lcyI6WyJmb250U2l6ZSIsImN1c3RvbVRoZW1lIiwiY3JlYXRlVGhlbWUiLCJicmVha3BvaW50cyIsInZhbHVlcyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJiYXphclRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwibG95YWx0eSIsInNlY29uZGFyeSIsImVycm9yIiwid2FybmluZyIsInN1Y2Nlc3MiLCJ0ZXh0IiwiZ3JleSIsImRpc2FibGVkIiwiZGl2aWRlciIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwidHlwb2dyYXBoeSIsImh0bWxGb250U2l6ZSIsImJvZHkxIiwiYm9keTIiLCJjb21wb25lbnRzIiwiTXVpQ3NzQmFzZWxpbmUiLCJzdHlsZU92ZXJyaWRlcyIsInVsIiwibWFyZ2luIiwicGFkZGluZyIsImxpc3RTdHlsZSIsInAiLCJsaW5lSGVpZ2h0IiwiYSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJidXR0b24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ6SW5kZXgiLCJvdmVyZmxvdyIsImJveFNoYWRvdyIsIk11aVBhZ2luYXRpb24iLCJkZWZhdWx0UHJvcHMiLCJNdWlUZXh0RmllbGQiLCJzaXplIiwiTXVpTWVudUl0ZW0iLCJyb290IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJNdWlCdXR0b24iLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiTXVpQ2FyZCIsIk11aUNvbnRhaW5lciIsInVwIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJNdWlEaWFsb2ciLCJwYXBlciIsIk11aVR5cG9ncmFwaHkiLCJ0aGVtZSIsInNoYWRvd3MiLCJkYXJr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UGdCO0FBUXJCLE9BQUssU0FSZ0I7QUFTckIsT0FBSyxTQVRnQjtBQVVyQkwsTUFBSSxFQUFFO0FBVmUsQ0FBaEI7QUFhQSxNQUFNSSxPQUFPLEdBQUc7QUFDckJKLE1BQUksRUFBRSxTQURlO0FBRXJCNkQsY0FBWSxFQUFFO0FBRk8sQ0FBaEI7QUFLQSxNQUFNNUQsT0FBTyxHQUFHO0FBQ3JCRixTQUFPLEVBQUU7QUFEWSxDQUFoQixDIiwiZmlsZSI6InNyY190aGVtZV90aGVtZV90cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHtcclxuICBlcnJvcixcclxuICBncmV5LFxyXG4gIGxveWFsdHksXHJcbiAgcHJpbWFyeSxcclxuICBzZWNvbmRhcnksXHJcbiAgc3VjY2VzcyxcclxuICB3YXJuaW5nLFxyXG59IGZyb20gJy4vdGhlbWVDb2xvcnMnXHJcblxyXG5jb25zdCBmb250U2l6ZSA9IDE0XHJcblxyXG4vLyBjb25zdCBmb250RmFtaWx5ID0gW1xyXG4vLyAgICdPcGVuIFNhbnMnLFxyXG4vLyAgICdSb2JvdG8nLFxyXG4vLyAgICctYXBwbGUtc3lzdGVtJyxcclxuLy8gICAnQmxpbmtNYWNTeXN0ZW1Gb250JyxcclxuLy8gICAnU2Vnb2UgVUknLFxyXG4vLyAgICdPeHlnZW4nLFxyXG4vLyAgICdVYnVudHUnLFxyXG4vLyAgICdDYW50YXJlbGwnLFxyXG4vLyAgICdGaXJhIFNhbnMnLFxyXG4vLyAgICdEcm9pZCBTYW5zJyxcclxuLy8gICAnSGVsdmV0aWNhIE5ldWUnLFxyXG4vLyAgICdzYW5zLXNlcmlmJyxcclxuLy8gXS5qb2luKCcsJylcclxuXHJcbmNvbnN0IGN1c3RvbVRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICB2YWx1ZXM6IHtcclxuICAgICAgeHM6IDAsXHJcbiAgICAgIHNtOiA2MDAsXHJcbiAgICAgIG1kOiA5NjAsXHJcbiAgICAgIGxnOiAxMjgwLFxyXG4gICAgICB4bDogMTkyMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxyXG5jb25zdCBiYXphclRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogbG95YWx0eS5wcmltYXJ5LFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeSxcclxuICAgIGVycm9yLFxyXG4gICAgd2FybmluZyxcclxuICAgIHN1Y2Nlc3MsXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgIHByaW1hcnk6IGdyZXlbOTAwXSxcclxuICAgICAgc2Vjb25kYXJ5OiBncmV5WzgwMF0sXHJcbiAgICAgIGRpc2FibGVkOiBncmV5WzQwMF0sXHJcbiAgICB9LFxyXG4gICAgZGl2aWRlcjogZ3JleVsyMDBdLFxyXG4gICAgZ3JleTogeyAuLi5ncmV5IH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIGRlZmF1bHQ6IGdyZXlbMTAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBmb250U2l6ZSxcclxuICAgIC8vZm9udEZhbWlseSxcclxuICAgIGh0bWxGb250U2l6ZTogMTYsXHJcbiAgICBib2R5MTogeyBmb250U2l6ZSB9LFxyXG4gICAgYm9keTI6IHsgZm9udFNpemUgfSxcclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIE11aUNzc0Jhc2VsaW5lOiB7XHJcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgdWw6IHtcclxuICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHA6IHtcclxuICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNzUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhOiB7XHJcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgLy9mb250RmFtaWx5LFxyXG4gICAgICAgICAgZm9udFNpemUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnLk11aVJhdGluZy1zaXplU21hbGwnOiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyNucHJvZ3Jlc3MgLmJhcic6IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgIGhlaWdodDogJzNweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzBweCAzMDBweCAzMDBweCAwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICB6SW5kZXg6IDEwMzEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgJHtwcmltYXJ5WzUwMF19ICFpbXBvcnRhbnRgLFxyXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyNucHJvZ3Jlc3MgLnBlZyc6IHtcclxuICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAxMHB4ICR7cHJpbWFyeVs1MDBdfSwgMCAwIDVweCAke3ByaW1hcnlbNTAwXX0gIWltcG9ydGFudGAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlQYWdpbmF0aW9uOiB7XHJcbiAgICAgIGRlZmF1bHRQcm9wczoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVGV4dEZpZWxkOiB7XHJcbiAgICAgIGRlZmF1bHRQcm9wczoge1xyXG4gICAgICAgIHNpemU6ICdzbWFsbCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpTWVudUl0ZW06IHtcclxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogOCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgICAgICAgIG1pbldpZHRoOiAwLFxyXG4gICAgICAgICAgbWluSGVpZ2h0OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRQcm9wczoge1xyXG4gICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpQ2FyZDoge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlDb250YWluZXI6IHtcclxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBbY3VzdG9tVGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMXJlbScsXHJcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFyZW0nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aURpYWxvZzoge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlUeXBvZ3JhcGh5OiB7XHJcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgYm9keTE6IHtcclxuICAgICAgICAgIGNvbG9yOiBncmV5WzYwMF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IHRoZW1lID0geyAuLi5jdXN0b21UaGVtZSwgLi4uYmF6YXJUaGVtZSB9XHJcblxyXG50aGVtZS5zaGFkb3dzWzFdID0gJzBweCAxcHggM3B4IHJnYmEoMywgMCwgNzEsIDAuMDkpJ1xyXG50aGVtZS5zaGFkb3dzWzJdID0gJzBweCA0cHggMTZweCByZ2JhKDQzLCA1MiwgNjksIDAuMSknXHJcbnRoZW1lLnNoYWRvd3NbM10gPSAnMHB4IDhweCA0NXB4IHJnYmEoMywgMCwgNzEsIDAuMDkpJ1xyXG50aGVtZS5zaGFkb3dzWzRdID0gJzBweCAwcHggMjhweCByZ2JhKDMsIDAsIDcxLCAwLjAxKSdcclxuXHJcbmV4cG9ydCB0eXBlIE11aVRoZW1lUHJvcHMgPSBUaGVtZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcclxuIiwiZXhwb3J0IGNvbnN0IGdyZXkgPSB7XHJcbiAgOTAwOiAnIzJCMzQ0NScsIC8vIE1haW4gVGV4dFxyXG4gIDgwMDogJyMzNzNGNTAnLCAvLyBQYXJhZ3JhcGhcclxuICA3MDA6ICcjNEI1NjZCJyxcclxuICA2MDA6ICcjN0Q4NzlDJywgLy8gTG93IFByaW9yaXR5IGZvcm0gVGl0bGUvVGV4dFxyXG4gIDUwMDogJyNBRUI0QkUnLFxyXG4gIDQwMDogJyNEQUUxRTcnLCAvLyBCb3JkZXJcclxuICAzMDA6ICcjRTNFOUVGJyxcclxuICAyMDA6ICcjRjNGNUY5JywgLy8gTGluZSBTdHJva2VcclxuICAxMDA6ICcjRjZGOUZDJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaW1hcnkgPSB7XHJcbiAgMTAwOiAnI0ZDRTlFQycsXHJcbiAgMjAwOiAnI0Y4QzdDRicsXHJcbiAgMzAwOiAnI0YwN0Q5MCcsXHJcbiAgNDAwOiAnI0VDNjE3OCcsXHJcbiAgNTAwOiAnI0QyM0Y1NycsXHJcbiAgNjAwOiAnI0U2M0U1OCcsXHJcbiAgNzAwOiAnI0UzMzY0RScsXHJcbiAgODAwOiAnI0RGMkU0NCcsXHJcbiAgOTAwOiAnI0Q5MUYzMycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZWNvbmRhcnkgPSB7XHJcbiAgMTAwOiAnI2U4ZThlZScsXHJcbiAgMjAwOiAnI2I5YmFjYicsXHJcbiAgMzAwOiAnIzhhOGNhOCcsXHJcbiAgNDAwOiAnIzViNWQ4NScsXHJcbiAgNTAwOiAnIzE0MTg1MCcsXHJcbiAgNjAwOiAnIzBGMzQ2MCcsXHJcbiAgNzAwOiAnIzEwMTM0MCcsXHJcbiAgODAwOiAnIzBlMTEzOCcsXHJcbiAgOTAwOiAnIzBjMGUzMCcsXHJcbiAgbWFpbjogJyMwRjM0NjAnLFxyXG4gIGRhcms6ICcjMGMwZTMwJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9yID0ge1xyXG4gIDEwMDogJyNGRkVBRUEnLFxyXG4gIDIwMDogJyNGRkNCQ0InLFxyXG4gIDMwMDogJyNGRkE5QTknLFxyXG4gIDQwMDogJyNGRjZENkQnLFxyXG4gIDUwMDogJyNGRjUzNTMnLFxyXG4gIDYwMDogJyNGRjRDNEMnLFxyXG4gIDcwMDogJyNGRjQyNDInLFxyXG4gIDgwMDogJyNGRjM5MzknLFxyXG4gIDkwMDogJyNGRjI5MjknLFxyXG4gIG1haW46ICcjRTk0NTYwJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3MgPSB7XHJcbiAgMTAwOiAnI0U3RjlFRCcsXHJcbiAgMjAwOiAnI0MyRjFEMScsXHJcbiAgMzAwOiAnIzk5RThCMycsXHJcbiAgNDAwOiAnIzUyRDc3RScsXHJcbiAgNTAwOiAnIzMzRDA2NycsXHJcbiAgNjAwOiAnIzJFQ0I1RicsXHJcbiAgNzAwOiAnIzI3QzQ1NCcsXHJcbiAgODAwOiAnIzIwQkU0QScsXHJcbiAgOTAwOiAnIzBiNzcyNCcsXHJcbiAgbWFpbjogJ3JnYig1MSwgMjA4LCAxMDMpJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSB7XHJcbiAgbWFpbjogJyNGRkNENEUnLFxyXG4gIGNvbnRyYXN0VGV4dDogJyNGRkZGRkYnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG95YWx0eSA9IHtcclxuICBwcmltYXJ5OiAnIzAwOThDRScsXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==