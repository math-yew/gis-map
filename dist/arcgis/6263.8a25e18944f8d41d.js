"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[6263],{65389:(J,N,i)=>{i.d(N,{Z:()=>Z});var G=i(62208);class Z{constructor(E){this.size=0,this._start=0,this.maxSize=E,this._buffer=new Array(E)}get entries(){return this._buffer}enqueue(E){if(this.size===this.maxSize){const M=this._buffer[this._start];return this._buffer[this._start]=E,this._start=(this._start+1)%this.maxSize,M}return this._buffer[(this._start+this.size++)%this.maxSize]=E,null}dequeue(){if(0===this.size)return null;const E=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,E}peek(){return 0===this.size?null:this._buffer[this._start]}find(E){if(0===this.size)return null;for(const M of this._buffer)if((0,G.pC)(M)&&E(M))return M;return null}clear(E){let M=this.dequeue();for(;(0,G.pC)(M);)E&&E(M),M=this.dequeue()}}},53023:(J,N,i)=>{i.d(N,{hN:()=>K,P0:()=>W,cW:()=>b});var G=i(15861),Z=i(26584),j=i(33190),E=i(11519),C=i(91179),D=i(37053);function v(s,r){return s?r?4:3:r?3:2}function m(s,r,g,O,U){if(!s)return!1;const P=v(r,g),{coords:t,lengths:l}=s;let o=!1,a=0;for(const u of l)o=h(o,t,P,a,u,O,U),a+=u*P;return o}function h(s,r,g,O,U,P,t){let l=s,o=O;for(let a=O,u=O+U*g;a<u;a+=g){o=a+g,o===u&&(o=O);const S=r[a],R=r[a+1],B=r[o+1];(R<t&&B>=t||B<t&&R>=t)&&S+(t-R)/(B-R)*(r[o]-S)<P&&(l=!l)}return l}var p=i(82054),d=i(88071),A=i(82959),T=i(6185);const x="feature-store:unsupported-query",w={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},F={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function b(s,r,g,O,U){if((0,C.oU)(r)&&"esriGeometryPoint"===g&&("esriSpatialRelIntersects"===s||"esriSpatialRelContains"===s)){const P=(0,p.Uy)(new d.Z,r,!1,!1);return Promise.resolve(t=>function _(s,r,g,O){return m(s,r,g,O.coords[0],O.coords[1])}(P,!1,!1,t))}if((0,C.oU)(r)&&"esriGeometryMultipoint"===g){const P=(0,p.Uy)(new d.Z,r,!1,!1);if("esriSpatialRelContains"===s)return Promise.resolve(t=>function f(s,r,g,O,U,P){const t=v(U,P),{coords:l,lengths:o}=O;if(!o)return!1;for(let a=0,u=0;a<o.length;a++,u+=t)if(!m(s,r,g,l[u],l[u+1]))return!1;return!0}(P,!1,!1,t,O,U))}if((0,C.YX)(r)&&"esriGeometryPoint"===g&&("esriSpatialRelIntersects"===s||"esriSpatialRelContains"===s))return Promise.resolve(P=>(0,j.aV)(r,(0,T.Op)(g,O,U,P)));if((0,C.YX)(r)&&"esriGeometryMultipoint"===g&&"esriSpatialRelContains"===s)return Promise.resolve(P=>(0,j.lQ)(r,(0,T.Op)(g,O,U,P)));if((0,C.YX)(r)&&"esriSpatialRelIntersects"===s){const P=function M(s){return"mesh"===s?E.h_:(0,E.IY)(s)}(g);return Promise.resolve(t=>P(r,(0,T.Op)(g,O,U,t)))}return function I(){return Promise.all([i.e(4918),i.e(8592)]).then(i.bind(i,32825))}().then(P=>{const t=P[w[s]].bind(null,r.spatialReference,r);return l=>t((0,T.Op)(g,O,U,l))})}function W(s,r,g){return z.apply(this,arguments)}function z(){return(z=(0,G.Z)(function*(s,r,g){const{spatialRel:O,geometry:U}=s;if(U){if(!function e(s){return null!=s&&!0===F.spatialRelationship[s]}(O))throw new Z.Z(x,"Unsupported query spatial relationship",{query:s});if((0,D.JY)(U.spatialReference)&&(0,D.JY)(g)){if(!function n(s){return null!=s&&!0===F.queryGeometry[(0,C.Ji)(s)]}(U))throw new Z.Z(x,"Unsupported query geometry type",{query:s});if(!function y(s){return null!=s&&!0===F.layerGeometry[s]}(r))throw new Z.Z(x,"Unsupported layer geometry type",{query:s});if(s.outSR)return(0,A._W)(s.geometry&&s.geometry.spatialReference,s.outSR)}}})).apply(this,arguments)}function K(s){if((0,C.YX)(s))return!0;if((0,C.oU)(s)){for(const r of s.rings)if(5!==r.length||r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return!1;return!0}return!1}},76530:(J,N,i)=>{i.d(N,{R:()=>Z,y:()=>E});var G=i(15861);function Z(v,_){return j.apply(this,arguments)}function j(){return(j=(0,G.Z)(function*(v,_){if(!v)return null;const f=_.featureAdapter,{startTimeField:m,endTimeField:h}=v;let p=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;if(m&&h)yield _.forEach(A=>{const T=f.getAttribute(A,m),x=f.getAttribute(A,h);null==T||isNaN(T)||(p=Math.min(p,T)),null==x||isNaN(x)||(d=Math.max(d,x))});else{const A=m||h;yield _.forEach(T=>{const x=f.getAttribute(T,A);null==x||isNaN(x)||(p=Math.min(p,x),d=Math.max(d,x))})}return{start:p,end:d}})).apply(this,arguments)}function E(v,_,f){if(!_||!v)return null;const{startTimeField:m,endTimeField:h}=v;if(!m&&!h)return null;const{start:p,end:d}=_;return null===p&&null===d?null:void 0===p&&void 0===d?()=>!1:m&&h?function M(v,_,f,m,h){return null!=m&&null!=h?p=>{const d=v.getAttribute(p,_),A=v.getAttribute(p,f);return(null==d||d<=h)&&(null==A||A>=m)}:null!=m?p=>{const d=v.getAttribute(p,f);return null==d||d>=m}:null!=h?p=>{const d=v.getAttribute(p,_);return null==d||d<=h}:void 0}(f,m,h,p,d):function C(v,_,f,m){return null!=f&&null!=m&&f===m?h=>v.getAttribute(h,_)===f:null!=f&&null!=m?h=>{const p=v.getAttribute(h,_);return p>=f&&p<=m}:null!=f?h=>v.getAttribute(h,_)>=f:null!=m?h=>v.getAttribute(h,_)<=m:void 0}(f,m||h,p,d)}},6185:(J,N,i)=>{i.d(N,{EG:()=>F,Op:()=>e,S2:()=>O,Up:()=>n,j6:()=>I,vF:()=>d});var G=i(15861),Z=i(2076),j=i(62208),E=i(16730),M=i(54614),C=i(15176),D=i(91179),v=i(93555),_=i(37053),f=i(82054),m=i(88071),h=i(82959);const p=new Z.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),d=Object.freeze({}),A=new m.Z,T=new m.Z,x=new m.Z,w={esriGeometryPoint:f.fQ,esriGeometryPolyline:f.J6,esriGeometryPolygon:f.eG,esriGeometryMultipoint:f.Iv};function F(t,l,o,a=t.hasZ,u=t.hasM){if((0,j.Wi)(l))return null;const S=t.hasZ&&a,R=t.hasM&&u;if(o){const c=(0,f.Nh)(x,l,t.hasZ,t.hasM,"esriGeometryPoint",o,a,u);return(0,f.fQ)(c,S,R)}return(0,f.fQ)(l,S,R)}function e(t,l,o,a,u,S,R=l,c=o){const B=l&&R,L=o&&c,Y=(0,j.pC)(a)?"coords"in a?a:a.geometry:null;if((0,j.Wi)(Y))return null;if(u){let V=(0,f.zj)(T,Y,l,o,t,u,R,c);return S&&(V=(0,f.Nh)(x,V,B,L,t,S)),w[t]?.(V,B,L)??null}if(S){const V=(0,f.Nh)(x,Y,l,o,t,S,R,c);return w[t]?.(V,B,L)??null}return(0,f.hY)(A,Y,l,o,R,c),w[t]?.(A,B,L)??null}function n(t,l,o){return y.apply(this,arguments)}function y(){return(y=(0,G.Z)(function*(t,l,o){const{outFields:a,orderByFields:u,groupByFieldsForStatistics:S,outStatistics:R}=t;if(a)for(let c=0;c<a.length;c++)a[c]=a[c].trim();if(u)for(let c=0;c<u.length;c++)u[c]=u[c].trim();if(S)for(let c=0;c<S.length;c++)S[c]=S[c].trim();if(R)for(let c=0;c<R.length;c++)R[c].onStatisticField&&(R[c].onStatisticField=R[c].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),I(t,l,o)})).apply(this,arguments)}function I(t,l,o){return b.apply(this,arguments)}function b(){return b=(0,G.Z)(function*(t,l,o){if(!t)return null;let{where:a}=t;if(t.where=a=a&&a.trim(),(!a||/^1 *= *1$/.test(a)||l&&l===a)&&(t.where=null),!t.geometry)return t;let u=yield function K(t){return s.apply(this,arguments)}(t);if(t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel){const{spatialReference:S}=t.geometry;u=(0,C.aO)(u),u.spatialReference=S}if(u){yield(0,h._W)(u.spatialReference,o),u=function z(t,l){const o=t.spatialReference;return W(t,l)&&(0,D.YX)(t)?{spatialReference:o,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}(u,o);const S=(yield(0,v.aX)((0,D.im)(u)))[0];if((0,j.Wi)(S))throw d;const R="quantizationParameters"in t&&t.quantizationParameters?.tolerance||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,c=R&&W(u,o)?{densificationStep:8*R}:void 0,B=S.toJSON(),L=yield(0,h.iV)(B,B.spatialReference,o,c);if(!L)throw d;L.spatialReference=o,t.geometry=L}return t}),b.apply(this,arguments)}function W(t,l){if(!t)return!1;const o=t.spatialReference;return((0,D.YX)(t)||(0,D.oU)(t)||(0,D.l9)(t))&&!(0,_.fS)(o,l)&&!(0,M.Up)(o,l)}function s(){return s=(0,G.Z)(function*(t){const{distance:l,units:o}=t,a=t.geometry;if(null==l||"vertexAttributes"in a)return a;const u=a.spatialReference,S=o?p.fromJSON(o):(0,E.qE)(u),R=u&&((0,_.sT)(u)||(0,_.sS)(u))?a:yield(0,h._W)(u,_.Zn).then(()=>(0,h.iV)(a,_.Zn));return(yield function r(){return g.apply(this,arguments)}())(R.spatialReference,R,l,S)}),s.apply(this,arguments)}function g(){return(g=(0,G.Z)(function*(){return(yield Promise.all([i.e(4918),i.e(8592)]).then(i.bind(i,32825))).geodesicBuffer})).apply(this,arguments)}function O(t){return t&&U in t?JSON.parse(JSON.stringify(t,P)):t}const U="_geVersion",P=(t,l)=>t!==U?l:void 0},8967:(J,N,i)=>{i.r(N),i.d(N,{default:()=>w});var G=i(15861),Z=i(26584),j=i(63290),E=i(62208),M=i(65401),C=i(32442),D=i(53023),v=i(76530),_=i(6185),f=i(96854),m=i(55746);const h=j.Z.getLogger("esri.views.2d.layers.features.support.whereUtils"),p={getAttribute:(F,e)=>F.field(e)};function A(){return(A=(0,G.Z)(function*(F,e){const n=yield i.e(410).then(i.bind(i,10410));try{const y=n.WhereClause.create(F,e);if(!y.isStandardized){const I=new Z.Z("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",y);h.error(I)}return I=>{const b=I.readArcadeFeature();return y.testFeature(b,p)}}catch{return h.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",F),I=>!0}})).apply(this,arguments)}class w{constructor(e){this._geometryBounds=(0,M.Ue)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,n)=>{this._idToVisibility.set(n,0)})}setKnownIds(e){for(const n of e)this._idToVisibility.set(n,1)}setTrue(e){const n=[],y=[],I=new Set(e);return this._idToVisibility.forEach((b,W)=>{const z=!!(1&this._idToVisibility.get(W)),K=I.has(W);!z&&K?n.push(W):z&&!K&&y.push(W),this._idToVisibility.set(W,K?3:0)}),{show:n,hide:y}}createQuery(){const{geometry:e,spatialRel:n,where:y,timeExtent:I,objectIds:b}=this;return f.Z.fromJSON({geometry:e,spatialRel:n,where:y,timeExtent:I,objectIds:b})}update(e,n){var y=this;return(0,G.Z)(function*(){y._hash=JSON.stringify(e);const I=yield(0,_.j6)(e,null,n);yield Promise.all([y._setGeometryFilter(I),y._setIdFilter(I),y._setAttributeFilter(I),y._setTimeFilter(I)])})()}_setAttributeFilter(e){var n=this;return(0,G.Z)(function*(){if(!e||!e.where)return n._clause=null,void(n.where=null);n._clause=yield function d(F,e){return A.apply(this,arguments)}(e.where,n._serviceInfo.fieldsIndex),n.where=e.where})()}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}_setGeometryFilter(e){var n=this;return(0,G.Z)(function*(){if(!e||!e.geometry)return n._spatialQueryOperator=null,n.geometry=null,void(n.spatialRel=null);const y=e.geometry,I=e.spatialRel||"esriSpatialRelIntersects",b=yield(0,D.cW)(I,y,n._serviceInfo.geometryType,n._serviceInfo.hasZ,n._serviceInfo.hasM);(0,C.$P)(n._geometryBounds,y),n._spatialQueryOperator=b,n.geometry=y,n.spatialRel=I})()}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,v.y)(this._serviceInfo.timeInfo,e.timeExtent,m.k);else{const n=new Z.Z("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);j.Z.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(n)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const n=e.readHydratedGeometry();return!!n&&this._spatialQueryOperator(n)}_filterByTime(e){return!!(0,E.Wi)(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((n,y)=>{1&n||(this._idToVisibility.set(y,1),e.push(y))}),e}}}}]);