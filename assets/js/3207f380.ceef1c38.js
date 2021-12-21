"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6997],{826:function(e,t,n){n.d(t,{T:function(){return m},A:function(){return d}});var a=n(5773),r=n(7378),o=n(42),l=n.n(o),c=n(6871),i=n(8948),s=n(1884),u={features:"features_P2FH",feature__arrow:"feature__arrow_N0Yh",feature:"feature_v+yA","feature--linked":"feature--linked_-RQt",feature__header:"feature__header_1VJe",feature__icon:"feature__icon_vexP",feature__media:"feature__media_GceP",feature__img:"feature__img_e1i6",feature__tk:"feature__tk_S0FH",feature__link:"feature__link_oXWB","col-2":"col-2_TB8N","col-3":"col-3_cHVa"},m=function(e){var t,n=e.title,o=e.media,m=e.children,d=e.icon,p=e.href,f=e.basePath,g=void 0===f?"/":f,h=e.slug,b=void 0===h?"":h,k=e.tag,v=void 0===k?"div":k,_=e.columns,E=void 0===_?3:_,N=e.linkArrow,y=void 0!==N&&N,w=r.useState(null),x=w[0],A=w[1],C=(0,i.Z)(p||b?g+b:void 0),B=r.useMemo((function(){return"string"==typeof d?{variant:d}:"object"==typeof d?{icon:d}:{}}),[d]),I=r.useCallback((function(e){var t=e.children;return C?r.createElement(s.Z,{to:C,className:u.feature__link},t):r.createElement("span",{className:u.feature__link},t)}),[C]);return r.createElement(v,{className:l()(u.feature,u["col-"+E],(t={},t[u["feature--linked"]]=Boolean(C),t)),onClick:function(e){if(C){var t=window.getSelection();x&&t&&t.toString()&&t.containsNode(x,!0)||e.nativeEvent.composedPath().some((function(e){return e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()}))||(window.location.href=C)}},ref:A},o,r.createElement("div",{className:u.feature__header},d&&r.createElement("span",{className:u.feature__icon},r.createElement(c.Icon,(0,a.Z)({},B,{size:32}))),r.createElement(I,null,n,C&&y&&r.createElement(c.Icon,{variant:"arrow-right",className:u.feature__arrow}))),r.createElement("div",{className:u.feature__body},m))},d=function(e){var t=e.basePath,n=void 0===t?"/":t,o=e.columns,l=void 0===o?3:o,c=e.children;return r.createElement("ul",{className:u.features},r.Children.map(c,(function(e){if(r.isValidElement(e)){var t=e.props;return r.createElement(m,(0,a.Z)({columns:l},t,{basePath:n,tag:"li"}))}return null})))}},8538:function(e,t,n){n.d(t,{u:function(){return o}});var a=n(5773),r=n(7378),o=function(e){return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),r.createElement("title",null,"W. W. Norton & Company"),r.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))}},1144:function(e,t,n){n.d(t,{nD:function(){return p},QC:function(){return f},TT:function(){return g.T},AN:function(){return g.A},_A:function(){return v}});var a=n(7378),r=n(4500),o=n.n(r),l=n(42),c=n.n(l),i=n(6871),s={colors:"colors_XsEU",stuck:"stuck_0FfI","color-use":"color-use_TRaE","color-use--success":"color-use--success_bJe-","color-use--error":"color-use--error_-1a-",wcag:"wcag_x90u","col-light":"col-light_CLuQ","col-dark":"col-dark_6+nk",grade:"grade_Ek6M",name:"name_EXob",hex:"hex_I6oB"},u=function(e){if(e){var t=e.aa,n=e.aaLarge;return e.aaa?"AAA":t?"AA":n?"AA Large":void 0}},m=function(e){var t=e.color,n=e.textLight,r=e.textDark,l=a.useState(),m=l[0],d=l[1],p=a.useState(),f=p[0],g=p[1],h=a.useState(),b=h[0],k=h[1],v=a.useState(null),_=v[0],E=v[1],N=a.useState(""),y=N[0],w=N[1],x=a.useMemo((function(){return t.replace("var(--","").replace(")","").replace("nds-","")}),[t]);return a.useLayoutEffect((function(){if(_){var e=window.getComputedStyle(_).backgroundColor,t=(i=e.replace(/[()rgb]/g,"").split(/\s+/g),s=i[0],m=i[1],p=i[2],f=parseInt(s,10).toString(16),h=parseInt(m,10).toString(16),b=parseInt(p,10).toString(16),1===f.length&&(f="0"+f),1===h.length&&(h="0"+h),1===b.length&&(b="0"+b),"#"+f+h+b);d(t);var a=o()({backgroundColor:t,textLight:n,textDark:r},{compact:!0,threshold:0})[0].combinations,l=a[0],c=a[1];w(l.contrast>c.contrast?"var(--nds-white)":"var(--nds-black)"),g({level:u(l.accessibility),ratio:l.contrast,hex:l.hex}),k({level:u(c.accessibility),ratio:c.contrast,hex:c.hex})}var i,s,m,p,f,h,b}),[_,n,r]),a.createElement("tr",{id:"color-"+x,ref:E,className:s.grade,style:{"--nds-text-color":y,"--nds-background-color":t}},a.createElement("td",{className:s.name},x),a.createElement("td",{className:s.hex},m),[f,b].map((function(e,t){if(!e)return null;var n=e.ratio,r=e.level,o=n>=3,l=c()(s["color-use"],o?s["color-use--success"]:s["color-use--error"]),u="https://whocanuse.com/?b="+m.replace("#","")+"&c="+(0===t?"ffffff":"000000");return a.createElement("td",{className:s[0===t?"col-light":"col-dark"],key:n},a.createElement("a",{className:s.wcag,href:u,target:"_blank",rel:"noopener noreferrer"},a.createElement("span",{className:l},a.createElement(i.Icon,{variant:o?"check":"close"})),n.toFixed(2),r&&" (WCAG "+r+")"))})))},d=function(e){var t=e.name,n=e.textLight,r=e.textDark;return a.createElement(a.Fragment,null,Array.from(Array(10).keys()).map((function(e){var o="var(--nds-"+t+"-"+10*(e+1)+")";return a.createElement(m,{color:o,textLight:n,textDark:r,key:o})})))},p=function(){var e=a.useState(null),t=e[0],n=e[1],r=a.useState(!1),o=r[0],l=r[1],u=a.useMemo((function(){return i.canUseDOM&&"IntersectionObserver"in window?new IntersectionObserver((function(e){var n=e[0];n.target===t&&l(n.intersectionRatio<1)}),{threshold:[1],rootMargin:"60px 0px 0px 0px"}):null}),[t]);a.useEffect((function(){return t&&u&&u.observe(t),function(){t&&u&&u.unobserve(t)}}),[t,u]);var m=a.useMemo((function(){var e;return c()(((e={})[s.stuck]=o,e))}),[o]);return a.createElement("table",{className:s.colors},a.createElement("thead",{ref:n},a.createElement("tr",null,a.createElement("th",{className:m},"Token name"),a.createElement("th",{className:m},"Hex value"),a.createElement("th",{className:m},"Contrast ratio against white"),a.createElement("th",{className:m},"Contrast ratio against black"))),a.createElement("tbody",null,["red","yellow","green","teal","cyan","blue","purple","navy","gray"].map((function(e){return a.createElement(d,{key:e,name:e,textLight:"#fff",textDark:"#000"})}))))},f=function(e){var t=e.children,n=e.color,r=a.useMemo((function(){return n||(["#","rgb"].some((function(e){return t.startsWith(e)}))?t:"var(--"+(t.startsWith("nds")?t:"nds-"+t)+")")}),[t,n]);return a.createElement("code",{className:"no-break"},a.createElement("span",{className:"color-chip"},a.createElement("span",{style:{backgroundColor:r}})),t)},g=n(826),h=n(5773),b=n(8781),k=function(e){var t=e.name,n=e.required,r=e.type,o=e.description;return a.createElement("tr",null,a.createElement("td",null,a.createElement(i.FieldInfo,{indicator:n?"required":void 0,label:t})),a.createElement("td",null,a.createElement(b.Z,null,o)),a.createElement("td",null,a.createElement("code",{className:"code-wrap"},r.name.replace(" | undefined",""))))},v=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,r=n.displayName,o=n.props,l=Object.keys(o).map((function(e){var t=o[e];return a.createElement(k,(0,h.Z)({key:t.name},t))}));return a.createElement("table",{"aria-label":"Props for "+r},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,l))};n(8538)},3343:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var a=n(5773),r=n(808),o=(n(7378),n(5318)),l=n(6871),c=n(1144),i=["components"],s={title:"Badge",description:"A badge brings attention to information about a related component."},u=void 0,m={unversionedId:"components/badge",id:"components/badge",title:"Badge",description:"A badge brings attention to information about a related component.",source:"@site/docs/components/badge.mdx",sourceDirName:"components",slug:"/components/badge",permalink:"/design-system/docs/components/badge",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/badge.mdx",tags:[],version:"current",lastUpdatedBy:"erinoh",lastUpdatedAt:1629150491,formattedLastUpdatedAt:"8/16/2021",frontMatter:{title:"Badge",description:"A badge brings attention to information about a related component."},sidebar:"components",previous:{title:"Components",permalink:"/design-system/docs/components"},next:{title:"Button",permalink:"/design-system/docs/components/button"}},d=[{value:"Anatomy",id:"anatomy",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"React API",id:"react-api",children:[{value:"Badge",id:"badge",children:[],level:3}],level:2}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A badge brings attention to information about a related component.")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"A container")," - an outline or background sets the badge apart from adjacent text."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"A label")," - the badge's label conveys a single piece of metadata about the component it references.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Use a badge to communicate notifications or other outstanding items."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A badge can be overlaid at the top right of another component, such as an icon, or next to another component, such as a label."),(0,o.kt)("li",{parentName:"ul"},"Badges are usually found next to a component they\u2019re describing and in these cases should be placed as close as possible.\nBadges are occasionally used to describe an entire screen or product (i.e. the Beta product badge)."),(0,o.kt)("li",{parentName:"ul"},"Badges are not interactive but may be used in conjunction with interactive components."),(0,o.kt)("li",{parentName:"ul"},"A dot badge (a small dot with no visible label) can be used on an interactive component to communicate something has been updated or needs attention.\nWhen the user interacts with the component, it should be clear what update is being communicated by the dot badge.")),(0,o.kt)(l.CalloutSuccess,{title:"Dos",mdxType:"CalloutSuccess"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do use approximate numbers larger than 999 (ie. 1K)."),(0,o.kt)("li",{parentName:"ul"},"Do use for static, non-dismissible information."))),(0,o.kt)(l.CalloutError,{title:"Don'ts",mdxType:"CalloutError"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Don\u2019t use a badge for specific numbers longer than 3 places."),(0,o.kt)("li",{parentName:"ul"},"Don\u2019t use a badge if users need to interact with or dismiss this information.\nInstead, use a tag for that."))),(0,o.kt)("h2",{id:"react-api"},"React API"),(0,o.kt)("p",null,"We expose one component for the badge API, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/Badge"},"Badge"),"."),(0,o.kt)("h3",{id:"badge"},"Badge"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Badge")," component extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"React.HTMLAttributes<HTMLSpanElement>")," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Badge } from '@wwnds/react';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"<Badge>Beta</Badge>\n")),(0,o.kt)(c._A,{from:l.Badge,mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);