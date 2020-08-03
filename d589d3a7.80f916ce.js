(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(73)),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!0,title:"Getting Started",description:"Gearbox is a web framework for building micro services written in Go with a focus on high performance. It's built on fasthttp which is up to 10x faster than net/http.",source:"@site/docs/getting-started.md",permalink:"/docs/",editUrl:"https://github.com/gogearbox/website/edit/master/docs/getting-started.md",sidebar_label:"Getting Started",sidebar:"docs",next:{title:"Gearbox",permalink:"/docs/gearbox"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Hello World!",id:"hello-world",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Gearbox")," \u2699\ufe0f is a web framework for building micro services written in Go with a focus on high performance. It's built on fasthttp which is up to 10x faster than net/http."),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("p",null,"\u2699\ufe0f gearbox requires version ",Object(o.b)("inlineCode",{parentName:"p"},"1.11")," or higher of Go (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://golang.org/dl/"}),"Download Go"),")"),Object(o.b)("p",null,"Just use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them"}),"go get")," to download and install gearbox"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"go get -u github.com/gogearbox/gearbox\n")),Object(o.b)("h3",{id:"hello-world"},"Hello World!"),Object(o.b)("p",null,"You easily start your service in few lines!"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/gogearbox/gearbox"\n)\n\nfunc main() {\n    // Setup gearbox\n    g := gearbox.New()\n\n    // Define your handlers\n    g.Get("/", func(ctx gearbox.Context) {\n        ctx.SendString("Hello World!")\n    })\n\n    // Start service\n    g.Start(":3000")\n}\n')),Object(o.b)("p",null,"Start your service"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"go run service.go\n")),Object(o.b)("p",null,"Visit ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," to your Gearbox serivce in action! "))}s.isMDXComponent=!0},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(g,c(c({ref:t},b),{},{components:n})):a.a.createElement(g,c({ref:t},b))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);