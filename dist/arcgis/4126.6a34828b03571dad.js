"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[4126],{54126:(O,r,_)=>{_.r(r),_.d(r,{default:()=>p});var o=_(15861),t=_(17626),h=_(63290),d=_(10699),i=_(77712),D=(_(90912),_(85931),_(76898)),c=_(91757),l=_(37384),s=_(67802),M=_(45611),E=_(94421);let e=class extends((0,E.Z)((0,l.y)(M.Z))){update(a){this._strategy.update(a).catch(n=>{(0,d.D_)(n)||h.Z.getLogger(this.declaredClass).error(n)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new c.c,this.container.addChild(this._bitmapContainer),this._strategy=new s.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(a,n,y){return this.layer.fetchImageBitmap(a,n,y)}doRefresh(){var a=this;return(0,o.Z)(function*(){a.requestUpdate()})()}isUpdating(){return this._strategy.updating||this.updateRequested}};(0,t._)([(0,i.Cb)()],e.prototype,"_strategy",void 0),(0,t._)([(0,i.Cb)()],e.prototype,"updating",void 0),e=(0,t._)([(0,D.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],e);const p=e},94421:(O,r,_)=>{_.d(r,{Z:()=>c});var o=_(17626),t=_(63290),h=_(10699),d=_(32917),i=_(77712),D=(_(90912),_(85931),_(76898));const c=l=>{let s=class extends l{initialize(){this.handles.add((0,d.on)(()=>this.layer,"refresh",M=>{this.doRefresh(M.dataChanged).catch(E=>{(0,h.D_)(E)||t.Z.getLogger(this.declaredClass).error(E)})}),"RefreshableLayerView")}};return(0,o._)([(0,i.Cb)()],s.prototype,"layer",void 0),s=(0,o._)([(0,D.j)("esri.layers.mixins.RefreshableLayerView")],s),s}}}]);