(window.webpackJsonp=window.webpackJsonp||[]).push([[8,45],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(116),l=t(24),i=t(30),o=t(132),s=t(3),u=t(7),m=t(114),b=t(120),d=t(171),h=t(130),v=t(131),f=t(176),p=t(117),g=t(125),E=t(127),O=t(71),j=t.n(O),k=function(e){var a=Object(l.default)().isClient,t=Object(E.a)().isDarkTheme,n=e.sources,c=e.className,i=e.alt,o=void 0===i?"":i,b=Object(u.a)(e,["sources","className","alt"]),d=a?t?["dark"]:["light"]:["light","dark"];return r.a.createElement(r.a.Fragment,null,d.map((function(e){return r.a.createElement("img",Object(s.a)({key:e,src:n[e],alt:o,className:Object(m.a)(j.a.themedImage,j.a["themedImage--"+e],c)},b))})))},_=t(118),N=function(e){var a=Object(l.default)().isClient,t=Object(b.useThemeConfig)().navbar,n=t.title,c=t.logo,i=void 0===c?{}:c,o=e.imageClassName,m=e.titleClassName,d=Object(u.a)(e,["imageClassName","titleClassName"]),h=Object(_.a)(i.href||"/"),v=i.target?{target:i.target}:Object(g.a)(h)?{}:{rel:"noopener noreferrer",target:"_blank"},f={light:Object(_.a)(i.src),dark:Object(_.a)(i.srcDark||i.src)};return r.a.createElement(p.a,Object(s.a)({to:h},d,v),i.src&&r.a.createElement(k,{key:a,className:o,sources:f,alt:i.alt||n||"Logo"}),null!=n&&r.a.createElement("strong",{className:m},n))},C=t(72),w=t.n(C);var y=function e(a,t){return"link"===a.type?Object(b.isSamePath)(a.href,t):"category"===a.type&&a.items.some((function(a){return e(a,t)}))};function S(e){var a,t,c,l=e.item,i=e.onItemClick,o=e.collapsible,b=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=l.items,v=l.label,f=y(l,b),p=(t=f,c=Object(n.useRef)(t),Object(n.useEffect)((function(){c.current=t}),[t]),c.current),g=Object(n.useState)((function(){return!!o&&(!f&&l.collapsed)})),E=g[0],O=g[1],j=Object(n.useRef)(null),k=Object(n.useState)(void 0),_=k[0],N=k[1],C=function(e){var a;void 0===e&&(e=!0),N(e?(null===(a=j.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){f&&!p&&E&&O(!1)}),[f,p,E]);var S=Object(n.useCallback)((function(e){e.preventDefault(),_||C(),setTimeout((function(){return O((function(e){return!e}))}),100)}),[_]);return 0===h.length?null:r.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":E}),key:v},r.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(a={"menu__link--sublist":o,"menu__link--active":o&&f},a[w.a.menuLinkText]=!o,a)),onClick:o?S:void 0,href:o?"#!":void 0},d),v),r.a.createElement("ul",{className:"menu__list",ref:j,style:{height:_},onTransitionEnd:function(){E||C(!1)}},h.map((function(e){return r.a.createElement(x,{tabIndex:E?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:o,activePath:b})}))))}function M(e){var a=e.item,t=e.onItemClick,n=e.activePath,c=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=a.href,i=a.label,o=y(a,n);return r.a.createElement("li",{className:"menu__list-item",key:i},r.a.createElement(p.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:l},Object(g.a)(l)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},c),i))}function x(e){switch(e.item.type){case"category":return r.a.createElement(S,e);case"link":default:return r.a.createElement(M,e)}}var I=function(e){var a,t,c=e.path,l=e.sidebar,i=e.sidebarCollapsible,o=void 0===i||i,s=e.onCollapse,u=e.isHidden,p=Object(n.useState)(!1),g=p[0],E=p[1],O=Object(b.useThemeConfig)(),j=O.navbar.hideOnScroll,k=O.hideableSidebar,_=Object(d.a)().isAnnouncementBarClosed,C=Object(f.a)().scrollY;Object(h.a)(g);var y=Object(v.a)();return Object(n.useEffect)((function(){y===v.b.desktop&&E(!1)}),[y]),r.a.createElement("div",{className:Object(m.a)(w.a.sidebar,(a={},a[w.a.sidebarWithHideableNavbar]=j,a[w.a.sidebarHidden]=u,a))},j&&r.a.createElement(N,{tabIndex:-1,className:w.a.sidebarLogo}),r.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",w.a.menu,(t={"menu--show":g},t[w.a.menuWithAnnouncementBar]=!_&&0===C,t))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){E(!g)}},g?r.a.createElement("span",{className:Object(m.a)(w.a.sidebarMenuIcon,w.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:w.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(x,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),E(!1)},collapsible:o,activePath:c})})))),k&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(m.a)("button button--secondary button--outline",w.a.collapseSidebarButton),onClick:s}))},T=t(153),L=t(170),P=t(122),B=t(78),D=t.n(B);function z(e){var a,t,i,s,u=e.currentDocRoute,d=e.versionMetadata,h=e.children,v=Object(l.default)(),f=v.siteConfig,p=v.isClient,g=d.pluginId,E=d.permalinkToSidebar,O=d.docsSidebars,j=d.version,k=E[u.path],_=O[k],N=Object(n.useState)(!1),C=N[0],w=N[1],y=Object(n.useState)(!1),S=y[0],M=y[1],x=Object(n.useCallback)((function(){S&&M(!1),w(!C)}),[S]);return r.a.createElement(o.a,{key:p,searchMetadatas:{version:j,tag:Object(b.docVersionSearchTag)(g,j)}},r.a.createElement("div",{className:D.a.docPage},_&&r.a.createElement("div",{className:Object(m.a)(D.a.docSidebarContainer,(a={},a[D.a.docSidebarContainerHidden]=C,a)),onTransitionEnd:function(e){e.currentTarget.classList.contains(D.a.docSidebarContainer)&&C&&M(!0)},role:"complementary"},r.a.createElement(I,{key:k,sidebar:_,path:u.path,sidebarCollapsible:null===(t=null===(i=f.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===t||t,onCollapse:x,isHidden:S}),S&&r.a.createElement("div",{className:D.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:x,onClick:x})),r.a.createElement("main",{className:D.a.docMainContainer},r.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",D.a.docItemWrapper,(s={},s[D.a.docItemWrapperEnhanced]=C,s))},r.a.createElement(c.a,{components:T.a},h)))))}a.default=function(e){var a=e.route.routes,t=e.versionMetadata,n=e.location,c=a.find((function(e){return Object(P.matchPath)(n.pathname,e)}));return c?r.a.createElement(z,{currentDocRoute:c,versionMetadata:t},Object(i.a)(a)):r.a.createElement(L.default,e)}},139:function(e,a,t){"use strict";var n=t(3),r=t(0),c=t.n(r),l=t(114),i=t(115),o=t(118),s=t(117),u=t(24),m=t(119),b=t.n(m),d=t(122),h=function(e){var a=Object(r.useRef)(!1),n=Object(r.useRef)(null),l=Object(d.useHistory)(),i=Object(u.default)().siteConfig,o=(void 0===i?{}:i).baseUrl,s=function(){a.current||(Promise.all([fetch(o+"search-doc.json").then((function(e){return e.json()})),fetch(o+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(41),t.e(46)]).then(t.bind(null,261)),t.e(28).then(t.t.bind(null,260,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=o+t.url;document.createElement("a").href=n,l.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},m=Object(r.useCallback)((function(a){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("input",{id:"search_input_react",type:"search","aria-label":"Search",className:b()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:s,onMouseOver:s,onFocus:m,onBlur:m,ref:n}))},v=t(127),f=t(135),p=t(130),g=t(131),E=t(140),O=t(136),j=function(e){return c.a.createElement("svg",Object(n.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),c.a.createElement("title",null,"W. W. Norton & Company"),c.a.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))},k=t(57),_=t.n(k),N="right";a.a=function(){var e,a,t=Object(u.default)().siteConfig.themeConfig,m=t.navbar,b=(m=void 0===m?{}:m).title,d=void 0===b?"":b,k=m.items,C=void 0===k?[]:k,w=m.hideOnScroll,y=void 0!==w&&w,S=t.colorMode,M=(S=void 0===S?{}:S).disableSwitch,x=void 0!==M&&M,I=Object(r.useState)(!1),T=I[0],L=I[1],P=Object(r.useState)(!1),B=P[0],D=P[1],z=Object(v.a)(),H=z.setLightTheme,R=z.setDarkTheme,W=Object(i.useColorScheme)(),V=W.isDark,A=W.setLight,F=W.setDark,J=Object(f.a)(y),K=J.navbarRef,U=J.isNavbarVisible,Y=Object(E.a)(),q=Y.logoLink,G=Y.logoLinkProps;Object(p.a)(T);var Q=Object(r.useCallback)((function(){L(!0)}),[L]),X=Object(r.useCallback)((function(){L(!1)}),[L]),Z=Object(r.useCallback)((function(e){e?F():A()}),[A,F]);Object(r.useLayoutEffect)((function(){V?R():H()}),[V,R,H]);var $=Object(g.a)();Object(r.useEffect)((function(){$===g.b.desktop&&L(!1)}),[$]);var ee=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:N)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:N)}))}}(C),ae=ee.leftItems,te=ee.rightItems;return c.a.createElement("nav",{ref:K,className:Object(l.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":T},e[_.a.navbarHideable]=y,e[_.a.navbarHidden]=!U,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=C&&0!==C.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Q,onKeyDown:Q},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(s.a,Object(n.a)({className:"navbar__brand",to:q},G),c.a.createElement(j,{className:"navbar__logo"}),null!=d&&c.a.createElement("strong",{className:Object(l.a)("navbar__title",(a={},a[_.a.hideLogoText]=B,a))},d)),ae.map((function(e,a){return c.a.createElement(O.a,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},c.a.createElement(O.a,{href:Object(o.a)("sassdoc"),label:"Sassdoc"}),c.a.createElement(O.a,{href:Object(o.a)("storybook"),label:"Storybook"}),te.map((function(e,a){return c.a.createElement(O.a,Object(n.a)({},e,{key:a}))})),!x&&c.a.createElement(i.Switch,{className:_.a.displayOnlyInLargeViewport,label:"Dark mode toggle",checked:V,onToggle:Z,tipped:!0},c.a.createElement(i.Icon,{icon:{d:V?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:V?void 0:"var(--nds-yellow-50)"})),c.a.createElement(h,{handleSearchBarToggle:D,isSearchBarExpanded:B}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:X}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(s.a,Object(n.a)({className:"navbar__brand",onClick:X,to:q},G),c.a.createElement(j,{className:"navbar__logo"}),null!=d&&c.a.createElement("strong",{className:"navbar__title"},d)),!x&&T&&c.a.createElement(i.Switch,{label:"Dark mode toggle in sidebar",checked:V,onToggle:Z,tipped:!0})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},C.map((function(e,a){return c.a.createElement(O.a,Object(n.a)({mobile:!0},e,{onClick:X,key:a}))})))))))}},152:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(115),l=Object.assign({React:r.a},c,r.a);a.a=l},170:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(132);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);