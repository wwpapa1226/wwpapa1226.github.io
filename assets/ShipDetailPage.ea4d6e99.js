import{P as l,Q as c,R as p,k as a,F as i,B as d,az as u,t as h,bC as v,z as f,r as m,j as g,q as D,aa as x,bD as B,bE as P,T as S}from"./index.3f1417d9.js";import{N as k,P as I}from"./PageContent.e34bb37f.js";import{A as _}from"./ActionBar.d0a7f30b.js";import{P as j}from"./PageFooter.1bd0c021.js";import"./Grow.dd2d6515.js";var t={},b=c.exports;Object.defineProperty(t,"__esModule",{value:!0});var s=t.default=void 0,z=b(l),A=p,C=(0,z.default)((0,A.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");s=t.default=C;const R=()=>a(_,{left:e=>a(i,{children:a(d,{variant:"outlined",startIcon:a(s,{}),component:u,to:"/shipData",fullWidth:e.fullWidth,size:e.size,children:h("shipData.pageTitle")},"share")})}),T=()=>{const{shipId:e}=v(),r=f(),o=m.exports.useCallback(n=>{r(`/shipData/${n}`)},[r]);return g(i,{children:[a(k,{currentRoute:"/shipData"}),a(R,{}),a(I,{children:a(D,{component:"div",p:1,children:a(x,{children:e&&B(e)?a(P,{shipId:e,onClickShip:o}):a(S,{variant:"body1",children:"Invalid ID"})})})}),a(j,{})]})};export{T as ShipDetailPage,T as default};
