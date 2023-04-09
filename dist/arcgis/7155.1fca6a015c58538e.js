"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[7155],{7155:(ae,T,r)=>{r.r(T),r.d(T,{default:()=>ie});var m=r(15861),o=r(17626),E=r(73281),N=r(84792),d=r(26584),p=r(58817),j=r(63290),O=r(62208),A=r(99959),G=r(94113),M=r(10699),U=r(21726),n=r(77712),Z=r(90912),K=r(68653),u=r(76898),D=r(99433),J=r(44917),$=r(50085),z=r(65088),Y=r(49286),H=r(6647),Q=r(99555),I=r(42432),g=r(55342),W=r(86810);r(85931);let f=class extends W.wq{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,o._)([(0,n.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"field",void 0),(0,o._)([(0,n.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],f.prototype,"type",void 0),f=(0,o._)([(0,u.j)("esri.layers.pointCloudFilters.PointCloudFilter")],f);const C=f;var b;let y=b=class extends C{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new b({field:this.field,requiredClearBits:(0,p.d9)(this.requiredClearBits),requiredSetBits:(0,p.d9)(this.requiredSetBits)})}};(0,o._)([(0,n.Cb)({type:[Z.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],y.prototype,"requiredClearBits",void 0),(0,o._)([(0,n.Cb)({type:[Z.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],y.prototype,"requiredSetBits",void 0),(0,o._)([(0,g.J)({pointCloudBitfieldFilter:"bitfield"})],y.prototype,"type",void 0),y=b=(0,o._)([(0,u.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],y);const X=y;var P;let c=P=class extends C{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new P({field:this.field,includedReturns:(0,p.d9)(this.includedReturns)})}};(0,o._)([(0,n.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"includedReturns",void 0),(0,o._)([(0,g.J)({pointCloudReturnFilter:"return"})],c.prototype,"type",void 0),c=P=(0,o._)([(0,u.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],c);const q=c;var S;let v=S=class extends C{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new S({field:this.field,mode:this.mode,values:(0,p.d9)(this.values)})}};(0,o._)([(0,n.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"mode",void 0),(0,o._)([(0,g.J)({pointCloudValueFilter:"value"})],v.prototype,"type",void 0),(0,o._)([(0,n.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"values",void 0),v=S=(0,o._)([(0,u.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],v);const k={key:"type",base:C,typeMap:{value:v,bitfield:X,return:q}};var F,R=r(13812),x=r(36255),_=r(55911),w=r(38439),ee=r(53776),B=r(80573);let h=F=class extends B.Z{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new F({...this.cloneProperties(),field:(0,p.d9)(this.field)})}};(0,o._)([(0,g.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],h.prototype,"type",void 0),(0,o._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"field",void 0),h=F=(0,o._)([(0,u.j)("esri.renderers.PointCloudRGBRenderer")],h);const te=h;var re=r(23899),oe=r(98610);const V={key:"type",base:B.Z,typeMap:{"point-cloud-class-breaks":ee.Z,"point-cloud-rgb":te,"point-cloud-stretch":re.Z,"point-cloud-unique-value":oe.Z},errorContext:"renderer"};var ne=r(49430);const L=(0,_.v)();let i=class extends((0,I.Vt)((0,z.Y)((0,Y.q)((0,H.I)((0,Q.M)((0,A.R)((0,$.V)(J.Z)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,s){return Array.isArray(e)?e.map(l=>{const a=new x.Z;return"FieldTypeInteger"===l.type&&((l=(0,p.d9)(l)).type="esriFieldTypeInteger"),a.read(l,s),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(l=>new x.Z({name:l.name,type:"ELEVATION"===l.name?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,s,l){(0,G.RB)("layerDefinition.drawingInfo.renderer",e.write({},l),t)}load(e){const t=(0,O.pC)(e)?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(M.r9).then(()=>this._fetchService(t));return this.addResolvingPromise(s),Promise.resolve(this)}createPopupTemplate(e){const t=(0,ne.eZ)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const s=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!s)return;const l=new w.Z({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],l],s.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const s=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!s)return;const l=new w.Z({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],l],s.fieldName="expression/pcl-rgb-decoded"}queryCachedStatistics(e,t){var s=this;return(0,m.Z)(function*(){if(yield s.load(t),!s.attributeStorageInfo)throw new d.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const l=s.fieldsIndex.get(e);if(!l)throw new d.Z("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const a of s.attributeStorageInfo)if(a.name===l.name){const se=(0,U.v_)(s.parsedUrl.path,`./statistics/${a.key}`);return(0,N.default)(se,{query:{f:"json",token:s.apiKey},responseType:"json",signal:t?t.signal:null}).then(le=>le.data)}throw new d.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")})()}saveAs(e,t){var s=this;return(0,m.Z)(function*(){return s._debouncedSaveOperations(I.xp.SAVE_AS,{...t,getTypeKeywords:()=>s._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)})()}save(){var e=this;return(0,m.Z)(function*(){const t={getTypeKeywords:()=>e._getTypeKeywords(),portalItemLayerType:"point-cloud"};return e._debouncedSaveOperations(I.xp.SAVE,t)})()}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new d.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new d.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&j.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&j.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};(0,o._)([(0,n.Cb)({type:["PointCloudLayer"]})],i.prototype,"operationalLayerType",void 0),(0,o._)([(0,n.Cb)(R.C_)],i.prototype,"popupEnabled",void 0),(0,o._)([(0,n.Cb)({type:E.Z,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),(0,o._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],i.prototype,"opacity",void 0),(0,o._)([(0,n.Cb)({type:["show","hide"]})],i.prototype,"listMode",void 0),(0,o._)([(0,n.Cb)({types:[k],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],i.prototype,"filters",void 0),(0,o._)([(0,n.Cb)({type:[x.Z]})],i.prototype,"fields",void 0),(0,o._)([(0,n.Cb)(L.fieldsIndex)],i.prototype,"fieldsIndex",void 0),(0,o._)([(0,K.r)("service","fields",["fields","attributeStorageInfo"])],i.prototype,"readServiceFields",null),(0,o._)([(0,n.Cb)(L.outFields)],i.prototype,"outFields",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),(0,o._)([(0,n.Cb)(R.PV)],i.prototype,"elevationInfo",null),(0,o._)([(0,n.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),(0,o._)([(0,n.Cb)(R.rn)],i.prototype,"legendEnabled",void 0),(0,o._)([(0,n.Cb)({types:V,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:V},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],i.prototype,"renderer",void 0),(0,o._)([(0,D.c)("renderer")],i.prototype,"writeRenderer",null),(0,o._)([(0,n.Cb)({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),i=(0,o._)([(0,u.j)("esri.layers.PointCloudLayer")],i);const ie=i}}]);