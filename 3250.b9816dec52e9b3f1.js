"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[3250],{3250:(E,j,f)=>{f.r(j),f.d(j,{createSymbolSchema:()=>S});var o=f(39406),s=f(18716);function u(e){return"line-marker"===e.type?{type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function y(e){return(0,s.hF)(e)}function S(e,t,r=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function g(e,t,r){const a=(0,s.jj)(o.LW.FILL,t),l=r?y(a):a,n=e.clone(),c=n.outline,h=(0,s.jy)(t.symbologyType);h||(n.outline=null);const p={materialKey:l,hash:n.hash(),...u(n)};if(h)return p;const i=[];if(i.push(p),c){const m=(0,s.jj)(o.LW.LINE,{...t,isOutline:!0}),V={materialKey:r?y(m):m,hash:c.hash(),...u(c)};i.push(V)}return{type:"composite-symbol",layers:i,hash:i.reduce((m,V)=>V.hash+m,"")}}(e,t,r);case"simple-marker":case"picture-marker":return function L(e,t,r){const a=(0,s.jj)(o.LW.MARKER,t),l=r?y(a):a,n=u(e);return{materialKey:l,hash:e.hash(),...n,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r);case"simple-line":return function K(e,t,r){const a=(0,s.jy)(t.symbologyType)?o.mD.DEFAULT:t.symbologyType,l=(0,s.jj)(o.LW.LINE,{...t,symbologyType:a}),n=r?y(l):l,c=e.clone(),h=c.marker;c.marker=null;const p=[];if(p.push({materialKey:n,hash:c.hash(),...u(c)}),h){const i=(0,s.jj)(o.LW.MARKER,t),m=r?y(i):i;h.color=h.color??c.color,p.push({materialKey:m,hash:h.hash(),lineWidth:c.width,...u(h)})}return{type:"composite-symbol",layers:p,hash:p.reduce((i,m)=>m.hash+i,"")}}(e,t,r);case"text":return function d(e,t,r){const a=(0,s.jj)(o.LW.TEXT,t),l=r?y(a):a,n=u(e);return{materialKey:l,hash:e.hash(),...n,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r);case"label":return function b(e,t,r){const a=e.toJSON(),l=(0,s.jj)(o.LW.LABEL,{...t,placement:a.labelPlacement});return{materialKey:r?y(l):l,hash:e.hash(),...a,labelPlacement:a.labelPlacement}}(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...u(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}}}]);