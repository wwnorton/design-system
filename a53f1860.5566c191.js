(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return g})),a.d(t,"metadata",(function(){return f})),a.d(t,"toc",(function(){return j})),a.d(t,"default",(function(){return O}));var n=a(3),o=a(7),c=a(0),s=a.n(c),r=a(131),i=a(207),l=a(130),p=a(102),b=a.n(p),d=37,m=39;var u=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,o=e.values,r=e.groupId,p=e.className,u=Object(i.a)(),h=u.tabGroupChoices,g=u.setTabGroupChoices,f=Object(c.useState)(n),j=f[0],v=f[1],O=c.Children.toArray(e.children);if(null!=r){var N=h[r];null!=N&&N!==j&&o.some((function(e){return e.value===N}))&&v(N)}var w=function(e){v(e),null!=r&&g(r,e)},y=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},p)},o.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(l.a)("tabs__item",b.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case m:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(c.cloneElement)(O.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(c.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))};var h=function(e){var t=e.children,a=e.hidden,n=e.className;return s.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},g={title:"Getting started",slug:"/guides/dev"},f={unversionedId:"guides/dev/getting-started",id:"guides/dev/getting-started",isDocsHomePage:!1,title:"Getting started",description:"The implementation of the Norton Design System for the web is composed of two main packages:",source:"@site/docs/guides/dev/getting-started.mdx",slug:"/guides/dev",permalink:"/design-system/docs/guides/dev",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/guides/dev/getting-started.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1614046370,sidebar:"guides",previous:{title:"Guides",permalink:"/design-system/docs/guides"},next:{title:"Stylesheet setup",permalink:"/design-system/docs/guides/dev/stylesheet-setup"}},j=[{value:"Core package",id:"core-package",children:[]},{value:"React package",id:"react-package",children:[]},{value:"Independent package usage",id:"independent-package-usage",children:[]}],v={toc:j};function O(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},v,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The implementation of the Norton Design System for the web is composed of two main packages:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A modular ",Object(r.b)("a",{parentName:"li",href:"#core-package"},"CSS library")," to help you style your application and content."),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("a",{parentName:"li",href:"#react-package"},"React component library")," to help you compose accessible, robust applications and content.")),Object(r.b)("p",null,"These two libraries do not depend on each other but work best when used together.\nEach is published to the public NPM registry under ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/org/wwnds"},"the ",Object(r.b)("inlineCode",{parentName:"a"},"@wwnds")," scope"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Audience")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This guide is intended for developers and a minimal understanding of web technologies such as CSS and HTML is assumed.\nGuidance on using the React library also requires a basic understanding of ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"."))),Object(r.b)("h2",{id:"core-package"},"Core package"),Object(r.b)("p",null,"The core package is a ",Object(r.b)("a",{parentName:"p",href:"https://sass-lang.com/"},"Sass")," implementation of the ",Object(r.b)("a",{parentName:"p",href:"/docs/foundations"},"foundations")," and styling for all ",Object(r.b)("a",{parentName:"p",href:"/docs/components"},"components"),".\nIt includes the following features:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An implementation of the ",Object(r.b)("a",{parentName:"li",href:"/docs/foundations/design-tokens"},"design tokens")," for all foundational elements (color, typography, etc.) set as ",Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"CSS custom properties"),"."),Object(r.b)("li",{parentName:"ul"},"Modular styling for all components via ",Object(r.b)("a",{parentName:"li",href:"https://sass-lang.com/documentation/at-rules/mixin"},"Sass mixins"),"."),Object(r.b)("li",{parentName:"ul"},"A global reset stylesheet, forked from ",Object(r.b)("a",{parentName:"li",href:"https://getbootstrap.com/docs/5.0/content/reboot/"},"the Bootstrap reboot")," to use the Norton Design System foundations."),Object(r.b)("li",{parentName:"ul"},"A Sass API for theming and customizing every aspect of the library, built on ",Object(r.b)("a",{parentName:"li",href:"https://sass-lang.com/blog/the-module-system-is-launched"},"Sass modules"),".")),Object(r.b)(u,{groupId:"package-manager",defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(h,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install @wwnds/core\n"))),Object(r.b)(h,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @wwnds/core\n")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Links")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@wwnds/core"},"NPM: @wwnds/core")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wwnorton/design-system/tree/main/packages/core"},"GitHub: packages/core"))))),Object(r.b)("h2",{id:"react-package"},"React package"),Object(r.b)("p",null,"The React package is a ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," implementation of the components with no styling applied.\nIt includes the following features:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A React ",Object(r.b)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"Typescript")," implementation of the Norton Design System ",Object(r.b)("a",{parentName:"li",href:"/docs/components"},"components"),"."),Object(r.b)("li",{parentName:"ul"},"A rich developer experience powered by the comprehensive typings and descriptions for all top-level components and their props."),Object(r.b)("li",{parentName:"ul"},"Useful ",Object(r.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-overview.html"},"React hooks")," to help you build stateless, functional applications.")),Object(r.b)(u,{groupId:"package-manager",defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(h,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install @wwnds/react\n"))),Object(r.b)(h,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @wwnds/react\n")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Links")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@wwnds/react"},"NPM: @wwnds/react")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wwnorton/design-system/tree/main/packages/react"},"GitHub: packages/react"))))),Object(r.b)("h2",{id:"independent-package-usage"},"Independent package usage"),Object(r.b)("p",null,"Neither the ",Object(r.b)("a",{parentName:"p",href:"#core"},"core package")," nor the ",Object(r.b)("a",{parentName:"p",href:"#react"},"react package")," depend on one another and can therefore be used fully independently of each other.\nFor instance, you could use ",Object(r.b)("inlineCode",{parentName:"p"},"@wwnds/core")," to style a ",Object(r.b)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue.js")," application, or you could apply your own styling to ",Object(r.b)("inlineCode",{parentName:"p"},"@wwnds/react")," without using anything from ",Object(r.b)("inlineCode",{parentName:"p"},"@wwnds/core"),"."),Object(r.b)("p",null,"However, this guide fill focus on combined usage, as the packages work best when used together."))}O.isMDXComponent=!0},130:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},207:function(e,t,a){"use strict";var n=a(0),o=a(208);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},208:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o}}]);