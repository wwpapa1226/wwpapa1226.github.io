import{A as I,C as P,D as y,_ as c,r as b,O as E,G as L,I as $,k as r,J as z,T,j as F,K as m}from"./index.3f106ff4.js";import{u as R,F as _}from"./useFormControl.121764f3.js";function j(e){return I("MuiInputAdornment",e)}const M=P("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var f=M,g;const N=["children","className","component","disablePointerEvents","disableTypography","position","variant"],S=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${m(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},U=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:o,position:s,size:a,variant:l}=e,d={root:["root",n&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",a&&`size${m(a)}`]};return $(d,j,t)},w=y("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:S})(({theme:e,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),k=b.exports.forwardRef(function(t,n){const o=E({props:t,name:"MuiInputAdornment"}),{children:s,className:a,component:l="div",disablePointerEvents:d=!1,disableTypography:x=!1,position:u,variant:v}=o,A=L(o,N),i=R()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const h=c({},o,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),C=U(h);return r(_.Provider,{value:null,children:r(w,c({as:l,ownerState:h,className:z(C.root,a),ref:n},A,{children:typeof s=="string"&&!x?r(T,{color:"text.secondary",children:s}):F(b.exports.Fragment,{children:[u==="start"?g||(g=r("span",{className:"notranslate",children:"\u200B"})):null,s]})}))})});var G=k;export{G as I};
