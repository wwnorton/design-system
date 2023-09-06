import{j as s,a as we}from"./index-a1e85e29.js";import{R as e}from"./index-0cbcd92a.js";import{T as x}from"./TextField-a0e92e87.js";import{B as F}from"./IconButton-5d21255e.js";import{I as W}from"./Icon-04f449eb.js";import"./_commonjsHelpers-de833af9.js";import"./FieldInfo-942aaa1a.js";import"./BaseInput-9efc6de2.js";import"./hook-0eff1646.js";import"./BaseButton-a4b1d3e6.js";import"./index-314a82e0.js";import"./inheritsLoose-9eefaa95.js";const Ue={title:"Text Field",component:x,argTypes:{maxLength:{control:{type:"range",min:5,step:1}},maxLengthRestrictsInput:{control:{type:"boolean"}},counterStart:{control:{type:"range",min:5,step:1}},validateOnChange:{control:{type:"boolean"}}}},n=o=>s(x,{...o}),d=n.bind({});d.args={children:"Default Text Field",description:'The default Text Field has a type of "text".'};const u=n.bind({});u.args={children:"Email",description:"Email fields show an error if the value is not an email address.",type:"email",validateOnChange:!0};const m=n.bind({});m.args={children:"Number",description:"Email fields can be incremented with arrow keys and show an error if the value is not a number.",type:"number",validateOnChange:!0};const p=n.bind({});p.args={children:"Password",description:"Password fields obscure their value.",type:"password",validateOnChange:!0};const h=n.bind({});h.args={maxLengthRestrictsInput:!1,maxLength:10,counterStart:8,validateOnChange:!0,children:"TextField with max length",description:"Control the maximum length and optionally prevent input after that number of characters."};const g=n.bind({});g.args={addonBefore:s(F,{variant:"ghost",children:"Do something"}),children:"Text field with a button addon before the input"};const f=n.bind({});f.args={addonAfter:s(F,{variant:"outline",children:"Do something else"}),children:"Text field with a button addon after the input"};const M={children:"Show",icon:{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}},ve={children:"Hide",icon:{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}},xe={variant:"close",color:"var(--nds-error-color)","aria-label":"Invalid"},be={variant:"check",color:"var(--nds-success-color)","aria-label":"Valid"},Ee={variant:"account"},H={variant:"info"},w=({minLength:o,maxLength:c,...b})=>{const[r,T]=e.useState("password"),[i,P]=e.useState(null),[y,C]=e.useState(null),[t,ie]=e.useState(""),[E,ce]=e.useState(""),[le,de]=e.useState(M),[ue,me]=e.useState(),[S,pe]=e.useState(),[R,he]=e.useState(!1),[ge,L]=e.useState(H),fe=()=>{T(r==="password"?"text":"password")},I=e.useCallback(a=>{const l="Username and password cannot be the same.";return R?a?[...a,l]:[l]:a||[]},[R]);return e.useEffect(()=>{(t||E)&&he(t===E)},[t,E]),e.useEffect(()=>{L(S?S.length?xe:be:H)},[S]),e.useEffect(()=>{de(r==="password"?M:ve)},[r]),we("form",{className:"form",onSubmit:a=>{a.preventDefault()},onChange:a=>{const{value:l}=a.target;switch(a.target){case i:ie(l);break;case y:ce(l);break}},children:[s(x,{type:"text",value:t,errors:I(ue),onValidate:me,validateOnChange:!0,required:!0,addonBefore:s(W,{...Ee}),ref:P,...b,children:"Username"}),s(x,{type:r,value:E,errors:I(S),required:!0,minLength:o,maxLength:c,onValidate:pe,validateOnChange:!0,addonBefore:s(W,{className:"addon-icon",...ge}),addonAfter:s(F,{iconOnly:!0,variant:"ghost",onClick:fe,...le}),ref:C,...b,children:"Password"}),s(F,{variant:"solid",type:"submit",children:"Submit"})]})};w.args={minLength:8,maxLength:32};const v=({firstName:o,lastName:c,...b})=>{const[r,T]=e.useState(""),[i,P]=e.useState(),y=t=>T(t.target.value),C=e.useMemo(()=>{if(i&&!i.length)return`Well done, ${r}!`},[i,r]);return e.useEffect(()=>{if(r){const t=[];r.startsWith(o)||t.push(`Must begin with "${o}".`),r.endsWith(c)||t.push(`Must end with "${c}".`),P(t)}},[r,o,c]),s(x,{value:r,errors:i,onChange:y,description:"Change the required name in the Storybook controls below.",feedback:C,required:!0,...b,children:"Full name"})};v.args={firstName:"Jane",lastName:"Doe"};var k,B,U;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:"(args: TextFieldProps) => <TextField {...args} />",...(U=(B=d.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var N,O,V;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:"(args: TextFieldProps) => <TextField {...args} />",...(V=(O=u.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var A,q,D;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:"(args: TextFieldProps) => <TextField {...args} />",...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var z,$,j;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:"(args: TextFieldProps) => <TextField {...args} />",...(j=($=p.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var _,J,G;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:"(args: TextFieldProps) => <TextField {...args} />",...(G=(J=h.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:"(args: TextFieldProps) => <TextField {...args} />",...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:"(args: TextFieldProps) => <TextField {...args} />",...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,se;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`({
  minLength,
  maxLength,
  ...args
}: TextFieldProps) => {
  const [type, setType] = React.useState<TextFieldProps['type']>('password');
  const [userField, setUserField] = React.useState<HTMLInputElement | null>(null);
  const [pwField, setPwField] = React.useState<HTMLInputElement | null>(null);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [buttonProps, setButtonProps] = React.useState<ButtonProps>(show);
  const [userErrors, setUserErrors] = React.useState<string[]>();
  const [pwErrors, setPwErrors] = React.useState<string[]>();
  const [isSame, setIsSame] = React.useState(false);
  const [pwIcon, setPWIcon] = React.useState<IconProps>(neutralPW);
  const toggle = (): void => {
    setType(type === 'password' ? 'text' : 'password');
  };
  const errors = React.useCallback((errs?: string[]) => {
    const sameError = 'Username and password cannot be the same.';
    if (isSame) return errs ? [...errs, sameError] : [sameError];
    return errs || [];
  }, [isSame]);
  React.useEffect(() => {
    if (username || password) {
      setIsSame(username === password);
    }
  }, [username, password]);
  React.useEffect(() => {
    if (pwErrors) {
      setPWIcon(pwErrors.length ? invalid : valid);
    } else {
      setPWIcon(neutralPW);
    }
  }, [pwErrors]);
  React.useEffect(() => {
    setButtonProps(type === 'password' ? show : hide);
  }, [type]);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  const changeHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    const {
      value: val
    } = (e.target as HTMLInputElement);
    switch (e.target) {
      case userField:
        setUsername(val);
        break;
      case pwField:
        setPassword(val);
        break;
      default:
    }
  };
  return <form className="form" onSubmit={submitHandler} onChange={changeHandler}>
            <TextField type="text" value={username} errors={errors(userErrors)} onValidate={setUserErrors} validateOnChange required addonBefore={<Icon {...neutralUser} />} ref={setUserField} {...args}>
                Username
            </TextField>
            <TextField type={type} value={password} errors={errors(pwErrors)} required minLength={minLength} maxLength={maxLength} onValidate={setPwErrors} validateOnChange addonBefore={<Icon className="addon-icon" {...pwIcon} />} addonAfter={<Button iconOnly variant="ghost" onClick={toggle} {...buttonProps} />} ref={setPwField} {...args}>
                Password
            </TextField>
            <Button variant="solid" type="submit">Submit</Button>
        </form>;
}`,...(se=(te=w.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,oe,ne;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`({
  firstName,
  lastName,
  ...args
}: CustomValidationProps) => {
  const [value, setValue] = React.useState('');
  const [errors, setErrors] = React.useState<string[]>();
  const changeHandler = (e): void => setValue(e.target.value);
  const feedback = React.useMemo(() => {
    if (errors && !errors.length) {
      return \`Well done, \${value}!\`;
    }
    return undefined;
  }, [errors, value]);
  React.useEffect(() => {
    if (value) {
      const newErrors: string[] = [];
      if (!value.startsWith(firstName)) newErrors.push(\`Must begin with "\${firstName}".\`);
      if (!value.endsWith(lastName)) newErrors.push(\`Must end with "\${lastName}".\`);
      setErrors(newErrors);
    }
  }, [value, firstName, lastName]);
  return <TextField value={value} errors={errors} onChange={changeHandler} description="Change the required name in the Storybook controls below." feedback={feedback} required {...args}>
            Full name
        </TextField>;
}`,...(ne=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const Ne=["Default","Email","Number","Password","WithMaxLength","WithAddonBefore","WithAddonAfter","ExampleLoginForm","CustomValidation"];export{v as CustomValidation,d as Default,u as Email,w as ExampleLoginForm,m as Number,p as Password,f as WithAddonAfter,g as WithAddonBefore,h as WithMaxLength,Ne as __namedExportsOrder,Ue as default};
//# sourceMappingURL=index.stories-c8b583a9.js.map
