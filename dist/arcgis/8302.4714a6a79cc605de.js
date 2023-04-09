"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[8302],{38302:(yn,C,A)=>{A.r(C),A.d(C,{registerFunctions:()=>b});var P=A(15861),B=A(24263),h=A(27187),u=A(47562),R=A(85692),g=A(2004),x=A(21674),s=A(87215),T=A(72854),M=A(72642),H=A(37118),O=A(55214),y=A(91179),l=A(25919),j=A(6729),U=A(37780),F=A(16309),J=A(16730);function z(o){return 0===B.i8.indexOf("4.")?H.Z.fromExtent(o):new H.Z({spatialReference:o.spatialReference,rings:[[[o.xmin,o.ymin],[o.xmin,o.ymax],[o.xmax,o.ymax],[o.xmax,o.ymin],[o.xmin,o.ymin]]]})}function G(o,r,i){if((0,u.y)(o,2,2,r,i),!(o[0]instanceof x.Z&&o[1]instanceof x.Z||o[0]instanceof x.Z&&null===o[1]||o[1]instanceof x.Z&&null===o[0]||null===o[0]&&null===o[1]))throw new l.aV(r,l.rH.InvalidParameter,i)}function N(o,r){return S.apply(this,arguments)}function S(){return(S=(0,P.Z)(function*(o,r){if("polygon"!==o.type&&"polyline"!==o.type&&"extent"!==o.type)return 0;let i=1;(o.spatialReference.vcsWkid||o.spatialReference.latestVcsWkid)&&(i=(0,R._R)(o.spatialReference)/(0,J.c9)(o.spatialReference));let d=0;if("polyline"===o.type)for(const n of o.paths)for(let a=1;a<n.length;a++)d+=(0,R.AW)(n[a],n[a-1],i);else if("polygon"===o.type)for(const n of o.rings){for(let a=1;a<n.length;a++)d+=(0,R.AW)(n[a],n[a-1],i);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||void 0!==n[0][2]&&n[0][2]!==n[n.length-1][2])&&(d+=(0,R.AW)(n[0],n[n.length-1],i))}else"extent"===o.type&&(d+=2*(0,R.AW)([o.xmin,o.ymin,0],[o.xmax,o.ymin,0],i),d+=2*(0,R.AW)([o.xmin,o.ymin,0],[o.xmin,o.ymax,0],i),d*=2,d+=4*Math.abs((0,u.A)(o.zmax,0)*i-(0,u.A)(o.zmin,0)*i));const p=new O.Z({hasZ:!1,hasM:!1,spatialReference:o.spatialReference,paths:[[0,0],[0,d]]});return(0,s.sz)(p,r)})).apply(this,arguments)}function b(o){"async"===o.mode&&(o.functions.disjoint=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>(G(n=(0,u.G)(n),r,i),null===n[0]||null===n[1]||(0,s.ED)(n[0],n[1])))},o.functions.intersects=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>(G(n=(0,u.G)(n),r,i),null!==n[0]&&null!==n[1]&&(0,s.kK)(n[0],n[1])))},o.functions.touches=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>(G(n=(0,u.G)(n),r,i),null!==n[0]&&null!==n[1]&&(0,s.W4)(n[0],n[1])))},o.functions.crosses=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>(G(n=(0,u.G)(n),r,i),null!==n[0]&&null!==n[1]&&(0,s.jU)(n[0],n[1])))},o.functions.within=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>(G(n=(0,u.G)(n),r,i),null!==n[0]&&null!==n[1]&&(0,s.uh)(n[0],n[1])))},o.functions.contains=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>(G(n=(0,u.G)(n),r,i),null!==n[0]&&null!==n[1]&&(0,s.r3)(n[0],n[1])))},o.functions.overlaps=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>(G(n=(0,u.G)(n),r,i),null!==n[0]&&null!==n[1]&&(0,s.Nm)(n[0],n[1])))},o.functions.equals=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>((0,u.y)(n,2,2,r,i),n[0]===n[1]||(n[0]instanceof x.Z&&n[1]instanceof x.Z?(0,s.fS)(n[0],n[1]):!(!(0,u.k)(n[0])||!(0,u.k)(n[1]))&&n[0].equals(n[1]))))},o.functions.relate=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,3,3,r,i),n[0]instanceof x.Z&&n[1]instanceof x.Z)return(0,s.LV)(n[0],n[1],(0,u.j)(n[2]));if(n[0]instanceof x.Z&&null===n[1]||n[1]instanceof x.Z&&null===n[0]||null===n[0]&&null===n[1])return!1;throw new l.aV(r,l.rH.InvalidParameter,i)})},o.functions.intersection=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>(G(n=(0,u.G)(n),r,i),null===n[0]||null===n[1]?null:(0,s.wf)(n[0],n[1])))},o.functions.union=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{const a=[];if(0===(n=(0,u.G)(n)).length)throw new l.aV(r,l.rH.WrongNumberOfParameters,i);if(1===n.length)if((0,u.m)(n[0])){const f=(0,u.G)(n[0]);for(let m=0;m<f.length;m++)if(null!==f[m]){if(!(f[m]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);a.push(f[m])}}else{if(!(0,u.x)(n[0])){if(n[0]instanceof x.Z)return(0,u.q)((0,h.r1)(n[0]),r.spatialReference);if(null===n[0])return null;throw new l.aV(r,l.rH.InvalidParameter,i)}{const f=(0,u.G)(n[0].toArray());for(let m=0;m<f.length;m++)if(null!==f[m]){if(!(f[m]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);a.push(f[m])}}}else for(let f=0;f<n.length;f++)if(null!==n[f]){if(!(n[f]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);a.push(n[f])}return 0===a.length?null:(0,s.G0)(a)})},o.functions.difference=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>(G(n=(0,u.G)(n),r,i),null!==n[0]&&null===n[1]?(0,h.r1)(n[0]):null===n[0]?null:(0,s.e5)(n[0],n[1])))},o.functions.symmetricdifference=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>(G(n=(0,u.G)(n),r,i),null===n[0]&&null===n[1]?null:null===n[0]?(0,h.r1)(n[1]):null===n[1]?(0,h.r1)(n[0]):(0,s.Sp)(n[0],n[1])))},o.functions.clip=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,2,r,i),!(n[1]instanceof g.Z)&&null!==n[1])throw new l.aV(r,l.rH.InvalidParameter,i);if(null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return null===n[1]?null:(0,s.oq)(n[0],n[1])})},o.functions.cut=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,2,r,i),!(n[1]instanceof O.Z)&&null!==n[1])throw new l.aV(r,l.rH.InvalidParameter,i);if(null===n[0])return[];if(!(n[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return null===n[1]?[(0,h.r1)(n[0])]:(0,s.z7)(n[0],n[1])})},o.functions.area=function(r,i){return o.standardFunctionAsync(r,i,function(){var d=(0,P.Z)(function*(p,n,a){if((0,u.y)(a,1,2,r,i),null===(a=(0,u.G)(a))[0])return 0;if((0,u.T)(a[0])){const f=yield a[0].sumArea((0,h.EI)((0,u.A)(a[1],-1)),!1,r.abortSignal);if(r.abortSignal.aborted)throw new l.aV(r,l.rH.Cancelled,i);return f}if((0,u.m)(a[0])||(0,u.x)(a[0])){const f=(0,u.J)(a[0],r.spatialReference);return null===f?0:(0,s.CJ)(f,(0,h.EI)((0,u.A)(a[1],-1)))}if(!(a[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return(0,s.CJ)(a[0],(0,h.EI)((0,u.A)(a[1],-1)))});return function(p,n,a){return d.apply(this,arguments)}}())},o.functions.areageodetic=function(r,i){return o.standardFunctionAsync(r,i,function(){var d=(0,P.Z)(function*(p,n,a){if((0,u.y)(a,1,2,r,i),null===(a=(0,u.G)(a))[0])return 0;if((0,u.T)(a[0])){const f=yield a[0].sumArea((0,h.EI)((0,u.A)(a[1],-1)),!0,r.abortSignal);if(r.abortSignal.aborted)throw new l.aV(r,l.rH.Cancelled,i);return f}if((0,u.m)(a[0])||(0,u.x)(a[0])){const f=(0,u.J)(a[0],r.spatialReference);return null===f?0:(0,s.Y4)(f,(0,h.EI)((0,u.A)(a[1],-1)))}if(!(a[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return(0,s.Y4)(a[0],(0,h.EI)((0,u.A)(a[1],-1)))});return function(p,n,a){return d.apply(this,arguments)}}())},o.functions.length=function(r,i){return o.standardFunctionAsync(r,i,function(){var d=(0,P.Z)(function*(p,n,a){if((0,u.y)(a,1,2,r,i),null===(a=(0,u.G)(a))[0])return 0;if((0,u.T)(a[0])){const f=yield a[0].sumLength((0,h.Lz)((0,u.A)(a[1],-1)),!1,r.abortSignal);if(r.abortSignal.aborted)throw new l.aV(r,l.rH.Cancelled,i);return f}if((0,u.m)(a[0])||(0,u.x)(a[0])){const f=(0,u.H)(a[0],r.spatialReference);return null===f?0:(0,s.sz)(f,(0,h.Lz)((0,u.A)(a[1],-1)))}if(!(a[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return(0,s.sz)(a[0],(0,h.Lz)((0,u.A)(a[1],-1)))});return function(p,n,a){return d.apply(this,arguments)}}())},o.functions.length3d=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if((0,u.y)(n,1,2,r,i),null===(n=(0,u.G)(n))[0])return 0;if((0,u.m)(n[0])||(0,u.x)(n[0])){const a=(0,u.H)(n[0],r.spatialReference);return null===a?0:!0===a.hasZ?N(a,(0,h.Lz)((0,u.A)(n[1],-1))):(0,s.sz)(a,(0,h.Lz)((0,u.A)(n[1],-1)))}if(!(n[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return!0===n[0].hasZ?N(n[0],(0,h.Lz)((0,u.A)(n[1],-1))):(0,s.sz)(n[0],(0,h.Lz)((0,u.A)(n[1],-1)))})},o.functions.lengthgeodetic=function(r,i){return o.standardFunctionAsync(r,i,function(){var d=(0,P.Z)(function*(p,n,a){if((0,u.y)(a,1,2,r,i),null===(a=(0,u.G)(a))[0])return 0;if((0,u.T)(a[0])){const f=yield a[0].sumLength((0,h.Lz)((0,u.A)(a[1],-1)),!0,r.abortSignal);if(r.abortSignal.aborted)throw new l.aV(r,l.rH.Cancelled,i);return f}if((0,u.m)(a[0])||(0,u.x)(a[0])){const f=(0,u.H)(a[0],r.spatialReference);return null===f?0:(0,s.kQ)(f,(0,h.Lz)((0,u.A)(a[1],-1)))}if(!(a[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return(0,s.kQ)(a[0],(0,h.Lz)((0,u.A)(a[1],-1)))});return function(p,n,a){return d.apply(this,arguments)}}())},o.functions.distance=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{n=(0,u.G)(n),(0,u.y)(n,2,3,r,i);let a=n[0];((0,u.m)(n[0])||(0,u.x)(n[0]))&&(a=(0,u.K)(n[0],r.spatialReference));let f=n[1];if(((0,u.m)(n[1])||(0,u.x)(n[1]))&&(f=(0,u.K)(n[1],r.spatialReference)),!(a instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);if(!(f instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return(0,s.TE)(a,f,(0,h.Lz)((0,u.A)(n[2],-1)))})},o.functions.distancegeodetic=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{n=(0,u.G)(n),(0,u.y)(n,2,3,r,i);const a=n[0],f=n[1];if(!(a instanceof M.Z))throw new l.aV(r,l.rH.InvalidParameter,i);if(!(f instanceof M.Z))throw new l.aV(r,l.rH.InvalidParameter,i);const m=new O.Z({paths:[],spatialReference:a.spatialReference});return m.addPath([a,f]),(0,s.kQ)(m,(0,h.Lz)((0,u.A)(n[2],-1)))})},o.functions.densify=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,3,r,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(r,l.rH.InvalidParameter,i);if(a<=0)throw new l.aV(r,l.rH.InvalidParameter,i);return n[0]instanceof H.Z||n[0]instanceof O.Z?(0,s.Cz)(n[0],a,(0,h.Lz)((0,u.A)(n[2],-1))):n[0]instanceof g.Z?(0,s.Cz)(z(n[0]),a,(0,h.Lz)((0,u.A)(n[2],-1))):n[0]})},o.functions.densifygeodetic=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,3,r,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(r,l.rH.InvalidParameter,i);if(a<=0)throw new l.aV(r,l.rH.InvalidParameter,i);return n[0]instanceof H.Z||n[0]instanceof O.Z?(0,s.j2)(n[0],a,(0,h.Lz)((0,u.A)(n[2],-1))):n[0]instanceof g.Z?(0,s.j2)(z(n[0]),a,(0,h.Lz)((0,u.A)(n[2],-1))):n[0]})},o.functions.generalize=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,4,r,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(r,l.rH.InvalidParameter,i);return(0,s.D$)(n[0],a,(0,u.h)((0,u.A)(n[2],!0)),(0,h.Lz)((0,u.A)(n[3],-1)))})},o.functions.buffer=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,3,r,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(r,l.rH.InvalidParameter,i);return 0===a?(0,h.r1)(n[0]):(0,s.f3)(n[0],a,(0,h.Lz)((0,u.A)(n[2],-1)))})},o.functions.buffergeodetic=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,3,r,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(r,l.rH.InvalidParameter,i);return 0===a?(0,h.r1)(n[0]):(0,s.rd)(n[0],a,(0,h.Lz)((0,u.A)(n[2],-1)))})},o.functions.offset=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,6,r,i),null===n[0])return null;if(!(n[0]instanceof H.Z||n[0]instanceof O.Z))throw new l.aV(r,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(r,l.rH.InvalidParameter,i);const f=(0,u.g)((0,u.A)(n[4],10));if(isNaN(f))throw new l.aV(r,l.rH.InvalidParameter,i);const m=(0,u.g)((0,u.A)(n[5],0));if(isNaN(m))throw new l.aV(r,l.rH.InvalidParameter,i);return(0,s.cv)(n[0],a,(0,h.Lz)((0,u.A)(n[2],-1)),(0,u.j)((0,u.A)(n[3],"round")).toLowerCase(),f,m)})},o.functions.rotate=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{n=(0,u.G)(n),(0,u.y)(n,2,3,r,i);let a=n[0];if(null===a)return null;if(!(a instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);a instanceof g.Z&&(a=H.Z.fromExtent(a));const f=(0,u.g)(n[1]);if(isNaN(f))throw new l.aV(r,l.rH.InvalidParameter,i);const m=(0,u.A)(n[2],null);if(null===m)return(0,s.U1)(a,f);if(m instanceof M.Z)return(0,s.U1)(a,f,m);throw new l.aV(r,l.rH.InvalidParameter,i)})},o.functions.centroid=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,1,1,r,i),null===n[0])return null;let a=n[0];if(((0,u.m)(n[0])||(0,u.x)(n[0]))&&(a=(0,u.K)(n[0],r.spatialReference)),null===a)return null;if(!(a instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return a instanceof M.Z?(0,u.q)((0,h.r1)(n[0]),r.spatialReference):a instanceof H.Z?a.centroid:a instanceof O.Z?(0,R.s9)(a):a instanceof T.Z?(0,R.Ay)(a):a instanceof g.Z?a.center:null})},o.functions.multiparttosinglepart=function(r,i){return o.standardFunctionAsync(r,i,function(){var d=(0,P.Z)(function*(p,n,a){a=(0,u.G)(a),(0,u.y)(a,1,1,r,i);const f=[];if(null===a[0])return null;if(!(a[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);if(a[0]instanceof M.Z)return[(0,u.q)((0,h.r1)(a[0]),r.spatialReference)];if(a[0]instanceof g.Z)return[(0,u.q)((0,h.r1)(a[0]),r.spatialReference)];const m=yield(0,s.og)(a[0]);if(m instanceof H.Z){const v=[],E=[];for(let Z=0;Z<m.rings.length;Z++)if(m.isClockwise(m.rings[Z])){const I=(0,y.im)({rings:[m.rings[Z]],hasZ:!0===m.hasZ,hazM:!0===m.hasM,spatialReference:m.spatialReference.toJSON()});v.push(I)}else E.push({ring:m.rings[Z],pt:m.getPoint(Z,0)});for(let Z=0;Z<E.length;Z++)for(let I=0;I<v.length;I++)if(v[I].contains(E[Z].pt)){v[I].addRing(E[Z].ring);break}return v}if(m instanceof O.Z){const v=[];for(let E=0;E<m.paths.length;E++){const Z=(0,y.im)({paths:[m.paths[E]],hasZ:!0===m.hasZ,hazM:!0===m.hasM,spatialReference:m.spatialReference.toJSON()});v.push(Z)}return v}if(a[0]instanceof T.Z){const v=(0,u.q)((0,h.r1)(a[0]),r.spatialReference);for(let E=0;E<v.points.length;E++)f.push(v.getPoint(E));return f}return null});return function(p,n,a){return d.apply(this,arguments)}}())},o.functions.issimple=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,1,1,r,i),null===n[0])return!0;if(!(n[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return(0,s.Gg)(n[0])})},o.functions.simplify=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,1,1,r,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return(0,s.og)(n[0])})},o.functions.convexhull=function(r,i){return o.standardFunctionAsync(r,i,(d,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,1,1,r,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(r,l.rH.InvalidParameter,i);return(0,s.JI)(n[0])})},o.functions.getuser=function(r,i){return o.standardFunctionAsync(r,i,function(){var d=(0,P.Z)(function*(p,n,a){(0,u.y)(a,0,2,r,i);let f=(0,u.A)(a[1],""),m=!0===f;if(f=!0===f||!1===f?"":(0,u.j)(f),0===a.length||a[0]instanceof U.Z){let E=null;r.services&&r.services.portal&&(E=r.services.portal),a.length>0&&(E=(0,F._)(a[0],E));const Z=yield(0,F.q)(E,f,m);if(Z){const I=JSON.parse(JSON.stringify(Z));for(const D of["lastLogin","created","modified"])null!=I[D]&&(I[D]=new Date(I[D]));return j.Z.convertObjectToArcadeDictionary(I,(0,u.C)(r))}return null}let v=null;if((0,u.T)(a[0])&&(v=a[0]),v){if(m=!1,f)return null;yield v.load();const E=yield v.getOwningSystemUrl();if(!E){if(!f){const D=yield v.getIdentityUser();return D?j.Z.convertObjectToArcadeDictionary({username:D},(0,u.C)(r)):null}return null}let Z=null;r.services&&r.services.portal&&(Z=r.services.portal),Z=(0,F._)(new U.Z(E),Z);const I=yield(0,F.q)(Z,f,m);if(I){const D=JSON.parse(JSON.stringify(I));for(const V of["lastLogin","created","modified"])null!=D[V]&&(D[V]=new Date(D[V]));return j.Z.convertObjectToArcadeDictionary(D,(0,u.C)(r))}return null}throw new l.aV(r,l.rH.InvalidParameter,i)});return function(p,n,a){return d.apply(this,arguments)}}())})}},16309:(yn,C,A)=>{A.d(C,{_:()=>R,q:()=>g});var P=A(15861),B=A(24263),h=A(84792),u=A(84687);function R(s,T){return null===s?T:new u.Z({url:s.field("url")})}function g(s,T,M){return x.apply(this,arguments)}function x(){return(x=(0,P.Z)(function*(s,T,M){if(!B.id?.findCredential(s.restUrl))return null;if("loaded"===s.loadStatus&&""===T&&s.user&&s.user.sourceJSON&&!1===M)return s.user.sourceJSON;if(""===T){const y=yield(0,h.default)(s.restUrl+"/community/self",{responseType:"json",query:{f:"json",...!1===M?{}:{returnUserLicenseTypeExtensions:!0}}});if(y.data){const l=y.data;if(l&&l.username)return l}return null}const O=yield(0,h.default)(s.restUrl+"/community/users/"+T,{responseType:"json",query:{f:"json"}});if(O.data){const y=O.data;return y.error?null:y}return null})).apply(this,arguments)}},87215:(yn,C,A)=>{A.d(C,{CJ:()=>vn,Cz:()=>En,D$:()=>wn,ED:()=>n,G0:()=>hn,Gg:()=>m,JI:()=>Z,LV:()=>f,Nm:()=>a,Sp:()=>pn,TE:()=>o,U1:()=>Pn,W4:()=>d,Y4:()=>On,cv:()=>gn,e5:()=>D,f3:()=>xn,fS:()=>r,j2:()=>Zn,jU:()=>b,kK:()=>i,kQ:()=>Dn,og:()=>v,oq:()=>J,r3:()=>S,rd:()=>An,sz:()=>In,uh:()=>p,wf:()=>mn,z7:()=>G});var P=A(15861),h=(A(29132),A(59289)),R=(A(72642),A(91179));function g(e){return Array.isArray(e)?e[0]?.spatialReference:e?.spatialReference}function x(e){return e&&(Array.isArray(e)?e.map(x):e.toJSON?e.toJSON():e)}function s(e){return Array.isArray(e)?e.map(c=>(0,R.im)(c)):(0,R.im)(e)}let M;function H(){return O.apply(this,arguments)}function O(){return(O=(0,P.Z)(function*(){return M||(M=(0,h.bA)("geometryEngineWorker",{strategy:"distributed"})),M})).apply(this,arguments)}function y(e,c){return l.apply(this,arguments)}function l(){return(l=(0,P.Z)(function*(e,c){return(yield H()).invoke("executeGEOperation",{operation:e,parameters:x(c)})})).apply(this,arguments)}function J(e,c){return z.apply(this,arguments)}function z(){return(z=(0,P.Z)(function*(e,c){return s(yield y("clip",[g(e),e,c]))})).apply(this,arguments)}function G(e,c){return N.apply(this,arguments)}function N(){return(N=(0,P.Z)(function*(e,c){return s(yield y("cut",[g(e),e,c]))})).apply(this,arguments)}function S(e,c){return y("contains",[g(e),e,c])}function b(e,c){return y("crosses",[g(e),e,c])}function o(e,c,_){return y("distance",[g(e),e,c,_])}function r(e,c){return y("equals",[g(e),e,c])}function i(e,c){return y("intersects",[g(e),e,c])}function d(e,c){return y("touches",[g(e),e,c])}function p(e,c){return y("within",[g(e),e,c])}function n(e,c){return y("disjoint",[g(e),e,c])}function a(e,c){return y("overlaps",[g(e),e,c])}function f(e,c,_){return y("relate",[g(e),e,c,_])}function m(e){return y("isSimple",[g(e),e])}function v(e){return E.apply(this,arguments)}function E(){return(E=(0,P.Z)(function*(e){return s(yield y("simplify",[g(e),e]))})).apply(this,arguments)}function Z(e){return I.apply(this,arguments)}function I(){return(I=(0,P.Z)(function*(e,c=!1){return s(yield y("convexHull",[g(e),e,c]))})).apply(this,arguments)}function D(e,c){return V.apply(this,arguments)}function V(){return(V=(0,P.Z)(function*(e,c){return s(yield y("difference",[g(e),e,c]))})).apply(this,arguments)}function pn(e,c){return Q.apply(this,arguments)}function Q(){return(Q=(0,P.Z)(function*(e,c){return s(yield y("symmetricDifference",[g(e),e,c]))})).apply(this,arguments)}function mn(e,c){return Y.apply(this,arguments)}function Y(){return(Y=(0,P.Z)(function*(e,c){return s(yield y("intersect",[g(e),e,c]))})).apply(this,arguments)}function hn(e){return k.apply(this,arguments)}function k(){return(k=(0,P.Z)(function*(e,c=null){const _=function T(e,c){let _;return Array.isArray(e)?_=e:(_=[],_.push(e),null!=c&&_.push(c)),_}(e,c);return s(yield y("union",[g(_),_]))})).apply(this,arguments)}function gn(e,c,_,w,L,K){return X.apply(this,arguments)}function X(){return(X=(0,P.Z)(function*(e,c,_,w,L,K){return s(yield y("offset",[g(e),e,c,_,w,L,K]))})).apply(this,arguments)}function xn(e,c,_){return $.apply(this,arguments)}function $(){return($=(0,P.Z)(function*(e,c,_,w=!1){const L=[g(e),e,c,_,w];return s(yield y("buffer",L))})).apply(this,arguments)}function An(e,c,_,w,L,K){return q.apply(this,arguments)}function q(){return(q=(0,P.Z)(function*(e,c,_,w,L,K){const Rn=[g(e),e,c,_,w,L,K];return s(yield y("geodesicBuffer",Rn))})).apply(this,arguments)}function Pn(e,c,_){return an.apply(this,arguments)}function an(){return(an=(0,P.Z)(function*(e,c,_){if(null==e)throw new W;const w=e.spatialReference;if(null==(_=_??function en(e){return"xmin"in e?e.center:"x"in e?e:e.extent?.center}(e)))throw new W;const L=e.constructor.fromJSON(yield y("rotate",[w,e,c,_]));return L.spatialReference=w,L})).apply(this,arguments)}function wn(e,c,_,w){return ln.apply(this,arguments)}function ln(){return(ln=(0,P.Z)(function*(e,c,_,w){return s(yield y("generalize",[g(e),e,c,_,w]))})).apply(this,arguments)}function En(e,c,_){return cn.apply(this,arguments)}function cn(){return(cn=(0,P.Z)(function*(e,c,_){return s(yield y("densify",[g(e),e,c,_]))})).apply(this,arguments)}function Zn(e,c,_){return sn.apply(this,arguments)}function sn(){return(sn=(0,P.Z)(function*(e,c,_,w=0){return s(yield y("geodesicDensify",[g(e),e,c,_,w]))})).apply(this,arguments)}function vn(e,c){return y("planarArea",[g(e),e,c])}function In(e,c){return y("planarLength",[g(e),e,c])}function On(e,c,_){return y("geodesicArea",[g(e),e,c,_])}function Dn(e,c,_){return y("geodesicLength",[g(e),e,c,_])}class W extends Error{constructor(){super("Illegal Argument Exception")}}}}]);