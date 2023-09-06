import{j as e,a as t,F as s}from"./index-a1e85e29.js";import{R as a}from"./index-0cbcd92a.js";import{T as l}from"./Icon-04f449eb.js";import"./Badge-521352a6.js";import{B as p}from"./IconButton-5d21255e.js";import{C as c}from"./Callout-4f03eb36.js";import"./Checkbox-3ab1b5db.js";import"./ChoiceField-8cd78b39.js";import"./Disclosure-f71d8e4c.js";import"./Dropdown-9a2b966c.js";import"./FieldInfo-942aaa1a.js";import"./Link-a9242a41.js";import"./Modal-279d1dd7.js";import"./Popover-02b4697c.js";import"./ProgressBar-5a4d04a6.js";import"./Radio-f364a3b8.js";import"./Spinner-fbdc24c2.js";import"./Step-05e9b3f5.js";import"./Switch-4571d1c4.js";import"./Tag-d9ffcfa9.js";import"./TextField-a0e92e87.js";import"./index-cf5fe9fd.js";import"./hook-0eff1646.js";import"./_commonjsHelpers-de833af9.js";import"./index-314a82e0.js";import"./inheritsLoose-9eefaa95.js";import"./BaseButton-a4b1d3e6.js";import"./BaseInput-9efc6de2.js";import"./toString-a79d3543.js";import"./BaseProgressSpinner-bfdd54c0.js";const we={title:"Tooltip",component:l,parameters:{layout:"padded"},argTypes:{hideDelay:{control:{type:"range",min:0,max:1e3,step:50}},showDelay:{control:{type:"range",min:0,max:1e3,step:50}}}},i=450,d=({darkScheme:r,...o})=>e(l,{isOpen:!0,className:r?"nds-tooltip--dark":"nds-tooltip--light",...o,children:"Tooltips require a reference element in order to render their arrow."});d.args={hideDelay:200,showDelay:400,darkScheme:!0};const m=r=>{const[o,n]=a.useState(null);return t(s,{children:[t(c,{title:"Labelling",border:"bottom",style:{maxWidth:i},children:[t("p",{children:["By default, tooltips are used to describe their reference, meaning they add description to something that already has an"," ",e("a",{href:"https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/",target:"_blank",rel:"noopener noreferrer",children:"accessible name"}),". But tooltips can also be used to label a reference element that does not have an accessible name. This is built into the Button and Icon components, which will use their contents as a labelling tooltip under certain scenarios."]}),e("p",{children:"In this example, the tooltip is being used to label the image, effectively acting as alt text."})]}),t("figure",{children:[e("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Escalator_looped_animation.gif/800px-Escalator_looped_animation.gif",ref:n,width:i,tabIndex:0}),e("figcaption",{children:t("small",{children:["Source:"," ",e("a",{href:"https://commons.wikimedia.org/wiki/File:Escalator_looped_animation.gif",target:"_blank",rel:"noopener noreferrer",children:"https://commons.wikimedia.org/wiki/File:Escalator_looped_animation.gif"})]})})]}),e(l,{...r,reference:o,asLabel:!0,children:"A looped animation of two escalators at Södra station in Stockholm."})]})},u=r=>{const[o,n]=a.useState(null);return t(s,{children:[t(c,{title:"Default trigger",border:"bottom",style:{maxWidth:i},children:["The default trigger is"," ",e("code",{children:'"focus pointerenter"'}),", which ensures that the tooltip opens and closes for both keyboard and pointer users in a reliable way."]}),e(p,{variant:"solid",ref:n,children:"Reference"}),e(l,{...r,reference:o,showDelay:0,children:"Tooltip"})]})},h=r=>{const[o,n]=a.useState(null);return t(s,{children:[t(c,{title:"Pointer enter trigger",border:"bottom",style:{maxWidth:i},children:[t("p",{children:["The"," ",e("code",{children:'"pointerenter"'})," ","trigger will open the tooltip on"," ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerenter_event",target:"_blank",rel:"noopener noreferrer",children:"pointerenter"}),". This occurs whenever a pointer (mouse or touch) enters the bounding box of the reference. It will close on"," ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerleave_event",target:"_blank",rel:"noopener noreferrer",children:"pointerleave"})," ","(whenever a pointer leaves the bounding box) or"," ",e("kbd",{children:"Escape"}),"."]}),t("p",{children:["Note that the"," ",e("code",{children:'"mouseenter"'})," ","event is treated as an alias for"," ",e("code",{children:'"pointerenter"'}),"."]})]}),e(p,{variant:"solid",ref:n,children:"Reference"}),e(l,{...r,reference:o,trigger:"pointerenter",showDelay:0,children:"Tooltip"})]})},g=r=>{const[o,n]=a.useState(null);return t(s,{children:[t(c,{title:"Focus trigger",border:"bottom",style:{maxWidth:i},children:["The"," ",e("code",{children:'"focus"'})," ","trigger will open the tooltip on"," ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event",target:"_blank",rel:"noopener noreferrer",children:"focus"})," ","and close it on"," ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event",target:"_blank",rel:"noopener noreferrer",children:"blur"})," ","or"," ",e("kbd",{children:"Escape"}),"."]}),e(p,{variant:"solid",ref:n,children:"Reference"}),e(l,{...r,reference:o,trigger:"focus",children:"Tooltip"})]})},f=r=>{const[o,n]=a.useState(null);return t(s,{children:[t(c,{title:"Click trigger",border:"bottom",style:{maxWidth:i},children:["The"," ",e("code",{children:'"click"'})," ","trigger will toggle on pointer"," ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event",target:"_blank",rel:"noopener noreferrer",children:"click"})," ","or keyboard clicks, which are either"," ",e("code",{children:"keyup"})," ",e("kbd",{children:"Space"})," ","or"," ",e("code",{children:"keydown"})," ",e("kbd",{children:"Enter"})," ",", and will close on external click or"," ",e("kbd",{children:"Escape"}),"."]}),e(p,{variant:"solid",ref:n,children:"Reference"}),e(l,{...r,reference:o,trigger:"click",children:"Tooltip"})]})},b=r=>{const[o,n]=a.useState(null),[k,q]=a.useState(!1);return t(s,{children:[t(c,{title:"Manual trigger",border:"bottom",style:{maxWidth:i},children:["The"," ",e("code",{children:'"manual"'})," ","allows you to fully control how the tooltip opens and closes. Only use this trigger if you need to control state external to the tooltip, but be careful to ensure that it can be opened and closed by everyone."]}),e(p,{variant:"solid",ref:n,onClick:()=>q(!k),children:"Reference"}),e(l,{...r,reference:o,trigger:"manual",isOpen:k,children:"Tooltip"})]})},T=r=>{const[o,n]=a.useState();return t(s,{children:[t("p",{children:[e("span",{className:"glossref",role:"button",tabIndex:0,ref:n,children:"Lorem ipsum"})," ","dolor sit amet consectetur adipisicing elit."]}),e(l,{...r,reference:o,trigger:"click pointerenter",showDelay:0,children:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."})]})};var y,w,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`({
  darkScheme,
  ...args
}: TooltipStoryProps) => <Tooltip isOpen className={darkScheme ? 'nds-tooltip--dark' : 'nds-tooltip--light'} {...args}>
        Tooltips require a reference element in order to render their arrow.
    </Tooltip>`,...(v=(w=d.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var _,S,x;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`(args: TooltipProps) => {
  const [reference, setReference] = React.useState<HTMLImageElement | null>(null);
  return <>
            <Callout title="Labelling" border="bottom" style={{
      maxWidth: CALLOUT_WIDTH
    }}>
                <p>
                    By default, tooltips are used to describe their reference, meaning they
                    add description to something that already has an
                    {' '}
                    <a href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/" target="_blank" rel="noopener noreferrer">accessible name</a>
                    .
                    But tooltips can also be used to label a reference element that does
                    not have an accessible name.
                    This is built into the Button and Icon components, which will
                    use their contents as a labelling tooltip under certain scenarios.
                </p>
                <p>
                    In this example, the tooltip is being used to label the image,
                    effectively acting as alt text.
                </p>
            </Callout>
            <figure>
                {/* eslint-disable jsx-a11y/alt-text, jsx-a11y/no-noninteractive-tabindex */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Escalator_looped_animation.gif/800px-Escalator_looped_animation.gif" ref={setReference} width={CALLOUT_WIDTH} tabIndex={0} />
                <figcaption>
                    <small>
                        Source:
                        {' '}
                        <a href="https://commons.wikimedia.org/wiki/File:Escalator_looped_animation.gif" target="_blank" rel="noopener noreferrer">https://commons.wikimedia.org/wiki/File:Escalator_looped_animation.gif</a>
                    </small>

                </figcaption>
            </figure>
            <Tooltip {...args} reference={reference} asLabel>
                A looped animation of two escalators at Södra station in Stockholm.
            </Tooltip>
        </>;
}`,...(x=(S=m.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var R,E,L;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`(args: TooltipProps) => {
  const [reference, setReference] = React.useState<HTMLButtonElement | null>(null);
  return <>
            {/* eslint-disable react/no-unescaped-entities */}
            <Callout title="Default trigger" border="bottom" style={{
      maxWidth: CALLOUT_WIDTH
    }}>
                The default trigger is
                {' '}
                <code>"focus pointerenter"</code>
                , which ensures that the tooltip opens and closes for both keyboard
                and pointer users in a reliable way.
            </Callout>
            <Button variant="solid" ref={setReference}>
                Reference
            </Button>
            <Tooltip {...args} reference={reference} showDelay={0}>
                Tooltip
            </Tooltip>
        </>;
}`,...(L=(E=u.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var C,W,I;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`(args: TooltipProps) => {
  const [reference, setReference] = React.useState<HTMLButtonElement | null>(null);
  return <>
            <Callout title="Pointer enter trigger" border="bottom" style={{
      maxWidth: CALLOUT_WIDTH
    }}>
                <p>
                    The
                    {' '}
                    <code>"pointerenter"</code>
                    {' '}
                    trigger will open the tooltip on
                    {' '}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerenter_event" target="_blank" rel="noopener noreferrer">pointerenter</a>
                    .
                    This occurs whenever a pointer (mouse or touch)
                    enters the bounding box of the reference.
                    It will close on
                    {' '}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerleave_event" target="_blank" rel="noopener noreferrer">pointerleave</a>
                    {' '}
                    (whenever a pointer leaves the bounding box) or
                    {' '}
                    <kbd>Escape</kbd>
                    .
                </p>
                <p>
                    Note that the
                    {' '}
                    <code>"mouseenter"</code>
                    {' '}
                    event is treated as an alias for
                    {' '}
                    <code>"pointerenter"</code>
                    .
                </p>
            </Callout>
            <Button variant="solid" ref={setReference}>
                Reference
            </Button>
            <Tooltip {...args} reference={reference} trigger="pointerenter" showDelay={0}>
                Tooltip
            </Tooltip>
        </>;
}`,...(I=(W=h.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var D,B,P;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`(args: TooltipProps) => {
  const [reference, setReference] = React.useState<HTMLButtonElement | null>(null);
  return <>
            <Callout title="Focus trigger" border="bottom" style={{
      maxWidth: CALLOUT_WIDTH
    }}>
                The
                {' '}
                <code>"focus"</code>
                {' '}
                trigger will open the tooltip on
                {' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event" target="_blank" rel="noopener noreferrer">focus</a>
                {' '}
                and close it on
                {' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event" target="_blank" rel="noopener noreferrer">blur</a>
                {' '}
                or
                {' '}
                <kbd>Escape</kbd>
                .
            </Callout>
            <Button variant="solid" ref={setReference}>
                Reference
            </Button>
            <Tooltip {...args} reference={reference} trigger="focus">
                Tooltip
            </Tooltip>
        </>;
}`,...(P=(B=g.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var O,A,U;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`(args: TooltipProps) => {
  const [reference, setReference] = React.useState<HTMLButtonElement | null>(null);
  return <>
            <Callout title="Click trigger" border="bottom" style={{
      maxWidth: CALLOUT_WIDTH
    }}>
                The
                {' '}
                <code>"click"</code>
                {' '}
                trigger will toggle on pointer
                {' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event" target="_blank" rel="noopener noreferrer">click</a>
                {' '}
                or keyboard clicks, which are either
                {' '}
                <code>keyup</code>
                {' '}
                <kbd>Space</kbd>
                {' '}
                or
                {' '}
                <code>keydown</code>
                {' '}
                <kbd>Enter</kbd>
                {' '}
                , and will close on external click or
                {' '}
                <kbd>Escape</kbd>
                .
            </Callout>
            <Button variant="solid" ref={setReference}>
                Reference
            </Button>
            <Tooltip {...args} reference={reference} trigger="click">
                Tooltip
            </Tooltip>
        </>;
}`,...(U=(A=f.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var H,M,z;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`(args: TooltipProps) => {
  const [reference, setReference] = React.useState<HTMLButtonElement | null>(null);
  const [isOpen, setOpen] = React.useState(false);
  return <>
            <Callout title="Manual trigger" border="bottom" style={{
      maxWidth: CALLOUT_WIDTH
    }}>
                The
                {' '}
                <code>"manual"</code>
                {' '}
                allows you to fully control how the tooltip opens and closes.
                Only use this trigger if you need to control state external to the
                tooltip, but be careful to ensure that it can be opened and closed by everyone.
            </Callout>
            <Button variant="solid" ref={setReference} onClick={() => setOpen(!isOpen)}>
                Reference
            </Button>
            <Tooltip {...args} reference={reference} trigger="manual" isOpen={isOpen}>
                Tooltip
            </Tooltip>
        </>;
}`,...(z=(M=b.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var F,N,j;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`(args: TooltipProps) => {
  const [ref, setRef] = React.useState<HTMLSpanElement | null>();
  return <>
            <p>
                <span className="glossref" role="button" tabIndex={0} ref={setRef}>Lorem ipsum</span>
                {' '}
                dolor sit amet consectetur adipisicing elit.
            </p>
            <Tooltip {...args} reference={ref} trigger="click pointerenter" showDelay={0}>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on meaningful content.
            </Tooltip>
        </>;
}`,...(j=(N=T.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const ve=["Default","Labelling","DefaultTrigger","PointerEnterTrigger","FocusTrigger","ClickTrigger","ManualTrigger","CustomReference"];export{f as ClickTrigger,T as CustomReference,d as Default,u as DefaultTrigger,g as FocusTrigger,m as Labelling,b as ManualTrigger,h as PointerEnterTrigger,ve as __namedExportsOrder,we as default};
//# sourceMappingURL=index.stories-4c633c6a.js.map
