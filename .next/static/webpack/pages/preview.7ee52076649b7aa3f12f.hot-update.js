self["webpackHotUpdate_N_E"]("pages/preview",{

/***/ "./pages/preview.tsx":
/*!***************************!*\
  !*** ./pages/preview.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/BazarCard */ "./src/components/BazarCard.tsx");
/* harmony import */ var _component_common_Breadcum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/common/Breadcum */ "./src/components/common/Breadcum.tsx");
/* harmony import */ var _component_common_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/common/Contact */ "./src/components/common/Contact.tsx");
/* harmony import */ var _component_icons_Accept__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component/icons/Accept */ "./src/components/icons/Accept.tsx");
/* harmony import */ var _component_icons_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @component/icons/Edit */ "./src/components/icons/Edit.tsx");
/* harmony import */ var _component_layout_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @component/layout/AppLayout */ "./src/components/layout/AppLayout.tsx");
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @component/Typography */ "./src/components/Typography.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* harmony import */ var _styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @styles/pages/preview-info-loan/Info.module.scss */ "./src/styles/pages/preview-info-loan/Info.module.scss");
/* harmony import */ var _styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/alert */ "./src/utils/alert.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\pages\\preview.tsx",
    _this = undefined,
    _s = $RefreshSig$();














var PrebiewInfo = function PrebiewInfo() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({
    hoTen: '',
    cmnd: '',
    ngaySinh: new Date(),
    sdt: '',
    diaChiThC: '',
    thanhPhoThc: '',
    phuongThc: '',
    quanThc: '',
    diaChiTC: '',
    thanhPhoTc: '',
    phuongTc: '',
    quanTc: ''
  }),
      state = _useState[0],
      setState = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    var infoLocalStorage = localStorage.getItem('info');
    var info = infoLocalStorage && JSON.parse(infoLocalStorage);
    info && setState(info);
  }, []);
  var breadcrumbs = [{
    label: 'Trang chủ',
    link: '/',
    isActive: false
  }, {
    label: 'Giấy đăng ký vay',
    isActive: true
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_layout_AppLayout__WEBPACK_IMPORTED_MODULE_6__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
      sx: {
        backgroundColor: 'white',
        padding: '16px 13%'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_common_Breadcum__WEBPACK_IMPORTED_MODULE_2__.default, {
        breadcrumbs: breadcrumbs
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Container, {
      sx: {
        mb: '70px',
        mt: '100px'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarCard__WEBPACK_IMPORTED_MODULE_1__.default, {
        sx: {
          p: '2.5rem',
          height: '100%',
          width: 'fit-content',
          borderRadius: '16px',
          mt: '38px',
          mx: 'auto'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
          sx: {
            border: '1px solid #005F92',
            padding: '50px',
            minWidth: '700px',
            minHeight: '990px',
            backgroundColor: '#FFFFFF'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Typography__WEBPACK_IMPORTED_MODULE_7__.H1, {
            sx: {
              textAlign: 'center',
              color: '#005F92'
            },
            children: "GI\u1EA4Y \u0110\u0102NG K\xDD VAY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default().matter),
            children: "1. Th\xF4ng tin c\xE1 nh\xE2n"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "H\u1ECD v\xE0 t\xEAn:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: state.hoTen
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "Ng\xE0y sinh:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: new Date(state.ngaySinh).toLocaleDateString()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "S\u1ED1 CMND/ CCCD:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: state.cmnd
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: state.sdt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default().matter),
            children: "2. Th\xF4ng tin \u0111\u1ECBa ch\u1EC9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "\u0110\u1ECBa ch\u1EC9 th\u01B0\u1EDDng ch\xFA:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "\u0110\u1ECBa ch\u1EC9 t\u1EA1m ch\xFA:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default().matter),
            children: "3. Th\xF4ng tin vay"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "S\u1EA3n ph\u1EA9m vay:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: '1.859.000.000 đồng'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "Gi\xE1 s\u1EA3n ph\u1EA9m (d\u1EF1 ki\u1EBFn):"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: '1.859.000.000 đồng'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "Ng\xE2n h\xE0ng \u0111\u0103ng k\xFD vay:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: 'Exinbank'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "Th\u1EDDi gian vay:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: '25 năm'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "S\u1ED1 ti\u1EC1n vay:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: '1.859.000.000 đồng'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
            className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["row-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-label"]),
              children: "T\xE0i s\u1EA3n \u0111\u1EA3m b\u1EA3o:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_pages_preview_info_loan_Info_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["text-content"]),
              children: ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
          sx: {
            mt: '30px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
          container: true,
          spacing: 5,
          justifyContent: "flex-end",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
            item: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Button, {
              variant: "outlined",
              color: "primary",
              endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_icons_Edit__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 26
              }, _this),
              onClick: function onClick() {
                return router.push('/borrower-info');
              },
              children: "Ch\u1EC9nh s\u1EEDa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
            item: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Button, {
              variant: "contained",
              color: "primary",
              endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_icons_Accept__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 26
              }, _this),
              onClick: function onClick() {
                (0,_utils_alert__WEBPACK_IMPORTED_MODULE_8__.sweetAlert)('Thành công', 'Đăng ký vay thành công', 'success').then(function () {
                  router.replace('/');
                  localStorage.removeItem('info');
                });
              },
              children: "X\xE1c nh\u1EADn"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_common_Contact__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(PrebiewInfo, "8yaVotPJT4S6524g+fc4N06WNkk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter];
});

_c = PrebiewInfo;
/* harmony default export */ __webpack_exports__["default"] = (PrebiewInfo);

var _c;

$RefreshReg$(_c, "PrebiewInfo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJldmlldy50c3giXSwibmFtZXMiOlsiUHJlYmlld0luZm8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImhvVGVuIiwiY21uZCIsIm5nYXlTaW5oIiwiRGF0ZSIsInNkdCIsImRpYUNoaVRoQyIsInRoYW5oUGhvVGhjIiwicGh1b25nVGhjIiwicXVhblRoYyIsImRpYUNoaVRDIiwidGhhbmhQaG9UYyIsInBodW9uZ1RjIiwicXVhblRjIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImluZm9Mb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5mbyIsIkpTT04iLCJwYXJzZSIsImJyZWFkY3J1bWJzIiwibGFiZWwiLCJsaW5rIiwiaXNBY3RpdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwibWIiLCJtdCIsInAiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsIm14IiwiYm9yZGVyIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInN0eWxlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicHVzaCIsInN3ZWV0QWxlcnQiLCJ0aGVuIiwicmVwbGFjZSIsInJlbW92ZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBZSxHQUFHLFNBQWxCQSxXQUFrQixHQUFNO0FBQUE7O0FBQzVCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRDRCLGtCQUdGQyxnREFBUSxDQUFDO0FBQ2pDQyxTQUFLLEVBQUUsRUFEMEI7QUFFakNDLFFBQUksRUFBRSxFQUYyQjtBQUdqQ0MsWUFBUSxFQUFFLElBQUlDLElBQUosRUFIdUI7QUFJakNDLE9BQUcsRUFBRSxFQUo0QjtBQUtqQ0MsYUFBUyxFQUFFLEVBTHNCO0FBTWpDQyxlQUFXLEVBQUUsRUFOb0I7QUFPakNDLGFBQVMsRUFBRSxFQVBzQjtBQVFqQ0MsV0FBTyxFQUFFLEVBUndCO0FBU2pDQyxZQUFRLEVBQUUsRUFUdUI7QUFVakNDLGNBQVUsRUFBRSxFQVZxQjtBQVdqQ0MsWUFBUSxFQUFFLEVBWHVCO0FBWWpDQyxVQUFNLEVBQUU7QUFaeUIsR0FBRCxDQUhOO0FBQUEsTUFHckJDLEtBSHFCO0FBQUEsTUFHZEMsUUFIYzs7QUFrQjVCQyxtREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxnQkFBZ0IsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQXpCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHSCxnQkFBZ0IsSUFBSUksSUFBSSxDQUFDQyxLQUFMLENBQVdMLGdCQUFYLENBQWpDO0FBQ0FHLFFBQUksSUFBSUwsUUFBUSxDQUFDSyxJQUFELENBQWhCO0FBQ0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLE1BQU1HLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxTQUFLLEVBQUUsV0FBVDtBQUFzQkMsUUFBSSxFQUFFLEdBQTVCO0FBQWlDQyxZQUFRLEVBQUU7QUFBM0MsR0FEa0IsRUFFbEI7QUFBRUYsU0FBSyxFQUFFLGtCQUFUO0FBQTZCRSxZQUFRLEVBQUU7QUFBdkMsR0FGa0IsQ0FBcEI7QUFLQSxzQkFDRSw4REFBQyxnRUFBRDtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQUssUUFBRSxFQUFFO0FBQUVDLHVCQUFlLEVBQUUsT0FBbkI7QUFBNEJDLGVBQU8sRUFBRTtBQUFyQyxPQUFUO0FBQUEsNkJBQ0UsOERBQUMsK0RBQUQ7QUFBbUIsbUJBQVcsRUFBRUw7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLDhEQUFDLHlEQUFEO0FBQVcsUUFBRSxFQUFFO0FBQUVNLFVBQUUsRUFBRSxNQUFOO0FBQWNDLFVBQUUsRUFBRTtBQUFsQixPQUFmO0FBQUEsNkJBQ0UsOERBQUMseURBQUQ7QUFDRSxVQUFFLEVBQUU7QUFDRkMsV0FBQyxFQUFFLFFBREQ7QUFFRkMsZ0JBQU0sRUFBRSxNQUZOO0FBR0ZDLGVBQUssRUFBRSxhQUhMO0FBSUZDLHNCQUFZLEVBQUUsTUFKWjtBQUtGSixZQUFFLEVBQUUsTUFMRjtBQU1GSyxZQUFFLEVBQUU7QUFORixTQUROO0FBQUEsZ0NBVUUsOERBQUMsbURBQUQ7QUFDRSxZQUFFLEVBQUU7QUFDRkMsa0JBQU0sRUFBRSxtQkFETjtBQUVGUixtQkFBTyxFQUFFLE1BRlA7QUFHRlMsb0JBQVEsRUFBRSxPQUhSO0FBSUZDLHFCQUFTLEVBQUUsT0FKVDtBQUtGWCwyQkFBZSxFQUFFO0FBTGYsV0FETjtBQUFBLGtDQVNFLDhEQUFDLHFEQUFEO0FBQUksY0FBRSxFQUFFO0FBQUVZLHVCQUFTLEVBQUUsUUFBYjtBQUF1QkMsbUJBQUssRUFBRTtBQUE5QixhQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBV0U7QUFBRyxxQkFBUyxFQUFFQyxpR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQVlFLDhEQUFDLG1EQUFEO0FBQUsscUJBQVMsRUFBRUEseUdBQWhCO0FBQUEsb0NBQ0U7QUFBRyx1QkFBUyxFQUFFQSx3R0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUcsdUJBQVMsRUFBRUEsMEdBQWQ7QUFBQSx3QkFBc0MzQixLQUFLLENBQUNiO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGLGVBaUJFLDhEQUFDLG1EQUFEO0FBQUsscUJBQVMsRUFBRXdDLHlHQUFoQjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBRUEsd0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFHLHVCQUFTLEVBQUVBLDBHQUFkO0FBQUEsd0JBQ0csSUFBSXJDLElBQUosQ0FBU1UsS0FBSyxDQUFDWCxRQUFmLEVBQXlCdUMsa0JBQXpCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGLGVBd0JFLDhEQUFDLG1EQUFEO0FBQUsscUJBQVMsRUFBRUQseUdBQWhCO0FBQUEsb0NBQ0U7QUFBRyx1QkFBUyxFQUFFQSx3R0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUcsdUJBQVMsRUFBRUEsMEdBQWQ7QUFBQSx3QkFBc0MzQixLQUFLLENBQUNaO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhCRixlQTZCRSw4REFBQyxtREFBRDtBQUFLLHFCQUFTLEVBQUV1Qyx5R0FBaEI7QUFBQSxvQ0FDRTtBQUFHLHVCQUFTLEVBQUVBLHdHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBRyx1QkFBUyxFQUFFQSwwR0FBZDtBQUFBLHdCQUFzQzNCLEtBQUssQ0FBQ1Q7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0JGLGVBa0NFO0FBQUcscUJBQVMsRUFBRW9DLGlHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxDRixlQW1DRSw4REFBQyxtREFBRDtBQUFLLHFCQUFTLEVBQUVBLHlHQUFoQjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBRUEsd0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFHLHVCQUFTLEVBQUVBLDBHQUFkO0FBQUEsd0JBQXNDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5DRixlQXdDRSw4REFBQyxtREFBRDtBQUFLLHFCQUFTLEVBQUVBLHlHQUFoQjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBRUEsd0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFHLHVCQUFTLEVBQUVBLDBHQUFkO0FBQUEsd0JBQXNDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhDRixlQTZDRTtBQUFHLHFCQUFTLEVBQUVBLGlHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdDRixlQThDRSw4REFBQyxtREFBRDtBQUFLLHFCQUFTLEVBQUVBLHlHQUFoQjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBRUEsd0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFHLHVCQUFTLEVBQUVBLDBHQUFkO0FBQUEsd0JBQXNDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTlDRixlQW1ERSw4REFBQyxtREFBRDtBQUFLLHFCQUFTLEVBQUVBLHlHQUFoQjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBRUEsd0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFHLHVCQUFTLEVBQUVBLDBHQUFkO0FBQUEsd0JBQXNDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5ERixlQXdERSw4REFBQyxtREFBRDtBQUFLLHFCQUFTLEVBQUVBLHlHQUFoQjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBRUEsd0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFHLHVCQUFTLEVBQUVBLDBHQUFkO0FBQUEsd0JBQXNDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhERixlQTZERSw4REFBQyxtREFBRDtBQUFLLHFCQUFTLEVBQUVBLHlHQUFoQjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBRUEsd0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFHLHVCQUFTLEVBQUVBLDBHQUFkO0FBQUEsd0JBQXNDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdERixlQWtFRSw4REFBQyxtREFBRDtBQUFLLHFCQUFTLEVBQUVBLHlHQUFoQjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBRUEsd0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFHLHVCQUFTLEVBQUVBLDBHQUFkO0FBQUEsd0JBQXNDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxFRixlQXVFRSw4REFBQyxtREFBRDtBQUFLLHFCQUFTLEVBQUVBLHlHQUFoQjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBRUEsd0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFHLHVCQUFTLEVBQUVBLDBHQUFkO0FBQUEsd0JBQXNDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUErRkUsOERBQUMsbURBQUQ7QUFBSyxZQUFFLEVBQUU7QUFBRVgsY0FBRSxFQUFFO0FBQU47QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9GRixlQWdHRSw4REFBQyxvREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0IsaUJBQU8sRUFBRSxDQUF6QjtBQUE0Qix3QkFBYyxFQUFDLFVBQTNDO0FBQUEsa0NBQ0UsOERBQUMsb0RBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQUEsbUNBQ0UsOERBQUMsc0RBQUQ7QUFDRSxxQkFBTyxFQUFDLFVBRFY7QUFFRSxtQkFBSyxFQUFDLFNBRlI7QUFHRSxxQkFBTyxlQUFFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSFg7QUFJRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1oQyxNQUFNLENBQUM2QyxJQUFQLENBQVksZ0JBQVosQ0FBTjtBQUFBLGVBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBV0UsOERBQUMsb0RBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQUEsbUNBQ0UsOERBQUMsc0RBQUQ7QUFDRSxxQkFBTyxFQUFDLFdBRFY7QUFFRSxtQkFBSyxFQUFDLFNBRlI7QUFHRSxxQkFBTyxlQUFFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSFg7QUFJRSxxQkFBTyxFQUFFLG1CQUFNO0FBQ2JDLHdFQUFVLENBQUMsWUFBRCxFQUFlLHdCQUFmLEVBQXlDLFNBQXpDLENBQVYsQ0FBOERDLElBQTlELENBQ0UsWUFBTTtBQUNKL0Msd0JBQU0sQ0FBQ2dELE9BQVAsQ0FBZSxHQUFmO0FBQ0E1Qiw4QkFBWSxDQUFDNkIsVUFBYixDQUF3QixNQUF4QjtBQUNELGlCQUpIO0FBTUQsZUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFvSUUsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdJRCxDQXJLRDs7R0FBTWxELFc7VUFDV0Usa0Q7OztLQURYRixXO0FBdUtOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ByZXZpZXcuN2VlNTIwNzY2NDliN2FhM2YxMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXphckNhcmQgZnJvbSAnQGNvbXBvbmVudC9CYXphckNhcmQnXHJcbmltcG9ydCBCcmVhZGNydW1ic0N1c3RvbSBmcm9tICdAY29tcG9uZW50L2NvbW1vbi9CcmVhZGN1bSdcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnQGNvbXBvbmVudC9jb21tb24vQ29udGFjdCdcclxuaW1wb3J0IEFjY2VwdCBmcm9tICdAY29tcG9uZW50L2ljb25zL0FjY2VwdCdcclxuaW1wb3J0IEVkaXQgZnJvbSAnQGNvbXBvbmVudC9pY29ucy9FZGl0J1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJ0Bjb21wb25lbnQvbGF5b3V0L0FwcExheW91dCdcclxuaW1wb3J0IHsgSDEgfSBmcm9tICdAY29tcG9uZW50L1R5cG9ncmFwaHknXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDb250YWluZXIsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHN0eWxlIGZyb20gJ0BzdHlsZXMvcGFnZXMvcHJldmlldy1pbmZvLWxvYW4vSW5mby5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgc3dlZXRBbGVydCB9IGZyb20gJ0B1dGlscy9hbGVydCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUHJlYmlld0luZm86IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgaG9UZW46ICcnLFxyXG4gICAgY21uZDogJycsXHJcbiAgICBuZ2F5U2luaDogbmV3IERhdGUoKSxcclxuICAgIHNkdDogJycsXHJcbiAgICBkaWFDaGlUaEM6ICcnLFxyXG4gICAgdGhhbmhQaG9UaGM6ICcnLFxyXG4gICAgcGh1b25nVGhjOiAnJyxcclxuICAgIHF1YW5UaGM6ICcnLFxyXG4gICAgZGlhQ2hpVEM6ICcnLFxyXG4gICAgdGhhbmhQaG9UYzogJycsXHJcbiAgICBwaHVvbmdUYzogJycsXHJcbiAgICBxdWFuVGM6ICcnLFxyXG4gIH0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbmZvTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZm8nKVxyXG4gICAgY29uc3QgaW5mbyA9IGluZm9Mb2NhbFN0b3JhZ2UgJiYgSlNPTi5wYXJzZShpbmZvTG9jYWxTdG9yYWdlKVxyXG4gICAgaW5mbyAmJiBzZXRTdGF0ZShpbmZvKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBicmVhZGNydW1icyA9IFtcclxuICAgIHsgbGFiZWw6ICdUcmFuZyBjaOG7pycsIGxpbms6ICcvJywgaXNBY3RpdmU6IGZhbHNlIH0sXHJcbiAgICB7IGxhYmVsOiAnR2nhuqV5IMSRxINuZyBrw70gdmF5JywgaXNBY3RpdmU6IHRydWUgfSxcclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8Qm94IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzE2cHggMTMlJyB9fT5cclxuICAgICAgICA8QnJlYWRjcnVtYnNDdXN0b20gYnJlYWRjcnVtYnM9e2JyZWFkY3J1bWJzfSAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPENvbnRhaW5lciBzeD17eyBtYjogJzcwcHgnLCBtdDogJzEwMHB4JyB9fT5cclxuICAgICAgICA8QmF6YXJDYXJkXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBwOiAnMi41cmVtJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNnB4JyxcclxuICAgICAgICAgICAgbXQ6ICczOHB4JyxcclxuICAgICAgICAgICAgbXg6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDA1RjkyJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgbWluV2lkdGg6ICc3MDBweCcsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnOTkwcHgnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SDEgc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgY29sb3I6ICcjMDA1RjkyJyB9fT5HSeG6pFkgxJDEgk5HIEvDnSBWQVk8L0gxPlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5tYXR0ZXJ9PjEuIFRow7RuZyB0aW4gY8OhIG5ow6JuPC9wPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVbJ3Jvdy1jb250ZW50J119PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtbGFiZWwnXX0+SOG7jSB2w6AgdMOqbjo8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC1jb250ZW50J119PntzdGF0ZS5ob1Rlbn08L3A+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e3N0eWxlWydyb3ctY29udGVudCddfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0ZXh0LWxhYmVsJ119Pk5nw6B5IHNpbmg6PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtY29udGVudCddfT5cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShzdGF0ZS5uZ2F5U2luaCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZVsncm93LWNvbnRlbnQnXX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC1sYWJlbCddfT5T4buRIENNTkQvIENDQ0Q6PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtY29udGVudCddfT57c3RhdGUuY21uZH08L3A+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e3N0eWxlWydyb3ctY29udGVudCddfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0ZXh0LWxhYmVsJ119PlPhu5EgxJFp4buHbiB0aG/huqFpOjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0ZXh0LWNvbnRlbnQnXX0+e3N0YXRlLnNkdH08L3A+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5tYXR0ZXJ9PjIuIFRow7RuZyB0aW4gxJHhu4thIGNo4buJPC9wPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVbJ3Jvdy1jb250ZW50J119PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtbGFiZWwnXX0+xJDhu4thIGNo4buJIHRoxrDhu51uZyBjaMO6OjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0ZXh0LWNvbnRlbnQnXX0+eycnfTwvcD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVbJ3Jvdy1jb250ZW50J119PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtbGFiZWwnXX0+xJDhu4thIGNo4buJIHThuqFtIGNow7o6PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtY29udGVudCddfT57Jyd9PC9wPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUubWF0dGVyfT4zLiBUaMO0bmcgdGluIHZheTwvcD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e3N0eWxlWydyb3ctY29udGVudCddfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0ZXh0LWxhYmVsJ119PlPhuqNuIHBo4bqpbSB2YXk6PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtY29udGVudCddfT57JzEuODU5LjAwMC4wMDAgxJHhu5NuZyd9PC9wPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZVsncm93LWNvbnRlbnQnXX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC1sYWJlbCddfT5HacOhIHPhuqNuIHBo4bqpbSAoZOG7sSBraeG6v24pOjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0ZXh0LWNvbnRlbnQnXX0+eycxLjg1OS4wMDAuMDAwIMSR4buTbmcnfTwvcD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVbJ3Jvdy1jb250ZW50J119PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtbGFiZWwnXX0+TmfDom4gaMOgbmcgxJHEg25nIGvDvSB2YXk6PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtY29udGVudCddfT57J0V4aW5iYW5rJ308L3A+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e3N0eWxlWydyb3ctY29udGVudCddfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0ZXh0LWxhYmVsJ119PlRo4budaSBnaWFuIHZheTo8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC1jb250ZW50J119PnsnMjUgbsSDbSd9PC9wPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZVsncm93LWNvbnRlbnQnXX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC1sYWJlbCddfT5T4buRIHRp4buBbiB2YXk6PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtY29udGVudCddfT57JzEuODU5LjAwMC4wMDAgxJHhu5NuZyd9PC9wPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZVsncm93LWNvbnRlbnQnXX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC1sYWJlbCddfT5Uw6BpIHPhuqNuIMSR4bqjbSBi4bqjbzo8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC1jb250ZW50J119PnsnJ308L3A+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogPEJhemFySW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9sb3lhbHR5L2hvbWUvZXhpbWJhbmsucG5nXCJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBtaW5XaWR0aDogJzcwMHB4JyxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgIDxCb3ggc3g9e3sgbXQ6ICczMHB4JyB9fSAvPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIGVuZEljb249ezxFZGl0IC8+fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9ib3Jyb3dlci1pbmZvJyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2jhu4luaCBz4butYVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgZW5kSWNvbj17PEFjY2VwdCAvPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3dlZXRBbGVydCgnVGjDoG5oIGPDtG5nJywgJ8SQxINuZyBrw70gdmF5IHRow6BuaCBjw7RuZycsICdzdWNjZXNzJykudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaW5mbycpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFjDoWMgbmjhuq1uXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JhemFyQ2FyZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxDb250YWN0IC8+XHJcbiAgICA8L0FwcExheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWJpZXdJbmZvXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=