"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[371],{94944:function(I,C,u){u.r(C),u.d(C,{default:function(){return $}});var A=u(92871),D=u(74958),c=u(93236),H=u(46686),S=u.n(H),p=u(92628),m={text:"text___azrFh",test:"test___Zjvag",bc:"bc___uHSe3",aircraft:"aircraft___rBVj5",cannon:"cannon___ypOte"},B={enemy:"enemy___ubH11"},l=u(62086),P=function(e){var t=(0,c.useState)(e.bottom),i=S()(t,2),n=i[0],a=i[1];return(0,c.useEffect)(function(){var d=setTimeout(function(){a(n-1),n<0&&e.div.parentNode&&(e.root.unmount(),e.div.parentNode.removeChild(e.div))},10);return function(){clearTimeout(d)}},[n]),(0,l.jsx)("div",{className:B.enemy,style:{bottom:n-50,left:e.left+50}})},T=function(e,t,i){var n=document.createElement("div"),a=document.getElementById(e);if(a){var d=(0,p.createRoot)(a==null?void 0:a.appendChild(n));d.render((0,l.jsx)(P,{left:t,bottom:i,root:d,div:n}))}},G=T,K=function(e){return+e.replace("px","")},_=function(e){var t=getComputedStyle(e);return[t.top,t.bottom,t.left,t.right].map(function(i){return K(i)})},L=function(e){return(0,l.jsx)("div",{id:e.id,className:m.text,children:e.say},e.id)},M=function(e){var t=(0,c.useState)(e.bottom),i=S()(t,2),n=i[0],a=i[1];return(0,c.useEffect)(function(){setTimeout(function(){a(n+1),n>600&&(e.root.unmount(),e.div.parentNode&&e.div.parentNode.removeChild(e.div))},10)},[n]),(0,l.jsx)("div",{className:m.cannon,style:{bottom:n+100,left:e.left+50}})},R=function(e,t,i){var n=document.createElement("div"),a=document.getElementById(e);if(a){var d=(0,p.createRoot)(a==null?void 0:a.appendChild(n));d.render((0,l.jsx)(M,{left:t,bottom:i,root:d,div:n}))}},h={},X=function(r){var e=r.text,t=new Date().toDateString(),i=(0,c.useState)(0),n=S()(i,2),a=n[0],d=n[1],f=document.getElementsByClassName(m.text);(0,c.useEffect)(function(){var s=setInterval(function(){var o=document.createElement("div"),v=document.getElementById(t),x=(0,p.createRoot)(v==null?void 0:v.appendChild(o));x.render((0,l.jsx)(L,{id:a,say:e[a%e.length]},a)),d(++a),setTimeout(function(){x.unmount(),o.parentNode&&o.parentNode.removeChild(o)},9980)},2500);return function(){clearInterval(s)}},[r]),(0,c.useEffect)(function(){var s=setInterval(function(){for(var v in h)h[v]&&k(v);f.length&&(f[0].style.color="red")},30),o=setInterval(function(){G(t,Math.floor(Math.random()*1500),700)},1e3);return function(){clearInterval(s),clearInterval(o)}},[]);var k=function(o){var v=document.getElementById(m.aircraft),x=document.getElementById(t);if(v&&x){var w=window.getComputedStyle(v),g=Number(w.left.replace("px","")),y=Number(w.bottom.replace("px","")),q=Number(window.getComputedStyle(x).width.replace("px","")),E=Number(window.getComputedStyle(x).height.replace("px","")),N=E/50,j=E/50;if(o=="ArrowRight"||o=="d"){if(g+N>=q-100)return;v.style.left=g+N+"px"}else if(o=="ArrowLeft"||o=="a"){if(g<=0)return;v.style.left=g-N+"px"}else if(o=="ArrowDown"||o=="s"){if(y<=0)return;v.style.bottom=y-j+"px"}else if(o=="ArrowUp"||o=="w"){if(y+j>=E-100)return;v.style.bottom=y+j+"px"}else o==" "&&R(t,g,y)}};return(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:m.bc,id:t,tabIndex:0,onKeyDown:function(o){h[o.key]=!0},onKeyUp:function(o){h[o.key]=!1},children:(0,l.jsx)("div",{id:m.aircraft,children:(0,l.jsx)("img",{src:u(1369),alt:""})})})})},U=function(e){return+e.replace("px","")},b=function(e){var t=getComputedStyle(e);return[t.top,t.bottom,t.left,t.right].map(function(i){return U(i)})},Z=function(){var r=document.getElementsByClassName(m.cannon),e=document.getElementsByClassName(B.enemy);if(e.length&&r.length)for(var t=0;t<r.length;t++)for(var i=b(r[t]),n=0;n<e.length;n++){var a=b(e[n]);if(i[1]>a[1]&&i[2]>a[2]){var d,f;console.log("~~~~~~~~~~~~~"),(d=r[t].parentNode)===null||d===void 0||d.removeChild(r[t]),(f=e[n].parentNode)===null||f===void 0||f.removeChild(e[n]);return}}},z=function(e){var t=e.name;return(0,l.jsxs)(A.Z,{children:[(0,l.jsx)(D.Z,{style:{width:"100px"},onClick:Z,children:"\u6D4B\u8BD5"}),(0,l.jsx)(X,{text:["first","second","third","tourth","tifth","sixth"]})]})},O=z,F=O;function J(r){return r.trim()}var V=u(36281),Q=u(20750),W={container:"container___ulS8A"},Y=function(){var e=(0,Q.useModel)("global"),t=e.name;return(0,l.jsx)(V._zJ,{ghost:!0,children:(0,l.jsx)("div",{className:W.container,children:(0,l.jsx)(F,{name:J(t)})})})},$=Y},1369:function(I,C,u){I.exports=u.p+"static/aircraft.da91faad.jpg"}}]);
