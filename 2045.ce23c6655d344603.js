"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[2045],{72045:(Mn,C,U)=>{U.r(C),U.d(C,{l:()=>an});var y,x={};y=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,typeof __filename<"u"&&(y=y||__filename),{get exports(){return x},set exports(e){x=e}}.exports=function(e){var w,m;(e=void 0!==(e=e||{})?e:{}).ready=new Promise(function(n,t){w=n,m=t});var p,f,h,D,E,H,B=Object.assign({},e),z="object"==typeof window,b="function"==typeof importScripts,L="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,c="";L?(c=b?require("path").dirname(c)+"/":__dirname+"/",H=()=>{E||(D=require("fs"),E=require("path"))},p=function(n,t){return H(),n=E.normalize(n),D.readFileSync(n,t?void 0:"utf8")},h=n=>{var t=p(n,!0);return t.buffer||(t=new Uint8Array(t)),t},f=(n,t,r)=>{H(),n=E.normalize(n),D.readFile(n,function(o,s){o?r(o):t(s.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(n){if(!(n instanceof Hn))throw n}),process.on("unhandledRejection",function(n){throw n}),e.inspect=function(){return"[Emscripten Module object]"}):(z||b)&&(b?c=self.location.href:typeof document<"u"&&document.currentScript&&(c=document.currentScript.src),y&&(c=y),c=0!==c.indexOf("blob:")?c.substr(0,c.replace(/[?#].*/,"").lastIndexOf("/")+1):"",p=n=>{var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},b&&(h=n=>{var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),f=(n,t,r)=>{var o=new XMLHttpRequest;o.open("GET",n,!0),o.responseType="arraybuffer",o.onload=()=>{200==o.status||0==o.status&&o.response?t(o.response):r()},o.onerror=r,o.send(null)}),e.print||console.log.bind(console);var v,M,A=e.printErr||console.warn.bind(console);Object.assign(e,B),B=null,e.wasmBinary&&(v=e.wasmBinary),"object"!=typeof WebAssembly&&P("no native wasm support detected");var G,R,I,g,d,X,N=!1,Y=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function O(n,t){return n?function fn(n,t,r){for(var o=t+r,s=t;n[s]&&!(s>=o);)++s;if(s-t>16&&n.buffer&&Y)return Y.decode(n.subarray(t,s));for(var u="";t<s;){var i=n[t++];if(128&i){var l=63&n[t++];if(192!=(224&i)){var on=63&n[t++];if((i=224==(240&i)?(15&i)<<12|l<<6|on:(7&i)<<18|l<<12|on<<6|63&n[t++])<65536)u+=String.fromCharCode(i);else{var un=i-65536;u+=String.fromCharCode(55296|un>>10,56320|1023&un)}}else u+=String.fromCharCode((31&i)<<6|l)}else u+=String.fromCharCode(i)}return u}(I,n,t):""}function J(n){G=n,e.HEAP8=R=new Int8Array(n),e.HEAP16=new Int16Array(n),e.HEAP32=g=new Int32Array(n),e.HEAPU8=I=new Uint8Array(n),e.HEAPU16=new Uint16Array(n),e.HEAPU32=d=new Uint32Array(n),e.HEAPF32=new Float32Array(n),e.HEAPF64=new Float64Array(n)}var K=[],Q=[],V=[],_=0,S=null;function P(n){e.onAbort&&e.onAbort(n),A(n="Aborted("+n+")"),N=!0,n+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(n);throw m(t),t}var a,wn="data:application/octet-stream;base64,";function Z(n){return n.startsWith(wn)}function $(n){return n.startsWith("file://")}function nn(n){try{if(n==a&&v)return new Uint8Array(v);if(h)return h(n);throw"both async and sync fetching of the wasm failed"}catch(t){P(t)}}function W(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var r=t.func;"number"==typeof r?void 0===t.arg?en(r)():en(r)(t.arg):r(void 0===t.arg?null:t.arg)}else t(e)}}Z(a="lerc-wasm.wasm")||(a=function cn(n){return e.locateFile?e.locateFile(n,c):c+n}(a));var j=[];function en(n){var t=j[n];return t||(n>=j.length&&(j.length=n+1),j[n]=t=X.get(n)),t}function Sn(n){this.excPtr=n,this.ptr=n-24,this.set_type=function(t){d[this.ptr+4>>2]=t},this.get_type=function(){return d[this.ptr+4>>2]},this.set_destructor=function(t){d[this.ptr+8>>2]=t},this.get_destructor=function(){return d[this.ptr+8>>2]},this.set_refcount=function(t){g[this.ptr>>2]=t},this.set_caught=function(t){R[this.ptr+12>>0]=t=t?1:0},this.get_caught=function(){return 0!=R[this.ptr+12>>0]},this.set_rethrown=function(t){R[this.ptr+13>>0]=t=t?1:0},this.get_rethrown=function(){return 0!=R[this.ptr+13>>0]},this.init=function(t,r){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){g[this.ptr>>2]=g[this.ptr>>2]+1},this.release_ref=function(){var t=g[this.ptr>>2];return g[this.ptr>>2]=t-1,1===t},this.set_adjusted_ptr=function(t){d[this.ptr+16>>2]=t},this.get_adjusted_ptr=function(){return d[this.ptr+16>>2]},this.get_exception_ptr=function(){if(rn(this.get_type()))return d[this.excPtr>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.excPtr}}function jn(n){try{return M.grow(n-G.byteLength+65535>>>16),J(M.buffer),1}catch{}}var Dn={a:function An(n,t,r,o){P("Assertion failed: "+O(n)+", at: "+[t?O(t):"unknown filename",r,o?O(o):"unknown function"])},c:function Rn(n){return tn(n+24)+24},b:function Pn(n,t,r){throw new Sn(n).init(t,r),n},d:function xn(){P("")},f:function En(n,t,r){I.copyWithin(n,t,t+r)},e:function Tn(n){var i,t=I.length,r=2147483648;if((n>>>=0)>r)return!1;for(var s=1;s<=4;s*=2){var u=t*(1+.2/s);if(u=Math.min(u,n+100663296),jn(Math.min(r,(i=Math.max(n,u))+(65536-i%65536)%65536)))return!0}return!1}};(function vn(){var n={a:Dn};function t(u,i){e.asm=u.exports,J((M=e.asm.g).buffer),X=e.asm.m,function mn(n){Q.unshift(n)}(e.asm.h),function yn(n){if(_--,e.monitorRunDependencies&&e.monitorRunDependencies(_),0==_&&S){var t=S;S=null,t()}}()}function r(u){t(u.instance)}function o(u){return function bn(){if(!v&&(z||b)){if("function"==typeof fetch&&!$(a))return fetch(a,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+a+"'";return n.arrayBuffer()}).catch(function(){return nn(a)});if(f)return new Promise(function(n,t){f(a,function(r){n(new Uint8Array(r))},t)})}return Promise.resolve().then(function(){return nn(a)})}().then(function(i){return WebAssembly.instantiate(i,n)}).then(function(i){return i}).then(u,function(i){A("failed to asynchronously prepare wasm: "+i),P(i)})}if(function gn(n){_++,e.monitorRunDependencies&&e.monitorRunDependencies(_)}(),e.instantiateWasm)try{return e.instantiateWasm(n,t)}catch(u){return A("Module.instantiateWasm callback failed with error: "+u),!1}(function s(){return v||"function"!=typeof WebAssembly.instantiateStreaming||Z(a)||$(a)||L||"function"!=typeof fetch?o(r):fetch(a,{credentials:"same-origin"}).then(function(u){return WebAssembly.instantiateStreaming(u,n).then(r,function(i){return A("wasm streaming compile failed: "+i),A("falling back to ArrayBuffer instantiation"),o(r)})})})().catch(m)})(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.h).apply(null,arguments)},e._lerc_getBlobInfo=function(){return(e._lerc_getBlobInfo=e.asm.i).apply(null,arguments)},e._lerc_getDataRanges=function(){return(e._lerc_getDataRanges=e.asm.j).apply(null,arguments)},e._lerc_decode=function(){return(e._lerc_decode=e.asm.k).apply(null,arguments)},e._lerc_decode_4D=function(){return(e._lerc_decode_4D=e.asm.l).apply(null,arguments)};var tn=e._malloc=function(){return(tn=e._malloc=e.asm.n).apply(null,arguments)};e._free=function(){return(e._free=e.asm.o).apply(null,arguments)};var T,rn=e.___cxa_is_pointer_type=function(){return(rn=e.___cxa_is_pointer_type=e.asm.p).apply(null,arguments)};function Hn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function k(n){function t(){T||(T=!0,e.calledRun=!0,N||(function ln(){W(Q)}(),w(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),function hn(){if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)n=e.postRun.shift(),V.unshift(n);var n;W(V)}()))}_>0||(function pn(){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)n=e.preRun.shift(),K.unshift(n);var n;W(K)}(),_>0||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),t()},1)):t()))}if(S=function n(){T||k(),T||(S=n)},e.run=k,e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return k(),e.ready};const an=function sn(e,w){for(var m=0;m<w.length;m++){const p=w[m];if("string"!=typeof p&&!Array.isArray(p))for(const f in p)if("default"!==f&&!(f in e)){const h=Object.getOwnPropertyDescriptor(p,f);h&&Object.defineProperty(e,f,h.get?h:{enumerable:!0,get:()=>p[f]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:x},[x])}}]);