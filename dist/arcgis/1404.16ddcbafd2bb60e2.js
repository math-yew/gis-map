"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[1404,587],{10587:(B,v,a)=>{a.r(v),a.d(v,{addOrUpdateResource:()=>C,contentToBlob:()=>i,fetchResources:()=>x,getSiblingOfSameType:()=>R,getSiblingOfSameTypeI:()=>m,removeAllResources:()=>T,removeResource:()=>M,splitPrefixFileNameAndExtension:()=>n});var p=a(15861),U=a(84792),D=a(26584),_=a(62208),l=a(21726);function x(e){return O.apply(this,arguments)}function O(){return(O=(0,p.Z)(function*(e,t={},r){yield e.load(r);const o=(0,l.v_)(e.itemUrl,"resources"),{start:h=1,num:I=10,sortOrder:g="asc",sortField:E="created"}=t,A={query:{start:h,num:I,sortOrder:g,sortField:E,token:e.apiKey},signal:(0,_.U2)(r,"signal")},c=yield e.portal.request(o,A);return{total:c.total,nextStart:c.nextStart,resources:c.resources.map(({created:K,size:j,resource:W})=>({created:new Date(K),size:j,resource:e.resourceFromPath(W)}))}})).apply(this,arguments)}function C(e,t,r,o){return d.apply(this,arguments)}function d(){return(d=(0,p.Z)(function*(e,t,r,o){if(!e.hasPath())throw new D.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const h=e.portalItem;yield h.load(o);const I=(0,l.v_)(h.userItemUrl,"add"===t?"addResources":"updateResources"),[g,E]=s(e.path),A=yield i(r),c=new FormData;return g&&"."!==g&&c.append("resourcesPrefix",g),(0,_.pC)(o)&&o.compress&&c.append("compress","true"),c.append("fileName",E),c.append("file",A,E),c.append("f","json"),(0,_.pC)(o)&&o.access&&c.append("access",o.access),yield h.portal.request(I,{method:"post",body:c,signal:(0,_.U2)(o,"signal")}),e})).apply(this,arguments)}function M(e,t,r){return f.apply(this,arguments)}function f(){return(f=(0,p.Z)(function*(e,t,r){if(!t.hasPath())throw new D.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");yield e.load(r);const o=(0,l.v_)(e.userItemUrl,"removeResources");yield e.portal.request(o,{method:"post",query:{resource:t.path},signal:(0,_.U2)(r,"signal")}),t.portalItem=null})).apply(this,arguments)}function T(e,t){return y.apply(this,arguments)}function y(){return(y=(0,p.Z)(function*(e,t){yield e.load(t);const r=(0,l.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:(0,_.U2)(t,"signal")})})).apply(this,arguments)}function s(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function n(e){const[t,r]=function u(e){const t=(0,l.Ml)(e);return(0,_.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[o,h]=s(t);return[o,h,r]}function i(e){return P.apply(this,arguments)}function P(){return(P=(0,p.Z)(function*(e){return e instanceof Blob?e:(yield(0,U.default)(e.url,{responseType:"blob"})).data})).apply(this,arguments)}function R(e,t){if(!e.hasPath())return null;const[r,,o]=n(e.path);return e.portalItem.resourceFromPath((0,l.v_)(r,t+o))}function m(e,t){if(!e.hasPath())return null;const[r,,o]=n(e.path);return e.portalItem.resourceFromPath((0,l.v_)(r,t+o))}},71404:(B,v,a)=>{a.r(v),a.d(v,{saveResources:()=>C});var p=a(15861),U=a(59213),D=a(26584),_=a(62208),l=a(10699),x=a(35948),O=a(10587);function C(s,n,u){return d.apply(this,arguments)}function d(){return(d=(0,p.Z)(function*(s,n,u){if(!n||!n.resources)return;const i=n.portalItem===s.portalItem?new Set(s.paths):new Set;s.paths.length=0,s.portalItem=n.portalItem;const P=new Set(n.resources.toKeep.map(r=>r.resource.path)),R=new Set,m=[];P.forEach(r=>{i.delete(r),s.paths.push(r)});for(const r of n.resources.toUpdate)if(i.delete(r.resource.path),P.has(r.resource.path)||R.has(r.resource.path)){const{resource:o,content:h,finish:I,error:g}=r,E=(0,O.getSiblingOfSameTypeI)(o,(0,x.D)());s.paths.push(E.path),m.push(M({resource:E,content:h,compress:r.compress,finish:I,error:g},u))}else s.paths.push(r.resource.path),m.push(T(r,u)),R.add(r.resource.path);for(const r of n.resources.toAdd)m.push(M(r,u)),s.paths.push(r.resource.path);if(i.forEach(r=>{if(n.portalItem){const o=n.portalItem.resourceFromPath(r);m.push(o.portalItem.removeResource(o).catch(()=>{}))}}),0===m.length)return;const e=yield(0,l.as)(m);(0,l.k_)(u);const t=e.filter(r=>"error"in r).map(r=>r.error);if(t.length>0)throw new D.Z("save:resources","Failed to save one or more resources",{errors:t})})).apply(this,arguments)}function M(s,n){return f.apply(this,arguments)}function f(){return(f=(0,p.Z)(function*(s,n){const u={...(0,_.pC)(n)?n:{},compress:s.compress},i=yield(0,U.q6)(s.resource.portalItem.addResource(s.resource,s.content,u));if(!0!==i.ok)throw s.error?.(i.error),i.error;s.finish?.(s.resource)})).apply(this,arguments)}function T(s,n){return y.apply(this,arguments)}function y(){return(y=(0,p.Z)(function*(s,n){const u=yield(0,U.q6)(s.resource.update(s.content,n));if(!0!==u.ok)throw s.error?.(u.error),u.error;s.finish?.(s.resource)})).apply(this,arguments)}}}]);