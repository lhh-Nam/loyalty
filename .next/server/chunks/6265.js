exports.id = 6265;
exports.ids = [6265];
exports.modules = {

/***/ 8407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _component_sidenav_Sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9665);
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(479);
/* harmony import */ var _hook_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8181);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8604);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1358);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9137);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const StyledBox = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.styled)(_material_ui_system__WEBPACK_IMPORTED_MODULE_7__.Box)(({
  theme
}) => ({
  display: 'flex',
  marginTop: theme.spacing(-2),
  marginBottom: theme.spacing(3),
  '& .headerHold': {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1
  },
  [theme.breakpoints.up('md')]: {
    '& .sidenav': {
      display: 'none'
    }
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    '& .headerHold': {}
  }
}));

const DashboardPageHeader = (_ref) => {
  let {
    title,
    button,
    navigation
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "button", "navigation"]);

  const width = (0,_hook_useWindowSize__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)();
  const isTablet = width < 1025;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBox, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      mt: 2,
      className: "headerHold",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        alignItems: "center",
        children: [props.icon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(props.icon, {
          color: "primary"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__.H2, {
          ml: 1.5,
          my: "0px",
          lineHeight: "1",
          whiteSpace: "pre",
          children: title
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_system__WEBPACK_IMPORTED_MODULE_7__.Box, {
        className: "sidenav",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_sidenav_Sidenav__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          position: "left",
          handle: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default()), {
            fontSize: "small"
          }),
          children: navigation
        })
      }), !isTablet && button]
    }), isTablet && !!button && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_system__WEBPACK_IMPORTED_MODULE_7__.Box, {
      mt: 2,
      children: button
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (DashboardPageHeader);

/***/ }),

/***/ 3289:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": function() { return /* binding */ DashboardNavigationWrapper; },
/* harmony export */   "W": function() { return /* binding */ StyledDashboardNav; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_nav_link_NavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9579);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8604);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const DashboardNavigationWrapper = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Card)(({
  theme
}) => ({
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 64px)',
    boxShadow: 'none',
    overflowY: 'auto'
  }
}));
const StyledDashboardNav = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((_ref) => {
  let {
    children,
    isCurrentPath
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "isCurrentPath"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_nav_link_NavLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread(_objectSpread({}, rest), {}, {
    children: children
  }));
})(({
  theme,
  isCurrentPath
}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderLeft: '4px solid',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  marginBottom: '1.25rem',
  borderColor: isCurrentPath ? theme.palette.primary.main : 'transparent',
  '& .nav-icon': {
    color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600]
  },
  '&:hover': {
    borderColor: theme.palette.primary.main,
    '& .nav-icon': {
      color: theme.palette.primary.main
    }
  }
}));

/***/ }),

/***/ 8181:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(223);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const useWindowSize = () => {
  const {
    0: width,
    1: setWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const windowListener = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(() => {
    if (window) setWidth(window.innerWidth);
  }, 250), []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (window) {
      setWidth(window.innerWidth);
      window.addEventListener('resize', windowListener);
    }

    return () => {
      windowListener.cancel();
      window && window.removeEventListener('resize', windowListener);
    };
  }, []);
  return width;
};

/* harmony default export */ __webpack_exports__["Z"] = (useWindowSize);

/***/ })

};
;