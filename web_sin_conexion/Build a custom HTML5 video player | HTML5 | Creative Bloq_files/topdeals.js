"use strict";function Carousel(a){a=a||{},this.carousel=a.carousel||document.querySelector(".carousel"),this.delay=a.delay||2.5,this.name=a.name,this.items_per_page=a.items_per_page||1,this.slides_total=Math.ceil(this.carousel.childElementCount/this.items_per_page),this.current_slide=-1,this.controls=a.controls||{};for(var b=0;b<this.carousel.children.length;b++)this.carousel.children[b].style.display="none";a.controls&&this.createControls(a.controls)}Carousel.prototype.toggleCurrent=function(){for(var a=this.items_per_page*this.current_slide;a<this.items_per_page*this.current_slide+this.items_per_page;a++)a<this.carousel.children.length&&a>=0&&(this.carousel.children[a].style.display="none"===this.carousel.children[a].style.display?"":"none","none"!==this.carousel.children[a].style.display?this.carousel.children[a].setAttribute("data-visible",!0):this.carousel.children[a].setAttribute("data-visible",!1))},Carousel.prototype.setSlide=function(a){var b=(a+this.slides_total)%this.slides_total;if(this.current_slide!==b){if(this.controls.wrapper_id){var c=document.getElementById(this.controls.wrapper_id).querySelectorAll(".dot")[this.current_slide];c&&(c.className=c.className.replace("current",""))}this.toggleCurrent(),this.current_slide=b,this.toggleCurrent(),this.controls.wrapper_id&&(document.getElementById(this.controls.wrapper_id).querySelectorAll(".dot")[this.current_slide].className+=" current")}},Carousel.prototype.next=function(){this.setSlide(this.current_slide+1)},Carousel.prototype.prev=function(){this.setSlide(this.current_slide-1)},Carousel.prototype.createControls=function(a){function b(a,b,c){a.addEventListener?a.addEventListener(b,c):a.attachEvent&&a.attachEvent("on"+b,c)}if(a=a||{},a.parent||(a.parent=this.carousel),!a.wrapper_id)throw"Controls need unique id wrapper";var c=a.parent,d=this,e=document.createElement("div");e.id=a.wrapper_id,e.className=a.wrapper_class||"carousel-controls",c.appendChild(e);var f=document.createElement("a");f.href="#",f.innerHTML="&#9664; Prev",b(f,"click",function(a){a.preventDefault(),d.prev()}),e.appendChild(f);var g=document.createElement("div");g.className="pager";for(var h=0;h<this.slides_total;h++){var i=document.createElement("a");i.className="dot"+(h===this.current_slide?" current":""),i.href="#",b(i,"click",function(a){return function(b){b.preventDefault(),d.setSlide(a)}}(h)),g.appendChild(i)}e.appendChild(g);var j=document.createElement("a");j.href="#",j.innerHTML="Next &#9654;",b(j,"click",function(a){a.preventDefault(),d.next()}),e.appendChild(j)},function(a,b){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)}}(window,"affclick"),Hawk=Hawk||{},Carousel.prototype.setSlide=function(a){return function(b){a.call(this,b);for(var c=[],d=[],e=this.carousel.querySelectorAll("[data-visible=true]"),f=0;f<e.length;f++)c.push(e[f].getAttribute("data-label")),d.push(e[f].getAttribute("data-merchant"));var g=function(a){var b="; "+document.cookie,c=b.split("; "+a+"=");return 2===c.length?c.pop().split(";").shift():null};affclick("appeared",{action:this.name+" Page "+this.current_slide,label:c.join("|"),merchant:d.join("|"),count:e.length,dimension32:g("splittest_topdeals")})}}(Carousel.prototype.setSlide),Hawk.topdeals=Hawk.topdeals||{},Hawk.topdeals.init=function(a,b,c,d){var e="xmasdeals";Hawk.Widgets.get(e,{site:a},function(a){for(var d in b)for(var e in b[d])if(b[d].hasOwnProperty(e)){var f=b[d][e],g="after";"string"!=typeof f&&f.selector&&(g=f.position,f=f.selector);var h=document.querySelector(f);if(h){var i=document.createElement("div");i.innerHTML=a,"end"===g?h.appendChild(i):"before"===g?h.parentNode.insertBefore(i,h):"start"===g?h.insertBefore(i,h.firstChild):h.parentNode.insertBefore(i,h.nextSibling);for(var j=i.querySelectorAll("a"),e=0;e<j.length;e++){var k=j[e].getAttribute("data-position");affclick(j[e],{position:Math.floor(k/3)+"_"+k%3,action:"Click from "+d})}var l=new Carousel({carousel:i.querySelector(".pcc-table tbody"),name:d,items_per_page:3,controls:{parent:i.querySelector(".hawk-top-deals"),wrapper_id:"carousel-controls-"+d.replace(/\s/g,"-")}}),m=Math.floor(Math.random()*l.slides_total);l.setSlide(m),c&&c({name:d,node:i,carousel:l});break}}},function(a){return a.testoptions=d||["grey-deals","blue-deals"],a})};var widgets={"Sidebar Top Deals Widget":["#block-future_dfp-dfp_mpu1_desktop"],"Bottom of Article Top Deals Widget":[{selector:"#comments-list",position:"before"}]};Hawk.topdeals.init("CBQ",widgets,null,["grey-deals"]);