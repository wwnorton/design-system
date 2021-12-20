"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3096],{9182:function(e,t,n){n.d(t,{T:function(){return p},A:function(){return u}});var o=n(5773),a=n(7378),r=n(42),l=n.n(r),i=n(6871),s=n(8948),c=n(1884),d={features:"features_P2FH",feature__arrow:"feature__arrow_N0Yh",feature:"feature_v+yA","feature--linked":"feature--linked_-RQt",feature__header:"feature__header_1VJe",feature__icon:"feature__icon_vexP",feature__media:"feature__media_GceP",feature__img:"feature__img_e1i6",feature__tk:"feature__tk_S0FH",feature__link:"feature__link_oXWB","col-2":"col-2_TB8N","col-3":"col-3_cHVa"},p=function(e){var t,n=e.title,r=e.media,p=e.children,u=e.icon,m=e.href,h=e.basePath,f=void 0===h?"/":h,k=e.slug,w=void 0===k?"":k,v=e.tag,g=void 0===v?"div":v,N=e.columns,b=void 0===N?3:N,y=e.linkArrow,_=void 0!==y&&y,E=a.useState(null),x=E[0],D=E[1],C=(0,s.Z)(m||w?f+w:void 0),A=a.useMemo((function(){return"string"==typeof u?{variant:u}:"object"==typeof u?{icon:u}:{}}),[u]),O=a.useCallback((function(e){var t=e.children;return C?a.createElement(c.Z,{to:C,className:d.feature__link},t):a.createElement("span",{className:d.feature__link},t)}),[C]);return a.createElement(g,{className:l()(d.feature,d["col-"+b],(t={},t[d["feature--linked"]]=Boolean(C),t)),onClick:function(e){if(C){var t=window.getSelection();x&&t&&t.toString()&&t.containsNode(x,!0)||e.nativeEvent.composedPath().some((function(e){return e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()}))||(window.location.href=C)}},ref:D},r,a.createElement("div",{className:d.feature__header},u&&a.createElement("span",{className:d.feature__icon},a.createElement(i.Icon,(0,o.Z)({},A,{size:32}))),a.createElement(O,null,n,C&&_&&a.createElement(i.Icon,{variant:"arrow-right",className:d.feature__arrow}))),a.createElement("div",{className:d.feature__body},p))},u=function(e){var t=e.basePath,n=void 0===t?"/":t,r=e.columns,l=void 0===r?3:r,i=e.children;return a.createElement("ul",{className:d.features},a.Children.map(i,(function(e){if(a.isValidElement(e)){var t=e.props;return a.createElement(p,(0,o.Z)({columns:l},t,{basePath:n,tag:"li"}))}return null})))}},8538:function(e,t,n){n.d(t,{u:function(){return r}});var o=n(5773),a=n(7378),r=function(e){return a.createElement("svg",(0,o.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),a.createElement("title",null,"W. W. Norton & Company"),a.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))}},4659:function(e,t,n){n.d(t,{nD:function(){return m},QC:function(){return h},TT:function(){return f.T},AN:function(){return f.A},_A:function(){return g},l1:function(){return E}});var o=n(7378),a=n(4500),r=n.n(a),l=n(42),i=n.n(l),s=n(6871),c={colors:"colors_XsEU",stuck:"stuck_0FfI","color-use":"color-use_TRaE","color-use--success":"color-use--success_bJe-","color-use--error":"color-use--error_-1a-",wcag:"wcag_x90u","col-light":"col-light_CLuQ","col-dark":"col-dark_6+nk",grade:"grade_Ek6M",name:"name_EXob",hex:"hex_I6oB"},d=function(e){if(e){var t=e.aa,n=e.aaLarge;return e.aaa?"AAA":t?"AA":n?"AA Large":void 0}},p=function(e){var t=e.color,n=e.textLight,a=e.textDark,l=o.useState(),p=l[0],u=l[1],m=o.useState(),h=m[0],f=m[1],k=o.useState(),w=k[0],v=k[1],g=o.useState(null),N=g[0],b=g[1],y=o.useState(""),_=y[0],E=y[1],x=o.useMemo((function(){return t.replace("var(--","").replace(")","").replace("nds-","")}),[t]);return o.useLayoutEffect((function(){if(N){var e=window.getComputedStyle(N).backgroundColor,t=(s=e.replace(/[()rgb]/g,"").split(/\s+/g),c=s[0],p=s[1],m=s[2],h=parseInt(c,10).toString(16),k=parseInt(p,10).toString(16),w=parseInt(m,10).toString(16),1===h.length&&(h="0"+h),1===k.length&&(k="0"+k),1===w.length&&(w="0"+w),"#"+h+k+w);u(t);var o=r()({backgroundColor:t,textLight:n,textDark:a},{compact:!0,threshold:0})[0].combinations,l=o[0],i=o[1];E(l.contrast>i.contrast?"var(--nds-white)":"var(--nds-black)"),f({level:d(l.accessibility),ratio:l.contrast,hex:l.hex}),v({level:d(i.accessibility),ratio:i.contrast,hex:i.hex})}var s,c,p,m,h,k,w}),[N,n,a]),o.createElement("tr",{id:"color-"+x,ref:b,className:c.grade,style:{"--nds-text-color":_,"--nds-background-color":t}},o.createElement("td",{className:c.name},x),o.createElement("td",{className:c.hex},p),[h,w].map((function(e,t){if(!e)return null;var n=e.ratio,a=e.level,r=n>=3,l=i()(c["color-use"],r?c["color-use--success"]:c["color-use--error"]),d="https://whocanuse.com/?b="+p.replace("#","")+"&c="+(0===t?"ffffff":"000000");return o.createElement("td",{className:c[0===t?"col-light":"col-dark"],key:n},o.createElement("a",{className:c.wcag,href:d,target:"_blank",rel:"noopener noreferrer"},o.createElement("span",{className:l},o.createElement(s.Icon,{variant:r?"check":"close"})),n.toFixed(2),a&&" (WCAG "+a+")"))})))},u=function(e){var t=e.name,n=e.textLight,a=e.textDark;return o.createElement(o.Fragment,null,Array.from(Array(10).keys()).map((function(e){var r="var(--nds-"+t+"-"+10*(e+1)+")";return o.createElement(p,{color:r,textLight:n,textDark:a,key:r})})))},m=function(){var e=o.useState(null),t=e[0],n=e[1],a=o.useState(!1),r=a[0],l=a[1],d=o.useMemo((function(){return s.canUseDOM&&"IntersectionObserver"in window?new IntersectionObserver((function(e){var n=e[0];n.target===t&&l(n.intersectionRatio<1)}),{threshold:[1],rootMargin:"60px 0px 0px 0px"}):null}),[t]);o.useEffect((function(){return t&&d&&d.observe(t),function(){t&&d&&d.unobserve(t)}}),[t,d]);var p=o.useMemo((function(){var e;return i()(((e={})[c.stuck]=r,e))}),[r]);return o.createElement("table",{className:c.colors},o.createElement("thead",{ref:n},o.createElement("tr",null,o.createElement("th",{className:p},"Token name"),o.createElement("th",{className:p},"Hex value"),o.createElement("th",{className:p},"Contrast ratio against white"),o.createElement("th",{className:p},"Contrast ratio against black"))),o.createElement("tbody",null,["red","yellow","green","teal","cyan","blue","purple","navy","gray"].map((function(e){return o.createElement(u,{key:e,name:e,textLight:"#fff",textDark:"#000"})}))))},h=function(e){var t=e.children,n=e.color,a=o.useMemo((function(){return n||(["#","rgb"].some((function(e){return t.startsWith(e)}))?t:"var(--"+(t.startsWith("nds")?t:"nds-"+t)+")")}),[t,n]);return o.createElement("code",{className:"no-break"},o.createElement("span",{className:"color-chip"},o.createElement("span",{style:{backgroundColor:a}})),t)},f=n(9182),k=n(5773),w=n(8781),v=function(e){var t=e.name,n=e.required,a=e.type,r=e.description;return o.createElement("tr",null,o.createElement("td",null,o.createElement(s.FieldInfo,{indicator:n?"required":void 0,label:t})),o.createElement("td",null,o.createElement(w.Z,null,r)),o.createElement("td",null,o.createElement("code",{className:"code-wrap"},a.name.replace(" | undefined",""))))},g=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,a=n.displayName,r=n.props,l=Object.keys(r).map((function(e){var t=r[e];return o.createElement(v,(0,k.Z)({key:t.name},t))}));return o.createElement("table",{"aria-label":"Props for "+a},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Description"),o.createElement("th",null,"Type"))),o.createElement("tbody",null,l))},N=(n(8538),"usage_DMdX"),b="usage__good_zciF",y="usage__bad_-3MT",_="usage__why_j7vt",E=function(e){var t=e.good,n=e.bad,a=e.children;return o.createElement("section",{className:N},o.createElement(s.CalloutError,{title:"Don't",border:"bottom",tag:"div",className:y},n),o.createElement(s.CalloutSuccess,{title:"Do",border:"bottom",tag:"div",className:b},t),o.createElement("p",{className:_},o.createElement("strong",null,"Why"),": ",o.Children.map(a,(function(e){return o.isValidElement(e)?e.props.children:e}))))}},4729:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var o=n(5773),a=n(808),r=(n(7378),n(5318)),l=n(6871),i=n(4659),s=["components"],c={title:"Dropdown",description:"A dropdown allows the user to select an option from a list of options in an expandable overlay."},d=void 0,p={unversionedId:"components/dropdown",id:"components/dropdown",title:"Dropdown",description:"A dropdown allows the user to select an option from a list of options in an expandable overlay.",source:"@site/docs/components/dropdown.mdx",sourceDirName:"components",slug:"/components/dropdown",permalink:"/design-system/docs/components/dropdown",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/dropdown.mdx",tags:[],version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1618685757,formattedLastUpdatedAt:"4/17/2021",frontMatter:{title:"Dropdown",description:"A dropdown allows the user to select an option from a list of options in an expandable overlay."},sidebar:"components",previous:{title:"Disclosure",permalink:"/design-system/docs/components/disclosure"},next:{title:"Link",permalink:"/design-system/docs/components/link"}},u=[{value:"Anatomy",id:"anatomy",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"React API",id:"react-api",children:[{value:"Dropdown",id:"dropdown",children:[],level:3},{value:"Option",id:"option",children:[],level:3}],level:2}],m={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A dropdown allows the user to select an option from a list of options in an expandable overlay.")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Label")," - a short description or prompt that lets the user know what they will be selecting."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Button")," - a button that opens the dropdown listbox and displays the currently selected option.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Default text before selection should be "Select".'),(0,r.kt)("li",{parentName:"ul"},"A marker should be displayed to the right of the button's text to convey whether the dropdown listbox is open or closed."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Listbox")," - a container for the list of options that only appears when opened by the dropdown button."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Selected option")," - the currently selected option."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Options")," - the available options. Clicking an unselected option will select that option, deselect the currently selected option, and close the listbox.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use a dropdown to select one option from a collapsed set of available options."),(0,r.kt)("li",{parentName:"ul"},"By default, dropdown options are mutually exclusive. The user can only select 1 option."),(0,r.kt)("li",{parentName:"ul"},"When an option is selected, the dropdown closes and the selected option updates to display that item."),(0,r.kt)("li",{parentName:"ul"},"On load, the dropdown should display default text of ",(0,r.kt)("inlineCode",{parentName:"li"},'"Select"'),". The user should be able to change it back to ",(0,r.kt)("inlineCode",{parentName:"li"},'"Select"')," if they wish."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("kbd",null,"Down Arrow"),"/",(0,r.kt)("kbd",null,"Up Arrow")," moves focus to the next/previous options, respectively."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("kbd",null,"Home")," and ",(0,r.kt)("kbd",null,"End")," moves focus to the first/last options, respectively.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Dos")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Do keep dropdown options very concise.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If long options are unavoidable, then they can truncate when the dropdown is in a closed state, but they should wrap fully in the open state."))),(0,r.kt)("li",{parentName:"ul"},"Do ensure that the clickable area includes the entire selected option area and the icon."),(0,r.kt)("li",{parentName:"ul"},"Consider the most logical order to list options. Options could be listed alphabetically, chronologically, by popularity, etc.")))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don'ts")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Do not start all of the options in a dropdown with the same word or phrase."),(0,r.kt)("li",{parentName:"ul"},"If there are more than 6 options, consider using a combo box instead."),(0,r.kt)("li",{parentName:"ul"},"If there are 2 options, consider using ",(0,r.kt)("a",{parentName:"li",href:"radio-group"},"radio group")," or ",(0,r.kt)("a",{parentName:"li",href:"switch"},"switch")," instead.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If your interface needs to contain many of these selections, use dropdowns over radio buttons."))),(0,r.kt)("li",{parentName:"ul"},"Do not use a dropdown when the user can multi-select options. Use checkboxes instead."),(0,r.kt)("li",{parentName:"ul"},"If it is not absolutely necessary for a user to choose from a predefined set of options, then consider a ",(0,r.kt)("a",{parentName:"li",href:"text-field"},"text field")," for users to type their own information.")))),(0,r.kt)("h2",{id:"react-api"},"React API"),(0,r.kt)("p",null,"We expose two components for the dropdown API: the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/Dropdown"},"Dropdown"),"\nand the Option, which uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/BaseOption"},"BaseOption"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Dropdown, Option } from '@wwnds/react';\n")),(0,r.kt)("h3",{id:"dropdown"},"Dropdown"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Dropdown")," component does not expose a ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," or extend a full DOM interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dropdown label="Choose a sitcom" sort="ascending">\n    <Dropdown.Option>The Office</Dropdown.Option>\n    <Dropdown.Option>Community</Dropdown.Option>\n    <Dropdown.Option>Friends</Dropdown.Option>\n    <Dropdown.Option>Parks and Recreation</Dropdown.Option>\n    <Dropdown.Option>How I Met Your Mother</Dropdown.Option>\n    <Dropdown.Option>Modern Family</Dropdown.Option>\n    <Dropdown.Option disabled>The Big Bang Theory</Dropdown.Option>\n    <Dropdown.Option>Arrested Development</Dropdown.Option>\n</Dropdown>\n')),(0,r.kt)(i._A,{from:l.Dropdown,mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"option"},"Option"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," component extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"React.LiHTMLAttributes<HTMLLIElement>")," interface, and uses the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria/#option"},"ARIA option role"),"."),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dropdown")," also exposes the ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," as a static member (",(0,r.kt)("inlineCode",{parentName:"p"},"Dropdown.Option"),") for your convenience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Option>Community</Option>\n")),(0,r.kt)(i._A,{from:l.Option,mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);