import{j as a}from"./index-a1e85e29.js";import{R as E}from"./index-0cbcd92a.js";import{a as P}from"./chunk-AY7I2SME-c7b6cf8a.js";import{a as l,C as A,b as m}from"./ChoiceField-dee2c16d.js";import{u as G}from"./hook-0eff1646.js";import"./_commonjsHelpers-de833af9.js";import"./FieldInfo-942aaa1a.js";import"./BaseInput-0353def3.js";import"./Icon-04f449eb.js";import"./index-314a82e0.js";import"./inheritsLoose-9eefaa95.js";const Q={title:"ChoiceField",component:l},d="Which of the following is a vegetable?",j="Green Bean",h=["Apple","Banana",j,"Tomato"],W=e=>a(l,{...e}),s=W.bind({});s.args={label:d,description:"This field is in its default state.",multiple:!1,children:h.map(e=>a(A,{value:e,children:e},e))};const c=W.bind({});c.args={label:d,description:"This field is in its checkbox state and uses the Choices component to map its choices.",multiple:!0,children:a(m,{choices:h,selected:"Banana"})};const r=e=>{const{formChangeHandler:n,selected:o}=G();return E.useEffect(()=>P("selection change")(o),[o]),a(l,{onChange:n,...e,children:[{value:"apple",children:"Apple"},{value:"banana",children:"Banana"},{value:"green-bean",children:"Green Bean"},{value:"tomato",children:"Tomato"}].map(({value:p,..._})=>a(A,{checked:o.includes(p),value:p,name:"fruit",..._},p))})};r.args={label:d,description:"This field is in its radio state and uses externally-controlled state."};const t=e=>{const{formChangeHandler:n,selected:o}=G(!0);return E.useEffect(()=>P("selection change")(o),[o]),a(l,{...e,multiple:!0,children:a(m,{choices:h,selected:o,onChange:n})})};t.args={label:d,description:"This field is in its checkbox state and uses externally-controlled state."};const i=({choices:e,name:n,...o})=>a(m,{choices:h,name:"choices",...o});i.args={description:"These choices don't have the field label or description."};var u,C,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"(args: ChoiceFieldProps) => <ChoiceField {...args} />",...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var f,b,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:"(args: ChoiceFieldProps) => <ChoiceField {...args} />",...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var F,x,T;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`(args: ChoiceFieldProps) => {
  const {
    formChangeHandler,
    selected
  } = useSelect();
  React.useEffect(() => action('selection change')(selected), [selected]);
  return <ChoiceField onChange={formChangeHandler} {...args}>
            {/* manually map a list to Choice elements */}
            {[{
      value: 'apple',
      children: 'Apple'
    }, {
      value: 'banana',
      children: 'Banana'
    }, {
      value: 'green-bean',
      children: 'Green Bean'
    }, {
      value: 'tomato',
      children: 'Tomato'
    }].map(({
      value,
      ...props
    }) => <Choice checked={selected.includes(value)} value={value} name="fruit" key={value} {...props} />)}
        </ChoiceField>;
}`,...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var S,k,B;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`(args: ChoiceFieldProps) => {
  const {
    formChangeHandler,
    selected
  } = useSelect(true);
  React.useEffect(() => action('selection change')(selected), [selected]);
  return <ChoiceField {...args} multiple>
            {/* use the Choices utility component to map a list of choices */}
            <Choices choices={defaultChoices} selected={selected} onChange={formChangeHandler} />
        </ChoiceField>;
}`,...(B=(k=t.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var H,R,y;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`({
  choices,
  name,
  ...args
}: ChoicesProps) => <Choices choices={defaultChoices} name="choices" {...args} />`,...(y=(R=i.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const U=["Default","WithChoices","ControlledRadio","ControlledCheckbox","ChoiceList"];export{i as ChoiceList,t as ControlledCheckbox,r as ControlledRadio,s as Default,c as WithChoices,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=index.stories-56a8f7c9.js.map
