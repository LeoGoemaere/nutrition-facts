(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2,6],{215:function(t,e,o){var content=o(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(58).default)("06e6877a",content,!0,{sourceMap:!1})},216:function(t,e,o){"use strict";e.a={methods:{roundValue:function(t){return isNaN(t)?0:Math.ceil(t)},deepCopy:function(t){return JSON.parse(JSON.stringify(t))}}}},217:function(t,e,o){"use strict";var n=o(8),r=o(5),l=o(86),d=o(13),c=o(9),f=o(37),_=o(163),v=o(61),m=o(4),h=o(49),x=o(62).f,N=o(29).f,C=o(12).f,V=o(218).trim,k="Number",w=r.Number,D=w.prototype,y=f(h(D))==k,I=function(t){var e,o,n,r,l,d,c,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=V(f)).charCodeAt(0))||45===e){if(88===(o=f.charCodeAt(2))||120===o)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+f}for(d=(l=f.slice(2)).length,c=0;c<d;c++)if((code=l.charCodeAt(c))<48||code>r)return NaN;return parseInt(l,n)}return+f};if(l(k,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var E,F=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof F&&(y?m((function(){D.valueOf.call(o)})):f(o)!=k)?_(new w(I(e)),o,F):I(e)},A=n?x(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;A.length>O;O++)c(w,E=A[O])&&!c(F,E)&&C(F,E,N(w,E));F.prototype=D,D.constructor=F,d(r,k,F)}},218:function(t,e,o){var n=o(16),r="["+o(219)+"]",l=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),c=function(t){return function(e){var o=String(n(e));return 1&t&&(o=o.replace(l,"")),2&t&&(o=o.replace(d,"")),o}};t.exports={start:c(1),end:c(2),trim:c(3)}},219:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},220:function(t,e,o){"use strict";o(215)},221:function(t,e,o){var n=o(57)(!1);n.push([t.i,".fooddata[data-v-1902e09d]{display:flex;flex:1}.fooddata[data-v-1902e09d]:first-child{margin-right:10px}.fooddata[data-v-1902e09d]:last-child{margin-left:10px}.fooddata__input-container[data-v-1902e09d]{display:flex;position:relative;flex:1}.fooddata__input[data-v-1902e09d]{width:100%;padding:10px 20px 10px 10px;box-sizing:border-box;font-size:16px;background-color:transparent;border:1px solid #b3b3b3;border-right:none;border-radius:3px 0 0 3px}.fooddata__label[data-v-1902e09d]{position:absolute;right:5px;top:0;bottom:0;display:flex;align-items:center}.fooddata__info[data-v-1902e09d]{padding:0 5px;display:flex;align-items:center;font-size:12px;text-align:center;color:#fff;background-color:#b3b3b3;border-radius:0 4px 4px 0;border-right:0;position:relative}",""]),t.exports=n},222:function(t,e,o){"use strict";o.r(e);o(217);var n={name:"FoodData",mixins:[o(216).a],props:{value:{type:Number,default:0},isCooked:{default:!1}},computed:{displayFoodInfos:function(){return this.isCooked?"cooked":"raw"}}},r=(o(220),o(27)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fooddata"},[o("div",{staticClass:"fooddata__input-container"},[o("input",{staticClass:"fooddata__input",attrs:{type:"number"},domProps:{value:t.roundValue(t.value)},on:{change:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),o("label",{staticClass:"fooddata__label"},[t._v("g")])]),t._v(" "),this.isCooked?o("span",{staticClass:"fooddata__info"},[o("i",{staticClass:"fas fa-fire"})]):o("span",{staticClass:"fooddata__info"},[o("i",{staticClass:"far fa-snowflake"})])])}),[],!1,null,"1902e09d",null);e.default=component.exports},224:function(t,e,o){"use strict";o.r(e);var n={name:"Notification",props:{isActive:Boolean,description:String,validateButton:Object,cancelButton:Object},methods:{notifvalidated:function(){this.$emit("validated")},notifCanceled:function(){this.$emit("canceled")}}},r=o(27),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"notification",class:{"notification--active":t.isActive}},[o("div",{staticClass:"notification__infos-container"},[t.description?o("p",{staticClass:"notification__description"},[t._v(t._s(t.description))]):t._e(),t._v(" "),o("button",{staticClass:"notification__button",class:"notification__button--"+t.validateButton.modifier,on:{click:t.notifvalidated}},[t._v(t._s(t.validateButton.text))])]),t._v(" "),o("button",{staticClass:"notification__button notification__button--cancel",on:{click:t.notifCanceled}},[t._v(t._s(t.cancelButton.text))])]),t._v(" "),o("div",{staticClass:"notification__overlay",class:{"notification__overlay--active":t.isActive},on:{click:t.notifCanceled}})])}),[],!1,null,null,null);e.default=component.exports},228:function(t,e,o){var content=o(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(58).default)("37a13489",content,!0,{sourceMap:!1})},231:function(t,e,o){"use strict";o(228)},232:function(t,e,o){var n=o(57)(!1);n.push([t.i,'.foodlineitem[data-v-63f5af36]{padding-top:5px;padding-bottom:12px;position:relative;border-bottom:1px solid #dedede}.foodlineitem__top[data-v-63f5af36]{margin-bottom:5px;display:flex;align-items:center;justify-content:space-between}.foodlineitem__name[data-v-63f5af36]{font-size:17px;color:#000}.foodlineitem__delete[data-v-63f5af36],.foodlineitem__edit[data-v-63f5af36]{background:none;border:none;cursor:pointer;padding-left:10px}.foodlineitem__edit[data-v-63f5af36]{color:grey}.foodlineitem__delete[data-v-63f5af36]{color:#a72e2e;padding-right:0}.foodlineitem__data[data-v-63f5af36],.foodlineitem__nutriments[data-v-63f5af36]{display:flex;align-items:center}.foodlineitem__nutriment+.foodlineitem__nutriment[data-v-63f5af36]:before{content:"|";color:#b3b3b3;margin:0 3px}.foodlineitem__nutriment.carbs[data-v-63f5af36]{color:#d68644}.foodlineitem__nutriment.proteins[data-v-63f5af36]{color:#48bb6a}.foodlineitem__nutriment.fats[data-v-63f5af36]{color:#cc305a}.foodlineitem__nutriment.calories[data-v-63f5af36]{color:#6786fc}',""]),t.exports=n},234:function(t,e,o){"use strict";o.r(e);o(217);var n=o(216),r={components:{Notification:o(224).default},name:"FoodLineItem",mixins:[n.a],props:{foodData:{type:Object},raw:{type:Number},cooked:{type:Number}},data:function(){return{rawValue:null,cookedValue:null,isDeleteNotificationOpen:!1}},mounted:function(){this.rawValue=this.raw,this.cookedValue=this.cooked},methods:{convertCookedFromRaw:function(t){if(0!==Number(t)&&t){var e=this.rawValue,o=Number(t);this.rawValue=o,this.cookedValue=o*this.cookedValue/e}else this.rawValue=this.foodData.quantities.raw,this.cookedValue=this.foodData.quantities.cooked},convertRawFromCooked:function(t){if(0!==t&&t){var e=this.cookedValue,o=Number(t);this.cookedValue=o,this.rawValue=o*this.rawValue/e}else this.rawValue=this.foodData.quantities.raw,this.cookedValue=this.foodData.quantities.cooked},openDeleteNotification:function(){this.isDeleteNotificationOpen=!0},closeDeleteNotification:function(){this.isDeleteNotificationOpen=!1},deleteLineItem:function(){this.$store.dispatch("deleteFood",this.foodData)}},computed:{getNutrimentValue:function(){var t=this;return function(e){switch(e){case"carbs":return t.rawValue*Number(t.foodData.carbs)/100;case"proteins":return t.rawValue*Number(t.foodData.proteins)/100;case"fats":return t.rawValue*Number(t.foodData.fats)/100;case"calories":return t.rawValue*Number(t.foodData.calories)/100}}}}},l=(o(231),o(27)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"foodlineitem"},[o("div",{staticClass:"foodlineitem__top"},[o("p",{staticClass:"foodlineitem__name"},[t._v(t._s(t.foodData.name))]),t._v(" "),o("div",{staticClass:"foodlineitem__nutriments"},[t.foodData.carbs?o("span",{staticClass:"foodlineitem__nutriment carbs"},[t._v("c."+t._s(t.roundValue(t.getNutrimentValue("carbs")))+"g")]):t._e(),t._v(" "),t.foodData.proteins?o("span",{staticClass:"foodlineitem__nutriment proteins"},[t._v("p."+t._s(t.roundValue(t.getNutrimentValue("proteins")))+"g")]):t._e(),t._v(" "),t.foodData.fats?o("span",{staticClass:"foodlineitem__nutriment fats"},[t._v("f."+t._s(t.roundValue(t.getNutrimentValue("fats")))+"g")]):t._e(),t._v(" "),t.foodData.calories?o("span",{staticClass:"foodlineitem__nutriment calories"},[t._v("cal."+t._s(t.roundValue(t.getNutrimentValue("calories")))+"g")]):t._e(),t._v(" "),o("button",{staticClass:"foodlineitem__edit",on:{click:function(e){return t.$router.push({name:"foodModifier",query:{id:t.foodData.id}})}}},[o("i",{staticClass:"far fa-edit"})]),t._v(" "),o("button",{staticClass:"foodlineitem__delete",on:{click:t.openDeleteNotification}},[o("i",{staticClass:"far fa-trash-alt"})])])]),t._v(" "),o("div",{staticClass:"foodlineitem__data"},[o("FoodData",{attrs:{value:t.rawValue,isCooked:!1},on:{input:t.convertCookedFromRaw}}),t._v(" "),o("i",{staticClass:"fas fa-exchange-alt"}),t._v(" "),o("FoodData",{attrs:{value:t.cookedValue,isCooked:!0},on:{input:t.convertRawFromCooked}})],1),t._v(" "),o("Notification",{attrs:{isActive:t.isDeleteNotificationOpen,validateButton:{text:"Delete",modifier:"danger"},cancelButton:{text:"Cancel"},description:"Delete the food."},on:{canceled:t.closeDeleteNotification,validated:t.deleteLineItem}})],1)}),[],!1,null,"63f5af36",null);e.default=component.exports;installComponents(component,{FoodData:o(222).default,Notification:o(224).default})}}]);