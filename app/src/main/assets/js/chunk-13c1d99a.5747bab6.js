(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13c1d99a"],{"26d3":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[n("v-card",[n("v-card-title",[t._v(t._s(t.$t("settings.server")))]),n("v-card-text",[n("v-combobox",{attrs:{items:t.items,label:t.$t("settings.serverAddr"),"return-object":!1},on:{change:t.changeServer},model:{value:t.server,callback:function(e){t.server=e},expression:"server"}}),n("v-checkbox",{attrs:{label:t.$t("settings.translation")},on:{change:t.changeTranslation},model:{value:t.autoTrans,callback:function(e){t.autoTrans=e},expression:"autoTrans"}})],1),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.serverInfo}},[t._v(t._s(t.$t("settings.serverInfo")))])],1)],1)],1),n("v-flex",{attrs:{lg3:"",sm12:"",xs12:""}},[n("v-card",[n("v-card-title",[t._v(t._s(t.$t("statistic.title")))]),n("v-card-text",{domProps:{innerHTML:t._s(t.statContent)}}),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.resetStat}},[t._v(t._s(t.$t("statistic.reset")))])],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.$t("settings.fdServerInfo")))]),n("v-card-text",{domProps:{innerHTML:t._s(t.dialog.text)}}),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog.show=!1}}},[t._v(t._s(t.$t("close")))])],1)],1)],1)],1)},s=[],a=(n("d3b7"),n("ac1f"),n("5319"),n("4360")),r=n("52da"),o={computed:{items:function(){var t=[];if(this.servers!==[])for(var e in this.servers)t.push({value:this.servers[e],text:e});return t},transStat:function(){return this.updateStat()}},data:function(){return{servers:[],server:a["a"].getServerAddress(),autoTrans:!1,dialog:{show:!1,text:""},statContent:""}},created:function(){var t=this;this.statContent=this.updateStat(),this.autoTrans="1"===a["a"].autoTranslation(),fetch("https://raw.githubusercontent.com/PeratX/FlashMaster/master/servers.json").then((function(t){return t.json()})).then((function(e){t.servers=e})).catch((function(e){r["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchServerListFailed",[e])})}))},methods:{changeServer:function(t){a["a"].setServerAddress(t)},changeTranslation:function(t){a["a"].setAutoTranslation(t)},serverInfo:function(){var t=this;fetch(a["a"].getServerAddress()+"/info").then((function(t){return t.json()})).then((function(e){t.dialog={show:!0,text:t.$t("settings.info",[e.ver,e.info.fdb.time,e.info.flash_cnt,e.info.id_cnt,e.info.mdb_cnt,String(e.info.fdb.controllers).replace(/,/g,", ")])}})).catch((function(e){r["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchFailed",[e])})}))},resetStat:function(){a["a"].resetStat(),this.statContent=this.updateStat(),r["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("statistic.resetInfo")})},updateStat:function(){return this.$t("statistic.content",[a["a"].statDecodeId(),a["a"].statSearchPn(),a["a"].statSearchId()])}},watch:{transStat:function(t){this.statContent=t}}},l=o,c=n("2877"),h=n("6544"),u=n.n(h),d=n("8336"),p=n("b0af"),f=n("99d9"),m=n("ac7c"),v=(n("a4d3"),n("4de4"),n("7db0"),n("4160"),n("c975"),n("fb6a"),n("a434"),n("0d03"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("25f0"),n("8a79"),n("159b"),n("ade3")),g=(n("2bfd"),n("b974")),b=(n("d81d"),n("45fc"),n("498a"),n("8654")),I=n("80d2");function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=x({},g["b"],{offsetY:!0,offsetOverflow:!0,transition:!1}),O=g["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:g["a"].options.props.menuProps.type,default:function(){return y}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return x({},g["a"].options.computed.classes.call(this),{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){return t.filter(e,String(t.internalSearch),String(t.getText(e)))}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=g["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),x({},y,{},t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=g["a"].options.computed.listData.call(this);return t.props=x({},t.props,{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===I["u"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===I["u"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==I["u"].backspace&&t!==I["u"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){if(!this.readonly){var t=this.selectedItems.length-1;if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex];if(!this.getDisabled(e)){var n=this.selectedIndex===t?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===n?this.setValue(this.multiple?[]:void 0):this.selectItem(e),this.selectedIndex=n}}else this.selectedIndex=t}},clearableCallback:function(){this.internalSearch=void 0,g["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=b["a"].options.methods.genInput.call(this);return t.data=t.data||{},t.data.attrs=t.data.attrs||{},t.data.attrs.autocomplete=t.data.attrs.autocomplete||"disabled",t.data.domProps=t.data.domProps||{},t.data.domProps.value=this.internalSearch,t},genInputSlot:function(){var t=g["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?g["a"].options.methods.genSelections.call(this):[]},onClick:function(){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;g["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){g["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(){this.activateMenu()},selectItem:function(t){g["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){g["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],n=this.getText(e);t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}});function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=O.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{counterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return g["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=O.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var n=this,i=g["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(i.componentOptions.listeners=D({},i.componentOptions.listeners,{dblclick:function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}})),i},onChipInput:function(t){g["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){var e=this;t.preventDefault(),this.$nextTick((function(){e.getMenuIndex()>-1||e.updateSelf()}))},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&O.options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;g["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===I["u"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===I["u"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();O.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():O.options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){g["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var n=this.internalValue.slice();n.splice(e,1),this.setValue(n)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(t){if(this.multiple&&!this.searchIsDirty){var e=t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(t.preventDefault(),g["a"].options.methods.selectItem.call(this,e))}}}}),V=n("a523"),j=n("169a"),k=n("0e8f"),$=n("a722"),P=n("2fa4"),T=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=T.exports;u()(T,{VBtn:d["a"],VCard:p["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCheckbox:m["a"],VCombobox:w,VContainer:V["a"],VDialog:j["a"],VFlex:k["a"],VLayout:$["a"],VSpacer:P["a"]})},"2bfd":function(t,e,n){},"6ca7":function(t,e,n){},"8a79":function(t,e,n){"use strict";var i=n("23e7"),s=n("06cf").f,a=n("50c4"),r=n("5a34"),o=n("1d80"),l=n("ab13"),c=n("c430"),h="".endsWith,u=Math.min,d=l("endsWith"),p=!c&&!d&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!p&&!d},{endsWith:function(t){var e=String(o(this));r(t);var n=arguments.length>1?arguments[1]:void 0,i=a(e.length),s=void 0===n?i:u(a(n),i),l=String(t);return h?h.call(e,l,s):e.slice(s-l.length,s)===l}})},a722:function(t,e,n){"use strict";n("20f6");var i=n("e8f2");e["a"]=Object(i["a"])("layout")},ac7c:function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("0d03"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("25f0"),n("159b");var i=n("ade3"),s=(n("6ca7"),n("ec29"),n("9d26")),a=n("c37a"),r=(n("45fc"),n("5607")),o=n("2b0e"),l=o["a"].extend({name:"rippleable",directives:{ripple:r["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),c=n("8547"),h=n("58df"),u=Object(h["a"])(a["a"],l,c["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=a["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===i&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}});function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=u.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return p({},a["a"].options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",p({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},ec29:function(t,e,n){}}]);