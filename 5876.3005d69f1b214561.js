"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[5876],{65876:(O,_,t)=>{t.r(_),t.d(_,{default:()=>D});var u=t(17626),y=t(8314),h=t(62208),o=t(32917),p=(t(63290),t(90912),t(85931),t(26584),t(76898)),E=t(98624),c=t(82230);let l=class extends c.default{initialize(){this.addHandles([(0,o.YP)(()=>this.view.scale,()=>this._update(),o.nn)],"constructor")}isUpdating(){const s=this.layer.sublayers.some(P=>null!=P.renderer),e=this._commandsQueue.updating,a=null!=this._updatingRequiredFieldsPromise,i=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,n=null==this.tileRenderer||this.tileRenderer?.updating,d=s&&(e||a||i||r||n);return(0,y.Z)("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${d}\n  -> hasRenderer ${s}\n  -> hasPendingCommand ${e}\n  -> updatingRequiredFields ${a}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${r}\n  -> updatingTileRenderer ${n}\n`),d}_injectOverrides(s){let e=super._injectOverrides(s);const a=this.view.scale,i=this.layer.sublayers.filter(n=>function g(s,e){return!s.visible||0!==s.minScale&&e>s.minScale||0!==s.maxScale&&e<s.maxScale}(n,a)).map(n=>n.subtypeCode);if(!i.length)return e;e=(0,h.pC)(e)?e:(new E.Z).toJSON();const r=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(s){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),a=s.attributes[e.name],i=this.layer.sublayers.find(r=>r.subtypeCode===a);s.layer=s.sourceLayer=i}_createSchemaConfig(){const s={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(",");let i=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return i+=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2",{...super._createSchemaConfig(),...s,definitionExpression:i}}};l=(0,u._)([(0,p.j)("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const D=l}}]);