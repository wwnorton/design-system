import{j as e,F as d,a as m}from"./index-a1e85e29.js";import{R as t}from"./index-0cbcd92a.js";import{P as h}from"./Popover-5b6ed65c.js";import{B as p}from"./IconButton-488799a2.js";import{L as H}from"./Link-a9242a41.js";import{T as D}from"./TextField-bf89e361.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-04f449eb.js";import"./hook-0eff1646.js";import"./index-314a82e0.js";import"./inheritsLoose-9eefaa95.js";import"./BaseButton-a4b1d3e6.js";import"./FieldInfo-942aaa1a.js";import"./BaseInput-0353def3.js";const oe={title:"Popover",component:h,parameters:{layout:"padded"},argTypes:{isOpen:{control:{type:"boolean"}},hideTitle:{control:{type:"boolean"}},hideCloseButton:{control:{type:"boolean"}},distance:{control:{type:"range",min:0,max:20,step:1}}}},j=({isOpen:n,...l})=>{const[r,o]=t.useState(n);return t.useEffect(()=>o(n),[n]),e(h,{...l,isOpen:r,onRequestClose:()=>o(!1)})},c=j.bind({});c.args={isOpen:!0,title:"Default popover",placement:"bottom-start",children:e(d,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."})};const a=n=>{const[l,r]=t.useState(!1),[o,f]=t.useState();return m(d,{children:[e(p,{variant:"solid",ref:f,children:"Show popover"}),m(h,{reference:o,isOpen:l,onRequestClose:()=>r(!1),onRequestOpen:()=>r(!0),...n,children:["Popovers are dialogs that are related to another element, which we call the “reference” element. This—along with the fact that they do not change the mode of input when opened— distinguish them from the"," ",e(H,{href:"./?path=/story/modal--default",children:"Modal component"}),", which is a modal dialog without a reference."]})]})};a.args={title:"Popover with a reference button",hideTitle:!1,hideCloseButton:!0,placement:"bottom-start",distance:8};const i=n=>{const[l,r]=t.useState(),[o,f]=t.useState("Change this button's text"),[b,v]=t.useState(o),[g,F]=t.useState(null),[T,O]=t.useState(!1),M=()=>{v(o),O(!0)},u=s=>{s!=="click.reference"&&O(!1)};return m(d,{children:[e(p,{variant:"solid",ref:r,onClick:s=>T?u(s):M(),children:o}),e(h,{"aria-labelledby":"change-btn",reference:l,isOpen:T,onRequestClose:u,onOpen:()=>g&&g.focus(),actions:m(d,{children:[e(p,{variant:"outline",onClick:u,children:"Cancel"}),e(p,{variant:"solid",type:"submit",form:"demo-form",children:"Submit"})]}),...n,children:e("form",{id:"demo-form",onSubmit:s=>{s.preventDefault(),f(b),u("submit")},children:e(D,{labelId:"change-btn",required:!0,value:b,ref:F,onChange:s=>{g&&v(s.target.value)},children:"Button text"})})})]})};i.args={placement:"bottom-start",hideCloseButton:!0};var x,R,w;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`({
  isOpen: isOpenProp,
  ...args
}: PopoverProps) => {
  const [isOpen, setOpen] = React.useState(isOpenProp);
  React.useEffect(() => setOpen(isOpenProp), [isOpenProp]);
  return <Popover {...args} isOpen={isOpen} onRequestClose={() => setOpen(false)} />;
}`,...(w=(R=c.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var C,S,P,y,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`(args: PopoverProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ref, setRef] = React.useState<HTMLButtonElement | null>();
  return <>
            <Button variant="solid" ref={setRef}>
                Show popover
            </Button>
            <Popover reference={ref} isOpen={isOpen} onRequestClose={() => setIsOpen(false)} onRequestOpen={() => setIsOpen(true)} {...args}>
                Popovers are dialogs that are related to another element, which we call the
                &ldquo;reference&rdquo; element. This&mdash;along with the fact that they
                do not change the mode of input when opened&mdash; distinguish them from the
                {' '}
                <Link href="./?path=/story/modal--default">Modal component</Link>
                , which is a modal dialog without a reference.
            </Popover>
        </>;
}`,...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.source},description:{story:"This example demos the minimal setup with a reference element.\n- The triggering element must use a callback ref, which is bound to the\n  Popover's `reference` prop. This lets the popover know where to position.\n- Requests to open and close are used to update the `isOpen` state.",...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.description}}};var B,q,I,E,L;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`(args: PopoverProps) => {
  const [ref, setRef] = React.useState<HTMLButtonElement | null>();
  const [buttonText, setButtonText] = React.useState('Change this button\\'s text');
  const [inputText, setInputText] = React.useState(buttonText);
  const [input, setInput] = React.useState<HTMLInputElement | null>(null);
  const [isOpen, setOpen] = React.useState(false);
  const open = (): void => {
    setInputText(buttonText);
    setOpen(true);
  };
  const close = trigger => {
    // don't close on reference clicks since we're using our own onClick callback
    if (trigger !== 'click.reference') setOpen(false);
  };
  const toggle = t => isOpen ? close(t) : open();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    if (input) setInputText(e.target.value);
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText(inputText);
    close('submit');
  };
  return <>
            <Button variant="solid" ref={setRef} onClick={toggle}>
                {buttonText}
            </Button>
            <Popover aria-labelledby="change-btn" reference={ref} isOpen={isOpen} onRequestClose={close} onOpen={() => input && input.focus()} actions={<>
                        <Button variant="outline" onClick={close}>
                            Cancel
                        </Button>
                        <Button variant="solid" type="submit" form="demo-form">
                            Submit
                        </Button>
                    </>} {...args}>
                <form id="demo-form" onSubmit={submit}>
                    <TextField labelId="change-btn" required value={inputText} ref={setInput} onChange={handleChange}>
                        Button text
                    </TextField>
                </form>
            </Popover>
        </>;
}`,...(I=(q=i.parameters)==null?void 0:q.docs)==null?void 0:I.source},description:{story:`This example demos how to fully control the state of a Popover.
The following features are related to the Popover API:
- The Popover is labelled by the text field's label, so it doesn't need a \`title\`.
- The input is focused on open, overriding the default \`onOpen\` callback, which
  focuses the popover dialog itself.
- Opening is triggered by setting an \`onClick\` callback on the reference button
  so \`onRequestOpen\` is not used.

The following features are unrelated to Popover but are good practice:
- the submit button ([type=submit]) is external to the form so it uses the \`form\`
  attribute to associate itself with the form element. this causes the button
  to trigger the form's \`onSubmit\` action on click, which is why there is no
  onClick callback.
- a text field contained by a form will trigger the onSubmit action on Enter`,...(L=(E=i.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};const ne=["Default","WithReference","FullyControlled"];export{c as Default,i as FullyControlled,a as WithReference,ne as __namedExportsOrder,oe as default};
//# sourceMappingURL=index.stories-467dc394.js.map
