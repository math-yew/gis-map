"use strict";(self.webpackChunkarcgis=self.webpackChunkarcgis||[]).push([[8346],{48346:(A,b,a)=>{a.d(b,{A:()=>m,d:()=>g});var n=a(15861),e=a(76210),o=a(46203),d=a(23504),y=a(18564),c=a(24189),u=a(23663),E=a(22757),h=a(66554),k=a(98635),C=a(85589);const m=(0,e.GH)(class extends e.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.mutationObserver=(0,E.c)("mutation",()=>(0,e.xE)(this)),this.guid=`calcite-action-${(0,d.g)()}`,this.indicatorId=`${this.guid}-indicator`,this.buttonId=`${this.guid}-button`,this.handleTooltipSlotChange=t=>{const r=t.target.assignedElements({flatten:!0}).filter(l=>l?.matches("calcite-tooltip"))[0];r&&(r.referenceElement=this.buttonEl)},this.active=!1,this.alignment=void 0,this.appearance="solid",this.compact=!1,this.disabled=!1,this.icon=void 0,this.iconFlipRtl=!1,this.indicator=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0}onMessagesChange(){}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}connectedCallback(){(0,u.c)(this),(0,h.c)(this),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}componentWillLoad(){var t=this;return(0,n.Z)(function*(){(0,c.a)(t),e.Z5.isBrowser&&(yield(0,h.s)(t))})()}componentDidLoad(){(0,c.s)(this)}disconnectedCallback(){(0,u.d)(this),(0,h.d)(this),this.mutationObserver?.disconnect()}componentDidRender(){(0,y.u)(this)}setFocus(){var t=this;return(0,n.Z)(function*(){yield(0,c.c)(t),t.buttonEl?.focus()})()}renderTextContainer(){const{text:t,textEnabled:i}=this;return t?(0,e.h)("div",{class:{"text-container":!0,"text-container--visible":i},key:"text-container"},t):null}renderIndicatorText(){const{indicator:t,messages:i,indicatorId:r,buttonId:l}=this;return(0,e.h)("div",{"aria-labelledby":l,"aria-live":"polite",class:"indicator-text",id:r,role:"region"},t?i.indicator:null)}renderIconContainer(){const{loading:t,icon:i,scale:r,el:l,iconFlipRtl:p}=this,v="l"===r?"m":"s",f=t?(0,e.h)("calcite-loader",{inline:!0,label:this.messages.loading,scale:"l"===r?"l":"m"}):null,x=i?(0,e.h)("calcite-icon",{flipRtl:p,icon:i,scale:v}):null,z=f||x,M=z||l.children?.length,O=(0,e.h)("div",{class:{"slot-container":!0,"slot-container--hidden":t}},(0,e.h)("slot",null));return M?(0,e.h)("div",{"aria-hidden":"true",class:"icon-container",key:"icon-container"},z,O):null}render(){const{active:t,compact:i,disabled:r,loading:l,textEnabled:p,label:v,text:_,indicator:f,indicatorId:x,buttonId:z,messages:M}=this,O=`${v||_}${f?` (${M.indicator})`:""}`,L={button:!0,"button--text-visible":p,"button--compact":i};return(0,e.h)(e.AA,null,(0,e.h)("button",{"aria-busy":(0,o.t)(l),"aria-controls":f?x:null,"aria-disabled":(0,o.t)(r),"aria-label":O,"aria-pressed":(0,o.t)(t),class:L,disabled:r,id:z,ref:P=>this.buttonEl=P},this.renderIconContainer(),this.renderTextContainer()),(0,e.h)("slot",{name:"tooltip",onSlotchange:this.handleTooltipSlotChange}),this.renderIndicatorText())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return'@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-ui-foreground-1);fill:var(--calcite-ui-text-3);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([active]) .button:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:transparent;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=transparent]) .button,:host([active][appearance=transparent]) .button:hover,:host([active][appearance=transparent]) .button:focus{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([appearance=transparent][loading]) .button,:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:var(--calcite-ui-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-ui-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-ui-foreground-1);opacity:var(--calcite-ui-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-ui-foreground-3);opacity:var(--calcite-ui-opacity-disabled)}:host([indicator]) .button::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;border-width:2px;background-color:var(--calcite-action-indicator-color);border-color:var(--calcite-ui-foreground-1);inset-block-end:0.75rem;inset-inline-end:0.75rem}:host([indicator]) .button--text-visible::after{inset-block-end:auto}:host([indicator]) .button--text-visible .text-container--visible{margin-inline-end:1rem}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][scale=s]) .button::after{inset-block-end:0.25rem;inset-inline-end:0.25rem}:host([indicator][scale=s]) .button--text-visible::after{inset-block-end:auto;inset-inline-end:0.5rem}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}'}},[1,"calcite-action",{active:[516],alignment:[513],appearance:[513],compact:[516],disabled:[516],icon:[1],iconFlipRtl:[516,"icon-flip-rtl"],indicator:[516],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);function g(){typeof customElements>"u"||["calcite-action","calcite-icon","calcite-loader"].forEach(i=>{switch(i){case"calcite-action":customElements.get(i)||customElements.define(i,m);break;case"calcite-icon":customElements.get(i)||(0,k.d)();break;case"calcite-loader":customElements.get(i)||(0,C.d)()}})}g()},18564:(A,b,a)=>{function n(){}function e(o,d=!1){if(o.disabled)return o.el.setAttribute("tabindex","-1"),o.el.setAttribute("aria-disabled","true"),o.el.contains(document.activeElement)&&document.activeElement.blur(),void(o.el.click=n);o.el.click=HTMLElement.prototype.click,"function"==typeof d?o.el.setAttribute("tabindex",d.call(o)?"0":"-1"):!0===d?o.el.setAttribute("tabindex","0"):!1===d&&o.el.removeAttribute("tabindex"),o.el.removeAttribute("aria-disabled")}a.d(b,{u:()=>e})},85589:(A,b,a)=>{a.d(b,{d:()=>y});var n=a(76210),e=a(23504);const d=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inline=!1,this.label=void 0,this.scale="m",this.type=void 0,this.value=0,this.text=""}render(){const{el:c,inline:u,label:E,scale:h,text:k,type:C,value:s}=this,w=c.id||(0,e.g)(),m=u?this.getInlineSize(h):this.getSize(h),g=.45*m,t=`0 0 ${m} ${m}`,i="determinate"===C,r=2*g*Math.PI,l=s/100*r,p=r-l,v=Math.floor(s),f={r:g,cx:m/2,cy:m/2},x={"stroke-dasharray":`${l} ${p}`};return(0,n.h)(n.AA,{"aria-label":E,id:w,role:"progressbar",...i?{"aria-valuenow":v,"aria-valuemin":0,"aria-valuemax":100,complete:100===v}:{}},(0,n.h)("div",{class:"loader__svgs"},(0,n.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:t},(0,n.h)("circle",{...f})),(0,n.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:t},(0,n.h)("circle",{...f})),(0,n.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:t,...i?{style:x}:{}},(0,n.h)("circle",{...f}))),k&&(0,n.h)("div",{class:"loader__text"},k),i&&(0,n.h)("div",{class:"loader__percentage"},s))}getSize(c){return{s:32,m:56,l:80}[c]}getInlineSize(c){return{s:12,m:16,l:20}[c]}get el(){return this}static get style(){return'@charset "UTF-8";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) * 2) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);transform:scale(1, 1)}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear;animation-name:loader-clockwise}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444% 139.6262222222%;animation-duration:calc(var(--calcite-internal-animation-timing-slow) * 2.4)}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-83.7757333333%}100%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:-279.2524444444%}}.loader__svg--2{stroke-dasharray:55.8504888889% 139.6262222222%;animation-duration:calc(var(--calcite-internal-animation-timing-slow) * 3.2)}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-97.7383555556%}100%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:-279.2524444444%}}.loader__svg--3{stroke-dasharray:13.9626222222% 139.6262222222%;animation-duration:calc(var(--calcite-internal-animation-timing-slow) * 3.867)}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-76.7944222222%}100%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}'}},[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function y(){typeof customElements>"u"||["calcite-loader"].forEach(u=>{"calcite-loader"===u&&(customElements.get(u)||customElements.define(u,d))})}y()}}]);