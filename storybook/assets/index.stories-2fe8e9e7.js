import{j as r}from"./index-a1e85e29.js";import{R as l}from"./index-0cbcd92a.js";import{a as g}from"./chunk-AY7I2SME-c7b6cf8a.js";import{S as n}from"./Switch-4571d1c4.js";import{I as v}from"./Icon-04f449eb.js";import{S as L}from"./Spinner-fbdc24c2.js";import"./_commonjsHelpers-de833af9.js";import"./IconButton-5d21255e.js";import"./hook-0eff1646.js";import"./BaseButton-a4b1d3e6.js";import"./index-314a82e0.js";import"./FieldInfo-942aaa1a.js";import"./inheritsLoose-9eefaa95.js";import"./BaseProgressSpinner-bfdd54c0.js";const J={title:"Switch",component:n},D=o=>r(n,{...o}),t=D.bind({});t.args={checked:void 0,label:"Default switch",description:"Toggle on or off",onToggle:g("onToggle"),displayDefault:!0};const c=({checked:o,onClick:b,...a})=>{const[e,i]=l.useState(o);return r(n,{checked:e,onClick:()=>i(!e),...a,children:r(v,{variant:e?"check":"close"})})};c.args={label:"Switch with custom content",description:"Toggle on or off",onToggle:g("onToggle"),displayDefault:!0};const s=({checked:o,onClick:b,...a})=>{const[e,i]=l.useState(o),[d,h]=l.useState(!1),y=()=>{i(!e),h(!1)},P=()=>{d||(h(!0),window.setTimeout(y,1e3))};return r(n,{checked:e,onToggle:g("onToggle"),onClick:P,disabled:d,...a,children:d&&r(L,{size:"1.25em",label:"Thinking...",hideLabel:!0})})};s.args={label:"Asynchronous action",description:"Toggle something on and off with a delay"};var m,p,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"(args: SwitchProps) => <Switch {...args} />",...(k=(p=t.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var u,S,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`({
  checked: checkedProp,
  onClick,
  ...args
}: SwitchProps) => {
  const [checked, setChecked] = React.useState(checkedProp);
  return <Switch checked={checked} onClick={(): void => setChecked(!checked)} {...args}>
            <Icon variant={checked ? 'check' : 'close'} />
        </Switch>;
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var w,T,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`({
  checked: checkedProp,
  onClick,
  ...args
}: SwitchProps) => {
  const [checked, setChecked] = React.useState(checkedProp);
  const [loading, setLoading] = React.useState(false);
  const toggle = (): void => {
    setChecked(!checked);
    setLoading(false);
  };

  // do something async
  const delayedToggle = (): void => {
    if (!loading) {
      setLoading(true);
      window.setTimeout(toggle, 1000);
    }
  };
  return <Switch checked={checked} onToggle={action('onToggle')} onClick={delayedToggle} disabled={loading} {...args}>
            {loading && <Spinner size="1.25em" label="Thinking..." hideLabel />}
        </Switch>;
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const K=["Default","CustomContent","Asynchronous"];export{s as Asynchronous,c as CustomContent,t as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=index.stories-2fe8e9e7.js.map
