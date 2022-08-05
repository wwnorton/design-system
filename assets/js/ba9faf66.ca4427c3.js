"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5815],{5564:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var i=a(5773),l=a(808),n=(a(7378),a(5318)),o=a(6169),r=a(1010),s=["components"],d={title:"Text Field",description:"A text field allows the user to enter and edit text."},u=void 0,p={unversionedId:"components/text-field",id:"components/text-field",title:"Text Field",description:"A text field allows the user to enter and edit text.",source:"@site/docs/components/text-field.mdx",sourceDirName:"components",slug:"/components/text-field",permalink:"/design-system/docs/components/text-field",draft:!1,editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/text-field.mdx",tags:[],version:"current",frontMatter:{title:"Text Field",description:"A text field allows the user to enter and edit text."},sidebar:"components",previous:{title:"Tag",permalink:"/design-system/docs/components/tag"},next:{title:"Tooltip",permalink:"/design-system/docs/components/tooltip"}},h={},m=[{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage: Search",id:"usage-search",level:2},{value:"Content Guidelines",id:"content-guidelines",level:3},{value:"Interactions",id:"interactions",level:3},{value:"Types",id:"types",level:2},{value:"Number",id:"number",level:3},{value:"Email",id:"email",level:3},{value:"Password",id:"password",level:3},{value:"URL",id:"url",level:3},{value:"Tel",id:"tel",level:3},{value:"Text Wrapping Variants",id:"text-wrapping-variants",level:2},{value:"Single line text field",id:"single-line-text-field",level:3},{value:"Multi-line text field: Fixed height (default)",id:"multi-line-text-field-fixed-height-default",level:3},{value:"Multi-line text field: Autosize (optional alternative)",id:"multi-line-text-field-autosize-optional-alternative",level:3},{value:"React API",id:"react-api",level:2},{value:"TextField",id:"textfield",level:3},{value:"FieldInfo",id:"fieldinfo",level:3},{value:"FieldFeedback",id:"fieldfeedback",level:3},{value:"FieldAddon",id:"fieldaddon",level:3}],c={toc:m};function f(e){var t=e.components,a=(0,l.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A text field allows the user to enter and edit text.")),(0,n.kt)("h2",{id:"anatomy"},"Anatomy"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Label")," - a short name that lets the user know what to type in the field."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Field indicator")," (",(0,n.kt)("em",{parentName:"li"},"optional"),") - a parenthetical that lets the user know whether the field is required or optional.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Use this to bring attention to a field that is the "odd one out."\nFor instance, if there are five fields in a form and only one is optional, the field indicator should say "(optional)" for that one instead of "(required)" for the other four.'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Description")," (",(0,n.kt)("em",{parentName:"li"},"optional"),") - additional text that can be used to add clarity to the role of the text field or help the user understand the expected input format."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Input container")," - a container that outlines the boundary of text field's input area and addons."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Input area")," - where the user enters text."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Addon(s)")," (",(0,n.kt)("em",{parentName:"li"},"optional"),") - field addons help the user control the state of the text field.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Addons can be included before or after the input area."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Error feedback")," (",(0,n.kt)("em",{parentName:"li"},"optional"),") - feedback that lets the user know that their current input is invalid and why."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Character count feedback")," (",(0,n.kt)("em",{parentName:"li"},"optional"),") - an indicator that lets the user know how many characters they have remaining.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A text field allows a user to freeform type or paste their own response to a prompt."),(0,n.kt)("li",{parentName:"ul"},"A text field has a label that describes what the user should type."),(0,n.kt)("li",{parentName:"ul"},"A text field\u2019s label must be visible at all times."),(0,n.kt)("li",{parentName:"ul"},"A text field\u2019s label must be associated with its input. To associate a label with an input, either use the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for"},"for attribute")," or wrap the input in the label element.")),(0,n.kt)("h2",{id:"usage-search"},"Usage: Search"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A basic search field uses the text field component."),(0,n.kt)("li",{parentName:"ul"},"The search field should always include a button with a magnifying glass icon. This icon is the universally recognizable symbol for search and what people will look for when they want to find the search field. The button submits the search query and gives the user the search results."),(0,n.kt)("li",{parentName:"ul"},"For search that allows users to find information or links within an entire website or application, the field should always be at the top right of the screen, usually contained within the top navigation bar or header. The search bar should be at the top of almost every screen/page, except for processes where searching would interrupt the user\u2019s flow or progress, such as checkout."),(0,n.kt)("li",{parentName:"ul"},"Search can also be used to help users find information within a specific section of the website/application or within a component, like a table. In this case, the search bar should be clearly associated with the section or component it applies to so users don\u2019t confuse it with")),(0,n.kt)("admonition",{title:"Do",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Do let the size of the input area indicate the amount of content you expect the user to enter.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"By default, the text field should be full width, defined by the size of its container."),(0,n.kt)("li",{parentName:"ul"},"Only use a fixed-width input area if the text entry has a specific, known length. The width should remain fixed unless it is wider than its container","\u2014","then shrink width to fit."))))),(0,n.kt)("admonition",{title:"Don't",type:"danger"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Don\u2019t use labels that are too long. Labels should be very concise."),(0,n.kt)("li",{parentName:"ul"},"Don\u2019t include instructions in a label","\u2014","use help text instead."),(0,n.kt)("li",{parentName:"ul"},"Don\u2019t disable the user\u2019s ability to select, copy or paste."),(0,n.kt)("li",{parentName:"ul"},"Don\u2019t require users to write paragraphs of text in a single-line text field."))),(0,n.kt)("h3",{id:"content-guidelines"},"Content Guidelines"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The search field should have a clear and meaningful label. For search within a section or component, the label should add context, such as \u201cSearch books.\u201d"),(0,n.kt)("li",{parentName:"ul"},"Use the description if necessary for example search queries, especially if the format is important, such as dates.")),(0,n.kt)("h3",{id:"interactions"},"Interactions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enter submits the search query.")),(0,n.kt)("admonition",{title:"Character Counter",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"A text field may have a character counter, but it is not an intuitive way for users to understand content length."),(0,n.kt)("li",{parentName:"ul"},"Use a character counter only if it is important for users to know how long their text entry can be, or to clarify if the user surpasses the character limit."),(0,n.kt)("li",{parentName:"ul"},"By default, a text field does not have a character limit. If necessary, set a limit higher than most users will need."),(0,n.kt)("li",{parentName:"ul"},"Allow users to enter more than the character limit, and then display an error. This lets a user type or copy and paste their full text entry, then edit it down."),(0,n.kt)("li",{parentName:"ul"},"The character count should be announced to assistive technology users after they stop typing."))),(0,n.kt)("admonition",{title:"Placeholder",type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"A text field may have placeholder text to provide hints or examples, but placeholder text should not contain important information."),(0,n.kt)("li",{parentName:"ul"},"Don\u2019t use placeholder text in place of a label, because it will disappear once the user starts typing in the field."),(0,n.kt)("li",{parentName:"ul"},"Set an accessible color for placeholder text. Most browsers\u2019 default rendering of placeholder text does not provide a high enough contrast ratio."))),(0,n.kt)("admonition",{title:"Required Text Fields",type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"By default, a text field should be optional unless there is a significant reason to mark it as required."),(0,n.kt)("li",{parentName:"ul"},"If using both required and optional text fields in a form, include a clear signifier to differentiate required fields from optional fields."))),(0,n.kt)("admonition",{title:"Error Validation",type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"By default, display error validation on a text field as soon as the user has moved to the next field."),(0,n.kt)("li",{parentName:"ul"},"Use caution if displaying error validation before the user has finished entering text."),(0,n.kt)("li",{parentName:"ul"},"Use caution if displaying error validation on Save or Submit, especially if the text field will not be visible on screen when Save or Submit is activated."))),(0,n.kt)("admonition",{title:"Autosize Multi-line Text Fields",type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Autosize multi-line text fields should be used sparingly only when necessary."),(0,n.kt)("li",{parentName:"ul"},"The content on the screen below an autosize multi-line text field must be able to adjust accordingly and the screen must increase in size as necessary."),(0,n.kt)("li",{parentName:"ul"},"Never use an autosize multi-line text field in a modal or overlay."),(0,n.kt)("li",{parentName:"ul"},"Always set a maximum height."))),(0,n.kt)("h2",{id:"types"},"Types"),(0,n.kt)("p",null,"Text field types are based on the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"HTML input types")," that do not require a separate interface for entry, such as a date picker.\nWhere possible, they should be implemented with their corresponding ",(0,n.kt)("inlineCode",{parentName:"p"},"<input>")," type."),(0,n.kt)("h3",{id:"number"},"Number"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows the user to enter a number, and can display step arrows on focus."),(0,n.kt)("li",{parentName:"ul"},"Includes built-in validation to reject non-numeric text entry."),(0,n.kt)("li",{parentName:"ul"},"The default step value is 1, but can be set with more or less granularity, including decimal values."),(0,n.kt)("li",{parentName:"ul"},"Allow users to use the up and down arrows on their keyboard to adjust the value typed into the field.")),(0,n.kt)("h3",{id:"email"},"Email"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows the user to enter an email address or list of email addresses."),(0,n.kt)("li",{parentName:"ul"},"Includes built-in validation to ensure text entry is a properly formatted email address."),(0,n.kt)("li",{parentName:"ul"},"Some devices may display an email-specific keyboard for easier entry."),(0,n.kt)("li",{parentName:"ul"},"Can allow the user's browser to automatically fill out the field, if enabled.")),(0,n.kt)("h3",{id:"password"},"Password"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows the user to securely enter a password by obscuring the text entry."),(0,n.kt)("li",{parentName:"ul"},"Can allow the user\u2019s browser or password manager to automatically fill out the field.")),(0,n.kt)("h3",{id:"url"},"URL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows the user to enter a URL."),(0,n.kt)("li",{parentName:"ul"},"Includes built-in validation to ensure text entry is a properly formatted URL."),(0,n.kt)("li",{parentName:"ul"},"Some devices may display a URL keyboard for easier entry.")),(0,n.kt)("h3",{id:"tel"},"Tel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows the user to enter a telephone number."),(0,n.kt)("li",{parentName:"ul"},"The text entry is not automatically validated, because telephone numbers vary around the world."),(0,n.kt)("li",{parentName:"ul"},"Some devices may display a telephone keyboard for easier entry.")),(0,n.kt)("h2",{id:"text-wrapping-variants"},"Text Wrapping Variants"),(0,n.kt)("p",null,"If the user inputs text that cannot fit inside the visible text field container, the text must either wrap or the container must scroll with the text.\nThree options are provided to address this need."),(0,n.kt)("h3",{id:"single-line-text-field"},"Single line text field"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A single-line text field displays only one line of text."),(0,n.kt)("li",{parentName:"ul"},"As the cursor reaches the right edge of the input area, text longer than the input area automatically scrolls left."),(0,n.kt)("li",{parentName:"ul"},"Use single-line text fields for: Number, Email, Password, and Tel inputs.")),(0,n.kt)("h3",{id:"multi-line-text-field-fixed-height-default"},"Multi-line text field: Fixed height (default)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Multi-line text fields have a fixed height by default"),(0,n.kt)("li",{parentName:"ul"},"Text longer than the input area wraps onto a new line, and scrolls vertically when the cursor reaches the bottom of the input area."),(0,n.kt)("li",{parentName:"ul"},"The large size of the input area indicates that longer responses are possible and encouraged."),(0,n.kt)("li",{parentName:"ul"},"Use fixed height multi-line text fields for: free response inputs with additional formatting capabilities.")),(0,n.kt)("h3",{id:"multi-line-text-field-autosize-optional-alternative"},"Multi-line text field: Autosize (optional alternative)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Autosize multi-line text fields grow to accommodate multiple lines of text and show all text entry at once."),(0,n.kt)("li",{parentName:"ul"},"Autosize multi-line text fields initially appear as single-line fields, which is useful for compact layouts that need to accommodate large amounts of text."),(0,n.kt)("li",{parentName:"ul"},"Text longer than the input area wraps to a new line. The input area expands vertically and shifts any screen elements below it."),(0,n.kt)("li",{parentName:"ul"},"Use autosize multi-line text fields for: free response input and URLs.")),(0,n.kt)("h2",{id:"react-api"},"React API"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { TextField } from '@wwnds/react';\n")),(0,n.kt)("h3",{id:"textfield"},"TextField"),(0,n.kt)("p",null,"TextField provides a single interface for a complete ",(0,n.kt)("inlineCode",{parentName:"p"},"<input>")," field.\nInternally, it uses the ",(0,n.kt)("a",{parentName:"p",href:"#fieldinfo"},"FieldInfo"),", ",(0,n.kt)("a",{parentName:"p",href:"#fieldfeedback"},"FieldFeedback"),", and ",(0,n.kt)("a",{parentName:"p",href:"#fieldaddon"},"FieldAddon")," components."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextField\n    maxLength={30}\n    description="Use the description to display hints about entry."\n    required\n    requiredIndicator\n    validateOnChange\n>\n    Default text field\n</TextField>\n')),(0,n.kt)(r._A,{from:o.TextField,mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"fieldinfo"},"FieldInfo"),(0,n.kt)("p",null,"The FieldInfo component is used to information about a related field.\nIt will always contain a label for the field and can contain an optional description.\nMake sure to include a valid ",(0,n.kt)("inlineCode",{parentName:"p"},"htmlFor")," prop when used with form controls such as an ",(0,n.kt)("inlineCode",{parentName:"p"},"<input>"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FieldInfo description="Use the description to display hints about entry.">\n    Default text field\n</FieldInfo>\n')),(0,n.kt)(r._A,{from:o.FieldInfo,mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"fieldfeedback"},"FieldFeedback"),(0,n.kt)("p",null,"A container for field feedback. Use to display content based on field input."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FieldFeedback errors={['Something went wrong', 'Another thing isn\\'t right']}>\n    Generic feedback goes here\n</FieldFeedback>\n")),(0,n.kt)(r._A,{from:o.FieldFeedback,mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"fieldaddon"},"FieldAddon"),(0,n.kt)("p",null,"The FieldAddon is a simple container for input addons.\nIt is used by the TextField component to render addons before or after the ",(0,n.kt)("inlineCode",{parentName:"p"},"<input>"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FieldAddon>\n    <IconButton icon="check">Correct</IconButton>\n</FieldAddon>\n')),(0,n.kt)(r._A,{from:o.FieldAddon,mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);