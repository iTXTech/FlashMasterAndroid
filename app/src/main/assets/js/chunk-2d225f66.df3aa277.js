(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225f66"],{e742:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-flex",{attrs:{lg12:""}},[a("v-card",[a("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[a("v-text-field",{staticClass:"pn",attrs:{flat:"",solo:"",clearable:"","prepend-icon":"mdi-magnify",placeholder:t.$t("flashId"),"hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),a("v-btn",{attrs:{icon:""},on:{click:t.search}},[a("v-icon",[t._v("mdi-arrow-right")])],1)],1),a("v-divider"),a("v-card-text",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.idHeaders,items:t.ids,"disable-sort":"","no-data-text":"","hide-default-footer":"","mobile-breakpoint":NaN,"items-per-page":t.itemsPerPage},scopedSlots:t._u([{key:"item.action",fn:function(e){var i=e.item;return[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:""}},i),[a("v-icon",[t._v("mdi-animation")])],1)]}}],null,!0)},[a("v-list",t._l(i.rawPns,(function(e,i){return a("v-list-item",{key:i,on:{click:function(a){return t.list(e)}}},[a("v-list-item-action",{staticClass:"mx-0"},[t._v(t._s(e))])],1)})),1)],1)]}}])})],1)],1)],1)],1),a("v-snackbar",{attrs:{timeout:t.snackbar.timeout},model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v(" "+t._s(t.snackbar.text)+" "),a("v-btn",{attrs:{text:"",color:"blue"},on:{click:function(e){t.snackbar.show=!1}}},[t._v(t._s(t.$t("close")))])],1)],1)},n=[],s=(a("caad"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("841c"),a("1276"),a("4360")),r=a("a18c"),o={data:function(){return{itemsPerPage:1e4,snackbar:{timeout:1e3,show:!1,text:""},id:"",ids:[],tids:[]}},computed:{idHeaders:function(){return[{text:this.$t("flashId"),value:"id",align:"left"},{text:this.$t("partNumber"),value:"pns",align:"left"},{text:this.$t("action"),value:"action"},{text:this.$t("controllers"),value:"cons",aligh:"left"}]}},methods:{search:function(){var t=this;""!=this.id?(this.id=this.id.toUpperCase(),this.$route.query.id!=this.id&&r["a"].push({path:"/searchId",query:{id:this.id}}),fetch(s["a"].getServerAddress()+"/searchId?id="+this.id).then((function(t){return t.json()})).then((function(e){for(var a in t.tids=[],e.data){var i="",n=[];for(var r in e.data[a])i+=String(e.data[a][r]).split(" ")[1]+", ",n.push(String(e.data[a][r]).split(" ")[1]);i=i.substring(0,i.length-2),t.tids.push({id:a,pns:i,rawPns:n})}fetch(s["a"].getServerAddress()+"/searchController?id="+t.id).then((function(t){return t.json()})).then((function(e){var a=0;for(var i in e.data){var n="";for(var s in e.data[i])n+=String(e.data[i][s])+", ";n=n.substring(0,n.length-2),t.tids[a].cons=n,a++}t.ids=t.tids}))})).catch((function(e){t.snackbar={timeout:3e3,show:!0,text:t.$t("alert.fetchFailed",[e])}}))):this.snackbar={timeout:3e3,show:!0,text:this.$t("alert.missingFlashId")}},list:function(t){r["a"].push({path:"/decode",query:{pn:t}})}},created:function(){Object.keys(this.$route.query).includes("id")&&(this.id=this.$route.query.id,this.search())}},c=o,d=a("2877"),l=a("6544"),u=a.n(l),h=a("40dc"),f=a("8336"),v=a("b0af"),p=a("99d9"),b=a("a523"),m=a("8fea"),k=a("ce7e"),x=a("0e8f"),g=a("132d"),w=a("8860"),y=a("da13"),V=a("1800"),_=a("e449"),$=a("2db4"),C=a("8654"),I=Object(d["a"])(c,i,n,!1,null,null,null);e["default"]=I.exports;u()(I,{VAppBar:h["a"],VBtn:f["a"],VCard:v["a"],VCardText:p["b"],VContainer:b["a"],VDataTable:m["a"],VDivider:k["a"],VFlex:x["a"],VIcon:g["a"],VList:w["a"],VListItem:y["a"],VListItemAction:V["a"],VMenu:_["a"],VSnackbar:$["a"],VTextField:C["a"]})}}]);