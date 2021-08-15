"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8148],{6946:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var o=n(5773),s=n(808),a=(n(7378),n(8869)),i=(n(5239),["components"]),r={title:"Writing CSS"},d=void 0,c={unversionedId:"guides/dev/writing-css",id:"guides/dev/writing-css",isDocsHomePage:!1,title:"Writing CSS",description:"Once your stylesheets have been set up how you want them, you can start writing CSS with the Norton Design System.",source:"@site/docs/guides/dev/writing-css.mdx",sourceDirName:"guides/dev",slug:"/guides/dev/writing-css",permalink:"/design-system/docs/guides/dev/writing-css",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/guides/dev/writing-css.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1618685757,formattedLastUpdatedAt:"4/17/2021",frontMatter:{title:"Writing CSS"},sidebar:"guides",previous:{title:"Stylesheet setup",permalink:"/design-system/docs/guides/dev/stylesheet-setup"},next:{title:"Core API",permalink:"/design-system/docs/guides/dev/core-api"}},l=[{value:"Theming",id:"theming",children:[]},{value:"Best practices",id:"best-practices",children:[{value:"Use CSS custom properties, not Sass variables",id:"use-css-custom-properties-not-sass-variables",children:[]},{value:"Use role tokens, not system tokens",id:"use-role-tokens-not-system-tokens",children:[]},{value:"Override token values instead of property values whenever possible",id:"override-token-values-instead-of-property-values-whenever-possible",children:[]},{value:"Compose your own CSS custom properties out of existing tokens",id:"compose-your-own-css-custom-properties-out-of-existing-tokens",children:[]},{value:"Use Sass modules",id:"use-sass-modules",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once your ",(0,a.kt)("a",{parentName:"p",href:"stylesheet-setup"},"stylesheets have been set up")," how you want them, you can start writing CSS with the Norton Design System."),(0,a.kt)("h2",{id:"theming"},"Theming"),(0,a.kt)("p",null,"The Norton Design System's CSS is fully themeable through the use of Sass variables.\nThe variables that capture the ",(0,a.kt)("a",{parentName:"p",href:"/docs/foundations"},"foundational style elements")," constitute the main interface for theming an application.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"core-api#theming-variables"},"the variables table")," to learn more about these customizable variables."),(0,a.kt)("h2",{id:"best-practices"},"Best practices"),(0,a.kt)("p",null,"To get the most out of the Norton Design System's CSS, some best practices should be followed for writing your CSS."),(0,a.kt)("h3",{id:"use-css-custom-properties-not-sass-variables"},"Use CSS custom properties, not Sass variables"),(0,a.kt)("p",null,"CSS custom properties are live variables that can be modified via JavaScript and will always reference the current value of the token.\nSass variables, on the other hand, are hard-coded into the stylesheet when the CSS is compiled and cannot be changed after that point."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@wwnds/core';\n\n// \ud83d\udc4d Good: use the CSS custom property\n.foo {\n    font-family: var(--nds-font-family-serif);\n}\n\n// \ud83d\udc4e Bad: use the Sass variable\n.foo {\n    font-family: core.$font-family-serif;\n}\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Why?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"CSS custom properties are supported directly in the browser, whereas Sass variables are not."))),(0,a.kt)("h3",{id:"use-role-tokens-not-system-tokens"},"Use role tokens, not system tokens"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"/docs/foundations/design-tokens#role-tokens"},"role tokens")," will facilitate theming in your application through ",(0,a.kt)("a",{parentName:"p",href:"stylesheet-setup#customization"},"customization")," since role tokens can be customized and ",(0,a.kt)("a",{parentName:"p",href:"/docs/foundations/design-tokens#system-tokens"},"system tokens")," cannot.\nRefer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/foundations/design-tokens#types-of-design-tokens"},"design token types")," inheritance outline for more clarification of this convention."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@wwnds/core';\n\n// \u2728 Best: modify a known role token at this scope and then use it\n// (not always possible)\n.foo {\n    --nds-background-color: var(--nds-base-color-20);\n\n    background-color: var(--nds-background-color);\n}\n\n// \ud83d\udc4d Good: use the role token\n.foo {\n    background-color: var(--nds-base-color-20);\n}\n\n// \ud83d\udc4e Bad: use the system token\n.foo {\n    background-color: var(--nds-navy-20);\n}\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Why?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"System token values are static and cannot be modified, which prevents you from using them to theme your component."))),(0,a.kt)("h3",{id:"override-token-values-instead-of-property-values-whenever-possible"},"Override token values instead of property values whenever possible"),(0,a.kt)("p",null,"Some tokens, like ",(0,a.kt)("inlineCode",{parentName:"p"},"text-color")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"background-color")," are set globally and are designed to use the CSS cascade to style all elements.\nWe encourage you to embrace the cascade","\u2014","a fundamental feature of CSS","\u2014","modifying token values at specific scopes to accomplish your goals instead of modifying properties directly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@wwnds/core';\n\n// \ud83d\udc4d Good: override the token value and then use it\n.foo {\n    --nds-text-color: var(--nds-base-color-10);\n    --nds-background-color: var(--nds-primary-color-80);\n\n    color: var(--nds-text-color);\n    background-color: var(--nds-background-color);\n}\n\n// Okay: override the property value\n.foo {\n    color: var(--nds-base-color-10);\n    background-color: var(--nds-primary-color-80);\n}\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Why?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This will ensure that children of this component that use the role tokens use the locally-scoped values instead of the global ones."),(0,a.kt)("p",{parentName:"div"},"For instance, the ",(0,a.kt)("a",{parentName:"p",href:"/docs/foundations/accessibility#focus-halo"},"focus-halo")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"--nds-background-color")," to create the illusion of an offset halo when an element is focused.\nIf your element's background color is hard-coded as ",(0,a.kt)("inlineCode",{parentName:"p"},"--nds-primary-color-80"),", that focus halo will now have an offset that does not appear to match the background color."),(0,a.kt)("p",{parentName:"div"},"It's considered okay to use tokens directly in scenarios where component isolation is favored."))),(0,a.kt)("h3",{id:"compose-your-own-css-custom-properties-out-of-existing-tokens"},"Compose your own CSS custom properties out of existing tokens"),(0,a.kt)("p",null,"We deliberately provide only a small set of opinionated design tokens but recognize that you may have application-specific styles that would make sense as tokens."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@wwnds/core';\n\n// \ud83d\udc4d Good: declare and use your own reusable custom properties out of existing tokens\n:root {\n    --brand-gradient: linear-gradient(\n        var(--nds-primary-color),\n        var(--nds-primary-color-90),\n    );\n}\n")),(0,a.kt)("h3",{id:"use-sass-modules"},"Use Sass modules"),(0,a.kt)("p",null,"When using the Sass directly, avoid ",(0,a.kt)("inlineCode",{parentName:"p"},"@import"),", favoring ",(0,a.kt)("inlineCode",{parentName:"p"},"@forward")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@use"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"// \u2728 Best: forward a configured version of the core library\n@forward '@wwnds/core' with (\n    // configured Sass variables\n    $radius-base: var(--nds-radius-xl),\n);\n\n// \ud83d\udc4d Good: use the core library directly\n@use '@wwnds/core';\n\n// \ud83d\udc4e Bad: use the deprecated import syntax\n@import '@wwnds/core/full';\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Why?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@import")," at-rule is ",(0,a.kt)("a",{parentName:"p",href:"https://sass-lang.com/documentation/at-rules/import"},"being deprecated by Sass")," and won't work sometime in the future."),(0,a.kt)("p",{parentName:"div"},"See more about this in ",(0,a.kt)("a",{parentName:"p",href:"stylesheet-setup#configuration"},"the guide on stylesheet configuration"),"."))))}u.isMDXComponent=!0}}]);