(this["webpackJsonplearn-redux"]=this["webpackJsonplearn-redux"]||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(5),c=n.n(a),i=(n(16),n(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(3),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+t.payload;case"DECREMENT":return e-1;default:return e}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!e;default:return e}},E=Object(u.b)({counter:l,isLogged:s}),d=Object(u.c)(E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(i.a,{store:d},r.a.createElement((function(){var e=Object(i.c)((function(e){return e.counter})),t=Object(i.c)((function(e){return e.isLogged})),n=Object(i.b)();return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Counter: ",e),r.a.createElement("button",{onClick:function(){return n({type:"INCREMENT",payload:5})}},"+"),r.a.createElement("button",{onClick:function(){return n({type:"DECREMENT"})}},"-"),t&&r.a.createElement("h3",null,"Valuable information I shouldn't see"))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.8c4b78a4.chunk.js.map