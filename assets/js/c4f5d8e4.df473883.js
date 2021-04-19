(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),o=n.n(r),l=n(1),s=n.n(l),c=n(105),i=n.n(c),u=n(96),p=n(98),m=n(92),y=n(16),d=n(90),g=n(81),h=n.n(g),f=[];function b(e){var t=e.imageUrl,n=e.title,a=e.description,r=Object(d.a)(t);return o.a.createElement("div",{className:i()("col col--4",h.a.feature)},r&&o.a.createElement("div",{className:"text--center"},o.a.createElement("img",{className:h.a.featureImage,src:r,alt:n})),o.a.createElement("h3",null,n),o.a.createElement("p",null,a))}b.propTypes={imageUrl:s.a.string,title:s.a.string.isRequired,description:s.a.isRequired},t.default=function(){var e=Object(y.default)().siteConfig,t=void 0===e?{}:e;return o.a.createElement(u.a,{description:t.tagline},o.a.createElement("header",{className:i()("",h.a.heroBanner)},o.a.createElement("div",{className:i()("",h.a.info)},o.a.createElement("img",{className:h.a.featureImage,src:"img/gearbox.png",alt:"lgo"}),o.a.createElement("h1",{className:"hero__title"},t.title),o.a.createElement("p",{className:"hero__subtitle"},t.tagline),o.a.createElement(m.a,{className:i()("button button--solid button--primary button--lg",h.a.getStarted),to:Object(d.a)("docs/")},"Get Started")),o.a.createElement("div",{className:i()("",h.a.snippet)},o.a.createElement(p.a,null,'package main\n\nimport (\n  "github.com/gogearbox/gearbox"\n)\n\nfunc main() {\n  // Setup gearbox\n  g := gearbox.New()\n\n  // Define your handlers\n  g.Get("/", func(ctx gearbox.Context) {\n    ctx.SendString("Hello World!")\n  })\n\n  // Start service\n  g.Start(":3000")\n}\n'))),o.a.createElement("main",null,f&&f.length>0&&o.a.createElement("section",{className:h.a.features},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},f.map((function(e,t){return o.a.createElement(b,Object(a.a)({key:t},e))})))))))}},97:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var a=n(3),r=n(0),o=n.n(r),l=n(88),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(23).a,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=u({},g(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),i(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,s=[],c=[s];l>-1;){for(;(o=a[l]++)<r[l];){var i=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],i=d):(u=y(u,d.type),d.alias&&(u=y(u,d.alias)),i=d.content),"string"==typeof i){var g=i.split(p),h=g.length;s.push({types:u,content:g[0]});for(var f=1;f<h;f++)m(s),c.push(s=[]),s.push({types:u,content:g[f]})}else l++,t.push(u),n.push(i),a.push(0),r.push(i.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return m(s),c}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var f=n(97),b=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=n(95),j=n(86),E=function(){var e=Object(j.useThemeConfig)().prism,t=Object(k.a)().isDarkTheme,n=e.theme||v,a=e.darkTheme||n;return t?a:n},N=n(89),x=n(54),O=n.n(x),T=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},S=/(?:title=")(.*)(?:")/;function B(e){var t=e.children,n=e.className,s=e.metastring,i=Object(j.useThemeConfig)().prism,u=Object(r.useState)(!1),p=u[0],m=u[1],y=Object(r.useState)(!1),d=y[0],g=y[1];Object(r.useEffect)((function(){g(!0)}),[]);var f=Object(r.useRef)(null),v=[],k="",x=E(),B=Array.isArray(t)?t.join(""):t;if(s&&T.test(s)){var w=s.match(T)[1];v=b()(w).filter((function(e){return e>0}))}s&&S.test(s)&&(k=s.match(S)[1]);var P=n&&n.replace(/language-/,"");!P&&i.defaultLanguage&&(P=i.defaultLanguage);var L=B.replace(/\n$/,"");if(0===v.length&&void 0!==P){for(var D,A="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(P),_=B.replace(/\n$/,"").split("\n"),I=0;I<_.length;){var z=I+1,$=_[I].match(R);if(null!==$){switch($.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=z+",";break;case"highlight-start":D=z;break;case"highlight-end":A+=D+"-"+(z-1)+","}_.splice(I,1)}else I+=1}v=b()(A),L=_.join("\n")}var F=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(L),m(!0),setTimeout((function(){return m(!1)}),2e3)};return o.a.createElement(h,Object(a.a)({},c,{key:String(d),theme:x,code:L,language:P}),(function(e){var t,n=e.className,r=e.style,s=e.tokens,c=e.getLineProps,i=e.getTokenProps;return o.a.createElement("div",{className:O.a.codeBlockContainer},k&&o.a.createElement("div",{style:r,className:O.a.codeBlockTitle},k),o.a.createElement("div",{className:Object(l.a)(O.a.codeBlockContent,P)},o.a.createElement("div",{tabIndex:0,className:Object(l.a)(n,O.a.codeBlock,"thin-scrollbar",(t={},t[O.a.codeBlockWithTitle]=k,t))},o.a.createElement("div",{className:O.a.codeBlockLines,style:r},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},i({token:e,key:t})))})))})))),o.a.createElement("button",{ref:f,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(O.a.copyButton),onClick:F},p?o.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);