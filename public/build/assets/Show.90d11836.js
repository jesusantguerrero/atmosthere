import{_ as n}from"./AppLayout.9d561a06.js";import{a5 as c,o,g as e,b as m,a,d as i,f as r,e as s}from"./app.d8e74fa3.js";import l from"./DeleteUserForm.769f1dfa.js";import u from"./LogoutOtherBrowserSessionsForm.c0935dbe.js";import f from"./TwoFactorAuthenticationForm.948646bc.js";import d from"./UpdatePasswordForm.e6f41227.js";import _ from"./UpdateProfileInformationForm.646891d4.js";import{_ as h}from"./SettingsSectionNav.69e066d8.js";import"./atmosphere-ui.87ba2c0a.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./naiveui.0ad5ca37.js";import"./Modal.36144344.js";/* empty css                                              */import"./LogerInput.c4e88f46.js";import"./ActionSection.ea8f8e7e.js";import"./SectionCardTitle.4a036087.js";import"./DialogModal.b4c4624a.js";import"./DangerButton.907994f8.js";import"./Input.8703e796.js";import"./InputError.6567ca51.js";import"./SecondaryButton.0ec6e63e.js";import"./ActionMessage.1be9544e.js";import"./Button.119c1537.js";import"./FormSection.8b3c92b9.js";import"./Label.b5781489.js";import"./SectionNav.164c7b94.js";const x={class:"max-w-7xl mx-auto space-y-5 [&>*]:pt-5 divide-y pt-16 pb-20 sm:px-6 lg:px-8"},J={__name:"Show",props:["sessions"],setup(p){const t=c().props;return(g,w)=>(o(),e(n,{title:"Settings - Profile"},{header:m(()=>[a(h)]),default:m(()=>[i("div",null,[i("div",x,[r(t).jetstream.canUpdateProfileInformation?(o(),e(_,{key:0,user:r(t).user},null,8,["user"])):s("",!0),r(t).jetstream.canUpdatePassword?(o(),e(d,{key:1,class:"mt-10 sm:mt-0"})):s("",!0),r(t).jetstream.canManageTwoFactorAuthentication?(o(),e(f,{key:2,class:"mt-10 sm:mt-0"})):s("",!0),a(u,{sessions:p.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),r(t).jetstream.hasAccountDeletionFeatures?(o(),e(l,{key:3,class:"mt-10 sm:mt-0"})):s("",!0)])])]),_:1}))}};export{J as default};