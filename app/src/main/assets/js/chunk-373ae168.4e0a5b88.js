(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-373ae168"],{"0331":function(t,e,n){t.exports=n.p+"img/micron.86d3213f.svg"},1681:function(t,e,n){},"28a0":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},"2a1a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[n("v-card",[n("v-card-title",[t._v(t._s(t.$t("partNumberOrFlashId")))]),n("v-card-text",[n("v-text-field",{staticClass:"pn",attrs:{clearable:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.query(e)}},model:{value:t.partNumber,callback:function(e){t.partNumber=e},expression:"partNumber"}})],1),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:t.query}},[t._v(t._s(t.$t("query")))]),n("v-btn",{attrs:{text:""},on:{click:t.search}},[t._v(t._s(t.$t("search")))]),n("v-btn",{attrs:{text:""},on:{click:t.searchId}},[t._v(t._s(t.$t("searchId")))])],1)],1)],1),n("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[n("v-card",[n("v-card-title",[t._v(t._s(t.$t("vendor")))]),n("v-card-text",[n("v-img",{attrs:{src:t.vendorLogo}}),n("v-text-field",{model:{value:t.vendor,callback:function(e){t.vendor=e},expression:"vendor"}},[t._v("美光")])],1)],1)],1),n("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[n("v-card",[n("v-card-text",[n("v-text-field",{attrs:{label:t.$t("type")},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),n("v-text-field",{attrs:{label:t.$t("density")},model:{value:t.density,callback:function(e){t.density=e},expression:"density"}}),n("v-text-field",{attrs:{label:t.$t("deviceWidth")},model:{value:t.deviceWidth,callback:function(e){t.deviceWidth=e},expression:"deviceWidth"}}),n("v-text-field",{attrs:{label:t.$t("cellLevel")},model:{value:t.cellLevel,callback:function(e){t.cellLevel=e},expression:"cellLevel"}})],1)],1)],1),n("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[n("v-card",[n("v-card-text",[n("v-text-field",{attrs:{label:t.$t("processNode")},model:{value:t.processNode,callback:function(e){t.processNode=e},expression:"processNode"}}),n("v-text-field",{attrs:{label:t.$t("generation")},model:{value:t.generation,callback:function(e){t.generation=e},expression:"generation"}}),n("v-checkbox",{attrs:{disabled:"",label:t.$t("sync")},model:{value:t.sync,callback:function(e){t.sync=e},expression:"sync"}}),n("v-checkbox",{attrs:{disabled:"",label:t.$t("async")},model:{value:t.async,callback:function(e){t.async=e},expression:"async"}})],1)],1)],1),n("v-flex",{attrs:{lg2:"",sm12:"",xs12:""}},[n("v-card",[n("v-card-text",[n("v-text-field",{attrs:{label:t.$t("ce")},model:{value:t.ce,callback:function(e){t.ce=e},expression:"ce"}}),n("v-text-field",{attrs:{label:t.$t("ch")},model:{value:t.ch,callback:function(e){t.ch=e},expression:"ch"}}),n("v-text-field",{attrs:{label:t.$t("die")},model:{value:t.die,callback:function(e){t.die=e},expression:"die"}}),n("v-text-field",{attrs:{label:t.$t("rb")},model:{value:t.rb,callback:function(e){t.rb=e},expression:"rb"}})],1)],1)],1),n("v-flex",{attrs:{lg5:"",sm12:"",xs12:""}},[n("v-card",[n("v-card-text",[n("v-text-field",{attrs:{label:t.$t("voltage")},model:{value:t.voltage,callback:function(e){t.voltage=e},expression:"voltage"}}),n("v-text-field",{attrs:{label:t.$t("package")},model:{value:t.pkg,callback:function(e){t.pkg=e},expression:"pkg"}}),n("v-textarea",{attrs:{"auto-grow":"",rows:"1",label:t.$t("controllers")},model:{value:t.controllers,callback:function(e){t.controllers=e},expression:"controllers"}}),n("v-text-field",{attrs:{label:t.$t("comment")},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)],1)],1),n("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[n("v-card",[n("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[n("v-toolbar-title",[t._v(t._s(t.$t("extraInfo")))]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:t.copyAll}},[n("v-icon",[t._v("mdi-content-copy")])],1)],1),n("v-card-text",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.extraInfoHeaders,items:t.extraInfo,"hide-default-footer":"","disable-sort":"","no-data-text":"","mobile-breakpoint":NaN,"items-per-page":t.itemsPerPage},scopedSlots:t._u([{key:"item.copy",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.copy(r)}}},[n("v-icon",[t._v("mdi-content-copy")])],1)]}}])})],1)],1)],1),n("v-flex",{attrs:{lg3:"",sm12:"",xs12:""}},[n("v-card",[n("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[n("v-toolbar-title",[t._v(t._s(t.$t("flashIds")))]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:t.copyAllFlashIds}},[n("v-icon",[t._v("mdi-content-copy")])],1)],1),n("v-card-text",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.flashIdHeaders,items:t.flashIds,"hide-default-footer":"","disable-sort":"","no-data-text":"","mobile-breakpoint":NaN,"items-per-page":t.itemsPerPage},scopedSlots:t._u([{key:"item.action",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.searchFlashId(r)}}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.copyFlashId(r)}}},[n("v-icon",[t._v("mdi-content-copy")])],1)]}}])})],1)],1)],1)],1)],1)},i=[],o=(n("caad"),n("b0c0"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("5319"),n("4360")),a=n("a18c"),s=n("52da"),c=n("3022"),l={data:function(){return{itemsPerPage:1e4,vendorLogo:"",partNumber:"",vendor:"",type:"",density:"",deviceWidth:"",cellLevel:"",processNode:"",generation:"",sync:!1,async:!1,ce:"",ch:"",die:"",rb:"",voltage:"",pkg:"",comment:"",rawVendor:"",controllers:"",extraInfo:[],flashIds:[]}},computed:{extraInfoHeaders:function(){return[{text:this.$t("name"),value:"name",align:"left"},{text:this.$t("value"),value:"value"},{text:this.$t("copy"),value:"copy"}]},flashIdHeaders:function(){return[{text:this.$t("flashIds"),value:"id",align:"left"},{text:this.$t("action"),value:"action"}]}},methods:{query:function(){var t=this;null!=this.partNumber&&""!=this.partNumber?(this.partNumber=this.partNumber.toUpperCase().replace(/,/g,"").replace(/ /g,""),this.$route.query.pn!=this.partNumber&&a["a"].push({path:"/decode",query:{pn:this.partNumber}}),s["a"].$emit("loading",!0),fetch(o["a"].getServerAddress()+"/decode?trans="+o["a"].autoTranslation()+"&pn="+this.partNumber).then((function(t){return t.json()})).then((function(e){if(e=e.data,t.vendor=e.vendor,t.type=e.type,t.density=e.density,t.deviceWidth=e.deviceWidth,t.cellLevel=e.cellLevel,t.processNode=e.processNode,t.generation=e.generation,t.voltage=e.voltage,t.pkg=e.package,t.rawVendor=e.rawVendor,t.vendorLogo=t.getVendorLogo(),t.comment=e.comment,t.controllers=String(e.controller).replace(/,/g,", "),null==e.interface?(t.sync=!1,t.async=!1):Object.keys(e.interface).includes("toggle")?(t.sync=e.interface.toggle,t.async=!0):(t.sync=e.interface.sync,t.async=e.interface.async),null!=e.classification&&(t.ce=t.isUnknown(e.classification.ce),t.ch=t.isUnknown(e.classification.ch),t.die=t.isUnknown(e.classification.die),t.rb=t.isUnknown(e.classification.rnb)),t.extraInfo=[],null!=e.extraInfo&&!Object(c["isString"])(e.extraInfo))for(var n in e.extraInfo)t.extraInfo.push({name:n,value:e.extraInfo[n]});if(t.flashIds=[],null!=e.flashId&&!Object(c["isString"])(e.flashId))for(var r in e.flashId)t.flashIds.push({id:e.flashId[r]});s["a"].$emit("loading",!1)})).catch((function(e){s["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchFailed",[e])}),s["a"].$emit("loading",!1)}))):s["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("alert.missingPartNumber")})},isUnknown:function(t){return-2==t?2:-1==t?this.$t("unknown"):t},getVendorLogo:function(){switch(this.rawVendor){case"intel":return n("d777");case"micron":return n("0331");case"samsung":return n("e1d9");case"skhynix":return n("2f60");case"spectek":return n("ce47");case"westerndigital":return n("7d2f");case"kioxia":return n("b1af");default:return""}},copy:function(t){this.c(t.name+": "+t.value)},copyAll:function(){var t="";for(var e in this.extraInfo)e=this.extraInfo[e],t+=e.name+": "+e.value+", ";this.c(t.substring(0,t.length-2))},c:function(t){var e=this;this.$copyText(t).then((function(t){s["a"].$emit("snackbar",{timeout:3e3,show:!0,text:e.$t("copySucc")})}),(function(t){s["a"].$emit("snackbar",{timeout:3e3,show:!0,text:e.$t("copyFail",[t])})}))},copyAllFlashIds:function(){var t="";for(var e in this.flashIds)e=this.flashIds[e],t+=e.id+", ";this.c(t.substring(0,t.length-2))},copyFlashId:function(t){this.c(t.id)},search:function(){null!=this.partNumber&&""!=this.partNumber?a["a"].push({path:"/searchPn",query:{pn:this.partNumber}}):s["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("alert.missingPartNumber")})},searchId:function(){null!=this.partNumber&&""!=this.partNumber?a["a"].push({path:"/searchId",query:{id:this.partNumber}}):s["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("alert.missingFlashId")})},searchFlashId:function(t){a["a"].push({path:"/searchId",query:{id:t.id}})}},created:function(){Object.keys(this.$route.query).includes("pn")&&(this.partNumber=this.$route.query.pn,this.query())}},u=l,A=n("2877"),p=n("6544"),f=n.n(p),h=n("40dc"),d=n("8336"),g=n("b0af"),v=n("99d9"),y=n("ac7c"),b=n("a523"),m=n("8fea"),x=n("0e8f"),w=n("132d"),I=n("adda"),k=n("a722"),C=n("2fa4"),B=n("8654"),O=(n("a4d3"),n("4de4"),n("4160"),n("a9e3"),n("e439"),n("dbb4"),n("acd8"),n("e25e"),n("159b"),n("2fa7")),E=(n("1681"),n("58df"));function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(n,!0).forEach((function(e){Object(O["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S=Object(E["a"])(B["a"]),Q=S.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return j({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},B["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=B["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){B["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),V=n("2a7f"),F=Object(A["a"])(u,r,i,!1,null,null,null);e["default"]=F.exports;f()(F,{VAppBar:h["a"],VBtn:d["a"],VCard:g["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCheckbox:y["a"],VContainer:b["a"],VDataTable:m["a"],VFlex:x["a"],VIcon:w["a"],VImg:I["a"],VLayout:k["a"],VSpacer:C["a"],VTextField:B["a"],VTextarea:Q,VToolbarTitle:V["a"]})},"2f60":function(t,e,n){t.exports=n.p+"img/skhynix.eb49a60b.svg"},3022:function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},i=/%[sdj%]/g;e.format=function(t){if(!w(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(s(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,o=r.length,a=String(t).replace(i,(function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}})),c=r[n];n<o;c=r[++n])b(c)||!B(c)?a+=" "+c:a+=" "+s(c);return a},e.deprecate=function(n,r){if("undefined"!==typeof t&&!0===t.noDeprecation)return n;if("undefined"===typeof t)return function(){return e.deprecate(n,r).apply(this,arguments)};var i=!1;function o(){if(!i){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}return o};var o,a={};function s(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),y(n)?r.showHidden=n:n&&e._extend(r,n),k(r.showHidden)&&(r.showHidden=!1),k(r.depth)&&(r.depth=2),k(r.colors)&&(r.colors=!1),k(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),A(r,t,r.depth)}function c(t,e){var n=s.styles[e];return n?"["+s.colors[n][0]+"m"+t+"["+s.colors[n][1]+"m":t}function l(t,e){return t}function u(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}function A(t,n,r){if(t.customInspect&&n&&D(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t);return w(i)||(i=A(t,i,r)),i}var o=p(t,n);if(o)return o;var a=Object.keys(n),s=u(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),E(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return f(n);if(0===a.length){if(D(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(C(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return t.stylize(Date.prototype.toString.call(n),"date");if(E(n))return f(n)}var l,y="",b=!1,m=["{","}"];if(v(n)&&(b=!0,m=["[","]"]),D(n)){var x=n.name?": "+n.name:"";y=" [Function"+x+"]"}return C(n)&&(y=" "+RegExp.prototype.toString.call(n)),O(n)&&(y=" "+Date.prototype.toUTCString.call(n)),E(n)&&(y=" "+f(n)),0!==a.length||b&&0!=n.length?r<0?C(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=b?h(t,n,r,s,a):a.map((function(e){return d(t,n,r,s,e,b)})),t.seen.pop(),g(l,y,m)):m[0]+y+m[1]}function p(t,e){if(k(e))return t.stylize("undefined","undefined");if(w(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return x(e)?t.stylize(""+e,"number"):y(e)?t.stylize(""+e,"boolean"):b(e)?t.stylize("null","null"):void 0}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function h(t,e,n,r,i){for(var o=[],a=0,s=e.length;a<s;++a)N(e,String(a))?o.push(d(t,e,n,r,String(a),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(d(t,e,n,r,i,!0))})),o}function d(t,e,n,r,i,o){var a,s,c;if(c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},c.get?s=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(s=t.stylize("[Setter]","special")),N(r,i)||(a="["+i+"]"),s||(t.seen.indexOf(c.value)<0?(s=b(n)?A(t,c.value,null):A(t,c.value,n-1),s.indexOf("\n")>-1&&(s=o?s.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+s.split("\n").map((function(t){return"   "+t})).join("\n"))):s=t.stylize("[Circular]","special")),k(a)){if(o&&i.match(/^\d+$/))return s;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+s}function g(t,e,n){var r=t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return r>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function v(t){return Array.isArray(t)}function y(t){return"boolean"===typeof t}function b(t){return null===t}function m(t){return null==t}function x(t){return"number"===typeof t}function w(t){return"string"===typeof t}function I(t){return"symbol"===typeof t}function k(t){return void 0===t}function C(t){return B(t)&&"[object RegExp]"===S(t)}function B(t){return"object"===typeof t&&null!==t}function O(t){return B(t)&&"[object Date]"===S(t)}function E(t){return B(t)&&("[object Error]"===S(t)||t instanceof Error)}function D(t){return"function"===typeof t}function j(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function S(t){return Object.prototype.toString.call(t)}function Q(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(k(o)&&(o=Object({NODE_ENV:"production",BASE_URL:""}).NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(o)){var r=t.pid;a[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else a[n]=function(){};return a[n]},e.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=v,e.isBoolean=y,e.isNull=b,e.isNullOrUndefined=m,e.isNumber=x,e.isString=w,e.isSymbol=I,e.isUndefined=k,e.isRegExp=C,e.isObject=B,e.isDate=O,e.isError=E,e.isFunction=D,e.isPrimitive=j,e.isBuffer=n("d60a");var V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function F(){var t=new Date,e=[Q(t.getHours()),Q(t.getMinutes()),Q(t.getSeconds())].join(":");return[t.getDate(),V[t.getMonth()],e].join(" ")}function N(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",F(),e.format.apply(e,arguments))},e.inherits=n("28a0"),e._extend=function(t,e){if(!e||!B(e))return t;var n=Object.keys(e),r=n.length;while(r--)t[n[r]]=e[n[r]];return t};var T="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function P(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}function R(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var i=n.pop();if("function"!==typeof i)throw new TypeError("The last argument must be of type Function");var o=this,a=function(){return i.apply(o,arguments)};e.apply(this,n).then((function(e){t.nextTick(a,null,e)}),(function(e){t.nextTick(P,e,a)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(T&&t[T]){var e=t[T];if("function"!==typeof e)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,T,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,i)}catch(a){n(a)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),T&&Object.defineProperty(e,T,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=T,e.callbackify=R}).call(this,n("4362"))},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"6ca7":function(t,e,n){},"7d2f":function(t,e,n){t.exports=n.p+"img/wd.d8b076d1.svg"},a722:function(t,e,n){"use strict";n("20f6");var r=n("e8f2");e["a"]=Object(r["a"])("layout")},ac7c:function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("0d03"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("25f0"),n("159b");var r=n("2fa7"),i=(n("6ca7"),n("ec29"),n("9d26")),o=n("c37a"),a=(n("45fc"),n("5607")),s=n("2b0e"),c=s["a"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),l=n("8547"),u=n("58df"),A=Object(u["a"])(o["a"],c,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=o["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var r=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===r&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}});function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=A.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return f({},o["a"].options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",f({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},b1af:function(t,e,n){t.exports=n.p+"img/kioxia.49fb3213.svg"},ce47:function(t,e){t.exports="data:image/gif;base64,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"},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},d777:function(t,e,n){t.exports=n.p+"img/intel.c73e9625.svg"},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),a="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&a&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),a=Math.min(i.length,o.length),s=a,c=0;c<a;c++)if(i[c]!==o[c]){s=c;break}var l=[];for(c=s;c<i.length;c++)l.push("..");return l=l.concat(o.slice(s)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,a=t.length-1;a>=0;--a){var s=t.charCodeAt(a);if(47!==s)-1===r&&(i=!1,r=a+1),46===s?-1===e?e=a:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=a+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e1d9:function(t,e,n){t.exports=n.p+"img/samsung.292327fe.svg"},ec29:function(t,e,n){}}]);