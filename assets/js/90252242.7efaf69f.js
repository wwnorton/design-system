"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1883],{2157:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return c}});var o=n(5773),a=n(808),i=(n(7378),n(5318)),l=n(6169),s=n(1010),r=["components"],m={title:"Modal",description:"A modal presents important information or simple tasks to the user in an overlay."},d=void 0,p={unversionedId:"components/modal",id:"components/modal",title:"Modal",description:"A modal presents important information or simple tasks to the user in an overlay.",source:"@site/docs/components/modal.mdx",sourceDirName:"components",slug:"/components/modal",permalink:"/design-system/docs/components/modal",draft:!1,editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/modal.mdx",tags:[],version:"current",frontMatter:{title:"Modal",description:"A modal presents important information or simple tasks to the user in an overlay."},sidebar:"components",previous:{title:"Link",permalink:"/design-system/docs/components/link"},next:{title:"Popover",permalink:"/design-system/docs/components/popover"}},u={},c=[{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"React API",id:"react-api",level:2},{value:"Modal",id:"modal",level:3}],h={toc:c};function k(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A modal presents important information or simple tasks to the user in an overlay.")),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Modal container")," - the modal container provides a boundary for the contents of the modal."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Backdrop overlay")," - an overlay that prevents the user from interacting with the page's main content."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Title")," (",(0,i.kt)("em",{parentName:"li"},"recommended"),") - the name of the modal lets the user know what to expect from it and functions as a header for the body of the modal."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Body")," - the main content of the modal presents important information to the user or asks them to perform simple tasks before exiting the modal."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Close button")," (",(0,i.kt)("em",{parentName:"li"},"optional"),") - a button that will always close the modal.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This should always be included when no other controls exist inside the modal."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Action buttons")," (",(0,i.kt)("em",{parentName:"li"},"optional"),") - one or more actions that will result in the dismissal of the modal.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,'Use modals to present important information or simple tasks to the user, disabling all access to the main content while the modal is active.\nModals are sometimes called "modal dialogs" because they create a dialog between the application and the user in a different modality from the main content.'),(0,i.kt)("admonition",{title:"Do",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Do use a modal to confirm irreversible actions, such as deleting content."),(0,i.kt)("li",{parentName:"ul"},"Do use a modal to interrupt the user when it will help them accomplish their tasks."),(0,i.kt)("li",{parentName:"ul"},'Do be careful about ambiguous action buttons, such as "Yes" or "No".'))),(0,i.kt)("admonition",{title:"Don't",type:"danger"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Don't overuse modals. They should be used sparingly and thoughtfully."),(0,i.kt)("li",{parentName:"ul"},"Don't write long titles for modals. They should be clear and concise."))),(0,i.kt)("h2",{id:"react-api"},"React API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Modal } from '@wwnds/react';\n")),(0,i.kt)("h3",{id:"modal"},"Modal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function ModalWithButton() {\n    const [isOpen, setIsOpen] = React.useState(false);\n    const open = () => setIsOpen(true);\n    const close = () => setIsOpen(false);\n    return (\n        <>\n            <Button variant="solid" onClick={open}>Open the modal</Button>\n            <Modal\n                title="Confirm the prompt"\n                isOpen={isOpen}\n                onRequestClose={close}\n                actions={(\n                    <>\n                        <Button variant="outline" color="base" onClick={close}>\n                            Also confirm\n                        </Button>\n                        <Button variant="solid" onClick={close}>\n                            Confirm\n                        </Button>\n                    </>\n                )}\n            >\n                <p>\n                    This is a demo modal.\n                    Real modals should have useful information here.\n                </p>\n            </Modal>\n        </>\n    );\n}\n')),(0,i.kt)(s._A,{from:l.Modal,mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);