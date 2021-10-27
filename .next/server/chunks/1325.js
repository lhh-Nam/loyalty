exports.id = 1325;
exports.ids = [1325];
exports.modules = {

/***/ 1325:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ sticky_Sticky; }
});

// UNUSED EXPORTS: StyledBox

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8604);
// EXTERNAL MODULE: external "@material-ui/styled-engine"
var styled_engine_ = __webpack_require__(5212);
;// CONCATENATED MODULE: ./src/animations/keyframes.tsx

const slideDown = styled_engine_.keyframes`
    from {transform: translateY(-200%)}
    to {transform: translateY(0)}
`;
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/sticky/Sticky.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const StyledBox = (0,styles_.styled)((_ref) => {
  let {
    children,
    componentHeight,
    fixedOn,
    fixed
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "componentHeight", "fixedOn", "fixed"]);

  return /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread({}, rest), {}, {
    children: children
  }));
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
    animation: `${slideDown} 400ms ${theme.transitions.easing.easeInOut}`
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
  } = (0,external_react_.useState)(false);
  const {
    0: parentHeight,
    1: setParentHeight
  } = (0,external_react_.useState)(0);
  const elementRef = (0,external_react_.useRef)(null);
  const positionRef = (0,external_react_.useRef)(0);
  const scrollListener = (0,external_react_.useCallback)(() => {
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
  (0,external_react_.useEffect)(() => {
    if (!window) return;
    window.addEventListener('scroll', scrollListener);
    window.addEventListener('resize', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('resize', scrollListener);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    var _elementRef$current3;

    if (!positionRef.current) {
      var _elementRef$current2;

      positionRef.current = (_elementRef$current2 = elementRef.current) === null || _elementRef$current2 === void 0 ? void 0 : _elementRef$current2.offsetTop;
    }

    setParentHeight(((_elementRef$current3 = elementRef.current) === null || _elementRef$current3 === void 0 ? void 0 : _elementRef$current3.offsetHeight) || 0);
  }, [elementRef.current, children]);
  (0,external_react_.useEffect)(() => {
    if (onSticky) onSticky(fixed);
  }, [fixed]);
  return /*#__PURE__*/jsx_runtime_.jsx(StyledBox, {
    fixedOn: fixedOn,
    componentHeight: parentHeight,
    fixed: fixed,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_clsx_default()({
        hold: !fixed,
        fixed: fixed
      }),
      ref: elementRef,
      children: children
    })
  });
};

/* harmony default export */ var sticky_Sticky = (Sticky);

/***/ })

};
;