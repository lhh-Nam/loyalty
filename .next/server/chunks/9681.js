exports.id = 9681;
exports.ids = [9681];
exports.modules = {

/***/ 7219:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9137);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__);


const BazarAvatar = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Avatar)((0,_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.compose)(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.spacing, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.typography, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.sizing, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.border));
/* harmony default export */ __webpack_exports__["Z"] = (BazarAvatar);

/***/ }),

/***/ 9382:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9885);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [handler && /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(handler, {
      onClick: handler.props.onClick || handleClick
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({
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
    }))]
  });
};

BazarMenu.defaultProps = {
  direction: 'left',
  shouldCloseOnItemClick: true
};
/* harmony default export */ __webpack_exports__["Z"] = (BazarMenu);

/***/ }),

/***/ 9681:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": function() { return /* binding */ HeaderWrapper; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5405);
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94);
/* harmony import */ var _component_mini_cart_MiniCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6150);
/* harmony import */ var _component_sessions_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9236);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8604);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9653);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _search_box_SearchBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3818);












 // component props interface

// styled component
const HeaderWrapper = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box)(({
  theme
}) => ({
  position: 'relative',
  zIndex: 1,
  height: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .layoutConstant.headerHeight */ .P.headerHeight,
  background: theme.palette.background.paper,
  transition: 'height 250ms ease-in-out',
  [theme.breakpoints.down('sm')]: {
    height: _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .layoutConstant.mobileHeaderHeight */ .P.mobileHeaderHeight
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


  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderWrapper, {
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Container, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_FlexBox__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        alignItems: "center",
        mr: 2,
        minWidth: "170px",
        sx: {
          display: {
            xs: 'none',
            md: 'flex'
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_9__.default, {
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarImage__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
              height: 40,
              src: "/assets/loyalty/logo-f5s.jpg",
              alt: "logo"
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_FlexBox__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        justifyContent: "center",
        flex: "1 1 0",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_search_box_SearchBox__WEBPACK_IMPORTED_MODULE_11__/* .default */ .ZP, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
        open: dialogOpen,
        fullWidth: isMobile,
        scroll: "body",
        onClose: toggleDialog,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_sessions_Login__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Drawer, {
        open: sidenavOpen,
        anchor: "right",
        onClose: toggleSidenav,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_mini_cart_MiniCart__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Header);

/***/ }),

/***/ 2480:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ShoppingBagOutlined = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
        fill: "none",
        height: "24",
        width: "24"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"
      })]
    })
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (ShoppingBagOutlined);

/***/ }),

/***/ 6150:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ mini_cart_MiniCart; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/BazarAvatar.tsx
var BazarAvatar = __webpack_require__(7219);
// EXTERNAL MODULE: ./src/components/BazarButton.tsx
var BazarButton = __webpack_require__(9458);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "@material-ui/system"
var system_ = __webpack_require__(9137);
;// CONCATENATED MODULE: ./src/components/BazarIconButton.tsx


const BazarIconButton = (0,system_.styled)(core_.IconButton)((0,system_.compose)(system_.spacing, system_.positions, system_.typography, system_.sizing, system_.border, system_.bgcolor));
/* harmony default export */ var components_BazarIconButton = (BazarIconButton);
// EXTERNAL MODULE: ./src/components/FlexBox.tsx
var FlexBox = __webpack_require__(94);
// EXTERNAL MODULE: ./src/components/icons/ShoppingBagOutlined.tsx
var ShoppingBagOutlined = __webpack_require__(2480);
// EXTERNAL MODULE: ./src/components/LazyImage.tsx
var LazyImage = __webpack_require__(1292);
// EXTERNAL MODULE: ./src/components/Typography.tsx
var Typography = __webpack_require__(479);
// EXTERNAL MODULE: ./src/contexts/app/AppContext.tsx + 4 modules
var AppContext = __webpack_require__(6805);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8604);
// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(3762);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(8777);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: external "@material-ui/icons/Remove"
var Remove_ = __webpack_require__(608);
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/mini-cart/MiniCart.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const MiniCart = ({
  toggleSidenav
}) => {
  const {
    palette
  } = (0,styles_.useTheme)();
  const {
    state,
    dispatch
  } = (0,AppContext/* useAppContext */.bp)();
  const {
    cartList
  } = state.cart;
  const handleCartAmountChange = (0,external_react_.useCallback)((amount, product) => () => {
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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
    width: "380px",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
      overflow: "auto",
      height: `calc(100vh - ${!!cartList.length ? '80px - 3.25rem' : '0px'})`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
        alignItems: "center",
        m: "0px 20px",
        height: "74px",
        color: "secondary.main",
        children: [/*#__PURE__*/jsx_runtime_.jsx(ShoppingBagOutlined/* default */.Z, {
          color: "inherit"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
          fontWeight: 600,
          fontSize: "16px",
          ml: 1,
          children: [cartList.length, " item"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Divider, {}), !!!cartList.length && /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100% - 74px)",
        children: [/*#__PURE__*/jsx_runtime_.jsx(LazyImage/* default */.Z, {
          src: "/assets/images/logos/shopping-bag.svg",
          width: 90,
          height: 100
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
          component: "p",
          mt: 2,
          color: "grey.600",
          textAlign: "center",
          maxWidth: "200px",
          children: "Your shopping bag is empty. Start shopping"
        })]
      }), cartList.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
        alignItems: "center",
        py: 2,
        px: 2.5,
        borderBottom: `1px solid ${palette.divider}`,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
          alignItems: "center",
          flexDirection: "column",
          children: [/*#__PURE__*/jsx_runtime_.jsx(BazarButton/* default */.Z, {
            variant: "outlined",
            color: "primary",
            sx: {
              height: '32px',
              width: '32px',
              borderRadius: '300px'
            },
            onClick: handleCartAmountChange(item.qty + 1, item),
            children: /*#__PURE__*/jsx_runtime_.jsx((Add_default()), {
              fontSize: "small"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
            fontWeight: 600,
            fontSize: "15px",
            my: "3px",
            children: item.qty
          }), /*#__PURE__*/jsx_runtime_.jsx(BazarButton/* default */.Z, {
            variant: "outlined",
            color: "primary",
            sx: {
              height: '32px',
              width: '32px',
              borderRadius: '300px'
            },
            onClick: handleCartAmountChange(item.qty - 1, item),
            disabled: item.qty === 1,
            children: /*#__PURE__*/jsx_runtime_.jsx((Remove_default()), {
              fontSize: "small"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/product/${item.id}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(BazarAvatar/* default */.Z, {
              src: item.imgUrl || '/assets/images/products/iphone-x.png',
              mx: 2,
              alt: item.name,
              height: 76,
              width: 76
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
          flex: "1 1 0",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/product/${item.id}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(Typography.H5, {
                className: "title",
                fontSize: "14px",
                children: item.name
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* Tiny */.YE, {
            color: "grey.600",
            children: ["$", item.price.toFixed(2), " x ", item.qty]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
            fontWeight: 600,
            fontSize: "14px",
            color: "primary.main",
            mt: 0.5,
            children: ["$", (item.qty * item.price).toFixed(2)]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(components_BazarIconButton, {
          ml: 2.5,
          size: "small",
          onClick: handleCartAmountChange(0, item),
          children: /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
            fontSize: "small"
          })
        })]
      }, item.id))]
    }), !!cartList.length && /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
      p: 2.5,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/checkout",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(BazarButton/* default */.Z, {
          variant: "contained",
          color: "primary",
          sx: {
            mb: '0.75rem',
            height: '40px'
          },
          fullWidth: true,
          onClick: toggleSidenav,
          children: ["Checkout Now ($", getTotalPrice().toFixed(2), ")"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/cart",
        children: /*#__PURE__*/jsx_runtime_.jsx(BazarButton/* default */.Z, {
          color: "primary",
          variant: "outlined",
          sx: {
            height: 40
          },
          fullWidth: true,
          onClick: toggleSidenav,
          children: "View Cart"
        })
      })]
    })]
  });
};

MiniCart.defaultProps = {
  toggleSidenav: () => {}
};
/* harmony default export */ var mini_cart_MiniCart = (MiniCart);

/***/ }),

/***/ 3818:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iu": function() { return /* binding */ SearchOutlinedIcon; },
/* harmony export */   "v3": function() { return /* binding */ SearchResultCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9382);
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7009);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8604);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3498);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1466);
/* harmony import */ var _material_ui_icons_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9017);
/* harmony import */ var _material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);



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
const DropDownHandler = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.styled)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(({
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

  const categoryDropdown = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarMenu__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    direction: "left",
    handler: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DropDownHandler, {
      alignItems: "center",
      bgcolor: "grey.100",
      height: "100%",
      px: 3,
      color: "grey.700",
      component: (_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4___default()),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
        mr: 0.5,
        children: category
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_KeyboardArrowDownOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {
        fontSize: "small",
        color: "inherit"
      })]
    }),
    children: categories.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
      onClick: handleCategoryChange(item),
      children: item
    }, item))
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, _objectSpread(_objectSpread({
    position: "relative",
    flex: "1 1 0",
    maxWidth: "670px",
    mx: "auto"
  }, {
    ref: parentRef
  }), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TextField, {
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
        startAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchOutlinedIcon, {
          fontSize: "small"
        })
      }
    }), !!resultList.length && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResultCard, {
      elevation: 2,
      children: resultList.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_9__.default, {
        href: `/product/search/${item}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
          children: item
        }, item)
      }, item))
    })]
  }));
};

const categories = ['Tất cả', 'Bất động sản', 'Tiêu dùng', 'Ô tô', 'Thẻ tín dụng', 'Xe máy', 'Tín chấp'];
const dummySearchResult = ['Cho thuê nhà Nguyễn Thị Định, Kinh doanh, ô tô tránh, Dt 42m, 5 tầng, Giá 25 triệu.', 'Cho thuê nhà ngõ oto tránh nhau đường Nguyễn Thị Định, 90m2*7 tầng, thang máy', 'Cho thuê nhà Nguyễn Thị Định, Quận Cầu Giấy phù hợp KD, VP, hộ GĐ 60m2.'];
/* harmony default export */ __webpack_exports__["ZP"] = (SearchBox);

/***/ }),

/***/ 9653:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": function() { return /* binding */ layoutConstant; }
/* harmony export */ });
/* unused harmony export deviceSize */
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

/***/ })

};
;