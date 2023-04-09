"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[5976],{15976:(M,f,e)=>{e.r(f),e.d(f,{default:()=>v});var i=e(15861),l=(e(29132),e(62208)),E=e(98346),a=e(85073),d=e(8614),_=e(79751),P=e(74829),m=e(28594),D=e(17057),u=e(30994),p=e(46572),S=e(99033),h=e(37084),c=e(2004);class v{convertVectorFieldData(t){const s=a.Z.fromJSON(t.pixelBlock),r=(0,u.KC)(s,t.type);return Promise.resolve((0,l.pC)(r)?r.toJSON():null)}decode(t){return(0,i.Z)(function*(){const s=yield(0,d.J)(t.data,t.options);return s&&s.toJSON()})()}symbolize(t){t.pixelBlock=a.Z.fromJSON(t.pixelBlock),t.extent=t.extent?c.Z.fromJSON(t.extent):null;const s=this.symbolizer.symbolize(t);return Promise.resolve((0,l.pC)(s)?s.toJSON():null)}updateSymbolizer(t){var s=this;return(0,i.Z)(function*(){s.symbolizer=S.Z.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===s.symbolizer?.rendererJSON.type&&(s.symbolizer.rendererJSON.histograms=t.histograms)})()}updateRasterFunction(t){var s=this;return(0,i.Z)(function*(){s.rasterFunction=(0,P.Ue)(t.rasterFunctionJSON)})()}process(t){var s=this;return(0,i.Z)(function*(){const r=s.rasterFunction.process({extent:c.Z.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(o=>(0,l.pC)(o)?a.Z.fromJSON(o):null),primaryRasterIds:t.primaryRasterIds});return(0,l.pC)(r)?r.toJSON():null})()}stretch(t){const s=this.symbolizer.simpleStretch(a.Z.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve((0,l.pC)(s)&&s.toJSON())}estimateStatisticsHistograms(t){const s=(0,D.Hv)(a.Z.fromJSON(t.srcPixelBlock));return Promise.resolve(s)}split(t){const s=(0,_.Vl)(a.Z.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return s&&s.forEach((r,o)=>{s.set(o,r?.toJSON())}),Promise.resolve(s)}mosaicAndTransform(t){return(0,i.Z)(function*(){const s=t.srcPixelBlocks.map(O=>O?new a.Z(O):null),r=(0,_.us)(s,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let o,n=r;return t.coefs&&(n=(0,_.Uk)(r,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(o=(0,_.Qh)(t.destDimension,t.gcsGrid),n=(0,l.Wg)((0,u.xQ)(n,t.isUV?"vector-uv":"vector-magdir",o))),{pixelBlock:n?.toJSON(),localNorthDirections:o}})()}createFlowMesh(t,s){return(0,i.Z)(function*(){const r={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:o,indexData:n}=yield(0,h.GE)(t.meshType,t.simulationSettings,r,s.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:n.buffer},transferList:[o.buffer,n.buffer]}})()}getProjectionOffsetGrid(t){return(0,i.Z)(function*(){const s=c.Z.fromJSON(t.projectedExtent),r=c.Z.fromJSON(t.srcBufferExtent);let o=null;t.datumTransformationSteps&&(o=new E.Z({steps:t.datumTransformationSteps})),(t.includeGCSGrid||(0,m.Mk)(s.spatialReference,r.spatialReference,o))&&(yield(0,m.zD)());const n=t.rasterTransform?(0,p.c)(t.rasterTransform):null;return(0,m.Qp)({...t,projectedExtent:s,srcBufferExtent:r,datumTransformation:o,rasterTransform:n})})()}}}}]);