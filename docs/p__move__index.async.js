"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[939],{93786:function(G,S,r){r.r(S),r.d(S,{default:function(){return O}});var A=r(35290),x=r.n(A),y=r(411),M=r.n(y),T=r(46686),v=r.n(T),u=r(93236),n=r(62086),R=window,j=R.WebSocket,B=function(){return(0,n.jsxs)("div",{className:"room",children:[(0,n.jsx)(E,{}),(0,n.jsx)(W,{})]})};function E(){var f=(0,u.useState)([]),l=v()(f,2),o=l[0],a=l[1];return(0,u.useEffect)(function(){function s(){return t.apply(this,arguments)}function t(){return t=M()(x()().mark(function d(){var i,c;return x()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/getTCPConns");case 2:return i=e.sent,e.next=5,i.json();case 5:c=e.sent,a(c.addresses);case 7:case"end":return e.stop()}},d)})),t.apply(this,arguments)}s()},[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Addresses:"}),(0,n.jsx)("ul",{children:o.map(function(s,t){return(0,n.jsx)("li",{children:s},t)})})]})}var W=function(){var l=(0,u.useState)(null),o=v()(l,2),a=o[0],s=o[1],t=(0,u.useState)([]),d=v()(t,2),i=d[0],c=d[1];(0,u.useEffect)(function(){var e=new j("ws://120.77.79.24:38081/ws");s(e);var m=function(){console.log("WebSocket connection opened")},p=function(C){var w=JSON.parse(C.data);w&&c(w)},k=function g(C){console.log("WebSocket connection closed"),s(null),setTimeout(function(){e=new j("ws://"+location.host+"/ws"),s(e),e.onopen=m,e.onmessage=p,e.onclose=g},1e3)};return e.onopen=m,e.onmessage=p,e.onclose=k,function(){a&&a.close()}},[]);var h=function(m){a&&a.send(m)};return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Chat Room"}),(0,n.jsx)(b,{messages:i}),(0,n.jsx)(I,{onSend:h})]})},b=function(l){var o=l.messages,a=(0,u.useRef)(null);return(0,u.useEffect)(function(){var s;(s=a.current)===null||s===void 0||s.scrollIntoView({behavior:"smooth"})},[o]),(0,n.jsxs)("ul",{id:"wsBox",children:[o.map(function(s,t){return(0,n.jsx)("li",{children:s},t)}),(0,n.jsx)("li",{ref:a})]})},I=function(l){var o=l.onSend,a=(0,u.useState)(""),s=v()(a,2),t=s[0],d=s[1],i=function(e){e.preventDefault(),t.trim()&&(o(t),d(""))},c=function(e){d(e.target.value)};return(0,n.jsxs)("form",{onSubmit:i,children:[(0,n.jsx)("input",{type:"text",value:t,onChange:c}),(0,n.jsx)("button",{type:"submit",children:"Send"})]})},O=B}}]);
