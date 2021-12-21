"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[934],{826:function(e,t,n){n.d(t,{T:function(){return m},A:function(){return p}});var r=n(5773),a=n(7378),o=n(42),l=n.n(o),s=n(6871),i=n(8948),c=n(1884),u={features:"features_P2FH",feature__arrow:"feature__arrow_N0Yh",feature:"feature_v+yA","feature--linked":"feature--linked_-RQt",feature__header:"feature__header_1VJe",feature__icon:"feature__icon_vexP",feature__media:"feature__media_GceP",feature__img:"feature__img_e1i6",feature__tk:"feature__tk_S0FH",feature__link:"feature__link_oXWB","col-2":"col-2_TB8N","col-3":"col-3_cHVa"},m=function(e){var t,n=e.title,o=e.media,m=e.children,p=e.icon,d=e.href,h=e.basePath,f=void 0===h?"/":h,g=e.slug,k=void 0===g?"":g,v=e.tag,_=void 0===v?"div":v,b=e.columns,E=void 0===b?3:b,w=e.linkArrow,N=void 0!==w&&w,y=a.useState(null),x=y[0],S=y[1],A=(0,i.Z)(d||k?f+k:void 0),C=a.useMemo((function(){return"string"==typeof p?{variant:p}:"object"==typeof p?{icon:p}:{}}),[p]),T=a.useCallback((function(e){var t=e.children;return A?a.createElement(c.Z,{to:A,className:u.feature__link},t):a.createElement("span",{className:u.feature__link},t)}),[A]);return a.createElement(_,{className:l()(u.feature,u["col-"+E],(t={},t[u["feature--linked"]]=Boolean(A),t)),onClick:function(e){if(A){var t=window.getSelection();x&&t&&t.toString()&&t.containsNode(x,!0)||e.nativeEvent.composedPath().some((function(e){return e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()}))||(window.location.href=A)}},ref:S},o,a.createElement("div",{className:u.feature__header},p&&a.createElement("span",{className:u.feature__icon},a.createElement(s.Icon,(0,r.Z)({},C,{size:32}))),a.createElement(T,null,n,A&&N&&a.createElement(s.Icon,{variant:"arrow-right",className:u.feature__arrow}))),a.createElement("div",{className:u.feature__body},m))},p=function(e){var t=e.basePath,n=void 0===t?"/":t,o=e.columns,l=void 0===o?3:o,s=e.children;return a.createElement("ul",{className:u.features},a.Children.map(s,(function(e){if(a.isValidElement(e)){var t=e.props;return a.createElement(m,(0,r.Z)({columns:l},t,{basePath:n,tag:"li"}))}return null})))}},8538:function(e,t,n){n.d(t,{u:function(){return o}});var r=n(5773),a=n(7378),o=function(e){return a.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),a.createElement("title",null,"W. W. Norton & Company"),a.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))}},1144:function(e,t,n){n.d(t,{nD:function(){return d},QC:function(){return h},TT:function(){return f.T},AN:function(){return f.A},_A:function(){return _},l1:function(){return y}});var r=n(7378),a=n(4500),o=n.n(a),l=n(42),s=n.n(l),i=n(6871),c={colors:"colors_XsEU",stuck:"stuck_0FfI","color-use":"color-use_TRaE","color-use--success":"color-use--success_bJe-","color-use--error":"color-use--error_-1a-",wcag:"wcag_x90u","col-light":"col-light_CLuQ","col-dark":"col-dark_6+nk",grade:"grade_Ek6M",name:"name_EXob",hex:"hex_I6oB"},u=function(e){if(e){var t=e.aa,n=e.aaLarge;return e.aaa?"AAA":t?"AA":n?"AA Large":void 0}},m=function(e){var t=e.color,n=e.textLight,a=e.textDark,l=r.useState(),m=l[0],p=l[1],d=r.useState(),h=d[0],f=d[1],g=r.useState(),k=g[0],v=g[1],_=r.useState(null),b=_[0],E=_[1],w=r.useState(""),N=w[0],y=w[1],x=r.useMemo((function(){return t.replace("var(--","").replace(")","").replace("nds-","")}),[t]);return r.useLayoutEffect((function(){if(b){var e=window.getComputedStyle(b).backgroundColor,t=(i=e.replace(/[()rgb]/g,"").split(/\s+/g),c=i[0],m=i[1],d=i[2],h=parseInt(c,10).toString(16),g=parseInt(m,10).toString(16),k=parseInt(d,10).toString(16),1===h.length&&(h="0"+h),1===g.length&&(g="0"+g),1===k.length&&(k="0"+k),"#"+h+g+k);p(t);var r=o()({backgroundColor:t,textLight:n,textDark:a},{compact:!0,threshold:0})[0].combinations,l=r[0],s=r[1];y(l.contrast>s.contrast?"var(--nds-white)":"var(--nds-black)"),f({level:u(l.accessibility),ratio:l.contrast,hex:l.hex}),v({level:u(s.accessibility),ratio:s.contrast,hex:s.hex})}var i,c,m,d,h,g,k}),[b,n,a]),r.createElement("tr",{id:"color-"+x,ref:E,className:c.grade,style:{"--nds-text-color":N,"--nds-background-color":t}},r.createElement("td",{className:c.name},x),r.createElement("td",{className:c.hex},m),[h,k].map((function(e,t){if(!e)return null;var n=e.ratio,a=e.level,o=n>=3,l=s()(c["color-use"],o?c["color-use--success"]:c["color-use--error"]),u="https://whocanuse.com/?b="+m.replace("#","")+"&c="+(0===t?"ffffff":"000000");return r.createElement("td",{className:c[0===t?"col-light":"col-dark"],key:n},r.createElement("a",{className:c.wcag,href:u,target:"_blank",rel:"noopener noreferrer"},r.createElement("span",{className:l},r.createElement(i.Icon,{variant:o?"check":"close"})),n.toFixed(2),a&&" (WCAG "+a+")"))})))},p=function(e){var t=e.name,n=e.textLight,a=e.textDark;return r.createElement(r.Fragment,null,Array.from(Array(10).keys()).map((function(e){var o="var(--nds-"+t+"-"+10*(e+1)+")";return r.createElement(m,{color:o,textLight:n,textDark:a,key:o})})))},d=function(){var e=r.useState(null),t=e[0],n=e[1],a=r.useState(!1),o=a[0],l=a[1],u=r.useMemo((function(){return i.canUseDOM&&"IntersectionObserver"in window?new IntersectionObserver((function(e){var n=e[0];n.target===t&&l(n.intersectionRatio<1)}),{threshold:[1],rootMargin:"60px 0px 0px 0px"}):null}),[t]);r.useEffect((function(){return t&&u&&u.observe(t),function(){t&&u&&u.unobserve(t)}}),[t,u]);var m=r.useMemo((function(){var e;return s()(((e={})[c.stuck]=o,e))}),[o]);return r.createElement("table",{className:c.colors},r.createElement("thead",{ref:n},r.createElement("tr",null,r.createElement("th",{className:m},"Token name"),r.createElement("th",{className:m},"Hex value"),r.createElement("th",{className:m},"Contrast ratio against white"),r.createElement("th",{className:m},"Contrast ratio against black"))),r.createElement("tbody",null,["red","yellow","green","teal","cyan","blue","purple","navy","gray"].map((function(e){return r.createElement(p,{key:e,name:e,textLight:"#fff",textDark:"#000"})}))))},h=function(e){var t=e.children,n=e.color,a=r.useMemo((function(){return n||(["#","rgb"].some((function(e){return t.startsWith(e)}))?t:"var(--"+(t.startsWith("nds")?t:"nds-"+t)+")")}),[t,n]);return r.createElement("code",{className:"no-break"},r.createElement("span",{className:"color-chip"},r.createElement("span",{style:{backgroundColor:a}})),t)},f=n(826),g=n(5773),k=n(8781),v=function(e){var t=e.name,n=e.required,a=e.type,o=e.description;return r.createElement("tr",null,r.createElement("td",null,r.createElement(i.FieldInfo,{indicator:n?"required":void 0,label:t})),r.createElement("td",null,r.createElement(k.Z,null,o)),r.createElement("td",null,r.createElement("code",{className:"code-wrap"},a.name.replace(" | undefined",""))))},_=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,a=n.displayName,o=n.props,l=Object.keys(o).map((function(e){var t=o[e];return r.createElement(v,(0,g.Z)({key:t.name},t))}));return r.createElement("table",{"aria-label":"Props for "+a},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Description"),r.createElement("th",null,"Type"))),r.createElement("tbody",null,l))},b=(n(8538),"usage_DMdX"),E="usage__good_zciF",w="usage__bad_-3MT",N="usage__why_j7vt",y=function(e){var t=e.good,n=e.bad,a=e.children;return r.createElement("section",{className:b},r.createElement(i.CalloutError,{title:"Don't",border:"bottom",tag:"div",className:w},n),r.createElement(i.CalloutSuccess,{title:"Do",border:"bottom",tag:"div",className:E},t),r.createElement("p",{className:N},r.createElement("strong",null,"Why"),": ",r.Children.map(a,(function(e){return r.isValidElement(e)?e.props.children:e}))))}},7091:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return h}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),l=n(6871),s=n(1144),i=["components"],c={title:"Spinner",description:"A spinner lets the user know that something is processing or progressing."},u=void 0,m={unversionedId:"components/spinner",id:"components/spinner",title:"Spinner",description:"A spinner lets the user know that something is processing or progressing.",source:"@site/docs/components/spinner.mdx",sourceDirName:"components",slug:"/components/spinner",permalink:"/design-system/docs/components/spinner",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/spinner.mdx",tags:[],version:"current",lastUpdatedBy:"erinoh",lastUpdatedAt:1634144412,formattedLastUpdatedAt:"10/13/2021",frontMatter:{title:"Spinner",description:"A spinner lets the user know that something is processing or progressing."},sidebar:"components",previous:{title:"Radio Group",permalink:"/design-system/docs/components/radio-group"},next:{title:"Switch",permalink:"/design-system/docs/components/switch"}},p=[{value:"Anatomy",id:"anatomy",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"React API",id:"react-api",children:[{value:"Spinner",id:"spinner",children:[],level:3}],level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A spinner lets the user know that something is processing or progressing.")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Progress circle")," - the circle spins to convey that something is processing and fills clockwise to convey progress toward completion."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Label")," - a description of what is processing or progressing.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use a spinner when there will be a delay of more than 1 second in loading or completing an action."),(0,o.kt)("li",{parentName:"ul"},"A spinner can be used both when the amount of time is determined and when it is indeterminate."),(0,o.kt)("li",{parentName:"ul"},"If an application is loading, then the spinner will display and the user will be blocked from interacting with the application until it is loaded."),(0,o.kt)("li",{parentName:"ul"},"You can also use a progress bar.")),(0,o.kt)(l.CalloutSuccess,{title:"Do",mdxType:"CalloutSuccess"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do use only 1 spinner on the screen at a time."),(0,o.kt)("li",{parentName:"ul"},"For buttons with spinners, the button should always be disabled until the action completes and the spinner no longer displays on the button."))),(0,o.kt)(l.CalloutError,{title:"Don't",mdxType:"CalloutError"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Don\u2019t use a spinner for an immediate process (less than 1 second); nothing should display in that situation."),(0,o.kt)("li",{parentName:"ul"},"Don\u2019t use a spinner if most of the application can load very quickly except for some text or data elements; use a skeleton instead."))),(0,o.kt)(l.Callout,{title:"Indeterminate vs. Determinate",mdxType:"Callout"},(0,o.kt)("p",null,'The spinner is in "indeterminate" mode if it does not have a set value.\nThis conveys to users that something is processing without communicating how close it is to being complete.'),(0,o.kt)("div",{className:"callout__example"},(0,o.kt)(l.Spinner,{label:"Loading...",mdxType:"Spinner"})),(0,o.kt)("p",null,'When a spinner does have a set value, it is in "determinate" mode.\nThis gives the user an estimate of the percentage of time remaining until completion.'),(0,o.kt)("div",{className:"callout__example"},(0,o.kt)(l.Spinner,{label:"Downloading...",progress:.35,mdxType:"Spinner"}))),(0,o.kt)("h2",{id:"react-api"},"React API"),(0,o.kt)("p",null,"We expose one component for the spinner API, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/Spinner"},"Spinner"),"."),(0,o.kt)(l.Callout,{title:"Related concepts",mdxType:"Callout"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTML element: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"},"<","progress",">")),(0,o.kt)("li",{parentName:"ul"},"DOM interface: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement"},"HTMLProgressElement")),(0,o.kt)("li",{parentName:"ul"},"ARIA role: ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria/#progressbar"},"progressbar")))),(0,o.kt)("h3",{id:"spinner"},"Spinner"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Spinner")," component extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"React.HTMLAttributes<HTMLDivElement>")," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Spinner } from '@wwnds/react';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'/* set progress to a value between 0 and 1 to make determinate */\n<Spinner label="Loading..." progress={undefined} />\n')),(0,o.kt)(s._A,{from:l.Spinner,mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);