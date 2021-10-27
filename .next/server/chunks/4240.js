exports.id = 4240;
exports.ids = [4240];
exports.modules = {

/***/ 4240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2818);
/* harmony import */ var _component_LazyImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1292);
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(479);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(835);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_pages_car_loan_Product_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1029);
/* harmony import */ var _styles_pages_car_loan_Product_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_car_loan_Product_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);










const OtherProduct = () => {
  const renderProduct = (product, idx) => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarCard__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        sx: {
          p: '1.5rem',
          height: '100%',
          borderRadius: '16px'
        },
        hoverEffect: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          container: true,
          flexDirection: "column",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
            item: true,
            xs: 12,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
              container: true,
              fontWeight: "bold",
              pb: 1.5,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
                children: ["L\xE3i su\u1EA5t\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
                  color: "#0098CE",
                  children: "6.25"
                }), "%"]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
                color: "grey.500",
                px: 1,
                children: "|"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
                children: ["\u01AFu \u0111\xE3i", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
                  color: "#0098CE",
                  children: "\xA012\xA0"
                }), "th\xE1ng"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: (_styles_pages_car_loan_Product_module_scss__WEBPACK_IMPORTED_MODULE_7___default().imgGroup),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LazyImage__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                src: product.imgUrl,
                width: 350,
                height: 200,
                layout: "responsive",
                objectFit: "cover",
                borderRadius: "8px" // alt={title}

              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_pages_car_loan_Product_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  children: "Vay \xF4 t\xF4"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  children: "F5Second"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
              container: true,
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__.H4, {
                  mb: 0.5,
                  mt: 1.5,
                  children: product.title
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
                  color: "grey.600",
                  children: product.sub
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__.H4, {
                  mb: 1.5,
                  mt: 1,
                  children: "995.000.000 VN\u0110"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                container: true,
                pt: 1.5,
                alignItems: "center",
                className: (_styles_pages_car_loan_Product_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btnGroup),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
                  color: "#0098CE",
                  mr: 2,
                  fontSize: "14px",
                  fontWeight: "600",
                  children: "Xem chi ti\u1EBFt g\xF3i vay"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default()), {
                  fontSize: "small",
                  htmlColor: "#0098CE"
                })]
              })]
            })]
          })
        })
      })
    }, idx);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {
    sx: {
      my: '70px'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
      container: true,
      justifyContent: "center",
      mb: 5,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        item: true,
        md: 6,
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__.H2, {
          children: "S\u1EA3n ph\u1EA9m c\u1EE7a ch\xFAng t\xF4i"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
      container: true,
      justifyContent: "center",
      mt: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          container: true,
          spacing: 5,
          children: lstProduct.map((product, idx) => renderProduct(product, idx))
        })
      })
    })]
  });
};

const lstProduct = [{
  imgUrl: '/assets/loyalty/car-loan/car-1.png',
  title: 'BMW X1',
  sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec'
}, {
  imgUrl: '/assets/loyalty/car-loan/car-2.png',
  title: 'BMW X2',
  sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec'
}, {
  imgUrl: '/assets/loyalty/car-loan/car-3.png',
  title: 'BMW X1',
  sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec'
}];
/* harmony default export */ __webpack_exports__["default"] = (OtherProduct);

/***/ }),

/***/ 1029:
/***/ (function(module) {

// Exports
module.exports = {
	"imgGroup": "Product_imgGroup__YiumA",
	"text": "Product_text__2qo5Q",
	"btnGroup": "Product_btnGroup__3fHmn",
	"pagin": "Product_pagin__2On63",
	"select": "Product_select__Uuk9R"
};


/***/ })

};
;