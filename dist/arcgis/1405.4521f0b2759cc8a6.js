"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[1405],{41405:(I,g,e)=>{e.r(g),e.d(g,{default:()=>U});var t=e(17626),m=(e(63290),e(90912),e(85931),e(26584),e(8314),e(76898)),S=e(45e3),h=e(37384),L=e(74333),C=e(89726),b=e(62208),s=e(32917),c=e(77712),p=e(45611);let n=class extends p.Z{constructor(i){super(i),this.type="group",this.layerViews=new L.Z}_allLayerViewVisibility(i){this.layerViews.forEach(o=>{o.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),(0,s.YP)(()=>this.layer.visibilityMode,()=>this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null)),s.Z_),(0,s.YP)(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},s.Z_)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",(0,C.Z)(i,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce((i,o)=>i+o.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(o=>o.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(o=>!!this._findLayerViewForLayer(o)?.visible);return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){(0,b.Wi)(i)&&(i=this._firstVisibleOnLayerOrder(),(0,b.Wi)(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(o=>{o.visible=o===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(P=>(0,s.YP)(()=>P.visible,f=>this._applyVisibility(()=>{f!==this.visible&&(P.visible=this.visible)},()=>this._applyExclusiveVisibility(f?P:null)),s.Z_)).toArray(),"grouplayerview:visible");const o=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(o?.visible?o:null))}_applyVisibility(i,o){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?i():"exclusive"===this.layer?.visibilityMode&&o())}};(0,t._)([(0,c.Cb)({cast:C.R})],n.prototype,"layerViews",null),(0,t._)([(0,c.Cb)({readOnly:!0})],n.prototype,"updatingProgress",null),(0,t._)([(0,c.Cb)()],n.prototype,"view",void 0),n=(0,t._)([(0,m.j)("esri.views.layers.GroupLayerView")],n);const V=n;let A=class extends((0,h.y)(V)){constructor(){super(...arguments),this.container=new S.G}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,o)=>this.container.addChildAt(i.container,o))}};A=(0,t._)([(0,m.j)("esri.views.2d.layers.GroupLayerView2D")],A);const U=A},37384:(I,g,e)=>{e.d(g,{y:()=>W});var t=e(17626),E=e(74333),R=e(89726),O=e(26584),d=e(32917),r=e(77712),h=(e(90912),e(85931),e(76898)),L=e(1011),C=e(38093),b=e(86810);let s=class extends b.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,t._)([(0,r.Cb)({readOnly:!0})],s.prototype,"version",null),s=(0,t._)([(0,h.j)("esri.views.layers.support.ClipArea")],s);const c=s;var p;let n=p=class extends c{constructor(v){super(v),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new p({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,t._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],n.prototype,"left",void 0),(0,t._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],n.prototype,"right",void 0),(0,t._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],n.prototype,"top",void 0),(0,t._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],n.prototype,"bottom",void 0),n=p=(0,t._)([(0,h.j)("esri.views.layers.support.ClipRect")],n);const V=n;e(29132);var f,U=e(21674),i=e(91179),o=e(2004),P=e(37118);const T={base:U.Z,key:"type",typeMap:{extent:o.Z,polygon:P.Z}};let M=f=class extends c{constructor(v){super(v),this.type="geometry",this.geometry=null}clone(){return new f({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,t._)([(0,r.Cb)({types:T,json:{read:i.im,write:!0}})],M.prototype,"geometry",void 0),M=f=(0,t._)([(0,h.j)("esri.views.layers.support.Geometry")],M);const Z=M;let D=class extends c{constructor(v){super(v),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,t._)([(0,r.Cb)({type:[[[Number]]],json:{write:!0}})],D.prototype,"path",void 0),D=(0,t._)([(0,h.j)("esri.views.layers.support.Path")],D);const j=E.Z.ofType({key:"type",base:null,typeMap:{rect:V,path:D,geometry:Z}}),W=v=>{let y=class extends v{constructor(){super(...arguments),this.attached=!1,this.clips=new j,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){this.view?.spatialReference&&(this.view?.spatialReferenceLocked??1)&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new O.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new L.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,d.YP)(()=>this.suspended,a=>{this.container&&(this.container.visible=!a),this.view&&!a&&this.updateRequested&&this.view.requestUpdate()},d.tX),(0,d.YP)(()=>this.layer?.opacity??1,a=>{this.container&&(this.container.opacity=a)},d.tX),(0,d.YP)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",a=>{this.container&&(this.container.blendMode=a)},d.tX),(0,d.YP)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,a=>{this.container&&(this.container.effect=a)},d.tX),(0,d.YP)(()=>this.highlightOptions,a=>this.container.highlightOptions=a,d.tX),(0,d.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},d.tX),(0,d.YP)(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:a})=>{const w=null!=a&&this.isVisibleAtScale(a);w!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",w)},d.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(a=>{a===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const l=this.view?.spatialReference;return null==l||this.supportsSpatialReference(l)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(l){const u=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!u)return!0;const{minScale:a,maxScale:w}=u;return(0===a||l<=a)&&(0===w||l>=w)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(l){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",l),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(l))):this.updateRequested=!1}hitTest(l,u){return Promise.resolve(null)}supportsSpatialReference(l){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const l=super.getSuspendInfo(),u=!this.spatialReferenceSupported,a=this.visibleAtCurrentScale;return u&&(l.spatialReferenceNotSupported=u),a&&(l.outsideScaleRange=a),l}addAttachHandles(l){this.addHandles(l,"attach")}};return(0,t._)([(0,r.Cb)()],y.prototype,"attached",void 0),(0,t._)([(0,r.Cb)({type:j,set(l){const u=(0,R.Z)(l,this._get("clips"),j);this._set("clips",u)}})],y.prototype,"clips",void 0),(0,t._)([(0,r.Cb)()],y.prototype,"container",void 0),(0,t._)([(0,r.Cb)()],y.prototype,"moving",void 0),(0,t._)([(0,r.Cb)({readOnly:!0})],y.prototype,"spatialReferenceSupported",null),(0,t._)([(0,r.Cb)({readOnly:!0})],y.prototype,"updateParameters",void 0),(0,t._)([(0,r.Cb)()],y.prototype,"updateRequested",void 0),(0,t._)([(0,r.Cb)()],y.prototype,"updating",null),(0,t._)([(0,r.Cb)()],y.prototype,"view",void 0),(0,t._)([(0,r.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",void 0),(0,t._)([(0,r.Cb)({type:C.Z})],y.prototype,"highlightOptions",void 0),y=(0,t._)([(0,h.j)("esri.views.2d.layers.LayerView2D")],y),y}},45611:(I,g,e)=>{e.d(g,{Z:()=>c});var t=e(17626),E=e(14517),R=e(61885),O=e(80542),d=e(61996),r=e(63290),m=e(62208),S=e(60330),h=e(77712),b=(e(90912),e(85931),e(76898));let s=class extends((0,O.p)((0,d.IG)((0,S.v)(R.Z.EventedMixin(E.Z))))){constructor(p){super(p),this.layer=null,this.parent=null}initialize(){this.when().catch(p=>{if("layerview:create-error"!==p.name){const n=this.layer&&this.layer.id||"no id",V=this.layer&&this.layer.title||"no title";r.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${V}', id: '${n}')`,p)}})}get fullOpacity(){return(0,m.Pt)(this.get("layer.opacity"),1)*(0,m.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(p){this._overrideIfSome("visible",p)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const p=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(p.viewNotReady=!0),this.layer&&this.layer.loaded||(p.layerNotLoaded=!0),this.visible||(p.layerInvisible=!0),p}isUpdating(){return!1}};(0,t._)([(0,h.Cb)()],s.prototype,"fullOpacity",null),(0,t._)([(0,h.Cb)()],s.prototype,"layer",void 0),(0,t._)([(0,h.Cb)()],s.prototype,"parent",void 0),(0,t._)([(0,h.Cb)({readOnly:!0})],s.prototype,"suspended",null),(0,t._)([(0,h.Cb)({readOnly:!0})],s.prototype,"suspendInfo",null),(0,t._)([(0,h.Cb)({readOnly:!0})],s.prototype,"legendEnabled",null),(0,t._)([(0,h.Cb)({type:Boolean,readOnly:!0})],s.prototype,"updating",null),(0,t._)([(0,h.Cb)({readOnly:!0})],s.prototype,"updatingProgress",null),(0,t._)([(0,h.Cb)()],s.prototype,"visible",null),(0,t._)([(0,h.Cb)()],s.prototype,"view",void 0),s=(0,t._)([(0,b.j)("esri.views.layers.LayerView")],s);const c=s}}]);