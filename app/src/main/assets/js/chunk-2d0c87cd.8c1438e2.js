(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c87cd"],{"54a9":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-flex",{attrs:{lg12:""}},[a("v-card",[a("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[a("v-text-field",{staticClass:"pn",attrs:{flat:"",solo:"",clearable:"","prepend-icon":"mdi-magnify",placeholder:t.$t("partNumber"),"hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.partNumber,callback:function(e){t.partNumber=e},expression:"partNumber"}}),a("v-btn",{attrs:{icon:""},on:{click:t.search}},[a("v-icon",[t._v("mdi-arrow-right")])],1)],1),a("v-divider"),a("v-card-text",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.pnHeaders,items:t.pns,"disable-sort":"","no-data-text":"","mobile-breakpoint":NaN,"items-per-page":15,page:t.page,"footer-props":{showFirstLastPage:!0,itemsPerPageOptions:[15,30,50,100]}},on:{"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"item.action",fn:function(e){var r=e.item;return[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.decodeFlashId(r)}}},[a("v-icon",[t._v("mdi-arrow-top-left-thick")])],1)]}}])})],1)],1)],1)],1)},n=[],i=(a("caad"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("5319"),a("841c"),a("1276"),a("4360")),s=a("a18c"),o=a("52da"),c={data:function(){return{snackbar:{timeout:1e3,show:!1,text:""},partNumber:"",pns:[],page:1}},computed:{pnHeaders:function(){return[{text:this.$t("vendor"),value:"vendor",align:"left"},{text:this.$t("partNumber"),value:"pn",align:"left"},{text:this.$t("remark"),value:"remark",align:"left"},{text:this.$t("action"),value:"action"}]}},methods:{search:function(){var t=this;null!=this.partNumber&&""!==this.partNumber?(this.partNumber=this.partNumber.toUpperCase().replace(/,/g,"").replace(/ /g,""),this.$route.query.pn!==this.partNumber&&s["a"].push({path:"/searchPn",query:{pn:this.partNumber}}),this.page=1,o["a"].$emit("loading",!0),fetch(i["a"].getServerAddress()+"/searchPn?lang="+i["a"].getLang()+"&pn="+this.partNumber).then((function(t){return t.json()})).then((function(e){for(var a in t.pns=[],e.data){var r=String(e.data[a]).split(" ");t.pns.push({vendor:r[0],pn:r[1],remark:r[2]})}o["a"].$emit("loading",!1),i["a"].statSearchPnInc()})).catch((function(e){o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchFailed",[e])}),o["a"].$emit("loading",!1)}))):o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("alert.missingPartNumber")})},decodeFlashId:function(t){s["a"].push({path:"/decode",query:{pn:t.pn}})}},created:function(){Object.keys(this.$route.query).includes("pn")&&(this.partNumber=this.$route.query.pn,this.search())}},p=c,u=a("2877"),l=a("6544"),d=a.n(l),h=a("40dc"),m=a("8336"),b=a("b0af"),f=a("99d9"),v=a("a523"),g=a("8fea"),k=a("ce7e"),x=a("0e8f"),N=a("132d"),$=a("8654"),y=Object(u["a"])(p,r,n,!1,null,null,null);e["default"]=y.exports;d()(y,{VAppBar:h["a"],VBtn:m["a"],VCard:b["a"],VCardText:f["b"],VContainer:v["a"],VDataTable:g["a"],VDivider:k["a"],VFlex:x["a"],VIcon:N["a"],VTextField:$["a"]})}}]);