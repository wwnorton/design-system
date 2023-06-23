/*! For license information please see 52.0c857882.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwwnds=self.webpackChunkwwnds||[]).push([[52],{"./packages/react/node_modules/react-router-dom/dist/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{VK:function(){return BrowserRouter},rU:function(){return Link}});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./node_modules/core-js/modules/es.string.search.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js");var router_Action,react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/core-js/modules/es.object.is.js"),__webpack_require__("./node_modules/core-js/modules/es.string.ends-with.js"),__webpack_require__("./node_modules/core-js/modules/es.string.match.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce-right.js"),__webpack_require__("./node_modules/core-js/modules/es.object.values.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}!function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(router_Action||(router_Action={}));const PopStateEventType="popstate";function invariant(value,message){if(!1===value||null==value)throw new Error(message)}function getHistoryState(location,index){return{usr:location.state,key:location.key,idx:index}}function createLocation(current,to,state,key){return void 0===state&&(state=null),_extends({pathname:"string"==typeof current?current:current.pathname,search:"",hash:""},"string"==typeof to?router_parsePath(to):to,{state:state,key:to&&to.key||key||Math.random().toString(36).substr(2,8)})}function router_createPath(_ref){let{pathname:pathname="/",search:search="",hash:hash=""}=_ref;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function router_parsePath(path){let parsedPath={};if(path){let hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));let searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}function getUrlBasedHistory(getLocation,createHref,validateLocation,options){void 0===options&&(options={});let{window:window=document.defaultView,v5Compat:v5Compat=!1}=options,globalHistory=window.history,action=router_Action.Pop,listener=null,index=getIndex();function getIndex(){return(globalHistory.state||{idx:null}).idx}function handlePop(){action=router_Action.Pop;let nextIndex=getIndex(),delta=null==nextIndex?null:nextIndex-index;index=nextIndex,listener&&listener({action:action,location:history.location,delta:delta})}function createURL(to){let base="null"!==window.location.origin?window.location.origin:window.location.href,href="string"==typeof to?to:router_createPath(to);return invariant(base,"No window.location.(origin|href) available to create URL for href: "+href),new URL(href,base)}null==index&&(index=0,globalHistory.replaceState(_extends({},globalHistory.state,{idx:index}),""));let history={get action(){return action},get location(){return getLocation(window,globalHistory)},listen(fn){if(listener)throw new Error("A history only accepts one active listener");return window.addEventListener(PopStateEventType,handlePop),listener=fn,()=>{window.removeEventListener(PopStateEventType,handlePop),listener=null}},createHref(to){return createHref(window,to)},createURL:createURL,encodeLocation(to){let url=createURL(to);return{pathname:url.pathname,search:url.search,hash:url.hash}},push:function push(to,state){action=router_Action.Push;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex()+1;let historyState=getHistoryState(location,index),url=history.createHref(location);try{globalHistory.pushState(historyState,"",url)}catch(error){window.location.assign(url)}v5Compat&&listener&&listener({action:action,location:history.location,delta:1})},replace:function replace(to,state){action=router_Action.Replace;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex();let historyState=getHistoryState(location,index),url=history.createHref(location);globalHistory.replaceState(historyState,"",url),v5Compat&&listener&&listener({action:action,location:history.location,delta:0})},go(n){return globalHistory.go(n)}};return history}var ResultType;!function(ResultType){ResultType.data="data",ResultType.deferred="deferred",ResultType.redirect="redirect",ResultType.error="error"}(ResultType||(ResultType={}));function stripBasename(pathname,basename){if("/"===basename)return pathname;if(!pathname.toLowerCase().startsWith(basename.toLowerCase()))return null;let startIndex=basename.endsWith("/")?basename.length-1:basename.length,nextChar=pathname.charAt(startIndex);return nextChar&&"/"!==nextChar?null:pathname.slice(startIndex)||"/"}function getInvalidPathError(char,field,dest,path){return"Cannot include a '"+char+"' character in a manually specified `to."+field+"` field ["+JSON.stringify(path)+"].  Please separate it out to the `to."+dest+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(matches){return matches.filter(((match,index)=>0===index||match.route.path&&match.route.path.length>0))}function resolveTo(toArg,routePathnames,locationPathname,isPathRelative){let to;void 0===isPathRelative&&(isPathRelative=!1),"string"==typeof toArg?to=router_parsePath(toArg):(to=_extends({},toArg),invariant(!to.pathname||!to.pathname.includes("?"),getInvalidPathError("?","pathname","search",to)),invariant(!to.pathname||!to.pathname.includes("#"),getInvalidPathError("#","pathname","hash",to)),invariant(!to.search||!to.search.includes("#"),getInvalidPathError("#","search","hash",to)));let from,isEmptyPath=""===toArg||""===to.pathname,toPathname=isEmptyPath?"/":to.pathname;if(isPathRelative||null==toPathname)from=locationPathname;else{let routePathnameIndex=routePathnames.length-1;if(toPathname.startsWith("..")){let toSegments=toPathname.split("/");for(;".."===toSegments[0];)toSegments.shift(),routePathnameIndex-=1;to.pathname=toSegments.join("/")}from=routePathnameIndex>=0?routePathnames[routePathnameIndex]:"/"}let path=function resolvePath(to,fromPathname){void 0===fromPathname&&(fromPathname="/");let{pathname:toPathname,search:search="",hash:hash=""}="string"==typeof to?router_parsePath(to):to,pathname=toPathname?toPathname.startsWith("/")?toPathname:function resolvePathname(relativePath,fromPathname){let segments=fromPathname.replace(/\/+$/,"").split("/");return relativePath.split("/").forEach((segment=>{".."===segment?segments.length>1&&segments.pop():"."!==segment&&segments.push(segment)})),segments.length>1?segments.join("/"):"/"}(toPathname,fromPathname):fromPathname;return{pathname:pathname,search:normalizeSearch(search),hash:normalizeHash(hash)}}(to,from),hasExplicitTrailingSlash=toPathname&&"/"!==toPathname&&toPathname.endsWith("/"),hasCurrentTrailingSlash=(isEmptyPath||"."===toPathname)&&locationPathname.endsWith("/");return path.pathname.endsWith("/")||!hasExplicitTrailingSlash&&!hasCurrentTrailingSlash||(path.pathname+="/"),path}const router_joinPaths=paths=>paths.join("/").replace(/\/\/+/g,"/"),normalizeSearch=search=>search&&"?"!==search?search.startsWith("?")?search:"?"+search:"",normalizeHash=hash=>hash&&"#"!==hash?hash.startsWith("#")?hash:"#"+hash:"";class AbortedDeferredError extends Error{}const validMutationMethodsArr=["post","put","patch","delete"],validRequestMethodsArr=(new Set(validMutationMethodsArr),["get",...validMutationMethodsArr]);new Set(validRequestMethodsArr),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;Symbol("deferred");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var is="function"==typeof Object.is?Object.is:function isPolyfill(x,y){return x===y&&(0!==x||1/x==1/y)||x!=x&&y!=y},useState=react.useState,useEffect=react.useEffect,useLayoutEffect=react.useLayoutEffect,useDebugValue=react.useDebugValue;function checkIfSnapshotChanged(inst){var latestGetSnapshot=inst.getSnapshot,prevValue=inst.value;try{var nextValue=latestGetSnapshot();return!is(prevValue,nextValue)}catch(error){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement;var AwaitContext=react.createContext(null);var NavigationContext=react.createContext(null);var LocationContext=react.createContext(null);var RouteContext=react.createContext({outlet:null,matches:[]});var RouteErrorContext=react.createContext(null);function useInRouterContext(){return null!=react.useContext(LocationContext)}function dist_useLocation(){return useInRouterContext()||invariant(!1),react.useContext(LocationContext).location}function dist_useNavigate(){useInRouterContext()||invariant(!1);var _React$useContext2=react.useContext(NavigationContext),basename=_React$useContext2.basename,navigator=_React$useContext2.navigator,matches=react.useContext(RouteContext).matches,locationPathname=dist_useLocation().pathname,routePathnamesJson=JSON.stringify(getPathContributingMatches(matches).map((function(match){return match.pathnameBase}))),activeRef=react.useRef(!1);return react.useEffect((function(){activeRef.current=!0})),react.useCallback((function(to,options){if(void 0===options&&(options={}),activeRef.current)if("number"!=typeof to){var path=resolveTo(to,JSON.parse(routePathnamesJson),locationPathname,"path"===options.relative);"/"!==basename&&(path.pathname="/"===path.pathname?basename:router_joinPaths([basename,path.pathname])),(options.replace?navigator.replace:navigator.push)(path,options.state,options)}else navigator.go(to)}),[basename,navigator,routePathnamesJson,locationPathname])}function dist_useResolvedPath(to,_temp2){var relative=(void 0===_temp2?{}:_temp2).relative,matches=react.useContext(RouteContext).matches,locationPathname=dist_useLocation().pathname,routePathnamesJson=JSON.stringify(getPathContributingMatches(matches).map((function(match){return match.pathnameBase})));return react.useMemo((function(){return resolveTo(to,JSON.parse(routePathnamesJson),locationPathname,"path"===relative)}),[to,routePathnamesJson,locationPathname,relative])}var DataRouterHook,DataRouterStateHook;react.Component;!function(DataRouterHook){DataRouterHook.UseBlocker="useBlocker",DataRouterHook.UseRevalidator="useRevalidator"}(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseLoaderData="useLoaderData",DataRouterStateHook.UseActionData="useActionData",DataRouterStateHook.UseRouteError="useRouteError",DataRouterStateHook.UseNavigation="useNavigation",DataRouterStateHook.UseRouteLoaderData="useRouteLoaderData",DataRouterStateHook.UseMatches="useMatches",DataRouterStateHook.UseRevalidator="useRevalidator"}(DataRouterStateHook||(DataRouterStateHook={}));var AwaitRenderStatus;function dist_Router(_ref4){var _ref4$basename=_ref4.basename,basenameProp=void 0===_ref4$basename?"/":_ref4$basename,_ref4$children=_ref4.children,children=void 0===_ref4$children?null:_ref4$children,locationProp=_ref4.location,_ref4$navigationType=_ref4.navigationType,navigationType=void 0===_ref4$navigationType?router_Action.Pop:_ref4$navigationType,navigator=_ref4.navigator,_ref4$static=_ref4.static,staticProp=void 0!==_ref4$static&&_ref4$static;useInRouterContext()&&invariant(!1);var basename=basenameProp.replace(/^\/*/,"/"),navigationContext=react.useMemo((function(){return{basename:basename,navigator:navigator,static:staticProp}}),[basename,navigator,staticProp]);"string"==typeof locationProp&&(locationProp=router_parsePath(locationProp));var _locationProp=locationProp,_locationProp$pathnam=_locationProp.pathname,pathname=void 0===_locationProp$pathnam?"/":_locationProp$pathnam,_locationProp$search=_locationProp.search,search=void 0===_locationProp$search?"":_locationProp$search,_locationProp$hash=_locationProp.hash,hash=void 0===_locationProp$hash?"":_locationProp$hash,_locationProp$state=_locationProp.state,state=void 0===_locationProp$state?null:_locationProp$state,_locationProp$key=_locationProp.key,key=void 0===_locationProp$key?"default":_locationProp$key,location=react.useMemo((function(){var trailingPathname=stripBasename(pathname,basename);return null==trailingPathname?null:{pathname:trailingPathname,search:search,hash:hash,state:state,key:key}}),[basename,pathname,search,hash,state,key]);return null==location?null:react.createElement(NavigationContext.Provider,{value:navigationContext},react.createElement(LocationContext.Provider,{children:children,value:{location:location,navigationType:navigationType}}))}!function(AwaitRenderStatus){AwaitRenderStatus[AwaitRenderStatus.pending=0]="pending",AwaitRenderStatus[AwaitRenderStatus.success=1]="success",AwaitRenderStatus[AwaitRenderStatus.error=2]="error"}(AwaitRenderStatus||(AwaitRenderStatus={}));var neverSettledPromise=new Promise((function(){}));react.Component;function dist_slicedToArray(arr,i){return function dist_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function dist_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||dist_unsupportedIterableToArray(arr,i)||function dist_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function dist_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return dist_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dist_arrayLikeToArray(o,minLen):void 0}}function dist_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function react_router_dom_dist_extends(){return react_router_dom_dist_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},react_router_dom_dist_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function BrowserRouter(_ref){var basename=_ref.basename,children=_ref.children,window=_ref.window,historyRef=react.useRef();null==historyRef.current&&(historyRef.current=function router_createBrowserHistory(options){return void 0===options&&(options={}),getUrlBasedHistory((function createBrowserLocation(window,globalHistory){let{pathname:pathname,search:search,hash:hash}=window.location;return createLocation("",{pathname:pathname,search:search,hash:hash},globalHistory.state&&globalHistory.state.usr||null,globalHistory.state&&globalHistory.state.key||"default")}),(function createBrowserHref(window,to){return"string"==typeof to?to:router_createPath(to)}),null,options)}({window:window,v5Compat:!0}));var history=historyRef.current,_React$useState2=dist_slicedToArray(react.useState({action:history.action,location:history.location}),2),state=_React$useState2[0],setState=_React$useState2[1];return react.useLayoutEffect((function(){return history.listen(setState)}),[history]),react.createElement(dist_Router,{basename:basename,children:children,location:state.location,navigationType:state.action,navigator:history})}var dist_isBrowser="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,dist_ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=react.forwardRef((function LinkWithRef(_ref4,ref){var absoluteHref,onClick=_ref4.onClick,relative=_ref4.relative,reloadDocument=_ref4.reloadDocument,replace=_ref4.replace,state=_ref4.state,target=_ref4.target,to=_ref4.to,preventScrollReset=_ref4.preventScrollReset,rest=_objectWithoutPropertiesLoose(_ref4,_excluded),basename=react.useContext(NavigationContext).basename,isExternal=!1;if("string"==typeof to&&dist_ABSOLUTE_URL_REGEX.test(to)&&(absoluteHref=to,dist_isBrowser)){var currentUrl=new URL(window.location.href),targetUrl=to.startsWith("//")?new URL(currentUrl.protocol+to):new URL(to),path=stripBasename(targetUrl.pathname,basename);targetUrl.origin===currentUrl.origin&&null!=path?to=path+targetUrl.search+targetUrl.hash:isExternal=!0}var href=function useHref(to,_temp){var relative=(void 0===_temp?{}:_temp).relative;useInRouterContext()||invariant(!1);var _React$useContext=react.useContext(NavigationContext),basename=_React$useContext.basename,navigator=_React$useContext.navigator,_useResolvedPath=dist_useResolvedPath(to,{relative:relative}),hash=_useResolvedPath.hash,pathname=_useResolvedPath.pathname,search=_useResolvedPath.search,joinedPathname=pathname;return"/"!==basename&&(joinedPathname="/"===pathname?basename:router_joinPaths([basename,pathname])),navigator.createHref({pathname:joinedPathname,search:search,hash:hash})}(to,{relative:relative}),internalOnClick=function useLinkClickHandler(to,_temp){var _ref13=void 0===_temp?{}:_temp,target=_ref13.target,replaceProp=_ref13.replace,state=_ref13.state,preventScrollReset=_ref13.preventScrollReset,relative=_ref13.relative,navigate=dist_useNavigate(),location=dist_useLocation(),path=dist_useResolvedPath(to,{relative:relative});return react.useCallback((function(event){if(function shouldProcessLinkClick(event,target){return!(0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event))}(event,target)){event.preventDefault();var replace=void 0!==replaceProp?replaceProp:router_createPath(location)===router_createPath(path);navigate(to,{replace:replace,state:state,preventScrollReset:preventScrollReset,relative:relative})}}),[location,navigate,path,replaceProp,state,target,to,preventScrollReset,relative])}(to,{replace:replace,state:state,target:target,preventScrollReset:preventScrollReset,relative:relative});return react.createElement("a",react_router_dom_dist_extends({},rest,{href:absoluteHref||href,onClick:isExternal||reloadDocument?onClick:function handleClick(event){onClick&&onClick(event),event.defaultPrevented||internalOnClick(event)},ref:ref,target:target}))}));var dist_DataRouterHook,dist_DataRouterStateHook;(function(DataRouterHook){DataRouterHook.UseScrollRestoration="useScrollRestoration",DataRouterHook.UseSubmitImpl="useSubmitImpl",DataRouterHook.UseFetcher="useFetcher"})(dist_DataRouterHook||(dist_DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseFetchers="useFetchers",DataRouterStateHook.UseScrollRestoration="useScrollRestoration"}(dist_DataRouterStateHook||(dist_DataRouterStateHook={}))},"./node_modules/core-js/modules/es.array.reduce-right.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$reduceRight=__webpack_require__("./node_modules/core-js/internals/array-reduce.js").right,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("./node_modules/core-js/internals/engine-v8-version.js");$({target:"Array",proto:!0,forced:!__webpack_require__("./node_modules/core-js/internals/engine-is-node.js")&&CHROME_VERSION>79&&CHROME_VERSION<83||!arrayMethodIsStrict("reduceRight")},{reduceRight:function reduceRight(callbackfn){return $reduceRight(this,callbackfn,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"./node_modules/core-js/modules/es.object.is.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./node_modules/core-js/internals/export.js")({target:"Object",stat:!0},{is:__webpack_require__("./node_modules/core-js/internals/same-value.js")})}}]);