exports.id = 3566;
exports.ids = [3566];
exports.modules = {

/***/ 3566:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5405);
/* harmony import */ var _component_BazarMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9382);
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94);
/* harmony import */ var _component_nav_link_NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9579);
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(479);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7009);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8604);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_CallOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3465);
/* harmony import */ var _material_ui_icons_CallOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CallOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5887);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7476);
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9653);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
















const TopbarWrapper = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.styled)('div')(({
  theme
}) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  height: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .layoutConstant.topbarHeight */ .P.topbarHeight,
  fontSize: 12,
  '& .topbarLeft': {
    '& .logo': {
      display: 'none'
    },
    '& .title': {
      marginLeft: '10px'
    },
    '@media only screen and (max-width: 900px)': {
      '& .logo': {
        display: 'block'
      },
      '& > *:not(.logo)': {
        display: 'none'
      }
    }
  },
  '& .topbarRight': {
    '& .link': {
      paddingRight: 30,
      color: theme.palette.secondary.contrastText
    },
    '@media only screen and (max-width: 900px)': {
      '& .link': {
        display: 'none'
      }
    }
  },
  '& .smallRoundedImage': {
    height: 15,
    width: 25,
    borderRadius: 2
  },
  '& .handler': {
    height: _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .layoutConstant.topbarHeight */ .P.topbarHeight
  },
  '& .menuTitle': {
    fontSize: 12,
    marginLeft: '0.5rem',
    fontWeight: 600
  },
  '& .menuItem': {
    minWidth: 100
  },
  '& .marginRight': {
    marginRight: '1.25rem'
  }
}));

const Topbar = () => {
  const {
    0: currency,
    1: setCurrency
  } = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(currencyList[0]);
  const {
    0: language,
    1: setLanguage
  } = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(languageList[0]);

  const handleCurrencyClick = curr => () => {
    setCurrency(curr);
  };

  const handleLanguageClick = lang => () => {
    console.log(lang);
    setLanguage(lang);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(() => {// get language from browser
    // console.log(navigator.language);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopbarWrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        className: "topbarLeft",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "logo",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_13__.default, {
            href: "/",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarImage__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
              display: "block",
              height: "28px",
              src: "/assets/loyalty/logo-f5s.jpg",
              alt: "logo"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_CallOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {
            fontSize: "small"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
            className: "title",
            children: "0909347980"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          alignItems: "center",
          ml: 2.5,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_11___default()), {
            fontSize: "small"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
            className: "title",
            children: "support@f5seconds.vn"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        className: "topbarRight",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_nav_link_NavLink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          className: "link",
          href: "/faq",
          children: "Theme FAQ\"s"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_nav_link_NavLink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          className: "link",
          href: "/help",
          children: "Need Help?"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarMenu__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          handler: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7___default()), {
            className: "handler marginRight",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
              className: "menuTitle",
              children: language.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default()), {
              fontSize: "inherit"
            })]
          }),
          children: languageList.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
            className: "menuItem",
            onClick: handleLanguageClick(item),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
              className: "menuTitle",
              children: item.title
            })
          }, item.title))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarMenu__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          direction: "right",
          handler: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7___default()), {
            className: "handler",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
              className: "menuTitle",
              children: currency.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default()), {
              fontSize: "inherit"
            })]
          }),
          children: currencyList.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
            className: "menuItem",
            onClick: handleCurrencyClick(item),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
              className: "menuTitle",
              children: item.title
            })
          }, item.title))
        })]
      })]
    })
  });
};

const languageList = [{
  title: 'EN',
  imgUrl: '/assets/images/flags/usa.png'
}, {
  title: 'BN',
  imgUrl: '/assets/images/flags/bd.png'
}, {
  title: 'HN',
  imgUrl: '/assets/images/flags/in.png'
}];
const currencyList = [{
  title: 'USD',
  imgUrl: '/assets/images/flags/usa.png'
}, {
  title: 'EUR',
  imgUrl: '/assets/images/flags/uk.png'
}, {
  title: 'BDT',
  imgUrl: '/assets/images/flags/bd.png'
}, {
  title: 'INR',
  imgUrl: '/assets/images/flags/in.png'
}];
/* harmony default export */ __webpack_exports__["Z"] = (Topbar);

/***/ })

};
;