(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{136:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return He}));var r=n(3),a=n(0),o=n.n(a),i=n(129),c=n(136),l=n.n(c),s=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var p={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},d={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},m=["style","script"],b=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,h=/\n{2,}$/,g=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,v=/^ {2,}\n/,k=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,O=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,j=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,N=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,w=/^(?:\n *)*\n/,x=/\r\n?/g,B=/^\[\^([^\]]+)](:.*)\n/,S=/^\[\^([^\]]+)]/,T=/\f/g,C=/^\s*?\[(x|\s)\]/,E=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,I=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,z=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,A=/&([a-z]+);/g,M=/^<!--.*?-->/,$=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,D=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,L=/^\{.*\}$/,U=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,P=/^<([^ >]+@[^ >]+)>/,_=/^<([^ >]+:\/[^ >]+)>/,R=/ *\n+$/,H=/(?:^|\n)( *)$/,q=/-([a-z])?/gi,F=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,Z=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,V=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,G=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,J=/^\[([^\]]*)\] ?\[([^\]]*)\]/,K=/(\[|\])/g,X=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Y=/\t/g,Q=/^ *\| */,W=/(^ *\||\| *$)/g,ee=/ *$/,te=/^ *:-+: *$/,ne=/^ *:-+ *$/,re=/^ *-+: *$/,ae=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,oe=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ie=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ce=/^\\([^0-9A-Za-z\s])/,le=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,se=/(^\n+|\n+$|\s+$)/g,ue=/^([ \t]*)/,pe=/\\([^0-9A-Z\s])/gi,de=/^( *)((?:[*+-]|\d+\.)) +/,me=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,be=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,fe=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,he=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ge=[g,j,O,E,I,z,M,D,me,be,F,Z];function ye(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ve(e){return re.test(e)?"right":te.test(e)?"center":ne.test(e)?"left":null}function ke(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(ee,"")),o[o.length-1].push(e))})),o}function Oe(e,t,n){n.inline=!0;var r=ke(e[1],t,n),a=function(e){return e.replace(W,"").split("|").map(ve)}(e[2]),o=function(e,t,n){return e.trim().split("\n").map((function(e){return ke(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function je(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Ne(e){function t(r,a){for(var o=[],i="";r;)for(var c=0;c<n.length;){var l=n[c],s=e[l],u=s.match(r,a,i);if(u){var p=u[0];r=r.substring(p.length);var d=s.parse(u,t,a);null==d.type&&(d.type=l),o.push(d),i=p;break}c++}return o}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(x,"\n").replace(T,"").replace(Y,"    ")}(e),n)}}function we(e){return function(t,n){return n.inline?e.exec(t):null}}function xe(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Be(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Se(e){return function(t){return e.exec(t)}}function Te(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return e}function Ce(e){return e.replace(pe,"$1")}function Ee(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ie(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function ze(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Ae(e,t,n){return{content:Ee(t,e[1],n)}}function Me(){return{}}function $e(){return null}function De(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Le(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Ue(e,t){var n=Le(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":u(n))&&"render"in n?n:Le(t,e+".component",e):e}function Pe(e,t){function n(e,n){for(var r=Le(t.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),c=2;c<a;c++)o[c-2]=arguments[c];return i.apply(void 0,[Ue(e,t.overrides),s({},n,r,{className:De(n&&n.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===X.test(e));var a=Y(T(r?e:e.replace(se,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(o=a[0])&&(o=n("span",{key:"outer"},o)):o=n("span",{key:"outer"}),o}function a(e){var t=e.match(b);return t?t.reduce((function(e,t,n){var a=t.indexOf("=");if(-1!==a){var i=function(e){return-1!==e.indexOf("-")&&null===e.match($)&&(e=e.replace(q,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,a)).trim(),c=l()(t.slice(a+1).trim()),s=p[i]||i,u=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Te(t):(t.match(L)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(i,c);(z.test(u)||D.test(u))&&(e[s]=o.a.cloneElement(r(u.trim()),{key:n}))}else"style"!==t&&(e[p[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ye,t.namedCodesToUnicode=t.namedCodesToUnicode?s({},d,t.namedCodesToUnicode):d;var i=t.createElement||o.a.createElement;var c=[],u={},x={blockQuote:{match:Be(g),order:2,parse:function(e,t,n){return{content:t(e[0].replace(y,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Se(v),order:2,parse:Me,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:Be(k),order:2,parse:Me,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:Be(j),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Be(O),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:xe(N),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:Be(B),order:1,parse:function(e){return c.push({footnote:e[2],identifier:e[1]}),{}},react:$e},footnoteReference:{match:we(S),order:2,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,r){return n("a",{key:r.key,href:Te(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:we(C),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:Be(E),order:2,parse:function(e,n,r){return{content:Ee(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:Be(I),order:1,parse:function(e,t,n){return{content:Ee(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Se(M),order:2,parse:function(){return{}},react:$e},image:{match:xe(he),order:2,parse:function(e){return{alt:e[1],target:Ce(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Te(e.target)})}},link:{match:we(fe),order:4,parse:function(e,t,n){return{content:Ie(t,e[1],n),target:Ce(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Te(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:we(_),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:we(U),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:we(P),order:1,parse:function(e){var t=e[1],n=e[1];return f.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=H.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,be.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,i=e[0].replace(h,"\n").match(me),c=!1;return{items:i.map((function(e,r){var a=de.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(de,""),s=r===i.length-1,u=-1!==l.indexOf("\n\n")||s&&c;c=u;var p,d=n.inline,m=n._list;n._list=!0,u?(n.inline=!1,p=l.replace(R,"\n\n")):(n.inline=!0,p=l.replace(R,""));var b=t(p,n);return n.inline=d,n._list=m,b})),ordered:a,start:o}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:Be(w),order:4,parse:Me,react:function(){return"\n"}},paragraph:{match:Be(Z),order:4,parse:Ae,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:we(V),order:1,parse:function(e){return u[e[1]]={target:e[2],title:e[4]},{}},react:$e},refImage:{match:xe(G),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Te(u[e.ref].target),title:u[e.ref].title})}},refLink:{match:we(J),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(K,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return u[e.ref]?n("a",{key:r.key,href:Te(u[e.ref].target),title:u[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:Be(F),order:2,parse:Oe,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,o){return n("th",{key:o,style:je(e,o)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,o){return n("tr",{key:o},a.map((function(a,o){return n("td",{key:o,style:je(e,o)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?Q.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Se(le),order:5,parse:function(e){return{content:e[0].replace(A,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:xe(ae),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:xe(oe),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:xe(ce),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:xe(ie),order:4,parse:Ae,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(x.htmlBlock={match:Se(z),order:2,parse:function(e,t,n){var r=e[3].match(ue)[1],o=new RegExp("^"+r,"gm"),i=e[3].replace(o,""),c=function(e){return ge.some((function(t){return t.test(e)}))}(i)?ze:Ee,l=e[1].toLowerCase(),s=-1!==m.indexOf(l);return{attrs:a(e[2]),content:s?e[3]:c(t,i,n),noInnerParse:s,tag:s?l:e[1]}},react:function(e,t,r){return n(e.tag,s({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},x.htmlSelfClosing={match:Se(D),order:2,parse:function(e){return{attrs:a(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,s({},e.attrs,{key:r.key}))}});var T=Ne(x),Y=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,o=[],i=!1,c=0;c<n.length;c++){r.key=c;var l=t(n[c],r),s="string"==typeof l;s&&i?o[o.length-1]+=l:o.push(l),i=s}return r.key=a,o}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(x)),W=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return c.length&&W.props.children.push(n("footer",{key:"footer"},c.map((function(e){return n("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,Y(T(e.footnote,{inline:!0})))})))),W}function _e(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return o.a.cloneElement(Pe(t,n),r)}var Re=function(e){var t=e.name,n=e.required,r=e.type,a=e.description;return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(i.FieldInfo,{indicator:n?"required":void 0,label:t})),o.a.createElement("td",null,o.a.createElement(_e,null,a)),o.a.createElement("td",null,o.a.createElement("code",{className:"code-wrap"},r.name.replace(" | undefined",""))))},He=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,a=n.displayName,i=n.props,c=Object.keys(i).map((function(e){var t=i[e];return o.a.createElement(Re,Object(r.a)({key:t.name},t))}));return o.a.createElement("table",{"aria-label":"Props for "+a},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Type"))),o.a.createElement("tbody",null,c))}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(131)),i=n(129),c=n(137),l={title:"Button",description:"A button allows the user to perform an action"},s={unversionedId:"components/button",id:"components/button",isDocsHomePage:!1,title:"Button",description:"A button allows the user to perform an action",source:"@site/docs/components/button.mdx",slug:"/components/button",permalink:"/design-system/docs/components/button",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/button.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1614046370,sidebar:"components",previous:{title:"Components",permalink:"/design-system/docs/components"},next:{title:"Callout",permalink:"/design-system/docs/components/callout"}},u=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Usage",id:"usage",children:[{value:"Buttons vs. links",id:"buttons-vs-links",children:[]}]},{value:"React API",id:"react-api",children:[{value:"Button",id:"button",children:[]},{value:"IconButton",id:"iconbutton",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A button allows the user to perform an action.")),Object(o.b)("h2",{id:"anatomy"},"Anatomy"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Text")," - button text lets the user know what will happen when they click the button.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If a button's text is not displayed inside the button, it should be displayed in a related ",Object(o.b)("a",{parentName:"li",href:"tooltip"},"tooltip"),"."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Icon")," (",Object(o.b)("em",{parentName:"li"},"optional"),") - an icon can be added either before or after a button to emphasize the button text or character.")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A button is a standalone call-to-action with space or visual emphasis around it."),Object(o.b)("li",{parentName:"ul"},"A button has a meaningful label that communicates the action that users can take."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("kbd",null,"Space")," (keyup) and ",Object(o.b)("kbd",null,"Enter")," (keydown) activates the button.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Dos")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Do indicate the most important action on a page or region with a high-emphasis Primary button."),Object(o.b)("li",{parentName:"ul"},"Do indicate less important actions with medium-emphasis Secondary buttons or low-emphasis Tertiary buttons.")))),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don'ts")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Don't wrap text inside a button."),Object(o.b)("li",{parentName:"ul"},"Don't use labels that are too long. A button's label should be very concise."),Object(o.b)("li",{parentName:"ul"},"Don't choose default button colors that could be confused with disabled buttons."),Object(o.b)("li",{parentName:"ul"},'Don\'t create links that look like buttons. If dictation software users say "show buttons", the actions will not be listed. Keyboard users may try to press Space to activate, which will do nothing.')))),Object(o.b)("h3",{id:"buttons-vs-links"},"Buttons vs. links"),Object(o.b)("p",null,"Links are similar to buttons but the two are not interchangeable.\nThe following should help differentiate when a link may be a better fit for your control."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Consider using links if...")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"You are navigating to another place, either on the same page or on a different page."),Object(o.b)("li",{parentName:"ul"},"The action will change the URL."),Object(o.b)("li",{parentName:"ul"},'It would be useful to "Copy", "Open in a new tab", or "Bookmark" the destination URL.'),Object(o.b)("li",{parentName:"ul"},"The label is embedded in a sentence, and does not need margins or padding."),Object(o.b)("li",{parentName:"ul"},"The label conveys location, not an action (for example: a link that references a resource)."),Object(o.b)("li",{parentName:"ul"},"Only ",Object(o.b)("kbd",null,"Enter")," (keydown) should activate the link. Links always move focus when activated.")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use a button if the component is styled like a button. (See ",Object(o.b)("em",{parentName:"li"},"Don't create links that look like buttons"),", above)."),Object(o.b)("li",{parentName:"ul"},"If a button navigates the user to a new page or section, it might not meet the user's expectations."),Object(o.b)("li",{parentName:"ul"},"A button will not record the navigation in the user's browser history, so they will not be able to return to the previous location using their browser's back button."),Object(o.b)("li",{parentName:"ul"},"Consider the overall navigation of the site. Links help define the structure, architecture and hierarchy of the site","\u2014","buttons don't.")),Object(o.b)("h2",{id:"react-api"},"React API"),Object(o.b)("h3",{id:"button"},"Button"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Button } from '@wwnds/react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Button variant="solid">Solid</Button>\n')),Object(o.b)(c.a,{from:i.Button,mdxType:"PropsTable"}),Object(o.b)("h3",{id:"iconbutton"},"IconButton"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { IconButton } from '@wwnds/react';\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The IconButton is a simplified way to set an ",Object(o.b)("inlineCode",{parentName:"p"},"iconOnly")," button. These two are identical:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="ghost" iconOnly icon="info">More information</Button>\n<IconButton icon="info">More information</IconButton>\n')))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<IconButton icon="info">More information</IconButton>\n')),Object(o.b)(c.a,{from:i.IconButton,mdxType:"PropsTable"}))}d.isMDXComponent=!0}}]);