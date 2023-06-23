(self.webpackChunkwwnds=self.webpackChunkwwnds||[]).push([[686],{"./packages/react/src/components/Tag/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Dismissible:function(){return Dismissible},WithIcon:function(){return WithIcon},WithLink:function(){return WithLink},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./packages/react/src/components/Tag/index.ts"),_Icon__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./packages/react/src/components/Icon/index.ts"),_Link__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/react/src/components/Link/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"Tag",component:___WEBPACK_IMPORTED_MODULE_14__.V};var TagTemplate=function TagTemplate(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(___WEBPACK_IMPORTED_MODULE_14__.V,Object.assign({},args))};TagTemplate.displayName="TagTemplate";var Default=TagTemplate.bind({});Default.args={children:"Tag label",color:void 0};var WithIcon=TagTemplate.bind({});WithIcon.args={color:"green",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_15__.JO,{variant:"download"}),"With Icon"]})};var WithLink=TagTemplate.bind({});WithLink.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_16__.Link,{href:"https://github.com/wwnorton/design-system",external:!0,children:"Norton Design System GitHub"})};var Dismissible=function Dismissible(args){var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_13__.useState(!1),2),dismissed=_React$useState2[0],setDismissed=_React$useState2[1];return dismissed?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span",Object.assign({},args)):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(___WEBPACK_IMPORTED_MODULE_14__.V,Object.assign({},args,{dismissible:!0,onDismiss:function onDismiss(){return setDismissed(!0)},children:"Dismissible"}))};Dismissible.displayName="Dismissible",Default.parameters=Object.assign({storySource:{source:"(args: TagProps) => <Tag {...args} />"}},Default.parameters),WithIcon.parameters=Object.assign({storySource:{source:"(args: TagProps) => <Tag {...args} />"}},WithIcon.parameters),WithLink.parameters=Object.assign({storySource:{source:"(args: TagProps) => <Tag {...args} />"}},WithLink.parameters),Dismissible.parameters=Object.assign({storySource:{source:"(args: TagProps) => {\n\tconst [dismissed, setDismissed] = React.useState(false);\n\n\tif (dismissed) return <span {...args} />;\n\treturn (\n\t\t<Tag {...args} dismissible onDismiss={() => setDismissed(true)}>\n\t\t\tDismissible\n\t\t</Tag>\n\t);\n}"}},Dismissible.parameters);var __namedExportsOrder=["Default","WithIcon","WithLink","Dismissible"];try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{color:{defaultValue:null,description:"The tag color family.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"blue"'},{value:'"cyan"'},{value:'"gray"'},{value:'"green"'},{value:'"navy"'},{value:'"purple"'},{value:'"red"'},{value:'"teal"'},{value:'"yellow"'}]}},dismissible:{defaultValue:null,description:"Indicates whether tag can be dismissed.",name:"dismissible",required:!1,type:{name:"boolean | undefined"}},baseName:{defaultValue:null,description:"The base class name according to BEM conventions.",name:"baseName",required:!1,type:{name:"string | undefined"}},contentsClass:{defaultValue:null,description:"The className for the span that wraps `children`.",name:"contentsClass",required:!1,type:{name:"string | undefined"}},dismissClass:{defaultValue:null,description:"The className for the dismiss button.",name:"dismissClass",required:!1,type:{name:"string | undefined"}},onDismiss:{defaultValue:null,description:"Callback function that is called when the dismiss button is clicked.",name:"onDismiss",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Tag/index.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"packages/react/src/components/Tag/index.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{WithIcon.displayName="WithIcon",WithIcon.__docgenInfo={description:"",displayName:"WithIcon",props:{color:{defaultValue:null,description:"The tag color family.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"blue"'},{value:'"cyan"'},{value:'"gray"'},{value:'"green"'},{value:'"navy"'},{value:'"purple"'},{value:'"red"'},{value:'"teal"'},{value:'"yellow"'}]}},dismissible:{defaultValue:null,description:"Indicates whether tag can be dismissed.",name:"dismissible",required:!1,type:{name:"boolean | undefined"}},baseName:{defaultValue:null,description:"The base class name according to BEM conventions.",name:"baseName",required:!1,type:{name:"string | undefined"}},contentsClass:{defaultValue:null,description:"The className for the span that wraps `children`.",name:"contentsClass",required:!1,type:{name:"string | undefined"}},dismissClass:{defaultValue:null,description:"The className for the dismiss button.",name:"dismissClass",required:!1,type:{name:"string | undefined"}},onDismiss:{defaultValue:null,description:"Callback function that is called when the dismiss button is clicked.",name:"onDismiss",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Tag/index.stories.tsx#WithIcon"]={docgenInfo:WithIcon.__docgenInfo,name:"WithIcon",path:"packages/react/src/components/Tag/index.stories.tsx#WithIcon"})}catch(__react_docgen_typescript_loader_error){}try{WithLink.displayName="WithLink",WithLink.__docgenInfo={description:"",displayName:"WithLink",props:{color:{defaultValue:null,description:"The tag color family.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"blue"'},{value:'"cyan"'},{value:'"gray"'},{value:'"green"'},{value:'"navy"'},{value:'"purple"'},{value:'"red"'},{value:'"teal"'},{value:'"yellow"'}]}},dismissible:{defaultValue:null,description:"Indicates whether tag can be dismissed.",name:"dismissible",required:!1,type:{name:"boolean | undefined"}},baseName:{defaultValue:null,description:"The base class name according to BEM conventions.",name:"baseName",required:!1,type:{name:"string | undefined"}},contentsClass:{defaultValue:null,description:"The className for the span that wraps `children`.",name:"contentsClass",required:!1,type:{name:"string | undefined"}},dismissClass:{defaultValue:null,description:"The className for the dismiss button.",name:"dismissClass",required:!1,type:{name:"string | undefined"}},onDismiss:{defaultValue:null,description:"Callback function that is called when the dismiss button is clicked.",name:"onDismiss",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Tag/index.stories.tsx#WithLink"]={docgenInfo:WithLink.__docgenInfo,name:"WithLink",path:"packages/react/src/components/Tag/index.stories.tsx#WithLink"})}catch(__react_docgen_typescript_loader_error){}try{Dismissible.displayName="Dismissible",Dismissible.__docgenInfo={description:"",displayName:"Dismissible",props:{color:{defaultValue:null,description:"The tag color family.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"blue"'},{value:'"cyan"'},{value:'"gray"'},{value:'"green"'},{value:'"navy"'},{value:'"purple"'},{value:'"red"'},{value:'"teal"'},{value:'"yellow"'}]}},dismissible:{defaultValue:null,description:"Indicates whether tag can be dismissed.",name:"dismissible",required:!1,type:{name:"boolean | undefined"}},baseName:{defaultValue:null,description:"The base class name according to BEM conventions.",name:"baseName",required:!1,type:{name:"string | undefined"}},contentsClass:{defaultValue:null,description:"The className for the span that wraps `children`.",name:"contentsClass",required:!1,type:{name:"string | undefined"}},dismissClass:{defaultValue:null,description:"The className for the dismiss button.",name:"dismissClass",required:!1,type:{name:"string | undefined"}},onDismiss:{defaultValue:null,description:"Callback function that is called when the dismiss button is clicked.",name:"onDismiss",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Tag/index.stories.tsx#Dismissible"]={docgenInfo:Dismissible.__docgenInfo,name:"Dismissible",path:"packages/react/src/components/Tag/index.stories.tsx#Dismissible"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/BaseButton/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{BaseButton:function(){return BaseButton}});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["active","activeClass","onKeyDown","onKeyUp","onBlur","className","children","type"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var defaultProps={active:!1,activeClass:"active",type:"button"},BaseButton=react.forwardRef((function(_ref,ref){var _ref2,_ref$active=_ref.active,active=void 0===_ref$active?defaultProps.active:_ref$active,_ref$activeClass=_ref.activeClass,activeClass=void 0===_ref$activeClass?defaultProps.activeClass:_ref$activeClass,onKeyDown=_ref.onKeyDown,onKeyUp=_ref.onKeyUp,onBlur=_ref.onBlur,className=_ref.className,children=_ref.children,_ref$type=_ref.type,type=void 0===_ref$type?defaultProps.type:_ref$type,props=_objectWithoutProperties(_ref,_excluded),_React$useState2=_slicedToArray(react.useState(active),2),isActive=_React$useState2[0],setActive=_React$useState2[1];react.useEffect((function(){setActive(active)}),[active]);return(0,jsx_runtime.jsx)("button",Object.assign({ref:ref,className:classnames_default()(activeClass&&(_ref2={},_ref2[activeClass]=isActive,_ref2),className),onKeyDown:function handleKeydown(e){" "===e.key&&setActive(!0),onKeyDown&&onKeyDown(e)},onKeyUp:function handleKeyup(e){" "===e.key&&setActive(!1),onKeyUp&&onKeyUp(e)},onBlur:function handleBlur(e){setActive(!1),onBlur&&onBlur(e)},type:type},props,{children:children}))}));BaseButton.defaultProps=defaultProps;try{BaseButton.displayName="BaseButton",BaseButton.__docgenInfo={description:'A base `<button>` component with `type="button"` by default (browser default\nis "submit") and a polyfill to ensure that :active is triggered while the\nspace bar is being held down.',displayName:"BaseButton",props:{active:{defaultValue:{value:"defaultProps.active"},description:"Whether the button is currently depressed. Polyfill for :active on keydown.",name:"active",required:!1,type:{name:"boolean | undefined"}},activeClass:{defaultValue:{value:"defaultProps.activeClass"},description:"A class to convey :active.",name:"activeClass",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/BaseButton/BaseButton.tsx#BaseButton"]={docgenInfo:BaseButton.__docgenInfo,name:"BaseButton",path:"packages/react/src/components/BaseButton/BaseButton.tsx#BaseButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Link/Link.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{r:function(){return Link}});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),_utilities_link__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/utilities/link/index.ts"),_Icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/components/Icon/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["external","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Link=react__WEBPACK_IMPORTED_MODULE_4__.forwardRef((function(props,ref){var LinkComponent=(0,_utilities_link__WEBPACK_IMPORTED_MODULE_5__.useLink)();if(LinkComponent)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(LinkComponent,Object.assign({className:"nds-link",ref:ref},props));var _ref=props,external=_ref.external,children=_ref.children,linkProps=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a",Object.assign({className:"nds-link",rel:external?"noopener noreferrer":void 0,target:external?"_blank":void 0,ref:ref},linkProps,{children:[children,external&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{className:"nds-link__launch",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_6__.JO,{size:"1em",variant:"launch"})})]}))}));try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{external:{defaultValue:null,description:"Indicates that the link should open in a new window or tab.",name:"external",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"packages/react/src/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Link/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Link:function(){return _Link__WEBPACK_IMPORTED_MODULE_0__.r}});var _Link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/components/Link/Link.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/components/Link/types.ts");__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"Listbox")&&__webpack_require__.d(__webpack_exports__,{Listbox:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.Listbox}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"Option")&&__webpack_require__.d(__webpack_exports__,{Option:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.Option}})},"./packages/react/src/components/Link/types.ts":function(){},"./packages/react/src/components/Tag/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{V:function(){return Tag}});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),BaseButton=__webpack_require__("./packages/react/src/components/BaseButton/index.ts"),Icon=__webpack_require__("./packages/react/src/components/Icon/index.ts"),utilities=__webpack_require__("./packages/react/src/utilities/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["dismissible","baseName","contentsClass","dismissClass","children","color","onDismiss","onClick","className"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Tag=react.forwardRef((function(_ref,ref){var _classNames,dismissible=_ref.dismissible,_ref$baseName=_ref.baseName,baseName=void 0===_ref$baseName?"nds-tag":_ref$baseName,_ref$contentsClass=_ref.contentsClass,contentsClass=void 0===_ref$contentsClass?baseName+"__contents":_ref$contentsClass,_ref$dismissClass=_ref.dismissClass,dismissClass=void 0===_ref$dismissClass?baseName+"__dismiss":_ref$dismissClass,children=_ref.children,color=_ref.color,onDismiss=_ref.onDismiss,_onClick=_ref.onClick,className=_ref.className,props=_objectWithoutProperties(_ref,_excluded),isLink=react.useMemo((function(){return(0,utilities.isLinkElement)(children)}),[children]),classes=classnames_default()(className,baseName,((_classNames={})[baseName+"--"+color]=void 0!==color,_classNames[baseName+"--dismissible"]=!0===dismissible,_classNames));if(dismissible){var contents=(0,utilities.isLinkElement)(children)?children.props.children:children;return(0,jsx_runtime.jsxs)("span",Object.assign({className:classes,ref:ref},props,{children:[(0,jsx_runtime.jsx)("span",{className:contentsClass,children:contents}),(0,jsx_runtime.jsx)(BaseButton.BaseButton,{className:dismissClass,onClick:function onClick(e){onDismiss?onDismiss():_onClick&&_onClick(e)},children:(0,jsx_runtime.jsx)(Icon.JO,{variant:"close",size:"0.85em","aria-label":"Dismiss"})})]}))}return isLink?(0,jsx_runtime.jsx)("span",Object.assign({className:classes,ref:ref},props,{children:(0,jsx_runtime.jsx)("span",{className:contentsClass,children:children})})):(0,jsx_runtime.jsx)(BaseButton.BaseButton,Object.assign({className:classes,onClick:_onClick},props,{children:(0,jsx_runtime.jsx)("span",{className:contentsClass,children:children})}))}));try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{color:{defaultValue:null,description:"The tag color family.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"blue"'},{value:'"cyan"'},{value:'"gray"'},{value:'"green"'},{value:'"navy"'},{value:'"purple"'},{value:'"red"'},{value:'"teal"'},{value:'"yellow"'}]}},dismissible:{defaultValue:null,description:"Indicates whether tag can be dismissed.",name:"dismissible",required:!1,type:{name:"boolean | undefined"}},baseName:{defaultValue:{value:"nds-tag"},description:"The base class name according to BEM conventions.",name:"baseName",required:!1,type:{name:"string | undefined"}},contentsClass:{defaultValue:{value:"`${baseName}__contents`"},description:"The className for the span that wraps `children`.",name:"contentsClass",required:!1,type:{name:"string | undefined"}},dismissClass:{defaultValue:{value:"`${baseName}__dismiss`"},description:"The className for the dismiss button.",name:"dismissClass",required:!1,type:{name:"string | undefined"}},onDismiss:{defaultValue:null,description:"Callback function that is called when the dismiss button is clicked.",name:"onDismiss",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"packages/react/src/components/Tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}}}]);