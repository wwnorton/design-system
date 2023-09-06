import{j as n}from"./index-a1e85e29.js";import{S as d,a as l}from"./Step-05e9b3f5.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-04f449eb.js";import"./hook-0eff1646.js";import"./index-314a82e0.js";import"./inheritsLoose-9eefaa95.js";const m="Story Controls",b={stepCount:4,currentStep:3,completedSteps:2},L={title:"StepIndicator",component:d,decorators:[r=>n("div",{style:{maxWidth:"30rem"},children:n(r,{})})],args:b,argTypes:{stepCount:{table:{category:m},description:"Controls the total number of steps",control:{type:"range",min:1,max:10,step:1}},currentStep:{table:{category:m},description:"Controls the position of the current step",control:{type:"range",min:1,max:10,step:1}},completedSteps:{table:{category:m},description:"Controls the number of completed steps",control:{type:"range",min:0,max:10,step:1}},isConnected:{control:"boolean"}},layout:"padded"},w=({stepCount:r,currentStep:s,completedSteps:o,...p})=>{const t=[];for(let e=1;e<=r;e+=1)t.push(n(l,{isCurrent:s===e,isCompleted:e<=o,children:`Step ${e}`}));return n(d,{...p,children:t})},i=w.bind({});i.args={isConnected:!0};const c=({stepCount:r,currentStep:s,completedSteps:o,...p})=>{const t=[];for(let e=1;e<=r;e+=1)t.push(n(l,{isCurrent:s===e,isCompleted:e<=o,children:`Step ${e} with very long name`}));return n(d,{...p,children:t})};c.args={isConnected:!0};const a=({stepCount:r,currentStep:s,completedSteps:o,...p})=>{const t=[];for(let e=1;e<=r;e+=1)t.push(n(l,{isCurrent:s===e,isCompleted:e<=o,children:e}));return n(d,{...p,style:{"--nds-stepindicator-max-step-width":"0"},children:t})};a.args={isConnected:!1,stepCount:10};var u,S,C;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`({
  stepCount,
  currentStep,
  completedSteps,
  ...args
}) => {
  const steps: JSX.Element[] = [];
  for (let i = 1; i <= stepCount; i += 1) {
    steps.push(<Step isCurrent={currentStep === i} isCompleted={i <= completedSteps}>
                {\`Step \${i}\`}
            </Step>);
  }
  return <StepIndicator {...args}>
            {steps}
        </StepIndicator>;
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var g,h,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`({
  stepCount,
  currentStep,
  completedSteps,
  ...args
}) => {
  const steps: JSX.Element[] = [];
  for (let i = 1; i <= stepCount; i += 1) {
    steps.push(<Step isCurrent={currentStep === i} isCompleted={i <= completedSteps}>
                {\`Step \${i} with very long name\`}
            </Step>);
  }
  return <StepIndicator {...args}>
            {steps}
        </StepIndicator>;
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,x,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`({
  stepCount,
  currentStep,
  completedSteps,
  ...args
}) => {
  const steps: JSX.Element[] = [];
  for (let i = 1; i <= stepCount; i += 1) {
    steps.push(<Step isCurrent={currentStep === i} isCompleted={i <= completedSteps}>
                {i}
            </Step>);
  }
  return <StepIndicator {...args} style={({
    '--nds-stepindicator-max-step-width': '0'
  } as React.CSSProperties)}>
            {steps}
        </StepIndicator>;
}`,...(I=(x=a.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const P=["Connected","LongNames","NoConnector"];export{i as Connected,c as LongNames,a as NoConnector,P as __namedExportsOrder,L as default};
//# sourceMappingURL=index.stories-1340722d.js.map
