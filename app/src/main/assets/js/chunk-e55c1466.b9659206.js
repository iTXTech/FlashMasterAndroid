(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e55c1466"],{"0331":function(t,e,a){t.exports=a.p+"img/micron.187bc36d.svg"},1681:function(t,e,a){},"2a1a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("v-card",[a("v-card-title",[t._v(t._s(t.$t("partNumberOrFlashId")))]),a("v-card-text",[a("v-text-field",{staticClass:"pn",attrs:{clearable:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.query(e)}},model:{value:t.partNumber,callback:function(e){t.partNumber=e},expression:"partNumber"}})],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.query}},[t._v(t._s(t.$t("query")))]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.search}},[t._v(t._s(t.$t("search")))]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.searchId}},[t._v(t._s(t.$t("searchId")))])],1)],1)],1),a("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[a("v-card",[a("v-card-title",[t._v(t._s(t.$t("vendor")))]),a("v-card-text",[a("v-img",{attrs:{src:t.vendorLogo}}),a("v-text-field",{model:{value:t.vendor,callback:function(e){t.vendor=e},expression:"vendor"}})],1)],1)],1),a("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{label:t.$t("type")},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),a("v-text-field",{attrs:{label:t.$t("density")},model:{value:t.density,callback:function(e){t.density=e},expression:"density"}}),a("v-text-field",{attrs:{label:t.$t("deviceWidth")},model:{value:t.deviceWidth,callback:function(e){t.deviceWidth=e},expression:"deviceWidth"}}),a("v-text-field",{attrs:{label:t.$t("cellLevel")},model:{value:t.cellLevel,callback:function(e){t.cellLevel=e},expression:"cellLevel"}})],1)],1)],1),a("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{label:t.$t("processNode")},model:{value:t.processNode,callback:function(e){t.processNode=e},expression:"processNode"}}),a("v-text-field",{attrs:{label:t.$t("generation")},model:{value:t.generation,callback:function(e){t.generation=e},expression:"generation"}}),a("v-checkbox",{attrs:{disabled:"",label:t.$t("sync")},model:{value:t.sync,callback:function(e){t.sync=e},expression:"sync"}}),a("v-checkbox",{attrs:{disabled:"",label:t.$t("async")},model:{value:t.async,callback:function(e){t.async=e},expression:"async"}})],1)],1)],1),a("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{label:t.$t("ce")},model:{value:t.ce,callback:function(e){t.ce=e},expression:"ce"}}),a("v-text-field",{attrs:{label:t.$t("ch")},model:{value:t.ch,callback:function(e){t.ch=e},expression:"ch"}}),a("v-text-field",{attrs:{label:t.$t("die")},model:{value:t.die,callback:function(e){t.die=e},expression:"die"}}),a("v-text-field",{attrs:{label:t.$t("rb")},model:{value:t.rb,callback:function(e){t.rb=e},expression:"rb"}})],1)],1)],1),a("v-flex",{attrs:{lg5:"",sm12:"",xs12:""}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{label:t.$t("voltage")},model:{value:t.voltage,callback:function(e){t.voltage=e},expression:"voltage"}}),a("v-text-field",{attrs:{label:t.$t("package")},model:{value:t.pkg,callback:function(e){t.pkg=e},expression:"pkg"}}),a("v-textarea",{attrs:{"auto-grow":"",rows:"1",label:t.$t("controllers")},model:{value:t.controllers,callback:function(e){t.controllers=e},expression:"controllers"}}),a("v-text-field",{attrs:{label:t.$t("comment")},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)],1)],1),a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("v-card",[a("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[a("v-toolbar-title",[t._v(t._s(t.$t("extraInfo")))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.copyAll}},[a("v-icon",[t._v("mdi-content-copy")])],1)],1),a("v-card-text",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.extraInfoHeaders,items:t.extraInfo,"hide-default-footer":"","disable-sort":"","no-data-text":"","mobile-breakpoint":NaN,"items-per-page":t.itemsPerPage},scopedSlots:t._u([{key:"item.copy",fn:function(e){var n=e.item;return[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.copy(n)}}},[a("v-icon",[t._v("mdi-content-copy")])],1)]}}])})],1)],1)],1),a("v-flex",{attrs:{lg3:"",sm12:"",xs12:""}},[a("v-card",[a("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[a("v-toolbar-title",[t._v(t._s(t.$t("flashIds")))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.copyAllFlashIds}},[a("v-icon",[t._v("mdi-content-copy")])],1)],1),a("v-card-text",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.flashIdHeaders,items:t.flashIds,"hide-default-footer":"","disable-sort":"","no-data-text":"","mobile-breakpoint":NaN,"items-per-page":t.itemsPerPage},scopedSlots:t._u([{key:"item.action",fn:function(e){var n=e.item;return[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.searchFlashId(n)}}},[a("v-icon",[t._v("mdi-magnify")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.copyFlashId(n)}}},[a("v-icon",[t._v("mdi-content-copy")])],1)]}}])})],1)],1)],1)],1)],1)},i=[],r=(a("caad"),a("b0c0"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("5319"),a("4360")),s=a("a18c"),o=a("52da"),c={data:function(){return{itemsPerPage:1e4,vendorLogo:"",partNumber:"",vendor:"",type:"",density:"",deviceWidth:"",cellLevel:"",processNode:"",generation:"",sync:!1,async:!1,ce:"",ch:"",die:"",rb:"",voltage:"",pkg:"",comment:"",rawVendor:"",controllers:"",extraInfo:[],flashIds:[]}},computed:{extraInfoHeaders:function(){return[{text:this.$t("name"),value:"name",align:"left"},{text:this.$t("value"),value:"value"},{text:this.$t("copy"),value:"copy"}]},flashIdHeaders:function(){return[{text:this.$t("flashIds"),value:"id",align:"left"},{text:this.$t("action"),value:"action"}]}},methods:{query:function(){var t=this;null!=this.partNumber&&""!==this.partNumber?(this.partNumber=this.partNumber.toUpperCase().replace(/,/g,"").replace(/ /g,""),this.$route.query.pn!==this.partNumber&&s["a"].push({path:"/decode",query:{pn:this.partNumber}}),o["a"].$emit("loading",!0),fetch(r["a"].getServerAddress()+"/decode?trans="+r["a"].autoTranslation()+"&pn="+this.partNumber).then((function(t){return t.json()})).then((function(e){if(e=e.data,t.vendor=e.vendor,t.type=e.type,t.density=e.density,t.deviceWidth=e.deviceWidth,t.cellLevel=e.cellLevel,t.processNode=e.processNode,t.generation=e.generation,t.voltage=e.voltage,t.pkg=e.package,t.rawVendor=e.rawVendor,t.vendorLogo=t.getVendorLogo(),t.comment=e.comment,t.controllers=String(e.controller).replace(/,/g,", "),null==e.interface?(t.sync=!1,t.async=!1):Object.keys(e.interface).includes("toggle")?(t.sync=e.interface.toggle,t.async=!0):(t.sync=e.interface.sync,t.async=e.interface.async),null!=e.classification&&(t.ce=t.isUnknown(e.classification.ce),t.ch=t.isUnknown(e.classification.ch),t.die=t.isUnknown(e.classification.die),t.rb=t.isUnknown(e.classification.rb)),t.extraInfo=[],null!=e.extraInfo&&"string"!==typeof e.extraInfo)for(var a in e.extraInfo)t.extraInfo.push({name:a,value:e.extraInfo[a]});if(t.flashIds=[],null!=e.flashId&&"string"!==typeof e.flashId)for(var n in e.flashId)t.flashIds.push({id:e.flashId[n]});o["a"].$emit("loading",!1),r["a"].statDecodeIdInc()})).catch((function(e){o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchFailed",[e])}),o["a"].$emit("loading",!1)}))):o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("alert.missingPartNumber")})},isUnknown:function(t){return-2===t?2:-1===t?this.$t("unknown"):t},getVendorLogo:function(){switch(this.rawVendor){case"intel":return a("d777");case"micron":return a("0331");case"samsung":return a("e1d9");case"skhynix":return a("2f60");case"spectek":return a("ce47");case"westerndigital":return a("7d2f");case"kioxia":return a("b1af");default:return""}},copy:function(t){this.c(t.name+": "+t.value)},copyAll:function(){var t="";for(var e in this.extraInfo)e=this.extraInfo[e],t+=e.name+": "+e.value+", ";this.c(t.substring(0,t.length-2))},c:function(t){var e=this;this.$copyText(t).then((function(t){o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:e.$t("copySucc")})}),(function(t){o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:e.$t("copyFail",[t])})}))},copyAllFlashIds:function(){var t="";for(var e in this.flashIds)e=this.flashIds[e],t+=e.id+", ";this.c(t.substring(0,t.length-2))},copyFlashId:function(t){this.c(t.id)},search:function(){null!=this.partNumber&&""!==this.partNumber?s["a"].push({path:"/searchPn",query:{pn:this.partNumber}}):o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("alert.missingPartNumber")})},searchId:function(){null!=this.partNumber&&""!==this.partNumber?s["a"].push({path:"/searchId",query:{id:this.partNumber}}):o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("alert.missingFlashId")})},searchFlashId:function(t){s["a"].push({path:"/searchId",query:{id:t.id}})}},created:function(){Object.keys(this.$route.query).includes("pn")&&(this.partNumber=this.$route.query.pn,this.query())}},l=c,A=a("2877"),u=a("6544"),h=a.n(u),d=a("40dc"),p=a("8336"),f=a("b0af"),g=a("99d9"),v=a("ac7c"),m=a("a523"),b=a("8fea"),x=a("0e8f"),I=a("132d"),y=a("adda"),k=a("a722"),w=a("2fa4"),B=a("8654"),C=(a("a4d3"),a("4de4"),a("a9e3"),a("e439"),a("dbb4"),a("acd8"),a("e25e"),a("159b"),a("ade3")),Q=(a("1681"),a("58df"));function E(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function D(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?E(Object(a),!0).forEach((function(e){Object(C["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var V=Object(Q["a"])(B["a"]),F=V.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return D({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},B["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=B["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){B["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),O=a("2a7f"),N=Object(A["a"])(l,n,i,!1,null,null,null);e["default"]=N.exports;h()(N,{VAppBar:d["a"],VBtn:p["a"],VCard:f["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCheckbox:v["a"],VContainer:m["a"],VDataTable:b["a"],VFlex:x["a"],VIcon:I["a"],VImg:y["a"],VLayout:k["a"],VSpacer:w["a"],VTextField:B["a"],VTextarea:F,VToolbarTitle:O["a"]})},"2f60":function(t,e,a){t.exports=a.p+"img/skhynix.eb49a60b.svg"},"6ca7":function(t,e,a){},"7d2f":function(t,e,a){t.exports=a.p+"img/wd.4ceca3ce.svg"},a722:function(t,e,a){"use strict";a("20f6");var n=a("e8f2");e["a"]=Object(n["a"])("layout")},ac7c:function(t,e,a){"use strict";a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("25f0"),a("159b");var n=a("ade3"),i=(a("6ca7"),a("ec29"),a("9d26")),r=a("c37a"),s=a("5607"),o=a("2b0e"),c=o["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),l=a("8547"),A=a("58df"),u=Object(A["a"])(r["a"],c,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=r["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var n=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===n&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}});function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=u.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return d({},r["a"].options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",d({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},b1af:function(t,e,a){t.exports=a.p+"img/kioxia.49fb3213.svg"},ce47:function(t,e){t.exports="data:image/gif;base64,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"},d777:function(t,e,a){t.exports=a.p+"img/intel.d9e5c7fc.svg"},e1d9:function(t,e,a){t.exports=a.p+"img/samsung.efbdd24e.svg"},ec29:function(t,e,a){}}]);