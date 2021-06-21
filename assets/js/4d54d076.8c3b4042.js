(self.webpackChunkgearbox_website=self.webpackChunkgearbox_website||[]).push([[80],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return b}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(r),b=n,f=m["".concat(c,".").concat(b)]||m[b]||p[b]||a;return r?o.createElement(f,i(i({ref:t},s),{},{components:r})):o.createElement(f,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3250:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i={id:"contributing",title:"Contributing",sidebar_label:"Contributing"},u=void 0,c={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"Newcomers are always welcome to contribute to gearbox, and we are happy to offer help to newcomers.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/gogearbox/website/edit/master/docs/contributing.md",version:"current",frontMatter:{id:"contributing",title:"Contributing",sidebar_label:"Contributing"},sidebar:"docs",previous:{title:"GitHub workflow",permalink:"/docs/github-workflow"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},l=[{value:"There are many ways to contribute:",id:"there-are-many-ways-to-contribute",children:[]},{value:"Code Contribution",id:"code-contribution",children:[]},{value:"Code of Conduct",id:"code-of-conduct",children:[]},{value:"Useful links for collaborators/mantainers",id:"useful-links-for-collaboratorsmantainers",children:[]}],s={toc:l};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Newcomers")," are always welcome to contribute to gearbox, and we are happy to offer help to newcomers.\nBefore making changes, please first discuss the change you want to make through ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/CT8my4R"},"Discord"),", or email us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:gearbox@googlegroups.com"},"gearbox@googlegroups.com")),(0,a.kt)("h3",{id:"there-are-many-ways-to-contribute"},"There are many ways to contribute:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gogearbox/gearbox/issues"},"Suggest new features to be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gogearbox/gearbox/issues"},"Report issues")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gogearbox/gearbox/issues"},"Fixing issues")),(0,a.kt)("li",{parentName:"ul"},"Improve Documentation")),(0,a.kt)("h3",{id:"code-contribution"},"Code Contribution"),(0,a.kt)("p",null,"If you wish to work on an issue, please comment on the issue that you want to work on it. This is to prevent duplicated efforts on the same issue."),(0,a.kt)("p",null,"Contributions to gearbox \u2699\ufe0f should be made in the form of ",(0,a.kt)("strong",{parentName:"p"},"pull requests")," (PR) to the ",(0,a.kt)("strong",{parentName:"p"},"master")," branch."),(0,a.kt)("p",null,"Each pull request will be ",(0,a.kt)("strong",{parentName:"p"},"reviewed by someone with permission to land patches"),"."),(0,a.kt)("p",null,"After reviewing the patch, it could be merged to the ",(0,a.kt)("strong",{parentName:"p"},"master")," branch or given feedback for changes. (Seems not clear to you! Don't worry, we have added tutorials for ",(0,a.kt)("a",{parentName:"p",href:"./GitHub-workflow"},"Github Workflow")),(0,a.kt)("h3",{id:"code-of-conduct"},"Code of Conduct"),(0,a.kt)("p",null,"We expect everyone to follow the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gogearbox/gearbox/blob/master/CODE_OF_CONDUCT.md"},"Code Of Conduct")),(0,a.kt)("h3",{id:"useful-links-for-collaboratorsmantainers"},"Useful links for collaborators/mantainers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://help.github.com/articles/checking-out-pull-requests-locally/"},"Checking out branches locally"))))}p.isMDXComponent=!0}}]);