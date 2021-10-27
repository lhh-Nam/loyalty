exports.id = "src_contexts_app_AppContext_tsx";
exports.ids = ["src_contexts_app_AppContext_tsx"];
exports.modules = {

/***/ "./src/contexts/app/AppContext.tsx":
/*!*****************************************!*\
  !*** ./src/contexts/app/AppContext.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppProvider": function() { return /* binding */ AppProvider; },
/* harmony export */   "useAppContext": function() { return /* binding */ useAppContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/rootReducer */ "./src/reducers/rootReducer.ts");

var _jsxFileName = "C:\\Users\\votri\\Workspaces\\loyalty\\src\\contexts\\app\\AppContext.tsx";
 // import { ContextDevTool } from "react-context-devtool";


const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  state: _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__.initialState,
  dispatch: () => {}
});
const AppProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__.rootReducer, _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__.initialState);
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return {
      state,
      dispatch
    };
  }, [state, dispatch]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {
    value: contextValue,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};
const useAppContext = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);
/* harmony default export */ __webpack_exports__["default"] = (AppContext);

/***/ }),

/***/ "./src/reducers/cartReducer.ts":
/*!*************************************!*\
  !*** ./src/reducers/cartReducer.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cartInitialState": function() { return /* binding */ cartInitialState; },
/* harmony export */   "cartReducer": function() { return /* binding */ cartReducer; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const CHANGE_CART_AMOUNT = 'CHANGE_CART_AMOUNT';
const cartInitialState = {
  cartList: [{
    price: 250,
    name: 'Ford 2019',
    imgUrl: '/assets/images/products/Automotive/1.Ford2019.png',
    id: '7222243834583537',
    qty: 1
  }, {
    price: 250,
    name: 'Porsche 2020',
    imgUrl: '/assets/images/products/Automotive/28.Porsche2020.png',
    id: '38553442244076086',
    qty: 1
  }, {
    price: 250,
    name: 'Heavy 20kt Gold Necklace',
    imgUrl: '/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png',
    id: '9573201630529315',
    qty: 1
  }]
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CART_AMOUNT:
      let cartList = state.cartList;
      let cartItem = action.payload;
      let exist = cartList.find(item => item.id === cartItem.id);
      if (cartItem.qty < 1) return {
        cartList: cartList.filter(item => item.id !== cartItem.id)
      };else if (exist) return {
        cartList: cartList.map(item => {
          if (item.id === cartItem.id) return _objectSpread(_objectSpread({}, item), {}, {
            qty: cartItem.qty
          });else return item;
        })
      };else return {
        cartList: [...cartList, cartItem]
      };

    default:
      {}
  }
};

/***/ }),

/***/ "./src/reducers/combineReducers.ts":
/*!*****************************************!*\
  !*** ./src/reducers/combineReducers.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const combineReducers = reducers => {
  return (state = {}, action) => {
    const newState = {};

    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }

    return newState;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (combineReducers);

/***/ }),

/***/ "./src/reducers/layoutReducer.ts":
/*!***************************************!*\
  !*** ./src/reducers/layoutReducer.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layoutInitialState": function() { return /* binding */ layoutInitialState; },
/* harmony export */   "layoutReducer": function() { return /* binding */ layoutReducer; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const layoutInitialState = {
  isHeaderFixed: false
};
const layoutReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
      return _objectSpread(_objectSpread({}, state), {}, {
        isHeaderFixed: action.payload
      });

    default:
      {}
  }
};

/***/ }),

/***/ "./src/reducers/rootReducer.ts":
/*!*************************************!*\
  !*** ./src/reducers/rootReducer.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "rootReducer": function() { return /* binding */ rootReducer; }
/* harmony export */ });
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartReducer */ "./src/reducers/cartReducer.ts");
/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combineReducers */ "./src/reducers/combineReducers.ts");
/* harmony import */ var _layoutReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layoutReducer */ "./src/reducers/layoutReducer.ts");



const initialState = {
  layout: _layoutReducer__WEBPACK_IMPORTED_MODULE_2__.layoutInitialState,
  cart: _cartReducer__WEBPACK_IMPORTED_MODULE_0__.cartInitialState
};
const rootReducer = (0,_combineReducers__WEBPACK_IMPORTED_MODULE_1__.default)({
  layout: _layoutReducer__WEBPACK_IMPORTED_MODULE_2__.layoutReducer,
  cart: _cartReducer__WEBPACK_IMPORTED_MODULE_0__.cartReducer
});

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXphci8uL3NyYy9jb250ZXh0cy9hcHAvQXBwQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvcmVkdWNlcnMvY2FydFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvcmVkdWNlcnMvY29tYmluZVJlZHVjZXJzLnRzIiwid2VicGFjazovL2JhemFyLy4vc3JjL3JlZHVjZXJzL2xheW91dFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vYmF6YXIvLi9zcmMvcmVkdWNlcnMvcm9vdFJlZHVjZXIudHMiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzdGF0ZSIsImluaXRpYWxTdGF0ZSIsImRpc3BhdGNoIiwiQXBwUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJyb290UmVkdWNlciIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIkNIQU5HRV9DQVJUX0FNT1VOVCIsImNhcnRJbml0aWFsU3RhdGUiLCJjYXJ0TGlzdCIsInByaWNlIiwibmFtZSIsImltZ1VybCIsImlkIiwicXR5IiwiY2FydFJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiY2FydEl0ZW0iLCJwYXlsb2FkIiwiZXhpc3QiLCJmaW5kIiwiaXRlbSIsImZpbHRlciIsIm1hcCIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHVjZXJzIiwibmV3U3RhdGUiLCJrZXkiLCJsYXlvdXRJbml0aWFsU3RhdGUiLCJpc0hlYWRlckZpeGVkIiwibGF5b3V0UmVkdWNlciIsImxheW91dCIsImNhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFXQSxNQUFNQSxVQUFVLGdCQUFHQyxvREFBYSxDQUFlO0FBQzdDQyxPQUFLLEVBQUVDLCtEQURzQztBQUU3Q0MsVUFBUSxFQUFFLE1BQU0sQ0FBRTtBQUYyQixDQUFmLENBQWhDO0FBS08sTUFB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aEIsRUFBMEI7QUFDeEJDLGNBQVEsQ0FBQ0MsR0FBRCxDQUFSLEdBQWdCRixRQUFRLENBQUNFLEdBQUQsQ0FBUixDQUFjaEMsS0FBSyxDQUFDZ0MsR0FBRCxDQUFuQixFQUEwQlosTUFBMUIsQ0FBaEI7QUFDRDs7QUFDRCxXQUFPVyxRQUFQO0FBQ0QsR0FORDtBQU9ELENBUkQ7O0FBVUEsK0RBQWVGLGVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTyxNQUFNSSxrQkFBa0IsR0FBRztBQUNoQ0MsZUFBYSxFQUFFO0FBRGlCLENBQTNCO0FBT0EsTUFBTUMsYUFBYSxHQUFHLENBQUNuQyxLQUFELEVBQXlCb0IsTUFBekIsS0FBc0Q7QUFDakYsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxlQUFMO0FBQ0UsNkNBQ0tyQixLQURMO0FBRUVrQyxxQkFBYSxFQUFFZCxNQUFNLENBQUNHO0FBRnhCOztBQUtGO0FBQVMsT0FDUjtBQVJIO0FBVUQsQ0FYTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFDQTtBQUNBO0FBSU8sTUFBTXRCLFlBQVksR0FBRztBQUMxQm1DLFFBQU0sRUFBRUgsOERBRGtCO0FBRTFCSSxNQUFJLEVBQUV6QiwwREFBZ0JBO0FBRkksQ0FBckI7QUFLQSxNQUFNTixXQUFXLEdBQUd1Qix5REFBZSxDQUFDO0FBQ3pDTyxRQUFNLEVBQUVELHlEQURpQztBQUV6Q0UsTUFBSSxFQUFFbEIscURBQVdBO0FBRndCLENBQUQsQ0FBbkMsQyIsImZpbGUiOiJzcmNfY29udGV4dHNfYXBwX0FwcENvbnRleHRfdHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgQ29udGV4dERldlRvb2wgfSBmcm9tIFwicmVhY3QtY29udGV4dC1kZXZ0b29sXCI7XHJcbmltcG9ydCB7XHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJvb3RBY3Rpb25UeXBlLFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG59IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyJ1xyXG5cclxuaW50ZXJmYWNlIENvbnRleHRQcm9wcyB7XHJcbiAgc3RhdGU6IHR5cGVvZiBpbml0aWFsU3RhdGVcclxuICBkaXNwYXRjaDogKGFyZ3M6IHJvb3RBY3Rpb25UeXBlKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHRQcm9wcz4oe1xyXG4gIHN0YXRlOiBpbml0aWFsU3RhdGUsXHJcbiAgZGlzcGF0Y2g6ICgpID0+IHt9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcFByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4geyBzdGF0ZSwgZGlzcGF0Y2ggfVxyXG4gIH0sIFtzdGF0ZSwgZGlzcGF0Y2hdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgIHsvKiA8Q29udGV4dERldlRvb2wgY29udGV4dD17QXBwQ29udGV4dH0gaWQ9XCJhcHAtY29udGV4dFwiIGRpc3BsYXlOYW1lPVwiQXBwXCIgLz4gKi99XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBcHBDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dDxDb250ZXh0UHJvcHM+KEFwcENvbnRleHQpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0XHJcbiIsImNvbnN0IENIQU5HRV9DQVJUX0FNT1VOVCA9ICdDSEFOR0VfQ0FSVF9BTU9VTlQnXHJcblxyXG5leHBvcnQgY29uc3QgY2FydEluaXRpYWxTdGF0ZSA9IHtcclxuICBjYXJ0TGlzdDogW1xyXG4gICAge1xyXG4gICAgICBwcmljZTogMjUwLFxyXG4gICAgICBuYW1lOiAnRm9yZCAyMDE5JyxcclxuICAgICAgaW1nVXJsOiAnL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdHMvQXV0b21vdGl2ZS8xLkZvcmQyMDE5LnBuZycsXHJcbiAgICAgIGlkOiAnNzIyMjI0MzgzNDU4MzUzNycsXHJcbiAgICAgIHF0eTogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByaWNlOiAyNTAsXHJcbiAgICAgIG5hbWU6ICdQb3JzY2hlIDIwMjAnLFxyXG4gICAgICBpbWdVcmw6ICcvYXNzZXRzL2ltYWdlcy9wcm9kdWN0cy9BdXRvbW90aXZlLzI4LlBvcnNjaGUyMDIwLnBuZycsXHJcbiAgICAgIGlkOiAnMzg1NTM0NDIyNDQwNzYwODYnLFxyXG4gICAgICBxdHk6IDEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcmljZTogMjUwLFxyXG4gICAgICBuYW1lOiAnSGVhdnkgMjBrdCBHb2xkIE5lY2tsYWNlJyxcclxuICAgICAgaW1nVXJsOlxyXG4gICAgICAgICcvYXNzZXRzL2ltYWdlcy9wcm9kdWN0cy9GYXNoaW9uL0pld2VsbGVyeS85LkhlYXZ5MjBrdEdvbGROZWNrbGFjZS5wbmcnLFxyXG4gICAgICBpZDogJzk1NzMyMDE2MzA1MjkzMTUnLFxyXG4gICAgICBxdHk6IDEsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENhcnRJdGVtID0ge1xyXG4gIGlkOiBzdHJpbmcgfCBudW1iZXJcclxuICBuYW1lOiBzdHJpbmdcclxuICBxdHk6IG51bWJlclxyXG4gIHByaWNlOiBudW1iZXJcclxuICBpbWdVcmw/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgY2FydFN0YXRlVHlwZSA9IHtcclxuICBjYXJ0TGlzdDogQ2FydEl0ZW1bXVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBjYXJ0QWN0aW9uVHlwZSA9IHtcclxuICB0eXBlOiB0eXBlb2YgQ0hBTkdFX0NBUlRfQU1PVU5UXHJcbiAgcGF5bG9hZDogQ2FydEl0ZW1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlOiBjYXJ0U3RhdGVUeXBlLCBhY3Rpb246IGNhcnRBY3Rpb25UeXBlKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBDSEFOR0VfQ0FSVF9BTU9VTlQ6XHJcbiAgICAgIGxldCBjYXJ0TGlzdCA9IHN0YXRlLmNhcnRMaXN0XHJcbiAgICAgIGxldCBjYXJ0SXRlbSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGxldCBleGlzdCA9IGNhcnRMaXN0LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGNhcnRJdGVtLmlkKVxyXG5cclxuICAgICAgaWYgKGNhcnRJdGVtLnF0eSA8IDEpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGNhcnRMaXN0OiBjYXJ0TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGNhcnRJdGVtLmlkKSxcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGV4aXN0KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjYXJ0TGlzdDogY2FydExpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBjYXJ0SXRlbS5pZCkgcmV0dXJuIHsgLi4uaXRlbSwgcXR5OiBjYXJ0SXRlbS5xdHkgfVxyXG4gICAgICAgICAgICBlbHNlIHJldHVybiBpdGVtXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgY2FydExpc3Q6IFsuLi5jYXJ0TGlzdCwgY2FydEl0ZW1dLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuXHJcbmludGVyZmFjZSBSZWR1Y2VycyB7XHJcbiAgW2tleTogc3RyaW5nXTogUmVkdWNlcjxhbnksIGFueT5cclxufVxyXG5cclxuY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzOiBSZWR1Y2VycykgPT4ge1xyXG4gIHJldHVybiAoc3RhdGU6IGFueSA9IHt9LCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RhdGU6IGFueSA9IHt9XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gcmVkdWNlcnMpIHtcclxuICAgICAgbmV3U3RhdGVba2V5XSA9IHJlZHVjZXJzW2tleV0oc3RhdGVba2V5XSwgYWN0aW9uKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnNcclxuIiwiZXhwb3J0IGNvbnN0IGxheW91dEluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0hlYWRlckZpeGVkOiBmYWxzZSxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgbGF5b3V0U3RhdGVUeXBlID0gdHlwZW9mIGxheW91dEluaXRpYWxTdGF0ZVxyXG5leHBvcnQgdHlwZSBsYXlvdXRBY3Rpb25UeXBlID0geyB0eXBlOiAnVE9HR0xFX0hFQURFUic7IHBheWxvYWQ6IGJvb2xlYW4gfVxyXG5cclxuZXhwb3J0IGNvbnN0IGxheW91dFJlZHVjZXIgPSAoc3RhdGU6IGxheW91dFN0YXRlVHlwZSwgYWN0aW9uOiBsYXlvdXRBY3Rpb25UeXBlKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnVE9HR0xFX0hFQURFUic6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNIZWFkZXJGaXhlZDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNhcnRBY3Rpb25UeXBlLCBjYXJ0SW5pdGlhbFN0YXRlLCBjYXJ0UmVkdWNlciB9IGZyb20gJy4vY2FydFJlZHVjZXInXHJcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9jb21iaW5lUmVkdWNlcnMnXHJcbmltcG9ydCB7IGxheW91dEFjdGlvblR5cGUsIGxheW91dEluaXRpYWxTdGF0ZSwgbGF5b3V0UmVkdWNlciB9IGZyb20gJy4vbGF5b3V0UmVkdWNlcidcclxuXHJcbmV4cG9ydCB0eXBlIHJvb3RBY3Rpb25UeXBlID0gbGF5b3V0QWN0aW9uVHlwZSB8IGNhcnRBY3Rpb25UeXBlXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxheW91dDogbGF5b3V0SW5pdGlhbFN0YXRlLFxyXG4gIGNhcnQ6IGNhcnRJbml0aWFsU3RhdGUsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgbGF5b3V0OiBsYXlvdXRSZWR1Y2VyLFxyXG4gIGNhcnQ6IGNhcnRSZWR1Y2VyLFxyXG59KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9