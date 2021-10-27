exports.id = 5087;
exports.ids = [5087];
exports.modules = {

/***/ 5087:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout_VendorDashboardLayout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/navbar/Navbar.tsx + 1 modules
var Navbar = __webpack_require__(8248);
// EXTERNAL MODULE: ./src/components/layout/AppLayout.tsx
var AppLayout = __webpack_require__(1535);
// EXTERNAL MODULE: ./src/components/FlexBox.tsx
var FlexBox = __webpack_require__(94);
// EXTERNAL MODULE: external "@material-ui/icons/Assignment"
var Assignment_ = __webpack_require__(402);
var Assignment_default = /*#__PURE__*/__webpack_require__.n(Assignment_);
// EXTERNAL MODULE: external "@material-ui/icons/Dashboard"
var Dashboard_ = __webpack_require__(6463);
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_);
// EXTERNAL MODULE: external "@material-ui/icons/NoteAdd"
var NoteAdd_ = __webpack_require__(9824);
var NoteAdd_default = /*#__PURE__*/__webpack_require__.n(NoteAdd_);
// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__(5339);
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_);
// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_ = __webpack_require__(7204);
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/layout/DashboardStyle.tsx
var DashboardStyle = __webpack_require__(3289);
;// CONCATENATED MODULE: ./src/components/layout/VendorDashboardNavigation.tsx












const VendorDashboardNavigation = () => {
  const {
    pathname
  } = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(DashboardStyle/* DashboardNavigationWrapper */.n, {
    sx: {
      px: '0px',
      py: '1.5rem',
      color: 'grey.900'
    },
    children: linkList.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)(DashboardStyle/* StyledDashboardNav */.W, {
      isCurrentPath: pathname.includes(item.href),
      href: item.href,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(item.icon, {
          className: "nav-icon",
          fontSize: "small",
          color: "inherit",
          sx: {
            mr: '10px'
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: item.title
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: item.count
      })]
    }, item.title))
  });
};

const linkList = [{
  href: '/vendor/dashboard',
  title: 'Dashboard',
  icon: (Dashboard_default())
}, {
  href: '/vendor/products',
  title: 'Products',
  icon: (Assignment_default()),
  count: 300
}, {
  href: '/vendor/add-product',
  title: 'Add New Product',
  icon: (NoteAdd_default())
}, {
  href: '/vendor/orders',
  title: 'Orders',
  icon: (ShoppingCart_default()),
  count: 40
}, {
  href: '/vendor/account-settings',
  title: 'Account Settings',
  icon: (Settings_default())
}];
/* harmony default export */ var layout_VendorDashboardNavigation = (VendorDashboardNavigation);
;// CONCATENATED MODULE: ./src/components/layout/VendorDashboardLayout.tsx








const VendorDashboardLayout = ({
  children
}) => /*#__PURE__*/jsx_runtime_.jsx(AppLayout/* default */.Z, {
  navbar: /*#__PURE__*/jsx_runtime_.jsx(Navbar/* default */.Z, {}),
  children: /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
    sx: {
      my: '2rem'
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
      container: true,
      spacing: 3,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        lg: 3,
        xs: 12,
        sx: {
          display: {
            xs: 'none',
            sm: 'none',
            md: 'block'
          }
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(layout_VendorDashboardNavigation, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        lg: 9,
        xs: 12,
        children: children
      })]
    })
  })
});

/* harmony default export */ var layout_VendorDashboardLayout = (VendorDashboardLayout);

/***/ })

};
;