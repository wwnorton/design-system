"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8895],{8952:function(e,o,t){t.r(o),t.d(o,{assets:function(){return p},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var i=t(5773),n=t(808),c=(t(7378),t(5318)),l=t(6169),a=t(1010),r=["components"],s={title:"Choice Field",description:"A choice field allows the user to choose one or more option from a set of related options."},h=void 0,d={unversionedId:"components/choice-field",id:"components/choice-field",title:"Choice Field",description:"A choice field allows the user to choose one or more option from a set of related options.",source:"@site/docs/components/choice-field.mdx",sourceDirName:"components",slug:"/components/choice-field",permalink:"/design-system/docs/components/choice-field",draft:!1,editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/choice-field.mdx",tags:[],version:"current",frontMatter:{title:"Choice Field",description:"A choice field allows the user to choose one or more option from a set of related options."},sidebar:"components",previous:{title:"Checkbox",permalink:"/design-system/docs/components/checkbox"},next:{title:"Disclosure",permalink:"/design-system/docs/components/disclosure"}},p={},u=[{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"React API",id:"react-api",level:2},{value:"ChoiceField",id:"choicefield",level:3},{value:"Choice",id:"choice",level:3}],m={toc:u};function k(e){var o=e.components,t=(0,n.Z)(e,r);return(0,c.kt)("wrapper",(0,i.Z)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"A choice field allows the user to choose one or more option from a set of related options.")),(0,c.kt)("h2",{id:"anatomy"},"Anatomy"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("strong",{parentName:"li"},"Label"),": text that conveys how the choices are related and prompts the user to choose one or more choice."),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("strong",{parentName:"li"},"Current selection"),": a selected choice indicates that it will be included when the field is submitted."),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("strong",{parentName:"li"},"Choices"),": the available choices.",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"If the Choice Field is single-choice, all choices should be ",(0,c.kt)("a",{parentName:"li",href:"radio-group#radio-button"},"radio buttons"),"."),(0,c.kt)("li",{parentName:"ul"},"If the Choice Field is multiple-choice, all choices should be ",(0,c.kt)("a",{parentName:"li",href:"checkbox#checkbox"},"checkboxes"),".")))),(0,c.kt)("h2",{id:"usage"},"Usage"),(0,c.kt)("p",null,"In most cases, this component should not be used directly.\nRather, you should choose ahead of time whether your field should be single-choice or multi-choice and use the corresponding implementation."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"For single-choice, use the ",(0,c.kt)("a",{parentName:"li",href:"radio-group#radio-group"},"Radio Group"),"."),(0,c.kt)("li",{parentName:"ul"},"For multi-choice, use the ",(0,c.kt)("a",{parentName:"li",href:"checkbox#checkbox-group"},"Checkbox Group"),".")),(0,c.kt)("h2",{id:"react-api"},"React API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"import { Choice, ChoiceField } from '@wwnds/react';\n")),(0,c.kt)("h3",{id:"choicefield"},"ChoiceField"),(0,c.kt)("p",null,"To switch a ",(0,c.kt)("inlineCode",{parentName:"p"},"ChoiceField")," between single- and multi-choice, add or remove the ",(0,c.kt)("inlineCode",{parentName:"p"},"multiple")," prop."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ChoiceField label="Choose your favorite fruits." name="fruit" multiple>\n    <Choice>Apple</Choice>\n    <Choice>Banana</Choice>\n    <Choice>Kiwi</Choice>\n    <Choice>Orange</Choice>\n</ChoiceField>\n')),(0,c.kt)(a._A,{from:l.ChoiceField,mdxType:"PropsTable"}),(0,c.kt)("h3",{id:"choice"},"Choice"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Choice>Apple</Choice>\n")),(0,c.kt)(a._A,{from:l.Choice,mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);