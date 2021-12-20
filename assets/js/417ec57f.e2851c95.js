"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4709],{9182:function(e,t,n){n.d(t,{T:function(){return p},A:function(){return u}});var a=n(5773),r=n(7378),l=n(42),i=n.n(l),o=n(6871),s=n(8948),d=n(1884),m={features:"features_P2FH",feature__arrow:"feature__arrow_N0Yh",feature:"feature_v+yA","feature--linked":"feature--linked_-RQt",feature__header:"feature__header_1VJe",feature__icon:"feature__icon_vexP",feature__media:"feature__media_GceP",feature__img:"feature__img_e1i6",feature__tk:"feature__tk_S0FH",feature__link:"feature__link_oXWB","col-2":"col-2_TB8N","col-3":"col-3_cHVa"},p=function(e){var t,n=e.title,l=e.media,p=e.children,u=e.icon,c=e.href,k=e.basePath,N=void 0===k?"/":k,g=e.slug,h=void 0===g?"":g,f=e.tag,y=void 0===f?"div":f,b=e.columns,v=void 0===b?3:b,C=e.linkArrow,w=void 0!==C&&C,x=r.useState(null),E=x[0],_=x[1],T=(0,s.Z)(c||h?N+h:void 0),$=r.useMemo((function(){return"string"==typeof u?{variant:u}:"object"==typeof u?{icon:u}:{}}),[u]),z=r.useCallback((function(e){var t=e.children;return T?r.createElement(d.Z,{to:T,className:m.feature__link},t):r.createElement("span",{className:m.feature__link},t)}),[T]);return r.createElement(y,{className:i()(m.feature,m["col-"+v],(t={},t[m["feature--linked"]]=Boolean(T),t)),onClick:function(e){if(T){var t=window.getSelection();E&&t&&t.toString()&&t.containsNode(E,!0)||e.nativeEvent.composedPath().some((function(e){return e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()}))||(window.location.href=T)}},ref:_},l,r.createElement("div",{className:m.feature__header},u&&r.createElement("span",{className:m.feature__icon},r.createElement(o.Icon,(0,a.Z)({},$,{size:32}))),r.createElement(z,null,n,T&&w&&r.createElement(o.Icon,{variant:"arrow-right",className:m.feature__arrow}))),r.createElement("div",{className:m.feature__body},p))},u=function(e){var t=e.basePath,n=void 0===t?"/":t,l=e.columns,i=void 0===l?3:l,o=e.children;return r.createElement("ul",{className:m.features},r.Children.map(o,(function(e){if(r.isValidElement(e)){var t=e.props;return r.createElement(p,(0,a.Z)({columns:i},t,{basePath:n,tag:"li"}))}return null})))}},8538:function(e,t,n){n.d(t,{u:function(){return l}});var a=n(5773),r=n(7378),l=function(e){return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),r.createElement("title",null,"W. W. Norton & Company"),r.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))}},4659:function(e,t,n){n.d(t,{nD:function(){return c},QC:function(){return k},TT:function(){return N.T},AN:function(){return N.A},_A:function(){return y},l1:function(){return x}});var a=n(7378),r=n(4500),l=n.n(r),i=n(42),o=n.n(i),s=n(6871),d={colors:"colors_XsEU",stuck:"stuck_0FfI","color-use":"color-use_TRaE","color-use--success":"color-use--success_bJe-","color-use--error":"color-use--error_-1a-",wcag:"wcag_x90u","col-light":"col-light_CLuQ","col-dark":"col-dark_6+nk",grade:"grade_Ek6M",name:"name_EXob",hex:"hex_I6oB"},m=function(e){if(e){var t=e.aa,n=e.aaLarge;return e.aaa?"AAA":t?"AA":n?"AA Large":void 0}},p=function(e){var t=e.color,n=e.textLight,r=e.textDark,i=a.useState(),p=i[0],u=i[1],c=a.useState(),k=c[0],N=c[1],g=a.useState(),h=g[0],f=g[1],y=a.useState(null),b=y[0],v=y[1],C=a.useState(""),w=C[0],x=C[1],E=a.useMemo((function(){return t.replace("var(--","").replace(")","").replace("nds-","")}),[t]);return a.useLayoutEffect((function(){if(b){var e=window.getComputedStyle(b).backgroundColor,t=(s=e.replace(/[()rgb]/g,"").split(/\s+/g),d=s[0],p=s[1],c=s[2],k=parseInt(d,10).toString(16),g=parseInt(p,10).toString(16),h=parseInt(c,10).toString(16),1===k.length&&(k="0"+k),1===g.length&&(g="0"+g),1===h.length&&(h="0"+h),"#"+k+g+h);u(t);var a=l()({backgroundColor:t,textLight:n,textDark:r},{compact:!0,threshold:0})[0].combinations,i=a[0],o=a[1];x(i.contrast>o.contrast?"var(--nds-white)":"var(--nds-black)"),N({level:m(i.accessibility),ratio:i.contrast,hex:i.hex}),f({level:m(o.accessibility),ratio:o.contrast,hex:o.hex})}var s,d,p,c,k,g,h}),[b,n,r]),a.createElement("tr",{id:"color-"+E,ref:v,className:d.grade,style:{"--nds-text-color":w,"--nds-background-color":t}},a.createElement("td",{className:d.name},E),a.createElement("td",{className:d.hex},p),[k,h].map((function(e,t){if(!e)return null;var n=e.ratio,r=e.level,l=n>=3,i=o()(d["color-use"],l?d["color-use--success"]:d["color-use--error"]),m="https://whocanuse.com/?b="+p.replace("#","")+"&c="+(0===t?"ffffff":"000000");return a.createElement("td",{className:d[0===t?"col-light":"col-dark"],key:n},a.createElement("a",{className:d.wcag,href:m,target:"_blank",rel:"noopener noreferrer"},a.createElement("span",{className:i},a.createElement(s.Icon,{variant:l?"check":"close"})),n.toFixed(2),r&&" (WCAG "+r+")"))})))},u=function(e){var t=e.name,n=e.textLight,r=e.textDark;return a.createElement(a.Fragment,null,Array.from(Array(10).keys()).map((function(e){var l="var(--nds-"+t+"-"+10*(e+1)+")";return a.createElement(p,{color:l,textLight:n,textDark:r,key:l})})))},c=function(){var e=a.useState(null),t=e[0],n=e[1],r=a.useState(!1),l=r[0],i=r[1],m=a.useMemo((function(){return s.canUseDOM&&"IntersectionObserver"in window?new IntersectionObserver((function(e){var n=e[0];n.target===t&&i(n.intersectionRatio<1)}),{threshold:[1],rootMargin:"60px 0px 0px 0px"}):null}),[t]);a.useEffect((function(){return t&&m&&m.observe(t),function(){t&&m&&m.unobserve(t)}}),[t,m]);var p=a.useMemo((function(){var e;return o()(((e={})[d.stuck]=l,e))}),[l]);return a.createElement("table",{className:d.colors},a.createElement("thead",{ref:n},a.createElement("tr",null,a.createElement("th",{className:p},"Token name"),a.createElement("th",{className:p},"Hex value"),a.createElement("th",{className:p},"Contrast ratio against white"),a.createElement("th",{className:p},"Contrast ratio against black"))),a.createElement("tbody",null,["red","yellow","green","teal","cyan","blue","purple","navy","gray"].map((function(e){return a.createElement(u,{key:e,name:e,textLight:"#fff",textDark:"#000"})}))))},k=function(e){var t=e.children,n=e.color,r=a.useMemo((function(){return n||(["#","rgb"].some((function(e){return t.startsWith(e)}))?t:"var(--"+(t.startsWith("nds")?t:"nds-"+t)+")")}),[t,n]);return a.createElement("code",{className:"no-break"},a.createElement("span",{className:"color-chip"},a.createElement("span",{style:{backgroundColor:r}})),t)},N=n(9182),g=n(5773),h=n(8781),f=function(e){var t=e.name,n=e.required,r=e.type,l=e.description;return a.createElement("tr",null,a.createElement("td",null,a.createElement(s.FieldInfo,{indicator:n?"required":void 0,label:t})),a.createElement("td",null,a.createElement(h.Z,null,l)),a.createElement("td",null,a.createElement("code",{className:"code-wrap"},r.name.replace(" | undefined",""))))},y=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,r=n.displayName,l=n.props,i=Object.keys(l).map((function(e){var t=l[e];return a.createElement(f,(0,g.Z)({key:t.name},t))}));return a.createElement("table",{"aria-label":"Props for "+r},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,i))},b=(n(8538),"usage_DMdX"),v="usage__good_zciF",C="usage__bad_-3MT",w="usage__why_j7vt",x=function(e){var t=e.good,n=e.bad,r=e.children;return a.createElement("section",{className:b},a.createElement(s.CalloutError,{title:"Don't",border:"bottom",tag:"div",className:C},n),a.createElement(s.CalloutSuccess,{title:"Do",border:"bottom",tag:"div",className:v},t),a.createElement("p",{className:w},a.createElement("strong",null,"Why"),": ",a.Children.map(r,(function(e){return a.isValidElement(e)?e.props.children:e}))))}},8425:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var a=n(5773),r=n(808),l=(n(7378),n(5318)),i=n(8948),o=n(4659),s=["components"],d={title:"Core API"},m=void 0,p={unversionedId:"guides/dev/core-api",id:"guides/dev/core-api",title:"Core API",description:"The @wwnds/core package exposes six top-level mixins for setting CSS declarations, as well as a set of customizable variables for theming.",source:"@site/docs/guides/dev/core-api.mdx",sourceDirName:"guides/dev",slug:"/guides/dev/core-api",permalink:"/design-system/docs/guides/dev/core-api",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/guides/dev/core-api.mdx",tags:[],version:"current",lastUpdatedBy:"Anand Patil",lastUpdatedAt:1629151103,formattedLastUpdatedAt:"8/16/2021",frontMatter:{title:"Core API"},sidebar:"guides",previous:{title:"Writing CSS",permalink:"/design-system/docs/guides/dev/writing-css"},next:{title:"React API",permalink:"/design-system/docs/guides/dev/react-api"}},u=[{value:"Theming variables",id:"theming-variables",children:[],level:2},{value:"Tokens",id:"tokens",children:[],level:2},{value:"Reset",id:"reset",children:[],level:2},{value:"Components",id:"components",children:[{value:"All components",id:"all-components",children:[],level:3},{value:"Individual components",id:"individual-components",children:[],level:3},{value:"Fully modular mixins",id:"fully-modular-mixins",children:[],level:3}],level:2},{value:"Helpers",id:"helpers",children:[],level:2},{value:"Utilities",id:"utilities",children:[],level:2},{value:"Complete",id:"complete",children:[],level:2}],c={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@wwnds/core")," package exposes six top-level mixins for setting CSS declarations, as well as a set of customizable ",(0,l.kt)("a",{parentName:"p",href:"#theming-variables"},"variables for theming"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tokens"},(0,l.kt)("inlineCode",{parentName:"a"},"tokens"))," - All foundational design tokens set as CSS custom properties on the ",(0,l.kt)("inlineCode",{parentName:"li"},":root"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#reset"},(0,l.kt)("inlineCode",{parentName:"a"},"reset"))," - The global HTML reset. Forked from ",(0,l.kt)("a",{parentName:"li",href:"https://getbootstrap.com/docs/5.0/content/reboot/"},"the Bootstrap reboot")," to use the Norton Design System foundations."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#components"},(0,l.kt)("inlineCode",{parentName:"a"},"components"))," - Declarations for every component."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#helpers"},(0,l.kt)("inlineCode",{parentName:"a"},"helpers"))," - Helper declarations that set a composed style uncoupled from any component."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#utilities"},(0,l.kt)("inlineCode",{parentName:"a"},"utilities"))," - Utility declarations that set one property per class."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#complete"},(0,l.kt)("inlineCode",{parentName:"a"},"complete"))," - The complete design system set in a single global stylesheet.")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sassdoc")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Additional utility mixins and functions are documented in our ",(0,l.kt)("a",{href:(0,i.Z)("sassdoc"),target:"\\_blank",rel:"noopener noreferrer"},"Sassdoc documentation"),"."))),(0,l.kt)("h2",{id:"theming-variables"},"Theming variables"),(0,l.kt)("p",null,"These variables should be ",(0,l.kt)("a",{parentName:"p",href:"stylesheet-setup#configuration"},"configured in a forwarded stylesheet")," to ensure the most flexibility."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Token"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$primary-family")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"teal"')),(0,l.kt)("td",{parentName:"tr",align:null},"The family used in components that have a default color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$primary-grade")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the primary color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$base-family")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"navy"')),(0,l.kt)("td",{parentName:"tr",align:null},"Background, border, or shadow gradients")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$base-grade")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")," (unset)"),(0,l.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the base color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$disabled-family")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"base-color"')),(0,l.kt)("td",{parentName:"tr",align:null},"Not currently usable, non-interactive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$disabled-grade")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the disabled color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$error-family")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"red"')),(0,l.kt)("td",{parentName:"tr",align:null},"Error, danger, or incorrect")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$error-grade")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the error color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$success-family")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"green"')),(0,l.kt)("td",{parentName:"tr",align:null},"Success, passing, or correct")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$success-grade")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the success color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$warning-family")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"yellow"')),(0,l.kt)("td",{parentName:"tr",align:null},"Warning or caution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$warning-grade")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the warning color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$background-color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(o.QC,{mdxType:"ColorChip"},"white")),(0,l.kt)("td",{parentName:"tr",align:null},"The main background color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(o.QC,{mdxType:"ColorChip"},"base-color-90")),(0,l.kt)("td",{parentName:"tr",align:null},"The main text color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-color-inverse")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(o.QC,{mdxType:"ColorChip"},"background-color")),(0,l.kt)("td",{parentName:"tr",align:null},"A contrasting text color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$subdued-color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(o.QC,{mdxType:"ColorChip"},"base-color-60")),(0,l.kt)("td",{parentName:"tr",align:null},"De-emphasized, muted, or subdued content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$selection-background-color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")," (unset)"),(0,l.kt)("td",{parentName:"tr",align:null},"The background color of user-selected text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$selection-text-color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")," (unset)"),(0,l.kt)("td",{parentName:"tr",align:null},"The text color of user-selected text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus-color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(o.QC,{mdxType:"ColorChip"},"blue-50")),(0,l.kt)("td",{parentName:"tr",align:null},"The color used when an element has been focused (",(0,l.kt)("inlineCode",{parentName:"td"},":focus"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus-halo-inner-color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(o.QC,{mdxType:"ColorChip"},"background-color")),(0,l.kt)("td",{parentName:"tr",align:null},"The inner color of the ",(0,l.kt)("a",{parentName:"td",href:"/docs/foundations/accessibility#focus-halo"},"focus halo"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus-halo-outer-color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(o.QC,{mdxType:"ColorChip"},"focus-color")),(0,l.kt)("td",{parentName:"tr",align:null},"The outer color of the ",(0,l.kt)("a",{parentName:"td",href:"/docs/foundations/accessibility#focus-halo"},"focus halo"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$radius-base")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-radius-sm)")),(0,l.kt)("td",{parentName:"tr",align:null},"The main border radius used for component shapes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$hd-dpi")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200")),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum dots per inch (dpi) of a high-resolution screen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$hd-dppx")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"125")),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum dots per pixel unit (dppx) for a high-resolution screen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$min-xs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum width for an extra small screen: a handset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$min-sm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"600px")),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum width for a small screen: a large handset or small tablet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$min-md")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"960px")),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum width for a medium screen: a large tablet or small laptop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$min-lg")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1280px")),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum width for a large screen: a desktop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$min-xl")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1920px")),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum width for an extra large screen: a high-definition device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$duration-scalar")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"A multiplier used for increasing/decreasing all motion speed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-family-sans")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-family-system-sans)")),(0,l.kt)("td",{parentName:"tr",align:null},"The main sans serif font family")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-family-serif")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-family-system-serif)")),(0,l.kt)("td",{parentName:"tr",align:null},"The main serif font family")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-family-mono")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-family-system-mono)")),(0,l.kt)("td",{parentName:"tr",align:null},"The main monospace font family")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-family-base")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-family-sans)")),(0,l.kt)("td",{parentName:"tr",align:null},"The main font family that will be used throughout your application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-family-headings")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-family-base)")),(0,l.kt)("td",{parentName:"tr",align:null},"The font family that will be used for all headings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-root")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1em")),(0,l.kt)("td",{parentName:"tr",align:null},"The font size that is used to define ",(0,l.kt)("inlineCode",{parentName:"td"},"1rem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-xs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-12)")),(0,l.kt)("td",{parentName:"tr",align:null},"An extra small font size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-sm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-14)")),(0,l.kt)("td",{parentName:"tr",align:null},"A small font size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-md")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-16)")),(0,l.kt)("td",{parentName:"tr",align:null},"A medium font size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-lg")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-18)")),(0,l.kt)("td",{parentName:"tr",align:null},"A large font size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-h1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-32)")),(0,l.kt)("td",{parentName:"tr",align:null},"The font size used for the highest heading level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-h2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-24)")),(0,l.kt)("td",{parentName:"tr",align:null},"The font size used for second-level headings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-h3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-20)")),(0,l.kt)("td",{parentName:"tr",align:null},"The font size used for third-level headings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-h4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-18)")),(0,l.kt)("td",{parentName:"tr",align:null},"The font size used for fourth-level headings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-h5")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-16)")),(0,l.kt)("td",{parentName:"tr",align:null},"The font size used for fifth-level headings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-h6")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-14)")),(0,l.kt)("td",{parentName:"tr",align:null},"The font size used for sixth-level headings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-size-base")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-md)")),(0,l.kt)("td",{parentName:"tr",align:null},"The font size used on the body and to set most text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-weight-base")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-weight-regular)")),(0,l.kt)("td",{parentName:"tr",align:null},"The font weight used for body copy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$font-weight-headings")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"var(--nds-font-weight-bold)")),(0,l.kt)("td",{parentName:"tr",align:null},"The font weight used for headings")))),(0,l.kt)("h2",{id:"tokens"},"Tokens"),(0,l.kt)("p",null,"The tokens mixin sets the ",(0,l.kt)("a",{parentName:"p",href:"/docs/foundations"},"foundations")," that contain design tokens as global CSS custom properties on the ",(0,l.kt)("inlineCode",{parentName:"p"},":root")," element.\nYou will almost always want to set this as a global stylesheet, as most component styles use the CSS custom properties in their styling."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/tokens.scss"',title:'"Example:','src/styles/tokens.scss"':!0},"@use '@wwnds/core';\n\n@include core.tokens;\n")),(0,l.kt)("h2",{id:"reset"},"Reset"),(0,l.kt)("p",null,"The reset mixin is meant to be used to create a global stylesheet that ensures that all HTML elements are rendered consistently across browsers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/reset.scss"',title:'"Example:','src/styles/reset.scss"':!0},"@use '@wwnds/core';\n\n@include core.reset;\n")),(0,l.kt)("h2",{id:"components"},"Components"),(0,l.kt)("p",null,"The component API provides three levels of usage with different levels of customization to suit your needs."),(0,l.kt)("h3",{id:"all-components"},"All components"),(0,l.kt)("p",null,"All component declarations can be set at once in one mixin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/all-components.scss"',title:'"Example:','src/styles/all-components.scss"':!0},"@use '@wwnds/core';\n\n@include core.components;\n\n// resulting CSS will contain declarations for all components\n")),(0,l.kt)("h3",{id:"individual-components"},"Individual components"),(0,l.kt)("p",null,"Each individual component exposes a ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," mixin that is namespaced with the component's name on the top-level API (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"button-style"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/my-button.scss"',title:'"Example:','src/styles/my-button.scss"':!0},"@use '@wwnds/core';\n\n@include core.button-style;\n\n// resulting CSS will contain only button declarations\n")),(0,l.kt)("h3",{id:"fully-modular-mixins"},"Fully modular mixins"),(0,l.kt)("p",null,"Each component composes its styles via mixins.\nGenerally, these are applied to the component's anatomy with ",(0,l.kt)("a",{parentName:"p",href:"http://getbem.com/"},"BEM")," selectors but you can use them with your own selectors."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/my-button.scss"',title:'"Example:','src/styles/my-button.scss"':!0},"@use '@wwnds/core';\n\n.custom-button {\n    @include core.button-base;\n    @include core.button-solid;\n\n    // override or add your own styles\n    // border: 2px solid var(--nds-button-color-80);\n}\n\n.custom-button__icon {\n    @include core.button-icon;\n}\n\n// resulting CSS will contain only the above two declarations\n")),(0,l.kt)("h2",{id:"helpers"},"Helpers"),(0,l.kt)("p",null,"Helpers are composed declarations that help with common styling needs that are not connected to any component.\nUnlike ",(0,l.kt)("a",{parentName:"p",href:"#utilities"},"utilities"),", helpers always set multiple properties per declaration or compose styles together to meet a specific need."),(0,l.kt)("p",null,"Helpers are disabled by default and must be turned on by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"$enable-helpers")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/helpers.scss"',title:'"Example:','src/styles/helpers.scss"':!0},"@use '@wwnds/core' with (\n    $enable-helpers: true,\n);\n\n@include core.helpers;\n")),(0,l.kt)("h2",{id:"utilities"},"Utilities"),(0,l.kt)("p",null,"Utilities are declarations that set a single property and are turned off by default.\nTo enable them, they must be turned on with the ",(0,l.kt)("inlineCode",{parentName:"p"},"$enable-utilities")," map."),(0,l.kt)("p",null,"Note that the utility API is deliberately minimal and is not suited for production usage.\nIf you would like to use a more utility-focused approach, we like ",(0,l.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/utilities.scss"',title:'"Example:','src/styles/utilities.scss"':!0},"@use '@wwnds/core' with (\n    $enable-utilities: ('color', 'spacing'),\n);\n\n@include core.utilities;\n")),(0,l.kt)("h2",{id:"complete"},"Complete"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"complete")," mixin provides a single way to opt into every declaration.\nNote that this can also be accessed directly by using ",(0,l.kt)("inlineCode",{parentName:"p"},"@wwnds/core/full"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/norton-design-system.scss"',title:'"Example:','src/styles/norton-design-system.scss"':!0},"@use '@wwnds/core';\n\n@include core.complete;\n")))}k.isMDXComponent=!0}}]);