exports.id = 6805;
exports.ids = [6805];
exports.modules = {

/***/ 6805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wI": function() { return /* binding */ AppProvider; },
  "bp": function() { return /* binding */ useAppContext; }
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/reducers/cartReducer.ts
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
;// CONCATENATED MODULE: ./src/reducers/combineReducers.ts
const combineReducers = reducers => {
  return (state = {}, action) => {
    const newState = {};

    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }

    return newState;
  };
};

/* harmony default export */ var reducers_combineReducers = (combineReducers);
;// CONCATENATED MODULE: ./src/reducers/layoutReducer.ts
function layoutReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function layoutReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layoutReducer_ownKeys(Object(source), true).forEach(function (key) { layoutReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layoutReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layoutReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const layoutInitialState = {
  isHeaderFixed: false
};
const layoutReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
      return layoutReducer_objectSpread(layoutReducer_objectSpread({}, state), {}, {
        isHeaderFixed: action.payload
      });

    default:
      {}
  }
};
;// CONCATENATED MODULE: ./src/reducers/rootReducer.ts



const initialState = {
  layout: layoutInitialState,
  cart: cartInitialState
};
const rootReducer = reducers_combineReducers({
  layout: layoutReducer,
  cart: cartReducer
});
;// CONCATENATED MODULE: ./src/contexts/app/AppContext.tsx

 // import { ContextDevTool } from "react-context-devtool";


const AppContext = /*#__PURE__*/(0,external_react_.createContext)({
  state: initialState,
  dispatch: () => {}
});
const AppProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,external_react_.useReducer)(rootReducer, initialState);
  const contextValue = (0,external_react_.useMemo)(() => {
    return {
      state,
      dispatch
    };
  }, [state, dispatch]);
  return /*#__PURE__*/jsx_runtime_.jsx(AppContext.Provider, {
    value: contextValue,
    children: children
  });
};
const useAppContext = () => (0,external_react_.useContext)(AppContext);
/* harmony default export */ var app_AppContext = ((/* unused pure expression or super */ null && (AppContext)));

/***/ })

};
;