(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{136:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return Fe}));var r=n(3),a=n(0),o=n.n(a),i=n(129),c=n(136),l=n.n(c),s=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var p={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},d={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},m=["style","script"],f=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,h=/mailto:/i,b=/\n{2,}$/,g=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,v=/^ {2,}\n/,O=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,k=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,N=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,j=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,w=/^(?:\n *)*\n/,x=/\r\n?/g,T=/^\[\^([^\]]+)](:.*)\n/,S=/^\[\^([^\]]+)]/,C=/\f/g,E=/^\s*?\[(x|\s)\]/,z=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,B=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,I=/&([a-z]+);/g,M=/^<!--.*?-->/,$=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,D=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,U=/^\{.*\}$/,_=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,L=/^<([^ >]+@[^ >]+)>/,P=/^<([^ >]+:\/[^ >]+)>/,R=/ *\n+$/,F=/(?:^|\n)( *)$/,q=/-([a-z])?/gi,H=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,V=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,Z=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,W=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,G=/^\[([^\]]*)\] ?\[([^\]]*)\]/,J=/(\[|\])/g,X=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,K=/\t/g,Q=/^ *\| */,Y=/(^ *\||\| *$)/g,ee=/ *$/,te=/^ *:-+: *$/,ne=/^ *:-+ *$/,re=/^ *-+: *$/,ae=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,oe=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ie=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ce=/^\\([^0-9A-Za-z\s])/,le=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,se=/(^\n+|\n+$|\s+$)/g,ue=/^([ \t]*)/,pe=/\\([^0-9A-Z\s])/gi,de=/^( *)((?:[*+-]|\d+\.)) +/,me=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,fe=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,he=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,be=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ge=[g,N,k,z,A,B,M,D,me,fe,H,V];function ye(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ve(e){return re.test(e)?"right":te.test(e)?"center":ne.test(e)?"left":null}function Oe(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(ee,"")),o[o.length-1].push(e))})),o}function ke(e,t,n){n.inline=!0;var r=Oe(e[1],t,n),a=function(e){return e.replace(Y,"").split("|").map(ve)}(e[2]),o=function(e,t,n){return e.trim().split("\n").map((function(e){return Oe(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function Ne(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function je(e){function t(r,a){for(var o=[],i="";r;)for(var c=0;c<n.length;){var l=n[c],s=e[l],u=s.match(r,a,i);if(u){var p=u[0];r=r.substring(p.length);var d=s.parse(u,t,a);null==d.type&&(d.type=l),o.push(d),i=p;break}c++}return o}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(x,"\n").replace(C,"").replace(K,"    ")}(e),n)}}function we(e){return function(t,n){return n.inline?e.exec(t):null}}function xe(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Te(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Se(e){return function(t){return e.exec(t)}}function Ce(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return e}function Ee(e){return e.replace(pe,"$1")}function ze(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ae(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Be(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Ie(e,t,n){return{content:ze(t,e[1],n)}}function Me(){return{}}function $e(){return null}function De(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Ue(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function _e(e,t){var n=Ue(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":u(n))&&"render"in n?n:Ue(t,e+".component",e):e}function Le(e,t){function n(e,n){for(var r=Ue(t.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),c=2;c<a;c++)o[c-2]=arguments[c];return i.apply(void 0,[_e(e,t.overrides),s({},n,r,{className:De(n&&n.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===X.test(e));var a=K(C(r?e:e.replace(se,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(o=a[0])&&(o=n("span",{key:"outer"},o)):o=n("span",{key:"outer"}),o}function a(e){var t=e.match(f);return t?t.reduce((function(e,t,n){var a=t.indexOf("=");if(-1!==a){var i=function(e){return-1!==e.indexOf("-")&&null===e.match($)&&(e=e.replace(q,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,a)).trim(),c=l()(t.slice(a+1).trim()),s=p[i]||i,u=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Ce(t):(t.match(U)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(i,c);(B.test(u)||D.test(u))&&(e[s]=o.a.cloneElement(r(u.trim()),{key:n}))}else"style"!==t&&(e[p[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ye,t.namedCodesToUnicode=t.namedCodesToUnicode?s({},d,t.namedCodesToUnicode):d;var i=t.createElement||o.a.createElement;var c=[],u={},x={blockQuote:{match:Te(g),order:2,parse:function(e,t,n){return{content:t(e[0].replace(y,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Se(v),order:2,parse:Me,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:Te(O),order:2,parse:Me,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:Te(N),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Te(k),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:xe(j),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:Te(T),order:1,parse:function(e){return c.push({footnote:e[2],identifier:e[1]}),{}},react:$e},footnoteReference:{match:we(S),order:2,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,r){return n("a",{key:r.key,href:Ce(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:we(E),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:Te(z),order:2,parse:function(e,n,r){return{content:ze(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:Te(A),order:1,parse:function(e,t,n){return{content:ze(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Se(M),order:2,parse:function(){return{}},react:$e},image:{match:xe(be),order:2,parse:function(e){return{alt:e[1],target:Ee(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Ce(e.target)})}},link:{match:we(he),order:4,parse:function(e,t,n){return{content:Ae(t,e[1],n),target:Ee(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Ce(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:we(P),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:we(_),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:we(L),order:1,parse:function(e){var t=e[1],n=e[1];return h.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=F.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,fe.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,i=e[0].replace(b,"\n").match(me),c=!1;return{items:i.map((function(e,r){var a=de.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(de,""),s=r===i.length-1,u=-1!==l.indexOf("\n\n")||s&&c;c=u;var p,d=n.inline,m=n._list;n._list=!0,u?(n.inline=!1,p=l.replace(R,"\n\n")):(n.inline=!0,p=l.replace(R,""));var f=t(p,n);return n.inline=d,n._list=m,f})),ordered:a,start:o}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:Te(w),order:4,parse:Me,react:function(){return"\n"}},paragraph:{match:Te(V),order:4,parse:Ie,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:we(Z),order:1,parse:function(e){return u[e[1]]={target:e[2],title:e[4]},{}},react:$e},refImage:{match:xe(W),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Ce(u[e.ref].target),title:u[e.ref].title})}},refLink:{match:we(G),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(J,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return u[e.ref]?n("a",{key:r.key,href:Ce(u[e.ref].target),title:u[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:Te(H),order:2,parse:ke,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,o){return n("th",{key:o,style:Ne(e,o)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,o){return n("tr",{key:o},a.map((function(a,o){return n("td",{key:o,style:Ne(e,o)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?Q.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Se(le),order:5,parse:function(e){return{content:e[0].replace(I,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:xe(ae),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:xe(oe),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:xe(ce),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:xe(ie),order:4,parse:Ie,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(x.htmlBlock={match:Se(B),order:2,parse:function(e,t,n){var r=e[3].match(ue)[1],o=new RegExp("^"+r,"gm"),i=e[3].replace(o,""),c=function(e){return ge.some((function(t){return t.test(e)}))}(i)?Be:ze,l=e[1].toLowerCase(),s=-1!==m.indexOf(l);return{attrs:a(e[2]),content:s?e[3]:c(t,i,n),noInnerParse:s,tag:s?l:e[1]}},react:function(e,t,r){return n(e.tag,s({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},x.htmlSelfClosing={match:Se(D),order:2,parse:function(e){return{attrs:a(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,s({},e.attrs,{key:r.key}))}});var C=je(x),K=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,o=[],i=!1,c=0;c<n.length;c++){r.key=c;var l=t(n[c],r),s="string"==typeof l;s&&i?o[o.length-1]+=l:o.push(l),i=s}return r.key=a,o}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(x)),Y=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return c.length&&Y.props.children.push(n("footer",{key:"footer"},c.map((function(e){return n("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,K(C(e.footnote,{inline:!0})))})))),Y}function Pe(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return o.a.cloneElement(Le(t,n),r)}var Re=function(e){var t=e.name,n=e.required,r=e.type,a=e.description;return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(i.FieldInfo,{indicator:n?"required":void 0,label:t})),o.a.createElement("td",null,o.a.createElement(Pe,null,a)),o.a.createElement("td",null,o.a.createElement("code",{className:"code-wrap"},r.name.replace(" | undefined",""))))},Fe=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,a=n.displayName,i=n.props,c=Object.keys(i).map((function(e){var t=i[e];return o.a.createElement(Re,Object(r.a)({key:t.name},t))}));return o.a.createElement("table",{"aria-label":"Props for "+a},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Type"))),o.a.createElement("tbody",null,c))}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(131)),i=n(129),c=n(137),l={title:"Tooltip"},s={unversionedId:"components/tooltip",id:"components/tooltip",isDocsHomePage:!1,title:"Tooltip",description:"A tooltip displays the name of or description for a related element on demand.",source:"@site/docs/components/tooltip.mdx",slug:"/components/tooltip",permalink:"/design-system/docs/components/tooltip",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/tooltip.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1615829669,sidebar:"components",previous:{title:"Text Field",permalink:"/design-system/docs/components/text-field"}},u=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Naming and describing",id:"naming-and-describing",children:[{value:"Naming",id:"naming",children:[]},{value:"Describing",id:"describing",children:[]}]},{value:"React API",id:"react-api",children:[{value:"Tooltip",id:"tooltip",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A tooltip displays the name of or description for a related element on demand.")),Object(o.b)("h2",{id:"anatomy"},"Anatomy"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Text")," - tooltip text names or describes a related element.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If the related element does not have a name, the tooltip text is used to name it."),Object(o.b)("li",{parentName:"ul"},"If the related element already has a name, the tooltip text is used to add description to the related element."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Arrow")," - a visual indicator that points to the related element.")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Use tooltips when there is not enough physical space to display the name or description of an interactive element.\nTooltips provide a mechanism for a simplifying the visual design of an interface.\nBut in exchange, users will have a harder time understanding and discovering the role of the tooltipped element, so use them sparingly and thoughtfully."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Dos")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Do use a tooltip to label an interactive element with no visible text such as a button with no text."),Object(o.b)("li",{parentName:"ul"},"Do use a tooltip to provide add additional descriptive information to a named element.")))),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don'ts")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Don't use a tooltip if the contents of the tooltip contain any meaningful markup such as italics, headings, or lists."),Object(o.b)("li",{parentName:"ul"},"Don't use a tooltip if the contents of the tooltip contain interactive elements, such as links, buttons, or form controls.")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Use a tooltip...")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"to name a control when there isn't enough space to display the label inline."),Object(o.b)("li",{parentName:"ul"},"to display an additional description about a control or element that already has an accessible name.")))),Object(o.b)("h2",{id:"naming-and-describing"},"Naming and describing"),Object(o.b)("p",null,"In the Norton design system, a tooltip can only be used to ",Object(o.b)("a",{parentName:"p",href:"https://w3c.github.io/aria-practices/#accessible_names"},"name"),"\nor ",Object(o.b)("a",{parentName:"p",href:"https://w3c.github.io/aria-practices/#accessible_descriptions"},"describe")," its related element.\nThis restriction ensures that the user experience of the tooltip is consistent for everyone."),Object(o.b)("h3",{id:"naming"},"Naming"),Object(o.b)("p",null,"A tooltip is said to be ",Object(o.b)("strong",{parentName:"p"},"naming")," its related element when it is acting as a label for that element.\nFor instance, an icon button's call to action could be captured as a tooltip to ensure that the purpose of the icon button is clear to everyone.\nIf the element contains textual content and you also want to use a tooltip to add additional context, the tooltip should be a describing tooltip."),Object(o.b)("div",{className:"admonition admonition-a11y"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Object(o.b)("path",{parentName:"svg",d:"M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}))),"Naming tooltips & screen reader experience")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When a tooltip ",Object(o.b)("strong",{parentName:"p"},"names")," its related element, screen readers will read the value of the tooltip when they encounter the related element, entirely ignoring any textual content inside the element.\nFor this reason, naming tooltips should only be used for elements that do not already contain textual content."))),Object(o.b)("h3",{id:"describing"},"Describing"),Object(o.b)("p",null,"A tooltip is said to be ",Object(o.b)("strong",{parentName:"p"},"describing")," its related element when it is acting as additional or supplemental information about an element that already has a name.\nFor instance, an ",Object(o.b)("inlineCode",{parentName:"p"},"<input>")," that already has an associated ",Object(o.b)("inlineCode",{parentName:"p"},"<label>")," could use a tooltip to display help text about the expected input format."),Object(o.b)("div",{className:"admonition admonition-a11y"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Object(o.b)("path",{parentName:"svg",d:"M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}))),"Describing tooltips & screen reader experience")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When a tooltip ",Object(o.b)("strong",{parentName:"p"},"describes")," its related element, many screen readers will read the name of the related element, pause briefly, and then read the description contained in the tooltip."))),Object(o.b)("h2",{id:"react-api"},"React API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Tooltip } from '@wwnds/react';\n")),Object(o.b)("h3",{id:"tooltip"},"Tooltip"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"function ButtonWithTooltip() {\n    const [button, setButton] = React.useState(null);\n    return (\n        <div style={{ margin: '2rem 0' }}>\n            <Button variant=\"solid\" ref={setButton}>I'm a reference element</Button>\n            <Tooltip\n                isOpen\n                placement=\"top\"\n                reference={button}\n            >\n                I'm a tooltip!\n            </Tooltip>\n        </div>\n    );\n}\n")),Object(o.b)(c.a,{from:i.Tooltip,mdxType:"PropsTable"}))}d.isMDXComponent=!0}}]);