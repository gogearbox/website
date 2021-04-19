(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(87)),c={id:"context",title:"Context",sidebar_label:"Context"},l={unversionedId:"context",id:"context",isDocsHomePage:!1,title:"Context",description:"Context (Ctx) holds the HTTP request, response and provide methods",source:"@site/docs/context.md",sourceDirName:".",slug:"/context",permalink:"/docs/context",editUrl:"https://github.com/gogearbox/website/edit/master/docs/context.md",version:"current",sidebar_label:"Context",frontMatter:{id:"context",title:"Context",sidebar_label:"Context"},sidebar:"docs",previous:{title:"Gearbox",permalink:"/docs/gearbox"},next:{title:"Cloning and Installing",permalink:"/docs/cloning-and-installing"}},b=[{value:"Context",id:"context",children:[]},{value:"Param",id:"param",children:[]},{value:"SendBytes",id:"sendbytes",children:[]},{value:"SendString",id:"sendstring",children:[]},{value:"SendJSON",id:"sendjson",children:[]},{value:"Status",id:"status",children:[]},{value:"Get",id:"get",children:[]},{value:"Set",id:"set",children:[]},{value:"Query",id:"query",children:[]},{value:"Body",id:"body",children:[]},{value:"ParseBody",id:"parsebody",children:[]}],s={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Context")," (Ctx) holds the HTTP request, response and provide methods"),Object(o.b)("h3",{id:"context"},"Context"),Object(o.b)("p",null,"Allows you to use all ",Object(o.b)("strong",{parentName:"p"},"Fasthttp")," methods and properties\n(check ",Object(o.b)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc"},"Fasthttp Documentation")," for more information)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"Context() *fasthttp.RequestCtx\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    ctx.Context().Response.SetBodyString("Hello World!")\n})\n')),Object(o.b)("h3",{id:"param"},"Param"),Object(o.b)("p",null,"Returns value of path parameter specified by key in request"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"Param(key string) string\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'gb.Get("/users/:user", func(ctx gearbox.Context) {\n    fmt.Printf("%s\\n", ctx.Param("user"))\n})\n')),Object(o.b)("h3",{id:"sendbytes"},"SendBytes"),Object(o.b)("p",null,"Sets the body of response for bytes type"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"SendBytes(value []byte) Context\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    ctx.SendBytes([]byte("Hello World!"))\n})\n')),Object(o.b)("h3",{id:"sendstring"},"SendString"),Object(o.b)("p",null,"Sets the body of response for string type"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"SendString(value string) Context\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    ctx.SendString("Hello World!")\n})\n')),Object(o.b)("h3",{id:"sendjson"},"SendJSON"),Object(o.b)("p",null,"Sets the body of response for any interface after converting any interface to json and sets content type header to application/json"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"SendJSON(in interface{}) error\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'type Response struct {\n    Value string\n}\n\ngb.Get("/hello", func(ctx gearbox.Context) {\n    var r Response\n    ctx.SendJSON(&r)\n})\n')),Object(o.b)("h3",{id:"status"},"Status"),Object(o.b)("p",null,"Sets the HTTP status code of response"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"Status(status int) Context\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    ctx.Status(gearbox.StatusUnauthorized)\n})\n')),Object(o.b)("h3",{id:"get"},"Get"),Object(o.b)("p",null,"Returns the HTTP request header specified by field key"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"Get(key string) string\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    headerValue = ctx.Get("custom-header-request")\n    // ...\n})\n')),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"Sets the response's HTTP header field key to the specified key, value"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"Set(key string, value string)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    ctx.Set("custom-header-response", "my-value")\n    // ...\n})\n')),Object(o.b)("h3",{id:"query"},"Query"),Object(o.b)("p",null,"Returns the query string parameter in the request url"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"Query(key string) string\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'gb.Get("/book", func(ctx gearbox.Context) {\n    name := ctx.Query("name")\n    // ...\n})\n')),Object(o.b)("h3",{id:"body"},"Body"),Object(o.b)("p",null,"Returns the raw body (string) submitted in a POST request"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"Body() string\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    requestBody := ctx.Body()\n    // ...\n})\n')),Object(o.b)("h3",{id:"parsebody"},"ParseBody"),Object(o.b)("p",null,"Parses request body into provided struct. Currently, Supports decoding theses types: application/json."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"ParseBody(out interface{}) error\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'type Request struct {\n    Value string\n}\n\ngb.Get("/hello", func(ctx gearbox.Context) {\n    var req Request\n    ctx.ParseBody(&req)\n\n    // ...\n})\n')))}p.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||i[d]||o;return n?a.a.createElement(g,l(l({ref:t},s),{},{components:n})):a.a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);