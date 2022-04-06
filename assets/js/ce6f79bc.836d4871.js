"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4090],{5234:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=s(5773),a=s(808),o=(s(7378),s(5318)),i=s(2299),l=s(8948),r=["components"],d={title:"Stylesheet setup"},u=void 0,c={unversionedId:"guides/dev/stylesheet-setup",id:"guides/dev/stylesheet-setup",title:"Stylesheet setup",description:"All styling in the Norton Design System is done directly in CSS using the Sass modules exposed by the @wwnds/core library.",source:"@site/docs/guides/dev/stylesheet-setup.mdx",sourceDirName:"guides/dev",slug:"/guides/dev/stylesheet-setup",permalink:"/design-system/docs/guides/dev/stylesheet-setup",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/guides/dev/stylesheet-setup.mdx",tags:[],version:"current",lastUpdatedBy:"erinoh",lastUpdatedAt:1640114877,formattedLastUpdatedAt:"12/21/2021",frontMatter:{title:"Stylesheet setup"},sidebar:"guides",previous:{title:"Getting started",permalink:"/design-system/docs/guides/dev"},next:{title:"Writing CSS",permalink:"/design-system/docs/guides/dev/writing-css"}},p=[{value:"Single stylesheet",id:"single-stylesheet",children:[{value:"Pre-built CSS",id:"pre-built-css",children:[],level:3},{value:"Custom build",id:"custom-build",children:[],level:3}],level:2},{value:"Modular usage",id:"modular-usage",children:[{value:"Configuration",id:"configuration",children:[],level:3},{value:"Setting tokens",id:"setting-tokens",children:[],level:3},{value:"Other approaches",id:"other-approaches",children:[{value:"CSS modules",id:"css-modules",children:[],level:4}],level:3}],level:2}],m={toc:p};function h(e){var t=e.components,s=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All styling in the Norton Design System is done directly in CSS using the ",(0,o.kt)("a",{parentName:"p",href:"https://sass-lang.com/blog/the-module-system-is-launched"},"Sass modules")," exposed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"@wwnds/core")," library.\nThis library can be used either as one ",(0,o.kt)("a",{parentName:"p",href:"#single-stylesheet"},"single global stylesheet")," for your entire application or as the basis for ",(0,o.kt)("a",{parentName:"p",href:"#modular-usage"},"a modular approach"),".\nBoth approaches are covered here."),(0,o.kt)(i.CalloutWarning,{title:"Sass compiler",mdxType:"CalloutWarning"},(0,o.kt)("p",null,"The Norton Design System's stylesheets must be compiled with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sass/sass"},"sass")," Node module and will not work with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sass/node-sass"},"node-sass"),".\nThis is because node-sass's underlying implementation, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sass/libsass"},"libsass")," does not support Sass modules and ",(0,o.kt)("a",{parentName:"p",href:"https://sass-lang.com/blog/libsass-is-deprecated"},"has in fact been deprecated")," in favor of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sass/dart-sass"},"dart-sass")," (sass's underlying implementation)."),(0,o.kt)("p",null,"If your project is currently using node-sass, migrating should be as simple as swapping out node-sass for sass. View ",(0,o.kt)("a",{parentName:"p",href:"https://sass-lang.com/blog/libsass-is-deprecated#how-do-i-migrate"},'the "How do I migrate?" guide')," for more details.")),(0,o.kt)("h2",{id:"single-stylesheet"},"Single stylesheet"),(0,o.kt)("p",null,"The simplest way to use the design system's styling is to use a single global stylesheet.\nThis can be accomplished with either the pre-built CSS or the full Sass entry point."),(0,o.kt)("h3",{id:"pre-built-css"},"Pre-built CSS"),(0,o.kt)("p",null,"Two CSS files are included in our release distributions of ",(0,o.kt)("inlineCode",{parentName:"p"},"@wwnds/core"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dist/main.css")," - the complete stylesheet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dist/tokens.css")," - only the global design tokens (excluding component tokens), set on the ",(0,o.kt)("inlineCode",{parentName:"li"},":root")," element.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- in a Node.js project --\x3e\n<link href="node_modules/@wwnds/core/dist/main.css" rel="stylesheet" />\n\n\x3c!-- using unpkg as a CDN (not suitable for production but ideal for prototyping) --\x3e\n<link href="https://unpkg.com/@wwnds/core/dist/main.css" rel="stylesheet" />\n')),(0,o.kt)("h3",{id:"custom-build"},"Custom build"),(0,o.kt)("p",null,"If you would like to customize something but still use the complete stylesheet, it is recommended that you use the full Sass entry point.\nFor instance, the following will be identical to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist/main.css")," file but with the primary color family assigned to yellow (default is teal)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@wwnds/core/full' with (\n    $primary-family: 'yellow',\n);\n")),(0,o.kt)("p",null,"Note that a similar approach can be accomplished by using ",(0,o.kt)("a",{parentName:"p",href:"core-api#complete"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"complete")," mixin")," to create your own complete stylesheet."),(0,o.kt)("h2",{id:"modular-usage"},"Modular usage"),(0,o.kt)("p",null,"Using the Sass modules directly is ideal for scenarios where a single global stylesheet is not desired, such as in a React environment or when you only want to use part of the design system."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The best way to get started with modular stylesheets is to ",(0,o.kt)("inlineCode",{parentName:"p"},"@forward")," a configured version of the design system for use in your stylesheets.\nThis acts as the main place where Sass variables are configured to meet the needs of your application's look and feel and does not itself contain any declarations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="src/styles/_nds.scss"',title:'"src/styles/_nds.scss"'},"// note: name this file whatever makes sense to you\n\n@forward '@wwnds/core' with (\n    $font-family-base: 'My fancy font',\n    $radius-base: var(--nds-radius-xl),\n    $primary-family: 'cyan',\n);\n")),(0,o.kt)(i.CalloutSuccess,{title:"Customizable variables",mdxType:"CalloutSuccess"},(0,o.kt)("p",null,"Any variable in ",(0,o.kt)("inlineCode",{parentName:"p"},"@wwnds/core")," that contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"!default")," flag is customizable in this way."),(0,o.kt)("p",null,"These variables are documented in ",(0,o.kt)("a",{href:(0,l.Z)("sassdoc"),target:"\\_blank",rel:"noopener noreferrer"},"the Sassdoc documentation"),", as well as ",(0,o.kt)("a",{parentName:"p",href:"core-api#theming-variables"},"the Core API - Theming variables")," table.")),(0,o.kt)("p",null,"Once your configured version of ",(0,o.kt)("inlineCode",{parentName:"p"},"@wwnds/core")," has been forwarded, it should be ",(0,o.kt)("inlineCode",{parentName:"p"},"@used")," anywhere you need to use the core mixins or functions."),(0,o.kt)("h3",{id:"setting-tokens"},"Setting tokens"),(0,o.kt)("p",null,"At a minimum, you must create and use one global stylesheet to ",(0,o.kt)("a",{parentName:"p",href:"core-api#tokens"},"set the design tokens")," as CSS custom properties.\nThis is because every component, utility, and helper in the design system uses our ",(0,o.kt)("a",{parentName:"p",href:"/docs/foundations/design-tokens"},"design tokens"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="src/styles/globals.scss"',title:'"src/styles/globals.scss"'},"@use 'nds'; // the configured & forwarded src/styles/_nds.scss\n\n@include nds.tokens; // contains `:root` declarations with CSS custom properties\n\n// optionally include other globals, such as the HTML reset styles\n@include nds.reset;\n")),(0,o.kt)("h3",{id:"other-approaches"},"Other approaches"),(0,o.kt)("p",null,"Other approaches, such as using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@import")," syntax or CSS-in-JS may work but aren't well-tested.\nUse them at your own risk."),(0,o.kt)("h4",{id:"css-modules"},"CSS modules"),(0,o.kt)("p",null,"While not well tested, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS modules")," can be composed with core styles in environments that support CSS modules, such as in React."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="src/components/CustomButton/nds-button.scss"',title:'"src/components/CustomButton/nds-button.scss"'},"@use '../../styles/nds';\n\n// apply the default design system styles for the button component\n@include nds.button-style;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="src/components/CustomButton/index.module.scss"',title:'"src/components/CustomButton/index.module.scss"'},"@use '../../styles/nds'; // the configured & forwarded src/styles/_nds.scss\n\n.btn {\n    // override a component token\n    --nds-button-border-radius: var(--nds-radius-pill);\n\n    // set additional styles with core\n    margin-bottom: nds.spacer(\"1rem\");\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/CustomButton/index.jsx"',title:'"src/components/CustomButton/index.jsx"'},'import React from "react";\nimport { Button } from "@wwnds/react";\n// main design system button styles\nimport "./nds-button.scss";\n// modular styles\nimport styles from "./index.module.scss";\n\nexport const CustomButton = ({ children, ...props }) => (\n    <Button className={styles.btn} {...props}>\n        {children}\n    </Button>\n);\n')))}h.isMDXComponent=!0}}]);