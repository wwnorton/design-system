import{j as e,a as m,F as j}from"./index-a1e85e29.js";import{R as p}from"./index-0cbcd92a.js";import{a as K}from"./chunk-AY7I2SME-c7b6cf8a.js";import{C as o,a as _}from"./Checkbox-6477849d.js";import{B as L}from"./IconButton-488799a2.js";import{e as M,u as V}from"./hook-0eff1646.js";import{b as W}from"./ChoiceField-dee2c16d.js";import"./_commonjsHelpers-de833af9.js";import"./BaseButton-a4b1d3e6.js";import"./Icon-04f449eb.js";import"./index-314a82e0.js";import"./inheritsLoose-9eefaa95.js";import"./FieldInfo-942aaa1a.js";import"./BaseInput-0353def3.js";const ie={title:"Checkbox",component:o},b=r=>e(o,{...r}),n=b.bind({});n.args={children:"Checkbox",description:"Additional information about this checkbox.",disabled:!1,required:!1,requiredIndicator:!1,optionalIndicator:!1,indeterminate:!1};const c=r=>{const[a,t]=p.useState(!1);return e(o,{checked:a,onChange:k=>{const s=k.currentTarget.checked;window.setTimeout(()=>t(s),1e3)},...r})};c.args={children:"Checkbox",description:"This checkbox waits a second before updating to demonstrate that its state is controlled."};const i=b.bind({});i.args={children:"Checkbox",description:"This checkbox starts out in the indeterminate/mixed state.",indeterminate:!0};const d=b.bind({});d.args={children:"Checkbox",description:m(j,{children:["This checkbox includes a clickable thumbnail from"," ",e("a",{href:"https://picsum.photos",target:"_blank",rel:"noopener noreferrer",children:"https://picsum.photos"})]}),thumbnail:e("img",{src:"https://picsum.photos/64",alt:""})};const h=r=>{const[a,t]=p.useState(),C=M();return m("form",{className:"form",onSubmit:s=>{s.preventDefault()},onInvalid:s=>{t(C(s.target))},children:[e("div",{className:"field",children:e(o,{...r,description:"I have read the terms and conditions.",errors:a,required:!0,children:"Agree"})}),e(L,{variant:"solid",type:"submit",children:"Submit"})]})},z=r=>m(_,{...r,children:[e(o,{children:"Apple"}),e(o,{children:"Banana"}),e(o,{children:"Kiwi"}),e(o,{children:"Orange"})]}),l=z.bind({});l.args={label:"Choose your favorite fruits!",name:"fruit"};const J=[{value:"apple",children:"Apple"},{value:"banana",children:"Banana"},{value:"kiwi",children:"Kiwi"},{value:"orange",children:"Orange"}],u=r=>{const{selected:a,formChangeHandler:t}=V(!0);return p.useEffect(()=>K("selection change")(a),[a]),e(_,{...r,label:"Choose your favorite fruits",onChange:t,children:e(W,{choices:J,selected:a,name:"fruit"})})};var g,f,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"(args: CheckboxProps) => <Checkbox {...args} />",...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,S,H;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`(args: CheckboxProps) => {
  const [checked, setChecked] = React.useState(false);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = e.currentTarget.checked;
    window.setTimeout(() => setChecked(isChecked), 1000);
  };
  return <Checkbox checked={checked} onChange={changeHandler} {...args} />;
}`,...(H=(S=c.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var T,G,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:"(args: CheckboxProps) => <Checkbox {...args} />",...(E=(G=i.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var I,w,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:"(args: CheckboxProps) => <Checkbox {...args} />",...(R=(w=d.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var y,A,B;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`(args: CheckboxProps) => {
  const [errors, setErrors] = React.useState<string[]>();
  const validate = useValidation();
  const invalidHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    setErrors(validate((e.target as HTMLInputElement)));
  };
  return <form className="form" onSubmit={(e): void => {
    e.preventDefault();
  }} onInvalid={invalidHandler}>
            <div className="field">
                <Checkbox {...args} description="I have read the terms and conditions." errors={errors} required>
                    Agree
                </Checkbox>
            </div>
            <Button variant="solid" type="submit">Submit</Button>
        </form>;
}`,...(B=(A=h.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var P,q,F;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`(args: CheckboxGroupProps) => <CheckboxGroup {...args}>
        <Checkbox>Apple</Checkbox>
        <Checkbox>Banana</Checkbox>
        <Checkbox>Kiwi</Checkbox>
        <Checkbox>Orange</Checkbox>
    </CheckboxGroup>`,...(F=(q=l.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var O,D,N;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`(args: CheckboxGroupProps) => {
  const {
    selected,
    formChangeHandler
  } = useSelect(true);
  React.useEffect(() => action('selection change')(selected), [selected]);
  return <CheckboxGroup {...args} label="Choose your favorite fruits" onChange={formChangeHandler}>
            <Choices choices={fruits} selected={selected} name="fruit" />
            {/* Alternatively, choices could be mapped manually */}
            {/* {
                fruits.map(({ value, ...props }) => (
                    <Checkbox
                        checked={selected.includes(value)}
                        value={value}
                        name="fruit"
                        key={value}
                        {...props}
                    />
                ))
             } */}
        </CheckboxGroup>;
}`,...(N=(D=u.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const de=["Default","Controlled","Indeterminate","WithThumbnail","SingleCheckboxRequiredForm","GroupOfCheckboxes","ControlledGroup"];export{c as Controlled,u as ControlledGroup,n as Default,l as GroupOfCheckboxes,i as Indeterminate,h as SingleCheckboxRequiredForm,d as WithThumbnail,de as __namedExportsOrder,ie as default};
//# sourceMappingURL=index.stories-7a20b41f.js.map
