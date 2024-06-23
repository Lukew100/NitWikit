"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6656],{87522:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=i(74848),s=i(28453);const l={title:"\u4f18\u5316\u8bef\u533a",sidebar_position:6},t="\u4f18\u5316\u8bef\u533a",d={id:"maintenance/optimize/optimized-plugin",title:"\u4f18\u5316\u8bef\u533a",description:"\u6df7\u5408\u7aef",source:"@site/docs/maintenance/optimize/optimized-plugin.md",sourceDirName:"maintenance/optimize",slug:"/maintenance/optimize/optimized-plugin",permalink:"/NitWikit/maintenance/optimize/optimized-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/maintenance/optimize/optimized-plugin.md",tags:[],version:"current",lastUpdatedBy:"Radiation_pi",lastUpdatedAt:1719152898e3,sidebarPosition:6,frontMatter:{title:"\u4f18\u5316\u8bef\u533a",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd\u5206\u6790",permalink:"/NitWikit/maintenance/optimize/performance-analysis"},next:{title:"\u600e\u4e48\u8ba9\u5927\u4f6c\u5e2e\u6211\u6027\u80fd\u5206\u6790",permalink:"/NitWikit/maintenance/optimize/ask-for-help"}},c={},h=[{value:"\u6df7\u5408\u7aef",id:"\u6df7\u5408\u7aef",level:2},{value:"\u4f18\u5316\u63d2\u4ef6",id:"\u4f18\u5316\u63d2\u4ef6",level:2},{value:"\u4e0d\u5efa\u8bae\u4f7f\u7528\u7684&quot;\u4f18\u5316&quot;\u63d2\u4ef6",id:"\u4e0d\u5efa\u8bae\u4f7f\u7528\u7684\u4f18\u5316\u63d2\u4ef6",level:2},{value:"\u63a7\u5236\u73a9\u5bb6\u8dd1\u56fe",id:"\u63a7\u5236\u73a9\u5bb6\u8dd1\u56fe",level:3},{value:"\u5bf9\u4e8e AI \u6709\u5f71\u54cd\u7684\u63d2\u4ef6",id:"\u5bf9\u4e8e-ai-\u6709\u5f71\u54cd\u7684\u63d2\u4ef6",level:3},{value:"\u4efb\u4f55\u5bf9\u4e8e\u5185\u5b58 GC \u8fdb\u884c\u64cd\u4f5c\u7684\u63d2\u4ef6",id:"\u4efb\u4f55\u5bf9\u4e8e\u5185\u5b58-gc-\u8fdb\u884c\u64cd\u4f5c\u7684\u63d2\u4ef6",level:3},{value:"\u6751\u6c11\u4f18\u5316\u63d2\u4ef6",id:"\u6751\u6c11\u4f18\u5316\u63d2\u4ef6",level:3},{value:"\u5730\u9762\u6e05\u7406\u63d2\u4ef6",id:"\u5730\u9762\u6e05\u7406\u63d2\u4ef6",level:3},{value:"\u751f\u7269\u6e05\u7406\u63d2\u4ef6",id:"\u751f\u7269\u6e05\u7406\u63d2\u4ef6",level:3},{value:"\u5b9e\u4f53\u5806\u53e0\u63d2\u4ef6",id:"\u5b9e\u4f53\u5806\u53e0\u63d2\u4ef6",level:3},{value:"\u7206\u70b8\u4f18\u5316\u63d2\u4ef6",id:"\u7206\u70b8\u4f18\u5316\u63d2\u4ef6",level:3},{value:"\u533a\u5757\u5378\u8f7d\u63d2\u4ef6",id:"\u533a\u5757\u5378\u8f7d\u63d2\u4ef6",level:3},{value:"\u5176\u4ed6\u5e94\u8be5\u907f\u514d\u4f7f\u7528\u7684\u63d2\u4ef6",id:"\u5176\u4ed6\u5e94\u8be5\u907f\u514d\u4f7f\u7528\u7684\u63d2\u4ef6",level:2},{value:"\u591a\u5408\u4e00\u63d2\u4ef6",id:"\u591a\u5408\u4e00\u63d2\u4ef6",level:3},{value:"Lagassist",id:"lagassist",level:4},{value:"CMI / ESS",id:"cmi--ess",level:4},{value:"\u8fc7\u4e8e\u53e4\u8001\u7684\u63d2\u4ef6",id:"\u8fc7\u4e8e\u53e4\u8001\u7684\u63d2\u4ef6",level:3},{value:"\u529f\u80fd\u8fc7\u4e8e\u7b80\u5355\u7684\u63d2\u4ef6",id:"\u529f\u80fd\u8fc7\u4e8e\u7b80\u5355\u7684\u63d2\u4ef6",level:3},{value:"\u62e5\u6709\u76f8\u4f3c\u529f\u80fd\u7684\u63d2\u4ef6",id:"\u62e5\u6709\u76f8\u4f3c\u529f\u80fd\u7684\u63d2\u4ef6",level:3},{value:"\u6709\u7528\u7684<del>\u4f18\u5316</del>\u9650\u5236\u63d2\u4ef6",id:"\u6709\u7528\u7684\u4f18\u5316\u9650\u5236\u63d2\u4ef6",level:2},{value:"FarmControl",id:"farmcontrol",level:3},{value:"OkTreasures",id:"oktreasures",level:3},{value:"Chunky Border",id:"chunky-border",level:3},{value:"EntityDetection",id:"entitydetection",level:3},{value:"AntiRaidFarm",id:"antiraidfarm",level:3},{value:"Insights",id:"insights",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u4f18\u5316\u8bef\u533a",children:"\u4f18\u5316\u8bef\u533a"}),"\n",(0,r.jsx)(n.h2,{id:"\u6df7\u5408\u7aef",children:"\u6df7\u5408\u7aef"}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u6df7\u5408\u7aef\u672c\u8eab\u7684\u95ee\u9898\uff0c\u6df7\u5408\u7aef\u80fd\u8fdb\u884c\u7684\u4f18\u5316\u5f88\u5c11\uff0c\u5e76\u4e14\u6df7\u5408\u7aef",(0,r.jsx)(n.strong,{children:"\u4e0d\u53ef\u4ee5\u88c5\u5927\u90e8\u5206\u4f18\u5316 MOD"}),"\uff0c\u4f46\u662f\u4f60\u4ecd\u7136\u53ef\u4ee5\u8fdb\u884c\u9664\u5b89\u88c5\u4f18\u5316mod\u4ee5\u5916\u7684\u5176\u4ed6\u4f18\u5316\u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.del,{children:"\u4e0d\u4f7f\u7528\u6df7\u5408\u7aef\u6765\u8fbe\u5230\u6700\u4f73\u7684\u4f18\u5316"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f18\u5316\u63d2\u4ef6",children:"\u4f18\u5316\u63d2\u4ef6"}),"\n",(0,r.jsxs)(n.admonition,{title:"\u7279\u522b\u8bf4\u660e",type:"warning",children:[(0,r.jsx)(n.p,{children:'\u6211\u4eec\u5728\u8fd9\u91cc\u5217\u51fa\u7684\u4e0d\u5efa\u8bae\u4f7f\u7528\u7684\u63d2\u4ef6\u662f\u4e00\u4e2a\u7c7b\u578b\u7684\u63d2\u4ef6\uff0c\u800c\u4e0d\u662f\u4ec5\u4ec5\u53ea\u662f\u4e0d\u63a8\u8350\u67d0\u4e2a\u63d2\u4ef6. \u5bf9\u4e8e\u63a8\u8350\u7684"\u4f18\u5316\u63d2\u4ef6"\uff0c\u5176\u5b9e\u5927\u591a\u6570\u4e5f\u662f\u901a\u8fc7\u9650\u5236\u7ea2\u77f3/\u6f0f\u6597/\u5b9e\u4f53\u6570\u91cf\u548cAI\u7b49\u5b8c\u6210\u7684\uff0c'}),(0,r.jsxs)(n.p,{children:['\u5728\u72ed\u4e49\u4e0a\u4efb\u4f55\u4f7f\u7528\u63d2\u4ef6\u64cd\u4f5c\u9650\u5236\u4efb\u4f55\u4e1c\u897f\u90fd\u4e0d\u80fd\u79f0\u4e4b\u4e3a"',(0,r.jsx)(n.em,{children:"\u4f18\u5316"}),'"\u800c\u662f"',(0,r.jsx)(n.em,{children:"\u9650\u5236"}),'"\uff0c\u8fd9\u91cc\u53ea\u662f\u4ee5"',(0,r.jsx)(n.em,{children:"\u4f18\u5316\u63d2\u4ef6"}),'"\u4ee3\u6307\u4e00\u4e9b"',(0,r.jsx)(n.em,{children:"\u9650\u5236\u63d2\u4ef6"}),'".']}),(0,r.jsx)(n.p,{children:'\u6240\u4ee5\u8bf4\uff0c\u4f7f\u7528\u8fd9\u4e9b"\u4f18\u5316\u63d2\u4ef6"\uff0c\u4e0d\u5982\u66f4\u6362\u670d\u52a1\u7aef\u6838\u5fc3\uff0c\u751a\u81f3\u4e0d\u5982\u4f18\u5316\u542f\u52a8\u53c2\u6570\u548c\u8c03\u4f18\u670d\u52a1\u7aef\u914d\u7f6e\u6587\u4ef6'})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0d\u5efa\u8bae\u4f7f\u7528\u7684\u4f18\u5316\u63d2\u4ef6",children:'\u4e0d\u5efa\u8bae\u4f7f\u7528\u7684"\u4f18\u5316"\u63d2\u4ef6'}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"\u6709\u5f88\u591a\u4f18\u5316\u662f\u6838\u5fc3\u81ea\u5e26\u7684\uff0c\u4f7f\u7528\u63d2\u4ef6\u53ea\u662f\u5229\u7528\u6838\u5fc3\u7684 API\uff0c\u6548\u7387\u4e0a\u662f\u6bd4\u4e0d\u4e0a\u6838\u5fc3\u7684\u3002\u5982 AI\uff0c\u6751\u6c11\uff0c\u7206\u70b8\uff0c\u533a\u5757\u5378\u8f7d\u7b49..."}),(0,r.jsx)(n.p,{children:"\u5927\u4f6c\u4eec\u601d\u8003\u4e00\u4e0b\u5427\uff0c\u8ba9\u63d2\u4ef6\u5220\u6389\u6838\u5fc3\u5df2\u7ecf\u51b3\u5b9a\u5237\u51fa\u6765\u7684\u602a\u7269\u6027\u80fd\u597d\u8fd8\u662f\u8ba9\u6838\u5fc3\u51b3\u5b9a\u4e0d\u5237\u602a\u6027\u80fd\u597d\uff1f"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u63a7\u5236\u73a9\u5bb6\u8dd1\u56fe",children:"\u63a7\u5236\u73a9\u5bb6\u8dd1\u56fe"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e\u5927\u91cf\u751f\u6210\u533a\u5757\u975e\u5e38\u6d88\u8017\u6027\u80fd\uff0c\u9650\u5236\u73a9\u5bb6\u751f\u6210\u7684\u533a\u5757\u6570\uff0c\u80fd\u591f\u8d77\u5230\u4e00\u5b9a\u7684\u6548\u679c\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f46\u6211\u4eec\u4e00\u822c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"./parameter-adjustment/performance-optimization/#chunk-loading-basic",children:"\u53c2\u6570\u914d\u7f6e"})," \u964d\u4f4e\u533a\u5757\u751f\u6210\u901f\u7387\uff0c\u4e0d\u592a\u9700\u8981\u5f3a\u884c\u62c9\u56de\u73a9\u5bb6\u6216\u51cf\u901f\u73a9\u5bb6\u7b49\u65b9\u5f0f\u5e72\u6270\u8dd1\u56fe\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u505c\u6b62\u4f7f\u7528\u7c7b\u4f3c\u63d2\u4ef6\uff0c\u5982:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.a,{href:"https://modrinth.com/plugin/toomanygen",children:"TooManyGen"})," - \u60e9\u7f5a\u73a9\u5bb6\u8dd1\u56fe\uff0c\u5b9e\u9645\u4e0a\u8fd9\u662f\u975e\u5e38\u5f71\u54cd\u6e38\u620f\u4f53\u9a8c\u7684\uff0c\u6709\u66f4\u597d\u7684\u9009\u62e9\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u5bf9\u4e8e-ai-\u6709\u5f71\u54cd\u7684\u63d2\u4ef6",children:"\u5bf9\u4e8e AI \u6709\u5f71\u54cd\u7684\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 Pufferfish Fork\uff08\u5982Purpur / Leaf\u7b49\uff09\u964d\u4f4e\u8fdc\u5904\u751f\u7269\u7684 AI \u6bd4\u63d2\u4ef6\u5229\u7528 API \u66f4\u52a0\u6709\u6548\u548c\u7b26\u5408\u6e38\u620f\u903b\u8f91\uff0c"}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u505c\u6b62\u4f7f\u7528\u7c7b\u4f3c\u63d2\u4ef6\uff0c\u5982:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"LaggRemover \uff08Fork\uff09 - \u6709\u65f6\u5019\u4f1a\u5bfc\u81f4\u5373\u4f7f\u63d2\u4ef6\u5378\u8f7d\uff0c\u5b9e\u4f53 AI \u4e5f\u88ab\u79fb\u9664\u4e86\uff0c\u6bd4\u4e0d\u4e0a Pufferfish\uff08\u4f7f\u7528 Purpur Fork\u5373\u53ef\uff09\u6839\u636e\u8ddd\u79bb\u8870\u51cf\u7684 AI."})}),"\n",(0,r.jsx)(n.h3,{id:"\u4efb\u4f55\u5bf9\u4e8e\u5185\u5b58-gc-\u8fdb\u884c\u64cd\u4f5c\u7684\u63d2\u4ef6",children:"\u4efb\u4f55\u5bf9\u4e8e\u5185\u5b58 GC \u8fdb\u884c\u64cd\u4f5c\u7684\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:'\u5185\u5b58 GC \u672c\u8eab\u662f\u53d7 JVM \u672c\u8eab\u63a7\u5236\u7684. GC \u672c\u8eab\u662f\u4f1a\u5bfc\u81f4\u987f\u5361\u7684\uff0c\u800c\u5e76\u4e0d\u80fd\u8d77\u5230"\u6e05\u7406\u5185\u5b58"\u7684\u4f5c\u7528.'}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u505c\u6b62\u4f7f\u7528\u7c7b\u4f3c\u63d2\u4ef6\uff0c\u5982:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Spartan - \u4e00\u6b3e\u6027\u80fd\u975e\u5e38\u5dee\u7684\u4ed8\u8d39\u53cd\u4f5c\u5f0a\uff0c\u5982\u679c\u4f60\u4e70\u4e86\u90a3\u4e48\u606d\u559c\u4f60\u4f60\u88ab\u9a97\u4e86\uff08\u5927\u5618\uff09\uff0c\u5982\u679c\u8fd1\u671f\u8d2d\u4e70\u8bf7\u7acb\u5373\u7533\u8bf7\u9000\u6b3e!"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6751\u6c11\u4f18\u5316\u63d2\u4ef6",children:"\u6751\u6c11\u4f18\u5316\u63d2\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["\u6751\u6c11\u975e\u5e38\u5403\u6027\u80fd\uff0c\u5982\u679c\u53ea\u9700\u8981\u4fdd\u7559\u516c\u7528\u4ea4\u6613\u6027\u8d28\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"https://www.spigotmc.org/resources/shopkeepers.80756/",children:"Shopkeepers"})," \u63d2\u4ef6\u521b\u5efa\u65e0 AI \u7684\u6751\u6c11\uff0c"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u4fdd\u7559\u6751\u6c11\u548c AI \u53ea\u9700\u8981\u5728 ",(0,r.jsx)(n.code,{children:"purpur.yml"})," \u4e2d\u641c\u7d22 lobotomize \u542f\u7528\u5373\u53ef\uff0c"]}),"\n",(0,r.jsxs)(n.p,{children:["\u53e6\u5916\u5728 ",(0,r.jsx)(n.code,{children:"config/paper-world-defaults.yml"})," \u4e2d\u6709\u4e00\u90e8\u5206\u53ef\u4ee5\u4f18\u5316\u7684\u5185\u5bb9\u548c\u6751\u6c11\u76f8\u5173\uff0c\u4f46\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6751\u6c11\u770b\u8d77\u6765\u6709\u4e00\u70b9\u5446\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"./parameter-adjustment/performance-optimization/#%E6%9D%91%E6%B0%91%E7%9B%B8%E5%85%B3",children:"\u5982\u4f55\u4f18\u5316"})}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u505c\u6b62\u4f7f\u7528\u7c7b\u4f3c\u63d2\u4ef6\uff0c\u5982:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.a,{href:"https://www.spigotmc.org/resources/villager-optimiser-1-14-2-1-16-5.68517/",children:"Villager Optimiser"})," - \u964d\u4f4e\u6751\u6c11\u5bfb\u8def\u64cd\u4f5c\u7684\u63d2\u4ef6"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u5730\u9762\u6e05\u7406\u63d2\u4ef6",children:"\u5730\u9762\u6e05\u7406\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u5730\u9762\u4e0a\u7684\u7269\u54c1\u5f88\u5c11\u4f1a\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\uff0c\u800c\u4e14\u7269\u54c1\u5f80\u5f80\u4f1a\u81ea\u884c\u6d88\u5931\uff0c\u5982\u679c\u4f60\u7684\u670d\u52a1\u5668\u6389\u843d\u7269\u7279\u522b\u591a\uff0c\u8bf7\u8c03\u6574\u4ee5\u4e0b\u4e24\u4e2a\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./parameter-adjustment/performance-optimization/#alt-item-despawn-rate",children:"\u70b9\u8fd9\u91cc\u67e5\u770b\u6b63\u786e\u65b9\u6cd5 #alt-item-despawn-rate"}),"\n",(0,r.jsx)(n.a,{href:"./parameter-adjustment/performance-optimization/#merge-radius",children:"\u70b9\u8fd9\u91cc\u67e5\u770b\u6b63\u786e\u65b9\u6cd5 #merge-radius"})]}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u505c\u6b62\u4f7f\u7528\u7c7b\u4f3c\u63d2\u4ef6\uff0c\u5982:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.a,{href:"https://www.spigotmc.org/resources/clearlagg.68271/",children:"ClearLagg"})," - \u6e05\u7406\u7269\u54c1\u63d2\u4ef6"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u751f\u7269\u6e05\u7406\u63d2\u4ef6",children:"\u751f\u7269\u6e05\u7406\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u63d2\u4ef6\u5220\u9664\u751f\u7269\u662f\u7b28\u86cb\u4e2d\u7684\u7b28\u86cb\u624d\u4f1a\u505a\u7684\u4e8b\uff0c\u751f\u7269\u5982\u679c\u8fbe\u5230\u670d\u52a1\u5668\u8bbe\u5b9a\u7684\u4e0a\u9650\u5219\u4f1a\u505c\u6b62\u751f\u6210. \u800c\u88ab\u6e05\u9664\u540e\uff0c\u670d\u52a1\u5668\u5fc5\u987b\u91cd\u65b0\u751f\u6210\u751f\u7269\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e5f\u662f\u975e\u5e38\u8d39\u6027\u80fd\u7684\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4e0d\u9700\u8981\u90a3\u4e48\u591a\u602a\u7269\uff0c\u76f4\u63a5\u8c03\u6574\u53c2\u6570\u5373\u53ef ",(0,r.jsx)(n.a,{href:"./parameter-adjustment/performance-optimization/#spawn-limit",children:"\u70b9\u8fd9\u91cc\u67e5\u770b\u6b63\u786e\u65b9\u6cd5"})]}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u505c\u6b62\u4f7f\u7528\u7c7b\u4f3c\u63d2\u4ef6\uff0c\u5982:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.a,{href:"https://www.minebbs.com/resources/cleaner-addon.4816/",children:"Cleaner"})," - \u6e05\u7406\u751f\u7269/\u7269\u54c1\u63d2\u4ef6"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u5b9e\u4f53\u5806\u53e0\u63d2\u4ef6",children:"\u5b9e\u4f53\u5806\u53e0\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u9664\u975e\u73a9\u5bb6\u4e50\u610f\u517b\u6b96\u975e\u5e38\u975e\u5e38\u591a\u751f\u7269\uff0c\u5426\u5219\u5bf9\u751f\u7269\u8fdb\u884c\u5806\u53e0\u4ecd\u7136\u4f1a\u4f7f\u670d\u52a1\u5668\u6d6a\u8d39\u6027\u80fd\u5728\u5237\u65b0\u66f4\u591a\u7684\u751f\u7269\u4e0a\uff0c\u5426\u5219\u8bf7\u4e0d\u8981\u5b89\u88c5\u5806\u53e0\u63d2\u4ef6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u505c\u6b62\u4f7f\u7528\u7c7b\u4f3c\u63d2\u4ef6\uff0c\u5982:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.a,{href:"https://www.spigotmc.org/resources/stackmob-enhance-your-servers-performance-without-the-sacrifice.29999/",children:"StackMob"})," - \u5b9e\u4f53\u5bc6\u96c6\u65f6\u8fdb\u884c\u5806\u53e0\u7684\u63d2\u4ef6(\u82e5\u4e00\u5b9a\u8981\u4f7f\u7528\u4ecd\u63a8\u8350\u672c\u63d2\u4ef6\u800c\u4e0d\u662f\u5176\u4ed6\u5806\u53e0\u63d2\u4ef6)"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u7206\u70b8\u4f18\u5316\u63d2\u4ef6",children:"\u7206\u70b8\u4f18\u5316\u63d2\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["Paper \u9171\u4e3a\u4f60\u5728 ",(0,r.jsx)(n.code,{children:"/config/paper-world-default.yml"})," \u4e2d\u51c6\u5907\u4e86\u7206\u70b8\u4f18\u5316\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"./parameter-adjustment/performance-optimization/#optimize-explosions",children:"\u70b9\u8fd9\u91cc\u67e5\u770b\u6b63\u786e\u65b9\u6cd5"})}),"\n",(0,r.jsx)(n.h3,{id:"\u533a\u5757\u5378\u8f7d\u63d2\u4ef6",children:"\u533a\u5757\u5378\u8f7d\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u670d\u52a1\u5668\u4f1a\u81ea\u5df1\u5378\u8f7d\u63d2\u4ef6\uff0c\u4e0e\u5176\u4f7f\u7528\u63d2\u4ef6\u4e00\u904d\u904d\u68c0\u67e5\u533a\u5757\u662f\u5426\u9700\u8981\u5378\u8f7d\u4e0d\u5982\u8ba9\u670d\u52a1\u5668\u81ea\u884c\u5378\u8f7d\uff0c"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u66f4\u5feb\u5378\u8f7d\u8bf7 ",(0,r.jsx)(n.a,{href:"./parameter-adjustment/performance-optimization/#delay-chunk-unloads-by",children:"\u70b9\u8fd9\u91cc\u67e5\u770b\u6b63\u786e\u65b9\u6cd5"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5176\u4ed6\u5e94\u8be5\u907f\u514d\u4f7f\u7528\u7684\u63d2\u4ef6",children:"\u5176\u4ed6\u5e94\u8be5\u907f\u514d\u4f7f\u7528\u7684\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.h3,{id:"\u591a\u5408\u4e00\u63d2\u4ef6",children:"\u591a\u5408\u4e00\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"\u5927\u4f6c\u4eec\uff0c\u591a\u5408\u4e00\u63d2\u4ef6\u5927\u591a\u6570\u90fd\u662f\u628a\u51e0\u4e2a\u5f00\u6e90\u7684\u529f\u80fd\u62fc\u63a5\u5230\u4e00\u8d77\u5c31\u8bf4\u591a\u5408\u4e00\u8bf4\u4e0d\u5b9a\u8fd8\u4ed8\u8d39\u4e86\u3002\u8fd9\u5e76\u4e0d\u5212\u7b97\uff0c\u4e14\u672c\u8eab\u5f88\u5bb9\u6613\u81c3\u80bf\u3002"})}),"\n",(0,r.jsx)(n.h4,{id:"lagassist",children:"Lagassist"}),"\n",(0,r.jsx)(n.p,{children:'\u8dd1\u8def\u4ed8\u8d39\u591a\u5408\u4e00"\u4f18\u5316\u63d2\u4ef6"\uff0c\u4e0d\u8981\u4f7f\u7528\u3002\u4e0b\u9762\u662f\u5410\u69fd(\u5305\u542b\u4e00\u5b9a\u7a0b\u5ea6\u7684\u6076\u610f\uff0c\u95ee\u5c31\u662f\u56e0\u4e3a\u88ab\u9a97\u8fc7\u4e00\u767e\u5757)'}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"\u4e3a\u4ec0\u4e48\u4e0d\u8981\u7528\u8fd9\u4e2a\u63d2\u4ef6"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["ChunkAnalyser - \u7b80\u5355\u7684\u641c\u7d22\u4e16\u754c\u7684\u7ea2\u77f3\uff0c\u6f0f\u6597\uff0c\u5b9e\u4f53\u4e4b\u7c7b\uff0c\u6709\u5f88\u591a\u5e73\u66ff\u63d2\u4ef6\u5982 ",(0,r.jsx)(n.a,{href:"https://modrinth.com/plugin/insights",children:"Insights"}),"/ ",(0,r.jsx)(n.a,{href:"https://www.spigotmc.org/resources/entitydetection-tile-entity-support.20588/",children:"Entitydetection"}),"\uff1b"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["LagMonitor\uff0cLagMap\uff0cBenchmark - \u5f88\u9e21\u808b\u7684\u6027\u80fd\u68c0\u6d4b(\u4e0d\u5982 ",(0,r.jsx)(n.a,{href:"./performance-analysis/#spark",children:"Spark"})," )\uff1b"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["RedstoneCuller - \u76f4\u63a5\u7834\u574f\u7ea2\u77f3\u673a\u5668\uff0c\u5e73\u66ff\u63d2\u4ef6 ",(0,r.jsx)(n.a,{href:"https://hangar.papermc.io/OneLiteFeather/AntiRedstoneClock-Remastered?fbclid=IwAR0sVVd50oTgHd9UVJJ7C8dTyL3PiVIBaJtpT6NyMy_D2T2Ho0umzrqtaDw",children:"AntiRedstoneClock"}),"\uff1b"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["ChunkHoppers - \u6709\u4e13\u95e8\u7684\u533a\u5757\u6f0f\u6597\u63d2\u4ef6\u5982 ",(0,r.jsx)(n.a,{href:"https://www.spigotmc.org/resources/upgradeable-hoppers-%E2%AD%95-fast-hopper-plugin-link-containers-%E2%9C%85-item-transfer-suction-chunk-1-20-sup.69201/",children:"UpgradeableHoppers"}),"\uff0c\u4f53\u9a8c\u8fdc\u597d\u4e8e\u6b64\u63d2\u4ef6\uff1b"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["ChunkLimiter - \u5e73\u66ff\u63d2\u4ef6 ",(0,r.jsx)(n.a,{href:"https://www.spigotmc.org/resources/farmcontrol-1-15-1-19.86923/",children:"Farmcontrol"})," / ",(0,r.jsx)(n.a,{href:"https://www.spigotmc.org/resources/mob-farm-manager-supports-1-7-10-up-to-1-20-hopper-support.15127/",children:"Mob-Farm-Manager"}),"\uff0c\u751a\u81f3\u66f4\u591a\u914d\u7f6e\u9879\uff1b"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Dynamic View Distance - \u5e73\u66ff\u63d2\u4ef6 ",(0,r.jsx)(n.a,{href:"https://www.spigotmc.org/resources/view-distance-tweaks.75164/",children:"View-distance-tweaks"}),"\uff1b"]}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:'\u603b\u4e4b\u6bcf\u4e2a\u6240\u8c13\u4f18\u5316\u90fd\u662f\u69fd\u70b9\uff0c\u63d2\u4ef6\u5360\u7528\u7684\u6027\u80fd\u591a\u4e8e"\u4f18\u5316"\u7684\u6027\u80fd\uff0c\u8bf7\u4e0d\u8981\u7ee7\u7eed\u4f7f\u7528\u4e86\u3002'})]}),"\n",(0,r.jsx)(n.h4,{id:"cmi--ess",children:"CMI / ESS"}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u8c13\u57fa\u7840\u63d2\u4ef6\uff0c\u65e8\u5728\u4f7f\u7528\u4e00\u4e2a\u63d2\u4ef6\u5c31\u53ef\u4ee5\u4ee3\u66ff\u6570\u4e2a\u751a\u81f3\u6570\u5341\u4e2a\u63d2\u4ef6\u7684\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u662f\u8fd9\u6837\u7684\u63d2\u4ef6\u5f80\u5f80\u529f\u80fd\u591a\u800c\u4e0d\u4e13\uff0c\u5982 CMI \u7ecf\u6d4e\u7ecf\u5e38\u51fa bug \u4e14\u4e0d\u652f\u6301\u8de8\u670d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u800c ESS \u4f7f\u7528 yml \u50a8\u5b58\u5927\u91cf\u7684\u73a9\u5bb6\u6570\u636e\uff0c\u7ecf\u5e38\u88ab\u53d1\u73b0\u6709\u5237\u94b1\u6f0f\u6d1e\u7b49\u9ad8\u8840\u538b\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e9b\u63d2\u4ef6\u5f80\u5f80\u56e0\u4e3a\u529f\u80fd\u591a\u5bfc\u81f4\u6709\u4e9b\u4ee3\u7801\u6ca1\u6709\u88ab\u4f18\u5316\u597d\uff0c\u65e0\u6cd5\u548c\u4e13\u7cbe\u67d0\u4e00\u65b9\u9762\u7684\u63d2\u4ef6\u5ab2\u7f8e\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u8fc7\u4e8e\u53e4\u8001\u7684\u63d2\u4ef6",children:"\u8fc7\u4e8e\u53e4\u8001\u7684\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u9664\u4e86 Vault \u7b49\u524d\u7f6e\u63d2\u4ef6\u4ee5\u5916\uff0c\u63d2\u4ef6\u603b\u662f\u9700\u8981\u66f4\u65b0\u7684\uff0c\u5982\u679c\u4e00\u4e2a\u63d2\u4ef6\u957f\u671f\u4e0d\u66f4\u65b0\uff0c"}),"\n",(0,r.jsx)(n.p,{children:"\u4e14\u5e76\u975e\u670d\u52a1\u5668\u6838\u5fc3\u73a9\u6cd5\u63d2\u4ef6\uff0c\u8bf7\u8003\u8651\u9009\u62e9\u641c\u7d22\u7c7b\u4f3c\u529f\u80fd\u63d2\u4ef6\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u529f\u80fd\u8fc7\u4e8e\u7b80\u5355\u7684\u63d2\u4ef6",children:"\u529f\u80fd\u8fc7\u4e8e\u7b80\u5355\u7684\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3b\u8981\u662f\u5305\u62ec\u4e00\u4e9b\u751a\u81f3\u4e0d\u5230 10kb \u7684\u63d2\u4ef6\uff0c\u529f\u80fd\u4ec5\u4ec5\u53ea\u662f\u53f3\u952e\u897f\u74dc\u80fd\u591f\u6536\u83b7\uff0c\u6216\u662f\u7981\u6b62\u519c\u7530\u8e29\u8e0f\u7b49\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e9b\u63d2\u4ef6\u529f\u80fd\u5f88\u53ef\u80fd\u88ab\u4e00\u4e9b\u5176\u4ed6\u7684\u63d2\u4ef6\u751a\u81f3\u6838\u5fc3\u81ea\u5e26\u4e86\uff08\u5982 purpur \u53ef\u8bbe\u7f6e\u519c\u7530\u662f\u5426\u53ef\u8e29\u8e0f\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u867d\u7136\u4e00\u822c\u6765\u8bf4\u8fd9\u4e9b\u63d2\u4ef6\u4e0d\u4f1a\u5bf9\u6027\u80fd\u6709\u5f71\u54cd\uff0c\u4f46\u662f\u7684\u786e\u80fd\u591f\u964d\u4f4e\u670d\u52a1\u5668\u7ef4\u62a4\u96be\u5ea6\u7b49\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u62e5\u6709\u76f8\u4f3c\u529f\u80fd\u7684\u63d2\u4ef6",children:"\u62e5\u6709\u76f8\u4f3c\u529f\u80fd\u7684\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u987e\u540d\u601d\u4e49\uff0c\u540c\u65f6\u5b89\u88c5\u4e24\u4e2a\u57fa\u7840\u63d2\u4ef6\u5982 CMI \u548c ESS\uff0c\u4e24\u4e2a\u6743\u9650\u63d2\u4ef6 GroupManager \u548c Luckperms \uff0c\u4e24\u4e2a\u7ecf\u6d4e\u63d2\u4ef6\uff0c"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u4f46\u53ef\u80fd\u7531\u4e8e\u63d2\u4ef6\u77db\u76fe\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\uff0c\u66f4\u6709\u53ef\u80fd\u76f4\u63a5\u51fa\u73b0\u6743\u9650\u5931\u6548\u3001\u4fdd\u62a4\u529f\u80fd\u5931\u6548\u7b49\u4e25\u91cd\u95ee\u9898\u3002"}),"\n",(0,r.jsxs)(n.h2,{id:"\u6709\u7528\u7684\u4f18\u5316\u9650\u5236\u63d2\u4ef6",children:["\u6709\u7528\u7684",(0,r.jsx)(n.del,{children:"\u4f18\u5316"}),"\u9650\u5236\u63d2\u4ef6"]}),"\n",(0,r.jsx)(n.h3,{id:"farmcontrol",children:"FarmControl"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3b\u8981\u662f\u964d\u4f4e\u8d85\u5927\u6216\u8d85\u9ad8\u5bc6\u5ea6\u7684\u751f\u7269\u517b\u6b96"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7981\u6b62\u5728\u8d85\u5927\u578b\u52a8\u7269\u517b\u6b96\u573a\u548c\u6751\u6c11\u7e41\u6b96\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u51cf\u5c11\u751f\u7269\u519c\u573a\u5185\u4e0d\u5fc5\u8981\u7684\u968f\u673a\u79fb\u52a8\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u7279\u522b\u5bc6\u96c6\u65f6\u7981\u7528\u519c\u573a\u4e2d\u751f\u7269\u7684 AI\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u9650\u5236\u533a\u57df\u4e2d\u5141\u8bb8\u7684\u5b9e\u4f53\u6570\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u9ad8\u5ea6\u53ef\u914d\u7f6e - \u5141\u8bb8\u60a8\u6839\u636e\u9700\u8981\u5b9a\u5236\u63d2\u4ef6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f4e\u5f71\u54cd - \u63d2\u4ef6\u5904\u7406\u662f\u5f02\u6b65\u6267\u884c\u7684\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hangar.papermc.io/froobynooby/FarmControl",children:"\u4e0b\u8f7d\u94fe\u63a5"})}),"\n",(0,r.jsx)(n.h3,{id:"oktreasures",children:"OkTreasures"}),"\n",(0,r.jsx)(n.p,{children:"\u539f\u7248 Minecraft \u6709\u4e00\u4e2a\u9519\u8bef\uff0c\u5373\u57cb\u85cf\u7684\u5bfb\u5b9d\u901f\u5ea6\u975e\u5e38\u6162\uff0c\u6709\u65f6\u4f1a\u51bb\u7ed3\u60a8\u7684\u6e38\u620f\u3002\u8fd9\u4e5f\u53d1\u751f\u5728\u591a\u4eba\u6e38\u620f\u4e2d\uff0c\u5982\u679c\u6709\u4eba\u6253\u5f00\u57cb\u85cf\u7684\u5b9d\u85cf\u641c\u7d22\uff0c\u670d\u52a1\u5668\u6709\u65f6\u4f1a\u5d29\u6e83\u3002\u5e76\u4e14\u5f88\u96be\u53d1\u73b0\u771f\u6b63\u7684\u9519\u8bef\uff0c\u4ece Minecraft 1.20.1 \u5f00\u59cb\uff0c\u8fd9\u8fd8\u6ca1\u6709\u4fee\u590d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u63d2\u4ef6\u901a\u8fc7\u7528\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u3001\u66f4\u5feb\u3001\u66f4\u7b80\u5355\u7684\u641c\u7d22\u66ff\u6362\u539f\u7248\u57cb\u85cf\u7684\u5bfb\u5b9d\u6765\u4fee\u590d\u8fd9\u4e9b\u7c7b\u578b\u7684\u5d29\u6e83\uff1a\u5b83\u53ea\u662f\u5728\u5408\u7406\u7684\u8ddd\u79bb\u5185\u968f\u673a\u9009\u62e9\u4e00\u4e2a\u6d77\u6ee9\u5e76\u5c06\u5b9d\u85cf\u653e\u5728\u90a3\u91cc\u3002\u7531\u4e8e\u8fd9\u4e3b\u8981\u662f\u5f02\u6b65\u7684\uff0c\u56e0\u6b64\u4e0d\u4f1a\u5bfc\u81f4\u5ef6\u8fdf\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8be6\u7ec6\u4f7f\u7528\u548c\u5c40\u9650\u6027\uff0c\u8bf7\u770b",(0,r.jsx)(n.a,{href:"https://hangar.papermc.io/Kyle/OkTreasures",children:"\u5b98\u65b9\u9875\u9762"})]}),"\n",(0,r.jsx)(n.h3,{id:"chunky-border",children:"Chunky Border"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a\u8bbe\u7f6e\u4e16\u754c\u8fb9\u754c\u7684\u5de5\u5177\uff0c\u53ef\u8bbe\u7f6e\u4e0d\u540c\u5f62\u72b6\uff0c\u62c9\u56de\u65b9\u5f0f\uff08\u9002\u914d\u5730\u7403\u4ece\u4e1c\u65b9\u8de8\u8d8a\u5730\u56fe\u5230\u897f\u65b9\uff09\u7b49\uff0c\u6bd4\u539f\u7248\u66f4\u52a0\u53cb\u597d\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://modrinth.com/plugin/chunkyborder",children:"\u4e0b\u8f7d\u94fe\u63a5"})}),"\n",(0,r.jsx)(n.h3,{id:"entitydetection",children:"EntityDetection"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u63d2\u4ef6\u53ef\u4ee5\u7528\u6765\u5bfb\u627e\u54ea\u4e9b\u4e1c\u897f\u5728\u62d6\u6162\u670d\u52a1\u5668\uff0c\u4f7f\u7528\u6b64\u63d2\u4ef6\uff0c\u60a8\u53ef\u4ee5\u5feb\u901f\u627e\u5230\u5305\u542b\u5927\u91cf\u602a\u7269\u3001\u52a8\u7269\u548c\u6f0f\u6597\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.spigotmc.org/resources/entitydetection-tile-entity-support.20588/",children:"\u4e0b\u8f7d\u94fe\u63a5"})}),"\n",(0,r.jsx)(n.h3,{id:"antiraidfarm",children:"AntiRaidFarm"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u8fd9\u4e2a\u7b80\u5355\u7684\u63d2\u4ef6\u963b\u6b62\u5229\u7528\u65e0\u9650\u4e0d\u7965\u4e4b\u5146\u5faa\u73af\u7684\u4f5c\u5f0a\u7a81\u88ad\u519c\u573a\u3002\u6b64\u63d2\u4ef6\u6ca1\u6709\u547d\u4ee4\uff0c\u60f3\u8981\u7ed5\u8fc7\u51b7\u5374\u65f6\u95f4\u7684\u73a9\u5bb6\u53ef\u4ee5\u83b7\u5f97\u6743\u9650\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hangar.papermc.io/jmp/AntiRaidFarm",children:"\u4e0b\u8f7d\u94fe\u63a5"})}),"\n",(0,r.jsx)(n.h3,{id:"insights",children:"Insights"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u63d2\u4ef6\u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u7528\u6765\u626b\u63cf\u4e16\u754c\u7ea2\u77f3\u52a0\u4ee5\u9650\u5236\u7684\u63d2\u4ef6\uff0c\u7206\u6740\u5927\u90e8\u5206\u9650\u5236\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://modrinth.com/plugin/insights",children:"\u4e0b\u8f7d\u94fe\u63a5"})})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var r=i(96540);const s={},l=r.createContext(s);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);