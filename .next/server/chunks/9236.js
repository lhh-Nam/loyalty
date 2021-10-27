exports.id = 9236;
exports.ids = [9236];
exports.modules = {

/***/ 9236:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9458);
/* harmony import */ var _component_BazarImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5405);
/* harmony import */ var _component_BazarTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2747);
/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94);
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(479);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8604);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6234);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4929);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7717);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9440);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_14__);



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

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Card, _objectSpread(_objectSpread({}, rest), {}, {
    children: children
  }));
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCard, {
    elevation: 3,
    passwordVisibility: passwordVisibility,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
      className: "content",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H3, {
        textAlign: "center",
        mb: 1,
        children: "Welcome To Ecommerce"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Small */ .x4, {
        fontWeight: "600",
        fontSize: "12px",
        color: "grey.800",
        textAlign: "center",
        mb: 4.5,
        display: "block",
        children: "Log in with email & password"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarTextField__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
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
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarTextField__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
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
          endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
            size: "small",
            type: "button",
            onClick: togglePasswordVisibility,
            children: passwordVisibility ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default()), {
              className: "passwordEye",
              fontSize: "small"
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default()), {
              className: "passwordEye",
              fontSize: "small"
            })
          })
        },
        onBlur: handleBlur,
        onChange: handleChange,
        value: values.password || '',
        error: !!touched.password && !!errors.password,
        helperText: touched.password && errors.password
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarButton__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        variant: "contained",
        color: "primary",
        type: "submit",
        fullWidth: true,
        sx: {
          mb: '1.65rem',
          height: 44
        },
        children: "Login"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
        mb: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
          width: "200px",
          mx: "auto",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Divider, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_FlexBox__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          justifyContent: "center",
          mt: -1.625,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
            color: "grey.600",
            bgcolor: "background.paper",
            px: 2,
            children: "on"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_BazarButton__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        className: "facebookButton",
        size: "medium",
        fullWidth: true,
        sx: {
          mb: '10px',
          height: 44
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarImage__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          src: "/assets/images/icons/facebook-filled-white.svg",
          alt: "facebook"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
          fontSize: "12px",
          ml: 1,
          children: "Continue with Facebook"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_BazarButton__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        className: "googleButton",
        size: "medium",
        fullWidth: true,
        sx: {
          height: 44
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarImage__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          src: "/assets/images/icons/google-1.svg",
          alt: "facebook"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
          fontSize: "12px",
          ml: 1,
          children: "Continue with Google"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        justifyContent: "center",
        alignItems: "center",
        my: "1.25rem",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
          children: "Don\u2019t have account?"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_11__.default, {
          href: "/signup",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H6, {
              ml: 1,
              borderBottom: "1px solid",
              borderColor: "grey.900",
              children: "Sign Up"
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_FlexBox__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      justifyContent: "center",
      bgcolor: "grey.200",
      py: 2.5,
      children: ["Forgot your password?", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_11__.default, {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H6, {
            ml: 1,
            borderBottom: "1px solid",
            borderColor: "grey.900",
            children: "Reset It"
          })
        })
      })]
    })]
  });
};

const initialValues = {
  email: '',
  password: ''
};
const formSchema = yup__WEBPACK_IMPORTED_MODULE_14__.object().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_14__.string().email('invalid email').required('${path} is required'),
  password: yup__WEBPACK_IMPORTED_MODULE_14__.string().required('${path} is required')
});
/* harmony default export */ __webpack_exports__["Z"] = (Login);

/***/ })

};
;