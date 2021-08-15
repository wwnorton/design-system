"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3096],{7737:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var n=o(5773),a=o(808),i=(o(7378),o(8869)),r=o(9276),p=o(5239),s=["components"],l={title:"Dropdown",description:"A dropdown allows the user to select an option from a list of options in an expandable overlay."},d=void 0,c={unversionedId:"components/dropdown",id:"components/dropdown",isDocsHomePage:!1,title:"Dropdown",description:"A dropdown allows the user to select an option from a list of options in an expandable overlay.",source:"@site/docs/components/dropdown.mdx",sourceDirName:"components",slug:"/components/dropdown",permalink:"/design-system/docs/components/dropdown",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/dropdown.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1618685757,formattedLastUpdatedAt:"4/17/2021",frontMatter:{title:"Dropdown",description:"A dropdown allows the user to select an option from a list of options in an expandable overlay."},sidebar:"components",previous:{title:"Disclosure",permalink:"/design-system/docs/components/disclosure"},next:{title:"Link",permalink:"/design-system/docs/components/link"}},m=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Usage",id:"usage",children:[]},{value:"React API",id:"react-api",children:[{value:"Dropdown",id:"dropdown",children:[]},{value:"Option",id:"option",children:[]}]}],u={toc:m};function h(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A dropdown allows the user to select an option from a list of options in an expandable overlay.")),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Label")," - a short description or prompt that lets the user know what they will be selecting."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Button")," - a button that opens the dropdown listbox and displays the currently selected option.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Default text before selection should be "Select".'),(0,i.kt)("li",{parentName:"ul"},"A marker should be displayed to the right of the button's text to convey whether the dropdown listbox is open or closed."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Listbox")," - a container for the list of options that only appears when opened by the dropdown button."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Selected option")," - the currently selected option."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Options")," - the available options. Clicking an unselected option will select that option, deselect the currently selected option, and close the listbox.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use a dropdown to select one option from a collapsed set of available options."),(0,i.kt)("li",{parentName:"ul"},"By default, dropdown options are mutually exclusive. The user can only select 1 option."),(0,i.kt)("li",{parentName:"ul"},"When an option is selected, the dropdown closes and the selected option updates to display that item."),(0,i.kt)("li",{parentName:"ul"},"On load, the dropdown should display default text of ",(0,i.kt)("inlineCode",{parentName:"li"},'"Select"'),". The user should be able to change it back to ",(0,i.kt)("inlineCode",{parentName:"li"},'"Select"')," if they wish."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Down Arrow"),"/",(0,i.kt)("kbd",null,"Up Arrow")," moves focus to the next/previous options, respectively."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Home")," and ",(0,i.kt)("kbd",null,"End")," moves focus to the first/last options, respectively.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Dos")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Do keep dropdown options very concise.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If long options are unavoidable, then they can truncate when the dropdown is in a closed state, but they should wrap fully in the open state."))),(0,i.kt)("li",{parentName:"ul"},"Do ensure that the clickable area includes the entire selected option area and the icon."),(0,i.kt)("li",{parentName:"ul"},"Consider the most logical order to list options. Options could be listed alphabetically, chronologically, by popularity, etc.")))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don'ts")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Do not start all of the options in a dropdown with the same word or phrase."),(0,i.kt)("li",{parentName:"ul"},"If there are more than 6 options, consider using a combo box instead."),(0,i.kt)("li",{parentName:"ul"},"If there are 2 options, consider using ",(0,i.kt)("a",{parentName:"li",href:"radio-group"},"radio group")," or ",(0,i.kt)("a",{parentName:"li",href:"switch"},"switch")," instead.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If your interface needs to contain many of these selections, use dropdowns over radio buttons."))),(0,i.kt)("li",{parentName:"ul"},"Do not use a dropdown when the user can multi-select options. Use checkboxes instead."),(0,i.kt)("li",{parentName:"ul"},"If it is not absolutely necessary for a user to choose from a predefined set of options, then consider a ",(0,i.kt)("a",{parentName:"li",href:"text-field"},"text field")," for users to type their own information.")))),(0,i.kt)("h2",{id:"react-api"},"React API"),(0,i.kt)("p",null,"We expose two components for the dropdown API: the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/Dropdown"},"Dropdown"),"\nand the Option, which uses the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wwnorton/design-system/tree/main/packages/react/src/components/BaseOption"},"BaseOption"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Dropdown, Option } from '@wwnds/react';\n")),(0,i.kt)("h3",{id:"dropdown"},"Dropdown"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Dropdown")," component does not expose a ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," or extend a full DOM interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dropdown label="Choose a sitcom" sort="ascending">\n    <Dropdown.Option>The Office</Dropdown.Option>\n    <Dropdown.Option>Community</Dropdown.Option>\n    <Dropdown.Option>Friends</Dropdown.Option>\n    <Dropdown.Option>Parks and Recreation</Dropdown.Option>\n    <Dropdown.Option>How I Met Your Mother</Dropdown.Option>\n    <Dropdown.Option>Modern Family</Dropdown.Option>\n    <Dropdown.Option disabled>The Big Bang Theory</Dropdown.Option>\n    <Dropdown.Option>Arrested Development</Dropdown.Option>\n</Dropdown>\n')),(0,i.kt)(p._A,{from:r.Dropdown,mdxType:"PropsTable"}),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," component extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"React.LiHTMLAttributes<HTMLLIElement>")," interface, and uses the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria/#option"},"ARIA option role"),"."),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dropdown")," also exposes the ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," as a static member (",(0,i.kt)("inlineCode",{parentName:"p"},"Dropdown.Option"),") for your convenience."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Option>Community</Option>\n")),(0,i.kt)(p._A,{from:r.Option,mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);