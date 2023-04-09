"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[8762],{98762:(w,g,t)=>{t.r(g),t.d(g,{default:()=>Ce});var p=t(15861),s=t(17626),C=(t(29132),t(73281)),R=(t(4832),t(49067),t(96794),t(69747),t(40425),t(69357),t(40342),t(73640),t(33474),t(32088)),m=t(62208),z=t(99959),V=t(94113),K=t(21726),i=t(77712),W=t(90912),A=(t(85931),t(76898)),q=t(99433),I=t(71774),k=t(44917),_=t(26584),ee=t(80542),te=t(8314),re=t(47996),B=t(10699),se=t(59289),Y=t(56554),F=t(83774),ie=t(17253),G=t(2004);let f=class extends((0,ee.p)(re.Z)){constructor(){var e;super(...arguments),e=this,this._connection=null,this.capabilities=(0,Y.MS)(!1,!1),this.type="wfs",this.refresh=(0,B.Ds)(function(){var r=(0,p.Z)(function*(n){yield e.load();const{extent:a}=yield e._connection.invoke("refresh",n);return a&&(e.sourceJSON.extent=a),{dataChanged:!0,updates:{extent:e.sourceJSON.extent}}});return function(n){return r.apply(this,arguments)}}())}load(e){const r=(0,m.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}openPorts(){var e=this;return(0,p.Z)(function*(){return yield e.load(),e._connection.openPorts()})()}queryFeatures(e,r={}){var n=this;return(0,p.Z)(function*(){yield n.load(r);const a=yield n._connection.invoke("queryFeatures",e?e.toJSON():null,r);return ie.Z.fromJSON(a)})()}queryFeaturesJSON(e,r={}){var n=this;return(0,p.Z)(function*(){return yield n.load(r),n._connection.invoke("queryFeatures",e?e.toJSON():null,r)})()}queryFeatureCount(e,r={}){var n=this;return(0,p.Z)(function*(){return yield n.load(r),n._connection.invoke("queryFeatureCount",e?e.toJSON():null,r)})()}queryObjectIds(e,r={}){var n=this;return(0,p.Z)(function*(){return yield n.load(r),n._connection.invoke("queryObjectIds",e?e.toJSON():null,r)})()}queryExtent(e,r={}){var n=this;return(0,p.Z)(function*(){yield n.load(r);const a=yield n._connection.invoke("queryExtent",e?e.toJSON():null,r);return{count:a.count,extent:G.Z.fromJSON(a.extent)}})()}querySnapping(e,r={}){var n=this;return(0,p.Z)(function*(){return yield n.load(r),n._connection.invoke("querySnapping",e,r)})()}_createLoadOptions(e){var r=this;return(0,p.Z)(function*(){const{url:n,customParameters:a,name:d,namespaceUri:v,spatialReference:l,fields:O,geometryType:T,swapXY:E}=r.layer;if(!n)throw new _.Z("wfs-layer:missing-url","WFSLayer must be created with a url");r.wfsCapabilities||(r.wfsCapabilities=yield(0,F.FU)(n,{customParameters:a,...e}));const c=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some(j=>null==r.layer[j])?yield(0,F.be)(r.wfsCapabilities,d,v,{spatialReference:l,customParameters:a,signal:e?.signal}):{...(0,F.eB)(O??[]),geometryType:T,name:d,namespaceUri:v,spatialReference:l,swapXY:E},Fe=(0,m.Wg)((0,F.ft)(r.wfsCapabilities.readFeatureTypes(),c.name,c.namespaceUri)),Se=I.M.toJSON(c.geometryType);return{customParameters:a,featureType:Fe,fields:c.fields?.map(j=>j.toJSON())??[],geometryField:c.geometryField,geometryType:Se,getFeatureUrl:r.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:r.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:c.objectIdField,spatialReference:c.spatialReference.toJSON(),swapXY:!!c.swapXY}})()}_startWorker(e){var r=this;return(0,p.Z)(function*(){const[n,a]=yield(0,B.as)([r._createLoadOptions(e),(0,se.bA)("WFSSourceWorker",{...e,strategy:(0,te.Z)("feature-layers-workers")?"dedicated":"local"})]),d=n.error||a.error||null,v=a.value||null;if(d)throw v&&v.close(),d;const l=n.value;r._connection=a.value;const O=(yield r._connection.invoke("load",l,e)).extent;r.sourceJSON={extent:O,fields:l.fields,geometryType:l.geometryType,objectIdField:l.objectIdField,geometryField:l.geometryField,drawingInfo:(0,Y.bU)(l.geometryType),name:l.featureType.title,wfsInfo:{name:l.featureType.name,featureUrl:l.getFeatureUrl,maxFeatures:3e3,swapXY:l.swapXY,supportedSpatialReferences:l.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:l.featureType.namespaceUri}}})()}};(0,s._)([(0,i.Cb)()],f.prototype,"capabilities",void 0),(0,s._)([(0,i.Cb)({constructOnly:!0})],f.prototype,"layer",void 0),(0,s._)([(0,i.Cb)()],f.prototype,"sourceJSON",void 0),(0,s._)([(0,i.Cb)()],f.prototype,"type",void 0),(0,s._)([(0,i.Cb)()],f.prototype,"wfsCapabilities",void 0),f=(0,s._)([(0,A.j)("esri.layers.graphics.sources.WFSSource")],f);var x,oe=t(552),ne=t(50107),ae=t(35126),le=t(15008),pe=t(49286),ue=t(32629),de=t(6647),ye=t(30346),ce=t(99555),me=t(97941),h=t(13812),X=t(36255),fe=t(55911),P=t(36630),he=t(170),ve=t(62667),S=t(96854),ge=t(49430),H=t(65234);const $=(0,fe.v)();let o=x=class extends((0,ue.c)((0,ne.N)((0,le.M)((0,ae.b)((0,oe.h)((0,me.n)((0,ye.Q)((0,ce.M)((0,pe.q)((0,de.I)((0,z.R)(k.Z)))))))))))){static fromWFSLayerInfo(e){const{customParameters:r,fields:n,geometryField:a,geometryType:d,name:v,namespaceUri:l,objectIdField:O,spatialReference:T,swapXY:E,url:U,wfsCapabilities:c}=e;return new x({customParameters:r,fields:n,geometryField:a,geometryType:d,name:v,namespaceUri:l,objectIdField:O,spatialReference:T,swapXY:E,url:U,wfsCapabilities:c})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new f({layer:this}),this.spatialReference=H.Z.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,P.YN)(this.renderer,this.fieldsIndex),(0,P.UF)(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,n){const a=e.filter(d=>d.name!==F.M8);this.geometryField&&a.unshift(new X.Z({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,V.RB)(n,a.map(d=>d.toJSON()),r)}get parsedUrl(){return(0,K.mN)(this.url)}set renderer(e){(0,P.YN)(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){return this.source?.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return(0,ge.eZ)(this,e)}createQuery(){const e=new S.Z;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:n}=this;return e.timeExtent=null!=r&&null!=n?n.offset(-r.value,r.unit):n||null,e}getFieldDomain(e,r){return this.getField(e)?.domain}getField(e){return this.fieldsIndex?.get(e)}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(S.Z.from(e)||this.createQuery(),r)).then(n=>{if(n?.features)for(const a of n.features)a.layer=a.sourceLayer=this;return n})}queryObjectIds(e,r){return this.load().then(()=>this.source.queryObjectIds(S.Z.from(e)||this.createQuery(),r))}queryFeatureCount(e,r){return this.load().then(()=>this.source.queryFeatureCount(S.Z.from(e)||this.createQuery(),r))}queryExtent(e,r){return this.load().then(()=>this.source.queryExtent(S.Z.from(e)||this.createQuery(),r))}hasDataChanged(){var e=this;return(0,p.Z)(function*(){try{const{dataChanged:r,updates:n}=yield e.source.refresh(e.customParameters);return(0,m.pC)(n)&&e.read(n,{origin:"service",url:e.parsedUrl,ignoreDefaults:!0}),r}catch{}return!1})()}};(0,s._)([(0,i.Cb)({readOnly:!0})],o.prototype,"capabilities",null),(0,s._)([(0,i.Cb)({type:String})],o.prototype,"copyright",void 0),(0,s._)([(0,i.Cb)({readOnly:!0})],o.prototype,"createQueryVersion",null),(0,s._)([(0,i.Cb)({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],o.prototype,"customParameters",void 0),(0,s._)([(0,i.Cb)({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),(0,s._)([(0,i.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),(0,s._)([(0,i.Cb)({type:String})],o.prototype,"displayField",void 0),(0,s._)([(0,i.Cb)(h.PV)],o.prototype,"elevationInfo",void 0),(0,s._)([(0,i.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"featureUrl",void 0),(0,s._)([(0,i.Cb)({type:[X.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),(0,s._)([(0,q.c)("fields")],o.prototype,"writeFields",null),(0,s._)([(0,i.Cb)($.fieldsIndex)],o.prototype,"fieldsIndex",void 0),(0,s._)([(0,i.Cb)({type:G.Z,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),(0,s._)([(0,i.Cb)()],o.prototype,"geometryField",void 0),(0,s._)([(0,i.Cb)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:I.M.read},write:{target:"layerDefinition.geometryType",writer:I.M.write,ignoreOrigin:!0},origins:{service:{read:I.M.read}}}})],o.prototype,"geometryType",void 0),(0,s._)([(0,i.Cb)({type:String})],o.prototype,"id",void 0),(0,s._)([(0,i.Cb)(h.iR)],o.prototype,"labelsVisible",void 0),(0,s._)([(0,i.Cb)({type:[he.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ve.r},write:!0}})],o.prototype,"labelingInfo",void 0),(0,s._)([(0,i.Cb)(h.rn)],o.prototype,"legendEnabled",void 0),(0,s._)([(0,i.Cb)({type:["show","hide"]})],o.prototype,"listMode",void 0),(0,s._)([(0,i.Cb)({type:String})],o.prototype,"objectIdField",void 0),(0,s._)([(0,i.Cb)({type:["WFS"]})],o.prototype,"operationalLayerType",void 0),(0,s._)([(0,i.Cb)({type:W.z8,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"maxFeatures",void 0),(0,s._)([(0,i.Cb)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],o.prototype,"mode",void 0),(0,s._)([(0,i.Cb)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"name",void 0),(0,s._)([(0,i.Cb)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"namespaceUri",void 0),(0,s._)([(0,i.Cb)(h.bT)],o.prototype,"opacity",void 0),(0,s._)([(0,i.Cb)($.outFields)],o.prototype,"outFields",void 0),(0,s._)([(0,i.Cb)({readOnly:!0})],o.prototype,"parsedUrl",null),(0,s._)([(0,i.Cb)(h.C_)],o.prototype,"popupEnabled",void 0),(0,s._)([(0,i.Cb)({type:C.Z,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),(0,s._)([(0,i.Cb)({types:R.A,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:R.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],o.prototype,"renderer",null),(0,s._)([(0,i.Cb)(h.YI)],o.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,i.Cb)({readOnly:!0})],o.prototype,"source",void 0),(0,s._)([(0,i.Cb)({type:H.Z,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],o.prototype,"spatialReference",void 0),(0,s._)([(0,i.Cb)({readOnly:!0,type:[W.z8],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"spatialReferences",void 0),(0,s._)([(0,i.Cb)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"swapXY",void 0),(0,s._)([(0,i.Cb)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],o.prototype,"title",void 0),(0,s._)([(0,i.Cb)({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),(0,s._)([(0,i.Cb)(h.HQ)],o.prototype,"url",void 0),(0,s._)([(0,i.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"version",void 0),(0,s._)([(0,i.Cb)()],o.prototype,"wfsCapabilities",null),o=x=(0,s._)([(0,A.j)("esri.layers.WFSLayer")],o);const Ce=o},87757:(w,g,t)=>{t.d(g,{g:()=>p});const p={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},56554:(w,g,t)=>{t.d(g,{Dm:()=>L,Hq:()=>Q,MS:()=>J,bU:()=>D});var p=t(8314),s=t(58817),Z=t(87757),C=t(24837);function D(u){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===u||"esriGeometryMultipoint"===u?C.I4:"esriGeometryPolyline"===u?C.ET:C.lF}}}const M=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let N=1;function L(u,y){if((0,p.Z)("esri-csp-restrictions"))return()=>({[y]:null,...u});try{let b=`this.${y} = null;`;for(const m in u)b+=`this${M.test(m)?`.${m}`:`["${m}"]`} = ${JSON.stringify(u[m])};`;const R=new Function(`\n      return class AttributesClass$${N++} {\n        constructor() {\n          ${b};\n        }\n      }\n    `)();return()=>new R}catch{return()=>({[y]:null,...u})}}function Q(u={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(u)}}]}function J(u,y){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:u},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:y,supportsDelete:y,supportsEditing:y,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:y,supportsExceedsLimitStatistics:!0},query:Z.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:y,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);