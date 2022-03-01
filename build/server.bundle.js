!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-dom")},function(e,t,n){"use strict";t.__esModule=!0;var r=i(n(0)),o=i(n(12)),u=i(n(14));i(n(16));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){return a(this,t),s(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement("div",{className:"container"},r.default.createElement(o.default,null),r.default.createElement("div",{className:"content"},this.props.children),r.default.createElement(u.default,null))},t}(r.default.Component);t.default=l},function(e,t,n){"use strict";(function(e){global.React=n(4),global.rematch=n(5);var t=n(6),r=global.React,o=n(7),u=n(8),i=n(9),a=t.dirname(e),s=u();s.use(i());var l=n(10);l.delimiter="?",s.set("view engine","ejs"),s.engine(".html",l.__express),s.use("/bundle",u.static(t.resolve(a,"../dist/bundle"))),s.use("/assets",u.static(t.resolve(a,"../dist/assets"))),s.use("/lib",u.static(t.resolve(a,"../dist/lib"))),s.set("views",t.resolve(a,"../dist")),s.get("/",(function(e,t){var u=n(11);t.render("Home.html",{title:"SSR Demo",keywords:"SSR react express",description:"This is a demo for SSR on IE",state:JSON.stringify({ssr:"success"}),component:o.renderToString(r.createElement(u,null))})})),s.get("/input",(function(e,t){var u=n(17);t.render("input.html",{title:"SSR Demo",keywords:"",description:"",state:JSON.stringify({}),component:o.renderToString(r.createElement(u,null))})})),s.get("/page1",(function(e,t){var u=n(18);t.render("Page1.html",{title:"SSR Demo",keywords:"",description:"",state:JSON.stringify({}),component:o.renderToString(r.createElement(u,null))})})),s.get("/test",(function(e,t){var u=n(19);t.render("TestAjax.html",{title:"SSR Demo",keywords:"",description:"",state:JSON.stringify({users:[{id:"1",name:"user 1"},{id:"2",name:"user 2"}]}),component:o.renderToString(r.createElement(u,null))})}));s.listen(8082,(function(){console.log("Dev server listening at http://localhost:8082/")}))}).call(this,"src\\server")},function(e,t){e.exports=require("anujs/dist/ReactIE")},function(e,t){e.exports=require("anujs/dist/Rematch")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("express-boom")},function(e,t){e.exports=require("ejs")},function(e,t,n){"use strict";var r=i(n(0)),o=i(n(1)),u=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={ssr:"",str:""},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.setState({ssr:window.__state__.ssr})},t.prototype.onClick=function(){this.setState({str:"you click me"})},t.prototype.render=function(){console.log("---------",this);var e=this.state,t=e.ssr;e.str;return console.log(t),r.default.createElement(u.default,null,r.default.createElement("h2",null,"Welcome Home page",r.default.createElement("div",null,t)))},t}(r.default.Component);if(e.exports=a,console.log("------"),"undefined"!=typeof window){var s=document.getElementById("app");o.default.render(r.default.createElement(a,null),s)}},function(e,t,n){"use strict";t.__esModule=!0;var r=o(n(0));o(n(13));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement("div",{className:"header"},r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("a",{href:"/"},"Home")),r.default.createElement("li",null,r.default.createElement("a",{href:"/page1"},"Page1")),r.default.createElement("li",null,r.default.createElement("a",{href:"/test"},"Test AJAX"))))},t}(r.default.Component);t.default=u},function(e,t){},function(e,t,n){"use strict";t.__esModule=!0;var r=o(n(0));o(n(15));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement("div",{className:"footer"},r.default.createElement("div",{className:"footer-content"},"footer"))},t}(r.default.Component);t.default=u},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r=u(n(0)),o=u(n(1));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={value:r.props.defaultValue||""},r.onChange=r.onChange.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.onChange=function(e){console.log("onChange",e.target.value),this.setState({value:e.target.value}),this.props.onChange&&this.props.onChange(e)},t.prototype.render=function(){return console.log(this.props),r.default.createElement("div",null,r.default.createElement("input",{value:this.state.value,onChange:this.onChange,class:"h-input"}),r.default.createElement("p",null,this.state.value))},t}(r.default.Component);if(e.exports=i,"undefined"!=typeof window){var a=document.getElementById("app");o.default.render(r.default.createElement(i,null),a)}},function(e,t,n){"use strict";var r=i(n(0)),o=i(n(1)),u=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={isYes:!1},r.toggle=r.toggle.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.toggle=function(e){console.log("toggle",e.target.value),this.setState({isYes:!this.state.isYes})},t.prototype.render=function(){return r.default.createElement(u.default,null,r.default.createElement("div",null,"Toggle Yes/No: ",this.state.isYes?"Yes":"No"),r.default.createElement("button",{onClick:this.toggle},"Toggle"))},t}(r.default.Component);if(e.exports=a,"undefined"!=typeof window){var s=document.getElementById("app");o.default.render(r.default.createElement(a,null),s)}},function(e,t,n){"use strict";var r=a(n(0)),o=a(n(1)),u=a(n(2)),i=a(n(20));a(n(22));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={users:[],isShow:!1},r.showUsers=r.showUsers.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.setState({users:window.__state__.users})},t.prototype.showUsers=function(){this.setState({isShow:!0})},t.prototype.render=function(){console.log("---------",this);var e=this.state,t=e.users,n=e.isShow;return r.default.createElement(u.default,null,r.default.createElement("button",{onClick:this.showUsers},"Show users"),r.default.createElement("div",{className:"userCardList"},n&&t.map((function(e){return r.default.createElement(i.default,{user:e})}))))},t}(r.default.Component);if(e.exports=s,"undefined"!=typeof window){var l=document.getElementById("app");o.default.render(r.default.createElement(s,null),l)}},function(e,t,n){"use strict";t.__esModule=!0;var r=o(n(0));o(n(21));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement("span",{className:"userCard"},r.default.createElement("div",{className:"title"},"ID: ",this.props.user.id),r.default.createElement("div",{className:"title"},this.props.user.name))},t}(r.default.Component);t.default=u},function(e,t){},function(e,t){}]);