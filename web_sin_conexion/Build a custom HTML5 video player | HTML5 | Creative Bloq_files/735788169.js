/* Unknown-Branch 14.11.24-1102-1102 (2014-11-24 19:02:36 GMT) */

rsinetsegs=['A08721_50299','A08721_50225','A08721_50239','A08721_50136','A08721_50382','A08721_0'];
var rsiExp=new Date((new Date()).getTime()+2419200000);
var rsiDom='';
var rsiSegs="";
var rsiPat=/.*_5.*/;
for(x=0;x<rsinetsegs.length;++x){if(!rsiPat.test(rsinetsegs[x]))rsiSegs+='|'+rsinetsegs[x];}
document.cookie="asi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
document.cookie="rsi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['A08721_50299','A08721_50225','A08721_50239','A08721_50136','A08721_50382','A08721_0'],'a08721');} 