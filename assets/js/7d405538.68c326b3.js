"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2524],{9182:function(e,t,n){n.d(t,{T:function(){return d},A:function(){return m}});var a=n(5773),r=n(7378),o=n(42),l=n.n(o),i=n(6871),s=n(8948),c=n(1884),u={features:"features_P2FH",feature__arrow:"feature__arrow_N0Yh",feature:"feature_v+yA","feature--linked":"feature--linked_-RQt",feature__header:"feature__header_1VJe",feature__icon:"feature__icon_vexP",feature__media:"feature__media_GceP",feature__img:"feature__img_e1i6",feature__tk:"feature__tk_S0FH",feature__link:"feature__link_oXWB","col-2":"col-2_TB8N","col-3":"col-3_cHVa"},d=function(e){var t,n=e.title,o=e.media,d=e.children,m=e.icon,p=e.href,h=e.basePath,k=void 0===h?"/":h,f=e.slug,g=void 0===f?"":f,b=e.tag,v=void 0===b?"div":b,w=e.columns,y=void 0===w?3:w,N=e.linkArrow,_=void 0!==N&&N,E=r.useState(null),x=E[0],L=E[1],A=(0,s.Z)(p||g?k+g:void 0),C=r.useMemo((function(){return"string"==typeof m?{variant:m}:"object"==typeof m?{icon:m}:{}}),[m]),T=r.useCallback((function(e){var t=e.children;return A?r.createElement(c.Z,{to:A,className:u.feature__link},t):r.createElement("span",{className:u.feature__link},t)}),[A]);return r.createElement(v,{className:l()(u.feature,u["col-"+y],(t={},t[u["feature--linked"]]=Boolean(A),t)),onClick:function(e){if(A){var t=window.getSelection();x&&t&&t.toString()&&t.containsNode(x,!0)||e.nativeEvent.composedPath().some((function(e){return e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()}))||(window.location.href=A)}},ref:L},o,r.createElement("div",{className:u.feature__header},m&&r.createElement("span",{className:u.feature__icon},r.createElement(i.Icon,(0,a.Z)({},C,{size:32}))),r.createElement(T,null,n,A&&_&&r.createElement(i.Icon,{variant:"arrow-right",className:u.feature__arrow}))),r.createElement("div",{className:u.feature__body},d))},m=function(e){var t=e.basePath,n=void 0===t?"/":t,o=e.columns,l=void 0===o?3:o,i=e.children;return r.createElement("ul",{className:u.features},r.Children.map(i,(function(e){if(r.isValidElement(e)){var t=e.props;return r.createElement(d,(0,a.Z)({columns:l},t,{basePath:n,tag:"li"}))}return null})))}},8538:function(e,t,n){n.d(t,{u:function(){return o}});var a=n(5773),r=n(7378),o=function(e){return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),r.createElement("title",null,"W. W. Norton & Company"),r.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))}},4659:function(e,t,n){n.d(t,{nD:function(){return p},QC:function(){return h},TT:function(){return k.T},AN:function(){return k.A},_A:function(){return v},l1:function(){return E}});var a=n(7378),r=n(4500),o=n.n(r),l=n(42),i=n.n(l),s=n(6871),c={colors:"colors_XsEU",stuck:"stuck_0FfI","color-use":"color-use_TRaE","color-use--success":"color-use--success_bJe-","color-use--error":"color-use--error_-1a-",wcag:"wcag_x90u","col-light":"col-light_CLuQ","col-dark":"col-dark_6+nk",grade:"grade_Ek6M",name:"name_EXob",hex:"hex_I6oB"},u=function(e){if(e){var t=e.aa,n=e.aaLarge;return e.aaa?"AAA":t?"AA":n?"AA Large":void 0}},d=function(e){var t=e.color,n=e.textLight,r=e.textDark,l=a.useState(),d=l[0],m=l[1],p=a.useState(),h=p[0],k=p[1],f=a.useState(),g=f[0],b=f[1],v=a.useState(null),w=v[0],y=v[1],N=a.useState(""),_=N[0],E=N[1],x=a.useMemo((function(){return t.replace("var(--","").replace(")","").replace("nds-","")}),[t]);return a.useLayoutEffect((function(){if(w){var e=window.getComputedStyle(w).backgroundColor,t=(s=e.replace(/[()rgb]/g,"").split(/\s+/g),c=s[0],d=s[1],p=s[2],h=parseInt(c,10).toString(16),f=parseInt(d,10).toString(16),g=parseInt(p,10).toString(16),1===h.length&&(h="0"+h),1===f.length&&(f="0"+f),1===g.length&&(g="0"+g),"#"+h+f+g);m(t);var a=o()({backgroundColor:t,textLight:n,textDark:r},{compact:!0,threshold:0})[0].combinations,l=a[0],i=a[1];E(l.contrast>i.contrast?"var(--nds-white)":"var(--nds-black)"),k({level:u(l.accessibility),ratio:l.contrast,hex:l.hex}),b({level:u(i.accessibility),ratio:i.contrast,hex:i.hex})}var s,c,d,p,h,f,g}),[w,n,r]),a.createElement("tr",{id:"color-"+x,ref:y,className:c.grade,style:{"--nds-text-color":_,"--nds-background-color":t}},a.createElement("td",{className:c.name},x),a.createElement("td",{className:c.hex},d),[h,g].map((function(e,t){if(!e)return null;var n=e.ratio,r=e.level,o=n>=3,l=i()(c["color-use"],o?c["color-use--success"]:c["color-use--error"]),u="https://whocanuse.com/?b="+d.replace("#","")+"&c="+(0===t?"ffffff":"000000");return a.createElement("td",{className:c[0===t?"col-light":"col-dark"],key:n},a.createElement("a",{className:c.wcag,href:u,target:"_blank",rel:"noopener noreferrer"},a.createElement("span",{className:l},a.createElement(s.Icon,{variant:o?"check":"close"})),n.toFixed(2),r&&" (WCAG "+r+")"))})))},m=function(e){var t=e.name,n=e.textLight,r=e.textDark;return a.createElement(a.Fragment,null,Array.from(Array(10).keys()).map((function(e){var o="var(--nds-"+t+"-"+10*(e+1)+")";return a.createElement(d,{color:o,textLight:n,textDark:r,key:o})})))},p=function(){var e=a.useState(null),t=e[0],n=e[1],r=a.useState(!1),o=r[0],l=r[1],u=a.useMemo((function(){return s.canUseDOM&&"IntersectionObserver"in window?new IntersectionObserver((function(e){var n=e[0];n.target===t&&l(n.intersectionRatio<1)}),{threshold:[1],rootMargin:"60px 0px 0px 0px"}):null}),[t]);a.useEffect((function(){return t&&u&&u.observe(t),function(){t&&u&&u.unobserve(t)}}),[t,u]);var d=a.useMemo((function(){var e;return i()(((e={})[c.stuck]=o,e))}),[o]);return a.createElement("table",{className:c.colors},a.createElement("thead",{ref:n},a.createElement("tr",null,a.createElement("th",{className:d},"Token name"),a.createElement("th",{className:d},"Hex value"),a.createElement("th",{className:d},"Contrast ratio against white"),a.createElement("th",{className:d},"Contrast ratio against black"))),a.createElement("tbody",null,["red","yellow","green","teal","cyan","blue","purple","navy","gray"].map((function(e){return a.createElement(m,{key:e,name:e,textLight:"#fff",textDark:"#000"})}))))},h=function(e){var t=e.children,n=e.color,r=a.useMemo((function(){return n||(["#","rgb"].some((function(e){return t.startsWith(e)}))?t:"var(--"+(t.startsWith("nds")?t:"nds-"+t)+")")}),[t,n]);return a.createElement("code",{className:"no-break"},a.createElement("span",{className:"color-chip"},a.createElement("span",{style:{backgroundColor:r}})),t)},k=n(9182),f=n(5773),g=n(8781),b=function(e){var t=e.name,n=e.required,r=e.type,o=e.description;return a.createElement("tr",null,a.createElement("td",null,a.createElement(s.FieldInfo,{indicator:n?"required":void 0,label:t})),a.createElement("td",null,a.createElement(g.Z,null,o)),a.createElement("td",null,a.createElement("code",{className:"code-wrap"},r.name.replace(" | undefined",""))))},v=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,r=n.displayName,o=n.props,l=Object.keys(o).map((function(e){var t=o[e];return a.createElement(b,(0,f.Z)({key:t.name},t))}));return a.createElement("table",{"aria-label":"Props for "+r},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,l))},w=(n(8538),"usage_DMdX"),y="usage__good_zciF",N="usage__bad_-3MT",_="usage__why_j7vt",E=function(e){var t=e.good,n=e.bad,r=e.children;return a.createElement("section",{className:w},a.createElement(s.CalloutError,{title:"Don't",border:"bottom",tag:"div",className:N},n),a.createElement(s.CalloutSuccess,{title:"Do",border:"bottom",tag:"div",className:y},t),a.createElement("p",{className:_},a.createElement("strong",null,"Why"),": ",a.Children.map(r,(function(e){return a.isValidElement(e)?e.props.children:e}))))}},6277:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=n(5773),r=n(808),o=(n(7378),n(5318)),l=n(6871),i=n(4659),s=["components"],c={title:"Link",description:"A link allows the user to navigate to another place."},u=void 0,d={unversionedId:"components/link",id:"components/link",title:"Link",description:"A link allows the user to navigate to another place.",source:"@site/docs/components/link.mdx",sourceDirName:"components",slug:"/components/link",permalink:"/design-system/docs/components/link",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/link.mdx",tags:[],version:"current",lastUpdatedBy:"erinoh",lastUpdatedAt:1633100478,formattedLastUpdatedAt:"10/1/2021",frontMatter:{title:"Link",description:"A link allows the user to navigate to another place."},sidebar:"components",previous:{title:"Dropdown",permalink:"/design-system/docs/components/dropdown"},next:{title:"Modal",permalink:"/design-system/docs/components/modal"}},m=[{value:"Anatomy",id:"anatomy",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Interactions",id:"interactions",children:[],level:2},{value:"React API",id:"react-api",children:[{value:"Link",id:"link",children:[],level:3}],level:2}],p={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A link allows the user to navigate to another place.")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Text")," - link text should succinctly describe its destination."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Destination")," - where the link will navigate when clicked.\nThis is typically the address (URL) of another page, or a ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/Addressing/URL/4_2_Fragments.html"},"fragment identifier")," on the current page.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,'Links (formally "hyperlinks") are foundational to the web, allowing documents to be connected.\nThese connections can be thought of as the webbing between sites, which is why we call it "the web."\nBecause links form the basis for how we navigate the web, great care should be taken not to override their core behavior.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clicking a link navigates the user to another place on the same page or to a different page."),(0,o.kt)("li",{parentName:"ul"},"A link should always affect the browser history. In other words, after a user clicks a link to navigate to a new location, they should be able to return by pressing the browser's back button.\nA link allows the user to return to the previous location by pressing the browser's back button."),(0,o.kt)("li",{parentName:"ul"},"Activating the link changes the URL in the same tab or opens a new tab with the link URL."),(0,o.kt)("li",{parentName:"ul"},"Links should open in the same tab when users are navigating within the same page, product or user flow."),(0,o.kt)("li",{parentName:"ul"},"Links can open in a new tab when it is taking the user to another website and/or it is in the user's interest not to lose their place in the current flow. Users don't usually expect links to open in a new tab and they can manually choose to open a link in a new tab or window, so when in doubt default to opening in the same tab."),(0,o.kt)("li",{parentName:"ul"},"All links that open in a new tab display the launch icon after the link text."),(0,o.kt)("li",{parentName:"ul"},"A link's ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href"},"href")," value must be a valid URL or URL fragment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("kbd",null,"Enter")," (keydown) activates the link. Links always move focus when activated."),(0,o.kt)("li",{parentName:"ul"},"Links in body copy should always be underlined and displayed in a different color."),(0,o.kt)("li",{parentName:"ul"},"Links add cognitive load, as every link presents the user with a decision to activate it or not. For this reason, links should be used sparingly and include as few words as possible while accurately and clearly describing the destination."),(0,o.kt)("li",{parentName:"ul"},"A destination should only be linked once in a given page or section."),(0,o.kt)("li",{parentName:"ul"},"When linking to the same destination on different pages, the link text should be the same.")),(0,o.kt)(l.CalloutSuccess,{title:"Dos",mdxType:"CalloutSuccess"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do use a link when\u2026",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'It would be useful to "Copy", "Open in a new tab", or "Bookmark" the destination URL.'),(0,o.kt)("li",{parentName:"ul"},"The text content is embedded in a sentence, and does not need margins or padding."),(0,o.kt)("li",{parentName:"ul"},"The text content conveys location, not an action (for example: a link that references a resource)."),(0,o.kt)("li",{parentName:"ul"},"You want to record the navigation in the user's browser history."))),(0,o.kt)("li",{parentName:"ul"},"Do style links so that they are visually different from plain text, and indicate that they can be clicked."))),(0,o.kt)(l.CalloutError,{title:"Don'ts",mdxType:"CalloutError"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Don\'t create links that look like buttons. If dictation software users say "show buttons", the actions will not be listed. Keyboard users may try to press Space to activate, which will do nothing.'),(0,o.kt)("li",{parentName:"ul"},"Don't use an ambiguous label like \u201cclick here\u201d. The link's text content should clearly describe its destination or purpose."),(0,o.kt)("li",{parentName:"ul"},"Don't include the punctuation if a link is at the end of a sentence or before a comma."),(0,o.kt)("li",{parentName:"ul"},"Don't use Javascript to simulate links. Use a valid href instead."))),(0,o.kt)(l.Callout,{title:"Consider using buttons if...",mdxType:"Callout"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The component is styled like a button. (See ",(0,o.kt)("em",{parentName:"li"},"Don't create links that look like buttons"),", above)."),(0,o.kt)("li",{parentName:"ul"},"The label communicates an action that the user can take."),(0,o.kt)("li",{parentName:"ul"},"If the action taken will change or manipulate data on the page."))),(0,o.kt)("h2",{id:"interactions"},"Interactions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Links are focusable so that they can be activated by all users."),(0,o.kt)("li",{parentName:"ul"},"Links are activated with ",(0,o.kt)("kbd",null,"Enter")," or pointer click.")),(0,o.kt)("h2",{id:"react-api"},"React API"),(0,o.kt)("p",null,"We expose one component for the link API, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/Link"},"Link"),"."),(0,o.kt)("h3",{id:"link"},"Link"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Link>")," component extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"React.AnchorHTMLAttributes<HTMLAnchorElement>")," interface."),(0,o.kt)("p",null,"If defined, our ",(0,o.kt)("inlineCode",{parentName:"p"},"<Link>")," will use the link component provided by the nearest ",(0,o.kt)("a",{parentName:"p",href:"react-providers#app-provider"},"AppProvider")," context.\nThis allows you to use our ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," wrapper for your application's router link component, such as ",(0,o.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/api/Link"},"the React Router ",(0,o.kt)("inlineCode",{parentName:"a"},"<Link>")),"."),(0,o.kt)("p",null,"If the nearest link component context is undefined, the rendered link will be a normal anchor element with the added ",(0,o.kt)("inlineCode",{parentName:"p"},"external")," prop that can be used to make the link open in an external window/tab."),(0,o.kt)("h3",{id:""}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Link } from '@wwnds/react';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<AppProvider linkComponent={null}>\n    <Link external={true} href="https://github.com/wwnorton/design-system">\n        Norton Design System\n    </Link>\n</AppProvider>\n')),(0,o.kt)(i._A,{from:l.Link,mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);