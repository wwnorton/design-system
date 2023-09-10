import{j as e,a as s,F as O}from"./index-a1e85e29.js";import{R as n}from"./index-0cbcd92a.js";import{a as k}from"./chunk-AY7I2SME-c7b6cf8a.js";import{M as h}from"./Modal-7cd13909.js";import{B as c}from"./IconButton-488799a2.js";import{T as M}from"./TextField-bf89e361.js";import"./_commonjsHelpers-de833af9.js";import"./index-314a82e0.js";import"./toString-a79d3543.js";import"./hook-0eff1646.js";import"./BaseButton-a4b1d3e6.js";import"./Icon-04f449eb.js";import"./inheritsLoose-9eefaa95.js";import"./FieldInfo-942aaa1a.js";import"./BaseInput-0353def3.js";const y=e("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id cum reiciendis sed ab voluptas velit quibusdam expedita sapiente nemo? Modi accusamus minus distinctio error non! Provident quasi officia pariatur fugit."}),t={style:{display:"block"}},z=s(O,{children:[y,s("p",{children:[s("span",{...t,children:["Whan that Aprille with his shoures"," ",e("a",{href:"https://en.wiktionary.org/wiki/soote",children:"soote"}),","]}),e("span",{...t,children:"The droghte of March hath perced to the roote,"}),e("span",{...t,children:"And bathed every veyne in swich licóur"}),e("span",{...t,children:"Of which vertú engendred is the flour;"}),e("span",{...t,children:"Whan Zephirus eek with his swete breeth"}),e("span",{...t,children:"Inspired hath in every holt and heeth"}),e("span",{...t,children:"The tendre croppes, and the yonge sonne"}),e("span",{...t,children:"Hath in the Ram his halfe cours y-ronne,"}),e("span",{...t,children:"And smale foweles maken melodye,"}),e("span",{...t,children:"That slepen al the nyght with open ye,"}),e("span",{...t,children:"So priketh hem Natúre in hir corages,"}),e("span",{...t,children:"Thanne longen folk to goon on pilgrimages,"}),e("span",{...t,children:"And palmeres for to seken straunge strondes,"}),e("span",{...t,children:"To ferne halwes, kowthe in sondry londes;"}),e("span",{...t,children:"And specially, from every shires ende"}),e("span",{...t,children:"Of Engelond, to Caunterbury they wende,"}),e("span",{...t,children:"The hooly blisful martir for to seke,"}),e("span",{...t,children:"That hem hath holpen whan that they were seeke."})]}),s("p",{children:[e("span",{...t,children:"Bifil that in that seson on a day,"}),e("span",{...t,children:"In Southwerk at the Tabard as I lay,"}),e("span",{...t,children:"Redy to wenden on my pilgrymage"}),e("span",{...t,children:"To Caunterbury with ful devout corage,"}),e("span",{...t,children:"At nyght were come into that hostelrye"}),e("span",{...t,children:"Wel nyne and twenty in a compaignye"}),e("span",{...t,children:"Of sondry folk, by áventure y-falle"}),e("span",{...t,children:"In felaweshipe, and pilgrimes were they alle,"}),e("span",{...t,children:"That toward Caunterbury wolden ryde."}),e("span",{...t,children:"The chambres and the stables weren wyde,"}),e("span",{...t,children:"And wel we weren esed atte beste."}),e("span",{...t,children:"And shortly, whan the sonne was to reste,"}),e("span",{...t,children:"So hadde I spoken with hem everychon,"}),e("span",{...t,children:"That I was of hir felaweshipe anon,"}),e("span",{...t,children:"And made forward erly for to ryse,"}),e("span",{...t,children:"To take oure wey, ther as I yow devyse."})]}),s("p",{children:[e("span",{...t,children:"But nathelees, whil I have tyme and space,"}),e("span",{...t,children:"Er that I ferther in this tale pace,"}),e("span",{...t,children:"Me thynketh it acordaunt to resoun"}),e("span",{...t,children:"To telle yow al the condicioun"}),e("span",{...t,children:"Of ech of hem, so as it semed me,"}),e("span",{...t,children:"And whiche they weren and of what degree,"}),e("span",{...t,children:"And eek in what array that they were inne;"}),e("span",{...t,children:"And at a Knyght than wol I first bigynne."})]})]}),ce={title:"Modal",component:h,argTypes:{isOpen:{control:{type:"boolean"}},hideTitle:{control:{type:"boolean"}},hideCloseButton:{control:{type:"boolean"}}}},g=({isOpen:a,...p})=>{const[u,d]=n.useState(a);return n.useEffect(()=>d(a),[a]),e(h,{...p,isOpen:u,onRequestClose:()=>d(!1)})},r=g.bind({});r.args={isOpen:!0,title:"Default modal dialog",children:y};const o=g.bind({});o.args={isOpen:!0,title:"Modal dialog with long content",children:z};const i=g.bind({});i.args={isOpen:!0,title:"Modal dialog with an action bar",actions:s(O,{children:[e(c,{variant:"outline",children:"Not okay"}),e(c,{variant:"solid",children:"Okay"})]}),children:y};const l=a=>{const[p,u]=n.useState(null),[d,D]=n.useState(null),[W,R]=n.useState(!1),[w,$]=n.useState(""),[v,j]=n.useState(""),[b,T]=n.useState(!1),_=()=>R(!0),K=()=>{R(!1),k("onRequestClose")()},Y=m=>{T(!0),m.preventDefault()},Z=({nativeEvent:m})=>{const f=m.target;switch(f){case d:$(f.value);break;case p:j(f.value);break}},C=()=>T(!1);return s(O,{children:[e(c,{variant:"solid",onClick:_,children:"Open"}),e(h,{focusOnOpen:p||void 0,isOpen:W,onOpen:k("onOpen"),onRequestClose:K,closeOnEscape:!b,...a,children:s("form",{onSubmit:Y,onChange:Z,children:[e(M,{required:!0,value:v,ref:u,children:"First Name"}),e(M,{required:!0,value:w,ref:D,children:"Last Name"}),e(c,{variant:"solid",type:"submit",children:"Submit"})]})}),e(h,{title:"Result",hideTitle:!0,isOpen:b,onRequestClose:C,actions:e(c,{variant:"solid",onClick:C,children:"I'm sure"}),children:`Are you sure, ${v} ${w}?`})]})};l.args={title:"Your name"};var N,S,F;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`({
  isOpen: isOpenProp,
  ...args
}: ModalProps) => {
  const [isOpen, setOpen] = React.useState(isOpenProp);
  React.useEffect(() => setOpen(isOpenProp), [isOpenProp]);
  return <Modal {...args} isOpen={isOpen} onRequestClose={() => setOpen(false)} />;
}`,...(F=(S=r.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var E,q,A;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`({
  isOpen: isOpenProp,
  ...args
}: ModalProps) => {
  const [isOpen, setOpen] = React.useState(isOpenProp);
  React.useEffect(() => setOpen(isOpenProp), [isOpenProp]);
  return <Modal {...args} isOpen={isOpen} onRequestClose={() => setOpen(false)} />;
}`,...(A=(q=o.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var I,L,P;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`({
  isOpen: isOpenProp,
  ...args
}: ModalProps) => {
  const [isOpen, setOpen] = React.useState(isOpenProp);
  React.useEffect(() => setOpen(isOpenProp), [isOpenProp]);
  return <Modal {...args} isOpen={isOpen} onRequestClose={() => setOpen(false)} />;
}`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var x,B,H;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`(args: ModalProps) => {
  const [firstNameRef, setFirstNameRef] = React.useState<HTMLInputElement | null>(null);
  const [lastNameRef, setLastNameRef] = React.useState<HTMLInputElement | null>(null);
  const [isOpen, setOpen] = React.useState(false);
  const [lastName, setFirst] = React.useState('');
  const [firstName, setLast] = React.useState('');
  const [resultOpen, setResultOpen] = React.useState(false);
  const open = (): void => setOpen(true);
  const close = (): void => {
    setOpen(false);
    action('onRequestClose')();
  };
  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    setResultOpen(true);
    e.preventDefault();
  };
  const handleChange = ({
    nativeEvent
  }: React.FormEvent<HTMLFormElement>): void => {
    const target = (nativeEvent.target as HTMLInputElement);
    switch (target) {
      case lastNameRef:
        setFirst(target.value);
        break;
      case firstNameRef:
        setLast(target.value);
        break;
      default:
    }
  };
  const closeResult = (): void => setResultOpen(false);
  return <>
            <Button variant="solid" onClick={open}>Open</Button>
            <Modal focusOnOpen={firstNameRef || undefined} isOpen={isOpen} onOpen={action('onOpen')} onRequestClose={close} closeOnEscape={!resultOpen} {...args}>
                <form onSubmit={submit} onChange={handleChange}>
                    <TextField required value={firstName} ref={setFirstNameRef}>First Name</TextField>
                    <TextField required value={lastName} ref={setLastNameRef}>Last Name</TextField>
                    <Button variant="solid" type="submit">Submit</Button>
                </form>
            </Modal>
            <Modal title="Result" hideTitle isOpen={resultOpen} onRequestClose={closeResult} actions={<Button variant="solid" onClick={closeResult}>I&apos;m sure</Button>}>
                {\`Are you sure, \${firstName} \${lastName}?\`}
            </Modal>
        </>;
}`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const pe=["Default","LongContent","WithActionBar","ComplexModal"];export{l as ComplexModal,r as Default,o as LongContent,i as WithActionBar,pe as __namedExportsOrder,ce as default};
//# sourceMappingURL=index.stories-f0a6dbbe.js.map
