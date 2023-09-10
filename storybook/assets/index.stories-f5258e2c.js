import{a as v,F as T,j as e}from"./index-a1e85e29.js";import{R as y}from"./index-0cbcd92a.js";import{a as H}from"./chunk-AY7I2SME-c7b6cf8a.js";import{R as a,a as x}from"./Radio-5a205c9a.js";import{L as O}from"./Link-a9242a41.js";import{u as P}from"./hook-0eff1646.js";import"./_commonjsHelpers-de833af9.js";import"./ChoiceField-dee2c16d.js";import"./FieldInfo-942aaa1a.js";import"./BaseInput-0353def3.js";import"./Icon-04f449eb.js";import"./index-314a82e0.js";import"./inheritsLoose-9eefaa95.js";const J={title:"Radio",component:a},w=r=>e(a,{...r}),o=w.bind({});o.args={description:"This is a radio button with all its defaults",children:"Radio"};const i=w.bind({});i.args={description:v(T,{children:["This radio includes a clickable thumbnail from"," ",e(O,{href:"https://picsum.photos",external:!0,children:"https://picsum.photos"})]}),thumbnail:e("img",{src:"https://picsum.photos/64",alt:""}),children:"Radio"};const j=[{value:"apple",children:"Apple"},{value:"banana",children:"Banana"},{value:"kiwi",children:"Kiwi"},{value:"orange",children:"Orange"}],s=r=>v(x,{...r,children:[e(a,{children:"Apple"}),e(a,{children:"Banana"}),e(a,{children:"Kiwi"}),e(a,{children:"Orange"})]});s.args={label:"Choose your favorite fruit",name:"fruit"};const t=r=>{const{selected:n,formChangeHandler:k}=P();return y.useEffect(()=>H("selection change")(n),[n]),e(x,{...r,children:j.map(({value:c,...S})=>e(a,{checked:n.includes(c),onChange:k,value:c,name:"fruit",...S},c))})};t.args={label:"Choose your favorite fruit",description:"This example demonstrates how state can be controlled externally.",name:"fruit"};var d,p,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"(args: RadioProps) => <Radio {...args} />",...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,u,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"(args: RadioProps) => <Radio {...args} />",...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var R,f,g;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`(args: RadioGroupProps) => <RadioGroupComp {...args}>
        <Radio>Apple</Radio>
        <Radio>Banana</Radio>
        <Radio>Kiwi</Radio>
        <Radio>Orange</Radio>
    </RadioGroupComp>`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var C,b,G;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`(args: RadioGroupProps) => {
  const {
    selected,
    formChangeHandler
  } = useSelect();
  React.useEffect(() => action('selection change')(selected), [selected]);
  return <RadioGroupComp {...args}>
            {/* Choices can be mapped manually or with the <Choices> component */}
            {fruits.map(({
      value,
      ...props
    }) => <Radio checked={selected.includes(value)} onChange={formChangeHandler} value={value} name="fruit" key={value} {...props} />)}
            {/* <Choices
                choices={fruits}
                selected={selected}
                onChange={changeHandler}
                name="fruit"
             /> */}
        </RadioGroupComp>;
}`,...(G=(b=t.parameters)==null?void 0:b.docs)==null?void 0:G.source}}};const M=["Default","WithThumbnail","RadioGroup","ControlledRadioGroup"];export{t as ControlledRadioGroup,o as Default,s as RadioGroup,i as WithThumbnail,M as __namedExportsOrder,J as default};
//# sourceMappingURL=index.stories-f5258e2c.js.map
