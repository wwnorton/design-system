import{a as u,j as e,F as I}from"./index-a1e85e29.js";import{R as t}from"./index-0cbcd92a.js";import"./Badge-521352a6.js";import{B as R}from"./IconButton-488799a2.js";import"./Callout-5eb642c7.js";import"./Checkbox-6477849d.js";import"./ChoiceField-dee2c16d.js";import"./Disclosure-f71d8e4c.js";import{L as j,O as n}from"./Dropdown-28a2ff62.js";import"./FieldInfo-942aaa1a.js";import{P as d}from"./Icon-04f449eb.js";import"./Link-a9242a41.js";import"./Modal-7cd13909.js";import"./Popover-5b6ed65c.js";import"./ProgressBar-5a4d04a6.js";import"./Radio-5a205c9a.js";import"./Spinner-fbdc24c2.js";import"./Step-05e9b3f5.js";import"./Switch-b221f64e.js";import"./Tag-d9ffcfa9.js";import"./TextField-bf89e361.js";import"./index-cf5fe9fd.js";import{u as _,a as q}from"./hook-0eff1646.js";import"./_commonjsHelpers-de833af9.js";import"./BaseButton-a4b1d3e6.js";import"./index-314a82e0.js";import"./BaseInput-0353def3.js";import"./inheritsLoose-9eefaa95.js";import"./toString-a79d3543.js";import"./BaseProgressSpinner-bfdd54c0.js";const ge={title:"Popper",component:d,argTypes:{enableArrow:{control:{type:"boolean"}},distance:{control:{type:"range",min:0,max:20,step:1}}}},c=s=>{const[o,r]=t.useState(!0);return u(d,{...s,isOpen:o,children:[e("p",{children:"Popper components are used for positioning an element relative to another component and have no styling by default."}),e("p",{children:"This Popper has no reference element."}),e("div",{children:e("button",{type:"button",onClick:()=>r(!1),children:"Close popper"})})]})},a=s=>{const[o,r]=t.useState(!1),[m,i]=t.useState();return u(I,{children:[e(R,{variant:"solid",ref:i,onClick:()=>r(!o),children:"Show popover"}),e(d,{reference:m,isOpen:o,style:{"--nds-popper-border-width":"3px","--nds-background-color":"var(--nds-red-30)",backgroundColor:"var(--nds-background-color)",border:"var(--nds-popper-border-width) solid var(--nds-red-50)",maxWidth:200},...s,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"})]})};a.args={placement:"right-start",distance:6,enableArrow:!1,transition:"fade"};const l=s=>{const[o,r]=t.useState(null),[m,i]=t.useState(!0),[h,f]=t.useState(!1),[p,L]=t.useState(null),{selected:T,toggle:F}=_(!1),[E,W]=t.useState(0),[H,A]=t.useState("Select"),g=()=>f(!1),D=({value:x,label:b})=>{F(x),g(),A(b)};return q([p,o],g),u(I,{children:[e(R,{variant:"outline","aria-haspopup":"listbox","aria-expanded":h,ref:L,onClick:()=>f(!h),icon:"chevron-down",iconRight:!0,style:{minWidth:150,justifyContent:"space-between"},children:H}),e(d,{transition:"fade",placement:"bottom-start",reference:p,isOpen:h,distance:4,onEntered:()=>{i(!1)},onExited:()=>{i(!0),p&&window.setTimeout(()=>p.focus(),10)},matchWidth:!0,...s,children:u(j,{"aria-label":"Choose an animal",selected:T,onChange:D,focusableIndex:E,autofocus:m,ref:r,onOptionFocus:(x,b)=>W(b),style:{backgroundColor:"var(--nds-background-color)"},children:[e(n,{value:"dog",children:"🐶 Dog"}),e(n,{value:"cat",children:"🐱 Cat"}),e(n,{value:"hamster",children:"🐹 Hamster"}),e(n,{value:"parrot",children:"🦜 Parrot"}),e(n,{value:"spider",children:"🕷️ Spider"}),e(n,{value:"fish",children:"🐠 Fish"})]})})]})};var O,v,S;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`(args: PopperProps) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return <Popper {...args} isOpen={isOpen}>
            <p>
                Popper components are used for positioning an element relative to
                another component and have no styling by default.
            </p>
            <p>This Popper has no reference element.</p>
            <div>
                <button type="button" onClick={() => setIsOpen(false)}>
                    Close popper
                </button>
            </div>
        </Popper>;
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,P,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`(args: PopperProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [button, setButton] = React.useState<HTMLButtonElement | null>();
  return <>
            <Button variant="solid" ref={setButton} onClick={() => setIsOpen(!isOpen)}>
                Show popover
            </Button>
            <Popper reference={button} isOpen={isOpen} style={{
      [('--nds-popper-border-width' as string)]: '3px',
      [('--nds-background-color' as string)]: 'var(--nds-red-30)',
      backgroundColor: 'var(--nds-background-color)',
      border: 'var(--nds-popper-border-width) solid var(--nds-red-50)',
      maxWidth: 200
    }} {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco
            </Popper>
        </>;
}`,...(y=(P=a.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var w,k,B;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`(args: PopperProps) => {
  const [listbox, setListbox] = React.useState<HTMLUListElement | null>(null);
  const [autofocus, setAutofocus] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [button, setButton] = React.useState<HTMLButtonElement | null>(null);
  const {
    selected,
    toggle
  } = useSelect(false);
  const [optionFocusIndex, setOptionFocusIndex] = React.useState(0);
  const [buttonText, setButtonText] = React.useState<React.ReactNode>('Select');
  const close = () => setIsOpen(false);
  const changeHandler: ListboxProps['onChange'] = ({
    value,
    label
  }) => {
    toggle(value);
    close();
    setButtonText(label);
  };
  useExternalClick([button, listbox], close);
  return <>
            <Button variant="outline" aria-haspopup="listbox" aria-expanded={isOpen} ref={setButton} onClick={() => setIsOpen(!isOpen)} icon="chevron-down" iconRight style={{
      minWidth: 150,
      justifyContent: 'space-between'
    }}>
                {buttonText}
            </Button>
            <Popper transition="fade" placement="bottom-start" reference={button} isOpen={isOpen} distance={4} onEntered={() => {
      setAutofocus(false);
    }} onExited={() => {
      setAutofocus(true);
      if (button) {
        /**
         * Wait briefly to ensure that the listbox doesn't immediately
         * reopen if exit was triggered by selecting an option with
         * the \`Enter\` key.
         */
        window.setTimeout(() => button.focus(), 10);
      }
    }} matchWidth {...args}>
                <Listbox aria-label="Choose an animal" selected={selected} onChange={changeHandler} focusableIndex={optionFocusIndex} autofocus={autofocus} ref={setListbox} onOptionFocus={(_, i) => setOptionFocusIndex(i)} style={{
        backgroundColor: 'var(--nds-background-color)'
      }}>
                    <Option value="dog">🐶 Dog</Option>
                    <Option value="cat">🐱 Cat</Option>
                    <Option value="hamster">🐹 Hamster</Option>
                    <Option value="parrot">🦜 Parrot</Option>
                    <Option value="spider">🕷️ Spider</Option>
                    <Option value="fish">🐠 Fish</Option>
                </Listbox>
            </Popper>
        </>;
}`,...(B=(k=l.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const xe=["Default","WithReference","BasicDropdown"];export{l as BasicDropdown,c as Default,a as WithReference,xe as __namedExportsOrder,ge as default};
//# sourceMappingURL=index.stories-62cf4d13.js.map
