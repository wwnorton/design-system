(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,n){"use strict";var a=n(0),r=n(225);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},157:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},158:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),o=n[0],c=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),o}},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(130),c=n(69),l=n.n(c);var i=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:l.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=n(135),u=n(207),m=n(70),d=n.n(m);var f=function(){var e,t=Object(u.a)(),n=t.isAnnouncementBarClosed,a=t.closeAnnouncementBar,c=Object(s.useThemeConfig)().announcementBar;if(!c)return null;var l=c.content,i=c.backgroundColor,m=c.textColor,f=c.isCloseable;return!l||f&&n?null:r.a.createElement("div",{className:d.a.announcementBar,style:{backgroundColor:i,color:m},role:"banner"},r.a.createElement("div",{className:Object(o.a)(d.a.announcementBarContent,(e={},e[d.a.announcementBarCloseable]=f,e)),dangerouslySetInnerHTML:{__html:l}}),f?r.a.createElement("button",{type:"button",className:d.a.announcementBarClose,onClick:a,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},b=n(201),v=n(3),h=n(7),p=n(134),E=n(133),O=n(72),j=n.n(O);function g(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,c=Object(h.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(E.a)(t),i=Object(E.a)(n,{forcePrependBaseUrl:!0});return r.a.createElement(p.a,Object(v.a)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:o?i:n}:{to:l},c),a)}var k=function(e){var t=e.url,n=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:n,src:t})};var w=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},n=t.copyright,a=t.links,c=void 0===a?[]:a,l=t.logo,i=void 0===l?{}:l,u=Object(E.a)(i.src);return e?r.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},c&&c.length>0&&r.a.createElement("div",{className:"row footer__links"},c.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(g,e))}))):null)}))),(i||n)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:j.a.footerLogoLink},r.a.createElement(k,{alt:i.alt,url:u})):r.a.createElement(k,{alt:i.alt,url:u})),n?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},_=n(12),C="light",N="dark",y=function(e){return e===N?N:C},L=function(){return _.a.canUseDOM?y(document.documentElement.getAttribute("data-theme")):C},S=function(e){try{localStorage.setItem("theme",y(e))}catch(t){console.error(t)}},I=function(){var e=Object(s.useThemeConfig)().colorMode,t=e.disableSwitch,n=e.respectPrefersColorScheme,r=Object(a.useState)(L),o=r[0],c=r[1],l=Object(a.useCallback)((function(){c(C),S(C)}),[]),i=Object(a.useCallback)((function(){c(N),S(N)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",y(o))}),[o]),Object(a.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(y(e))}catch(n){console.error(n)}}),[c]),Object(a.useEffect)((function(){t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?N:C)}))}),[]),{isDarkTheme:o===N,setLightTheme:l,setDarkTheme:i}},D=n(225);var T=function(e){var t=I(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.a.createElement(D.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},B="docusaurus.tab.",A=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith(B))e[a.substring(B.length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},V="docusaurus.announcement.dismiss",P="docusaurus.announcement.id",x=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],o=Object(a.useCallback)((function(){localStorage.setItem(V,"true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(P);"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;localStorage.setItem(P,t),a&&localStorage.setItem(V,"false"),(a||"false"===localStorage.getItem(V))&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}},U=n(208);var H=function(e){var t=A(),n=t.tabGroupChoices,a=t.setTabGroupChoices,o=x(),c=o.isAnnouncementBarClosed,l=o.closeAnnouncementBar;return r.a.createElement(U.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:c,closeAnnouncementBar:l}},e.children)};function R(e){var t=e.children;return r.a.createElement(T,null,r.a.createElement(H,null,r.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}var M=n(27),G=n(24);function F(e){var t=e.locale,n=e.version,a=e.tag;return r.a.createElement(M.a,null,t&&r.a.createElement("meta",{name:"docusaurus_locale",content:""+t}),n&&r.a.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.a.createElement("meta",{name:"docusaurus_tag",content:a}))}function K(e){var t=Object(G.default)(),n=t.siteConfig,a=t.i18n.currentLocale,o=n.favicon,c=n.themeConfig,l=c.image,i=c.metadatas,u=n.url,m=e.title,d=e.description,f=e.image,b=e.keywords,h=e.permalink,p=e.searchMetadatas,O=Object(s.useTitleFormatter)(m),j=f||l,g=Object(E.a)(j,{absolute:!0}),k=Object(E.a)(o),w=a.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement("html",{lang:w}),O&&r.a.createElement("title",null,O),O&&r.a.createElement("meta",{property:"og:title",content:O}),o&&r.a.createElement("link",{rel:"shortcut icon",href:k}),d&&r.a.createElement("meta",{name:"description",content:d}),d&&r.a.createElement("meta",{property:"og:description",content:d}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:g}),j&&r.a.createElement("meta",{name:"twitter:image",content:g}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),h&&r.a.createElement("meta",{property:"og:url",content:u+h}),h&&r.a.createElement("link",{rel:"canonical",href:u+h}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(F,Object(v.a)({tag:s.DEFAULT_SEARCH_TAG,locale:a},p)),r.a.createElement(M.a,null,i.map((function(e,t){return r.a.createElement("meta",Object(v.a)({key:"metadata_"+t},e))}))))}n(73);var W=function(){Object(a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};n(74);t.a=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName;return W(),r.a.createElement(R,null,r.a.createElement(K,e),r.a.createElement(i,null),r.a.createElement(f,null),r.a.createElement(b.a,null),r.a.createElement("div",{className:Object(o.a)("main-wrapper",a)},t),!n&&r.a.createElement(w,null))}},160:function(e,t,n){"use strict";var a=n(3),r=n(7),o=n(0),c=n.n(o),l=n(134),i=n(130),s=n(24),u=n(145),m=n(71),d=n.n(m),f=function(e){var t=Object(s.default)().isClient,n=Object(u.a)().isDarkTheme,o=e.sources,l=e.className,m=e.alt,f=void 0===m?"":m,b=Object(r.a)(e,["sources","className","alt"]),v=t?n?["dark"]:["light"]:["light","dark"];return c.a.createElement(c.a.Fragment,null,v.map((function(e){return c.a.createElement("img",Object(a.a)({key:e,src:o[e],alt:f,className:Object(i.a)(d.a.themedImage,d.a["themedImage--"+e],l)},b))})))},b=n(133),v=n(135),h=n(138);t.a=function(e){var t=Object(s.default)().isClient,n=Object(v.useThemeConfig)().navbar,o=n.title,i=n.logo,u=void 0===i?{src:""}:i,m=e.imageClassName,d=e.titleClassName,p=Object(r.a)(e,["imageClassName","titleClassName"]),E=Object(b.a)(u.href||"/"),O=u.target?{target:u.target}:Object(h.a)(E)?{}:{rel:"noopener noreferrer",target:"_blank"},j={light:Object(b.a)(u.src),dark:Object(b.a)(u.srcDark||u.src)};return c.a.createElement(l.a,Object(a.a)({to:E},p,O),u.src&&c.a.createElement(f,{key:t,className:m,sources:j,alt:u.alt||o||"Logo"}),null!=o&&c.a.createElement("strong",{className:d},o))}},161:function(e,t,n){"use strict";var a=n(0),r=n(144),o=n(226);t.a=function(e){var t=Object(r.useLocation)(),n=Object(a.useState)(!e),c=n[0],l=n[1],i=Object(a.useRef)(!1),s=Object(a.useState)(0),u=s[0],m=s[1],d=Object(a.useState)(0),f=d[0],b=d[1],v=Object(a.useCallback)((function(e){null!==e&&b(e.getBoundingClientRect().height)}),[]);return Object(o.a)((function(t){var n=t.scrollY;if(e&&!(n<f)){if(i.current)return i.current=!1,l(!1),void m(n);u&&0===n&&l(!0);var a=document.documentElement.scrollHeight-f,r=window.innerHeight;u&&n>=u?l(!1):n+r<a&&l(!0),m(n)}}),[u,f,i]),Object(a.useEffect)((function(){e&&u&&l(!0)}),[t.pathname]),Object(a.useEffect)((function(){e&&(i.current=!0)}),[t.hash]),{navbarRef:v,isNavbarVisible:c}}},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(7),r=n(0),o=n.n(r),c=n(203),l=n(3),i=n(24),s=n(144);function u(e){var t=e.mobile,n=Object(a.a)(e,["mobile"]),r=Object(i.default)(),u=r.siteConfig.baseUrl,m=r.i18n,d=m.defaultLocale,f=m.currentLocale,b=m.locales,v=m.localeConfigs,h=Object(s.useLocation)().pathname;function p(e){return v[e].label}var E=f===d?u:u.replace("/"+f+"/","/"),O=h.replace(u,"");var j=b.map((function(e){var t=""+function(e){return e===d?""+E:""+E+e+"/"}(e)+O;return{isNavLink:!0,label:p(e),to:"pathname://"+t,target:"_self",autoAddBaseUrl:!1,className:e===f?"dropdown__link--active":""}})),g=t?"Languages":p(f);return o.a.createElement(c.a,Object(l.a)({},n,{mobile:t,label:g,items:j}))}var m={default:function(){return c.a},localeDropdown:function(){return u},docsVersion:function(){return n(251).default},docsVersionDropdown:function(){return n(252).default},doc:function(){return n(253).default}};function d(e){var t=e.type,n=Object(a.a)(e,["type"]),r=function(e){void 0===e&&(e="default");var t=m[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return o.a.createElement(r,n)}},203:function(e,t,n){"use strict";var a=n(3),r=n(7),o=n(0),c=n.n(o),l=n(130),i=n(134),s=n(133),u=n(144),m=n(135);function d(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,l=e.href,u=e.label,m=e.activeClassName,d=void 0===m?"navbar__link--active":m,f=e.prependBaseUrlToHref,b=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(o),h=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return c.a.createElement(i.a,Object(a.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:f?p:l}:Object.assign({isNavLink:!0,activeClassName:d,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(h)}}:null),b),u)}function f(e){var t=e.items,n=e.position,i=e.className,s=Object(r.a)(e,["items","position","className"]),u=Object(o.useRef)(null),m=Object(o.useRef)(null),f=Object(o.useState)(!1),b=f[0],v=f[1];Object(o.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var h=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?c.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":b})},c.a.createElement(d,Object(a.a)({className:h(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!b))}}),s.label),c.a.createElement("ul",{ref:m,className:"dropdown__menu"},t.map((function(e,n){var o=e.className,l=Object(r.a)(e,["className"]);return c.a.createElement("li",{key:n},c.a.createElement(d,Object(a.a)({onKeyDown:function(e){if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var a=u.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active",className:h(o,!0)},l)))})))):c.a.createElement(d,Object(a.a)({className:h(i)},s))}function b(e){var t,n,i=e.items,s=e.className,f=(e.position,Object(r.a)(e,["items","className","position"])),b=Object(o.useRef)(null),v=Object(u.useLocation)().pathname,h=Object(o.useState)((function(){var e;return null===(e=!(null!=i&&i.some((function(e){return Object(m.isSamePath)(e.to,v)}))))||void 0===e||e})),p=h[0],E=h[1],O=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!i)return c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(d,Object(a.a)({className:O(s)},f)));var j=null!==(t=b.current)&&void 0!==t&&t.scrollHeight?(null===(n=b.current)||void 0===n?void 0:n.scrollHeight)+"px":void 0;return c.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":p})},c.a.createElement(d,Object(a.a)({role:"button",className:O(s,!0)},f,{onClick:function(){E((function(e){return!e}))}}),f.label),c.a.createElement("ul",{className:"menu__list",ref:b,style:{height:p?void 0:j}},i.map((function(e,t){var n=e.className,o=Object(r.a)(e,["className"]);return c.a.createElement("li",{className:"menu__list-item",key:t},c.a.createElement(d,Object(a.a)({activeClassName:"menu__link--active",className:O(n)},o,{onClick:f.onClick})))}))))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(r.a)(e,["mobile"]),o=n?b:f;return c.a.createElement(o,a)}},207:function(e,t,n){"use strict";var a=n(0),r=n(208);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},208:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},225:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},226:function(e,t,n){"use strict";var a=n(0),r=n(12),o=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(o()),r=n[0],c=n[1],l=function(){var t=o();c(t),e&&e(t)};return Object(a.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},251:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=n(0),c=n.n(o),l=n(203),i=n(155),s=n(135);function u(e){var t,n=e.label,o=e.to,u=e.docsPluginId,m=Object(r.a)(e,["label","to","docsPluginId"]),d=Object(i.useActiveVersion)(u),f=Object(s.useDocsPreferredVersion)(u).preferredVersion,b=Object(i.useLatestVersion)(u),v=null!==(t=null!=d?d:f)&&void 0!==t?t:b,h=null!=n?n:v.label,p=null!=o?o:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return c.a.createElement(l.a,Object(a.a)({},m,{label:h,to:p}))}},252:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=n(0),c=n.n(o),l=n(203),i=n(155),s=n(135),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,o=e.mobile,m=e.docsPluginId,d=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,b=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),h=Object(i.useActiveDocContext)(m),p=Object(i.useVersions)(m),E=Object(i.useLatestVersion)(m),O=Object(s.useDocsPreferredVersion)(m),j=O.preferredVersion,g=O.savePreferredVersionName;var k=null!==(t=null!==(n=h.activeVersion)&&void 0!==n?n:j)&&void 0!==t?t:E,w=o?"Versions":k.label,_=o?void 0:u(k).path;return c.a.createElement(l.a,Object(a.a)({},v,{mobile:o,label:w,to:_,items:function(){var e=p.map((function(e){var t=(null==h?void 0:h.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==h?void 0:h.activeVersion)},onClick:function(){g(e.name)}}})),t=[].concat(f,e,b);if(!(t.length<=1))return t}(),isActive:d?function(){return!1}:void 0}))}},253:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=n(0),c=n.n(o),l=n(203),i=n(155),s=n(130),u=n(135);function m(e){var t,n,o=e.docId,m=e.activeSidebarClassName,d=e.label,f=e.docsPluginId,b=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(i.useActiveDocContext)(f),h=v.activeVersion,p=v.activeDoc,E=Object(u.useDocsPreferredVersion)(f).preferredVersion,O=Object(i.useLatestVersion)(f),j=null!==(t=null!=h?h:E)&&void 0!==t?t:O,g=j.docs.find((function(e){return e.id===o}));if(!g)throw new Error("DocNavbarItem: couldn't find any doc with id="+o+" in version "+j.name+".\nAvailable docIds=\n- "+j.docs.join("\n- "));return c.a.createElement(l.a,Object(a.a)({exact:!0},b,{className:Object(s.a)(b.className,(n={},n[m]=p&&p.sidebar===g.sidebar,n)),label:null!=d?d:g.id,to:g.path}))}}}]);