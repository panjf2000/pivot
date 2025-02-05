(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(270)),i={last_modified_on:"2020-07-02",$schema:"/.meta/.schemas/highlights.json",title:"New approach to create server sockets",description:"Leverage system calls instead of `net` package to create sockets",author_github:"https://github.com/panjf2000",pr_numbers:["ccc8c64"],release:"features",hide_on_release_notes:!1,tags:["type: optimization","domain: socket","platform: arm64"]},c={date:"2020-07-02T00:00:00.000Z",description:"Leverage system calls instead of `net` package to create sockets",permalink:"/highlights/2020-07-02-raw-syscalls-sockets",readingTime:"1 min read",source:"@site/highlights/2020-07-02-raw-syscalls-sockets.md",tags:[{label:"type: optimization",permalink:"/highlights/tags/type-optimization"},{label:"domain: socket",permalink:"/highlights/tags/domain-socket"},{label:"platform: arm64",permalink:"/highlights/tags/platform-arm-64"}],title:"New approach to create server sockets",truncated:!1,prevItem:{title:"Released gnet v1.3.0",permalink:"/highlights/2020-09-13-released-1-3-0"},nextItem:{title:"Released gnet v1.2.0",permalink:"/highlights/2020-05-11-released-1-2-0"}},s=[{value:"About this change",id:"about-this-change",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"about-this-change"},"About this change"),Object(o.b)("p",null,"Benefit from system calls provided by Go standard library, server listener sockets inside gnet have gotten rid of the Go ",Object(o.b)("inlineCode",{parentName:"p"},"net")," package eventually,\nthere are no more methods from ",Object(o.b)("inlineCode",{parentName:"p"},"net")," package involved in the process of creating the listener of server socket, all by raw system calls. "))}p.isMDXComponent=!0},270:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,h=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return r?a.a.createElement(h,c({ref:t},l,{components:r})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);