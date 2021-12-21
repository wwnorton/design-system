"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2576],{826:function(e,t,n){n.d(t,{T:function(){return d},A:function(){return m}});var a=n(5773),o=n(7378),r=n(42),l=n.n(r),i=n(6871),s=n(8948),c=n(1884),u={features:"features_P2FH",feature__arrow:"feature__arrow_N0Yh",feature:"feature_v+yA","feature--linked":"feature--linked_-RQt",feature__header:"feature__header_1VJe",feature__icon:"feature__icon_vexP",feature__media:"feature__media_GceP",feature__img:"feature__img_e1i6",feature__tk:"feature__tk_S0FH",feature__link:"feature__link_oXWB","col-2":"col-2_TB8N","col-3":"col-3_cHVa"},d=function(e){var t,n=e.title,r=e.media,d=e.children,m=e.icon,p=e.href,h=e.basePath,f=void 0===h?"/":h,g=e.slug,v=void 0===g?"":g,k=e.tag,b=void 0===k?"div":k,y=e.columns,_=void 0===y?3:y,E=e.linkArrow,N=void 0!==E&&E,x=o.useState(null),w=x[0],C=x[1],T=(0,s.Z)(p||v?f+v:void 0),A=o.useMemo((function(){return"string"==typeof m?{variant:m}:"object"==typeof m?{icon:m}:{}}),[m]),I=o.useCallback((function(e){var t=e.children;return T?o.createElement(c.Z,{to:T,className:u.feature__link},t):o.createElement("span",{className:u.feature__link},t)}),[T]);return o.createElement(b,{className:l()(u.feature,u["col-"+_],(t={},t[u["feature--linked"]]=Boolean(T),t)),onClick:function(e){if(T){var t=window.getSelection();w&&t&&t.toString()&&t.containsNode(w,!0)||e.nativeEvent.composedPath().some((function(e){return e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()}))||(window.location.href=T)}},ref:C},r,o.createElement("div",{className:u.feature__header},m&&o.createElement("span",{className:u.feature__icon},o.createElement(i.Icon,(0,a.Z)({},A,{size:32}))),o.createElement(I,null,n,T&&N&&o.createElement(i.Icon,{variant:"arrow-right",className:u.feature__arrow}))),o.createElement("div",{className:u.feature__body},d))},m=function(e){var t=e.basePath,n=void 0===t?"/":t,r=e.columns,l=void 0===r?3:r,i=e.children;return o.createElement("ul",{className:u.features},o.Children.map(i,(function(e){if(o.isValidElement(e)){var t=e.props;return o.createElement(d,(0,a.Z)({columns:l},t,{basePath:n,tag:"li"}))}return null})))}},8538:function(e,t,n){n.d(t,{u:function(){return r}});var a=n(5773),o=n(7378),r=function(e){return o.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),o.createElement("title",null,"W. W. Norton & Company"),o.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))}},1144:function(e,t,n){n.d(t,{nD:function(){return p},QC:function(){return h},TT:function(){return f.T},AN:function(){return f.A},_A:function(){return b}});var a=n(7378),o=n(4500),r=n.n(o),l=n(42),i=n.n(l),s=n(6871),c={colors:"colors_XsEU",stuck:"stuck_0FfI","color-use":"color-use_TRaE","color-use--success":"color-use--success_bJe-","color-use--error":"color-use--error_-1a-",wcag:"wcag_x90u","col-light":"col-light_CLuQ","col-dark":"col-dark_6+nk",grade:"grade_Ek6M",name:"name_EXob",hex:"hex_I6oB"},u=function(e){if(e){var t=e.aa,n=e.aaLarge;return e.aaa?"AAA":t?"AA":n?"AA Large":void 0}},d=function(e){var t=e.color,n=e.textLight,o=e.textDark,l=a.useState(),d=l[0],m=l[1],p=a.useState(),h=p[0],f=p[1],g=a.useState(),v=g[0],k=g[1],b=a.useState(null),y=b[0],_=b[1],E=a.useState(""),N=E[0],x=E[1],w=a.useMemo((function(){return t.replace("var(--","").replace(")","").replace("nds-","")}),[t]);return a.useLayoutEffect((function(){if(y){var e=window.getComputedStyle(y).backgroundColor,t=(s=e.replace(/[()rgb]/g,"").split(/\s+/g),c=s[0],d=s[1],p=s[2],h=parseInt(c,10).toString(16),g=parseInt(d,10).toString(16),v=parseInt(p,10).toString(16),1===h.length&&(h="0"+h),1===g.length&&(g="0"+g),1===v.length&&(v="0"+v),"#"+h+g+v);m(t);var a=r()({backgroundColor:t,textLight:n,textDark:o},{compact:!0,threshold:0})[0].combinations,l=a[0],i=a[1];x(l.contrast>i.contrast?"var(--nds-white)":"var(--nds-black)"),f({level:u(l.accessibility),ratio:l.contrast,hex:l.hex}),k({level:u(i.accessibility),ratio:i.contrast,hex:i.hex})}var s,c,d,p,h,g,v}),[y,n,o]),a.createElement("tr",{id:"color-"+w,ref:_,className:c.grade,style:{"--nds-text-color":N,"--nds-background-color":t}},a.createElement("td",{className:c.name},w),a.createElement("td",{className:c.hex},d),[h,v].map((function(e,t){if(!e)return null;var n=e.ratio,o=e.level,r=n>=3,l=i()(c["color-use"],r?c["color-use--success"]:c["color-use--error"]),u="https://whocanuse.com/?b="+d.replace("#","")+"&c="+(0===t?"ffffff":"000000");return a.createElement("td",{className:c[0===t?"col-light":"col-dark"],key:n},a.createElement("a",{className:c.wcag,href:u,target:"_blank",rel:"noopener noreferrer"},a.createElement("span",{className:l},a.createElement(s.Icon,{variant:r?"check":"close"})),n.toFixed(2),o&&" (WCAG "+o+")"))})))},m=function(e){var t=e.name,n=e.textLight,o=e.textDark;return a.createElement(a.Fragment,null,Array.from(Array(10).keys()).map((function(e){var r="var(--nds-"+t+"-"+10*(e+1)+")";return a.createElement(d,{color:r,textLight:n,textDark:o,key:r})})))},p=function(){var e=a.useState(null),t=e[0],n=e[1],o=a.useState(!1),r=o[0],l=o[1],u=a.useMemo((function(){return s.canUseDOM&&"IntersectionObserver"in window?new IntersectionObserver((function(e){var n=e[0];n.target===t&&l(n.intersectionRatio<1)}),{threshold:[1],rootMargin:"60px 0px 0px 0px"}):null}),[t]);a.useEffect((function(){return t&&u&&u.observe(t),function(){t&&u&&u.unobserve(t)}}),[t,u]);var d=a.useMemo((function(){var e;return i()(((e={})[c.stuck]=r,e))}),[r]);return a.createElement("table",{className:c.colors},a.createElement("thead",{ref:n},a.createElement("tr",null,a.createElement("th",{className:d},"Token name"),a.createElement("th",{className:d},"Hex value"),a.createElement("th",{className:d},"Contrast ratio against white"),a.createElement("th",{className:d},"Contrast ratio against black"))),a.createElement("tbody",null,["red","yellow","green","teal","cyan","blue","purple","navy","gray"].map((function(e){return a.createElement(m,{key:e,name:e,textLight:"#fff",textDark:"#000"})}))))},h=function(e){var t=e.children,n=e.color,o=a.useMemo((function(){return n||(["#","rgb"].some((function(e){return t.startsWith(e)}))?t:"var(--"+(t.startsWith("nds")?t:"nds-"+t)+")")}),[t,n]);return a.createElement("code",{className:"no-break"},a.createElement("span",{className:"color-chip"},a.createElement("span",{style:{backgroundColor:o}})),t)},f=n(826),g=n(5773),v=n(8781),k=function(e){var t=e.name,n=e.required,o=e.type,r=e.description;return a.createElement("tr",null,a.createElement("td",null,a.createElement(s.FieldInfo,{indicator:n?"required":void 0,label:t})),a.createElement("td",null,a.createElement(v.Z,null,r)),a.createElement("td",null,a.createElement("code",{className:"code-wrap"},o.name.replace(" | undefined",""))))},b=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,o=n.displayName,r=n.props,l=Object.keys(r).map((function(e){var t=r[e];return a.createElement(k,(0,g.Z)({key:t.name},t))}));return a.createElement("table",{"aria-label":"Props for "+o},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,l))};n(8538)},8229:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=n(5773),o=n(808),r=(n(7378),n(5318)),l=n(6871),i=n(1144),s=["components"],c={title:"Tooltip"},u=void 0,d={unversionedId:"components/tooltip",id:"components/tooltip",title:"Tooltip",description:"A tooltip displays the name of or description for a related element on demand.",source:"@site/docs/components/tooltip.mdx",sourceDirName:"components",slug:"/components/tooltip",permalink:"/design-system/docs/components/tooltip",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/tooltip.mdx",tags:[],version:"current",lastUpdatedBy:"erinoh",lastUpdatedAt:1640114877,formattedLastUpdatedAt:"12/21/2021",frontMatter:{title:"Tooltip"},sidebar:"components",previous:{title:"Tag",permalink:"/design-system/docs/components/tag"},next:{title:"React Providers",permalink:"/design-system/docs/components/react-providers"}},m=[{value:"Anatomy",id:"anatomy",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Naming and describing",id:"naming-and-describing",children:[{value:"Naming",id:"naming",children:[],level:3},{value:"Describing",id:"describing",children:[],level:3}],level:2},{value:"React API",id:"react-api",children:[{value:"Tooltip",id:"tooltip",children:[],level:3}],level:2}],p={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A tooltip displays the name of or description for a related element on demand.")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Text")," - tooltip text names or describes a related element.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the related element does not have a name, the tooltip text is used to name it."),(0,r.kt)("li",{parentName:"ul"},"If the related element already has a name, the tooltip text is used to add description to the related element."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Arrow")," - a visual indicator that points to the related element.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Use tooltips when there is not enough physical space to display the name or description of an interactive element.\nTooltips provide a mechanism for a simplifying the visual design of an interface.\nBut in exchange, users will have a harder time understanding and discovering the role of the tooltipped element, so use them sparingly and thoughtfully."),(0,r.kt)(l.CalloutSuccess,{title:"Do",mdxType:"CalloutSuccess"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Do use a tooltip to label an interactive element with no visible text such as a button with no text."),(0,r.kt)("li",null,"Do use a tooltip to provide add additional descriptive information to a named element."))),(0,r.kt)(l.CalloutError,{title:"Don't",mdxType:"CalloutError"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Don't use a tooltip if the contents of the tooltip contain any meaningful markup such as italics, headings, or lists."),(0,r.kt)("li",null,"Don't use a tooltip if the contents of the tooltip contain interactive elements, such as links, buttons, or form controls."))),(0,r.kt)(l.Callout,{title:"Use a tooltip...",border:"left",mdxType:"Callout"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"to name a control when there isn't enough space to display the label inline."),(0,r.kt)("li",null,"to display an additional description about a control or element that already has an accessible name."))),(0,r.kt)("h2",{id:"naming-and-describing"},"Naming and describing"),(0,r.kt)("p",null,"In the Norton design system, a tooltip can only be used to ",(0,r.kt)("a",{parentName:"p",href:"https://w3c.github.io/aria-practices/#accessible_names"},"name"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"https://w3c.github.io/aria-practices/#accessible_descriptions"},"describe")," its related element.\nThis restriction ensures that the user experience of the tooltip is consistent for everyone."),(0,r.kt)("h3",{id:"naming"},"Naming"),(0,r.kt)("p",null,"A tooltip is said to be ",(0,r.kt)("strong",{parentName:"p"},"naming")," its related element when it is acting as a label for that element.\nFor instance, an icon button's call to action could be captured as a tooltip to ensure that the purpose of the icon button is clear to everyone.\nIf the element contains textual content and you also want to use a tooltip to add additional context, the tooltip should be a describing tooltip."),(0,r.kt)(l.CalloutWarning,{title:"Naming tooltips & screen reader experience",mdxType:"CalloutWarning"},(0,r.kt)("p",null,"When a tooltip ",(0,r.kt)("strong",{parentName:"p"},"names")," its related element, screen readers will read the value of the tooltip when they encounter the related element, entirely ignoring any textual content inside the element.\nFor this reason, naming tooltips should only be used for elements that do not already contain textual content.")),(0,r.kt)("h3",{id:"describing"},"Describing"),(0,r.kt)("p",null,"A tooltip is said to be ",(0,r.kt)("strong",{parentName:"p"},"describing")," its related element when it is acting as additional or supplemental information about an element that already has a name.\nFor instance, an ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>")," that already has an associated ",(0,r.kt)("inlineCode",{parentName:"p"},"<label>")," could use a tooltip to display help text about the expected input format."),(0,r.kt)(l.CalloutWarning,{title:"Describing tooltips & screen reader experience",mdxType:"CalloutWarning"},(0,r.kt)("p",null,"When a tooltip ",(0,r.kt)("strong",{parentName:"p"},"describes")," its related element, many screen readers will read the name of the related element, pause briefly, and then read the description contained in the tooltip.")),(0,r.kt)("h2",{id:"react-api"},"React API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Tooltip } from '@wwnds/react';\n")),(0,r.kt)("h3",{id:"tooltip"},"Tooltip"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"function ButtonWithTooltip() {\n    const [button, setButton] = React.useState(null);\n    return (\n        <div style={{ margin: '2rem 0' }}>\n            <Button variant=\"solid\" ref={setButton}>I'm a reference element</Button>\n            <Tooltip\n                isOpen\n                placement=\"top\"\n                reference={button}\n            >\n                I'm a tooltip!\n            </Tooltip>\n        </div>\n    );\n}\n")),(0,r.kt)(i._A,{from:l.Tooltip,mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);