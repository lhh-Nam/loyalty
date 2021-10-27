exports.id = 1535;
exports.ids = [1535];
exports.modules = {

/***/ 1810:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


 // styled component

const Footer = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
      bgcolor: "#015F92",
      display: "block",
      height: 50,
      width: "100%"
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Footer);

/***/ }),

/***/ 1535:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var _component_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9681);
/* harmony import */ var _component_sticky_Sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1325);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);








const AppLayout = ({
  children,
  navbar //title = "React Next.js Ecommerce Template",

}) => {
  const {
    0: isFixed,
    1: setIsFixed
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const toggleIsFixed = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(fixed => {
    setIsFixed(fixed);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Vay online"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_sticky_Sticky__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      fixedOn: 0,
      onSticky: toggleIsFixed,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_header_Header__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        isFixed: isFixed
      })
    }), navbar && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "section-after-sticky",
      children: navbar
    }), !navbar ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "section-after-sticky",
      children: children
    }) : children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_footer_Footer__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {})]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (AppLayout);

/***/ })

};
;