import{J as f}from"./ActionMessage.458182d9.js";import{J as p}from"./FormSection.77327c48.js";import{u as _,o as b,g,ab as h,b as s,a as o,f as e,d as m,t as i,i as d}from"./app.ed3e752b.js";import{a as T,A as l}from"./atmosphere-ui.es.c3e31e0f.js";import{_ as v}from"./LogerInput.65190e93.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.ecbc1ca4.js";const w={class:"flex items-center mt-2"},x=["src","alt"],N={class:"ml-4 leading-tight"},S={class:"text-bod-1 text-sm"},V=d(" Saved. "),y=d(" Save "),C={__name:"UpdateTeamNameForm",props:["team","permissions"],setup(a){const n=a,t=_({name:n.team.name});function c(){t.put(route("teams.update",n.team),{errorBag:"updateTeamName",preserveScroll:!0})}return(B,r)=>(b(),g(p,{onSubmitted:c,title:"Team Name",description:"The team's name and owner information."},h({form:s(()=>[o(e(l),{label:"Team Owner",class:"col-span-6"},{default:s(()=>[m("div",w,[m("img",{class:"w-12 h-12 rounded-full object-cover",src:a.team.owner.profile_photo_url,alt:a.team.owner.name},null,8,x),m("div",N,[m("div",null,i(a.team.owner.name),1),m("div",S,i(a.team.owner.email),1)])])]),_:1}),o(e(l),{class:"col-span-6 sm:col-span-4",label:"Team Name",field:"name",errors:e(t).errors},{default:s(()=>[o(v,{id:"name",type:"text",modelValue:e(t).name,"onUpdate:modelValue":r[0]||(r[0]=u=>e(t).name=u),disabled:!a.permissions.canUpdateTeam},null,8,["modelValue","disabled"])]),_:1},8,["errors"])]),_:2},[a.permissions.canUpdateTeam?{name:"actions",fn:s(()=>[o(f,{on:e(t).recentlySuccessful,class:"mr-3"},{default:s(()=>[V]),_:1},8,["on"]),o(e(T),{type:"primary","is-loading":e(t).processing,disabled:e(t).processing},{default:s(()=>[y]),_:1},8,["is-loading","disabled"])])}:void 0]),1024))}};export{C as default};