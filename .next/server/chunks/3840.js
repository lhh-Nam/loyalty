exports.id = 3840;
exports.ids = [3840];
exports.modules = {

/***/ 1456:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8248);
/* harmony import */ var _AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1535);






const NavbarLayout = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppLayout__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    navbar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Container, {
      sx: {
        my: '2rem'
      },
      children: children
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (NavbarLayout);

/***/ }),

/***/ 3317:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _component_product_cards_ProductCard1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5935);
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(479);
/* harmony import */ var _data_product_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3108);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ProductCard1List = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
      container: true,
      spacing: 3,
      children: _data_product_database__WEBPACK_IMPORTED_MODULE_4__/* .default.slice */ .Z.slice(95, 104).map((item, ind) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
        item: true,
        lg: 4,
        sm: 6,
        xs: 12,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_product_cards_ProductCard1__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread({}, item))
      }, ind))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 4,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
        color: "grey.600",
        children: "Showing 1-9 of 1.3k Products"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Pagination, {
        count: 10,
        variant: "outlined",
        color: "primary"
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ProductCard1List);

/***/ }),

/***/ 7026:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9673);
/* harmony import */ var _component_accordion_AccordionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2953);
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94);
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(479);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9137);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);










const ProductFilterCard = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Card, {
    sx: {
      p: '18px 27px',
      overflow: 'auto'
    },
    elevation: 1,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__.H6, {
      mb: 1.25,
      children: "Categories"
    }), categroyList.map(item => item.subCategories ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      expanded: true,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_accordion_AccordionHeader__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        px: 0,
        py: 0.75,
        color: "grey.600",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Span */ .Dr, {
          sx: {
            cursor: 'pointer',
            mr: '9px'
          },
          children: item.title
        })
      }), item.subCategories.map(name => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Paragraph */ .nv, {
        fontSize: "14px",
        color: "grey.600",
        pl: "22px",
        py: 0.75,
        sx: {
          cursor: 'pointer'
        },
        children: name
      }, name))]
    }, item.title) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Paragraph */ .nv, {
      className: "cursor-pointer",
      fontSize: "14px",
      color: "grey.600",
      py: 0.75,
      children: item.title
    }, item.title)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {
      sx: {
        mt: '18px',
        mb: '24px'
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__.H6, {
      mb: 2,
      children: "Price Range"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      justifyContent: "space-between",
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {
        placeholder: "0",
        type: "number",
        size: "small",
        fullWidth: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__.H5, {
        color: "grey.600",
        px: 1,
        children: "-"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {
        placeholder: "250",
        type: "number",
        size: "small",
        fullWidth: true
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {
      sx: {
        my: '1.5rem'
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__.H6, {
      mb: 2,
      children: "Brands"
    }), brandList.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.FormControlLabel, {
      control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
        size: "small",
        color: "secondary"
      }),
      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Span */ .Dr, {
        color: "inherit",
        children: item
      }),
      sx: {
        display: 'flex'
      }
    }, item)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {
      sx: {
        my: '1.5rem'
      }
    }), otherOptions.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.FormControlLabel, {
      control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
        size: "small",
        color: "secondary"
      }),
      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Span */ .Dr, {
        color: "inherit",
        children: item
      }),
      sx: {
        display: 'flex'
      }
    }, item)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {
      sx: {
        my: '1.5rem'
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__.H6, {
      mb: 2,
      children: "Ratings"
    }), [5, 4, 3, 2, 1].map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.FormControlLabel, {
      control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
        size: "small",
        color: "secondary"
      }),
      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Rating, {
        size: "small",
        value: item,
        color: "warn",
        readOnly: true
      }),
      sx: {
        display: 'flex'
      }
    }, item)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {
      sx: {
        my: '1.5rem'
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__.H6, {
      mb: 2,
      children: "Colors"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      mb: 2,
      children: colorList.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {
        sx: {
          bgcolor: item,
          height: '25px',
          width: '25px',
          mr: '10px',
          borderRadius: 300,
          cursor: 'pointer'
        }
      }, item))
    })]
  });
};

const categroyList = [{
  title: 'Bath Preparations',
  subCategories: ['Bubble Bath', 'Bath Capsules', 'Others']
}, {
  title: 'Eye Makeup Preparations'
}, {
  title: 'Fragrance'
}, {
  title: 'Hair Preparations'
}];
const brandList = ['Maccs', 'Karts', 'Baars', 'Bukks', 'Luasis'];
const otherOptions = ['On Sale', 'In Stock', 'Featured'];
const colorList = ['#1C1C1C', '#FF7A7A', '#FFC672', '#84FFB5', '#70F6FF', '#6B7AFF'];
/* harmony default export */ __webpack_exports__["Z"] = (ProductFilterCard);

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