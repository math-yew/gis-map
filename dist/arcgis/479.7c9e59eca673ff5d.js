"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[479],{60479:(se,b,o)=>{o.d(b,{ly:()=>A,oS:()=>C,o7:()=>X,Jj:()=>_,Hz:()=>J,gK:()=>L,ey:()=>w,bj:()=>x,O1:()=>M,av:()=>U,Nu:()=>z,D_:()=>Y,Eu:()=>O,q6:()=>P,or:()=>Z,wA:()=>ee,Vs:()=>K,TS:()=>V,qt:()=>D,xA:()=>F,ct:()=>S,fP:()=>N,n1:()=>$,PP:()=>te,P_:()=>Q,mw:()=>k,G5:()=>G,ne:()=>v,ek:()=>g,Cd:()=>R,zO:()=>q,TN:()=>re,ir:()=>W,v6:()=>j,hu:()=>H,mc:()=>I});let a=(()=>{class r{constructor(e,t,f=0,s,i){this.TypedArrayConstructor=e,this.elementCount=9;const u=this.TypedArrayConstructor;void 0===s&&(s=9*u.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:f;this.typedBuffer=null==i?new u(t,n):new u(t,n,(i-f)/u.BYTES_PER_ELEMENT),this.typedBufferStride=s/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}getMat(e,t){let f=e*this.typedBufferStride;for(let s=0;s<9;s++)t[s]=this.typedBuffer[f++];return t}setMat(e,t){let f=e*this.typedBufferStride;for(let s=0;s<9;s++)this.typedBuffer[f++]=t[s]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,f){this.typedBuffer[e*this.typedBufferStride+t]=f}copyFrom(e,t,f){const s=this.typedBuffer,i=t.typedBuffer;let u=e*this.typedBufferStride,n=f*t.typedBufferStride;for(let p=0;p<9;++p)s[u++]=i[n++]}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=9,r})(),B=(()=>{class r{constructor(e,t,f=0,s,i){this.TypedArrayConstructor=e,this.elementCount=16;const u=this.TypedArrayConstructor;void 0===s&&(s=16*u.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:f;this.typedBuffer=null==i?new u(t,n):new u(t,n,(i-f)/u.BYTES_PER_ELEMENT),this.typedBufferStride=s/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}getMat(e,t){let f=e*this.typedBufferStride;for(let s=0;s<16;s++)t[s]=this.typedBuffer[f++];return t}setMat(e,t){let f=e*this.typedBufferStride;for(let s=0;s<16;s++)this.typedBuffer[f++]=t[s]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,f){this.typedBuffer[e*this.typedBufferStride+t]=f}copyFrom(e,t,f){const s=this.typedBuffer,i=t.typedBuffer;let u=e*this.typedBufferStride,n=f*t.typedBufferStride;for(let p=0;p<16;++p)s[u++]=i[n++]}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=16,r})(),y=(()=>{class r{constructor(e,t,f=0,s,i){this.TypedArrayConstructor=e,this.elementCount=1;const u=this.TypedArrayConstructor;void 0===s&&(s=u.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:f;this.typedBuffer=null==i?new u(t,n):new u(t,n,(i-f)/u.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=1,r})();var T=o(67831);let c=(()=>{class r{constructor(e,t,f=0,s,i){this.TypedArrayConstructor=e,this.elementCount=2;const u=this.TypedArrayConstructor;void 0===s&&(s=2*u.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:f;this.typedBuffer=null==i?new u(t,n):new u(t,n,(i-f)/u.BYTES_PER_ELEMENT),this.typedBufferStride=s/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}getVec(e,t){return(0,T.s)(t,this.typedBuffer[e*=this.typedBufferStride],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,f){this.typedBuffer[e*this.typedBufferStride+t]=f}setValues(e,t,f){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=f}copyFrom(e,t,f){const s=this.typedBuffer,i=t.typedBuffer;let u=e*this.typedBufferStride,n=f*t.typedBufferStride;s[u++]=i[n++],s[u]=i[n]}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=2,r})();var E=o(84161);let h=(()=>{class r{constructor(e,t,f=0,s,i){this.TypedArrayConstructor=e,this.elementCount=3;const u=this.TypedArrayConstructor;void 0===s&&(s=3*u.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:f;this.typedBuffer=null==i?new u(t,n):new u(t,n,(i-f)/u.BYTES_PER_ELEMENT),this.typedBufferStride=s/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}getVec(e,t){return(0,E.s)(t,this.typedBuffer[e*=this.typedBufferStride],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,f){this.typedBuffer[e*this.typedBufferStride+t]=f}setValues(e,t,f,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=f,this.typedBuffer[e]=s}copyFrom(e,t,f){const s=this.typedBuffer,i=t.typedBuffer;let u=e*this.typedBufferStride,n=f*t.typedBufferStride;s[u++]=i[n++],s[u++]=i[n++],s[u]=i[n]}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=3,r})();var m=o(993);let d=(()=>{class r{constructor(e,t,f=0,s,i){this.TypedArrayConstructor=e,this.start=f,this.elementCount=4;const u=this.TypedArrayConstructor;void 0===s&&(s=4*u.BYTES_PER_ELEMENT);const n=0===t.byteLength?0:f;this.typedBuffer=null==i?new u(t,n):new u(t,n,(i-f)/u.BYTES_PER_ELEMENT),this.typedBufferStride=s/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,m.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,f){this.typedBuffer[e*this.typedBufferStride+t]=f}setValues(e,t,f,s,i){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=f,this.typedBuffer[e++]=s,this.typedBuffer[e]=i}copyFrom(e,t,f){const s=this.typedBuffer,i=t.typedBuffer;let u=e*this.typedBufferStride,n=f*t.typedBufferStride;s[u++]=i[n++],s[u++]=i[n++],s[u++]=i[n++],s[u]=i[n]}get buffer(){return this.typedBuffer.buffer}}return r.ElementCount=4,r})(),A=(()=>{class r extends y{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),O=(()=>{class r extends c{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),S=(()=>{class r extends h{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),g=(()=>{class r extends d{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),L=(()=>{class r extends a{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),w=(()=>{class r extends a{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),x=(()=>{class r extends B{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f32",r})(),M=(()=>{class r extends B{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),C=(()=>{class r extends y{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),P=(()=>{class r extends c{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),N=(()=>{class r extends h{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),R=(()=>{class r extends d{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="f64",r})(),Y=(()=>{class r extends y{constructor(e,t=0,f,s){super(Uint8Array,e,t,f,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u8",r})(),F=(()=>{class r extends c{constructor(e,t=0,f,s){super(Uint8Array,e,t,f,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u8",r})(),v=(()=>{class r extends h{constructor(e,t=0,f,s){super(Uint8Array,e,t,f,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u8",r})(),I=(()=>{class r extends d{constructor(e,t=0,f,s){super(Uint8Array,e,t,f,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u8",r})(),U=(()=>{class r extends y{constructor(e,t=0,f,s){super(Uint16Array,e,t,f,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u16",r})(),V=(()=>{class r extends c{constructor(e,t=0,f,s){super(Uint16Array,e,t,f,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u16",r})(),k=(()=>{class r extends h{constructor(e,t=0,f,s){super(Uint16Array,e,t,f,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u16",r})(),j=(()=>{class r extends d{constructor(e,t=0,f,s){super(Uint16Array,e,t,f,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u16",r})(),z=(()=>{class r extends y{constructor(e,t=0,f,s){super(Uint32Array,e,t,f,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u32",r})(),D=(()=>{class r extends c{constructor(e,t=0,f,s){super(Uint32Array,e,t,f,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u32",r})(),G=(()=>{class r extends h{constructor(e,t=0,f,s){super(Uint32Array,e,t,f,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u32",r})(),H=(()=>{class r extends d{constructor(e,t=0,f,s){super(Uint32Array,e,t,f,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="u32",r})(),J=(()=>{class r extends y{constructor(e,t=0,f,s){super(Int8Array,e,t,f,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i8",r})(),K=(()=>{class r extends c{constructor(e,t=0,f,s){super(Int8Array,e,t,f,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i8",r})(),Q=(()=>{class r extends h{constructor(e,t=0,f,s){super(Int8Array,e,t,f,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i8",r})(),W=(()=>{class r extends d{constructor(e,t=0,f,s){super(Int8Array,e,t,f,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i8",r})(),X=(()=>{class r extends y{constructor(e,t=0,f,s){super(Int16Array,e,t,f,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i16",r})(),Z=(()=>{class r extends c{constructor(e,t=0,f,s){super(Int16Array,e,t,f,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i16",r})(),$=(()=>{class r extends h{constructor(e,t=0,f,s){super(Int16Array,e,t,f,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i16",r})(),q=(()=>{class r extends d{constructor(e,t=0,f,s){super(Int16Array,e,t,f,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i16",r})(),_=(()=>{class r extends y{constructor(e,t=0,f,s){super(Int32Array,e,t,f,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i32",r})(),ee=(()=>{class r extends c{constructor(e,t=0,f,s){super(Int32Array,e,t,f,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i32",r})(),te=(()=>{class r extends h{constructor(e,t=0,f,s){super(Int32Array,e,t,f,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i32",r})(),re=(()=>{class r extends d{constructor(e,t=0,f,s){super(Int32Array,e,t,f,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(r,e,t)}static fromTypedArray(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}return r.ElementType="i32",r})()}}]);