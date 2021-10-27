exports.id = 8248;
exports.ids = [8248];
exports.modules = {

/***/ 7983:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ categories_CategoryMenu; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/data/navigations.ts + 15 modules
var navigations = __webpack_require__(1678);
// EXTERNAL MODULE: external "@material-ui/icons/ChevronRight"
var ChevronRight_ = __webpack_require__(835);
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/categories/CategoryMenuItem.tsx



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // component props interface

//styled component
const Wrapper = (0,core_.styled)(core_.Box)(({
  theme
}) => ({
  '& .category-dropdown-link': {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 1rem',
    height: 40,
    minWidth: '278px',
    whiteSpace: 'pre',
    transition: 'all 250ms ease-in-out',
    '& .title': {
      paddingLeft: '0.75rem',
      flexGrow: 1
    }
  },
  '&:hover': {
    '& > .category-dropdown-link': {
      color: theme.palette.primary.main,
      background: theme.palette.primary.light
    },
    '& > .mega-menu': {
      display: 'block'
    }
  }
}));

const CategoryMenuItem = (_ref) => {
  let {
    href,
    title,
    caret,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["href", "title", "caret", "children"]);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: href,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.MenuItem, {
        className: "category-dropdown-link",
        children: [rest.icon && /*#__PURE__*/jsx_runtime_.jsx(rest.icon, {
          fontSize: "small",
          color: "inherit"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "title",
          children: title
        }), caret && /*#__PURE__*/jsx_runtime_.jsx((ChevronRight_default()), {
          fontSize: "small"
        })]
      })
    }), children]
  });
};

CategoryMenuItem.defaultProps = {
  caret: true
};
/* harmony default export */ var categories_CategoryMenuItem = (CategoryMenuItem);
// EXTERNAL MODULE: ./src/components/FlexBox.tsx
var FlexBox = __webpack_require__(94);
// EXTERNAL MODULE: ./src/components/LazyImage.tsx
var LazyImage = __webpack_require__(1292);
// EXTERNAL MODULE: ./src/components/nav-link/NavLink.tsx
var NavLink = __webpack_require__(9579);
;// CONCATENATED MODULE: ./src/components/categories/mega-menu/StyledMegaMenu.tsx


 // styled component

const StyledMegaMenu_Wrapper = (0,core_.styled)(core_.Box)(({
  theme
}) => ({
  display: 'none',
  position: 'absolute',
  left: '100%',
  right: 'auto',
  top: 0,
  zIndex: 99,
  '& .title-link, & .child-link': {
    color: 'inherit',
    fontWeight: 600,
    display: 'block',
    padding: '0.5rem 0px'
  },
  '& .child-link': {
    fontWeight: 400
  },
  '& .mega-menu-content': {
    padding: '0.5rem 0px',
    marginLeft: '1rem',
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    transition: 'all 250ms ease-in-out'
  }
}));

const StyledMegaMenu = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledMegaMenu_Wrapper, {
    className: "mega-menu",
    children: children
  });
};

/* harmony default export */ var mega_menu_StyledMegaMenu = (StyledMegaMenu);
;// CONCATENATED MODULE: ./src/components/categories/mega-menu/MegaMenu1.tsx








 // component props with nested interface

const MegaMenu1 = ({
  data: {
    categories,
    rightImage,
    bottomImage
  },
  minWidth
}) => {
  return categories ? /*#__PURE__*/jsx_runtime_.jsx(mega_menu_StyledMegaMenu, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Card, {
      elevation: 2,
      sx: {
        ml: '1rem',
        minWidth
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
        px: 2.5,
        py: 1.75,
        alignItems: "unset",
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
          flex: "1 1 0",
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            container: true,
            spacing: 4,
            children: categories === null || categories === void 0 ? void 0 : categories.map((item, ind) => {
              var _item$subCategories;

              return /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
                item: true,
                md: 3,
                children: [item.href ? /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                  className: "title-link",
                  href: item.href,
                  children: item.title
                }) : /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
                  className: "title-link",
                  children: item.title
                }), (_item$subCategories = item.subCategories) === null || _item$subCategories === void 0 ? void 0 : _item$subCategories.map((sub, ind) => /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                  className: "child-link",
                  href: sub.href,
                  children: sub.title
                }, ind))]
              }, ind);
            })
          })
        }), rightImage && /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
          mt: 1.5,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: rightImage.href,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(LazyImage/* default */.Z, {
                src: rightImage.imgUrl,
                objectFit: "contain",
                width: 137,
                height: 318
              })
            })
          })
        })]
      }), bottomImage && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: bottomImage.href,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
            position: "relative",
            height: "170px",
            children: /*#__PURE__*/jsx_runtime_.jsx(LazyImage/* default */.Z, {
              src: bottomImage.imgUrl,
              layout: "fill",
              objectFit: "cover"
            })
          })
        })
      })]
    })
  }) : null;
};

MegaMenu1.defaultProps = {
  minWidth: '760px'
};
/* harmony default export */ var mega_menu_MegaMenu1 = (MegaMenu1);
// EXTERNAL MODULE: ./src/components/BazarCard.tsx
var BazarCard = __webpack_require__(2818);
// EXTERNAL MODULE: ./src/components/BazarImage.tsx
var BazarImage = __webpack_require__(5405);
// EXTERNAL MODULE: ./src/components/Typography.tsx
var Typography = __webpack_require__(479);
;// CONCATENATED MODULE: ./src/components/categories/mega-menu/MegaMenu3.tsx











 // component props with nested interface

const MegaMenu3 = ({
  data: {
    categories,
    rightImage
  },
  minWidth
}) => {
  return categories ? /*#__PURE__*/jsx_runtime_.jsx(mega_menu_StyledMegaMenu, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(BazarCard/* default */.Z, {
      sx: {
        ml: '1rem',
        minWidth
      },
      elevation: 2,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
        px: 2.5,
        py: 1.75,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
          flex: "1 1 0",
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            container: true,
            spacing: 4,
            children: categories === null || categories === void 0 ? void 0 : categories.map((item, ind) => {
              var _item$subCategories;

              return /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
                item: true,
                md: 3,
                children: [item.href ? /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                  className: "title-link",
                  href: item.href,
                  children: item.title
                }) : /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
                  className: "title-link",
                  children: item.title
                }), (_item$subCategories = item.subCategories) === null || _item$subCategories === void 0 ? void 0 : _item$subCategories.map((sub, ind) => /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
                  className: "child-link",
                  href: sub.href,
                  children: sub.title
                }, ind))]
              }, ind);
            })
          })
        }), rightImage && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: rightImage.href,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
              position: "relative",
              width: "153px",
              height: "100%",
              children: /*#__PURE__*/jsx_runtime_.jsx(LazyImage/* default */.Z, {
                src: rightImage.imgUrl,
                layout: "fill",
                objectFit: "contain"
              })
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/sale-page-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
            className: "h-full",
            container: true,
            spacing: 0,
            wrap: "wrap-reverse",
            alignItems: "center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
              item: true,
              sm: 6,
              xs: 12,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
                px: 2.5,
                children: [/*#__PURE__*/jsx_runtime_.jsx(Typography.H3, {
                  mb: 1,
                  children: "Big Sale Upto 60% Off"
                }), /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
                  color: "grey.600",
                  mb: 1,
                  children: "Handcrafted from genuine Italian Leather"
                }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* Small */.x4, {
                  fontWeight: "700",
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                  children: "SHOP NOW"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
              item: true,
              sm: 6,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "160px",
                position: "relative",
                children: /*#__PURE__*/jsx_runtime_.jsx(LazyImage/* default */.Z, {
                  layout: "fill",
                  objectFit: "cover",
                  src: "/assets/images/models/model-1.png",
                  alt: "model"
                })
              })
            })]
          })
        })
      })]
    })
  }) : null;
};

MegaMenu3.defaultProps = {
  minWidth: '760px'
};
/* harmony default export */ var mega_menu_MegaMenu3 = (MegaMenu3);
;// CONCATENATED MODULE: ./src/components/categories/mega-menu/MegaMenu2.tsx





 // component interface

const MegaMenu2 = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(mega_menu_StyledMegaMenu, {
    children: /*#__PURE__*/jsx_runtime_.jsx(BazarCard/* default */.Z, {
      elevation: 2,
      sx: {
        ml: '1rem',
        py: '0.5rem'
      },
      children: data === null || data === void 0 ? void 0 : data.map(item => /*#__PURE__*/jsx_runtime_.jsx(categories_CategoryMenuItem, {
        title: item.title,
        href: item.href,
        icon: item.icon,
        caret: !!item.menuData,
        children: item.menuData && /*#__PURE__*/jsx_runtime_.jsx(mega_menu_MegaMenu3, {
          minWidth: "560px",
          data: item.menuData
        })
      }, item.title))
    })
  });
};

/* harmony default export */ var mega_menu_MegaMenu2 = (MegaMenu2);
;// CONCATENATED MODULE: ./src/components/categories/CategoryMenuCard.tsx






 // component props interface

// styled component
const CategoryMenuCard_Wrapper = (0,core_.styled)(core_.Box)(({
  theme,
  position,
  open
}) => ({
  position: position || 'unset',
  padding: '0.5rem 0px',
  left: 0,
  right: 'auto',
  top: position === 'absolute' ? 'calc(100% + 0.7rem)' : '0.5rem',
  borderRadius: 4,
  transform: open ? 'scaleY(1)' : 'scaleY(0)',
  transformOrigin: 'top',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  transition: 'all 250ms ease-in-out',
  zIndex: 98
}));

const CategoryMenuCard = ({
  open,
  position
}) => {
  const megaMenu = {
    MegaMenu1: mega_menu_MegaMenu1,
    MegaMenu2: mega_menu_MegaMenu2
  };
  return /*#__PURE__*/jsx_runtime_.jsx(CategoryMenuCard_Wrapper, {
    open: open,
    position: position,
    children: navigations/* default.map */.Z.map(item => {
      let MegaMenu = megaMenu[item.menuComponent];
      return /*#__PURE__*/jsx_runtime_.jsx(categories_CategoryMenuItem, {
        title: item.title,
        href: item.href,
        icon: item.icon,
        caret: !!item.menuData,
        children: /*#__PURE__*/jsx_runtime_.jsx(MegaMenu, {
          data: item.menuData || {}
        })
      }, item.title);
    })
  });
};

CategoryMenuCard.defaultProps = {
  position: 'absolute'
};
/* harmony default export */ var categories_CategoryMenuCard = (CategoryMenuCard);
;// CONCATENATED MODULE: ./src/components/categories/CategoryMenu.tsx




 // component props interface

// styled component
const CategoryMenu_Wrapper = (0,core_.styled)(core_.Box)(({
  open
}) => ({
  position: 'relative',
  cursor: 'pointer',
  '& .dropdown-icon': {
    marginLeft: '0.25rem',
    transition: 'all 250ms ease-in-out',
    transform: `rotate(${open ? '90deg' : '0deg'})`
  }
}));

const CategoryMenu = ({
  open: isOpen = false,
  children
}) => {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(isOpen);
  const popoverRef = (0,external_react_.useRef)(open);
  popoverRef.current = open;

  const toggleMenu = e => {
    e.stopPropagation();
    if (!isOpen) setOpen(open => !open);
  };

  const handleDocumentClick = () => {
    if (popoverRef.current && !isOpen) setOpen(false);
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CategoryMenu_Wrapper, {
    open: open,
    children: [/*#__PURE__*/external_react_default().cloneElement(children, {
      open,
      className: `${children.props.className}`,
      onClick: toggleMenu
    }), /*#__PURE__*/jsx_runtime_.jsx(categories_CategoryMenuCard, {
      open: open
    })]
  });
};

/* harmony default export */ var categories_CategoryMenu = (CategoryMenu);

/***/ }),

/***/ 1338:
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




const Category = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, _objectSpread(_objectSpread({}, props), {}, {
    viewBox: "0 0 64 64",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "m29 11v14a4 4 0 0 1 -4 4h-14a4 4 0 0 1 -4-4v-14a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4zm24-4h-14a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14a4 4 0 0 0 -4-4zm-28 28h-14a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14a4 4 0 0 0 -4-4zm21 0a11 11 0 1 0 11 11 11 11 0 0 0 -11-11z"
    })
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (Category);

/***/ }),

/***/ 8248:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ navbar_Navbar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/BazarButton.tsx
var BazarButton = __webpack_require__(9458);
// EXTERNAL MODULE: ./src/components/BazarCard.tsx
var BazarCard = __webpack_require__(2818);
// EXTERNAL MODULE: ./src/components/categories/CategoryMenu.tsx + 6 modules
var CategoryMenu = __webpack_require__(7983);
// EXTERNAL MODULE: ./src/components/FlexBox.tsx
var FlexBox = __webpack_require__(94);
// EXTERNAL MODULE: ./src/components/icons/Category.tsx
var Category = __webpack_require__(1338);
// EXTERNAL MODULE: ./src/components/nav-link/NavLink.tsx
var NavLink = __webpack_require__(9579);
// EXTERNAL MODULE: ./src/components/Typography.tsx
var Typography = __webpack_require__(479);
;// CONCATENATED MODULE: ./src/data/navbarNavigations.ts
const navbarNavigations = [{
  title: 'Home',
  child: [{
    title: 'Super Store',
    url: '/home-1'
  }, {
    title: 'Grocery',
    url: '/home-2'
  }, {
    title: 'Shop v3',
    url: '/home-3'
  }, {
    title: 'Shop v4',
    url: '/home-4'
  }]
}, {
  title: 'Pages',
  child: [{
    title: 'Sale Page',
    child: [{
      title: 'Version 1',
      url: '/sale-page-1'
    }, {
      title: 'Version 2',
      url: '/sale-page-2'
    }]
  }, {
    title: 'Vendor',
    child: [{
      title: 'All vendors',
      url: '/shops'
    }, {
      title: 'Vendor store',
      url: '/shop/34324'
    }]
  }, {
    title: 'Shop',
    child: [{
      title: 'Search product',
      url: '/product/search/mobile phone'
    }, {
      title: 'Single product',
      url: '/product/34324321'
    }, {
      title: 'Cart',
      url: '/cart'
    }, {
      title: 'Checkout',
      url: '/checkout'
    }, {
      title: 'Alternative Checkout',
      url: '/checkout-alternative'
    }, {
      title: 'Order confirmation',
      url: '/order-confirmation'
    }]
  }]
}, {
  title: 'User Account',
  child: [{
    title: 'Orders',
    child: [{
      title: 'Order List',
      url: '/orders'
    }, {
      title: 'Order Details',
      url: '/orders/5452423'
    }]
  }, {
    title: 'Profile',
    child: [{
      title: 'View Profile',
      url: '/profile'
    }, {
      title: 'Edit Profile',
      url: '/profile/edit'
    }]
  }, {
    title: 'Address',
    child: [{
      title: 'Address List',
      url: '/address'
    }, {
      title: 'Add Address',
      url: '/address/512474'
    }]
  }, {
    title: 'Support tickets',
    child: [{
      title: 'All tickets',
      url: '/support-tickets'
    }, {
      title: 'Ticket details',
      url: '/support-tickets/512474'
    }]
  }, {
    title: 'Wishlist',
    url: '/wish-list'
  }]
}, {
  title: 'Vendor Account',
  child: [{
    title: 'Dashboard',
    url: '/vendor/dashboard'
  }, {
    title: 'Products',
    child: [{
      title: 'All products',
      url: '/vendor/products'
    }, {
      title: 'Add/Edit product',
      url: '/vendor/products/248104'
    }]
  }, {
    title: 'Orders',
    child: [{
      title: 'All orders',
      url: '/vendor/orders'
    }, {
      title: 'Order details',
      url: '/vendor/orders/248104'
    }]
  }, {
    title: 'Profile',
    url: '/vendor/account-settings'
  }]
}, {
  title: 'Back to Demos',
  url: '/'
}];
/* harmony default export */ var data_navbarNavigations = (navbarNavigations);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "@material-ui/icons/ArrowRight"
var ArrowRight_ = __webpack_require__(8567);
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight_);
// EXTERNAL MODULE: external "@material-ui/icons/ChevronRight"
var ChevronRight_ = __webpack_require__(835);
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/navbar/Navbar.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // component props interface

// const common css style
const navLinkStyle = {
  cursor: 'pointer',
  marginRight: '2rem',
  transition: 'color 150ms ease-in-out',
  '&:hover': {
    color: 'primary.main'
  },
  '&:last-child': {
    marginRight: '0'
  }
}; // style components

const StyledNavLink = (0,core_.styled)(NavLink/* default */.Z)(() => _objectSpread({}, navLinkStyle));
const ParentNav = (0,core_.styled)(core_.Box)(({
  theme
}) => ({
  '&:hover': {
    color: theme.palette.primary.main,
    '& > .parent-nav-item': {
      display: 'block'
    }
  }
}));
const ParentNavItem = (0,core_.styled)(core_.Box)(() => ({
  display: 'none',
  position: 'absolute',
  top: 0,
  left: '100%',
  zIndex: 5
}));
const NavBarWrapper = (0,core_.styled)(BazarCard/* default */.Z)(({
  theme
}) => ({
  display: 'block',
  position: 'relative',
  height: '60px',
  borderRadius: '0px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));
const InnerContainer = (0,core_.styled)(core_.Container)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%'
}));
const CategoryMenuButton = (0,core_.styled)(BazarButton/* default */.Z)(({
  theme
}) => ({
  width: '278px',
  height: '40px',
  px: '1rem',
  backgroundColor: theme.palette.grey[100]
}));

const Navbar = ({
  navListOpen,
  hideCategories
}) => {
  const renderNestedNav = (list, isRoot = false) => {
    return list === null || list === void 0 ? void 0 : list.map(nav => {
      if (isRoot) {
        if (nav.url && nav.extLink) return /*#__PURE__*/jsx_runtime_.jsx(StyledNavLink, {
          href: nav.url,
          target: "_blank",
          rel: "noopener noreferrer",
          children: nav.title
        }, nav.title);else if (nav.url) return /*#__PURE__*/jsx_runtime_.jsx(StyledNavLink, {
          href: nav.url,
          children: nav.title
        }, nav.title);
        if (nav.child) return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
          sx: {
            '&:hover': {
              '& > .child-nav-item': {
                display: 'block'
              }
            }
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
            sx: navLinkStyle,
            children: nav.title
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
            className: "child-nav-item",
            sx: {
              display: 'none',
              position: 'absolute',
              left: 0,
              top: '100%',
              zIndex: 5
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(BazarCard/* default */.Z, {
              sx: {
                mt: '1.25rem',
                py: '0.5rem',
                minWidth: '230px'
              },
              elevation: 3,
              children: renderNestedNav(nav.child)
            })
          })]
        }, nav.title);
      } else {
        if (nav.url) return /*#__PURE__*/jsx_runtime_.jsx(NavLink/* default */.Z, {
          href: nav.url,
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
            children: nav.title
          })
        }, nav.title);
        if (nav.child) return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ParentNav, {
          position: "relative",
          minWidth: "230px",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.MenuItem, {
            color: "grey.700",
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
              flex: "1 1 0",
              component: "span",
              children: nav.title
            }), /*#__PURE__*/jsx_runtime_.jsx((ArrowRight_default()), {
              fontSize: "small"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(ParentNavItem, {
            className: "parent-nav-item",
            pl: 1,
            children: /*#__PURE__*/jsx_runtime_.jsx(BazarCard/* default */.Z, {
              sx: {
                py: '0.5rem',
                minWidth: '230px'
              },
              elevation: 3,
              children: renderNestedNav(nav.child)
            })
          })]
        }, nav.title);
      }
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(NavBarWrapper, {
    elevation: 2,
    hoverEffect: false,
    children: !hideCategories ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(InnerContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CategoryMenu/* default */.Z, {
        open: navListOpen,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CategoryMenuButton, {
          variant: "text",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Category/* default */.Z, {
            fontSize: "small"
          }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* Paragraph */.nv, {
            fontWeight: "600",
            textAlign: "left",
            flex: "1 1 0",
            ml: 1.25,
            color: "grey.600",
            children: "Categories"
          }), /*#__PURE__*/jsx_runtime_.jsx((ChevronRight_default()), {
            className: "dropdown-icon",
            fontSize: "small"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
        children: renderNestedNav(data_navbarNavigations, true)
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(InnerContainer, {
      sx: {
        justifyContent: 'flex-end'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
        children: renderNestedNav(data_navbarNavigations, true)
      })
    })
  });
};

/* harmony default export */ var navbar_Navbar = (Navbar);

/***/ })

};
;