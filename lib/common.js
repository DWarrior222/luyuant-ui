module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=2)}([function(e,t,o){var n=o(4),r=o(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(s=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(i).concat([r]).join("\n")}var s,a,u;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);n&&r[u[0]]||(o&&(u[2]?u[2]="".concat(o," and ").concat(u[2]):u[2]=o),t.push(u))}},t}},function(e,t,o){e.exports=o(6)},function(e,t,o){"use strict";var n=o(0);o.n(n).a},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),s=[];function a(e){for(var t=-1,o=0;o<s.length;o++)if(s[o].identifier===e){t=o;break}return t}function u(e,t){for(var o={},n=[],r=0;r<e.length;r++){var i=e[r],u=t.base?i[0]+t.base:i[0],c=o[u]||0,l="".concat(u," ").concat(c);o[u]=c+1;var d=a(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:l,updater:g(f,t),references:1}),n.push(l)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,m=0;function g(e,t){var o,n,r;if(t.singleton){var i=m++;o=h||(h=c(t)),n=f.bind(null,o,i,!1),r=f.bind(null,o,i,!0)}else o=c(t),n=p.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=a(o[n]);s[r].references--}for(var i=u(e,t),c=0;c<o.length;c++){var l=a(o[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}o=i}}}},function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n)()(!1);r.push([e.i,".feat-guidee[data-v-52161c28]{position:fixed;width:100%;height:100%;left:0px;top:0px;z-index:1111}.feat-guidee .guide-overlay[data-v-52161c28]{width:100%;height:100%;position:absolute;left:0px;top:0px;background:rgba(0,0,0,.7)}.feat-guidee .guide-tooltip[data-v-52161c28]{min-width:200px;max-width:500px;min-height:100px;background:#fff;position:absolute}.feat-guidee .guide-new-el[data-v-52161c28]{background:#fff;z-index:1222;position:absolute;overflow:hidden}",""]),t.default=r},function(e,t,o){"use strict";o.r(t);var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.guidShow,expression:"guidShow"}],staticClass:"feat-guidee"},[t("div",{staticClass:"guide-overlay",on:{click:this.next}}),t("div",{ref:"guide-new-el",staticClass:"guide-new-el"}),t("div",{ref:"guide-tooltip",staticClass:"guide-tooltip"},[this._t("default")],2)])};n._withStripped=!0;const r=function(e,t,o){e&&t&&o&&e.addEventListener(t,o,!1)},i=function(e,t,o){e&&t&&e.removeEventListener(t,o,!1)};function s(e,t,o){const n=u(e.tagName),r=function(e,t){const o=a(e);let n=e.parentElement,r=n&&t!==n?`${e.tagName.toLowerCase()}:nth-child(${o})`:"";for(;n&&t!==n;){let e=a(n);r=`${n.tagName.toLowerCase()}:nth-child(${e})>${r}`,n=n.parentElement}return r}(e,t);if(!r)return;const i=c(o.querySelector(r),n);e.style=i}function a(e){let t=1,o=e.previousElementSibling;for(;o;)o=o.previousElementSibling,t++;return t}function u(e){const t=document.createElement(e);document.body.appendChild(t);const o=l(t);return setTimeout(()=>{document.body.removeChild(t)},0),o}function c(e,t){const o=l(e),n=Object.keys(o);let r="";return n.forEach(e=>{const n=o[e];o.getPropertyValue(n)!==t.getPropertyValue(n)&&(r+=`${n}:${o.getPropertyValue(n)};`)}),r}function l(e,t=null){return window.getComputedStyle(e,t)}function d(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}var f={queryEl:function(e){if(e)return"string"==typeof e?document.querySelector(e):"[object HTMLDivElement]"===Object.prototype.toString.call(e)?e:void 0},ergodicElem:function e(t,o,n){if(!t.children||!t.children.length)return s(t,o,n);const r=t.children;for(let t=0;t<r.length;t++)e(r[t],o,n);return s(t,o,n)},getSameTagOfInheritedStyle:u,getNewElStyles:c,offsetTop:function(e){for(var t=e.offsetTop,o=e.offsetParent;o;)t+=o.offsetTop,o=o.offsetParent;return t},offsetLeft:function(e){for(var t=e.offsetLeft,o=e.offsetParent;o;)t+=o.offsetLeft,o=o.offsetParent;return t},getViewPort:function(){return"BackCompat"==document.compatMode?{width:document.body.clientWidth,height:document.body.clientHeight}:{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}},getComputedStyles:l,getComputedProperty:function(e,t){return l(e).getPropertyValue(t)},easeInOutCubic:d,moveTo:function(e,t,o=0,n=0,r){const i=o-n;let s,a,u,c=0;return()=>{window.cancelAnimationFrame(c);var l=f=>{a||(a=f),u=f-a,s=i*d(u/500);let p=o-s;u>=500&&(p=n),u<500?(r(e,t,p),c=window.requestAnimationFrame(l)):(r(e,t,p),window.cancelAnimationFrame(c))};c=window.requestAnimationFrame(l)}}},p={name:"FeatGuide",props:{targetSelector:[String,Array,HTMLDivElement]},data:()=>({guidShow:!1,selector:"",allowClick:!0,stepControler:null,newRootEl:null}),watch:{targetSelector(){this.init()}},mounted(){this.init()},methods:{init(){this.stepControler=null;const{targetSelector:e}=this;if(Array.isArray(e)){const t=[...e].map(e=>{const{guideName:t,el:o}=e;return{guideName:t,el:f.queryEl(o)}});this.stepControler=this.stepGen(t),this.stepControler.next()}else this.selector=e,this.initFeature();document.querySelector("body").style.overflow="hidden"},initFeature(){f.queryEl(this.selector)&&(this.featureCopy(),setTimeout(this.featurePosition),this.guidShow=!0),r(window,"resize",this.featurePosition),document.querySelector("body").style.overflow="hidden"},*stepGen(e=[]){for(let t=0,o=e.length;t<o;t++){const{el:o,guideName:n}=e[t];if(this.selector=o,this.$emit("update:guideName",n),!(yield this.initFeature()))break}},next(){this.guidShow=!1,i(window,"resize",this.featurePosition),this.$emit("next"),this.stepControler&&this.stepControler.next(!0),document.querySelector("body").style.overflow=""},featureCopy(){const e=f.queryEl(this.selector),t=this.$refs["guide-new-el"];if(!e||!t)return;t.innerHTML="";const o=f.getSameTagOfInheritedStyle(e.tagName),n=f.getNewElStyles(e,o),r=e.cloneNode(!0);this.newRootEl=r,r.style=n,f.ergodicElem(r,r,e),this.allowClick||r.addEventListener("click",(function(e){return console.log("禁止点击"),(e||window.event).preventDefault(),!1})),t.appendChild(r)},featurePosition(){const e=f.queryEl(this.selector),t=this.$refs["guide-new-el"],o=this.$refs["guide-tooltip"];if(!e||!t)return;const n=f.offsetTop(e),r=f.offsetLeft(e),i=f.getViewPort(),s=parseInt(f.getComputedProperty(e,"height")),a=parseInt(f.getComputedProperty(e,"width")),u=document.documentElement.offsetHeight,c=parseInt(f.getComputedProperty(o,"height"));let l=r,d=n,p=0,h=s+20;const m=s+c+20;d=(i.height-m)/2,p=n-d,u>i.height?(p>u-i.height&&(d=n-(u-i.height)),m>u-n&&u-(n+m)<n-m&&(h=-(c+20)),p<0&&(d=n,p=0)):(d=n,p=0,m>i.height-n&&i.height-(n+m)<n-m&&(h=-(c+20)));const g=[{source:t.style,prop:"width",moveFrom:a,moveTo:a},{source:t.style,prop:"height",moveFrom:parseInt(f.getComputedProperty(t,"height"))||s,moveTo:s},{source:t.style,prop:"left",moveFrom:parseInt(f.getComputedProperty(t,"left"))||l,moveTo:l},{source:t.style,prop:"top",moveFrom:parseInt(f.getComputedProperty(t,"top"))||d,moveTo:d},{source:o.style,prop:"left",moveFrom:parseInt(f.getComputedProperty(o,"left"))||l,moveTo:l},{source:o.style,prop:"top",moveFrom:parseInt(f.getComputedProperty(o,"top"))||d,moveTo:d},{source:o.style,prop:"margin-top",moveFrom:parseInt(f.getComputedProperty(o,"margin-top"))||h,moveTo:h}];this.featureGuideMove(g),this.htmlMove(p)},featureGuideMove(e){e.forEach(e=>{const{source:t,prop:o,moveFrom:n,moveTo:r}=e;f.moveTo(t,o,n,r,(e,t,o)=>{e[t]=o+"px"})()})},htmlMove(e){const t=document.documentElement;f.moveTo(t,"scrollTop",t.scrollTop,e,(e,t,o)=>{e[t]=o})()}},beforeDestroy(){console.log("beforeDestroy"),i(window,"resize",this.featurePosition),document.querySelector("body").style.overflow=""}};o(3);var h=function(e,t,o,n,r,i,s,a){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):r&&(u=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}(p,n,[],!1,null,"52161c28",null);h.options.__file="packages/feat-guide/index.vue";var m=h.exports;m.install=e=>{e.component(m.name,m)};var g=[m];const v=[...g];t.default={install:e=>{v.forEach(t=>{e.use(t)})},...g}}]).default;