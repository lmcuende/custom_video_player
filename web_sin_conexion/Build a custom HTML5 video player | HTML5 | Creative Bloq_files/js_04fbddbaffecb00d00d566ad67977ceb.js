var dfp=!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):e(t.jQuery)}(this,function(t){"use strict";var e={unit:"",loaded:function(){},targetting:{},debug:!1,clearContainer:!1,addType:"append",singleRequest:!1,globalTargetting:{},centerAds:!1,settings:{slotname:"unnamed",cssClass:"",format:"",oop:!1,loaded:function(){},sizes:[],targetting:{}}},n=function(t){return t.hasOwnProperty("unit")?(this.log("Unit: "+t.unit),"undefined"==typeof googletag?(this.log("googletag not defined"),!1):(this.debug=t.debug,this.unit=t.unit,this.singleRequest=t.singleRequest,this.globalTargetting=t.globalTargetting,this.centerAds=t.centerAds,this.screenWidth=window.innerWidth>0?window.innerWidth:screen.width,this.log("viewport width",this.screenWidth),this.options=this.getDfpSettings(t),void(this.options!==!1&&this.setupDfp()))):(this.log("No unit set"),!1)};n.prototype={constructor:n,log:function(){if(window.console)for(var t=0;t<arguments.length;t++)console.log(arguments[t])},escapeUnsafeString:function(t){return t.replace(/[#",*()=+<>\[\]]/g,function(t){return"%"+t.charCodeAt(0).toString(16)})},escapeUnsafeArray:function(e){var n=this;return t.each(e,function(t,i){e[t]=n.escapeUnsafeString(i)}),e},escapeUnsafeValue:function(e){return"string"==typeof e?this.escapeUnsafeString(e):t.isArray(e)?this.escapeUnsafeArray(e):void 0},setupGlobals:function(){if("object"==typeof this.globalTargetting){try{var t="";t+=new Array(20).join("~")+" Global Advert Code ",t+=new Array(20).join("~")+"\n",t+="~     targetting:	"+JSON.stringify(this.globalTargetting)+"\n",t+=new Array(53).join("~"),this.log(t)}catch(e){}var n;for(var i in this.globalTargetting)n=this.globalTargetting[i],""!==n&&n!=[]&&googletag.pubads().setTargeting(i,this.escapeUnsafeValue(n))}},setupDfp:function(){t("body").hasClass("dfp-setup")||(googletag.pubads().enableAsyncRendering(),googletag.pubads().collapseEmptyDivs(),this.setupGlobals(),this.singleRequest&&googletag.pubads().enableSingleRequest(),googletag.pubads().setCentering(this.centerAds),googletag.enableServices(),t("body").addClass("dfp-setup"))},getDfpSettings:function(e){var n=e.settings;this.log("options",n);var i=!1,s=!1,o=null;if("[object Array]"===Object.prototype.toString.call(n)){this.log("Array passed, calculating best settings match");for(var a=0;a<n.length;a++)if(i=n[a].minWidth||!1,s=n[a].maxWidth||!1,(this.screenWidth>=i||i===!1)&&(this.screenWidth<=s||s===!1)){this.log("Best match",n[a]),o=n[a];break}if(null===o)return this.log("Settings not matched"),!1}else{if(this.log("Object passed, using as settings object"),i=n.minWidth||!1,s=n.maxWidth||!1,!(this.screenWidth>=i||i===!1)||!(this.screenWidth<=s||s===!1))return this.log("Setting disallow ad"),!1;this.log("Settings allow this ad"),o=n}if("object"==typeof o.sizes){var r=this;o.sizes=t.grep(o.sizes,function(t){return t[0]<=r.screenWidth})}return o.hasOwnProperty("addType")||(o.addType=e.addType),o.hasOwnProperty("clearContainer")||(o.clearContainer=e.clearContainer),o},renderAd:function(e){var n="dfp_advert_"+t.guid++,i=t("<div>",{id:n,"class":"dfp-plugin-advert "+this.options.cssClass,"data-dfp-format":this.options.format});switch(this.options.clearContainer&&e.html(""),this.options.addType){case"prepend":e.prepend(i);break;case"before":e.before(i);break;case"after":e.after(i);break;default:e.append(i)}var s={id:n,oop:!1,sizes:this.options.sizes,format:this.options.format,targetting:this.options.targetting,addType:this.options.addType||"append",clearContainer:this.options.clearContainer||!1,unit:this.unit};"undefined"!=typeof this.options.oop&&(s.oop=this.options.oop);try{var o="";o+=new Array(20).join("~")+" Advert Code ",o+=new Array(20).join("~")+"\n",o+="~           unit:	"+s.unit+"\n",o+="~             id:	"+n+"\n",o+="~            oop:	"+s.oop.toString()+"\n",o+="~          sizes:	"+JSON.stringify(s.sizes)+"\n",o+="~     targetting:	"+JSON.stringify(s.targetting)+"\n",o+="~         format:	"+s.format+"\n",o+="~        addMode:	"+s.addType+"\n",o+="~     element id:	"+e.attr("id")+"\n",o+="~  element class:	"+e.attr("class")+"\n",o+="~ clearContainer:	"+s.clearContainer.toString()+"\n",o+=new Array(53).join("~"),i.prepend(document.createComment(o)),"function"==typeof ga&&ga("send","event","advert","render",{eventValue:this.options.slotname,nonInteraction:1}),this.log(o)}catch(a){}googletag.cmd.push(function(){var t={};t=s.oop?googletag.defineOutOfPageSlot(s.unit,s.id):googletag.defineSlot(s.unit,s.sizes,s.id);var e=[];if(""!==s.format&&e.push(s.format),"undefined"!=typeof dfpBeta&&dfpBeta===!0&&e.push("beta"),e.length>0&&t.setTargeting("format",e),"object"==typeof s.targetting)for(var n in s.targetting)t.setTargeting(n,s.targetting[n]);t.addService(googletag.pubads()),googletag.display(s.id)})}},t.fn.dfp=function(i){i=t.extend(!0,{},e,i),t.isArray(i.settings)&&t.each(i.settings,function(n,s){i.settings[n]=t.extend(!0,{},e.settings,s)});var s=new n(i);return s===!1||s.options===!1?!1:this.each(function(){var e=t(this);s.renderAd(e),e.data("dfp-plugin",s)})},t.fn.dfp.defaults=e,t.fn.dfp.Plugin=n,t.fn.dfp.refreshAds=function(){"undefined"!=typeof googletag&&googletag.pubads().refresh()}});;