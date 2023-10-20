"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[9502],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,y=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6129:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var n=r(3117),o=(r(7294),r(3905));r(4996);const a={id:"intro",title:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u044f \u043a \u0440\u0430\u0431\u043e\u0442\u0435",slug:"/"},i=void 0,c={unversionedId:"intro",id:"intro",title:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u044f \u043a \u0440\u0430\u0431\u043e\u0442\u0435",description:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e HydraDX! \u0417\u0434\u0435\u0441\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0432\u0441\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u043f\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 HydraDX. \u041d\u0430\u0448\u0435 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u044b\u043c \u043c\u0435\u0441\u0442\u043e\u043c \u0434\u043b\u044f \u0432\u0441\u0435\u0445, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044f \u0432\u0435\u0441\u044c \u0441\u043f\u0435\u043a\u0442\u0440 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0435\u0439, \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u043e\u0432, \u043d\u043e\u043c\u0438\u043d\u0430\u043d\u0442\u043e\u0432 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0442\u044f\u0442 \u043f\u043e\u043c\u043e\u0447\u044c \u0432 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 HydraDX.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/ru/",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/intro.md",tags:[],version:"current",frontMatter:{id:"intro",title:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u044f \u043a \u0440\u0430\u0431\u043e\u0442\u0435",slug:"/"},sidebar:"sidebar",previous:{title:"The Great Unlock",permalink:"/ru/great-unlock"},next:{title:"Efficient Trading",permalink:"/ru/omnipool_trading"}},u={},l=[{value:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 HydraDX?",id:"what-is-hydradx",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e HydraDX! \u0417\u0434\u0435\u0441\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0432\u0441\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u043f\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 HydraDX. \u041d\u0430\u0448\u0435 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u044b\u043c \u043c\u0435\u0441\u0442\u043e\u043c \u0434\u043b\u044f \u0432\u0441\u0435\u0445, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044f \u0432\u0435\u0441\u044c \u0441\u043f\u0435\u043a\u0442\u0440 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0435\u0439, \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u043e\u0432, \u043d\u043e\u043c\u0438\u043d\u0430\u043d\u0442\u043e\u0432 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0442\u044f\u0442 \u043f\u043e\u043c\u043e\u0447\u044c \u0432 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 HydraDX."),(0,o.kt)("p",null,"HydraDX \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u043c, \u043a\u0430\u043a \u0438 \u044d\u0442\u0438 \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b. \u041c\u044b \u0440\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0430\u0448 \u0432\u043a\u043b\u0430\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u044b - \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0430\u0442\u044c\u044e \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e. \u041e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u0448\u0438\u043c ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-docs"},"\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u043c GitHub"),", \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 ",(0,o.kt)("a",{parentName:"p",href:"/contributing"},"\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u044f"),"."),(0,o.kt)("h2",{id:"what-is-hydradx"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 HydraDX?"),(0,o.kt)("p",null,"HydraDX-\u044d\u0442\u043e \u043a\u0440\u043e\u0441\u0441-\u0446\u0435\u043f\u043d\u043e\u0439 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u043b\u0438\u043a\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u0438, \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u0441\u0443\u0431\u0441\u0442\u0440\u0430\u0442\u0435. \u041d\u0430\u0448\u0430 \u043c\u0438\u0441\u0441\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0431\u0435\u0441\u043f\u0435\u0440\u0435\u0431\u043e\u0439\u043d\u0443\u044e \u043b\u0438\u043a\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043a\u0440\u0438\u043f\u0442\u043e\u0430\u0441\u0441\u0435\u0442\u043e\u0432 \u043f\u0443\u0442\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0432 \u0441\u0432\u043e\u0435\u043c \u0440\u043e\u0434\u0435 \u043f\u0443\u043b\u0430 \u043b\u0438\u043a\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u0438 \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0430\u043a\u0442\u0438\u0432\u0430\u043c\u0438-HydraDX Omnipool. \u0412 Omnipool \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0430\u043a\u0442\u0438\u0432\u044b \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0442\u043e\u043a\u0435\u043d\u0430 HDX \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u043e\u043a\u0441\u0438-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u0445 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438. \u0421\u043e\u0437\u0434\u0430\u0432 Omnipool, HydraDX \u043d\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e, \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0430\u043a\u0442\u0438\u0432\u044b \u0442\u043e\u0440\u0433\u0443\u044e\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0438 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u0443\u043b\u043e\u0432. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043c\u044b \u0440\u0430\u0434\u044b \u0431\u044b\u0442\u044c \u0447\u0430\u0441\u0442\u044c\u044e \u044d\u043a\u043e\u0441\u0438\u0441\u0442\u0435\u043c\u044b Polkadot \u0438 \u0441 \u043d\u0435\u0442\u0435\u0440\u043f\u0435\u043d\u0438\u0435\u043c \u0436\u0434\u0435\u043c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u0442\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u043c \u043b\u0438\u043a\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0430\u043a\u0442\u0438\u0432\u043e\u0432, \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u043d\u0430 Substrate."))}d.isMDXComponent=!0}}]);