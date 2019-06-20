(function(e){function t(t){for(var o,i,l=t[0],s=t[1],c=t[2],u=0,p=[];u<l.length;u++)i=l[u],r[i]&&p.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("picker")],1)},a=[],i=n("5fca"),l={name:"app",components:{picker:i["default"]}},s=l,c=(n("5c0b"),n("2877")),f=Object(c["a"])(s,r,a,!1,null,null,null),u=f.exports,p=n("8c4f");o["a"].use(p["a"]);var d=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"picker",component:function(){return Promise.resolve().then(n.bind(null,"5fca"))}}]}),y=n("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:d,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},"5fca":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"picker"},[n("div",{staticClass:"picker__section"},[n("div",{staticClass:"picker__instructions"},[e._v("Enter Name or Text")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"search",placeholder:"Name or Text Here"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),n("div",{staticClass:"picker__section"},[n("div",{staticClass:"picker__instructions"},[e._v("Choose a font")]),n("div",{staticClass:"font-wrapper"},e._l(e.fonts,function(t){return n("div",{key:t.name,staticClass:"font"},[n("p",[e._v(e._s(t.name))]),n("p",{style:{fontFamily:t.id,fontSize:e.fontSize+"px",color:e.activeColor}},[e._v(e._s(e.message))]),n("button",{on:{click:function(n){return e.handleFontClick(t.name)}}},[e._v("Pick Font")])])}),0)])])},r=[],a=(n("ac4d"),n("8a81"),n("ac6a"),{name:"picker",data:function(){return{activeColor:"black",fontSize:30,fonts:[{type:"otf",id:"amastery-script",name:"Swirly"},{type:"otf",name:"Baby Block",id:"arctic"},{type:"otf",name:"Elegant",id:"argentinian-nights-by-kestrel-montes"},{type:"otf",name:"Swoon",id:"aurelia"},{type:"otf",name:"Sweet",id:"bekafonte"},{type:"otf",name:"Fancy Fun",id:"bella-script"},{type:"otf",name:"Bold Fun",id:"bonkers"},{type:"otf",name:"Airy",id:"crystal-sky"},{type:"otf",name:"Majestic",id:"enyssala"},{type:"otf",name:"Tasteful",id:"frutilla-script"},{type:"ttf",name:"Sophisticated",id:"kasting-script"},{type:"otf",name:"Classy",id:"kenstein"},{type:"otf",name:"Cute",id:"king-basil-lite"},{type:"otf",name:"Lovely",id:"legacy"},{type:"ttf",name:"Lego",id:"legothick"},{type:"otf",name:"Wild",id:"lovestone-script"},{type:"ttf",name:"Posh",id:"madina-script-alt"},{type:"otf",name:"Merry",id:"magenta-script"},{type:"otf",name:"Notebook",id:"malina"},{type:"otf",name:"Bold",id:"nexa-bold"},{type:"otf",name:"Trendy",id:"peyton-script"},{type:"otf",name:"Graceful",id:"philosophy-script"},{type:"otf",name:"Playful",id:"playlist-script"},{type:"ttf",name:"Distinguished",id:"questa-whitte"},{type:"otf",name:"Homemade",id:"road-crew-regular"},{type:"otf",name:"Fashion",id:"sakura-regular"},{type:"otf",name:"Chic",id:"shania"},{type:"otf",name:"Floral",id:"vanilla-daisy-pro"},{type:"otf",name:"Adventure",id:"venture"},{type:"ttf",name:"Disney",id:"walto-graph-42"},{type:"otf",name:"Charming",id:"wild-ones-personal-use"},{type:"otf",name:"Delicate",id:"wildflowers"},{type:"otf",name:"Noble",id:"wisdom-scrip"}],message:""}},methods:{handleColorClick:function(e){this.activeColor=e},handleFontClick:function(e){var t=document.getElementsByTagName("label"),n=!0,o=!1,r=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var l=a.value;if("Desired Font From Below*"===l.innerText){var s=l.parentElement,c=s.childNodes,f=!0,u=!1,p=void 0;try{for(var d,y=c[Symbol.iterator]();!(f=(d=y.next()).done);f=!0){var m=d.value,v=m.childNodes,h=!0,g=!1,b=void 0;try{for(var k,w=v[Symbol.iterator]();!(h=(k=w.next()).done);h=!0){var _=k.value;"INPUT"===_.nodeName&&(_.value=e)}}catch(C){g=!0,b=C}finally{try{h||null==w.return||w.return()}finally{if(g)throw b}}}}catch(C){u=!0,p=C}finally{try{f||null==y.return||y.return()}finally{if(u)throw p}}}}}catch(C){o=!0,r=C}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}}}}),i=a,l=n("2877"),s=Object(l["a"])(i,o,r,!1,null,null,null);t["default"]=s.exports}});
//# sourceMappingURL=app.d8784622.js.map