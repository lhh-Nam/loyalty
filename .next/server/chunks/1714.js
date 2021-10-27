exports.id = 1714;
exports.ids = [1714];
exports.modules = {

/***/ 1714:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5650);
/* harmony import */ var _styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);






const CustomSelect = props => {
  var _options$filter$shift;

  const {
    label,
    options,
    onChange,
    value,
    placeholder,
    isCustomDisplayValue
  } = props;
  const {
    0: display,
    1: setDiplay
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(options === null || options === void 0 ? void 0 : (_options$filter$shift = options.filter(e => e.value === value).shift()) === null || _options$filter$shift === void 0 ? void 0 : _options$filter$shift.renderItem);

  const handleOnChange = event => {
    onChange(event.target.value);

    if (isCustomDisplayValue) {
      var _options$filter$shift2;

      setDiplay(options === null || options === void 0 ? void 0 : (_options$filter$shift2 = options.filter(e => e.value === event.target.value).shift()) === null || _options$filter$shift2 === void 0 ? void 0 : _options$filter$shift2.renderItem);
    }
  };

  const renderSelectItem = () => {
    return options === null || options === void 0 ? void 0 : options.map(option => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        value: option.value,
        className: (_styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3___default().optionItem),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: option.name
        })
      }, option.value);
    });
  };

  const renderPlaceholder = () => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: (_styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3___default().placeholder),
      children: placeholder
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
      variant: "body1",
      className: (_styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
      children: label
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
      variant: "outlined",
      size: "small",
      fullWidth: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Select, {
        color: "primary",
        value: value,
        onChange: handleOnChange,
        MenuProps: {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          } // getContentAnchorEl: null,

        },
        displayEmpty: true,
        renderValue: display ? () => display : value ? () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: value
        }) : () => renderPlaceholder(),
        className: (_styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3___default().select),
        children: options && renderSelectItem()
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (CustomSelect);

/***/ })

};
;