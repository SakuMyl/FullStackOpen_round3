(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(38)},18:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(11),c=t.n(u),i=(t(18),t(2)),o=t(3),l=t.n(o),m="https://limitless-ravine-10130.herokuapp.com/api/persons",s=function(){return r.a.createElement("button",{type:"submit",className:"submitButton"},"lis\xe4\xe4")},f=function(e){var n=e.message,t=e.type;return null===n?null:r.a.createElement("div",{className:t},n)},d=function(e){var n=e.name;return r.a.createElement("h1",null,n)},h=function(e){return r.a.createElement("div",null,"Rajaa n\xe4ytett\xe4vi\xe4: ",r.a.createElement("input",{value:e.constraint,onChange:e.handleChange}))},p=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{value:e.name,onChange:e.handleNameChange})),r.a.createElement("div",null,"numero: ",r.a.createElement("input",{value:e.number,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement(s,{text:"lis\xe4\xe4"}))))},v=function(e){var n=e.persons;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numerot"),n)},b=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),o=Object(i.a)(c,2),s=o[0],b=o[1],E=Object(a.useState)(""),g=Object(i.a)(E,2),j=g[0],w=g[1],C=Object(a.useState)(""),y=Object(i.a)(C,2),O=y[0],k=y[1],S=Object(a.useState)({message:null,error:!1}),N=Object(i.a)(S,2),P=N[0],L=N[1];Object(a.useEffect)(function(){l.a.get(m).then(function(e){return e.data}).then(function(e){return u(e)})},[]);var x=function(e){L(e),setTimeout(function(){L({message:null})},5e3)},B=function(e){var n;window.confirm("Poistetaanko ".concat(e.name,"?"))&&((n=e.id,l.a.delete("".concat(m,"/").concat(n)).then(function(e){return e.data})).then(function(){return u(t.filter(function(n){return n.id!==e.id}))}),x({message:"Poistettiin ".concat(e.name),type:"notification"}))};return r.a.createElement("div",null,r.a.createElement(d,{name:"Puhelinluettelo"}),r.a.createElement(f,{message:P.message,type:P.type}),r.a.createElement(h,{constraint:O,handleChange:function(e){k(e.target.value)}}),r.a.createElement(p,{name:s,number:j,handleSubmit:function(e){e.preventDefault();var n,a,r={name:s,number:j};if(t.map(function(e){return e.name}).includes(s)){if(window.confirm("".concat(s," on jo luettelossa, korvataanko vanha numero uudella?"))){var c=t.find(function(e){return e.name===r.name});(n=c.id,a=r,l.a.put("".concat(m,"/").concat(n),a).then(function(e){return e.data})).then(function(e){return u(t.map(function(n){return n.name===r.name?e:n}))}).catch(function(){return x({message:"".concat(r.name," oli jo poistettu"),type:"error"})}),b(""),w(""),x({message:"P\xe4ivitettiin ".concat(r.name),type:"notification"})}}else r.name&&r.number?(function(e){return l.a.post(m,e).then(function(e){return e.data})}(r).then(function(e){return u(t.concat(e))}),b(""),w(""),x({message:"Lis\xe4ttiin ".concat(r.name),type:"notification"})):window.alert("Anna nimi ja numero!")},handleNumberChange:function(e){w(e.target.value)},handleNameChange:function(e){b(e.target.value)}}),r.a.createElement(v,{persons:t.filter(function(e){return function(e){return"".concat(e.name.toLowerCase()," ").concat(e.number)}(e).includes(O.toLowerCase())}).map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("span",null,e.name," ",e.number," "),r.a.createElement("button",{onClick:function(){return B(e)}},"Poista"))})}))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.379385d3.chunk.js.map