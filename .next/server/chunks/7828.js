exports.id = 7828;
exports.ids = [7828];
exports.modules = {

/***/ 9673:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


 // component props interface

// styled component
const Wrapper = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.styled)('div')(({
  open,
  parent_height,
  header_height
}) => ({
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'height 250ms ease-in-out',
  height: open ? parent_height : header_height
}));

const Accordion = ({
  expanded = false,
  children
}) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(expanded);
  const {
    0: headerHeight,
    1: setHeaderHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const {
    0: parentHeight,
    1: setParentHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);

  const toggle = () => setOpen(!open);

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    let parent = ref.current;

    if (parent) {
      setHeaderHeight(parent.children[0].scrollHeight);
      setParentHeight(parent.scrollHeight);
    }
  }, [ref.current]);
  const modifiedChildren = react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, (child, ind) => {
    if (ind === 0) return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(child, {
      open,
      onClick: toggle
    });else return child;
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
    ref: ref,
    open: open,
    header_height: headerHeight,
    parent_height: parentHeight,
    children: modifiedChildren
  });
};

Accordion.defaultProps = {
  expanded: false
};
/* harmony default export */ __webpack_exports__["Z"] = (Accordion);

/***/ }),

/***/ 2953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8604);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(835);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // Component Props interface

// styled components
const StyledFlexBox = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_ref) => {
  let {
    children,
    open
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "open"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_FlexBox__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread(_objectSpread({}, rest), {}, {
    children: children
  }));
})(({
  open
}) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  '.caretIcon': {
    transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
    transition: 'transform 250ms ease-in-out'
  }
}));

const AccordionHeader = (_ref2) => {
  let {
    sx,
    open,
    children,
    showIcon
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["sx", "open", "children", "showIcon"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledFlexBox, _objectSpread(_objectSpread({
    open: open,
    sx: sx
  }, props), {}, {
    children: [children, showIcon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "caretIcon",
      fontSize: "small"
    })]
  }));
};

AccordionHeader.defaultProps = {
  px: '1rem',
  py: '0.5rem',
  showIcon: true
};
/* harmony default export */ __webpack_exports__["Z"] = (AccordionHeader);

/***/ })

};
;