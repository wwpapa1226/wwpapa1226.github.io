import{J as l,K as u,L as c,j as a,F as i,B as d,am as p,bj as h,o as v,r as f,a as m,b as g,a2 as D,bk as x,bl as B,T as S}from"./index.ff95e7d1.js";import{N as j,P as k}from"./PageContent.28896ce2.js";import{A as I}from"./ActionBar.4f0301cd.js";import{P}from"./PageFooter.7e0dd46e.js";var t={},_=u.exports;Object.defineProperty(t,"__esModule",{value:!0});var s=t.default=void 0,b=_(l),A=c,y=(0,b.default)((0,A.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");s=t.default=y;const C=()=>a(I,{left:e=>a(i,{children:a(d,{variant:"outlined",startIcon:a(s,{}),component:p,to:"/shipData",fullWidth:e.fullWidth,size:e.size,children:"\u8266\u8239\u4E00\u89A7"},"share")})}),F=()=>{const{shipId:e}=h(),r=v(),o=f.exports.useCallback(n=>{r(`/shipData/${n}`)},[r]);return m(i,{children:[a(j,{currentRoute:"/shipData"}),a(C,{}),a(k,{children:a(g,{p:1,children:a(D,{children:e&&x(e)?a(B,{shipId:e,onClickShip:o}):a(S,{variant:"body1",children:"Invalid ID"})})})}),a(P,{})]})};export{F as ShipDetailPage,F as default};
