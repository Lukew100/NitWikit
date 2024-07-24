"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[2187],{42183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(74848),s=r(28453),o=r(3514);const c={title:"\u5efa\u8bbe\u9636\u6bb5",sidebar_position:3},i="\u5efa\u8bbe\u9636\u6bb5",l={id:"bds-core/process/process",title:"\u5efa\u8bbe\u9636\u6bb5",description:"\u5728\u8fd9\u4e2a\u9636\u6bb5\uff0c\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86\u57fa\u7840\u77e5\u8bc6\uff0c\u662f\u65f6\u5019\u5b66\u4e60\u4e00\u4e9b\u8fdb\u9636\u77e5\u8bc6\u4e86\u3002",source:"@site/docs-bedrock/bds-core/process/process.md",sourceDirName:"bds-core/process",slug:"/bds-core/process/",permalink:"/NitWikit/Bedrock/bds-core/process/",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/process/process.md",tags:[],version:"current",lastUpdatedBy:"SB-Reborn",lastUpdatedAt:1721786911e3,sidebarPosition:3,frontMatter:{title:"\u5efa\u8bbe\u9636\u6bb5",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u7aef\u7ed3\u6784",permalink:"/NitWikit/Bedrock/bds-core/start/basic/server-file-structure"},next:{title:"\u63d2\u4ef6",permalink:"/NitWikit/Bedrock/bds-core/process/plugins/"}},a={},u=[];function d(e){const t={h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u5efa\u8bbe\u9636\u6bb5",children:"\u5efa\u8bbe\u9636\u6bb5"}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u8fd9\u4e2a\u9636\u6bb5\uff0c\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86\u57fa\u7840\u77e5\u8bc6\uff0c\u662f\u65f6\u5019\u5b66\u4e60\u4e00\u4e9b\u8fdb\u9636\u77e5\u8bc6\u4e86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u8fd9\u4e00\u7ae0\u6211\u4eec\u4e3b\u8981\u56f4\u7ed5\u4ee5\u4e0b\u51e0\u4e2a\u70b9:"}),"\n","\n",(0,n.jsx)(o.A,{}),"\n",(0,n.jsx)(t.p,{children:"\u63d2\u4ef6 - \u63a8\u8350\u4e00\u4e9b\u5e38\u89c1\u7684\u63d2\u4ef6\uff0c\u5e76\u4e14\u63d0\u53ca\u76f8\u5173\u7684\u6ce8\u610f\u4e8b\u9879\u548c\u57fa\u7840\u77e5\u8bc6\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>b});r(96540);var n=r(34164),s=r(84142),o=r(28774),c=r(53465),i=r(16654),l=r(21312),a=r(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function p(e){let{href:t,children:r}=e;return(0,d.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:o}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),o&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(g,{...e});const o=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(96540),s=r(44586);const o=["zero","one","two","few","many","other"];function c(e){return o.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),o=r.pluralForms.indexOf(s);return n[Math.min(o,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(96540);const s={},o=n.createContext(s);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);