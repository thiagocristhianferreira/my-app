(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{61:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){},74:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),s=a(45),r=a.n(s),i=a(17),l=(a(61),a(62),a(12)),o=a(32),j=a(54),d=a(14),u=a(46),b=(a(63),a.p+"static/media/Marvel_Logo.svg.bcea5054.png"),m=a(4),h=Object(c.createContext)(),x=function(e){var t=e.children,a=Object(c.useState)(null),s=Object(d.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(!0),o=Object(d.a)(l,2),j=o[0],x=o[1];return Object(c.useEffect)((function(){u.a.auth().onAuthStateChanged((function(e){i(e),x(!1)}))}),[]),j?Object(m.jsx)(n.a.Fragment,{className:"img-logo",children:Object(m.jsx)("img",{className:"img-logo",src:b,alt:"Marvel"})}):Object(m.jsx)(h.Provider,{value:{user:r},children:t})},O=function(e){var t=e.component,a=Object(j.a)(e,["component"]),n=Object(c.useContext)(h).user;return Object(m.jsx)(l.b,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return n?Object(m.jsx)(t,Object(o.a)({},e)):Object(m.jsx)(l.a,{to:"/"})}}))},p=(a(69),Object(c.createContext)()),f=a(52),v=(a(72),a(73),f.a.initializeApp({apiKey:"AIzaSyD1Ri3g1q8TGPAmVE3dBjK_Lmek5qwQ4LQ",authDomain:"my-app-98f0b.firebaseapp.com",databaseURL:"https://my-app-98f0b-default-rtdb.firebaseio.com",projectId:"my-app-98f0b",storageBucket:"my-app-98f0b.appspot.com",messagingSenderId:"1019379842225",appId:"1:1019379842225:web:58e61c650d3f3362787690"}));v.database().ref();var g=function(){var e=Object(l.f)(),t=Object(c.useRef)(null),a=Object(c.useRef)(null),n=Object(c.useContext)(p).setOnOff;return Object(m.jsx)("section",{children:Object(m.jsx)("div",{id:"login",children:Object(m.jsxs)("form",{method:"post",action:"",children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{htmlFor:"email_login",children:"Seu e-mail"}),Object(m.jsx)("input",{id:"email_login",name:"email_login",required:!0,type:"text",placeholder:"exemplo@email.com",ref:t})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{htmlFor:"senha_login",children:"Sua senha"}),Object(m.jsx)("input",{id:"senha_login",name:"senha_login",required:!0,type:"password",placeholder:"ex. 123456789",ref:a})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("input",{type:"checkbox",name:"manterlogado",id:"manterlogado",value:""}),Object(m.jsx)("label",{htmlFor:"manterlogado",children:"Manter-me logado"})]}),Object(m.jsx)("button",{className:"join-buttom",type:"submit",value:"Logar",onClick:function(c){var s,r;c.preventDefault(),e.push("/marvelcharacters"),s=t.current.value,r=a.current.value,v.auth().signInWithEmailAndPassword(s,r).then((function(){n("on")})).catch((function(e){return console.log(e.code,e.message),alert(e.message)})),alert("Bem-vindo "+t.current.value)},children:"Logar"}),Object(m.jsxs)("p",{className:"link",children:["Ainda n\xe3o tem conta?",Object(m.jsx)("a",{href:"/join",children:"Cadastre-se"})]})]})})})};a(74);var N=function(){var e=Object(l.f)(),t=Object(c.useRef)(null),a=Object(c.useRef)(null);return Object(m.jsx)("section",{children:Object(m.jsx)("div",{id:"cadastro",children:Object(m.jsxs)("form",{method:"POST",action:"",children:[Object(m.jsx)("h1",{children:"Cadastro"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{htmlFor:"nome_cad",children:"Seu nome"}),Object(m.jsx)("input",{id:"nome_cad",name:"nome_cad",type:"text",required:!0,placeholder:"ex. Fulano de Tal"})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{htmlFor:"email_cad",children:"Seu e-mail"}),Object(m.jsx)("input",{id:"email_cad",name:"email_cad",required:!0,type:"email",placeholder:"exemplo@email.com",ref:t})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{htmlFor:"senha_cad",children:"Sua senha"}),Object(m.jsx)("input",{id:"senha_cad",name:"senha_cad",required:!0,type:"password",placeholder:"ex. 123456789",ref:a})]}),Object(m.jsx)("button",{className:"join-buttom",type:"",value:"Cadastrar",onClick:function(c){var n,s;c.preventDefault(),n=t.current.value,s=a.current.value,v.auth().createUserWithEmailAndPassword(n,s).then((function(){alert("Bem-vindo "+n),e.push("/marvelcharacters")})).catch((function(e){console.log(e.code,e.message),alert(e.message)}))},children:"Cadastrar"}),Object(m.jsxs)("p",{className:"link",children:["J\xe1 tem conta?",Object(m.jsx)("a",{href:"/",children:" Ir para Login "})]})]})})})},C=a(19),w=a.n(C),y=a(23),k=a(85),S=a(87),F=a(86),P=a(55),I=a.p+"static/media/loading-buffering.c7d9f081.gif",L=a(76),R=a(79),T=Math.floor(Date.now()/1e3),A="27e31479f5d88e0538d72a4dbb03300b",_=L(T+"9a8b93a6feb42c60f88f3f4e82408e9642e7bfce"+A),E=function(e){return R("".concat("https://gateway.marvel.com:443/v1/public/characters?ts=").concat(T,"&apikey=").concat(A,"&hash=").concat(_,"&limit=").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data.results}))},q=function(e){return R("".concat("https://gateway.marvel.com:443/v1/public/comics?ts=").concat(T,"&apikey=").concat(A,"&hash=").concat(_,"&limit=").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data.results}))},G=a(0),B=a(50),M=a(51),D=a(27),J=a(49),U=a(48);a(80);var W=function(){var e=Object(l.f)(),t=Object(c.useContext)(p),a=t.titlePage,n=t.onOff,s=Object(c.useState)(!1),r=Object(d.a)(s,2),o=r[0],j=r[1],u=function(){return j(!o)},b=Object(c.useContext)(p).setOnOff;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(G.b.Provider,{value:{color:"#fff"},children:[Object(m.jsxs)("div",{className:"navbar",children:[Object(m.jsx)("div",{children:Object(m.jsx)(i.b,{to:"#",className:"menu-bars",children:Object(m.jsx)(D.b,{onClick:u})})}),Object(m.jsx)("div",{className:"header-text",children:Object(m.jsx)("h1",{children:a})}),Object(m.jsx)("div",{className:n})]}),Object(m.jsx)("nav",{className:o?"nav-menu active":"nav-menu",children:Object(m.jsxs)("ul",{className:"nav-menu-items",onClick:u,children:[Object(m.jsx)("li",{className:"navbar-toggle",children:Object(m.jsx)(i.b,{to:"#",className:"menu-bars",children:Object(m.jsx)(U.a,{})})}),Object(m.jsx)("li",{className:"nav-text",children:Object(m.jsxs)(i.b,{to:"/marvelcharacters",children:[Object(m.jsx)(J.a,{}),Object(m.jsx)("span",{children:"Marvel Characters"})]})}),Object(m.jsx)("li",{className:"nav-text",children:Object(m.jsxs)(i.b,{to:"/marvelcomics",children:[Object(m.jsx)(B.a,{}),Object(m.jsx)("span",{children:"Marvel Comics"})]})}),Object(m.jsx)("li",{className:"nav-text",children:Object(m.jsxs)(i.b,{to:"/favorites",children:[Object(m.jsx)(D.a,{}),Object(m.jsx)("span",{children:"Favoritos"})]})}),Object(m.jsx)("li",{className:"nav-text",children:Object(m.jsxs)(i.b,{to:"/perfil",children:[Object(m.jsx)(D.a,{}),Object(m.jsx)("span",{children:"Perfil"})]})}),Object(m.jsx)("li",{className:"nav-text",onClick:function(t){t.preventDefault(),v.auth().signOut().then((function(){b("")})).catch((function(e){return console.log(e.code,e.message),alert(e.message)})),e.push("/"),alert("At\xe9 logo :)")},children:Object(m.jsxs)(i.b,{to:"/",children:[Object(m.jsx)(M.a,{}),Object(m.jsx)("span",{children:"Sair"})]})})]})})]})})},z=(a(81),function(){var e=Object(c.useContext)(p),t=e.comics,a=e.setComics,n=e.loading,s=e.setLoading,r=e.setTitlePage,i=e.limitResultsApi,l=e.setLimitResultsApi,o=Object(c.useState)(""),j=Object(d.a)(o,2),u=j[0],b=j[1];Object(c.useEffect)((function(){var e=function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(i);case 2:t=e.sent,console.log(t),a(t),s(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r("Marvel Comics"),e()}),[i,a,s,r]);var h=function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,q(i);case 4:t=e.sent,a(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?Object(m.jsx)("div",{className:"img-loading",children:Object(m.jsx)("img",{src:I,alt:"Gif de Loading"})}):u?Object(m.jsxs)("section",{className:"w-100 bg-dark d-flex flex-wrap",children:[Object(m.jsx)(W,{}),Object(m.jsxs)(k.a.Row,{className:"w-100 mx-auto d-flex",children:[Object(m.jsx)(k.a.Group,{className:"w-25 p-1",children:Object(m.jsx)(k.a.Control,{type:"number",className:"w-100",placeholder:"1-100",max:"100",min:"1",onChange:function(e){e.target.value?l(e.target.value):l(25),h(Number(e.target.value))}})}),Object(m.jsx)(k.a.Group,{className:"w-100 p-1",children:Object(m.jsx)(k.a.Control,{type:"text",className:"w-100",placeholder:"Search Characters",onChange:function(e){return b(e.target.value)}})})]}),t.filter((function(e){return e.title.toLowerCase().startsWith(u)})).map((function(e){var t=e.title,a=e.description,c=e.id,n=e.thumbnail,s=n.extension,r=n.path,i=e.creators.items;return Object(m.jsxs)(S.a,{className:"m-4",style:{width:"18rem"},children:[Object(m.jsx)(S.a.Img,{variant:"top",src:"".concat(r,".").concat(s)}),Object(m.jsxs)(S.a.Body,{children:[Object(m.jsx)(S.a.Title,{children:t}),Object(m.jsx)(S.a.Text,{children:a})]}),Object(m.jsxs)(F.a,{className:"list-group-flush",children:[Object(m.jsx)(P.a,{children:"CRIADORES"}),i.map((function(e,t){return Object(m.jsx)(P.a,{children:e.name},t)}))]})]},c)}))]}):Object(m.jsxs)("section",{className:"w-100 bg-dark d-flex flex-wrap",children:[Object(m.jsx)(W,{}),Object(m.jsxs)(k.a.Row,{className:"w-100 mx-auto d-flex",children:[Object(m.jsx)(k.a.Group,{className:"w-25 p-1",children:Object(m.jsx)(k.a.Control,{type:"number",className:"w-100",placeholder:"1-100",max:"100",min:"1",onChange:function(e){e.target.value?l(e.target.value):l(25),h(Number(e.target.value))}})}),Object(m.jsx)(k.a.Group,{className:"w-100 p-1",children:Object(m.jsx)(k.a.Control,{type:"text",className:"w-100",placeholder:"Search Comics",onChange:function(e){return b(e.target.value)}})})]}),t.map((function(e){var t=e.title,a=e.description,c=e.id,n=e.thumbnail,s=n.extension,r=n.path,i=e.creators.items;return Object(m.jsxs)(S.a,{className:"m-4",style:{width:"18rem"},children:[Object(m.jsx)(S.a.Img,{variant:"top",src:"".concat(r,".").concat(s)}),Object(m.jsxs)(S.a.Body,{children:[Object(m.jsx)(S.a.Title,{children:t}),Object(m.jsx)(S.a.Text,{children:a})]}),Object(m.jsxs)(F.a,{className:"list-group-flush",children:[Object(m.jsx)(P.a,{children:"CRIADORES"}),i.map((function(e,t){return Object(m.jsx)(P.a,{children:e.name},t)}))]})]},c)}))]})}),K=a(53),Q=a.p+"static/media/favorite-off.1db21229.png",V=a.p+"static/media/favorite-on.a56f9304.png",H=(a(83),function(){var e=Object(c.useContext)(p),t=e.loading,a=e.setLoading,n=e.characters,s=e.setCharacters,r=e.setTitlePage,i=e.limitResultsApi,l=e.setLimitResultsApi,o=e.favoriteImg,j=e.setFavoriteImg,u=(e.favoritesCharacters,e.setFavoritesCharacters,function(e,t,a,c,n){var s={id:e,name:t,description:a,thumbnail:{extension:c,path:n}},r=JSON.parse(localStorage.getItem("favoritesCharacters"));if(console.log(r),r){if(console.log(r.find((function(t){return t.id===e}))),console.log("entrou 1"),r.find((function(t){return t.id===e}))){console.log("entrou 2");var i=r.filter((function(t){return t.id!==e}));return localStorage.setItem("favoritesCharacters",JSON.stringify(i)),j(!1)}return console.log("entrou 3"),localStorage.setItem("favoritesCharacters",JSON.stringify([].concat(Object(K.a)(r),[s]))),j(!0)}return console.log("entrou 4"),localStorage.setItem("favoritesCharacters",JSON.stringify([s])),j(!0)}),b=Object(c.useState)(""),h=Object(d.a)(b,2),x=h[0],O=h[1];Object(c.useEffect)((function(){a(!1),r("Marvel Characters"),function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(i);case 2:t=e.sent,s(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,s,a,r]);var f=function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,E(i);case 4:t=e.sent,s(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t?Object(m.jsx)("div",{className:"img-loading",children:Object(m.jsx)("img",{src:I,alt:"Gif de Loading"})}):x?Object(m.jsxs)("section",{className:"w-100 bg-dark d-flex flex-wrap",children:[Object(m.jsx)(W,{}),Object(m.jsxs)(k.a.Row,{className:"w-100 mx-auto d-flex",children:[Object(m.jsx)(k.a.Group,{className:"w-25 p-1",children:Object(m.jsx)(k.a.Control,{type:"number",className:"w-100",placeholder:"1-100",max:"100",min:"1",onChange:function(e){l(e.target.value),f(Number(e.target.value))}})}),Object(m.jsx)(k.a.Group,{className:"w-100 p-1",children:Object(m.jsx)(k.a.Control,{type:"text",className:"w-100",placeholder:"Search Characters",onChange:function(e){return O(e.target.value)}})})]}),n.filter((function(e){return e.name.toLowerCase().startsWith(x)})).map((function(e){var t=e.name,a=e.description,c=e.id,n=e.thumbnail,s=n.extension,r=n.path;return Object(m.jsxs)(S.a,{className:"m-4",style:{width:"18rem"},children:[Object(m.jsx)(S.a.Img,{variant:"top",src:"".concat(r,".").concat(s)}),Object(m.jsxs)(S.a.Body,{children:[Object(m.jsx)(S.a.Title,{children:t}),Object(m.jsx)("button",{onClick:function(e,t,a,c,n){console.log(e),u(e,t,a,c,n)},children:Object(m.jsx)("img",{src:o?V:Q,alt:"Favorite",style:{width:"30px"}})}),Object(m.jsx)(S.a.Text,{children:a})]})]},c)}))]}):Object(m.jsxs)("section",{className:"w-100 bg-dark d-flex flex-wrap",children:[Object(m.jsx)(W,{}),Object(m.jsxs)(k.a.Row,{className:"w-100 mx-auto d-flex",children:[Object(m.jsx)(k.a.Group,{className:"w-25 p-1",children:Object(m.jsx)(k.a.Control,{type:"number",className:"w-100",placeholder:"1-100",max:"100",min:"1",onChange:function(e){e.target.value?l(e.target.value):l(25),f(Number(e.target.value))}})}),Object(m.jsx)(k.a.Group,{className:"w-100 p-1",children:Object(m.jsx)(k.a.Control,{type:"text",className:"w-100",placeholder:"Search Characters",onChange:function(e){return O(e.target.value)}})})]}),n.map((function(e){var t=e.name,a=e.description,c=e.id,n=e.thumbnail,s=n.extension,r=n.path;return Object(m.jsxs)(S.a,{className:"m-4",style:{width:"18rem"},children:[Object(m.jsx)(S.a.Img,{variant:"top",src:"".concat(r,".").concat(s)}),Object(m.jsxs)(S.a.Body,{children:[Object(m.jsx)(S.a.Title,{children:t}),Object(m.jsx)(S.a.Subtitle,{className:"d-flex justify-content-end",children:Object(m.jsx)("button",{onClick:function(){u(c,t,a,s,r)},children:Object(m.jsx)("img",{src:o?V:Q,alt:"Favorite",style:{width:"30px"}})},c)}),Object(m.jsx)(S.a.Text,{children:a})]})]},c)}))]})});var X=function(e){var t=e.children,a=Object(c.useState)(""),n=Object(d.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)([]),l=Object(d.a)(i,2),o=l[0],j=l[1],u=Object(c.useState)([]),b=Object(d.a)(u,2),h=b[0],x=b[1],O=Object(c.useState)(!0),f=Object(d.a)(O,2),v=f[0],g=f[1],N=Object(c.useState)(""),C=Object(d.a)(N,2),w=C[0],y=C[1],k=Object(c.useState)(25),S=Object(d.a)(k,2),F=S[0],P=S[1],I=Object(c.useState)([]),L=Object(d.a)(I,2),R=L[0],T=L[1],A=Object(c.useState)(!1),_=Object(d.a)(A,2),E=_[0],q=_[1];return Object(m.jsx)(p.Provider,{value:{titlePage:s,setTitlePage:r,loading:v,setLoading:g,characters:o,setCharacters:j,comics:h,setComics:x,onOff:w,setOnOff:y,limitResultsApi:F,setLimitResultsApi:P,favoritesCharacters:R,setFavoritesCharacters:T,favoriteImg:E,setFavoriteImg:q},children:t})},Y=function(){var e=Object(c.useContext)(p),t=e.loading,a=e.setLoading,n=e.setTitlePage;return Object(c.useEffect)((function(){var e=function(){var e=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n("Perfil"),e()}),[a,n]),t?Object(m.jsx)("img",{src:I,alt:"Gif de Loading"}):Object(m.jsxs)("section",{className:"w-100 bg-dark",children:[Object(m.jsx)(W,{}),Object(m.jsxs)("form",{className:"needs-validation",novalidate:!0,children:[Object(m.jsxs)("div",{className:"form-row",children:[Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"validationCustom01",children:"Primeiro nome"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"validationCustom01",placeholder:"Nome",value:"Mark",required:!0}),Object(m.jsx)("div",{className:"valid-feedback",children:"Tudo certo!"})]}),Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"validationCustom02",children:"Sobrenome"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"validationCustom02",placeholder:"Sobrenome",value:"Otto",required:!0}),Object(m.jsx)("div",{className:"valid-feedback",children:"Tudo certo!"})]}),Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"validationCustomUsername",children:"Usu\xe1rio"}),Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("div",{className:"input-group-prepend"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"validationCustomUsername",placeholder:"Usu\xe1rio","aria-describedby":"inputGroupPrepend",required:!0}),Object(m.jsx)("div",{className:"invalid-feedback",children:"Por favor, escolha um nome de usu\xe1rio."})]})]})]}),Object(m.jsxs)("div",{className:"form-row",children:[Object(m.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(m.jsx)("label",{htmlFor:"validationCustom03",children:"Cidade"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"validationCustom03",placeholder:"Cidade",required:!0}),Object(m.jsx)("div",{className:"invalid-feedback",children:"Por favor, informe uma cidade v\xe1lida."})]}),Object(m.jsxs)("div",{className:"col-md-3 mb-3",children:[Object(m.jsx)("label",{htmlFor:"validationCustom04",children:"Estado"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"validationCustom04",placeholder:"Estado",required:!0}),Object(m.jsx)("div",{className:"invalid-feedback",children:"Por favor, informe um estado v\xe1lido."})]}),Object(m.jsxs)("div",{className:"col-md-3 mb-3",children:[Object(m.jsx)("label",{htmlFor:"validationCustom05",children:"CEP"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"validationCustom05",placeholder:"CEP",required:!0}),Object(m.jsx)("div",{className:"invalid-feedback",children:"Por favor, informe um CEP v\xe1lido."})]})]}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsxs)("div",{className:"form-check",children:[Object(m.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"invalidCheck",required:!0}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"invalidCheck",children:"Concordo com os termos e condi\xe7\xf5es"}),Object(m.jsx)("div",{className:"invalid-feedback",children:"Voc\xea deve concordar, antes de continuar."})]})}),Object(m.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Atualizar cadastro"})]})]})},Z=function(){var e=Object(c.useContext)(p),t=(e.favoritesCharacters,e.setFavoritesCharacters,e.loading,e.setLoading,e.setTitlePage);return Object(c.useEffect)((function(){t("Favoritos")}),[]),Object(m.jsxs)("section",{children:[Object(m.jsx)(W,{}),Object(m.jsxs)(S.a,{className:"m-4",style:{width:"18rem"},children:[Object(m.jsx)(S.a.Img,{variant:"top",src:"path".concat(".","extension")}),Object(m.jsxs)(S.a.Body,{children:[Object(m.jsx)(S.a.Title,{children:"name"}),Object(m.jsx)(S.a.Text,{children:"description"})]})]},"id")]})};var $=function(){return Object(m.jsxs)(X,{children:[Object(m.jsx)(O,{path:"/favorites",component:Z}),Object(m.jsx)(O,{path:"/perfil",component:Y}),Object(m.jsx)(O,{path:"/marvelcharacters",component:H}),Object(m.jsx)(O,{path:"/marvelcomics",component:z}),Object(m.jsx)(l.b,{path:"/join",component:N}),Object(m.jsx)(l.b,{exact:!0,path:"/",component:g})]})};var ee=function(){return Object(m.jsx)(x,{children:Object(m.jsx)($,{})})};r.a.render(Object(m.jsx)(i.a,{children:Object(m.jsx)(ee,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.ffd4fa7f.chunk.js.map