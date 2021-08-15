"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{3039:function(e,a,n){n.r(a),n.d(a,{default:function(){return g}});var t=n(7378),r=n(42),l=n.n(r),i=n(3895),s=n(9939),o="section_1n0q",c="hero_35xB",m="hero__container_1Q6l",u="hero__title_1It1",d="hero__subtitle_-7oI",b="hero__image_3d0b",h=n(8110),v=n(3816),g=function(){var e=(0,s.Z)().siteConfig,a=void 0===e?{}:e;return t.createElement(i.Z,{title:a.title,description:a.description},t.createElement("header",{className:c},t.createElement("div",{className:m},t.createElement("h1",{className:u},"The"," ",a.title),t.createElement("p",{className:d},a.tagline),t.createElement("div",{className:b},t.createElement(v.u,null)))),t.createElement("main",null,t.createElement("section",{className:l()("container",o)},t.createElement(h.AN,{basePath:"/docs/"},t.createElement(h.TT,{title:"Foundations",slug:"foundations",linkArrow:!0},"Guidelines for using visual elements and interaction patterns with the Norton Design System."),t.createElement(h.TT,{title:"Components",slug:"components",linkArrow:!0},"The building blocks for composing applications and content with the Norton Design System."),t.createElement(h.TT,{title:"Guides",slug:"guides",linkArrow:!0},"Tutorials and examples to help designers, developers, and editors learn how get the most out of the Norton Design System.")))))}},5318:function(e,a,n){n.d(a,{Z:function(){return y}});var t=n(5773),r=n(9276),l=n(7378),i=n(8944),s=n(3128),o=n(4667),c=n(6698),m=n(9575),u=n(4910),d=n(2758),b=n(5006),h=n(3120),v=n(2889),g=n(4532),f="toggle_2xs0",_="navbarHideable_1VR7",E="navbarHidden_1FmO",p="right",k=function(e){var a=e.checked,n=e.onChange;return l.createElement(r.Switch,{label:"Dark mode",checked:a,onToggle:n,tipped:!0},l.createElement(r.Icon,{icon:{d:a?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:a?void 0:"var(--nds-yellow-50)"}))};function N(){return(0,m.LU)().navbar.items}function S(){var e=(0,m.LU)().colorMode.disableSwitch,a=(0,c.Z)(),n=a.setLightTheme,t=a.setDarkTheme,i=(0,r.useTheme)(),s=i.colorScheme,o=i.setColorScheme;return(0,l.useEffect)((function(){"dark"===s?t():n()}),[s]),{isDarkTheme:"dark"===s,toggle:function(e){o(e?"dark":"light")},disabled:e}}function w(e){var a=e.sidebarShown,n=e.toggleSidebar;(0,d.Z)(a);var r=N(),o=S(),c=function(e){var a,n=e.sidebarShown,t=e.toggleSidebar,r=null==(a=(0,m.g8)())?void 0:a({toggleSidebar:t}),i=(0,m.D9)(r),s=(0,l.useState)((function(){return!1})),o=s[0],c=s[1];(0,l.useEffect)((function(){r&&!i&&c(!0)}),[r,i]);var u=!!r;return(0,l.useEffect)((function(){u?n||c(!0):c(!1)}),[n,u]),{shown:o,hide:(0,l.useCallback)((function(){c(!1)}),[]),content:r}}({sidebarShown:a,toggleSidebar:n});return l.createElement("div",{className:"navbar-sidebar"},l.createElement("div",{className:"navbar-sidebar__brand"},l.createElement(v.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!o.disabled&&a&&l.createElement(k,{checked:o.isDarkTheme,onChange:o.toggle})),l.createElement("div",{className:(0,i.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":c.shown})},l.createElement("div",{className:"navbar-sidebar__item menu"},l.createElement("ul",{className:"menu__list"},r.map((function(e,a){return l.createElement(h.Z,(0,t.Z)({mobile:!0},e,{onClick:n,key:a}))})))),l.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:c.hide},l.createElement(s.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),c.content)))}var y=function(){var e,a,n,r,s,c,d,y=(0,m.LU)().navbar,Z=y.hideOnScroll,C=y.style,T=(a=(0,b.Z)(),n="mobile"===a,r=(0,l.useState)(!1),s=r[0],c=r[1],d=(0,l.useCallback)((function(){c((function(e){return!e}))}),[]),(0,l.useEffect)((function(){"desktop"===a&&c(!1)}),[a]),{shouldRender:n,toggle:d,shown:s}),x=S(),D=(0,u.Z)(Z),z=D.navbarRef,B=D.isNavbarVisible,I=N(),M=I.some((function(e){return"search"===e.type})),R=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!=(a=e.position)?a:p)})),rightItems:e.filter((function(e){var a;return"right"===(null!=(a=e.position)?a:p)}))}}(I),L=R.leftItems,P=R.rightItems;return l.createElement("nav",{ref:z,className:(0,i.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===C,"navbar--primary":"primary"===C,"navbar-sidebar--show":T.shown},e[_]=Z,e[E]=Z&&!B,e))},l.createElement("div",{className:"navbar__inner"},l.createElement("div",{className:"navbar__items"},(null==I?void 0:I.length)>0&&l.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:T.toggle,onKeyDown:T.toggle},l.createElement(g.Z,null)),l.createElement(v.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),L.map((function(e,a){return l.createElement(h.Z,(0,t.Z)({},e,{key:a}))}))),l.createElement("div",{className:"navbar__items navbar__items--right"},P.map((function(e,a){return l.createElement(h.Z,(0,t.Z)({},e,{key:a}))})),!x.disabled&&l.createElement(k,{className:f,checked:x.isDarkTheme,onChange:x.toggle}),!M&&l.createElement(o.Z,null))),l.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:T.toggle}),T.shouldRender&&l.createElement(w,{sidebarShown:T.shown,toggleSidebar:T.toggle}))}},4667:function(e,a,n){var t=n(7378),r=n(42),l=n.n(r),i=n(9635),s=n(9939),o=n(353);a.Z=function(e){var a=(0,t.useRef)(!1),r=(0,t.useRef)(null),c=(0,i.k6)(),m=(0,s.Z)().siteConfig,u=(void 0===m?{}:m).baseUrl,d=(0,o.usePluginData)("docusaurus-lunr-search"),b=function(){a.current||(Promise.all([fetch(""+u+d.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+u+d.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(9734),n.e(4901)]).then(n.bind(n,6264)),Promise.all([n.e(532),n.e(8448)]).then(n.bind(n,8448))]).then((function(e){var a=e[0],n=e[1],t=e[2].default;0!==a.length&&function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var t=u+n.url;document.createElement("a").href=t,c.push(t)}})}(a,n,t)})),a.current=!0)},h=(0,t.useCallback)((function(a){e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return t.createElement("div",{className:"navbar__search",key:"search-box"},t.createElement("input",{id:"search_input_react",type:"search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:b,onMouseOver:b,onFocus:h,onBlur:h,ref:r}))}}}]);