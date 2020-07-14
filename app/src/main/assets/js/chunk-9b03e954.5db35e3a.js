(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b03e954"],{"26d3":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[n("v-card",[n("v-card-title",[t._v(t._s(t.$t("settings.server")))]),n("v-card-text",[n("v-combobox",{attrs:{items:t.items,label:t.$t("settings.serverAddr"),"return-object":!1},on:{input:t.changeServer},model:{value:t.server,callback:function(e){t.server=e},expression:"server"}})],1),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.serverInfo}},[t._v(t._s(t.$t("settings.serverInfo")))])],1)],1)],1),n("v-flex",{attrs:{lg3:"",sm12:"",xs12:""}},[n("v-card",[n("v-card-title",[t._v(t._s(t.$t("statistic.title")))]),n("v-card-text",{domProps:{innerHTML:t._s(t.statContent)}}),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.resetStat}},[t._v(t._s(t.$t("statistic.reset")))])],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.$t("settings.fdServerInfo")))]),n("v-card-text",{domProps:{innerHTML:t._s(t.dialog.text)}}),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog.show=!1}}},[t._v(t._s(t.$t("close")))])],1)],1)],1)],1)},s=[],a=(n("d3b7"),n("ac1f"),n("5319"),n("4360")),r=n("52da"),o={computed:{items:function(){var t=[];if(this.servers!==[])for(var e in this.servers)t.push({value:this.servers[e],text:e});return t},transStat:function(){return this.updateStat()}},data:function(){return{servers:[],server:a["a"].getServerAddress(),dialog:{show:!1,text:""},statContent:""}},created:function(){var t=this;this.statContent=this.updateStat(),fetch("https://raw.githubusercontent.com/PeratX/FlashMaster/master/servers.json").then((function(t){return t.json()})).then((function(e){t.servers=e})).catch((function(e){r["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchServerListFailed",[e])})}))},methods:{changeServer:function(t){a["a"].setServerAddress(t)},serverInfo:function(){var t=this;fetch(a["a"].getServerAddress()+"/info").then((function(t){return t.json()})).then((function(e){t.dialog={show:!0,text:t.$t("settings.info",[e.ver,e.info.fdb.time,e.info.flash_cnt,e.info.id_cnt,e.info.mdb_cnt,String(e.info.fdb.controllers).replace(/,/g,", ")])}})).catch((function(e){r["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchFailed",[e])})}))},resetStat:function(){a["a"].resetStat(),this.statContent=this.updateStat(),r["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("statistic.resetInfo")})},updateStat:function(){return this.$t("statistic.content",[a["a"].statDecodeId(),a["a"].statSearchPn(),a["a"].statSearchId()])}},watch:{transStat:function(t){this.statContent=t}}},l=o,c=n("2877"),h=n("6544"),u=n.n(h),d=n("8336"),f=n("b0af"),p=n("99d9"),m=n("2b5d"),v=n("a523"),I=n("169a"),g=n("0e8f"),S=n("a722"),x=n("2fa4"),b=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=b.exports;u()(b,{VBtn:d["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCombobox:m["a"],VContainer:v["a"],VDialog:I["a"],VFlex:g["a"],VLayout:S["a"],VSpacer:x["a"]})},"2b5d":function(t,e,n){"use strict";n("7db0"),n("c975"),n("fb6a"),n("a434"),n("b0c0"),n("d3b7"),n("25f0"),n("8a79");var i=n("5530"),s=(n("2bfd"),n("b974")),a=(n("4de4"),n("d81d"),n("45fc"),n("498a"),n("8654")),r=n("d9f7"),o=n("80d2"),l=Object(i["a"])(Object(i["a"])({},s["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),c=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:function(){return l}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(o["q"])(e,t.itemText),i=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(i["a"])(Object(i["a"])({},l),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=s["a"].options.computed.listData.call(this);return t.props=Object(i["a"])(Object(i["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===o["w"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===o["w"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==o["w"].backspace&&t!==o["w"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var i=this.selectedItems.length,s=t!==i-1?t:t-1,a=this.selectedItems[s];a?this.selectItem(e):this.setValue(this.multiple?[]:void 0),this.selectedIndex=s}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=void 0,s["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(o["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["o"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],n=this.getText(e);t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}});e["a"]=c.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return s["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=c.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var n=this,a=s["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(a.componentOptions.listeners=Object(i["a"])(Object(i["a"])({},a.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}})),a},onChipInput:function(t){s["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&c.options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;s["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===o["w"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===o["w"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();c.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():c.options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){s["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var n=this.internalValue.slice();n.splice(e,1),this.setValue(n)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(t){if(this.multiple&&!this.searchIsDirty){var e=t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(t.preventDefault(),s["a"].options.methods.selectItem.call(this,e))}}}})},"2bfd":function(t,e,n){},"8a79":function(t,e,n){"use strict";var i=n("23e7"),s=n("06cf").f,a=n("50c4"),r=n("5a34"),o=n("1d80"),l=n("ab13"),c=n("c430"),h="".endsWith,u=Math.min,d=l("endsWith"),f=!c&&!d&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!f&&!d},{endsWith:function(t){var e=String(o(this));r(t);var n=arguments.length>1?arguments[1]:void 0,i=a(e.length),s=void 0===n?i:u(a(n),i),l=String(t);return h?h.call(e,l,s):e.slice(s-l.length,s)===l}})},a722:function(t,e,n){"use strict";n("20f6");var i=n("e8f2");e["a"]=Object(i["a"])("layout")}}]);