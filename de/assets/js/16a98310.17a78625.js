(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[397],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return p}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),c=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,h=m["".concat(d,".").concat(p)]||m[p]||u[p]||r;return t?i.createElement(h,o(o({ref:n},s),{},{components:t})):i.createElement(h,o({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3919:function(e,n,t){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}t.d(n,{b:function(){return i},Z:function(){return a}})},4996:function(e,n,t){"use strict";t.d(n,{C:function(){return r},Z:function(){return o}});var i=t(2263),a=t(3919);function r(){var e=(0,i.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,r=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,l=void 0!==o&&o,d=r.absolute,c=void 0!==d&&d;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(l)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+s:s}(r,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,r().withBaseUrl)(e,n)}},3669:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var i=t(2122),a=t(9756),r=(t(7294),t(3905)),o=t(4996),l={id:"participate_in_council_elections",title:"Teilnahme an Ratswahlen"},d={unversionedId:"participate_in_council_elections",id:"participate_in_council_elections",isDocsHomePage:!1,title:"Teilnahme an Ratswahlen",description:"Dieser Artikel enth\xe4lt eine Schritt-f\xfcr-Schritt-Anleitung zur Teilnahme an Ratswahlen - f\xfcr die Wahl von Ratsmitgliedern und f\xfcr die Aufnahme als Ratskandidat. Es gibt zwei alternative Tools, die Sie zu diesem Zweck verwenden k\xf6nnen - Commonwealth.im or Polkadot/apps.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/participate_in_council_elections.md",sourceDirName:".",slug:"/participate_in_council_elections",permalink:"/de/participate_in_council_elections",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/participate_in_council_elections.md",version:"current",frontMatter:{id:"participate_in_council_elections",title:"Teilnahme an Ratswahlen"},sidebar:"sidebar",previous:{title:"Teilnahme an Referenda",permalink:"/de/participate_in_referenda"},next:{title:"Mit einer lokalen Node verbinden",permalink:"/de/polkadotjs_apps_local"}},c=[{value:"Verwendung von Commonwealth.im",id:"cw",children:[{value:"Abstimmung bei den Wahlen zu den Ratsmitgliedern",id:"cw-vote",children:[]},{value:"Bewerben Sie sich als Ratskandidat",id:"cw-become_candidate",children:[]}]},{value:"Verwundung von Polkadot/apps",id:"polkajs",children:[{value:"Abstimmung bei den Wahlen zu den Ratsmitgliedern",id:"polkajs-vote",children:[]},{value:"Bewerben Sie sich als Ratskandidat",id:"polkajs-become_candidate",children:[]}]}],s={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dieser Artikel enth\xe4lt eine Schritt-f\xfcr-Schritt-Anleitung zur Teilnahme an Ratswahlen - f\xfcr die Wahl von Ratsmitgliedern und f\xfcr die Aufnahme als Ratskandidat. Es gibt zwei alternative Tools, die Sie zu diesem Zweck verwenden k\xf6nnen - ",(0,r.kt)("a",{parentName:"p",href:"#cw"},"Commonwealth.im")," or ",(0,r.kt)("a",{parentName:"p",href:"#polkajs"},"Polkadot/apps"),"."),(0,r.kt)("p",null,"Wenn Sie daran interessiert sind, wie der Wahlmechanismus funktioniert, lesen Sie bitte ",(0,r.kt)("a",{parentName:"p",href:"/democracy_council#elections"},"diesen Beitrag"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Das HydraDX-Demokratiemodul wird am oder nach dem ",(0,r.kt)("strong",{parentName:"p"},"15. September 2021")," eingef\xfchrt. Bitte versuchen Sie vor diesem Datum keine der angezeigten Aktionen."))),(0,r.kt)("h2",{id:"cw"},"Verwendung von Commonwealth.im"),(0,r.kt)("h3",{id:"cw-vote"},"Abstimmung bei den Wahlen zu den Ratsmitgliedern"),(0,r.kt)("p",null,"Sie k\xf6nnen die aktuellen Ratsmitglieder sowie die Zweitplatzierten in der Registerkarte ",(0,r.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/council"},"Ratsmitglieder")," auf der HydraDX Commonwealth-Seite sehen."),(0,r.kt)("p",null,"Um Ihre Stimme f\xfcr die Ratsmitglieder herauszubringen, klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Vote"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:(0,o.Z)("/participate_in_council_elections/cw-vote.jpg")})),(0,r.kt)("p",null,"Geben Sie die Anzahl der Token ein, die Sie zur Unterst\xfctzung Ihrer Kandidaten sperren m\xf6chten."),(0,r.kt)("p",null,"W\xe4hlen Sie anschlie\xdfend Ihre Wunschkandidaten aus, indem Sie auf deren Namen klicken. Denken Sie daran, mehrere Kandidaten auszuw\xe4hlen - dies hilft dem Algorithmus, die optimale Verteilung der Kandidaten an den Rat auszuw\xe4hlen."),(0,r.kt)("p",null,"Um Ihre Stimme zu ver\xf6ffentlichen, klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Submit vote")," und unterschreiben Sie die Transaktion."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Gesperrte Token k\xf6nnen nicht \xfcbertragen werden, sie k\xf6nnen jedoch weiterhin zum Abstecken und zur Abstimmung in Volksabstimmungen verwendet werden. Ihre Token bleiben erhalten und werden f\xfcr nachfolgende Wahlen verwendet, bis Sie sich entschieden haben, sie freizuschalten."))),(0,r.kt)("h3",{id:"cw-become_candidate"},"Bewerben Sie sich als Ratskandidat"),(0,r.kt)("p",null,"Sie k\xf6nnen Ihren Antrag auf Mitgliedschaft im Rat einreichen, indem Sie auf der HydraDX Commonwealth-Seite zur Registerkarte ",(0,r.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/council"},"Ratsmitglieder")," navigieren."),(0,r.kt)("p",null,"Klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Run for Council"),", um zu einer Seite mit der f\xfcr die Mitgliedschaft erforderlichen Mindesteinzahlung zu gelangen."),(0,r.kt)("p",null,"Um Ihre Kandidatur einzureichen, klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Sign and send transaction")," und unterschreiben Sie mit Ihrem Wallet."),(0,r.kt)("h2",{id:"polkajs"},"Verwundung von Polkadot/apps"),(0,r.kt)("h3",{id:"polkajs-vote"},"Abstimmung bei den Wahlen zu den Ratsmitgliedern"),(0,r.kt)("p",null,"Die aktuellen Ratsmitglieder sowie die Zweitplatzierten sind auf der Seite ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/council"},(0,r.kt)("em",{parentName:"a"},"Governance > Council")," page")," in Polkadot/apps zu sehen."),(0,r.kt)("p",null,"Um Ihre Stimme f\xfcr die Ratsmitglieder herauszubringen, klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Vote"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:(0,o.Z)("/participate_in_council_elections/polkajs-vote.jpg")})),(0,r.kt)("p",null,"Geben Sie die Anzahl der Token ein, die Sie zur Unterst\xfctzung Ihrer Kandidaten sperren m\xf6chten."),(0,r.kt)("p",null,"W\xe4hlen Sie anschlie\xdfend Ihre Kandidaten in der Reihenfolge ihrer Pr\xe4ferenz aus, indem Sie sie von der linken Liste in die rechte Liste verschieben. Denken Sie daran, mehrere Kandidaten auszuw\xe4hlen - dies hilft dem Algorithmus, die optimale Verteilung der Kandidaten an den Rat auszuw\xe4hlen."),(0,r.kt)("p",null,"Um Ihre Stimme herauszubringen, klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Vote")," und unterschreiben Sie die Transaktion."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Gesperrte Token k\xf6nnen nicht \xfcbertragen werden, sie k\xf6nnen jedoch weiterhin zum Abstecken und zur Abstimmung in Volksabstimmungen verwendet werden. Ihre Token bleiben erhalten und werden f\xfcr nachfolgende Wahlen verwendet, bis Sie sich entschieden haben, sie freizuschalten."))),(0,r.kt)("h3",{id:"polkajs-become_candidate"},"Bewerben Sie sich als Ratskandidat"),(0,r.kt)("p",null,"Sie k\xf6nnen Ihren Antrag auf Mitgliedschaft im Rat einreichen, indem Sie zu ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/council"},(0,r.kt)("em",{parentName:"a"},"Governance > Council"))," in Polkadot/apps navigieren."),(0,r.kt)("p",null,"Klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Submit candidacy"),", um ein Popup-Fenster auszul\xf6sen."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:(0,o.Z)("/participate_in_council_elections/polkajs-apply.jpg")})),(0,r.kt)("p",null,"W\xe4hlen Sie das Konto aus, das f\xfcr die Mitgliedschaft im Council l\xe4uft, klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Submit")," und unterschreiben Sie die Transaktion."))}u.isMDXComponent=!0}}]);