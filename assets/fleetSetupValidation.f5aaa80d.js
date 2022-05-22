var z=Object.defineProperty,W=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))q.call(t,n)&&b(e,n,t[n]);if(Y)for(var n of Y(t))J.call(t,n)&&b(e,n,t[n]);return e},l=(e,t)=>W(e,K(t));import{r as k,b as L,F as S,j as p,y as V,h as Z,P as Q,G as X,A as ee,z as te,M as ne,E as re,I as ue,K as oe,v as ae,w as se,x as ie}from"./vendor.612e55a5.js";import{g as ce}from"./domUtils.e9df6b0f.js";import{b as F,a as le,S as _,t as me,s as P,g as T,C as E,e as fe}from"./index.bcaed592.js";import{n as I}from"./sorting.c6946657.js";import{P as de}from"./WishState.3db35fd5.js";const pe=e=>{const{options:t,icon:n,text:u,value:o,onClick:r,buttonProps:a}=e,[s,i]=k.exports.useState(!1),m=k.exports.useRef(null),f=y=>{i(!1),r(y)};return L(S,{children:[p(V,{variant:"outlined",fullWidth:a==null?void 0:a.fullWidth,ref:m,disabled:a==null?void 0:a.disabled,size:a==null?void 0:a.size,children:p(Z,{startIcon:n,onClick:y=>{y.stopPropagation(),i(!0)},disabled:a==null?void 0:a.disabled,children:u})}),p(Q,{open:s,anchorEl:m.current,role:void 0,transition:!0,disablePortal:!0,style:{zIndex:2},children:({TransitionProps:y,placement:x})=>p(X,l(c({},y),{style:{transformOrigin:x==="bottom"?"center top":"center bottom"},children:p(ee,{style:{maxHeight:ce(m.current),overflowY:"auto"},children:p(te,{onClickAway:()=>i(!1),children:p(ne,{children:t.map(h=>L(re,{selected:h.value===o,onClick:A=>{A.stopPropagation(),f(h.value)},disabled:h.disabled,children:[h.icon&&p(ue,{children:h.icon}),p(oe,{children:h.text})]},h.key))})})})}))})]})};var B={},ye=se.exports;Object.defineProperty(B,"__esModule",{value:!0});var $=B.default=void 0,he=ye(ae),Fe=ie,_e=(0,he.default)((0,Fe.jsx)("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),"Sort");$=B.default=_e;var d;(function(e){e.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME="groupByRowSortByTypeAndName",e.GROUP_BY_TYPE_SORT_BY_NAME="groupByTypeSortByName",e.SORT_BY_TYPE_AND_NAME="sortByTypeAndName",e.SORT_BY_NAME="sortByName"})(d||(d={}));const j={initial:0,self:1,ally:2,ally2:3,ally3:4},w=(e,t)=>{var n,u;return j[(n=e.reinforcement)!=null?n:"initial"]-j[(u=t.reinforcement)!=null?u:"initial"]},R=I([(e,t)=>e.shipDefinition.name.localeCompare(t.shipDefinition.name,"ja-JP"),w]),M=I([(e,t)=>P(e.shipDefinition.type,e.shipDefinition.subType)-P(t.shipDefinition.type,t.shipDefinition.subType),R,w]);function be(e,t){switch(e){case d.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME:return{groupedBy:e,groups:Ee(t.ships)};case d.GROUP_BY_TYPE_SORT_BY_NAME:return{groupedBy:e,groups:Re(t.ships)};case d.SORT_BY_TYPE_AND_NAME:return{groupedBy:e,groups:[{id:"all",name:"\u7DE8\u6210",ships:t.ships.map(n=>l(c({},n),{carriedShips:[...n.carriedShips].sort(M)})).sort(M),count:t.ships.map(n=>n.count).reduce((n,u)=>n+u,0)}]};case d.SORT_BY_NAME:return{groupedBy:e,groups:[{id:"all",name:"\u7DE8\u6210",ships:t.ships.map(n=>l(c({},n),{carriedShips:[...n.carriedShips].sort(R)})).sort(R),count:t.ships.map(n=>n.count).reduce((n,u)=>n+u,0)}]};default:throw new Error(`Unknown group and sort option "${e}"`)}}function Ee(e){return[_.FRONT,_.MIDDLE,_.BACK].map(t=>{const n=e.filter(o=>o.shipDefinition.row===t).map(o=>l(c({},o),{carriedShips:[...o.carriedShips].sort(M)})).sort(M),u=n.map(o=>o.count).reduce((o,r)=>o+r,0);return{id:t,name:me(t),ships:n,count:u}})}function Re(e){return[F.CARRIER,F.BATTLE_CRUISER,F.CRUISER,F.DESTROYER,F.FRIGATE].map(t=>{const n=e.filter(o=>o.shipDefinition.type===t).map(o=>l(c({},o),{carriedShips:[...o.carriedShips].sort(R)})).sort(R),u=n.map(o=>o.count).reduce((o,r)=>o+r,0);return{id:t,name:le(t),ships:n,count:u}})}function ke(e,t){return[e.name,t.groups.filter(n=>n.ships.length>0).map(n=>[...t.groups.length>1?[`\u3010${n.name}\u3011`]:[],...n.ships.flatMap(u=>{const o=u.count*u.shipDefinition.cost,r=ge(u);switch(u.reinforcement){case"self":return[`${u.count}\xD7\u3000${u.shipDefinition.name}\uFF08\u5897\u63F4\uFF09`,...r?[r]:[],...g(u.carriedShips)];case"ally":return[`${u.count}\xD7\u3000${u.shipDefinition.name}\uFF08\u30E6\u30CB\u30AA\u30F3\u5897\u63F4\uFF21\uFF09`,...r?[r]:[],...g(u.carriedShips)];case"ally2":return[`${u.count}\xD7\u3000${u.shipDefinition.name}\uFF08\u30E6\u30CB\u30AA\u30F3\u5897\u63F4\uFF22\uFF09`,...r?[r]:[],...g(u.carriedShips)];case"ally3":return[`${u.count}\xD7\u3000${u.shipDefinition.name}\uFF08\u30E6\u30CB\u30AA\u30F3\u5897\u63F4\uFF23\uFF09`,...r?[r]:[],...g(u.carriedShips)];default:return[`${u.count}\xD7\u3000${u.shipDefinition.name}\uFF08${o}Pt\uFF09`,...r?[r]:[],...g(u.carriedShips)]}})].join(`
`)).join(`

`),[`\u5897\u63F4\uFF1A${e.totalReinforcementCount}/${e.maxReinforcement}`,`\u6307\u4EE4Pt\uFF1A${e.totalCost}/${e.maxCost}`].join(`
`)].join(`

`)}function g(e){return e.map(t=>`\u3000\u3000${t.count}\xD7\u3000${t.shipDefinition.name}`)}function ge(e){if(e.moduleSelection===null||e.moduleSelection.static)return null;const t=["M","A","B","C"].flatMap(n=>{var a,s,i;const o=Object.keys((s=(a=e.moduleSelection)==null?void 0:a.groups[n])!=null?s:{}).find(m=>{var f;return((f=e.moduleSelection)==null?void 0:f.groups[n][m].usage)==="used"});if(!o)return[];const r=(i=e.moduleSelection)==null?void 0:i.groups[n][o];return!r||r.module.defaultModule?[]:r?[`${r.module.name}\uFF08${r.module.id}\uFF09`]:[]});return t.length===0?null:t.map(n=>`\u3000\u3000${n}`).join(`
`)}const Le=e=>{const{value:t,onChange:n,buttonProps:u}=e;return p(S,{children:p(pe,{icon:p($,{}),text:"\u8868\u793A",value:t,options:[{key:d.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME,text:"\u914D\u7F6E\u5225\u3001\u8266\u7A2E\u2192\u540D\u524D\u9806",value:d.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME},{key:d.GROUP_BY_TYPE_SORT_BY_NAME,text:"\u8266\u7A2E\u5225\u3001\u540D\u524D\u9806",value:d.GROUP_BY_TYPE_SORT_BY_NAME},{key:d.SORT_BY_TYPE_AND_NAME,text:"\u8266\u7A2E\u2192\u540D\u524D\u9806",value:d.SORT_BY_TYPE_AND_NAME},{key:d.SORT_BY_NAME,text:"\u540D\u524D\u9806",value:d.SORT_BY_NAME}],onClick:n,buttonProps:u})})};function Se(e){var t,n,u,o,r;return[(t=C("fleet1",e))!=null?t:D(1),(n=C("fleet2",e))!=null?n:D(2),(u=C("fleet3",e))!=null?u:D(3),(o=C("fleet4",e))!=null?o:D(4),(r=C("fleet5",e))!=null?r:D(5)]}function Pe(e){const t=JSON.stringify(De(e));window.localStorage.setItem(e.key,t)}function C(e,t){const n=window.localStorage.getItem(e);if(!n)return null;const u=Ae(n);return u?Ce(u,e,t):null}function Ce(e,t,n){const u=e.myListOnly===!0,o=e.ships.map(r=>{var a;return l(c({},G({shipDefinition:T(r.shipId),usedModules:(a=r.usedModules)!=null?a:null,count:r.count,reinforcement:r.reinforcement,userSettings:n,maxReinforcement:e.maxReinforcement,myListOnly:u})),{carriedShips:r.carriedShips.map(s=>U({shipId:s.shipId,count:s.count,reinforcement:r.reinforcement}))})});return{key:t,name:e.name,ships:o,totalCost:N(o),totalReinforcementCount:v(o),maxReinforcement:e.maxReinforcement,maxCost:e.maxCost,myListOnly:u}}function De(e){return{name:e.name,ships:e.ships.map(t=>({shipId:t.shipDefinition.id,usedModules:t.moduleSelection?xe(t.moduleSelection):void 0,carriedShips:t.carriedShips.map(n=>({shipId:n.shipDefinition.id,count:n.count})),count:t.count,reinforcement:t.reinforcement})),maxReinforcement:e.maxReinforcement,maxCost:e.maxCost,myListOnly:e.myListOnly}}function xe(e){const t=[];return Object.keys(e.groups).forEach(n=>{Object.keys(e.groups[n]).forEach(u=>{e.groups[n][u].usage==="used"&&t.push(e.groups[n][u].module.id)})}),t}function Ae(e){try{return JSON.parse(e)}catch(t){return alert("ERROR - Failed to restore fleet setup"),console.error(t),null}}function D(e){return{key:`fleet${e}`,name:`${e}\u53F7\u8266\u968A`,ships:[],totalCost:0,totalReinforcementCount:0,maxReinforcement:5,maxCost:400,myListOnly:!0}}function G(e){const{shipDefinition:t,usedModules:n,count:u,reinforcement:o,userSettings:r,maxReinforcement:a,myListOnly:s,temporary:i}=e,m=Me(t,n,r,o,!1),f=O(t,m),y=o===null||t.type===F.FIGHTER||t.type===F.CORVETTE?t.operationLimit:Math.min(t.operationLimit,a);return{shipDefinition:t,carrierCapabilities:f,carriedShips:[],count:Math.max(0,u),reinforcement:o,maxCount:y,moduleSelection:m,temporary:i}}function Me(e,t,n,u,o){if(!e.modules||e.modules.length===0)return null;const r=t!=null?t:e.modules.filter(s=>s.defaultModule).map(s=>s.id),a={static:e.staticModules===!0,groups:{}};return e.modules.forEach(s=>{var i;if(a.groups[s.category]||(a.groups[s.category]={}),a.static){a.groups[s.category][s.id]={module:s,usage:"used"};return}if(s.defaultModule||!o||(u==null?void 0:u.includes("ally"))||((i=n.modules[s.id])==null?void 0:i.possession)===de.POSSESSED){a.groups[s.category][s.id]={module:s,usage:r.includes(s.id)?"used":"not_used"};return}a.groups[s.category][s.id]={module:s,usage:"not_possessed"}}),a}function O(e,t){var a;let n=0,u=0,o=0,r=(a=e.carryCorvette)!=null?a:0;if(e.carryFighter)switch(e.carryFighterType){case E.LARGE_FIGHTER:{n+=e.carryFighter;break}case E.MEDIUM_FIGHTER:{u+=e.carryFighter;break}case E.SMALL_FIGHTER:{o+=e.carryFighter;break}}return t&&Object.keys(t.groups).forEach(s=>{var i;Object.keys((i=t.groups[s])!=null?i:{}).forEach(m=>{var y,x,h,A;const f=t.groups[s][m];if(f.usage==="used"){switch(f.module.carryFighterType){case E.LARGE_FIGHTER:{n+=(y=f.module.carryFighter)!=null?y:0;break}case E.MEDIUM_FIGHTER:{u+=(x=f.module.carryFighter)!=null?x:0;break}case E.SMALL_FIGHTER:{o+=(h=f.module.carryFighter)!=null?h:0;break}}r+=(A=f.module.carryCorvette)!=null?A:0}})}),{canCarry:n+u+o+r>0,carryUpToLargeFighter:n,carryUpToMediumFighter:u,carryUpToSmallFighter:o,carryCorvette:r}}function U(e){const{shipId:t,count:n,reinforcement:u,temporary:o}=e;return{shipDefinition:T(t),count:Math.max(0,n),reinforcement:u,temporary:o}}function Ie(e){const{shipId:t,count:n,reinforcement:u,fleetSetup:o,userSettings:r,keepZero:a}=e,s=T(t);let i=!0;const m=l(c({},o),{ships:o.ships.flatMap(f=>f.shipDefinition.id!==t||f.reinforcement!==u?f:(i=!1,!a&&n<=0?[]:[l(c({},f),{count:n})]))});return i?l(c({},m),{ships:[...m.ships,G({shipDefinition:s,usedModules:null,count:n,reinforcement:u,userSettings:r,maxReinforcement:o.maxReinforcement,myListOnly:o.myListOnly})],totalCost:N(m.ships),totalReinforcementCount:v(m.ships)}):l(c({},m),{totalCost:N(m.ships),totalReinforcementCount:v(m.ships)})}function $e(e){const{shipId:t,carrierShipId:n,count:u,reinforcement:o,fleetSetup:r,keepZero:a}=e;return l(c({},r),{ships:r.ships.map(s=>s.shipDefinition.id!==n||s.reinforcement!==o?s:s.carriedShips.find(i=>i.shipDefinition.id===t)?l(c({},s),{carriedShips:s.carriedShips.flatMap(i=>{if(i.shipDefinition.id!==t)return[i];if(i.reinforcement!==o)throw new Error("Detected invalid reinforcement");return!a&&u<=0?[]:[l(c({},i),{count:Math.max(0,u),reinforcement:o})]})}):l(c({},s),{carriedShips:[...s.carriedShips,U({shipId:t,count:u,reinforcement:o})]}))})}function je(e){const{shipId:t,reinforcement:n,moduleSelection:u,fleetSetup:o}=e;return l(c({},o),{ships:o.ships.map(r=>r.shipDefinition.id!==t?r:(n==null?void 0:n.includes("ally"))?r.reinforcement===n?l(c({},r),{moduleSelection:u,carrierCapabilities:O(r.shipDefinition,u)}):r:!r.reinforcement||!r.reinforcement.includes("ally")?l(c({},r),{moduleSelection:u,carrierCapabilities:O(r.shipDefinition,u)}):r)})}function we(e,t,n){return l(c({},n),{groups:l(c({},n.groups),{[e]:Object.keys(n.groups[e]).reduce((u,o)=>{const r=n.groups[e][o];return l(c({},u),{[o]:o===t?l(c({},r),{usage:"used"}):l(c({},r),{usage:r.usage==="not_possessed"?"not_possessed":"not_used"})})},n.groups[e])})})}function N(e){return e.filter(t=>t.reinforcement===null).map(t=>t.count*t.shipDefinition.cost).reduce((t,n)=>t+n,0)}function v(e){return e.filter(t=>t.reinforcement!==null).map(t=>t.count).reduce((t,n)=>t+n,0)}function Ge(e){let t=0;const n=e.map(r=>r.count).reduce((r,a)=>r+a,0),u=Object.keys(fe).reduce((r,a)=>l(c({},r),{[a]:0}),{}),o={[_.FRONT]:0,[_.MIDDLE]:0,[_.BACK]:0,[_.NONE]:0};return e.forEach(r=>{r.reinforcement===null&&(t+=r.count*r.shipDefinition.cost),u[r.shipDefinition.type]+=r.count,o[r.shipDefinition.row]+=r.count,r.carriedShips.length>0&&r.carriedShips.forEach(a=>{u[a.shipDefinition.type]+=a.count})}),{shipCount:n,shipCountByType:u,shipCountByRow:o,totalCost:t}}function Ue(e){var n,u;const t={};return e.name.length===0&&(t.name="\u5FC5\u9808\u9805\u76EE"),(!Number.isFinite(e.maxReinforcement)||e.maxReinforcement<0)&&(t.maxReinforcement="\u7121\u52B9\u306A\u5024"),(!Number.isFinite(e.maxCost)||e.maxCost<300||e.maxCost>450)&&(t.maxCost="\u7121\u52B9\u306A\u5024"),e.maxCost>400&&e.maxReinforcement>5&&(t.maxReinforcement=(n=t.maxReinforcement)!=null?n:"\u57FA\u5730\u7D50\u5408\u52B9\u679C\u306F\uFF11\u3064\u307E\u3067\u3067\u3059",t.maxCost=(u=t.maxCost)!=null?u:"\u57FA\u5730\u7D50\u5408\u52B9\u679C\u306F\uFF11\u3064\u307E\u3067\u3067\u3059"),t}function He(e){const t={},n={},u={};return e.ships.forEach(o=>{const r=H(o.shipDefinition.id,o.reinforcement);if(n[r]){const a=n[r];n[r]={count:o.reinforcement===null?o.count:a.count,reinforcementCount:o.reinforcement!==null?o.count:a.reinforcementCount,operationLimit:o.shipDefinition.operationLimit}}else n[r]={count:o.reinforcement===null?o.count:0,reinforcementCount:o.reinforcement!==null?o.count:0,operationLimit:o.shipDefinition.operationLimit};o.carriedShips.forEach(a=>{const s=H(a.shipDefinition.id,o.reinforcement);u[s]?u[s].count+=a.count:u[s]={count:a.count,operationLimit:a.shipDefinition.operationLimit}})}),Object.keys(n).forEach(o=>{const r=n[o];r.count+r.reinforcementCount>r.operationLimit&&(t[o]="\u914D\u5099\u3057\u305F\u5408\u8A08\u6570\u304C\u7A3C\u50CD\u4E0A\u9650\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002")}),Object.keys(u).forEach(o=>{const r=u[o];r.count>r.operationLimit&&(t[o]="\u914D\u5099\u3057\u305F\u5408\u8A08\u6570\u304C\u7A3C\u50CD\u4E0A\u9650\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002")}),t}function H(e,t){const n=(t==null?void 0:t.includes("ally"))?t:"self";return`${e}#${n}`}export{pe as B,d as G,Le as S,Ge as a,be as b,Ie as c,$e as d,je as e,ke as f,Se as g,D as h,Ue as i,G as j,we as k,H as l,U as m,Pe as s,He as v};
