(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),r=(n(0),n(131)),l={title:"Motion"},o={unversionedId:"foundations/motion",id:"foundations/motion",isDocsHomePage:!1,title:"Motion",description:"The Norton design system has fully implemented the Material Design's motion system",source:"@site/docs/foundations/motion.md",slug:"/foundations/motion",permalink:"/design-system/docs/foundations/motion",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/foundations/motion.md",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1614046370,sidebar:"foundations",previous:{title:"Spacing",permalink:"/design-system/docs/foundations/spacing"}},d=[{value:"Design Tokens",id:"design-tokens",children:[]},{value:"Duration Scalar",id:"duration-scalar",children:[{value:"Reduced Motion",id:"reduced-motion",children:[]},{value:"Debugging motion",id:"debugging-motion",children:[]}]}],b={toc:d};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Norton design system has fully implemented the ",Object(r.b)("a",{parentName:"p",href:"https://material.io/design/motion"},"Material Design's motion system"),"\nand it is highly recommended that you reference Material's guidance when designing\nfor motion. All motion tokens and utilities are available in the ",Object(r.b)("inlineCode",{parentName:"p"},"@wwnds/core")," library."),Object(r.b)("h2",{id:"design-tokens"},"Design Tokens"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Token"),Object(r.b)("th",{parentName:"tr",align:null},"Default Value"),Object(r.b)("th",{parentName:"tr",align:null},"Usage"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-scalar"),Object(r.b)("sup",{parentName:"td",id:"fnref-1"},Object(r.b)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"1")),Object(r.b)("td",{parentName:"tr",align:null},"a multiplier used for increasing/decreasing all motion speed")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-simple")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"100ms")),Object(r.b)("td",{parentName:"tr",align:null},"simple animations such as selection controls")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-simple-enter")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"150ms")),Object(r.b)("td",{parentName:"tr",align:null},"simple entrances such as fade-ins")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-simple-exit")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"75ms")),Object(r.b)("td",{parentName:"tr",align:null},"simple exits such as fade-outs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-complex")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"200ms")),Object(r.b)("td",{parentName:"tr",align:null},"complex animations such as shape changes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-detailed")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"500ms")),Object(r.b)("td",{parentName:"tr",align:null},"detailed animations such as icon transformations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-open")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"250ms")),Object(r.b)("td",{parentName:"tr",align:null},"elements that open from a closed state, such as a sidebar")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-close")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"200ms")),Object(r.b)("td",{parentName:"tr",align:null},"elements that close from an opened state, such as a sidebar")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-expand")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"300ms")),Object(r.b)("td",{parentName:"tr",align:null},"used when an element expands (grows)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-collapse")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"250ms")),Object(r.b)("td",{parentName:"tr",align:null},"used when an element collapses (shrinks)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-small")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-simple")),Object(r.b)("td",{parentName:"tr",align:null},"elements with small transition areas, such as icons and selection controls, have short durations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-medium-expand")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-open")),Object(r.b)("td",{parentName:"tr",align:null},"expanding elements with larger transition areas, such as bottom sheets and expanding chips")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-medium-collapse")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-close")),Object(r.b)("td",{parentName:"tr",align:null},"collapsing elements with larger transition areas, such as bottom sheets and expanding chips")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-large-expand")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-expand")),Object(r.b)("td",{parentName:"tr",align:null},"expanding elements that traverse a large portion of the screen")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-large-collapse")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration-collapse")),Object(r.b)("td",{parentName:"tr",align:null},"collapsing elements that traverse a large portion of the screen")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"easing-standard")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"cubic-bezier(0.4, 0, 0.2, 1)")),Object(r.b)("td",{parentName:"tr",align:null},"elements that begin and end at rest")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"easing-deceleration")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"cubic-bezier(0, 0, 0.2, 1)")),Object(r.b)("td",{parentName:"tr",align:null},"incoming elements that end at rest")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"easing-acceleration")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"cubic-bezier(0.4, 0, 1, 1)")),Object(r.b)("td",{parentName:"tr",align:null},"elements that begin at rest and exit the screen")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"easing-sharp")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"cubic-bezier(0.4, 0, 0.6, 1)")),Object(r.b)("td",{parentName:"tr",align:null},"elements that temporarily exit")))),Object(r.b)("h2",{id:"duration-scalar"},"Duration Scalar"),Object(r.b)("p",null,"We've introduced the ",Object(r.b)("inlineCode",{parentName:"p"},"duration-scalar")," token to help modify transition durations on the fly.\nIt is highly recommend that you use the ",Object(r.b)("inlineCode",{parentName:"p"},"transition")," Sass function in ",Object(r.b)("inlineCode",{parentName:"p"},"@wwnds/core"),"\nto set your transitions, as it will automatically multiply your duration by the\n",Object(r.b)("inlineCode",{parentName:"p"},"duration-scalar")," token."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss"},"@use '@wwnds/core' as nds;\n\n.my-sidebar {\n    /*\n     * Easing is omitted because the transition function uses\n     * var(--nds-easing-standard) by default.\n     */\n    transition: nds.transition(transform, var(--nds-duration-close));\n}\n\n.my-sidebar.open {\n    transition: nds.transition(transform, var(--nds-duration-open));\n}\n")),Object(r.b)("p",null,"Alternatively, if you'd like to skip the ",Object(r.b)("inlineCode",{parentName:"p"},"transition")," function, you can multiply\nyour durations by the ",Object(r.b)("inlineCode",{parentName:"p"},"duration-scalar")," yourself."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss"},"@use '@wwnds/core' as nds;\n\n.my-sidebar {\n    transition:\n        transform\n        calc(var(--nds-duration-scalar) * var(--nds-duration-close))\n        var(--nds-easing-standard);\n}\n\n.my-sidebar.open {\n    transition:\n        transform\n        calc(var(--nds-duration-scalar) * var(--nds-duration-open))\n        var(--nds-easing-standard);\n}\n")),Object(r.b)("h3",{id:"reduced-motion"},"Reduced Motion"),Object(r.b)("p",null,"To ensure that ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"},"prefers-reduced-motion"),"\nis always followed, the ",Object(r.b)("inlineCode",{parentName:"p"},"duration-scalar")," value is automatically set to ",Object(r.b)("inlineCode",{parentName:"p"},"0")," when\nthe user prefers reduced motion. Manually setting a duration that isn't multiplied\nby the ",Object(r.b)("inlineCode",{parentName:"p"},"duration-scalar")," token will result in that duration not being ",Object(r.b)("inlineCode",{parentName:"p"},"0")," when\nthe user prefers reduced motion."),Object(r.b)("p",null,"If you'd like to set reduced motion manually, you can also do so with the\n",Object(r.b)("inlineCode",{parentName:"p"},".nds-reduced-motion")," utility class or the ",Object(r.b)("inlineCode",{parentName:"p"},"reduce-motion")," Sass mixin."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss"},"@use '@wwnds/core/full' as nds;\n\n.no-motion {\n    @include nds.reduce-motion;\n}\n")),Object(r.b)("h3",{id:"debugging-motion"},"Debugging motion"),Object(r.b)("p",null,"During development, it can be useful to slow down durations and easings to ensure\nso that you can see the animations in greater detail.\nBecause the ",Object(r.b)("inlineCode",{parentName:"p"},"duration-scalar")," token is set as a CSS custom property, it can be used\nto increase or decrease all motion speeds across your application."),Object(r.b)("p",null,"To modify it during development, simply open your dev tools, click on the\n",Object(r.b)("inlineCode",{parentName:"p"},"<html>")," element, and change the value of the ",Object(r.b)("inlineCode",{parentName:"p"},"--nds-duration-scalar")," CSS custom\nproperty to any number greater than ",Object(r.b)("inlineCode",{parentName:"p"},"1")," to slow down and less than ",Object(r.b)("inlineCode",{parentName:"p"},"1")," to speed up."),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol",id:"fn-1"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"duration-scalar")," token is not part of Material Design's motion system.",Object(r.b)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}s.isMDXComponent=!0}}]);