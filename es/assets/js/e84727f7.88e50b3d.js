"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[9737],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9386:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(3117),o=(r(7294),r(3905)),a=r(4996);const i={id:"bridge_from_ethereum",title:"Bridge Assets from Ethereum"},l=void 0,s={unversionedId:"bridge_from_ethereum",id:"bridge_from_ethereum",title:"Bridge Assets from Ethereum",description:"Bridging assets from the Ethereum ecosystem is easy using the Wormhole bridge which is implemented by the Moonbeam network.",source:"@site/docs/bridge_from_ethereum.md",sourceDirName:".",slug:"/bridge_from_ethereum",permalink:"/es/bridge_from_ethereum",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/bridge_from_ethereum.md",tags:[],version:"current",frontMatter:{id:"bridge_from_ethereum",title:"Bridge Assets from Ethereum"},sidebar:"sidebar",previous:{title:"Start Trading with MetaMask",permalink:"/es/trade_metamask"},next:{title:"Cross-chain Transfer",permalink:"/es/howto_xcm"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step-by-step",id:"step-by-step",level:3}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Bridging assets from the Ethereum ecosystem is easy using the ",(0,o.kt)("a",{parentName:"p",href:"https://wormhole.com/"},"Wormhole")," bridge which is implemented by the ",(0,o.kt)("a",{parentName:"p",href:"https://moonbeam.network/"},"Moonbeam network"),"."),(0,o.kt)("p",null,"When bridging an asset, Wormhole will lock it on the source network and mint an equivalent amount of Wormhole-wrapped assets on the Moonbeam network. The assets are then transferred to the HydraDX chain where they can be used for trading. In a few clicks and seamlessly."),(0,o.kt)("p",null,"To bridge assets from Ethereum to HydraDX, follow the steps below."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Polkadot wallet"),(0,o.kt)("li",{parentName:"ul"},"An Ethereum wallet"),(0,o.kt)("li",{parentName:"ul"},"ETH for transaction fees")),(0,o.kt)("h3",{id:"step-by-step"},"Step-by-step"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("a",{parentName:"li",href:"https://www.carrier.so/"},"Carrier UI")),(0,o.kt)("li",{parentName:"ol"},"As Destination, select ",(0,o.kt)("inlineCode",{parentName:"li"},"HydraDX")),(0,o.kt)("li",{parentName:"ol"},"Connect your Ethereum wallet"),(0,o.kt)("li",{parentName:"ol"},"Connect your HydraDX wallet"),(0,o.kt)("li",{parentName:"ol"},"Select the asset you wish to bridge and the amount"),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," and turn on ",(0,o.kt)("inlineCode",{parentName:"li"},"Auto Relay")),(0,o.kt)("li",{parentName:"ol"},"Confirm and sign the transaction")),(0,o.kt)("p",null,"Once finalized, the assets will appear in your HydraDX wallet."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"metadata",src:(0,a.Z)("/howto_bridge/mb3.jpg"),width:"600px"})))}p.isMDXComponent=!0}}]);