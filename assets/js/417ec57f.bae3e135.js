"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4709],{8425:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return k}});var a=n(5773),l=n(808),r=(n(7378),n(5318)),i=n(2299),o=n(8948),d=n(1010),s=["components"],m={title:"Core API"},p=void 0,u={unversionedId:"guides/dev/core-api",id:"guides/dev/core-api",title:"Core API",description:"The @wwnds/core package exposes six top-level mixins for setting CSS declarations, as well as a set of customizable variables for theming.",source:"@site/docs/guides/dev/core-api.mdx",sourceDirName:"guides/dev",slug:"/guides/dev/core-api",permalink:"/design-system/docs/guides/dev/core-api",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/guides/dev/core-api.mdx",tags:[],version:"current",lastUpdatedBy:"erinoh",lastUpdatedAt:1640114877,formattedLastUpdatedAt:"12/21/2021",frontMatter:{title:"Core API"},sidebar:"guides",previous:{title:"Writing CSS",permalink:"/design-system/docs/guides/dev/writing-css"},next:{title:"React API",permalink:"/design-system/docs/guides/dev/react-api"}},k=[{value:"Theming variables",id:"theming-variables",children:[],level:2},{value:"Tokens",id:"tokens",children:[],level:2},{value:"Reset",id:"reset",children:[],level:2},{value:"Components",id:"components",children:[{value:"All components",id:"all-components",children:[],level:3},{value:"Individual components",id:"individual-components",children:[],level:3},{value:"Fully modular mixins",id:"fully-modular-mixins",children:[],level:3}],level:2},{value:"Helpers",id:"helpers",children:[],level:2},{value:"Utilities",id:"utilities",children:[],level:2},{value:"Complete",id:"complete",children:[],level:2}],N={toc:k};function c(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@wwnds/core")," package exposes six top-level mixins for setting CSS declarations, as well as a set of customizable ",(0,r.kt)("a",{parentName:"p",href:"#theming-variables"},"variables for theming"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"tokens"))," - All foundational design tokens set as CSS custom properties on the ",(0,r.kt)("inlineCode",{parentName:"li"},":root"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reset"},(0,r.kt)("inlineCode",{parentName:"a"},"reset"))," - The global HTML reset. Forked from ",(0,r.kt)("a",{parentName:"li",href:"https://getbootstrap.com/docs/5.0/content/reboot/"},"the Bootstrap reboot")," to use the Norton Design System foundations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#components"},(0,r.kt)("inlineCode",{parentName:"a"},"components"))," - Declarations for every component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#helpers"},(0,r.kt)("inlineCode",{parentName:"a"},"helpers"))," - Helper declarations that set a composed style uncoupled from any component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#utilities"},(0,r.kt)("inlineCode",{parentName:"a"},"utilities"))," - Utility declarations that set one property per class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#complete"},(0,r.kt)("inlineCode",{parentName:"a"},"complete"))," - The complete design system set in a single global stylesheet.")),(0,r.kt)(i.Callout,{title:"Sassdoc",border:"left",mdxType:"Callout"},(0,r.kt)("p",null,"Additional utility mixins and functions are documented in our ",(0,r.kt)("a",{href:(0,o.Z)("sassdoc"),target:"\\_blank",rel:"noopener noreferrer"},"Sassdoc documentation"),".")),(0,r.kt)("h2",{id:"theming-variables"},"Theming variables"),(0,r.kt)("p",null,"These variables should be ",(0,r.kt)("a",{parentName:"p",href:"stylesheet-setup#configuration"},"configured in a forwarded stylesheet")," to ensure the most flexibility."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Token"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$primary-family")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"teal"')),(0,r.kt)("td",{parentName:"tr",align:null},"The family used in components that have a default color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$primary-grade")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the primary color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$base-family")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"navy"')),(0,r.kt)("td",{parentName:"tr",align:null},"Background, border, or shadow gradients")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$base-grade")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")," (unset)"),(0,r.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the base color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$disabled-family")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"base-color"')),(0,r.kt)("td",{parentName:"tr",align:null},"Not currently usable, non-interactive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$disabled-grade")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the disabled color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$error-family")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"red"')),(0,r.kt)("td",{parentName:"tr",align:null},"Error, danger, or incorrect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$error-grade")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the error color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$success-family")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"green"')),(0,r.kt)("td",{parentName:"tr",align:null},"Success, passing, or correct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$success-grade")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the success color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$warning-family")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"yellow"')),(0,r.kt)("td",{parentName:"tr",align:null},"Warning or caution")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$warning-grade")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the warning color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$background-color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d.QC,{mdxType:"ColorChip"},"white")),(0,r.kt)("td",{parentName:"tr",align:null},"The main background color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$text-color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d.QC,{mdxType:"ColorChip"},"base-color-90")),(0,r.kt)("td",{parentName:"tr",align:null},"The main text color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$text-color-inverse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d.QC,{mdxType:"ColorChip"},"background-color")),(0,r.kt)("td",{parentName:"tr",align:null},"A contrasting text color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$subdued-color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d.QC,{mdxType:"ColorChip"},"base-color-60")),(0,r.kt)("td",{parentName:"tr",align:null},"De-emphasized, muted, or subdued content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$selection-background-color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")," (unset)"),(0,r.kt)("td",{parentName:"tr",align:null},"The background color of user-selected text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$selection-text-color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")," (unset)"),(0,r.kt)("td",{parentName:"tr",align:null},"The text color of user-selected text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$focus-color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d.QC,{mdxType:"ColorChip"},"blue-50")),(0,r.kt)("td",{parentName:"tr",align:null},"The color used when an element has been focused (",(0,r.kt)("inlineCode",{parentName:"td"},":focus"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$focus-halo-inner-color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d.QC,{mdxType:"ColorChip"},"background-color")),(0,r.kt)("td",{parentName:"tr",align:null},"The inner color of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/foundations/accessibility#focus-halo"},"focus halo"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$focus-halo-outer-color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d.QC,{mdxType:"ColorChip"},"focus-color")),(0,r.kt)("td",{parentName:"tr",align:null},"The outer color of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/foundations/accessibility#focus-halo"},"focus halo"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$radius-base")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-radius-sm)")),(0,r.kt)("td",{parentName:"tr",align:null},"The main border radius used for component shapes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$hd-dpi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200")),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum dots per inch (dpi) of a high-resolution screen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$hd-dppx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"125")),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum dots per pixel unit (dppx) for a high-resolution screen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$min-xs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum width for an extra small screen: a handset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$min-sm")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"600px")),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum width for a small screen: a large handset or small tablet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$min-md")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"960px")),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum width for a medium screen: a large tablet or small laptop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$min-lg")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1280px")),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum width for a large screen: a desktop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$min-xl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1920px")),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum width for an extra large screen: a high-definition device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$duration-scalar")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"A multiplier used for increasing/decreasing all motion speed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-family-sans")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-family-system-sans)")),(0,r.kt)("td",{parentName:"tr",align:null},"The main sans serif font family")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-family-serif")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-family-system-serif)")),(0,r.kt)("td",{parentName:"tr",align:null},"The main serif font family")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-family-mono")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-family-system-mono)")),(0,r.kt)("td",{parentName:"tr",align:null},"The main monospace font family")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-family-base")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-family-sans)")),(0,r.kt)("td",{parentName:"tr",align:null},"The main font family that will be used throughout your application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-family-headings")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-family-base)")),(0,r.kt)("td",{parentName:"tr",align:null},"The font family that will be used for all headings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-root")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1em")),(0,r.kt)("td",{parentName:"tr",align:null},"The font size that is used to define ",(0,r.kt)("inlineCode",{parentName:"td"},"1rem"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-xs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-12)")),(0,r.kt)("td",{parentName:"tr",align:null},"An extra small font size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-sm")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-14)")),(0,r.kt)("td",{parentName:"tr",align:null},"A small font size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-md")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-16)")),(0,r.kt)("td",{parentName:"tr",align:null},"A medium font size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-lg")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-18)")),(0,r.kt)("td",{parentName:"tr",align:null},"A large font size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-h1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-32)")),(0,r.kt)("td",{parentName:"tr",align:null},"The font size used for the highest heading level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-h2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-24)")),(0,r.kt)("td",{parentName:"tr",align:null},"The font size used for second-level headings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-h3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-20)")),(0,r.kt)("td",{parentName:"tr",align:null},"The font size used for third-level headings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-h4")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-18)")),(0,r.kt)("td",{parentName:"tr",align:null},"The font size used for fourth-level headings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-h5")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-16)")),(0,r.kt)("td",{parentName:"tr",align:null},"The font size used for fifth-level headings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-h6")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-14)")),(0,r.kt)("td",{parentName:"tr",align:null},"The font size used for sixth-level headings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-size-base")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-size-md)")),(0,r.kt)("td",{parentName:"tr",align:null},"The font size used on the body and to set most text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-weight-base")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-weight-regular)")),(0,r.kt)("td",{parentName:"tr",align:null},"The font weight used for body copy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$font-weight-headings")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var(--nds-font-weight-bold)")),(0,r.kt)("td",{parentName:"tr",align:null},"The font weight used for headings")))),(0,r.kt)("h2",{id:"tokens"},"Tokens"),(0,r.kt)("p",null,"The tokens mixin sets the ",(0,r.kt)("a",{parentName:"p",href:"/docs/foundations"},"foundations")," that contain design tokens as global CSS custom properties on the ",(0,r.kt)("inlineCode",{parentName:"p"},":root")," element.\nYou will almost always want to set this as a global stylesheet, as most component styles use the CSS custom properties in their styling."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/tokens.scss"',title:'"Example:','src/styles/tokens.scss"':!0},"@use '@wwnds/core';\n\n@include core.tokens;\n")),(0,r.kt)("h2",{id:"reset"},"Reset"),(0,r.kt)("p",null,"The reset mixin is meant to be used to create a global stylesheet that ensures that all HTML elements are rendered consistently across browsers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/reset.scss"',title:'"Example:','src/styles/reset.scss"':!0},"@use '@wwnds/core';\n\n@include core.reset;\n")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"The component API provides three levels of usage with different levels of customization to suit your needs."),(0,r.kt)("h3",{id:"all-components"},"All components"),(0,r.kt)("p",null,"All component declarations can be set at once in one mixin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/all-components.scss"',title:'"Example:','src/styles/all-components.scss"':!0},"@use '@wwnds/core';\n\n@include core.components;\n\n// resulting CSS will contain declarations for all components\n")),(0,r.kt)("h3",{id:"individual-components"},"Individual components"),(0,r.kt)("p",null,"Each individual component exposes a ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," mixin that is namespaced with the component's name on the top-level API (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"button-style"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/my-button.scss"',title:'"Example:','src/styles/my-button.scss"':!0},"@use '@wwnds/core';\n\n@include core.button-style;\n\n// resulting CSS will contain only button declarations\n")),(0,r.kt)("h3",{id:"fully-modular-mixins"},"Fully modular mixins"),(0,r.kt)("p",null,"Each component composes its styles via mixins.\nGenerally, these are applied to the component's anatomy with ",(0,r.kt)("a",{parentName:"p",href:"http://getbem.com/"},"BEM")," selectors but you can use them with your own selectors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/my-button.scss"',title:'"Example:','src/styles/my-button.scss"':!0},"@use '@wwnds/core';\n\n.custom-button {\n    @include core.button-base;\n    @include core.button-solid;\n\n    // override or add your own styles\n    // border: 2px solid var(--nds-button-color-80);\n}\n\n.custom-button__icon {\n    @include core.button-icon;\n}\n\n// resulting CSS will contain only the above two declarations\n")),(0,r.kt)("h2",{id:"helpers"},"Helpers"),(0,r.kt)("p",null,"Helpers are composed declarations that help with common styling needs that are not connected to any component.\nUnlike ",(0,r.kt)("a",{parentName:"p",href:"#utilities"},"utilities"),", helpers always set multiple properties per declaration or compose styles together to meet a specific need."),(0,r.kt)("p",null,"Helpers are disabled by default and must be turned on by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"$enable-helpers")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/helpers.scss"',title:'"Example:','src/styles/helpers.scss"':!0},"@use '@wwnds/core' with (\n    $enable-helpers: true,\n);\n\n@include core.helpers;\n")),(0,r.kt)("h2",{id:"utilities"},"Utilities"),(0,r.kt)("p",null,"Utilities are declarations that set a single property and are turned off by default.\nTo enable them, they must be turned on with the ",(0,r.kt)("inlineCode",{parentName:"p"},"$enable-utilities")," map."),(0,r.kt)("p",null,"Note that the utility API is deliberately minimal and is not suited for production usage.\nIf you would like to use a more utility-focused approach, we like ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/utilities.scss"',title:'"Example:','src/styles/utilities.scss"':!0},"@use '@wwnds/core' with (\n    $enable-utilities: ('color', 'spacing'),\n);\n\n@include core.utilities;\n")),(0,r.kt)("h2",{id:"complete"},"Complete"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"complete")," mixin provides a single way to opt into every declaration.\nNote that this can also be accessed directly by using ",(0,r.kt)("inlineCode",{parentName:"p"},"@wwnds/core/full"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/norton-design-system.scss"',title:'"Example:','src/styles/norton-design-system.scss"':!0},"@use '@wwnds/core';\n\n@include core.complete;\n")))}c.isMDXComponent=!0}}]);