"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[8696],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return y}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=i.createContext({}),p=function(t){var e=i.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=p(t.components);return i.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(y,a(a({ref:e},s),{},{components:n})):i.createElement(y,a({ref:e},s))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[u]="string"==typeof t?t:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6294:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return s}});var i=n(3117),r=(n(7294),n(3905)),o=n(4996);const a={id:"howto_lp",title:"Provide Liquidity"},l=void 0,d={unversionedId:"howto_lp",id:"howto_lp",title:"Provide Liquidity",description:"On this page you will find a step-by-step guide for providing liquidity in the HydraDX Omnipool. Becoming a liquidity provider allows you to earn rewards from the fees generated by trades in the pool.",source:"@site/docs/howto_lp.md",sourceDirName:".",slug:"/howto_lp",permalink:"/de/howto_lp",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/howto_lp.md",tags:[],version:"current",frontMatter:{id:"howto_lp",title:"Provide Liquidity"},sidebar:"sidebar",previous:{title:"Place a DCA Order",permalink:"/de/howto_dca"},next:{title:"Join Hydrated Farms",permalink:"/de/howto_hydrated_farms"}},p={},s=[{value:"00 Transport tokens",id:"00-transport-tokens",level:2},{value:"01 Navigate to Omnipool Liquidity",id:"01-navigate-to-omnipool-liquidity",level:2},{value:"02 Connect Your Account",id:"02-connect-your-account",level:2},{value:"03 Managing Your Liquidity",id:"03-managing-your-liquidity",level:2},{value:"Adding Liquidity",id:"adding-liquidity",level:3},{value:"Removing Liquidity",id:"removing-liquidity",level:3}],u={toc:s};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On this page you will find a ",(0,r.kt)("strong",{parentName:"p"},"step-by-step guide for providing liquidity")," in the HydraDX Omnipool. Becoming a liquidity provider allows you to ",(0,r.kt)("strong",{parentName:"p"},"earn rewards")," from the fees generated by trades in the pool."),(0,r.kt)("p",null,"Before deciding to become a liquidity provider, we encourage you to visit our ",(0,r.kt)("a",{parentName:"p",href:"/"},"product page")," and to ",(0,r.kt)("strong",{parentName:"p"},"get yourself familiar")," with the unique features of the HydraDX Omnipool."),(0,r.kt)("h2",{id:"00-transport-tokens"},"00 Transport tokens"),(0,r.kt)("p",null,"If you would like to execute a trade using a non-native asset (e.g. DOT or DAI), you first need to get these assets to the HydraDX chain. This step does not apply to HDX."),(0,r.kt)("p",null,"There are two different mechanisms to transport non-native assets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.hydradx.io/#/cross-chain"},"Cross-chain transfer")," - use this tool to transfer assets from other Polkadot parachains, or from Polkadot itself. Step-by-step documentation ",(0,r.kt)("a",{parentName:"li",href:"howto_xcm"},"here"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.portalbridge.com/#/transfer"},"Ethereum bridge")," - for bridging assets from the Ethereum ecosystem. Step-by-step documentation ",(0,r.kt)("a",{parentName:"li",href:"/bridge_from_ethereum"},"here"),".")),(0,r.kt)("p",null,"These solutions can also be used to transport tokens outside of the HydraDX network."),(0,r.kt)("h2",{id:"01-navigate-to-omnipool-liquidity"},"01 Navigate to Omnipool Liquidity"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.hydradx.io/#/liquidity"},"https://app.hydradx.io/#/liquidity")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_lp/lp_screen.jpg")})),(0,r.kt)("h2",{id:"02-connect-your-account"},"02 Connect Your Account"),(0,r.kt)("p",null,"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect wallet")," ",(0,r.kt)("strong",{parentName:"p"},"(1 in image above)")," and connect to your preferred Polkadot wallet. After that, select your account."),(0,r.kt)("h2",{id:"03-managing-your-liquidity"},"03 Managing Your Liquidity"),(0,r.kt)("h3",{id:"adding-liquidity"},"Adding Liquidity"),(0,r.kt)("p",null,"To add liquidity for a given asset, click the button ",(0,r.kt)("inlineCode",{parentName:"p"},"Add liquidity")," which is located right next to that asset ",(0,r.kt)("strong",{parentName:"p"},"(3)"),"."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"In the HydraDX Omnipool, each individual asset has a Total Value Locked (TVL) cap. This means that once the cap has been reached, users can no longer further add liquidity for that specific asset. "),(0,r.kt)("p",{parentName:"admonition"},"The individual caps for each asset will be reviewed from time to time by the team; any suggested revisions (either from team or the community) will be submitted as proposals via governance and voted on.")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_lp/add.jpg"),width:"500px"})),(0,r.kt)("p",null,"Fill in the amount of liquidity you wish to provide ",(0,r.kt)("strong",{parentName:"p"},"(1)"),", click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add liquidity")," ",(0,r.kt)("strong",{parentName:"p"},"(2)")," and sign the transaction using your wallet."),(0,r.kt)("p",null,"Next, you can learn ",(0,r.kt)("a",{parentName:"p",href:"/howto_hydrated_farms"},"how to join Hydrated Farms")," and earn additional rewards on top of the rewards from trading fees."),(0,r.kt)("h3",{id:"removing-liquidity"},"Removing Liquidity"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_lp/remove_1.jpg")})),(0,r.kt)("p",null,"To remove liquidity, toggle the dropdown located right next to the relevant asset ",(0,r.kt)("strong",{parentName:"p"},"(1)")," and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Remove liquidity")," ",(0,r.kt)("strong",{parentName:"p"},"(2)")," on the position you wish to exit."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_lp/remove_2.jpg"),width:"500px"})),(0,r.kt)("p",null,"Toggle or enter the amount of liquidity you wish to withdraw ",(0,r.kt)("strong",{parentName:"p"},"(3)"),", click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Remove liquidity")," ",(0,r.kt)("strong",{parentName:"p"},"(4)")," and sign the transaction using your wallet."))}c.isMDXComponent=!0}}]);