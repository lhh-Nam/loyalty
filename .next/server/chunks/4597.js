exports.id = 4597;
exports.ids = [4597];
exports.modules = {

/***/ 558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4047);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);


const TableRow = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Card)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  borderRadius: '10px',
  cursor: 'pointer',
  '& > *': {
    flex: '1 1 0'
  },
  '& .pre': {
    whiteSpace: 'pre'
  }
});
/* harmony default export */ __webpack_exports__["Z"] = (TableRow);

/***/ }),

/***/ 4597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_TableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(558);
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(479);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_East__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8301);
/* harmony import */ var _material_ui_icons_East__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_East__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9137);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3879);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);









 // component props interface

const OrderRow = ({
  item
}) => {
  const getColor = status => {
    switch (status) {
      case 'Pending':
        return 'secondary';

      case 'Processing':
        return 'secondary';

      case 'Delivered':
        return 'success';

      case 'Cancelled':
        return 'error';

      default:
        return '';
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__.default, {
    href: item.href,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_TableRow__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        sx: {
          my: '1rem',
          padding: '6px 18px'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_2__.H5, {
          m: 0.75,
          textAlign: "left",
          children: item.orderNo
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_system__WEBPACK_IMPORTED_MODULE_5__.Box, {
          m: 0.75,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Chip, {
            size: "small",
            label: item.status,
            sx: {
              p: '0.25rem 0.5rem',
              fontSize: 12,
              color: !!getColor(item.status) ? `${getColor(item.status)}.900` : 'inherit',
              backgroundColor: !!getColor(item.status) ? `${getColor(item.status)}.100` : 'none'
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          className: "pre",
          m: 0.75,
          textAlign: "left",
          children: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(item.purchaseDate), 'MMM dd, yyyy')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          m: 0.75,
          textAlign: "left",
          children: ["$", item.price.toFixed(2)]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          textAlign: "center",
          color: "grey.600",
          sx: {
            flex: '0 0 0 !important',
            display: {
              xs: 'none',
              md: 'block'
            }
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_East__WEBPACK_IMPORTED_MODULE_4___default()), {
              fontSize: "small",
              color: "inherit"
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (OrderRow);

/***/ })

};
;