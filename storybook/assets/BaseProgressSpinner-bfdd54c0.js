import{j as o,c as L,a as g}from"./index-a1e85e29.js";import{R as E,r as v}from"./index-0cbcd92a.js";import{b as O,f as w}from"./hook-0eff1646.js";const y=E.forwardRef(({progress:t,max:e=1,children:r,...a},n)=>o("div",{ref:n,...a,role:"progressbar","aria-valuenow":t,"aria-valuemax":e,"aria-valuemin":0,children:r}));try{y.displayName="BaseProgress",y.__docgenInfo={description:`A minimal progress indicator.

References:
- [MDN - \`<progress>\` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
- [ARIA 1.2 - progressbar (role)](https://www.w3.org/TR/wai-aria-1.2/#progressbar)
- [ARIA Authoring Practices - Range properties with progress bars](https://w3c.github.io/aria-practices/#range_related_properties_progressbar_role)`,displayName:"BaseProgress",props:{progress:{defaultValue:null,description:"Indicates how much of the task has been completed.",name:"progress",required:!1,type:{name:"number"}},max:{defaultValue:{value:"1"},description:"Describes how much work is required to complete the progress. If defined,\nit must be greater than `0` and be a valid floating point number.\nThe default is `1`.",name:"max",required:!1,type:{name:"number"}}}}}catch{}var S=function(t,e){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(r[n]=a[n])},S(t,e)};function D(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");S(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var _=function(){return _=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},_.apply(this,arguments)};function B(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],a=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&a>=t.length&&(t=void 0),{value:t&&t[a++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function x(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var a=r.call(t),n,s=[],i;try{for(;(e===void 0||e-- >0)&&!(n=a.next()).done;)s.push(n.value)}catch(c){i={error:c}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return s}function M(t,e,r){if(r||arguments.length===2)for(var a=0,n=e.length,s;a<n;a++)(s||!(a in e))&&(s||(s=Array.prototype.slice.call(e,0,a)),s[a]=e[a]);return t.concat(s||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var P=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var T=function(){function t(e,r){for(var a=[],n=2;n<arguments.length;n++)a[n-2]=arguments[n];this.root=e,this.initialize.apply(this,M([],x(a))),this.foundation=r===void 0?this.getDefaultFoundation():r,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new P({}))},t.prototype.initialize=function(){},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(e,r,a){this.root.addEventListener(e,r,a)},t.prototype.unlisten=function(e,r,a){this.root.removeEventListener(e,r,a)},t.prototype.emit=function(e,r,a){a===void 0&&(a=!1);var n;typeof CustomEvent=="function"?n=new CustomEvent(e,{bubbles:a,detail:r}):(n=document.createEvent("CustomEvent"),n.initCustomEvent(e,a,!1,r)),this.root.dispatchEvent(n)},t}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var R={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function F(t){return!!t.document&&typeof t.document.createElement=="function"}function V(t,e){if(F(t)&&e in R){var r=t.document.createElement("div"),a=R[e],n=a.standard,s=a.prefixed,i=n in r.style;return i?n:s}return e}/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},u={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},m={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var b=function(t){D(e,t);function e(r){var a=t.call(this,_(_({},e.defaultAdapter),r))||this;return a.observer=null,a}return Object.defineProperty(e,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return u},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var r=this;this.determinate=!this.adapter.hasClass(l.INDETERMINATE_CLASS),this.adapter.addClass(l.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(a){var n,s;if(!r.determinate)try{for(var i=B(a),c=i.next();!c.done;c=i.next()){var d=c.value;d.contentRect&&r.calculateAndSetDimensions(d.contentRect.width)}}catch(A){n={error:A}}finally{try{c&&!c.done&&(s=i.return)&&s.call(i)}finally{if(n)throw n.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(r){if(this.determinate=r,this.determinate){this.adapter.removeClass(l.INDETERMINATE_CLASS),this.adapter.setAttribute(u.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(u.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(u.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(l.INDETERMINATE_CLASS),this.adapter.removeAttribute(u.ARIA_VALUENOW),this.adapter.removeAttribute(u.ARIA_VALUEMAX),this.adapter.removeAttribute(u.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(r){this.progress=r,this.determinate&&(this.setPrimaryBarProgress(r),this.adapter.setAttribute(u.ARIA_VALUENOW,r.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(r){this.buffer=r,this.determinate&&this.setBufferBarProgress(r)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(l.CLOSED_CLASS),this.adapter.removeClass(l.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(u.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(l.CLOSED_CLASS),this.adapter.setAttribute(u.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(l.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(l.CLOSED_CLASS)&&this.adapter.addClass(l.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(l.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(l.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(r){var a="scaleX("+r+")",n=typeof window<"u"?V(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(n,a)},e.prototype.setBufferBarProgress=function(r){var a=r*100+"%";this.adapter.setBufferBarStyle(u.FLEX_BASIS,a)},e.prototype.calculateAndSetDimensions=function(r){var a=r*m.PRIMARY_HALF,n=r*m.PRIMARY_FULL,s=r*m.SECONDARY_QUARTER,i=r*m.SECONDARY_HALF,c=r*m.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",a+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",c+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-c+"px"),this.restartAnimation()},e}(P);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var U=function(t){D(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.attachTo=function(r){return new e(r)},Object.defineProperty(e.prototype,"determinate",{set:function(r){this.foundation.setDeterminate(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"progress",{set:function(r){this.foundation.setProgress(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{set:function(r){this.foundation.setBuffer(r)},enumerable:!1,configurable:!0}),e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(){this.foundation.close()},e.prototype.initialSyncWithDOM=function(){var r=this;this.root.addEventListener("transitionend",function(){r.foundation.handleTransitionEnd()})},e.prototype.getDefaultFoundation=function(){var r=this,a={addClass:function(n){r.root.classList.add(n)},forceLayout:function(){r.root.getBoundingClientRect()},setBufferBarStyle:function(n,s){var i=r.root.querySelector(b.strings.BUFFER_BAR_SELECTOR);i&&i.style.setProperty(n,s)},setPrimaryBarStyle:function(n,s){var i=r.root.querySelector(b.strings.PRIMARY_BAR_SELECTOR);i&&i.style.setProperty(n,s)},hasClass:function(n){return r.root.classList.contains(n)},removeAttribute:function(n){r.root.removeAttribute(n)},removeClass:function(n){r.root.classList.remove(n)},setAttribute:function(n,s){r.root.setAttribute(n,s)},setStyle:function(n,s){r.root.style.setProperty(n,s)},attachResizeObserver:function(n){var s=window.ResizeObserver;if(s){var i=new s(n);return i.observe(r.root),i}return null},getWidth:function(){return r.root.offsetWidth}};return new b(a)},e}(T);const C=E.forwardRef(({progress:t,buffer:e,reversed:r,className:a,...n},s)=>{const[i,c]=O(s),[d,A]=v.useState(),I=L(a,"mdc-linear-progress",{"mdc-linear-progress--indeterminate":t===void 0,"mdc-linear-progress--reversed":r});return w(()=>{i&&A(new U(i))},[i]),v.useEffect(()=>{e!==void 0&&d&&(d.buffer=e)},[e,d]),v.useEffect(()=>{d&&(t!==void 0&&(d.progress=t),d.determinate=t!==void 0)},[t,d]),g(y,{className:I,progress:t,dir:r?"rtl":void 0,max:1,ref:c,...n,children:[g("div",{className:"mdc-linear-progress__buffer",children:[o("div",{className:"mdc-linear-progress__buffer-bar"}),o("div",{className:"mdc-linear-progress__buffer-dots"})]}),o("div",{className:"mdc-linear-progress__bar mdc-linear-progress__primary-bar",children:o("span",{className:"mdc-linear-progress__bar-inner"})}),o("div",{className:"mdc-linear-progress__bar mdc-linear-progress__secondary-bar",children:o("span",{className:"mdc-linear-progress__bar-inner"})})]})});try{C.displayName="BaseProgressBar",C.__docgenInfo={description:"",displayName:"BaseProgressBar",props:{buffer:{defaultValue:null,description:"A buffered value between `0` and `1`.",name:"buffer",required:!1,type:{name:"number"}},reversed:{defaultValue:null,description:"Indicates that the progress bar should grow right to left.",name:"reversed",required:!1,type:{name:"boolean"}},progress:{defaultValue:null,description:"Indicates how much of the task has been completed.",name:"progress",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"Describes how much work is required to complete the progress. If defined,\nit must be greater than `0` and be a valid floating point number.\nThe default is `1`.",name:"max",required:!1,type:{name:"number"}}}}}catch{}const p={cy:24,cx:24,r:18},f=113.097,h={"aria-hidden":!0,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},N=E.forwardRef(({size:t="2rem",strokeWidth:e=4,progress:r,className:a,...n},s)=>{const i=r!==void 0,c=L(a,"mdc-circular-progress",{"mdc-circular-progress--indeterminate":!i});return o(y,{className:c,progress:r,max:1,style:{width:t,height:t},ref:s,...n,children:i?o("div",{className:"mdc-circular-progress__determinate-container",children:g("svg",{className:"mdc-circular-progress__determinate-circle-graphic",...h,children:[o("circle",{className:"mdc-circular-progress__determinate-track",...p,strokeWidth:e}),o("circle",{className:"mdc-circular-progress__determinate-circle",...p,strokeDasharray:f,strokeDashoffset:r?(1-r)*(2*Math.PI*Number(p.r)):f,strokeWidth:e})]})}):o("div",{className:"mdc-circular-progress__indeterminate-container",children:g("div",{className:"mdc-circular-progress__spinner-layer",children:[o("div",{className:"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left",children:o("svg",{className:"mdc-circular-progress__indeterminate-circle-graphic",...h,children:o("circle",{...p,strokeDasharray:f,strokeDashoffset:f/2,strokeWidth:e})})}),o("div",{className:"mdc-circular-progress__gap-patch",children:o("svg",{className:"mdc-circular-progress__indeterminate-circle-graphic",...h,children:o("circle",{...p,strokeDasharray:f,strokeDashoffset:f/2,strokeWidth:e*.8})})}),o("div",{className:"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right",children:o("svg",{className:"mdc-circular-progress__indeterminate-circle-graphic",...h,children:o("circle",{...p,strokeDasharray:f,strokeDashoffset:f/2,strokeWidth:e})})})]})})})});try{N.displayName="BaseProgressSpinner",N.__docgenInfo={description:"",displayName:"BaseProgressSpinner",props:{size:{defaultValue:{value:"2rem"},description:'The height and width of the spinner. Numbers will be treated as pixels.\nStrings must include their unit (e.g., `"2rem"`).',name:"size",required:!1,type:{name:"string | number"}},strokeWidth:{defaultValue:{value:"4"},description:"The width of the spinner circle. Default is `4`.",name:"strokeWidth",required:!1,type:{name:"number"}},progress:{defaultValue:null,description:"Indicates how much of the task has been completed.",name:"progress",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"Describes how much work is required to complete the progress. If defined,\nit must be greater than `0` and be a valid floating point number.\nThe default is `1`.",name:"max",required:!1,type:{name:"number"}}}}}catch{}export{N as B,C as a};
//# sourceMappingURL=BaseProgressSpinner-bfdd54c0.js.map
