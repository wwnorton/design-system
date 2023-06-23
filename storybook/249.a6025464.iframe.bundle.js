"use strict";(self.webpackChunkwwnds=self.webpackChunkwwnds||[]).push([[249],{"./packages/react/src/components/Dropdown/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return Dropdown}});__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.array.sort.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Field=__webpack_require__("./packages/react/src/components/Field/index.ts"),environment=__webpack_require__("./packages/react/src/utilities/environment.ts"),utilities=__webpack_require__("./packages/react/src/utilities/index.ts"),Popper=__webpack_require__("./packages/react/src/components/Popper/index.ts"),Button=__webpack_require__("./packages/react/src/components/Button/index.ts"),Listbox=__webpack_require__("./packages/react/src/components/Listbox/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Dropdown=function Dropdown(_ref){var label=_ref.label,description=_ref.description,_ref$selected=_ref.selected,selectedProp=void 0===_ref$selected?"":_ref$selected,_ref$buttonContents=_ref.buttonContents,contentsProp=void 0===_ref$buttonContents?"Select":_ref$buttonContents,_ref$autofocus=_ref.autofocus,autofocus=void 0===_ref$autofocus||_ref$autofocus,_ref$isOpen=_ref.isOpen,isOpenProp=void 0!==_ref$isOpen&&_ref$isOpen,matchWidth=_ref.matchWidth,buttonWidth=_ref.buttonWidth,sort=_ref.sort,_ref$baseName=_ref.baseName,baseName=void 0===_ref$baseName?"nds-dropdown":_ref$baseName,_ref$buttonClass=_ref.buttonClass,buttonClass=void 0===_ref$buttonClass?baseName+"__button":_ref$buttonClass,_ref$popperClass=_ref.popperClass,popperClass=void 0===_ref$popperClass?baseName+"__popper":_ref$popperClass,_ref$listboxClass=_ref.listboxClass,listboxClass=void 0===_ref$listboxClass?baseName+"__listbox":_ref$listboxClass,idProp=_ref.id,className=_ref.className,labelClass=_ref.labelClass,descriptionClass=_ref.descriptionClass,_ref$closeOnExternalC=_ref.closeOnExternalClick,closeOnExternalClick=void 0===_ref$closeOnExternalC||_ref$closeOnExternalC,_ref$closeOnDocumentE=_ref.closeOnDocumentEscape,closeOnDocumentEscape=void 0===_ref$closeOnDocumentE||_ref$closeOnDocumentE,onRequestClose=_ref.onRequestClose,onRequestOpen=_ref.onRequestOpen,onChange=_ref.onChange,onFirstUpdate=_ref.onFirstUpdate,labelIdProp=_ref.labelId,descIdProp=_ref.descriptionId,buttonIdProp=_ref.buttonId,listboxIdProp=_ref.listboxId,_ref$selectedMarker=_ref.selectedMarker,selectedMarker=void 0===_ref$selectedMarker?"check":_ref$selectedMarker,disabled=_ref.disabled,children=_ref.children,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"bottom-start":_ref$placement,_ref$strategy=_ref.strategy,strategy=void 0===_ref$strategy?"fixed":_ref$strategy,_ref$transition=_ref.transition,transitionProp=void 0===_ref$transition?"fade":_ref$transition,_ref$distance=_ref.distance,distance=void 0===_ref$distance?4:_ref$distance,modifiers=_ref.modifiers,sorter=react.useMemo((function(){return sort?function(a,b){var valueA=String(a.value).toUpperCase(),valueB=String(b.value).toUpperCase(),mod="descending"===sort?-1:1;return valueA<valueB?-1*mod:valueA>valueB?1*mod:0}:null}),[sort]),options=react.useMemo((function(){var opts=react.Children.map(children,(function(child){var props;if(react.isValidElement(child)){var value="";"number"==typeof child.props.value||void 0!==child.props.value?value=child.props.value:child.props.children&&(value=child.props.children.toString()),props=Object.assign({},child.props,{value:value})}else props={value:child.toString(),children:child};return props}));return sorter?opts.sort(sorter):opts}),[children,sorter]),findFocusedIndex=(0,react.useCallback)((function(value){var idx=options.findIndex((function(o){return o.value===value}));return-1===idx?0:idx}),[options]),_React$useState2=_slicedToArray(react.useState(isOpenProp),2),isOpen=_React$useState2[0],setOpen=_React$useState2[1],uniqueId=(0,utilities.useId)(),id=idProp||uniqueId,labelId=labelIdProp||id+"-label",descId=descIdProp||id+"-desc",buttonId=buttonIdProp||id+"-btn",_React$useState4=_slicedToArray(react.useState(null),2),button=_React$useState4[0],setButton=_React$useState4[1],_React$useState6=_slicedToArray(react.useState(null),2),listbox=_React$useState6[0],setListbox=_React$useState6[1],_React$useState8=_slicedToArray(react.useState(),2),listboxWidth=_React$useState8[0],setListBoxWidth=_React$useState8[1],_React$useState10=_slicedToArray(react.useState(contentsProp),2),buttonContents=_React$useState10[0],setButtonContents=_React$useState10[1],_React$useState12=_slicedToArray(react.useState(!1),2),shouldReturnFocus=_React$useState12[0],setShouldReturnFocus=_React$useState12[1],_React$useState14=_slicedToArray(react.useState(transitionProp),2),transition=_React$useState14[0],setTransition=_React$useState14[1],_React$useState16=_slicedToArray(react.useState(findFocusedIndex(selectedProp)),2),optionFocusIndex=_React$useState16[0],setOptionFocusIndex=_React$useState16[1],_useSelect=(0,utilities.useSelect)(!1,[selectedProp]),selected=_useSelect.selected,select=_useSelect.select,listboxId=listboxIdProp||id+"-listbox",currentId=id+"-curr",getListboxWidth=react.useRef(!1),openListbox=react.useCallback((function(){onRequestOpen?onRequestOpen():setOpen(!0)}),[onRequestOpen]),closeListbox=react.useCallback((function(){onRequestClose?onRequestClose():setOpen(!1)}),[onRequestClose]);react.useEffect((function(){selectedProp!==selected[0]&&(select(selectedProp),setButtonContents(contentsProp),setOptionFocusIndex(findFocusedIndex(selectedProp)))}),[selectedProp]);var documentClickHandler=react.useCallback((function(e){var path=e.composedPath(),buttonClicked=button&&path.includes(button),listboxClicked=listbox&&path.includes(listbox);!closeOnExternalClick||buttonClicked||listboxClicked||(setShouldReturnFocus(!1),closeListbox())}),[button,listbox,closeOnExternalClick,closeListbox]),documentKeydownHandler=react.useCallback((function(e){isOpen&&(closeOnDocumentEscape&&"Escape"===e.key&&(setShouldReturnFocus(!0),closeListbox()),"Tab"===e.key&&(setShouldReturnFocus(!1),closeListbox()))}),[isOpen,closeListbox,closeOnDocumentEscape]);return react.useEffect((function(){disabled&&(setShouldReturnFocus(!0),closeListbox())}),[disabled,closeListbox]),react.useEffect((function(){setOpen(isOpenProp)}),[isOpenProp]),react.useEffect((function(){!isOpen&&shouldReturnFocus&&null!==button&&(environment.N&&"requestAnimationFrame"in window&&window.requestAnimationFrame((function(){return button.focus()})),setShouldReturnFocus(!1))}),[button,isOpen,shouldReturnFocus]),react.useEffect((function(){"listbox"===matchWidth&&void 0===listboxWidth&&(getListboxWidth.current=!0,setTransition(void 0),setOpen(!0),environment.N&&"requestAnimationFrame"in window&&window.requestAnimationFrame((function(){setTransition(transitionProp)})))}),[listboxWidth,matchWidth,transitionProp]),(0,utilities.useLayoutEffect)((function(){listbox&&setListBoxWidth(listbox.offsetWidth)}),[listbox]),(0,utilities.useLayoutEffect)((function(){"number"==typeof listboxWidth&&getListboxWidth.current&&(setOpen(isOpenProp),getListboxWidth.current=!1)}),[listboxWidth,isOpenProp]),(0,utilities.useLayoutEffect)((function(){return document.addEventListener("keydown",documentKeydownHandler),document.addEventListener("click",documentClickHandler),function(){document.removeEventListener("keydown",documentKeydownHandler),document.removeEventListener("click",documentClickHandler)}}),[documentKeydownHandler,documentClickHandler]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()(baseName,className),id:idProp,children:[(0,jsx_runtime.jsx)(Field.FieldInfo,{label:label,labelClass:labelClass,labelId:labelId,description:description,descriptionClass:descriptionClass,descriptionId:descId}),(0,jsx_runtime.jsx)(Button.z,{id:buttonId,className:buttonClass,disabled:disabled,variant:"outline",style:{width:"listbox"===matchWidth?listboxWidth:buttonWidth},"aria-expanded":isOpen?"true":void 0,"aria-labelledby":labelId+" "+currentId,"aria-haspopup":"listbox","aria-controls":isOpen?listboxId:void 0,onClick:function buttonClickHandler(){isOpen?closeListbox():openListbox()},onKeyDown:function buttonKeydownHandler(e){["ArrowDown","ArrowUp"].includes(e.key)&&(e.preventDefault(),openListbox())},ref:setButton,icon:getListboxWidth.current?void 0:"chevron-down",iconRight:!0,children:(0,jsx_runtime.jsx)("span",{id:currentId,children:buttonContents})}),(0,jsx_runtime.jsx)(Popper.r,{placement:placement,className:popperClass,reference:button,isOpen:isOpen,modifiers:modifiers,strategy:strategy,distance:distance,transition:transition,onFirstUpdate:onFirstUpdate,matchWidth:"button"===matchWidth,children:(0,jsx_runtime.jsx)(Listbox.Listbox,{id:listboxId,"aria-labelledby":labelId,multiselectable:!1,className:listboxClass,optionClass:"nds-dropdown__option",optionProps:{marker:selectedMarker},selected:selected,onChange:function changeHandler(props){var index=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(onChange){var value=props.value;onChange({value:value,contents:props.label})}else select(props.value);setButtonContents(props.label),setShouldReturnFocus(!0),setOptionFocusIndex(index),closeListbox()},focusableIndex:optionFocusIndex,autofocus:isOpen&&autofocus,ref:setListbox,children:options})})]})};Dropdown.displayName="Dropdown",Dropdown.Option=Listbox.Option;try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{label:{defaultValue:null,description:"The name of the dropdown. Required.",name:"label",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The options for the listbox. Each will be rendered inside an `Option`\ncomponent. When specifying an option as an `OptionProps` object,\nthe option's value must be the `OptionProps['children']`.",name:"children",required:!0,type:{name:"ReactChild[]"}},sort:{defaultValue:null,description:"Sort options by value. `undefined` will leave the options unsorted.",name:"sort",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"ascending"'},{value:'"descending"'}]}},selected:{defaultValue:null,description:"A list of selected options.",name:"selected",required:!1,type:{name:"ReactText | undefined"}},buttonContents:{defaultValue:null,description:"The contents of the button. Default is 'Select' on load and then it will\nmatch the contents of the currently selected option if no `onChange`\ncallback is provided.",name:"buttonContents",required:!1,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"Indicates whether the listbox is open.",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},closeOnExternalClick:{defaultValue:{value:"true"},description:"Indicates whether clicking outside the listbox should close the listbox.",name:"closeOnExternalClick",required:!1,type:{name:"boolean | undefined"}},closeOnDocumentEscape:{defaultValue:{value:"true"},description:"Indicates whether the dropdown should be closed on `Escape`.",name:"closeOnDocumentEscape",required:!1,type:{name:"boolean | undefined"}},matchWidth:{defaultValue:null,description:"Indicates that the button and listbox should match widths.\n* `button` - the listbox will match the width of the button.\n* `listbox` - the button will match the width of the listbox.\n* `undefined` - no width matching should be done.",name:"matchWidth",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"listbox"'}]}},buttonWidth:{defaultValue:null,description:'Set the width of the button. Use when `matchWidth="button"` and the\nbutton\'s width is not set with CSS.',name:"buttonWidth",required:!1,type:{name:"string | number | undefined"}},name:{defaultValue:null,description:"The `name` attribute for the internal `<select>`.",name:"name",required:!1,type:{name:"string | undefined"}},baseName:{defaultValue:{value:"nds-dropdown"},description:'The base class name according to BEM conventions. Default is "dropdown".',name:"baseName",required:!1,type:{name:"string | undefined"}},labelClass:{defaultValue:null,description:"The class name for the label.",name:"labelClass",required:!1,type:{name:"string | undefined"}},buttonClass:{defaultValue:{value:"`${baseName}__button`"},description:"The class name for the button.",name:"buttonClass",required:!1,type:{name:"string | undefined"}},listboxClass:{defaultValue:{value:"`${baseName}__listbox`"},description:"The class name for the listbox.",name:"listboxClass",required:!1,type:{name:"string | undefined"}},optionClass:{defaultValue:null,description:"The class name for all listbox options.",name:"optionClass",required:!1,type:{name:"string | undefined"}},popperClass:{defaultValue:{value:"`${baseName}__popper`"},description:"The class name for the popper.",name:"popperClass",required:!1,type:{name:"string | undefined"}},buttonId:{defaultValue:null,description:"An id for the button.",name:"buttonId",required:!1,type:{name:"string | undefined"}},listboxId:{defaultValue:null,description:"An id for the listbox.",name:"listboxId",required:!1,type:{name:"string | undefined"}},onRequestClose:{defaultValue:null,description:"Callback function that is called when the dropdown attempts to close its\nlistbox. This will occur under the following conditions:\n* The user clicks outside of the listbox and `closeOnExternalClick` is\n`true`.\n* The user presses `Escape` and `closeOnDocumentEscape` is `true`.\n* The user presses `Tab` while the listbox is open.",name:"onRequestClose",required:!1,type:{name:"(() => void) | undefined"}},onRequestOpen:{defaultValue:null,description:"Callback function that is called when the dropdown attempts to open its\nlistbox. This will occur under the following conditions:\n* The user clicks the dropdown button (default: `.dropdown__button`).\n* The user presses `ArrowUp` or `ArrowDown` while on the dropdown button.",name:"onRequestOpen",required:!1,type:{name:"(() => void) | undefined"}},onChange:{defaultValue:null,description:"Callback function that is called when an option is selected. This will\noccur under the following conditions:\n* When the user clicks an option.\n* When the user presses `Enter` on the currently focused option.\n* When the user releases the space bar on the currently focused option.",name:"onChange",required:!1,type:{name:"((payload: { value: ReactText; contents: ReactNode; }) => void) | undefined"}},autofocus:{defaultValue:{value:"true"},description:"If set, the focusable dropdown option should be focused when it is rendered.",name:"autofocus",required:!1,type:{name:"boolean | undefined"}},selectedMarker:{defaultValue:{value:"check"},description:"Set the visual indicator for the selected option.",name:"selectedMarker",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"check"'},{value:'"dot"'}]}},description:{defaultValue:null,description:"An optional description. Use this in place of `placeholder` text or as\nhelp text for your field control.",name:"description",required:!1,type:{name:"ReactNode"}},descriptionClass:{defaultValue:null,description:"A className for the description `<div>`.",name:"descriptionClass",required:!1,type:{name:"string | undefined"}},labelId:{defaultValue:null,description:"An id for the label element.",name:"labelId",required:!1,type:{name:"string | undefined"}},descriptionId:{defaultValue:null,description:"An id for the description `<div>`.",name:"descriptionId",required:!1,type:{name:"string | undefined"}},transition:{defaultValue:null,description:"The animation transition class applied to the popper as it enters or exits.\nA single name can be provided and it will be suffixed for each stage.\n\nFor example, `transition=\"fade\"` applies:\n\n- `fade-enter`\n- `fade-enter-active`\n- `fade-exit`\n- `fade-exit-active`\n- `fade-appear`\n- `fade-appear-active`\n\nEach individual stage can also be specified independently:\n\n```js\ntransition={{\n\tappear: 'my-appear',\n\tappearActive: 'my-appear-active',\n\tappearDone: 'my-appear-done',\n\tenter: 'my-enter',\n\tenterActive: 'my-enter-active',\n\tenterDone: 'my-enter-done',\n\texit: 'my-exit',\n\texitActive: 'my-exit-active',\n\texitDone: 'my-exit-done'\n}}\n```\n\nReference: [react-transition-group's CSSTransition](http://reactcommunity.org/react-transition-group/css-transition).",name:"transition",required:!1,type:{name:"string | CSSTransitionClassNames | undefined"}},distance:{defaultValue:{value:"4"},description:"The [offset distance](https://popper.js.org/docs/v2/modifiers/offset/#distance-1)\n(in pixels) from the reference. Will only be used if `offset` is undefined.",name:"distance",required:!1,type:{name:"number | undefined"}},placement:{defaultValue:{value:"bottom-start"},description:"The [Popper.js placement option](https://popper.js.org/docs/v2/constructors/#placement).",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},modifiers:{defaultValue:null,description:"The [Popper.js modifiers option](https://popper.js.org/docs/v2/constructors/#modifiers).",name:"modifiers",required:!1,type:{name:"Partial<Modifier<any, any>>[] | undefined"}},strategy:{defaultValue:{value:"fixed"},description:"The [Popper.js strategy option](https://popper.js.org/docs/v2/constructors/#strategy).",name:"strategy",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"absolute"'},{value:'"fixed"'}]}},onFirstUpdate:{defaultValue:null,description:"The [Popper.js onFirstUpdate option](https://popper.js.org/docs/v2/constructors/#onFirstUpdate).",name:"onFirstUpdate",required:!1,type:{name:"((arg0: Partial<State>) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"packages/react/src/components/Dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Listbox/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Listbox:function(){return Listbox},Option:function(){return Option}});__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.set.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js");var react=__webpack_require__("./node_modules/react/index.js"),utilities=__webpack_require__("./packages/react/src/utilities/index.ts"),Icon=__webpack_require__("./packages/react/src/components/Icon/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["disabled","label","selected","marker","className","onClick","onKeyDown","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Option=react.forwardRef((function(_ref,ref){var disabled=_ref.disabled,label=_ref.label,selected=_ref.selected,marker=_ref.marker,_ref$className=_ref.className,className=void 0===_ref$className?"nds-option":_ref$className,onClick=_ref.onClick,onKeyDown=_ref.onKeyDown,children=_ref.children,props=_objectWithoutProperties(_ref,_excluded),selectedMarker=react.useMemo((function(){return react.isValidElement(marker)?marker:(0,jsx_runtime.jsx)("span",{className:"nds-option__marker","aria-hidden":!selected,children:(0,jsx_runtime.jsx)(Icon.JO,{variant:"dot"!==marker?"check":void 0,icon:"dot"===marker?{children:(0,jsx_runtime.jsx)("circle",{r:"6",cx:"12",cy:"12"})}:void 0,color:selected?"currentColor":"transparent","aria-label":selected?"Checked":void 0,size:"0.875em"})})}),[marker,selected]);return(0,jsx_runtime.jsxs)("li",Object.assign({ref:ref,className:className,onClick:disabled?void 0:onClick,onKeyDown:disabled?void 0:onKeyDown},props,{"aria-selected":selected?"true":"false","aria-disabled":disabled?"true":void 0,role:"option",children:[selectedMarker,label||children]}))}));try{Option.displayName="Option",Option.__docgenInfo={description:"A a selectable item in a list.\n\nReference:\n- [HTML - `<option>`](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element).\n- [ARIA - `option`](https://w3c.github.io/aria/#option).",displayName:"Option",props:{disabled:{defaultValue:null,description:"If set, this option is not selectable.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"The displayed option name. This will override `children`.",name:"label",required:!1,type:{name:"ReactNode"}},selected:{defaultValue:null,description:"Indicates that this option is currently selected.",name:"selected",required:!1,type:{name:"boolean | undefined"}},value:{defaultValue:null,description:"The value of the option that will be submitted. If undefined, the `label`\nor `children` will be used as the `value`.",name:"value",required:!0,type:{name:"string | number"}},marker:{defaultValue:null,description:"An element that comes before the label/children, similar to CSS `::marker`.\nDefaults to a check mark, but can be set as a dot or a React element.",name:"marker",required:!1,type:{name:'ReactElement<any, string | JSXElementConstructor<any>> | "check" | "dot" | undefined'}},optionClass:{defaultValue:null,description:"",name:"optionClass",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Listbox/Option.tsx#Option"]={docgenInfo:Option.__docgenInfo,name:"Option",path:"packages/react/src/components/Listbox/Option.tsx#Option"})}catch(__react_docgen_typescript_loader_error){}var Listbox_excluded=["options","optionProps","multiselectable","selected","onChange","autofocus","focusableIndex","focusWrap","onOptionFocus","className","children","optionClass","orientation"],_excluded2=["children","disabled","value","label","selected"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Listbox_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Listbox_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Listbox=react.forwardRef((function(_ref,ref){var optionsProp=_ref.options,optionProps=_ref.optionProps,multiselectable=_ref.multiselectable,selectedProp=_ref.selected,onChange=_ref.onChange,autofocus=_ref.autofocus,focusableIndex=_ref.focusableIndex,focusWrap=_ref.focusWrap,onOptionFocus=_ref.onOptionFocus,_ref$className=_ref.className,className=void 0===_ref$className?"nds-listbox":_ref$className,childrenProp=_ref.children,_ref$optionClass=_ref.optionClass,optionClass=void 0===_ref$optionClass?"nds-option":_ref$optionClass,orientation=_ref.orientation,listboxProps=Listbox_objectWithoutProperties(_ref,Listbox_excluded),_useForwardedRef2=_slicedToArray((0,utilities.useForwardedRef)(ref),2),listbox=_useForwardedRef2[0],setListbox=_useForwardedRef2[1],_React$useState2=_slicedToArray(react.useState(!1),2),keyboardClick=_React$useState2[0],setKeyboardClick=_React$useState2[1],disabledOptions=react.useRef(new Set),options=react.useMemo((function(){var opts=childrenProp;return optionsProp&&(opts=Array.isArray(optionsProp)?optionsProp.map((function(opt){if("object"==typeof opt){var missingProps=[];if("value"in opt||missingProps.push("value"),"label"in opt||missingProps.push("label"),missingProps.length)throw new Error("The <Listbox> options prop must contain a value and label when an array of objects. Missing props: "+missingProps.join(",")+".");return opt}return{label:opt.toString(),value:opt}})):Object.keys(optionsProp).map((function(label){return{label:label,value:optionsProp[label]}}))),(0,utilities.toElements)(opts)}),[optionsProp,childrenProp]),selectedOptions=react.useMemo((function(){return options.filter((function(_ref2){return _ref2.props.selected})).map((function(_ref3){return _ref3.props.value}))}),[options]),_useSelect=(0,utilities.useSelect)(multiselectable,selectedOptions),selectedUC=_useSelect.selected,toggle=_useSelect.toggle,selected=void 0!==selectedProp?selectedProp:selectedUC;react.useEffect((function(){if(!multiselectable&&selected.length>1)throw new Error(utilities.useSelect.SELECT_OVERLOAD)}),[multiselectable,selected]);var keys=react.useMemo((function(){switch(orientation){case"vertical":return{nextKeys:["ArrowDown"],prevKeys:["ArrowUp"]};case"horizontal":return{nextKeys:["ArrowRight"],prevKeys:["ArrowLeft"]};default:return{}}}),[orientation]),_useRovingTabindex=(0,utilities.useRovingTabindex)(Object.assign({container:listbox,size:options.length,initialIndex:focusableIndex,wrap:focusWrap,autofocus:autofocus,disabledItems:disabledOptions.current},keys)),dispatch=_useRovingTabindex.dispatch,_useRovingTabindex$co=_useRovingTabindex.containerProps,onKeyDown=_useRovingTabindex$co.onKeyDown,onBlur=_useRovingTabindex$co.onBlur,_useRovingTabindex$ch=_useRovingTabindex.childProps,createRef=_useRovingTabindex$ch.createRef,tabIndex=_useRovingTabindex$ch.tabIndex,Options=react.useMemo((function(){return options.map((function(_ref4,i){var props=_ref4.props,mappedProps="function"==typeof optionProps?optionProps(i):optionProps,_mappedProps$props=Object.assign({},mappedProps,props),children=_mappedProps$props.children,disabled=_mappedProps$props.disabled,value=_mappedProps$props.value,_mappedProps$props$la=_mappedProps$props.label,label=void 0===_mappedProps$props$la?children||value:_mappedProps$props$la,optProps=(_mappedProps$props.selected,Listbox_objectWithoutProperties(_mappedProps$props,_excluded2));if(!value)throw new Error("<Option> elements must provide a value prop.");disabled?disabledOptions.current.add(i):disabledOptions.current.delete(i);var select=function select(){onChange?onChange(Object.assign({children:children,disabled:disabled},optProps,{value:value,label:label}),i):selectedProp||toggle(value)};return(0,jsx_runtime.jsx)(Option,Object.assign({value:value,label:label,selected:selected.includes(value),disabled:disabled,className:optionClass,tabIndex:disabled?-1:tabIndex(i),onClick:function onClick(e){disabled?e.preventDefault():(dispatch({type:"GOTO",payload:i}),select())},onKeyDown:function onKeyDown(e){"Enter"===e.key&&select()," "===e.key&&(e.preventDefault(),setKeyboardClick(!0))},onKeyUp:function onKeyUp(_ref5){" "===_ref5.key&&keyboardClick&&(select(),setKeyboardClick(!1))},onBlur:function onBlur(){return setKeyboardClick(!1)},onFocus:function onFocus(e){onOptionFocus&&onOptionFocus(e,i)},ref:disabled?void 0:createRef(i)},optProps,{children:children}),value)}))}),[createRef,dispatch,keyboardClick,onChange,onOptionFocus,optionProps,options,selected,selectedProp,tabIndex,toggle,optionClass]);return(0,jsx_runtime.jsx)("ul",Object.assign({ref:setListbox,className:className,"aria-orientation":orientation,onKeyDown:onKeyDown,onBlur:onBlur},listboxProps,{role:"listbox","aria-multiselectable":multiselectable,children:Options}))}));try{Listbox.displayName="Listbox",Listbox.__docgenInfo={description:"A listbox allows the user to select one or more option from a list of options.\n\nReference:\n- [HTML - `<datalist>`](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element)\n- [ARIA - `listbox`](https://w3c.github.io/aria/#listbox)\n- [ARIA Practices - Listbox](https://w3c.github.io/aria-practices/#Listbox)",displayName:"Listbox",props:{options:{defaultValue:null,description:"A list of options as either an array of `value` props, an array of `OptionProps`\nobjects, or an object with `label: value` entries. Array values will be\nused as both the `label` and the `value`.\n\n```jsx\noptions={['Cat', 'Dog']}\n\t// <Listbox>\n\t// \t<Option value=\"Cat\">Cat</Option>\n\t// \t<Option value=\"Dog\">Dog</Option>\n\t// </Listbox>\n```\n\n```jsx\noptions={[{ label: 'Cat', value: '🐱' }, { label: 'Dog', value: '🐶' }]}\n\t// <Listbox>\n\t// \t<Option value=\"🐱\">Cat</Option>\n\t// \t<Option value=\"🐶\">Dog</Option>\n\t// </Listbox>\n```\n\n```jsx\noptions={{ Cat: '🐱', Dog: '🐶' }}\n\t// <Listbox>\n\t// \t<Option value=\"🐱\">Cat</Option>\n\t// \t<Option value=\"🐶\">Dog</Option>\n\t// </Listbox>\n```",name:"options",required:!1,type:{name:"Record<string, string | number> | (string | number | OptionProps)[] | undefined"}},optionProps:{defaultValue:null,description:"Option props that should be mapped to all child options.",name:"optionProps",required:!1,type:{name:"Partial<OptionProps> | ((index: number) => Partial<OptionProps>) | undefined"}},multiselectable:{defaultValue:null,description:"Indicates that more than one item can be selected. Used to set the\n[aria-multiselectable](https://www.w3.org/TR/wai-aria/#aria-multiselectable) value.",name:"multiselectable",required:!1,type:{name:"boolean | undefined"}},orientation:{defaultValue:null,description:"Indicates whether the listbox is arranged horizontally, vertically, or unknown.\nUsed to set the [aria-orientation](https://www.w3.org/TR/wai-aria/#aria-orientation)\nvalue and affects which arrow keys can be used to move focus within it.",name:"orientation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},selected:{defaultValue:null,description:"The currently selected value(s).",name:"selected",required:!1,type:{name:"(string | number)[] | undefined"}},onChange:{defaultValue:null,description:"A callback that will trigger any time selection changes.",name:"onChange",required:!1,type:{name:"((props: OptionProps & { value: string | number; label: ReactNode; }, index: number) => void) | undefined"}},autofocus:{defaultValue:null,description:"If set, the focusable listbox option should be focused when it is rendered.",name:"autofocus",required:!1,type:{name:"boolean | undefined"}},focusableIndex:{defaultValue:null,description:"The index of the option that should be focusable.",name:"focusableIndex",required:!1,type:{name:"number | undefined"}},focusWrap:{defaultValue:null,description:"If set, focus will move from the last option to the first option when the\nuser presses `ArrowDown`, and vice versa.",name:"focusWrap",required:!1,type:{name:"boolean | undefined"}},onOptionFocus:{defaultValue:null,description:"A callback that will trigger when an option is focused.",name:"onOptionFocus",required:!1,type:{name:"((e: FocusEvent<HTMLLIElement, Element>, index: number) => void) | undefined"}},optionClass:{defaultValue:{value:"nds-option"},description:"The class name that will be applied to all `options` children.",name:"optionClass",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Listbox/Listbox.tsx#Listbox"]={docgenInfo:Listbox.__docgenInfo,name:"Listbox",path:"packages/react/src/components/Listbox/Listbox.tsx#Listbox"})}catch(__react_docgen_typescript_loader_error){}}}]);