"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1883],{9182:function(e,t,n){n.d(t,{T:function(){return u},A:function(){return d}});var a=n(5773),r=n(7378),o=n(42),l=n.n(o),s=n(6871),i=n(8948),c=n(1884),m={features:"features_P2FH",feature__arrow:"feature__arrow_N0Yh",feature:"feature_v+yA","feature--linked":"feature--linked_-RQt",feature__header:"feature__header_1VJe",feature__icon:"feature__icon_vexP",feature__media:"feature__media_GceP",feature__img:"feature__img_e1i6",feature__tk:"feature__tk_S0FH",feature__link:"feature__link_oXWB","col-2":"col-2_TB8N","col-3":"col-3_cHVa"},u=function(e){var t,n=e.title,o=e.media,u=e.children,d=e.icon,p=e.href,f=e.basePath,h=void 0===f?"/":f,v=e.slug,k=void 0===v?"":v,g=e.tag,N=void 0===g?"div":g,_=e.columns,b=void 0===_?3:_,E=e.linkArrow,w=void 0!==E&&E,y=r.useState(null),x=y[0],C=y[1],A=(0,i.Z)(p||k?h+k:void 0),M=r.useMemo((function(){return"string"==typeof d?{variant:d}:"object"==typeof d?{icon:d}:{}}),[d]),D=r.useCallback((function(e){var t=e.children;return A?r.createElement(c.Z,{to:A,className:m.feature__link},t):r.createElement("span",{className:m.feature__link},t)}),[A]);return r.createElement(N,{className:l()(m.feature,m["col-"+b],(t={},t[m["feature--linked"]]=Boolean(A),t)),onClick:function(e){if(A){var t=window.getSelection();x&&t&&t.toString()&&t.containsNode(x,!0)||e.nativeEvent.composedPath().some((function(e){return e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()}))||(window.location.href=A)}},ref:C},o,r.createElement("div",{className:m.feature__header},d&&r.createElement("span",{className:m.feature__icon},r.createElement(s.Icon,(0,a.Z)({},M,{size:32}))),r.createElement(D,null,n,A&&w&&r.createElement(s.Icon,{variant:"arrow-right",className:m.feature__arrow}))),r.createElement("div",{className:m.feature__body},u))},d=function(e){var t=e.basePath,n=void 0===t?"/":t,o=e.columns,l=void 0===o?3:o,s=e.children;return r.createElement("ul",{className:m.features},r.Children.map(s,(function(e){if(r.isValidElement(e)){var t=e.props;return r.createElement(u,(0,a.Z)({columns:l},t,{basePath:n,tag:"li"}))}return null})))}},8538:function(e,t,n){n.d(t,{u:function(){return o}});var a=n(5773),r=n(7378),o=function(e){return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),r.createElement("title",null,"W. W. Norton & Company"),r.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))}},4659:function(e,t,n){n.d(t,{nD:function(){return p},QC:function(){return f},TT:function(){return h.T},AN:function(){return h.A},_A:function(){return N},l1:function(){return y}});var a=n(7378),r=n(4500),o=n.n(r),l=n(42),s=n.n(l),i=n(6871),c={colors:"colors_XsEU",stuck:"stuck_0FfI","color-use":"color-use_TRaE","color-use--success":"color-use--success_bJe-","color-use--error":"color-use--error_-1a-",wcag:"wcag_x90u","col-light":"col-light_CLuQ","col-dark":"col-dark_6+nk",grade:"grade_Ek6M",name:"name_EXob",hex:"hex_I6oB"},m=function(e){if(e){var t=e.aa,n=e.aaLarge;return e.aaa?"AAA":t?"AA":n?"AA Large":void 0}},u=function(e){var t=e.color,n=e.textLight,r=e.textDark,l=a.useState(),u=l[0],d=l[1],p=a.useState(),f=p[0],h=p[1],v=a.useState(),k=v[0],g=v[1],N=a.useState(null),_=N[0],b=N[1],E=a.useState(""),w=E[0],y=E[1],x=a.useMemo((function(){return t.replace("var(--","").replace(")","").replace("nds-","")}),[t]);return a.useLayoutEffect((function(){if(_){var e=window.getComputedStyle(_).backgroundColor,t=(i=e.replace(/[()rgb]/g,"").split(/\s+/g),c=i[0],u=i[1],p=i[2],f=parseInt(c,10).toString(16),v=parseInt(u,10).toString(16),k=parseInt(p,10).toString(16),1===f.length&&(f="0"+f),1===v.length&&(v="0"+v),1===k.length&&(k="0"+k),"#"+f+v+k);d(t);var a=o()({backgroundColor:t,textLight:n,textDark:r},{compact:!0,threshold:0})[0].combinations,l=a[0],s=a[1];y(l.contrast>s.contrast?"var(--nds-white)":"var(--nds-black)"),h({level:m(l.accessibility),ratio:l.contrast,hex:l.hex}),g({level:m(s.accessibility),ratio:s.contrast,hex:s.hex})}var i,c,u,p,f,v,k}),[_,n,r]),a.createElement("tr",{id:"color-"+x,ref:b,className:c.grade,style:{"--nds-text-color":w,"--nds-background-color":t}},a.createElement("td",{className:c.name},x),a.createElement("td",{className:c.hex},u),[f,k].map((function(e,t){if(!e)return null;var n=e.ratio,r=e.level,o=n>=3,l=s()(c["color-use"],o?c["color-use--success"]:c["color-use--error"]),m="https://whocanuse.com/?b="+u.replace("#","")+"&c="+(0===t?"ffffff":"000000");return a.createElement("td",{className:c[0===t?"col-light":"col-dark"],key:n},a.createElement("a",{className:c.wcag,href:m,target:"_blank",rel:"noopener noreferrer"},a.createElement("span",{className:l},a.createElement(i.Icon,{variant:o?"check":"close"})),n.toFixed(2),r&&" (WCAG "+r+")"))})))},d=function(e){var t=e.name,n=e.textLight,r=e.textDark;return a.createElement(a.Fragment,null,Array.from(Array(10).keys()).map((function(e){var o="var(--nds-"+t+"-"+10*(e+1)+")";return a.createElement(u,{color:o,textLight:n,textDark:r,key:o})})))},p=function(){var e=a.useState(null),t=e[0],n=e[1],r=a.useState(!1),o=r[0],l=r[1],m=a.useMemo((function(){return i.canUseDOM&&"IntersectionObserver"in window?new IntersectionObserver((function(e){var n=e[0];n.target===t&&l(n.intersectionRatio<1)}),{threshold:[1],rootMargin:"60px 0px 0px 0px"}):null}),[t]);a.useEffect((function(){return t&&m&&m.observe(t),function(){t&&m&&m.unobserve(t)}}),[t,m]);var u=a.useMemo((function(){var e;return s()(((e={})[c.stuck]=o,e))}),[o]);return a.createElement("table",{className:c.colors},a.createElement("thead",{ref:n},a.createElement("tr",null,a.createElement("th",{className:u},"Token name"),a.createElement("th",{className:u},"Hex value"),a.createElement("th",{className:u},"Contrast ratio against white"),a.createElement("th",{className:u},"Contrast ratio against black"))),a.createElement("tbody",null,["red","yellow","green","teal","cyan","blue","purple","navy","gray"].map((function(e){return a.createElement(d,{key:e,name:e,textLight:"#fff",textDark:"#000"})}))))},f=function(e){var t=e.children,n=e.color,r=a.useMemo((function(){return n||(["#","rgb"].some((function(e){return t.startsWith(e)}))?t:"var(--"+(t.startsWith("nds")?t:"nds-"+t)+")")}),[t,n]);return a.createElement("code",{className:"no-break"},a.createElement("span",{className:"color-chip"},a.createElement("span",{style:{backgroundColor:r}})),t)},h=n(9182),v=n(5773),k=n(8781),g=function(e){var t=e.name,n=e.required,r=e.type,o=e.description;return a.createElement("tr",null,a.createElement("td",null,a.createElement(i.FieldInfo,{indicator:n?"required":void 0,label:t})),a.createElement("td",null,a.createElement(k.Z,null,o)),a.createElement("td",null,a.createElement("code",{className:"code-wrap"},r.name.replace(" | undefined",""))))},N=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,r=n.displayName,o=n.props,l=Object.keys(o).map((function(e){var t=o[e];return a.createElement(g,(0,v.Z)({key:t.name},t))}));return a.createElement("table",{"aria-label":"Props for "+r},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,l))},_=(n(8538),"usage_DMdX"),b="usage__good_zciF",E="usage__bad_-3MT",w="usage__why_j7vt",y=function(e){var t=e.good,n=e.bad,r=e.children;return a.createElement("section",{className:_},a.createElement(i.CalloutError,{title:"Don't",border:"bottom",tag:"div",className:E},n),a.createElement(i.CalloutSuccess,{title:"Do",border:"bottom",tag:"div",className:b},t),a.createElement("p",{className:w},a.createElement("strong",null,"Why"),": ",a.Children.map(r,(function(e){return a.isValidElement(e)?e.props.children:e}))))}},2157:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var a=n(5773),r=n(808),o=(n(7378),n(5318)),l=n(6871),s=n(4659),i=["components"],c={title:"Modal",description:"A modal presents important information or simple tasks to the user in an overlay."},m=void 0,u={unversionedId:"components/modal",id:"components/modal",title:"Modal",description:"A modal presents important information or simple tasks to the user in an overlay.",source:"@site/docs/components/modal.mdx",sourceDirName:"components",slug:"/components/modal",permalink:"/design-system/docs/components/modal",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/modal.mdx",tags:[],version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1618685757,formattedLastUpdatedAt:"4/17/2021",frontMatter:{title:"Modal",description:"A modal presents important information or simple tasks to the user in an overlay."},sidebar:"components",previous:{title:"Link",permalink:"/design-system/docs/components/link"},next:{title:"Popover",permalink:"/design-system/docs/components/popover"}},d=[{value:"Anatomy",id:"anatomy",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"React API",id:"react-api",children:[{value:"Modal",id:"modal",children:[],level:3}],level:2}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A modal presents important information or simple tasks to the user in an overlay.")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Modal container")," - the modal container provides a boundary for the contents of the modal."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Backdrop overlay")," - an overlay that prevents the user from interacting with the page's main content."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Title")," (",(0,o.kt)("em",{parentName:"li"},"recommended"),") - the name of the modal lets the user know what to expect from it and functions as a header for the body of the modal."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Body")," - the main content of the modal presents important information to the user or asks them to perform simple tasks before exiting the modal."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Close button")," (",(0,o.kt)("em",{parentName:"li"},"optional"),") - a button that will always close the modal.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This should always be included when no other controls exist inside the modal."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Action buttons")," (",(0,o.kt)("em",{parentName:"li"},"optional"),") - one or more actions that will result in the dismissal of the modal.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,'Use modals to present important information or simple tasks to the user, disabling all access to the main content while the modal is active.\nModals are sometimes called "modal dialogs" because they create a dialog between the application and the user in a different modality from the main content.'),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Dos")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Do use a modal to confirm irreversible actions, such as deleting content."),(0,o.kt)("li",{parentName:"ul"},"Do use a modal to interrupt the user when it will help them accomplish their tasks."),(0,o.kt)("li",{parentName:"ul"},'Do be careful about ambiguous action buttons, such as "Yes" or "No".')))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don'ts")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Don't overuse modals. They should be used sparingly and thoughtfully."),(0,o.kt)("li",{parentName:"ul"},"Don't write long titles for modals. They should be clear and concise.")))),(0,o.kt)("h2",{id:"react-api"},"React API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Modal } from '@wwnds/react';\n")),(0,o.kt)("h3",{id:"modal"},"Modal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function ModalWithButton() {\n    const [isOpen, setIsOpen] = React.useState(false);\n    const open = () => setIsOpen(true);\n    const close = () => setIsOpen(false);\n    return (\n        <>\n            <Button variant="solid" onClick={open}>Open the modal</Button>\n            <Modal\n                title="Confirm the prompt"\n                isOpen={isOpen}\n                onRequestClose={close}\n                actions={[\n                    <Button variant="outline" color="base" onClick={close}>\n                        Also confirm\n                    </Button>,\n                    <Button variant="solid" onClick={close}>\n                        Confirm\n                    </Button>,\n                ]}\n            >\n                <p>\n                    This is a demo modal.\n                    Real modals should have useful information here.\n                </p>\n            </Modal>\n        </>\n    );\n}\n')),(0,o.kt)(s._A,{from:l.Modal,mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);