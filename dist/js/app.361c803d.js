(function(t){function e(e){for(var i,a,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)a=o[p],r[a]&&d.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},r={app:0},n=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"51a9":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var i=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{dark:""}},[s("app-header"),s("v-content",[s("router-view")],1),s("app-footer")],1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-toolbar",{attrs:{app:""}},[s("v-toolbar-side-icon"),t.showTitle?s("v-container",{staticClass:"hidden-md-and-up",attrs:{fluid:""}},[s("div",{staticClass:"title"},[s("v-badge",[t.showBadge?s("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.badgeNumber))]):t._e(),t._v("\n        "+t._s(t.title)+"\n      ")])],1)]):t._e(),s("v-spacer"),s("v-toolbar-items",{staticClass:"hidden-md-and-up"},[t.showButtons?s("v-btn",{attrs:{icon:"",left:"",flat:""},on:{click:t.switchView}},[t.showListIcon?s("v-icon",{attrs:{small:""}},[t._v("fas fa-th")]):s("v-icon",[t._v("view_list")])],1):t._e(),t.onStartPage?t._e():s("v-menu",[s("v-btn",{attrs:{slot:"activator",left:"",icon:""},slot:"activator"},[s("v-icon",[t._v("more_vert")])],1),s("v-list",[s("v-list-tile",{on:{click:t.search}},[s("v-list-tile-title",[t._v("Search")])],1),s("v-list-tile",{on:{click:t.subscriptions}},[s("v-list-tile-title",[t._v("Subscriptions")])],1),s("v-list-tile",{on:{click:t.calendar}},[s("v-list-tile-title",[t._v("Calendar")])],1),s("v-list-tile",{on:{click:t.finish}},[s("v-list-tile-title",[t._v("Finish")])],1)],1)],1)],1),s("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t.started?[s("v-btn",{attrs:{flat:""},on:{click:t.search}},[s("v-badge",[t.showSearchCount?s("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.seriesCount))]):t._e(),t._v("\n          Search\n        ")])],1),s("v-btn",{attrs:{flat:""},on:{click:t.subscriptions}},[s("v-badge",[t.showSubscriptionsCount?s("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.subscriptionsCount))]):t._e(),t._v("\n          Subscriptions\n        ")])],1),s("v-btn",{attrs:{flat:""},on:{click:t.calendar}},[s("v-badge",[t.showCalendarCount?s("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.seriesCount))]):t._e(),t._v("\n          Calendar\n        ")])],1),s("v-btn",{attrs:{flat:""},on:{click:t.finish}},[t._v("Finish")])]:t._e()],2)],1)},o=[],c=(s("96cf"),s("3040")),l=(s("7f7f"),s("8c4f")),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":""}},[s("v-layout",{attrs:{"align-center":"","justify-center":""}},[s("v-btn",{on:{click:t.start}},[t._v("Start")])],1)],1)},p=[],d={mounted:function(){var t=sessionStorage.getItem("start");t&&pt.push({name:"search"})},methods:{start:function(){pt.push({name:"search"}),this.$store.commit("setStart",!0),sessionStorage.setItem("start",!0)}}},h=d,v=s("2877"),m=Object(v["a"])(h,u,p,!1,null,null,null);m.options.__file="Home.vue";var f=m.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticStyle:{height:"100%"}},[s("v-layout",{attrs:{column:"","fill-height":""}},[s("v-snackbar",{attrs:{top:"",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[s("span",{staticClass:"subheading"},[t._v(t._s(t.message))]),s("v-btn",{attrs:{flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),s("v-toolbar",[s("v-text-field",{attrs:{placeholder:"Search for a TV series",clearable:"","prepend-inner-icon":"search"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1),t.loaded?s("app-spinner"):s("v-container",{staticClass:"px-0",attrs:{fluid:"","fill-height":"","grid-list-md":""}},[s("v-layout",{staticClass:"hidden-md-and-up",attrs:{row:"",wrap:""}},t._l(t.series,function(e,i){return s("v-flex",{key:i,attrs:{xs6:""}},[s("app-image-mobile",{attrs:{series:e}},[s("template",{slot:"search-image"},[s("v-img",{staticClass:"img",attrs:{src:t.getImage(e),"aspect-ratio":"0.68",contain:""}})],1),s("template",{slot:"search-button"},[s("v-btn",{attrs:{left:"",flat:"",icon:""},on:{click:function(s){t.subscribe(e,i)}}},[t.isSubscribed(i)?s("v-icon",[t._v("remove")]):s("v-icon",[t._v("add")])],1)],1),s("template",{slot:"search-info"},[s("app-info",{attrs:{series:e,display:!1}})],1)],2)],1)})),s("v-layout",{staticClass:"hidden-sm-and-down",attrs:{row:"",wrap:""}},t._l(t.series,function(e,i){return s("v-flex",{key:i,attrs:{xs3:""}},[s("app-image-mobile",{attrs:{series:e}},[s("template",{slot:"search-image"},[s("v-img",{staticClass:"img",attrs:{src:t.getImage(e),"aspect-ratio":"0.68",contain:""}})],1),s("template",{slot:"search-button"},[s("v-btn",{attrs:{left:"",flat:"",icon:""},on:{click:function(s){t.subscribe(e,i)}}},[t.isSubscribed(i)?s("v-icon",[t._v("remove")]):s("v-icon",[t._v("add")])],1)],1),s("template",{slot:"search-info"},[s("app-info",{attrs:{series:e,display:!1}})],1)],2)],1)}))],1)],1)],1)},g=[],_=(s("ac6a"),s("6b54"),s("6762"),s("2fdb"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{flat:"",tile:""}},[s("v-responsive",[s("div",{staticClass:"card"},[t._t("search-image"),s("div",{staticClass:"overview"},[s("h3",[t._v(t._s(t.series.seriesName))]),s("p",[t._v(t._s(t.series.overview))]),s("h4",[t._v("Air Date:")]),s("p",[t._v(t._s(t.series.airsDayOfWeek))]),s("h4",[t._v("Status:")]),s("p",[t._v(t._s(t.series.status))])])],2)]),s("v-card-actions",[s("span",{staticClass:"ellipsis",attrs:{title:t.series.seriesName}},[t._v(t._s(t.series.seriesName))]),s("v-spacer"),t._t("search-button"),t._t("subscriptions-button")],2)],1)}),w=[],S={props:["series"]},y=S,x=(s("6d6e"),Object(v["a"])(y,_,w,!1,null,"48ba74df",null));x.options.__file="Image.vue";var k=x.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{flat:"",tile:""}},[s("v-responsive",[t._t("search-image"),t._t("subscriptions-image"),t._t("calendar-image")],2),s("v-card-actions",[s("span",{staticClass:"ellipsis",attrs:{title:t.series.seriesName}},[t._v(t._s(t.series.seriesName))]),s("v-spacer"),s("app-dialog",{attrs:{series:t.series}},[s("template",{slot:"subscriptions-button"},[t._t("subscriptions-button")],2),s("template",{slot:"search-button"},[t._t("search-button")],2),s("template",{slot:"calendar-button"},[t._t("calendar-button")],2),s("template",{slot:"search-info"},[t._t("search-info")],2),s("template",{slot:"subscriptions-info"},[t._t("subscriptions-info")],2),s("template",{slot:"calendar-info"},[t._t("calendar-info")],2)],2)],1)],1)},$=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-btn",{attrs:{slot:"activator",icon:"",small:""},slot:"activator"},[s("v-icon",[t._v("info")])],1),s("v-card",[s("v-toolbar",[s("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[s("v-icon",[t._v("close")])],1),s("v-container",{staticClass:"overflow-x-hidden"},[s("div",{staticClass:"text-xs-center title ellipsis"},[t._v(t._s(t.series.seriesName))])]),s("v-spacer"),s("v-toolbar-items",{on:{click:function(e){t.dialog=!1}}},[t._t("search-button"),t._t("subscriptions-button"),t._t("calendar-button")],2)],1),s("v-card-text",[t._t("search-info"),t._t("subscriptions-info"),t._t("calendar-info")],2)],1)],1)},j=[],I={props:["series"],data:function(){return{dialog:!1}}},V=I,L=Object(v["a"])(V,O,j,!1,null,null,null);L.options.__file="Dialog.vue";var E=L.exports,N={props:["series"],components:{"app-dialog":E}},P=N,R=Object(v["a"])(P,C,$,!1,null,null,null);R.options.__file="Image-2.vue";var U=R.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"px-0",attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{"d-flex":"","justify-center":"","align-center":""}},[s("v-progress-circular",{attrs:{value:80,indeterminate:""}})],1)],1)],1)},A=[],D={},F=Object(v["a"])(D,T,A,!1,null,null,null);F.options.__file="Spinner.vue";var M=F.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h4",[t._v("Name:")]),s("p",{staticClass:"cpation"},[t._v(t._s(t.series.seriesName))]),s("h4",[t._v("Overview:")]),s("p",{staticClass:"caption"},[t._v(t._s(t.series.overview))]),s("h4",[t._v("Status:")]),s("p",{staticClass:"caption"},[t._v(t._s(t.series.status))]),t.display?[s("h4",[t._v("Air Date:")]),s("p",{staticClass:"caption"},[t._v(t._s(t.series.airsDayOfWeek))]),s("h4",[t._v("Aired Seasons:")]),s("p",{staticClass:"caption"},[t._v(t._s(t.series.airedSeasons.length))]),s("h4",[t._v("Aired Episodes:")]),s("p",{staticClass:"caption"},[t._v(t._s(t.series.airedEpisodes))])]:t._e()],2)},H=[],W={props:["series","display"]},J=W,K=Object(v["a"])(J,B,H,!1,null,null,null);K.options.__file="Info.vue";var Y=K.exports,q={components:{appImage:k,appSpinner:M,"app-image-mobile":U,"app-info":Y},data:function(){return{show:"",selected:[],loaded:!1,snackbar:!1,timeout:2500,message:"",baseUrl:"https://www.thetvdb.com/banners/posters/",noImage:"https://via.placeholder.com/680x1000.png?text=No+Image"}},computed:{series:function(){return this.$store.getters.getSeries},isListView:function(){return this.$store.getters.getIsListView}},mounted:function(){this.$store.commit("setSeries",[])},methods:{subscribe:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,s){var i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.selected.includes(s)){t.next=12;break}return this.$set(this.selected,s,s),t.next=5,this.$store.dispatch("subscribe",{url:"/subscriptions",method:"post",data:e});case 5:return t.next=7,this.$store.dispatch("getSubscriptions",{url:"/subscriptions/all",method:"get"});case 7:return i=t.sent,t.next=10,this.$store.commit("setSubscriptions",i.data.data);case 10:t.next=19;break;case 12:return this.$delete(this.selected,s),t.next=15,this.$store.dispatch("unsubscribe",{url:"/subscriptions",method:"delete",data:e});case 15:return t.next=17,this.$store.dispatch("getSubscriptions",{url:"/subscriptions/all",method:"get"});case 17:r=t.sent,this.$store.commit("setSubscriptions",r.data.data);case 19:t.next=25;break;case 21:t.prev=21,t.t0=t["catch"](0),this.message="Something went wrong!",this.snackbar=!0;case 25:case"end":return t.stop()}},t,this,[[0,21]])}));return function(e,s){return t.apply(this,arguments)}}(),isSubscribed:function(t){return this.selected.includes(t)},getImage:function(t){return t.posterKey?"".concat(this.baseUrl).concat(t.posterKey):this.noImage},search:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,s,i,r,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,""===this.show){t.next=15;break}return this.loaded=!0,this.selected=[],this.$store.commit("setSeries",[]),e={url:"/show/search",method:"post",data:{show:this.show}},this.show="",t.next=9,this.$store.dispatch("search",e);case 9:s=t.sent,this.loaded=!1,this.$store.commit("setSeries",s.data.data),i=this.$store.getters.getSeries.map(function(t){return t.id.toString()}),r=this.$store.getters.getSubscriptions,r.forEach(function(t){if(-1!==i.indexOf(t._id)){var e=i.indexOf(t._id);n.$set(n.selected,e,e)}});case 15:t.next=22;break;case 17:t.prev=17,t.t0=t["catch"](0),this.loaded=!1,this.message="Not Found",this.snackbar=!0;case 22:case"end":return t.stop()}},t,this,[[0,17]])}));return function(){return t.apply(this,arguments)}}()}},z=q,G=Object(v["a"])(z,b,g,!1,null,null,null);G.options.__file="Search.vue";var Q=G.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-md":""}},[t.isListView?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-list",{staticClass:"py-0"},[t._l(t.subscriptions,function(e,i){return[0!=i?s("v-divider",{key:i}):t._e(),s("v-list-tile",{key:i},[s("v-list-tile-avatar",[s("v-img",{attrs:{src:e.posterUrl}})],1),s("v-list-tile-content",[s("v-list-tile-title",{domProps:{textContent:t._s(e.seriesName)}})],1),s("v-list-tile-action",[s("app-dialog",{attrs:{series:e}},[s("template",{slot:"subscriptions-button"},[s("v-btn",{attrs:{left:"",flat:"",icon:""},on:{click:function(s){t.remove(e)}}},[s("v-icon",[t._v("remove")])],1)],1),s("template",{slot:"subscriptions-info"},[s("app-info",{attrs:{series:e,display:!0}})],1)],2)],1)],1)]})],2)],1)],1):[s("v-layout",{staticClass:"hidden-md-and-up",attrs:{row:"",wrap:""}},t._l(t.subscriptions,function(e,i){return s("v-flex",{key:i,attrs:{xs6:""}},[s("app-image-mobile",{attrs:{series:e}},[s("template",{slot:"subscriptions-image"},[s("v-img",{staticClass:"img",attrs:{src:e.posterUrl,"aspect-ratio":"0.68",contain:""}})],1),s("template",{slot:"subscriptions-button"},[s("v-btn",{attrs:{left:"",flat:"",icon:""},on:{click:function(s){t.remove(e)}}},[s("v-icon",[t._v("remove")])],1)],1),s("template",{slot:"subscriptions-info"},[s("app-info",{attrs:{series:e,display:!0}})],1)],2)],1)})),s("v-layout",{staticClass:"hidden-sm-and-down",attrs:{row:"",wrap:""}},t._l(t.subscriptions,function(e,i){return s("v-flex",{key:i,attrs:{xs3:""}},[s("app-image-mobile",{attrs:{series:e}},[s("template",{slot:"subscriptions-image"},[s("v-img",{staticClass:"img",attrs:{src:e.posterUrl,"aspect-ratio":"0.68",contain:""}})],1),s("template",{slot:"subscriptions-button"},[s("v-btn",{attrs:{left:"",flat:"",icon:""},on:{click:function(s){t.remove(e)}}},[s("v-icon",[t._v("remove")])],1)],1),s("template",{slot:"subscriptions-info"},[s("app-info",{attrs:{series:e,display:!0}})],1)],2)],1)}))]],2)},Z=[],tt={components:{"app-image":k,"app-image-mobile":U,"app-dialog":E,"app-info":Y},data:function(){return{snackbar:!1,message:"",timeout:2500,page:"Subscriptions"}},methods:{remove:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("unsubscribe",{url:"/subscriptions",method:"delete",data:e});case 3:return t.next=5,this.$store.dispatch("getSubscriptions",{url:"/subscriptions/all",method:"get"});case 5:s=t.sent,this.$store.commit("setSubscriptions",s.data.data),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),this.message="Something happened!",this.snackbar=!0;case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},computed:{isListView:function(){return this.$store.getters.getIsListView},subscriptions:function(){return this.$store.getters.getSubscriptions}}},et=tt,st=Object(v["a"])(et,X,Z,!1,null,null,null);st.options.__file="Subscriptions.vue";var it=st.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticStyle:{height:"100%"}},[s("v-layout",{attrs:{column:"","fill-height":""}},[s("v-select",{attrs:{items:t.days,label:"Select a day"},on:{change:t.search},model:{value:t.row,callback:function(e){t.row=e},expression:"row"}}),t.loaded?s("app-spinner"):t.isListView?s("v-container",{staticClass:"px-0",attrs:{fluid:""}},[t.isListView?s("v-list",{staticClass:"py-0"},[t._l(t.subscriptions,function(e,i){return[0!=i?s("v-divider",{key:i}):t._e(),s("v-list-tile",{key:i},[s("v-list-tile-avatar",[s("v-img",{attrs:{src:e.posterUrl}})],1),s("v-list-tile-content",[s("v-list-tile-title",{domProps:{textContent:t._s(e.seriesName)}})],1),s("v-list-tile-action",[s("app-dialog",{attrs:{series:e}},[s("template",{slot:"calendar-button"},[s("v-btn",{attrs:{flat:"",icon:"",left:""}},[s("v-icon")],1)],1),s("template",{slot:"calendar-info"},[s("app-info",{attrs:{series:e,display:!0}})],1)],2)],1)],1)]})],2):t._e()],1):s("v-container",{staticClass:"px-0",attrs:{fluid:"","grid-list-md":"","fill-height":""}},[s("v-layout",{staticClass:"hidden-md-and-up",attrs:{row:"",wrap:""}},t._l(t.subscriptions,function(t,e){return s("v-flex",{key:e,attrs:{xs6:""}},[s("app-image-mobile",{attrs:{series:t}},[s("template",{slot:"calendar-image"},[s("v-img",{staticClass:"img",attrs:{src:t.posterUrl,contain:"","aspect-ratio":"0.68"}})],1),s("template",{slot:"calendar-button"},[s("v-btn",{attrs:{flat:"",icon:"",left:""}},[s("v-icon")],1)],1),s("template",{slot:"calendar-info"},[s("app-info",{attrs:{series:t,display:!0}})],1)],2)],1)})),s("v-layout",{staticClass:"hidden-sm-and-down",attrs:{row:"",wrap:""}},t._l(t.subscriptions,function(t,e){return s("v-flex",{key:e,attrs:{xs3:""}},[s("app-image-mobile",{attrs:{series:t}},[s("template",{slot:"calendar-image"},[s("v-img",{staticClass:"img",attrs:{src:t.posterUrl,contain:"","aspect-ratio":"0.68"}})],1),s("template",{slot:"calendar-button"},[s("v-btn",{attrs:{flat:"",icon:"",left:""}},[s("v-icon")],1)],1),s("template",{slot:"calendar-info"},[s("app-info",{attrs:{series:t,display:!0}})],1)],2)],1)}))],1)],1)],1)},nt=[],at={computed:{subscriptions:function(){return this.$store.getters.getSeries},isListView:function(){return this.$store.getters.getIsListView}},data:function(){return{loaded:!1,row:"",snackbar:!1,timeout:2500,message:"",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},components:{"app-image":k,"app-image-mobile":U,"app-spinner":M,"app-dialog":E,"app-info":Y},methods:{search:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){var s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loaded=!0,this.$store.commit("setSeries",[]),s={url:"/subscriptions/".concat(e),method:"get"},t.next=6,this.$store.dispatch("getSubscriptions",s);case 6:i=t.sent,this.loaded=!1,this.$store.commit("setSeries",i.data.data),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),this.message="Something went wrong!",this.snackbar=!0;case 15:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}},ot=at,ct=Object(v["a"])(ot,rt,nt,!1,null,null,null);ct.options.__file="Calendar.vue";var lt=ct.exports;i["default"].use(l["a"]);var ut=[{path:"/",component:f,name:"home"},{path:"/search",component:Q,name:"search"},{path:"/subscriptions",component:it,name:"subscriptions"},{path:"/calendar",component:lt,name:"calendar"}],pt=new l["a"]({mode:"history",routes:ut}),dt={computed:{started:function(){var t=sessionStorage.getItem("start");return t?this.$store.commit("setStart",!0):(sessionStorage.removeItem("start"),this.$store.commit("setStart",!1)),this.$store.getters.getStart},onStartPage:function(){return"home"==this.$route.name},showButtons:function(){return"search"!=this.$route.name&&!this.onStartPage},showTitle:function(){return"Home"!==this.title},badgeNumber:function(){var t=!1;switch(this.$route.name){case"subscriptions":t=this.subscriptionsCount;break;default:t=this.seriesCount}return t},isListView:function(){return this.$store.getters.getIsListView},showListIcon:function(){return this.isListView},showBadge:function(){var t=!1;switch(this.$route.name){case"search":t=this.showSearchCount;break;case"calendar":t=this.showCalendarCount;break;case"subscriptions":t=this.showSubscriptionsCount}return t},title:function(){var t=this.$route.name;return t.charAt(0).toUpperCase()+t.slice(1)},showSearchCount:function(){return 0!==this.seriesCount&&"search"==this.$route.name},showCalendarCount:function(){return 0!==this.seriesCount&&"calendar"==this.$route.name},showSubscriptionsCount:function(){return 0!==this.$store.getters.getSubscriptions.length},seriesCount:function(){return this.$store.getters.getSeries.length},subscriptionsCount:function(){return this.$store.getters.getSubscriptions.length}},methods:{switchView:function(){this.$store.commit("setIsListView",!this.$store.getters.getIsListView)},finish:function(){pt.push({name:"home"}),this.$store.commit("setStart",!1),sessionStorage.removeItem("start")},search:function(){"search"!==this.$route.name?pt.push({name:"search"}):this.$store.commit("setSeries",[])},subscriptions:function(){this.$store.commit("setSeries",[]),pt.push({name:"subscriptions"})},calendar:function(){this.$store.commit("setSeries",[]),pt.push({name:"calendar"})}},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e={url:"/subscriptions/all",method:"get"},t.next=4,this.$store.dispatch("getSubscriptions",e);case 4:s=t.sent,this.$store.commit("setSubscriptions",s.data.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("Something went wrong!");case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}()},ht=dt,vt=Object(v["a"])(ht,a,o,!1,null,null,null);vt.options.__file="Header.vue";var mt=vt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-footer",{attrs:{app:"",height:"auto"}},[s("v-container",{attrs:{fluid:""}},[s("v-layout",[t._v("\n      © "+t._s((new Date).getFullYear())+"\n    ")])],1)],1)},bt=[],gt={},_t=Object(v["a"])(gt,ft,bt,!1,null,null,null);_t.options.__file="Footer.vue";var wt=_t.exports,St={components:{"app-header":mt,"app-footer":wt}},yt=St,xt=Object(v["a"])(yt,r,n,!1,null,null,null);xt.options.__file="App.vue";var kt=xt.exports,Ct=s("ce5b"),$t=s.n(Ct),Ot=(s("bf40"),s("d1e7"),s("15f5"),s("be19")),jt=s("2f62"),It=s("bc3a"),Vt=s.n(It);i["default"].use(jt["a"]);var Lt=new jt["a"].Store({state:{started:!1,subscriptions:[],series:[],isListView:!1},getters:{getStart:function(t){return t.started},getSubscriptions:function(t){return t.subscriptions},getSeries:function(t){return t.series},getIsListView:function(t){return t.isListView}},mutations:{setStart:function(t,e){t.started=e},setSubscriptions:function(t,e){t.subscriptions=e},setSeries:function(t,e){t.series=e},setIsListView:function(t,e){t.isListView=e}},actions:{search:function(t,e){return Object(Ot["a"])(t),Vt()(e)},subscribe:function(t,e){return Object(Ot["a"])(t),Vt()(e)},unsubscribe:function(t,e){return Object(Ot["a"])(t),Vt()(e)},getSubscriptions:function(t,e){return Object(Ot["a"])(t),Vt()(e)}}});i["default"].config.productionTip=!1,i["default"].use($t.a),new i["default"]({el:"#app",render:function(t){return t(kt)},router:pt,store:Lt})},"6d6e":function(t,e,s){"use strict";var i=s("51a9"),r=s.n(i);r.a}});
//# sourceMappingURL=app.361c803d.js.map