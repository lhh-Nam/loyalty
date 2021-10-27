exports.id = 5935;
exports.ids = [5935];
exports.modules = {

/***/ 7636:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9137);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__);


const BazarRating = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Rating)((0,_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.compose)(_material_ui_system__WEBPACK_IMPORTED_MODULE_1__.spacing, _material_ui_system__WEBPACK_IMPORTED_MODULE_1__.typography));
BazarRating.defaultProps = {
  fontSize: '1.25rem'
};
/* harmony default export */ __webpack_exports__["Z"] = (BazarRating);

/***/ }),

/***/ 5935:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2818);
/* harmony import */ var _component_BazarRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7636);
/* harmony import */ var _component_LazyImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1292);
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(479);
/* harmony import */ var _context_app_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6805);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3762);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8777);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2685);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3486);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(608);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_RemoveRedEye__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4429);
/* harmony import */ var _material_ui_icons_RemoveRedEye__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveRedEye__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _FlexBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94);
/* harmony import */ var _products_ProductIntro__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3233);


















const StyledBazarCard = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.styled)(_component_BazarCard__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  margin: 'auto',
  overflow: 'hidden',
  transition: 'all 250ms ease-in-out',
  borderRadius: '8px',
  '&:hover': {
    '& .css-1i2n18j': {
      display: 'flex'
    }
  }
}));
const ImageWrapper = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box)(({
  theme
}) => ({
  position: 'relative',
  display: 'inline-block',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  }
}));
const StyledChip = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Chip)(() => ({
  position: 'absolute',
  fontSize: '10px',
  fontWeight: 600,
  paddingLeft: 3,
  paddingRight: 3,
  top: '10px',
  left: '10px',
  zIndex: 11
}));
const HoverIconWrapper = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box)(({
  theme
}) => ({
  display: 'none',
  flexDirection: 'column',
  position: 'absolute',
  top: '7px',
  right: '15px',
  cursor: 'pointer',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    display: 'flex'
  }
}));
const ContentWrapper = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box)(() => ({
  padding: '1rem',
  '& .title, & .categories': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}));

const ProductCard1 = ({
  off = 0,
  id,
  title,
  price,
  imgUrl,
  rating,
  hideRating,
  hoverEffect,
  showProductSize
}) => {
  const {
    0: isFavorite,
    1: setIsFavorite
  } = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const {
    state,
    dispatch
  } = (0,_context_app_AppContext__WEBPACK_IMPORTED_MODULE_5__/* .useAppContext */ .bp)();
  const cartItem = state.cart.cartList.find(item => item.id === id);
  const toggleDialog = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)(() => {
    setOpen(open => !open);
  }, []);

  const toggleIsFavorite = async () => {
    setIsFavorite(fav => !fav);
  };

  const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)(amount => () => {
    dispatch({
      type: 'CHANGE_CART_AMOUNT',
      payload: {
        name: title,
        qty: amount,
        price,
        imgUrl,
        id
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBazarCard, {
    hoverEffect: hoverEffect,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ImageWrapper, {
      children: [off !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip, {
        color: "primary",
        size: "small",
        label: `${off}% off`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HoverIconWrapper, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
          sx: {
            p: '6px'
          },
          onClick: toggleDialog,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_RemoveRedEye__WEBPACK_IMPORTED_MODULE_12___default()), {
            color: "secondary",
            fontSize: "small"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
          sx: {
            p: '6px'
          },
          onClick: toggleIsFavorite,
          children: isFavorite ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9___default()), {
            color: "primary",
            fontSize: "small"
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_10___default()), {
            fontSize: "small"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_13__.default, {
        href: `/product/${id}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LazyImage__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
            src: imgUrl,
            width: 0,
            height: 0,
            layout: "responsive",
            alt: title
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentWrapper, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
          flex: "1 1 0",
          minWidth: "0px",
          mr: 1,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_13__.default, {
            href: `/product/${id}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__.H3, {
                className: "title",
                fontSize: "14px",
                textAlign: "left",
                fontWeight: "600",
                color: "text.secondary",
                mb: 1,
                title: title,
                children: title
              })
            })
          }), !hideRating && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarRating__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            value: rating || 0,
            color: "warn",
            readOnly: true
          }), showProductSize && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Span */ .Dr, {
            color: "grey.600",
            mb: 1,
            display: "block",
            children: "300ml"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
            alignItems: "center",
            mt: 0.5,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
              pr: 1,
              fontWeight: "600",
              color: "primary.main",
              children: ["$", (price - price * off / 100).toFixed(2)]
            }), !!off && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
              color: "grey.600",
              fontWeight: "600",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                children: price === null || price === void 0 ? void 0 : price.toFixed(2)
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
          className: "add-cart",
          flexDirection: "column-reverse",
          alignItems: "center",
          justifyContent: !!(cartItem !== null && cartItem !== void 0 && cartItem.qty) ? 'space-between' : 'flex-start',
          width: "30px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
            variant: "outlined",
            color: "primary",
            sx: {
              padding: '3px'
            },
            onClick: handleCartAmountChange(((cartItem === null || cartItem === void 0 ? void 0 : cartItem.qty) || 0) + 1),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default()), {
              fontSize: "small"
            })
          }), !!(cartItem !== null && cartItem !== void 0 && cartItem.qty) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
              color: "text.primary",
              fontWeight: "600",
              children: cartItem === null || cartItem === void 0 ? void 0 : cartItem.qty
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
              variant: "outlined",
              color: "primary",
              sx: {
                padding: '3px'
              },
              onClick: handleCartAmountChange((cartItem === null || cartItem === void 0 ? void 0 : cartItem.qty) - 1),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_11___default()), {
                fontSize: "small"
              })
            })]
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
      open: open,
      maxWidth: false,
      onClose: toggleDialog,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.DialogContent, {
        sx: {
          paddingBottom: '1.25rem'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_products_ProductIntro__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
          imgUrl: [imgUrl],
          title: title,
          price: price
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
          sx: {
            position: 'absolute',
            top: '0',
            right: '0'
          },
          onClick: toggleDialog,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default()), {
            className: "close",
            fontSize: "small",
            color: "primary"
          })
        })]
      })
    })]
  });
};

ProductCard1.defaultProps = {
  id: '324321',
  title: 'ASUS ROG Strix G15',
  imgUrl: '/assets/images/products/macbook.png',
  price: 450,
  rating: 0,
  off: 20
};
/* harmony default export */ __webpack_exports__["Z"] = (ProductCard1);

/***/ }),

/***/ 3233:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_BazarAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7219);
/* harmony import */ var _component_BazarButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9458);
/* harmony import */ var _component_BazarRating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7636);
/* harmony import */ var _component_LazyImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1292);
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(479);
/* harmony import */ var _context_app_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6805);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3762);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(608);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_simple_image_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2862);
/* harmony import */ var react_simple_image_viewer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_simple_image_viewer__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _FlexBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94);

















const ProductIntro = ({
  imgUrl = [],
  title,
  price = 200,
  id
}) => {
  const {
    0: selectedImage,
    1: setSelectedImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(0);
  const {
    0: isViewerOpen,
    1: setIsViewerOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
  const {
    0: currentImage,
    1: setCurrentImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(0);
  const {
    state,
    dispatch
  } = (0,_context_app_AppContext__WEBPACK_IMPORTED_MODULE_6__/* .useAppContext */ .bp)();
  const cartList = state.cart.cartList;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  const routerId = router.query.id;
  const cartItem = cartList.find(item => item.id === id || item.id === routerId);

  const handleImageClick = ind => () => {
    setSelectedImage(ind);
  };

  const openImageViewer = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleCartAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(amount => () => {
    dispatch({
      type: 'CHANGE_CART_AMOUNT',
      payload: {
        qty: amount,
        name: title,
        price,
        imgUrl: imgUrl[0],
        id: id || routerId
      }
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
    width: "100%",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
      container: true,
      spacing: 3,
      justifyContent: "space-around",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
        item: true,
        md: 6,
        xs: 12,
        alignItems: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
            justifyContent: "center",
            mb: 6,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LazyImage__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              src: imgUrl[selectedImage],
              onClick: () => openImageViewer(imgUrl.indexOf(imgUrl[selectedImage])),
              alt: title,
              height: 300,
              width: 300,
              loading: "eager",
              objectFit: "contain"
            }), isViewerOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_simple_image_viewer__WEBPACK_IMPORTED_MODULE_13___default()), {
              src: imgUrl,
              currentIndex: currentImage,
              onClose: closeImageViewer,
              backgroundStyle: {
                backgroundColor: 'rgba(0,0,0,0.9)'
              }
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
            overflow: "auto",
            children: imgUrl.map((url, ind) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
              height: 64,
              width: 64,
              minWidth: 64,
              bgcolor: "white",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid",
              style: {
                cursor: 'pointer'
              },
              ml: ind === 0 ? 'auto' : 0,
              mr: ind === imgUrl.length - 1 ? 'auto' : '10px',
              borderColor: selectedImage === ind ? 'primary.main' : 'grey.400',
              onClick: handleImageClick(ind),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarAvatar__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                src: url,
                variant: "square",
                height: 40
              })
            }, ind))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
        item: true,
        md: 6,
        xs: 12,
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H1, {
          mb: 2,
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
          alignItems: "center",
          mb: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
            children: "Brand:"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H6, {
            ml: 1,
            children: "Xiaomi"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
          alignItems: "center",
          mb: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
            lineHeight: "1",
            children: "Rated:"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
            mx: 1,
            lineHeight: "1",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarRating__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
              color: "warn",
              fontSize: "1.25rem",
              value: 4,
              readOnly: true
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H6, {
            lineHeight: "1",
            children: "(50)"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
          mb: 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H2, {
            color: "primary.main",
            mb: 0.5,
            lineHeight: "1",
            children: ["$", price.toFixed(2)]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
            color: "inherit",
            children: "Stock Available"
          })]
        }), !(cartItem !== null && cartItem !== void 0 && cartItem.qty) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarButton__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          variant: "contained",
          color: "primary",
          sx: {
            mb: '36px',
            px: '1.75rem',
            height: '40px'
          },
          onClick: handleCartAmountChange(1),
          children: "Add to Cart"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
          alignItems: "center",
          mb: 4.5,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarButton__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            sx: {
              p: '9px'
            },
            variant: "outlined",
            size: "small",
            color: "primary",
            onClick: handleCartAmountChange((cartItem === null || cartItem === void 0 ? void 0 : cartItem.qty) - 1),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9___default()), {
              fontSize: "small"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H3, {
            fontWeight: "600",
            mx: 2.5,
            children: cartItem === null || cartItem === void 0 ? void 0 : cartItem.qty.toString().padStart(2, '0')
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BazarButton__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            sx: {
              p: '9px'
            },
            variant: "outlined",
            size: "small",
            color: "primary",
            onClick: handleCartAmountChange((cartItem === null || cartItem === void 0 ? void 0 : cartItem.qty) + 1),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default()), {
              fontSize: "small"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
          alignItems: "center",
          mb: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
            children: "Sold By:"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_10__.default, {
            href: "/shop/fdfdsa",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_5__.H6, {
                ml: 1,
                children: "Mobile Store"
              })
            })
          })]
        })]
      })]
    })
  });
};

ProductIntro.defaultProps = {
  imgUrl: ['/assets/images/products/headphone.png', '/assets/images/products/hiclipart.com (16).png', '/assets/images/products/hiclipart.com (18).png'],
  title: 'Mi Note 11 Pro',
  price: 1100
};
/* harmony default export */ __webpack_exports__["Z"] = (ProductIntro);

/***/ })

};
;