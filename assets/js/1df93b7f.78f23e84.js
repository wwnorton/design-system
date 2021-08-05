(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{132:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),c=t.n(l),i=t(194),s=t(13),o=t(284),m=t.n(o),u=t(211),h=t(212);a.default=function(){var e=Object(s.default)().siteConfig,a=void 0===e?{}:e;return r.a.createElement(i.a,{title:a.title,description:a.description},r.a.createElement("header",{className:m.a.hero},r.a.createElement("div",{className:m.a.hero__container},r.a.createElement("h1",{className:m.a.hero__title},"The"," ",a.title),r.a.createElement("p",{className:m.a.hero__subtitle},a.tagline),r.a.createElement("div",{className:m.a.hero__image},r.a.createElement(h.a,null)))),r.a.createElement("main",null,r.a.createElement("section",{className:c()("container",m.a.section)},r.a.createElement(u.c,{basePath:"/docs/"},r.a.createElement(u.a,{title:"Foundations",slug:"foundations",linkArrow:!0},"Guidelines for using visual elements and interaction patterns with the Norton Design System."),r.a.createElement(u.a,{title:"Components",slug:"components",linkArrow:!0},"The building blocks for composing applications and content with the Norton Design System."),r.a.createElement(u.a,{title:"Guides",slug:"guides",linkArrow:!0},"Tutorials and examples to help designers, developers, and editors learn how get the most out of the Norton Design System.")))))}},187:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(2),c=t.n(l),i=t(20),s=t(13),o=t(56);a.a=function(e){var a=Object(n.useRef)(!1),l=Object(n.useRef)(null),m=Object(i.useHistory)(),u=Object(s.default)().siteConfig,h=(void 0===u?{}:u).baseUrl,d=Object(o.usePluginData)("docusaurus-lunr-search"),b=function(){a.current||(Promise.all([fetch(""+h+d.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+h+d.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(56),t.e(59)]).then(t.bind(null,199)),t.e(1).then(t.t.bind(null,105,7))]).then((function(e){var a=e[0],t=e[1],n=e[2].default;0!==a.length&&function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=h+t.url;document.createElement("a").href=n,m.push(n)}})}(a,t,n)})),a.current=!0)},v=Object(n.useCallback)((function(a){e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("input",{id:"search_input_react",type:"search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:b,onMouseOver:b,onFocus:v,onBlur:v,ref:l}))}},195:function(e,a,t){"use strict";var n=t(6),r=t(0),l=t.n(r),c=t(184),i=t(29),s=t(187),o=t(188),m=t(38),u=t(196),h=t(190),d=t(191),b=t(200),v=t(192),_=t(193),f=t(104),p=t.n(f),g="right";a.a=function(){var e,a=Object(m.useThemeConfig)(),t=a.navbar,f=t.items,E=t.hideOnScroll,N=t.style,k=a.colorMode.disableSwitch,O=Object(r.useState)(!1),j=O[0],w=O[1],y=Object(o.a)(),S=y.setLightTheme,z=y.setDarkTheme,C=Object(u.a)(E),x=C.navbarRef,I=C.isNavbarVisible;Object(h.a)(j);var T=Object(r.useCallback)((function(){w(!0)}),[w]),D=Object(r.useCallback)((function(){w(!1)}),[w]),M=Object(i.useTheme)(),V=M.colorScheme,B=M.setColorScheme,H="dark"===V,P=function(e){B(e?"dark":"light")};Object(r.useEffect)((function(){H?z():S()}),[H,z,S]);var A=Object(d.a)();Object(r.useEffect)((function(){A===d.b.desktop&&w(!1)}),[A]);var L=f.some((function(e){return"search"===e.type})),R=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:g)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:g)}))}}(f),F=R.leftItems,G=R.rightItems;return l.a.createElement("nav",{ref:x,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===N,"navbar--primary":"primary"===N,"navbar-sidebar--show":j},e[p.a.navbarHideable]=E,e[p.a.navbarHidden]=E&&!I,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=f&&0!==f.length&&l.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:T,onKeyDown:T},l.a.createElement(_.a,null)),l.a.createElement(v.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),F.map((function(e,a){return l.a.createElement(b.a,Object(n.a)({},e,{key:a}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},G.map((function(e,a){return l.a.createElement(b.a,Object(n.a)({},e,{key:a}))})),!k&&l.a.createElement(i.Switch,{className:p.a.displayOnlyInLargeViewport,label:"Dark mode",checked:H,onToggle:P,tipped:!0},l.a.createElement(i.Icon,{icon:{d:H?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:H?void 0:"var(--nds-yellow-50)"})),!L&&l.a.createElement(s.a,null))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:D}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(v.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:D}),!k&&j&&l.a.createElement(i.Switch,{className:p.a.displayOnlyInLargeViewport,label:"Dark mode",checked:H,onToggle:P,tipped:!0},l.a.createElement(i.Icon,{icon:{d:H?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:H?void 0:"var(--nds-yellow-50)"}))),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},f.map((function(e,a){return l.a.createElement(b.a,Object(n.a)({mobile:!0},e,{onClick:D,key:a}))})))))))}},284:function(e,a,t){e.exports={section:"section_1n0q",hero:"hero_35xB",hero__container:"hero__container_1Q6l",hero__title:"hero__title_1It1",hero__subtitle:"hero__subtitle_-7oI",hero__image:"hero__image_3d0b"}}}]);