(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(1),c=n(9),b=(n(0),n(265)),r={last_modified_on:"2020-03-14",id:"announcing-gnet-v1-zh",title:"\u5b98\u5ba3 gnet v1.0.0",description:"\u6700\u5feb\u7684 Go \u7f51\u7edc\u6846\u67b6 gnet \u6765\u5566\uff01",author_github:"https://github.com/panjf2000",tags:["type: \u5b98\u5ba3","domain: \u5c55\u793a"]},i={permalink:"/blog/announcing-gnet-v1-zh",source:"@site/blog/2020-03-14-announcing-gnet-v1-zh.md",description:"\u6700\u5feb\u7684 Go \u7f51\u7edc\u6846\u67b6 gnet \u6765\u5566\uff01",date:"2020-03-14T00:00:00.000Z",tags:[{label:"type: \u5b98\u5ba3",permalink:"/blog/tags/type-\u5b98\u5ba3"},{label:"domain: \u5c55\u793a",permalink:"/blog/tags/domain-\u5c55\u793a"}],title:"\u5b98\u5ba3 gnet v1.0.0",readingTime:1.565,truncated:!1,prevItem:{title:"Announcing gnet v2.0.0",permalink:"/blog/announcing-gnet-v2"},nextItem:{title:"Announcing gnet v1.0.0",permalink:"/blog/announcing-gnet-v1"}},o=[{value:"\u4eca\u5929\uff0cgnet v1.0.0 \u6b63\u5f0f\u7248\u672c\u53d1\u5e03\uff0c\u4eab\u53d7\u8fd9\u4e2a\u9ad8\u6027\u80fd\u7684\u7f51\u7edc\u6846\u67b6\u5427\uff01",id:"\u4eca\u5929\uff0cgnet-v100-\u6b63\u5f0f\u7248\u672c\u53d1\u5e03\uff0c\u4eab\u53d7\u8fd9\u4e2a\u9ad8\u6027\u80fd\u7684\u7f51\u7edc\u6846\u67b6\u5427\uff01",children:[]},{value:"\u591a\u7ebf\u7a0b/Go\u7a0b\u7f51\u7edc\u6a21\u578b",id:"\u591a\u7ebf\u7a0bgo\u7a0b\u7f51\u7edc\u6a21\u578b",children:[{value:"\u4e3b\u4ece\u591a Reactors",id:"\u4e3b\u4ece\u591a-reactors",children:[]},{value:"\u4e3b\u4ece\u591a Reactors + \u7ebf\u7a0b/Go\u7a0b\u6c60",id:"\u4e3b\u4ece\u591a-reactors--\u7ebf\u7a0bgo\u7a0b\u6c60",children:[]}]},{value:"\u53ef\u91cd\u7528\u4e14\u81ea\u52a8\u6269\u5bb9\u7684 Ring-Buffer",id:"\u53ef\u91cd\u7528\u4e14\u81ea\u52a8\u6269\u5bb9\u7684-ring-buffer",children:[]}],l={rightToc:o};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"\u4eca\u5929\uff0cgnet-v100-\u6b63\u5f0f\u7248\u672c\u53d1\u5e03\uff0c\u4eab\u53d7\u8fd9\u4e2a\u9ad8\u6027\u80fd\u7684\u7f51\u7edc\u6846\u67b6\u5427\uff01"},"\u4eca\u5929\uff0cgnet v1.0.0 \u6b63\u5f0f\u7248\u672c\u53d1\u5e03\uff0c\u4eab\u53d7\u8fd9\u4e2a\u9ad8\u6027\u80fd\u7684\u7f51\u7edc\u6846\u67b6\u5427\uff01"),Object(b.b)("p",{align:"center"},Object(b.b)("img",{src:"https://raw.githubusercontent.com/panjf2000/logos/master/gnet/logo.png",alt:"gnet"})),Object(b.b)("p",null,Object(b.b)("img",Object(a.a)({parentName:"p"},{src:"/img/gnet-v1-0-0.jpg",alt:null}))),Object(b.b)("h1",{id:"-\u7b80\u4ecb"},"\ud83d\udcd6 \u7b80\u4ecb"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u662f\u4e00\u4e2a\u57fa\u4e8e\u4e8b\u4ef6\u9a71\u52a8\u7684\u9ad8\u6027\u80fd\u548c\u8f7b\u91cf\u7ea7\u7f51\u7edc\u6846\u67b6\u3002\u5b83\u76f4\u63a5\u4f7f\u7528 ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Epoll"}),"epoll")," \u548c ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Kqueue"}),"kqueue")," \u7cfb\u7edf\u8c03\u7528\u800c\u975e\u6807\u51c6 Go \u7f51\u7edc\u5305\uff1a",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/net/"}),"net")," \u6765\u6784\u5efa\u7f51\u7edc\u5e94\u7528\uff0c\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u7c7b\u4f3c\u4e24\u4e2a\u5f00\u6e90\u7684\u7f51\u7edc\u5e93\uff1a",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/netty/netty"}),"netty")," \u548c ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/libuv/libuv"}),"libuv"),"\uff0c\u8fd9\u4e5f\u4f7f\u5f97 ",Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u8fbe\u5230\u4e86\u4e00\u4e2a\u8fdc\u8d85 Go ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/net/"}),"net")," \u7684\u6027\u80fd\u8868\u73b0\u3002"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u8bbe\u8ba1\u5f00\u53d1\u7684\u521d\u8877\u4e0d\u662f\u4e3a\u4e86\u53d6\u4ee3 Go \u7684\u6807\u51c6\u7f51\u7edc\u5e93\uff1a",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/net/"}),"net"),"\uff0c\u800c\u662f\u4e3a\u4e86\u521b\u9020\u51fa\u4e00\u4e2a\u7c7b\u4f3c\u4e8e ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"http://redis.io"}),"Redis"),"\u3001",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.haproxy.org"}),"Haproxy")," \u80fd\u9ad8\u6548\u5904\u7406\u7f51\u7edc\u5305\u7684 Go \u8bed\u8a00\u7f51\u7edc\u670d\u52a1\u5668\u6846\u67b6\u3002"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u7684\u5356\u70b9\u5728\u4e8e\u5b83\u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u3001\u8f7b\u91cf\u7ea7\u3001\u975e\u963b\u585e\u7684\u7eaf Go \u5b9e\u73b0\u7684\u4f20\u8f93\u5c42\uff08TCP/UDP/Unix Domain Socket\uff09\u7f51\u7edc\u6846\u67b6\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u5e94\u7528\u5c42\u7f51\u7edc\u534f\u8bae(HTTP\u3001RPC\u3001Redis\u3001WebSocket \u7b49\u7b49)\uff0c\u4ece\u800c\u6784\u5efa\u51fa\u81ea\u5df1\u7684\u5e94\u7528\u5c42\u7f51\u7edc\u5e94\u7528\uff1a\u6bd4\u5982\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u4e0a\u5b9e\u73b0 HTTP \u534f\u8bae\u5c31\u53ef\u4ee5\u521b\u5efa\u51fa\u4e00\u4e2a HTTP \u670d\u52a1\u5668 \u6216\u8005 Web \u5f00\u53d1\u6846\u67b6\uff0c\u5b9e\u73b0 Redis \u534f\u8bae\u5c31\u53ef\u4ee5\u521b\u5efa\u51fa\u81ea\u5df1\u7684 Redis \u670d\u52a1\u5668\u7b49\u7b49\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"gnet")," \u884d\u751f\u81ea\u53e6\u4e00\u4e2a\u9879\u76ee\uff1a",Object(b.b)("inlineCode",{parentName:"strong"},"evio"),"\uff0c\u4f46\u62e5\u6709\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\u7279\u6027\uff0c\u4e14\u6027\u80fd\u8fdc\u80dc\u4e4b\u3002")),Object(b.b)("h1",{id:"-\u529f\u80fd"},"\ud83d\ude80 \u529f\u80fd"),Object(b.b)("ul",{className:"contains-task-list"},Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/blob/v1.0.0/README_ZH.md#-%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95"}),"\u9ad8\u6027\u80fd")," \u7684\u57fa\u4e8e\u591a\u7ebf\u7a0b/Go\u7a0b\u7f51\u7edc\u6a21\u578b\u7684 event-loop \u4e8b\u4ef6\u9a71\u52a8"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","\u5185\u7f6e Round-Robin \u8f6e\u8be2\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","\u5185\u7f6e goroutine \u6c60\uff0c\u7531\u5f00\u6e90\u5e93 ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/panjf2000/ants"}),"ants")," \u63d0\u4f9b\u652f\u6301"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","\u5185\u7f6e bytes \u5185\u5b58\u6c60\uff0c\u7531\u5f00\u6e90\u5e93 ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/valyala/bytebufferpool"}),"bytebufferpool")," \u63d0\u4f9b\u652f\u6301"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","\u7b80\u6d01\u7684 APIs"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","\u57fa\u4e8e Ring-Buffer \u7684\u9ad8\u6548\u5185\u5b58\u5229\u7528"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","\u652f\u6301\u591a\u79cd\u7f51\u7edc\u534f\u8bae/IPC \u673a\u5236\uff1aTCP\u3001UDP \u548c Unix Domain Socket"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","\u652f\u6301\u4e24\u79cd\u4e8b\u4ef6\u9a71\u52a8\u673a\u5236\uff1aLinux \u91cc\u7684 epoll \u4ee5\u53ca FreeBSD \u91cc\u7684 kqueue"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","\u652f\u6301\u5f02\u6b65\u5199\u64cd\u4f5c"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","\u7075\u6d3b\u7684\u4e8b\u4ef6\u5b9a\u65f6\u5668"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","SO_REUSEPORT \u7aef\u53e3\u91cd\u7528"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","\u5185\u7f6e\u591a\u79cd\u7f16\u89e3\u7801\u5668\uff0c\u652f\u6301\u5bf9 TCP \u6570\u636e\u6d41\u5206\u5305\uff1aLineBasedFrameCodec, DelimiterBasedFrameCodec, FixedLengthFrameCodec \u548c LengthFieldBasedFrameCodec\uff0c\u53c2\u8003\u81ea ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://netty.io/4.1/api/io/netty/handler/codec/package-summary.html"}),"netty codec"),"\uff0c\u800c\u4e14\u652f\u6301\u81ea\u5b9a\u5236\u7f16\u89e3\u7801\u5668"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","\u652f\u6301 Windows \u5e73\u53f0\uff0c\u57fa\u4e8e ",Object(b.b)("del",{parentName:"li"},"IOCP \u4e8b\u4ef6\u9a71\u52a8\u673a\u5236")," Go \u6807\u51c6\u7f51\u7edc\u5e93"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u52a0\u5165\u66f4\u591a\u7684\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff1a\u968f\u673a\u3001\u6700\u5c11\u8fde\u63a5\u3001\u4e00\u81f4\u6027\u54c8\u5e0c\u7b49\u7b49"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u652f\u6301 TLS"),Object(b.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5b9e\u73b0 ",Object(b.b)("inlineCode",{parentName:"li"},"gnet")," \u5ba2\u6237\u7aef")),Object(b.b)("h1",{id:"-\u6838\u5fc3\u8bbe\u8ba1"},"\ud83d\udca1 \u6838\u5fc3\u8bbe\u8ba1"),Object(b.b)("h2",{id:"\u591a\u7ebf\u7a0bgo\u7a0b\u7f51\u7edc\u6a21\u578b"},"\u591a\u7ebf\u7a0b/Go\u7a0b\u7f51\u7edc\u6a21\u578b"),Object(b.b)("h3",{id:"\u4e3b\u4ece\u591a-reactors"},"\u4e3b\u4ece\u591a Reactors"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u91cd\u65b0\u8bbe\u8ba1\u5f00\u53d1\u4e86\u4e00\u4e2a\u65b0\u5185\u7f6e\u7684\u591a\u7ebf\u7a0b/Go\u7a0b\u7f51\u7edc\u6a21\u578b\uff1a\u300e\u4e3b\u4ece\u591a Reactors\u300f\uff0c\u8fd9\u4e5f\u662f ",Object(b.b)("inlineCode",{parentName:"p"},"netty")," \u9ed8\u8ba4\u7684\u591a\u7ebf\u7a0b\u7f51\u7edc\u6a21\u578b\uff0c\u4e0b\u9762\u662f\u8fd9\u4e2a\u6a21\u578b\u7684\u539f\u7406\u56fe\uff1a"),Object(b.b)("p",{align:"center"},Object(b.b)("img",{alt:"multi_reactor",src:"https://raw.githubusercontent.com/panjf2000/illustrations/master/go/multi-reactors.png"})),Object(b.b)("p",null,"\u5b83\u7684\u8fd0\u884c\u6d41\u7a0b\u5982\u4e0b\u9762\u7684\u65f6\u5e8f\u56fe\uff1a"),Object(b.b)("p",{align:"center"},Object(b.b)("img",{alt:"reactor",src:"https://raw.githubusercontent.com/panjf2000/illustrations/master/go/multi-reactors-sequence-diagram.png"})),Object(b.b)("h3",{id:"\u4e3b\u4ece\u591a-reactors--\u7ebf\u7a0bgo\u7a0b\u6c60"},"\u4e3b\u4ece\u591a Reactors + \u7ebf\u7a0b/Go\u7a0b\u6c60"),Object(b.b)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u95ee\u4e00\u4e2a\u95ee\u9898\uff1a\u5982\u679c\u6211\u7684\u4e1a\u52a1\u903b\u8f91\u662f\u963b\u585e\u7684\uff0c\u90a3\u4e48\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"EventHandler.React")," \u6ce8\u518c\u65b9\u6cd5\u91cc\u7684\u903b\u8f91\u4e5f\u4f1a\u963b\u585e\uff0c\u4ece\u800c\u5bfc\u81f4\u963b\u585e event-loop \u7ebf\u7a0b\uff0c\u8fd9\u65f6\u5019\u600e\u4e48\u529e\uff1f"),Object(b.b)("p",null,"\u6b63\u5982\u4f60\u6240\u77e5\uff0c\u57fa\u4e8e ",Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u7f16\u5199\u4f60\u7684\u7f51\u7edc\u670d\u52a1\u5668\u6709\u4e00\u6761\u6700\u91cd\u8981\u7684\u539f\u5219\uff1a\u6c38\u8fdc\u4e0d\u80fd\u8ba9\u4f60\u4e1a\u52a1\u903b\u8f91\uff08\u4e00\u822c\u5199\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"EventHandler.React")," \u91cc\uff09\u963b\u585e event-loop \u7ebf\u7a0b\uff0c\u8fd9\u4e5f\u662f ",Object(b.b)("inlineCode",{parentName:"p"},"netty")," \u7684\u4e00\u6761\u6700\u91cd\u8981\u7684\u539f\u5219\uff0c\u5426\u5219\u7684\u8bdd\u5c06\u4f1a\u6781\u5927\u5730\u964d\u4f4e\u670d\u52a1\u5668\u7684\u541e\u5410\u91cf\u3002"),Object(b.b)("p",null,"\u6211\u7684\u56de\u7b54\u662f\uff0c\u57fa\u4e8e",Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u7684\u53e6\u4e00\u79cd\u591a\u7ebf\u7a0b/Go\u7a0b\u7f51\u7edc\u6a21\u578b\uff1a\u300e\u5e26\u7ebf\u7a0b/Go\u7a0b\u6c60\u7684\u4e3b\u4ece\u591a Reactors\u300f\u53ef\u4ee5\u89e3\u51b3\u963b\u585e\u95ee\u9898\uff0c\u8fd9\u4e2a\u65b0\u7f51\u7edc\u6a21\u578b\u901a\u8fc7\u5f15\u5165\u4e00\u4e2a worker pool \u6765\u89e3\u51b3\u4e1a\u52a1\u903b\u8f91\u963b\u585e\u7684\u95ee\u9898\uff1a\u5b83\u4f1a\u5728\u542f\u52a8\u7684\u65f6\u5019\u521d\u59cb\u5316\u4e00\u4e2a worker pool\uff0c\u7136\u540e\u5728\u628a ",Object(b.b)("inlineCode",{parentName:"p"},"EventHandler.React"),"\u91cc\u9762\u7684\u963b\u585e\u4ee3\u7801\u653e\u5230 worker pool \u91cc\u6267\u884c\uff0c\u4ece\u800c\u907f\u514d\u963b\u585e event-loop \u7ebf\u7a0b\u3002"),Object(b.b)("p",null,"\u6a21\u578b\u7684\u67b6\u6784\u56fe\u5982\u4e0b\u6240\u793a\uff1a"),Object(b.b)("p",{align:"center"},Object(b.b)("img",{alt:"multi_reactor_thread_pool",src:"https://raw.githubusercontent.com/panjf2000/illustrations/master/go/multi-reactors%2Bthread-pool.png"})),Object(b.b)("p",null,"\u5b83\u7684\u8fd0\u884c\u6d41\u7a0b\u5982\u4e0b\u9762\u7684\u65f6\u5e8f\u56fe\uff1a"),Object(b.b)("p",{align:"center"},Object(b.b)("img",{alt:"multi-reactors",src:"https://raw.githubusercontent.com/panjf2000/illustrations/master/go/multi-reactors%2Bthread-pool-sequence-diagram.png"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u901a\u8fc7\u5229\u7528 ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/panjf2000/ants"}),"ants")," goroutine \u6c60\uff08\u4e00\u4e2a\u57fa\u4e8e Go \u5f00\u53d1\u7684\u9ad8\u6027\u80fd\u7684 goroutine \u6c60 \uff0c\u5b9e\u73b0\u4e86\u5bf9\u5927\u89c4\u6a21 goroutines \u7684\u8c03\u5ea6\u7ba1\u7406\u3001goroutines \u590d\u7528\uff09\u6765\u5b9e\u73b0\u300e\u4e3b\u4ece\u591a Reactors + \u7ebf\u7a0b/Go\u7a0b\u6c60\u300f\u7f51\u7edc\u6a21\u578b\u3002\u5173\u4e8e ",Object(b.b)("inlineCode",{parentName:"p"},"ants")," \u7684\u5168\u90e8\u529f\u80fd\u548c\u4f7f\u7528\uff0c\u53ef\u4ee5\u5728 ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://pkg.go.dev/github.com/panjf2000/ants/v2?tab=doc"}),"ants \u6587\u6863")," \u91cc\u627e\u5230\u3002"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u5185\u90e8\u96c6\u6210\u4e86 ",Object(b.b)("inlineCode",{parentName:"p"},"ants")," \u4ee5\u53ca\u63d0\u4f9b\u4e86 ",Object(b.b)("inlineCode",{parentName:"p"},"pool.goroutine.Default()")," \u65b9\u6cd5\u6765\u521d\u59cb\u5316\u4e00\u4e2a ",Object(b.b)("inlineCode",{parentName:"p"},"ants")," goroutine \u6c60\uff0c\u7136\u540e\u4f60\u53ef\u4ee5\u628a ",Object(b.b)("inlineCode",{parentName:"p"},"EventHandler.React")," \u4e2d\u963b\u585e\u7684\u4e1a\u52a1\u903b\u8f91\u63d0\u4ea4\u5230 goroutine \u6c60\u91cc\u6267\u884c\uff0c\u6700\u540e\u5728 goroutine \u6c60\u91cc\u7684\u4ee3\u7801\u8c03\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"gnet.Conn.AsyncWrite([]byte)")," \u65b9\u6cd5\u628a\u5904\u7406\u5b8c\u963b\u585e\u903b\u8f91\u4e4b\u540e\u5f97\u5230\u7684\u8f93\u51fa\u6570\u636e\u5f02\u6b65\u5199\u56de\u5ba2\u6237\u7aef\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u907f\u514d\u963b\u585e event-loop \u7ebf\u7a0b\u3002"),Object(b.b)("p",null,"\u6709\u5173\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u91cc\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"ants")," goroutine \u6c60\u7684\u7ec6\u8282\u53ef\u4ee5\u5230",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#%E5%B8%A6%E9%98%BB%E5%A1%9E%E9%80%BB%E8%BE%91%E7%9A%84-echo-%E6%9C%8D%E5%8A%A1%E5%99%A8"}),"\u8fd9\u91cc"),"\u8fdb\u4e00\u6b65\u4e86\u89e3\u3002"),Object(b.b)("h2",{id:"\u53ef\u91cd\u7528\u4e14\u81ea\u52a8\u6269\u5bb9\u7684-ring-buffer"},"\u53ef\u91cd\u7528\u4e14\u81ea\u52a8\u6269\u5bb9\u7684 Ring-Buffer"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u5185\u7f6e\u4e86inbound \u548c outbound \u4e24\u4e2a buffers\uff0c\u57fa\u4e8e Ring-Buffer \u539f\u7406\u5b9e\u73b0\uff0c\u5206\u522b\u7528\u6765\u7f13\u51b2\u8f93\u5165\u8f93\u51fa\u7684\u7f51\u7edc\u6570\u636e\u4ee5\u53ca\u7ba1\u7406\u5185\u5b58\uff0cgnet \u91cc\u9762\u7684 ring buffer \u80fd\u591f\u91cd\u7528\u5185\u5b58\u4ee5\u53ca\u6309\u9700\u6269\u5bb9\u3002"),Object(b.b)("p",null,"\u5bf9\u4e8e TCP \u534f\u8bae\u7684\u6d41\u6570\u636e\uff0c\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u4e0d\u9700\u8981\u4e1a\u52a1\u65b9\u4e3a\u4e86\u89e3\u6790\u5e94\u7528\u5c42\u534f\u8bae\u800c\u81ea\u5df1\u7ef4\u62a4\u548c\u7ba1\u7406 buffers\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"gnet")," \u4f1a\u66ff\u4e1a\u52a1\u65b9\u5b8c\u6210\u7f13\u51b2\u548c\u7ba1\u7406\u7f51\u7edc\u6570\u636e\u7684\u4efb\u52a1\uff0c\u964d\u4f4e\u4e1a\u52a1\u4ee3\u7801\u7684\u590d\u6742\u6027\u4ee5\u53ca\u964d\u4f4e\u5f00\u53d1\u8005\u7684\u5fc3\u667a\u8d1f\u62c5\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u80fd\u591f\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u903b\u8f91\u800c\u975e\u4e00\u4e9b\u5e95\u5c42\u5b9e\u73b0\u3002"),Object(b.b)("p",{align:"center"},Object(b.b)("img",{src:"https://raw.githubusercontent.com/panjf2000/illustrations/master/go/ring-buffer.gif"})))}p.isMDXComponent=!0},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),c=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,r=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(n),O=a,u=s["".concat(r,".").concat(O)]||s[O]||m[O]||b;return n?c.a.createElement(u,i({ref:t},l,{components:n})):c.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,r=new Array(b);r[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<b;l++)r[l]=n[l];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);