import{x as f,D as y,O as v,q as w,o as x,g as h,a as l,b as c,w as n,j as i,d as t,T as r,n as p,f as b,k as g,e as k,P as _}from"./app.d8e74fa3.js";/* empty css                                              */const C={class:"fixed inset-0 px-4 py-6 overflow-y-auto custom-modal sm:px-0","scroll-region":""},E=t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),B=[E],W={__name:"Modal",props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},emits:["close"],setup(e,{emit:m}){const a=e;f(a.show,s=>{s?document.body.style.overflow="hidden":document.body.style.overflow=null},{immediate:!0});const o=()=>{console.log("close"),a.closeable&&m("close")},d=s=>{s.key==="Escape"&&a.show&&o()};y(()=>document.addEventListener("keydown",d)),v(()=>document.removeEventListener("keydown",d));const u=w(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[a.maxWidth]);return(s,N)=>(x(),h(_,{to:"body"},[l(r,{"leave-active-class":"duration-200"},{default:c(()=>[n(t("div",C,[l(r,{"enter-active-class":"duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:c(()=>[n(t("div",{class:"fixed inset-0 transition-all transform",onClick:o},B,512),[[i,e.show]])]),_:1}),l(r,{"enter-active-class":"duration-300 ease-out","enter-from-class":"translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95","enter-to-class":"translate-y-0 opacity-100 sm:scale-100","leave-active-class":"duration-200 ease-in","leave-from-class":"translate-y-0 opacity-100 sm:scale-100","leave-to-class":"translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"},{default:c(()=>[n(t("div",{class:p(["mb-6 overflow-hidden transition-all transform bg-base-lvl-1 rounded-lg shadow-xl sm:w-full sm:mx-auto",b(u)])},[e.show?g(s.$slots,"default",{key:0,close:o}):k("",!0)],2),[[i,e.show]])]),_:3})],512),[[i,e.show]])]),_:3})]))}};export{W as _};