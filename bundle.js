(()=>{"use strict";var n={516:(n,e,t)=>{t.d(e,{A:()=>u});var o=t(601),r=t.n(o),d=t(314),i=t.n(d),a=t(417),c=t.n(a),l=new URL(t(912),t.b),s=i()(r()),p=c()(l);s.push([n.id,`.dialogAddProject{\n    width: 500px;\n    height: 300px;\n    margin: 150px auto;\n    padding: 30px 30px 0px 30px;\n    border-radius: 20px;\n}\n.dialogAddProject>div{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.dialogAddProject > div>form{\n    display: flex;\n    flex-direction: column;\n    width: 360px;\n    gap: 5px;\n    margin: 30px auto;\n}\n.dialogAddProject > div>form>label{\n    font-weight: bold;\n}\n.dialogAddProject > div>form>input{\n    width: 250px;\n    height: 30px;\n    margin-left: 40px;\n    border: 1px solid black;\n    border-radius: 4px;\n    font-size: 1.5rem;\n}\n\n.dialogAddProject > div>form>input[type="submit"]{\n    width: 150px;\n    margin: 15px auto;\n    font-size: large;\n    height: 25px;\n    cursor: pointer;\n}\n.dialogAddProject > div>form>input[type="submit"]:hover{\n    background-color: rgb(37, 82, 37);\n    color: white;\n    box-shadow: 0px 0px 10px rgb(38, 96, 38);\n}\n\n\n.dialogAddProject > div>.btnClose{\n    display: flex;\n    justify-content: end;\n}\n\n.closeAddProject{\n    height: 30px;\n    width: 30px;\n    border: 0px solid transparent;\n    border-radius: 40px;\n}\n\n.closeAddProject:hover{\n    box-shadow: 0px 0px 10px rgb(233, 124, 124);\n}\n\n.dialogAddProject>div>p{\n    font-size: small;\n}\n.dialogAddProject>div>p:hover{\n    color: red;\n}\n\n.divProject{\n    display: flex;\n    justify-content: space-between;\n}\n\n.brnDeletProject{\n    height: 20px;\n    width: 20px;\n    border: 0px solid transparent;\n    background-image: url(${p});\n    background-position: center;\n    background-size: contain;\n}\n\n.brnDeletProject:hover{\n    box-shadow: 0px 0px 10px rgb(233, 124, 124);\n}`,""]);const u=s},115:(n,e,t)=>{t.d(e,{A:()=>m});var o=t(601),r=t.n(o),d=t(314),i=t.n(d),a=t(417),c=t.n(a),l=new URL(t(569),t.b),s=new URL(t(370),t.b),p=i()(r()),u=c()(l),h=c()(s);p.push([n.id,`.dialogTodo{\n    width: 500px;\n    height: 400px;\n    margin: 150px auto;\n    padding: 20px;\n    border-radius: 20px;\n}\n\n.dialogTodo>form{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 300px;\n    margin: 0px auto;\n}\n\n.dialogTodo>form>label{\n    font-weight: bold;\n}\n\n.dialogTodo>form>input{\n    width: 250px;\n    height: 20px;\n    margin: 0px auto;\n    border-radius: 4px;\n    border: 1px solid black;\n}\n\n.dialogTodo>form>input[type="submit"]:hover{\n    background-color: rgb(37, 82, 37);\n    color: white;\n    box-shadow: 0px 0px 10px rgb(38, 96, 38);\n}\n\n.dialogTodo>button{\n    display: flex;\n    justify-content: end;\n}\n\n.containerTodo{\n    overflow-y: auto;\n}\n\n.dialogTodo>.btnClose{\n    display: flex;\n    justify-content: end;\n}\n\n.closeAddTodo{\n    display: flex;\n    justify-content: end;\n    height: 30px;\n    width: 30px;\n    border: 0px solid transparent;\n    border-radius: 40px;\n}\n\n.closeAddTodo:hover{\n    box-shadow: 0px 0px 10px rgb(233, 124, 124);\n}\n\n.headerProject{\n    height: 60px;\n    font-size: x-large;\n    display: flex;\n    justify-content: space-between;\n}\n\n.addTodo{\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    text-align: center;\n    gap: 15px;\n    cursor: pointer;\n}\n\n.addTodo:hover{\n    text-decoration: underline;\n    transform: scale(1.07);\n    color: white;\n}\n\n.todoContainer{\n    display: flex;\n    flex-wrap: wrap;\n    overflow-y: auto;\n}\n\n.cardTodo{\n    width: 300px;\n    height: 150px;\n    border-radius: 0px 30px 30px 0px;\n    padding: 5px;\n    border: 0px solid black;\n    background-color: #d3d4e0;\n    margin: 15px; \n    border-bottom: 0px;\n    border-top: 0px;\n    border-right: 0px;\n    border-width: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.cardTodo > .divBtn{\n    width: 100%;\n    margin-right: 30px;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: end;\n}\n\n.cardTodo > .divBtn>button{\n    width: 40px;\n    height: 49px;\n    border: 0px solid transparent;\n    background-color: transparent;\n}\n.cardTodo > .divBtn>button:hover{\n    box-shadow: 0px 0px 15px grey;\n}\n\n.isdo {\n    width: 30px;\n    height: 20px;\n    margin-left: 230px;\n    display: flex;\n    justify-content: end;\n}\n\n\n.no{\n    background-image: url(${u});\n    background-position:right;\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n.yes {\n    background-image: url(${h});\n    background-position: right;\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n\n.low{\n    border-color: #5da283;\n}\n.mid{\n    border-color: #fa8969;\n    \n}\n\n.high{\n    border-color: #ff5f63;\n}\n\n\n\n.low:hover{\n    box-shadow: 0px 0px 20px green;\n    border-width: 5px;\n}\n.mid:hover{\n    box-shadow: 0px 0px 20px orange;\n    border-width: 5px;\n}.high:hover{\n    box-shadow: 0px 0px 20px red;\n    border-width: 5px;\n}\n\n.dialogModifTodo{\n    width: 500px;\n    height: 400px;\n    margin: 150px auto;\n    padding: 20px;\n    border-radius: 20px;\n}\n.dialogModifTodo>form{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 300px;\n    margin: 0px auto;\n}\n\n.dialogModifTodo>form>label{\n    font-weight: bold;\n}\n\n.dialogModifTodo>form>input{\n    width: 250px;\n    height: 20px;\n    margin: 0px auto;\n    border-radius: 4px;\n    border: 1px solid black;\n}\n\n.dialogModifTodo>form>input[type="submit"]:hover{\n    background-color: rgb(37, 82, 37);\n    color: white;\n    box-shadow: 0px 0px 10px rgb(38, 96, 38);\n}\n\n.dialogModifTodo>button{\n    display: flex;\n    justify-content: end;\n}\n.dialogTodo>button{\n    display: flex;\n    justify-content: end;\n}\n\n.dialogShowDetail{\n    width: 500px;\n    height: 400px;\n    margin: 150px auto;\n    padding: 20px;\n    border-radius: 20px;\n}\n.dialogShowDetail>form{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 300px;\n    margin: 0px auto;\n}\n\n.dialogShowDetail>form>label{\n    font-weight: bold;\n}\n\n.dialogShowDetail>form>input{\n    width: 250px;\n    height: 20px;\n    margin: 0px auto;\n    border-radius: 4px;\n    border: 1px solid black;\n}\n\n.dialogShowDetail>form>input[type="submit"]:hover{\n    background-color: rgb(37, 82, 37);\n    color: white;\n    box-shadow: 0px 0px 10px rgb(38, 96, 38);\n}\n\n.dialogShowDetail>button{\n    display: flex;\n    justify-content: end}\n   `,""]);const m=p},258:(n,e,t)=>{t.d(e,{A:()=>u});var o=t(601),r=t.n(o),d=t(314),i=t.n(d),a=t(417),c=t.n(a),l=new URL(t(730),t.b),s=i()(r()),p=c()(l);s.push([n.id,`*,\n::after,\n::before {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nsection{\n    height: 96vh;\n    display: flex;\n}\n\n\naside{\n    width: 15vw;\n\n    padding: 20px;\n    gap: 10px;\n    background-color: #e2e2e2;\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\naside>ul{\n    overflow-y: auto;\n}\naside>ul>li{\n    cursor: pointer;\n    list-style: none;\n    margin: 10px;\n}\n\n/* pour afficher le button du aside sur un tel */\naside>input[type="button"]{\n    display: none;\n}\n\n\naside>ul>li>details>div>p{\n    margin-left: 10px;\n}\n\n\naside>ul>li>details>div>p:hover{\n    margin-left: 14px;\n    text-decoration: underline;\n    color: #4283b7;\n    transform: scale(1.1);\n}\n\n\n\n.addProject{\n    display: flex;\n    align-items:center;\n    justify-content: end;\n    cursor: pointer;\n}\n\n.addProject>h4:hover{\n    color: #4283b7;\n    transform: scale(1.05);\n}\n\n.addProject>button:hover{\n    transform: rotate(0.05turn);\n}\n\n.showPersonalized{\n    background-image: url(${p});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    height: 25px;\n    width: 25px;\n    border: 0px solid transparent;\n    margin-right: 5px;\n}\n\n.menuButton{\n    display: none;\n}\n\n\n.containerTodo{\n    background-color:#717b78;\n    width: 85vw;\n    padding: 20px;\n}\n\n\nfooter{\n    height: 4vh;\n    background-color: #2b2e36;\n    text-align: center;\n    font-size: x-small;\n}\nfooter>a{\n    color: white;\n    text-decoration: none;\n}\n\n\n@media screen and (max-width:600px) {\n    aside{\n        display: none;\n    }\n    .menuButton{\n        display: inline;\n\n    }\n}\n`,""]);const u=s},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,d){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&i[s[0]]||(void 0!==d&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=d),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var d={},i=[],a=0;a<n.length;a++){var c=n[a],l=o.base?c[0]+o.base:c[0],s=d[l]||0,p="".concat(l," ").concat(s);d[l]=s+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=r(h,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var d=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<d.length;i++){var a=t(d[i]);e[a].references--}for(var c=o(n,r),l=0;l<d.length;l++){var s=t(d[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}d=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},730:(n,e,t)=>{n.exports=t.p+"14100e6f1b8a711884c1.png"},912:(n,e,t)=>{n.exports=t.p+"7588174eaa46094bb754.png"},370:(n,e,t)=>{n.exports=t.p+"a8d20cd48e2e0d022083.png"},569:(n,e,t)=>{n.exports=t.p+"3c662b752278fc52f408.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var d=e[o]={id:o,exports:{}};return n[o](d,d.exports,t),d.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t.d({},{L:()=>V});var o=t(72),r=t.n(o),d=t(825),i=t.n(d),a=t(659),c=t.n(a),l=t(56),s=t.n(l),p=t(540),u=t.n(p),h=t(113),m=t.n(h),f=t(258),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),r()(f.A,g),f.A&&f.A.locals&&f.A.locals;var x=t(516),b={};b.styleTagTransform=m(),b.setAttributes=s(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=u(),r()(x.A,b),x.A&&x.A.locals&&x.A.locals;var y=t(115),v={};v.styleTagTransform=m(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),r()(y.A,v),y.A&&y.A.locals&&y.A.locals;var w=t(912);const S=t.p+"e42c3c63c6b97a10746d.png",T=t.p+"ecf738e2c87346d08414.png",E=document.querySelector(".dialogTodo"),C=document.querySelector(".closeAddTodo"),j=document.querySelectorAll("form"),L=document.querySelector(".dialogModifTodo"),k=document.querySelector(".dialogShowDetail");let A=[];class q{constructor(n,e,t,o,r,d){this.name=n,this.date=t,this.details=o,this.importance=e,this.do=r,this.projectName=d}addTodoIntoContainer(){const n=document.querySelector(".todoContainer");let e=document.createElement("div");e.classList.add("cardTodo"),e.classList.add(this.importance);let t=this.name.indexOf(" ");e.classList.add(this.name.slice(0,t));let o=document.createElement("h3");o.textContent="Nom todo : "+this.name;let r=document.createElement("p");r.textContent="Date prevu : "+String(this.date);let d=document.createElement("btn");d.classList.add(this.importance),d.classList.add("importance");let i=document.createElement("div");i.classList.add("isdo"),this.do?i.classList.add("yes"):i.classList.add("no");let a=document.createElement("button"),c=document.createElement("img");c.src=w,c.width=30,a.classList.add("deleteTodo"),a.appendChild(c),a.addEventListener("click",(()=>{var e;e=this.name,A=A.filter((n=>n.name!=e)),D(),n.removeChild(a.parentElement.parentElement)}));let l=document.createElement("button");l.classList.add("modifTodo");let s=document.createElement("img");s.src=S,s.width=30,l.appendChild(s),l.addEventListener("click",(()=>{L.showModal(),I(2,this),j[2].children[7].addEventListener("click",(()=>{!function(n){const e=new FormData(j[2]),t=e.get("nameTodo"),o=e.get("dateTodo"),r=e.get("importance"),d=e.get("detail");let i=new q(t,r,o,d,document.querySelector(".containerTodo").firstChild.classList[1]),a=A.findIndex((e=>e.name===n.name&&e.date===n.date&&e.importance===n.importance));A[a]=i,P(),D()}(this)}))}));let p=document.createElement("button");p.classList.add("showDetail");let u=document.createElement("img");u.src=T,u.width=30,p.appendChild(u),p.addEventListener("click",(()=>{k.showModal(),I(3,this),j[3].children[7].addEventListener("click",(()=>{k.close()}))}));let h=document.createElement("div");h.classList.add("divBtn"),h.appendChild(a),h.appendChild(l),h.appendChild(p),e.appendChild(i),e.appendChild(o),e.appendChild(r),e.appendChild(d),e.appendChild(h),n.appendChild(e),V(document.querySelectorAll(".isdo")),document.querySelectorAll(".isdo").forEach((n=>{n.addEventListener("click",(()=>{n.classList.contains("no")?(n.classList.replace("no","yes"),M(this.name)):(n.classList.replace("yes","no"),M(this.name))}))}))}static transformElementIntoInstance(n){return new q(n.name,n.importance,n.date,n.details,n.do,n.projectName)}}function P(){document.querySelector(".todoContainer").innerHTML="",A.forEach((n=>{q.transformElementIntoInstance(n).addTodoIntoContainer()}))}function I(n,e){switch(j[n].children[1].value=e.name,j[n].children[3].value=e.date,e.importance){case"high":j[n].children[5].children[0].checked=!0;break;case"mid":j[n].children[5].children[2].checked=!0;break;case"low":j[n].children[5].children[4].checked=!0}j[n].children[6].value=e.details}function M(n){let e=A.findIndex((e=>e.name===n));A[e].do=!A[e].do,D()}function D(){localStorage.setItem(document.querySelector(".containerTodo").firstChild.classList[1],JSON.stringify(A))}function N(){E.showModal()}C.addEventListener("click",(()=>{E.close()})),j[1].addEventListener("submit",(()=>{const n=new FormData(j[1]),e=n.get("nameTodo"),t=n.get("dateTodo"),o=n.get("importance"),r=n.get("detailTodo");console.log(r);let d=new q(e,o,t,r,!1,document.querySelector(".containerTodo").firstChild.classList[1]);var i,a;A.push(d),P(),D(),i=j[1],a=E,i.reset(),a.close()}));const z=t.p+"60b69f732b66cd9098a4.png",O=t.p+"022dfbc0bc0143a5f5c0.png",B=document.querySelector("details"),$=document.querySelector(".btnClose"),J=document.querySelectorAll("form"),R=document.querySelector(".addProject"),U=document.querySelector(".dialogAddProject"),F=document.createElement("img");F.src=O,F.width=30,F.height=30,document.querySelector("#BtnCloseDialog").appendChild(F);const H=localStorage.getItem("project")?.toString();let _=[];function Q(n,e){n.reset(),e.close()}function G(n){let e=document.createElement("div");e.classList.add("divProject");let t=document.createElement("button");t.classList.add("brnDeletProject"),t.classList.add(n);let o=document.createElement("p");o.textContent=n,o.classList.add(n),e.appendChild(o),e.appendChild(t),B.appendChild(e),function(n){localStorage.getItem(n)||localStorage.setItem(n,JSON.stringify([]))}(n),V(document.querySelectorAll("p")),document.querySelectorAll("p").forEach((n=>{n.addEventListener("click",(()=>{!function(n){const e=document.querySelector(".containerTodo");let t=document.createElement("div");t.classList.add("Title");let o=document.createElement("h1");o.textContent=n+" Todo liste";let r=document.createElement("div");r.classList.add("addTodo");let d=document.createElement("img");d.src=z,d.width=45,d.height=45;let i=document.createElement("h3");i.textContent="add Todo";let a=document.createElement("btn");a.classList.add("btnAddTodo"),a.appendChild(d);let c=document.createElement("div");c.classList.add("todoContainer"),t.appendChild(o),r.appendChild(a),r.appendChild(i);let l=document.createElement("div");l.classList.add("headerProject"),l.classList.add(n),l.appendChild(t),l.appendChild(r),e.innerHTML="",e.appendChild(l),e.appendChild(c),function(n){const e=localStorage.getItem(n)?.toString();e&&(A=JSON.parse(e),A.forEach((n=>{q.transformElementIntoInstance(n).addTodoIntoContainer()})))}(n),document.querySelector(".addTodo").addEventListener("click",N)}(n.className)}))})),V(document.querySelectorAll(".brnDeletProject")),document.querySelectorAll(".brnDeletProject").forEach((n=>{n.addEventListener("click",(()=>{var e;e=n.classList[1],_=_.filter((n=>n!=e)),localStorage.removeItem(e),localStorage.setItem("project",JSON.stringify(_)),B.removeChild(n.parentElement)}))}))}H&&(_=JSON.parse(H),_.forEach((n=>{G(n)}))),J[0].addEventListener("submit",(()=>{const n=document.querySelector("#nameTheme").value;var e;null==_.find((e=>e===n))?(G(n),e=n,_.push(e),localStorage.setItem("project",JSON.stringify(_))):alert(n+" : nom de projet deja existant"),Q(J[0],U)})),$.addEventListener("click",(()=>{Q(J[0],U)})),R.addEventListener("click",(()=>{U.showModal()}));const K=document.createElement("img");function V(n){n.forEach((n=>{const e=n.cloneNode(!0);n.parentNode.replaceChild(e,n)}))}K.src=O,K.width=30,K.height=30,document.querySelector("#btnCloseDialog").appendChild(K),document.querySelector("button").addEventListener("click",(()=>{document.querySelector("button").style.display="none",document.querySelector("aside").style.display="block",document.querySelector('input[type="button"]').style.display="block"})),document.querySelector('input[type="button"]').addEventListener("click",(()=>{document.querySelector("button").style.display="block",document.querySelector("aside").style.display="none",document.querySelector('input[type="button"]').style.display="none"}))})();