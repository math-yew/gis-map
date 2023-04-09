"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[1074],{71074:($,G,L)=>{L.r(G),L.d(G,{populateOperationalLayers:()=>M});var o=L(15861),C=L(74333),x=(L(8314),L(10699)),l=L(30164),W=L(55463);function p(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var V=L(7534),B=L(39683);function M(e,r,a){return S.apply(this,arguments)}function S(){return(S=(0,o.Z)(function*(e,r,a){if(!r)return;const t=[];for(const y of r){const n=N(y,a);t.push("GroupLayer"===y.layerType?k(n,y,a):n)}const i=yield(0,x.as)(t);for(const y of i)y.value&&e.add(y.value)})).apply(this,arguments)}const U={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},D={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},w={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},R={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},Z={ArcGISFeatureLayer:"FeatureLayer"},E={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function N(e,r){return d.apply(this,arguments)}function d(){return d=(0,o.Z)(function*(e,r){return function J(e,r,a){return I.apply(this,arguments)}(yield function K(e,r){return T.apply(this,arguments)}(e,r),e,r)}),d.apply(this,arguments)}function I(){return I=(0,o.Z)(function*(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&v(r)&&(yield function H(e,r,a){return f.apply(this,arguments)}(t,r,a.context)),yield(0,B.y)(t,a.context),t}),I.apply(this,arguments)}function T(){return(T=(0,o.Z)(function*(e,r){const a=r.context,t=function P(e){let r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=w;break;case"ground":r=D;break;default:r=U}else switch(e.layerContainerType){case"basemap":r=E;break;case"tables":r=Z;break;default:r=R}return r}(a);let i=e.layerType||e.type;!i&&r&&r.defaultLayerType&&(i=r.defaultLayerType);const y=t[i];let n=y?l.T[y]:l.T.UnknownLayer;if(A(e)){const m=a?.portal;if(e.itemId){const c=new W.default({id:e.itemId,portal:m});yield c.load();const u=(yield(0,V.selectLayerClassPath)(c)).className||"UnknownLayer";n=l.T[u]}}else"ArcGISFeatureLayer"===i?function F(e){return p(e,"notes")}(e)||function b(e){return p(e,"markup")}(e)?n=l.T.MapNotesLayer:function O(e){return p(e,"route")}(e)?n=l.T.RouteLayer:v(e)&&(n=l.T.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?n=l.T.WMTSLayer:"WFS"===i&&"2.0.0"!==e.wfsInfo?.version&&(n=l.T.UnsupportedLayer);return n()})).apply(this,arguments)}function v(e){return"ArcGISFeatureLayer"===e.layerType&&!A(e)&&(e.featureCollection?.layers?.length??0)>1}function A(e){return"Feature Collection"===e.type}function k(e,r,a){return g.apply(this,arguments)}function g(){return(g=(0,o.Z)(function*(e,r,a){const t=new C.Z,i=M(t,Array.isArray(r.layers)?r.layers:[],a),y=yield e;if(yield i,"group"===y.type)return y.layers.addMany(t),y})).apply(this,arguments)}function f(){return(f=(0,o.Z)(function*(e,r,a){const t=l.T.FeatureLayer,i=yield t(),y=r.featureCollection,n=y?.showLegend,m=y?.layers?.map((c,u)=>{const s=new i;s.read(c,a);const h={...a,ignoreDefaults:!0};return s.read({id:`${e.id}-sublayer-${u}`,visibility:r.visibleLayers?.includes(u)??!0},h),null!=n&&s.read({showLegend:n},h),s});e.layers.addMany(m??[])})).apply(this,arguments)}}}]);