(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(27)},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=(n(17),n(1)),c=n.n(s),l=n(4),u=n(5),m=n(6),p=n(9),v=n(7),f=n(10),h=(n(21),n(23),n(8)),d=n.n(h);function g(e){var t=e.alt,n=e.poster;return r.a.createElement("img",{src:n,alt:t,title:t})}function y(e){var t=e.genre;return r.a.createElement("span",{className:"Genre"},t,", ")}function w(e){var t=e.synopsis;return r.a.createElement(d.a,{className:"Synopsis",text:t,maxLine:"5",ellipsis:"..."})}var E=function(e){var t=e.title,n=e.poster,a=e.genres,o=e.synopsis;return r.a.createElement("figure",{className:"Movie"},r.a.createElement("div",{className:"Movie_Columns"},r.a.createElement(g,{alt:t,poster:n})),r.a.createElement("figcaption",null,r.a.createElement("h2",null,t),a.map(function(e,t){return r.a.createElement(y,{genre:e,key:t})}),r.a.createElement(w,{synopsis:o})))},_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return r.a.createElement(E,{key:e.id,title:e.title,poster:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=like_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){console.log(e)})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.movies?"App":"App--loading"},this.state.movies?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.1cb5d993.chunk.js.map