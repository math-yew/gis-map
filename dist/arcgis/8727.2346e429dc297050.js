"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[8727],{78727:(J,R,u)=>{u.r(R),u.d(R,{executeRelationshipQuery:()=>b,executeRelationshipQueryForCount:()=>C});var d=u(15861),g=u(2618),F=u(84792),O=u(76391);function v(n,t){const e=n.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!t?.returnCountOnly?e.outFields=e.outFields.includes("*")?"*":e.outFields.join(","):delete e.outFields,e.outSpatialReference&&(e.outSR=e.outSR.wkid||JSON.stringify(e.outSR.toJSON()),delete e.outSpatialReference),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}function l(){return(l=(0,d.Z)(function*(n,t,e){const o=yield x(n,t,e),r=o.data,a=r.geometryType,s=r.spatialReference,i={};for(const c of r.relatedRecordGroups){const j={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:s,hasZ:!!r.hasZ,hasM:!!r.hasM,features:c.relatedRecords};if(null!=c.objectId)i[c.objectId]=j;else for(const m in c)c.hasOwnProperty(m)&&"relatedRecords"!==m&&(i[c[m]]=j)}return{...o,data:i}})).apply(this,arguments)}function f(){return(f=(0,d.Z)(function*(n,t,e){const o=yield x(n,t,e,{returnCountOnly:!0}),r=o.data,a={};for(const s of r.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return{...o,data:a}})).apply(this,arguments)}function x(n,t){return y.apply(this,arguments)}function y(){return(y=(0,d.Z)(function*(n,t,e={},o){const r=(0,O.A)({...n.query,f:"json",...o,...v(t,o)});return(0,F.default)(n.path+"/queryRelatedRecords",{...e,query:{...e.query,...r}})})).apply(this,arguments)}var N=u(17253),S=u(67010);function b(n,t,e){return p.apply(this,arguments)}function p(){return p=(0,d.Z)(function*(n,t,e){return t=S.default.from(t),function I(n,t,e){return l.apply(this,arguments)}((0,g.en)(n),t,e).then(r=>{const a=r.data,s={};return Object.keys(a).forEach(i=>s[i]=N.Z.fromJSON(a[i])),s})}),p.apply(this,arguments)}function C(n,t,e){return h.apply(this,arguments)}function h(){return h=(0,d.Z)(function*(n,t,e){return t=S.default.from(t),function Z(n,t,e){return f.apply(this,arguments)}((0,g.en)(n),t,{...e}).then(r=>r.data)}),h.apply(this,arguments)}}}]);