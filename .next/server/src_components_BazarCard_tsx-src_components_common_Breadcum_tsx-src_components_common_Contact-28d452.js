exports.id = "src_components_BazarCard_tsx-src_components_common_Breadcum_tsx-src_components_common_Contact-28d452";
exports.ids = ["src_components_BazarCard_tsx-src_components_common_Breadcum_tsx-src_components_common_Contact-28d452"];
exports.modules = {

/***/ "./src/animations/keyframes.tsx":
/*!**************************************!*\
  !*** ./src/animations/keyframes.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideDown": function() { return /* binding */ slideDown; }
/* harmony export */ });
/* harmony import */ var _material_ui_styled_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styled-engine */ "@material-ui/styled-engine");
/* harmony import */ var _material_ui_styled_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styled_engine__WEBPACK_IMPORTED_MODULE_0__);

const slideDown = _material_ui_styled_engine__WEBPACK_IMPORTED_MODULE_0__.keyframes`
    from {transform: translateY(-200%)}
    to {transform: translateY(0)}
`;

/***/ }),

/***/ "./src/components/BazarAvatar.tsx":
/*!****************************************!*\
  !*** ./src/components/BazarAvatar.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__);


const BazarAvatar = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Avatar)((0,_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.compose)(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.spacing, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.typography, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.sizing, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.border));
/* harmony default export */ __webpack_exports__["default"] = (BazarAvatar);

/***/ }),

/***/ "./src/components/BazarButton.tsx":
/*!****************************************!*\
  !*** ./src/components/BazarButton.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


const BazarButton = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button)({
  minWidth: 0,
  minHeight: 0
});
/* harmony default export */ __webpack_exports__["default"] = (BazarButton);

/***/ }),

/***/ "./src/components/BazarCard.tsx":
/*!**************************************!*\
  !*** ./src/components/BazarCard.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\BazarCard.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const BazarCard = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_ref) => {
  let {
    hoverEffect,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["hoverEffect", "children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Card, _objectSpread(_objectSpread({}, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 43
  }, undefined);
})(({
  theme,
  hoverEffect
}) => ({
  borderRadius: '8px',
  overflow: 'unset',
  transition: 'all 250ms ease-in-out',
  '&:hover': {
    boxShadow: hoverEffect ? theme.shadows[3] : ''
  }
}));
BazarCard.defaultProps = {
  hoverEffect: false
};
/* harmony default export */ __webpack_exports__["default"] = (BazarCard);

/***/ }),

/***/ "./src/components/BazarIconButton.tsx":
/*!********************************************!*\
  !*** ./src/components/BazarIconButton.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__);


const BazarIconButton = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton)((0,_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.compose)(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.spacing, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.positions, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.typography, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.sizing, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.border, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.bgcolor));
/* harmony default export */ __webpack_exports__["default"] = (BazarIconButton);

/***/ }),

/***/ "./src/components/BazarImage.tsx":
/*!***************************************!*\
  !*** ./src/components/BazarImage.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__);

const BazarImage = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.styled)('img')((0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.compose)(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.spacing, _material_ui_system__WEBPACK_IMPORTED_MODULE_0__.display));
BazarImage.defaultProps = {
  display: 'block'
};
/* harmony default export */ __webpack_exports__["default"] = (BazarImage); // compose,
// borders,
// display,
// flexbox,
// palette,
// positions,
// shadows,
// sizing,
// spacing,
// typography

/***/ }),

/***/ "./src/components/BazarMenu.tsx":
/*!**************************************!*\
  !*** ./src/components/BazarMenu.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\BazarMenu.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const BazarMenu = (_ref) => {
  let {
    open,
    handler,
    direction,
    shouldCloseOnItemClick,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["open", "handler", "direction", "shouldCloseOnItemClick", "children"]);

  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = customOnClick => () => {
    if (customOnClick) customOnClick();
    if (shouldCloseOnItemClick) handleClose();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [handler && /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(handler, {
      onClick: handler.props.onClick || handleClick
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({
      anchorEl: anchorEl,
      open: open !== undefined ? open : !!anchorEl,
      onClose: handleClose,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: direction || 'left'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: direction || 'left'
      }
    }, props), {}, {
      children: react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, child => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(child, {
        onClick: handleMenuItemClick(child.props.onClick)
      }))
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};

BazarMenu.defaultProps = {
  direction: 'left',
  shouldCloseOnItemClick: true
};
/* harmony default export */ __webpack_exports__["default"] = (BazarMenu);

/***/ }),

/***/ "./src/components/BazarTextField.tsx":
/*!*******************************************!*\
  !*** ./src/components/BazarTextField.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Typography */ "./src/components/Typography.tsx");

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\BazarTextField.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const BazarTextField = (_ref) => {
  let {
    label,
    InputProps
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "InputProps"]);

  const boxProps = {};
  const textFieldProps = {};

  for (const key in props) {
    if (spacePropList.includes(key)) {
      boxProps[key] = props[key];
    } else textFieldProps[key] = props[key];
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, _objectSpread(_objectSpread({}, boxProps), {}, {
    children: [label && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Typography__WEBPACK_IMPORTED_MODULE_2__.Small, {
      display: "block",
      mb: 1,
      textAlign: "left",
      fontWeight: "600",
      color: "grey.700",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, _objectSpread({
      InputProps: _objectSpread(_objectSpread({}, InputProps), {}, {
        style: _objectSpread(_objectSpread({}, InputProps === null || InputProps === void 0 ? void 0 : InputProps.style), {}, {
          height: 44
        })
      })
    }, textFieldProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

const spacePropList = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];
/* harmony default export */ __webpack_exports__["default"] = (BazarTextField);

/***/ }),

/***/ "./src/components/FlexBox.tsx":
/*!************************************!*\
  !*** ./src/components/FlexBox.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\FlexBox.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const FlexBox = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.Box, _objectSpread(_objectSpread({
    display: "flex"
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }, undefined);
};

FlexBox.defaultProps = {
  display: 'flex'
};
/* harmony default export */ __webpack_exports__["default"] = (FlexBox);

/***/ }),

/***/ "./src/components/LazyImage.tsx":
/*!**************************************!*\
  !*** ./src/components/LazyImage.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\LazyImage.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const LazyImage = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.styled)((_ref) => {
  let {
    borderRadius
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["borderRadius"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread({}, rest), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 34
  }, undefined);
})((0,_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.compose)(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.spacing, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.borderRadius, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.bgcolor));
/* harmony default export */ __webpack_exports__["default"] = (LazyImage);

/***/ }),

/***/ "./src/components/Typography.tsx":
/*!***************************************!*\
  !*** ./src/components/Typography.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H1": function() { return /* binding */ H1; },
/* harmony export */   "H2": function() { return /* binding */ H2; },
/* harmony export */   "H3": function() { return /* binding */ H3; },
/* harmony export */   "H4": function() { return /* binding */ H4; },
/* harmony export */   "H5": function() { return /* binding */ H5; },
/* harmony export */   "H6": function() { return /* binding */ H6; },
/* harmony export */   "Paragraph": function() { return /* binding */ Paragraph; },
/* harmony export */   "Small": function() { return /* binding */ Small; },
/* harmony export */   "Span": function() { return /* binding */ Span; },
/* harmony export */   "Tiny": function() { return /* binding */ Tiny; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\Typography.tsx";

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, _objectSpread(_objectSpread({
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
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};
const H2 = (_ref2) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, _objectSpread(_objectSpread({
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
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};
const H3 = (_ref3) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, _objectSpread(_objectSpread({
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
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, undefined);
};
const H4 = (_ref4) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, _objectSpread(_objectSpread({
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
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 5
  }, undefined);
};
const H5 = (_ref5) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref5,
      props = _objectWithoutProperties(_ref5, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, _objectSpread(_objectSpread({
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
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 5
  }, undefined);
};
const H6 = (_ref6) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref6,
      props = _objectWithoutProperties(_ref6, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, _objectSpread(_objectSpread({
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
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 5
  }, undefined);
};
const Paragraph = (_ref7) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref7,
      props = _objectWithoutProperties(_ref7, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, _objectSpread(_objectSpread({
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
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 196,
    columnNumber: 5
  }, undefined);
};
const Small = (_ref8) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref8,
      props = _objectWithoutProperties(_ref8, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, _objectSpread(_objectSpread({
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
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 221,
    columnNumber: 5
  }, undefined);
};
const Span = (_ref9) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref9,
      props = _objectWithoutProperties(_ref9, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, _objectSpread(_objectSpread({
    textTransformStyle: textTransform,
    ellipsis: ellipsis,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
      [className || '']: true
    }),
    component: "span",
    lineHeight: "1.5"
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 245,
    columnNumber: 5
  }, undefined);
};
const Tiny = (_ref10) => {
  let {
    children,
    className,
    ellipsis,
    textTransform
  } = _ref10,
      props = _objectWithoutProperties(_ref10, ["children", "className", "ellipsis", "textTransform"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, _objectSpread(_objectSpread({
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
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 268,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/common/Breadcum.tsx":
/*!********************************************!*\
  !*** ./src/components/common/Breadcum.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\common\\Breadcum.tsx";


const BreadcrumbsCustom = ({
  breadcrumbs
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs, {
    "aria-label": "breadcrumb",
    children: breadcrumbs.map((item, idx) => {
      if (item.isActive) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
          sx: {
            fontWeight: 'bold'
          },
          color: "text.primary",
          children: item.label
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, undefined);
      } else {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Link, {
          underline: "hover",
          color: "inherit",
          href: item.link,
          children: item.label
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, undefined);
      }
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BreadcrumbsCustom);

/***/ }),

/***/ "./src/components/common/Contact.tsx":
/*!*******************************************!*\
  !*** ./src/components/common/Contact.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/BazarImage */ "./src/components/BazarImage.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Typography */ "./src/components/Typography.tsx");

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\common\\Contact.tsx";





const Contact = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    bgcolor: "white",
    minHeight: 200,
    display: "flex",
    alignItems: "center",
    padding: "30px 20px",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        spacing: 5,
        color: "#015F92",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
          item: true,
          lg: 3,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            justifyContent: "center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarImage__WEBPACK_IMPORTED_MODULE_1__.default, {
              src: "/assets/loyalty/icons/call-calling.svg",
              sx: {
                display: 'block',
                maxHeight: '100%',
                maxWidth: '100%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Typography__WEBPACK_IMPORTED_MODULE_4__.Span, {
              fontSize: "1.1rem",
              pt: 2,
              pl: 2,
              children: ["Hotline 24/7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 30
              }, undefined), " 1800 1199"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
          item: true,
          lg: 3,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            justifyContent: "center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarImage__WEBPACK_IMPORTED_MODULE_1__.default, {
              src: "/assets/loyalty/icons/card.svg",
              sx: {
                display: 'block',
                maxHeight: '100%',
                maxWidth: '100%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Typography__WEBPACK_IMPORTED_MODULE_4__.Span, {
              fontSize: "1.1rem",
              pt: 2,
              pl: 2,
              children: ["T\u1EC9 gi\xE1 v\xE0 ngo\u1EA1i t\u1EC7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 36
              }, undefined), " gi\xE1 v\xE0ng"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
          item: true,
          lg: 3,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            justifyContent: "center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarImage__WEBPACK_IMPORTED_MODULE_1__.default, {
              src: "/assets/loyalty/icons/message-search.svg",
              sx: {
                display: 'block',
                maxHeight: '100%',
                maxWidth: '100%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Typography__WEBPACK_IMPORTED_MODULE_4__.Span, {
              fontSize: "1.1rem",
              pt: 2,
              pl: 2,
              children: ["ATM v\xE0 \u0110\u1ECBa \u0111i\u1EC3m ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 33
              }, undefined), " giao d\u1ECBch"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
          item: true,
          lg: 3,
          xs: 6,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            justifyContent: "center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarImage__WEBPACK_IMPORTED_MODULE_1__.default, {
              src: "/assets/loyalty/icons/message-question.svg",
              sx: {
                display: 'block',
                maxHeight: '100%',
                maxWidth: '100%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Typography__WEBPACK_IMPORTED_MODULE_4__.Span, {
              fontSize: "1.1rem",
              pt: 2,
              pl: 2,
              children: ["C\xE2u h\u1ECFi ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 25
              }, undefined), " th\u01B0\u1EDDng g\u1EB7p"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/common/TextFieldCustom.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/TextFieldCustom.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_icons_Star__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/icons/Star */ "./src/components/icons/Star.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/components/CustomSelect.module.scss */ "./src/styles/components/CustomSelect.module.scss");
/* harmony import */ var _styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\common\\TextFieldCustom.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const TextFieldStyled = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TextField, _objectSpread({}, props), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 3
}, undefined))(() => ({
  "& .MuiOutlinedInput-root": {
    //borderRadius: "10px",
    backgroundColor: "#FAFAFA"
  }
}));

const TextFieldCustom = (_ref) => {
  let {
    label,
    required = false,
    endAdor
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["label", "required", "endAdor"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [label && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "body1",
        className: (_styles_components_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined), required && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_icons_Star__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 24
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextFieldStyled, _objectSpread(_objectSpread({
      fullWidth: true
    }, rest), {}, {
      InputProps: {
        endAdornment: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: endAdor
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }, undefined)
      }
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TextFieldCustom);

/***/ }),

/***/ "./src/components/footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/footer/Footer.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\footer\\Footer.tsx";

 // styled component

const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
      bgcolor: "#015F92",
      display: "block",
      height: 50,
      width: "100%"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/Header.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderWrapper": function() { return /* binding */ HeaderWrapper; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/BazarImage */ "./src/components/BazarImage.tsx");
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/FlexBox */ "./src/components/FlexBox.tsx");
/* harmony import */ var _component_mini_cart_MiniCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/mini-cart/MiniCart */ "./src/components/mini-cart/MiniCart.tsx");
/* harmony import */ var _component_sessions_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component/sessions/Login */ "./src/components/sessions/Login.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _search_box_SearchBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search-box/SearchBox */ "./src/components/search-box/SearchBox.tsx");

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\header\\Header.tsx";










 // component props interface

// styled component
const HeaderWrapper = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box)(({
  theme
}) => ({
  position: 'relative',
  zIndex: 1,
  height: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.layoutConstant.headerHeight,
  background: theme.palette.background.paper,
  transition: 'height 250ms ease-in-out',
  [theme.breakpoints.down('sm')]: {
    height: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.layoutConstant.mobileHeaderHeight
  }
}));

const Header = ({
  className
}) => {
  const {
    0: sidenavOpen,
    1: setSidenavOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
  const {
    0: dialogOpen,
    1: setDialogOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
  const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
  const isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)(theme.breakpoints.down('xs'));

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);

  const toggleDialog = () => setDialogOpen(!dialogOpen); // const { state } = useAppContext()
  // const { cartList } = state.cart
  // const cartHandle = (
  //   <Badge badgeContent={cartList.length} color="primary">
  //     <Box
  //       component={IconButton}
  //       ml={2.5}
  //       bgcolor="grey.200"
  //       p={1.25}
  //       onClick={toggleSidenav}
  //     >
  //       <ShoppingBagOutlined />
  //     </Box>
  //   </Badge>
  // )


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderWrapper, {
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(className),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Container, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_2__.default, {
        alignItems: "center",
        mr: 2,
        minWidth: "170px",
        sx: {
          display: {
            xs: 'none',
            md: 'flex'
          }
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarImage__WEBPACK_IMPORTED_MODULE_1__.default, {
              height: 40,
              src: "/assets/loyalty/logo-f5s.jpg",
              alt: "logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_2__.default, {
        justifyContent: "center",
        flex: "1 1 0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_search_box_SearchBox__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
        open: dialogOpen,
        fullWidth: isMobile,
        scroll: "body",
        onClose: toggleDialog,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_sessions_Login__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Drawer, {
        open: sidenavOpen,
        anchor: "right",
        onClose: toggleSidenav,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_mini_cart_MiniCart__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/icons/ShoppingBagOutlined.tsx":
/*!******************************************************!*\
  !*** ./src/components/icons/ShoppingBagOutlined.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\icons\\ShoppingBagOutlined.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ShoppingBagOutlined = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        fill: "none",
        height: "24",
        width: "24"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ShoppingBagOutlined);

/***/ }),

/***/ "./src/components/icons/Star.tsx":
/*!***************************************!*\
  !*** ./src/components/icons/Star.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\icons\\Star.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Star = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, _objectSpread(_objectSpread({}, props), {}, {
    style: {
      width: '8px',
      height: '8px',
      margin: '5px'
    },
    viewBox: "0 0 8 8",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M5.1199 0.937684L5.43991 1.58781C5.59991 1.90788 6.00992 2.20794 6.34992 2.26795L6.77991 2.33796C8.08991 2.558 8.3899 3.51819 7.4599 4.45838L7.05991 4.85846C6.78991 5.12851 6.64992 5.64861 6.72992 6.02868L6.77991 6.26873C7.13991 7.84904 6.2999 8.45916 4.9299 7.629L4.63992 7.44896C4.28992 7.23892 3.70989 7.23892 3.35989 7.44896L3.06992 7.629C1.68991 8.45916 0.859908 7.84904 1.21991 6.26873L1.2699 6.02868C1.3499 5.65861 1.20991 5.12851 0.939909 4.85846L0.539915 4.45838C-0.390086 3.50819 -0.0900928 2.558 1.21991 2.33796L1.6499 2.26795C1.9999 2.20794 2.39991 1.90788 2.55991 1.58781L2.87991 0.937684C3.49991 -0.312561 4.4999 -0.312561 5.1199 0.937684Z",
      fill: "#FF1E3B"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Star);

/***/ }),

/***/ "./src/components/layout/AppLayout.tsx":
/*!*********************************************!*\
  !*** ./src/components/layout/AppLayout.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/footer/Footer */ "./src/components/footer/Footer.tsx");
/* harmony import */ var _component_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/header/Header */ "./src/components/header/Header.tsx");
/* harmony import */ var _component_sticky_Sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/sticky/Sticky */ "./src/components/sticky/Sticky.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\layout\\AppLayout.tsx";






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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Vay online"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_sticky_Sticky__WEBPACK_IMPORTED_MODULE_3__.default, {
      fixedOn: 0,
      onSticky: toggleIsFixed,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_header_Header__WEBPACK_IMPORTED_MODULE_2__.default, {
        isFixed: isFixed
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), navbar && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "section-after-sticky",
      children: navbar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 18
    }, undefined), !navbar ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "section-after-sticky",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 18
    }, undefined) : children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_footer_Footer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./src/components/mini-cart/MiniCart.tsx":
/*!***********************************************!*\
  !*** ./src/components/mini-cart/MiniCart.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/BazarAvatar */ "./src/components/BazarAvatar.tsx");
/* harmony import */ var _component_BazarButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/BazarButton */ "./src/components/BazarButton.tsx");
/* harmony import */ var _component_BazarIconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/BazarIconButton */ "./src/components/BazarIconButton.tsx");
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component/FlexBox */ "./src/components/FlexBox.tsx");
/* harmony import */ var _component_icons_ShoppingBagOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @component/icons/ShoppingBagOutlined */ "./src/components/icons/ShoppingBagOutlined.tsx");
/* harmony import */ var _component_LazyImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @component/LazyImage */ "./src/components/LazyImage.tsx");
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @component/Typography */ "./src/components/Typography.tsx");
/* harmony import */ var _context_app_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @context/app/AppContext */ "./src/contexts/app/AppContext.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Remove */ "@material-ui/icons/Remove");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\mini-cart\\MiniCart.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const MiniCart = ({
  toggleSidenav
}) => {
  const {
    palette
  } = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.useTheme)();
  const {
    state,
    dispatch
  } = (0,_context_app_AppContext__WEBPACK_IMPORTED_MODULE_8__.useAppContext)();
  const {
    cartList
  } = state.cart;
  const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)((amount, product) => () => {
    dispatch({
      type: 'CHANGE_CART_AMOUNT',
      payload: _objectSpread(_objectSpread({}, product), {}, {
        qty: amount
      })
    });
  }, []);

  const getTotalPrice = () => {
    return cartList.reduce((accumulator, item) => accumulator + item.price * item.qty, 0) || 0;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
    width: "380px",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
      overflow: "auto",
      height: `calc(100vh - ${!!cartList.length ? '80px - 3.25rem' : '0px'})`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_4__.default, {
        alignItems: "center",
        m: "0px 20px",
        height: "74px",
        color: "secondary.main",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_icons_ShoppingBagOutlined__WEBPACK_IMPORTED_MODULE_5__.default, {
          color: "inherit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
          fontWeight: 600,
          fontSize: "16px",
          ml: 1,
          children: [cartList.length, " item"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), !!!cartList.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_4__.default, {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100% - 74px)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_LazyImage__WEBPACK_IMPORTED_MODULE_6__.default, {
          src: "/assets/images/logos/shopping-bag.svg",
          width: 90,
          height: 100
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
          component: "p",
          mt: 2,
          color: "grey.600",
          textAlign: "center",
          maxWidth: "200px",
          children: "Your shopping bag is empty. Start shopping"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, undefined), cartList.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_4__.default, {
        alignItems: "center",
        py: 2,
        px: 2.5,
        borderBottom: `1px solid ${palette.divider}`,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_4__.default, {
          alignItems: "center",
          flexDirection: "column",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarButton__WEBPACK_IMPORTED_MODULE_2__.default, {
            variant: "outlined",
            color: "primary",
            sx: {
              height: '32px',
              width: '32px',
              borderRadius: '300px'
            },
            onClick: handleCartAmountChange(item.qty + 1, item),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default()), {
              fontSize: "small"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
            fontWeight: 600,
            fontSize: "15px",
            my: "3px",
            children: item.qty
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarButton__WEBPACK_IMPORTED_MODULE_2__.default, {
            variant: "outlined",
            color: "primary",
            sx: {
              height: '32px',
              width: '32px',
              borderRadius: '300px'
            },
            onClick: handleCartAmountChange(item.qty - 1, item),
            disabled: item.qty === 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_13___default()), {
              fontSize: "small"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
          href: `/product/${item.id}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarAvatar__WEBPACK_IMPORTED_MODULE_1__.default, {
              src: item.imgUrl || '/assets/images/products/iphone-x.png',
              mx: 2,
              alt: item.name,
              height: 76,
              width: 76
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
          flex: "1 1 0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
            href: `/product/${item.id}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Typography__WEBPACK_IMPORTED_MODULE_7__.H5, {
                className: "title",
                fontSize: "14px",
                children: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Typography__WEBPACK_IMPORTED_MODULE_7__.Tiny, {
            color: "grey.600",
            children: ["$", item.price.toFixed(2), " x ", item.qty]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
            fontWeight: 600,
            fontSize: "14px",
            color: "primary.main",
            mt: 0.5,
            children: ["$", (item.qty * item.price).toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarIconButton__WEBPACK_IMPORTED_MODULE_3__.default, {
          ml: 2.5,
          size: "small",
          onClick: handleCartAmountChange(0, item),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12___default()), {
            fontSize: "small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }, undefined)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), !!cartList.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
      p: 2.5,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
        href: "/checkout",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarButton__WEBPACK_IMPORTED_MODULE_2__.default, {
          variant: "contained",
          color: "primary",
          sx: {
            mb: '0.75rem',
            height: '40px'
          },
          fullWidth: true,
          onClick: toggleSidenav,
          children: ["Checkout Now ($", getTotalPrice().toFixed(2), ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
        href: "/cart",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarButton__WEBPACK_IMPORTED_MODULE_2__.default, {
          color: "primary",
          variant: "outlined",
          sx: {
            height: 40
          },
          fullWidth: true,
          onClick: toggleSidenav,
          children: "View Cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, undefined);
};

MiniCart.defaultProps = {
  toggleSidenav: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (MiniCart);

/***/ }),

/***/ "./src/components/search-box/SearchBox.tsx":
/*!*************************************************!*\
  !*** ./src/components/search-box/SearchBox.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchOutlinedIcon": function() { return /* binding */ SearchOutlinedIcon; },
/* harmony export */   "SearchResultCard": function() { return /* binding */ SearchResultCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/BazarMenu */ "./src/components/BazarMenu.tsx");
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/FlexBox */ "./src/components/FlexBox.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/utils */ "@material-ui/core/utils");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDownOutlined */ "@material-ui/icons/KeyboardArrowDownOutlined");
/* harmony import */ var _material_ui_icons_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/SearchOutlined */ "@material-ui/icons/SearchOutlined");
/* harmony import */ var _material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\search-box\\SearchBox.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // styled components
// also used in the GrocerySearchBox component

const SearchOutlinedIcon = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.styled)((_material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_8___default()))(({
  theme
}) => ({
  color: theme.palette.grey[600],
  marginRight: 6
})); // also used in the GrocerySearchBox component

const SearchResultCard = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Card)(() => ({
  position: 'absolute',
  top: '100%',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  width: '100%',
  zIndex: 99
}));
const DropDownHandler = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.styled)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_2__.default)(({
  theme
}) => ({
  borderTopRightRadius: 300,
  borderBottomRightRadius: 300,
  whiteSpace: 'pre',
  borderLeft: `1px solid ${theme.palette.text.disabled}`,
  [theme.breakpoints.down('xs')]: {
    display: 'none'
  }
}));

const SearchBox = () => {
  const {
    0: category,
    1: setCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)('Tất cả');
  const {
    0: resultList,
    1: setResultList
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
  const parentRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();

  const handleCategoryChange = cat => () => {
    setCategory(cat);
  };

  const search = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__.debounce)(e => {
    var _e$target;

    const value = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value;
    if (!value) setResultList([]);else setResultList(dummySearchResult);
  }, 200);
  const hanldeSearch = (0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)(event => {
    event.persist();
    search(event);
  }, []);

  const handleDocumentClick = () => {
    setResultList([]);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const categoryDropdown = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarMenu__WEBPACK_IMPORTED_MODULE_1__.default, {
    direction: "left",
    handler: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DropDownHandler, {
      alignItems: "center",
      bgcolor: "grey.100",
      height: "100%",
      px: 3,
      color: "grey.700",
      component: (_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default()),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
        mr: 0.5,
        children: category
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {
        fontSize: "small",
        color: "inherit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, undefined),
    children: categories.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
      onClick: handleCategoryChange(item),
      children: item
    }, item, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, _objectSpread(_objectSpread({
    position: "relative",
    flex: "1 1 0",
    maxWidth: "670px",
    mx: "auto"
  }, {
    ref: parentRef
  }), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TextField, {
      variant: "outlined",
      placeholder: "Searching for...",
      fullWidth: true,
      onChange: hanldeSearch,
      InputProps: {
        sx: {
          height: 44,
          borderRadius: 300,
          paddingRight: 0,
          color: 'grey.700',
          overflow: 'hidden'
        },
        endAdornment: categoryDropdown,
        startAdornment: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchOutlinedIcon, {
          fontSize: "small"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 27
        }, undefined)
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined), !!resultList.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchResultCard, {
      elevation: 2,
      children: resultList.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
        href: `/product/search/${item}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
          children: item
        }, item, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 15
        }, undefined)
      }, item, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, undefined);
};

const categories = ['Tất cả', 'Bất động sản', 'Tiêu dùng', 'Ô tô', 'Thẻ tín dụng', 'Xe máy', 'Tín chấp'];
const dummySearchResult = ['Cho thuê nhà Nguyễn Thị Định, Kinh doanh, ô tô tránh, Dt 42m, 5 tầng, Giá 25 triệu.', 'Cho thuê nhà ngõ oto tránh nhau đường Nguyễn Thị Định, 90m2*7 tầng, thang máy', 'Cho thuê nhà Nguyễn Thị Định, Quận Cầu Giấy phù hợp KD, VP, hộ GĐ 60m2.'];
/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./src/components/sessions/Login.tsx":
/*!*******************************************!*\
  !*** ./src/components/sessions/Login.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/BazarButton */ "./src/components/BazarButton.tsx");
/* harmony import */ var _component_BazarImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/BazarImage */ "./src/components/BazarImage.tsx");
/* harmony import */ var _component_BazarTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/BazarTextField */ "./src/components/BazarTextField.tsx");
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component/FlexBox */ "./src/components/FlexBox.tsx");
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @component/Typography */ "./src/components/Typography.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\sessions\\Login.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const fbStyle = {
  background: '#3B5998',
  color: 'white'
};
const googleStyle = {
  background: '#4285F4',
  color: 'white'
};
const StyledCard = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.styled)((_ref) => {
  let {
    children,
    passwordVisibility
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "passwordVisibility"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Card, _objectSpread(_objectSpread({}, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 50
  }, undefined);
})(({
  theme,
  passwordVisibility
}) => ({
  width: 500,
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  '.content': {
    textAlign: 'center',
    padding: '3rem 3.75rem 0px',
    [theme.breakpoints.down('xs')]: {
      padding: '1.5rem 1rem 0px'
    }
  },
  '.passwordEye': {
    color: passwordVisibility ? theme.palette.grey[600] : theme.palette.grey[400]
  },
  '.facebookButton': _objectSpread({
    marginBottom: 10,
    '&:hover': fbStyle
  }, fbStyle),
  '.googleButton': _objectSpread({
    '&:hover': googleStyle
  }, googleStyle),
  '.agreement': {
    marginTop: 12,
    marginBottom: 24
  }
}));

const Login = () => {
  const {
    0: passwordVisibility,
    1: setPasswordVisibility
  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
  const togglePasswordVisibility = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(() => {
    setPasswordVisibility(visible => !visible);
  }, []);

  const handleFormSubmit = async values => {
    router.push('/profile');
    console.log(values);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = (0,formik__WEBPACK_IMPORTED_MODULE_10__.useFormik)({
    onSubmit: handleFormSubmit,
    initialValues,
    validationSchema: formSchema
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledCard, {
    elevation: 3,
    passwordVisibility: passwordVisibility,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: "content",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H3, {
        textAlign: "center",
        mb: 1,
        children: "Welcome To Ecommerce"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.Small, {
        fontWeight: "600",
        fontSize: "12px",
        color: "grey.800",
        textAlign: "center",
        mb: 4.5,
        display: "block",
        children: "Log in with email & password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarTextField__WEBPACK_IMPORTED_MODULE_3__.default, {
        mb: 1.5,
        name: "email",
        label: "Email or Phone Number",
        placeholder: "exmple@mail.com",
        variant: "outlined",
        size: "small",
        type: "email",
        fullWidth: true,
        onBlur: handleBlur,
        onChange: handleChange,
        value: values.email || '',
        error: !!touched.email && !!errors.email,
        helperText: touched.email && errors.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarTextField__WEBPACK_IMPORTED_MODULE_3__.default, {
        mb: 2,
        name: "password",
        label: "Password",
        placeholder: "*********",
        autoComplete: "on",
        type: passwordVisibility ? 'text' : 'password',
        variant: "outlined",
        size: "small",
        fullWidth: true,
        InputProps: {
          endAdornment: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
            size: "small",
            type: "button",
            onClick: togglePasswordVisibility,
            children: passwordVisibility ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default()), {
              className: "passwordEye",
              fontSize: "small"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 19
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default()), {
              className: "passwordEye",
              fontSize: "small"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, undefined)
        },
        onBlur: handleBlur,
        onChange: handleChange,
        value: values.password || '',
        error: !!touched.password && !!errors.password,
        helperText: touched.password && errors.password
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarButton__WEBPACK_IMPORTED_MODULE_1__.default, {
        variant: "contained",
        color: "primary",
        type: "submit",
        fullWidth: true,
        sx: {
          mb: '1.65rem',
          height: 44
        },
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
        mb: 2,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
          width: "200px",
          mx: "auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_4__.default, {
          justifyContent: "center",
          mt: -1.625,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
            color: "grey.600",
            bgcolor: "background.paper",
            px: 2,
            children: "on"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarButton__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "facebookButton",
        size: "medium",
        fullWidth: true,
        sx: {
          mb: '10px',
          height: 44
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarImage__WEBPACK_IMPORTED_MODULE_2__.default, {
          src: "/assets/images/icons/facebook-filled-white.svg",
          alt: "facebook"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
          fontSize: "12px",
          ml: 1,
          children: "Continue with Facebook"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarButton__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "googleButton",
        size: "medium",
        fullWidth: true,
        sx: {
          height: 44
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_BazarImage__WEBPACK_IMPORTED_MODULE_2__.default, {
          src: "/assets/images/icons/google-1.svg",
          alt: "facebook"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
          fontSize: "12px",
          ml: 1,
          children: "Continue with Google"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_4__.default, {
        justifyContent: "center",
        alignItems: "center",
        my: "1.25rem",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
          children: "Don\u2019t have account?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
          href: "/signup",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H6, {
              ml: 1,
              borderBottom: "1px solid",
              borderColor: "grey.900",
              children: "Sign Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_4__.default, {
      justifyContent: "center",
      bgcolor: "grey.200",
      py: 2.5,
      children: ["Forgot your password?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H6, {
            ml: 1,
            borderBottom: "1px solid",
            borderColor: "grey.900",
            children: "Reset It"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, undefined);
};

const initialValues = {
  email: '',
  password: ''
};
const formSchema = yup__WEBPACK_IMPORTED_MODULE_14__.object().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_14__.string().email('invalid email').required('${path} is required'),
  password: yup__WEBPACK_IMPORTED_MODULE_14__.string().required('${path} is required')
});
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/sticky/Sticky.tsx":
/*!******************************************!*\
  !*** ./src/components/sticky/Sticky.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledBox": function() { return /* binding */ StyledBox; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animations_keyframes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animations/keyframes */ "./src/animations/keyframes.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\components\\sticky\\Sticky.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const StyledBox = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((_ref) => {
  let {
    children,
    componentHeight,
    fixedOn,
    fixed
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "componentHeight", "fixedOn", "fixed"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
})(({
  theme,
  componentHeight,
  fixedOn,
  fixed
}) => ({
  '& .hold': {
    position: 'relative',
    zIndex: 2,
    boxShadow: 'none'
  },
  '& .fixed': {
    position: 'fixed',
    right: 0,
    left: 0,
    zIndex: 99,
    boxShadow: theme.shadows[2],
    top: `${fixedOn}px`,
    transition: 'all 350ms ease-in-out',
    animation: `${animations_keyframes__WEBPACK_IMPORTED_MODULE_2__.slideDown} 400ms ${theme.transitions.easing.easeInOut}`
  },
  '& + .section-after-sticky': {
    paddingTop: fixed ? componentHeight : 0
  }
}));

const Sticky = ({
  fixedOn,
  containerRef,
  children,
  notifyPosition,
  notifyOnScroll,
  onSticky
}) => {
  const {
    0: fixed,
    1: setFixed
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: parentHeight,
    1: setParentHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const positionRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
  const scrollListener = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    if (!window) return;
    let distance = window.pageYOffset - positionRef.current;

    if (containerRef !== null && containerRef !== void 0 && containerRef.current) {
      var _containerRef$current;

      let containerDistance = containerRef.current.offsetTop + ((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetHeight) - window.pageYOffset;

      if (notifyPosition && notifyOnScroll) {
        notifyOnScroll(distance <= notifyPosition && containerDistance > notifyPosition);
      }

      return setFixed(distance <= fixedOn && containerDistance > fixedOn);
    }

    if (notifyPosition && notifyOnScroll) {
      notifyOnScroll(distance >= notifyPosition);
    }

    let isFixed = distance >= fixedOn;

    if (positionRef.current === 0) {
      var _elementRef$current;

      isFixed = distance >= fixedOn + ((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.offsetHeight);
    }

    setFixed(isFixed);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!window) return;
    window.addEventListener('scroll', scrollListener);
    window.addEventListener('resize', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('resize', scrollListener);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    var _elementRef$current3;

    if (!positionRef.current) {
      var _elementRef$current2;

      positionRef.current = (_elementRef$current2 = elementRef.current) === null || _elementRef$current2 === void 0 ? void 0 : _elementRef$current2.offsetTop;
    }

    setParentHeight(((_elementRef$current3 = elementRef.current) === null || _elementRef$current3 === void 0 ? void 0 : _elementRef$current3.offsetHeight) || 0);
  }, [elementRef.current, children]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (onSticky) onSticky(fixed);
  }, [fixed]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, {
    fixedOn: fixedOn,
    componentHeight: parentHeight,
    fixed: fixed,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()({
        hold: !fixed,
        fixed: fixed
      }),
      ref: elementRef,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Sticky);

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deviceSize": function() { return /* binding */ deviceSize; },
/* harmony export */   "layoutConstant": function() { return /* binding */ layoutConstant; }
/* harmony export */ });
const deviceSize = {
  xs: 425,
  sm: 768,
  md: 1024,
  lg: 1440
};
const layoutConstant = {
  topbarHeight: 40,
  grocerySidenavWidth: 280,
  containerWidth: 1200,
  mobileNavHeight: 64,
  headerHeight: 80,
  mobileHeaderHeight: 64
};

/***/ }),

/***/ "./src/styles/components/CustomSelect.module.scss":
/*!********************************************************!*\
  !*** ./src/styles/components/CustomSelect.module.scss ***!
  \********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "CustomSelect_container__1lrGL",
	"title": "CustomSelect_title__3St8d",
	"placeholder": "CustomSelect_placeholder__2P8nr",
	"select": "CustomSelect_select__3H5U9"
};


/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXphci8uL3NyYy9hbmltYXRpb25zL2tleWZyYW1lcy50c3giLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvY29tcG9uZW50cy9CYXphckF2YXRhci50c3giLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvY29tcG9uZW50cy9CYXphckJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvY29tcG9uZW50cy9CYXphckNhcmQudHN4Iiwid2VicGFjazovL2JhemFyLy4vc3JjL2NvbXBvbmVudHMvQmF6YXJJY29uQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9iYXphci8uL3NyYy9jb21wb25lbnRzL0JhemFySW1hZ2UudHN4Iiwid2VicGFjazovL2JhemFyLy4vc3JjL2NvbXBvbmVudHMvQmF6YXJNZW51LnRzeCIsIndlYnBhY2s6Ly9iYXphci8uL3NyYy9jb21wb25lbnRzL0JhemFyVGV4dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly9iYXphci8uL3NyYy9jb21wb25lbnRzL0ZsZXhCb3gudHN4Iiwid2VicGFjazovL2JhemFyLy4vc3JjL2NvbXBvbmVudHMvTGF6eUltYWdlLnRzeCIsIndlYnBhY2s6Ly9iYXphci8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkudHN4Iiwid2VicGFjazovL2JhemFyLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0JyZWFkY3VtLnRzeCIsIndlYnBhY2s6Ly9iYXphci8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250YWN0LnRzeCIsIndlYnBhY2s6Ly9iYXphci8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9UZXh0RmllbGRDdXN0b20udHN4Iiwid2VicGFjazovL2JhemFyLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9iYXphci8uL3NyYy9jb21wb25lbnRzL2ljb25zL1Nob3BwaW5nQmFnT3V0bGluZWQudHN4Iiwid2VicGFjazovL2JhemFyLy4vc3JjL2NvbXBvbmVudHMvaWNvbnMvU3Rhci50c3giLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvQXBwTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9iYXphci8uL3NyYy9jb21wb25lbnRzL21pbmktY2FydC9NaW5pQ2FydC50c3giLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L1NlYXJjaEJveC50c3giLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvY29tcG9uZW50cy9zZXNzaW9ucy9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvY29tcG9uZW50cy9zdGlja3kvU3RpY2t5LnRzeCIsIndlYnBhY2s6Ly9iYXphci8uL3NyYy91dGlscy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2JhemFyL2lnbm9yZWR8QzpcXFVzZXJzXFx2b3RyaVxcV29ya3NwYWNlc1xcbG95YWx0eVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbInNsaWRlRG93biIsImtleWZyYW1lcyIsIkJhemFyQXZhdGFyIiwic3R5bGVkIiwiQXZhdGFyIiwiY29tcG9zZSIsInNwYWNpbmciLCJ0eXBvZ3JhcGh5Iiwic2l6aW5nIiwiYm9yZGVyIiwiQmF6YXJCdXR0b24iLCJCdXR0b24iLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIkJhemFyQ2FyZCIsImhvdmVyRWZmZWN0IiwiY2hpbGRyZW4iLCJyZXN0IiwidGhlbWUiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZGVmYXVsdFByb3BzIiwiQmF6YXJJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsInBvc2l0aW9ucyIsImJnY29sb3IiLCJCYXphckltYWdlIiwiZGlzcGxheSIsIkJhemFyTWVudSIsIm9wZW4iLCJoYW5kbGVyIiwiZGlyZWN0aW9uIiwic2hvdWxkQ2xvc2VPbkl0ZW1DbGljayIsInByb3BzIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIlJlYWN0IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU1lbnVJdGVtQ2xpY2siLCJjdXN0b21PbkNsaWNrIiwiY2xvbmVFbGVtZW50Iiwib25DbGljayIsInVuZGVmaW5lZCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkNoaWxkcmVuIiwiY2hpbGQiLCJCYXphclRleHRGaWVsZCIsImxhYmVsIiwiSW5wdXRQcm9wcyIsImJveFByb3BzIiwidGV4dEZpZWxkUHJvcHMiLCJrZXkiLCJzcGFjZVByb3BMaXN0IiwiaW5jbHVkZXMiLCJzdHlsZSIsImhlaWdodCIsIkZsZXhCb3giLCJMYXp5SW1hZ2UiLCJTdHlsZWRCb3giLCJCb3giLCJ0ZXh0VHJhbnNmb3JtU3R5bGUiLCJlbGxpcHNpcyIsInRleHRUcmFuc2Zvcm0iLCJ3aGl0ZVNwYWNlIiwidGV4dE92ZXJmbG93IiwiSDEiLCJjbGFzc05hbWUiLCJjbHN4IiwiSDIiLCJIMyIsIkg0IiwiSDUiLCJINiIsIlBhcmFncmFwaCIsIlNtYWxsIiwiU3BhbiIsIlRpbnkiLCJCcmVhZGNydW1ic0N1c3RvbSIsImJyZWFkY3J1bWJzIiwibWFwIiwiaXRlbSIsImlkeCIsImlzQWN0aXZlIiwiZm9udFdlaWdodCIsImxpbmsiLCJDb250YWN0IiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJUZXh0RmllbGRTdHlsZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJUZXh0RmllbGRDdXN0b20iLCJyZXF1aXJlZCIsImVuZEFkb3IiLCJTdHlsZSIsImVuZEFkb3JubWVudCIsIkZvb3RlciIsIkhlYWRlcldyYXBwZXIiLCJwb3NpdGlvbiIsInpJbmRleCIsImxheW91dENvbnN0YW50IiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJwYXBlciIsImJyZWFrcG9pbnRzIiwiZG93biIsIm1vYmlsZUhlYWRlckhlaWdodCIsIkhlYWRlciIsInNpZGVuYXZPcGVuIiwic2V0U2lkZW5hdk9wZW4iLCJ1c2VTdGF0ZSIsImRpYWxvZ09wZW4iLCJzZXREaWFsb2dPcGVuIiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJ0b2dnbGVTaWRlbmF2IiwidG9nZ2xlRGlhbG9nIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwieHMiLCJtZCIsIlNob3BwaW5nQmFnT3V0bGluZWQiLCJTdGFyIiwid2lkdGgiLCJtYXJnaW4iLCJBcHBMYXlvdXQiLCJuYXZiYXIiLCJpc0ZpeGVkIiwic2V0SXNGaXhlZCIsInRvZ2dsZUlzRml4ZWQiLCJ1c2VDYWxsYmFjayIsImZpeGVkIiwiTWluaUNhcnQiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQXBwQ29udGV4dCIsImNhcnRMaXN0IiwiY2FydCIsImhhbmRsZUNhcnRBbW91bnRDaGFuZ2UiLCJhbW91bnQiLCJwcm9kdWN0IiwidHlwZSIsInBheWxvYWQiLCJxdHkiLCJnZXRUb3RhbFByaWNlIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJwcmljZSIsImxlbmd0aCIsImRpdmlkZXIiLCJpZCIsImltZ1VybCIsIm5hbWUiLCJ0b0ZpeGVkIiwibWIiLCJTZWFyY2hPdXRsaW5lZEljb24iLCJTZWFyY2hPdXRsaW5lZCIsImNvbG9yIiwiZ3JleSIsIm1hcmdpblJpZ2h0IiwiU2VhcmNoUmVzdWx0Q2FyZCIsIkNhcmQiLCJ0b3AiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIkRyb3BEb3duSGFuZGxlciIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJMZWZ0IiwidGV4dCIsImRpc2FibGVkIiwiU2VhcmNoQm94IiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInJlc3VsdExpc3QiLCJzZXRSZXN1bHRMaXN0IiwicGFyZW50UmVmIiwidXNlUmVmIiwiaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UiLCJjYXQiLCJzZWFyY2giLCJkZWJvdW5jZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImR1bW15U2VhcmNoUmVzdWx0IiwiaGFubGRlU2VhcmNoIiwicGVyc2lzdCIsImhhbmRsZURvY3VtZW50Q2xpY2siLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhdGVnb3J5RHJvcGRvd24iLCJUb3VjaFJpcHBsZSIsImNhdGVnb3JpZXMiLCJyZWYiLCJzeCIsInBhZGRpbmdSaWdodCIsInN0YXJ0QWRvcm5tZW50IiwiZmJTdHlsZSIsImdvb2dsZVN0eWxlIiwiU3R5bGVkQ2FyZCIsInBhc3N3b3JkVmlzaWJpbGl0eSIsInRleHRBbGlnbiIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJMb2dpbiIsInNldFBhc3N3b3JkVmlzaWJpbGl0eSIsInJvdXRlciIsInVzZVJvdXRlciIsInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsInZpc2libGUiLCJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaGFuZGxlQmx1ciIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInVzZUZvcm1payIsIm9uU3VibWl0IiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJmb3JtU2NoZW1hIiwiZW1haWwiLCJwYXNzd29yZCIsInl1cCIsInNoYXBlIiwiY29tcG9uZW50SGVpZ2h0IiwiZml4ZWRPbiIsInJpZ2h0IiwibGVmdCIsImFuaW1hdGlvbiIsInRyYW5zaXRpb25zIiwiZWFzaW5nIiwiZWFzZUluT3V0IiwiU3RpY2t5IiwiY29udGFpbmVyUmVmIiwibm90aWZ5UG9zaXRpb24iLCJub3RpZnlPblNjcm9sbCIsIm9uU3RpY2t5Iiwic2V0Rml4ZWQiLCJwYXJlbnRIZWlnaHQiLCJzZXRQYXJlbnRIZWlnaHQiLCJlbGVtZW50UmVmIiwicG9zaXRpb25SZWYiLCJzY3JvbGxMaXN0ZW5lciIsImRpc3RhbmNlIiwicGFnZVlPZmZzZXQiLCJjdXJyZW50IiwiY29udGFpbmVyRGlzdGFuY2UiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJob2xkIiwiZGV2aWNlU2l6ZSIsInNtIiwibGciLCJ0b3BiYXJIZWlnaHQiLCJncm9jZXJ5U2lkZW5hdldpZHRoIiwiY29udGFpbmVyV2lkdGgiLCJtb2JpbGVOYXZIZWlnaHQiLCJoZWFkZXJIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLGlFQUFVO0FBQ25DO0FBQ0E7QUFDQSxDQUhPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBU0EsTUFBTUMsV0FBVyxHQUFHQywyREFBTSxDQUFDQyxxREFBRCxDQUFOLENBQWVDLDREQUFPLENBQUNDLHdEQUFELEVBQVVDLDJEQUFWLEVBQXNCQyx1REFBdEIsRUFBOEJDLHVEQUE5QixDQUF0QixDQUFwQjtBQUVBLCtEQUFlUCxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUEsTUFBTVEsV0FBVyxHQUFHUCxnRUFBTSxDQUFDUSxxREFBRCxDQUFOLENBQWU7QUFDakNDLFVBQVEsRUFBRSxDQUR1QjtBQUVqQ0MsV0FBUyxFQUFFO0FBRnNCLENBQWYsQ0FBcEI7QUFLQSwrREFBZUgsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFNQSxNQUFNSSxTQUFTLEdBQUdYLGdFQUFNLENBQ3RCO0FBQUEsTUFBQztBQUFFWSxlQUFGO0FBQWVDO0FBQWYsR0FBRDtBQUFBLE1BQTZCQyxJQUE3Qjs7QUFBQSxzQkFBd0MsOERBQUMsbURBQUQsa0NBQVVBLElBQVY7QUFB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V0FBTyxFQUFFdUcsT0FBcEI7QUFBNkIsbUJBQWUsRUFBRWEsWUFBOUM7QUFBNEQsU0FBSyxFQUFFcEgsS0FBbkU7QUFBQSwyQkFDRTtBQUNFLGVBQVMsRUFBRWhFLDJDQUFJLENBQUM7QUFDZCtMLFlBQUksRUFBRSxDQUFDL0gsS0FETztBQUVkQSxhQUFLLEVBQUVBO0FBRk8sT0FBRCxDQURqQjtBQUtFLFNBQUcsRUFBRXNILFVBTFA7QUFBQSxnQkFPR2hQO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBaEZEOztBQWtGQSwrREFBZXdPLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQy9ITyxNQUFNa0IsVUFBVSxHQUFHO0FBQ3hCNUksSUFBRSxFQUFFLEdBRG9CO0FBRXhCNkksSUFBRSxFQUFFLEdBRm9CO0FBR3hCNUksSUFBRSxFQUFFLElBSG9CO0FBSXhCNkksSUFBRSxFQUFFO0FBSm9CLENBQW5CO0FBT0EsTUFBTWxLLGNBQWMsR0FBRztBQUM1Qm1LLGNBQVksRUFBRSxFQURjO0FBRTVCQyxxQkFBbUIsRUFBRSxHQUZPO0FBRzVCQyxnQkFBYyxFQUFFLElBSFk7QUFJNUJDLGlCQUFlLEVBQUUsRUFKVztBQUs1QkMsY0FBWSxFQUFFLEVBTGM7QUFNNUJqSyxvQkFBa0IsRUFBRTtBQU5RLENBQXZCLEM7Ozs7Ozs7Ozs7QUNQUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQSxlIiwiZmlsZSI6InNyY19jb21wb25lbnRzX0JhemFyQ2FyZF90c3gtc3JjX2NvbXBvbmVudHNfY29tbW9uX0JyZWFkY3VtX3RzeC1zcmNfY29tcG9uZW50c19jb21tb25fQ29udGFjdC0yOGQ0NTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVkLWVuZ2luZSdcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZURvd24gPSBrZXlmcmFtZXNgXHJcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpfVxyXG4gICAgdG8ge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwKX1cclxuYFxyXG4iLCJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtcclxuICBib3JkZXIsXHJcbiAgY29tcG9zZSxcclxuICBzaXppbmcsXHJcbiAgc3BhY2luZyxcclxuICBzdHlsZWQsXHJcbiAgdHlwb2dyYXBoeSxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvc3lzdGVtJ1xyXG5cclxuY29uc3QgQmF6YXJBdmF0YXIgPSBzdHlsZWQoQXZhdGFyKShjb21wb3NlKHNwYWNpbmcsIHR5cG9ncmFwaHksIHNpemluZywgYm9yZGVyKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhemFyQXZhdGFyXHJcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCBCYXphckJ1dHRvbiA9IHN0eWxlZChCdXR0b24pKHtcclxuICBtaW5XaWR0aDogMCxcclxuICBtaW5IZWlnaHQ6IDAsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXphckJ1dHRvblxyXG4iLCJpbXBvcnQgeyBDYXJkLCBDYXJkUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG50eXBlIEJhemFyQ2FyZFByb3BzID0ge1xyXG4gIGhvdmVyRWZmZWN0PzogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBCYXphckNhcmQgPSBzdHlsZWQ8UmVhY3QuRkM8QmF6YXJDYXJkUHJvcHMgJiBDYXJkUHJvcHM+PihcclxuICAoeyBob3ZlckVmZmVjdCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gPENhcmQgey4uLnJlc3R9PntjaGlsZHJlbn08L0NhcmQ+XHJcbik8QmF6YXJDYXJkUHJvcHM+KCh7IHRoZW1lLCBob3ZlckVmZmVjdCB9KSA9PiAoe1xyXG4gIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgb3ZlcmZsb3c6ICd1bnNldCcsXHJcbiAgdHJhbnNpdGlvbjogJ2FsbCAyNTBtcyBlYXNlLWluLW91dCcsXHJcbiAgJyY6aG92ZXInOiB7XHJcbiAgICBib3hTaGFkb3c6IGhvdmVyRWZmZWN0ID8gdGhlbWUuc2hhZG93c1szXSA6ICcnLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuQmF6YXJDYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBob3ZlckVmZmVjdDogZmFsc2UsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhemFyQ2FyZFxyXG4iLCJpbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgYmdjb2xvcixcclxuICBib3JkZXIsXHJcbiAgY29tcG9zZSxcclxuICBwb3NpdGlvbnMsXHJcbiAgc2l6aW5nLFxyXG4gIHNwYWNpbmcsXHJcbiAgc3R5bGVkLFxyXG4gIHR5cG9ncmFwaHksXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL3N5c3RlbSdcclxuXHJcbmNvbnN0IEJhemFySWNvbkJ1dHRvbiA9IHN0eWxlZChJY29uQnV0dG9uKShcclxuICBjb21wb3NlKHNwYWNpbmcsIHBvc2l0aW9ucywgdHlwb2dyYXBoeSwgc2l6aW5nLCBib3JkZXIsIGJnY29sb3IpXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhemFySWNvbkJ1dHRvblxyXG4iLCJpbXBvcnQgeyBjb21wb3NlLCBkaXNwbGF5LCBzcGFjaW5nLCBzdHlsZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3lzdGVtJ1xyXG5cclxuY29uc3QgQmF6YXJJbWFnZSA9IHN0eWxlZCgnaW1nJykoY29tcG9zZShzcGFjaW5nLCBkaXNwbGF5KSlcclxuXHJcbkJhemFySW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRpc3BsYXk6ICdibG9jaycsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhemFySW1hZ2VcclxuXHJcbi8vIGNvbXBvc2UsXHJcbi8vIGJvcmRlcnMsXHJcbi8vIGRpc3BsYXksXHJcbi8vIGZsZXhib3gsXHJcbi8vIHBhbGV0dGUsXHJcbi8vIHBvc2l0aW9ucyxcclxuLy8gc2hhZG93cyxcclxuLy8gc2l6aW5nLFxyXG4vLyBzcGFjaW5nLFxyXG4vLyB0eXBvZ3JhcGh5XHJcbiIsImltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnXHJcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCwgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW50ZXJmYWNlIE1lbnVQcm9wcyB7XHJcbiAgb3Blbj86IGJvb2xlYW5cclxuICBkaXJlY3Rpb24/OiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcidcclxuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W11cclxuICBoYW5kbGVyOiBSZWFjdEVsZW1lbnRcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICBzdHlsZT86IENTU1Byb3BlcnRpZXNcclxuICBzaG91bGRDbG9zZU9uSXRlbUNsaWNrPzogYm9vbGVhblxyXG4gIGVsZXZhdGlvbj86IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBCYXphck1lbnU6IFJlYWN0LkZDPE1lbnVQcm9wcz4gPSAoe1xyXG4gIG9wZW4sXHJcbiAgaGFuZGxlcixcclxuICBkaXJlY3Rpb24sXHJcbiAgc2hvdWxkQ2xvc2VPbkl0ZW1DbGljayxcclxuICBjaGlsZHJlbixcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUl0ZW1DbGljayA9IChjdXN0b21PbkNsaWNrOiBhbnkpID0+ICgpID0+IHtcclxuICAgIGlmIChjdXN0b21PbkNsaWNrKSBjdXN0b21PbkNsaWNrKClcclxuICAgIGlmIChzaG91bGRDbG9zZU9uSXRlbUNsaWNrKSBoYW5kbGVDbG9zZSgpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICB7aGFuZGxlciAmJlxyXG4gICAgICAgIGNsb25lRWxlbWVudChoYW5kbGVyLCB7XHJcbiAgICAgICAgICBvbkNsaWNrOiBoYW5kbGVyLnByb3BzLm9uQ2xpY2sgfHwgaGFuZGxlQ2xpY2ssXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgIG9wZW49e29wZW4gIT09IHVuZGVmaW5lZCA/IG9wZW4gOiAhIWFuY2hvckVsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICAgICAgaG9yaXpvbnRhbDogZGlyZWN0aW9uIHx8ICdsZWZ0JyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgaG9yaXpvbnRhbDogZGlyZWN0aW9uIHx8ICdsZWZ0JyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogUmVhY3RFbGVtZW50KSA9PlxyXG4gICAgICAgICAgY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgICAgICAgIG9uQ2xpY2s6IGhhbmRsZU1lbnVJdGVtQ2xpY2soY2hpbGQucHJvcHMub25DbGljayksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5CYXphck1lbnUuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRpcmVjdGlvbjogJ2xlZnQnLFxyXG4gIHNob3VsZENsb3NlT25JdGVtQ2xpY2s6IHRydWUsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhemFyTWVudVxyXG4iLCJpbXBvcnQgeyBCb3gsIEJveFByb3BzLCBUZXh0RmllbGQsIFRleHRGaWVsZFByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IFNtYWxsIH0gZnJvbSAnLi9UeXBvZ3JhcGh5J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXphclRleHRGaWVsZFByb3BzIHt9XHJcblxyXG5jb25zdCBCYXphclRleHRGaWVsZDogUmVhY3QuRkM8VGV4dEZpZWxkUHJvcHMgJiBCb3hQcm9wcz4gPSAoe1xyXG4gIGxhYmVsLFxyXG4gIElucHV0UHJvcHMsXHJcbiAgLi4ucHJvcHNcclxufTogYW55KSA9PiB7XHJcbiAgY29uc3QgYm94UHJvcHM6IGFueSA9IHt9XHJcbiAgY29uc3QgdGV4dEZpZWxkUHJvcHM6IGFueSA9IHt9XHJcblxyXG4gIGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XHJcbiAgICBpZiAoc3BhY2VQcm9wTGlzdC5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgIGJveFByb3BzW2tleV0gPSBwcm9wc1trZXldXHJcbiAgICB9IGVsc2UgdGV4dEZpZWxkUHJvcHNba2V5XSA9IHByb3BzW2tleV1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHsuLi5ib3hQcm9wc30+XHJcbiAgICAgIHtsYWJlbCAmJiAoXHJcbiAgICAgICAgPFNtYWxsXHJcbiAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgbWI9ezF9XHJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCI2MDBcIlxyXG4gICAgICAgICAgY29sb3I9XCJncmV5LjcwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgIDwvU21hbGw+XHJcbiAgICAgICl9XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAuLi5JbnB1dFByb3BzLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgLi4uSW5wdXRQcm9wcz8uc3R5bGUsXHJcbiAgICAgICAgICAgIGhlaWdodDogNDQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgey4uLnRleHRGaWVsZFByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBzcGFjZVByb3BMaXN0ID0gW1xyXG4gICdtJyxcclxuICAnbXQnLFxyXG4gICdtcicsXHJcbiAgJ21iJyxcclxuICAnbWwnLFxyXG4gICdteCcsXHJcbiAgJ215JyxcclxuICAncCcsXHJcbiAgJ3B0JyxcclxuICAncHInLFxyXG4gICdwYicsXHJcbiAgJ3BsJyxcclxuICAncHgnLFxyXG4gICdweScsXHJcbiAgJ21hcmdpbicsXHJcbiAgJ21hcmdpblRvcCcsXHJcbiAgJ21hcmdpblJpZ2h0JyxcclxuICAnbWFyZ2luQm90dG9tJyxcclxuICAnbWFyZ2luTGVmdCcsXHJcbiAgJ21hcmdpblgnLFxyXG4gICdtYXJnaW5ZJyxcclxuICAncGFkZGluZycsXHJcbiAgJ3BhZGRpbmdUb3AnLFxyXG4gICdwYWRkaW5nUmlnaHQnLFxyXG4gICdwYWRkaW5nQm90dG9tJyxcclxuICAncGFkZGluZ0xlZnQnLFxyXG4gICdwYWRkaW5nWCcsXHJcbiAgJ3BhZGRpbmdZJyxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmF6YXJUZXh0RmllbGRcclxuIiwiaW1wb3J0IHsgQm94LCBCb3hQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zeXN0ZW0nXHJcblxyXG5jb25zdCBGbGV4Qm94OiBSZWFjdC5GQzxCb3hQcm9wcz4gPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxCb3ggZGlzcGxheT1cImZsZXhcIiB7Li4ucHJvcHN9PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvQm94PlxyXG4pXHJcblxyXG5GbGV4Qm94LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsZXhCb3hcclxuIiwiaW1wb3J0IHtcclxuICBiZ2NvbG9yLFxyXG4gIGJvcmRlclJhZGl1cyxcclxuICBCb3JkZXJzUHJvcHMsXHJcbiAgY29tcG9zZSxcclxuICBzcGFjaW5nLFxyXG4gIFNwYWNpbmdQcm9wcyxcclxuICBzdHlsZWQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL3N5c3RlbSdcclxuaW1wb3J0IE5leHRJbWFnZSwgeyBJbWFnZVByb3BzIH0gZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTGF6eUltYWdlID0gc3R5bGVkPFJlYWN0LkZDPEltYWdlUHJvcHMgJiBCb3JkZXJzUHJvcHMgJiBTcGFjaW5nUHJvcHM+PihcclxuICAoeyBib3JkZXJSYWRpdXMsIC4uLnJlc3QgfSkgPT4gPE5leHRJbWFnZSB7Li4ucmVzdH0gLz5cclxuKShjb21wb3NlKHNwYWNpbmcsIGJvcmRlclJhZGl1cywgYmdjb2xvcikpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXp5SW1hZ2VcclxuIiwiaW1wb3J0IHsgQm94LCBCb3hQcm9wcywgc3R5bGVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN0eWxlZEJveCA9IHN0eWxlZChCb3gpPHtcclxuICB0ZXh0VHJhbnNmb3JtU3R5bGU/OiBhbnlcclxuICBlbGxpcHNpcz86IGJvb2xlYW5cclxufT4oKHsgdGV4dFRyYW5zZm9ybVN0eWxlLCBlbGxpcHNpcyB9KSA9PiAoe1xyXG4gIHRleHRUcmFuc2Zvcm06IHRleHRUcmFuc2Zvcm1TdHlsZSB8fCAnbm9uZScsXHJcbiAgd2hpdGVTcGFjZTogZWxsaXBzaXMgPyAnbm93cmFwJyA6ICdub3JtYWwnLFxyXG4gIG92ZXJmbG93OiBlbGxpcHNpcyA/ICdoaWRkZW4nIDogJycsXHJcbiAgdGV4dE92ZXJmbG93OiBlbGxpcHNpcyA/ICdlbGxpcHNpcycgOiAnJyxcclxufSkpXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGVsbGlwc2lzPzogYm9vbGVhblxyXG4gIHRleHRUcmFuc2Zvcm0/OlxyXG4gICAgfCAnbm9uZSdcclxuICAgIHwgJ2NhcGl0YWxpemUnXHJcbiAgICB8ICd1cHBlcmNhc2UnXHJcbiAgICB8ICdsb3dlcmNhc2UnXHJcbiAgICB8ICdpbml0aWFsJ1xyXG4gICAgfCAnaW5oZXJpdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEgxOiBSZWFjdC5GQzxCb3hQcm9wcyAmIFByb3BzPiA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIGVsbGlwc2lzLFxyXG4gIHRleHRUcmFuc2Zvcm0sXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQm94XHJcbiAgICAgIHRleHRUcmFuc2Zvcm1TdHlsZT17dGV4dFRyYW5zZm9ybX1cclxuICAgICAgZWxsaXBzaXM9e2VsbGlwc2lzfVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goe1xyXG4gICAgICAgIFtjbGFzc05hbWUgfHwgJyddOiB0cnVlLFxyXG4gICAgICB9KX1cclxuICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICBtYj17MH1cclxuICAgICAgbXQ9ezB9XHJcbiAgICAgIGZvbnRTaXplPVwiMzBweFwiXHJcbiAgICAgIGZvbnRXZWlnaHQ9XCI1MDBcIlxyXG4gICAgICBsaW5lSGVpZ2h0PVwiMS41XCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1N0eWxlZEJveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIMjogUmVhY3QuRkM8Qm94UHJvcHMgJiBQcm9wcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZSxcclxuICBlbGxpcHNpcyxcclxuICB0ZXh0VHJhbnNmb3JtLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEJveFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtU3R5bGU9e3RleHRUcmFuc2Zvcm19XHJcbiAgICAgIGVsbGlwc2lzPXtlbGxpcHNpc31cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KHtcclxuICAgICAgICBbY2xhc3NOYW1lIHx8ICcnXTogdHJ1ZSxcclxuICAgICAgfSl9XHJcbiAgICAgIGNvbXBvbmVudD1cImgyXCJcclxuICAgICAgbWI9ezB9XHJcbiAgICAgIG10PXswfVxyXG4gICAgICBmb250U2l6ZT1cIjI1cHhcIlxyXG4gICAgICBmb250V2VpZ2h0PVwiNTAwXCJcclxuICAgICAgbGluZUhlaWdodD1cIjEuNVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRCb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSDM6IFJlYWN0LkZDPEJveFByb3BzICYgUHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUsXHJcbiAgZWxsaXBzaXMsXHJcbiAgdGV4dFRyYW5zZm9ybSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRCb3hcclxuICAgICAgdGV4dFRyYW5zZm9ybVN0eWxlPXt0ZXh0VHJhbnNmb3JtfVxyXG4gICAgICBlbGxpcHNpcz17ZWxsaXBzaXN9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCh7XHJcbiAgICAgICAgW2NsYXNzTmFtZSB8fCAnJ106IHRydWUsXHJcbiAgICAgIH0pfVxyXG4gICAgICBjb21wb25lbnQ9XCJoM1wiXHJcbiAgICAgIG1iPXswfVxyXG4gICAgICBtdD17MH1cclxuICAgICAgZm9udFNpemU9XCIyMHB4XCJcclxuICAgICAgZm9udFdlaWdodD1cIjUwMFwiXHJcbiAgICAgIGxpbmVIZWlnaHQ9XCIxLjVcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3R5bGVkQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEg0OiBSZWFjdC5GQzxCb3hQcm9wcyAmIFByb3BzPiA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIGVsbGlwc2lzLFxyXG4gIHRleHRUcmFuc2Zvcm0sXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQm94XHJcbiAgICAgIHRleHRUcmFuc2Zvcm1TdHlsZT17dGV4dFRyYW5zZm9ybX1cclxuICAgICAgZWxsaXBzaXM9e2VsbGlwc2lzfVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goe1xyXG4gICAgICAgIFtjbGFzc05hbWUgfHwgJyddOiB0cnVlLFxyXG4gICAgICB9KX1cclxuICAgICAgY29tcG9uZW50PVwiaDRcIlxyXG4gICAgICBtYj17MH1cclxuICAgICAgbXQ9ezB9XHJcbiAgICAgIGZvbnRTaXplPVwiMTdweFwiXHJcbiAgICAgIGZvbnRXZWlnaHQ9XCI1MDBcIlxyXG4gICAgICBsaW5lSGVpZ2h0PVwiMS41XCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1N0eWxlZEJveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBINTogUmVhY3QuRkM8Qm94UHJvcHMgJiBQcm9wcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZSxcclxuICBlbGxpcHNpcyxcclxuICB0ZXh0VHJhbnNmb3JtLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEJveFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtU3R5bGU9e3RleHRUcmFuc2Zvcm19XHJcbiAgICAgIGVsbGlwc2lzPXtlbGxpcHNpc31cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KHtcclxuICAgICAgICBbY2xhc3NOYW1lIHx8ICcnXTogdHJ1ZSxcclxuICAgICAgfSl9XHJcbiAgICAgIGNvbXBvbmVudD1cImg1XCJcclxuICAgICAgbWI9ezB9XHJcbiAgICAgIG10PXswfVxyXG4gICAgICBmb250U2l6ZT1cIjE2cHhcIlxyXG4gICAgICBmb250V2VpZ2h0PVwiNTAwXCJcclxuICAgICAgbGluZUhlaWdodD1cIjEuNVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRCb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSDY6IFJlYWN0LkZDPEJveFByb3BzICYgUHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUsXHJcbiAgZWxsaXBzaXMsXHJcbiAgdGV4dFRyYW5zZm9ybSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRCb3hcclxuICAgICAgdGV4dFRyYW5zZm9ybVN0eWxlPXt0ZXh0VHJhbnNmb3JtfVxyXG4gICAgICBlbGxpcHNpcz17ZWxsaXBzaXN9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCh7XHJcbiAgICAgICAgW2NsYXNzTmFtZSB8fCAnJ106IHRydWUsXHJcbiAgICAgIH0pfVxyXG4gICAgICBjb21wb25lbnQ9XCJoNlwiXHJcbiAgICAgIG1iPXswfVxyXG4gICAgICBtdD17MH1cclxuICAgICAgZm9udFNpemU9XCIxNHB4XCJcclxuICAgICAgZm9udFdlaWdodD1cIjUwMFwiXHJcbiAgICAgIGxpbmVIZWlnaHQ9XCIxLjVcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3R5bGVkQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaDogUmVhY3QuRkM8Qm94UHJvcHMgJiBQcm9wcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZSxcclxuICBlbGxpcHNpcyxcclxuICB0ZXh0VHJhbnNmb3JtLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEJveFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtU3R5bGU9e3RleHRUcmFuc2Zvcm19XHJcbiAgICAgIGVsbGlwc2lzPXtlbGxpcHNpc31cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KHtcclxuICAgICAgICBbY2xhc3NOYW1lIHx8ICcnXTogdHJ1ZSxcclxuICAgICAgfSl9XHJcbiAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICBtYj17MH1cclxuICAgICAgbXQ9ezB9XHJcbiAgICAgIGZvbnRTaXplPVwiMTRweFwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRCb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU21hbGw6IFJlYWN0LkZDPEJveFByb3BzICYgUHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUsXHJcbiAgZWxsaXBzaXMsXHJcbiAgdGV4dFRyYW5zZm9ybSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRCb3hcclxuICAgICAgdGV4dFRyYW5zZm9ybVN0eWxlPXt0ZXh0VHJhbnNmb3JtfVxyXG4gICAgICBlbGxpcHNpcz17ZWxsaXBzaXN9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCh7XHJcbiAgICAgICAgW2NsYXNzTmFtZSB8fCAnJ106IHRydWUsXHJcbiAgICAgIH0pfVxyXG4gICAgICBjb21wb25lbnQ9XCJzbWFsbFwiXHJcbiAgICAgIGZvbnRTaXplPVwiMTJweFwiXHJcbiAgICAgIGxpbmVIZWlnaHQ9XCIxLjVcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3R5bGVkQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNwYW46IFJlYWN0LkZDPEJveFByb3BzICYgUHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUsXHJcbiAgZWxsaXBzaXMsXHJcbiAgdGV4dFRyYW5zZm9ybSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRCb3hcclxuICAgICAgdGV4dFRyYW5zZm9ybVN0eWxlPXt0ZXh0VHJhbnNmb3JtfVxyXG4gICAgICBlbGxpcHNpcz17ZWxsaXBzaXN9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCh7XHJcbiAgICAgICAgW2NsYXNzTmFtZSB8fCAnJ106IHRydWUsXHJcbiAgICAgIH0pfVxyXG4gICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgbGluZUhlaWdodD1cIjEuNVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRCb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGlueTogUmVhY3QuRkM8Qm94UHJvcHMgJiBQcm9wcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZSxcclxuICBlbGxpcHNpcyxcclxuICB0ZXh0VHJhbnNmb3JtLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEJveFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtU3R5bGU9e3RleHRUcmFuc2Zvcm19XHJcbiAgICAgIGVsbGlwc2lzPXtlbGxpcHNpc31cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KHtcclxuICAgICAgICBbY2xhc3NOYW1lIHx8ICcnXTogdHJ1ZSxcclxuICAgICAgfSl9XHJcbiAgICAgIGNvbXBvbmVudD1cInNtYWxsXCJcclxuICAgICAgZm9udFNpemU9XCIxMHB4XCJcclxuICAgICAgbGluZUhlaWdodD1cIjEuNVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRCb3g+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IEJyZWFkY3J1bWJzLCBMaW5rLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgQnJlYWRjcnVtYnNDdXN0b21Qcm9wcyB7XHJcbiAgYnJlYWRjcnVtYnM6IHtcclxuICAgIGxhYmVsOiBzdHJpbmdcclxuICAgIGxpbms/OiBzdHJpbmdcclxuICAgIGlzQWN0aXZlOiBib29sZWFuXHJcbiAgfVtdXHJcbn1cclxuXHJcbmNvbnN0IEJyZWFkY3J1bWJzQ3VzdG9tOiBGQzxCcmVhZGNydW1ic0N1c3RvbVByb3BzPiA9ICh7IGJyZWFkY3J1bWJzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgIHticmVhZGNydW1icy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBrZXk9e2lkeH0gc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19IGNvbG9yPVwidGV4dC5wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtpZHh9IHVuZGVybGluZT1cImhvdmVyXCIgY29sb3I9XCJpbmhlcml0XCIgaHJlZj17aXRlbS5saW5rfT5cclxuICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgfSl9XHJcbiAgICA8L0JyZWFkY3J1bWJzPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYnNDdXN0b21cclxuIiwiaW1wb3J0IEJhemFySW1hZ2UgZnJvbSAnQGNvbXBvbmVudC9CYXphckltYWdlJ1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU3BhbiB9IGZyb20gJy4uL1R5cG9ncmFwaHknXHJcblxyXG5jb25zdCBDb250YWN0OiBGQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBiZ2NvbG9yPVwid2hpdGVcIlxyXG4gICAgICBtaW5IZWlnaHQ9ezIwMH1cclxuICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgcGFkZGluZz1cIjMwcHggMjBweFwiXHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9IGNvbG9yPVwiIzAxNUY5MlwiPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30geHM9ezZ9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8QmF6YXJJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9sb3lhbHR5L2ljb25zL2NhbGwtY2FsbGluZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFNwYW4gZm9udFNpemU9XCIxLjFyZW1cIiBwdD17Mn0gcGw9ezJ9PlxyXG4gICAgICAgICAgICAgICAgSG90bGluZSAyNC83IDxiciAvPiAxODAwIDExOTlcclxuICAgICAgICAgICAgICA8L1NwYW4+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gbGc9ezN9IHhzPXs2fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPEJhemFySW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbG95YWx0eS9pY29ucy9jYXJkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U3BhbiBmb250U2l6ZT1cIjEuMXJlbVwiIHB0PXsyfSBwbD17Mn0+XHJcbiAgICAgICAgICAgICAgICBU4buJIGdpw6EgdsOgIG5nb+G6oWkgdOG7hyA8YnIgLz4gZ2nDoSB2w6BuZ1xyXG4gICAgICAgICAgICAgIDwvU3Bhbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30geHM9ezZ9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8QmF6YXJJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9sb3lhbHR5L2ljb25zL21lc3NhZ2Utc2VhcmNoLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U3BhbiBmb250U2l6ZT1cIjEuMXJlbVwiIHB0PXsyfSBwbD17Mn0+XHJcbiAgICAgICAgICAgICAgICBBVE0gdsOgIMSQ4buLYSDEkWnhu4NtIDxiciAvPiBnaWFvIGThu4tjaFxyXG4gICAgICAgICAgICAgIDwvU3Bhbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30geHM9ezZ9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8QmF6YXJJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9sb3lhbHR5L2ljb25zL21lc3NhZ2UtcXVlc3Rpb24uc3ZnXCJcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8U3BhbiBmb250U2l6ZT1cIjEuMXJlbVwiIHB0PXsyfSBwbD17Mn0+XHJcbiAgICAgICAgICAgICAgICBDw6J1IGjhu49pIDxiciAvPiB0aMaw4budbmcgZ+G6t3BcclxuICAgICAgICAgICAgICA8L1NwYW4+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0XHJcbiIsImltcG9ydCBTdGFyIGZyb20gXCJAY29tcG9uZW50L2ljb25zL1N0YXJcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgT3V0bGluZWRUZXh0RmllbGRQcm9wcyxcclxuICBUZXh0RmllbGQsXHJcbiAgVGV4dEZpZWxkUHJvcHMsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcclxuaW1wb3J0IFN0eWxlIGZyb20gXCJAc3R5bGVzL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUZXh0RmllbGRTdHlsZWQgPSBzdHlsZWQoKHByb3BzOiBUZXh0RmllbGRQcm9wcykgPT4gKFxyXG4gIDxUZXh0RmllbGQgey4uLnByb3BzfSAvPlxyXG4pKSgoKSA9PiAoe1xyXG4gIFwiJiAuTXVpT3V0bGluZWRJbnB1dC1yb290XCI6IHtcclxuICAgIC8vYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkFGQUZBXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIFRleHRGaWVsZEN1c3RvbVByb3BzIGV4dGVuZHMgT3V0bGluZWRUZXh0RmllbGRQcm9wcyB7XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gIGVuZEFkb3I/OiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuY29uc3QgVGV4dEZpZWxkQ3VzdG9tOiBGQzxUZXh0RmllbGRDdXN0b21Qcm9wcz4gPSAoe1xyXG4gIGxhYmVsLFxyXG4gIHJlcXVpcmVkID0gZmFsc2UsXHJcbiAgZW5kQWRvcixcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtsYWJlbCAmJiAoXHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNsYXNzTmFtZT17U3R5bGUudGl0bGV9PlxyXG4gICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7cmVxdWlyZWQgJiYgPFN0YXIgLz59XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8VGV4dEZpZWxkU3R5bGVkXHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgZW5kQWRvcm5tZW50OiA8ZGl2PntlbmRBZG9yfTwvZGl2PixcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRGaWVsZEN1c3RvbTtcclxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBzdHlsZWQgY29tcG9uZW50XHJcblxyXG5jb25zdCBGb290ZXI6IEZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICA8Qm94IGJnY29sb3I9XCIjMDE1RjkyXCIgZGlzcGxheT1cImJsb2NrXCIgaGVpZ2h0PXs1MH0gd2lkdGg9XCIxMDAlXCI+PC9Cb3g+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnQGNvbXBvbmVudC9CYXphckltYWdlJ1xyXG5pbXBvcnQgRmxleEJveCBmcm9tICdAY29tcG9uZW50L0ZsZXhCb3gnXHJcbmltcG9ydCBNaW5pQ2FydCBmcm9tICdAY29tcG9uZW50L21pbmktY2FydC9NaW5pQ2FydCdcclxuaW1wb3J0IExvZ2luIGZyb20gJ0Bjb21wb25lbnQvc2Vzc2lvbnMvTG9naW4nXHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENvbnRhaW5lcixcclxuICBEaWFsb2csXHJcbiAgRHJhd2VyLFxyXG4gIHN0eWxlZCxcclxuICB1c2VNZWRpYVF1ZXJ5LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgbGF5b3V0Q29uc3RhbnQgfSBmcm9tICdAdXRpbHMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuLi9zZWFyY2gtYm94L1NlYXJjaEJveCdcclxuXHJcbi8vIGNvbXBvbmVudCBwcm9wcyBpbnRlcmZhY2VcclxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICBpc0ZpeGVkPzogYm9vbGVhblxyXG59XHJcblxyXG4vLyBzdHlsZWQgY29tcG9uZW50XHJcbmV4cG9ydCBjb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkKEJveCkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB6SW5kZXg6IDEsXHJcbiAgaGVpZ2h0OiBsYXlvdXRDb25zdGFudC5oZWFkZXJIZWlnaHQsXHJcbiAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIHRyYW5zaXRpb246ICdoZWlnaHQgMjUwbXMgZWFzZS1pbi1vdXQnLFxyXG5cclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgIGhlaWdodDogbGF5b3V0Q29uc3RhbnQubW9iaWxlSGVhZGVySGVpZ2h0LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgSGVhZGVyOiBGQzxIZWFkZXJQcm9wcz4gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaWRlbmF2T3Blbiwgc2V0U2lkZW5hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2RpYWxvZ09wZW4sIHNldERpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpKVxyXG5cclxuICBjb25zdCB0b2dnbGVTaWRlbmF2ID0gKCkgPT4gc2V0U2lkZW5hdk9wZW4oIXNpZGVuYXZPcGVuKVxyXG4gIGNvbnN0IHRvZ2dsZURpYWxvZyA9ICgpID0+IHNldERpYWxvZ09wZW4oIWRpYWxvZ09wZW4pXHJcblxyXG4gIC8vIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUFwcENvbnRleHQoKVxyXG4gIC8vIGNvbnN0IHsgY2FydExpc3QgfSA9IHN0YXRlLmNhcnRcclxuXHJcbiAgLy8gY29uc3QgY2FydEhhbmRsZSA9IChcclxuICAvLyAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9e2NhcnRMaXN0Lmxlbmd0aH0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgLy8gICAgIDxCb3hcclxuICAvLyAgICAgICBjb21wb25lbnQ9e0ljb25CdXR0b259XHJcbiAgLy8gICAgICAgbWw9ezIuNX1cclxuICAvLyAgICAgICBiZ2NvbG9yPVwiZ3JleS4yMDBcIlxyXG4gIC8vICAgICAgIHA9ezEuMjV9XHJcbiAgLy8gICAgICAgb25DbGljaz17dG9nZ2xlU2lkZW5hdn1cclxuICAvLyAgICAgPlxyXG4gIC8vICAgICAgIDxTaG9wcGluZ0JhZ091dGxpbmVkIC8+XHJcbiAgLy8gICAgIDwvQm94PlxyXG4gIC8vICAgPC9CYWRnZT5cclxuICAvLyApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyV3JhcHBlciBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lKX0+XHJcbiAgICAgIDxDb250YWluZXJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGbGV4Qm94XHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgIG1yPXsyfVxyXG4gICAgICAgICAgbWluV2lkdGg9XCIxNzBweFwiXHJcbiAgICAgICAgICBzeD17eyBkaXNwbGF5OiB7IHhzOiAnbm9uZScsIG1kOiAnZmxleCcgfSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBoZWlnaHQ9ezQwfSBzcmM9XCIvYXNzZXRzL2xveWFsdHkvbG9nby1mNXMuanBnXCIgYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICB7Lyoge2lzRml4ZWQgJiYgKFxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnlNZW51PlxyXG4gICAgICAgICAgICAgIDxGbGV4Qm94IGNvbG9yPVwiZ3JleS42MDBcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWw9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEJhemFyQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiaW5oZXJpdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxLZXlib2FyZEFycm93RG93biBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJpbmhlcml0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQmF6YXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L0NhdGVnb3J5TWVudT5cclxuICAgICAgICAgICl9ICovfVxyXG4gICAgICAgIDwvRmxleEJveD5cclxuXHJcbiAgICAgICAgPEZsZXhCb3gganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBmbGV4PVwiMSAxIDBcIj5cclxuICAgICAgICAgIDxTZWFyY2hCb3ggLz5cclxuICAgICAgICA8L0ZsZXhCb3g+XHJcblxyXG4gICAgICAgIHsvKiA8RmxleEJveCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3g9e3sgZGlzcGxheTogeyB4czogJ25vbmUnLCBtZDogJ2ZsZXgnIH0gfX0+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17SWNvbkJ1dHRvbn1cclxuICAgICAgICAgICAgbWw9ezJ9XHJcbiAgICAgICAgICAgIHA9ezEuMjV9XHJcbiAgICAgICAgICAgIGJnY29sb3I9XCJncmV5LjIwMFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURpYWxvZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBlcnNvbk91dGxpbmUgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAge2NhcnRIYW5kbGV9XHJcbiAgICAgICAgPC9GbGV4Qm94PiAqL31cclxuXHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgb3Blbj17ZGlhbG9nT3Blbn1cclxuICAgICAgICAgIGZ1bGxXaWR0aD17aXNNb2JpbGV9XHJcbiAgICAgICAgICBzY3JvbGw9XCJib2R5XCJcclxuICAgICAgICAgIG9uQ2xvc2U9e3RvZ2dsZURpYWxvZ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TG9naW4gLz5cclxuICAgICAgICA8L0RpYWxvZz5cclxuXHJcbiAgICAgICAgPERyYXdlciBvcGVuPXtzaWRlbmF2T3Blbn0gYW5jaG9yPVwicmlnaHRcIiBvbkNsb3NlPXt0b2dnbGVTaWRlbmF2fT5cclxuICAgICAgICAgIDxNaW5pQ2FydCAvPlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvSGVhZGVyV3JhcHBlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJpbXBvcnQgeyBTdmdJY29uLCBTdmdJY29uUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU2hvcHBpbmdCYWdPdXRsaW5lZCA9IChwcm9wczogU3ZnSWNvblByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdmdJY29uIHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8cmVjdCBmaWxsPVwibm9uZVwiIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xOCw2aC0yYzAtMi4yMS0xLjc5LTQtNC00UzgsMy43OSw4LDZINkM0LjksNiw0LDYuOSw0LDh2MTJjMCwxLjEsMC45LDIsMiwyaDEyYzEuMSwwLDItMC45LDItMlY4QzIwLDYuOSwxOS4xLDYsMTgsNnogTTEyLDRjMS4xLDAsMiwwLjksMiwyaC00QzEwLDQuOSwxMC45LDQsMTIsNHogTTE4LDIwSDZWOGgydjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMVY4aDR2MmMwLDAuNTUsMC40NSwxLDEsMXMxLTAuNDUsMS0xVjggaDJWMjB6XCIgLz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9TdmdJY29uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdCYWdPdXRsaW5lZFxyXG4iLCJpbXBvcnQgeyBTdmdJY29uLCBTdmdJY29uUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3RhciA9IChwcm9wczogU3ZnSWNvblByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdmdJY29uXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICc4cHgnLCBoZWlnaHQ6ICc4cHgnLCBtYXJnaW46ICc1cHgnIH19XHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgOCA4XCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk01LjExOTkgMC45Mzc2ODRMNS40Mzk5MSAxLjU4NzgxQzUuNTk5OTEgMS45MDc4OCA2LjAwOTkyIDIuMjA3OTQgNi4zNDk5MiAyLjI2Nzk1TDYuNzc5OTEgMi4zMzc5NkM4LjA4OTkxIDIuNTU4IDguMzg5OSAzLjUxODE5IDcuNDU5OSA0LjQ1ODM4TDcuMDU5OTEgNC44NTg0NkM2Ljc4OTkxIDUuMTI4NTEgNi42NDk5MiA1LjY0ODYxIDYuNzI5OTIgNi4wMjg2OEw2Ljc3OTkxIDYuMjY4NzNDNy4xMzk5MSA3Ljg0OTA0IDYuMjk5OSA4LjQ1OTE2IDQuOTI5OSA3LjYyOUw0LjYzOTkyIDcuNDQ4OTZDNC4yODk5MiA3LjIzODkyIDMuNzA5ODkgNy4yMzg5MiAzLjM1OTg5IDcuNDQ4OTZMMy4wNjk5MiA3LjYyOUMxLjY4OTkxIDguNDU5MTYgMC44NTk5MDggNy44NDkwNCAxLjIxOTkxIDYuMjY4NzNMMS4yNjk5IDYuMDI4NjhDMS4zNDk5IDUuNjU4NjEgMS4yMDk5MSA1LjEyODUxIDAuOTM5OTA5IDQuODU4NDZMMC41Mzk5MTUgNC40NTgzOEMtMC4zOTAwODYgMy41MDgxOSAtMC4wOTAwOTI4IDIuNTU4IDEuMjE5OTEgMi4zMzc5NkwxLjY0OTkgMi4yNjc5NUMxLjk5OTkgMi4yMDc5NCAyLjM5OTkxIDEuOTA3ODggMi41NTk5MSAxLjU4NzgxTDIuODc5OTEgMC45Mzc2ODRDMy40OTk5MSAtMC4zMTI1NjEgNC40OTk5IC0wLjMxMjU2MSA1LjExOTkgMC45Mzc2ODRaXCJcclxuICAgICAgICBmaWxsPVwiI0ZGMUUzQlwiXHJcbiAgICAgIC8+XHJcbiAgICA8L1N2Z0ljb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFyXHJcbiIsImltcG9ydCBGb290ZXIgZnJvbSAnQGNvbXBvbmVudC9mb290ZXIvRm9vdGVyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0Bjb21wb25lbnQvaGVhZGVyL0hlYWRlcidcclxuaW1wb3J0IFN0aWNreSBmcm9tICdAY29tcG9uZW50L3N0aWNreS9TdGlja3knXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCBGcmFnbWVudCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG50eXBlIEFwcExheW91dFByb3BzID0ge1xyXG4gIHRpdGxlPzogc3RyaW5nXHJcbiAgbmF2YmFyPzogUmVhY3QuUmVhY3RDaGlsZFxyXG59XHJcblxyXG5jb25zdCBBcHBMYXlvdXQ6IEZDPEFwcExheW91dFByb3BzPiA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgbmF2YmFyLFxyXG4gIC8vdGl0bGUgPSBcIlJlYWN0IE5leHQuanMgRWNvbW1lcmNlIFRlbXBsYXRlXCIsXHJcbn0pID0+IHtcclxuICBjb25zdCBbaXNGaXhlZCwgc2V0SXNGaXhlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlSXNGaXhlZCA9IHVzZUNhbGxiYWNrKChmaXhlZCkgPT4ge1xyXG4gICAgc2V0SXNGaXhlZChmaXhlZClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlZheSBvbmxpbmU8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICB7LyogPFRvcGJhciAvPiAqL31cclxuXHJcbiAgICAgIDxTdGlja3kgZml4ZWRPbj17MH0gb25TdGlja3k9e3RvZ2dsZUlzRml4ZWR9PlxyXG4gICAgICAgIDxIZWFkZXIgaXNGaXhlZD17aXNGaXhlZH0gLz5cclxuICAgICAgPC9TdGlja3k+XHJcblxyXG4gICAgICB7bmF2YmFyICYmIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1hZnRlci1zdGlja3lcIj57bmF2YmFyfTwvZGl2Pn1cclxuICAgICAgeyFuYXZiYXIgPyA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tYWZ0ZXItc3RpY2t5XCI+e2NoaWxkcmVufTwvZGl2PiA6IGNoaWxkcmVufVxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dFxyXG4iLCJpbXBvcnQgQmF6YXJBdmF0YXIgZnJvbSAnQGNvbXBvbmVudC9CYXphckF2YXRhcidcclxuaW1wb3J0IEJhemFyQnV0dG9uIGZyb20gJ0Bjb21wb25lbnQvQmF6YXJCdXR0b24nXHJcbmltcG9ydCBCYXphckljb25CdXR0b24gZnJvbSAnQGNvbXBvbmVudC9CYXphckljb25CdXR0b24nXHJcbmltcG9ydCBGbGV4Qm94IGZyb20gJ0Bjb21wb25lbnQvRmxleEJveCdcclxuaW1wb3J0IFNob3BwaW5nQmFnT3V0bGluZWQgZnJvbSAnQGNvbXBvbmVudC9pY29ucy9TaG9wcGluZ0JhZ091dGxpbmVkJ1xyXG5pbXBvcnQgTGF6eUltYWdlIGZyb20gJ0Bjb21wb25lbnQvTGF6eUltYWdlJ1xyXG5pbXBvcnQgeyBINSwgVGlueSB9IGZyb20gJ0Bjb21wb25lbnQvVHlwb2dyYXBoeSdcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gJ0Bjb250ZXh0L2FwcC9BcHBDb250ZXh0J1xyXG5pbXBvcnQgeyBCb3gsIERpdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBBZGQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCdcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSdcclxuaW1wb3J0IFJlbW92ZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJ1xyXG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJ0ByZWR1Y2VyL2NhcnRSZWR1Y2VyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5cclxudHlwZSBNaW5pQ2FydFByb3BzID0ge1xyXG4gIHRvZ2dsZVNpZGVuYXY/OiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IE1pbmlDYXJ0OiBSZWFjdC5GQzxNaW5pQ2FydFByb3BzPiA9ICh7IHRvZ2dsZVNpZGVuYXYgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcGFsZXR0ZSB9ID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VBcHBDb250ZXh0KClcclxuICBjb25zdCB7IGNhcnRMaXN0IH0gPSBzdGF0ZS5jYXJ0XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhcnRBbW91bnRDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChhbW91bnQsIHByb2R1Y3QpID0+ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdDSEFOR0VfQ0FSVF9BTU9VTlQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICBxdHk6IGFtb3VudCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICBjb25zdCBnZXRUb3RhbFByaWNlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgY2FydExpc3QucmVkdWNlKFxyXG4gICAgICAgIChhY2N1bXVsYXRvciwgaXRlbSkgPT4gYWNjdW11bGF0b3IgKyBpdGVtLnByaWNlICogaXRlbS5xdHksXHJcbiAgICAgICAgMFxyXG4gICAgICApIHx8IDBcclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHdpZHRoPVwiMzgwcHhcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIG92ZXJmbG93PVwiYXV0b1wiXHJcbiAgICAgICAgaGVpZ2h0PXtgY2FsYygxMDB2aCAtICR7ISFjYXJ0TGlzdC5sZW5ndGggPyAnODBweCAtIDMuMjVyZW0nIDogJzBweCd9KWB9XHJcbiAgICAgID5cclxuICAgICAgICA8RmxleEJveFxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICBtPVwiMHB4IDIwcHhcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiNzRweFwiXHJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeS5tYWluXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2hvcHBpbmdCYWdPdXRsaW5lZCBjb2xvcj1cImluaGVyaXRcIiAvPlxyXG4gICAgICAgICAgPEJveCBmb250V2VpZ2h0PXs2MDB9IGZvbnRTaXplPVwiMTZweFwiIG1sPXsxfT5cclxuICAgICAgICAgICAge2NhcnRMaXN0Lmxlbmd0aH0gaXRlbVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4Qm94PlxyXG5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICB7ISEhY2FydExpc3QubGVuZ3RoICYmIChcclxuICAgICAgICAgIDxGbGV4Qm94XHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCJjYWxjKDEwMCUgLSA3NHB4KVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMYXp5SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvcy9zaG9wcGluZy1iYWcuc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD17OTB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICBtdD17Mn1cclxuICAgICAgICAgICAgICBjb2xvcj1cImdyZXkuNjAwXCJcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIG1heFdpZHRoPVwiMjAwcHhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgWW91ciBzaG9wcGluZyBiYWcgaXMgZW1wdHkuIFN0YXJ0IHNob3BwaW5nXHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2NhcnRMaXN0Lm1hcCgoaXRlbTogQ2FydEl0ZW0pID0+IChcclxuICAgICAgICAgIDxGbGV4Qm94XHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBweT17Mn1cclxuICAgICAgICAgICAgcHg9ezIuNX1cclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tPXtgMXB4IHNvbGlkICR7cGFsZXR0ZS5kaXZpZGVyfWB9XHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZsZXhCb3ggYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8QmF6YXJCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzJweCcsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzJweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzMwMHB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYXJ0QW1vdW50Q2hhbmdlKGl0ZW0ucXR5ICsgMSwgaXRlbSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFkZCBmb250U2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhemFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCb3ggZm9udFdlaWdodD17NjAwfSBmb250U2l6ZT1cIjE1cHhcIiBteT1cIjNweFwiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ucXR5fVxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDxCYXphckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczMnB4JyxcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMnB4JyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMzAwcHgnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNhcnRBbW91bnRDaGFuZ2UoaXRlbS5xdHkgLSAxLCBpdGVtKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpdGVtLnF0eSA9PT0gMX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UmVtb3ZlIGZvbnRTaXplPVwic21hbGxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmF6YXJCdXR0b24+XHJcbiAgICAgICAgICAgIDwvRmxleEJveD5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke2l0ZW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8QmF6YXJBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1VybCB8fCAnL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdHMvaXBob25lLXgucG5nJ31cclxuICAgICAgICAgICAgICAgICAgbXg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezc2fVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NzZ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPEJveCBmbGV4PVwiMSAxIDBcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtpdGVtLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxINSBjbGFzc05hbWU9XCJ0aXRsZVwiIGZvbnRTaXplPVwiMTRweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvSDU+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxUaW55IGNvbG9yPVwiZ3JleS42MDBcIj5cclxuICAgICAgICAgICAgICAgICR7aXRlbS5wcmljZS50b0ZpeGVkKDIpfSB4IHtpdGVtLnF0eX1cclxuICAgICAgICAgICAgICA8L1Rpbnk+XHJcbiAgICAgICAgICAgICAgPEJveCBmb250V2VpZ2h0PXs2MDB9IGZvbnRTaXplPVwiMTRweFwiIGNvbG9yPVwicHJpbWFyeS5tYWluXCIgbXQ9ezAuNX0+XHJcbiAgICAgICAgICAgICAgICAkeyhpdGVtLnF0eSAqIGl0ZW0ucHJpY2UpLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPEJhemFySWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIG1sPXsyLjV9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYXJ0QW1vdW50Q2hhbmdlKDAsIGl0ZW0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENsb3NlIGZvbnRTaXplPVwic21hbGxcIiAvPlxyXG4gICAgICAgICAgICA8L0JhemFySWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvRmxleEJveD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICB7ISFjYXJ0TGlzdC5sZW5ndGggJiYgKFxyXG4gICAgICAgIDxCb3ggcD17Mi41fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXRcIj5cclxuICAgICAgICAgICAgPEJhemFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWI6ICcwLjc1cmVtJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU2lkZW5hdn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENoZWNrb3V0IE5vdyAoJHtnZXRUb3RhbFByaWNlKCkudG9GaXhlZCgyKX0pXHJcbiAgICAgICAgICAgIDwvQmF6YXJCdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgPEJhemFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIHN4PXt7IGhlaWdodDogNDAgfX1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaWRlbmF2fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVmlldyBDYXJ0XHJcbiAgICAgICAgICAgIDwvQmF6YXJCdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbk1pbmlDYXJ0LmRlZmF1bHRQcm9wcyA9IHtcclxuICB0b2dnbGVTaWRlbmF2OiAoKSA9PiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWluaUNhcnRcclxuIiwiaW1wb3J0IEJhemFyTWVudSBmcm9tICdAY29tcG9uZW50L0JhemFyTWVudSdcclxuaW1wb3J0IEZsZXhCb3ggZnJvbSAnQGNvbXBvbmVudC9GbGV4Qm94J1xyXG5pbXBvcnQgeyBCb3gsIENhcmQsIE1lbnVJdGVtLCBUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFRvdWNoUmlwcGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnXHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91dGlscydcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duT3V0bGluZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dEb3duT3V0bGluZWQnXHJcbmltcG9ydCBTZWFyY2hPdXRsaW5lZCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoT3V0bGluZWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG4vLyBzdHlsZWQgY29tcG9uZW50c1xyXG4vLyBhbHNvIHVzZWQgaW4gdGhlIEdyb2NlcnlTZWFyY2hCb3ggY29tcG9uZW50XHJcbmV4cG9ydCBjb25zdCBTZWFyY2hPdXRsaW5lZEljb24gPSBzdHlsZWQoU2VhcmNoT3V0bGluZWQpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs2MDBdLFxyXG4gIG1hcmdpblJpZ2h0OiA2LFxyXG59KSlcclxuXHJcbi8vIGFsc28gdXNlZCBpbiB0aGUgR3JvY2VyeVNlYXJjaEJveCBjb21wb25lbnRcclxuZXhwb3J0IGNvbnN0IFNlYXJjaFJlc3VsdENhcmQgPSBzdHlsZWQoQ2FyZCkoKCkgPT4gKHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICcxMDAlJyxcclxuICBwYWRkaW5nVG9wOiAnMC41cmVtJyxcclxuICBwYWRkaW5nQm90dG9tOiAnMC41cmVtJyxcclxuICB3aWR0aDogJzEwMCUnLFxyXG4gIHpJbmRleDogOTksXHJcbn0pKVxyXG5cclxuY29uc3QgRHJvcERvd25IYW5kbGVyID0gc3R5bGVkKEZsZXhCb3gpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDMwMCxcclxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMzAwLFxyXG4gIHdoaXRlU3BhY2U6ICdwcmUnLFxyXG4gIGJvcmRlckxlZnQ6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnRleHQuZGlzYWJsZWR9YCxcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IFNlYXJjaEJveDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnVOG6pXQgY+G6oycpXHJcbiAgY29uc3QgW3Jlc3VsdExpc3QsIHNldFJlc3VsdExpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxyXG4gIGNvbnN0IHBhcmVudFJlZiA9IHVzZVJlZigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2hhbmdlID0gKGNhdDogYW55KSA9PiAoKSA9PiB7XHJcbiAgICBzZXRDYXRlZ29yeShjYXQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWFyY2ggPSBkZWJvdW5jZSgoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldD8udmFsdWVcclxuXHJcbiAgICBpZiAoIXZhbHVlKSBzZXRSZXN1bHRMaXN0KFtdKVxyXG4gICAgZWxzZSBzZXRSZXN1bHRMaXN0KGR1bW15U2VhcmNoUmVzdWx0KVxyXG4gIH0sIDIwMClcclxuXHJcbiAgY29uc3QgaGFubGRlU2VhcmNoID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wZXJzaXN0KClcclxuICAgIHNlYXJjaChldmVudClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlRG9jdW1lbnRDbGljayA9ICgpID0+IHtcclxuICAgIHNldFJlc3VsdExpc3QoW10pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRG9jdW1lbnRDbGljaylcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURvY3VtZW50Q2xpY2spXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5RHJvcGRvd24gPSAoXHJcbiAgICA8QmF6YXJNZW51XHJcbiAgICAgIGRpcmVjdGlvbj1cImxlZnRcIlxyXG4gICAgICBoYW5kbGVyPXtcclxuICAgICAgICA8RHJvcERvd25IYW5kbGVyXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgIGJnY29sb3I9XCJncmV5LjEwMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIHB4PXszfVxyXG4gICAgICAgICAgY29sb3I9XCJncmV5LjcwMFwiXHJcbiAgICAgICAgICBjb21wb25lbnQ9e1RvdWNoUmlwcGxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3ggbXI9ezAuNX0+e2NhdGVnb3J5fTwvQm94PlxyXG4gICAgICAgICAgPEtleWJvYXJkQXJyb3dEb3duT3V0bGluZWQgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiaW5oZXJpdFwiIC8+XHJcbiAgICAgICAgPC9Ecm9wRG93bkhhbmRsZXI+XHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAge2NhdGVnb3JpZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbX0gb25DbGljaz17aGFuZGxlQ2F0ZWdvcnlDaGFuZ2UoaXRlbSl9PlxyXG4gICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgKSl9XHJcbiAgICA8L0JhemFyTWVudT5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICBmbGV4PVwiMSAxIDBcIlxyXG4gICAgICBtYXhXaWR0aD1cIjY3MHB4XCJcclxuICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgey4uLnsgcmVmOiBwYXJlbnRSZWYgfX1cclxuICAgID5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hpbmcgZm9yLi4uXCJcclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICBvbkNoYW5nZT17aGFubGRlU2VhcmNofVxyXG4gICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgIHN4OiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDQsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMzAwLFxyXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JleS43MDAnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW5kQWRvcm5tZW50OiBjYXRlZ29yeURyb3Bkb3duLFxyXG4gICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IDxTZWFyY2hPdXRsaW5lZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+LFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7ISFyZXN1bHRMaXN0Lmxlbmd0aCAmJiAoXHJcbiAgICAgICAgPFNlYXJjaFJlc3VsdENhcmQgZWxldmF0aW9uPXsyfT5cclxuICAgICAgICAgIHtyZXN1bHRMaXN0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3Qvc2VhcmNoLyR7aXRlbX1gfSBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2l0ZW19PntpdGVtfTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VhcmNoUmVzdWx0Q2FyZD5cclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAnVOG6pXQgY+G6oycsXHJcbiAgJ0LhuqV0IMSR4buZbmcgc+G6o24nLFxyXG4gICdUacOqdSBkw7luZycsXHJcbiAgJ8OUIHTDtCcsXHJcbiAgJ1Ro4bq7IHTDrW4gZOG7pW5nJyxcclxuICAnWGUgbcOheScsXHJcbiAgJ1TDrW4gY2jhuqVwJyxcclxuXVxyXG5cclxuY29uc3QgZHVtbXlTZWFyY2hSZXN1bHQgPSBbXHJcbiAgJ0NobyB0aHXDqiBuaMOgIE5ndXnhu4VuIFRo4buLIMSQ4buLbmgsIEtpbmggZG9hbmgsIMO0IHTDtCB0csOhbmgsIER0IDQybSwgNSB04bqnbmcsIEdpw6EgMjUgdHJp4buHdS4nLFxyXG4gICdDaG8gdGh1w6ogbmjDoCBuZ8O1IG90byB0csOhbmggbmhhdSDEkcaw4budbmcgTmd1eeG7hW4gVGjhu4sgxJDhu4tuaCwgOTBtMio3IHThuqduZywgdGhhbmcgbcOheScsXHJcbiAgJ0NobyB0aHXDqiBuaMOgIE5ndXnhu4VuIFRo4buLIMSQ4buLbmgsIFF14bqtbiBD4bqndSBHaeG6pXkgcGjDuSBo4bujcCBLRCwgVlAsIGjhu5kgR8SQIDYwbTIuJyxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm94XHJcbiIsImltcG9ydCBCYXphckJ1dHRvbiBmcm9tICdAY29tcG9uZW50L0JhemFyQnV0dG9uJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGNvbXBvbmVudC9CYXphckltYWdlJ1xyXG5pbXBvcnQgQmF6YXJUZXh0RmllbGQgZnJvbSAnQGNvbXBvbmVudC9CYXphclRleHRGaWVsZCdcclxuaW1wb3J0IEZsZXhCb3ggZnJvbSAnQGNvbXBvbmVudC9GbGV4Qm94J1xyXG5pbXBvcnQgeyBIMywgSDYsIFNtYWxsIH0gZnJvbSAnQGNvbXBvbmVudC9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgeyBCb3gsIENhcmQsIENhcmRQcm9wcywgRGl2aWRlciwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBWaXNpYmlsaXR5IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5J1xyXG5pbXBvcnQgVmlzaWJpbGl0eU9mZiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eU9mZidcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcblxyXG5jb25zdCBmYlN0eWxlID0ge1xyXG4gIGJhY2tncm91bmQ6ICcjM0I1OTk4JyxcclxuICBjb2xvcjogJ3doaXRlJyxcclxufVxyXG5jb25zdCBnb29nbGVTdHlsZSA9IHtcclxuICBiYWNrZ3JvdW5kOiAnIzQyODVGNCcsXHJcbiAgY29sb3I6ICd3aGl0ZScsXHJcbn1cclxuXHJcbnR5cGUgU3R5bGVkQ2FyZFByb3BzID0ge1xyXG4gIHBhc3N3b3JkVmlzaWJpbGl0eT86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgU3R5bGVkQ2FyZCA9IHN0eWxlZDxSZWFjdC5GQzxTdHlsZWRDYXJkUHJvcHMgJiBDYXJkUHJvcHM+PihcclxuICAoeyBjaGlsZHJlbiwgcGFzc3dvcmRWaXNpYmlsaXR5LCAuLi5yZXN0IH0pID0+IDxDYXJkIHsuLi5yZXN0fT57Y2hpbGRyZW59PC9DYXJkPlxyXG4pPENhcmRQcm9wcz4oKHsgdGhlbWUsIHBhc3N3b3JkVmlzaWJpbGl0eSB9KSA9PiAoe1xyXG4gIHdpZHRoOiA1MDAsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcblxyXG4gICcuY29udGVudCc6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiAnM3JlbSAzLjc1cmVtIDBweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgcGFkZGluZzogJzEuNXJlbSAxcmVtIDBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgJy5wYXNzd29yZEV5ZSc6IHtcclxuICAgIGNvbG9yOiBwYXNzd29yZFZpc2liaWxpdHkgPyB0aGVtZS5wYWxldHRlLmdyZXlbNjAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs0MDBdLFxyXG4gIH0sXHJcbiAgJy5mYWNlYm9va0J1dHRvbic6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAnJjpob3Zlcic6IGZiU3R5bGUsXHJcbiAgICAuLi5mYlN0eWxlLFxyXG4gIH0sXHJcbiAgJy5nb29nbGVCdXR0b24nOiB7XHJcbiAgICAnJjpob3Zlcic6IGdvb2dsZVN0eWxlLFxyXG4gICAgLi4uZ29vZ2xlU3R5bGUsXHJcbiAgfSxcclxuICAnLmFncmVlbWVudCc6IHtcclxuICAgIG1hcmdpblRvcDogMTIsXHJcbiAgICBtYXJnaW5Cb3R0b206IDI0LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bhc3N3b3JkVmlzaWJpbGl0eSwgc2V0UGFzc3dvcmRWaXNpYmlsaXR5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZFZpc2liaWxpdHkoKHZpc2libGUpID0+ICF2aXNpYmxlKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKVxyXG4gICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaGFuZGxlQmx1ciwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXQgfSA9XHJcbiAgICB1c2VGb3JtaWsoe1xyXG4gICAgICBvblN1Ym1pdDogaGFuZGxlRm9ybVN1Ym1pdCxcclxuICAgICAgaW5pdGlhbFZhbHVlcyxcclxuICAgICAgdmFsaWRhdGlvblNjaGVtYTogZm9ybVNjaGVtYSxcclxuICAgIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQ2FyZCBlbGV2YXRpb249ezN9IHBhc3N3b3JkVmlzaWJpbGl0eT17cGFzc3dvcmRWaXNpYmlsaXR5fT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGVudFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxIMyB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17MX0+XHJcbiAgICAgICAgICBXZWxjb21lIFRvIEVjb21tZXJjZVxyXG4gICAgICAgIDwvSDM+XHJcbiAgICAgICAgPFNtYWxsXHJcbiAgICAgICAgICBmb250V2VpZ2h0PVwiNjAwXCJcclxuICAgICAgICAgIGZvbnRTaXplPVwiMTJweFwiXHJcbiAgICAgICAgICBjb2xvcj1cImdyZXkuODAwXCJcclxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICBtYj17NC41fVxyXG4gICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBMb2cgaW4gd2l0aCBlbWFpbCAmIHBhc3N3b3JkXHJcbiAgICAgICAgPC9TbWFsbD5cclxuXHJcbiAgICAgICAgPEJhemFyVGV4dEZpZWxkXHJcbiAgICAgICAgICBtYj17MS41fVxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIGxhYmVsPVwiRW1haWwgb3IgUGhvbmUgTnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXhtcGxlQG1haWwuY29tXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWwgfHwgJyd9XHJcbiAgICAgICAgICBlcnJvcj17ISF0b3VjaGVkLmVtYWlsICYmICEhZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJhemFyVGV4dEZpZWxkXHJcbiAgICAgICAgICBtYj17Mn1cclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKioqXCJcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9uXCJcclxuICAgICAgICAgIHR5cGU9e3Bhc3N3b3JkVmlzaWJpbGl0eSA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwYXNzd29yZFZpc2liaWxpdHkgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5IGNsYXNzTmFtZT1cInBhc3N3b3JkRXllXCIgZm9udFNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eU9mZiBjbGFzc05hbWU9XCJwYXNzd29yZEV5ZVwiIGZvbnRTaXplPVwic21hbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmQgfHwgJyd9XHJcbiAgICAgICAgICBlcnJvcj17ISF0b3VjaGVkLnBhc3N3b3JkICYmICEhZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJhemFyQnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgbWI6ICcxLjY1cmVtJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9naW5cclxuICAgICAgICA8L0JhemFyQnV0dG9uPlxyXG5cclxuICAgICAgICA8Qm94IG1iPXsyfT5cclxuICAgICAgICAgIDxCb3ggd2lkdGg9XCIyMDBweFwiIG14PVwiYXV0b1wiPlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgPEZsZXhCb3gganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD17LTEuNjI1fT5cclxuICAgICAgICAgICAgPEJveCBjb2xvcj1cImdyZXkuNjAwXCIgYmdjb2xvcj1cImJhY2tncm91bmQucGFwZXJcIiBweD17Mn0+XHJcbiAgICAgICAgICAgICAgb25cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCYXphckJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmFjZWJvb2tCdXR0b25cIlxyXG4gICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIG1iOiAnMTBweCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogNDQsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9mYWNlYm9vay1maWxsZWQtd2hpdGUuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiZmFjZWJvb2tcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCb3ggZm9udFNpemU9XCIxMnB4XCIgbWw9ezF9PlxyXG4gICAgICAgICAgICBDb250aW51ZSB3aXRoIEZhY2Vib29rXHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JhemFyQnV0dG9uPlxyXG4gICAgICAgIDxCYXphckJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ29vZ2xlQnV0dG9uXCJcclxuICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ0LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ29vZ2xlLTEuc3ZnXCIgYWx0PVwiZmFjZWJvb2tcIiAvPlxyXG4gICAgICAgICAgPEJveCBmb250U2l6ZT1cIjEycHhcIiBtbD17MX0+XHJcbiAgICAgICAgICAgIENvbnRpbnVlIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JhemFyQnV0dG9uPlxyXG5cclxuICAgICAgICA8RmxleEJveCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBteT1cIjEuMjVyZW1cIj5cclxuICAgICAgICAgIDxCb3g+RG9u4oCZdCBoYXZlIGFjY291bnQ/PC9Cb3g+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8SDYgbWw9ezF9IGJvcmRlckJvdHRvbT1cIjFweCBzb2xpZFwiIGJvcmRlckNvbG9yPVwiZ3JleS45MDBcIj5cclxuICAgICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgICA8L0g2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8RmxleEJveCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGJnY29sb3I9XCJncmV5LjIwMFwiIHB5PXsyLjV9PlxyXG4gICAgICAgIEZvcmdvdCB5b3VyIHBhc3N3b3JkP1xyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEg2IG1sPXsxfSBib3JkZXJCb3R0b209XCIxcHggc29saWRcIiBib3JkZXJDb2xvcj1cImdyZXkuOTAwXCI+XHJcbiAgICAgICAgICAgICAgUmVzZXQgSXRcclxuICAgICAgICAgICAgPC9INj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvRmxleEJveD5cclxuICAgIDwvU3R5bGVkQ2FyZD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgZW1haWw6ICcnLFxyXG4gIHBhc3N3b3JkOiAnJyxcclxufVxyXG5cclxuY29uc3QgZm9ybVNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbCgnaW52YWxpZCBlbWFpbCcpLnJlcXVpcmVkKCcke3BhdGh9IGlzIHJlcXVpcmVkJyksXHJcbiAgcGFzc3dvcmQ6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnJHtwYXRofSBpcyByZXF1aXJlZCcpLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIiwiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBzbGlkZURvd24gfSBmcm9tICdhbmltYXRpb25zL2tleWZyYW1lcydcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGlja3lQcm9wcyB7XHJcbiAgZml4ZWRPbjogbnVtYmVyXHJcbiAgY29udGFpbmVyUmVmPzogeyBjdXJyZW50OiBhbnkgfVxyXG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnRcclxuICBvblN0aWNreT86IChpc0ZpeGVkOiBib29sZWFuKSA9PiB2b2lkXHJcbiAgbm90aWZ5T25TY3JvbGw/OiAoaGFzUmVhY2hlZFBvc2l0aW9uOiBib29sZWFuKSA9PiB2b2lkXHJcbiAgbm90aWZ5UG9zaXRpb24/OiBudW1iZXJcclxufVxyXG50eXBlIFN0eWxlZEJveFByb3BzID0ge1xyXG4gIGNvbXBvbmVudEhlaWdodD86IG51bWJlclxyXG4gIGZpeGVkT24/OiBudW1iZXJcclxuICBmaXhlZD86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEJveCA9IHN0eWxlZDxSZWFjdC5GQzxTdHlsZWRCb3hQcm9wcz4+KFxyXG4gICh7IGNoaWxkcmVuLCBjb21wb25lbnRIZWlnaHQsIGZpeGVkT24sIGZpeGVkLCAuLi5yZXN0IH0pID0+IChcclxuICAgIDxkaXYgey4uLnJlc3R9PntjaGlsZHJlbn08L2Rpdj5cclxuICApXHJcbik8U3R5bGVkQm94UHJvcHM+KCh7IHRoZW1lLCBjb21wb25lbnRIZWlnaHQsIGZpeGVkT24sIGZpeGVkIH0pID0+ICh7XHJcbiAgJyYgLmhvbGQnOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMixcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gIH0sXHJcblxyXG4gICcmIC5maXhlZCc6IHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgekluZGV4OiA5OSxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgIHRvcDogYCR7Zml4ZWRPbn1weGAsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDM1MG1zIGVhc2UtaW4tb3V0JyxcclxuICAgIGFuaW1hdGlvbjogYCR7c2xpZGVEb3dufSA0MDBtcyAke3RoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlSW5PdXR9YCxcclxuICB9LFxyXG4gICcmICsgLnNlY3Rpb24tYWZ0ZXItc3RpY2t5Jzoge1xyXG4gICAgcGFkZGluZ1RvcDogZml4ZWQgPyBjb21wb25lbnRIZWlnaHQgOiAwLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgU3RpY2t5OiBSZWFjdC5GQzxTdGlja3lQcm9wcz4gPSAoe1xyXG4gIGZpeGVkT24sXHJcbiAgY29udGFpbmVyUmVmLFxyXG4gIGNoaWxkcmVuLFxyXG4gIG5vdGlmeVBvc2l0aW9uLFxyXG4gIG5vdGlmeU9uU2Nyb2xsLFxyXG4gIG9uU3RpY2t5LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2ZpeGVkLCBzZXRGaXhlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcGFyZW50SGVpZ2h0LCBzZXRQYXJlbnRIZWlnaHRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmPGFueT4obnVsbClcclxuICBjb25zdCBwb3NpdGlvblJlZiA9IHVzZVJlZigwKVxyXG5cclxuICBjb25zdCBzY3JvbGxMaXN0ZW5lciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghd2luZG93KSByZXR1cm5cclxuXHJcbiAgICBsZXQgZGlzdGFuY2UgPSB3aW5kb3cucGFnZVlPZmZzZXQgLSBwb3NpdGlvblJlZi5jdXJyZW50XHJcblxyXG4gICAgaWYgKGNvbnRhaW5lclJlZj8uY3VycmVudCkge1xyXG4gICAgICBsZXQgY29udGFpbmVyRGlzdGFuY2UgPVxyXG4gICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldFRvcCArXHJcbiAgICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQ/Lm9mZnNldEhlaWdodCAtXHJcbiAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0XHJcblxyXG4gICAgICBpZiAobm90aWZ5UG9zaXRpb24gJiYgbm90aWZ5T25TY3JvbGwpIHtcclxuICAgICAgICBub3RpZnlPblNjcm9sbChcclxuICAgICAgICAgIGRpc3RhbmNlIDw9IG5vdGlmeVBvc2l0aW9uICYmIGNvbnRhaW5lckRpc3RhbmNlID4gbm90aWZ5UG9zaXRpb25cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNldEZpeGVkKGRpc3RhbmNlIDw9IGZpeGVkT24gJiYgY29udGFpbmVyRGlzdGFuY2UgPiBmaXhlZE9uKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChub3RpZnlQb3NpdGlvbiAmJiBub3RpZnlPblNjcm9sbCkge1xyXG4gICAgICBub3RpZnlPblNjcm9sbChkaXN0YW5jZSA+PSBub3RpZnlQb3NpdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXNGaXhlZCA9IGRpc3RhbmNlID49IGZpeGVkT25cclxuXHJcbiAgICBpZiAocG9zaXRpb25SZWYuY3VycmVudCA9PT0gMCkge1xyXG4gICAgICBpc0ZpeGVkID0gZGlzdGFuY2UgPj0gZml4ZWRPbiArIGVsZW1lbnRSZWYuY3VycmVudD8ub2Zmc2V0SGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rml4ZWQoaXNGaXhlZClcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghd2luZG93KSByZXR1cm5cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsTGlzdGVuZXIpXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2Nyb2xsTGlzdGVuZXIpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsTGlzdGVuZXIpXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzY3JvbGxMaXN0ZW5lcilcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcG9zaXRpb25SZWYuY3VycmVudCkge1xyXG4gICAgICBwb3NpdGlvblJlZi5jdXJyZW50ID0gZWxlbWVudFJlZi5jdXJyZW50Py5vZmZzZXRUb3BcclxuICAgIH1cclxuICAgIHNldFBhcmVudEhlaWdodChlbGVtZW50UmVmLmN1cnJlbnQ/Lm9mZnNldEhlaWdodCB8fCAwKVxyXG4gIH0sIFtlbGVtZW50UmVmLmN1cnJlbnQsIGNoaWxkcmVuXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChvblN0aWNreSkgb25TdGlja3koZml4ZWQpXHJcbiAgfSwgW2ZpeGVkXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRCb3ggZml4ZWRPbj17Zml4ZWRPbn0gY29tcG9uZW50SGVpZ2h0PXtwYXJlbnRIZWlnaHR9IGZpeGVkPXtmaXhlZH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goe1xyXG4gICAgICAgICAgaG9sZDogIWZpeGVkLFxyXG4gICAgICAgICAgZml4ZWQ6IGZpeGVkLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1N0eWxlZEJveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreVxyXG4iLCJleHBvcnQgY29uc3QgZGV2aWNlU2l6ZSA9IHtcclxuICB4czogNDI1LFxyXG4gIHNtOiA3NjgsXHJcbiAgbWQ6IDEwMjQsXHJcbiAgbGc6IDE0NDAsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsYXlvdXRDb25zdGFudCA9IHtcclxuICB0b3BiYXJIZWlnaHQ6IDQwLFxyXG4gIGdyb2NlcnlTaWRlbmF2V2lkdGg6IDI4MCxcclxuICBjb250YWluZXJXaWR0aDogMTIwMCxcclxuICBtb2JpbGVOYXZIZWlnaHQ6IDY0LFxyXG4gIGhlYWRlckhlaWdodDogODAsXHJcbiAgbW9iaWxlSGVhZGVySGVpZ2h0OiA2NCxcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDdXN0b21TZWxlY3RfY29udGFpbmVyX18xbHJHTFwiLFxuXHRcInRpdGxlXCI6IFwiQ3VzdG9tU2VsZWN0X3RpdGxlX18zU3Q4ZFwiLFxuXHRcInBsYWNlaG9sZGVyXCI6IFwiQ3VzdG9tU2VsZWN0X3BsYWNlaG9sZGVyX18yUDhuclwiLFxuXHRcInNlbGVjdFwiOiBcIkN1c3RvbVNlbGVjdF9zZWxlY3RfXzNINVU5XCJcbn07XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9