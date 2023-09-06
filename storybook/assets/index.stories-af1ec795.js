import{a as y,j as e}from"./index-a1e85e29.js";import{R as L}from"./index-0cbcd92a.js";import{L as p,O as r}from"./Dropdown-9a2b966c.js";import"./Badge-521352a6.js";import"./IconButton-5d21255e.js";import"./Callout-4f03eb36.js";import"./Checkbox-3ab1b5db.js";import"./ChoiceField-8cd78b39.js";import"./Disclosure-f71d8e4c.js";import"./FieldInfo-942aaa1a.js";import{I as u}from"./Icon-04f449eb.js";import"./Link-a9242a41.js";import"./Modal-279d1dd7.js";import"./Popover-02b4697c.js";import"./ProgressBar-5a4d04a6.js";import"./Radio-f364a3b8.js";import"./Spinner-fbdc24c2.js";import"./Step-05e9b3f5.js";import"./Switch-4571d1c4.js";import"./Tag-d9ffcfa9.js";import"./TextField-a0e92e87.js";import{u as P}from"./hook-0eff1646.js";import"./_commonjsHelpers-de833af9.js";import"./BaseButton-a4b1d3e6.js";import"./index-314a82e0.js";import"./BaseInput-9efc6de2.js";import"./inheritsLoose-9eefaa95.js";import"./toString-a79d3543.js";import"./BaseProgressSpinner-bfdd54c0.js";const c={Dog:"dog",Cat:"cat",Hamster:"hamster",Parrot:"parrot",Spider:"spider",Fish:"fish"},D=Object.values(c),re={title:"Listbox",component:p,argTypes:{disabled:{control:{type:"inline-check",options:Object.values(c)}},multiselectable:{control:{type:"boolean"}}}},a=t=>y(p,{...t,children:[e(r,{value:"dog",children:"🐶 Dog"}),e(r,{value:"cat",children:"🐱 Cat"}),e(r,{value:"hamster",children:"🐹 Hamster"}),e(r,{value:"parrot",label:"🦜 Parrot"}),e(r,{value:"spider",label:"🕷️ Spider",children:"🕷️"}),e(r,{value:"🐠 Fish"})]});a.args={"aria-label":"Pets (Default story)",multiselectable:!1,focusWrap:!1};const i=({disabled:t,multiselectable:n,...s})=>{const{selected:d,toggle:m}=P(n);return e(p,{multiselectable:n,selected:d,onChange:({value:o})=>m(o),options:c,optionProps:o=>({disabled:t.includes(D[o])}),...s})};i.args={"aria-label":"Pets (Disabled options story)",disabled:["dog","cat","spider"],multiselectable:!1};const S=({checked:t})=>t?e(u,{icon:{d:"M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"},style:{color:"var(--nds-primary-color)"}}):e(u,{icon:{d:"M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"},style:{color:"var(--nds-subdued-color)"}}),l=({multiselectable:t,...n})=>{const{selected:s,toggle:d}=P(t),m=L.useCallback(o=>({marker:e("span",{className:"nds-option__marker",children:e(S,{checked:s.includes(D[o])})})}),[s]);return e(p,{multiselectable:t,selected:s,onChange:({value:o})=>d(o),options:c,optionProps:m,...n})};l.args={"aria-label":"Pets (Custom marker story)",multiselectable:!1};var b,g,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`(args: ListboxProps) => <Listbox {...args}>
        <Option value="dog">🐶 Dog</Option>
        <Option value="cat">🐱 Cat</Option>
        <Option value="hamster">🐹 Hamster</Option>
        {/* label is rendered when children aren't provided. */}
        <Option value="parrot" label="🦜 Parrot" />
        {/* label is preferred over children if both are provided. */}
        <Option value="spider" label="🕷️ Spider">🕷️</Option>
        {/* if neither label nor children are provided, the value is rendered. */}
        <Option value="🐠 Fish" />
    </Listbox>`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,f,O;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`({
  disabled,
  multiselectable,
  ...args
}: WithDisabledOptions) => {
  const {
    selected,
    toggle
  } = useSelect(multiselectable);
  return <Listbox multiselectable={multiselectable} selected={selected} onChange={({
    value
  }) => toggle(value)} options={defaultOptions} optionProps={i => ({
    disabled: disabled.includes(optionValues[i])
  })} {...args} />;
}`,...(O=(f=i.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var k,x,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`({
  multiselectable,
  ...args
}: ListboxProps) => {
  const {
    selected,
    toggle
  } = useSelect(multiselectable);
  const optionRender = React.useCallback(i => ({
    marker: <span className="nds-option__marker">
                <Marker checked={selected.includes(optionValues[i])} />
            </span>
  }), [selected]);
  return <Listbox multiselectable={multiselectable} selected={selected} onChange={({
    value
  }) => toggle(value)} options={defaultOptions} optionProps={optionRender} {...args} />;
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const se=["Default","DisabledOptions","CustomMarker"];export{l as CustomMarker,a as Default,i as DisabledOptions,se as __namedExportsOrder,re as default};
//# sourceMappingURL=index.stories-af1ec795.js.map
