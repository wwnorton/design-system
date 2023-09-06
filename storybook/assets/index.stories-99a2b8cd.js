import{j as s,a as u,F as O}from"./index-a1e85e29.js";import{R as a}from"./index-0cbcd92a.js";import{D as c}from"./Disclosure-f71d8e4c.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-04f449eb.js";import"./hook-0eff1646.js";import"./index-314a82e0.js";import"./inheritsLoose-9eefaa95.js";const k={title:"Disclosure",component:c,argTypes:{panel:{control:{type:"boolean"}},isOpen:{control:{type:"boolean"}}}},q=["Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae","velit, quibusdam culpa, consequuntur quos voluptate esse explicabo ipsa","perspiciatis illo molestias dolorem atque praesentium modi saepe hic","suscipit, deserunt debitis."].toString(),v={panel:!1,isOpen:!1,summary:"More information"},D=r=>s(c,{...r,children:s("p",{children:q})}),e=D.bind({});e.args=v;const t=D.bind({});t.args={...v,panel:!0};const n=r=>{const o=a.useRef("Random poem"),[R,i]=a.useState(),[x,m]=a.useState(o.current);return s(c,{...r,panel:!0,summary:x,onOpenStart:async()=>{m(`${o.current} (retrieving...)`);const[{content:w,poet:b,title:T}]=await fetch("https://www.poemist.com/api/v1/randompoems").then(j=>j.json());i(u(O,{children:[s("h2",{children:T}),s("pre",{children:w}),u("div",{children:["—"," ",b.name]})]})),m(o.current)},onCloseEnd:()=>i(void 0),children:R})};var p,l,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => <Disclosure {...args}>
        <p>{defaultContents}</p>
    </Disclosure>`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,y,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => <Disclosure {...args}>
        <p>{defaultContents}</p>
    </Disclosure>`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,C,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const summaryText = React.useRef('Random poem');
  const [contents, setContents] = React.useState<React.ReactNode>();
  const [summary, setSummary] = React.useState<string>(summaryText.current);

  // load a random poem
  const getContents = async (): Promise<void> => {
    setSummary(\`\${summaryText.current} (retrieving...)\`);
    const [{
      content,
      poet,
      title
    }] = await fetch('https://www.poemist.com/api/v1/randompoems').then(r => r.json());
    setContents(<>
                <h2>{title}</h2>
                <pre>{content}</pre>
                <div>
                    &mdash;
                    {' '}
                    {poet.name}
                </div>
            </>);
    setSummary(summaryText.current);
  };
  return <Disclosure {...args} panel summary={summary} onOpenStart={getContents} onCloseEnd={(): void => setContents(undefined)}>
            {contents}
        </Disclosure>;
}`,...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const z=["Default","Panel","Controlled"];export{n as Controlled,e as Default,t as Panel,z as __namedExportsOrder,k as default};
//# sourceMappingURL=index.stories-99a2b8cd.js.map
