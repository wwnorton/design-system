(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(124)),c=n(123),s={title:"Accessibility"},l={unversionedId:"foundations/accessibility",id:"foundations/accessibility",isDocsHomePage:!1,title:"Accessibility",description:"We've taken an inclusive approach to nearly every aspect of the design system, and some of the more notable accessibility features are outlined here.",source:"@site/docs/foundations/accessibility.md",slug:"/foundations/accessibility",permalink:"/design-system/docs/foundations/accessibility",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/foundations/accessibility.md",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1613587285,sidebar:"foundations",previous:{title:"Foundations",permalink:"/design-system/docs/foundations"},next:{title:"Design Tokens",permalink:"/design-system/docs/foundations/design-tokens"}},r=[{value:"Focus",id:"focus",children:[{value:"Focus Halo",id:"focus-halo",children:[]},{value:"Focus ring",id:"focus-ring",children:[]}]}],b={rightToc:r};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We've taken an inclusive approach to nearly every aspect of the design system, and some of the more notable accessibility features are outlined here."),Object(i.b)("h2",{id:"focus"},"Focus"),Object(i.b)("p",null,"Focus indicates the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/WAI/IndieUI/wiki/Focus_and_Point_of_Regard"}),"point of regard")," for keyboard input.\nIn other words, it gives you a visual clue to where keyboard input will be directed on the page."),Object(i.b)("p",null,'We provide two focus indicators for you to use: a focus "halo" and a focus "ring," both of which are captured as design tokens (',Object(i.b)("inlineCode",{parentName:"p"},"focus-halo")," and ",Object(i.b)("inlineCode",{parentName:"p"},"focus-ring"),").\nBoth focus indicators use the ",Object(i.b)("inlineCode",{parentName:"p"},"box-shadow")," property rather than the typical ",Object(i.b)("inlineCode",{parentName:"p"},"outline")," to ensure that the indicator matches the shape of its element."),Object(i.b)("h3",{id:"focus-halo"},"Focus Halo"),Object(i.b)("p",null,"The focus halo is our global focus indicator and should be used in most cases.\nIt contains two rings:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("inlineCode",{parentName:"li"},"2px")," outer ring with a color of ",Object(i.b)("inlineCode",{parentName:"li"},"focus-halo-outer-color")),Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("inlineCode",{parentName:"li"},"1px")," inner ring with a color of ",Object(i.b)("inlineCode",{parentName:"li"},"focus-halo-inner-color"))),Object(i.b)("p",null,"The resulting effect looks like a halo around the focused element."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Example: focus halo")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"To see the focus halo in action, tab to the following button."),Object(i.b)(c.Button,{className:"nds-button nds-button--solid",mdxType:"Button"},"Focus halo"))),Object(i.b)("p",null,"Using the focus halo for most elements ensures a few things that are key to a well-designed focus indicator:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Color contrast can always be assured against both the background and the element's background."),Object(i.b)("li",{parentName:"ul"},"It is more visually apparent than a normal outline.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Focus cannot be visually tracked from point to point like mouse movement can, so it needs to be more visually obvious than most visual elements on a page."))),Object(i.b)("li",{parentName:"ul"},"It meets ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.w3.org/TR/WCAG22/#focus-appearance-enhanced"}),"WCAG 2.2 Focus Appearance (Enhanced)")," under most circumstances by including the following:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A focus indication area of ",Object(i.b)("inlineCode",{parentName:"li"},"2px")," + a ",Object(i.b)("inlineCode",{parentName:"li"},"1px")," offset."),Object(i.b)("li",{parentName:"ul"},"High contrast between the background color and the element's color under nearly every scenario."),Object(i.b)("li",{parentName:"ul"},"A high on-focus ",Object(i.b)("inlineCode",{parentName:"li"},"z-index")," to ensure that it is never obscured by other content.")))),Object(i.b)("h3",{id:"focus-ring"},"Focus ring"),Object(i.b)("p",null,"The focus ring is more akin to the typical focus outline seen on the web.\nIt contains a ",Object(i.b)("inlineCode",{parentName:"p"},"2px")," ring with a color of ",Object(i.b)("inlineCode",{parentName:"p"},"focus-color"),"."),Object(i.b)("p",null,"It is used in situations where some other focus affordance is included.\nMost notably, this is seen in ",Object(i.b)("inlineCode",{parentName:"p"},"<input>")," fields, which provide an additional indication of focus via the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/caret"}),"insertion caret"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Example: focus ring")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"To see the focus ring in action, tab to the following text field."),Object(i.b)(c.TextField,{mdxType:"TextField"},"Focus ring"))))}d.isMDXComponent=!0}}]);