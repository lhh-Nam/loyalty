(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7616],{19744:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var n=t(19756),o=t(22122),i=t(67294),s=(t(45697),t(77828)),l=t(82730),a=t(75026),c=t(71177),p=t(85893),m=(0,c.Z)((0,p.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=(0,c.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=(0,c.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=t(13353),h=t(56915),x=t(8396),g=t(25664);function b(e){return(0,g.Z)("MuiCheckbox",e)}var j=(0,t(30742).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const Z=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=(0,x.ZP)(a.Z,{shouldForwardProp:e=>(0,x.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.indeterminate&&r.indeterminate,"default"!==t.color&&r[`color${(0,f.Z)(t.color)}`]]}})((({theme:e,ownerState:r})=>(0,o.Z)({color:e.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,l.Fq)("default"===r.color?e.palette.action.active:e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${j.checked}, &.${j.indeterminate}`]:{color:e.palette[r.color].main},[`&.${j.disabled}`]:{color:e.palette.action.disabled}}))),v=(0,p.jsx)(d,{}),w=(0,p.jsx)(m,{}),O=(0,p.jsx)(u,{});var P=i.forwardRef((function(e,r){var t,l;const a=(0,h.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=v,color:m="primary",icon:d=w,indeterminate:u=!1,indeterminateIcon:x=O,inputProps:g,size:j="medium"}=a,P=(0,n.Z)(a,Z),S=u?x:d,N=u?x:c,T=(0,o.Z)({},a,{color:m,indeterminate:u,size:j}),k=(e=>{const{classes:r,indeterminate:t,color:n}=e,i={root:["root",t&&"indeterminate",`color${(0,f.Z)(n)}`]},l=(0,s.Z)(i,b,r);return(0,o.Z)({},r,l)})(T);return(0,p.jsx)(y,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":u},g),icon:i.cloneElement(S,{fontSize:null!=(t=S.props.fontSize)?t:j}),checkedIcon:i.cloneElement(N,{fontSize:null!=(l=N.props.fontSize)?l:j}),ownerState:T,ref:r},P,{classes:k}))}))},85552:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return D}});var n=t(85893),o=t(90094),i=t(809),s=t.n(i),l=t(92447),a=t(26265),c=t(38347),p=t(59458),m=t(25405),d=t(32747),u=t(479),f=t(69378),h=t(81788),x=t(12382),g=t(19744),b=t(53962),j=t(47187),Z=t(8396),y=t(20067),v=t(28270),w=t(17513),O=t(41664),P=t(11163),S=t(67294),N=t(19501);function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var z={background:"#3B5998",color:"white"},C={background:"#4285F4",color:"white"},H=(0,Z.ZP)((function(e){var r=e.children,t=(e.passwordVisibility,(0,c.Z)(e,["children","passwordVisibility"]));return(0,n.jsx)(f.Z,k(k({},t),{},{children:r}))}))((function(e){var r,t=e.theme,n=e.passwordVisibility;return r={width:500},(0,a.Z)(r,t.breakpoints.down("sm"),{width:"100%"}),(0,a.Z)(r,".content",(0,a.Z)({padding:"3rem 3.75rem 0px"},t.breakpoints.down("xs"),{padding:"1.5rem 1rem 0px"})),(0,a.Z)(r,".passwordEye",{color:n?t.palette.grey[600]:t.palette.grey[400]}),(0,a.Z)(r,".facebookButton",k({marginBottom:10,"&:hover":z},z)),(0,a.Z)(r,".googleButton",k({"&:hover":C},C)),(0,a.Z)(r,".agreement",{marginTop:12,marginBottom:24}),r})),_={name:"",email:"",password:"",re_password:"",agreement:!1},B=N.Ry().shape({name:N.Z_().required("${path} is required"),email:N.Z_().email("invalid email").required("${path} is required"),password:N.Z_().required("${path} is required"),re_password:N.Z_().oneOf([N.iH("password"),null],"Passwords must match").required("Please re-type password"),agreement:N.Xg().test("agreement","You have to agree with our Terms and Conditions!",(function(e){return!0===e})).required("You have to agree with our Terms and Conditions!")}),E=function(){var e=(0,S.useState)(!1),r=e[0],t=e[1],i=(0,P.useRouter)(),a=(0,S.useCallback)((function(){t((function(e){return!e}))}),[]),c=function(){var e=(0,l.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.push("/profile"),console.log(r);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=(0,w.TA)({onSubmit:c,initialValues:_,validationSchema:B}),Z=f.values,N=f.errors,T=f.touched,k=f.handleBlur,z=f.handleChange,C=f.handleSubmit;return(0,n.jsxs)(H,{elevation:3,passwordVisibility:r,children:[(0,n.jsxs)("form",{className:"content",onSubmit:C,children:[(0,n.jsx)(u.H3,{textAlign:"center",mb:1,children:"Create Your Account"}),(0,n.jsx)(u.x4,{fontWeight:"600",fontSize:"12px",color:"grey.800",textAlign:"center",mb:4.5,display:"block",children:"Please fill all fields to continue"}),(0,n.jsx)(d.Z,{mb:1.5,name:"name",label:"Full Name",placeholder:"Ralph Adwards",variant:"outlined",size:"small",fullWidth:!0,onBlur:k,onChange:z,value:Z.name||"",error:!!T.name&&!!N.name,helperText:T.name&&N.name}),(0,n.jsx)(d.Z,{mb:1.5,name:"email",label:"Email or Phone Number",placeholder:"exmple@mail.com",variant:"outlined",size:"small",type:"email",fullWidth:!0,onBlur:k,onChange:z,value:Z.email||"",error:!!T.email&&!!N.email,helperText:T.email&&N.email}),(0,n.jsx)(d.Z,{mb:1.5,name:"password",label:"Password",placeholder:"*********",autoComplete:"on",type:r?"text":"password",variant:"outlined",size:"small",fullWidth:!0,InputProps:{endAdornment:(0,n.jsx)(h.Z,{size:"small",type:"button",onClick:a,children:r?(0,n.jsx)(y.Z,{className:"passwordEye",fontSize:"small"}):(0,n.jsx)(v.Z,{className:"passwordEye",fontSize:"small"})})},onBlur:k,onChange:z,value:Z.password||"",error:!!T.password&&!!N.password,helperText:T.password&&N.password}),(0,n.jsx)(d.Z,{name:"re_password",label:"Retype Password",placeholder:"*********",autoComplete:"on",type:r?"text":"password",variant:"outlined",size:"small",fullWidth:!0,InputProps:{endAdornment:(0,n.jsx)(h.Z,{size:"small",type:"button",onClick:a,children:r?(0,n.jsx)(y.Z,{className:"passwordEye",fontSize:"small"}):(0,n.jsx)(v.Z,{className:"passwordEye",fontSize:"small"})})},onBlur:k,onChange:z,value:Z.re_password||"",error:!!T.re_password&&!!N.re_password,helperText:T.re_password&&N.re_password}),(0,n.jsx)(x.Z,{className:"agreement",name:"agreement",onChange:z,control:(0,n.jsx)(g.Z,{size:"small",color:"secondary",checked:Z.agreement||!1}),label:(0,n.jsxs)(o.Z,{flexWrap:"wrap",alignItems:"center",justifyContent:"flex-start",children:["By signing up, you agree to",(0,n.jsx)("a",{href:"/",target:"_blank",rel:"noreferrer noopener",children:(0,n.jsx)(u.H6,{ml:1,borderBottom:"1px solid",borderColor:"grey.900",children:"Terms & Condtion"})})]})}),(0,n.jsx)(p.Z,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,sx:{height:44},children:"Create Account"}),(0,n.jsxs)(b.Z,{mb:2,mt:3.3,children:[(0,n.jsx)(b.Z,{width:"200px",mx:"auto",children:(0,n.jsx)(j.Z,{})}),(0,n.jsx)(o.Z,{justifyContent:"center",mt:-1.625,children:(0,n.jsx)(b.Z,{color:"grey.600",bgcolor:"background.paper",px:2,children:"on"})})]}),(0,n.jsxs)(p.Z,{className:"facebookButton",size:"medium",fullWidth:!0,sx:{height:44},children:[(0,n.jsx)(m.Z,{src:"/assets/images/icons/facebook-filled-white.svg",alt:"facebook"}),(0,n.jsx)(b.Z,{fontSize:"12px",ml:1,children:"Continue with Facebook"})]}),(0,n.jsxs)(p.Z,{className:"googleButton",size:"medium",fullWidth:!0,sx:{height:44},children:[(0,n.jsx)(m.Z,{src:"/assets/images/icons/google-1.svg",alt:"facebook"}),(0,n.jsx)(b.Z,{fontSize:"12px",ml:1,children:"Continue with Google"})]}),(0,n.jsxs)(o.Z,{justifyContent:"center",alignItems:"center",my:"1.25rem",children:[(0,n.jsx)(b.Z,{children:"Don\u2019t have account?"}),(0,n.jsx)(O.default,{href:"/login",children:(0,n.jsx)("a",{children:(0,n.jsx)(u.H6,{ml:1,borderBottom:"1px solid",borderColor:"grey.900",children:"Log In"})})})]})]}),(0,n.jsxs)(o.Z,{justifyContent:"center",bgcolor:"grey.200",py:2.5,children:["Forgot your password?",(0,n.jsx)(O.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)(u.H6,{ml:1,borderBottom:"1px solid",borderColor:"grey.900",children:"Reset It"})})})]})]})},D=function(){return(0,n.jsx)(o.Z,{flexDirection:"column",minHeight:"100vh",alignItems:"center",justifyContent:"center",children:(0,n.jsx)(E,{})})}},59458:function(e,r,t){"use strict";var n=t(68610),o=(0,t(8396).ZP)(n.Z)({minWidth:0,minHeight:0});r.Z=o},25405:function(e,r,t){"use strict";var n=t(9732),o=t(85680),i=t(38681),s=t(50962),l=(0,n.Z)("img")((0,o.Z)(i.ZP,s.ZP));l.defaultProps={display:"block"},r.Z=l},32747:function(e,r,t){"use strict";var n=t(85893),o=t(26265),i=t(38347),s=t(53962),l=t(9549),a=t(479);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];r.Z=function(e){var r=e.label,t=e.InputProps,o=(0,i.Z)(e,["label","InputProps"]),c={},d={};for(var u in o)m.includes(u)?c[u]=o[u]:d[u]=o[u];return(0,n.jsxs)(s.Z,p(p({},c),{},{children:[r&&(0,n.jsx)(a.x4,{display:"block",mb:1,textAlign:"left",fontWeight:"600",color:"grey.700",children:r}),(0,n.jsx)(l.Z,p({InputProps:p(p({},t),{},{style:p(p({},null===t||void 0===t?void 0:t.style),{},{height:44})})},d))]}))}},90094:function(e,r,t){"use strict";var n=t(26265),o=t(85893),i=t(38347),s=t(31098);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var c=function(e){var r=e.children,t=(0,i.Z)(e,["children"]);return(0,o.jsx)(s.Z,a(a({display:"flex"},t),{},{children:r}))};c.defaultProps={display:"flex"},r.Z=c},479:function(e,r,t){"use strict";t.d(r,{H1:function(){return d},H2:function(){return u},H3:function(){return f},H4:function(){return h},H5:function(){return x},H6:function(){return g},nv:function(){return b},x4:function(){return j},Dr:function(){return Z},YE:function(){return y}});var n=t(85893),o=t(26265),i=t(38347),s=t(8396),l=t(53962),a=t(86010);t(67294);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=(0,s.ZP)(l.Z)((function(e){var r=e.textTransformStyle,t=e.ellipsis;return{textTransform:r||"none",whiteSpace:t?"nowrap":"normal",overflow:t?"hidden":"",textOverflow:t?"ellipsis":""}})),d=function(e){var r=e.children,t=e.className,s=e.ellipsis,l=e.textTransform,c=(0,i.Z)(e,["children","className","ellipsis","textTransform"]);return(0,n.jsx)(m,p(p({textTransformStyle:l,ellipsis:s,className:(0,a.Z)((0,o.Z)({},t||"",!0)),component:"h1",mb:0,mt:0,fontSize:"30px",fontWeight:"500",lineHeight:"1.5"},c),{},{children:r}))},u=function(e){var r=e.children,t=e.className,s=e.ellipsis,l=e.textTransform,c=(0,i.Z)(e,["children","className","ellipsis","textTransform"]);return(0,n.jsx)(m,p(p({textTransformStyle:l,ellipsis:s,className:(0,a.Z)((0,o.Z)({},t||"",!0)),component:"h2",mb:0,mt:0,fontSize:"25px",fontWeight:"500",lineHeight:"1.5"},c),{},{children:r}))},f=function(e){var r=e.children,t=e.className,s=e.ellipsis,l=e.textTransform,c=(0,i.Z)(e,["children","className","ellipsis","textTransform"]);return(0,n.jsx)(m,p(p({textTransformStyle:l,ellipsis:s,className:(0,a.Z)((0,o.Z)({},t||"",!0)),component:"h3",mb:0,mt:0,fontSize:"20px",fontWeight:"500",lineHeight:"1.5"},c),{},{children:r}))},h=function(e){var r=e.children,t=e.className,s=e.ellipsis,l=e.textTransform,c=(0,i.Z)(e,["children","className","ellipsis","textTransform"]);return(0,n.jsx)(m,p(p({textTransformStyle:l,ellipsis:s,className:(0,a.Z)((0,o.Z)({},t||"",!0)),component:"h4",mb:0,mt:0,fontSize:"17px",fontWeight:"500",lineHeight:"1.5"},c),{},{children:r}))},x=function(e){var r=e.children,t=e.className,s=e.ellipsis,l=e.textTransform,c=(0,i.Z)(e,["children","className","ellipsis","textTransform"]);return(0,n.jsx)(m,p(p({textTransformStyle:l,ellipsis:s,className:(0,a.Z)((0,o.Z)({},t||"",!0)),component:"h5",mb:0,mt:0,fontSize:"16px",fontWeight:"500",lineHeight:"1.5"},c),{},{children:r}))},g=function(e){var r=e.children,t=e.className,s=e.ellipsis,l=e.textTransform,c=(0,i.Z)(e,["children","className","ellipsis","textTransform"]);return(0,n.jsx)(m,p(p({textTransformStyle:l,ellipsis:s,className:(0,a.Z)((0,o.Z)({},t||"",!0)),component:"h6",mb:0,mt:0,fontSize:"14px",fontWeight:"500",lineHeight:"1.5"},c),{},{children:r}))},b=function(e){var r=e.children,t=e.className,s=e.ellipsis,l=e.textTransform,c=(0,i.Z)(e,["children","className","ellipsis","textTransform"]);return(0,n.jsx)(m,p(p({textTransformStyle:l,ellipsis:s,className:(0,a.Z)((0,o.Z)({},t||"",!0)),component:"p",mb:0,mt:0,fontSize:"14px"},c),{},{children:r}))},j=function(e){var r=e.children,t=e.className,s=e.ellipsis,l=e.textTransform,c=(0,i.Z)(e,["children","className","ellipsis","textTransform"]);return(0,n.jsx)(m,p(p({textTransformStyle:l,ellipsis:s,className:(0,a.Z)((0,o.Z)({},t||"",!0)),component:"small",fontSize:"12px",lineHeight:"1.5"},c),{},{children:r}))},Z=function(e){var r=e.children,t=e.className,s=e.ellipsis,l=e.textTransform,c=(0,i.Z)(e,["children","className","ellipsis","textTransform"]);return(0,n.jsx)(m,p(p({textTransformStyle:l,ellipsis:s,className:(0,a.Z)((0,o.Z)({},t||"",!0)),component:"span",lineHeight:"1.5"},c),{},{children:r}))},y=function(e){var r=e.children,t=e.className,s=e.ellipsis,l=e.textTransform,c=(0,i.Z)(e,["children","className","ellipsis","textTransform"]);return(0,n.jsx)(m,p(p({textTransformStyle:l,ellipsis:s,className:(0,a.Z)((0,o.Z)({},t||"",!0)),component:"small",fontSize:"10px",lineHeight:"1.5"},c),{},{children:r}))}},36415:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return t(85552)}])}},function(e){e.O(0,[7419,8610,5189,5804,1385,7284,4825,9774,2888,179],(function(){return r=36415,e(e.s=r);var r}));var r=e.O();_N_E=r}]);