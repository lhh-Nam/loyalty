(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9542],{39542:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(26265),i=n(31714),l=n(56965),o=n(479),c=n(52404),s=n(79586),u=n(5473),d=n(30039),h=n(12382),m=n(53962),p=n(22645),x=n(68610),j=n(67642),b=n(2787),f=n(25547),g=n.n(f),v=n(86010),_=n(96486),P=n(11163),Z=n(67294),y=n(29009),D=n(86386),O=n(28498),N=n(43815);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=["Gi\xe1 tr\u1ecb kho\u1ea3n vay","Gi\xe1 tr\u1ecb \xf4 t\xf4"],I=["Tu\u1ef3 ch\u1ec9nh","Theo ng\xe2n h\xe0ng"],W=["D\u01b0 n\u1ee3 gi\u1ea3m d\u1ea7n","tr\u1ea3 \u0111\u1ec1u h\xe0ng th\xe1ng"],L=[{name:"F5Second",value:"F5Second"},{name:"Vietnambank",value:"Vietnambank"}],S=[{color:"#b5dced",title:"C\u1ea7n tr\u1ea3 tr\u01b0\u1edbc",amount:"0 tri\u1ec7u"},{color:"#72b9db",title:"G\u1ed1c c\u1ea7n tr\u1ea3",amount:"1.85 t\u1ef7"},{color:"#0098CE",title:"L\xe3i c\u1ea7n tr\u1ea3",amount:"2.5 t\u1ef7"}],E=[{name:"A",value:150,color:"#0098CE"},{name:"B",value:70,color:"#72b9db"}],T=(0,b.Z)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{borderRadius:"50%",width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"1px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#fff",boxShadow:"inset 0 0 0 1px #0098CE, inset 0 -1px 0 rgba(16,22,26,.1)",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"radial-gradient(#0098CE,#0098CE 28%,transparent 32%)",content:'""',borderColor:"red"}}});t.default=function(){var e=(0,P.useRouter)(),t=(0,Z.useState)({value:"Gi\xe1 tr\u1ecb kho\u1ea3n vay",endow:"Theo ng\xe2n h\xe0ng",interest:"D\u01b0 n\u1ee3 gi\u1ea3m d\u1ea7n"}),n=t[0],b=t[1],f=(0,Z.useState)("F5Second - Ng\xe2n h\xe0ng TMCP Xu\u1ea5t Nh\u1eadp Kh\u1ea9u Vi\u1ec7t Nam"),w=f[0],A=f[1],R=(0,Z.useState)({loanValue:110,duration:2,interest:1,time:3,later:4}),V=R[0],F=R[1],G=(0,_.debounce)((function(e,t){F((function(n){return C(C({},n),{},(0,a.Z)({},t,e))}))}),200),M=(0,Z.useCallback)((function(e,t){return G(e,t)}),[]),H=function(e,t){M(e.target.value,t)};function K(e){var t=T();return(0,r.jsx)(c.Z,C({className:t.root,disableRipple:!0,color:"default",checkedIcon:(0,r.jsx)("span",{className:(0,v.Z)(t.icon,t.checkedIcon)}),icon:(0,r.jsx)("span",{className:t.icon})},e))}var X=function(e,t,i,l){return(0,r.jsxs)(s.ZP,{container:!0,flexDirection:"column",className:g().radioWrap,children:[t&&(0,r.jsx)("span",{className:g().label,children:t}),(0,r.jsx)(u.Z,{component:"fieldset",children:(0,r.jsx)(d.Z,{row:!0,"aria-label":"gender",name:"gender1",value:i,onChange:function(e){return function(e,t){return b(C(C({},n),{},(0,a.Z)({},t,e.target.value)))}(e,l)},children:e.map((function(e,t){return(0,r.jsx)(h.Z,{value:e,control:(0,r.jsx)(K,{}),label:e},t)}))})})]})},B=function(e){var t=e.label,n=e.unit,a=e.min,i=e.max,c=e.value,u=e.name;return(0,r.jsx)(m.Z,{className:g().progressWrap,children:(0,r.jsxs)(m.Z,{width:"100%",children:[(0,r.jsxs)(s.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(o.Dr,{color:"grey.600",children:t}),(0,r.jsx)(s.ZP,{container:!0,className:g().unit,children:(0,r.jsx)(l.Z,{variant:"outlined",value:c||0,onChange:function(e){return H(e,u)},endAdor:(0,r.jsx)(o.Dr,{color:"grey.600",pl:1,children:n})})})]}),(0,r.jsx)(p.ZP,{defaultValue:c,min:a,max:i,valueLabelDisplay:"auto",onChange:function(e){return H(e,u)},classes:{root:g().root,track:g().track,rail:g().rail,thumb:g().thumb,valueLabel:g().valueLabel}},"slider-".concat(c))]})})};return(0,r.jsx)(j.Z,{children:(0,r.jsx)(s.ZP,{container:!0,bgcolor:"white",mb:7.5,p:3,borderRadius:2,children:(0,r.jsxs)(s.ZP,{container:!0,spacing:3,className:g().statisticalWrap,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.ZP,{className:g().statisticalItem,children:X(k,"",n.value,"value")}),(0,r.jsx)(s.ZP,{className:g().statisticalItem,children:(0,r.jsx)(B,{min:0,max:2e3,value:V.loanValue,name:"loanValue",label:"Gi\xe1 tr\u1ecb kho\u1ea3ng vay",unit:"t\u1ef7"})}),(0,r.jsx)(s.ZP,{className:g().statisticalItem,children:(0,r.jsx)(B,{min:1,max:12,value:V.duration,name:"duration",label:"Th\u1eddi h\u1ea1n vay",unit:"th\xe1ng"})}),(0,r.jsx)(s.ZP,{className:g().haveLabel,children:X(I,"L\xe3i su\u1ea5t \u01b0u \u0111\xe3i",n.endow,"endow")}),(0,r.jsx)(s.ZP,{className:g().statisticalItem,children:(0,r.jsx)(i.Z,{value:w,options:L,onChange:function(e){A(e)}})}),(0,r.jsx)(s.ZP,{className:g().statisticalItem,children:(0,r.jsx)(B,{min:0,max:100,value:V.interest,name:"interest",label:"L\xe3i su\u1ea5t \u01b0u \u0111\xe3i",unit:"%"})}),(0,r.jsx)(s.ZP,{className:g().statisticalItem,children:(0,r.jsx)(B,{min:1,max:10,value:V.time,name:"time",label:"Th\u1eddi gian \u01b0u \u0111\xe3i",unit:"n\u0103m"})}),(0,r.jsx)(s.ZP,{className:g().statisticalItem,children:(0,r.jsx)(B,{min:0,max:100,value:V.later,name:"later",label:"L\xe3i su\u1ea5t sau \u01b0u \u0111\xe3i",unit:"%"})}),(0,r.jsx)(s.ZP,{className:g().haveLabel,children:X(W,"Ph\u01b0\u01a1ng th\u1ee9c t\xednh l\xe3i",n.interest,"interest")})]})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.ZP,{className:g().firstMonthWrap,children:[(0,r.jsx)(o.H3,{children:"Thanh to\xe1n th\xe1ng \u0111\u1ea7u"}),(0,r.jsx)(o.H3,{children:"17.835.447 VN\u0110"}),(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsx)(o.Dr,{children:"T\u1ec9 l\u1ec7 vay 70%"}),(0,r.jsx)(o.Dr,{className:g().line,children:"|"}),(0,r.jsx)(o.Dr,{children:"25 n\u0103m"}),(0,r.jsx)(o.Dr,{className:g().line,children:"|"}),(0,r.jsx)(o.Dr,{children:"11%/n\u0103m"})]})]}),(0,r.jsxs)(s.ZP,{container:!0,className:g().chartWrap,children:[(0,r.jsxs)(s.ZP,{item:!0,xs:6,className:g().chartImage,children:[(0,r.jsx)(y.h,{width:"100%",height:200,children:(0,r.jsx)(D.u,{children:(0,r.jsx)(O.b,{dataKey:"value",cx:"50%",cy:"50%",data:E,innerRadius:65,outerRadius:75,startAngle:90,endAngle:450,children:null===E||void 0===E?void 0:E.map((function(e,t){return(0,r.jsx)(N.b,{fill:e.color},t)}))})})}),(0,r.jsxs)(s.ZP,{className:g().chartText,children:[(0,r.jsx)(o.H3,{children:"4.35\xa0"}),(0,r.jsx)(o.H3,{children:"t\u1ef7"})]})]}),(0,r.jsx)(s.ZP,{item:!0,xs:6,height:"100%",children:(0,r.jsx)(s.ZP,{container:!0,className:g().noteWrap,children:S.map((function(e,t){return(0,r.jsxs)(s.ZP,{className:g().noteItem,children:[(0,r.jsx)("div",{style:{background:"".concat(e.color)},className:g().color}),(0,r.jsx)(o.Dr,{children:e.title}),(0,r.jsx)(o.Dr,{children:e.amount})]},t)}))})})]}),(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsx)(x.Z,{color:"primary",variant:"outlined",fullWidth:!0,children:"Xem thanh to\xe1n t\u1eebng th\xe1ng"}),(0,r.jsx)(x.Z,{color:"primary",variant:"contained",fullWidth:!0,onClick:function(){e.push("/borrower-info")},children:"\u0110\u0103ng k\xed g\xf3i vay"})]})]})})]})})})}},31714:function(e,t,n){"use strict";var r=n(85893),a=n(89038),i=n(87272),l=n(5473),o=n(55824),c=n(23798),s=n.n(c),u=n(67294);t.Z=function(e){var t,n=e.label,c=e.options,d=e.onChange,h=e.value,m=e.placeholder,p=e.isCustomDisplayValue,x=(0,u.useState)(null===c||void 0===c||null===(t=c.filter((function(e){return e.value===h})).shift())||void 0===t?void 0:t.renderItem),j=x[0],b=x[1];return(0,r.jsxs)("div",{className:s().container,children:[n&&(0,r.jsx)(i.Z,{variant:"body1",className:s().title,children:n}),(0,r.jsx)(l.Z,{variant:"outlined",size:"small",fullWidth:!0,children:(0,r.jsx)(o.Z,{color:"primary",value:h,onChange:function(e){var t;(d(e.target.value),p)&&b(null===c||void 0===c||null===(t=c.filter((function(t){return t.value===e.target.value})).shift())||void 0===t?void 0:t.renderItem)},MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"center"}},displayEmpty:!0,renderValue:j?function(){return j}:h?function(){return(0,r.jsx)("span",{children:h})}:function(){return(0,r.jsx)("span",{className:s().placeholder,children:m})},className:s().select,children:c&&(null===c||void 0===c?void 0:c.map((function(e){return(0,r.jsx)(a.Z,{value:e.value,className:s().optionItem,children:(0,r.jsx)("span",{children:e.name})},e.value)})))})})]})}},56965:function(e,t,n){"use strict";var r=n(85893),a=n(38347),i=n(26265),l=n(11497),o=n(9549),c=n(53962),s=n(87272),u=n(90958),d=n(23798),h=n.n(d);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=(0,u.Z)((function(e){return(0,r.jsx)(o.Z,p({},e))}))((function(){return{"& .MuiOutlinedInput-root":{backgroundColor:"#FAFAFA"}}}));t.Z=function(e){var t=e.label,n=e.required,i=void 0!==n&&n,o=e.endAdor,u=(0,a.Z)(e,["label","required","endAdor"]);return(0,r.jsxs)("div",{className:h().container,children:[t&&(0,r.jsxs)(c.Z,{display:"flex",justifyContent:"flex-start",alignItems:"center",children:[(0,r.jsx)(s.Z,{variant:"body1",className:h().title,children:t}),i&&(0,r.jsx)(l.Z,{})]}),(0,r.jsx)(x,p(p({fullWidth:!0},u),{},{InputProps:{endAdornment:(0,r.jsx)("div",{children:o})}}))]})}},11497:function(e,t,n){"use strict";var r=n(26265),a=n(85893),i=n(28456);n(67294);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){return(0,a.jsx)(i.Z,o(o({},e),{},{style:{width:"8px",height:"8px",margin:"5px"},viewBox:"0 0 8 8",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M5.1199 0.937684L5.43991 1.58781C5.59991 1.90788 6.00992 2.20794 6.34992 2.26795L6.77991 2.33796C8.08991 2.558 8.3899 3.51819 7.4599 4.45838L7.05991 4.85846C6.78991 5.12851 6.64992 5.64861 6.72992 6.02868L6.77991 6.26873C7.13991 7.84904 6.2999 8.45916 4.9299 7.629L4.63992 7.44896C4.28992 7.23892 3.70989 7.23892 3.35989 7.44896L3.06992 7.629C1.68991 8.45916 0.859908 7.84904 1.21991 6.26873L1.2699 6.02868C1.3499 5.65861 1.20991 5.12851 0.939909 4.85846L0.539915 4.45838C-0.390086 3.50819 -0.0900928 2.558 1.21991 2.33796L1.6499 2.26795C1.9999 2.20794 2.39991 1.90788 2.55991 1.58781L2.87991 0.937684C3.49991 -0.312561 4.4999 -0.312561 5.1199 0.937684Z",fill:"#FF1E3B"})}))}},23798:function(e){e.exports={container:"CustomSelect_container__1lrGL",title:"CustomSelect_title__3St8d",placeholder:"CustomSelect_placeholder__2P8nr",select:"CustomSelect_select__3H5U9"}},25547:function(e){e.exports={mainProductWrap:"Detail_mainProductWrap__1al-X",imgGroup:"Detail_imgGroup__2Ua7f",text:"Detail_text__2sZoK",info:"Detail_info__hR2Tx",price:"Detail_price__3Yp6n",line:"Detail_line__3QZg5",progressWrap:"Detail_progressWrap__35btx",rootProgress:"Detail_rootProgress__10QM7",colorPrimary:"Detail_colorPrimary__8PDRg",unit:"Detail_unit__3oWCN",radioWrap:"Detail_radioWrap__1DWjX",label:"Detail_label__3GWPI",statisticalWrap:"Detail_statisticalWrap__3JNO7",statisticalItem:"Detail_statisticalItem__2rRDP",haveLabel:"Detail_haveLabel__3kdiK",firstMonthWrap:"Detail_firstMonthWrap__3YxXB",chartWrap:"Detail_chartWrap__2ep8E",chartImage:"Detail_chartImage__3de59",chartText:"Detail_chartText__1UARZ",noteWrap:"Detail_noteWrap__1veJd",noteItem:"Detail_noteItem__22v8c",color:"Detail_color__KN4nE",root:"Detail_root__2e-GR",track:"Detail_track__3wjdh",rail:"Detail_rail__1rIip",thumb:"Detail_thumb__tI1Qe"}}}]);