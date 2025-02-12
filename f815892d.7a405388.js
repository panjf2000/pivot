(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{256:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(0),r(270)),i={last_modified_on:"2020-09-13",$schema:"/.meta/.schemas/highlights.json",title:"Support locking OS thread",description:"Support locking each I/O event-loop goroutine to an OS thread",author_github:"https://github.com/panjf2000",pr_numbers:["6fd6413"],release:"features",hide_on_release_notes:!1,tags:["type: new feature","domain: thread","platform: arm64"]},c={date:"2020-09-13T00:00:00.000Z",description:"Support locking each I/O event-loop goroutine to an OS thread",permalink:"/highlights/2020-09-13-supported-locking-os-thread",readingTime:"1 min read",source:"@site/highlights/2020-09-13-supported-locking-os-thread.md",tags:[{label:"type: new feature",permalink:"/highlights/tags/type-new-feature"},{label:"domain: thread",permalink:"/highlights/tags/domain-thread"},{label:"platform: arm64",permalink:"/highlights/tags/platform-arm-64"}],title:"Support locking OS thread",truncated:!1,prevItem:{title:"Released gnet v1.3.0",permalink:"/highlights/2020-09-13-released-1-3-0"},nextItem:{title:"New approach to create server sockets",permalink:"/highlights/2020-07-02-raw-syscalls-sockets"}},l=[{value:"About this change",id:"about-this-change",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"about-this-change"},"About this change"),Object(o.b)("p",null,"Add functional option ",Object(o.b)("inlineCode",{parentName:"p"},"LockOSThread")," used to determine whether each I/O event-loop is associated to an OS thread, it is useful when you need some kind of mechanisms like thread local storage,\nor invoke certain C libraries (such as graphics lib: GLib) that require thread-level manipulation via cgo, or want all I/O event-loops to actually run in parallel for a potential higher performance. "))}s.isMDXComponent=!0},270:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return r?a.a.createElement(f,c({ref:t},p,{components:r})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);