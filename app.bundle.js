!function(n){var t={};function e(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(i,r,function(t){return n[t]}.bind(null,r));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=5)}([function(n,t,e){var i=e(1);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(3)(i,r);i.locals&&(n.exports=i.locals)},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n  font-size: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  height: 100%;\n  background: linear-gradient(to top, #f11712, #0099f7);\n  background-image: url(1.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nbutton,\nbutton:active,\nbutton:focus {\n    outline: none;\n}\n\n.app {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 1080px;\n  height: 75%;\n  margin: 0 auto;\n  padding-top: 35px;\n  overflow: hidden;\n}\n\n@keyframes loading {\n  0% {\n    transform: rotateZ(0deg);\n  }\n\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n\n.app__loading-circle {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 100px;\n  height: 100px;\n  margin-left: -50px;\n  margin-top: -50px;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: #449;\n  background-image: linear-gradient(0deg, #66f, #000);\n  transition: transform 1s;\n  animation: loading 1s linear infinite;\n}\n\n.app__loading-circle--hidden {\n  visibility: hidden;\n  animation: unset;\n}\n\n.app__header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 10%;\n  min-height: 50px;\n  border: 0px solid black;\n  border-radius: 10px;\n}\n\n.app__search-form {\n  position: relative;\n  width: 75%;\n  border: 0px solid gray;\n  border-radius: 20px;\n  /* box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.75); */\n}\n\n.app__search-input--text {\n  width: 100%;\n  height: 40px;\n  font-size: 2rem;\n  padding-left: 30px;\n  padding-right: 30px;\n  padding: 25px 30px;\n  background: #ffcecec4;\n  border: none;\n  border-radius: 20px;\n  outline: none;\n}\n\n.app__search-input--submit {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 76px;\n  height: 100%;\n  border: none;\n  background: #f50606cf;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n.app__search-input--submit i {\n  font-size: 25px;\n  color: #00000080;\n}\n.app__search-input--submit:hover {\n  cursor: pointer;\n  color: black;\n  background-color: red;\n}\n\n.app__main {\n  margin-bottom: 30px;\n}\n\n.app__carousel {\n  position: relative;\n}\n\n.app__carousel-list {\n  position: relative;\n  height: 350px;\n}\n\n.app__carousel-page {\n  padding: 35px 0px 23px 0px;\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  transition: all 1s;\n}\n\n.app__carousel-page::-webkit-scrollbar {\n  width: 0 !important;\n}\n\n.app__carousel-page--prev,\n.app__carousel-page--next {\n  position: absolute;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  border: 1px solid red;\n  transform: translate(100%);\n}\n\n.app__carousel-page--prev {\n  transform: translate(-100%);\n}\n\n@keyframes go-from-current {\n  0% {\n    transform: translate(0%);\n  }\n}\n\n.app__carousel-page--from-current {\n  animation: go-from-current 1s;\n}\n\n@keyframes go-from-next {\n  0% {\n    transform: translate(100%);\n  }\n}\n\n.app__carousel-page--from-next {\n  animation: go-from-next 1s;\n}\n\n@keyframes go-from-prev {\n  0% {\n    transform: translate(-100%);\n  }\n}\n\n.app__carousel-page--from-prev {\n  animation: go-from-prev 1s;\n}\n\n.app__carousel-nav {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  /* margin-top: 20px; */\n}\n\n.app__carousel-nav-item {\n  margin: 0 10px;\n  background: #fff;\n  cursor: pointer;\n  padding: 3px 20px;\n  border-radius: 15px;\n  font-size: 15px;\n  font-family: cursive;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);\n  border: none;\n}\n.app__carousel-nav-item:hover{\n  transform: scale(1.04);\n  transition: all 1s;\n}\n\n.app__carousel-nav-item--current {\n  background: #226;\n  border: 2px solid #fff;\n}\n\n.clip-item {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 230px;\n  min-width: 230px;\n  height: 100%;\n  min-height: 350px;\n  max-height: 350px;\n  background-color: white;\n  border-radius: 10px;\n  transition: all 1s;\n  margin: 0 20px 37px 20px;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);\n}\n\n.clip-item__title-link {\n  color: rgb(44, 44, 44);\n  text-decoration: none;\n}\n\n.clip-item__title,\n.clip-item__author,\n.clip-item__published,\n.clip-item__views,\n.clip-item__description {\n  width: 100%;\n  padding: 5px;\n  font-size: 2rem;\n  text-align: center;\n  overflow: hidden;\n  cursor: default;\n}\n\n.clip-item__title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 50px;\n  max-height: 50px;\n  padding: 5px;\n  background: rgb(255, 153, 161);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  font-size: 1.2rem;\n}\n\n.clip-item__title--long-title {\n  font-size: 1.6rem;\n}\n\n.clip-item__author,\n.clip-item__views,\n.clip-item__published {\n  font-size: 1.4rem;\n}\n\n.clip-item__author {\n  height: 25px;\n  background: rgb(227, 227, 227);\n  text-shadow: 1px 1px 5px #787878;\n}\n\n.clip-item__views,\n.clip-item__published {\n  height: 25px;\n}\n\n.clip-item__description {\n  position: relative;\n  height: 75px;\n  max-height: 250px;\n  font-size: 1.4rem;\n  background: #ccc;\n}\n\n.clip-item__description-more {\n  position: absolute;\n  left: 50%;\n  bottom: 5px;\n  width: 80px;\n  height: 25px;\n  margin-left: -40px;\n  font-size: 1.4rem;\n  color: #ccc;\n  background: #449;\n  border: 2px solid #226;\n  border-radius: 5px;\n  outline: none;\n  cursor: pointer;\n}\n\n.clip-item__description-more--hidden {\n  visibility: hidden;\n}\n\n.clip-item__description-more::before {\n  content: "More";\n}\n\n.clip-item__description-more:active {\n  border-color: #55a;\n}\n\n.clip-item__description--full {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  overflow: auto;\n}\n\n.clip-item__thumbnail {\n  width: 100%;\n  height: 150px;\n  min-height: 150px;\n}\n@media (max-width: 1080px) {\n  .app {\n    width: 810px;\n  }\n}\n@media (max-width: 810px) {\n  .app {\n    width: 540px;\n  }\n}\n@media (max-width: 540px) {\n  .app {\n    width: 270px;\n  }\n}\n',""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var r=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[e].concat(o).concat([r]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<n.length;r++){var a=n[r];null!=a[0]&&i[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){var i,r,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var i=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}t[n]=i}return t[n]}}(),p=null,l=0,c=[],u=e(4);function d(n,t){for(var e=0;e<n.length;e++){var i=n[e],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(x(i.parts[a],t))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(x(i.parts[a],t));o[i.id]={id:i.id,refs:1,parts:s}}}}function f(n,t){for(var e=[],i={},r=0;r<n.length;r++){var o=n[r],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):e.push(i[a]={id:a,parts:[s]})}return e}function h(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=c[c.length-1];if("top"===n.insertAt)i?i.nextSibling?e.insertBefore(t,i.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),c.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertAt.before,e);e.insertBefore(t,r)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=c.indexOf(n);t>=0&&c.splice(t,1)}function g(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var i=function(){0;return e.nc}();i&&(n.attrs.nonce=i)}return b(t,n.attrs),h(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function x(n,t){var e,i,r,o;if(t.transform&&n.css){if(!(o="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=o}if(t.singleton){var a=l++;e=p||(p=g(t)),i=w.bind(null,e,a,!1),r=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),h(n,t),t}(t),i=function(n,t,e){var i=e.css,r=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=u(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),r=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=g(t),i=function(n,t){var e=t.css,i=t.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){m(e)});return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=f(n,t);return d(e,t),function(n){for(var i=[],r=0;r<e.length;r++){var a=e[r];(s=o[a.id]).refs--,i.push(s)}n&&d(f(n,t),t);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete o[s.id]}}}};var v,_=(v=[],function(n,t){return v[n]=t,v.filter(Boolean).join("\n")});function w(n,t,e,i){var r=e?"":i.css;if(n.styleSheet)n.styleSheet.cssText=_(t,r);else{var o=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,i=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){"use strict";e.r(t);class i{constructor(){this.token=""}getUrl(n,t=""){return`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=${n}&pageToken=${t}`}extractClipNames({items:n}){return n.map(n=>{const{snippet:{publishedAt:t,channelTitle:e,description:i,thumbnails:r,title:o},id:{videoId:a}}=n;return{id:a,parseDate:new Date(t).toString().slice(4,15),channelTitle:e,description:i,thumbnails:r,title:o,url:`https://www.youtube.com/watch?v=${n.id.videoId}`}})}getViewsVideoUrl(n){return n.reduce((n,t)=>`${n+t.id},`,"https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&part=snippet,statistics&id=")}insertViewCounts(n,t){t.items.forEach(t=>{const e=n.find(({id:n})=>n===t.id);e&&(e.viewCount=t.statistics.viewCount)})}async getClipNames(n){const t=this.getUrl(n,this.token);try{const n=await fetch(t);if(!n.ok)throw new Error;const e=await n.json();this.token=e.nextPageToken;const i=this.extractClipNames(e),r=this.getViewsVideoUrl(i),o=await fetch(r);if(!o.ok)throw new Error;const a=await o.json();return this.insertViewCounts(i,a),i}catch(n){throw new Error(n)}}}e(0);var r=class{constructor(){this.input=null,this.button=null}createApplicationElements(){const n=document.createElement("div"),t=document.createElement("header"),e=this.createContent(),i=this.createButtonCarousel();n.classList.add("app"),t.className="app__header",t.innerHTML='\n    <form class="app__search-form" name="search_form">\n      <input class="app__search-input app__search-input--text" type="text" placeholder="Search" />\n      <button class="app__search-input app__search-input--submit" type="submit" value="">\n        Search\n        <i class="fas fa-search"></i>\n      </button>\n    </form>',document.body.appendChild(n),n.appendChild(t);const r=document.createElement("main");r.classList.add("app__main");const o=document.createElement("div");o.classList.add("app__carousel"),n.appendChild(r),o.appendChild(e),r.appendChild(o),r.appendChild(i),this.input=document.querySelector(".app__search-input"),this.button=document.querySelector("button")}createButtonCarousel(){const n=document.createElement("nav");return n.classList.add("app__carousel-nav"),n.style.display="none",this.leftButton=document.createElement("button"),this.leftButton.classList.add("app__carousel-nav-item"),this.leftButton.innerText="prev",this.rightButton=document.createElement("button"),this.rightButton.classList.add("app__carousel-nav-item"),this.rightButton.innerText="next",n.appendChild(this.leftButton),n.appendChild(this.rightButton),n}createContent(){const n=document.createElement("ul");return n.style.transform="translateX(0px)",n.classList.add("app__carousel-page","app__carousel-page--current"),n}render(n){document.getElementsByClassName("app__carousel-page")[0].innerHTML=n.map(this.generateSlide).join(""),document.getElementsByClassName("app__carousel-nav")[0].style.display="flex"}nextPage(n){document.getElementsByClassName("app__carousel-page")[0].innerHTML+=n.map(this.generateSlide).join("")}generateSlide({title:n,description:t,thumbnails:e,channelTitle:i,parseDate:r,viewCount:o,url:a}){return`\n    <li class="clip-item">\n      <div class="clip-item__title">${n}</div>\n      <div class="clip-item__author">${i}</div>\n      <a href="${a}" target="_blank">\n      <img class="clip-item__thumbnail" src="${e.medium.url}" />\n      </a>\n      <div class="clip-item__description">${t}</div>\n      <div class="clip-item__views">Views: ${o}</div>\n      <div class="clip-item__published">published: ${r}</div>\n    </li>`}};(new class{constructor(){this.value=null,this.lastPage=1,this.appView=new r,this.appModel=new i,this.search=this.search.bind(this)}async search(n){n.preventDefault();const{value:t}=this.appView.input,e=await this.appModel.getClipNames(t);this.appView.render(e),this.value=t}async start(){this.appView.createApplicationElements(),this.appView.button.addEventListener("click",this.search),this.appView.leftButton.addEventListener("click",this.navigation(1)),this.appView.rightButton.addEventListener("click",this.navigation(-1))}navigation(n){return async()=>{const t=document.getElementsByTagName("ul")[0],{transform:e}=t.style,{groups:{value:i}}=/(?<value>-?\d+)/g.exec(e),r=+i+t.clientWidth*n;if(r<=0&&(t.style.transform=`translateX(${r}px)`,-1*i+200>=t.clientWidth*this.lastPage*2)){this.lastPage+=1;const n=await this.appModel.getClipNames(this.query);this.appView.nextPage(n)}}}}).start()}]);
//# sourceMappingURL=app.bundle.js.map
