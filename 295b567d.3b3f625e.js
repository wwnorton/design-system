(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),l=(n(0),n(124)),b={title:"Migration"},r={unversionedId:"migration",id:"migration",isDocsHomePage:!1,title:"Migration",description:"This page contains migration guides for specific major changes.",source:"@site/docs/migration.md",slug:"/migration",permalink:"/design-system/docs/migration",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/migration.md",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1613587285},c=[{value:"v1.0.0-beta.3 \u2192 v1.0.0-rc.0",id:"v100-beta3-\u2192-v100-rc0",children:[{value:"Core",id:"core",children:[]},{value:"React",id:"react",children:[]},{value:"Design Tokens",id:"design-tokens",children:[]}]},{value:"v0.9.x \u2192 v1.0.0-beta.0",id:"v09x-\u2192-v100-beta0",children:[{value:"Core",id:"core-1",children:[]},{value:"React",id:"react-1",children:[]}]}],o={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This page contains migration guides for specific major changes."),Object(l.b)("h2",{id:"v100-beta3-\u2192-v100-rc0"},"v1.0.0-beta.3 \u2192 v1.0.0-rc.0"),Object(l.b)("p",null,"The first release candidate contains a couple breaking changes, primarily to design token names."),Object(l.b)("h3",{id:"core"},"Core"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"@wwnds/core")," contains a handful of breaking changes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Some design tokens have been renamed to be more explicit in their roles.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"See the summary of ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#design-tokens"}),"updated token names")," for details."))),Object(l.b)("li",{parentName:"ul"},"The entirety of ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wwnorton/design-system/blob/v1.0.0-beta.3/packages/core/src/_properties.scss"}),"_","properties.scss")," has been removed, as it added complexity without adding much value."),Object(l.b)("li",{parentName:"ul"},"The following config options were removed:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wwnorton/design-system/blob/v1.0.0-beta.3/packages/core/src/_config.scss#L8-L9"}),Object(l.b)("inlineCode",{parentName:"a"},"$namespace"))," - the ",Object(l.b)("inlineCode",{parentName:"li"},"nds")," namespace is now hard-coded to improve readability."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wwnorton/design-system/blob/v1.0.0-beta.3/packages/core/src/_config.scss#L14-L16"}),Object(l.b)("inlineCode",{parentName:"a"},"$css-property-fallback"))," - build tools can accomplish this more simply."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wwnorton/design-system/blob/v1.0.0-beta.3/packages/core/src/_config.scss#L18-L20"}),Object(l.b)("inlineCode",{parentName:"a"},"$warn-on-missing-fallback")))))),Object(l.b)("h3",{id:"react"},"React"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"@wwnds/react")," contains one breaking change to ",Object(l.b)("inlineCode",{parentName:"p"},"TextField"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"TextField")," can no longer be used as an ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://reactjs.org/docs/uncontrolled-components.html"}),"uncontrolled component"),".",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If you were using it as an ",Object(l.b)("strong",{parentName:"li"},"uncontrolled")," component, you'll need to switch to the new ",Object(l.b)("inlineCode",{parentName:"li"},"TextFieldUncontrolled"),"."),Object(l.b)("li",{parentName:"ul"},"If you were using it as a ",Object(l.b)("strong",{parentName:"li"},"controlled")," component, you don't need to change anything.")))),Object(l.b)("h3",{id:"design-tokens"},"Design Tokens"),Object(l.b)("p",null,"All color role tokens have had the ",Object(l.b)("inlineCode",{parentName:"p"},"-color")," suffix added to their names.\nThis should help clarify that the token is a color token."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note that all of the following token names are prefixed with ",Object(l.b)("inlineCode",{parentName:"p"},"--nds-")," in the corresponding CSS custom properties in ",Object(l.b)("inlineCode",{parentName:"p"},"@wwnds/core"),".")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"New Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Previous Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"background-color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"body-bg")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"text-color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"body-text")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Related new token: ",Object(l.b)("inlineCode",{parentName:"td"},"text-color-inverse"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"subdued-color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"subdued")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"focus-ring")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"focus-color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ",Object(l.b)("inlineCode",{parentName:"td"},"focus-ring")," token now refers to a box shadow")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"primary-color-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"primary-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Where ",Object(l.b)("inlineCode",{parentName:"td"},"x")," is a grade or shade","*")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"base-color-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"base-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Where ",Object(l.b)("inlineCode",{parentName:"td"},"x")," is a grade or shade","*")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"disabled-color-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"disabled-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Where ",Object(l.b)("inlineCode",{parentName:"td"},"x")," is a grade or shade","*")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"error-color-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"error-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Where ",Object(l.b)("inlineCode",{parentName:"td"},"x")," is a grade or shade","*")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"success-color-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"success-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Where ",Object(l.b)("inlineCode",{parentName:"td"},"x")," is a grade or shade","*")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"warning-color-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"warning-x")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Where ",Object(l.b)("inlineCode",{parentName:"td"},"x")," is a grade or shade","*")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"focus-halo-inner-color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"focus-ring-inner")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"focus-halo-outer-color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"focus-ring")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"focus-ring")," still exists but is now a box shadow")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"focus-halo")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"focus-shadow")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"focus-ring")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"focus-shadow-collapse")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(l.b)("p",null,"*"," A grade is a number like ",Object(l.b)("inlineCode",{parentName:"p"},"20")," and a shade is an adjective like ",Object(l.b)("inlineCode",{parentName:"p"},"lighter"),"."),Object(l.b)("h2",{id:"v09x-\u2192-v100-beta0"},"v0.9.x \u2192 v1.0.0-beta.0"),Object(l.b)("p",null,"The first beta release contained many breaking changes, most notably a complete rewrite of ",Object(l.b)("inlineCode",{parentName:"p"},"@wwnds/core"),"."),Object(l.b)("h3",{id:"core-1"},"Core"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"@wwnds/core")," now makes full use of ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://css-tricks.com/introducing-sass-modules/"}),"Sass modules")," and ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"}),"CSS custom properties"),".\nIf you were previously using ",Object(l.b)("inlineCode",{parentName:"p"},"@import")," statements to use the design system's Sass, it is highly recommended that you update to ",Object(l.b)("inlineCode",{parentName:"p"},"@forward")," and ",Object(l.b)("inlineCode",{parentName:"p"},"@use"),"."),Object(l.b)("h4",{id:"entry-points"},"Entry points"),Object(l.b)("p",null,"There are two main entry points:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"@wwnds/core")," (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wwnorton/design-system/blob/main/packages/core/index.scss"}),"index.scss"),") - pure abstracts for all modules and components. Using this directly will give you the most flexibility but will require the most work."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"@wwnds/core/full")," (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wwnorton/design-system/blob/main/packages/core/full.scss"}),"full.scss"),") - a fully-functional stylesheet with a reset and components declared. Using this directly will require little to no work but won't be as flexible as the default entry point.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"@use '@wwnds/core' as nds with (\n    $font-family-base: 'Proxima Nova',\n);\n\n.my-declaration {\n    font-family: var(--nds-font-family-base); // 'Proxima Nova'\n    // font-family: nds.$font-family-base;      // alternatively use the Sass variable\n    // (these will compile to the same thing)\n}\n")),Object(l.b)("p",null,"View ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wwnorton/design-system/tree/main/packages/core#readme"}),"the @wwnds/core readme"),"\nfor more about this."),Object(l.b)("h3",{id:"react-1"},"React"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"@wwnds/react")," changed some elements of the ",Object(l.b)("inlineCode",{parentName:"p"},"TextField")," component."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"label")," prop has been removed in favor of ",Object(l.b)("inlineCode",{parentName:"li"},"children"),"."),Object(l.b)("li",{parentName:"ul"},"The following props have been renamed:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"help")," \u2192 ",Object(l.b)("inlineCode",{parentName:"li"},"description")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"helpClass")," \u2192 ",Object(l.b)("inlineCode",{parentName:"li"},"descriptionClass")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"errorClass")," \u2192 ",Object(l.b)("inlineCode",{parentName:"li"},"errorsClass"))))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="v0.9.x"',title:'"v0.9.x"'}),'<TextField\n    label="My text field"\n    help="A longer description of the text field."\n    helpClass="help"\n    errorClass="error"\n/>\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="v1.0.0-beta.x"',title:'"v1.0.0-beta.x"'}),'<TextField\n    description="A longer description of the text field."\n    descriptionClass="desc"\n    errorsClass="errors"\n>\n    My text field\n</TextField>\n')),Object(l.b)("p",null,"The resulting HTML has also changed to make better use of field composition.\nMost notably, the text field is now a modified ",Object(l.b)("inlineCode",{parentName:"p"},"field"),' component instead of a\nroot "block" (in BEM conventions).\nIn other words, the "block" class name is now ',Object(l.b)("inlineCode",{parentName:"p"},"field")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"textfield"),".\nThis was done to reuse field components across form fields."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="v1.0.0-beta.x"',title:'"v1.0.0-beta.x"'}),'<div class="nds-field nds-field--text nds-field--invalid" id="nds-field-1">\n    <div class="nds-field__info">\n        <label\n            class="nds-field__label"\n            for="nds-field-1-input"\n            id="nds-field-1-label"\n        >\n            Default Text Field\n        </label>\n        <div class="nds-field__desc" id="nds-field-1-desc">\n            The default Text Field has a type of "text"\n        </div>\n    </div>\n    <div class="nds-field__group nds-field__group--text">\n        <input\n            id="nds-field-1-input"\n            class="nds-field__input nds-field__input--text"\n            aria-describedby="nds-field-1-desc"\n            aria-invalid="true"\n            type="text"\n            value=""\n            required=""\n            aria-errormessage="nds-field-1-err"\n        />\n    </div>\n    <div class="nds-field__feedback">\n        <ul\n            class="nds-field__errors"\n            id="nds-field-1-err"\n            aria-label="Errors"\n            aria-live="assertive"\n            aria-atomic="true"\n        >\n            <li>This nds-field is required.</li>\n        </ul>\n    </div>\n</div>\n')))}d.isMDXComponent=!0}}]);