"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[9726],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4066:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(3117),o=(r(7294),r(3905)),a=r(4996);const i={id:"howto_trade",title:"Trade in Omnipool"},l=void 0,u={unversionedId:"howto_trade",id:"howto_trade",title:"Trade in Omnipool",description:"This page provides a step-by-step guide which will help you execute your first trades using the HydraDX Omnipool.",source:"@site/docs/howto_trade.md",sourceDirName:".",slug:"/howto_trade",permalink:"/de/howto_trade",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/howto_trade.md",tags:[],version:"current",frontMatter:{id:"howto_trade",title:"Trade in Omnipool"},sidebar:"sidebar",previous:{title:"Cross-chain Transfer",permalink:"/de/howto_xcm"},next:{title:"Place a DCA Order",permalink:"/de/howto_dca"}},p={},s=[{value:"00 Transport tokens",id:"00-transport-tokens",level:2},{value:"01 Enter Omnipool",id:"01-enter-omnipool",level:2},{value:"02 Connect Your Account",id:"02-connect-your-account",level:2},{value:"03 Execute a Trade",id:"03-execute-a-trade",level:2},{value:"04 Execute a Split Trade",id:"04-execute-a-split-trade",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page provides a ",(0,o.kt)("strong",{parentName:"p"},"step-by-step guide")," which will ",(0,o.kt)("strong",{parentName:"p"},"help you execute your first trades")," using the HydraDX Omnipool."),(0,o.kt)("p",null,"The HydraDX Omnipool is a next-gen AMM which unlocks unparalleled efficiencies, you can find out more in our ",(0,o.kt)("a",{parentName:"p",href:"/"},"product documentation"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"metadata",src:(0,a.Z)("/howto_trade/trade_screen_st.jpg")})),(0,o.kt)("h2",{id:"00-transport-tokens"},"00 Transport tokens"),(0,o.kt)("p",null,"If you would like to execute a trade using a non-native asset (e.g. DOT or DAI), you first need to get these assets to the HydraDX chain. This step does not apply to HDX."),(0,o.kt)("p",null,"There are two different mechanisms to transport non-native assets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://app.hydradx.io/cross-chain"},"Cross-chain transfer")," - use this tool to transfer assets from other Polkadot parachains, or from Polkadot itself. Step-by-step documentation ",(0,o.kt)("a",{parentName:"li",href:"howto_xcm"},"here"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.portalbridge.com/#/transfer"},"Ethereum bridge")," - for bridging assets from the Ethereum ecosystem. Step-by-step documentation ",(0,o.kt)("a",{parentName:"li",href:"/bridge_from_ethereum"},"here"),".")),(0,o.kt)("p",null,"These solutions can also be used to transport tokens outside of the HydraDX network."),(0,o.kt)("h2",{id:"01-enter-omnipool"},"01 Enter Omnipool"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://app.hydradx.io/trade"},"https://app.hydradx.io/#/trade")),(0,o.kt)("h2",{id:"02-connect-your-account"},"02 Connect Your Account"),(0,o.kt)("p",null,"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect wallet")," ",(0,o.kt)("strong",{parentName:"p"},"(1 in image above)")," and connect to your preferred Polkadot wallet. After that, select your account."),(0,o.kt)("h2",{id:"03-execute-a-trade"},"03 Execute a Trade"),(0,o.kt)("p",null,"The HydraDX Trade UI allows you to intuitively execute a trade:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the pair of tokens you intend to trade ",(0,o.kt)("strong",{parentName:"li"},"(2)"),";"),(0,o.kt)("li",{parentName:"ul"},"Enter the amount of tokens for the trade ",(0,o.kt)("strong",{parentName:"li"},"(3)"),".",(0,o.kt)("br",{parentName:"li"}),"You can enter the amount of tokens you would like to pay with (e.g. 5000 DAI), but you can also enter the amount of tokens you would like to receive (e.g. 1000 HDX);"),(0,o.kt)("li",{parentName:"ul"},"If you would like to adjust your slippage preferences, you can do so in ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," ",(0,o.kt)("strong",{parentName:"li"},"(4)"),";"),(0,o.kt)("li",{parentName:"ul"},"To complete the trade with instant execution (pre-selected) ",(0,o.kt)("strong",{parentName:"li"},"(5)"),", click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Swap")," ",(0,o.kt)("strong",{parentName:"li"},"(7)")," and sign the transaction using your wallet. Otherwise, follow the additional steps below.")),(0,o.kt)("h2",{id:"04-execute-a-split-trade"},"04 Execute a Split Trade"),(0,o.kt)("p",null,"If your trade is large enough so that price impact would be > 0.15%, the UI will allow you to select ",(0,o.kt)("inlineCode",{parentName:"p"},"Split trade")," ",(0,o.kt)("strong",{parentName:"p"},"(6)")," - breaking your trade into multiple smaller trades executed over < 3 hours and therefore reducing your price impact."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the pair of tokens and amounts as in ",(0,o.kt)("strong",{parentName:"li"},"03 Execute a Trade")," above;"),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Split trade")," ",(0,o.kt)("strong",{parentName:"li"},"(6)"),";"),(0,o.kt)("li",{parentName:"ul"},"To schedule your Split trade execution, click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Place trades")," ",(0,o.kt)("strong",{parentName:"li"},"(7)")," and sign the transaction using your wallet.")),(0,o.kt)("p",null,"Stay hydrated, not liquidated."))}d.isMDXComponent=!0}}]);