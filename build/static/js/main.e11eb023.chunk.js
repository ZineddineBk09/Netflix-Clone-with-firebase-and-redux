(this["webpackJsonpnetflix-clone-personal"]=this["webpackJsonpnetflix-clone-personal"]||[]).push([[0],{118:function(e,t,c){},119:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){"use strict";c.r(t);var n=c(12),i=c.n(n),s=c(57),a=c.n(s),r=(c(70),c(71),c(14)),o=c(16),l=(c(72),c(6)),j=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(o.f)();return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>100?i(!0):i(!1)}))}),[]),Object(l.jsxs)("nav",{className:"nav ".concat(c&&"nav__black"," "),children:[Object(l.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png",alt:"Netflix Logo",onClick:function(){return s.push("/")}}),Object(l.jsx)("img",{className:"nav__avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netflix Logo",onClick:function(){return s.push("/profile")}})]})},d=c(0),b=c.n(d),u=c(1),h=c(60),p=c.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),O="974b0e3386ce4fce5b515ef880b0d756",f={fetchTrending:"/trending/all/week?api_key=".concat(O,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(O,"&with_network=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(O,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(O,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(O,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(O,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(O,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(O,"&with_genres=99")},m=(c(97),function(){var e,t,c=Object(n.useState)({}),i=Object(r.a)(c,2),s=i[0],a=i[1];return Object(n.useEffect)(Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(f.fetchNetflixOriginals);case 2:t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length)]);case 4:case"end":return e.stop()}}),e)}))),[]),console.log("MOVIEEE : ",s),Object(l.jsxs)("header",{className:"banner",style:{backgroundImage:"url('https://image.tmdb.org/t/p/original".concat(s.backdrop_path,"')"),backgroundPosition:"center center",backgroundSize:"cover"},children:[Object(l.jsx)("h1",{className:"banner__title",children:s.name}),Object(l.jsxs)("div",{className:"banner__buttons",children:[Object(l.jsx)("button",{className:"banner__btn",children:"Play"}),Object(l.jsx)("button",{className:"banner__btn",children:"My list"})]}),Object(l.jsx)("p",{className:"banner__description",children:(e=s.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)}),Object(l.jsx)("div",{className:"banner--fadeBottom"})]})}),_=(c(98),c(61)),x=c(64),g=c.n(x),v=function(e){var t=e.title,c=e.api,i=Object(n.useState)([]),s=Object(r.a)(i,2),a=s[0],o=s[1],j=Object(n.useState)(""),d=Object(r.a)(j,2),h=d[0],O=d[1];Object(n.useEffect)(Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(c);case 2:t=e.sent,o(t.data.results),console.log("MOVIEEEESSSS: ",t);case 5:case"end":return e.stop()}}),e)}))),[]);return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("h2",{className:"row__title",children:t}),Object(l.jsx)("div",{className:"row__movies ".concat("NETFLIX ORIGINALS"===t&&"netflix__originals"),children:a.map((function(e){return Object(l.jsxs)("div",{className:"row__movie",children:[Object(l.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original").concat("NETFLIX ORIGINALS"===t?null===e||void 0===e?void 0:e.poster_path:null===e||void 0===e?void 0:e.backdrop_path),alt:e.name,onClick:function(){return function(e){h?O(""):g()((null===e||void 0===e?void 0:e.title)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);O(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)}}),Object(l.jsx)("h3",{children:(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)})]})}))}),h&&Object(l.jsx)(_.a,{videoId:h,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},N=(c(118),function(){var e=Object(n.useState)({}),t=Object(r.a)(e,2);t[0],t[1];return Object(l.jsxs)("div",{className:"homeScreen",children:[Object(l.jsx)(j,{}),Object(l.jsx)(m,{}),Object(l.jsx)("h1",{children:"Netflix"}),Object(l.jsx)(v,{title:"NETFLIX ORIGINALS",api:f.fetchNetflixOriginals}),Object(l.jsx)(v,{title:"TRENDING NOW",api:f.fetchTrending}),Object(l.jsx)(v,{title:"TOP RATED",api:f.fetchTopRated}),Object(l.jsx)(v,{title:"ACTION MOVIES",api:f.fetchActionMovies}),Object(l.jsx)(v,{title:"COMEDY MOVIES",api:f.fetchComedyMovies}),Object(l.jsx)(v,{title:"HORROR MOVIES",api:f.fetchHorrorMovies}),Object(l.jsx)(v,{title:"ROMANCE MOVIES",api:f.fetchRomanceMovies}),Object(l.jsx)(v,{title:"DOCUMENTARIES",api:f.fetchDocumentaries})]})}),S=c(65),k=(c(119),c(41)),w=(c(120),c(125),k.a.initializeApp({apiKey:"AIzaSyCF7Zx9xj31R2H7dIZZrCQd6kJoVzXepOo",authDomain:"netflix-f54b3.firebaseapp.com",projectId:"netflix-f54b3",storageBucket:"netflix-f54b3.appspot.com",messagingSenderId:"705235842034",appId:"1:705235842034:web:2fe9fb4620653f54b3f16b",measurementId:"G-07NF5LQFGG"}),k.a.firestore(),k.a.auth()),I=(c(122),function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null);return Object(l.jsxs)("div",{className:"signInScreen",children:[Object(l.jsx)("h1",{children:"Sign in"}),Object(l.jsxs)("form",{action:"",className:"signInScreen__form",children:[Object(l.jsx)("input",{ref:e,type:"email",placeholder:"E-mail or Phone number",className:"signInScreen__input"}),Object(l.jsx)("input",{ref:t,type:"password",placeholder:"Password",className:"signInScreen__input"}),Object(l.jsx)("button",{type:"submit",className:"signInScreen__btn",onClick:function(c){c.preventDefault(),w.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){return alert(e.message)}))},children:"Sign In"}),Object(l.jsxs)("div",{className:"signInScreen__check",children:[Object(l.jsx)("input",{type:"checkbox",name:"",id:"check"}),Object(l.jsx)("p",{children:"Remember me"})]}),Object(l.jsxs)("p",{children:["New to Netflix?"," ",Object(l.jsx)("a",{href:"/",onClick:function(c){console.log("Email : ",e.current.value,"     Password : ",t.current.value),c.preventDefault(),w.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){})).catch((function(e){return alert(e.message)}))},children:"Sign up Now"})]})]})]})}),E=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(l.jsx)("div",{className:"login",children:Object(l.jsxs)("div",{className:"login__gradiant",children:[Object(l.jsxs)("div",{className:"login__top",children:[Object(l.jsx)("img",{className:"login__top__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),c&&Object(l.jsx)("button",{className:"login__top__btn",onClick:function(){return i(!1)},children:"Sign In"})]}),c?Object(l.jsxs)("div",{className:"login__body",children:[Object(l.jsx)("h1",{children:"Films, s\xe9ries TV et bien plus en illimit\xe9."}),Object(l.jsx)("h2",{children:"O\xf9 que vous soyez. Annulez \xe0 tout moment."}),Object(l.jsx)("h3",{children:"Pr\xeat \xe0 regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou r\xe9activer votre abonnement."}),Object(l.jsxs)("form",{action:"",children:[Object(l.jsx)("input",{type:"text",placeholder:"E-mail Addresse",className:"login__body__input"}),Object(l.jsx)("button",{className:"login__body__btn",children:"Get Started"})]})]}):Object(l.jsx)(I,{})]})})},y=i.a.createContext(),R=function(e){var t=e.children,c=Object(n.useState)(null),i=Object(r.a)(c,2),s=i[0],a=i[1];return Object(l.jsx)(y.Provider,{value:{login:function(e){a(e),console.log("USER BEFORE LOGOUT : ",e)},logout:function(){a(null)},selectUser:function(){return s},user:s},children:t})},M=function(){return Object(n.useContext)(y)},C=(c(123),function(){var e=M();return Object(l.jsxs)("div",{className:"profileScreen",children:[Object(l.jsx)("h1",{children:"Edit Profile"}),Object(l.jsxs)("div",{className:"profileScreen__body",children:[Object(l.jsx)("div",{className:"profileScreen__body__logo",children:Object(l.jsx)("img",{src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Profile Logo"})}),Object(l.jsxs)("div",{className:"profileScreen__body__info",children:[Object(l.jsx)("h3",{children:e.email}),Object(l.jsx)("h2",{children:"Plans (Current Plan: Premium)"}),Object(l.jsx)("h4",{children:"Renewal Date : 12/12/2021"}),Object(l.jsxs)("div",{className:"profileScreen__packages",children:[Object(l.jsxs)("div",{className:"profileScreen__package",children:[Object(l.jsxs)("div",{className:"profileScreen__package__descreption",children:[Object(l.jsx)("h4",{children:"Netflix Standard"}),Object(l.jsx)("p",{children:"1080p"})]}),Object(l.jsx)("button",{className:"profileScreen__package__btn",children:"Subscribe"})]}),Object(l.jsxs)("div",{className:"profileScreen__package",children:[Object(l.jsxs)("div",{className:"profileScreen__package__descreption",children:[Object(l.jsx)("h4",{children:"Netflix Basic"}),Object(l.jsx)("p",{children:"480p"})]}),Object(l.jsx)("button",{className:"profileScreen__package__btn",children:"Subscribe"})]}),Object(l.jsxs)("div",{className:"profileScreen__package",children:[Object(l.jsxs)("div",{className:"profileScreen__package__descreption ",children:[Object(l.jsx)("h4",{children:"Netflix Premium"}),Object(l.jsx)("p",{children:"4K+HDR"})]}),Object(l.jsx)("button",{className:"profileScreen__package__btn selected",children:"Current Package"})]}),Object(l.jsx)("button",{className:"profileScreen__signout",onClick:w.signOut(),children:"Sign Out"})]})]})]})]})});var P=function(){var e=M(),t=e.login,c=e.logout,i=e.user;return Object(n.useEffect)((function(){return w.onAuthStateChanged((function(e){e?t({uid:e.uid,email:e.email}):c()}))}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(S.a,{children:i?Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",children:Object(l.jsx)(N,{})}),Object(l.jsx)(o.a,{path:"/profile",children:Object(l.jsx)(C,{})})]}):Object(l.jsx)(E,{})})})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(R,{children:Object(l.jsx)(P,{})})}),document.getElementById("root"))},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){}},[[124,1,2]]]);
//# sourceMappingURL=main.e11eb023.chunk.js.map