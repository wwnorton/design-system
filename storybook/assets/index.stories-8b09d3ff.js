import{j as e,a as g}from"./index-a1e85e29.js";import{R as r}from"./index-0cbcd92a.js";import{a as I}from"./chunk-AY7I2SME-c7b6cf8a.js";import{B as J}from"./IconButton-488799a2.js";import{D as t}from"./Dropdown-28a2ff62.js";import"./_commonjsHelpers-de833af9.js";import"./hook-0eff1646.js";import"./BaseButton-a4b1d3e6.js";import"./Icon-04f449eb.js";import"./index-314a82e0.js";import"./inheritsLoose-9eefaa95.js";import"./FieldInfo-942aaa1a.js";const ce={title:"Dropdown",component:t},Q=["Americium","Berkelium","Bohrium","Californium","Copernicium","Curium","Darmstadtium","Dubnium","Einsteinium","Fermium","Flerovium","Hassium","Lawrencium","Livermorium","Meitnerium","Mendelevium","Moscovium","Neptunium","Nihonium","Nobelium","Oganesson","Plutonium","Roentgenium","Rutherfordium","Seaborgium","Tennessine"],m={label:"Choose an element",children:Q},v=o=>e(t,{...o}),a=v.bind({});a.args=m;const s=v.bind({});s.args={matchWidth:"listbox",...m};const i=v.bind({});i.args={matchWidth:"button",buttonWidth:256,...m};const l=o=>e("div",{className:"scrollbox",children:e(t,{...o})});l.args={description:"Open the dropdown and then scroll down to see it flip from top to bottom.",...m};const c=o=>g(t,{...o,label:"Select your native fruit",matchWidth:"button",buttonWidth:"6rem",buttonClass:"dropdown__button fruits",children:[e(t.Option,{value:"apple",children:e("span",{role:"img","aria-label":"Apple",title:"Apple",children:"🍎"})}),e(t.Option,{value:"peach",children:e("span",{role:"img","aria-label":"Peach",title:"Peach",children:"🍑"})}),e(t.Option,{value:"pear",children:e("span",{role:"img","aria-label":"Pear",title:"Pear",children:"🍐"})}),e(t.Option,{value:"cherry",children:e("span",{role:"img","aria-label":"Cherry",title:"Cherry",children:"🍒"})}),e(t.Option,{value:"orange",children:e("span",{role:"img","aria-label":"Orange",title:"Orange",children:"🍊"})})]}),d=o=>{const[n,b]=r.useState();return g(t,{...o,label:"My dropdown",selected:n,onChange:({value:h})=>b(h),children:[e(t.Option,{value:"foo",children:"Foo"}),e(t.Option,{value:"bar",children:"Bar"}),e(t.Option,{value:"baz"}),"Qux"]})},u=o=>{const[n,b]=r.useState("Mendelevium"),[D,h]=r.useState("Select something"),[w,$]=r.useState(!1),[k,O]=r.useState(!1);return g("form",{onSubmit:p=>{I("onSubmit")(n),alert(`${n} submitted!`),$(!0),p.preventDefault()},children:[e(t,{...o,label:"Choose an element",isOpen:k,selected:n,buttonContents:D,disabled:w,onChange:({value:p,contents:G})=>{b(p),h(G||p)},onRequestClose:()=>O(!1),onRequestOpen:()=>O(!0),children:Q}),e(J,{type:"submit",variant:"solid",disabled:w,style:{marginTop:"1rem"},children:"Submit"})]})};var S,f,C;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"(args: DropdownProps) => <Dropdown {...args} />",...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,R,P;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"(args: DropdownProps) => <Dropdown {...args} />",...(P=(R=s.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var y,H,B;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:"(args: DropdownProps) => <Dropdown {...args} />",...(B=(H=i.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var M,F,W;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`(args: DropdownProps) =>
// cspell:ignore scrollbox
<div className="scrollbox">
        <Dropdown {...args} />
    </div>`,...(W=(F=l.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var T,_,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`(args: DropdownProps) => <Dropdown {...args} label="Select your native fruit" matchWidth="button" buttonWidth="6rem" buttonClass="dropdown__button fruits">
        <Dropdown.Option value="apple">
            <span role="img" aria-label="Apple" title="Apple">
                🍎
            </span>
        </Dropdown.Option>
        <Dropdown.Option value="peach">
            <span role="img" aria-label="Peach" title="Peach">
                🍑
            </span>
        </Dropdown.Option>
        <Dropdown.Option value="pear">
            <span role="img" aria-label="Pear" title="Pear">
                🍐
            </span>
        </Dropdown.Option>
        <Dropdown.Option value="cherry">
            <span role="img" aria-label="Cherry" title="Cherry">
                🍒
            </span>
        </Dropdown.Option>
        <Dropdown.Option value="orange">
            <span role="img" aria-label="Orange" title="Orange">
                🍊
            </span>
        </Dropdown.Option>
    </Dropdown>`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var N,q,L;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`(args: DropdownProps) => {
  const [selected, setSelected] = React.useState<React.ReactText>();
  const changeHandler = ({
    value
  }: {
    value: React.ReactText;
  }): void => setSelected(value);
  return <Dropdown {...args} label="My dropdown" selected={selected} onChange={changeHandler}>
            {/* explicit value ("foo"); explicit rendered contents ("Foo"); recommended. */}
            <Dropdown.Option value="foo">Foo</Dropdown.Option>
            {/* implicit value ("Bar"); explicit rendered contents ("Bar") */}
            <Dropdown.Option value="bar">Bar</Dropdown.Option>
            {/* explicit value ("baz"); implicit rendered contents ("baz") */}
            <Dropdown.Option value="baz" />
            {/* implicit Option. value & contents both equal "Qux" */}
            Qux
        </Dropdown>;
}`,...(L=(q=d.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var z,E,j;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`(args: DropdownProps) => {
  const [selected, setSelected] = React.useState<React.ReactText>('Mendelevium');
  const [buttonContents, setButtonContents] = React.useState<React.ReactNode>('Select something');
  const [submitted, setSubmitted] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  const changeHandler: DropdownProps['onChange'] = ({
    value,
    contents
  }): void => {
    setSelected(value);
    setButtonContents(contents || value);
  };
  const closeHandler = (): void => setOpen(false);
  const openHandler = (): void => setOpen(true);
  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    action('onSubmit')(selected);
    alert(\`\${selected} submitted!\`); // eslint-disable-line no-alert
    setSubmitted(true);
    e.preventDefault();
  };
  return <form onSubmit={submit}>
            <Dropdown {...args} label="Choose an element" isOpen={isOpen} selected={selected} buttonContents={buttonContents} disabled={submitted} onChange={changeHandler} onRequestClose={closeHandler} onRequestOpen={openHandler}>
                {options}
            </Dropdown>
            <Button type="submit" variant="solid" disabled={submitted} style={{
      marginTop: '1rem'
    }}>
                Submit
            </Button>
        </form>;
}`,...(j=(E=u.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};const de=["Default","MatchListboxWidth","MatchButtonWidth","FlippingPlacement","ComplexOptions","DifferentChildrenTypes","FullyControlled"];export{c as ComplexOptions,a as Default,d as DifferentChildrenTypes,l as FlippingPlacement,u as FullyControlled,i as MatchButtonWidth,s as MatchListboxWidth,de as __namedExportsOrder,ce as default};
//# sourceMappingURL=index.stories-8b09d3ff.js.map
