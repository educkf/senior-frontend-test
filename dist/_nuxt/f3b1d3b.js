(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{163:function(t,e,n){var content=n(171);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("28f1127f",content,!0,{sourceMap:!1})},164:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var r=n(174),o=function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},c={bind:function(t,e){e.value&&""!==e.value&&Object(r.mask)(t,e)},unbind:function(){}}},165:function(t,e,n){"use strict";n.r(e);var r={name:"CheckIcon"},o=n(23),component=Object(o.a)(r,(function(t,e){var n=e._c;return n("svg",{staticClass:"h-6 w-6 mr-2",class:e.data.staticClass,attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])}),[],!0,null,null,null);e.default=component.exports},166:function(t,e,n){"use strict";n.r(e);var r={name:"CloseIcon"},o=n(23),component=Object(o.a)(r,(function(t,e){var n=e._c;return n("svg",{staticClass:"h-6 w-6 mr-2",class:e.data.staticClass,attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])}),[],!0,null,null,null);e.default=component.exports},167:function(t,e,n){"use strict";n.r(e);var r=n(43),o=(n(24),n(10),n(172),n(33),n(3)),c=(n(164),{name:"OfficeForm",props:{editingOffice:{type:Object}},data:function(){return{id:null,title:"",address:"",fullName:"",jobPosition:"",email:"",phone:"",color:"pastelYellow",submited:!1}},computed:{},watch:{},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.editingOffice&&t.editingOffice.id&&(t.id=t.editingOffice.id,t.title=t.editingOffice.title,t.address=t.editingOffice.address,t.color=t.editingOffice.color,t.fullName=t.editingOffice.contact.fullName,t.jobPosition=t.editingOffice.contact.jobPosition,t.email=t.editingOffice.contact.email,t.phone=t.editingOffice.contact.phone);case 1:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{handleSubmit:function(){if(this.submited=!0,!this.isValid())return!1;this.$store.dispatch("OfficeStore/upsertStore",{id:this.id,title:this.title,address:this.address,color:this.color,contact:{fullName:this.fullName,jobPosition:this.jobPosition,email:this.email,phone:this.phone}}),this.$emit("close")},isValid:function(){for(var t=0,e=Object.entries(this.$refs);t<e.length;t++){var n=Object(r.a)(e[t],2);n[0];if(n[1].hasError)return!1}return!0}}}),l=n(23),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"w-full bg-white rounded-md shadow-md px-5 pt-3 pb-5",on:{submit:function(e){return e.preventDefault(),t.handleSubmit()}}},[n("header",{staticClass:"flex justify-between mb-10"},[n("span",{staticClass:"font-bold"},[t._v("New Location")]),t._v(" "),n("button",{on:{click:function(e){return e.preventDefault(),t.$emit("close")}}},[n("CloseIcon",{staticClass:"opacity-50"})],1)]),t._v(" "),n("ColorPicker",{staticClass:"mb-6",model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),n("InputField",{ref:"title",attrs:{label:"Title",isRequired:!0,showError:t.submited},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("InputField",{ref:"address",attrs:{label:"Enter the address",isRequired:!0,showError:t.submited},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),t._v(" "),n("h3",{staticClass:"uppercase text-pastelGreen border-b border-gray-300 pb-2 my-2 text-xs"},[t._v("\n\t\tContact information\n\t")]),t._v(" "),n("InputField",{ref:"fullName",attrs:{label:"Full name",isRequired:!0,showError:t.submited},model:{value:t.fullName,callback:function(e){t.fullName=e},expression:"fullName"}}),t._v(" "),n("InputField",{ref:"jobPosition",attrs:{label:"Job position",isRequired:!0,showError:t.submited},model:{value:t.jobPosition,callback:function(e){t.jobPosition=e},expression:"jobPosition"}}),t._v(" "),n("InputField",{ref:"email",attrs:{label:"Email address",isRequired:!0,showError:t.submited,validateAs:"email",placeholder:"name@example.com"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("InputField",{ref:"phone",attrs:{label:"Phone",isRequired:!0,showError:t.submited,type:"phone",placeholder:"(XXX) XXX-XXXX",maskTemplate:"(###) ###-####"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),n("button",{staticClass:"button",class:t.isValid()?"bg-pastelGreen":"bg-gray-300",attrs:{type:"submit"}},[t._v("\n\t\tSave\n\t")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CloseIcon:n(166).default,ColorPicker:n(180).default,InputField:n(181).default})},168:function(t,e,n){"use strict";n.r(e);var r={name:"TransitionOutin"},o=n(23),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{"enter-active-class":"ease-out z-40 duration-200","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in z-40 duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0",mode:"out-in"}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},169:function(t,e,n){"use strict";n.r(e);var r={name:"CheckIcon"},o=n(23),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"h-6 w-6",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])}),[],!1,null,null,null);e.default=component.exports},170:function(t,e,n){"use strict";var r=n(163);n.n(r).a},171:function(t,e,n){(e=n(64)(!1)).push([t.i,"@import url(https://use.typekit.net/lyg3ywe.css);"]),e.push([t.i,"",""]),t.exports=e},172:function(t,e,n){var r=n(6),o=n(173)(!0);r(r.S,"Object",{entries:function(t){return o(t)}})},173:function(t,e,n){var r=n(7),o=n(26),c=n(17),l=n(46).f;t.exports=function(t){return function(e){for(var n,f=c(e),d=o(f),m=d.length,i=0,v=[];m>i;)n=d[i++],r&&!l.call(f,n)||v.push(t?[n,f[n]]:f[n]);return v}}},174:function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function r(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=n(2),o=n(0),i=n.n(o);e.a=function(t,e){var o=e.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);t=u[0]}t.oninput=function(e){if(e.isTrusted){var i=t.selectionEnd,u=t.value[i-1];for(t.value=n.i(a.a)(t.value,o.mask,!0,o.tokens);i<t.value.length&&t.value.charAt(i-1)!==u;)i++;t===document.activeElement&&(t.setSelectionRange(i,i),setTimeout((function(){t.setSelectionRange(i,i)}),0)),t.dispatchEvent(r("input"))}};var s=n.i(a.a)(t.value,o.mask,!0,o.tokens);s!==t.value&&(t.value=s,t.dispatchEvent(r("input")))}},function(t,e,n){"use strict";var r=n(6),a=n(5);e.a=function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(e)?n.i(a.a)(r.a,e,i)(t,e,o,i):n.i(r.a)(t,e,o,i)}},function(t,e,n){"use strict";function r(t){t.component(s.a.name,s.a),t.directive("mask",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),s=n.n(u);n.d(e,"TheMask",(function(){return s.a})),n.d(e,"mask",(function(){return i.a})),n.d(e,"tokens",(function(){return o.a})),n.d(e,"version",(function(){return c}));var c="0.11.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t,(t=n.i(i.a)(t,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";e.a=function(t,e,n){return e=e.sort((function(t,e){return t.length-e.length})),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<e.length;){var u=e[i];i++;var s=e[i];if(!(s&&t(r,s,!0,n).length>u.length))return t(r,u,o,n)}return""}}},function(t,e,n){"use strict";e.a=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",e=e||"";for(var a=0,o=0,i="";a<e.length&&o<t.length;){var s=r[u=e[a]],c=t[o];s&&!s.escape?(s.pattern.test(c)&&(i+=s.transform?s.transform(c):c,a++),o++):(s&&s.escape&&(u=e[++a]),n&&(i+=u),c===u&&o++,a++)}for(var l="";a<e.length&&n;){var u;if(r[u=e[a]]){l="";break}l+=u,a++}return i+l}},function(t,e,n){var r=n(8)(n(4),n(9),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var a,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,o=t.default);var u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}}))}return{esModule:a,exports:o,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])},175:function(t,e,n){"use strict";n.r(e);n(83),n(25),n(24),n(10),n(63),n(33);var r=n(3),o=n(58),c=n(42);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={name:"AlertMessage",props:{},data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({alert:function(t){return t.alert}})),watch:{},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{closeAlert:function(){this.$store.commit("CLOSE_ALERT")}}},d=n(23),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":"transition-opacity ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-opacity ease-in duration-300","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[t.alert&&t.alert.show?n("div",{staticClass:"bg-white w-full fixed top-0 py-6 z-50"},[n("div",{staticClass:"w-80 m-auto flex px-4"},[n("CheckIcon",{staticClass:"text-pastelGreen mr-4"}),t._v(" "),n("p",{staticClass:"uppercase text-xs text-gray-700 leading-6"},[t._v("\n\t\t\t\t"+t._s(t.alert.message)+"\n\t\t\t")]),t._v(" "),n("button",{staticClass:"fixed right-0 mr-6",on:{click:function(e){return e.preventDefault(),t.closeAlert()}}},[n("CloseIcon",{staticClass:"text-gray-500"})],1)],1)]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CheckIcon:n(165).default,CloseIcon:n(166).default})},176:function(t,e,n){"use strict";n.r(e);n(33);var r=n(3),o={name:"OfficeAdd",props:{},data:function(){return{adding:!1}},computed:{},watch:{},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{}},c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"w-full relative"},[n("TransitionOutin",[t.adding?t._e():n("button",{staticClass:"flex transition-all duration-300 justify-between w-full bg-pastelPink text-white font-thin px-5 py-3 rounded-lg shadow-lg",on:{click:function(e){e.preventDefault(),t.adding=!0}}},[t._v("\n\t\t\tAdd New Location\n\n\t\t\t"),n("svg",{staticClass:"h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}})])]),t._v(" "),t.adding?n("OfficeForm",{staticClass:"transition-all duration-300",on:{close:function(e){t.adding=!1}}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OfficeForm:n(167).default,TransitionOutin:n(168).default})},177:function(t,e,n){"use strict";n.r(e);n(33);var r=n(3),o={name:"OfficeCard",props:{office:Object},data:function(){return{opened:!1,editing:!1}},computed:{},watch:{},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{}},c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full transition-all duration-300 min-h-40 mt-6 shadow-m"},[n("TransitionOutin",[t.editing?t._e():n("div",[n("CardFace",{attrs:{office:t.office,opened:t.opened},on:{clicked:function(e){t.opened=!t.opened}}}),t._v(" "),n("CardAddress",{attrs:{office:t.office,opened:t.opened},on:{editing:function(e){t.editing=!0}}})],1),t._v(" "),t.editing?n("OfficeForm",{attrs:{editingOffice:t.office},on:{close:function(e){t.editing=!1}}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardFace:n(178).default,CardAddress:n(179).default,OfficeForm:n(167).default,TransitionOutin:n(168).default})},178:function(t,e,n){"use strict";n.r(e);n(33);var r=n(3),o={name:"CardFace",props:{office:Object,opened:Boolean},data:function(){return{}},computed:{},watch:{},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{}},c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full h-40 relative z-20 flex items-center justify-between px-6 py-4 rounded-lg shadow-lg text-white cursor-pointer select-none",class:"bg-"+t.office.color,on:{click:function(e){return t.$emit("clicked")}}},[n("div",[n("h3",{staticClass:"text-2xl font-bold select-text"},[t._v(t._s(t.office.title))]),t._v(" "),n("address",{staticClass:"font-thin select-text not-italic"},[t._v("\n\t\t\t"+t._s(t.office.address)+"\n\t\t")])]),t._v(" "),n("ToggleIcon",{staticClass:"transition-transform duration-200 transform",class:{"rotate-180":t.opened}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ToggleIcon:n(169).default})},179:function(t,e,n){"use strict";n.r(e);n(33);var r=n(3),o={name:"CardAddress",props:{office:Object,opened:Boolean},data:function(){return{}},computed:{contact:function(){return this.office.contact}},watch:{},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{deleteOffice:function(){this.$store.dispatch("OfficeStore/deleteStore",this.office.id)}}},c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transition-maxHeight duration-500 h-auto w-full overflow-y-hidden relative z-10 -mt-4 bg-white px-8 rounded-lg shadow-md",class:{"max-h-0":!t.opened,"max-h-fit":t.opened}},[n("div",{staticClass:"transition-opacity duration-700 leading-8",class:{"opacity-0":!t.opened,"opacity-100":t.opened}},[n("h3",{staticClass:"text-xl pt-10 font-bold"},[t._v("\n\t\t\t"+t._s(t.contact.fullName)+"\n\t\t")]),t._v(" "),n("p",{staticClass:"text-gray-700"},[t._v(t._s(t.contact.jobPosition))]),t._v(" "),n("p",{class:["text-"+t.office.color]},[t._v(t._s(t.contact.email))]),t._v(" "),n("p",{staticClass:"text-gray-800"},[t._v(t._s(t.contact.phone))]),t._v(" "),n("div",{staticClass:"flex justify-between border-t border-gray-200 mt-2 pt-1 pb-2"},[n("button",{staticClass:"btn text-gray-500 hover:text-gray-700",on:{click:function(e){return e.preventDefault(),t.$emit("editing")}}},[n("PencilIcon"),t._v("\n\t\t\t\tEdit\n\t\t\t")],1),t._v(" "),n("button",{staticClass:"btn text-pastelPink hover:text-red-500",on:{click:function(e){return e.preventDefault(),t.deleteOffice()}}},[n("TrashIcon"),t._v("\n\t\t\t\tDelete\n\t\t\t")],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PencilIcon:n(182).default,TrashIcon:n(183).default})},180:function(t,e,n){"use strict";n.r(e);n(33);var r=n(3),o={name:"ColorPicker",props:{value:String},data:function(){return{selected:"grayLight",opened:!1,colors:["pastelYellow","pastelPink","pastelGreen","grayLight","grayDark"]}},computed:{},watch:{selected:function(){this.$emit("input",this.selected),this.opened=!1}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.selected=t.value;case 1:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{}},c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("button",{staticClass:"w-full shadow-md h-32 rounded-md flex justify-center items-center text-white font-medium focus:shadow-outline focus:outline-none",class:"bg-"+t.selected,on:{click:function(e){e.preventDefault(),t.opened=!t.opened}}},[t._v("\n\t\tSelect Color\n\t\t"),n("ToggleIcon",{staticClass:"transition-transform duration-200 transform ml-4",class:{"rotate-180":t.opened}})],1),t._v(" "),n("transition",{staticClass:"w-full relative",attrs:{"enter-active-class":"absolute ease-out z-20","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"absolute ease-in z-20","leave-class":"opacity-100","leave-to-class":"opacity-0",tag:"div"}},[t.opened?n("div",{staticClass:"mt-5 transition-all duration-300 w-full"},t._l(t.colors,(function(e){return n("label",{key:e,staticClass:"w-full h-32 mb-2 flex justify-center items-center rounded-md cursor-pointer hover:shadow",class:"bg-"+e,attrs:{for:e}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"opacity-0",attrs:{type:"radio",name:"colors",id:e},domProps:{value:e,checked:t._q(t.selected,e)},on:{change:function(n){t.selected=e}}}),t._v(" "),t.selected===e?n("CheckIcon",{staticClass:"text-white"}):t._e()],1)})),0):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ToggleIcon:n(169).default,CheckIcon:n(165).default})},181:function(t,e,n){"use strict";n.r(e);n(33);var r=n(3),o=n(164),c={name:"InputField",directives:{mask:o.a},props:{value:String,placeholder:String,type:{type:String,default:"text"},showError:Boolean,label:String,isRequired:Boolean,validateAs:String,maskTemplate:{type:String,default:""}},data:function(){return{message:""}},computed:{hasError:function(){return this.setMessage(""),this.isRequired&&""===this.value?(this.setMessage("This field cannot be empty."),!0):"email"!==this.validateAs||Object(o.b)(this.value)?""!==this.maskTemplate&&this.maskTemplate.length!==this.value.length&&(this.setMessage("The phone value is incomplete."),!0):(this.setMessage("This value is not valid."),!0)}},watch:{},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{setMessage:function(t){this.message=t}}},l=n(23),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"input-group"},[n("span",{staticClass:"label"},[t._v(t._s(t.label)+" "+t._s(t.isRequired?"*":""))]),t._v(" "),n("input",{directives:[{name:"mask",rawName:"v-mask",value:t.maskTemplate,expression:"maskTemplate"}],staticClass:"text",class:{"border-pastelPink":t.hasError&&t.showError,"border-gray-800 focus:border-pastelGreen":!t.showError||!t.hasError},attrs:{type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),t.hasError&&t.showError?n("p",{staticClass:"text-xs text-pastelPink mt-2"},[t._v("\n\t\t"+t._s(t.message)+"\n\t")]):t._e(),t._v(" "),t.hasError&&t.showError?n("ErrorIcon",{staticClass:"absolute right-0 bottom-0 mb-8 text-pastelPink"}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorIcon:n(184).default})},182:function(t,e,n){"use strict";n.r(e);var r={name:"PencilIcon"},o=n(23),component=Object(o.a)(r,(function(t,e){var n=e._c;return n("svg",{staticClass:"h-6 w-6 mr-2",class:e.data.staticClass,attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"}})])}),[],!0,null,null,null);e.default=component.exports},183:function(t,e,n){"use strict";n.r(e);var r={name:"TrashIcon"},o=n(23),component=Object(o.a)(r,(function(t,e){var n=e._c;return n("svg",{staticClass:"h-6 w-6 mr-2",class:e.data.staticClass,attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})])}),[],!0,null,null,null);e.default=component.exports},184:function(t,e,n){"use strict";n.r(e);var r={name:"ErrorIcon"},o=n(23),component=Object(o.a)(r,(function(t,e){var n=e._c;return n("svg",{staticClass:"h-6 w-6 mr-2",class:e.data.staticClass,attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"}})])}),[],!0,null,null,null);e.default=component.exports},185:function(t,e,n){"use strict";n.r(e);n(83),n(25),n(24),n(10),n(63);var r=n(58),o=(n(33),n(3)),c=n(42);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={name:"Main",layout:"default",fetch:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({offices:function(t){return t.OfficeStore.list}})),watch:{},created:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{},head:function(){return{title:"Dog and Pony Senior FrontEnd Test"}}},d=(n(170),n(23)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-gray-200 w-full min-h-screen flex justify-center py-24 font-sans"},[n("AlertMessage"),t._v(" "),n("section",{staticClass:"w-80 flex flex-col items-center"},[n("h1",{staticClass:"text-pastelGreen text-6xl font-light mb-8"},[t._v("Offices")]),t._v(" "),n("OfficeAdd"),t._v(" "),n("transition-group",{staticClass:"w-full relative",attrs:{"enter-active-class":"absolute ease-out z-20","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"absolute ease-in z-20","leave-class":"opacity-100","leave-to-class":"opacity-0",tag:"div"}},t._l(t.offices,(function(t){return n("OfficeCard",{key:t.id,attrs:{office:t}})})),1),t._v(" "),n("p",{staticClass:"text-center text-gray-500 mt-6"},[t._v("\n\t\t\tThis project is for test purpose only.\n\t\t")]),t._v(" "),t._m(0)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{staticClass:"uppercase text-pastelGreen text-xs opacity-75",attrs:{href:"https://www.dogandponystudios.com/"}},[this._v("www.dogandponystudio.com")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AlertMessage:n(175).default,OfficeAdd:n(176).default,OfficeCard:n(177).default})}}]);