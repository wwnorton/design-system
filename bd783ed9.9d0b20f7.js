(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var o=a(3),n=a(7),r=(a(0),a(123)),i=a(144),s={title:"Components",slug:"/components"},c={unversionedId:"components/index",id:"components/index",isDocsHomePage:!1,title:"Components",description:"Components are the building blocks of the design system.",source:"@site/docs/components/index.md",slug:"/components",permalink:"/design-system/docs/components",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/index.md",version:"current",lastUpdatedBy:"Jon SY",lastUpdatedAt:1613086963,sidebar:"components",next:{title:"Button",permalink:"/design-system/docs/components/button"}},u=[],l={rightToc:u};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Components are the building blocks of the design system.")),Object(r.b)("p",null,"A component describes a common pattern that can be composed together with other components and content to create larger things like pages or applications.\nIn order to facilitate composition, components seek to do one thing well and be as simple as possible while still providing options for customization."),Object(r.b)(i.c,{basePath:"/docs/components/",columns:3,mdxType:"Features"},Object(r.b)(i.a,{title:"Button",slug:"button",media:Object(r.b)(i.b,{src:"/img/button.png",mdxType:"FeatureImage"}),mdxType:"FeatureCard"},"A button allows the user to perform an action."),Object(r.b)(i.a,{title:"Checkbox",slug:"checkbox",media:Object(r.b)(i.b,{src:"/img/checkbox.png",mdxType:"FeatureImage"}),mdxType:"FeatureCard"},"A checkbox allows the user to check or uncheck an option."),Object(r.b)(i.a,{title:"Choice Field",slug:"choice-field",media:Object(r.b)(i.b,{mdxType:"FeatureImage"}),mdxType:"FeatureCard"},"A choice field allows the user to choose one or more option from a set of related options."),Object(r.b)(i.a,{title:"Disclosure",slug:"disclosure",media:Object(r.b)(i.b,{src:"/img/disclosure.png",mdxType:"FeatureImage"}),mdxType:"FeatureCard"},"A disclosure allows the user to show and hide additional content."),Object(r.b)(i.a,{title:"Dropdown",slug:"dropdown",media:Object(r.b)(i.b,{mdxType:"FeatureImage"}),mdxType:"FeatureCard"},"A dropdown allows the user to select an option from a list of options in an expandable overlay."),Object(r.b)(i.a,{title:"Link",slug:"link",media:Object(r.b)(i.b,{mdxType:"FeatureImage"}),mdxType:"FeatureCard"},"A link allows the user to navigate to another place."),Object(r.b)(i.a,{title:"Modal",slug:"modal",media:Object(r.b)(i.b,{mdxType:"FeatureImage"}),mdxType:"FeatureCard"},"A modal presents important information or simple tasks to the user in an overlay."),Object(r.b)(i.a,{title:"Radio Group",slug:"radio-group",media:Object(r.b)(i.b,{mdxType:"FeatureImage"}),mdxType:"FeatureCard"},"A radio group allows the user to select one option from a set of related options."),Object(r.b)(i.a,{title:"Switch",slug:"switch",media:Object(r.b)(i.b,{mdxType:"FeatureImage"}),mdxType:"FeatureCard"},"A switch allows the user to immediately turn an option on or off."),Object(r.b)(i.a,{title:"Text Field",slug:"text-field",media:Object(r.b)(i.b,{mdxType:"FeatureImage"}),mdxType:"FeatureCard"},"A text field allows the user to enter and edit text."),Object(r.b)(i.a,{title:"Tooltip",slug:"tooltip",media:Object(r.b)(i.b,{mdxType:"FeatureImage"}),mdxType:"FeatureCard"},"A tooltip displays the name of or description for a related element on demand.")))}d.isMDXComponent=!0},125:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var o=a(24),n=a(128);function r(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,s=void 0!==i&&i,c=r.absolute,u=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(s)return t+a;var l=a.startsWith(t)?a:t+a.replace(/^\//,"");return u?e+l:l}(r,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},128:function(e,t,a){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return n}))},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return p}));var o=a(3),n=a(0),r=a.n(n),i=a(127),s=a.n(i),c=a(122),u=a(125),l=a(145),d=a.n(l),m=function(e){var t,a=e.title,n=e.media,i=e.children,l=e.icon,m=e.href,b=e.basePath,p=void 0===b?"/":b,f=e.slug,g=void 0===f?"":f,h=e.tag,_=void 0===h?"div":h,v=e.columns,w=void 0===v?3:v,x=e.linkArrow,y=void 0!==x&&x,j=r.a.useState(null),O=j[0],k=j[1],T=r.a.useState(null),F=T[0],C=T[1],E=Object(u.a)(m||g?p+g:null),A=r.a.useMemo((function(){return E?"a":"span"}),[E]),I=r.a.useMemo((function(){return"string"==typeof l?{variant:l}:"object"==typeof l?{icon:l}:{}}),[l]);return r.a.createElement(_,{className:s()(d.a.feature,d.a["col-"+w],(t={},t[d.a["feature--linked"]]=Boolean(E),t)),onClick:function(e){if(E){var t=window.getSelection();O&&t&&t.toString()&&t.containsNode(O,!0)||F&&e.nativeEvent.composedPath().includes(F)||(window.location.href=E)}},ref:k},n,r.a.createElement("div",{className:d.a.feature__header},l&&r.a.createElement("span",{className:d.a.feature__icon},r.a.createElement(c.Icon,Object(o.a)({},I,{size:32}))),r.a.createElement(A,{ref:C,href:E,className:d.a.feature__link},a,E&&y&&r.a.createElement(c.Icon,{variant:"arrow-right",className:d.a.feature__arrow}))),r.a.createElement("div",{className:d.a.feature__body},i))},b=function(e){var t=e.src,a=e.alt,o=void 0===a?"":a,n=Object(u.a)(t);return n?r.a.createElement("div",{className:d.a.feature__media},r.a.createElement("img",{className:d.a.feature__img,src:n,alt:o})):r.a.createElement("div",{className:d.a.feature__tk},r.a.createElement("abbr",{title:"Media to come"},"TK"))},p=function(e){var t=e.basePath,a=void 0===t?"/":t,n=e.columns,i=void 0===n?3:n,s=e.children;return r.a.createElement("ul",{className:d.a.features},r.a.Children.map(s,(function(e){if(r.a.isValidElement(e)){var t=e.props;return r.a.createElement(m,Object(o.a)({columns:i},t,{basePath:a,tag:"li"}))}return null})))}},145:function(e,t,a){e.exports={features:"features_m4Wt",feature__arrow:"feature__arrow_2nrB",feature:"feature_16H5","feature--linked":"feature--linked_3sev",feature__header:"feature__header_AVdU",feature__icon:"feature__icon_1EmG",feature__media:"feature__media_rtpg",feature__img:"feature__img_3Gk6",feature__tk:"feature__tk_1C80",feature__link:"feature__link_2is4","col-2":"col-2_1CFk","col-3":"col-3_3gH7"}}}]);