"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[597],{51756:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(74848),i=n(28453),o=n(3514);const s={sidebar_position:100,slug:"/contribution"},c="\u6587\u6863\u8d21\u732e",l={id:"contribution/contribution",title:"\u6587\u6863\u8d21\u732e",description:"\u5982\u679c\u4f60\u60f3\u4e3a\u6587\u6863\u8d21\u732e\u81ea\u5df1\u7684\u5185\u5bb9\uff0c\u8bf7\u9996\u5148\u67e5\u770b\u4ee5\u4e86\u89e3\u683c\u5f0f\u8981\u6c42\u53ca\u5f85\u5b8c\u5584\u7684\u5185\u5bb9\uff1a",source:"@site/docs/contribution/contribution.md",sourceDirName:"contribution",slug:"/contribution",permalink:"/NitWikit/contribution",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/contribution/contribution.md",tags:[],version:"current",lastUpdatedBy:"\u9a7f\u7ad9",lastUpdatedAt:1721039885e3,sidebarPosition:100,frontMatter:{sidebar_position:100,slug:"/contribution"},sidebar:"tutorialSidebar",previous:{title:"\u7533\u8bf7\u57df\u540d",permalink:"/NitWikit/advance/apply-for-a-domain-name"},next:{title:"\u683c\u5f0f\u8981\u6c42",permalink:"/NitWikit/contribution/writing"}},a={},u=[];function d(t){const e={a:"a",h1:"h1",p:"p",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u6587\u6863\u8d21\u732e",children:"\u6587\u6863\u8d21\u732e"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u4f60\u60f3\u4e3a\u6587\u6863\u8d21\u732e\u81ea\u5df1\u7684\u5185\u5bb9\uff0c\u8bf7\u9996\u5148\u67e5\u770b\u4ee5\u4e86\u89e3\u683c\u5f0f\u8981\u6c42\u53ca\u5f85\u5b8c\u5584\u7684\u5185\u5bb9\uff1a"}),"\n","\n",(0,r.jsx)(o.A,{}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u6709\u4e00\u4e9b\u6587\u6863\u5b8c\u5168\u6ca1\u6709\u6d89\u53ca\u5230\u7684\u5185\u5bb9\uff0c\u8bf7\u8fdb\u5165 ",(0,r.jsx)(e.a,{href:"https://github.com/postyizhan/NitWikit/issues",children:"Github"})," \u63d0\u51fa Issue\u3002\u6216\u8005\u76f4\u63a5\u52a0\u5165 ",(0,r.jsx)(e.a,{href:"https://qm.qq.com/q/lEnfzgzxjq",children:"\u4f01\u9e45\u7fa4\ud83d\udc27611076407"}),"\u3002"]})]})}function m(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},3514:(t,e,n)=>{n.d(e,{A:()=>b});n(96540);var r=n(34164),i=n(84142),o=n(28774),s=n(53465),c=n(16654),l=n(21312),a=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(t){let{href:e,children:n}=t;return(0,d.jsx)(o.A,{href:e,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(t){let{href:e,icon:n,title:i,description:o}=t;return(0,d.jsxs)(m,{href:e,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),o&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(t){let{item:e}=t;const n=(0,i.Nr)(e),r=function(){const{selectMessage:t}=(0,s.W)();return e=>t(e,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??r(e.items.length)}):null}function f(t){let{item:e}=t;const n=(0,c.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(e.docId??void 0);return(0,d.jsx)(p,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function x(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g(t){let{className:e}=t;const n=(0,i.$S)();return(0,d.jsx)(b,{items:n.items,className:e})}function b(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(g,{...t});const o=(0,i.d1)(e);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:t})},e)))})}},53465:(t,e,n)=>{n.d(e,{W:()=>a});var r=n(96540),i=n(44586);const o=["zero","one","two","few","many","other"];function s(t){return o.filter((e=>t.includes(e)))}const c={locale:"en",pluralForms:s(["one","other"]),select:t=>1===t?"one":"other"};function l(){const{i18n:{currentLocale:t}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:s(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),c}}),[t])}function a(){const t=l();return{selectMessage:(e,n)=>function(t,e,n){const r=t.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${t}`);const i=n.select(e),o=n.pluralForms.indexOf(i);return r[Math.min(o,r.length-1)]}(n,e,t)}}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>c});var r=n(96540);const i={},o=r.createContext(i);function s(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);