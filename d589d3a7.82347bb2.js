(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(85)),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!0,title:"Getting Started",description:"Gearbox is a web framework for building micro services written in Go with a focus on high performance. It's built on fasthttp which is up to 10x faster than net/http.",source:"@site/docs/getting-started.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/gogearbox/website/edit/master/docs/getting-started.md",version:"current",sidebar_label:"Getting Started",sidebar:"docs",next:{title:"Benchmarks",permalink:"/docs/benchmarks"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Hello World!",id:"hello-world",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Gearbox")," \u2699\ufe0f is a web framework for building micro services written in Go with a focus on high performance. It's built on fasthttp which is up to 10x faster than net/http."),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("p",null,"\u2699\ufe0f gearbox requires version ",Object(a.b)("inlineCode",{parentName:"p"},"1.11")," or higher of Go (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://golang.org/dl/"}),"Download Go"),")"),Object(a.b)("p",null,"Just use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them"}),"go get")," to download and install gearbox"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"go get -u github.com/gogearbox/gearbox\n")),Object(a.b)("h3",{id:"hello-world"},"Hello World!"),Object(a.b)("p",null,"You easily start your service in few lines!"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/gogearbox/gearbox"\n)\n\nfunc main() {\n    // Setup gearbox\n    g := gearbox.New()\n\n    // Define your handlers\n    g.Get("/", func(ctx gearbox.Context) {\n        ctx.SendString("Hello World!")\n    })\n\n    // Start service\n    g.Start(":3000")\n}\n')),Object(a.b)("p",null,"Start your service"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"go run service.go\n")),Object(a.b)("p",null,"Visit ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," to your Gearbox serivce in action!"))}u.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,g=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(g,c(c({ref:t},s),{},{components:n})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);