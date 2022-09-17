import{q as N,v as U,w as E,D as V,_ as w,r as h,I as q,y as G,A as Y,a as g,T as S,j as o,C as re,E as Me,G as lt,H as Ae,bs as ct,z as dt,a7 as ut,aJ as pt,bt as Ie,bu as fe,a2 as _,b as T,bg as ht,t as c,J as X,K,L as J,F as A,B as $,o as Le,S as R,p as _e,a_ as Ee,i as k,f as ne,a6 as Z,al as Q,ax as ft,ap as mt,k as gt,bi as I,br as P,u as yt,bv as Ct,c as Oe,l as vt,az as St,bj as bt,ba as xt}from"./index.ff95e7d1.js";import{a as z,c as Rt,I as me,N as kt,P as wt}from"./PageContent.28896ce2.js";import{T as H}from"./TextField.454b9e90.js";import{d as Ft,a as Tt,b as $t,C as Dt}from"./ConfirmationDialog.eb025d16.js";import{A as Mt}from"./ActionBar.4f0301cd.js";import{B as At,S as It,g as Lt,c as Pe,d as _t,e as Et,s as Ot,h as Pt,i as Gt,v as ae,j as Ge,k as Bt,l as ge,A as Be,m as zt,a as Ht,G as ye,b as jt}from"./fleetSetupValidation.23070f8b.js";import{R as ie}from"./ResponsiveDialog.a1cf79fd.js";import{F as Wt}from"./Select.0553045a.js";import{u as Nt}from"./useFormControl.ebe9e6a5.js";import{g as Ut,c as ze,S as He}from"./ShipTypeFilterButton.6152a30e.js";import{T as Vt}from"./Tooltip.fe5191f3.js";import"./domUtils.2a976d65.js";import"./sorting.c6946657.js";function qt(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Yt(n){return parseFloat(n)}function Xt(n){return N("MuiFormControlLabel",n)}const Kt=U("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label"]);var j=Kt;const Jt=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],Zt=n=>{const{classes:e,disabled:t,labelPlacement:r}=n,a={root:["root",t&&"disabled",`labelPlacement${V(r)}`],label:["label",t&&"disabled"]};return Y(a,Xt,e)},Qt=E("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[{[`& .${j.label}`]:e.label},e.root,e[`labelPlacement${V(t.labelPlacement)}`]]}})(({theme:n,ownerState:e})=>w({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${j.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${j.label}`]:{[`&.${j.disabled}`]:{color:n.palette.text.disabled}}})),en=h.exports.forwardRef(function(e,t){const r=q({props:e,name:"MuiFormControlLabel"}),{className:a,componentsProps:i={},control:s,disabled:d,disableTypography:m,label:u,labelPlacement:f="end"}=r,v=G(r,Jt),p=Nt();let b=d;typeof b=="undefined"&&typeof s.props.disabled!="undefined"&&(b=s.props.disabled),typeof b=="undefined"&&p&&(b=p.disabled);const l={disabled:b};["checked","name","onChange","value","inputRef"].forEach(x=>{typeof s.props[x]=="undefined"&&typeof r[x]!="undefined"&&(l[x]=r[x])});const y=w({},r,{disabled:b,label:u,labelPlacement:f}),C=Zt(y);return g(Qt,w({className:re(C.root,a),ownerState:y,ref:t},v,{children:[h.exports.cloneElement(s,l),u.type===S||m?u:o(S,w({component:"span",className:C.label},i.typography,{children:u}))]}))});var Ce=en;function tn(n){return N("MuiFormGroup",n)}U("MuiFormGroup",["root","row"]);const nn=["className","row"],on=n=>{const{classes:e,row:t}=n;return Y({root:["root",t&&"row"]},tn,e)},rn=E("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.row&&e.row]}})(({ownerState:n})=>w({display:"flex",flexDirection:"column",flexWrap:"wrap"},n.row&&{flexDirection:"row"})),an=h.exports.forwardRef(function(e,t){const r=q({props:e,name:"MuiFormGroup"}),{className:a,row:i=!1}=r,s=G(r,nn),d=w({},r,{row:i}),m=on(d);return o(rn,w({className:re(m.root,a),ownerState:d,ref:t},s))});var sn=an,ln=Me(o("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),cn=Me(o("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");const dn=E("span")({position:"relative",display:"flex"}),un=E(ln,{skipSx:!0})({transform:"scale(1)"}),pn=E(cn,{skipSx:!0})(({theme:n,ownerState:e})=>w({left:0,position:"absolute",transform:"scale(0)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeIn,duration:n.transitions.duration.shortest})},e.checked&&{transform:"scale(1)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.shortest})}));function je(n){const{checked:e=!1,classes:t={},fontSize:r}=n,a=w({},n,{checked:e});return g(dn,{className:t.root,ownerState:a,children:[o(un,{fontSize:r,className:t.background,ownerState:a}),o(pn,{fontSize:r,className:t.dot,ownerState:a})]})}const hn=h.exports.createContext(void 0);var We=hn;function fn(){return h.exports.useContext(We)}function mn(n){return N("MuiRadio",n)}const gn=U("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);var ve=gn;const yn=["checked","checkedIcon","color","icon","name","onChange","size"],Cn=n=>{const{classes:e,color:t}=n,r={root:["root",`color${V(t)}`]};return w({},e,Y(r,mn,e))},vn=E(Ut,{shouldForwardProp:n=>lt(n)||n==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[`color${V(t.color)}`]]}})(({theme:n,ownerState:e})=>w({color:n.palette.text.secondary,"&:hover":{backgroundColor:Ae(e.color==="default"?n.palette.action.active:n.palette[e.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${ve.checked}`]:{color:n.palette[e.color].main}},{[`&.${ve.disabled}`]:{color:n.palette.action.disabled}}));function Sn(n,e){return typeof e=="object"&&e!==null?n===e:String(n)===String(e)}const Se=o(je,{checked:!0}),be=o(je,{}),bn=h.exports.forwardRef(function(e,t){var r,a;const i=q({props:e,name:"MuiRadio"}),{checked:s,checkedIcon:d=Se,color:m="primary",icon:u=be,name:f,onChange:v,size:p="medium"}=i,b=G(i,yn),l=w({},i,{color:m,size:p}),y=Cn(l),C=fn();let x=s;const F=ct(v,C&&C.onChange);let D=f;return C&&(typeof x=="undefined"&&(x=Sn(C.value,i.value)),typeof D=="undefined"&&(D=C.name)),o(vn,w({type:"radio",icon:h.exports.cloneElement(u,{fontSize:(r=be.props.fontSize)!=null?r:p}),checkedIcon:h.exports.cloneElement(d,{fontSize:(a=Se.props.fontSize)!=null?a:p}),ownerState:l,classes:y,name:D,checked:x,onChange:F,ref:t},b))});var xe=bn;const xn=["actions","children","defaultValue","name","onChange","value"],Rn=h.exports.forwardRef(function(e,t){const{actions:r,children:a,defaultValue:i,name:s,onChange:d,value:m}=e,u=G(e,xn),f=h.exports.useRef(null),[v,p]=dt({controlled:m,default:i,name:"RadioGroup"});h.exports.useImperativeHandle(r,()=>({focus:()=>{let C=f.current.querySelector("input:not(:disabled):checked");C||(C=f.current.querySelector("input:not(:disabled)")),C&&C.focus()}}),[]);const b=ut(t,f),l=C=>{p(C.target.value),d&&d(C,C.target.value)},y=pt(s);return o(We.Provider,{value:{name:y,onChange:l,value:v},children:o(sn,w({role:"radiogroup",ref:b},u,{children:a}))})});var kn=Rn;function wn(n){return N("MuiSkeleton",n)}U("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Fn=["animation","className","component","height","style","variant","width"];let W=n=>n,Re,ke,we,Fe;const Tn=n=>{const{classes:e,variant:t,animation:r,hasChildren:a,width:i,height:s}=n;return Y({root:["root",t,r,a&&"withChildren",a&&!i&&"fitContent",a&&!s&&"heightAuto"]},wn,e)},$n=Ie(Re||(Re=W`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Dn=Ie(ke||(ke=W`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),Mn=E("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],t.animation!==!1&&e[t.animation],t.hasChildren&&e.withChildren,t.hasChildren&&!t.width&&e.fitContent,t.hasChildren&&!t.height&&e.heightAuto]}})(({theme:n,ownerState:e})=>{const t=qt(n.shape.borderRadius)||"px",r=Yt(n.shape.borderRadius);return w({display:"block",backgroundColor:Ae(n.palette.text.primary,n.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${t}/${Math.round(r/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:n})=>n.animation==="pulse"&&fe(we||(we=W`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),$n),({ownerState:n,theme:e})=>n.animation==="wave"&&fe(Fe||(Fe=W`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(90deg, transparent, ${0}, transparent);
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Dn,e.palette.action.hover)),An=h.exports.forwardRef(function(e,t){const r=q({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:i,component:s="span",height:d,style:m,variant:u="text",width:f}=r,v=G(r,Fn),p=w({},r,{animation:a,component:s,variant:u,hasChildren:Boolean(v.children)}),b=Tn(p);return o(Mn,w({as:s,ref:t,className:re(b.root,i),ownerState:p},v,{style:w({width:f,height:d},m)}))});var M=An;const In=n=>{const{fleetSetup:e,onChange:t,errors:r,columnCount:a}=n,i=u=>{t({...e,name:u.target.value.trim()})},s=u=>{t({...e,maxCost:Number(u.target.value)})},d=u=>{t({...e,maxReinforcement:Number(u.target.value)})},m=u=>{t({...e,myListOnly:u.target.value==="myListOnly"})};return o(_,{children:o(T,{p:1,children:o(ht,{sx:{alignItems:"center"},offsetValue:!1,rowGap:1,columnCount:a,rows:[{key:"name",label:c("fleetSetup.fleetName"),value:u=>o(H,{variant:"outlined",size:"small",value:e.name,onChange:i,error:!!r.name,helperText:r.name,fullWidth:u})},{key:"reinforcementCount",label:c("fleetSetup.maxReinforcementCount"),value:u=>o(H,{variant:"outlined",size:"small",select:!0,value:e.maxReinforcement,onChange:d,error:!!r.maxReinforcement,helperText:r.maxReinforcement,fullWidth:u,SelectProps:{renderValue:()=>o(S,{variant:"body1",whiteSpace:"normal",children:e.maxReinforcement})},children:[5,6,7,9,10].map(f=>o(z,{value:`${f}`,children:c("fleetSetup.shipCount",{value:f})},`reinforcementCount${f}`))})},{key:"maxCost",label:c("fleetSetup.maxCommandPoints"),value:u=>o(H,{variant:"outlined",size:"small",select:!0,value:e.maxCost,onChange:s,error:!!r.maxCost,helperText:r.maxCost,fullWidth:u,SelectProps:{renderValue:()=>o(S,{variant:"body1",whiteSpace:"normal",children:e.maxCost})},children:[450,430,415,400,350,330,315,300].map(f=>o(z,{value:`${f}`,children:f},`maxCost${f}`))})},{key:"myListOnly",label:c("fleetSetup.availableShipsForAdding"),value:u=>g(H,{variant:"outlined",size:"small",select:!0,value:e.myListOnly?"myListOnly":"all",onChange:m,error:!!r.myListOnly,helperText:r.myListOnly,fullWidth:u,SelectProps:{renderValue:()=>o(S,{variant:"body1",whiteSpace:"normal",children:e.myListOnly?c("label.acquiredShips"):c("label.allShips")})},children:[o(z,{value:"all",children:c("label.allShips")}),o(z,{value:"myListOnly",children:c("label.acquiredShips")})]})}]})})})};var se={},Ln=K.exports;Object.defineProperty(se,"__esModule",{value:!0});var le=se.default=void 0,_n=Ln(X),En=J,On=(0,_n.default)((0,En.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");le=se.default=On;const Ne=n=>{const{onOpenAddShips:e,filter:t,buttonProps:r}=n,a=i=>{switch(i){case"addInitialShip":{e(null,t);break}case"addSelfReinforcement":{e("self",t);break}case"addAllyReinforcement":{e("ally",t);break}case"addAlly2Reinforcement":{e("ally2",t);break}case"addAlly3Reinforcement":{e("ally3",t);break}}};return o(At,{icon:o(le,{}),text:c("fleetSetup.addShips"),onClick:a,buttonProps:r,options:[{key:"addInitialShip",text:c("fleetSetup.normalAssignment"),value:"addInitialShip"},{key:"addSelfReinforcement",text:c("fleetSetup.selfReinforcement"),value:"addSelfReinforcement"},{key:"addAllyReinforcement",text:c("fleetSetup.orgReinforcementA"),value:"addAllyReinforcement"},{key:"addAlly2Reinforcement",text:c("fleetSetup.orgReinforcementB"),value:"addAlly2Reinforcement"},{key:"addAlly3Reinforcement",text:c("fleetSetup.orgReinforcementC"),value:"addAlly3Reinforcement"}]})},Pn=n=>{const{grouping:e,onChangeGrouping:t,onCancel:r,onSave:a,onReset:i,onOpenAddShips:s,saveDisabled:d}=n;return o(Mt,{left:m=>g(A,{children:[o(It,{value:e,onChange:t,buttonProps:m}),o(Ne,{onOpenAddShips:s,buttonProps:m})]}),right:m=>g(A,{children:[o($,{variant:"outlined",startIcon:o(Ft,{}),onClick:i,...m,children:c("button.initialize")},"reset"),o($,{variant:"outlined",startIcon:o(Tt,{}),onClick:r,...m,children:c("button.cancel")},"cancel"),o($,{variant:"contained",startIcon:o($t,{}),onClick:a,disabled:d,...m,children:c("button.save")},"save")]})})},Gn=n=>{var b;const{initialFleetKey:e}=n,t=Le(),r=h.exports.useMemo(()=>Lt(),[]),[a,i]=h.exports.useState(e&&(b=r.find(l=>l.key===e))!=null?b:r[0]),s=h.exports.useCallback((l,y,C)=>{i(x=>Pe({shipId:l,count:y,reinforcement:C,fleetSetup:x}))},[]),d=h.exports.useCallback((l,y,C,x)=>{i(F=>_t({shipId:l,carrierShipId:y,count:C,reinforcement:x,fleetSetup:F}))},[]),m=h.exports.useCallback((l,y,C)=>{i(x=>Et({shipId:l,reinforcement:y,moduleSelection:C,fleetSetup:x}))},[]),u=h.exports.useCallback(()=>{Ot(a),t("/fleetSetup")},[a]),f=h.exports.useCallback(()=>{const l=Number(a.key.substring(5));i(Pt(l))},[a]),v=h.exports.useMemo(()=>Gt(a),[a]),p=h.exports.useMemo(()=>ae(a),[a]);return{fleetSetup:a,errors:v,shipWarnings:p,setFleetSetup:i,setShipCount:s,setCarriedShipCount:d,setModule:m,save:u,reset:f}},Bn=n=>{const{fleetSetup:e,fleetShipCount:t}=n,r=t.totalCost>e.maxCost,a=e.totalReinforcementCount>e.maxReinforcement;return o(T,{sx:{height:"100px"},children:o(_,{square:!0,sx:{position:"fixed",right:0,bottom:0,zIndex:1,width:"100%",borderTop:"1px solid rgba(0, 0, 0, 0.2)"},children:o(Rt,{maxWidth:"md",disableGutters:!0,children:o(T,{p:1,children:g(R,{spacing:1,flexWrap:"wrap",direction:"row",children:[o(T,{sx:{flexGrow:1,display:"flex",justifyContent:"center"},children:g("div",{children:[o(S,{variant:"body2",color:"text.secondary",children:c("fleetSetup.reinforcement")}),o(S,{variant:"body1",sx:{color:a?"red":void 0},children:o("strong",{children:`${e.totalReinforcementCount} / ${e.maxReinforcement}`})})]})}),o(T,{sx:{flexGrow:1,display:"flex",justifyContent:"center"},children:g("div",{children:[o(S,{variant:"body2",color:"text.secondary",children:c("fleetSetup.commandPoints")}),o(S,{variant:"body1",sx:{color:r?"red":void 0},children:o("strong",{children:`${t.totalCost} / ${e.maxCost}`})})]})})]})})})})})};function zn(n,e,t,r){const a={};e.ships.forEach(s=>{a[`${s.shipDefinition.id}_${s.reinforcement}`]=!0});const i=Hn(_e,n,e.myListOnly,t);return{fleetSetup:{...e,ships:[...e.ships,...i.flatMap(s=>a[`${s.id}_${n}`]?[]:[Ge({shipDefinition:s,usedModules:null,count:0,reinforcement:n,maxReinforcement:e.maxReinforcement,temporary:!0})])]},reinforcement:n,filter:r}}function Hn(n,e,t,r){const a=n.filter(i=>i.type!==k.CORVETTE&&i.type!==k.FIGHTER);return(e==null?void 0:e.includes("ally"))||!t?a:a.filter(i=>Ee(i.id,r))}function jn(n){return{...n.fleetSetup,ships:n.fleetSetup.ships.flatMap(e=>e.temporary?e.count===0?[]:[{...e,temporary:!1}]:[e])}}function Wn(n,e){let t={...e,fleetSetup:{...e.fleetSetup,ships:e.fleetSetup.ships.filter(r=>r.temporary===!0)}};return Object.keys(n).filter(r=>n[r]).forEach(r=>{switch(r){case ne.FRONT:case ne.MIDDLE:case ne.BACK:{t={...t,fleetSetup:{...t.fleetSetup,ships:t.fleetSetup.ships.filter(a=>a.shipDefinition.row===r)}};break}case k.CARRIER:case k.AUXILIARY:case k.BATTLE_CRUISER:case k.CRUISER:case k.DESTROYER:case k.FRIGATE:{t={...t,fleetSetup:{...t.fleetSetup,ships:t.fleetSetup.ships.filter(a=>a.shipDefinition.type===r)}};break}}}),t}const Nn=n=>{const{userSettings:e,fleetSetup:t,setFleetSetup:r}=n,[a,i]=h.exports.useState(null),s=h.exports.useCallback((v,p)=>{i(zn(v,t,e,p!=null?p:null))},[t,e]),d=h.exports.useCallback(()=>{i(null)},[]),m=h.exports.useCallback(()=>{a&&(r(jn(a)),i(null))},[a,r]),u=h.exports.useCallback((v,p,b)=>{i(l=>l?{...l,fleetSetup:Pe({shipId:v,count:p,reinforcement:b,fleetSetup:l.fleetSetup,keepZero:!0})}:null)},[e]),f=h.exports.useMemo(()=>a?ae(a.fleetSetup):{},[a]);return{dialogData:a,shipWarnings:f,open:s,cancel:d,apply:m,setShipCount:u}};var ce={},Un=K.exports;Object.defineProperty(ce,"__esModule",{value:!0});var Ue=ce.default=void 0,Vn=Un(X),qn=J,Yn=(0,Vn.default)((0,qn.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");Ue=ce.default=Yn;var de={},Xn=K.exports;Object.defineProperty(de,"__esModule",{value:!0});var Ve=de.default=void 0,Kn=Xn(X),Jn=J,Zn=(0,Kn.default)((0,Jn.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddBox");Ve=de.default=Zn;const Qn=n=>{const{shipDefinition:e,count:t,maxCount:r,reinforcement:a,showCost:i,showReinforcement:s,carrierShipId:d,shipWarning:m,onChangeShipCount:u,onChangeCarriedShipCount:f}=n,v=Z(),p=Q(v.breakpoints.down("sm")),{openShipDetailDialog:b}=ft(),l=g(A,{children:[o(S,{variant:"body1",children:o(mt,{onClick:()=>{b(e.id)},children:gt(e)})}),i&&a===null&&g(S,{variant:"body2",color:"text.secondary",children:[c("label.commandPointsColon"),I()?" ":"",e.cost,c("label.comma"),I()?" ":"",c("label.totalColon"),I()?" ":"",`${e.cost*t}`]}),s&&a==="self"&&o(S,{variant:"body2",color:"text.secondary",children:c("fleetSetup.selfReinforcement")}),s&&a==="ally"&&o(S,{variant:"body2",color:"text.secondary",children:c("fleetSetup.orgReinforcementA")}),s&&a==="ally2"&&o(S,{variant:"body2",color:"text.secondary",children:c("fleetSetup.orgReinforcementB")}),s&&a==="ally3"&&o(S,{variant:"body2",color:"text.secondary",children:c("fleetSetup.orgReinforcementC")})]}),y=m&&o(S,{variant:"caption",color:"red",textAlign:"end",children:m}),C=o($,{onClick:()=>{d?f==null||f(e.id,d,0,a):u==null||u(e.id,0,a)},disabled:t<=0,children:c("fleetSetup.clearAddedShips")}),x=o(me,{onClick:()=>{d?f==null||f(e.id,d,t-1,a):u==null||u(e.id,t-1,a)},disabled:t<=0,children:o(Ue,{color:t<=0?"disabled":"primary"})}),F=o(S,{variant:"body1",sx:{minWidth:"55px"},textAlign:"center",children:o("strong",{children:`${t} / ${r}`})}),D=o(me,{onClick:()=>{d?f==null||f(e.id,d,t+1,a):u==null||u(e.id,t+1,a)},disabled:t>=r,children:o(Ve,{color:t>=r?"disabled":"primary"})}),O=o($,{onClick:()=>{d?f==null||f(e.id,d,r,a):u==null||u(e.id,r,a)},disabled:t>=r,children:c("fleetSetup.fillUpAddedShips")});return g(A,{children:[p&&g(R,{spacing:1,children:[l,g(_,{variant:"outlined",sx:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[g(R,{direction:"row",spacing:1,sx:{alignItems:"center"},children:[x,F,D]}),g(R,{direction:"row",spacing:1,sx:{alignItems:"center"},children:[C,O]})]}),y]}),!p&&g(R,{spacing:1,children:[g(R,{spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[o(T,{pb:1,children:o(R,{spacing:1,children:l})}),o(T,{sx:{display:"flex",justifyContent:"end",flexGrow:1},children:o(_,{variant:"outlined",sx:{display:"inline-block"},children:g(R,{direction:"row",spacing:1,sx:{alignItems:"center"},children:[C,x,F,D,O]})})})]}),y]})]})};function eo(n){const e={corvette:{key:"corvette",name:c("shipType.corvette"),count:n.carriedShips.filter(t=>t.shipDefinition.type===k.CORVETTE).map(t=>t.count).reduce((t,r)=>t+r,0),maxCount:n.carrierCapabilities.carryCorvette*n.count},upToLargeFighter:{key:"upToLargeFighter",name:c("shipType.smallToLargeFighter"),count:n.carriedShips.filter(t=>t.shipDefinition.type===k.FIGHTER&&t.shipDefinition.subType===P.LARGE_FIGHTER).map(t=>t.count).reduce((t,r)=>t+r,0),maxCount:n.carrierCapabilities.carryUpToLargeFighter*n.count},upToMediumFighter:{key:"upToMediumFighter",name:c("shipType.smallToMediumFighter"),count:n.carriedShips.filter(t=>t.shipDefinition.type===k.FIGHTER&&t.shipDefinition.subType===P.MEDIUM_FIGHTER).map(t=>t.count).reduce((t,r)=>t+r,0),maxCount:n.carrierCapabilities.carryUpToMediumFighter*n.count},upToSmallFighter:{key:"upToSmallFighter",name:c("shipType.smallFighter"),count:n.carriedShips.filter(t=>t.shipDefinition.type===k.FIGHTER&&t.shipDefinition.subType===P.SMALL_FIGHTER).map(t=>t.count).reduce((t,r)=>t+r,0),maxCount:n.carrierCapabilities.carryUpToSmallFighter*n.count},removedHangar:{key:"removedHangar",name:c("label.unsupported"),count:0,maxCount:0}};return Te(e.upToMediumFighter,[e.upToLargeFighter]),Te(e.upToSmallFighter,[e.upToMediumFighter,e.upToLargeFighter]),oe(e.upToSmallFighter,e.upToMediumFighter),oe(e.upToMediumFighter,e.upToLargeFighter),e.upToLargeFighter.maxCount===0&&oe(e.upToLargeFighter,e.removedHangar),e}function Te(n,e){let t=n.count-n.maxCount;t<=0||(n.count-=t,e.forEach(r=>{if(t<=0||r.maxCount===0)return;const a=r.maxCount-r.count;if(a<=0)return;const i=Math.min(a,t);t-=i,r.count+=i}),t>0&&(n.count+=t))}function oe(n,e){const t=n.count-n.maxCount;t>0&&(n.count-=t,e.count+=t)}function to(n){return n.count>0||n.maxCount>0}const no=n=>{const{shipSelection:e,onOpenAddCarriedShips:t}=n,r=Z(),a=Q(r.breakpoints.down("xs")),i=h.exports.useMemo(()=>eo(e),[e]);return g(R,{spacing:1,direction:a?"column":"row",alignItems:a?"flex-start":"center",justifyContent:"end",flexWrap:"wrap",children:[g(R,{sx:{flexGrow:1},spacing:3,direction:"row",alignItems:"center",justifyContent:"space-between",children:[o(S,{variant:"body2",color:"text.secondary",children:c("label.hangarColon")}),o(R,{spacing:1,direction:"row",alignItems:"center",children:o(R,{spacing:1,direction:"row",alignItems:"center",children:Object.keys(i).filter(s=>to(i[s])).map(s=>i[s]).map(s=>g(h.exports.Fragment,{children:[o(S,{variant:"body2",color:"text.secondary",children:s.name}),o(S,{variant:"body2",color:"text.secondary",sx:{color:s.count>s.maxCount?"red":void 0},children:o("strong",{children:`${s.count} / ${s.maxCount}`})})]},s.key))})})]}),o($,{variant:"outlined",size:"small",startIcon:o(le,{}),sx:{whiteSpace:"nowrap"},onClick:()=>{t==null||t(e.shipDefinition.id,e.reinforcement)},children:c("fleetSetup.addAircraft")})]})};var ue={},oo=K.exports;Object.defineProperty(ue,"__esModule",{value:!0});var qe=ue.default=void 0,ro=oo(X),ao=J,io=(0,ro.default)((0,ao.jsx)("path",{d:"M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"}),"Tune");qe=ue.default=io;const so=n=>{const{shipId:e,reinforcement:t,moduleSelection:r,myListOnly:a,onChange:i,onClose:s}=n,{userSettings:d}=yt(),[m,u]=h.exports.useState(r),f=()=>{i(e,t,m),s()},v=l=>{const[y,C]=l.target.value.split("#");u(x=>Bt(y,C,x))},p=l=>{const y=Object.keys(m.groups[l]).find(C=>m.groups[l][C].usage==="used");return y?`${l}#${y}`:null},b=l=>!Object.keys(m.groups[l]).find(y=>m.groups[l][y].module.defaultModule);return o(ie,{title:c("fleetSetup.configureModules"),content:g(R,{spacing:3,children:[Object.keys(m.groups).map(l=>{const y=p(l),C=`${l}#none`;return o(_,{variant:"outlined",children:o(T,{pl:1,pr:1,children:o(Wt,{children:g(kn,{defaultValue:"female",name:`group-${l}`,value:y!=null?y:C,onChange:v,children:[b(l)&&o(Ce,{label:`${c("label.notSelected")}`,value:C,control:o(xe,{})},C),Object.keys(m.groups[l]).map(x=>{const F=m.groups[l][x],D=t!=="ally"&&t!=="ally2"&&t!=="ally3"&&a&&!F.module.defaultModule&&!Ct(x,e,d),O=`${l}#${x}`;return o(Ce,{label:g(T,{pt:1,pb:1,children:[o(S,{variant:"body1",children:`${F.module.category}${F.module.categoryNumber} ${Oe(e,F.module)}`}),vt()===St.JAPANESE&&F.module.description&&o(S,{variant:"body2",color:"text.secondary",children:`${F.module.description}`})]}),value:O,control:o(xe,{disabled:D}),disabled:D},x)})]})})})},l)}),a&&o(S,{variant:"caption",paragraph:!0,children:c("fleetSetup.configureModulesFootnote")})]}),actions:g(A,{children:[o($,{variant:"outlined",onClick:s,children:c("button.cancel")}),o($,{variant:"contained",onClick:f,children:c("button.confirm")})]}),onClose:s})},lo=n=>{const{shipId:e,reinforcement:t,moduleSelection:r,myListOnly:a,onChange:i}=n,s=Z(),d=Q(s.breakpoints.down("xs")),[m,u]=h.exports.useState(!1),f=()=>{u(!0)},v=()=>{u(!1)},p=[];return Object.keys(r.groups).map(b=>{Object.keys(r.groups[b]).map(l=>r.groups[b][l]).forEach(l=>{l.usage==="used"&&(p.length>0&&p.push(o(h.exports.Fragment,{children:g(S,{variant:"body2",component:"span",children:[c("label.comma"),I()?" ":""]})},`before_${l.module.id}`)),p.push(o(h.exports.Fragment,{children:o(Vt,{arrow:!0,disableFocusListener:!0,title:Oe(e,l.module),children:o(S,{variant:"body2",component:"span",children:`${l.module.category}${l.module.categoryNumber}`})})},l.module.id)))})}),g(A,{children:[g(R,{spacing:1,direction:d?"column":"row",alignItems:d?"flex-start":"center",justifyContent:"end",flexWrap:"wrap",children:[o(T,{sx:{flexGrow:1},children:g(S,{variant:"body2",color:"text.secondary",children:[c("label.systemModulesColon"),I()?" ":"",p]})}),!r.static&&o(T,{sx:{display:"flex",alignContent:"end"},children:o($,{variant:"outlined",size:"small",startIcon:o(qe,{}),sx:{whiteSpace:"nowrap"},onClick:f,children:c("fleetSetup.configureModules")})})]}),m&&o(so,{shipId:e,reinforcement:t,moduleSelection:r,myListOnly:a,onChange:i,onClose:v})]})},$e=h.exports.memo(Qn),pe=n=>{const{shipSelections:e,showCost:t,showReinforcement:r,showHangar:a,shipWarnings:i,carrierShipId:s,myListOnly:d,onChangeShipCount:m,onChangeCarriedShipCount:u,onOpenAddCarriedShips:f,onChangeModule:v}=n;return o(R,{spacing:1,children:e==null?void 0:e.map(p=>{var b,l;return o(_,{variant:"outlined",children:o(T,{p:1,children:g(R,{spacing:1,children:[o($e,{shipDefinition:p.shipDefinition,count:p.count,maxCount:p.maxCount,reinforcement:p.reinforcement,showCost:t,showReinforcement:r,carrierShipId:s,onChangeShipCount:m,onChangeCarriedShipCount:u,shipWarning:i[ge(p.shipDefinition.id,p.reinforcement)]}),p.moduleSelection&&v&&o(lo,{shipId:p.shipDefinition.id,reinforcement:p.reinforcement,moduleSelection:p.moduleSelection,myListOnly:d,onChange:v}),a&&p.carrierCapabilities.canCarry&&g(R,{spacing:1,children:[o(no,{shipSelection:p,onOpenAddCarriedShips:f}),(b=p.carriedShips)==null?void 0:b.map(y=>{var C;return o($e,{shipDefinition:y.shipDefinition,count:y.count,maxCount:y.shipDefinition.operationLimit,reinforcement:y.reinforcement,carrierShipId:p.shipDefinition.id,showCost:!1,showReinforcement:!1,onChangeCarriedShipCount:u,shipWarning:i[ge(y.shipDefinition.id,p.reinforcement)]},`${p.shipDefinition.id}_${y.shipDefinition.id}_${(C=y.reinforcement)!=null?C:"initial"}`)})]})]})})},`${p.shipDefinition.id}_${(l=p.reinforcement)!=null?l:"initial"}`)})})},co=n=>{const{dialogData:e,shipWarnings:t,myListOnly:r,onCancel:a,onApply:i,onChangeShipCount:s}=n,[d,m]=h.exports.useState(!1),[u,f]=h.exports.useState(()=>{const p=ze();return e.filter&&typeof p[e.filter]=="boolean"?{...p,[e.filter]:!0}:p}),v=h.exports.useMemo(()=>Wn(u,e),[u,e]);return h.exports.useEffect(()=>{const p=setTimeout(()=>{m(!0)},0);return()=>{clearTimeout(p)}},[]),o(ie,{title:g(R,{spacing:1,direction:"row",justifyContent:"space-between",alignItems:"center",children:[o(S,{variant:"h6",children:uo(e.reinforcement)}),e.reinforcement===null?g("div",{children:[g(S,{variant:"body1",component:"span",children:[c("label.commandPointsColon"),I()?" ":""]}),o(S,{variant:"body1",component:"span",sx:{color:e.fleetSetup.totalCost>e.fleetSetup.maxCost?"red":void 0},children:o("strong",{children:`${e.fleetSetup.totalCost} / ${e.fleetSetup.maxCost}`})})]}):g("div",{children:[g(S,{variant:"body1",component:"span",children:[c("fleetSetup.reinforcementColon"),I()?" ":""]}),o(S,{variant:"body1",component:"span",sx:{color:e.fleetSetup.totalReinforcementCount>e.fleetSetup.maxReinforcement?"red":void 0},children:o("strong",{children:`${e.fleetSetup.totalReinforcementCount} / ${e.fleetSetup.maxReinforcement}`})})]})]}),content:g(R,{spacing:2,children:[o(S,{variant:"body2",children:po(e.reinforcement)}),o("div",{children:o(He,{filter:u,shipTypes:[k.CARRIER,k.AUXILIARY,k.BATTLE_CRUISER,k.CRUISER,k.DESTROYER,k.FRIGATE],onChange:f,popperProps:{disablePortal:!1,placement:"bottom-start",style:{zIndex:1300}}})}),v.fleetSetup.ships.length===0&&o(Be,{severity:"info",children:c("fleetSetup.noMatchingShip")}),d?o(pe,{shipSelections:v.fleetSetup.ships,showCost:!v.reinforcement,showReinforcement:!1,showHangar:!1,shipWarnings:t,carrierShipId:null,myListOnly:r,onChangeShipCount:s}):g(R,{spacing:1,children:[o(M,{variant:"rectangular",height:90}),o(M,{variant:"rectangular",animation:"wave",height:90}),o(M,{variant:"rectangular",height:90}),o(M,{variant:"rectangular",animation:"wave",height:90}),o(M,{variant:"rectangular",height:90})]})]}),actions:g(A,{children:[o($,{variant:"outlined",onClick:a,children:c("button.cancel")}),o($,{variant:"contained",onClick:i,children:c("button.confirm")})]}),onClose:a})};function uo(n){switch(n){case"ally":case"ally2":case"ally3":case"self":return c("fleetSetup.addReinforcement");default:return c("fleetSetup.addShips")}}function po(n){switch(n){case"ally":return c("fleetSetup.addReinforcementDescriptionAllyA");case"ally2":return c("fleetSetup.addReinforcementDescriptionAllyB");case"ally3":return c("fleetSetup.addReinforcementDescriptionAllyC");case"self":return c("fleetSetup.addReinforcementDescriptionSelf");default:return c("fleetSetup.addShipsDescription")}}function ho(n,e,t,r){const a=t.ships.find(d=>d.shipDefinition.id===n&&d.reinforcement===e);if(!a)throw new Error("Invalid carrier");const i={};a.carriedShips.forEach(d=>{i[`${d.shipDefinition.id}_${d.reinforcement}`]=!0});const s=fo(a,_e,e,t.myListOnly,r);return{carrierShipId:n,reinforcement:e,shipSelections:s.flatMap(d=>i[`${d.id}_${e}`]?[]:[Ge({shipDefinition:d,usedModules:null,count:0,reinforcement:e,maxReinforcement:t.maxReinforcement,temporary:!0})]),filter:null}}function fo(n,e,t,r,a){const i=e.filter(s=>{switch(s.type){case k.CORVETTE:return n.carrierCapabilities.carryCorvette>0;case k.FIGHTER:switch(s.subType){case P.LARGE_FIGHTER:return n.carrierCapabilities.carryUpToLargeFighter>0;case P.MEDIUM_FIGHTER:return n.carrierCapabilities.carryUpToMediumFighter>0||n.carrierCapabilities.carryUpToLargeFighter>0;case P.SMALL_FIGHTER:return n.carrierCapabilities.carryUpToSmallFighter>0||n.carrierCapabilities.carryUpToMediumFighter>0||n.carrierCapabilities.carryUpToLargeFighter>0}}return!1});return(t==null?void 0:t.includes("ally"))||!r?i:i.filter(s=>Ee(s.id,a))}function De(n,e){return{...e,ships:e.ships.map(t=>t.shipDefinition.id!==n.carrierShipId||t.reinforcement!==n.reinforcement?t:{...t,carriedShips:[...t.carriedShips,...n.shipSelections.filter(r=>r.count>0).map(r=>zt({shipId:r.shipDefinition.id,count:r.count,reinforcement:n.reinforcement}))]})}}function mo(n,e){let t=e;return Object.keys(n).filter(r=>n[r]).forEach(r=>{switch(r){case k.CORVETTE:case k.FIGHTER:{t={...t,shipSelections:t.shipSelections.filter(a=>a.shipDefinition.type===r)};break}}}),t}const go=n=>{const{userSettings:e,fleetSetup:t,setFleetSetup:r}=n,[a,i]=h.exports.useState(null),s=h.exports.useCallback((v,p)=>{i(ho(v,p,t,e))},[t,e]),d=h.exports.useCallback(()=>{i(null)},[]),m=h.exports.useCallback(()=>{a&&(r(De(a,t)),i(null))},[a,t,r]),u=h.exports.useCallback((v,p,b)=>{i(l=>l?{...l,shipSelections:l.shipSelections.map(y=>y.shipDefinition.id!==v||y.reinforcement!==b?y:{...y,count:p})}:null)},[e]),f=h.exports.useMemo(()=>{if(!a)return{};const v=De(a,t);return ae(v)},[a,t]);return{dialogData:a,shipWarnings:f,open:s,cancel:d,apply:m,setShipCount:u}},yo=n=>{const{dialogData:e,shipWarnings:t,myListOnly:r,onCancel:a,onApply:i,onChangeShipCount:s}=n,[d,m]=h.exports.useState(!1),[u,f]=h.exports.useState(()=>{const l=ze();return e.filter&&typeof l[e.filter]=="boolean"?{...l,[e.filter]:!0}:l}),v=h.exports.useMemo(()=>mo(u,e),[u,e]);h.exports.useEffect(()=>{const l=setTimeout(()=>{m(!0)},0);return()=>{clearTimeout(l)}},[]);const p=!!e.shipSelections.find(l=>l.shipDefinition.type===k.CORVETTE),b=!!e.shipSelections.find(l=>l.shipDefinition.type===k.FIGHTER);return o(ie,{title:c("fleetSetup.addAircraft"),content:g(R,{spacing:2,children:[o(S,{variant:"body2",children:c("fleetSetup.addAircraftDescription")}),p&&b&&o("div",{children:o(He,{filter:u,shipTypes:[k.CORVETTE,k.FIGHTER],shipRows:[],onChange:f,popperProps:{disablePortal:!1,placement:"bottom-start",style:{zIndex:1300}}})}),v.shipSelections.length===0&&o(Be,{severity:"info",children:c("fleetSetup.noMatchingAircraft")}),d?o(pe,{shipSelections:v.shipSelections,showCost:!1,showReinforcement:!1,showHangar:!1,shipWarnings:t,carrierShipId:null,myListOnly:r,onChangeShipCount:s}):g(R,{spacing:1,children:[o(M,{variant:"rectangular",height:90}),o(M,{variant:"rectangular",animation:"wave",height:90}),o(M,{variant:"rectangular",height:90}),o(M,{variant:"rectangular",animation:"wave",height:90}),o(M,{variant:"rectangular",height:90})]})]}),actions:g(A,{children:[o($,{variant:"outlined",onClick:a,children:c("button.cancel")}),o($,{variant:"contained",onClick:i,children:c("button.confirm")})]}),onClose:a})},Ao=()=>{const n=Le(),{fleetKey:e}=bt(),t=Z(),r=Q(t.breakpoints.up("lg")),a=h.exports.useMemo(()=>xt(),[]),[i,s]=h.exports.useState(!1),{fleetSetup:d,errors:m,shipWarnings:u,setFleetSetup:f,setShipCount:v,setCarriedShipCount:p,setModule:b,save:l,reset:y}=Gn({initialFleetKey:e}),{dialogData:C,shipWarnings:x,open:F,cancel:D,apply:O,setShipCount:Ye}=Nn({userSettings:a,fleetSetup:d,setFleetSetup:f}),{dialogData:he,shipWarnings:Xe,open:Ke,cancel:Je,apply:Ze,setShipCount:Qe}=go({userSettings:a,fleetSetup:d,setFleetSetup:f}),et=h.exports.useMemo(()=>Ht(d.ships),[d.ships]),[ee,tt]=h.exports.useState(ye.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME),te=h.exports.useMemo(()=>jt(ee,d),[d,ee]),nt=()=>{n(`/fleetSetup/${d.key}`)},ot=()=>{Object.keys(m).length>0||(l(),n(`/fleetSetup/${d.key}`))},rt=()=>{s(!1)},at=()=>{s(!0)},it=()=>{s(!1),y()},B=r&&te.groupedBy===ye.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME?"row":"column",st=B==="row"?4:2;return g(A,{children:[o(kt,{currentRoute:"/fleetSetup"}),o(Pn,{grouping:ee,onChangeGrouping:tt,onSave:ot,onCancel:nt,onReset:at,onOpenAddShips:F,saveDisabled:Object.keys(m).length>0}),o(wt,{disableContainer:B==="row",children:o(T,{p:1,sx:{marginBottom:"60px"},children:g(R,{spacing:1,children:[o(In,{fleetSetup:d,onChange:f,errors:m,columnCount:st}),o(R,{spacing:1,direction:B,children:te.groups.map(L=>o(_,{sx:{width:B==="row"?`${100/te.groups.length}%`:void 0},children:o(T,{p:1,children:g(R,{spacing:1,children:[g(R,{spacing:1,direction:"row",alignItems:"center",sx:{width:"100%"},children:[o(T,{sx:{flexGrow:1},children:g(S,{variant:"body1",children:[L.name,I()&&o("span",{children:"\xA0"}),L.count>0?c("fleetSetup.shipCountBrackets",{value:L.count}):""]})}),o(Ne,{filter:L.id,onOpenAddShips:F,buttonProps:{size:"small"}})]}),L.ships.length>0&&o(pe,{shipSelections:L.ships,onChangeShipCount:v,onChangeCarriedShipCount:p,onOpenAddCarriedShips:Ke,onChangeModule:b,showCost:!0,showReinforcement:!0,showHangar:!0,shipWarnings:u,carrierShipId:null,myListOnly:d.myListOnly})]})})},L.id))})]})})}),o(Bn,{fleetSetup:d,fleetShipCount:et}),C&&o(co,{dialogData:C,shipWarnings:x,myListOnly:d.myListOnly,onCancel:D,onApply:O,onChangeShipCount:Ye}),he&&o(yo,{dialogData:he,shipWarnings:Xe,myListOnly:d.myListOnly,onCancel:Je,onApply:Ze,onChangeShipCount:Qe}),i&&o(Dt,{title:c("button.initialize"),question:c("fleetSetup.confirmInitializeFleet"),cancelText:c("button.cancel"),confirmText:c("button.initialize"),onCancel:rt,onConfirm:it})]})};export{Ao as FleetSetupEditPage,Ao as default};
