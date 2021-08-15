"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3089],{1347:function(e,a,t){t.d(a,{Z:function(){return E}});var n=t(808),r=t(7378),l=t(8944),i=t(3895),s=t(3298),c="sidebar_3pri",o="sidebarItemTitle_2iko",m="sidebarItemList_3aXd",d="sidebarItem_2HDj",u="sidebarItemLink_VIvG",g="sidebarItemLinkActive_34mL",b=t(3128);function v(e){var a=e.sidebar;return 0===a.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},a.title),r.createElement("ul",{className:m},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var h=t(2079),f=["sidebar","toc","children"];var E=function(e){var a=e.sidebar,t=e.toc,s=e.children,c=(0,n.Z)(e,f),o=a&&a.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:a})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},s),t&&r.createElement("div",{className:"col col--2"},r.createElement(h.Z,{toc:t})))))}},606:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var n=t(7378),r=t(9939),l=t(1347),i=t(1133),s=t(3298),c=t(3128);var o=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(s.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=t(9575);var d=function(e){var a=e.metadata,t=e.items,s=e.sidebar,c=(0,r.Z)().siteConfig.title,d=a.blogDescription,u=a.blogTitle,g="/"===a.permalink?c:u;return n.createElement(l.Z,{title:g,description:d,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},t.map((function(e){var a=e.content;return n.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.createElement(a,null))})),n.createElement(o,{metadata:a}))}},1133:function(e,a,t){t.d(a,{Z:function(){return v}});var n=t(7378),r=t(8944),l=t(8869),i=t(3128),s=t(3298),c=t(9575),o=t(2094),m=t(7165),d=t(5561),u="blogPostTitle_28zC",g="blogPostData_2ipU",b="blogPostDetailsFull_2LNT";var v=function(e){var a,t,v,h=(t=(0,c.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),f=e.children,E=e.frontMatter,p=e.metadata,_=e.truncated,N=e.isBlogPostPage,k=void 0!==N&&N,Z=p.date,w=p.formattedDate,C=p.permalink,y=p.tags,T=p.readingTime,S=p.title,L=p.editUrl,I=E.author,x=E.image,B=E.keywords,M=E.author_url||E.authorURL,z=E.author_title||E.authorTitle,R=E.author_image_url||E.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:B,image:x}),n.createElement("article",{className:k?void 0:"margin-bottom--xl"},(v=k?"h1":"h2",n.createElement("header",null,n.createElement(v,{className:u},k?S:n.createElement(s.Z,{to:C},S)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:Z},w),T&&n.createElement(n.Fragment,null," \xb7 ",h(T))),n.createElement("div",{className:"avatar margin-vert--md"},R&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:M},n.createElement("img",{src:R,alt:I})),n.createElement("div",{className:"avatar__intro"},I&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:M},I)),n.createElement("small",{className:"avatar__subtitle"},z)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:o.Z},f)),(y.length>0||_)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[b]=k,a))},y.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),y.map((function(e){var a=e.label,t=e.permalink;return n.createElement(s.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),k&&L&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:L})),!k&&_&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:p.permalink,"aria-label":"Read more about "+S},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5561:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(7378),r=t(3128),l=t(5773),i=t(808),s=t(8944),c="iconEdit_1CBY",o=["className"],m=function(e){var a=e.className,t=(0,i.Z)(e,o);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,a),"aria-hidden":"true"},t),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var a=e.editUrl;return n.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2079:function(e,a,t){t.d(a,{r:function(){return c},Z:function(){return o}});var n=t(7378),r=t(8944);var l=function(e,a,t){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var r=0,s=!1,c=document.getElementsByClassName(e);r<c.length&&!s;){var o=c[r],m=o.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(a),o.classList.add(a),i(o),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_3J2a",s="table-of-contents__link";function c(e){var a=e.toc,t=e.isChild;return a.length?n.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(c,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var a=e.toc;return l(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(c,{toc:a}))}},5318:function(e,a,t){t.d(a,{Z:function(){return C}});var n=t(5773),r=t(9276),l=t(7378),i=t(8944),s=t(3128),c=t(4667),o=t(6698),m=t(9575),d=t(4910),u=t(2758),g=t(5006),b=t(3120),v=t(2889),h=t(4532),f="toggle_2xs0",E="navbarHideable_1VR7",p="navbarHidden_1FmO",_="right",N=function(e){var a=e.checked,t=e.onChange;return l.createElement(r.Switch,{label:"Dark mode",checked:a,onToggle:t,tipped:!0},l.createElement(r.Icon,{icon:{d:a?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:a?void 0:"var(--nds-yellow-50)"}))};function k(){return(0,m.LU)().navbar.items}function Z(){var e=(0,m.LU)().colorMode.disableSwitch,a=(0,o.Z)(),t=a.setLightTheme,n=a.setDarkTheme,i=(0,r.useTheme)(),s=i.colorScheme,c=i.setColorScheme;return(0,l.useEffect)((function(){"dark"===s?n():t()}),[s]),{isDarkTheme:"dark"===s,toggle:function(e){c(e?"dark":"light")},disabled:e}}function w(e){var a=e.sidebarShown,t=e.toggleSidebar;(0,u.Z)(a);var r=k(),c=Z(),o=function(e){var a,t=e.sidebarShown,n=e.toggleSidebar,r=null==(a=(0,m.g8)())?void 0:a({toggleSidebar:n}),i=(0,m.D9)(r),s=(0,l.useState)((function(){return!1})),c=s[0],o=s[1];(0,l.useEffect)((function(){r&&!i&&o(!0)}),[r,i]);var d=!!r;return(0,l.useEffect)((function(){d?t||o(!0):o(!1)}),[t,d]),{shown:c,hide:(0,l.useCallback)((function(){o(!1)}),[]),content:r}}({sidebarShown:a,toggleSidebar:t});return l.createElement("div",{className:"navbar-sidebar"},l.createElement("div",{className:"navbar-sidebar__brand"},l.createElement(v.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&a&&l.createElement(N,{checked:c.isDarkTheme,onChange:c.toggle})),l.createElement("div",{className:(0,i.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":o.shown})},l.createElement("div",{className:"navbar-sidebar__item menu"},l.createElement("ul",{className:"menu__list"},r.map((function(e,a){return l.createElement(b.Z,(0,n.Z)({mobile:!0},e,{onClick:t,key:a}))})))),l.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:o.hide},l.createElement(s.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),o.content)))}var C=function(){var e,a,t,r,s,o,u,C=(0,m.LU)().navbar,y=C.hideOnScroll,T=C.style,S=(a=(0,g.Z)(),t="mobile"===a,r=(0,l.useState)(!1),s=r[0],o=r[1],u=(0,l.useCallback)((function(){o((function(e){return!e}))}),[]),(0,l.useEffect)((function(){"desktop"===a&&o(!1)}),[a]),{shouldRender:t,toggle:u,shown:s}),L=Z(),I=(0,d.Z)(y),x=I.navbarRef,B=I.isNavbarVisible,M=k(),z=M.some((function(e){return"search"===e.type})),R=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!=(a=e.position)?a:_)})),rightItems:e.filter((function(e){var a;return"right"===(null!=(a=e.position)?a:_)}))}}(M),D=R.leftItems,P=R.rightItems;return l.createElement("nav",{ref:x,className:(0,i.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===T,"navbar--primary":"primary"===T,"navbar-sidebar--show":S.shown},e[E]=y,e[p]=y&&!B,e))},l.createElement("div",{className:"navbar__inner"},l.createElement("div",{className:"navbar__items"},(null==M?void 0:M.length)>0&&l.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:S.toggle,onKeyDown:S.toggle},l.createElement(h.Z,null)),l.createElement(v.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),D.map((function(e,a){return l.createElement(b.Z,(0,n.Z)({},e,{key:a}))}))),l.createElement("div",{className:"navbar__items navbar__items--right"},P.map((function(e,a){return l.createElement(b.Z,(0,n.Z)({},e,{key:a}))})),!L.disabled&&l.createElement(N,{className:f,checked:L.isDarkTheme,onChange:L.toggle}),!z&&l.createElement(c.Z,null))),l.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:S.toggle}),S.shouldRender&&l.createElement(w,{sidebarShown:S.shown,toggleSidebar:S.toggle}))}},8062:function(e,a,t){var n=t(7378),r=t(9276),l=Object.assign({React:n},r,n);a.Z=l},4667:function(e,a,t){var n=t(7378),r=t(42),l=t.n(r),i=t(9635),s=t(9939),c=t(353);a.Z=function(e){var a=(0,n.useRef)(!1),r=(0,n.useRef)(null),o=(0,i.k6)(),m=(0,s.Z)().siteConfig,d=(void 0===m?{}:m).baseUrl,u=(0,c.usePluginData)("docusaurus-lunr-search"),g=function(){a.current||(Promise.all([fetch(""+d+u.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+d+u.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(9734),t.e(4901)]).then(t.bind(t,6264)),Promise.all([t.e(532),t.e(8448)]).then(t.bind(t,8448))]).then((function(e){var a=e[0],t=e[1],n=e[2].default;0!==a.length&&function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=d+t.url;document.createElement("a").href=n,o.push(n)}})}(a,t,n)})),a.current=!0)},b=(0,n.useCallback)((function(a){e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.createElement("div",{className:"navbar__search",key:"search-box"},n.createElement("input",{id:"search_input_react",type:"search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:g,onMouseOver:g,onFocus:b,onBlur:b,ref:r}))}}}]);