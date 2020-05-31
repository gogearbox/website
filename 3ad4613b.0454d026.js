(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var i=r(2),a=r(7),n=(r(0),r(120)),s={id:"routing-architecture",title:"Routing Architecture",sidebar_label:"Routing Architecture"},o={id:"routing-architecture",title:"Routing Architecture",description:"In Gearbox, we rely on Radix Tree algorithm for matching requests with user registered handlers (routing) and it's split in two phases",source:"@site/docs/routing-architecture.md",permalink:"/docs/routing-architecture",editUrl:"https://github.com/gogearbox/website/edit/master/docs/routing-architecture.md",sidebar_label:"Routing Architecture",sidebar:"someSidebar",previous:{title:"Roadmap",permalink:"/docs/roadmap"}},c=[{value:"References",id:"references",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"In Gearbox")," \u2699\ufe0f, we rely on ",Object(n.b)("strong",{parentName:"p"},"Radix Tree algorithm")," for matching requests with user registered handlers (routing) and it's split in two phases"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Constructing Radix Tree"),Object(n.b)("li",{parentName:"ul"},"Matching requests with user registered handlers using tree (our optimization focus is here to serve ",Object(n.b)("strong",{parentName:"li"},"as fast as")," possible)")),Object(n.b)("br",null),Object(n.b)("p",{align:"center"},Object(n.b)("img",{src:"https://user-images.githubusercontent.com/16365652/82431454-ef5b6800-9a8e-11ea-9a2a-717b19f29ff3.png",height:"300px"})),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"When user starts service"),', gearbox constructs a tree of prefixes by splitting each registered path by slash "/".\nEach node in tree represents a URL part (Keyword) and contains all information needed for routing (e.g. is this node will be used for match all, available methods and user registered handlers, middlewares, etc.)'),Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Using maps is not efficient")," in general cases to match a keyword while matching route process, that's why we are using Ternary search tree to build our custom map that will be efficient in our case to help us in better lookup as "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"it doesn't have to allocate much memory like maps to avoid collisions"),Object(n.b)("li",{parentName:"ul"},"it avoids cost of complex hashing calculations")),Object(n.b)("h3",{id:"references"},"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Ternary_search_tree"}),"Ternary Search Tree")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Radix_tree"}),"Radix Tree"))))}u.isMDXComponent=!0}}]);