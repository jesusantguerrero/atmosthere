import{s as p,o as n,g as l,b as a,d as e,a as c,t as d,f as o,a1 as u,i as m,e as _,a6 as h}from"./app.d8e74fa3.js";import{Z as x}from"./atmosphere-ui.87ba2c0a.js";import{_ as b}from"./AppLayout.9d561a06.js";import{_ as g}from"./CustomTable.a87f8f94.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./naiveui.0ad5ca37.js";import"./Modal.36144344.js";/* empty css                                              */import"./LogerInput.c4e88f46.js";import"./formatMoney.a91b934f.js";const w=[{label:"Notification Message",name:"data",class:"text-left",sortable:!0,headerClass:"text-left px-2",render(r){return r.data.message||"N/D"},width:300},{label:"Actions",name:"actions",type:"custom",class:"text-right",headerClass:"text-right px-2",minWidth:100}],k={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},y=e("div",{class:"flex justify-between items-center mb-10 border-4 border-white bg-gray-50 rounded-md py-2"},[e("div",{class:"px-5 text-gray-600 font-bold"}," Notifications ")],-1),v={class:"w-full bg-base-lvl-3 rounded-md px-4"},C={class:"py-3 pl-4 flex space-between w-full"},N={class:"flex items-center ml-auto space-x-2"},$=m(" Mark as read "),L={__name:"Index",props:{notifications:{type:Array,default(){return[]}}},setup(r){p({tableSearchOptions:{resourceUrl:"/projects?sort=surename"},tableConfig:{resourceUrl:"/projects",selectable:!0,pagination:!0,searchBar:["search","filter","dates","add","actions"],dataTemplate:{name:"week-pager",filter:"date"}}});const i=s=>{h.Inertia.patch(`/notifications/${s.id}`,{read_at:new Date})};return(s,A)=>(n(),l(b,null,{default:a(()=>[e("div",k,[y,e("div",v,[c(g,{ref:"AtTable",config:s.tableConfig,cols:o(w),"table-data":r.notifications,section:s.section},{data:a(({scope:t})=>[e("div",C,d(t.row.data.message),1)]),actions:a(({scope:t})=>[e("div",N,[c(o(u),{href:t.row.data.link,class:"text-primary ml-auto rounded-md transition-colors",onClick:f=>i(t.row)},{default:a(()=>[m(d(t.row.data.cta),1)]),_:2},1032,["href","onClick"]),t.row.read_at?_("",!0):(n(),l(o(x),{key:0,href:t.row.data.link,class:"bg-primary text-white ml-auto rounded-md transition-colors",onClick:f=>i(t.row)},{default:a(()=>[$]),_:2},1032,["href","onClick"]))])]),_:1},8,["config","cols","table-data","section"])])])]),_:1}))}};export{L as default};