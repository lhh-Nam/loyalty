(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 6436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cache": function() { return /* binding */ cache; },
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/contexts/app/AppContext.tsx + 4 modules
var AppContext = __webpack_require__(6805);
// EXTERNAL MODULE: external "@emotion/cache"
var cache_ = __webpack_require__(7497);
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8604);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/theme/theme.ts + 1 modules
var theme = __webpack_require__(1162);
;// CONCATENATED MODULE: ./src/theme/MuiTheme.tsx







const MuiTheme = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
    theme: theme/* default */.Z,
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.CssBaseline, {}), children]
  });
};

/* harmony default export */ var theme_MuiTheme = (MuiTheme);
;// CONCATENATED MODULE: ./src/utils/GoogleAnalytics.tsx




const GoogleAnalytics = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-FLCDXWTVMD"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      dangerouslySetInnerHTML: {
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FLCDXWTVMD');
          `
      }
    })]
  });
};

/* harmony default export */ var utils_GoogleAnalytics = (GoogleAnalytics);
;// CONCATENATED MODULE: ./src/utils/OpenGraphTags.tsx




const OpenGraphTags = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:url",
      content: "https://bazar-react.vercel.app/landing"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:title",
      content: "Vay online"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:description",
      content: "Vay online"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:image",
      content: "/assets/loyalty/preview.jpg"
    })]
  });
};

/* harmony default export */ var utils_OpenGraphTags = (OpenGraphTags);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const cache = cache_default()({
  key: 'css',
  prepend: true
}); //Binding events.

router_default().events.on('routeChangeStart', () => external_nprogress_default().start());
router_default().events.on('routeChangeComplete', () => external_nprogress_default().done());
router_default().events.on('routeChangeError', () => external_nprogress_default().done());
external_nprogress_default().configure({
  showSpinner: false
});

const App = ({
  Component,
  pageProps
}) => {
  const Layout = Component.layout || external_react_.Fragment;
  (0,external_react_.useEffect)(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.CacheProvider, {
    value: cache,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "Content-Type",
        content: "text/html; charset=utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx(utils_GoogleAnalytics, {}), /*#__PURE__*/jsx_runtime_.jsx(utils_OpenGraphTags, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(AppContext/* AppProvider */.wI, {
      children: /*#__PURE__*/jsx_runtime_.jsx(theme_MuiTheme, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
        })
      })
    })]
  });
}; // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


/* harmony default export */ var _app = (App);

/***/ }),

/***/ 7497:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/cache");;

/***/ }),

/***/ 7381:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 8604:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [6805,1162], function() { return __webpack_exec__(6436); });
module.exports = __webpack_exports__;

})();