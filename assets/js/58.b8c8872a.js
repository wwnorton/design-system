(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{187:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(2),c=t.n(l),i=t(20),o=t(13),s=t(56);a.a=function(e){var a=Object(n.useRef)(!1),l=Object(n.useRef)(null),m=Object(i.useHistory)(),u=Object(o.default)().siteConfig,d=(void 0===u?{}:u).baseUrl,h=Object(s.usePluginData)("docusaurus-lunr-search"),b=function(){a.current||(Promise.all([fetch(""+d+h.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+d+h.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(56),t.e(59)]).then(t.bind(null,199)),t.e(1).then(t.t.bind(null,105,7))]).then((function(e){var a=e[0],t=e[1],n=e[2].default;0!==a.length&&function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=d+t.url;document.createElement("a").href=n,m.push(n)}})}(a,t,n)})),a.current=!0)},v=Object(n.useCallback)((function(a){e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("input",{id:"search_input_react",type:"search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:b,onMouseOver:b,onFocus:v,onBlur:v,ref:l}))}},195:function(e,a,t){"use strict";var n=t(6),r=t(0),l=t.n(r),c=t(184),i=t(29),o=t(187),s=t(188),m=t(38),u=t(196),d=t(190),h=t(191),b=t(200),v=t(192),f=t(193),p=t(104),g=t.n(p),E="right";a.a=function(){var e,a=Object(m.useThemeConfig)(),t=a.navbar,p=t.items,_=t.hideOnScroll,N=t.style,k=a.colorMode.disableSwitch,O=Object(r.useState)(!1),j=O[0],w=O[1],y=Object(s.a)(),z=y.setLightTheme,S=y.setDarkTheme,C=Object(u.a)(_),x=C.navbarRef,I=C.isNavbarVisible;Object(d.a)(j);var T=Object(r.useCallback)((function(){w(!0)}),[w]),M=Object(r.useCallback)((function(){w(!1)}),[w]),V=Object(i.useTheme)(),B=V.colorScheme,D=V.setColorScheme,F="dark"===B,P=function(e){D(e?"dark":"light")};Object(r.useEffect)((function(){F?S():z()}),[F,S,z]);var H=Object(h.a)();Object(r.useEffect)((function(){H===h.b.desktop&&w(!1)}),[H]);var L=p.some((function(e){return"search"===e.type})),R=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:E)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:E)}))}}(p),J=R.leftItems,U=R.rightItems;return l.a.createElement("nav",{ref:x,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===N,"navbar--primary":"primary"===N,"navbar-sidebar--show":j},e[g.a.navbarHideable]=_,e[g.a.navbarHidden]=_&&!I,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=p&&0!==p.length&&l.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:T,onKeyDown:T},l.a.createElement(f.a,null)),l.a.createElement(v.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),J.map((function(e,a){return l.a.createElement(b.a,Object(n.a)({},e,{key:a}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},U.map((function(e,a){return l.a.createElement(b.a,Object(n.a)({},e,{key:a}))})),!k&&l.a.createElement(i.Switch,{className:g.a.displayOnlyInLargeViewport,label:"Dark mode",checked:F,onToggle:P,tipped:!0},l.a.createElement(i.Icon,{icon:{d:F?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:F?void 0:"var(--nds-yellow-50)"})),!L&&l.a.createElement(o.a,null))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:M}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(v.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:M}),!k&&j&&l.a.createElement(i.Switch,{className:g.a.displayOnlyInLargeViewport,label:"Dark mode",checked:F,onToggle:P,tipped:!0},l.a.createElement(i.Icon,{icon:{d:F?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:F?void 0:"var(--nds-yellow-50)"}))),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},p.map((function(e,a){return l.a.createElement(b.a,Object(n.a)({mobile:!0},e,{onClick:M,key:a}))})))))))}},220:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(194),c=t(185);a.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);