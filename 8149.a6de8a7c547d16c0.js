"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[8149],{28149:(A,l,a)=>{a.r(l),a.d(l,{default:()=>x});var u=a(15861),d=a(8314),p=a(62208),m=a(36592),f=a(60853);class x{createIndex(t,s){var e=this;return(0,u.Z)(function*(){const r=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new m.Q;const o=e._createMeshData(t),c=(0,p.pC)(s)?yield s.invoke("createIndexThread",o,{transferList:r}):e.createIndexThread(o).result;return e._createPooledRBush().fromJSON(c)})()}createIndexThread(t){const s=new Float64Array(t.position),e=this._createPooledRBush();return t.components?this._createIndexComponentsThread(e,s,t.components.map(r=>new Uint32Array(r))):this._createIndexAllThread(e,s)}_createIndexAllThread(t,s){const e=new Array(s.length/9);let r=0;for(let o=0;o<s.length;o+=9)e[r++]=h(s,o+0,o+3,o+6);return t.load(e),{result:t.toJSON()}}_createIndexComponentsThread(t,s,e){let r=0;for(const _ of e)r+=_.length/3;const o=new Array(r);let c=0;for(const _ of e)for(let i=0;i<_.length;i+=3)o[c++]=h(s,3*_[i+0],3*_[i+1],3*_[i+2]);return t.load(o),{result:t.toJSON()}}_createMeshData(t){const s=(t.transform?(0,f.I5)({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(e=>!e.faces)?{position:s}:{position:s,components:t.components.map(e=>e.faces)}}_createPooledRBush(){return new m.Q(9,(0,d.Z)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function h(n,t,s,e){return{minX:Math.min(n[t+0],n[s+0],n[e+0]),maxX:Math.max(n[t+0],n[s+0],n[e+0]),minY:Math.min(n[t+1],n[s+1],n[e+1]),maxY:Math.max(n[t+1],n[s+1],n[e+1]),p0:[n[t+0],n[t+1],n[t+2]],p1:[n[s+0],n[s+1],n[s+2]],p2:[n[e+0],n[e+1],n[e+2]]}}}}]);