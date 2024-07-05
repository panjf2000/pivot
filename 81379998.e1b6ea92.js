(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return f}));var n=a(1),c=a(9),r=(a(0),a(251)),b={last_modified_on:"2021-02-17",$schema:"/.meta/.schemas/highlights.json",title:"Released gnet v1.4.0",description:"Released the official stable version of v1.4.0",author_github:"https://github.com/panjf2000",pr_numbers:["38b086"],release:"1.4.0",hide_on_release_notes:!1,tags:["type: release","domain: v1.4.0"]},i={date:"2021-02-17T00:00:00.000Z",description:"Released the official stable version of v1.4.0",permalink:"/highlights/2021-02-17-released-1-4-0",readingTime:"2 min read",source:"@site/highlights/2021-02-17-released-1-4-0.md",tags:[{label:"type: release",permalink:"/highlights/tags/type-release"},{label:"domain: v1.4.0",permalink:"/highlights/tags/domain-v-1-4-0"}],title:"Released gnet v1.4.0",truncated:!1,prevItem:{title:"Released gnet v1.5.0",permalink:"/highlights/2021-07-11-released-1-5-0"},nextItem:{title:"Support locking OS thread",permalink:"/highlights/2020-09-13-supported-locking-os-thread"}},o=[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugfixes",id:"bugfixes",children:[]},{value:"Docs",id:"docs",children:[]},{value:"Misc",id:"misc",children:[]}],l={rightToc:o};function f(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"features"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Support TCP_NODELAY socket option ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/525df8ed1e734ac8d9a8f7fc4d28853a3f1e9cb3"}),"525df8")),Object(r.b)("li",{parentName:"ul"},"Implement the lock-free queue for dispatching tasks faster ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/pull/181"}),"#181"))),Object(r.b)("h2",{id:"enhancements"},"Enhancements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Shrink the ring-buffer for saving memory ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/14fd04a041994e35393a2abf5c039db4e9f29f60"}),"14fd04")),Object(r.b)("li",{parentName:"ul"},"Improve event poll ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/fc042ccde2d57697eafe278b2d6d9c056246e251"}),"fc042c")),Object(r.b)("li",{parentName:"ul"},"Improve the buffered channels ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/83b96eda98cb0ea311d776537a502151a029dab6"}),"83b96e")),Object(r.b)("li",{parentName:"ul"},"Shrink the poll event list when it need to ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/158763823c0c155bd3750c18d58cf887c7f2a813"}),"158763")),Object(r.b)("li",{parentName:"ul"},"Improve the I/O in event-loop ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/c554f4ec298f76c6bb5710a62db710161189d239"}),"c554f4")),Object(r.b)("li",{parentName:"ul"},"Prioritize writable events ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/0f08c8f351c1cb60e83db1b6edf1babdb853767d"}),"0f08c8")),Object(r.b)("li",{parentName:"ul"},"Make it more robust when running async jobs ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/6509b85eca7847abf8919829857e05851a408d0c"}),"6509b8")),Object(r.b)("li",{parentName:"ul"},"Improve the poller waking logic ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/4d8accba64f9c8e9da621409c5fa42d1aa3bea51"}),"4d8acc"))),Object(r.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Re-enqueue the subsequent jobs when a error occurs ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/1af3f6c4734f41f424de4b929407ed401ddbc830"}),"1af3f6")),Object(r.b)("li",{parentName:"ul"},"Close and release a socket when error occurs ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/9d86c92a224a3ce0b670070dd4256099c0dedcff"}),"9d86c9")),Object(r.b)("li",{parentName:"ul"},"Check outbound buffer in case the socket has been released ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/035f6140a187f58c62d3d9e023f22fbdb81cd66f"}),"035f61")),Object(r.b)("li",{parentName:"ul"},"Avoid starving sockets ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/e3152523da481e8e59f1ac137e89b5c669287010"}),"e31525"))),Object(r.b)("h2",{id:"docs"},"Docs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Enrich the doc about using UDP packets ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/0047c15c6ccf98fddf985bbb254ab22abd2463ce"}),"0047c1")),Object(r.b)("li",{parentName:"ul"},"Add more user cases of gnet ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/076b16c68f52de65fb059ec9b81d03f0e7ef06f4"}),"076b16")),Object(r.b)("li",{parentName:"ul"},"Update benchmark results ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/028bab284f63babd203b44dc59e2e0bde3ee2691"}),"028bab")),Object(r.b)("li",{parentName:"ul"},"Update the description about ring-buffer ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/38b086af35cf57e9bc08f3655eefacab7985dd5a"}),"38b086"))),Object(r.b)("h2",{id:"misc"},"Misc"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add one more donor ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/12bfa5cfa7742859ad75f8117d3deadebeb7f12c"}),"12bfa5")),Object(r.b)("li",{parentName:"ul"},"Refine code ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/2aee5a9ea2d86d2eabf2964be96cbf8ce643bc48"}),"2aee5a")),Object(r.b)("li",{parentName:"ul"},"Add comments on those core code ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/2404edde0031ac52bf1dcb803708e347080b9e47"}),"2404ed")),Object(r.b)("li",{parentName:"ul"},"Refine code and add comments ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/4ecbc501c2cfa05773e338cd07d967bb1d0afad5"}),"4ecbc5")),Object(r.b)("li",{parentName:"ul"},"Add a warning comment for OnOpened ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/0bddd003d7d8934df7ab65389c8975e155c72440"}),"0bddd0"))))}f.isMDXComponent=!0},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),f=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},m=function(e){var t=f(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=f(a),d=n,u=m["".concat(b,".").concat(d)]||m[d]||p[d]||r;return a?c.a.createElement(u,i({ref:t},l,{components:a})):c.a.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var l=2;l<r;l++)b[l]=a[l];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);