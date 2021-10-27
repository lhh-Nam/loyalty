exports.id = 479;
exports.ids = [479];
exports.modules = {

/***/ 479:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H1": function() { return /* binding */ H1; },
/* harmony export */   "H2": function() { return /* binding */ H2; },
/* harmony export */   "H3": function() { return /* binding */ H3; },
/* harmony export */   "H4": function() { return /* binding */ H4; },
/* harmony export */   "H5": function() { return /* binding */ H5; },
/* harmony export */   "H6": function() { return /* binding */ H6; },
/* harmony export */   "nv": function() { return /* binding */ Paragraph; },
/* harmony export */   "x4": function() { return /* binding */ Small; },
/* harmony export */   "Dr": function() { return /* binding */ Span; },
/* harmony export */   "YE": function() { return /* binding */ Tiny; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const StyledBox = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box)(({
  textTransformStyle,
  ellipsis
}) => ({
  textTransform: textTransformStyle || 'none',
  whiteSpace: ellipsis ? 'nowrap' : 'normal',
  overflow: ellipsis ? 'hidden' : '',
  textOverflow: ellipsis ? 'ellipsis' : ''
}));
const H1 = (_ref) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBox, _objectSpread(_objectSpread({
    textTransformStyle: textTransform,
    ellipsis: ellipsis,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
      [className || '']: true
    }),
    component: "h1",
    mb: 0,
    mt: 0,
    fontSize: "30px",
    fontWeight: "500",
    lineHeight: "1.5"
  }, props), {}, {
    children: children
  }));
};
const H2 = (_ref2) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBox, _objectSpread(_objectSpread({
    textTransformStyle: textTransform,
    ellipsis: ellipsis,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
      [className || '']: true
    }),
    component: "h2",
    mb: 0,
    mt: 0,
    fontSize: "25px",
    fontWeight: "500",
    lineHeight: "1.5"
  }, props), {}, {
    children: children
  }));
};
const H3 = (_ref3) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBox, _objectSpread(_objectSpread({
    textTransformStyle: textTransform,
    ellipsis: ellipsis,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
      [className || '']: true
    }),
    component: "h3",
    mb: 0,
    mt: 0,
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "1.5"
  }, props), {}, {
    children: children
  }));
};
const H4 = (_ref4) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBox, _objectSpread(_objectSpread({
    textTransformStyle: textTransform,
    ellipsis: ellipsis,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
      [className || '']: true
    }),
    component: "h4",
    mb: 0,
    mt: 0,
    fontSize: "17px",
    fontWeight: "500",
    lineHeight: "1.5"
  }, props), {}, {
    children: children
  }));
};
const H5 = (_ref5) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref5,
      props = _objectWithoutProperties(_ref5, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBox, _objectSpread(_objectSpread({
    textTransformStyle: textTransform,
    ellipsis: ellipsis,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
      [className || '']: true
    }),
    component: "h5",
    mb: 0,
    mt: 0,
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.5"
  }, props), {}, {
    children: children
  }));
};
const H6 = (_ref6) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref6,
      props = _objectWithoutProperties(_ref6, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBox, _objectSpread(_objectSpread({
    textTransformStyle: textTransform,
    ellipsis: ellipsis,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
      [className || '']: true
    }),
    component: "h6",
    mb: 0,
    mt: 0,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.5"
  }, props), {}, {
    children: children
  }));
};
const Paragraph = (_ref7) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref7,
      props = _objectWithoutProperties(_ref7, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBox, _objectSpread(_objectSpread({
    textTransformStyle: textTransform,
    ellipsis: ellipsis,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
      [className || '']: true
    }),
    component: "p",
    mb: 0,
    mt: 0,
    fontSize: "14px"
  }, props), {}, {
    children: children
  }));
};
const Small = (_ref8) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref8,
      props = _objectWithoutProperties(_ref8, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBox, _objectSpread(_objectSpread({
    textTransformStyle: textTransform,
    ellipsis: ellipsis,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
      [className || '']: true
    }),
    component: "small",
    fontSize: "12px",
    lineHeight: "1.5"
  }, props), {}, {
    children: children
  }));
};
const Span = (_ref9) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref9,
      props = _objectWithoutProperties(_ref9, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBox, _objectSpread(_objectSpread({
    textTransformStyle: textTransform,
    ellipsis: ellipsis,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
      [className || '']: true
    }),
    component: "span",
    lineHeight: "1.5"
  }, props), {}, {
    children: children
  }));
};
const Tiny = (_ref10) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref10,
      props = _objectWithoutProperties(_ref10, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBox, _objectSpread(_objectSpread({
    textTransformStyle: textTransform,
    ellipsis: ellipsis,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
      [className || '']: true
    }),
    component: "small",
    fontSize: "10px",
    lineHeight: "1.5"
  }, props), {}, {
    children: children
  }));
};

/***/ })

};
;