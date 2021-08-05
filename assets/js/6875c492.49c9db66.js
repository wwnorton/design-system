(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{142:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(194),s=t(203),c=t(39),i=t(197),m=t(185),o=t(38);function u(e){var a,t=e.tagName,r=e.count,l=(a=Object(o.usePluralForm)().selectMessage,function(e){return a(e,Object(m.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return n.a.createElement(m.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:l(r),tagName:t}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,d=a.allTagsPath,b=a.name,g=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+b+'"',description:'Blog | Tagged "'+b+'"',wrapperClassName:o.ThemeClassNames.wrapper.blogPages,pageClassName:o.ThemeClassNames.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--3"},n.a.createElement(i.a,{sidebar:r})),n.a.createElement("main",{className:"col col--7"},n.a.createElement("h1",null,n.a.createElement(u,{count:g,tagName:b})),n.a.createElement(c.a,{href:d},n.a.createElement(m.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}},187:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(2),s=t.n(l),c=t(20),i=t(13),m=t(56);a.a=function(e){var a=Object(r.useRef)(!1),l=Object(r.useRef)(null),o=Object(c.useHistory)(),u=Object(i.default)().siteConfig,d=(void 0===u?{}:u).baseUrl,b=Object(m.usePluginData)("docusaurus-lunr-search"),g=function(){a.current||(Promise.all([fetch(""+d+b.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+d+b.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(56),t.e(59)]).then(t.bind(null,199)),t.e(1).then(t.t.bind(null,105,7))]).then((function(e){var a=e[0],t=e[1],r=e[2].default;0!==a.length&&function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var r=d+t.url;document.createElement("a").href=r,o.push(r)}})}(a,t,r)})),a.current=!0)},h=Object(r.useCallback)((function(a){e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.a.createElement("div",{className:"navbar__search",key:"search-box"},n.a.createElement("input",{id:"search_input_react",type:"search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:g,onMouseOver:g,onFocus:h,onBlur:h,ref:l}))}},195:function(e,a,t){"use strict";var r=t(6),n=t(0),l=t.n(n),s=t(184),c=t(29),i=t(187),m=t(188),o=t(38),u=t(196),d=t(190),b=t(191),g=t(200),h=t(192),v=t(193),p=t(104),f=t.n(p),E="right";a.a=function(){var e,a=Object(o.useThemeConfig)(),t=a.navbar,p=t.items,N=t.hideOnScroll,_=t.style,k=a.colorMode.disableSwitch,O=Object(n.useState)(!1),j=O[0],w=O[1],T=Object(m.a)(),y=T.setLightTheme,z=T.setDarkTheme,C=Object(u.a)(N),M=C.navbarRef,P=C.isNavbarVisible;Object(d.a)(j);var S=Object(n.useCallback)((function(){w(!0)}),[w]),I=Object(n.useCallback)((function(){w(!1)}),[w]),x=Object(c.useTheme)(),L=x.colorScheme,V=x.setColorScheme,B="dark"===L,D=function(e){V(e?"dark":"light")};Object(n.useEffect)((function(){B?z():y()}),[B,z,y]);var R=Object(b.a)();Object(n.useEffect)((function(){R===b.b.desktop&&w(!1)}),[R]);var F=p.some((function(e){return"search"===e.type})),H=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:E)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:E)}))}}(p),U=H.leftItems,A=H.rightItems;return l.a.createElement("nav",{ref:M,className:Object(s.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===_,"navbar--primary":"primary"===_,"navbar-sidebar--show":j},e[f.a.navbarHideable]=N,e[f.a.navbarHidden]=N&&!P,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=p&&0!==p.length&&l.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:S,onKeyDown:S},l.a.createElement(v.a,null)),l.a.createElement(h.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(s.a)("navbar__title")}),U.map((function(e,a){return l.a.createElement(g.a,Object(r.a)({},e,{key:a}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},A.map((function(e,a){return l.a.createElement(g.a,Object(r.a)({},e,{key:a}))})),!k&&l.a.createElement(c.Switch,{className:f.a.displayOnlyInLargeViewport,label:"Dark mode",checked:B,onToggle:D,tipped:!0},l.a.createElement(c.Icon,{icon:{d:B?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:B?void 0:"var(--nds-yellow-50)"})),!F&&l.a.createElement(i.a,null))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:I}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(h.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:I}),!k&&j&&l.a.createElement(c.Switch,{className:f.a.displayOnlyInLargeViewport,label:"Dark mode",checked:B,onToggle:D,tipped:!0},l.a.createElement(c.Icon,{icon:{d:B?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:B?void 0:"var(--nds-yellow-50)"}))),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},p.map((function(e,a){return l.a.createElement(g.a,Object(r.a)({mobile:!0},e,{onClick:I,key:a}))})))))))}},197:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var r=t(0),n=t.n(r),l=t(184),s=t(39),c=t(106),i=t.n(c);function m(e){var a=e.sidebar;return 0===a.items.length?null:n.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),n.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},n.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},203:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(184),s=t(183),c=t(185),i=t(39),m=t(210),o=t(201),u=t(107),d=t.n(u),b=t(38);a.a=function(e){var a,t,r=(a=Object(b.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(c.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),u=e.children,g=e.frontMatter,h=e.metadata,v=e.truncated,p=e.isBlogPostPage,f=void 0!==p&&p,E=h.date,N=h.formattedDate,_=h.permalink,k=h.tags,O=h.readingTime,j=g.author,w=g.title,T=g.image,y=g.keywords,z=g.author_url||g.authorURL,C=g.author_title||g.authorTitle,M=g.author_image_url||g.authorImageURL;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{keywords:y,image:T}),n.a.createElement("article",{className:f?void 0:"margin-bottom--xl"},(t=f?"h1":"h2",n.a.createElement("header",null,n.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},f?w:n.a.createElement(i.a,{to:_},w)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:E,className:d.a.blogPostDate},N,O&&n.a.createElement(n.a.Fragment,null," \xb7 ",r(O)))),n.a.createElement("div",{className:"avatar margin-vert--md"},M&&n.a.createElement(i.a,{className:"avatar__photo-link avatar__photo",href:z},n.a.createElement("img",{src:M,alt:j})),n.a.createElement("div",{className:"avatar__intro"},j&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement(i.a,{href:z},j)),n.a.createElement("small",{className:"avatar__subtitle"},C)))))),n.a.createElement("div",{className:"markdown"},n.a.createElement(s.a,{components:m.a},u)),(k.length>0||v)&&n.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,n.a.createElement(c.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),v&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(i.a,{to:h.permalink,"aria-label":"Read more about "+w},n.a.createElement("strong",null,n.a.createElement(c.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},209:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(29),s=Object.assign({React:n.a},l,n.a);a.a=s}}]);