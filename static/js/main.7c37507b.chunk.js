(this.webpackJsonpmath=this.webpackJsonpmath||[]).push([[0],{31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),u=a(13),c=a(9),m=a(3),i=a(4),s=a(6),o=a(5),h={app:{padding:".4em"},ul:{padding:0,margin:0,listStyleType:"none"},li:{padding:0,margin:0},a:{padding:".7em",display:"inline-block"}},d={"prime-generator":"Prime numbers (Sieve of Eratosthenes)","prime-factors":"Prime factors (factorization)","extended-euclidean":"Extended Euclidean algorithm (greatest common divisor)",lcm:"Least common multiple",congruence:"Linear Congruence Equation"},b=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:h.app},r.a.createElement("ul",{style:h.ul},Object.keys(d).map((function(e){return r.a.createElement("li",{key:e,style:h.li},r.a.createElement(u.b,{to:"/".concat(e),style:h.a},d[e]))}))),r.a.createElement("hr",null),this.props.children)}}]),a}(r.a.Component),p={sign:function(e){return e<0?-1:1},getPrimes:function(e){var t,a=new(Uint32Array||Array)(e),n=[],r=a.length,l=Math.floor(Math.sqrt(e)),u=0;for(t=2;t<=l;t++)for(u=2*t;u<=r;u+=t)a[u]=1;for(t=2;t<r;t++)a[t]||n.push(t);return n},getPrimeFactors:function(e){for(var t=2,a=Math.abs(e),n=[],r=this.getPrimes(a),l=r.length,u=0;u<l;u++)for(t=r[u];a%t===0;)n.push(t),a/=t;return a>1&&n.push(a),n},binaryEuclidean:function(e,t){for(var a=0;e%2===0&&t%2===0;)e/=2,t/=2,a+=1;for(;e!==t;)e%2===0?e/=2:t%2===0?t/=2:e>t?e=(e-t)/2:t=(t-e)/2;return e*Math.pow(2,a)},gcd:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=Math.abs(t.pop()),r=Math.abs(t.pop());if(!n)return r;if(!r)return n;var l=this.binaryEuclidean(n,r);return t.length>0?this.gcd.apply(this,[l].concat(t)):l},lcm:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t.pop()||0,r=t.pop()||0;if(!n||!r)return 0;if(!n)return r;if(!r)return n;var l=n/this.gcd(n,r)*r;return t.length>0?this.lcm.apply(this,[l].concat(t)):l},extendedEuclidean:function(e,t){if(!e&&!t)return{d:0,x:0,y:0};if(!e)return{d:t,x:1,y:0};if(!t)return{d:e,x:0,y:1};for(var a=[],n=1,r=0,l=0,u=0,c=1,m=0,i=Math.abs(e),s=Math.abs(t),o=0,h=0;0!==s;){o=i%s,m=u-(h=Math.floor(i/s))*c,l=n-h*r,a.push({a:i,b:s,q:h,r:o,s0:n,s1:r,s:l,t0:u,t1:c,t:m});var d=[s,o];i=d[0],s=d[1];var b=[r,l];n=b[0],r=b[1];var p=[c,m];u=p[0],c=p[1]}if(n*=this.sign(e),u*=this.sign(t),r<0){var E=[-r,-c];r=E[0],c=E[1]}return{a0:r,b0:c,x:n,y:u,d:e*n+t*u,steps:a}},congruence:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this.extendedEuclidean(e,a),r=n.d,l=n.x,u=n.steps;if(t%r!==0)return{d:r,result:[],steps:[]};if(1===r){var c=e<a?1:-1;return{d:r,steps:u,result:[(c*l*t%a+a)%a]}}for(var m=a/r,i=this.congruence(e/r,t/r,m),s=[],o=i.result[0];o<a;)s.push(o),o+=m;return{d:r,steps:u,result:s}},diophantic:function(e,t,a){var n=this.extendedEuclidean(e,t),r=n.x,l=n.y,u=n.a0,c=n.b0,m=n.d,i=n.steps,s=function(e){return e<0?"-":"+"},o=e<0?-1:1,h=t<0?-1:1;if(a%m===0){var d=a/m;return{x:"".concat(o*r*d," ").concat(s(o*u)," ").concat(Math.abs(u),"k"),y:"".concat(h*l*d," ").concat(s(h*c)," ").concat(Math.abs(c),"k"),steps:i}}},chineseRemainder:function(e,t){var a=e.length;if(a!==t.length)return null;for(var n=0;n<a;n++)for(0;n<a;n++)if((e[n]-e[0])%this.gcd(t[n],t[0]))return null}},E={calc:{padding:".4em",margin:".4em 0",background:"#eee"}},g=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={number:0,primes:[]},e.handleUpperLimitChange=function(t){t.preventDefault(),e.setState({number:parseInt(t.target.value,10)||0})},e.handleFocus=function(e){e.target.select()},e.handleSubmit=function(t){t.preventDefault(),e.setState({primes:p.getPrimes(e.state.number)})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Prime numbers generator"),r.a.createElement("form",{className:"pure-form pure-form-stacked",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"number"},"Select number (upper limit)"),r.a.createElement("input",{id:"number",type:"number",min:"2",max:"100000",value:this.state.number,onFocus:this.handleFocus,onChange:this.handleUpperLimitChange}),r.a.createElement("button",{type:"submit",className:"pure-button"},"Calculate")),this.state.primes.length>0&&r.a.createElement("div",{style:E.calc},this.state.primes.join(" ")))}}]),a}(r.a.Component),f={calc:{padding:".4em",margin:".4em 0",background:"#eee"}},v=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={number:0,primes:[]},e.handleNumberChange=function(t){t.preventDefault(),e.setState({number:parseInt(t.target.value,10)||0})},e.handleFocus=function(e){e.target.select()},e.handleSubmit=function(t){t.preventDefault(),e.setState({primes:p.getPrimeFactors(e.state.number)})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Prime factors (factorization)"),r.a.createElement("form",{className:"pure-form pure-form-stacked",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"number"},"Select number"),r.a.createElement("input",{id:"number",type:"number",min:"2",max:"100000000",value:this.state.number,onFocus:this.handleFocus,onChange:this.handleNumberChange}),r.a.createElement("button",{type:"submit",className:"pure-button"},"Calculate")),this.state.primes.length>0&&r.a.createElement("div",{style:f.calc},this.state.primes.join(" x ")))}}]),a}(r.a.Component),y=a(11),F={calc:{padding:".4em",margin:".4em 0",background:"#eee",lineHeight:"1.5em"}},C=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={a:0,b:0,x:0,y:0,d:0,steps:[]},e.handleNumberChange=function(t){return function(a){a.preventDefault(),e.setState(Object(y.a)({d:0,x:0,y:0,steps:[]},t,parseInt(a.target.value,10)||0))}},e.handleFocus=function(e){e.target.select()},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.a,r=a.b,l=p.extendedEuclidean(n,r);l&&e.setState({d:l.d,x:l.x,y:l.y,steps:l.steps})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;return r.a.createElement("div",null,r.a.createElement("h1",null,"Extended Euclidean algorithm"),r.a.createElement("p",null,"Formula: ",r.a.createElement("i",null,"gcd(a, b) = a * x + b * y")),r.a.createElement("form",{className:"pure-form pure-form-stacked",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"number-a"},"Select number A"),r.a.createElement("input",{id:"number-a",type:"number",value:e.a||0,onFocus:this.handleFocus,onChange:this.handleNumberChange("a"),required:!0}),r.a.createElement("label",{htmlFor:"number-b"},"Select number B"),r.a.createElement("input",{id:"number-b",type:"number",value:e.b||0,onFocus:this.handleFocus,onChange:this.handleNumberChange("b"),required:!0}),r.a.createElement("button",{type:"submit",className:"pure-button"},"Calculate")),r.a.createElement("div",{style:F.calc},"gcd(",e.a||"a",", ",e.b||"b",")"," = ",e.a," * ",e.x," + ",e.b," * ",e.y," "," = ",r.a.createElement("strong",null,e.d)),e.steps&&e.steps.length>0&&r.a.createElement("table",{className:"pure-table pure-table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"q"),r.a.createElement("th",null,"r"),r.a.createElement("th",null,"s"),r.a.createElement("th",null,"t")),r.a.createElement("tr",null,r.a.createElement("th",null," "),r.a.createElement("th",null," "),r.a.createElement("th",null,Math.abs(e.a)),r.a.createElement("th",null,"1"),r.a.createElement("th",null,"0")),r.a.createElement("tr",null,r.a.createElement("th",null," "),r.a.createElement("th",null," "),r.a.createElement("th",null,Math.abs(e.b)),r.a.createElement("th",null,"0"),r.a.createElement("th",null,"1"))),r.a.createElement("tbody",null,e.steps.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,e.q),r.a.createElement("td",null,e.r),r.a.createElement("td",null,e.s),r.a.createElement("td",null,e.t))})))))}}]),a}(r.a.Component),S={calc:{padding:".4em",margin:".4em 0",background:"#eee",lineHeight:"1.5em"}},j=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={a:0,b:0,lcm:0,gcd:0,factors:{a:[],b:[]}},e.handleNumberChange=function(t){return function(a){a.preventDefault(),e.setState(Object(y.a)({},t,parseInt(a.target.value,10)||0))}},e.handleFocus=function(e){e.target.select()},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.a,r=a.b;e.setState({lcm:p.lcm(n,r),gcd:p.gcd(n,r),factors:{a:p.getPrimeFactors(n),b:p.getPrimeFactors(r)}})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;return r.a.createElement("div",null,r.a.createElement("h1",null,"Least common multiple"),r.a.createElement("p",null,"Formula: ",r.a.createElement("i",null,"lcm(a, b) = (a * b) / gcd(a, b)")),r.a.createElement("form",{className:"pure-form pure-form-stacked",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"number-a"},"Select number A"),r.a.createElement("input",{id:"number-a",type:"number",value:e.a||0,onFocus:this.handleFocus,onChange:this.handleNumberChange("a"),required:!0}),r.a.createElement("label",{htmlFor:"number-b"},"Select number B"),r.a.createElement("input",{id:"number-b",type:"number",value:e.b||0,onFocus:this.handleFocus,onChange:this.handleNumberChange("b"),required:!0}),r.a.createElement("button",{type:"submit",className:"pure-button"},"Calculate")),r.a.createElement("div",{style:S.calc},r.a.createElement("div",null,"gcd(",e.a,", ",e.b,") = ",e.gcd),r.a.createElement("div",null,"lcm(",e.a,", ",e.b,") = ",r.a.createElement("strong",null,e.lcm))),r.a.createElement("div",{style:S.calc},Object.keys(e.factors).map((function(t){return r.a.createElement("div",{key:t},t," = ",e.factors[t].join(" x ")||0)}))))}}]),a}(r.a.Component),x={calc:{padding:".4em",margin:".4em 0",background:"#eee",lineHeight:"1.5em"}},O=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={a:0,x:0,b:0,m:0,gcd:0,steps:[]},e.handleNumberChange=function(t){return function(a){a.preventDefault(),e.setState(Object(y.a)({},t,parseInt(a.target.value,10)||0))}},e.handleFocus=function(e){e.target.select()},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.a,r=a.b,l=a.m,u=p.congruence(n,r,l);e.setState({x:u.result,gcd:u.d,steps:u.steps})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;return r.a.createElement("div",null,r.a.createElement("h1",null,"Linear Congruence Equation"),r.a.createElement("p",null,"Formula: If ",r.a.createElement("i",null,"d | b")," where ",r.a.createElement("i",null,"d = gcd(a, m)")," then"," ",r.a.createElement("i",null,"a * x \u2261 b (mod m)")," has ",r.a.createElement("i",null,"d")," solutions."),r.a.createElement("form",{className:"pure-form pure-form-stacked",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"number-a"},"Select number A"),r.a.createElement("input",{id:"number-a",type:"number",value:e.a||0,onFocus:this.handleFocus,onChange:this.handleNumberChange("a"),required:!0}),r.a.createElement("label",{htmlFor:"number-b"},"Select number B"),r.a.createElement("input",{id:"number-b",type:"number",value:e.b||0,onFocus:this.handleFocus,onChange:this.handleNumberChange("b"),required:!0}),r.a.createElement("label",{htmlFor:"number-a"},"Select number M"),r.a.createElement("input",{id:"number-m",type:"number",value:e.m||0,onFocus:this.handleFocus,onChange:this.handleNumberChange("m"),required:!0}),r.a.createElement("button",{type:"submit",className:"pure-button"},"Calculate")),r.a.createElement("div",{style:x.calc},r.a.createElement("div",null,"gcd(",e.a,", ",e.m,") = ",r.a.createElement("strong",null,e.gcd)),r.a.createElement("div",null,r.a.createElement("i",null,e.a," * x \u2261 ",e.b," (mod ",e.m,") has"," "),e.x.length>0?r.a.createElement("span",null,e.x.length," solutions. ",r.a.createElement("br",null),"x ="," ",r.a.createElement("strong",null,e.x.join("; "))):r.a.createElement("span",null,"no solution."))),e.steps&&e.steps.length>0&&r.a.createElement("table",{className:"pure-table pure-table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"q"),r.a.createElement("th",null,"r"),r.a.createElement("th",null,"s"),r.a.createElement("th",null,"t")),r.a.createElement("tr",null,r.a.createElement("th",null," "),r.a.createElement("th",null," "),r.a.createElement("th",null,Math.abs(e.a)),r.a.createElement("th",null,"1"),r.a.createElement("th",null,"0")),r.a.createElement("tr",null,r.a.createElement("th",null," "),r.a.createElement("th",null," "),r.a.createElement("th",null,Math.abs(e.m)),r.a.createElement("th",null,"0"),r.a.createElement("th",null,"1"))),r.a.createElement("tbody",null,e.steps.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,e.q),r.a.createElement("td",null,e.r),r.a.createElement("td",null,e.s),r.a.createElement("td",null,e.t))})))))}}]),a}(r.a.Component),k=r.a.createElement(u.a,{basename:"/math"},r.a.createElement(b,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/prime-generator",component:g}),r.a.createElement(c.a,{path:"/prime-factors",component:v}),r.a.createElement(c.a,{path:"/extended-euclidean",component:C}),r.a.createElement(c.a,{path:"/lcm",component:j}),r.a.createElement(c.a,{path:"/congruence",component:O}))));Object(l.render)(k,document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.7c37507b.chunk.js.map