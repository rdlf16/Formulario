(this.webpackJsonpformulario=this.webpackJsonpformulario||[]).push([[0],{63:function(e,t,o){},68:function(e,t,o){},70:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(8),c=o.n(r),i=(o(63),o(40)),l=o(41),u=o(47),b=o(46),d=o(17),s=o(102),j=o(104),m=o(99),v=o(105),O=o(100),x=o(10);var f=function(e){var t=e.aoEnviar,o=e.validaCPF,a=e.validaNome,r=e.validaSobrenome,c=Object(n.useState)(""),i=Object(d.a)(c,2),l=i[0],u=i[1],b=Object(n.useState)(""),f=Object(d.a)(b,2),h=f[0],p=f[1],g=Object(n.useState)(""),S=Object(d.a)(g,2),C=S[0],k=S[1],y=Object(n.useState)(!0),F=Object(d.a)(y,2),P=F[0],B=F[1],N=Object(n.useState)(!0),W=Object(d.a)(N,2),D=W[0],E=W[1],T=Object(n.useState)({cpf:{valido:!0,texto:""}}),w=Object(d.a)(T,2),A=w[0],J=w[1],I=Object(n.useState)({nome:{valido:!0,texto:""}}),M=Object(d.a)(I,2),q=M[0],z=M[1],G=Object(n.useState)({sobrenome:{valido:!0,texto:""}}),H=Object(d.a)(G,2),K=H[0],L=H[1];return Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({nome:l,sobrenome:h,cpf:C,promocao:P,novidade:D})},children:[Object(x.jsx)(s.a,{value:l,onChange:function(e){u(e.target.value)},onBlur:function(e){z({nome:a(l)})},error:!q.nome.valido,helperText:q.nome.texto,id:"nome",label:"Nome",variant:"outlined",fullWidth:!0,margin:"normal"}),Object(x.jsx)(s.a,{value:h,onChange:function(e){p(e.target.value)},onBlur:function(e){L({sobrenome:r(h)})},error:!K.sobrenome.valido,helperText:K.sobrenome.texto,id:"sobrenome",label:"Sobrenome",variant:"outlined",fullWidth:!0,margin:"normal"}),Object(x.jsx)(s.a,{value:C,onChange:function(e){k(e.target.value)},onBlur:function(e){J({cpf:o(C)})},error:!A.cpf.valido,helperText:A.cpf.texto,id:"cpf",label:"CPF",variant:"outlined",fullWidth:!0,margin:"normal"}),Object(x.jsxs)(j.a,{textAlign:"center",margin:1,children:[Object(x.jsx)(m.a,{control:Object(x.jsx)(v.a,{checked:P,onChange:function(e){B(e.target.checked)},name:"promocao",color:"primary"}),label:"Promo\xe7\xf5es"}),Object(x.jsx)(m.a,{control:Object(x.jsx)(v.a,{checked:D,onChange:function(e){E(e.target.checked)},name:"novidades",color:"primary"}),label:"Novidades"})]}),Object(x.jsx)(j.a,{textAlign:"center",margin:3,children:Object(x.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",children:"Cadastrar"})})]})},h=(o(68),o(69),o(101)),p=o(72);function g(e){console.log(e)}function S(e){return 11!==e.length?{valido:!1,texto:"CPF precisa ter 11 digitos!"}:{valido:!0,texto:""}}function C(e){return""===e?{valido:!1,texto:"Digite um nome!"}:{valido:!0,texto:""}}function k(e){return""===e?{valido:!1,texto:"Digite um sobrenome!"}:{valido:!0,texto:""}}var y=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){return Object(x.jsxs)(h.a,{maxWidth:"sm",component:"article",children:[Object(x.jsx)(p.a,{align:"center",variant:"h3",component:"h1",children:"Formul\xe1rio de cadastro"}),Object(x.jsx)(f,{aoEnviar:g,validaCPF:S,validaNome:C,validaSobrenome:k})]})}}]),o}(n.Component);c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.9f45c660.chunk.js.map