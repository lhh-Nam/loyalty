exports.id = 3624;
exports.ids = [3624];
exports.modules = {

/***/ 3624:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout_CheckoutNavLayout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/navbar/Navbar.tsx + 1 modules
var Navbar = __webpack_require__(8248);
// EXTERNAL MODULE: ./src/components/FlexBox.tsx
var FlexBox = __webpack_require__(94);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "@material-ui/system"
var system_ = __webpack_require__(9137);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/stepper/Stepper.tsx







const Stepper = ({
  selectedStep,
  stepperList,
  onChange
}) => {
  const {
    0: selected,
    1: setSelected
  } = (0,external_react_.useState)(selectedStep - 1);

  const handleStepClick = (step, ind) => () => {
    if (!step.disabled) {
      setSelected(ind);
      if (onChange) onChange(ind);
    }
  };

  (0,external_react_.useEffect)(() => {
    setSelected(selectedStep - 1);
  }, [selectedStep]);
  return /*#__PURE__*/jsx_runtime_.jsx(FlexBox/* default */.Z, {
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    my: "-4px",
    children: stepperList.map((step, ind) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Chip, {
        disabled: step.disabled,
        label: `${ind + 1}. ${step.title}`,
        onClick: handleStepClick(step, ind),
        sx: {
          backgroundColor: ind <= selected ? 'primary.main' : 'primary.light',
          color: ind <= selected ? 'primary.contrastText' : 'primary.main',
          p: '0.5rem 1rem',
          fontSize: '14px',
          fontWeight: '600',
          my: '4px',
          '&:hover:not(:disabled)': {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText'
          }
        }
      }), ind < stepperList.length - 1 && /*#__PURE__*/jsx_runtime_.jsx(system_.Box, {
        width: "50px",
        height: "4px",
        bgcolor: ind < selected ? 'primary.main' : 'primary.light'
      })]
    }, step.title))
  });
};

Stepper.defaultProps = {
  selectedStep: 1
};
/* harmony default export */ var stepper_Stepper = (Stepper);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/layout/AppLayout.tsx
var AppLayout = __webpack_require__(1535);
;// CONCATENATED MODULE: ./src/components/layout/CheckoutNavLayout.tsx










const CheckoutNavLayout = ({
  children
}) => {
  const {
    0: selectedStep,
    1: setSelectedStep
  } = (0,external_react_.useState)(0);
  const router = (0,router_.useRouter)();
  const {
    pathname
  } = router;

  const handleStepChange = step => {
    switch (step) {
      case 0:
        router.push('/cart');
        break;

      case 1:
        router.push('/checkout');
        break;

      case 2:
        router.push('/payment');
        break;

      case 3:
        router.push('/orders');
        break;

      default:
        break;
    }
  };

  (0,external_react_.useEffect)(() => {
    switch (pathname) {
      case '/cart':
        setSelectedStep(1);
        break;

      case '/checkout':
        setSelectedStep(2);
        break;

      case '/payment':
        setSelectedStep(3);
        break;

      default:
        break;
    }
  }, [pathname]);
  return /*#__PURE__*/jsx_runtime_.jsx(AppLayout/* default */.Z, {
    navbar: /*#__PURE__*/jsx_runtime_.jsx(Navbar/* default */.Z, {}),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Container, {
      sx: {
        my: '2rem'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(system_.Box, {
        mb: 3,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          container: true,
          spacing: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            item: true,
            lg: 8,
            md: 8,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(stepper_Stepper, {
              stepperList: stepperList,
              selectedStep: selectedStep,
              onChange: handleStepChange
            })
          })
        })
      }), children]
    })
  });
};

const stepperList = [{
  title: 'Cart',
  disabled: false
}, {
  title: 'Details',
  disabled: false
}, {
  title: 'Payment',
  disabled: false
}, {
  title: 'Review',
  disabled: true
}];
/* harmony default export */ var layout_CheckoutNavLayout = (CheckoutNavLayout);

/***/ })

};
;