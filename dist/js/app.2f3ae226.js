(function(t){function e(e){for(var a,c,r=e[0],o=e[1],l=e[2],u=0,f=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var o=s[r];0!==n[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},n={app:0},i=[];function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"010b":function(t,e,s){},"0fbf":function(t,e,s){"use strict";s("f43e")},1:function(t,e){},1914:function(t,e,s){},2838:function(t,e,s){t.exports=s.p+"img/Component 2.693b276f.svg"},"37e8":function(t,e,s){},"4c66":function(t,e,s){"use strict";s("d24f")},"4e02":function(t,e,s){"use strict";s("e257")},"4ffd":function(t,e,s){t.exports=s.p+"img/logo.1a1f4898.png"},5158:function(t,e,s){"use strict";s("d2d2")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),s("router-view"),s("Footer")],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"container"},[t.Searchbox?a("div",{staticClass:"header-search"},[a("input",{attrs:{type:"text",placeholder:"Axtarmaq istədiyiniz sözü daxil edin ..."},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),a("a",{staticClass:"header-search_btn",attrs:{href:"#"},on:{click:t.searchState}},[a("img",{attrs:{src:s("2838"),alt:"src"}})])]):a("div",{staticClass:"header-main"},[t._m(0),a("a",{staticClass:"header-main_btn",attrs:{href:"#"},on:{click:function(e){t.Searchbox=!0}}},[a("img",{attrs:{src:s("681d"),alt:"logo"}})])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"header-main_logo",attrs:{href:"/"}},[a("img",{attrs:{src:s("4ffd"),alt:"logo"}})])}],o={name:"Header",props:["value"],data:function(){return{Searchbox:!1}},methods:{searchState:function(){this.Searchbox=!this.Searchbox}}},l=o,d=(s("91a7"),s("2877")),u=Object(d["a"])(l,c,r,!1,null,"5e30aacd",null),f=u.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"footer-content"},[s("p",[t._v("2019 © Copyright SHARETECH.AZ , All Rights Reserved.")]),s("div",{staticClass:"footer-content_social"},[s("i",{staticClass:"fab fa-facebook-square"}),s("i",{staticClass:"fab fa-twitter-square"}),s("i",{staticClass:"fab fa-google-plus-square"})])])])])])])}],h={name:"Footer"},v=h,_=(s("d580"),Object(d["a"])(v,p,m,!1,null,"4238219d",null)),w=_.exports,C={components:{Header:f,Footer:w},data:function(){return{name:"",Searchbox:!1}},method:{getSearch:function(){this.Searchbox=!this.Searchbox}}},b=C,g=(s("5c0b"),Object(d["a"])(b,n,i,!1,null,null,null)),A=g.exports,x=s("8c4f"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("TopNews"),t.Searchbox?t._e():[s("Slider"),s("Adv")],s("MainNews")],2)},j=[],N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"topnews"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},t._l(t.dataNews,(function(t){return s("SingleTopNews",{key:t.id,attrs:{news:t}})})),1)])])},O=[],E=(s("fb6a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"col-3",attrs:{to:{name:"NewsPage",params:t.news}}},[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"topnews-item"},[s("div",{staticClass:"topnews-item-img"},[s("img",{attrs:{src:"https://cars.usnews.com/images/article/202002/128389/1_title_2020_kia_optima.jpg",alt:"news.title"}})]),s("div",{staticClass:"topnews-item-content"},[s("h3",[t._v(t._s(t.news.body))]),s("p",[t._v(t._s(t.news.title))])])])])])}),S=[],k={props:["news"]},R=k,T=(s("bf05"),Object(d["a"])(R,E,S,!1,null,"b28307c4",null)),$=T.exports,B={name:"TopNews",components:{SingleTopNews:$},data:function(){return{dataNews:[]}},created:function(){this.$http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=0906bae561b840eb8efc9af41646b3b5").then((function(t){console.log(t),this.dataNews=t.body.articles.slice(0,4)}))}},M=B,P=(s("0fbf"),Object(d["a"])(M,N,O,!1,null,"2a03c1ed",null)),L=P.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.Searchbox?t._e():s("section",{staticClass:"slider"},[t._m(0)])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"slider-item"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:s("d2d8"),alt:"rectangle45"}}),a("div",{staticClass:"slider-item-content"},[a("h3",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo ")]),a("span",[a("i",{staticClass:"fas fa-user-edit"}),t._v(" 2 dəq əvvəl ")]),a("span",[a("i",{staticClass:"fas fa-clock"}),t._v(" 7 dəq ")]),a("span",[a("i",{staticClass:"fas fa-heart"}),t._v(" 160 ")])])])])]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"slider-item right"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:s("5ed0"),alt:"rectangle45"}}),a("div",{staticClass:"slider-item-content"},[a("h3",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo ")]),a("span",[a("i",{staticClass:"fas fa-user-edit"}),t._v(" 2 dəq əvvəl ")]),a("span",[a("i",{staticClass:"fas fa-clock"}),t._v(" 7 dəq ")]),a("span",[a("i",{staticClass:"fas fa-heart"}),t._v(" 160 ")])])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"slider-item right"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:s("8626"),alt:"rectangle45"}}),a("div",{staticClass:"slider-item-content"},[a("h3",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing edit ")])])])])]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"slider-item right"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:s("61d8"),alt:"rectangle45"}}),a("div",{staticClass:"slider-item-content"},[a("h3",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing edit ")])])])])])])])])])}],K={name:"Slider",data:function(){return{Searchbox:!1}}},D=K,H=(s("5158"),Object(d["a"])(D,q,I,!1,null,"38007d00",null)),J=H.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"adv"},[s("div",{staticClass:"container"},[s("div",{staticClass:"adv-panel"},[s("h2",[t._v("REKLAM ÜÇÜN 1140x250 px")])])])])}],z={name:"Adv"},U=z,X=(s("4c66"),Object(d["a"])(U,W,Y,!1,null,"5ba330ce",null)),F=X.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"mainnews"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},t._l(t.filterNews.slice(0,this.newsCount),(function(t,e){return s("SingleMainNews",{key:t.id,attrs:{news:t,index:e}})})),1),t.newsCount<t.filterNews.length?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"mainnews-more"},[s("button",{on:{click:t.moreNews}},[t._v("Digər xəbərlər")])])])]):t._e()])])},Q=[],V=(s("4de4"),s("ac1f"),s("466d"),s("b0c0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"col-4",attrs:{to:{name:"NewsPage",params:t.news}}},[t.showAdd(t.index)?s("a",{attrs:{href:"#"}},[s("div",{staticClass:"mainnews-item"},[s("div",{staticClass:"mainnews-item_img"},[s("img",{attrs:{src:"https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg",alt:"news.title"}})]),s("div",{staticClass:"mainnews-item_content"},[s("p",[t._v(t._s(t.news.title))]),s("h3",[t._v(t._s(t.news.body))]),s("div",{staticClass:"mainnews-item_content_bottom"},[s("span",[s("i",{staticClass:"fas fa-user-edit"}),t._v(" "+t._s(t.news.id)+" ")]),s("span",[s("i",{staticClass:"fas fa-comment-alt"}),t._v(" "+t._s(t.news.id)+" ")]),s("span",[s("i",{staticClass:"fas fa-clock"}),t._v(" "+t._s(t.time)+" ")])])])])]):s("a",{attrs:{href:"#"}},[s("div",{staticClass:"mainnews-item"},[s("div",{staticClass:"adv-panel small"},[s("h2",[t._v("REKLAM ÜÇÜN")])])])])])}),G=[],tt=(s("a9e3"),{props:{news:{type:Object,default:function(){return{urlToImage:"https://image.cnbcfm.com/api/v1/image/106851305-16153034722021-03-09t145859z_1207388438_rc2q7m98ixbe_rtrmadp_0_usa-climate-directaircapture.jpeg?v=1615303508"}}},index:{type:Number}},methods:{showAdd:function(t){return!(t%5==0&&0!=t)}},computed:{time:function(){return this.news.id}}}),et=tt,st=(s("ad26"),Object(d["a"])(et,V,G,!1,null,"5e3d5240",null)),at=st.exports,nt={name:"MainNews",components:{SingleMainNews:at},data:function(){return{dataNews:[],newsCount:9}},created:function(){this.$http.get("https://jsonplaceholder.typicode.com/posts?_limit=10").then((function(t){this.dataNews=t.body}))},computed:{filterNews:function(){var t=this;return this.dataNews.filter((function(e){return e.title.match(t.name)}))}},methods:{moreNews:function(){this.newsCount+=9}}},it=nt,ct=(s("7c4a"),Object(d["a"])(it,Z,Q,!1,null,"37fb1b9d",null)),rt=ct.exports,ot={name:"Home",components:{TopNews:L,Slider:J,Adv:F,MainNews:rt},props:["Searchbox"],updated:function(){console.log("search: ",this.Searchbox)}},lt=ot,dt=Object(d["a"])(lt,y,j,!1,null,null,null),ut=dt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("SingleNewsPage",{attrs:{news:t.news,title:t.id}}),t._m(0),s("MainNews")],1)},pt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h2",{staticClass:"oxshar"},[t._v("OXŞAR XƏBƏRLƏR")])])])}],mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news"},[t._m(0),s("div",{staticClass:"news-main"},[t._m(1),s("div",{staticClass:"news-main_content"},[s("div",{staticClass:"news-main_content_title"},[s("p",[t._v(t._s(t.news.title))]),s("h3",[t._v(t._s(t.news.body))]),s("span",[s("i",{staticClass:"fas fa-user-edit"}),t._v(" "+t._s(t.news.id)+" ")]),s("span",[s("i",{staticClass:"fas fa-comment-alt"}),t._v(" "+t._s(t.news.id)+" ")]),s("span",[s("i",{staticClass:"fas fa-clock"}),t._v(" "+t._s(t.time)+" ")])]),s("div",{staticClass:"news-main_content_bottom"},[s("p",[t._v(t._s(t.news.body))])])])])])},ht=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news-img"},[s("img",{attrs:{src:"https://cars.usnews.com/images/article/202002/128389/1_title_2020_kia_optima.jpg",alt:"news-title"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news-main_social"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fab fa-twitter"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fab fa-facebook-messenger"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fab fa-google"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fab fa-whatsapp"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fab fa-pinterest"})])])}],vt={props:{news:{type:Object,required:!0}},computed:{time:function(){return this.id}}},_t=vt,wt=(s("8151"),Object(d["a"])(_t,mt,ht,!1,null,"31dcc2d1",null)),Ct=wt.exports,bt={components:{SingleNewsPage:Ct,MainNews:rt},data:function(){return{news:{},id:""}},mounted:function(){this.getNews()},watch:{"$route.path":"getNews"},methods:{getNews:function(){this.id=this.$route.params.id,this.$http.get("https://jsonplaceholder.typicode.com/posts/".concat(this.id)).then((function(t){this.news=t.body}))}}},gt=bt,At=(s("4e02"),Object(d["a"])(gt,ft,pt,!1,null,"f0df9408",null)),xt=At.exports,yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},jt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:s("8f20"),alt:"404"}})])]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"content"},[a("h2",[t._v("Niyə burdasan?")]),a("p",[t._v(" Çünki axdardığınız səhifə ya heç var olmayıb ya da silinib. Xahiş edirik keçidin doğruluğunu yoxlayın. ")]),a("button",[t._v("ANA SƏHİFƏ")])])])])])}],Nt={name:"NotFound"},Ot=Nt,Et=(s("9e52"),Object(d["a"])(Ot,yt,jt,!1,null,"52b0210a",null)),St=Et.exports;a["a"].use(x["a"]);var kt=[{path:"/",name:"Home",component:ut,meta:{reload:!0}},{path:"/news/:id",name:"NewsPage",component:xt,meta:{reload:!0}},{path:"/404",component:St},{path:"/:catchAll(.*)",redirect:"/404",meta:{reload:!0}}],Rt=new x["a"]({routes:kt,mode:"history",base:"/",scrollBehavior:function(t,e,s){return{x:0,y:0}}}),Tt=Rt,$t=s("28dd");a["a"].use($t["a"]),new a["a"]({router:Tt,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"5ed0":function(t,e,s){t.exports=s.p+"img/Rectangle 4.1.1592fd70.png"},"61d8":function(t,e,s){t.exports=s.p+"img/Rectangle 4.43.d8478aa7.png"},"681d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJbSURBVHgBvVWxctNAEH2nsxno/AeIL8AZwBE0JB0d8AXgLhNjWxkqKtt/cLGJJ+niP0g6qGw64TThCxAdpUvAkcSuIisnx7JlTZI3oxnt3d6+3b3dPYEU2LZdmnp4bwAvIVCmJTPachHQBwymU4wOD5WLFRCLjPs+mgH9kljKYKDd7arOCp0EgekFGJKnJtaDO/2H7bSojGUEQYCRH2CPDDzqdZXgz7vABulUyT3doFm8h+HOjm1iWST1pv1TI5iQ8c5BTyksQa1u24ZAC1dpdaWBDaXU5FokjYbd0gnI2+1VBAzWYV0+M4vowg/vMgHJaSKvT2YL9P+pf6BOkBFnZ87vZxXrrxB4xTKlpvziuXXkOM6fOBLPw5Z2xs0SARZERJkYRWJY+vo+p+tdLNE9ICd84DQ2KhKOE4lxVU2exDlyoiihp/hxkkQr2b5SuUmoolxNNJMkdwBDb6pa7eND5MTurl3WRDdJAu0eDO8tckJKxCRBMEdCw/CbxvgaeWGEnR+CemWQ2KKqOMasY6n06jQqsCYajb2mXkD8BOj7kjuzsmk9IPatiMh6+sT6yp2MDOC7EEbo6H2W6YnozE+MsLoKBpRWACVZwDBLRBwB60IbkJ+7qj2vF0/hlLeEX8EOjZ7zfv+yh3icyyLehPc319mke9zrqWoqyRKi9bCASCzS+9Cw27TRwmpM6A72I0OtNCK56OT4uzOicT0IfPwgIyVx6Uqcd34xaf2oIFHt7qsvrE/FI7TiKW9WLHM8dk4jB24O1zIQRXSjs4sri0s45hD4hdsCR8TfTP4PTcP+dDfJwMAAAAAASUVORK5CYII="},"76a6":function(t,e,s){},"7c4a":function(t,e,s){"use strict";s("010b")},8151:function(t,e,s){"use strict";s("1914")},8626:function(t,e,s){t.exports=s.p+"img/Rectangle 4.4.b7df4733.png"},"8f20":function(t,e,s){t.exports=s.p+"img/404.97865082.png"},"8f76":function(t,e,s){},"91a7":function(t,e,s){"use strict";s("37e8")},"9c0c":function(t,e,s){},"9e52":function(t,e,s){"use strict";s("d6d0")},ad26:function(t,e,s){"use strict";s("8f76")},bf05:function(t,e,s){"use strict";s("d134")},d134:function(t,e,s){},d24f:function(t,e,s){},d2d2:function(t,e,s){},d2d8:function(t,e,s){t.exports=s.p+"img/Rectangle 45.cb03ed9a.png"},d580:function(t,e,s){"use strict";s("76a6")},d6d0:function(t,e,s){},e257:function(t,e,s){},f43e:function(t,e,s){}});
//# sourceMappingURL=app.2f3ae226.js.map