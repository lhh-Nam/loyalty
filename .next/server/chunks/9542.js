exports.id = 9542;
exports.ids = [9542];
exports.modules = {

/***/ 9542:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_common_CustomSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1714);
/* harmony import */ var _component_common_TextFieldCustom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6965);
/* harmony import */ var _component_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(479);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6806);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8743);
/* harmony import */ var _styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3804);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7847);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_10__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const lstRadioValue = ['Giá trị khoản vay', 'Giá trị ô tô'];
const lstRadioEndow = ['Tuỳ chỉnh', 'Theo ngân hàng'];
const lstRadioInterest = ['Dư nợ giảm dần', 'trả đều hàng tháng'];
const lstBank = [{
  name: 'F5Second',
  value: 'F5Second'
}, {
  name: 'Vietnambank',
  value: 'Vietnambank'
}];
const lstNote = [{
  color: '#b5dced',
  title: 'Cần trả trước',
  amount: '0 triệu'
}, {
  color: '#72b9db',
  title: 'Gốc cần trả',
  amount: '1.85 tỷ'
}, {
  color: '#0098CE',
  title: 'Lãi cần trả',
  amount: '2.5 tỷ'
}];
const data = [{
  name: 'A',
  value: 150,
  color: '#0098CE'
}, {
  name: 'B',
  value: 70,
  color: '#72b9db'
}];
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '1px auto rgba(19,124,189,.6)',
      outlineOffset: 2
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#fff',
    boxShadow: 'inset 0 0 0 1px #0098CE, inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#0098CE,#0098CE 28%,transparent 32%)',
      content: '""',
      borderColor: 'red'
    }
  }
});

const Statistical = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const {
    0: radio,
    1: setRadio
  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
    value: 'Giá trị khoản vay',
    endow: 'Theo ngân hàng',
    interest: 'Dư nợ giảm dần'
  });
  const {
    0: select,
    1: setSelect
  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)('F5Second - Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam');
  const {
    0: slider,
    1: setSlider
  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
    loanValue: 110,
    duration: 2,
    interest: 1,
    time: 3,
    later: 4
  });

  const handleChange = (event, key) => setRadio(_objectSpread(_objectSpread({}, radio), {}, {
    [key]: event.target.value
  }));

  const request = (0,lodash__WEBPACK_IMPORTED_MODULE_7__.debounce)((value, name) => {
    setSlider(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));
  }, 200);
  const debouceRequest = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((value, name) => request(value, name), []);

  const handleValueChange = (e, name) => {
    debouceRequest(e.target.value, name);
  };

  function StyledRadio(props) {
    const classes = useStyles();
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Radio, _objectSpread({
      className: classes.root,
      disableRipple: true,
      color: "default",
      checkedIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(classes.icon, classes.checkedIcon)
      }),
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: classes.icon
      })
    }, props));
  }

  const renderGroupRadio = (lstRadio, label, value, key) => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
      container: true,
      flexDirection: "column",
      className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().radioWrap),
      children: [label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().label),
        children: label
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
        component: "fieldset",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.RadioGroup, {
          row: true,
          "aria-label": "gender",
          name: "gender1",
          value: value,
          onChange: e => handleChange(e, key),
          children: lstRadio.map((radio, idx) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.FormControlLabel, {
              value: radio,
              control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledRadio, {}),
              label: radio
            }, idx);
          })
        })
      })]
    });
  }; // const LinearProgressLable = (props: any) => {
  //   const { label, valueProgress, valueNumber, unit } = props;
  //   return (
  //     <Box className={Style.progressWrap}>
  //       <Box width="100%">
  //         <Grid container justifyContent="space-between" alignItems="center">
  //           <Span color="grey.600">{label}</Span>
  //           <Grid container className={Style.unit}>
  //             <Span>{valueNumber}</Span>
  //             <Span color="grey.600" fontWeight="400">
  //               {unit}
  //             </Span>
  //           </Grid>
  //         </Grid>
  //         <LinearProgress
  //           variant="determinate"
  //           value={valueProgress}
  //           classes={{
  //             root: Style.rootProgress,
  //             colorPrimary: Style.colorPrimary,
  //             barColorPrimary: Style.barColorPrimary,
  //           }}
  //         />
  //       </Box>
  //     </Box>
  //   );
  // };


  const CustomSlide = props => {
    const {
      label,
      unit,
      min,
      max,
      value,
      name
    } = props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
      className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().progressWrap),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
        width: "100%",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          container: true,
          justifyContent: "space-between",
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
            color: "grey.600",
            children: label
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
            container: true,
            className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().unit),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_common_TextFieldCustom__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
              variant: "outlined",
              value: value || 0,
              onChange: e => handleValueChange(e, name),
              endAdor: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
                color: "grey.600",
                pl: 1,
                children: unit
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Slider, {
          defaultValue: value,
          min: min,
          max: max // value={rangeValue || 0}
          ,
          valueLabelDisplay: "auto",
          onChange: e => handleValueChange(e, name),
          classes: {
            root: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().root),
            track: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().track),
            rail: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().rail),
            thumb: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().thumb),
            valueLabel: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().valueLabel)
          } //valueLabelFormat={valueLabelFormat}

        }, `slider-${value}`)]
      })
    });
  };

  const renderLeft = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().statisticalItem),
        children: renderGroupRadio(lstRadioValue, '', radio.value, 'value')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().statisticalItem),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomSlide, {
          min: 0,
          max: 2000,
          value: slider.loanValue,
          name: "loanValue",
          label: "Gi\xE1 tr\u1ECB kho\u1EA3ng vay",
          unit: "t\u1EF7"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().statisticalItem),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomSlide, {
          min: 1,
          max: 12,
          value: slider.duration,
          name: "duration",
          label: "Th\u1EDDi h\u1EA1n vay",
          unit: "th\xE1ng"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().haveLabel),
        children: renderGroupRadio(lstRadioEndow, 'Lãi suất ưu đãi', radio.endow, 'endow')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().statisticalItem),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_common_CustomSelect__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
          value: select,
          options: lstBank,
          onChange: value => {
            setSelect(value);
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().statisticalItem),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomSlide, {
          min: 0,
          max: 100,
          value: slider.interest,
          name: "interest",
          label: "L\xE3i su\u1EA5t \u01B0u \u0111\xE3i",
          unit: "%"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().statisticalItem),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomSlide, {
          min: 1,
          max: 10,
          value: slider.time,
          name: "time",
          label: "Th\u1EDDi gian \u01B0u \u0111\xE3i",
          unit: "n\u0103m"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().statisticalItem),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomSlide, {
          min: 0,
          max: 100,
          value: slider.later,
          name: "later",
          label: "L\xE3i su\u1EA5t sau \u01B0u \u0111\xE3i",
          unit: "%"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().haveLabel),
        children: renderGroupRadio(lstRadioInterest, 'Phương thức tính lãi', radio.interest, 'interest')
      })]
    });
  };

  const renderRight = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().firstMonthWrap),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__.H3, {
          children: "Thanh to\xE1n th\xE1ng \u0111\u1EA7u"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__.H3, {
          children: "17.835.447 VN\u0110"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          container: true,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
            children: "T\u1EC9 l\u1EC7 vay 70%"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
            className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().line),
            children: "|"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
            children: "25 n\u0103m"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
            className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().line),
            children: "|"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
            children: "11%/n\u0103m"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        container: true,
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chartWrap),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          xs: 6,
          className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chartImage),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_10__.ResponsiveContainer, {
            width: "100%",
            height: 200,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_10__.PieChart, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_10__.Pie, {
                dataKey: "value",
                cx: "50%",
                cy: "50%",
                data: data,
                innerRadius: 65,
                outerRadius: 75,
                startAngle: 90,
                endAngle: 450,
                children: data === null || data === void 0 ? void 0 : data.map((entry, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_10__.Cell, {
                  fill: entry.color
                }, index))
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
            className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chartText),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__.H3, {
              children: "4.35\xA0"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__.H3, {
              children: "t\u1EF7"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          xs: 6,
          height: "100%",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
            container: true,
            className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().noteWrap),
            children: lstNote.map((note, idx) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().noteItem),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  style: {
                    background: `${note.color}`
                  },
                  className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().color)
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
                  children: note.title
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
                  children: note.amount
                })]
              }, idx);
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        container: true,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
          color: "primary",
          variant: "outlined",
          fullWidth: true,
          children: "Xem thanh to\xE1n t\u1EEBng th\xE1ng"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
          color: "primary",
          variant: "contained",
          fullWidth: true,
          onClick: () => {
            router.push('/borrower-info');
          },
          children: "\u0110\u0103ng k\xED g\xF3i vay"
        })]
      })]
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
      container: true,
      bgcolor: "white",
      mb: 7.5,
      p: 3,
      borderRadius: 2,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        container: true,
        spacing: 3,
        className: (_styles_pages_product_Detail_module_scss__WEBPACK_IMPORTED_MODULE_11___default().statisticalWrap),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          xs: 12,
          md: 6,
          children: renderLeft()
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          xs: 12,
          md: 6,
          children: renderRight()
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Statistical);

/***/ })

};
;