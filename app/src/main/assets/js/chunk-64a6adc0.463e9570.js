(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64a6adc0"],{"0331":function(t,e,a){t.exports=a.p+"img/micron.4df061ec.svg"},1681:function(t,e,a){},"2f60":function(t,e,a){t.exports=a.p+"img/skhynix.1d3e010d.svg"},"7d2f":function(t,e,a){t.exports=a.p+"img/wd.2579c425.svg"},a2fd:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"fm-bg"},[a("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[a("v-toolbar-title",[t._v(t._s(t.$t("flashId")))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.summary}},[a("v-icon",[t._v("mdi-book-information-variant")])],1)],1),a("v-card-text",[a("v-combobox",{ref:"pnInput",staticClass:"pn",attrs:{items:t.searchedPns,"return-object":!1,clearable:"","no-filter":"",loading:t.loading},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.query.apply(null,arguments)},"update:search-input":t.searchPnDirectly},model:{value:t.partNumber,callback:function(e){t.partNumber=e},expression:"partNumber"}})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"accent",text:""},on:{click:t.query}},[t._v(t._s(t.$t("searchIdPage.query")))]),a("v-btn",{attrs:{color:"accent",text:""},on:{click:t.search}},[t._v(t._s(t.$t("searchIdPage.search")))])],1)],1)],1),a("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"fm-bg"},[a("v-card-title",[t._v(t._s(t.$t("vendor")))]),a("v-card-text",[a("v-img",{attrs:{src:t.vendorLogo}}),a("v-text-field",{model:{value:t.vendor,callback:function(e){t.vendor=e},expression:"vendor"}})],1)],1)],1),a("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"fm-bg"},[a("v-card-text",[a("v-text-field",{attrs:{label:t.$t("cellLevel")},model:{value:t.cellLevel,callback:function(e){t.cellLevel=e},expression:"cellLevel"}}),a("v-text-field",{attrs:{label:t.$t("density")},model:{value:t.density,callback:function(e){t.density=e},expression:"density"}}),a("v-text-field",{attrs:{label:t.$t("processNode")},model:{value:t.processNode,callback:function(e){t.processNode=e},expression:"processNode"}}),a("v-text-field",{attrs:{label:t.$t("pageSize")},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}})],1)],1)],1),a("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"fm-bg"},[a("v-card-text",[a("v-text-field",{attrs:{label:t.$t("die")},model:{value:t.die,callback:function(e){t.die=e},expression:"die"}}),a("v-text-field",{attrs:{label:t.$t("plane")},model:{value:t.plane,callback:function(e){t.plane=e},expression:"plane"}}),a("v-text-field",{attrs:{label:t.$t("blockSize")},model:{value:t.blockSize,callback:function(e){t.blockSize=e},expression:"blockSize"}}),a("v-text-field",{attrs:{label:t.$t("voltage")},model:{value:t.voltage,callback:function(e){t.voltage=e},expression:"voltage"}})],1)],1)],1),a("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"fm-bg"},[a("v-card-text",[a("v-textarea",{attrs:{"auto-grow":"",rows:"1",label:t.$t("controllers")},model:{value:t.controllers,callback:function(e){t.controllers=e},expression:"controllers"}})],1)],1)],1),a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"fm-bg"},[a("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[a("v-toolbar-title",[t._v(t._s(t.$t("extraInfo")))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.copyAll}},[a("v-icon",[t._v("mdi-content-copy")])],1)],1),a("v-card-text",[a("v-data-table",{staticClass:"elevation-1 fm-bg",attrs:{headers:t.extraInfoHeaders,items:t.extraInfo,"hide-default-footer":"","disable-sort":"","no-data-text":"","mobile-breakpoint":NaN,"items-per-page":t.itemsPerPage},scopedSlots:t._u([{key:"item.copy",fn:function(e){var n=e.item;return[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.copy(n)}}},[a("v-icon",[t._v("mdi-content-copy")])],1)]}}])})],1)],1)],1),a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"fm-bg"},[a("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[a("v-toolbar-title",[t._v(t._s(t.$t("searchIdPage.pns")))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.copyAllFlashIds}},[a("v-icon",[t._v("mdi-content-copy")])],1)],1),a("v-card-text",[a("v-data-table",{staticClass:"elevation-1 fm-bg",attrs:{headers:t.flashIdHeaders,items:t.partNumbers,"hide-default-footer":"","disable-sort":"","no-data-text":"","mobile-breakpoint":NaN,"items-per-page":t.itemsPerPage},scopedSlots:t._u([{key:"item.action",fn:function(e){var n=e.item;return[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.searchFlashId(n)}}},[a("v-icon",[t._v("mdi-magnify")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.copyFlashId(n)}}},[a("v-icon",[t._v("mdi-content-copy")])],1)]}}])})],1)],1)],1),a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"fm-bg"},[a("v-card-title",[t._v(t._s(t.$t("urls")))]),a("v-card-text",[a("v-data-table",{staticClass:"elevation-1 fm-bg",attrs:{headers:t.urlHeaders,items:t.urls,"hide-default-footer":"","disable-sort":"","no-data-text":"","mobile-breakpoint":NaN,"items-per-page":t.itemsPerPage},scopedSlots:t._u([{key:"item.action",fn:function(e){var n=e.item;return[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.open(n.url)}}},[a("v-icon",[t._v("mdi-open-in-new")])],1)]}}])})],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}},[a("v-card",{staticClass:"fm-bg"},[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.$t("copyManually")))]),a("v-card-text",[a("v-textarea",{attrs:{"auto-grow":"",rows:"1"},model:{value:t.dialog.content,callback:function(e){t.$set(t.dialog,"content",e)},expression:"dialog.content"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"accent",text:""},on:{click:t.copyFromDialog}},[t._v(t._s(t.$t("copy")))]),a("v-btn",{attrs:{color:"accent",text:""},on:{click:function(e){t.dialog.show=!1}}},[t._v(t._s(t.$t("close")))])],1)],1)],1)],1)},o=[],r=(a("498a"),a("d3b7"),a("99af"),a("ac1f"),a("5319"),a("1276"),a("b0c0"),a("caad"),a("2532"),a("b64b"),a("4360")),s=a("a18c"),i=a("52da"),A={data:function(){return{dialog:{show:!1,content:""},itemsPerPage:1e4,vendorLogo:"",partNumber:"",vendor:"",density:"",cellLevel:"",processNode:"",pageSize:"",blockSize:"",die:"",plane:"",voltage:"",rawVendor:"",controllers:"",extraInfo:[],partNumbers:[],urls:[],sum:"",searchedPns:[],loading:!1,decodingId:""}},computed:{extraInfoHeaders:function(){return[{text:this.$t("name"),value:"name",align:"left"},{text:this.$t("value"),value:"value"},{text:this.$t("copy"),value:"copy"}]},flashIdHeaders:function(){return[{text:this.$t("vendor"),value:"vendor",align:"left"},{text:this.$t("partNumber"),value:"pn"},{text:this.$t("action"),value:"action"}]},urlHeaders:function(){return[{text:this.$t("description"),value:"description",align:"left"},{text:this.$t("action"),value:"action"}]}},methods:{showLoading:function(t){this.loading=!1!==t&&"primary"},searchPnDirectly:function(t){var e=this;null!=t&&(t=String(t).trim(),this.partNumber=t,this.searchedPns=[],t.length>=3&&fetch("".concat(r["a"].getServerAddress(),"/searchId?limit=10&lang=").concat(r["a"].getLang(),"&id=").concat(t)).then((function(t){return t.json()})).then((function(t){for(var a in t.data)e.searchedPns.push({value:a,text:a});e.$nextTick((function(){if(e.$refs.pnInput.$refs.menu.$children.length>0){var t=e.$refs.pnInput.$refs.menu.$children[0].$children[0];t.$on("select",(function(t){e.partNumber=t.value,e.query()}))}}))})))},processPn:function(){this.partNumber=r["a"].partNumberFormat(this.partNumber)},query:function(){var t=this;null!=this.partNumber&&""!==this.partNumber?this.decodingId!==this.partNumber&&(setTimeout((function(){t.$refs.pnInput.isMenuActive=!1,r["a"].isAutoHideSoftKeyboard()&&t.$refs.pnInput.blur()})),this.processPn(),this.$route.query.id!==this.partNumber&&s["a"].push({path:"/decodeId",query:{id:this.partNumber}}),this.showLoading(!0),this.decodingId=this.partNumber,fetch("".concat(r["a"].getServerAddress(),"/decodeId?lang=").concat(r["a"].getLang(),"&id=").concat(this.partNumber)).then((function(t){return t.json()})).then((function(e){if(e=e.data,t.vendor=e.vendor,t.density=r["a"].formatNumber(e.density,2,!0,r["a"].isBitUnit()),t.cellLevel=e.cellLevel,t.processNode=e.processNode,t.pageSize=r["a"].formatNumber(e.pageSize),t.voltage=e.voltage,t.blockSize=r["a"].formatNumber(e.blockSize),t.voltage=e.voltage,t.die=e.die,t.plane=e.plane,t.rawVendor=e.rawVendor,t.vendorLogo=t.getVendorLogo(),t.controllers=String(e.controllers).replace(/,/g,", "),t.extraInfo=[],null!=e.ext&&"string"!==typeof e.ext)for(var a in e.ext)t.extraInfo.push({name:a,value:e.ext[a]});if(t.partNumbers=[],null!=e.partNumbers&&"string"!==typeof e.partNumbers)for(var n in e.partNumbers){var o=String(e.partNumbers[n]).split(" ");t.partNumbers.push({vendor:o[0],pn:o[1]})}if(t.urls=[],null!=e.url&&"string"!==typeof e.url)for(var s in e.url)t.urls.push({description:s,url:e.url[s]});t.showLoading(!1),t.decodingId="",r["a"].statDecodeFidInc()})).catch((function(e){i["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchFailed",[e])}),t.showLoading(!1),t.decodingId="",console.error(e)}))):i["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("alert.missingFlashId")})},getVendorLogo:function(){switch(this.rawVendor){case"intel":return a("d777");case"micron":return a("0331");case"samsung":return a("e1d9");case"skhynix":return a("2f60");case"spectek":return a("ce47");case"westerndigital":return a("7d2f");case"kioxia":return a("b1af");case"ymtc":return a("c9ac");default:return""}},copy:function(t){this.c("".concat(t.name,": ").concat(t.value))},copyAll:function(){var t="";for(var e in this.extraInfo)e=this.extraInfo[e],t+="".concat(e.name,": ").concat(e.value,", ");this.c(t.substring(0,t.length-2))},c:function(t){var e=this;this.$copyText(t).then((function(t){i["a"].$emit("snackbar",{timeout:3e3,show:!0,text:e.$t("copySucc")})}),(function(t){i["a"].$emit("snackbar",{timeout:3e3,show:!0,text:e.$t("copyFail")})}))},summary:function(){var t=this;null!=this.partNumber&&""!==this.partNumber?(this.processPn(),this.showLoading(!0),fetch("".concat(r["a"].getServerAddress(),"/summaryId?lang=").concat(r["a"].getLang(),"&id=").concat(this.partNumber)).then((function(t){return t.json()})).then((function(e){t.$copyText(e.data).then((function(e){i["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("copySucc")})}),(function(e){t.dialog={show:!0,content:e.text}})),t.showLoading(!1)})).catch((function(e){i["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchFailed",[e])}),t.showLoading(!1)}))):i["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("alert.missingFlashId")})},copyAllFlashIds:function(){var t="";for(var e in this.partNumbers)e=this.partNumbers[e],t+="".concat(e.pn,", ");this.c(t.substring(0,t.length-2))},copyFlashId:function(t){this.c(t.pn)},search:function(){null!=this.partNumber&&""!==this.partNumber?s["a"].push({path:"/searchId",query:{id:this.partNumber}}):i["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("alert.missingFlashId")})},searchFlashId:function(t){s["a"].push({path:"/decode",query:{pn:t.pn}})},copyFromDialog:function(){var t=this;this.$copyText(this.dialog.content).then((function(e){i["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("copySucc")}),t.dialog.show=!1}),(function(e){i["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("copySucc")})}))},open:function(t){window.open(t,"_blank")}},created:function(){var t=this;Object.keys(this.$route.query).includes("id")?(this.partNumber=this.$route.query.id,this.query()):setTimeout((function(){t.$refs.pnInput.$refs.input.focus()}))}},c=A,l=a("2877"),u=a("6544"),d=a.n(u),p=a("40dc"),g=a("8336"),h=a("b0af"),f=a("99d9"),v=a("2b5d"),m=a("a523"),b=a("8fea"),x=a("169a"),I=a("0e8f"),w=a("132d"),y=a("adda"),k=a("a722"),B=a("2fa4"),C=a("8654"),Q=a("a844"),N=a("2a7f"),E=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=E.exports;d()(E,{VAppBar:p["a"],VBtn:g["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCombobox:v["a"],VContainer:m["a"],VDataTable:b["a"],VDialog:x["a"],VFlex:I["a"],VIcon:w["a"],VImg:y["a"],VLayout:k["a"],VSpacer:B["a"],VTextField:C["a"],VTextarea:Q["a"],VToolbarTitle:N["a"]})},a844:function(t,e,a){"use strict";var n=a("5530"),o=(a("a9e3"),a("1681"),a("8654")),r=a("58df"),s=Object(r["a"])(o["a"]);e["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var a;t?e.calculateInputHeight():null==(a=e.$refs.input)||a.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){o["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b1af:function(t,e,a){t.exports=a.p+"img/kioxia.b938b292.svg"},c9ac:function(t,e,a){t.exports=a.p+"img/ymtc.c66280a4.png"},ce47:function(t,e){t.exports="data:image/gif;base64,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"},d777:function(t,e,a){t.exports=a.p+"img/intel.f51e09c8.svg"},e1d9:function(t,e,a){t.exports=a.p+"img/samsung.fffade2d.svg"}}]);