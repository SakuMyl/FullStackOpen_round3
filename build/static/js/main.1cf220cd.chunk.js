(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(38)},18:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),u=n.n(c),l=(n(18),n(2)),o=n(3),i=n.n(o),m="/api/persons",s=function(){return r.a.createElement("button",{type:"submit",className:"submitButton"},"lis\xe4\xe4")},f=function(e){var t=e.message,n=e.type;return null===t?null:r.a.createElement("div",{className:n},t)},d=function(e){var t=e.name;return r.a.createElement("h1",null,t)},E=function(e){return r.a.createElement("div",{className:"Filter"},"Rajaa n\xe4ytett\xe4vi\xe4: ",r.a.createElement("input",{value:e.constraint,onChange:e.handleChange}))},h=function(e){return r.a.createElement("div",{className:"NewPersonForm"},r.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"nimi:"),r.a.createElement("td",null,r.a.createElement("input",{value:e.name,onChange:e.handleNameChange}))),r.a.createElement("tr",null,r.a.createElement("td",null,"numero:"),r.a.createElement("td",null,r.a.createElement("input",{value:e.number,onChange:e.handleNumberChange}))))),r.a.createElement("div",null,r.a.createElement(s,{text:"lis\xe4\xe4"}))))},p=function(e){var t=e.persons,n=e.handleRemove,a=t.map(function(e){return r.a.createElement("tbody",{className:"Person",key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(e)}},"Poista"))))});return r.a.createElement("div",{className:"Persons"},r.a.createElement("h2",null,"Numerot"),a)},b=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(l.a)(u,2),s=o[0],b=o[1],v=Object(a.useState)(""),g=Object(l.a)(v,2),y=g[0],j=g[1],w=Object(a.useState)(""),C=Object(l.a)(w,2),N=C[0],O=C[1],P=Object(a.useState)({message:null,type:"notification"}),S=Object(l.a)(P,2),k=S[0],L=S[1];Object(a.useEffect)(function(){i.a.get(m).then(function(e){return e.data}).then(function(e){return c(e)})},[]);var R=function(e){L(e),setTimeout(function(){L({message:null})},5e3)};return r.a.createElement("div",null,r.a.createElement(d,{name:"Puhelinluettelo"}),r.a.createElement(f,{message:k.message,type:k.type}),r.a.createElement(E,{constraint:N,handleChange:function(e){O(e.target.value)}}),r.a.createElement(h,{name:s,number:y,handleSubmit:function(e){e.preventDefault();var t,a={name:s,number:y};n.map(function(e){return e.name}).includes(s)?window.confirm("".concat(s," on jo luettelossa, korvataanko vanha numero uudella?"))&&(function(e,t){var n="".concat(m,"/").concat(e);return console.log(n),i.a.put(n,t).then(function(e){return e.data})}(n.find(function(e){return e.name===a.name}).id,a).then(function(e){return c(n.map(function(t){return t.name===a.name?e:t}))}).catch(function(e){R({message:"".concat(a.name," oli jo poistettu"),type:"error"})}),b(""),j(""),R({message:"P\xe4ivitettiin ".concat(a.name),type:"notification"})):(t=a,i.a.post(m,t).then(function(e){return e.data})).then(function(e){c(n.concat(e)),R({message:"Lis\xe4ttiin ".concat(a.name),type:"notification"}),b(""),j("")}).catch(function(e){R({message:e.response.data.error,type:"error"})})},handleNumberChange:function(e){j(e.target.value)},handleNameChange:function(e){b(e.target.value)}}),r.a.createElement(p,{persons:n.filter(function(e){return function(e){return"".concat(e.name.toLowerCase()," ").concat(e.number)}(e).includes(N.toLowerCase())}),handleRemove:function(e){var t;window.confirm("Poistetaanko ".concat(e.name,"?"))&&((t=e.id,i.a.delete("".concat(m,"/").concat(t)).then(function(e){return e.data})).then(function(){return c(n.filter(function(t){return t.id!==e.id}))}),R({message:"Poistettiin ".concat(e.name),type:"notification"}))}}))};u.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1cf220cd.chunk.js.map