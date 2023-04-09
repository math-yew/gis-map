"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[8411],{38411:(G,c,s)=>{s.r(c),s.d(c,{default:()=>W});var d,L=s(15861),r=s(17626),v=(s(29132),s(74333)),E=s(46882),p=s(62208),O=s(99959),x=s(10699),y=s(32917),Z=s(21726),o=s(77712),F=s(90912),b=(s(85931),s(68653)),C=s(76898),M=s(99433),g=s(65234),j=s(44917),N=s(552),P=s(49286),R=s(6647),I=s(30346),T=s(99555),J=s(13812),K=s(61885),U=s(86810),z=s(47996),A=s(77275),u=s(98686),f=s(2004);let n=d=class extends(K.Z.EventedMixin((0,U.eC)(z.Z))){constructor(...t){super(...t),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([(0,y.on)(()=>this.sublayers,"after-add",({item:e})=>{e.parent=this,e.layer=this.layer},y.Z_),(0,y.on)(()=>this.sublayers,"after-remove",({item:e})=>{e.layer=e.parent=null},y.Z_),(0,y.YP)(()=>this.sublayers,(e,i)=>{if(i)for(const l of i)l.layer=l.parent=null;if(e)for(const l of e)l.parent=this,l.layer=this.layer},y.Z_)])}initialize(){(0,y.N1)(()=>this.networkLink).then(()=>(0,y.N1)(()=>!0===this.visible)).then(()=>this.load())}load(t){if(!this.networkLink||this.networkLink.viewFormat)return;const e=(0,p.pC)(t)?t.signal:null,i=this._fetchService(this._get("networkLink")?.href??"",e).then(l=>{const h=(0,u.lm)(l.sublayers);this.fullExtent=f.Z.fromJSON(h),this.sourceJSON=l;const m=(0,F.se)(v.Z.ofType(d),(0,u.j5)(d,l));this.sublayers?this.sublayers.addMany(m):this.sublayers=m,this.layer?.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(i),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(t,e){return!!e.visibility}set layer(t){this._set("layer",t),this.sublayers&&this.sublayers.forEach(e=>e.layer=t)}_fetchService(t,e){return(0,u.CS)(t,this.layer.outSpatialReference,this.layer.refreshInterval,e).then(i=>(0,u.Cw)(i.data))}};(0,r._)([(0,o.Cb)()],n.prototype,"description",void 0),(0,r._)([(0,o.Cb)()],n.prototype,"id",void 0),(0,r._)([(0,o.Cb)({readOnly:!0,value:null})],n.prototype,"networkLink",void 0),(0,r._)([(0,o.Cb)({json:{write:{allowNull:!0}}})],n.prototype,"parent",void 0),(0,r._)([(0,o.Cb)({type:v.Z.ofType(d),json:{write:{allowNull:!0}}})],n.prototype,"sublayers",void 0),(0,r._)([(0,o.Cb)({value:null,json:{read:{source:"name",reader:t=>(0,A.Cb)(t)}}})],n.prototype,"title",void 0),(0,r._)([(0,o.Cb)({value:!0})],n.prototype,"visible",null),(0,r._)([(0,b.r)("visible",["visibility"])],n.prototype,"readVisible",null),(0,r._)([(0,o.Cb)()],n.prototype,"sourceJSON",void 0),(0,r._)([(0,o.Cb)({value:null})],n.prototype,"layer",null),(0,r._)([(0,o.Cb)({type:f.Z})],n.prototype,"fullExtent",void 0),n=d=(0,r._)([(0,C.j)("esri.layers.support.KMLSublayer")],n);const S=n,H=["kml","xml"];let a=class extends((0,N.h)((0,I.Q)((0,T.M)((0,P.q)((0,R.I)((0,O.R)(j.Z))))))){constructor(...t){super(...t),this._visibleFolders=[],this.allSublayers=new E.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=g.Z.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([(0,y.YP)(()=>this.sublayers,(t,e)=>{e&&e.forEach(i=>{i.parent=null,i.layer=null}),t&&t.forEach(i=>{i.parent=this,i.layer=this})},y.Z_),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(t,e){return"string"==typeof t?{url:t,...e}:t}readSublayersFromItemOrWebMap(t,e){this._visibleFolders=e.visibleFolders}readSublayers(t,e,i){return(0,u.j5)(S,e,i,this._visibleFolders)}writeSublayers(t,e){const i=[],l=t.toArray();for(;l.length;){const h=l[0];h.networkLink||(h.visible&&i.push(h.id),h.sublayers&&l.push(...h.sublayers.toArray())),l.shift()}e.visibleFolders=i}get title(){const t=this._get("title");return t&&"defaults"!==this.originOf("title")?t:this.url?(0,Z.vt)(this.url,H)||"KML":t||""}set title(t){this._set("title",t)}get visibleSublayers(){const t=this.sublayers,e=[],i=l=>{l.visible&&(e.push(l),l.sublayers&&l.sublayers.forEach(i))};return t&&t.forEach(i),e}get fullExtent(){return this._recomputeFullExtent()}load(t){const e=(0,p.pC)(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},t).catch(x.r9).then(()=>this._fetchService(e))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}_fetchService(t){var e=this;return(0,L.Z)(function*(){const i=yield Promise.resolve().then(()=>e.resourceInfo?{ssl:!1,data:e.resourceInfo}:(0,u.CS)(e.url??"",e.outSpatialReference,e.refreshInterval,t)),l=(0,u.Cw)(i.data);l&&e.read(l,{origin:"service"})})()}_recomputeFullExtent(){let t=null;(0,p.pC)(this.extent)&&(t=this.extent.clone());const e=i=>{if(i.sublayers)for(const l of i.sublayers.items)e(l),l.visible&&l.fullExtent&&((0,p.pC)(t)?t.union(l.fullExtent):t=l.fullExtent.clone())};return e(this),t}};(0,r._)([(0,o.Cb)({readOnly:!0})],a.prototype,"allSublayers",void 0),(0,r._)([(0,o.Cb)({type:g.Z})],a.prototype,"outSpatialReference",void 0),(0,r._)([(0,o.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),(0,r._)([(0,o.Cb)({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"legendEnabled",void 0),(0,r._)([(0,o.Cb)({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),(0,r._)([(0,o.Cb)({type:["KML"]})],a.prototype,"operationalLayerType",void 0),(0,r._)([(0,o.Cb)({})],a.prototype,"resourceInfo",void 0),(0,r._)([(0,o.Cb)({type:v.Z.ofType(S),json:{write:{ignoreOrigin:!0}}})],a.prototype,"sublayers",void 0),(0,r._)([(0,b.r)(["web-map","portal-item"],"sublayers",["visibleFolders"])],a.prototype,"readSublayersFromItemOrWebMap",null),(0,r._)([(0,b.r)("service","sublayers",["sublayers"])],a.prototype,"readSublayers",null),(0,r._)([(0,M.c)("sublayers")],a.prototype,"writeSublayers",null),(0,r._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),(0,r._)([(0,o.Cb)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],a.prototype,"title",null),(0,r._)([(0,o.Cb)(J.HQ)],a.prototype,"url",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],a.prototype,"visibleSublayers",null),(0,r._)([(0,o.Cb)({type:f.Z})],a.prototype,"extent",void 0),(0,r._)([(0,o.Cb)()],a.prototype,"fullExtent",null),a=(0,r._)([(0,C.j)("esri.layers.KMLLayer")],a);const W=a}}]);