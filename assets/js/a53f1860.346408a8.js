"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9521],{1335:function(e,t,a){var n=(0,a(7378).createContext)(void 0);t.Z=n},574:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return v},metadata:function(){return N},toc:function(){return w}});var n=a(5773),s=a(808),o=a(7378),r=a(8869),i=a(1335);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=a(8944),d="tabItem_c0e5",p="tabItemActive_28AG";var m=37,u=39;var h=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,s=e.values,r=e.groupId,i=e.className,h=l(),g=h.tabGroupChoices,k=h.setTabGroupChoices,v=(0,o.useState)(n),f=v[0],N=v[1],w=o.Children.toArray(e.children),b=[];if(null!=r){var y=g[r];null!=y&&y!==f&&s.some((function(e){return e.value===y}))&&N(y)}var x=function(e){var t=e.currentTarget,a=b.indexOf(t),n=s[a].value;N(n),null!=r&&(k(r,n),setTimeout((function(){var e,a,n,s,o,r,i,l;(e=t.getBoundingClientRect(),a=e.top,n=e.left,s=e.bottom,o=e.right,r=window,i=r.innerHeight,l=r.innerWidth,a>=0&&o<=l&&s<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case u:var n=b.indexOf(e.target)+1;a=b[n]||b[0];break;case m:var s=b.indexOf(e.target)-1;a=b[s]||b[b.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},i)},s.map((function(e){var t=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":f===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:T,onFocus:x,onClick:x},a)}))),t?(0,o.cloneElement)(w.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))};var g=function(e){var t=e.children,a=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},k=["components"],v={title:"Getting started",slug:"/guides/dev"},f=void 0,N={unversionedId:"guides/dev/getting-started",id:"guides/dev/getting-started",isDocsHomePage:!1,title:"Getting started",description:"The implementation of the Norton Design System for the web is composed of two main packages:",source:"@site/docs/guides/dev/getting-started.mdx",sourceDirName:"guides/dev",slug:"/guides/dev",permalink:"/design-system/docs/guides/dev",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/guides/dev/getting-started.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1611101728,formattedLastUpdatedAt:"1/20/2021",frontMatter:{title:"Getting started",slug:"/guides/dev"},sidebar:"guides",previous:{title:"Guides",permalink:"/design-system/docs/guides"},next:{title:"Stylesheet setup",permalink:"/design-system/docs/guides/dev/stylesheet-setup"}},w=[{value:"Core package",id:"core-package",children:[]},{value:"React package",id:"react-package",children:[]},{value:"Independent package usage",id:"independent-package-usage",children:[]}],b={toc:w};function y(e){var t=e.components,a=(0,s.Z)(e,k);return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The implementation of the Norton Design System for the web is composed of two main packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A modular ",(0,r.kt)("a",{parentName:"li",href:"#core-package"},"CSS library")," to help you style your application and content."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"#react-package"},"React component library")," to help you compose accessible, robust applications and content.")),(0,r.kt)("p",null,"These two libraries do not depend on each other but work best when used together.\nEach is published to the public NPM registry under ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/org/wwnds"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"@wwnds")," scope"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Audience")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This guide is intended for developers and a minimal understanding of web technologies such as CSS and HTML is assumed.\nGuidance on using the React library also requires a basic understanding of ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"."))),(0,r.kt)("h2",{id:"core-package"},"Core package"),(0,r.kt)("p",null,"The core package is a ",(0,r.kt)("a",{parentName:"p",href:"https://sass-lang.com/"},"Sass")," implementation of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/foundations"},"foundations")," and styling for all ",(0,r.kt)("a",{parentName:"p",href:"/docs/components"},"components"),".\nIt includes the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An implementation of the ",(0,r.kt)("a",{parentName:"li",href:"/docs/foundations/design-tokens"},"design tokens")," for all foundational elements (color, typography, etc.) set as ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"CSS custom properties"),"."),(0,r.kt)("li",{parentName:"ul"},"Modular styling for all components via ",(0,r.kt)("a",{parentName:"li",href:"https://sass-lang.com/documentation/at-rules/mixin"},"Sass mixins"),"."),(0,r.kt)("li",{parentName:"ul"},"A global reset stylesheet, forked from ",(0,r.kt)("a",{parentName:"li",href:"https://getbootstrap.com/docs/5.0/content/reboot/"},"the Bootstrap reboot")," to use the Norton Design System foundations."),(0,r.kt)("li",{parentName:"ul"},"A Sass API for theming and customizing every aspect of the library, built on ",(0,r.kt)("a",{parentName:"li",href:"https://sass-lang.com/blog/the-module-system-is-launched"},"Sass modules"),".")),(0,r.kt)(h,{groupId:"package-manager",defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(g,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @wwnds/core\n"))),(0,r.kt)(g,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @wwnds/core\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Links")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@wwnds/core"},"NPM: @wwnds/core")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wwnorton/design-system/tree/main/packages/core"},"GitHub: packages/core"))))),(0,r.kt)("h2",{id:"react-package"},"React package"),(0,r.kt)("p",null,"The React package is a ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," implementation of the components with no styling applied.\nIt includes the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A React ",(0,r.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"Typescript")," implementation of the Norton Design System ",(0,r.kt)("a",{parentName:"li",href:"/docs/components"},"components"),"."),(0,r.kt)("li",{parentName:"ul"},"A rich developer experience powered by the comprehensive typings and descriptions for all top-level components and their props."),(0,r.kt)("li",{parentName:"ul"},"Useful ",(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-overview.html"},"React hooks")," to help you build stateless, functional applications.")),(0,r.kt)(h,{groupId:"package-manager",defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(g,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @wwnds/react\n"))),(0,r.kt)(g,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @wwnds/react\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Links")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@wwnds/react"},"NPM: @wwnds/react")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wwnorton/design-system/tree/main/packages/react"},"GitHub: packages/react"))))),(0,r.kt)("h2",{id:"independent-package-usage"},"Independent package usage"),(0,r.kt)("p",null,"Neither the ",(0,r.kt)("a",{parentName:"p",href:"#core"},"core package")," nor the ",(0,r.kt)("a",{parentName:"p",href:"#react"},"react package")," depend on one another and can therefore be used fully independently of each other.\nFor instance, you could use ",(0,r.kt)("inlineCode",{parentName:"p"},"@wwnds/core")," to style a ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue.js")," application, or you could apply your own styling to ",(0,r.kt)("inlineCode",{parentName:"p"},"@wwnds/react")," without using anything from ",(0,r.kt)("inlineCode",{parentName:"p"},"@wwnds/core"),"."),(0,r.kt)("p",null,"However, this guide fill focus on combined usage, as the packages work best when used together."))}y.isMDXComponent=!0}}]);