"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[2815],{6879:(st,z,q)=>{q.d(z,{Z:()=>Tt});const V=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["\xab","\xbb"],["\xbb","\xab"],["\u2039","\u203a"],["\u203a","\u2039"],["\u207d","\u207e"],["\u207e","\u207d"],["\u208d","\u208e"],["\u208e","\u208d"],["\u2264","\u2265"],["\u2265","\u2264"],["\u2329","\u232a"],["\u232a","\u2329"],["\ufe59","\ufe5a"],["\ufe5a","\ufe59"],["\ufe5b","\ufe5c"],["\ufe5c","\ufe5b"],["\ufe5d","\ufe5e"],["\ufe5e","\ufe5d"],["\ufe64","\ufe65"],["\ufe65","\ufe64"]],E=["\u0622","\u0623","\u0625","\u0627"],F=["\ufef5","\ufef7","\ufef9","\ufefb"],P=["\ufef6","\ufef8","\ufefa","\ufefc"],I=["\u0627","\u0628","\u062a","\u062b","\u062c","\u062d","\u062e","\u062f","\u0630","\u0631","\u0632","\u0633","\u0634","\u0635","\u0636","\u0637","\u0638","\u0639","\u063a","\u0641","\u0642","\u0643","\u0644","\u0645","\u0646","\u0647","\u0648","\u064a","\u0625","\u0623","\u0622","\u0629","\u0649","\u0644","\u0645","\u0646","\u0647","\u0648","\u064a","\u0625","\u0623","\u0622","\u0629","\u0649","\u06cc","\u0626","\u0624"],j=["\ufe8d","\ufe8f","\ufe95","\ufe99","\ufe9d","\ufea1","\ufea5","\ufea9","\ufeab","\ufead","\ufeaf","\ufeb1","\ufeb5","\ufeb9","\ufebd","\ufec1","\ufec5","\ufec9","\ufecd","\ufed1","\ufed5","\ufed9","\ufedd","\ufee1","\ufee5","\ufee9","\ufeed","\ufef1","\ufe87","\ufe83","\ufe81","\ufe93","\ufeef","\ufbfc","\ufe89","\ufe85","\ufe70","\ufe72","\ufe74","\ufe76","\ufe78","\ufe7a","\ufe7c","\ufe7e","\ufe80","\ufe89","\ufe85"],Q=["\ufe8e","\ufe90","\ufe96","\ufe9a","\ufe9e","\ufea2","\ufea6","\ufeaa","\ufeac","\ufeae","\ufeb0","\ufeb2","\ufeb6","\ufeba","\ufebe","\ufec2","\ufec6","\ufeca","\ufece","\ufed2","\ufed6","\ufeda","\ufede","\ufee2","\ufee6","\ufeea","\ufeee","\ufef2","\ufe88","\ufe84","\ufe82","\ufe94","\ufef0","\ufbfd","\ufe8a","\ufe86","\ufe70","\ufe72","\ufe74","\ufe76","\ufe78","\ufe7a","\ufe7c","\ufe7e","\ufe80","\ufe8a","\ufe86"],N=["\ufe8e","\ufe92","\ufe98","\ufe9c","\ufea0","\ufea4","\ufea8","\ufeaa","\ufeac","\ufeae","\ufeb0","\ufeb4","\ufeb8","\ufebc","\ufec0","\ufec4","\ufec8","\ufecc","\ufed0","\ufed4","\ufed8","\ufedc","\ufee0","\ufee4","\ufee8","\ufeec","\ufeee","\ufef4","\ufe88","\ufe84","\ufe82","\ufe94","\ufef0","\ufbff","\ufe8c","\ufe86","\ufe71","\ufe72","\ufe74","\ufe77","\ufe79","\ufe7b","\ufe7d","\ufe7f","\ufe80","\ufe8c","\ufe86"],D=["\ufe8d","\ufe91","\ufe97","\ufe9b","\ufe9f","\ufea3","\ufea7","\ufea9","\ufeab","\ufead","\ufeaf","\ufeb3","\ufeb7","\ufebb","\ufebf","\ufec3","\ufec7","\ufecb","\ufecf","\ufed3","\ufed7","\ufedb","\ufedf","\ufee3","\ufee7","\ufeeb","\ufeed","\ufef3","\ufe87","\ufe83","\ufe81","\ufe93","\ufeef","\ufbfe","\ufe8b","\ufe85","\ufe70","\ufe72","\ufe74","\ufe76","\ufe78","\ufe7a","\ufe7c","\ufe7e","\ufe80","\ufe8b","\ufe85"],S=["\u0621","\u0622","\u0623","\u0624","\u0625","\u0627","\u0629","\u062f","\u0630","\u0631","\u0632","\u0648","\u0649"],h=["\u064b","\u064b","\u064c","\u061f","\u064d","\u061f","\u064e","\u064e","\u064f","\u064f","\u0650","\u0650","\u0651","\u0651","\u0652","\u0652","\u0621","\u0622","\u0622","\u0623","\u0623","\u0624","\u0624","\u0625","\u0625","\u0626","\u0626","\u0626","\u0626","\u0627","\u0627","\u0628","\u0628","\u0628","\u0628","\u0629","\u0629","\u062a","\u062a","\u062a","\u062a","\u062b","\u062b","\u062b","\u062b","\u062c","\u062c","\u062c","\u062c","\u062d","\u062d","\u062d","\u062d","\u062e","\u062e","\u062e","\u062e","\u062f","\u062f","\u0630","\u0630","\u0631","\u0631","\u0632","\u0632","\u0633","\u0633","\u0633","\u0633","\u0634","\u0634","\u0634","\u0634","\u0635","\u0635","\u0635","\u0635","\u0636","\u0636","\u0636","\u0636","\u0637","\u0637","\u0637","\u0637","\u0638","\u0638","\u0638","\u0638","\u0639","\u0639","\u0639","\u0639","\u063a","\u063a","\u063a","\u063a","\u0641","\u0641","\u0641","\u0641","\u0642","\u0642","\u0642","\u0642","\u0643","\u0643","\u0643","\u0643","\u0644","\u0644","\u0644","\u0644","\u0645","\u0645","\u0645","\u0645","\u0646","\u0646","\u0646","\u0646","\u0647","\u0647","\u0647","\u0647","\u0648","\u0648","\u0649","\u0649","\u064a","\u064a","\u064a","\u064a","\ufef5","\ufef6","\ufef7","\ufef8","\ufef9","\ufefa","\ufefb","\ufefc","\u061f","\u061f","\u061f"],a=["\u0621","\u0641"],x=["\u063a","\u064a"],d=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],y=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],s=0,e=1,u=2,T=3,t=4,v=5,U=6,i=7,p=8,w=10,f=11,n=12,g=18,gt=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],C=100,pt=[C+0,s,s,s,s,C+1,C+2,C+3,e,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,C+4,t,t,t,s,t,s,t,s,t,t,t,s,s,t,t,s,s,s,s,s,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,s,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,s,t,t,s,s,t,t,s,s,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,s,s,C+5,i,i,C+6,C+7],dt=[[g,g,g,g,g,g,g,g,g,U,v,U,p,v,g,g,g,g,g,g,g,g,g,g,g,g,g,g,v,v,v,U,p,t,t,f,f,f,t,t,t,t,t,w,9,w,9,9,u,u,u,u,u,u,u,u,u,u,9,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,g,g,g,g,g,g,v,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,9,t,f,f,f,f,t,t,t,t,s,t,t,g,t,t,f,f,u,u,t,s,t,t,t,u,s,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s,s],[s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,s,t,t,t,t,t,t,t,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,e,n,e,n,n,e,n,n,e,n,t,t,t,t,t,t,t,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,t,t,t,t,e,e,e,e,e,t,t,t,t,t,t,t,t,t,t,t],[T,T,T,T,t,t,t,t,i,f,f,i,9,i,t,t,n,n,n,n,n,n,n,n,n,n,n,i,t,t,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,T,T,T,T,T,T,T,T,T,T,f,T,T,i,i,i,n,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,n,n,n,n,n,n,n,T,t,n,n,n,n,n,n,i,i,n,n,t,n,n,n,n,i,i,u,u,u,u,u,u,u,u,u,u,i,i,i,i,i,i],[i,i,i,i,i,i,i,i,i,i,i,i,i,i,t,i,i,n,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,t,t,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,n,n,n,n,n,n,n,n,n,n,n,i,t,t,t,t,t,t,t,t,t,t,t,t,t,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,n,n,n,n,n,n,n,n,n,e,e,t,t,t,t,e,t,t,t,t,t],[p,p,p,p,p,p,p,p,p,p,p,g,g,g,s,e,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,p,v,13,14,15,16,17,9,f,f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,9,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,p,g,g,g,g,g,t,t,t,t,t,g,g,g,g,g,g,u,s,t,t,u,u,u,u,u,u,w,w,t,t,t,s,u,u,u,u,u,u,u,u,u,u,w,w,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],[s,s,s,s,s,s,s,t,t,t,t,t,t,t,t,t,t,t,t,s,s,s,s,s,t,t,t,t,t,e,n,e,e,e,e,e,e,e,e,e,e,w,e,e,e,e,e,e,e,e,e,e,e,e,e,t,e,e,e,e,e,t,e,t,e,e,t,e,e,t,e,e,e,e,e,e,e,e,e,e,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i],[n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,n,n,n,n,n,n,n,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,9,t,9,t,t,9,t,t,t,t,t,t,t,t,t,f,t,t,w,w,t,t,t,t,t,f,f,t,t,t,t,t,i,i,i,i,i,t,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,t,t,g],[t,t,t,f,f,f,t,t,t,t,t,w,9,w,9,9,u,u,u,u,u,u,u,u,u,u,9,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,t,t,t,t,t,t,t,t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t,t,t,s,s,s,s,s,s,t,t,s,s,s,s,s,s,t,t,s,s,s,s,s,s,t,t,s,s,s,t,t,t,f,f,t,t,t,f,f,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t]];class Tt{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(r,_,l){if(this.sourceToTarget=[],this.targetToSource=[],!r)return"";if(function Vt(o,r,_){k=[],it=[];for(let l=0;l<_;l++)o[l]=l,r[l]=l,k[l]=l}(this.sourceToTarget,this.targetToSource,r.length),!this.checkParameters(_,l))return r;l=this.outputFormat;let c=r;const m=Dt,b=lt((_=this.inputFormat).charAt(1)),A=lt(l.charAt(1)),B=("I"===_.charAt(0)?"L":_.charAt(0))+b,R=("I"===l.charAt(0)?"L":l.charAt(0))+A,M=_.charAt(2)+l.charAt(2);m.defInFormat=B,m.defOutFormat=R,m.defSwap=M;const Y=X(r,B,R,M,m);let W=!1;return"R"===l.charAt(1)?W=!0:"C"!==l.charAt(1)&&"D"!==l.charAt(1)||(W="rtl"===this.checkContextual(Y)),this.sourceToTarget=k,this.targetToSource=function Ct(o){const r=new Array(o.length);for(let _=0;_<o.length;_++)r[o[_]]=_;return r}(this.sourceToTarget),tt=this.targetToSource,c=_.charAt(3)===l.charAt(3)?Y:"S"===l.charAt(3)?function At(o,r,_){if(0===r.length)return"";void 0===o&&(o=!0),void 0===_&&(_=!0);const l=(r=String(r)).split("");let c=0,m=1,b=l.length;o||(c=l.length-1,m=-1,b=1);const A=function bt(o,r,_,l,c){let m=0;const b=[];let A=0;for(let B=r;B*_<l;B+=_)if(at(o[B])||$(o[B])){if("\u0644"===o[B]&&vt(o,B+_,_,l)){o[B]=kt(o[B+_],0===m?F:P),B+=_,It(o,B,_,l),c&&(b[A]=B,A++),m=0;continue}const R=o[B];o[B]=1===m?ot(o,B+_,_,l)?Nt(o[B]):et(o[B],Q):!0===ot(o,B+_,_,l)?et(o[B],D):et(o[B],j),$(R)||(m=1),!0===Mt(R)&&(m=0)}else m=0;return b}(l,c,m,b,_);let B="";for(let R=0;R<l.length;R++)_&&St(A,A.length,R)>-1?(ut(tt,R,!o,-1),k.splice(R,1)):B+=l[R];return B}(W,Y,!0):function Rt(o,r,_){if(0===o.length)return"";void 0===_&&(_=!0),void 0===r&&(r=!0);let l="";const c=(o=String(o)).split("");for(let m=0;m<o.length;m++){let b=!1;if(c[m]>="\ufe70"&&c[m]<"\ufeff"){const A=o.charCodeAt(m);c[m]>="\ufef5"&&c[m]<="\ufefc"?(r?(m>0&&_&&" "===c[m-1]?l=l.substring(0,l.length-1)+"\u0644":(l+="\u0644",b=!0),l+=E[(A-65269)/2]):(l+=E[(A-65269)/2],l+="\u0644",m+1<o.length&&_&&" "===c[m+1]?m++:b=!0),b&&(ut(tt,m,!0,1),k.splice(m,0,k[m]))):l+=h[A-65136]}else l+=c[m]}return l}(Y,W,!0),this.sourceToTarget=k,this.targetToSource=tt,this.levels=it,c}_inputFormatSetter(r){if(!ct.test(r))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=r}_outputFormatSetter(r){if(!ct.test(r))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=r}checkParameters(r,_){return r?this._inputFormatSetter(r):r=this.inputFormat,_?this._outputFormatSetter(_):_=this.outputFormat,r!==_}checkContextual(r){let _=K(r);if("ltr"!==_&&"rtl"!==_){try{_=document.dir.toLowerCase()}catch{}"ltr"!==_&&"rtl"!==_&&(_="ltr")}return _}hasBidiChar(r){return qt.test(r)}}function X(o,r,_,l,c){const m=function Lt(o,r,_){if(void 0===r.inFormat&&(r.inFormat=_.defInFormat),void 0===r.outFormat&&(r.outFormat=_.defOutFormat),void 0===r.swap&&(r.swap=_.defSwap),r.inFormat===r.outFormat)return r;const l=r.inFormat.substring(0,1),c=r.outFormat.substring(0,1);let m,b=r.inFormat.substring(1,4),A=r.outFormat.substring(1,4);return"C"===b.charAt(0)&&(m=K(o),b="ltr"===m||"rtl"===m?m.toUpperCase():"L"===r.inFormat.charAt(2)?"LTR":"RTL",r.inFormat=l+b),"C"===A.charAt(0)&&(m=K(o),"rtl"===m?A="RTL":"ltr"===m?(m=function Bt(o){const r=o.split("");return r.reverse(),K(r.join(""))}(o),A=m.toUpperCase()):A="L"===r.outFormat.charAt(2)?"LTR":"RTL",r.outFormat=c+A),r}(o,{inFormat:r,outFormat:_,swap:l},c);if(m.inFormat===m.outFormat)return o;_=m.outFormat,l=m.swap;const b=(r=m.inFormat).substring(0,1),A=r.substring(1,4),B=_.substring(0,1),R=_.substring(1,4);if(c.inFormat=r,c.outFormat=_,c.swap=l,"L"===b&&"VLTR"===_){if("LTR"===A)return c.dir=J,O(o,c);if("RTL"===A)return c.dir=G,O(o,c)}if("V"===b&&"V"===B)return c.dir="RTL"===A?G:J,nt(o,c);if("L"===b&&"VRTL"===_)return"LTR"===A?(c.dir=J,o=O(o,c)):(c.dir=G,o=O(o,c)),nt(o);if("VLTR"===r&&"LLTR"===_)return c.dir=J,O(o,c);if("V"===b&&"L"===B&&A!==R)return o=nt(o),"RTL"===A?X(o,"LLTR","VLTR",l,c):X(o,"LRTL","VRTL",l,c);if("VRTL"===r&&"LRTL"===_)return X(o,"LRTL","VRTL",l,c);if("L"===b&&"L"===B){const M=c.swap;return c.swap=M.substr(0,1)+"N","RTL"===A?(c.dir=G,o=O(o,c),c.swap="N"+M.substr(1,2),c.dir=J,o=O(o,c)):(c.dir=J,o=O(o,c),c.swap="N"+M.substr(1,2),o=X(o,"VLTR","LRTL",c.swap,c)),o}return o}function K(o){const r=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(o);return r?r[0]<="z"?"ltr":"rtl":""}function O(o,r){const _=o.split(""),l=[];return rt(_,l,r),function Ut(o,r,_){if(0!==_.hiLevel&&_.swap.substr(0,1)!==_.swap.substr(1,2))for(let l=0;l<o.length;l++)1===r[l]&&(o[l]=Pt(o[l]))}(_,l,r),_t(2,_,l,r),_t(1,_,l,r),it=l,_.join("")}function rt(o,r,_){const l=o.length,c=_.dir?y:d;let m=0,b=-1;const A=[],B=[];_.hiLevel=_.dir,_.lastArabic=!1,_.hasUbatAl=!1,_.hasUbatB=!1,_.hasUbatS=!1;for(let R=0;R<l;R++)A[R]=Ft(o[R]);for(let R=0;R<l;R++){const M=m,Y=Et(o,A,B,R,_);B[R]=Y,m=c[M][Y];const W=240&m;m&=15;const ht=c[m][Ot];if(r[R]=ht,W>0)if(16===W){for(let Z=b;Z<R;Z++)r[Z]=1;b=-1}else b=-1;if(c[m][zt])-1===b&&(b=R);else if(b>-1){for(let Z=b;Z<R;Z++)r[Z]=ht;b=-1}A[R]===v&&(r[R]=0),_.hiLevel|=ht}_.hasUbatS&&function wt(o,r,_,l){for(let c=0;c<_;c++)if(o[c]===U){r[c]=l.dir;for(let m=c-1;m>=0&&o[m]===p;m--)r[m]=l.dir}}(A,r,l,_)}function Ft(o){const r=o.charCodeAt(0),_=pt[r>>8];return _<C?_:dt[_-C][255&r]}function nt(o,r){const _=o.split("");if(r){const l=[];rt(_,l,r),it=l}return _.reverse(),k.reverse(),_.join("")}function St(o,r,_){for(let l=0;l<r;l++)if(o[l]===_)return l;return-1}function at(o){for(let r=0;r<a.length;r++)if(o>=a[r]&&o<=x[r])return!0;return!1}function ot(o,r,_,l){for(;r*_<l&&$(o[r]);)r+=_;return!!(r*_<l&&at(o[r]))}function vt(o,r,_,l){for(;r*_<l&&$(o[r]);)r+=_;let c=" ";if(!(r*_<l))return!1;c=o[r];for(let m=0;m<E.length;m++)if(E[m]===c)return!0;return!1}function _t(o,r,_,l){if(l.hiLevel<o)return;if(1===o&&l.dir===G&&!l.hasUbatB)return r.reverse(),void k.reverse();const c=r.length;let m,b,A,B,R,M=0;for(;M<c;){if(_[M]>=o){for(m=M+1;m<c&&_[m]>=o;)m++;for(b=M,A=m-1;b<A;b++,A--)B=r[b],r[b]=r[A],r[A]=B,R=k[b],k[b]=k[A],k[A]=R;M=m}M++}}function Et(o,r,_,l,c){return{UBAT_L:()=>(c.lastArabic=!1,s),UBAT_R:()=>(c.lastArabic=!1,e),UBAT_ON:()=>t,UBAT_AN:()=>T,UBAT_EN:()=>c.lastArabic?T:u,UBAT_AL:()=>(c.lastArabic=!0,c.hasUbatAl=!0,e),UBAT_WS:()=>t,UBAT_CS:()=>{let b,A;return l<1||l+1>=r.length||(b=_[l-1])!==u&&b!==T||(A=r[l+1])!==u&&A!==T?t:(c.lastArabic&&(A=T),A===b?A:t)},UBAT_ES:()=>(l>0?_[l-1]:v)===u&&l+1<r.length&&r[l+1]===u?u:t,UBAT_ET:()=>{if(l>0&&_[l-1]===u)return u;if(c.lastArabic)return t;let b=l+1;const A=r.length;for(;b<A&&r[b]===f;)b++;return b<A&&r[b]===u?u:t},UBAT_NSM:()=>{if("VLTR"===c.inFormat){const b=r.length;let A=l+1;for(;A<b&&r[A]===n;)A++;if(A<b){const B=o[l].charCodeAt[0],M=r[A];if((B>=1425&&B<=2303||64286===B)&&(M===e||M===i))return e}}return l<1||r[l-1]===v?t:_[l-1]},UBAT_B:()=>(c.lastArabic=!0,c.hasUbatB=!0,c.dir),UBAT_S:()=>(c.hasUbatS=!0,t),UBAT_LRE:()=>(c.lastArabic=!1,t),UBAT_RLE:()=>(c.lastArabic=!1,t),UBAT_LRO:()=>(c.lastArabic=!1,t),UBAT_RLO:()=>(c.lastArabic=!1,t),UBAT_PDF:()=>(c.lastArabic=!1,t),UBAT_BN:()=>t}[gt[r[l]]]()}function Pt(o){let r,_=0,l=V.length-1;for(;_<=l;)if(r=Math.floor((_+l)/2),o<V[r][0])l=r-1;else{if(!(o>V[r][0]))return V[r][1];_=r+1}return o}function Mt(o){for(let r=0;r<S.length;r++)if(S[r]===o)return!0;return!1}function Nt(o){for(let r=0;r<I.length;r++)if(o===I[r])return N[r];return o}function et(o,r){for(let _=0;_<I.length;_++)if(o===I[_])return r[_];return o}function $(o){return o>="\u064b"&&o<="\u0655"}function lt(o){return"L"===o?"LTR":"R"===o?"RTL":"C"===o?"CLR":"D"===o?"CRL":""}function It(o,r,_,l){for(;r*_<l&&$(o[r]);)r+=_;return r*_<l&&(o[r]=" ",!0)}function kt(o,r){for(let _=0;_<E.length;_++)if(o===E[_])return r[_];return o}function ut(o,r,_,l){for(let c=0;c<o.length;c++)(o[c]>r||!_&&o[c]===r)&&(o[c]+=l)}let k=[],tt=[],it=[];const Dt={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},Ot=5,zt=6,J=0,G=1,ct=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,qt=/[\u0591-\u06ff\ufb1d-\ufefc]/},13160:(st,z,q)=>{var E,F,S;q.d(z,{E9:()=>P,I6:()=>Q,Vl:()=>E,bN:()=>j}),(S=E||(E={}))[S.Unknown=0]="Unknown",S[S.Point=1]="Point",S[S.LineString=2]="LineString",S[S.Polygon=3]="Polygon";class P{constructor(h,a){this.x=h,this.y=a}clone(){return new P(this.x,this.y)}equals(h,a){return h===this.x&&a===this.y}isEqual(h){return h.x===this.x&&h.y===this.y}setCoords(h,a){this.x=h,this.y=a}normalize(){const h=this.x,a=this.y,x=Math.sqrt(h*h+a*a);this.x/=x,this.y/=x}rightPerpendicular(){const h=this.x;this.x=this.y,this.y=-h}move(h,a){this.x+=h,this.y+=a}assign(h){this.x=h.x,this.y=h.y}assignAdd(h,a){this.x=h.x+a.x,this.y=h.y+a.y}assignSub(h,a){this.x=h.x-a.x,this.y=h.y-a.y}rotate(h,a){const x=this.x,d=this.y;this.x=x*h-d*a,this.y=x*a+d*h}scale(h){this.x*=h,this.y*=h}length(){const h=this.x,a=this.y;return Math.sqrt(h*h+a*a)}static distance(h,a){const x=a.x-h.x,d=a.y-h.y;return Math.sqrt(x*x+d*d)}static add(h,a){return new P(h.x+a.x,h.y+a.y)}static sub(h,a){return new P(h.x-a.x,h.y-a.y)}}class I{constructor(h,a,x){this.ratio=h,this.x=a,this.y=x}}class j{constructor(h,a,x,d=8,y=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=d,this._pixelMargin=y,this._tileSize=512*d,this._dz=h,this._yPos=a,this._xPos=x}setPixelMargin(h){h!==this._pixelMargin&&(this._pixelMargin=h,this.setExtent(this._extent))}setExtent(h){this._extent=h,this._finalRatio=this._tileSize/h*(1<<this._dz);let a=this._pixelRatio*this._pixelMargin;a/=this._finalRatio;const x=h>>this._dz;a>x&&(a=x),this._margin=a,this._xmin=x*this._xPos-a,this._ymin=x*this._yPos-a,this._xmax=this._xmin+x+2*a,this._ymax=this._ymin+x+2*a}reset(h){this._type=h,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(h,a){this._pushLine(),this._prevIsIn=this._isIn(h,a),this._moveTo(h,a,this._prevIsIn),this._prevPt=new P(h,a),this._firstPt=new P(h,a),this._dist=0}lineTo(h,a){const x=this._isIn(h,a),d=new P(h,a),y=P.distance(this._prevPt,d);let s,e,u,T,t,v,U,i;if(x)this._prevIsIn?this._lineTo(h,a,!0):(s=this._prevPt,e=d,u=this._intersect(e,s),this._start=this._dist+y*(1-this._r),this._lineTo(u.x,u.y,!0),this._lineTo(e.x,e.y,!0));else if(this._prevIsIn)e=this._prevPt,s=d,u=this._intersect(e,s),this._lineTo(u.x,u.y,!0),this._lineTo(s.x,s.y,!1);else{const p=this._prevPt,L=d;if(p.x<=this._xmin&&L.x<=this._xmin||p.x>=this._xmax&&L.x>=this._xmax||p.y<=this._ymin&&L.y<=this._ymin||p.y>=this._ymax&&L.y>=this._ymax)this._lineTo(L.x,L.y,!1);else{const w=[];if((p.x<this._xmin&&L.x>this._xmin||p.x>this._xmin&&L.x<this._xmin)&&(T=(this._xmin-p.x)/(L.x-p.x),i=p.y+T*(L.y-p.y),i<=this._ymin?v=!1:i>=this._ymax?v=!0:w.push(new I(T,this._xmin,i))),(p.x<this._xmax&&L.x>this._xmax||p.x>this._xmax&&L.x<this._xmax)&&(T=(this._xmax-p.x)/(L.x-p.x),i=p.y+T*(L.y-p.y),i<=this._ymin?v=!1:i>=this._ymax?v=!0:w.push(new I(T,this._xmax,i))),(p.y<this._ymin&&L.y>this._ymin||p.y>this._ymin&&L.y<this._ymin)&&(T=(this._ymin-p.y)/(L.y-p.y),U=p.x+T*(L.x-p.x),U<=this._xmin?t=!1:U>=this._xmax?t=!0:w.push(new I(T,U,this._ymin))),(p.y<this._ymax&&L.y>this._ymax||p.y>this._ymax&&L.y<this._ymax)&&(T=(this._ymax-p.y)/(L.y-p.y),U=p.x+T*(L.x-p.x),U<=this._xmin?t=!1:U>=this._xmax?t=!0:w.push(new I(T,U,this._ymax))),0===w.length)this._lineTo(t?this._xmax:this._xmin,v?this._ymax:this._ymin,!0);else if(w.length>1&&w[0].ratio>w[1].ratio)this._start=this._dist+y*w[1].ratio,this._lineTo(w[1].x,w[1].y,!0),this._lineTo(w[0].x,w[0].y,!0);else{this._start=this._dist+y*w[0].ratio;for(let f=0;f<w.length;f++)this._lineTo(w[f].x,w[f].y,!0)}this._lineTo(L.x,L.y,!1)}}this._dist+=y,this._prevIsIn=x,this._prevPt=d}close(){if(this._line.length>2){const h=this._firstPt,a=this._prevPt;h.x===a.x&&h.y===a.y||this.lineTo(h.x,h.y);const x=this._line;let d=x.length;for(;d>=4&&(x[0].x===x[1].x&&x[0].x===x[d-2].x||x[0].y===x[1].y&&x[0].y===x[d-2].y);)x.pop(),x[0].x=x[d-2].x,x[0].y=x[d-2].y,--d}}result(h=!0){return this._pushLine(),0===this._lines.length?null:(this._type===E.Polygon&&h&&N.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==E.LineString)throw new Error("Only valid for lines");this._pushLine();const h=this._lines,a=h.length;if(0===a)return null;const x=[];for(let d=0;d<a;d++)x.push({line:h[d],start:this._starts[d]||0});return x}_isIn(h,a){return h>=this._xmin&&h<=this._xmax&&a>=this._ymin&&a<=this._ymax}_intersect(h,a){let x,d,y;if(a.x>=this._xmin&&a.x<=this._xmax)d=a.y<=this._ymin?this._ymin:this._ymax,y=(d-h.y)/(a.y-h.y),x=h.x+y*(a.x-h.x);else if(a.y>=this._ymin&&a.y<=this._ymax)x=a.x<=this._xmin?this._xmin:this._xmax,y=(x-h.x)/(a.x-h.x),d=h.y+y*(a.y-h.y);else{d=a.y<=this._ymin?this._ymin:this._ymax,x=a.x<=this._xmin?this._xmin:this._xmax;const s=(x-h.x)/(a.x-h.x),e=(d-h.y)/(a.y-h.y);s<e?(y=s,d=h.y+s*(a.y-h.y)):(y=e,x=h.x+e*(a.x-h.x))}return this._r=y,new P(x,d)}_pushLine(){this._line&&(this._type===E.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===E.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===E.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(h,a,x){this._type!==E.Polygon?x&&(h=Math.round((h-(this._xmin+this._margin))*this._finalRatio),a=Math.round((a-(this._ymin+this._margin))*this._finalRatio),this._line.push(new P(h,a))):(x||(h<this._xmin&&(h=this._xmin),h>this._xmax&&(h=this._xmax),a<this._ymin&&(a=this._ymin),a>this._ymax&&(a=this._ymax)),h=Math.round((h-(this._xmin+this._margin))*this._finalRatio),a=Math.round((a-(this._ymin+this._margin))*this._finalRatio),this._line.push(new P(h,a)),this._isH=!1,this._isV=!1)}_lineTo(h,a,x){let d,y;if(this._type!==E.Polygon)if(x){if(h=Math.round((h-(this._xmin+this._margin))*this._finalRatio),a=Math.round((a-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(d=this._line[this._line.length-1],d.equals(h,a)))return;this._line.push(new P(h,a))}else this._line&&this._line.length>0&&this._pushLine();else if(x||(h<this._xmin&&(h=this._xmin),h>this._xmax&&(h=this._xmax),a<this._ymin&&(a=this._ymin),a>this._ymax&&(a=this._ymax)),h=Math.round((h-(this._xmin+this._margin))*this._finalRatio),a=Math.round((a-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){d=this._line[this._line.length-1];const s=d.x===h,e=d.y===a;if(s&&e)return;this._isH&&s||this._isV&&e?(d.x=h,d.y=a,y=this._line[this._line.length-2],y.x===h&&y.y===a?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(y=this._line[this._line.length-2],this._isH=y.x===h,this._isV=y.y===a)):(this._isH=y.x===h,this._isV=y.y===a)):(this._line.push(new P(h,a)),this._isH=s,this._isV=e)}else this._line.push(new P(h,a))}}class Q{setExtent(h){this._ratio=4096===h?1:4096/h}get validateTessellation(){return this._ratio<1}reset(h){this._lines=[],this._line=null}moveTo(h,a){this._line&&this._lines.push(this._line),this._line=[];const x=this._ratio;this._line.push(new P(h*x,a*x))}lineTo(h,a){const x=this._ratio;this._line.push(new P(h*x,a*x))}close(){const h=this._line;h&&!h[0].isEqual(h[h.length-1])&&h.push(h[0])}result(){return this._line&&this._lines.push(this._line),0===this._lines.length?null:this._lines}}!function(S){S[S.sideLeft=0]="sideLeft",S[S.sideRight=1]="sideRight",S[S.sideTop=2]="sideTop",S[S.sideBottom=3]="sideBottom"}(F||(F={}));class N{static simplify(h,a,x){if(!x)return;const d=-a,y=h+a,s=-a,e=h+a,u=[],T=[],t=x.length;for(let U=0;U<t;++U){const i=x[U];if(!i||i.length<2)continue;let p,L=i[0];const w=i.length;for(let f=1;f<w;++f)p=i[f],L.x===p.x&&(L.x<=d&&(L.y>p.y?(u.push(U),u.push(f),u.push(F.sideLeft),u.push(-1)):(T.push(U),T.push(f),T.push(F.sideLeft),T.push(-1))),L.x>=y&&(L.y<p.y?(u.push(U),u.push(f),u.push(F.sideRight),u.push(-1)):(T.push(U),T.push(f),T.push(F.sideRight),T.push(-1)))),L.y===p.y&&(L.y<=s&&(L.x<p.x?(u.push(U),u.push(f),u.push(F.sideTop),u.push(-1)):(T.push(U),T.push(f),T.push(F.sideTop),T.push(-1))),L.y>=e&&(L.x>p.x?(u.push(U),u.push(f),u.push(F.sideBottom),u.push(-1)):(T.push(U),T.push(f),T.push(F.sideBottom),T.push(-1)))),L=p}if(0===u.length||0===T.length)return;N.fillParent(x,T,u),N.fillParent(x,u,T);const v=[];N.calcDeltas(v,T,u),N.calcDeltas(v,u,T),N.addDeltas(v,x)}static fillParent(h,a,x){const d=x.length,y=a.length;for(let s=0;s<y;s+=4){const e=a[s],u=a[s+1],T=a[s+2],t=h[e][u-1],v=h[e][u];let U=8092,i=-1;for(let p=0;p<d;p+=4){if(x[p+2]!==T)continue;const L=x[p],w=x[p+1],f=h[L][w-1],n=h[L][w];switch(T){case F.sideLeft:case F.sideRight:if(D(t.y,f.y,n.y)&&D(v.y,f.y,n.y)){const H=Math.abs(n.y-f.y);H<U&&(U=H,i=p)}break;case F.sideTop:case F.sideBottom:if(D(t.x,f.x,n.x)&&D(v.x,f.x,n.x)){const H=Math.abs(n.x-f.x);H<U&&(U=H,i=p)}}}a[s+3]=i}}static calcDeltas(h,a,x){const d=a.length;for(let y=0;y<d;y+=4){const e=N.calcDelta(y,a,x,[]);h.push(a[y]),h.push(a[y+1]),h.push(a[y+2]),h.push(e)}}static calcDelta(h,a,x,d){const y=a[h+3];if(-1===y)return 0;const s=d.length;return s>1&&d[s-2]===y?0:(d.push(y),N.calcDelta(y,x,a,d)+1)}static addDeltas(h,a){const x=h.length;let d=0;for(let y=0;y<x;y+=4){const s=h[y+3];s>d&&(d=s)}for(let y=0;y<x;y+=4){const s=a[h[y]],e=h[y+1],u=d-h[y+3];switch(h[y+2]){case F.sideLeft:s[e-1].x-=u,s[e].x-=u,1===e&&(s[s.length-1].x-=u),e===s.length-1&&(s[0].x-=u);break;case F.sideRight:s[e-1].x+=u,s[e].x+=u,1===e&&(s[s.length-1].x+=u),e===s.length-1&&(s[0].x+=u);break;case F.sideTop:s[e-1].y-=u,s[e].y-=u,1===e&&(s[s.length-1].y-=u),e===s.length-1&&(s[0].y-=u);break;case F.sideBottom:s[e-1].y+=u,s[e].y+=u,1===e&&(s[s.length-1].y+=u),e===s.length-1&&(s[0].y+=u)}}}}const D=(S,h,a)=>S>=h&&S<=a||S>=a&&S<=h},86575:(st,z,q)=>{q.d(z,{B1:()=>V,DQ:()=>N,DT:()=>j,JJ:()=>E,Or:()=>D,_U:()=>F,k3:()=>h,sX:()=>x});const V=Number.POSITIVE_INFINITY,E=Math.PI,F=2*E,P=128/E,j=E/180,Q=1/Math.LN2;function N(y,s){return(y%=s)>=0?y:y+s}function D(y){return N(y*P,256)}function h(y){return Math.log(y)*Q}function x(y,s,e){return y*(1-e)+s*e}},84439:(st,z,q)=>{q.d(z,{Z:()=>V});class V{constructor(F=0,P=0,I=0,j=0){this.x=F,this.y=P,this.width=I,this.height=j}get isEmpty(){return this.width<=0||this.height<=0}union(F){this.x=Math.min(this.x,F.x),this.y=Math.min(this.y,F.y),this.width=Math.max(this.width,F.width),this.height=Math.max(this.height,F.height)}}}}]);