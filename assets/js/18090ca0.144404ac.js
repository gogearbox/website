(self.webpackChunkgearbox_website=self.webpackChunkgearbox_website||[]).push([[825],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(p,".").concat(g)]||d[g]||i[g]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9218:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l={id:"context",title:"Context",sidebar_label:"Context"},s={unversionedId:"context",id:"context",isDocsHomePage:!1,title:"Context",description:"Context (Ctx) holds the HTTP request, response and provide methods",source:"@site/docs/context.md",sourceDirName:".",slug:"/context",permalink:"/docs/context",editUrl:"https://github.com/gogearbox/website/edit/master/docs/context.md",version:"current",sidebar_label:"Context",frontMatter:{id:"context",title:"Context",sidebar_label:"Context"},sidebar:"docs",previous:{title:"Gearbox",permalink:"/docs/gearbox"},next:{title:"Cloning and Installing",permalink:"/docs/cloning-and-installing"}},p=[{value:"Context",id:"context",children:[]},{value:"Param",id:"param",children:[]},{value:"SendBytes",id:"sendbytes",children:[]},{value:"SendString",id:"sendstring",children:[]},{value:"SendJSON",id:"sendjson",children:[]},{value:"Status",id:"status",children:[]},{value:"Get",id:"get",children:[]},{value:"Set",id:"set",children:[]},{value:"Query",id:"query",children:[]},{value:"Body",id:"body",children:[]},{value:"ParseBody",id:"parsebody",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Context")," (Ctx) holds the HTTP request, response and provide methods"),(0,o.kt)("h3",{id:"context"},"Context"),(0,o.kt)("p",null,"Allows you to use all ",(0,o.kt)("strong",{parentName:"p"},"Fasthttp")," methods and properties\n(check ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc"},"Fasthttp Documentation")," for more information)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"Context() *fasthttp.RequestCtx\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    ctx.Context().Response.SetBodyString("Hello World!")\n})\n')),(0,o.kt)("h3",{id:"param"},"Param"),(0,o.kt)("p",null,"Returns value of path parameter specified by key in request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"Param(key string) string\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'gb.Get("/users/:user", func(ctx gearbox.Context) {\n    fmt.Printf("%s\\n", ctx.Param("user"))\n})\n')),(0,o.kt)("h3",{id:"sendbytes"},"SendBytes"),(0,o.kt)("p",null,"Sets the body of response for bytes type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"SendBytes(value []byte) Context\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    ctx.SendBytes([]byte("Hello World!"))\n})\n')),(0,o.kt)("h3",{id:"sendstring"},"SendString"),(0,o.kt)("p",null,"Sets the body of response for string type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"SendString(value string) Context\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    ctx.SendString("Hello World!")\n})\n')),(0,o.kt)("h3",{id:"sendjson"},"SendJSON"),(0,o.kt)("p",null,"Sets the body of response for any interface after converting any interface to json and sets content type header to application/json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"SendJSON(in interface{}) error\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Response struct {\n    Value string\n}\n\ngb.Get("/hello", func(ctx gearbox.Context) {\n    var r Response\n    ctx.SendJSON(&r)\n})\n')),(0,o.kt)("h3",{id:"status"},"Status"),(0,o.kt)("p",null,"Sets the HTTP status code of response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"Status(status int) Context\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    ctx.Status(gearbox.StatusUnauthorized)\n})\n')),(0,o.kt)("h3",{id:"get"},"Get"),(0,o.kt)("p",null,"Returns the HTTP request header specified by field key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"Get(key string) string\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    headerValue = ctx.Get("custom-header-request")\n    // ...\n})\n')),(0,o.kt)("h3",{id:"set"},"Set"),(0,o.kt)("p",null,"Sets the response's HTTP header field key to the specified key, value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"Set(key string, value string)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    ctx.Set("custom-header-response", "my-value")\n    // ...\n})\n')),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)("p",null,"Returns the query string parameter in the request url"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"Query(key string) string\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'gb.Get("/book", func(ctx gearbox.Context) {\n    name := ctx.Query("name")\n    // ...\n})\n')),(0,o.kt)("h3",{id:"body"},"Body"),(0,o.kt)("p",null,"Returns the raw body (string) submitted in a POST request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"Body() string\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'gb.Get("/hello", func(ctx gearbox.Context) {\n    requestBody := ctx.Body()\n    // ...\n})\n')),(0,o.kt)("h3",{id:"parsebody"},"ParseBody"),(0,o.kt)("p",null,"Parses request body into provided struct. Currently, Supports decoding theses types: application/json."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"ParseBody(out interface{}) error\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Request struct {\n    Value string\n}\n\ngb.Get("/hello", func(ctx gearbox.Context) {\n    var req Request\n    ctx.ParseBody(&req)\n\n    // ...\n})\n')))}c.isMDXComponent=!0}}]);