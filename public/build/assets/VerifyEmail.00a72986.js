import{W as m,c as f,o as a,k as p,w as e,d as o,u as t,a as _,i as h,b as i,y as g,N as y,x as b,f as n}from"./app.c4e32cc5.js";import{J as k}from"./AuthenticationCard.67266227.js";import{_ as v}from"./AuthenticationCardLogo.f4fea4eb.js";import{J as x}from"./Button.cdbb2fb8.js";import"./plugin-vue_export-helper.21dcd24c.js";const w=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],V={class:"mt-4 flex items-center justify-between"},C=n(" Resend Verification Email "),J=n("Log Out"),z={props:{status:String},setup(r){const c=r,s=m({}),d=()=>{s.post(route("verification.send"))},u=f(()=>c.status==="verification-link-sent");return(l,S)=>(a(),p(k,null,{logo:e(()=>[o(v)]),default:e(()=>[w,t(u)?(a(),_("div",B," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),i("form",{onSubmit:b(d,["prevent"])},[i("div",V,[o(x,{class:g({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:e(()=>[C]),_:1},8,["class","disabled"]),o(t(y),{href:l.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:e(()=>[J]),_:1},8,["href"])])],40,N)]),_:1}))}};export{z as default};