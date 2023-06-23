"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7152],{5309:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var o=n(5773),a=n(808),l=(n(7378),n(5318)),r=n(3157),s=n(7256),i=["components"],c={title:"Callout",description:"A callout brings attention to important information that is related to the main content."},u=void 0,p={unversionedId:"components/callout",id:"components/callout",title:"Callout",description:"A callout brings attention to important information that is related to the main content.",source:"@site/docs/components/callout.mdx",sourceDirName:"components",slug:"/components/callout",permalink:"/design-system/docs/components/callout",draft:!1,editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/callout.mdx",tags:[],version:"current",frontMatter:{title:"Callout",description:"A callout brings attention to important information that is related to the main content."},sidebar:"components",previous:{title:"Button",permalink:"/design-system/docs/components/button"},next:{title:"Checkbox",permalink:"/design-system/docs/components/checkbox"}},m={},d=[{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Presets",id:"presets",level:3},{value:"React API",id:"react-api",level:2},{value:"Callout",id:"callout",level:3},{value:"Callout Presets",id:"callout-presets",level:3}],h={toc:d},k="wrapper";function g(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)(k,(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A callout brings attention to important information that is related to the main content.")),(0,l.kt)("h2",{id:"anatomy"},"Anatomy"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Container")," - the container sets the contents of the callout apart from the main content."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Icon")," (",(0,l.kt)("em",{parentName:"li"},"optional"),") - an icon can be used to add character or emphasize the title."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Title")," (",(0,l.kt)("em",{parentName:"li"},"recommended"),") - the title of a callout summarizes its contents."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Dismiss button")," (",(0,l.kt)("em",{parentName:"li"},"optional"),") - a control that allows the user to dismiss the callout."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Body")," - the contents of the callout.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Use a callout to bring attention to important information that is related but set apart from the main content.\nEffective callouts emphasize, summarize, or provide additional information about the main content, but they should also be clear as standalone snippets of information.\nIn other words, callouts should make sense both in context and out of context."),(0,l.kt)("admonition",{title:"Callouts vs. Alerts",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Callouts are meant to be part of the main document and should exist on the page when it first loads.\nIt is not recommended to use a callout to alert the user of something that just happened, as screen reader users will not be alerted to the change.")),(0,l.kt)("h3",{id:"presets"},"Presets"),(0,l.kt)("p",null,'Three preset callouts are provided to emphasize "success," "warning," and "error" in a consistent way.'),(0,l.kt)("p",null,"Be careful to always provide a title for these presets, as color and icons alone will never convey meaning to everyone.\nA clear title will ensure that screen reader users and users with color blindness can still understand the role of the callout."),(0,l.kt)("div",{className:"nds-example"},(0,l.kt)(r.CalloutSuccess,{mdxType:"CalloutSuccess"},"Use the success preset to call attention to positive things, such as a correct answer or a good practice."),(0,l.kt)(r.CalloutWarning,{mdxType:"CalloutWarning"},"Use the warning preset to caution or warn the reader."),(0,l.kt)(r.CalloutError,{mdxType:"CalloutError"},"Use the error preset to call attention to negative things, such as incorrect answers or a bad practice.")),(0,l.kt)("h2",{id:"react-api"},"React API"),(0,l.kt)("h3",{id:"callout"},"Callout"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Callout } from '@wwnds/react';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Callout title="Lorem Ipsum" icon="star" border="left" dismissible>\n    <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n        when an unknown printer took a galley of type.\n    </p>\n</Callout>\n')),(0,l.kt)(s._A,{from:r.Callout,mdxType:"PropsTable"}),(0,l.kt)("h3",{id:"callout-presets"},"Callout Presets"),(0,l.kt)("p",null,"Each of the three presets use the main Callout's props but sets a default ",(0,l.kt)("inlineCode",{parentName:"p"},"border"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"color"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"icon"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"title")," for your convenience."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { CalloutError, CalloutSuccess, CalloutWarning } from '@wwnds/react';\n")),(0,l.kt)(r.CalloutSuccess,{title:"CalloutSuccess",mdxType:"CalloutSuccess"},(0,l.kt)("p",null,"This preset is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Callout border="left" color="success" icon="check-circle" title="Success" />\n'))),(0,l.kt)(r.CalloutWarning,{title:"CalloutWarning",mdxType:"CalloutWarning"},(0,l.kt)("p",null,"This preset is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Callout border="left" color="warning" icon="warning" title="Warning" />\n'))),(0,l.kt)(r.CalloutError,{title:"CalloutError",mdxType:"CalloutError"},(0,l.kt)("p",null,"This preset is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Callout border="left" color="error" icon="exclamation-circle" title="Error" />\n'))))}g.isMDXComponent=!0}}]);