import{j as n,a as w}from"./index-a1e85e29.js";import{C as D}from"./Callout-4f03eb36.js";import{a as j}from"./Icon-04f449eb.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./IconButton-5d21255e.js";import"./hook-0eff1646.js";import"./BaseButton-a4b1d3e6.js";import"./index-314a82e0.js";import"./inheritsLoose-9eefaa95.js";const a=`
    Lorem ipsum is simply dummy text of the printing and typesetting industry.
    Lorem ipsum has been the industry’s standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type.
`.replace(/\n\t/g," ").replace(/\n/g,""),k=a,E=w("div",{children:[n("p",{children:a}),n("hr",{}),n("p",{children:a})]}),W={title:"Default callout",childrenType:"simple",dismissible:!0,icon:"check-circle"},F={title:"Callout",component:D,decorators:[t=>n("div",{style:{maxWidth:"30rem"},children:n(t,{})})],args:W,argTypes:{childrenType:{options:{"Simple string text":"simple","Nested ReactNode":"complex"},control:"radio"},dismissible:{control:"boolean"},title:{control:"text"},icon:{options:j,control:"select"}},layout:"padded"},l=({childrenType:t,...N})=>w(D,{...N,children:[t==="simple"&&k,t==="complex"&&E]}),i=l.bind({}),e=l.bind({});e.args={title:void 0};const r=l.bind({});r.args={color:"success",border:"left"};const o=l.bind({});o.args={color:"warning",border:"left",icon:"warning"};const s=l.bind({});s.args={color:"error",border:"left",icon:"exclamation"};var c,p,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`({
  childrenType,
  ...args
}) => <Callout {...args}>
        {childrenType === 'simple' && simpleChildren}
        {childrenType === 'complex' && complexChildren}
    </Callout>`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
  childrenType,
  ...args
}) => <Callout {...args}>
        {childrenType === 'simple' && simpleChildren}
        {childrenType === 'complex' && complexChildren}
    </Callout>`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,y,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`({
  childrenType,
  ...args
}) => <Callout {...args}>
        {childrenType === 'simple' && simpleChildren}
        {childrenType === 'complex' && complexChildren}
    </Callout>`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var x,T,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`({
  childrenType,
  ...args
}) => <Callout {...args}>
        {childrenType === 'simple' && simpleChildren}
        {childrenType === 'complex' && complexChildren}
    </Callout>`,...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var b,S,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`({
  childrenType,
  ...args
}) => <Callout {...args}>
        {childrenType === 'simple' && simpleChildren}
        {childrenType === 'complex' && complexChildren}
    </Callout>`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const G=["Default","NoTitle","Success","Warning","Error"];export{i as Default,s as Error,e as NoTitle,r as Success,o as Warning,G as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-f2463b5c.js.map
