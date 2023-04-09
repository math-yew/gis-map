"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[3705],{17196:(D,f,l)=>{l.d(f,{V:()=>m});var i=l(15861),y=l(45205);function m(p,g){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)(function*(p,g){const h=yield(0,y.T)(p,g);h.layers=h.layers.filter(o);const E={serviceJSON:h};if((h.currentVersion??0)<10.5)return E;const P=yield(0,y.T)(p+"/layers",g);return E.layersJSON={layers:P.layers.filter(o),tables:P.tables},E})).apply(this,arguments)}function o(p){return!p.type||"Feature Layer"===p.type}},88755:(D,f,l)=>{l.d(f,{Y:()=>c,h:()=>m});var i=l(21726),y=l(84687);function m(o){return{origin:"portal-item",url:(0,i.mN)(o.itemUrl),portal:o.portal||y.Z.getDefault(),portalItem:o,readResourcePaths:[]}}function c(o){return{origin:"portal-item",messages:[],writtenProperties:[],url:o.itemUrl?(0,i.mN)(o.itemUrl):null,portal:o.portal||y.Z.getDefault(),portalItem:o}}},83705:(D,f,l)=>{l.r(f),l.d(f,{getFirstLayerOrTableId:()=>W,getNumLayersAndTables:()=>I,getSubtypeGroupLayerIds:()=>j,load:()=>Z,preprocessFSItemData:()=>K});var i=l(15861),y=l(26584),m=l(44917),c=l(38305),o=l(17196),p=l(84687),g=l(55463),h=l(88755),E=l(37281),P=l(39683),R=l(45205);function Z(e,r){return L.apply(this,arguments)}function L(){return L=(0,i.Z)(function*(e,r){const t=e.instance.portalItem;if(t&&t.id)return yield t.load(r),function G(e){const r=e.instance.portalItem;if(!r?.type||!e.supportedTypes.includes(r.type))throw new y.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r?.type,expectedType:e.supportedTypes.join(", ")})}(e),function F(e,r){return O.apply(this,arguments)}(e,r)}),L.apply(this,arguments)}function O(){return O=(0,i.Z)(function*(e,r){const t=e.instance,a=t.portalItem;if(!a)return;const{url:s,title:u}=a,n=(0,h.h)(a);if("group"===t.type)return t.read({title:u},n),function w(e,r){return M.apply(this,arguments)}(t,e);s&&t.read({url:s},n);const _=yield B(e,r);return _&&t.read(_,n),t.resourceReferences={portalItem:a,paths:n.readResourcePaths??[]},"subtype-group"!==t.type&&t.read({title:u},n),(0,P.y)(t,n)}),O.apply(this,arguments)}function M(){return M=(0,i.Z)(function*(e,r){let t;const{portalItem:a}=e;if(!a)return;const s=a.type,u=r.layerModuleTypeMap,n=(0,E._$)(a,"Oriented Imagery Layer")??!1;switch(s){case"Feature Service":t=n?u.OrientedImageryLayer:u.FeatureLayer;break;case"Stream Service":t=u.StreamLayer;break;case"Scene Service":t=u.SceneLayer;break;case"Feature Collection":t=u.FeatureLayer;break;default:throw new y.Z("portal:unsupported-item-type-as-group",`The item type '${s}' is not supported as a 'IGroupLayer'`)}let[_,d]=yield Promise.all([t(),B(r)]),T=()=>_;if("Feature Service"===s){if(d=a.url?yield K(d,a.url):{},j(d).length){const z=u.SubtypeGroupLayer,Q=yield z();T=X=>"SubtypeGroupLayer"===X.layerType?Q:_}return b(e,T,d,yield function Y(e){return S.apply(this,arguments)}(a.url))}return I(d)>0?b(e,T,d):function N(e,r){return v.apply(this,arguments)}(e,T)}),M.apply(this,arguments)}function v(){return(v=(0,i.Z)(function*(e,r){const{portalItem:t}=e;if(!t?.url)return;const a=yield(0,R.T)(t.url);a&&b(e,r,{layers:a.layers?.map(x),tables:a.tables?.map(x)})})).apply(this,arguments)}function x(e){return{id:e.id,name:e.name}}function b(e,r,t,a){let s=t.layers||[];const u=t.tables||[];if("Feature Collection"===e.portalItem?.type&&(s.forEach(n=>{"Table"===n?.layerDefinition?.type&&u.push(n)}),s=s.filter(n=>"Table"!==n?.layerDefinition?.type)),"coverage"in t){const n=function H(e){const{coverage:r}=e;if(!r)return null;const t=new URL(r);if(r.toLowerCase().includes("item.html")){const a=t.searchParams.get("id");return m.Z.fromPortalItem({portalItem:new g.default({id:a,url:t.origin})})}if((0,c.B5)(r))return m.Z.fromArcGISServerUrl({url:r});throw new y.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(t);n&&e.add(n)}s.reverse().forEach(n=>{const _=A(e,r(n),t,n,a?.(n));e.add(_)}),u.reverse().forEach(n=>{const _=A(e,r(n),t,n,a?.(n));e.tables.add(_)})}function A(e,r,t,a,s){const u=e.portalItem,n=new r({portalItem:u.clone(),layerId:a.id});if("sourceJSON"in n&&(n.sourceJSON=s),"subtype-group"!==n.type&&(n.sublayerTitleMode="service-name"),"Feature Collection"===u.type){const _={origin:"portal-item",portal:u.portal||p.Z.getDefault()};n.read(a,_);const d=t.showLegend;null!=d&&n.read({showLegend:d},_)}return n}function B(e,r){return U.apply(this,arguments)}function U(){return(U=(0,i.Z)(function*(e,r){if(!1===e.supportsData)return;const t=e.instance,a=t.portalItem;if(!a)return;let s=null;try{s=yield a.fetchData("json",r)}catch{}if(function $(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}(t)){let u=null,n=!0;if(s&&I(s)>0){if(null==t.layerId){const _=j(s);t.layerId="subtype-group"===t.type?_?.[0]:W(s)}u=function J(e,r){const{layerId:t}=r,a=e.layers?.find(s=>s.id===t)||e.tables?.find(s=>s.id===t);return a&&function V(e,r){return!("feature"===r.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===r.type&&!("layerType"in e))}(a,r)?a:null}(s,t),u&&(1===I(s)&&(n=!1),null!=s.showLegend&&(u.showLegend=s.showLegend))}return n&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),u}return s})).apply(this,arguments)}function K(e,r){return C.apply(this,arguments)}function C(){return(C=(0,i.Z)(function*(e,r){if(null==e?.layers||null==e?.tables){const t=yield(0,R.T)(r);(e=e||{}).layers=e.layers||t?.layers,e.tables=e.tables||t?.tables}return e})).apply(this,arguments)}function W(e){const r=e.layers;if(r&&r.length)return r[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function I(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function j(e){const r=[];return e?.layers?.forEach(t=>{"SubtypeGroupLayer"===t.layerType&&r.push(t.id)}),r}function S(){return(S=(0,i.Z)(function*(e){const{layersJSON:r}=yield(0,o.V)(e);if(!r)return null;const t=[...r.layers,...r.tables];return a=>t.find(s=>s.id===a.id)})).apply(this,arguments)}},45205:(D,f,l)=>{l.d(f,{T:()=>m});var i=l(15861),y=l(84792);function m(o,p){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)(function*(o,p){const{data:g}=yield(0,y.default)(o,{responseType:"json",query:{f:"json",...p?.customParameters,token:p?.apiKey}});return g})).apply(this,arguments)}}}]);