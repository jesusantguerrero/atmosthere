import{A as P,_ as j,a as w,g as q}from"./atmosphere-ui.es.c3e31e0f.js";import{s as M,B as S,x as G,L as U,l as C,o as a,g as B,b as c,d as u,k as D,c as n,t as b,a as m,i as v,R as F,q as V,u as N,f as h,F as g,h as $,S as I}from"./app.ed3e752b.js";import{E,_ as W}from"./AppLayout.3e3cea3d.js";import{_ as Y}from"./Modal.1586865f.js";import{_ as z}from"./Meal.8c93a68b.js";import{_ as H}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as J,a as K}from"./MealSectionNav.c400ada9.js";import{a as Q}from"./TransactionModal.6a68c7aa.js";import{s as O}from"./index.9f2c73cb.js";import{f as R}from"./index.58d4bda5.js";/* empty css                                              */import"./SectionTitle.f3bd16f6.js";import"./ImportResourceModal.0a88250c.js";import"./Select.c33131e1.js";import"./light.2fdb7969.js";import"./fade-in-scale-up.cssr.07c62ce8.js";import"./Suffix.8e8bf306.js";import"./Popover.b027aa1f.js";import"./format-length.7f3135aa.js";import"./SectionNav.adfa71d4.js";import"./LogerInput.65190e93.js";import"./DatePicker.4a87f282.js";const X={emits:["close"],components:{Modal:Y,AtField:P,AtInput:j,AtButton:w,Meal:z},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0},meals:{type:Array,default(){return[]}},date:{default:new Date},title:{type:String}},setup(s,{emit:d}){const r=M({meal:null}),{show:e}=S(s),y=()=>{d("close")};G(e,()=>{e.value&&_()},{immediate:!0});const _=()=>{r.meal=null,U.get("/meals-random").then(({data:i})=>{r.meal=i})};return{...S(r),submit:_,close:y}}},Z={class:"px-4 py-5 text-center text-white bg-primary sm:p-6 sm:pb-4"},ee={class:"justify-center sm:flex sm:items-start"},te={class:"mt-3 text-center sm:mt-0 sm:ml-4"},se={class:"w-full text-4xl font-bold text-white"},ae=v(" The meal is: "),oe={class:"mt-5 mb-5"},le={key:0,class:"mt-5 text-2xl"},ne={key:1,class:"mt-5 text-2xl"},de={class:"mt-5"},re=v(" Random ");function ie(s,d,r,e,y,_){const i=C("at-button"),f=C("modal");return a(),B(f,{show:r.show,"max-width":r.maxWidth,closeable:r.closeable,onClose:e.close},{default:c(()=>[u("div",Z,[u("div",ee,[u("div",te,[u("h3",se,[D(s.$slots,"title",{},()=>[ae])]),u("div",oe,[D(s.$slots,"content",{},()=>[s.meal?(a(),n("div",le,b(s.meal.name),1)):(a(),n("div",ne," loading ... "))]),u("div",de,[m(i,{class:"text-gray-700 bg-base-lvl-1",disabled:!s.meal,onClick:d[0]||(d[0]=k=>e.submit())},{default:c(()=>[re]),_:1},8,["disabled"])])])])])])]),_:3},8,["show","max-width","closeable","onClose"])}const me=H(X,[["render",ie]]),ce={class:"border border-dashed bg-base-lvl-2 rounded-md px-5 py-2 w-ful flex overflow-hidden mb-4"},ue={key:0,class:"px-5 py-2 bg-base-lvl-2 font-bold text-primary"},pe={key:1,class:"flex"},_e=v("Save"),fe={__name:"MealTypeCell",props:{plannedMeal:{type:[Object,null]},mealType:{type:Object,required:!0}},emits:["submit"],setup(s,{emit:d}){const r=s,e=M({id:"",name:""}),y=(_,i)=>{d("submit",{...e,meal_type_id:r.mealType.id})};return(_,i)=>(a(),n("div",ce,[s.plannedMeal?(a(),n("div",ue,b(s.plannedMeal.dateable.name),1)):(a(),n("div",pe,[m(Q,{modelValue:e.id,"onUpdate:modelValue":i[0]||(i[0]=f=>e.id=f),label:e.name,"onUpdate:label":i[1]||(i[1]=f=>e.name=f),class:"w-full",tag:"","custom-label":"name","track-id":"id",placeholder:`Add ${s.mealType.name}`,endpoint:"/api/recipes"},null,8,["modelValue","label","placeholder"]),m(E,{onClick:y},{default:c(()=>[_e]),_:1})]))]))}},be={class:"flex items-center justify-end ml-auto space-x-2"},ye=v(" Random Meal "),ve={class:"pb-20 space-x-2"},xe={key:0,class:"py-5 overflow-hidden border rounded-md bg-base-lvl-1"},he={class:"px-5 cursor-pointer text-primary bg-base-lvl-1"},ge={key:1,class:"pt-5 overflow-hidden border divide-y-2 rounded-md text-body divide-base border-base bg-base-lvl-3"},$e=["onClick"],we={class:"flex items-center mt-2 space-x-2"},Me={class:"w-full"},ze={__name:"Planner",props:{mealPlans:{type:Object,required:!0},meals:{type:Array,required:!0},ingredients:{type:Object,default(){return{}}},mode:{type:String,default:""}},setup(s){const d=s,r=F().props,e=M({selectedDay:!1,isRandomModalOpen:!1,date:O(new Date),dateSpan:null,mode:"week",selectedMealsOfDay:[],isGroceryList:V(()=>d.mode=="grocery-list"),toggleBtnText:V(()=>e.isGroceryList?"Meal planner":"Grocery List")}),y=()=>{e.isRandomModalOpen=!0},_=o=>R(o,"iiii"),i=(o,l)=>{const t=R(o,"yyyy-MM-dd");return d.mealPlans.data.find(p=>p.date==t&&p.dateable.meal_type_id==l)},f=o=>o?e.isGroceryList?"":"mode=grocery-list":d.mode?`mode=${d.mode}`:"",k=()=>{I.Inertia.visit(`/meal-planner?${f(!0)}`)},T=o=>{e.selectedDay=o},x=N({date:null,meals:[]}),A=o=>{!o.id&&!o.name||x.transform(()=>({date:O(e.selectedDay),meals:[o]})).post(route("meals.addPlan"),{onSuccess:()=>{x.id="",x.name="",x.reset()}})};return(o,l)=>(a(),B(W,{title:"Meal Planner"},{header:c(()=>[m(J,null,{actions:c(()=>[u("div",be,[m(h(q),{class:"w-full h-12 ml-auto border-none bg-base-lvl-1 text-body",modelValue:e.date,"onUpdate:modelValue":l[0]||(l[0]=t=>e.date=t),dateSpan:e.dateSpan,"onUpdate:dateSpan":l[1]||(l[1]=t=>e.dateSpan=t),controlsClass:"bg-transparent text-body hover:bg-base-lvl-1","next-mode":"week"},null,8,["modelValue","dateSpan"]),m(h(w),{class:"w-64 h-10 text-white bg-primary",onClick:l[2]||(l[2]=t=>y()),rounded:""},{default:c(()=>[ye]),_:1}),m(h(w),{class:"h-10 text-white w-52 bg-primary",onClick:l[3]||(l[3]=t=>k()),rounded:""},{default:c(()=>[v(b(e.toggleBtnText),1)]),_:1})])]),_:1})]),default:c(()=>[m(K,{class:"mx-auto"},{default:c(()=>[u("div",ve,[e.isGroceryList?(a(),n("div",xe,[(a(!0),n(g,null,$(s.ingredients,(t,p)=>(a(),n("div",he,b(p)+" ("+b(t.quantity)+") "+b(t.unit),1))),256))])):(a(),n("div",ge,[(a(!0),n(g,null,$(e.dateSpan,t=>(a(),n("div",{key:t,onClick:p=>T(t),class:"px-5 py-4 cursor-pointer bg-base-lvl-3"},[v(b(_(t))+" ",1),u("div",we,[(a(!0),n(g,null,$(h(r).mealTypes,p=>(a(),n("div",Me,[m(fe,{modelValue:o.recipe,"onUpdate:modelValue":l[4]||(l[4]=L=>o.recipe=L),"planned-meal":i(t,p.id),"meal-type":p,onSubmit:A},null,8,["modelValue","planned-meal","meal-type"])]))),256))])],8,$e))),128))])),m(me,{show:e.isRandomModalOpen,closeable:!0,onClose:l[5]||(l[5]=t=>e.isRandomModalOpen=!1)},null,8,["show"])])]),_:1})]),_:1}))}};export{ze as default};