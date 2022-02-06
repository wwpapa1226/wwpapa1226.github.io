var Lu=Object.defineProperty,Ou=Object.defineProperties;var vu=Object.getOwnPropertyDescriptors;var He=Object.getOwnPropertySymbols;var yu=Object.prototype.hasOwnProperty,xu=Object.prototype.propertyIsEnumerable;var $e=(u,o,t)=>o in u?Lu(u,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[o]=t,H=(u,o)=>{for(var t in o||(o={}))yu.call(o,t)&&$e(u,t,o[t]);if(He)for(var t of He(o))xu.call(o,t)&&$e(u,t,o[t]);return u},Q=(u,o)=>Ou(u,vu(o));import{s as $,_ as p,D as Ae,r as d,u as We,n as ke,o as Ye,j as r,q as W,i as Uu,k as Mu,l as je,y as wu,G as Pu,p as Gu,U as Vu,W as Hu,V as de,as as J,b as F,f as T,F as $u}from"./vendor.67bf9958.js";import{q as Wu,h as Xe,G as Ke,b as n,n as e,j as ku,k as Yu,e as ju,p as q,l as O,S as k,t as Xu,N as Ku,C as zu,B as ze}from"./NavigationBar.8bb842c6.js";import{F as Qu,I as Ju,S as qu,A as Qe,c as Je,d as qe,e as Ze}from"./Select.72ad8902.js";import{i as Z,g as Zu}from"./userSettingsUtils.c70c4537.js";import{u as eo,T as uo}from"./useTable.95ba11cb.js";import{P as oo}from"./Paper.9c820029.js";const to=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],no=u=>{const{absolute:o,children:t,classes:c,flexItem:A,light:l,orientation:i,textAlign:C,variant:R}=u;return Ye({root:["root",o&&"absolute",R,l&&"light",i==="vertical"&&"vertical",A&&"flexItem",t&&"withChildren",t&&i==="vertical"&&"withChildrenVertical",C==="right"&&i!=="vertical"&&"textAlignRight",C==="left"&&i!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",i==="vertical"&&"wrapperVertical"]},Wu,c)},ro=$("div",{name:"MuiDivider",slot:"Root",overridesResolver:(u,o)=>{const{ownerState:t}=u;return[o.root,t.absolute&&o.absolute,o[t.variant],t.light&&o.light,t.orientation==="vertical"&&o.vertical,t.flexItem&&o.flexItem,t.children&&o.withChildren,t.children&&t.orientation==="vertical"&&o.withChildrenVertical,t.textAlign==="right"&&t.orientation!=="vertical"&&o.textAlignRight,t.textAlign==="left"&&t.orientation!=="vertical"&&o.textAlignLeft]}})(({theme:u,ownerState:o})=>p({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:u.palette.divider,borderBottomWidth:"thin"},o.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},o.light&&{borderColor:Ae(u.palette.divider,.08)},o.variant==="inset"&&{marginLeft:72},o.variant==="middle"&&o.orientation==="horizontal"&&{marginLeft:u.spacing(2),marginRight:u.spacing(2)},o.variant==="middle"&&o.orientation==="vertical"&&{marginTop:u.spacing(1),marginBottom:u.spacing(1)},o.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},o.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:u,ownerState:o})=>p({},o.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${u.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:u,ownerState:o})=>p({},o.children&&o.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${u.palette.divider}`,transform:"translateX(0%)"}}),({ownerState:u})=>p({},u.textAlign==="right"&&u.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},u.textAlign==="left"&&u.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),io=$("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(u,o)=>{const{ownerState:t}=u;return[o.wrapper,t.orientation==="vertical"&&o.wrapperVertical]}})(({theme:u,ownerState:o})=>p({display:"inline-block",paddingLeft:`calc(${u.spacing(1)} * 1.2)`,paddingRight:`calc(${u.spacing(1)} * 1.2)`},o.orientation==="vertical"&&{paddingTop:`calc(${u.spacing(1)} * 1.2)`,paddingBottom:`calc(${u.spacing(1)} * 1.2)`})),ao=d.exports.forwardRef(function(o,t){const c=We({props:o,name:"MuiDivider"}),{absolute:A=!1,children:l,className:i,component:C=l?"div":"hr",flexItem:R=!1,light:_=!1,orientation:a="horizontal",role:h=C!=="hr"?"separator":void 0,textAlign:B="center",variant:I="fullWidth"}=c,E=ke(c,to),v=p({},c,{absolute:A,component:C,flexItem:R,light:_,orientation:a,role:h,textAlign:B,variant:I}),y=no(v);return r(ro,p({as:C,className:W(y.root,i),role:h,ref:t,ownerState:v},E,{children:l?r(io,{className:y.wrapper,ownerState:v,children:l}):null}))});var so=ao;function co(u){return Uu("MuiTooltip",u)}const lo=Mu("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);var D=lo;const po=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];function Ao(u){return Math.round(u*1e5)/1e5}const ho=u=>{const{classes:o,disableInteractive:t,arrow:c,touch:A,placement:l}=u,i={popper:["popper",!t&&"popperInteractive",c&&"popperArrow"],tooltip:["tooltip",c&&"tooltipArrow",A&&"touch",`tooltipPlacement${je(l.split("-")[0])}`],arrow:["arrow"]};return Ye(i,co,o)},Eo=$(Xe,{name:"MuiTooltip",slot:"Popper",overridesResolver:(u,o)=>{const{ownerState:t}=u;return[o.popper,!t.disableInteractive&&o.popperInteractive,t.arrow&&o.popperArrow,!t.open&&o.popperClose]}})(({theme:u,ownerState:o,open:t})=>p({zIndex:u.zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!t&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${D.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${D.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${D.arrow}`]:p({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${D.arrow}`]:p({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Co=$("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(u,o)=>{const{ownerState:t}=u;return[o.tooltip,t.touch&&o.touch,t.arrow&&o.tooltipArrow,o[`tooltipPlacement${je(t.placement.split("-")[0])}`]]}})(({theme:u,ownerState:o})=>p({backgroundColor:Ae(u.palette.grey[700],.92),borderRadius:u.shape.borderRadius,color:u.palette.common.white,fontFamily:u.typography.fontFamily,padding:"4px 8px",fontSize:u.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:u.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:u.typography.pxToRem(14),lineHeight:`${Ao(16/14)}em`,fontWeight:u.typography.fontWeightRegular},{[`.${D.popper}[data-popper-placement*="left"] &`]:p({transformOrigin:"right center"},o.isRtl?p({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):p({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${D.popper}[data-popper-placement*="right"] &`]:p({transformOrigin:"left center"},o.isRtl?p({marginRight:"14px"},o.touch&&{marginRight:"24px"}):p({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${D.popper}[data-popper-placement*="top"] &`]:p({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${D.popper}[data-popper-placement*="bottom"] &`]:p({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),To=$("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(u,o)=>o.arrow})(({theme:u})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Ae(u.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let ee=!1,he=null;function ue(u,o){return t=>{o&&o(t),u(t)}}const Ro=d.exports.forwardRef(function(o,t){var c,A,l,i,C,R;const _=We({props:o,name:"MuiTooltip"}),{arrow:a=!1,children:h,components:B={},componentsProps:I={},describeChild:E=!1,disableFocusListener:v=!1,disableHoverListener:y=!1,disableInteractive:ru=!1,disableTouchListener:iu=!1,enterDelay:Te=100,enterNextDelay:Re=0,enterTouchDelay:au=700,followCursor:oe=!1,id:su,leaveDelay:me=0,leaveTouchDelay:cu=1500,onClose:_e,onOpen:Fe,open:lu,placement:Be="bottom",PopperComponent:te,PopperProps:b={},title:x,TransitionComponent:pu=Ke,TransitionProps:Au}=_,Ie=ke(_,po),ne=wu(),du=ne.direction==="rtl",[U,Se]=d.exports.useState(),[re,hu]=d.exports.useState(null),Y=d.exports.useRef(!1),ie=ru||oe,j=d.exports.useRef(),X=d.exports.useRef(),N=d.exports.useRef(),fe=d.exports.useRef(),[Eu,De]=Pu({controlled:lu,default:!1,name:"Tooltip",state:"open"});let f=Eu;const ae=Gu(su),M=d.exports.useRef(),K=d.exports.useCallback(()=>{M.current!==void 0&&(document.body.style.WebkitUserSelect=M.current,M.current=void 0),clearTimeout(fe.current)},[]);d.exports.useEffect(()=>()=>{clearTimeout(j.current),clearTimeout(X.current),clearTimeout(N.current),K()},[K]);const ge=s=>{clearTimeout(he),ee=!0,De(!0),Fe&&!f&&Fe(s)},z=Vu(s=>{clearTimeout(he),he=setTimeout(()=>{ee=!1},800+me),De(!1),_e&&f&&_e(s),clearTimeout(j.current),j.current=setTimeout(()=>{Y.current=!1},ne.transitions.duration.shortest)}),se=s=>{Y.current&&s.type!=="touchstart"||(U&&U.removeAttribute("title"),clearTimeout(X.current),clearTimeout(N.current),Te||ee&&Re?X.current=setTimeout(()=>{ge(s)},ee?Re:Te):ge(s))},be=s=>{clearTimeout(X.current),clearTimeout(N.current),N.current=setTimeout(()=>{z(s)},me)},{isFocusVisibleRef:Ne,onBlur:Cu,onFocus:Tu,ref:Ru}=Hu(),[,Le]=d.exports.useState(!1),Oe=s=>{Cu(s),Ne.current===!1&&(Le(!1),be(s))},ve=s=>{U||Se(s.currentTarget),Tu(s),Ne.current===!0&&(Le(!0),se(s))},ye=s=>{Y.current=!0;const m=h.props;m.onTouchStart&&m.onTouchStart(s)},xe=se,Ue=be,mu=s=>{ye(s),clearTimeout(N.current),clearTimeout(j.current),K(),M.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",fe.current=setTimeout(()=>{document.body.style.WebkitUserSelect=M.current,se(s)},au)},_u=s=>{h.props.onTouchEnd&&h.props.onTouchEnd(s),K(),clearTimeout(N.current),N.current=setTimeout(()=>{z(s)},cu)};d.exports.useEffect(()=>{if(!f)return;function s(m){(m.key==="Escape"||m.key==="Esc")&&z(m)}return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[z,f]);const Fu=de(Se,t),Bu=de(Ru,Fu),Iu=de(h.ref,Bu);x===""&&(f=!1);const w=d.exports.useRef({x:0,y:0}),ce=d.exports.useRef(),Su=s=>{const m=h.props;m.onMouseMove&&m.onMouseMove(s),w.current={x:s.clientX,y:s.clientY},ce.current&&ce.current.update()},P={},le=typeof x=="string";E?(P.title=!f&&le&&!y?x:null,P["aria-describedby"]=f?ae:null):(P["aria-label"]=le?x:null,P["aria-labelledby"]=f&&!le?ae:null);const S=p({},P,Ie,h.props,{className:W(Ie.className,h.props.className),onTouchStart:ye,ref:Iu},oe?{onMouseMove:Su}:{}),G={};iu||(S.onTouchStart=mu,S.onTouchEnd=_u),y||(S.onMouseOver=ue(xe,S.onMouseOver),S.onMouseLeave=ue(Ue,S.onMouseLeave),ie||(G.onMouseOver=xe,G.onMouseLeave=Ue)),v||(S.onFocus=ue(ve,S.onFocus),S.onBlur=ue(Oe,S.onBlur),ie||(G.onFocus=ve,G.onBlur=Oe));const fu=d.exports.useMemo(()=>{var s;let m=[{name:"arrow",enabled:Boolean(re),options:{element:re,padding:4}}];return(s=b.popperOptions)!=null&&s.modifiers&&(m=m.concat(b.popperOptions.modifiers)),p({},b.popperOptions,{modifiers:m})},[re,b]),V=p({},_,{isRtl:du,arrow:a,disableInteractive:ie,placement:Be,PopperComponentProp:te,touch:Y.current}),pe=ho(V),Me=(c=B.Popper)!=null?c:Eo,we=(A=(l=B.Transition)!=null?l:pu)!=null?A:Ke,Pe=(i=B.Tooltip)!=null?i:Co,Ge=(C=B.Arrow)!=null?C:To,Du=J(Me,p({},b,I.popper),V),gu=J(we,p({},Au,I.transition),V),bu=J(Pe,p({},I.tooltip),V),Nu=J(Ge,p({},I.arrow),V);return F(d.exports.Fragment,{children:[d.exports.cloneElement(h,S),r(Me,p({as:te!=null?te:Xe,placement:Be,anchorEl:oe?{getBoundingClientRect:()=>({top:w.current.y,left:w.current.x,right:w.current.x,bottom:w.current.y,width:0,height:0})}:U,popperRef:ce,open:U?f:!1,id:ae,transition:!0},G,Du,{className:W(pe.popper,b==null?void 0:b.className,(R=I.popper)==null?void 0:R.className),popperOptions:fu,children:({TransitionProps:s})=>{var m,Ve;return r(we,p({timeout:ne.transitions.duration.shorter},s,gu,{children:F(Pe,p({},bu,{className:W(pe.tooltip,(m=I.tooltip)==null?void 0:m.className),children:[x,a?r(Ge,p({},Nu,{className:W(pe.arrow,(Ve=I.arrow)==null?void 0:Ve.className),ref:hu})):null]}))}))}}))]})});var Ee=Ro;const Ce=[{id:"blueprintFile",name:"\u8266\u8236\u30FB\u8266\u8F09\u6A5F\u8A2D\u8A08\u56F3\u30D5\u30A1\u30A4\u30EB",desciption:"\u7814\u7A76\u30DD\u30A4\u30F3\u30C8\uFF11\uFF15\u3067\u8CB7\u3048\u308B\u5E38\u8A2D\u78BA\u5B9A\u7BB1",chanceByShipType:{[n.FRIGATE]:.3,[n.DESTROYER]:.25,[n.CRUISER]:.12,[n.BATTLE_CRUISER]:.05,[n.CARRIER]:.03,[n.FIGHTER]:.1,[n.CORVETTE]:.15},chanceForTechPoint:0,ships:[e.NOMA_M470_A,e.XENO_STINGER_A,e.MARE_SERENITATIS_A,e.RUBY_A,e.RELIAT_A,e.CARILION_A,e.MARE_NUBIUM_A,e.MARE_TRANQUILLITATIS_A,e.FG300_A,e.GUARDIAN_A,e.TUNDRA_A,e.ALDABRA_A,e.TAURUS_A,e.CERES_A,e.AC721_A,e.ERIS_I_A,e.QUAOAR_A,e.WINGED_HUSSAR_A,e.CONAMARA_CHAOS_A,e.CHIMERA_A,e.LIGHT_CONE_A,e.CALLISTO_A,e.JAEGER_A,e.PREDATOR_A,e.IO_A,e.CAS066_A,e.KCCPV2_0_A,e.SPEAR_OF_URANUS,e.CONSTANTINE_THE_GREAT,e.ETERNAL_STORM,e.ST59,e.SOLAR_WHALE,e.MARSHALL_CRUX,e.CV3000,e.MISTRAL,e.JANBIYA_AER410,e.STINGRAY,e.SPORE_A404,e.B192_NEWLAND,e.VITAS_B010,e.VITAS_A021,e.BALANCER_ANDERSON,e.STRIX_A100,e.BULLFROG,e.SANDRAKE,e.SC002,e.CV_T800,e.CV_M011_A,e.VOID_ELFIN,e.NEBULA_CHASER_A,e.CELLULAR_DEFENDER,e.RED_BEAST_7_13,e.CV_II003,e.SILENT_ASSASSIN]},{id:"blackMarketTechFileV2",name:"\u6697\u53F7\u5316\u6280\u8853\u30D5\u30A1\u30A4\u30EB2.0",desciption:"\u30D7\u30ED\u30AD\u30B7\u30DE\u30B3\u30A4\u30F3\uFF13\uFF10\uFF10\u3067\u8CB7\u3048\u308B\u5E38\u8A2D\u7BB1",chanceByShipType:{[n.FRIGATE]:.03,[n.DESTROYER]:.025,[n.CRUISER]:.012,[n.BATTLE_CRUISER]:.005,[n.CARRIER]:.003,[n.FIGHTER]:.01,[n.CORVETTE]:.015},chanceForTechPoint:.9,ships:[e.NOMA_M470_A,e.XENO_STINGER_A,e.MARE_SERENITATIS_A,e.RUBY_A,e.RELIAT_A,e.CARILION_A,e.MARE_NUBIUM_A,e.MARE_TRANQUILLITATIS_A,e.FG300_A,e.GUARDIAN_A,e.TUNDRA_A,e.ALDABRA_A,e.TAURUS_A,e.CERES_A,e.AC721_A,e.ERIS_I_A,e.QUAOAR_A,e.WINGED_HUSSAR_A,e.CONAMARA_CHAOS_A,e.CHIMERA_A,e.LIGHT_CONE_A,e.CALLISTO_A,e.JAEGER_A,e.PREDATOR_A,e.IO_A,e.CAS066_A,e.KCCPV2_0_A,e.SPEAR_OF_URANUS,e.CONSTANTINE_THE_GREAT,e.ETERNAL_STORM,e.ST59,e.SOLAR_WHALE,e.CV3000,e.MISTRAL,e.JANBIYA_AER410,e.STINGRAY,e.SPORE_A404,e.B192_NEWLAND,e.VITAS_B010,e.VITAS_A021,e.BALANCER_ANDERSON,e.STRIX_A100,e.BULLFROG,e.SANDRAKE,e.SC002,e.CV_T800,e.CV_M011_A,e.VOID_ELFIN,e.NEBULA_CHASER_A,e.CELLULAR_DEFENDER,e.RED_BEAST_7_13,e.CV_II003,e.SILENT_ASSASSIN],extends:"proximaV1"},{id:"genericTechFile",name:"\u4E00\u822C\u6280\u8853\u30D5\u30A1\u30A4\u30EB",desciption:"\uFF35\uFF25\u30B3\u30A4\u30F3\uFF11\uFF10\uFF10\uFF10\uFF10\u3067\u8CB7\u3048\u308B\u5E38\u8A2D\u7BB1",chanceByShipType:{[n.FRIGATE]:.008,[n.DESTROYER]:.008,[n.CRUISER]:.002,[n.BATTLE_CRUISER]:.001,[n.CARRIER]:.001,[n.FIGHTER]:.005,[n.CORVETTE]:.005},chanceForTechPoint:.97,ships:[e.FG300_A,e.AC721_A,e.CAS066_A,e.KCCPV2_0_A,e.ST59,e.CV3000,e.SC002,e.CV_M011_A,e.CV_II003]},{id:"unitedTechFile",name:"\u30E6\u30CA\u30A4\u30C6\u30C3\u30C9\u30C6\u30C3\u30AF\u30D5\u30A1\u30A4\u30EB",desciption:"\uFF13\u56DE\u9650\u308A\u306E\u500B\u6570\u9650\u5B9A\u7BB1",chanceByShipType:{[n.FRIGATE]:.5,[n.DESTROYER]:.5,[n.CRUISER]:0,[n.BATTLE_CRUISER]:0,[n.CARRIER]:0,[n.FIGHTER]:0,[n.CORVETTE]:0},chanceForTechPoint:0,ships:[e.RELIAT_A,e.MARE_TRANQUILLITATIS_A,e.WINGED_HUSSAR_A]},{id:"enterpriseSelectionFileV2",name:"\u4F01\u696D\u9078\u5225\u6280\u8853\u30D5\u30A1\u30A4\u30EB",desciption:"\u661F\u9593\u30AD\u30E3\u30E9\u30D0\u30F3\u6765\u8A2A\u6642\u306B\u30C9\u30FC\u30F3\u30DD\u30A4\u30F3\u30C8\uFF14\uFF15\uFF10\u3067\u8CB7\u3048\u308B\u9650\u5B9A\u7BB1",chanceByShipType:{[n.FRIGATE]:.3,[n.DESTROYER]:.25,[n.CRUISER]:.12,[n.BATTLE_CRUISER]:.05,[n.CARRIER]:.03,[n.FIGHTER]:.1,[n.CORVETTE]:.15},chanceForTechPoint:.9,ships:[e.NOMA_M470_A,e.MARE_SERENITATIS_A,e.RUBY_A,e.RELIAT_A,e.CARILION_A,e.GUARDIAN_A,e.ALDABRA_A,e.TAURUS_A,e.CERES_A,e.QUAOAR_A,e.CONAMARA_CHAOS_A,e.CHIMERA_A,e.LIGHT_CONE_A,e.JAEGER_A,e.IO_A,e.SPEAR_OF_URANUS,e.CONSTANTINE_THE_GREAT,e.ETERNAL_STORM,e.ST59,e.SOLAR_WHALE,e.MARSHALL_CRUX,e.CV3000,e.MISTRAL,e.B192_NEWLAND,e.VITAS_A021,e.STRIX_A100,e.SANDRAKE,e.CV_T800,e.VOID_ELFIN,e.RED_BEAST_7_13,e.SILENT_ASSASSIN]},{id:"enterpriseBlueprintFile",name:"\u4F01\u696D\u7248\u8A2D\u8A08\u56F3\u30D5\u30A1\u30A4\u30EB",desciption:"\u958B\u62D3\u72B6\u6CC1\u306E\u8A55\u4FA1\u5F8C\u306B\u30C9\u30FC\u30F3\u30DD\u30A4\u30F3\u30C8\uFF12\uFF10\uFF10\u3067\u8CB7\u3048\u308B\u9650\u5B9A\u78BA\u5B9A\u7BB1",chanceByShipType:{[n.FRIGATE]:.3,[n.DESTROYER]:.25,[n.CRUISER]:.12,[n.BATTLE_CRUISER]:.05,[n.CARRIER]:.03,[n.FIGHTER]:.1,[n.CORVETTE]:.15},chanceForTechPoint:.9,ships:[e.NOMA_M470_A,e.XENO_STINGER_A,e.MARE_SERENITATIS_A,e.RUBY_A,e.RELIAT_A,e.CARILION_A,e.MARE_NUBIUM_A,e.MARE_TRANQUILLITATIS_A,e.GUARDIAN_A,e.TUNDRA_A,e.TAURUS_A,e.CERES_A,e.ERIS_I_A,e.WINGED_HUSSAR_A,e.CHIMERA_A,e.LIGHT_CONE_A,e.CALLISTO_A,e.PREDATOR_A,e.IO_A,e.SPEAR_OF_URANUS,e.CONSTANTINE_THE_GREAT,e.ETERNAL_STORM,e.SOLAR_WHALE,e.JANBIYA_AER410,e.STINGRAY,e.SPORE_A404,e.B192_NEWLAND,e.VITAS_B010,e.VITAS_A021,e.BALANCER_ANDERSON,e.STRIX_A100,e.BULLFROG,e.SANDRAKE,e.VOID_ELFIN,e.NEBULA_CHASER_A,e.CELLULAR_DEFENDER,e.RED_BEAST_7_13,e.SILENT_ASSASSIN]},{id:"dawnTechFile",name:"\u6280\u8853\u30D5\u30A1\u30A4\u30EB - \u30C9\u30FC\u30F3\u57FA\u6E96",desciption:"\u958B\u62D3\u72B6\u6CC1\u306E\u8A55\u4FA1\u5F8C\u306B\u30D7\u30ED\u30AD\u30B7\u30DE\u30B3\u30A4\u30F3\uFF14\uFF15\uFF10\u3067\u8CB7\u3048\u308B\u9650\u5B9A\u7BB1",chanceByShipType:{[n.FRIGATE]:.03,[n.DESTROYER]:.025,[n.CRUISER]:.012,[n.BATTLE_CRUISER]:.005,[n.CARRIER]:.003,[n.FIGHTER]:.01,[n.CORVETTE]:.015},chanceForTechPoint:.9,ships:[e.FG300_A,e.AC721_A,e.CAS066_A,e.KCCPV2_0_A,e.ST59,e.CV3000,e.SC002,e.CV_M011_A,e.CV_II003]},{id:"jupiterIndustryTechFile",name:"\u6280\u8853\u30D5\u30A1\u30A4\u30EB - \u30B8\u30E5\u30D4\u30BF\u30FC\u30A4\u30F3\u30C0\u30B9\u30C8\u30EA\u30FC",desciption:"\u958B\u62D3\u72B6\u6CC1\u306E\u8A55\u4FA1\u5F8C\u306B\u30D7\u30ED\u30AD\u30B7\u30DE\u30B3\u30A4\u30F3\uFF14\uFF15\uFF10\u3067\u8CB7\u3048\u308B\u9650\u5B9A\u7BB1",chanceByShipType:{[n.FRIGATE]:.037,[n.DESTROYER]:.03,[n.CRUISER]:.015,[n.BATTLE_CRUISER]:.006,[n.CARRIER]:0,[n.FIGHTER]:.012,[n.CORVETTE]:0},chanceForTechPoint:.9,ships:[e.MARE_SERENITATIS_A,e.MARE_NUBIUM_A,e.MARE_TRANQUILLITATIS_A,e.CERES_A,e.ERIS_I_A,e.CALLISTO_A,e.IO_A,e.ETERNAL_STORM,e.JANBIYA_AER410,e.STINGRAY,e.SPORE_A404,e.B192_NEWLAND]},{id:"antoniosTechFile",name:"\u6280\u8853\u30D5\u30A1\u30A4\u30EB - \u30A2\u30F3\u30C8\u30CB\u30AA\u30B9",desciption:"\u958B\u62D3\u72B6\u6CC1\u306E\u8A55\u4FA1\u5F8C\u306B\u30D7\u30ED\u30AD\u30B7\u30DE\u30B3\u30A4\u30F3\uFF14\uFF15\uFF10\u3067\u8CB7\u3048\u308B\u9650\u5B9A\u7BB1",chanceByShipType:{[n.FRIGATE]:.031,[n.DESTROYER]:.026,[n.CRUISER]:.012,[n.BATTLE_CRUISER]:.005,[n.CARRIER]:0,[n.FIGHTER]:.01,[n.CORVETTE]:.016},chanceForTechPoint:.9,ships:[e.RELIAT_A,e.CARILION_A,e.GUARDIAN_A,e.WINGED_HUSSAR_A,e.PREDATOR_A,e.CONSTANTINE_THE_GREAT,e.VITAS_A021,e.VITAS_B010,e.BALANCER_ANDERSON,e.VOID_ELFIN,e.NEBULA_CHASER_A,e.CELLULAR_DEFENDER]},{id:"nomaShippingTechFile",name:"\u6280\u8853\u30D5\u30A1\u30A4\u30EB - \u30CE\u30DE\u30B7\u30C3\u30D4\u30F3\u30B0",desciption:"\u958B\u62D3\u72B6\u6CC1\u306E\u8A55\u4FA1\u5F8C\u306B\u30D7\u30ED\u30AD\u30B7\u30DE\u30B3\u30A4\u30F3\uFF14\uFF15\uFF10\u3067\u8CB7\u3048\u308B\u9650\u5B9A\u7BB1",chanceByShipType:{[n.FRIGATE]:.03,[n.DESTROYER]:.025,[n.CRUISER]:.012,[n.BATTLE_CRUISER]:.005,[n.CARRIER]:.003,[n.FIGHTER]:.01,[n.CORVETTE]:.015},chanceForTechPoint:.9,ships:[e.NOMA_M470_A,e.XENO_STINGER_A,e.RUBY_A,e.TUNDRA_A,e.TAURUS_A,e.CHIMERA_A,e.LIGHT_CONE_A,e.SPEAR_OF_URANUS,e.SOLAR_WHALE,e.STRIX_A100,e.BULLFROG,e.SANDRAKE,e.RED_BEAST_7_13,e.SILENT_ASSASSIN]}],eu=Ce.reduce((u,o)=>Q(H({},u),{[o.id]:o}),{});function uu(u){if(!eu[u])throw new Error(`Invalid tech file id "${u}"`);return eu[u]}const mo=u=>{const{id:o,techFile:t,onChange:c}=u,A=l=>{c(uu(l.target.value))};return F(Qu,{sx:{m:1,minWidth:80},children:[r(Ju,{id:`${o}-label`,children:"\u6280\u8853\u30D5\u30A1\u30A4\u30EB"}),r(qu,{labelId:`${o}-label`,id:`${o}-select`,value:t.id,label:"\u6280\u8853\u30D5\u30A1\u30A4\u30EB",onChange:A,autoWidth:!0,renderValue:l=>r(T,{variant:"body1",whiteSpace:"normal",children:uu(l).name}),children:Ce.flatMap(l=>[r(ku,{value:l.id,children:r(Yu,{primary:r(T,{variant:"body1",gutterBottom:!0,whiteSpace:"normal",children:l.name}),secondary:r(T,{variant:"body1",color:"text.secondary",whiteSpace:"normal",children:l.desciption})})},l.id),r(so,{},`${l.id}-divider`)])})]})};function _o(u,o){const t=Object.keys(ju).map(i=>Fo(u,i,o)),c=t.flatMap(i=>i.shipChances).map(i=>i.blueprintChance).reduce((i,C)=>i+C,0),A=0,l=1-c-A;return{shipTypeChances:t,blueprintChance:c,baseTechPointChance:u.chanceForTechPoint,finalTechPointChance:l}}function Fo(u,o,t){const c=u.ships.map(q).filter(a=>a.type===o&&!a.baseModelId),A=c.map(a=>a.weight).reduce((a,h)=>a+h,0),l=c.flatMap(a=>{var h,B;return[a,...(B=(h=a.subModelIds)==null?void 0:h.map(q))!=null?B:[]]}),i=l.map(a=>Bo(a,u.chanceByShipType[o],A,t)),C=i.map(a=>a.blueprintChance).reduce((a,h)=>a+h,0),R=l.some(a=>!!a.modules&&a.modules.length>0),_=R?i.map(a=>a.moduleChance).reduce((a,h)=>a+h,0):0;return{shipType:o,originalChance:u.chanceByShipType[o],blueprintChance:C,shipChances:i,hasModules:R,moduleChance:_}}function Bo(u,o,t,c){return u.baseModelId?So(u,o,t,c):ou(u,o,t,c)}function ou(u,o,t,c){const A=o*(u.weight/t),l=["\u8266\u7A2E\u78BA\u7387\xD7(\u91CD\u307F/\u8266\u7A2E\u5185\u306E\u91CD\u307F\u306E\u5408\u8A08)",`${o} * (${u.weight} / ${t})`],i=Z(u.id,c);return H({id:u.id,name:u.name,weight:u.weight,baseChance:A,baseChanceTooltip:l,blueprintChance:i?0:A,blueprintChanceTooltip:i?["\u53D6\u5F97\u6E08\u307F"]:l},Io(u,A,i))}function Io(u,o,t,c){if(!t||!u.modules||u.modules.length===0)return{moduleChance:0,moduleChanceTooltip:t?[]:["\u30D9\u30FC\u30B9\u30E2\u30C7\u30EB\u304C\u5FC5\u8981"]};const A=u.modules.length;return{moduleChance:o*(A/u.modules.length),moduleChanceTooltip:["\u8FFD\u52A0\u30E2\u30B8\u30E5\u30FC\u30EB\u306B\u306F\u91CD\u307F\u304C\u7121\u3044\u3068\u4EEE\u5B9A\u3057\u305F\u5834\u5408\uFF1A","\u21D2\u30D9\u30FC\u30B9\u30E2\u30C7\u30EB\u306E\u8266\u7A2E\u78BA\u7387\xD7(\u53D6\u5F97\u3057\u3066\u3044\u306A\u3044\u30E2\u30B8\u30E5\u30FC\u30EB\u6570/\u30E2\u30B8\u30E5\u30FC\u30EB\u6570\u306E\u5408\u8A08)",`\u21D2${tu(o)} * (${A} / ${u.modules.length})`]}}function So(u,o,t,c){var _;if(!u.baseModelId)throw new Error("Missing baseModelId");if(Z(u.id,c))return{id:u.id,name:u.name,weight:u.weight,baseChance:0,baseChanceTooltip:["\u30D9\u30FC\u30B9\u30E2\u30C7\u30EB\u304C\u5FC5\u8981"],blueprintChance:0,blueprintChanceTooltip:["\u53D6\u5F97\u6E08\u307F"],moduleChance:0,moduleChanceTooltip:[]};if(!Z(u.baseModelId,c))return{id:u.id,name:u.name,weight:u.weight,baseChance:0,baseChanceTooltip:["\u30D9\u30FC\u30B9\u30E2\u30C7\u30EB\u304C\u5FC5\u8981"],blueprintChance:0,blueprintChanceTooltip:["\u30D9\u30FC\u30B9\u30E2\u30C7\u30EB\u304C\u5FC5\u8981"],moduleChance:0,moduleChanceTooltip:[]};const i=ou(u,o,t,c),C=(_=q(u.baseModelId).subModelIds)!=null?_:[];if(C.length===1&&C[0]===u.id)return{id:u.id,name:u.name,weight:u.weight,baseChance:0,baseChanceTooltip:["\u30D9\u30FC\u30B9\u30E2\u30C7\u30EB\u304C\u5FC5\u8981"],blueprintChance:i.baseChance,blueprintChanceTooltip:["\u6700\u5F8C\u306E\u30B5\u30D6\u30E2\u30C7\u30EB","\u21D2\u30D9\u30FC\u30B9\u30E2\u30C7\u30EB\u306E\u8266\u7A2E\u78BA\u7387"],moduleChance:0,moduleChanceTooltip:[]};const R=C.filter(a=>!Z(a,c)).map(a=>q(a).weight).reduce((a,h)=>a+h,0);if(C.length<2||R===0)throw new Error("Invalid data");return{id:u.id,name:u.name,weight:u.weight,baseChance:0,baseChanceTooltip:["\u30D9\u30FC\u30B9\u30E2\u30C7\u30EB\u304C\u5FC5\u8981"],blueprintChance:i.baseChance*(u.weight/R),blueprintChanceTooltip:["\u53D6\u5F97\u3057\u3066\u3044\u306A\u3044\u30B5\u30D6\u30E2\u30C7\u30EB\u304C\u8907\u6570\u3042\u308B\u5834\u5408\uFF1A","\u21D2\u30D9\u30FC\u30B9\u30E2\u30C7\u30EB\u306E\u8266\u7A2E\u78BA\u7387\xD7(\u91CD\u307F/\u53D6\u5F97\u3057\u3066\u3044\u306A\u3044\u30B5\u30D6\u30E2\u30C7\u30EB\u306E\u91CD\u307F\u306E\u5408\u8A08)",`\u21D2${tu(i.baseChance)} * (${u.weight} / ${R})`],moduleChance:0,moduleChanceTooltip:[]}}function g(u){return`${Number((u*100).toFixed(3))} %`}function tu(u){return`${Number(u.toFixed(5))}`}function fo(u){return u.originalChance>0||u.blueprintChance>0}const Do={id:"name",renderHeader:()=>"\u8266\u540D",renderCell:u=>u.name,sortFn:(u,o)=>u.name.localeCompare(o.name)},go={id:"weight",renderHeader:()=>"\u91CD\u307F",renderCell:u=>u.weight,sortFn:[(u,o)=>u.weight-o.weight,(u,o)=>u.name.localeCompare(o.name)]},bo={id:"baseChance",renderHeader:()=>"\u8266\u7A2E\u78BA\u7387",renderCell:u=>r(Ee,{arrow:!0,title:u.baseChanceTooltip.map((o,t)=>r(T,{variant:"body1",paragraph:!0,children:o},t)),children:r(T,{variant:"body1",component:"span",children:g(u.baseChance)})}),sortFn:[(u,o)=>u.baseChance-o.baseChance,(u,o)=>u.name.localeCompare(o.name)],initialSortDirection:"desc"},No={id:"blueprintChance",renderHeader:()=>"\u8A2D\u8A08\u56F3",renderCell:u=>r(Ee,{arrow:!0,title:u.blueprintChanceTooltip.map((o,t)=>r(T,{variant:"body1",paragraph:!0,children:o},t)),children:r(T,{variant:"body1",component:"span",children:g(u.blueprintChance)})}),sortFn:[(u,o)=>u.blueprintChance-o.blueprintChance,(u,o)=>u.name.localeCompare(o.name)]},Lo={id:"moduleChance",renderHeader:()=>"\u8FFD\u52A0\u30E2\u30B8\u30E5\u30FC\u30EB",renderCell:u=>r(Ee,{arrow:!0,title:u.moduleChanceTooltip.map((o,t)=>r(T,{variant:"body1",paragraph:!0,children:o},t)),children:r(T,{variant:"body1",component:"span",children:g(u.moduleChance)})}),sortFn:[(u,o)=>u.moduleChance-o.moduleChance,(u,o)=>u.name.localeCompare(o.name)]},Oo=u=>{const{blueprintChances:o,hasModules:t}=u,{table:c,setTableData:A}=eo();return d.exports.useEffect(()=>{const l={columns:[Do,bo,No,...t?[Lo]:[],go],data:o,rowIdFn:i=>i.id};A(l)},[A,o,t]),r(uo,{table:c,size:"small"})},vo=[n.FRIGATE,n.DESTROYER,n.CRUISER,n.BATTLE_CRUISER,n.CARRIER,n.FIGHTER,n.CORVETTE],L={shipTypeCell:O`
        display: block;
        min-width: 90px;
    `,shipTypeChanceCell:O`
        display: block;
        min-width: 120px;
    `,blueprintChanceCell:O`
        display: block;
        min-width: 130px;
    `,moduleChanceCell:O`
        display: block;
        min-width: 190px;
    `,baseTechPointChanceCell:O`
        display: block;
        min-width: 120px;
    `,finalTechPointChanceCell:O`
        display: block;
        min-width: 150px;
    `},yo=u=>{const{techFile:o}=u,[t,c]=d.exports.useState(nu),[A,l]=d.exports.useState(!1),[i,C]=d.exports.useState(null),[R,_]=d.exports.useState(!1),[a,h]=d.exports.useState(Zu);d.exports.useEffect(()=>{c(nu()),C(_o(o,a))},[o,a]);const B=E=>{c(Q(H({},t),{[E]:!t[E]}))},I=()=>{l(E=>!E)};return i?F(k,{spacing:1,children:[i.shipTypeChances.filter(E=>R||fo(E)).map(E=>r("div",{children:F(Qe,{expanded:t[E.shipType]===!0,onChange:()=>B(E.shipType),children:[r(Je,{id:`${E.shipType}-accordion-summary`,expandIcon:r(qe,{}),children:F(k,{spacing:3,direction:"row",flexWrap:"wrap",children:[r(T,{variant:"body1",noWrap:!0,className:L.shipTypeCell,children:Xu(E.shipType)}),r(T,{variant:"body1",noWrap:!0,className:L.shipTypeChanceCell,children:`\u8266\u7A2E\u78BA\u7387\uFF1A${g(E.originalChance)}`}),r(T,{variant:"body1",noWrap:!0,className:L.blueprintChanceCell,children:`\u8A2D\u8A08\u56F3\uFF1A${g(E.blueprintChance)}`}),E.hasModules&&r(T,{variant:"body1",noWrap:!0,className:L.moduleChanceCell,children:`\u8FFD\u52A0\u30E2\u30B8\u30E5\u30FC\u30EB\uFF1A${g(E.moduleChance)}`})]})}),r(Ze,{children:t[E.shipType]&&r(Oo,{blueprintChances:E.shipChances,hasModules:E.hasModules})})]})},E.shipType)),(R||o.chanceForTechPoint>0)&&r("div",{children:F(Qe,{expanded:A,onChange:I,children:[r(Je,{id:"tech-point-accordion-summary",expandIcon:r(qe,{}),children:F(k,{spacing:3,direction:"row",flexWrap:"wrap",children:[r(T,{variant:"body1",className:L.shipTypeCell,children:"\u6280\u8853\uFF30\uFF54"}),r(T,{variant:"body1",className:L.baseTechPointChanceCell,children:`\u521D\u671F\u78BA\u7387\uFF1A${g(i.baseTechPointChance)}`}),r(T,{variant:"body1",className:L.finalTechPointChanceCell,children:`\u6700\u7D42\u78BA\u7387\uFF1A${g(i.finalTechPointChance)}`})]})}),r(Ze,{children:"-"})]})})]}):null};function nu(){return vo.reduce((u,o)=>Q(H({},u),{[o]:!1}),{})}const Ho=()=>{const[u,o]=d.exports.useState(Ce[0]);return F($u,{children:[r(Ku,{currentRoute:"/techFiles"}),r(zu,{children:F(ze,{p:1,children:[F(k,{pt:1,pb:2,spacing:2,children:[r(T,{variant:"body2",children:"\u3053\u3053\u3067\u306F\u6280\u8853\u30D5\u30A1\u30A4\u30EB\u5185\u306E\u7D30\u304B\u3044\u78BA\u7387\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059\u3002"}),r(T,{variant:"body2",children:"\u7814\u7A76\u5354\u5B9A\u3067\u306F\u5404\u8266\u8239\u306E\u78BA\u7387\u306B\u300C\u91CD\u307F\u300D\u304C\u3042\u308B\u3053\u3068\u304C\u5224\u660E\u3057\u3066\u3044\u307E\u3059\u3002\u78BA\u8A3C\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u540C\u3058\u91CD\u307F\u304C\u6280\u8853\u30D5\u30A1\u30A4\u30EB\u306B\u3082\u9069\u5FDC\u3055\u308C\u3066\u3044\u308B\u3088\u3046\u3067\u3059\u3002\u3053\u3053\u3067\u306E\u8A08\u7B97\u306B\u306F\u7814\u7A76\u5354\u5B9A\u306E\u78BA\u7387\u304B\u3089\u9006\u7B97\u3067\u5224\u660E\u3057\u305F\u91CD\u307F\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002"}),r(T,{variant:"body2",children:"\u8A2D\u8A08\u56F3\u3001\u30B5\u30D6\u30E2\u30C7\u30EB\u3001\u8FFD\u52A0\u30E2\u30B8\u30E5\u30FC\u30EB\u306E\u78BA\u7387\u306F\u6240\u6301\u72B6\u614B\u306B\u3088\u3063\u3066\u5909\u52D5\u3057\u307E\u3059\u3002\u65E2\u306B\u6240\u6301\u3057\u3066\u3044\u308B\u8266\u8239\u306F\u30DE\u30A4\u30EA\u30B9\u30C8\u3067\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"})]}),F(k,{spacing:1,children:[r(oo,{children:r(ze,{p:1,children:r(mo,{id:"tech-file-selection",techFile:u,onChange:o})})}),r(yo,{techFile:u}),r(T,{variant:"caption",align:"right",paragraph:!0,children:"\u203B\u8266\u7A2E\u3092\u30BF\u30C3\u30D7\u3059\u308B\u3068\u8A73\u7D30\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"})]})]})})]})};export{Ho as BoxChancePage,Ho as default};
