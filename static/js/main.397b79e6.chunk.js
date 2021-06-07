(this["webpackJsonpav-weather"]=this["webpackJsonpav-weather"]||[]).push([[0],{15:function(t,n,e){},39:function(t,n,e){},50:function(t,n,e){"use strict";e.r(n);var a,c,r,i,o,s,l,u,d,h,j,f,x,b,m,p,O,g,v,w,y=e(0),N=e.n(y),k=e(19),M=e.n(k),A=(e(39),e(14)),E=e(5),z=e(8),_=(e(15),e.p+"static/media/logo.19da3b99.png"),S=e(31),R=e.n(S),F=e(3),I=e(4),K=I.a.div(a||(a=Object(F.a)(["\n  width: 100vw;\n  height: 100vh;\n  overflow-y: hidden;\n  background-color: #232831;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),T=I.a.form(c||(c=Object(F.a)(["\n  background-color: #c3c7d0;\n  height: 36px;\n  width: 210px;\n  border-radius: 20px 20px 20px 20px;\n  display: flex;\n"]))),C=I.a.button(r||(r=Object(F.a)(["\n  align-self: center;\n  color: #eeeeee;\n"]))),W=I.a.p(i||(i=Object(F.a)(["\n  color: red;\n  font-size: 0.85rem;\n  visibility: ",";\n"])),(function(t){return"ERROR"===t.error?"visible":"hidden"})),D=e(1),H=function(){var t=Object(E.f)(),n=Object(y.useState)(""),e=Object(z.a)(n,2),a=e[0],c=e[1],r=Object(y.useState)("OK"),i=Object(z.a)(r,2),o=i[0],s=i[1],l="https://avwx.rest/api/station/".concat(a,"?&format=json"),u="".concat("Ex1m3Sv8KRhS4iHe_YKWmsPA7hhUNIfHOC4OEkKbTmQ"),d=function(){s("ERROR"),setTimeout((function(){s("OK")}),2200)};return Object(D.jsxs)(K,{children:[Object(D.jsx)("img",{src:_,alt:"logo"}),Object(D.jsx)("h1",{children:"AvWeather"}),Object(D.jsxs)(T,{onChange:function(t){return c(t.target.value)},onSubmit:function(n){return function(n){n.preventDefault(),c(""),fetch(l,{headers:{Authorization:"TOKEN ".concat(u)}}).then((function(n){return n.ok?t.push("/station/".concat(a)):d()}))}(n)},children:[Object(D.jsx)("input",{type:"text",placeholder:"ICAO...",value:a}),Object(D.jsx)(C,{className:"material-icon",type:"submit",children:Object(D.jsx)(R.a,{className:"material-icon primary"})})]}),Object(D.jsx)(W,{error:o,children:"Error: Airport not found"})]})},L=e(32),U=e.n(L),B=e(33),Y=e.n(B),P=I.a.div(o||(o=Object(F.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: #232831;\n  font-size: 0.85rem;\n  display: grid;\n  place-items: center;\n"]))),Q=I.a.nav(s||(s=Object(F.a)(["\n  background-color: #252e41;\n  width: 100%;\n  height: 50px;\n  border-radius: 0 0 8px 8px;\n  display: flex;\n  justify-content: space-between;\n"]))),J=I.a.button(l||(l=Object(F.a)(["\n  align-self: center;\n  color: #eeeeee;\n  margin-left: ",";\n  margin-right: ",";\n"])),(function(t){return t.left?"10px":""}),(function(t){return t.right?"10px":""})),V=I.a.div(u||(u=Object(F.a)(["\n  background-color: #232831;\n  min-height: 100vh;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 500px) {\n    width: 500px;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]))),X=I.a.div(d||(d=Object(F.a)(["\n  background-color: #252e41;\n  height: ",";\n  max-height: ",";\n  width: 95%;\n  margin-top: 5%;\n  border-radius: 8px 8px 8px 8px;\n  align-self: center;\n  overflow-y: scroll;\n  /* small devices */\n  @media (max-height: 600px) {\n    height: ",";\n    max-height: ",";\n    font-size: 0.85rem;\n    p {\n      font-size: 0.75rem;\n    }\n  }\n"])),(function(t){return"metar"===t.info?"auto":"160px"}),(function(t){return"metar"===t.info?"140px;":"auto"}),(function(t){return"metar"===t.info?"auto":"120px"}),(function(t){return"metar"===t.info?"110px;":"auto"})),G=I.a.div(h||(h=Object(F.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-right: 10px;\n  margin-left: 10px;\n  height: 35px;\n  align-items: center;\n  margin-top: 5px;\n"]))),q=I.a.div(j||(j=Object(F.a)(["\n  display: flex;\n  flex-direction: row;\n  align-self: center;\n  @media (max-height: 600px) {\n    font-size: 0.85rem;\n  }\n"]))),Z=I.a.p(f||(f=Object(F.a)(["\n  padding: 1.5px;\n  font-weight: 700;\n  font-size: 0.85rem;\n  color: #eeeeee;\n  border-radius: 5px 5px 5px 5px;\n  text-align: center;\n  background-color: ",";\n  @media (max-height: 600px) {\n    font-size: 0.75rem;\n  }\n"])),(function(t){return"IMC"===t.conditions?"#e49400":"#02c802"})),$=I.a.p(x||(x=Object(F.a)(['\n  font-family: "RobotoMono", sans-serif;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  margin-top: 0;\n']))),tt=I.a.div(b||(b=Object(F.a)(["\n  display: flex;\n  width: 100%;\n  height: auto;\n  justify-content: flex-end;\n  top: auto;\n  margin-bottom: 10px;\n"]))),nt=I.a.p(m||(m=Object(F.a)(["\n  font-size: 0.8rem;\n  text-align: end;\n  margin-bottom: 0px;\n  margin-right: 10px;\n  margin-top: 0;\n  height: 100%;\n  color: ",";\n  @media (max-height: 600px) {\n    font-size: 0.75rem;\n    margin-top: 5px;\n  }\n"])),(function(t){return t.timeAgo.includes("minutes")?"#02c802":"red"})),et=I.a.button(p||(p=Object(F.a)(["\n  color: #c3c7d0;\n  position: absolute;\n  bottom: 2%;\n  align-self: center;\n  background-color: #252e41;\n  border-radius: 25px 25px 25px 25px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  width: 140px;\n  @media (min-width: 500px) {\n    bottom: 10%;\n  }\n"]))),at=function(t){var n=Object(E.f)(),e=t.nearby;return Object(D.jsxs)(Q,{children:[Object(D.jsx)(J,{left:!0,onClick:function(t){return n.goBack()},children:Object(D.jsx)(U.a,{className:"material-icon"})}),Object(D.jsx)("h2",{className:"material-icon ".concat(e&&"medium"),children:t.iata?t.iata+"/"+t.icao:t.icao}),Object(D.jsx)(J,{onClick:function(n){return t.seeOnMap()},children:Object(D.jsx)(Y.a,{className:"material-icon right ".concat(e&&"invisible")})})]})},ct=I.a.div(O||(O=Object(F.a)(["\n  background-color: #232831;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),rt=function(t){var n=Object(E.g)().coords,e="".concat("AIzaSyAw_96zJQPmvu3kANMnNbclUzUE6UuXGFs"),a="https://www.google.com/maps/embed/v1/view?\n\t\t\t\t\t\t\t\t\t\tcenter=".concat(n,"&\n\t\t\t\t\t\t\t\t\t\tzoom=14&\n\t\t\t\t\t\t\t\t\t\tkey=").concat(e,"&\n\t\t\t\t\t\t\t\t\t\tmaptype=satellite");return Object(D.jsxs)("div",{className:"main",children:[Object(D.jsx)(at,{nearby:!0,icao:"Location"}),Object(D.jsx)(ct,{children:Object(D.jsx)("iframe",{className:"map",title:"maps",src:a})})]})},it=e(17),ot=e.n(it),st=e(20),lt=function(t){return Object(D.jsxs)(X,{info:"metar",children:[Object(D.jsxs)(G,{children:[Object(D.jsx)("p",{style:{fontWeight:600},children:"METAR"}),Object(D.jsxs)(q,{children:[Object(D.jsx)("p",{style:{marginRight:10},children:t.windInfo}),Object(D.jsx)(Z,{conditions:t.conditions,children:t.conditions})]})]}),Object(D.jsx)($,{children:t.raw}),Object(D.jsx)(tt,{children:Object(D.jsx)(nt,{timeAgo:t.timeAgo,children:t.timeAgo})})]})},ut=function(t){return Object(D.jsxs)(X,{children:[Object(D.jsx)("p",{style:{fontWeight:600,marginLeft:10,marginBottom:5},children:"TAF"}),Object(D.jsx)($,{children:t.raw})]})},dt=function(t){return Object(D.jsxs)(X,{children:[Object(D.jsx)("p",{style:{fontWeight:600,marginLeft:10,marginBottom:5},children:"Airport Info"}),Object(D.jsxs)("div",{className:"flex col",children:[Object(D.jsxs)("p",{className:"text small",children:[Object(D.jsx)("span",{style:{fontWeight:700},children:"Coordinates: "}),t.lat," ",t.lon]}),Object(D.jsxs)("p",{className:"text small",children:[Object(D.jsx)("span",{style:{fontWeight:700},children:"Elevation: "})," ",t.elevFt,"ft / ",t.elevM,"m"," "]}),t.getRunwaysList()]})]})},ht=function(){var t=Object(E.g)().ident,n="https://avwx.rest/api/station/".concat(t,"?&format=json"),e="https://avwx.rest/api/metar/".concat(t,"?&format=json"),a="https://avwx.rest/api/taf/".concat(t,"?&format=json"),c="".concat("Ex1m3Sv8KRhS4iHe_YKWmsPA7hhUNIfHOC4OEkKbTmQ"),r=Object(y.useState)({}),i=Object(z.a)(r,2),o=i[0],s=i[1],l=Object(y.useState)({}),u=Object(z.a)(l,2),d=u[0],h=u[1],j=Object(y.useState)({}),f=Object(z.a)(j,2),x=f[0],b=f[1],m=Object(y.useState)(!0),p=Object(z.a)(m,2),O=p[0],g=p[1],v=Object(y.useState)(!0),w=Object(z.a)(v,2),N=w[0],k=w[1],M=Object(y.useState)(!0),A=Object(z.a)(M,2),_=A[0],S=A[1],R=Object(E.f)(),F=function(){var t=Object(st.a)(ot.a.mark((function t(){return ot.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n,{headers:{Authorization:"TOKEN ".concat(c)}}).then((function(t){return t.json()})).then((function(t){var n={iata:t.iata,icao:t.icao,lat:t.latitude,lon:t.longitude,name:t.name,country:t.country,runways:t.runways,elev_ft:t.elevation_ft,elev_m:t.elevation_m};s(n),g(!1)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error("Station fetch error: "+t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=Object(st.a)(ot.a.mark((function t(){return ot.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,{headers:{Authorization:"TOKEN ".concat(c)}}).then((function(t){return t.json()})).then((function(t){var n=C(t),e={raw:t.raw,flight_rules:t.flight_rules,wind_direction:t.wind_direction.value,wind_speed:t.wind_speed.value,since:n};h(e),k(!1)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error("METAR fetch error: "+t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),K=function(){var t=Object(st.a)(ot.a.mark((function t(){return ot.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(a,{headers:{Authorization:"TOKEN ".concat(c)}}).then((function(t){return t.json()})).then((function(t){var n={raw:t.raw};b(n),S(!1)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error("TAF fetch error: "+t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),T=function(t){var n=t;return(n=Math.floor(100*n)/100).toFixed(2)},C=function(t){var n=(new Date).getTimezoneOffset(),e=new Date,a=parseInt(n/60),c=parseInt(t.raw.slice(5,7)),r=parseInt(t.raw.slice(7,9))-a;r<0&&(r%=12);var i=parseInt(t.raw.slice(9,11)),o=function(t){var n=Math.floor((new Date-t)/1e3),e=n/31536e3;return e>1?Math.floor(e)+" years":(e=n/2592e3)>1?Math.floor(e)+" months":(e=n/86400)>1?Math.floor(e)+" days":(e=n/3600)>1?Math.floor(e)+" hours":(e=n/60)>1?Math.floor(e)+" minutes":Math.floor(n)+" seconds"}(new Date(e.getFullYear(),e.getMonth(),c,r,i,0,0));return o.includes("minutes")?"".concat(o," ago"):"expired"};return Object(y.useEffect)((function(){return I()}),[]),Object(y.useEffect)((function(){return F()}),[]),Object(y.useEffect)((function(){return K()}),[]),N||_||O?Object(D.jsx)(P,{children:Object(D.jsx)("h1",{children:"Loading..."})}):Object(D.jsxs)("div",{className:"main",children:[Object(D.jsx)(at,{iata:o.iata,icao:o.icao,seeOnMap:function(){var t=T(o.lat)+","+T(o.lon);R.push("/location/".concat(t,"/").concat(o.icao))}}),Object(D.jsxs)(V,{children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{className:"text",children:o.name}),Object(D.jsx)("p",{className:"text",children:o.country})]}),Object(D.jsx)(lt,{windInfo:function(){var t=null===d.wind_direction?"variable":"".concat(d.wind_direction,"\xba"),n=0===d.wind_speed?"Wind calm":"".concat(d.wind_speed," kts ");return"Wind calm"===n?n:t+" "+n}(),conditions:d.flight_rules.includes("VFR")?"VMC":"IMC",raw:d.raw,timeAgo:d.since}),Object(D.jsx)(ut,{raw:x.raw}),Object(D.jsx)(dt,{lat:function(t){var n=t;return(n=Math.floor(100*n)/100)<0?"S ".concat(Math.abs(n.toFixed(2))):"N ".concat(Math.abs(n.toFixed(2)))}(o.lat),lon:function(t){var n=t;return(n=Math.floor(100*n)/100)<0?"W ".concat(Math.abs(n.toFixed(2))):"E ".concat(Math.abs(n.toFixed(2)))}(o.lon),elevFt:o.elev_ft,elevM:o.elev_m,getRunwaysList:function(){var t=o.runways.map((function(t){return Object(D.jsxs)("span",{className:"text small left data-font runway",children:[t.ident1,"/",t.ident2]})}));return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("p",{className:"text left small",children:[Object(D.jsx)("span",{className:"bold",children:"Runways: "})," "," "+o.runways.length]}),Object(D.jsx)("p",{className:"text left small",children:t})]})}}),Object(D.jsx)(et,{onClick:function(t){return function(){var t=T(o.lat)+","+T(o.lon);R.push("/nearby/".concat(t,"/").concat(o.icao))}()},children:Object(D.jsx)("p",{children:"FIND NEARBY"})})]})]})},jt=I.a.div(g||(g=Object(F.a)(["\n  background-color: #252e41;\n  height: 100px;\n  width: 95%;\n  margin-top: 5%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 8px 8px 8px 8px;\n  align-self: center;\n  overflow-y: scroll;\n  /* small devices */\n  @media (max-height: 600px) {\n    height: 80px;\n    font-size: 0.85rem;\n    p {\n      font-size: 0.75rem;\n    }\n  }\n"]))),ft=I.a.div(v||(v=Object(F.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-right: 10px;\n  justify-content: space-between;\n"]))),xt=I.a.div(w||(w=Object(F.a)(["\n  background-color: #232831;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n"]))),bt=function(t){return Object(D.jsxs)(jt,{children:[Object(D.jsxs)(ft,{children:[Object(D.jsx)("p",{className:"text",children:t.name+" "+t.country}),Object(D.jsx)("p",{className:"text bold",children:t.icao})]}),Object(D.jsx)("div",{className:"",children:Object(D.jsx)("p",{className:"text",children:function(t){var n=t;return(n=Math.floor(100*n)/100).toFixed(0)}(t.dist)+" Nm from "+t.from})})]})},mt=function(t){var n="https://avwx.rest/api/station/near/".concat(t.coords,"?n=6&airport=true&format=json"),e="".concat("Ex1m3Sv8KRhS4iHe_YKWmsPA7hhUNIfHOC4OEkKbTmQ"),a=Object(y.useState)([]),c=Object(z.a)(a,2),r=c[0],i=c[1],o=r.slice(1).map((function(n){return Object(D.jsx)(A.b,{to:"/station/".concat(n.station.icao),className:"link",children:Object(D.jsx)(bt,{icao:n.station.icao,name:n.station.name,dist:n.nautical_miles,country:n.station.country,from:t.ident},n.station.iata)})}));return Object(y.useEffect)((function(){fetch(n,{headers:{Authorization:"TOKEN ".concat(e)}}).then((function(t){return t.json()})).then((function(t){i(t)})).catch((function(t){return console.log("Nearby list fetch error: "+t)}))}),[]),Object(D.jsx)(D.Fragment,{children:o})},pt=function(){var t=Object(E.g)().coords,n=Object(E.g)().ident;return Object(D.jsxs)("div",{className:"main",children:[Object(D.jsx)(at,{nearby:!0,icao:"Nearby Airports"}),Object(D.jsx)(xt,{children:Object(D.jsx)("div",{children:Object(D.jsx)(mt,{coords:t,ident:n})})})]})};var Ot=function(){return Object(D.jsx)(A.a,{children:Object(D.jsxs)(E.c,{children:[Object(D.jsx)(E.a,{exact:!0,path:"/avweather",component:H}),Object(D.jsx)(E.a,{path:"/station/:ident",component:ht}),Object(D.jsx)(E.a,{path:"/nearby/:coords/:ident",component:pt}),Object(D.jsx)(E.a,{path:"/location/:coords/:ident",component:rt})]})})};M.a.render(Object(D.jsx)(N.a.StrictMode,{children:Object(D.jsx)(Ot,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.397b79e6.chunk.js.map