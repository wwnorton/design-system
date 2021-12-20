"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8895],{9182:function(e,t,n){n.d(t,{T:function(){return m},A:function(){return d}});var a=n(5773),r=n(7378),o=n(42),c=n.n(o),l=n(6871),i=n(8948),s=n(1884),u={features:"features_P2FH",feature__arrow:"feature__arrow_N0Yh",feature:"feature_v+yA","feature--linked":"feature--linked_-RQt",feature__header:"feature__header_1VJe",feature__icon:"feature__icon_vexP",feature__media:"feature__media_GceP",feature__img:"feature__img_e1i6",feature__tk:"feature__tk_S0FH",feature__link:"feature__link_oXWB","col-2":"col-2_TB8N","col-3":"col-3_cHVa"},m=function(e){var t,n=e.title,o=e.media,m=e.children,d=e.icon,h=e.href,p=e.basePath,f=void 0===p?"/":p,v=e.slug,k=void 0===v?"":v,g=e.tag,_=void 0===g?"div":g,b=e.columns,N=void 0===b?3:b,E=e.linkArrow,C=void 0!==E&&E,w=r.useState(null),y=w[0],x=w[1],A=(0,i.Z)(h||k?f+k:void 0),F=r.useMemo((function(){return"string"==typeof d?{variant:d}:"object"==typeof d?{icon:d}:{}}),[d]),I=r.useCallback((function(e){var t=e.children;return A?r.createElement(s.Z,{to:A,className:u.feature__link},t):r.createElement("span",{className:u.feature__link},t)}),[A]);return r.createElement(_,{className:c()(u.feature,u["col-"+N],(t={},t[u["feature--linked"]]=Boolean(A),t)),onClick:function(e){if(A){var t=window.getSelection();y&&t&&t.toString()&&t.containsNode(y,!0)||e.nativeEvent.composedPath().some((function(e){return e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()}))||(window.location.href=A)}},ref:x},o,r.createElement("div",{className:u.feature__header},d&&r.createElement("span",{className:u.feature__icon},r.createElement(l.Icon,(0,a.Z)({},F,{size:32}))),r.createElement(I,null,n,A&&C&&r.createElement(l.Icon,{variant:"arrow-right",className:u.feature__arrow}))),r.createElement("div",{className:u.feature__body},m))},d=function(e){var t=e.basePath,n=void 0===t?"/":t,o=e.columns,c=void 0===o?3:o,l=e.children;return r.createElement("ul",{className:u.features},r.Children.map(l,(function(e){if(r.isValidElement(e)){var t=e.props;return r.createElement(m,(0,a.Z)({columns:c},t,{basePath:n,tag:"li"}))}return null})))}},8538:function(e,t,n){n.d(t,{u:function(){return o}});var a=n(5773),r=n(7378),o=function(e){return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),r.createElement("title",null,"W. W. Norton & Company"),r.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))}},4659:function(e,t,n){n.d(t,{nD:function(){return h},QC:function(){return p},TT:function(){return f.T},AN:function(){return f.A},_A:function(){return _},l1:function(){return w}});var a=n(7378),r=n(4500),o=n.n(r),c=n(42),l=n.n(c),i=n(6871),s={colors:"colors_XsEU",stuck:"stuck_0FfI","color-use":"color-use_TRaE","color-use--success":"color-use--success_bJe-","color-use--error":"color-use--error_-1a-",wcag:"wcag_x90u","col-light":"col-light_CLuQ","col-dark":"col-dark_6+nk",grade:"grade_Ek6M",name:"name_EXob",hex:"hex_I6oB"},u=function(e){if(e){var t=e.aa,n=e.aaLarge;return e.aaa?"AAA":t?"AA":n?"AA Large":void 0}},m=function(e){var t=e.color,n=e.textLight,r=e.textDark,c=a.useState(),m=c[0],d=c[1],h=a.useState(),p=h[0],f=h[1],v=a.useState(),k=v[0],g=v[1],_=a.useState(null),b=_[0],N=_[1],E=a.useState(""),C=E[0],w=E[1],y=a.useMemo((function(){return t.replace("var(--","").replace(")","").replace("nds-","")}),[t]);return a.useLayoutEffect((function(){if(b){var e=window.getComputedStyle(b).backgroundColor,t=(i=e.replace(/[()rgb]/g,"").split(/\s+/g),s=i[0],m=i[1],h=i[2],p=parseInt(s,10).toString(16),v=parseInt(m,10).toString(16),k=parseInt(h,10).toString(16),1===p.length&&(p="0"+p),1===v.length&&(v="0"+v),1===k.length&&(k="0"+k),"#"+p+v+k);d(t);var a=o()({backgroundColor:t,textLight:n,textDark:r},{compact:!0,threshold:0})[0].combinations,c=a[0],l=a[1];w(c.contrast>l.contrast?"var(--nds-white)":"var(--nds-black)"),f({level:u(c.accessibility),ratio:c.contrast,hex:c.hex}),g({level:u(l.accessibility),ratio:l.contrast,hex:l.hex})}var i,s,m,h,p,v,k}),[b,n,r]),a.createElement("tr",{id:"color-"+y,ref:N,className:s.grade,style:{"--nds-text-color":C,"--nds-background-color":t}},a.createElement("td",{className:s.name},y),a.createElement("td",{className:s.hex},m),[p,k].map((function(e,t){if(!e)return null;var n=e.ratio,r=e.level,o=n>=3,c=l()(s["color-use"],o?s["color-use--success"]:s["color-use--error"]),u="https://whocanuse.com/?b="+m.replace("#","")+"&c="+(0===t?"ffffff":"000000");return a.createElement("td",{className:s[0===t?"col-light":"col-dark"],key:n},a.createElement("a",{className:s.wcag,href:u,target:"_blank",rel:"noopener noreferrer"},a.createElement("span",{className:c},a.createElement(i.Icon,{variant:o?"check":"close"})),n.toFixed(2),r&&" (WCAG "+r+")"))})))},d=function(e){var t=e.name,n=e.textLight,r=e.textDark;return a.createElement(a.Fragment,null,Array.from(Array(10).keys()).map((function(e){var o="var(--nds-"+t+"-"+10*(e+1)+")";return a.createElement(m,{color:o,textLight:n,textDark:r,key:o})})))},h=function(){var e=a.useState(null),t=e[0],n=e[1],r=a.useState(!1),o=r[0],c=r[1],u=a.useMemo((function(){return i.canUseDOM&&"IntersectionObserver"in window?new IntersectionObserver((function(e){var n=e[0];n.target===t&&c(n.intersectionRatio<1)}),{threshold:[1],rootMargin:"60px 0px 0px 0px"}):null}),[t]);a.useEffect((function(){return t&&u&&u.observe(t),function(){t&&u&&u.unobserve(t)}}),[t,u]);var m=a.useMemo((function(){var e;return l()(((e={})[s.stuck]=o,e))}),[o]);return a.createElement("table",{className:s.colors},a.createElement("thead",{ref:n},a.createElement("tr",null,a.createElement("th",{className:m},"Token name"),a.createElement("th",{className:m},"Hex value"),a.createElement("th",{className:m},"Contrast ratio against white"),a.createElement("th",{className:m},"Contrast ratio against black"))),a.createElement("tbody",null,["red","yellow","green","teal","cyan","blue","purple","navy","gray"].map((function(e){return a.createElement(d,{key:e,name:e,textLight:"#fff",textDark:"#000"})}))))},p=function(e){var t=e.children,n=e.color,r=a.useMemo((function(){return n||(["#","rgb"].some((function(e){return t.startsWith(e)}))?t:"var(--"+(t.startsWith("nds")?t:"nds-"+t)+")")}),[t,n]);return a.createElement("code",{className:"no-break"},a.createElement("span",{className:"color-chip"},a.createElement("span",{style:{backgroundColor:r}})),t)},f=n(9182),v=n(5773),k=n(8781),g=function(e){var t=e.name,n=e.required,r=e.type,o=e.description;return a.createElement("tr",null,a.createElement("td",null,a.createElement(i.FieldInfo,{indicator:n?"required":void 0,label:t})),a.createElement("td",null,a.createElement(k.Z,null,o)),a.createElement("td",null,a.createElement("code",{className:"code-wrap"},r.name.replace(" | undefined",""))))},_=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,r=n.displayName,o=n.props,c=Object.keys(o).map((function(e){var t=o[e];return a.createElement(g,(0,v.Z)({key:t.name},t))}));return a.createElement("table",{"aria-label":"Props for "+r},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,c))},b=(n(8538),"usage_DMdX"),N="usage__good_zciF",E="usage__bad_-3MT",C="usage__why_j7vt",w=function(e){var t=e.good,n=e.bad,r=e.children;return a.createElement("section",{className:b},a.createElement(i.CalloutError,{title:"Don't",border:"bottom",tag:"div",className:E},n),a.createElement(i.CalloutSuccess,{title:"Do",border:"bottom",tag:"div",className:N},t),a.createElement("p",{className:C},a.createElement("strong",null,"Why"),": ",a.Children.map(r,(function(e){return a.isValidElement(e)?e.props.children:e}))))}},8952:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return p}});var a=n(5773),r=n(808),o=(n(7378),n(5318)),c=n(6871),l=n(4659),i=["components"],s={title:"Choice Field",description:"A choice field allows the user to choose one or more option from a set of related options."},u=void 0,m={unversionedId:"components/choice-field",id:"components/choice-field",title:"Choice Field",description:"A choice field allows the user to choose one or more option from a set of related options.",source:"@site/docs/components/choice-field.mdx",sourceDirName:"components",slug:"/components/choice-field",permalink:"/design-system/docs/components/choice-field",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/choice-field.mdx",tags:[],version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1618685757,formattedLastUpdatedAt:"4/17/2021",frontMatter:{title:"Choice Field",description:"A choice field allows the user to choose one or more option from a set of related options."},sidebar:"components",previous:{title:"Checkbox",permalink:"/design-system/docs/components/checkbox"},next:{title:"Disclosure",permalink:"/design-system/docs/components/disclosure"}},d=[{value:"Anatomy",id:"anatomy",children:[],level:2},{value:"React API",id:"react-api",children:[{value:"ChoiceField",id:"choicefield",children:[],level:3},{value:"Choice",id:"choice",children:[],level:3}],level:2}],h={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A choice field allows the user to choose one or more option from a set of related options.")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Label"),": text that conveys how the choices are related and prompts the user to choose one or more choice."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Current selection"),": a selected choice indicates that it will be included when the field is submitted."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Choices"),": the available choices.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the Choice Field is single-choice, all choices should be ",(0,o.kt)("a",{parentName:"li",href:"radio-group#radio-button"},"radio buttons"),"."),(0,o.kt)("li",{parentName:"ul"},"If the Choice Field is multiple-choice, all choices should be ",(0,o.kt)("a",{parentName:"li",href:"checkbox#checkbox"},"checkboxes"),".")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Usage")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In most cases, this component should not be used directly.\nRather, you should choose ahead of time whether your field should be single-choice or multi-choice and use the corresponding implementation."),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"For single-choice, use the ",(0,o.kt)("a",{parentName:"li",href:"radio-group#radio-group"},"Radio Group"),"."),(0,o.kt)("li",{parentName:"ul"},"For multi-choice, use the ",(0,o.kt)("a",{parentName:"li",href:"checkbox#checkbox-group"},"Checkbox Group"),".")))),(0,o.kt)("h2",{id:"react-api"},"React API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Choice, ChoiceField } from '@wwnds/react';\n")),(0,o.kt)("h3",{id:"choicefield"},"ChoiceField"),(0,o.kt)("p",null,"To switch a ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceField")," between single- and multi-choice, add or remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"multiple")," prop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ChoiceField label="Choose your favorite fruits." name="fruit" multiple>\n    <Choice>Apple</Choice>\n    <Choice>Banana</Choice>\n    <Choice>Kiwi</Choice>\n    <Choice>Orange</Choice>\n</ChoiceField>\n')),(0,o.kt)(l._A,{from:c.ChoiceField,mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"choice"},"Choice"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Choice>Apple</Choice>\n")),(0,o.kt)(l._A,{from:c.Choice,mdxType:"PropsTable"}))}p.isMDXComponent=!0}}]);