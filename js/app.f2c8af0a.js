(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],u=0,h=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/tabathadelane.github.io/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"18bc":function(t,e,a){t.exports=a.p+"img/habitat-demo.5602dfe2.gif"},"19bb":function(t,e,a){t.exports=a.p+"img/trversal-demo.824f5878.gif"},2910:function(t,e,a){"use strict";var o=a("d4c3"),n=a.n(o);n.a},"2b75":function(t,e,a){t.exports=a.p+"img/headshot-crop.c3d2f08a.jpg"},"2bdc":function(t,e,a){"use strict";var o=a("417e"),n=a.n(o);n.a},"3b81":function(t,e,a){},"417e":function(t,e,a){},"4a40":function(t,e,a){"use strict";var o=a("8e7a"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Content")],1)},r=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"center-header",attrs:{fluid:"md"}},[o("b-row",{attrs:{"align-h":"around","align-v":"center"}},[o("b-col",{attrs:{sm:"4"}},[o("b-img",{staticClass:"headshot center",attrs:{fluid:"",rounded:"circle",alt:"Headshot of Tabatha",src:a("2b75")}})],1),o("b-col",{attrs:{sm:"8"}},[o("h1",[t._v("Tabatha Delane Young")]),o("h2",[t._v("Full Stack Developer")]),o("h4",[t._v("Portland Metro, Oregon")]),o("h1",[o("font-awesome-icon",{attrs:{icon:t.icoffee}}),o("font-awesome-icon",{attrs:{icon:t.itree}}),o("font-awesome-icon",{attrs:{icon:t.idice}}),o("font-awesome-icon",{attrs:{icon:t.icat}}),o("font-awesome-icon",{attrs:{icon:t.ilaptop}})],1)])],1)],1)},s=[],c=a("ad3d"),l=a("c074"),d={name:"MyComponent",data:function(){return{icoffee:l["b"],itree:l["g"],idice:l["c"],icat:l["a"],ilaptop:l["f"]}},components:{FontAwesomeIcon:c["a"]}},u=d,h=(a("4a40"),a("2877")),m=Object(h["a"])(u,i,s,!1,null,"6de4f67c",null),b=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"sm",type:"dark",variant:"primary"}},[a("b-navbar-brand",[t._v("Learn More:")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse",right:""}}),a("b-collapse",{attrs:{"is-nav":"",id:"nav-collapse"}},[a("b-navbar-nav",[a("b-nav-item",[a("router-link",{attrs:{to:"/About"}},[t._v("About")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/Contact"}},[t._v("Contact")])],1)],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:"Projects",right:""}},[a("b-dropdown-item",[a("router-link",{attrs:{to:"/Trversal"}},[t._v("Trversal")])],1),a("b-dropdown-item",[a("router-link",{attrs:{to:"/Critical"}},[t._v("Critical Reactions")])],1),a("b-dropdown-item",[a("router-link",{attrs:{to:"/Habitat"}},[t._v("Habit@")])],1)],1)],1)],1)],1),a("router-view")],1)},p=[],v=(a("2910"),{}),g=Object(h["a"])(v,f,p,!1,null,"2c387913",null),w=g.exports,y={name:"App",components:{Header:b,Content:w}},_=y,k=(a("5c0b"),Object(h["a"])(_,n,r,!1,null,null,null)),C=k.exports,T=a("8c4f"),I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("h1",[t._v("About me")])]),a("p",[t._v(" TLDR; Whether it's in the kitchen or an IDE, I am fueled by my passion for learning and creating. I bring with me an instinctual proficiency with Communication and Teamwork from food service and management. I am always hungry to learn. CURRENTLY LOOKING FOR WORK.")]),a("hr"),a("p",[t._v("I am a bootcamp graduate from PDX Code Guild in Portland, Or. My background is in the service industry working with food and customers and managing teams. I love learning new things and working into a lead position where I can use my experience to teach others and help them grow. I started working at Subway out of high school and couldn't cook anything that didn't come out of a box with instructions. Now I feel comfortable following any recipe or multitasking an entire dinner spread. I've come such a long way, but I never saw myself running my own resturant. I have learned so much from this industry and will forever be grateful, but it is time for me to move on and apply my growth to another field. The skills I love using at work include problem solving, organization, time management, and collaborating. I enjoy being able to layout a plan so when things go off the rails (because they will somehow), it is easy to revaluate and get back on track. I am inspired by that feeling of overcoming obstacles with my teammates. ")]),a("br"),a("p",[t._v(" I have always dreamed of working in tech, but I grew up in a rural part of the country where I didn't actually know anyone in that field. I assumed that to become a professional programmer you had to be a super math genius. I finally made it to city living and discovered coding bootcamps. This made continuing my education accessible! I worked hard for a couple of years and saved for the tuition, and now I am working harder to network in an effort to learn more about the industry. I am also doing my best to self teach on top of the foundation of technology I learned in the bootcamp. Trying to navigate that bootcamp limbo of finding the first job that will open up my future career has been daunting and discouraging, but it's only made me think more creatively about networking and ways to improving my portfolio.")])])}],S={title:"Tabatha Young"},E=S,O=Object(h["a"])(E,I,j,!1,null,null,null),x=O.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"project",attrs:{fluid:"md","aligh-h":"around"}},[o("b-row",[o("b-col",{attrs:{cols:"","order-md":"1"}},[o("div",{staticClass:"center-col"},[o("h1",[t._v("Trversal")])])])],1),o("b-row",[o("b-col",{attrs:{md:"8","order-md":"3"}},[o("div",{staticClass:"center-col"},[o("b-img",{staticClass:"headshot",attrs:{fluid:"",alt:"Preview of Trversal",src:a("19bb")}})],1)]),o("b-col",{attrs:{md:"4","order-md":"2"}},[o("div",{staticClass:"center-col"},[o("h4",[t._v("An itenerary building web application.")]),o("br"),o("p",[t._v("This app dynamically interacts with Google Maps to calculate the most up to date travel times between your selected locations. Start a trip and add the points of interest you would like to see each day. The app will keep track of the time needed throughout the day to travel between each place so you can realistically see how much you can fit into your trip and stay on schedule!")]),o("br"),o("p",[t._v("This is my capstone from PDX Code Guild. It is very much in an MVP state. I have listed the future plans for this project on the Github README linked below.")])])])],1),o("b-row",[o("b-col",{attrs:{md:"8","order-md":"5"}},[o("div",{staticClass:"center-col"},[o("div",[o("h3",[t._v("Tech Stack:")])]),o("div",[t._v(" Python, Django, DjangoRest, Javascript, Vue, CSS/HTML")])])]),o("b-col",{attrs:{md:"4","order-md":"4"}},[o("div",{staticClass:"center-col"},[o("a",{attrs:{href:"https://github.com/tabathadelane/trversal"}},[t._v("View the Source Code on Github")])])])],1)],1)},A=[],P={title:"Tabatha's Trversal App"},D=P,R=(a("2bdc"),Object(h["a"])(D,M,A,!1,null,"518c1ac0",null)),H=R.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"project",attrs:{fluid:"md","aligh-h":"around"}},[o("b-row",[o("b-col",{attrs:{cols:"","order-md":"1"}},[o("div",{staticClass:"center-col"},[o("h1",[t._v("Critical Reactions")])])])],1),o("b-row",[o("b-col",{attrs:{md:"8","order-md":"3"}},[o("div",{staticClass:"center-col"},[o("b-img",{staticClass:"headshot",attrs:{fluid:"",alt:"Preview of Trversal",src:a("5fd0")}})],1)]),o("b-col",{attrs:{md:"4","order-md":"2"}},[o("div",{staticClass:"center-col"},[o("h4",[t._v("Designed to be like a marketing site for my D&D Party.")]),o("br"),o("p",[t._v("The inspiration is somewhere close to what a Real Estate or Insurance agent may use to sell customers on their service. Get to know us, read about our previous trials, customer testimonials, and more! The internet is the next big magical phenomenon to come to Faerun!")]),o("br"),o("p",[t._v("I plan to add a blog section for my character (A bard,the story teller of the party.) to share her perspective while on the road. It is very much in an MVP state. I want to update the styling and deploy it to the world. There is much more info about this project and why I made the decisions I did in the Github README linked below.")])])])],1),o("b-row",[o("b-col",{attrs:{md:"8","order-md":"5"}},[o("div",{staticClass:"center-col"},[o("div",[o("h3",[t._v("Tech Stack:")])]),o("div",[t._v("Django, DjangoRest, Javascript, Vue, CSS/HTML, Sass, Bootstrap")])])]),o("b-col",{attrs:{md:"4","order-md":"4"}},[o("div",{staticClass:"center-col"},[o("a",{attrs:{href:"https://github.com/tabathadelane/critical-reactions"}},[t._v("View the Source Code on Github")])])])],1)],1)},$=[],G={title:"Tabatha's CritcalReactions App"},N=G,V=(a("9b61"),Object(h["a"])(N,L,$,!1,null,"1ac45638",null)),W=V.exports,J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"project",attrs:{fluid:"md","aligh-h":"around"}},[o("b-row",[o("b-col",{attrs:{cols:"","order-md":"1"}},[o("div",{staticClass:"center-col"},[o("h1",[t._v("Habit@")])])])],1),o("b-row",[o("b-col",{attrs:{md:"8","order-md":"3"}},[o("div",{staticClass:"center-col"},[o("b-img",{staticClass:"headshot",attrs:{fluid:"",alt:"Preview of Trversal",src:a("18bc")}})],1)]),o("b-col",{attrs:{md:"4","order-md":"2"}},[o("div",{staticClass:"center-col"},[o("h4",[t._v("A habit tracking application")]),o("p",[t._v("This project was built during a 1-day AWS Hackathon on a team of 5. I contributed by writing the python Lambda functions and assisting with CSS styling and logo design. ")]),o("br"),o("p",[t._v("“Habitat” was created with the purpose to help users start good habits by keeping streaks. The goal was to use AWS to keep track of the streaks. If a user entered that they did their task that day, the Lambda would update the streak count in the database. Cloudwatch Events checked the time twice each day. In the evening, if the user hadn’t completed their task, it would trigger an SNS warning. At midnight, if they hadn't done it, it would erase the streak! ")])])])],1),o("b-row",[o("b-col",{attrs:{md:"8","order-md":"5"}},[o("div",{staticClass:"center-col"},[o("div",[o("h3",[t._v("Tech Stack:")])]),o("div",[t._v("Python, AWS Lambda, DynamoDB, HTML, CSS, Javascript, React.js")])])]),o("b-col",{attrs:{md:"4","order-md":"4"}},[o("div",{staticClass:"center-col"},[o("a",{attrs:{href:"https://github.com/tobyfee/habitat"}},[t._v("View the Source Code on Github")])])])],1)],1)},F=[],K={title:"Tabatha's Habit@ App"},Y=K,B=(a("e0f1"),Object(h["a"])(Y,J,F,!1,null,"09f18672",null)),U=B.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("h3",[a("font-awesome-icon",{attrs:{icon:t.iresume}}),t._m(1)],1),a("h3",[a("font-awesome-icon",{attrs:{icon:t.ilinkedin}}),a("a",{attrs:{href:"https://linkedin.com/in/tabathadelaneyoung",target:"_blank"}},[t._v("LINKEDIN")])],1),a("h3",[a("font-awesome-icon",{attrs:{icon:t.igithub}}),a("a",{attrs:{href:"https://github.com/tabathadelane",target:"_blank"}},[t._v("GITHUB")])],1),a("h3",[a("font-awesome-icon",{attrs:{icon:t.iemail}}),a("a",{attrs:{href:"mailto:tabathadelane@gmail.com",target:"_blank"}},[t._v("EMAIL")])],1),a("h3",[a("font-awesome-icon",{attrs:{icon:t.itwitter}}),a("a",{attrs:{href:"https://twitter.com/tabathadelane",target:"_blank"}},[t._v("TWITTER")])],1)])},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Contact Me")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://drive.google.com/file/d/1VkyhW-Nezg8MK9KLRDWN6SJMElYsSwsQ/view?usp=sharing",target:"_blank"}},[a("i",{staticClass:"fas fa-sticky-note"}),t._v("RESUME")])}],Q=a("f2d1"),q={name:"MyComponent",title:"Contact Tabatha",data:function(){return{iresume:l["e"],iemail:l["d"],ilinkedin:Q["b"],igithub:Q["a"],itwitter:Q["c"]}},components:{FontAwesomeIcon:c["a"]}},Z=q,tt=(a("a1c7"),Object(h["a"])(Z,z,X,!1,null,"3946d412",null)),et=tt.exports;o["default"].use(T["a"]);var at=new T["a"]({routes:[{path:"/",name:"Tabatha Young",component:x},{path:"/Trversal",name:"About Trversal",component:H},{path:"/Critical",name:"About Critical Reactions",component:W},{path:"/Habitat",name:"About Habit@",component:U},{path:"/Contact",name:"Contact Me",component:et},{path:"*",redirect:"/"}]}),ot=a("5f5b"),nt=a("b1e0");function rt(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}var it={created:function(){var t=rt(this);t&&(document.title=t)}};a("f9e3"),a("2dd8");o["default"].use(ot["a"]),o["default"].use(nt["a"]),o["default"].config.productionTip=!1,o["default"].mixin(it),new o["default"]({router:at,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var o=a("9c0c"),n=a.n(o);n.a},"5fd0":function(t,e,a){t.exports=a.p+"img/crit-demo.c85fefee.gif"},"6e4a":function(t,e,a){},"8e7a":function(t,e,a){},"9b61":function(t,e,a){"use strict";var o=a("6e4a"),n=a.n(o);n.a},"9c0c":function(t,e,a){},a1c7:function(t,e,a){"use strict";var o=a("3b81"),n=a.n(o);n.a},d4c3:function(t,e,a){},e048:function(t,e,a){},e0f1:function(t,e,a){"use strict";var o=a("e048"),n=a.n(o);n.a}});
//# sourceMappingURL=app.f2c8af0a.js.map