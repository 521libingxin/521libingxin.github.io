(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+QRC":function(U,I,n){"use strict";var d=n("E9nw"),E={"text/plain":"Text","text/html":"Url",default:"Text"},a="Copy to clipboard: #{key}, Enter";function J(z){var b=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return z.replace(/#{\s*key\s*}/g,b)}function w(z,b){var M,ie,pe,Y,X,P,k=!1;b||(b={}),M=b.debug||!1;try{pe=d(),Y=document.createRange(),X=document.getSelection(),P=document.createElement("span"),P.textContent=z,P.style.all="unset",P.style.position="fixed",P.style.top=0,P.style.clip="rect(0, 0, 0, 0)",P.style.whiteSpace="pre",P.style.webkitUserSelect="text",P.style.MozUserSelect="text",P.style.msUserSelect="text",P.style.userSelect="text",P.addEventListener("copy",function(C){if(C.stopPropagation(),b.format)if(C.preventDefault(),typeof C.clipboardData=="undefined"){M&&console.warn("unable to use e.clipboardData"),M&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var fe=E[b.format]||E.default;window.clipboardData.setData(fe,z)}else C.clipboardData.clearData(),C.clipboardData.setData(b.format,z);b.onCopy&&(C.preventDefault(),b.onCopy(C.clipboardData))}),document.body.appendChild(P),Y.selectNodeContents(P),X.addRange(Y);var Z=document.execCommand("copy");if(!Z)throw new Error("copy command was unsuccessful");k=!0}catch(C){M&&console.error("unable to copy using execCommand: ",C),M&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(b.format||"text",z),b.onCopy&&b.onCopy(window.clipboardData),k=!0}catch(fe){M&&console.error("unable to copy using clipboardData: ",fe),M&&console.error("falling back to prompt"),ie=J("message"in b?b.message:a),window.prompt(ie,z)}}finally{X&&(typeof X.removeRange=="function"?X.removeRange(Y):X.removeAllRanges()),P&&document.body.removeChild(P),pe()}return k}U.exports=w},"/qDX":function(U,I,n){},"14J3":function(U,I,n){"use strict";var d=n("cIOH"),E=n.n(d),a=n("1GLa")},BMrR:function(U,I,n){"use strict";var d=n("qrJ5");I.a=d.a},E9nw:function(U,I){U.exports=function(){var n=document.getSelection();if(!n.rangeCount)return function(){};for(var d=document.activeElement,E=[],a=0;a<n.rangeCount;a++)E.push(n.getRangeAt(a));switch(d.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":d.blur();break;default:d=null;break}return n.removeAllRanges(),function(){n.type==="Caret"&&n.removeAllRanges(),n.rangeCount||E.forEach(function(J){n.addRange(J)}),d&&d.focus()}}},G3dp:function(U,I,n){"use strict";var d=n("q1tI"),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},a=E,J=n("6VBw"),w=function(M,ie){return d.createElement(J.a,Object.assign({},M,{ref:ie,icon:a}))};w.displayName="EditOutlined";var z=I.a=d.forwardRef(w)},IzEo:function(U,I,n){"use strict";var d=n("cIOH"),E=n.n(d),a=n("lnY3"),J=n.n(a),w=n("Znn+"),z=n("14J3"),b=n("jCWc")},bx4M:function(U,I,n){"use strict";var d=n("rePB"),E=n("wx14"),a=n("q1tI"),J=n("TSYQ"),w=n.n(J),z=n("BGR+"),b=n("H84U"),M=function(y,u){var O={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&u.indexOf(s)<0&&(O[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)u.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(O[s[m]]=y[s[m]]);return O},ie=function(u){var O=u.prefixCls,s=u.className,m=u.hoverable,ve=m===void 0?!0:m,ee=M(u,["prefixCls","className","hoverable"]);return a.createElement(b.a,null,function(te){var le=te.getPrefixCls,oe=le("card",O),Q=w()("".concat(oe,"-grid"),s,Object(d.a)({},"".concat(oe,"-grid-hoverable"),ve));return a.createElement("div",Object(E.a)({},ee,{className:Q}))})},pe=ie,Y=function(y,u){var O={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&u.indexOf(s)<0&&(O[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)u.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(O[s[m]]=y[s[m]]);return O},X=function(u){return a.createElement(b.a,null,function(O){var s=O.getPrefixCls,m=u.prefixCls,ve=u.className,ee=u.avatar,te=u.title,le=u.description,oe=Y(u,["prefixCls","className","avatar","title","description"]),Q=s("card",m),Ce=w()("".concat(Q,"-meta"),ve),se=ee?a.createElement("div",{className:"".concat(Q,"-meta-avatar")},ee):null,ae=te?a.createElement("div",{className:"".concat(Q,"-meta-title")},te):null,ce=le?a.createElement("div",{className:"".concat(Q,"-meta-description")},le):null,xe=ae||ce?a.createElement("div",{className:"".concat(Q,"-meta-detail")},ae,ce):null;return a.createElement("div",Object(E.a)({},oe,{className:Ce}),se,xe)})},P=X,k=n("ZTPi"),Z=n("BMrR"),C=n("kPKH"),fe=n("3Nzz"),ze=function(y,u){var O={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&u.indexOf(s)<0&&(O[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)u.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(O[s[m]]=y[s[m]]);return O};function _e(y){var u=y.map(function(O,s){return a.createElement("li",{style:{width:"".concat(100/y.length,"%")},key:"action-".concat(s)},a.createElement("span",null,O))});return u}var q=function(u){var O,s,m=a.useContext(b.b),ve=m.getPrefixCls,ee=m.direction,te=a.useContext(fe.b),le=function(Oe){u.onTabChange&&u.onTabChange(Oe)},oe=function(){var Oe;return a.Children.forEach(u.children,function(Re){Re&&Re.type&&Re.type===pe&&(Oe=!0)}),Oe},Q=u.prefixCls,Ce=u.className,se=u.extra,ae=u.headStyle,ce=ae===void 0?{}:ae,xe=u.bodyStyle,he=xe===void 0?{}:xe,Pe=u.title,je=u.loading,Le=u.bordered,He=Le===void 0?!0:Le,Ie=u.size,we=u.type,Ae=u.cover,Se=u.actions,ye=u.tabList,Te=u.children,Ke=u.activeTabKey,We=u.defaultActiveTabKey,$e=u.tabBarExtraContent,h=u.hoverable,ge=u.tabProps,Ne=ge===void 0?{}:ge,ke=ze(u,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),j=ve("card",Q),Fe=he.padding===0||he.padding==="0px"?{padding:24}:void 0,F=a.createElement("div",{className:"".concat(j,"-loading-block")}),Ge=a.createElement("div",{className:"".concat(j,"-loading-content"),style:Fe},a.createElement(Z.a,{gutter:8},a.createElement(C.a,{span:22},F)),a.createElement(Z.a,{gutter:8},a.createElement(C.a,{span:8},F),a.createElement(C.a,{span:15},F)),a.createElement(Z.a,{gutter:8},a.createElement(C.a,{span:6},F),a.createElement(C.a,{span:18},F)),a.createElement(Z.a,{gutter:8},a.createElement(C.a,{span:13},F),a.createElement(C.a,{span:9},F)),a.createElement(Z.a,{gutter:8},a.createElement(C.a,{span:4},F),a.createElement(C.a,{span:3},F),a.createElement(C.a,{span:16},F))),Be=Ke!==void 0,Je=Object(E.a)(Object(E.a)({},Ne),(O={},Object(d.a)(O,Be?"activeKey":"defaultActiveKey",Be?Ke:We),Object(d.a)(O,"tabBarExtraContent",$e),O)),De,Ee=ye&&ye.length?a.createElement(k.a,Object(E.a)({size:"large"},Je,{className:"".concat(j,"-head-tabs"),onChange:le}),ye.map(function(me){return a.createElement(k.a.TabPane,{tab:me.tab,disabled:me.disabled,key:me.key})})):null;(Pe||se||Ee)&&(De=a.createElement("div",{className:"".concat(j,"-head"),style:ce},a.createElement("div",{className:"".concat(j,"-head-wrapper")},Pe&&a.createElement("div",{className:"".concat(j,"-head-title")},Pe),se&&a.createElement("div",{className:"".concat(j,"-extra")},se)),Ee));var be=Ae?a.createElement("div",{className:"".concat(j,"-cover")},Ae):null,Qe=a.createElement("div",{className:"".concat(j,"-body"),style:he},je?Ge:Te),Ve=Se&&Se.length?a.createElement("ul",{className:"".concat(j,"-actions")},_e(Se)):null,Xe=Object(z.a)(ke,["onTabChange"]),Ue=Ie||te,Ye=w()(j,(s={},Object(d.a)(s,"".concat(j,"-loading"),je),Object(d.a)(s,"".concat(j,"-bordered"),He),Object(d.a)(s,"".concat(j,"-hoverable"),h),Object(d.a)(s,"".concat(j,"-contain-grid"),oe()),Object(d.a)(s,"".concat(j,"-contain-tabs"),ye&&ye.length),Object(d.a)(s,"".concat(j,"-").concat(Ue),Ue),Object(d.a)(s,"".concat(j,"-type-").concat(we),!!we),Object(d.a)(s,"".concat(j,"-rtl"),ee==="rtl"),s),Ce);return a.createElement("div",Object(E.a)({},Xe,{className:Ye}),De,be,Qe,Ve)};q.Grid=pe,q.Meta=P;var at=I.a=q},jCWc:function(U,I,n){"use strict";var d=n("cIOH"),E=n.n(d),a=n("1GLa")},kPKH:function(U,I,n){"use strict";var d=n("/kpp");I.a=d.a},lnY3:function(U,I,n){},tU7J:function(U,I,n){"use strict";var d=n("cIOH"),E=n.n(d),a=n("/qDX"),J=n.n(a),w=n("5Dmo"),z=n("5NDa")},wFql:function(U,I,n){"use strict";var d=n("wx14"),E=n("rePB"),a=n("q1tI"),J=n("TSYQ"),w=n.n(J),z=n("c+Xe"),b=n("H84U"),M=n("uaoM"),ie=function(i,r){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(l[e[t]]=i[e[t]]);return l},pe=function(r,l){var e=r.prefixCls,t=r.component,o=t===void 0?"article":t,c=r.className,f=r["aria-label"],p=r.setContentRef,v=r.children,S=ie(r,["prefixCls","component","className","aria-label","setContentRef","children"]),g=l;return p&&(Object(M.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),g=Object(z.a)(l,p)),a.createElement(b.a,null,function(_){var L=_.getPrefixCls,G=_.direction,V=o,A=L("typography",e),W=w()(A,Object(E.a)({},"".concat(A,"-rtl"),G==="rtl"),c);return a.createElement(V,Object(d.a)({className:W,"aria-label":f,ref:g},S),v)})},Y=a.forwardRef(pe);Y.displayName="Typography";var X=Y,P=X,k=n("U8pU"),Z=n("KQm4"),C=n("1OyB"),fe=n("vuIU"),ze=n("Ji7U"),_e=n("LK+K"),q=n("Zm9Q"),at=n("+QRC"),y=n.n(at),u=n("BGR+"),O=n("G3dp"),s=n("bRQS"),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},ve=m,ee=n("6VBw"),te=function(r,l){return a.createElement(ee.a,Object.assign({},r,{ref:l,icon:ve}))};te.displayName="CopyOutlined";var le=a.forwardRef(te),oe=n("t23M"),Q=n("wEI+"),Ce=n("YMnH"),se=n("gDlH"),ae=n("oHiP"),ce=function(r){if(typeof window!="undefined"&&window.document&&window.document.documentElement){var l=Array.isArray(r)?r:[r],e=window.document.documentElement;return l.some(function(t){return t in e.style})}return!1},xe=ce(["flex","webkitFlex","Flex","msFlex"]),he=n("3S7+"),Pe=n("ODXe"),je=n("4IlW"),Le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},He=Le,Ie=function(r,l){return a.createElement(ee.a,Object.assign({},r,{ref:l,icon:He}))};Ie.displayName="EnterOutlined";var we=a.forwardRef(Ie),Ae=n("whJP"),Se=function(r){var l=r.prefixCls,e=r["aria-label"],t=r.className,o=r.style,c=r.direction,f=r.maxLength,p=r.autoSize,v=p===void 0?!0:p,S=r.value,g=r.onSave,_=r.onCancel,L=a.useRef(),G=a.useRef(!1),V=a.useRef(),A=a.useState(S),W=Object(Pe.a)(A,2),de=W[0],$=W[1];a.useEffect(function(){$(S)},[S]),a.useEffect(function(){if(L.current&&L.current.resizableTextArea){var D=L.current.resizableTextArea.textArea;D.focus();var x=D.value.length;D.setSelectionRange(x,x)}},[]);var ue=function(x){var R=x.target;$(R.value.replace(/[\n\r]/g,""))},ne=function(){G.current=!0},T=function(){G.current=!1},N=function(x){var R=x.keyCode;G.current||(V.current=R)},K=function(){g(de.trim())},H=function(x){var R=x.keyCode,Ze=x.ctrlKey,qe=x.altKey,et=x.metaKey,tt=x.shiftKey;V.current===R&&!G.current&&!Ze&&!qe&&!et&&!tt&&(R===je.a.ENTER?K():R===je.a.ESC&&_())},B=function(){K()},re=w()(l,"".concat(l,"-edit-content"),Object(E.a)({},"".concat(l,"-rtl"),c==="rtl"),t);return a.createElement("div",{className:re,style:o},a.createElement(Ae.a,{ref:L,maxLength:f,value:de,onChange:ue,onKeyDown:N,onKeyUp:H,onCompositionStart:ne,onCompositionEnd:T,onBlur:B,"aria-label":e,autoSize:v}),a.createElement(we,{className:"".concat(l,"-edit-content-confirm")}))},ye=Se,Te=n("i8i4"),Ke=1,We=3,$e=8,h,ge={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Ne(i){if(!i)return 0;var r=i.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function ke(i){var r=Array.prototype.slice.apply(i);return r.map(function(l){return"".concat(l,": ").concat(i.getPropertyValue(l),";")}).join("")}function j(i){var r=[];return i.forEach(function(l){var e=r[r.length-1];typeof l=="string"&&typeof e=="string"?r[r.length-1]+=l:r.push(l)}),r}var Fe=function(i,r,l,e,t){h||(h=document.createElement("div"),h.setAttribute("aria-hidden","true"),document.body.appendChild(h));var o=r.rows,c=r.suffix,f=c===void 0?"":c,p=window.getComputedStyle(i),v=ke(p),S=Ne(p.lineHeight),g=Math.round(S*(o+1)+Ne(p.paddingTop)+Ne(p.paddingBottom));h.setAttribute("style",v),h.style.position="fixed",h.style.left="0",h.style.height="auto",h.style.minHeight="auto",h.style.maxHeight="auto",h.style.top="-999999px",h.style.zIndex="-1000",h.style.textOverflow="clip",h.style.whiteSpace="normal",h.style.webkitLineClamp="none";var _=j(Object(q.a)(l));Object(Te.render)(a.createElement("div",{style:ge},a.createElement("span",{style:ge},_,f),a.createElement("span",{style:ge},e)),h);function L(){return h.offsetHeight<g}if(L())return Object(Te.unmountComponentAtNode)(h),{content:l,text:h.innerHTML,ellipsis:!1};var G=Array.prototype.slice.apply(h.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(T){var N=T.nodeType;return N!==$e}),V=Array.prototype.slice.apply(h.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(Te.unmountComponentAtNode)(h);var A=[];h.innerHTML="";var W=document.createElement("span");h.appendChild(W);var de=document.createTextNode(t+f);W.appendChild(de),V.forEach(function(T){h.appendChild(T)});function $(T){W.insertBefore(T,de)}function ue(T,N){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,H=arguments.length>3&&arguments[3]!==void 0?arguments[3]:N.length,B=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,re=Math.floor((K+H)/2),D=N.slice(0,re);if(T.textContent=D,K>=H-1)for(var x=H;x>=K;x-=1){var R=N.slice(0,x);if(T.textContent=R,L()||!R)return x===N.length?{finished:!1,reactNode:N}:{finished:!0,reactNode:R}}return L()?ue(T,N,re,H,re):ue(T,N,K,re,B)}function ne(T,N){var K=T.nodeType;if(K===Ke)return $(T),L()?{finished:!1,reactNode:_[N]}:(W.removeChild(T),{finished:!0,reactNode:null});if(K===We){var H=T.textContent||"",B=document.createTextNode(H);return $(B),ue(B,H)}return{finished:!1,reactNode:null}}return G.some(function(T,N){var K=ne(T,N),H=K.finished,B=K.reactNode;return B&&A.push(B),H}),{content:A,text:h.innerHTML,ellipsis:!0}},F=function(i,r){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(l[e[t]]=i[e[t]]);return l},Ge=ce("webkitLineClamp"),Be=ce("textOverflow");function Je(i,r){var l=i.mark,e=i.code,t=i.underline,o=i.delete,c=i.strong,f=i.keyboard,p=r;function v(S,g){!S||(p=a.createElement(g,{},p))}return v(c,"strong"),v(t,"u"),v(o,"del"),v(e,"code"),v(l,"mark"),v(f,"kbd"),p}var De="...",Ee=function(i){Object(ze.a)(l,i);var r=Object(_e.a)(l);function l(){var e;return Object(C.a)(this,l),e=r.apply(this,arguments),e.contentRef=a.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,o=e.context.getPrefixCls;return o("typography",t)},e.onExpandClick=function(t){var o=e.getEllipsis(),c=o.onExpand;e.setState({expanded:!0}),c&&c(t)},e.onEditClick=function(){e.triggerEdit(!0)},e.onEditChange=function(t){var o=e.getEditable(),c=o.onChange;c&&c(t),e.triggerEdit(!1)},e.onEditCancel=function(){e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var o=e.props,c=o.children,f=o.copyable,p=Object(d.a)({},Object(k.a)(f)==="object"?f:null);p.text===void 0&&(p.text=String(c)),y()(p.text||""),e.setState({copied:!0},function(){p.onCopy&&p.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var o=e.getEditable(),c=o.onStart;t&&c&&c(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){ae.a.cancel(e.rafId),e.rafId=Object(ae.a)(function(){e.syncEllipsis()})},e}return Object(fe.a)(l,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var o=this.props.children,c=this.getEllipsis(),f=this.getEllipsis(t);(o!==t.children||c.rows!==f.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),ae.a.cancel(this.rafId)}},{key:"getEditable",value:function(t){var o=this.state.edit,c=t||this.props,f=c.editable;return f?Object(d.a)({editing:o},Object(k.a)(f)==="object"?f:null):{editing:o}}},{key:"getEllipsis",value:function(t){var o=t||this.props,c=o.ellipsis;return c?Object(d.a)({rows:1,expandable:!1},Object(k.a)(c)==="object"?c:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,o=this.props,c=o.editable,f=o.copyable,p=this.getEllipsis(),v=p.rows,S=p.expandable,g=p.suffix,_=p.onEllipsis;return g||c||f||S||!t||_?!1:v===1?Be:Ge}},{key:"syncEllipsis",value:function(){var t=this.state,o=t.ellipsisText,c=t.isEllipsis,f=t.expanded,p=this.getEllipsis(),v=p.rows,S=p.suffix,g=p.onEllipsis,_=this.props.children;if(!(!v||v<0||!this.contentRef.current||f)&&!this.canUseCSSEllipsis()){Object(M.a)(Object(q.a)(_).every(function(W){return typeof W=="string"}),"Typography","`ellipsis` should use string as children only.");var L=Fe(this.contentRef.current,{rows:v,suffix:S},_,this.renderOperations(!0),De),G=L.content,V=L.text,A=L.ellipsis;(o!==V||c!==A)&&(this.setState({ellipsisText:V,ellipsisContent:G,isEllipsis:A}),c!==A&&g&&g(A))}}},{key:"renderExpand",value:function(t){var o=this.getEllipsis(),c=o.expandable,f=o.symbol,p=this.state,v=p.expanded,S=p.isEllipsis;if(!c||!t&&(v||!S))return null;var g;return f?g=f:g=this.expandStr,a.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},g)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var o=t.icon,c=t.tooltip,f=Object(q.a)(c)[0]||this.editStr,p=typeof f=="string"?f:"";return a.createElement(he.a,{key:"edit",title:c===!1?"":f},a.createElement(se.a,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":p},o||a.createElement(O.a,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,o=this.props.copyable;if(!!o){var c=this.getPrefixCls(),f=o.tooltips,p=Object(q.a)(f);p.length===0&&(p=[this.copyStr,this.copiedStr]);var v=t?p[1]:p[0],S=typeof v=="string"?v:"",g=Object(q.a)(o.icon);return a.createElement(he.a,{key:"copy",title:f===!1?"":v},a.createElement(se.a,{className:w()("".concat(c,"-copy"),t&&"".concat(c,"-copy-success")),onClick:this.onCopyClick,"aria-label":S},t?g[1]||a.createElement(s.a,null):g[0]||a.createElement(le,null)))}}},{key:"renderEditInput",value:function(){var t=this.props,o=t.children,c=t.className,f=t.style,p=this.context.direction,v=this.getEditable(),S=v.maxLength,g=v.autoSize;return a.createElement(ye,{value:typeof o=="string"?o:"",onSave:this.onEditChange,onCancel:this.onEditCancel,prefixCls:this.getPrefixCls(),className:c,style:f,direction:p,maxLength:S,autoSize:g})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(o){return o})}},{key:"renderContent",value:function(){var t=this,o=this.state,c=o.ellipsisContent,f=o.isEllipsis,p=o.expanded,v=this.props,S=v.component,g=v.children,_=v.className,L=v.type,G=v.disabled,V=v.style,A=F(v,["component","children","className","type","disabled","style"]),W=this.context.direction,de=this.getEllipsis(),$=de.rows,ue=de.suffix,ne=this.getPrefixCls(),T=Object(u.a)(A,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat(Object(Z.a)(Q.a))),N=this.canUseCSSEllipsis(),K=$===1&&N,H=$&&$>1&&N,B=g;if($&&f&&!p&&!N){var re=A.title,D=re||"";!re&&(typeof g=="string"||typeof g=="number")&&(D=String(g)),D=D==null?void 0:D.slice(String(c||"").length),B=a.createElement(a.Fragment,null,c,a.createElement("span",{title:D,"aria-hidden":"true"},De),ue)}else B=a.createElement(a.Fragment,null,g,ue);return B=Je(this.props,B),a.createElement(Ce.a,{componentName:"Text"},function(x){var R,Ze=x.edit,qe=x.copy,et=x.copied,tt=x.expand;return t.editStr=Ze,t.copyStr=qe,t.copiedStr=et,t.expandStr=tt,a.createElement(oe.a,{onResize:t.resizeOnNextFrame,disabled:!$},a.createElement(P,Object(d.a)({className:w()((R={},Object(E.a)(R,"".concat(ne,"-").concat(L),L),Object(E.a)(R,"".concat(ne,"-disabled"),G),Object(E.a)(R,"".concat(ne,"-ellipsis"),$),Object(E.a)(R,"".concat(ne,"-ellipsis-single-line"),K),Object(E.a)(R,"".concat(ne,"-ellipsis-multiple-line"),H),R),_),style:Object(d.a)(Object(d.a)({},V),{WebkitLineClamp:H?$:null}),component:S,ref:t.contentRef,direction:W},T),B,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),o=t.editing;return o?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var o=t.children,c=t.editable;return Object(M.a)(!c||typeof o=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),l}(a.Component);Ee.contextType=b.b,Ee.defaultProps={children:""};var be=Ee,Qe=function(i,r){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(l[e[t]]=i[e[t]]);return l},Ve=function(r){var l=r.ellipsis,e=Qe(r,["ellipsis"]);return Object(M.a)(Object(k.a)(l)!=="object","Typography.Text","`ellipsis` only supports boolean value."),a.createElement(be,Object(d.a)({},e,{ellipsis:!!l,component:"span"}))},Xe=Ve,Ue=function(i,r){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(l[e[t]]=i[e[t]]);return l},Ye=function(r,l){var e=r.ellipsis,t=r.rel,o=Ue(r,["ellipsis","rel"]);Object(M.a)(Object(k.a)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var c=a.useRef(null);a.useImperativeHandle(l,function(){var p;return(p=c.current)===null||p===void 0?void 0:p.contentRef.current});var f=Object(d.a)(Object(d.a)({},o),{rel:t===void 0&&o.target==="_blank"?"noopener noreferrer":t});return delete f.navigate,a.createElement(be,Object(d.a)({},f,{ref:c,ellipsis:!!e,component:"a"}))},me=a.forwardRef(Ye),Oe=n("CWQg"),Re=function(i,r){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(l[e[t]]=i[e[t]]);return l},nt=Object(Oe.b)(1,2,3,4,5),rt=function(r){var l=r.level,e=l===void 0?1:l,t=Re(r,["level"]),o;return nt.indexOf(e)!==-1?o="h".concat(e):(Object(M.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),o="h1"),a.createElement(be,Object(d.a)({},t,{component:o}))},it=rt,lt=function(r){return a.createElement(be,Object(d.a)({},r,{component:"div"}))},ot=lt,Me=P;Me.Text=Xe,Me.Link=me,Me.Title=it,Me.Paragraph=ot;var st=I.a=Me}}]);
