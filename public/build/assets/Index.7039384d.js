import{_ as u}from"./AppLayout.cd77f56f.js";import{_ as c}from"./SectionNav.d2e4d6cd.js";import{o as a,g as i,b as t,k as p,a as n,d as e,i as o}from"./app.cefd7668.js";import{_ as d}from"./LogerButton.0789417e.js";import"./atmosphere-ui.588c294c.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.de789d8e.js";import"./Modal.a2277346.js";/* empty css                                              */import"./LogerInput.bec0734e.js";const m={__name:"HouseSectionNav",setup(r){return(l,s)=>(a(),i(c,{sections:[{label:"Overview",url:"/projects"},{label:"Chores",url:"/house/chores"},{label:"Occurrence Checks",url:"/house/checks"},{label:"Tasks",url:"/house/tasks"},{label:"Equipment",url:"/equipment"}]},{actions:t(()=>[p(l.$slots,"actions")]),_:3}))}},_=o(" Add Check "),f=e("div",{class:"pl-6 pb-20 pt-16 max-w-screen-2xl"},[e("div",{class:"h-92 p-10 bg-base-lvl-3 text-body-1 font-bold flex flex-col items-center justify-center rounded-md max-w-7xl mx-auto"},[e("h4",null," Coming soon "),e("div",{class:"space-y-4"},[e("div",null," Name - Last Occurrence Date - Current Count - Last Days Passed - AVG Days "),e("div",null,[o(" Gas - 22 sept 2022 - 3 - 31 - 27. "),e("p",null,"Notify on AVG"),e("p",null,"Notify on last count")]),e("div",null,[o(" Leche - 22 sept 2022 - 3 - 31 - 27. "),e("p",null,"Notify on AVG"),e("p",null,"Notify on last count")]),e("div",null,[o(" Agua - 22 sept 2022 - 3 - 31 - 27. "),e("p",null,"Notify on AVG"),e("p",null,"Notify on last count")]),e("div",null,[o(" Wipers - 22 sept 2022 - 3 - 31 - 27. "),e("p",null,"Notify on AVG"),e("p",null,"Notify on last count")]),e("div",{class:"text-red-500"},[e("ul",null,[e("li",null," - Check Schedule to compare current with AVG or Last Day to send notification "),e("li",null," - Add an automation action to add a new entry with params ")])])])])],-1),G={__name:"Index",setup(r){return(l,s)=>(a(),i(u,{title:"Home Projects"},{header:t(()=>[n(m,null,{actions:t(()=>[e("div",null,[n(d,{variant:"inverse",onClick:s[0]||(s[0]=h=>l.submit())},{default:t(()=>[_]),_:1})])]),_:1})]),default:t(()=>[f]),_:1}))}};export{G as default};