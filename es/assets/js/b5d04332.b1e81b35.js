(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{85:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return l}));var t=r(3),a=r(7),c=(r(0),r(89)),o=(r(90),{id:"performance_benchmark",title:"Benchmark de desempe\xf1o"}),i={unversionedId:"performance_benchmark",id:"performance_benchmark",isDocsHomePage:!1,title:"Benchmark de desempe\xf1o",description:"Puede asegurarse de que su m\xe1quina cumpla con las especificaciones t\xe9cnicas requeridas ejecutando una evaluaci\xf3n comparativa de rendimiento. Para hacerlo, siga los pasos a continuaci\xf3n:",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/performance_benchmark.md",slug:"/performance_benchmark",permalink:"/es/performance_benchmark",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/performance_benchmark.md",version:"current",sidebar:"sidebar",previous:{title:"Configurar un nodo HydraDX",permalink:"/es/node_setup"},next:{title:"Monitoreo de nodo",permalink:"/es/node_monitoring"}},u=[],s={toc:u};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Puede asegurarse de que su m\xe1quina cumpla con las ",Object(c.b)("a",{parentName:"p",href:"/node_setup#00-required-technical-specifications"},"especificaciones t\xe9cnicas requeridas")," ejecutando una evaluaci\xf3n comparativa de rendimiento. Para hacerlo, siga los pasos a continuaci\xf3n:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n$ cd HydraDX-node/\n\n# Prep\xe1rese para ejecutar el benchmark\n$ ./scripts/init.sh\n$ rustup default nightly\n$ apt install python3-pip\n$ pip3 install bench-wizard\n\n# Ejecute el benchmark\n$ ./scripts/check_performance.sh\n")),Object(c.b)("p",null,"Despu\xe9s de que se ejecute benchmark, deber\xeda ver un resultado similar al siguiente:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"         Pallet          |   Time comparison (\xb5s)    |     diff*     |            |   Rerun\namm                      |    1066.00 vs 1045.80     |      20       |     OK     |\nexchange                 |    1105.00 vs 1049.10     |      55       |     OK     |\ntransaction_multi_payment|     289.00 vs 279.96      |       9       |     OK     |\n")),Object(c.b)("p",null,"Si los valores en el campo ",Object(c.b)("inlineCode",{parentName:"p"},"diff")," son positivos en los tres casos, entonces su m\xe1quina es adecuada para ejecutar un nodo validador HydraDX."),Object(c.b)("p",null,"\xdanase a nosotros en Discord si desea discutir sus resultados de referencia, nuestra comunidad siempre estar\xe1 feliz de ayudar."))}l.isMDXComponent=!0},89:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=t,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||c;return r?a.a.createElement(m,i(i({ref:n},s),{},{components:r})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90:function(e,n,r){"use strict";r.d(n,"b",(function(){return c})),r.d(n,"a",(function(){return o}));var t=r(16),a=r(92);function c(){var e=Object(t.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,c=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var c=void 0===t?{}:t,o=c.forcePrependBaseUrl,i=void 0!==o&&o,u=c.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return n+r;var l=r.startsWith(n)?r:n+r.replace(/^\//,"");return s?e+l:l}(c,r,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,c().withBaseUrl)(e,n)}},92:function(e,n,r){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!t(e)}r.d(n,"b",(function(){return t})),r.d(n,"a",(function(){return a}))}}]);