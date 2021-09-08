(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[214],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return p}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=l(t),p=i,h=c["".concat(s,".").concat(p)]||c[p]||u[p]||a;return t?r.createElement(h,o(o({ref:n},m),{},{components:t})):r.createElement(h,o({ref:n},m))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3919:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return i}})},4996:function(e,n,t){"use strict";t.d(n,{C:function(){return a},Z:function(){return o}});var r=t(2263),i=t(3919);function a(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,d=void 0!==o&&o,s=a.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(d)return n+t;var m=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+m:m}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},2871:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o=t(4996),d={id:"participate_in_referenda",title:"Teilnahme an Referenda"},s={unversionedId:"participate_in_referenda",id:"participate_in_referenda",isDocsHomePage:!1,title:"Teilnahme an Referenda",description:"Dieser Beitrag bietet eine Schritt-f\xfcr-Schritt-Anleitung zur Teilnahme an Referenden \u2013 Abstimmung und Vorschlag. Es gibt zwei alternative Tools, die Sie zu diesem Zweck verwenden k\xf6nnen - Commonwealth.im oder Polkadot/apps.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/participate_in_referenda.md",sourceDirName:".",slug:"/participate_in_referenda",permalink:"/de/participate_in_referenda",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/participate_in_referenda.md",version:"current",frontMatter:{id:"participate_in_referenda",title:"Teilnahme an Referenda"},sidebar:"sidebar",previous:{title:"Die Anfrage vom Finanzministerium",permalink:"/de/tip_request"},next:{title:"Teilnahme an Ratswahlen",permalink:"/de/participate_in_council_elections"}},l=[{value:"Verwendung von Commonwealth.im",id:"cw",children:[{value:"Abstimmung auf Referendum",id:"cw-vote",children:[]},{value:"Referendum vorschlagen",id:"cw-propose",children:[]}]},{value:"Verwendung von Polkadot/apps",id:"polkajs",children:[{value:"Abstimmung auf Referendum",id:"polkajs-vote",children:[]},{value:"Referendum vorschlagen",id:"polkajs-propose",children:[]}]}],m={toc:l};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dieser Beitrag bietet eine Schritt-f\xfcr-Schritt-Anleitung zur Teilnahme an Referenden \u2013 Abstimmung und Vorschlag. Es gibt zwei alternative Tools, die Sie zu diesem Zweck verwenden k\xf6nnen - ",(0,a.kt)("a",{parentName:"p",href:"#cw"},"Commonwealth.im")," oder ",(0,a.kt)("a",{parentName:"p",href:"#polkajs"},"Polkadot/apps"),"."),(0,a.kt)("p",null,"Bevor Sie sich f\xfcr eine Teilnahme entscheiden, empfehlen wir Ihnen dringend, den ",(0,a.kt)("a",{parentName:"p",href:"/democracy_referenda"},"Wissensartikel")," im Abschnitt Lernen / Demokratie durchzulesen. Dort finden Sie einige wichtige Details zu den Mechanismen hinter Volksabstimmungen."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Das HydraDX-Demokratiemodul wird am oder nach dem ",(0,a.kt)("strong",{parentName:"p"},"15. September 2021")," eingef\xfchrt. Bitte versuchen Sie vor diesem Datum keine der angezeigten Aktionen."))),(0,a.kt)("h2",{id:"cw"},"Verwendung von Commonwealth.im"),(0,a.kt)("h3",{id:"cw-vote"},"Abstimmung auf Referendum"),(0,a.kt)("p",null,"Sie k\xf6nnen alle Volksabstimmungen einsehen, die zur Abstimmung offen sind, indem Sie auf das ",(0,a.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/referenda"},"Referenda tab")," auf der HydraDX Commonwealth-Seite navigieren."),(0,a.kt)("p",null,"Um \xfcber ein aktives Referendum abzustimmen, m\xfcssen Sie darauf klicken. Danach sehen Sie eine Seite mit allen relevanten Details."),(0,a.kt)("p",null,"Geben Sie im Abschnitt ",(0,a.kt)("em",{parentName:"p"},"Cast Your Vote")," die folgenden Informationen ein:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Abstimmungsbetrag - Dies ist die Menge an HDX-Token, die Sie bereit sind, zur Unterst\xfctzung des Referendums zu sperren"),(0,a.kt)("li",{parentName:"ul"},"\xdcberzeugungsmultiplikator - Dies ist der Multiplikator, der das ",(0,a.kt)("a",{parentName:"li",href:"/democracy_referenda#referenda-votes-weighing"},"Gewicht Ihrer Stimme")," mitbestimmt.")),(0,a.kt)("p",null,"Geben Sie anschlie\xdfend Ihre Stimme durch Klick auf ",(0,a.kt)("em",{parentName:"p"},"Vote yes")," oder ",(0,a.kt)("em",{parentName:"p"},"Vote no")," ab und unterschreiben Sie die Transaktion."),(0,a.kt)("h3",{id:"cw-propose"},"Referendum vorschlagen"),(0,a.kt)("p",null,"Um ein Referendum vorzuschlagen, besuchen Sie die ",(0,a.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/"},"HydraDX Commonwealth-Seite")," und klicken Sie im oberen Men\xfc auf ",(0,a.kt)("em",{parentName:"p"},"New Thread > New democracy proposal"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,o.Z)("/participate_in_referenda/cw-proposal.jpg")})),(0,a.kt)("p",null,"F\xfcllen Sie die Informationen in den oben angezeigten Feldern aus. Die wichtigsten Parameter sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modul"),(0,a.kt)("li",{parentName:"ul"},"Funktion"),(0,a.kt)("li",{parentName:"ul"},"Alle zus\xe4tzlichen Informationen, die von der Funktion angegeben werden, die Sie aufrufen m\xf6chten"),(0,a.kt)("li",{parentName:"ul"},"Einzahlung - die Menge an HDX-Token, die Sie bereit sind, zur Unterst\xfctzung des Vorschlags einzuzahlen")),(0,a.kt)("p",null,"Im obigen Beispiel ist das Angebotsmodul ",(0,a.kt)("em",{parentName:"p"},"balances")," und die Funktion ",(0,a.kt)("em",{parentName:"p"},"setBalance"),", die die freien und Reservesalden eines bestimmten Kontos \xe4ndert."),(0,a.kt)("p",null,"Um den Vorschlag einzureichen, klicken Sie auf ",(0,a.kt)("em",{parentName:"p"},"Send transaction")," und unterschreiben Sie mit Ihrem Wallet."),(0,a.kt)("p",null,"Nachdem Sie den Vorschlag in der Kette eingereicht und die Transaktion unterzeichnet haben, sollte Ihr Vorschlag in der ",(0,a.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/referenda"},"Liste der vorgeschlagenen Referenden")," erscheinen."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In jeder Abstimmungsperiode geht der Referendumsvorschlag mit der h\xf6chsten Unterst\xfctzung (",(0,a.kt)("em",{parentName:"p"},"Seconding"),") in die Abstimmungsrunde. Da die Zahl der Referenden zunimmt, gibt es keine Garantie daf\xfcr, dass Ihr Vorschlag jemals gen\xfcgend Abordnungen erh\xe4lt, um an der Abstimmung teilzunehmen. Es gibt keine M\xf6glichkeit, einen Referendumsvorschlag zur\xfcckzuziehen, was bedeutet, dass Ihre Gelder m\xf6glicherweise f\xfcr einen l\xe4ngeren Zeitraum gesperrt bleiben."),(0,a.kt)("p",{parentName:"div"},"B\xf6swillige Referendumsvorschl\xe4ge werden bestraft. Der HydraDX-Rat und das Technische Komitee haben das Recht, ein b\xf6sgl\xe4ubiges Referendum abzubrechen. Infolgedessen werden die hinterlegten Token verbrannt."))),(0,a.kt)("h2",{id:"polkajs"},"Verwendung von Polkadot/apps"),(0,a.kt)("h3",{id:"polkajs-vote"},"Abstimmung auf Referendum"),(0,a.kt)("p",null,"Sie k\xf6nnen alle Referenden einsehen, die zur Abstimmung offen sind, indem Sie zu ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy"},(0,a.kt)("em",{parentName:"a"},"Governance > Democracy"))," in Polkadot/apps navigieren."),(0,a.kt)("p",null,"Um bei einem Referendum abzustimmen, klicken Sie daneben auf die Schaltfl\xe4che ",(0,a.kt)("em",{parentName:"p"},"Vote"),"."),(0,a.kt)("p",null,"Geben Sie im Popup die folgenden Informationen ein:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stimmenwert - Dies ist die Menge an HDX-Token, die Sie bereit sind, zur Unterst\xfctzung des Referendums zu sperren"),(0,a.kt)("li",{parentName:"ul"},"\xdcberzeugungsmultiplikator - Dies ist der Multiplikator, der das ","[Gewicht Ihrer Stimme]","\n(/democracy_referenda#referenda-votes-weighing) mitbestimmt.")),(0,a.kt)("p",null,"Bringen Sie anschlie\xdfend Ihre Stimme mit einem Klick auf ",(0,a.kt)("em",{parentName:"p"},"Vote Nay")," (No) or ",(0,a.kt)("em",{parentName:"p"},"Vote Aye")," (Yes) *  heraus und unterschreiben Sie die Transaktion."),(0,a.kt)("h3",{id:"polkajs-propose"},"Referendum vorschlagen"),(0,a.kt)("p",null,"Der Vorschlag eines Referendums \xfcber Polkadot/Apps besteht aus zwei Schritten \u2013 dem Einreichen eines Vorabbilds und dem Einreichen des Vorschlags in der Kette."),(0,a.kt)("h4",{id:"polkajs-propose-01"},"01 Vorabbild senden"),(0,a.kt)("p",null,"Um das Preimage einzureichen, besuchen Sie Polkadot/Apps und navigieren Sie zu\n",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy"},(0,a.kt)("em",{parentName:"a"},"Governance > Democracy")),"."),(0,a.kt)("p",null,"Nachdem Sie auf ",(0,a.kt)("em",{parentName:"p"},"Submit preimage")," geklickt haben, sollten Sie das folgende Popup sehen:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,o.Z)("/participate_in_referenda/polkajs-preimage.jpg")})),(0,a.kt)("p",null,"F\xfcllen Sie die Informationen in den oben angezeigten Feldern aus. Die wichtigsten Parameter sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Konto, von dem das Angebot gesendet wird"),(0,a.kt)("li",{parentName:"ul"},"Angebotsbereich"),(0,a.kt)("li",{parentName:"ul"},"Vorgeschlagene Ma\xdfnahmen")),(0,a.kt)("p",null,"Im obigen Beispiel lautet der Angebotsbereich ",(0,a.kt)("em",{parentName:"p"},"balances")," und die Aktion ",(0,a.kt)("em",{parentName:"p"},"forceTransfer")," von Token von einem Konto auf ein anderes."),(0,a.kt)("p",null,"Bevor Sie das Preimage einreichen und die Transaktion unterzeichnen, kopieren Sie bitte den Preimage-Hash. Sie ben\xf6tigen es f\xfcr den n\xe4chsten Schritt."),(0,a.kt)("h4",{id:"polkajs-propose-02"},"02 Vorschlag einreichen"),(0,a.kt)("p",null,"Um den Referendumsvorschlag einzureichen, besuchen Sie\n",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy"},(0,a.kt)("em",{parentName:"a"},"Governance > Democracy"))," in Polkadot/apps."),(0,a.kt)("p",null,"Nachdem Sie auf ",(0,a.kt)("em",{parentName:"p"},"Submit proposal")," geklickt haben, sollten Sie das folgende Popup sehen:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,o.Z)("/participate_in_referenda/polkajs-proposal.jpg")})),(0,a.kt)("p",null,"Geben Sie den Preimage-Hash aus dem vorherigen Schritt und die Anzahl der Token ein, die Sie f\xfcr das Angebot hinterlegen m\xf6chten. Das Minimum ist 100.000 HDX."),(0,a.kt)("p",null,"Nachdem Sie den Vorschlag in der Kette eingereicht und die Transaktion unterzeichnet haben, sollte Ihr Vorschlag in der Liste der vorgeschlagenen Referenden erscheinen."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In jeder Abstimmungsperiode geht der Referendumsvorschlag mit der h\xf6chsten Unterst\xfctzung (",(0,a.kt)("em",{parentName:"p"},"Seconding"),") in die Abstimmungsrunde. Da die Zahl der Referenden zunimmt, gibt es keine Garantie daf\xfcr, dass Ihr Vorschlag jemals gen\xfcgend Abordnungen erh\xe4lt, um an der Abstimmung teilzunehmen. Es gibt keine M\xf6glichkeit, einen Referendumsvorschlag zur\xfcckzuziehen, was bedeutet, dass Ihre Gelder m\xf6glicherweise f\xfcr einen l\xe4ngeren Zeitraum gesperrt bleiben."),(0,a.kt)("p",{parentName:"div"},"B\xf6swillige Referendumsvorschl\xe4ge werden bestraft. Der HydraDX-Rat und das Technische Komitee haben das Recht, ein b\xf6sgl\xe4ubiges Referendum abzubrechen. Infolgedessen werden die hinterlegten Token verbrannt."))))}u.isMDXComponent=!0}}]);