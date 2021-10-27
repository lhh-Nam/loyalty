exports.id = 3178;
exports.ids = [3178];
exports.modules = {

/***/ 3178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9137);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2875);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(479);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const DropZone = ({
  onChange
}) => {
  const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(acceptedFiles => {
    if (onChange) onChange(acceptedFiles);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_4__.useDropzone)({
    onDrop,
    multiple: true,
    accept: '.jpeg,.jpg,.png,.gif',
    maxFiles: 10
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_system__WEBPACK_IMPORTED_MODULE_2__.Box, _objectSpread(_objectSpread({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
    border: "1px dashed",
    borderColor: "grey.400",
    borderRadius: "10px",
    bgcolor: isDragActive ? 'grey.200' : 'none',
    sx: {
      transition: 'all 250ms ease-in-out',
      outline: 'none'
    }
  }, getRootProps()), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", _objectSpread({}, getInputProps())), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__.H5, {
      mb: 2,
      color: "grey.600",
      children: "Drag & drop product image here"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {
      sx: {
        width: '200px',
        mx: 'auto'
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
      color: "grey.600",
      bgcolor: isDragActive ? 'grey.200' : 'background.paper',
      lineHeight: "1",
      px: 2,
      mt: -1.25,
      mb: 2,
      children: "on"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
      color: "primary",
      type: "button",
      sx: {
        bgcolor: 'primary.light',
        px: '2rem',
        mb: '22px'
      },
      children: "Select files"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Small */ .x4, {
      color: "grey.600",
      children: "Upload 280*280 image"
    })]
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (DropZone);

/***/ })

};
;