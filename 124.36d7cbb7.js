(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{277:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(272);function r(){var e=Object(n.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_highlight,a=Date.parse(t.date),r=new Date,l=Math.abs(r-a),c=Math.ceil(l/864e5),i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("highlightsViewedAt")||"0"))),c<30&&(!i||i<a)?t:null}function l(){"undefined"!=typeof window&&window.localStorage.setItem("highlightsViewedAt",(new Date).getTime())}},278:function(e,t,a){"use strict";a(287);var n=a(0),r=a.n(n),l=a(288),c=a(276),i=a(1),o=(a(289),a(273)),m=a(290),s=a(275),u=a.n(s),d=a(291),g=a.n(d),h=a(272),b=a(271),f=a.n(b),E=a(131),v=a.n(E),p=function(){return r.a.createElement("span",{className:f()(v.a.toggle,v.a.moon)})},_=function(){return r.a.createElement("span",{className:f()(v.a.toggle,v.a.sun)})},k=function(e){var t=Object(h.a)().isClient;return r.a.createElement(g.a,Object(i.a)({disabled:!t,icons:{checked:r.a.createElement(p,null),unchecked:r.a.createElement(_,null)}},e))},N=a(277),w=a(274),y=a(294),O=a(285),j=a(286),C=a(281),x=a(132),T=a.n(x);function L(e){var t=e.href,a=e.hideIcon,n=e.label,l=e.onClick,c=(e.position,e.right),m=e.to,s=function(e,t){var a={label:e};switch(e.toLowerCase()){case"chat":return a.hideText=1==t,a.icon="message-circle",a;case"community":return a.hideText=1==t,a.icon="users",a;case"github":return a.badge="10.1k",a.hideText=!1,a.icon="github",a;case"highlights":return Object(N.a)()&&(a.badge="new",a.badgeStyle="primary"),a.hideText=1==t,a.icon="gift",a;default:return a}}(n,c)||{},u=Object(w.a)(m);return r.a.createElement(o.a,Object(i.a)({className:f()("navbar__item navbar__link",s.className,{navbar__item__icon_only:s.hideText}),title:s.hideText?n:null,onClick:l},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:u}),!a&&s.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+s.icon})," ",s.iconLabel),!s.hideText&&s.label,s.badge&&r.a.createElement("span",{className:f()("badge","badge--"+(s.badgeStyle||"secondary"))},s.badge))}var S=function(){var e,t=Object(h.a)(),a=t.siteConfig.themeConfig,l=a.navbar,c=(l=void 0===l?{}:l).title,s=l.links,d=void 0===s?[]:s,g=l.hideOnScroll,b=void 0!==g&&g,E=a.disableDarkMode,v=void 0!==E&&E,p=(t.isClient,Object(n.useState)(!1)),_=p[0],N=p[1],w=Object(n.useState)(!1),x=w[0],S=w[1],D=Object(C.a)(),I=D.isDarkTheme,P=D.setLightTheme,M=D.setDarkTheme,A=Object(y.a)(b),B=A.navbarRef,F=A.isNavbarVisible,R=Object(j.a)(),V=R.logoLink,H=R.logoLinkProps,W=R.logoImageUrl,J=R.logoAlt;Object(O.a)(_);var U=Object(n.useCallback)((function(){N(!0)}),[N]),q=Object(n.useCallback)((function(){N(!1)}),[N]),z=Object(n.useCallback)((function(e){return e.target.checked?M():P()}),[P,M]);return r.a.createElement("nav",{ref:B,className:f()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":_},e[T.a.navbarHideable]=b,e[T.a.navbarHidden]=!F,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",to:V},H),null!=W&&r.a.createElement(u.a,{className:"navbar__logo",src:W,alt:J}),null!=c&&r.a.createElement("strong",{className:x?T.a.hideLogoText:""},c)),d.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(L,Object(i.a)({},e,{left:!0,key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},d.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(L,Object(i.a)({},e,{right:!0,key:t}))})),!v&&r.a.createElement(k,{className:T.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:I,onChange:z}),r.a.createElement(m.a,{handleSearchBarToggle:S,isSearchBarExpanded:x}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:q}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",onClick:q,to:V},H),null!=W&&r.a.createElement(u.a,{className:"navbar__logo",src:W,alt:J}),null!=c&&r.a.createElement("strong",null,c)),!v&&_&&r.a.createElement(k,{"aria-label":"Dark mode toggle in sidebar",checked:I,onChange:z})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(L,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:q})))})))))))},D=a(9);a(133);var I=function(e){var t,a=e.block,n=e.buttonClass,l=e.center,c=e.description,i=e.size,o=e.width;return r.a.createElement("div",{className:f()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":l},t["mailing-list--"+i]=i,t))},!1!==c&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://app.getvero.com/forms/a748ded7ce0da69e6042fa1e21042506",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:f()("input","input--"+i),name:"email",placeholder:"you@email.com",type:"email",style:{width:o}}),r.a.createElement("button",{className:f()("button","button--"+(n||"primary"),"button--"+i),type:"submit"},"Subscribe")))},P=a(134),M=a.n(P);function A(e){var t=e.to,a=e.href,n=e.label,l=Object(D.a)(e,["to","href","label"]),c=Object(w.a)(t);return r.a.createElement(o.a,Object(i.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},l),n)}var B=function(e){var t=e.url,a=e.alt;return r.a.createElement(u.a,{className:"footer__logo",alt:a,src:t})};var F=function(){var e=Object(h.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,c=n.links,i=void 0===c?[]:c,o=n.logo,m=void 0===o?{}:o,s=Object(w.a)(m.src);return a?r.a.createElement("footer",{className:f()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(u.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"gnet",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(I,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/panjf2000",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"gnet's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"gnet's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://strikefreedom.top/rss.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"gnet's RSS feed"})))),i.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(A,e))}))):null)}))),(m||l)&&r.a.createElement("div",{className:"text--center"},m&&m.src&&r.a.createElement("div",{className:"margin-bottom--sm"},m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:M.a.footerLogoLink},r.a.createElement(B,{alt:m.alt,url:s})):r.a.createElement(B,{alt:m.alt,url:s}),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.digitalocean.com/",target:"_blank",rel:"noopener noreferrer",className:M.a.footerLogoLink},r.a.createElement("img",{alt:"DigitalOcean",src:"https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_blue.svg",width:"201px"}))),l,r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/security/policy"},"Security Policy"),"\xa0\u2022\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/blob/master/PRIVACY.md"},"Privacy Policy"))))):null},R=a(295),V=a(296),H=a(3);a(135);t.a=function(e){var t=Object(h.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=(a.tagline,a.title),o=a.themeConfig.image,m=a.url,s=e.children,u=e.title,d=e.noFooter,g=e.description,b=e.image,f=e.keywords,E=(e.permalink,e.version),v=u?u+" | "+i:i,p=b||o,_=m+Object(w.a)(p),k=Object(w.a)(n),N=Object(H.h)(),y=N?"https://gnet.host"+(N.pathname.endsWith("/")?N.pathname:N.pathname+"/"):null;return r.a.createElement(V.a,null,r.a.createElement(R.a,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),v&&r.a.createElement("title",null,v),v&&r.a.createElement("meta",{property:"og:title",content:v}),n&&r.a.createElement("link",{rel:"shortcut icon",href:k}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),f&&f.length&&r.a.createElement("meta",{name:"keywords",content:f.join(",")}),p&&r.a.createElement("meta",{property:"og:image",content:_}),p&&r.a.createElement("meta",{property:"twitter:image",content:_}),p&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),p&&r.a.createElement("meta",{name:"twitter:site",content:"@vectordotdev"}),p&&r.a.createElement("meta",{name:"twitter:creator",content:"@vectordotdev"}),y&&r.a.createElement("meta",{property:"og:url",content:y}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),y&&r.a.createElement("link",{rel:"canonical",href:y})),r.a.createElement(l.a,null),r.a.createElement(S,null),r.a.createElement("div",{className:"main-wrapper"},s),!d&&r.a.createElement(F,null)))}},352:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(278);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);