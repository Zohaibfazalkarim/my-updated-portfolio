import{r as h,R as J,j as i}from"./index-n0RVLBUL.js";import{u as te,_ as U,M as re,C as ne}from"./extends-DFQjDx0A.js";import{m as v}from"./proxy-DVlNUg35.js";function H(n,t,a,r){return new(a||(a=Promise))(function(e,c){function o(d){try{f(r.next(d))}catch(s){c(s)}}function l(d){try{f(r.throw(d))}catch(s){c(s)}}function f(d){var s;d.done?e(d.value):(s=d.value,s instanceof a?s:new a(function(x){x(s)})).then(o,l)}f((r=r.apply(n,[])).next())})}function S(n,t){var a,r,e,c,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return c={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function l(f){return function(d){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,r&&(e=2&s[0]?r.return:s[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,s[1])).done)return e;switch(r=0,e&&(s=[2&s[0],e.value]),s[0]){case 0:case 1:e=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(e=o.trys,!((e=e.length>0&&e[e.length-1])||s[0]!==6&&s[0]!==2)){o=0;continue}if(s[0]===3&&(!e||s[1]>e[0]&&s[1]<e[3])){o.label=s[1];break}if(s[0]===6&&o.label<e[1]){o.label=e[1],e=s;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(s);break}e[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(n,o)}catch(x){s=[6,x],r=0}finally{a=e=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([f,d])}}}function Z(n){var t=typeof Symbol=="function"&&Symbol.iterator,a=t&&n[t],r=0;if(a)return a.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function j(n,t){var a=typeof Symbol=="function"&&n[Symbol.iterator];if(!a)return n;var r,e,c=a.call(n),o=[];try{for(;(t===void 0||t-- >0)&&!(r=c.next()).done;)o.push(r.value)}catch(l){e={error:l}}finally{try{r&&!r.done&&(a=c.return)&&a.call(c)}finally{if(e)throw e.error}}return o}function _(n,t,a){if(arguments.length===2)for(var r,e=0,c=t.length;e<c;e++)!r&&e in t||(r||(r=Array.prototype.slice.call(t,0,e)),r[e]=t[e]);return n.concat(r||Array.prototype.slice.call(t))}function K(n,t,a,r,e){for(var c=[],o=5;o<arguments.length;o++)c[o-5]=arguments[o];return H(this,void 0,void 0,function(){var l,f,d,s,x,m;return S(this,function(p){switch(p.label){case 0:p.trys.push([0,12,13,14]),l=Z(c),f=l.next(),p.label=1;case 1:if(f.done)return[3,11];switch(d=f.value,typeof d){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,ie(n,t,d,a,r,e)];case 3:return p.sent(),[3,10];case 4:return[4,X(d)];case 5:return p.sent(),[3,10];case 6:return[4,d.apply(void 0,_([n,t,a,r,e],j(c),!1))];case 7:return p.sent(),[3,10];case 8:return[4,d];case 9:p.sent(),p.label=10;case 10:return f=l.next(),[3,1];case 11:return[3,14];case 12:return s=p.sent(),x={error:s},[3,14];case 13:try{f&&!f.done&&(m=l.return)&&m.call(l)}finally{if(x)throw x.error}return[7];case 14:return[2]}})})}function ie(n,t,a,r,e,c){return H(this,void 0,void 0,function(){var o,l;return S(this,function(f){switch(f.label){case 0:return o=n.textContent||"",l=function(d,s){var x=j(s).slice(0);return _(_([],j(d),!1),[NaN],!1).findIndex(function(m,p){return x[p]!==m})}(o,a),[4,ae(n,_(_([],j(oe(o,t,l)),!1),j(se(a,t,l)),!1),r,e,c)];case 1:return f.sent(),[2]}})})}function X(n){return H(this,void 0,void 0,function(){return S(this,function(t){switch(t.label){case 0:return[4,new Promise(function(a){return setTimeout(a,n)})];case 1:return t.sent(),[2]}})})}function ae(n,t,a,r,e){return H(this,void 0,void 0,function(){var c,o,l,f,d,s,x,m,p,D,W,R,L;return S(this,function(N){switch(N.label){case 0:if(c=t,e){for(o=0,l=1;l<t.length;l++)if(f=j([t[l-1],t[l]],2),d=f[0],(s=f[1]).length>d.length||s===""){o=l;break}c=t.slice(o,t.length)}N.label=1;case 1:N.trys.push([1,6,7,8]),x=Z(function(B){var M,z,C,E,A,O,k;return S(this,function(w){switch(w.label){case 0:M=function(I){return S(this,function(F){switch(F.label){case 0:return[4,{op:function(G){return requestAnimationFrame(function(){return G.textContent=I})},opCode:function(G){var Q=G.textContent||"";return I===""||Q.length>I.length?"DELETE":"WRITING"}}];case 1:return F.sent(),[2]}})},w.label=1;case 1:w.trys.push([1,6,7,8]),z=Z(B),C=z.next(),w.label=2;case 2:return C.done?[3,5]:(E=C.value,[5,M(E)]);case 3:w.sent(),w.label=4;case 4:return C=z.next(),[3,2];case 5:return[3,8];case 6:return A=w.sent(),O={error:A},[3,8];case 7:try{C&&!C.done&&(k=z.return)&&k.call(z)}finally{if(O)throw O.error}return[7];case 8:return[2]}})}(c)),m=x.next(),N.label=2;case 2:return m.done?[3,5]:(p=m.value,D=p.opCode(n)==="WRITING"?a+a*(Math.random()-.5):r+r*(Math.random()-.5),p.op(n),[4,X(D)]);case 3:N.sent(),N.label=4;case 4:return m=x.next(),[3,2];case 5:return[3,8];case 6:return W=N.sent(),R={error:W},[3,8];case 7:try{m&&!m.done&&(L=x.return)&&L.call(x)}finally{if(R)throw R.error}return[7];case 8:return[2]}})})}function se(n,t,a){var r,e;return a===void 0&&(a=0),S(this,function(c){switch(c.label){case 0:r=t(n),e=r.length,c.label=1;case 1:return a<e?[4,r.slice(0,++a).join("")]:[3,3];case 2:return c.sent(),[3,1];case 3:return[2]}})}function oe(n,t,a){var r,e;return a===void 0&&(a=0),S(this,function(c){switch(c.label){case 0:r=t(n),e=r.length,c.label=1;case 1:return e>a?[4,r.slice(0,--e).join("")]:[3,3];case 2:return c.sent(),[3,1];case 3:return[2]}})}var ce="index-module_type__E-SaG";(function(n,t){t===void 0&&(t={});var a=t.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a==="top"&&r.firstChild?r.insertBefore(e,r.firstChild):r.appendChild(e),e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var le=h.memo(h.forwardRef(function(n,t){var a=n.sequence,r=n.repeat,e=n.className,c=n.speed,o=c===void 0?40:c,l=n.deletionSpeed,f=n.omitDeletionAnimation,d=f!==void 0&&f,s=n.preRenderFirstString,x=s!==void 0&&s,m=n.wrapper,p=m===void 0?"span":m,D=n.splitter,W=D===void 0?function(u){return _([],j(u),!1)}:D,R=n.cursor,L=R===void 0||R,N=n.style,B=function(u,y){var g={};for(var b in u)Object.prototype.hasOwnProperty.call(u,b)&&y.indexOf(b)<0&&(g[b]=u[b]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function"){var P=0;for(b=Object.getOwnPropertySymbols(u);P<b.length;P++)y.indexOf(b[P])<0&&Object.prototype.propertyIsEnumerable.call(u,b[P])&&(g[b[P]]=u[b[P]])}return g}(n,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),M=B["aria-label"],z=B["aria-hidden"],C=B.role;l||(l=o);var E=new Array(2).fill(40);[o,l].forEach(function(u,y){switch(typeof u){case"number":E[y]=Math.abs(u-100);break;case"object":var g=u.type,b=u.value;if(typeof b!="number")break;g==="keyStrokeDelayInMs"&&(E[y]=b)}});var A,O,k,w,I,F,G=E[0],Q=E[1],V=function(u,y){y===void 0&&(y=null);var g=h.useRef(y);return h.useEffect(function(){u&&(typeof u=="function"?u(g.current):u.current=g.current)},[u]),g}(t),$=ce;A=e?"".concat(L?$+" ":"").concat(e):L?$:"",O=h.useRef(function(){var u,y=a;r===1/0?u=K:typeof r=="number"&&(y=Array(1+r).fill(a).flat());var g=u?_(_([],j(y),!1),[u],!1):_([],j(y),!1);return K.apply(void 0,_([V.current,W,G,Q,d],j(g),!1)),function(){V.current}}),k=h.useRef(),w=h.useRef(!1),I=h.useRef(!1),F=j(h.useState(0),2)[1],w.current&&(I.current=!0),h.useEffect(function(){return w.current||(k.current=O.current(),w.current=!0),F(function(u){return u+1}),function(){I.current&&k.current&&k.current()}},[]);var ee=p,Y=x?a.find(function(u){return typeof u=="string"})||"":null;return J.createElement(ee,{"aria-hidden":z,"aria-label":M,role:C,style:N,className:A,children:M?J.createElement("span",{"aria-hidden":"true",ref:V,children:Y}):Y,ref:M?void 0:V})}),function(n,t){return!0});const ue=()=>i.jsx(v.div,{className:"bubbleContainer",animate:{opacity:[0,1]},transition:{duration:1},children:i.jsx("div",{className:"bubble",children:i.jsx(le,{sequence:[1e3,"I design beautiful and functional websites that bring ideas to life.",1e3,"I build modern, efficient web solutions. ",1e3],wrapper:"span",speed:50,deletionSpeed:60,repeat:1/0})})});var de=`#define GLSLIFY 1
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`;class fe extends re{constructor(t={}){super(t),this.setValues(t),this._time={value:0},this._distort={value:.4},this._radius={value:1}}onBeforeCompile(t){t.uniforms.time=this._time,t.uniforms.radius=this._radius,t.uniforms.distort=this._distort,t.vertexShader=`
      uniform float time;
      uniform float radius;
      uniform float distort;
      ${de}
      ${t.vertexShader}
    `,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `)}get time(){return this._time.value}set time(t){this._time.value=t}get distort(){return this._distort.value}set distort(t){this._distort.value=t}get radius(){return this._radius.value}set radius(t){this._radius.value=t}}const he=h.forwardRef(({speed:n=1,...t},a)=>{const[r]=h.useState(()=>new fe);return te(e=>r&&(r.time=e.clock.getElapsedTime()*n)),h.createElement("primitive",U({object:r,ref:a,attach:"material"},t))});function ve(n,t){const a=n+"Geometry";return h.forwardRef(({args:r,children:e,...c},o)=>{const l=h.useRef(null);return h.useImperativeHandle(o,()=>l.current),h.useLayoutEffect(()=>void(t==null?void 0:t(l.current))),h.createElement("mesh",U({ref:l},c),h.createElement(a,{attach:"geometry",args:r}),e)})}const xe=ve("sphere"),pe=()=>i.jsxs(i.Fragment,{children:[i.jsx(xe,{args:[1,100,200],scale:2.4,children:i.jsx(he,{color:"#DB8B9B",attach:"material",distort:.5,speed:2})}),i.jsx("ambientLight",{intensity:2}),i.jsx("directionalLight",{position:[1,2,3]})]}),T={initial:{x:-100,opacity:0},animate:{x:0,opacity:1,transition:{duration:1,staggerChildren:.2}}},q={initial:{y:-100,opacity:0},animate:{y:0,opacity:1,transition:{duration:1,staggerChildren:.2}}},we=()=>i.jsxs("div",{className:"hero",children:[i.jsxs("div",{className:"hSection left",children:[i.jsxs(v.h1,{initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:1},className:"hTitle",children:["Hey There,",i.jsx("br",{}),i.jsx("span",{children:"I'm Zohaib!"})]}),i.jsxs(v.div,{variants:T,initial:"initial",animate:"animate",className:"awards",children:[i.jsx(v.h2,{variants:T,children:"Top Rated Developer"}),i.jsx(v.p,{variants:T,children:"I have 2 years hands-on experience in web development, including both professional and personal projects with a strong focus on building dynamic and responsive applications."}),i.jsxs(v.div,{variants:T,className:"awardList",children:[i.jsx(v.img,{variants:T,src:"/award1.png",alt:""}),i.jsx(v.img,{variants:T,src:"/award2.png",alt:""}),i.jsx(v.img,{variants:T,src:"/award3.png",alt:""})]})]}),i.jsx(v.a,{animate:{y:[0,5],opacity:[0,1,0]},transition:{repeat:1/0,duration:4,ease:"easeInOut"},href:"#services",className:"scroll",children:i.jsxs("svg",{width:"50px",height:"50px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z",stroke:"white",strokeWidth:"1"}),i.jsx(v.path,{animate:{y:[0,5]},transition:{repeat:1/0,duration:4,ease:"easeInOut"},d:"M12 5V8",stroke:"white",strokeWidth:"1",strokeLinecap:"round"})]})})]}),i.jsxs("div",{className:"hSection right",children:[i.jsxs(v.div,{variants:q,initial:"initial",animate:"animate",className:"follow",children:[i.jsx(v.a,{variants:q,href:"/",children:i.jsx("img",{src:"/instagram.png",alt:""})}),i.jsx(v.a,{variants:q,href:"/",children:i.jsx("img",{src:"/facebook.png",alt:""})}),i.jsx(v.a,{variants:q,href:"/",children:i.jsx("img",{src:"/youtube.png",alt:""})}),i.jsx(v.div,{variants:q,className:"followTextContainer",children:i.jsx("div",{className:"followText",children:"FOLLOW ME"})})]}),i.jsx(ue,{}),i.jsx(v.div,{animate:{opacity:[0,1]},transition:{duration:1},className:"certificate"}),i.jsx(v.a,{href:"/#contact",className:"contactLink",animate:{x:[200,0],opacity:[0,1]},transition:{duration:2},children:i.jsxs(v.div,{className:"contactButton",animate:{rotate:[0,360]},transition:{duration:10,repeat:1/0,ease:"linear"},children:[i.jsxs("svg",{viewBox:"0 0 200 200",width:"150",height:"150",children:[i.jsx("circle",{cx:"100",cy:"100",r:"90",fill:"pink"}),i.jsx("path",{id:"innerCirclePath",fill:"none",d:"M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"}),i.jsx("text",{className:"circleText",children:i.jsx("textPath",{href:"#innerCirclePath",children:"Hire Now •"})}),i.jsx("text",{className:"circleText",children:i.jsx("textPath",{href:"#innerCirclePath",startOffset:"44%",children:"Contact Me •"})})]}),i.jsx("div",{className:"arrow",children:i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"50",height:"50",fill:"none",stroke:"black",strokeWidth:"2",children:[i.jsx("line",{x1:"6",y1:"18",x2:"18",y2:"6"}),i.jsx("polyline",{points:"9 6 18 6 18 15"})]})})]})})]}),i.jsxs("div",{className:"bg",children:[i.jsx(ne,{children:i.jsx(h.Suspense,{fallback:"loading...",children:i.jsx(pe,{})})}),i.jsx("div",{className:"hImg"})]})]});export{we as default};
