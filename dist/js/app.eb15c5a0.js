(function(t){function e(e){for(var r,i,o=e[0],c=e[1],u=e[2],p=0,h=[];p<o.length;p++)i=o[p],n[i]&&h.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],r=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=s[0]))}return t}var r={},n={app:0},a=[];function i(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=r,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"3f3b":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var r=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{dark:""}},[s("app-header"),s("v-content",[s("router-view")],1),s("app-footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-toolbar",{attrs:{app:""}},[s("v-toolbar-side-icon"),s("v-spacer"),s("v-toolbar-items",[t.started?[s("v-btn",{attrs:{flat:""},on:{click:t.search}},[s("v-badge",[t.showSearchCount?s("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("\n            "+t._s(t.seriesCount)+"\n          ")]):t._e(),t._v("\n          Search\n        ")])],1),s("v-btn",{attrs:{flat:""},on:{click:t.subscriptions}},[s("v-badge",[t.showSubscriptionsCount?s("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.subscriptionsCount))]):t._e(),t._v("\n          Subscribed\n        ")])],1),s("v-btn",{attrs:{flat:""},on:{click:t.calendar}},[s("v-badge",[t.showCalendarCount?s("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("\n            "+t._s(t.seriesCount)+"\n          ")]):t._e(),t._v("\n          Calendar\n        ")])],1),s("v-btn",{attrs:{flat:""},on:{click:t.done}},[t._v("Done")])]:t._e()],2)],1)},o=[],c=(s("96cf"),s("3040")),u=(s("7f7f"),s("8c4f")),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":""}},[s("v-layout",{attrs:{"align-center":"","justify-center":""}},[s("v-btn",{on:{click:t.start}},[t._v("Start")])],1)],1)},p=[],h={mounted:function(){var t=sessionStorage.getItem("start");t&&q.push({name:"search"})},methods:{start:function(){q.push({name:"search"}),this.$store.commit("setStart",!0),sessionStorage.setItem("start",!0)}}},d=h,m=s("2877"),v=Object(m["a"])(d,l,p,!1,null,null,null);v.options.__file="Home.vue";var f=v.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-snackbar",{attrs:{top:"",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[s("span",{staticClass:"subheading"},[t._v(t._s(t.message))]),s("v-btn",{attrs:{flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),s("v-layout",{attrs:{column:""}},[s("v-flex",[s("v-toolbar",[s("v-text-field",{attrs:{placeholder:"Search for a TV series...",clearable:"","prepend-inner-icon":"search"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)],1),s("v-flex",[s("v-container",{staticClass:"px-0",attrs:{fluid:"","grid-list-md":""}},[s("app-spinner",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}]}),s("v-layout",{attrs:{wrap:""}},t._l(t.series,function(e,r){return s("v-flex",{key:r,attrs:{xs3:""}},[s("app-image",{attrs:{series:e}},[s("template",{slot:"search-image"},[s("v-img",{staticClass:"img",attrs:{src:t.getImage(e),contain:"","aspect-ratio":"0.68"}})],1),s("template",{slot:"search-button"},[s("v-btn",{attrs:{small:"",icon:""},on:{click:function(s){t.subscribe(e,r)}}},[t.isSubscribed(r)?s("v-icon",{attrs:{title:"Unsubscribe"}},[t._v("remove\n                  ")]):s("v-icon",{attrs:{title:"Subscribe"}},[t._v("add\n                  ")])],1)],1)],2)],1)}))],1)],1)],1)],1)},g=[],_=(s("ac6a"),s("6b54"),s("6762"),s("2fdb"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{flat:"",tile:""}},[s("div",{staticClass:"card"},[t._t("search-image"),t._t("subscriptions-image"),s("div",{staticClass:"overview"},[s("h3",[t._v(t._s(t.series.seriesName))]),s("p",[t._v(t._s(t.series.overview))]),s("h4",[t._v("Air Date:")]),s("p",[t._v(t._s(t.series.airsDayOfWeek))]),s("h4",[t._v("Status:")]),s("p",[t._v(t._s(t.series.status))])])],2),s("v-card-actions",[s("span",{staticClass:"ellipsis",attrs:{title:t.series.seriesName}},[t._v("\n        "+t._s(t.series.seriesName)+"\n      ")]),s("v-spacer"),t._t("search-button"),t._t("subscriptions-button")],2)],1)}),w=[],S={props:["series"]},x=S,k=(s("5e11"),Object(m["a"])(x,_,w,!1,null,"6f886198",null));k.options.__file="Image.vue";var y=k.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loader"})},C=[],O=(s("9bc4"),{}),j=Object(m["a"])(O,$,C,!1,null,"c9c70036",null);j.options.__file="Spinner.vue";var I=j.exports,E={components:{appImage:y,appSpinner:I},data:function(){return{show:"",selected:[],loaded:!1,snackbar:!1,timeout:2500,message:"",baseUrl:"https://www.thetvdb.com/banners/posters/",noImage:"https://via.placeholder.com/680x1000.png?text=No+Image"}},computed:{series:function(){return this.$store.getters.getSeries}},mounted:function(){this.$store.commit("setSeries",[])},methods:{subscribe:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,s){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.selected.includes(s)){t.next=12;break}return this.$set(this.selected,s,s),t.next=5,this.$store.dispatch("subscribe",{url:"/show/save",method:"post",data:e});case 5:return t.next=7,this.$store.dispatch("getSubscriptions",{url:"/shows",method:"get"});case 7:return r=t.sent,t.next=10,this.$store.commit("setSubscriptions",r.data.data);case 10:t.next=19;break;case 12:return this.$delete(this.selected,s),t.next=15,this.$store.dispatch("unsubscribe",{url:"/show/".concat(e.id.toString()),method:"delete"});case 15:return t.next=17,this.$store.dispatch("getSubscriptions",{url:"/shows",method:"get"});case 17:n=t.sent,this.$store.commit("setSubscriptions",n.data.data);case 19:t.next=25;break;case 21:t.prev=21,t.t0=t["catch"](0),this.message="Something went wrong!",this.snackbar=!0;case 25:case"end":return t.stop()}},t,this,[[0,21]])}));return function(e,s){return t.apply(this,arguments)}}(),isSubscribed:function(t){return this.selected.includes(t)},getImage:function(t){return t.posterKey?"".concat(this.baseUrl).concat(t.posterKey):this.noImage},search:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,s,r,n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,""===this.show){t.next=15;break}return this.loaded=!0,this.selected=[],this.$store.commit("setSeries",[]),e={url:"/show/search",method:"post",data:{show:this.show}},this.show="",t.next=9,this.$store.dispatch("search",e);case 9:s=t.sent,this.loaded=!1,this.$store.commit("setSeries",s.data.data),r=this.$store.getters.getSeries.map(function(t){return t.id.toString()}),n=this.$store.getters.getSubscriptions,n.forEach(function(t){if(-1!==r.indexOf(t._id)){var e=r.indexOf(t._id);a.$set(a.selected,e,e)}});case 15:t.next=22;break;case 17:t.prev=17,t.t0=t["catch"](0),this.loaded=!1,this.message="Not Found",this.snackbar=!0;case 22:case"end":return t.stop()}},t,this,[[0,17]])}));return function(){return t.apply(this,arguments)}}()}},R=E,N=Object(m["a"])(R,b,g,!1,null,null,null);N.options.__file="Search.vue";var D=N.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-md":""}},[s("v-snackbar",{attrs:{top:"",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[s("span",{staticClass:"subheading"},[t._v(t._s(t.message))]),s("v-btn",{attrs:{flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.subscriptions,function(e,r){return s("v-flex",{key:r,attrs:{xs3:""}},[s("app-image",{attrs:{series:e}},[s("template",{slot:"subscriptions-image"},[s("v-img",{staticClass:"img",attrs:{src:e.posterUrl,contain:"","aspect-ratio":"0.68"}})],1),s("template",{slot:"subscriptions-button"},[s("v-btn",{attrs:{small:"",icon:""},on:{click:function(s){t.remove(e)}}},[s("v-icon",{attrs:{title:"Remove"}},[t._v("remove")])],1)],1)],2)],1)}))],1)},T=[],M={components:{appImage:y},data:function(){return{snackbar:!1,message:"",timeout:2500}},methods:{remove:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("unsubscribe",{url:"/show",method:"delete",data:e});case 3:return t.next=5,this.$store.dispatch("getSubscriptions",{url:"/shows",method:"get"});case 5:s=t.sent,this.$store.commit("setSubscriptions",s.data.data),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),this.message="Something happened!",this.snackbar=!0;case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},computed:{subscriptions:function(){return this.$store.getters.getSubscriptions}}},U=M,F=Object(m["a"])(U,P,T,!1,null,null,null);F.options.__file="Subscriptions.vue";var A=F.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-snackbar",{attrs:{top:"",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[s("span",{staticClass:"subheading"},[t._v(t._s(t.message))]),s("v-btn",{attrs:{flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),s("v-layout",{attrs:{column:""}},[s("v-flex",[s("v-radio-group",{attrs:{row:""},on:{change:t.search},model:{value:t.row,callback:function(e){t.row=e},expression:"row"}},[s("v-container",[s("v-layout",t._l(t.days,function(t,e){return s("v-flex",{key:e},[s("v-radio",{attrs:{label:t,value:t}})],1)}))],1)],1)],1),s("v-flex",[s("v-container",{staticClass:"px-0",attrs:{"grid-list-md":"","fill-height":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}]},[s("app-spinner",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}]})],1),t._l(t.subscriptions,function(t,e){return s("v-flex",{key:e,attrs:{xs3:""}},[s("app-image",{attrs:{series:t}},[s("template",{slot:"subscriptions-image"},[s("v-img",{staticClass:"img",attrs:{src:t.posterUrl,contain:"","aspect-ratio":"0.68"}})],1)],2)],1)})],2)],1)],1)],1)],1)},H=[],J={computed:{subscriptions:function(){return this.$store.getters.getSeries}},data:function(){return{loaded:!1,row:null,snackbar:!1,timeout:2500,message:"",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},components:{appImage:y,appSpinner:I},methods:{search:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){var s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loaded=!0,this.$store.commit("setSeries",[]),s={url:"/shows/".concat(e),method:"get"},t.next=6,this.$store.dispatch("getSubscriptionsByDay",s);case 6:r=t.sent,this.loaded=!1,this.$store.commit("setSeries",r.data.data),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),this.message="Something went wrong!",this.snackbar=!0;case 15:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}},K=J,W=Object(m["a"])(K,B,H,!1,null,null,null);W.options.__file="Calendar.vue";var V=W.exports;r["default"].use(u["a"]);var Y=[{path:"/",component:f,name:"home"},{path:"/search",component:D,name:"search"},{path:"/subscriptions",component:A,name:"subscriptions"},{path:"/calendar",component:V,name:"calendar"}],q=new u["a"]({mode:"history",routes:Y}),z={computed:{started:function(){var t=sessionStorage.getItem("start");return t?this.$store.commit("setStart",!0):(sessionStorage.removeItem("start"),this.$store.commit("setStart",!1)),this.$store.getters.getStart},showSearchCount:function(){return 0!==this.seriesCount&&"search"==this.$route.name},showCalendarCount:function(){return 0!==this.seriesCount&&"calendar"==this.$route.name},showSubscriptionsCount:function(){return 0!==this.$store.getters.getSubscriptions.length},seriesCount:function(){return this.$store.getters.getSeries.length},subscriptionsCount:function(){return this.$store.getters.getSubscriptions.length}},methods:{done:function(){q.push({name:"home"}),this.$store.commit("setStart",!1),sessionStorage.removeItem("start")},search:function(){"search"!==this.$route.name?q.push({name:"search"}):this.$store.commit("setSeries",[])},subscriptions:function(){this.$store.commit("setSeries",[]),q.push({name:"subscriptions"})},calendar:function(){this.$store.commit("setSeries",[]),q.push({name:"calendar"})}},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e={url:"/shows",method:"get"},t.next=4,this.$store.dispatch("getSubscriptions",e);case 4:s=t.sent,this.$store.commit("setSubscriptions",s.data.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("Something went wrong!");case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}()},G=z,L=Object(m["a"])(G,i,o,!1,null,null,null);L.options.__file="Header.vue";var Q=L.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-footer",{attrs:{app:"",height:"auto"}},[s("v-container",{attrs:{fluid:""}},[s("v-layout",[t._v("\n      © "+t._s((new Date).getFullYear())+"\n    ")])],1)],1)},Z=[],tt={},et=Object(m["a"])(tt,X,Z,!1,null,null,null);et.options.__file="Footer.vue";var st=et.exports,rt={components:{"app-header":Q,"app-footer":st}},nt=rt,at=Object(m["a"])(nt,n,a,!1,null,null,null);at.options.__file="App.vue";var it=at.exports,ot=s("ce5b"),ct=s.n(ot),ut=(s("bf40"),s("d1e7"),s("be19")),lt=s("2f62"),pt=s("bc3a"),ht=s.n(pt);r["default"].use(lt["a"]);var dt=new lt["a"].Store({state:{started:!1,subscriptions:[],series:[]},getters:{getStart:function(t){return t.started},getSubscriptions:function(t){return t.subscriptions},getSeries:function(t){return t.series}},mutations:{setStart:function(t,e){t.started=e},setSubscriptions:function(t,e){t.subscriptions=e},setSeries:function(t,e){t.series=e}},actions:{search:function(t,e){return Object(ut["a"])(t),ht()(e)},subscribe:function(t,e){return Object(ut["a"])(t),ht()(e)},unsubscribe:function(t,e){return Object(ut["a"])(t),ht()(e)},getSubscriptions:function(t,e){return Object(ut["a"])(t),ht()(e)},getSubscriptionsByDay:function(t,e){return Object(ut["a"])(t),ht()(e)}}});r["default"].config.productionTip=!1,r["default"].use(ct.a),new r["default"]({el:"#app",render:function(t){return t(it)},router:q,store:dt})},"5e11":function(t,e,s){"use strict";var r=s("b601"),n=s.n(r);n.a},"9bc4":function(t,e,s){"use strict";var r=s("3f3b"),n=s.n(r);n.a},b601:function(t,e,s){}});
//# sourceMappingURL=app.eb15c5a0.js.map