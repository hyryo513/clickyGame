(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),i=a.n(c),o=(a(14),a(3)),l=a(4),s=a(6),u=a(5),m=a(7);a(15);var d=function(e){var t;return t="start"===e.status?"Click an image to begin!":"end"===e.status?"You guessed incorrectly!":"You guessed correctly!",r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("ul",null,r.a.createElement("li",{className:"brand"},r.a.createElement("a",{href:"/"},"Clicky Game")),r.a.createElement("li",null,t),r.a.createElement("li",null,"Score:\xa0",e.score,"\xa0|\xa0Top Score:\xa0",e.topScore)))};a(16);var g=function(e){var t=e.children;return r.a.createElement("div",{className:"header"},t)};a(17);function h(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)}a(18);function p(e){var t=e.children;return r.a.createElement("div",{className:"footer"},t)}a(19);var v=function(e){return r.a.createElement("div",Object.assign({},e,{role:"img"}))},f=[{id:1,url:"/images/Jerry_Smith.png"},{id:2,url:"/images/Rick_Sanchez.png"},{id:3,url:"/images/Beth_Smith.png"},{id:4,url:"/images/Diane.jpg"},{id:5,url:"/images/bird-person.png"},{id:6,url:"/images/evilmorty.jpeg"},{id:7,url:"/images/gianthead.png"},{id:8,url:"/images/picklerick.png"},{id:9,url:"/images/meeseeks.png"},{id:10,url:"/images/morty.png"},{id:11,url:"/images/goldenford.png"},{id:12,url:"/images/Summer_is_cool.jpg"}],k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0,status:"start",clickedId:[]},a.loadImages=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}},a.handleClick=function(e){var t=a.state.score;a.state.clickedId.indexOf(e)<0?(a.state.clickedId.push(e),a.state.status,a.setState({status:""}),t=a.state.score+1,a.setState({score:t})):(t>a.state.topScore&&a.setState({topScore:t}),a.setState({score:0,status:"end",clickedId:[]})),a.loadImages(f)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.loadImages(f)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d,{score:this.state.score,topScore:this.state.topScore,status:this.state.status}),r.a.createElement(g,null,r.a.createElement("h1",null,"Clicky Game!"),r.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!")),r.a.createElement(h,null,f.map(function(t){return r.a.createElement(v,{key:t.id,id:t.id,style:{backgroundImage:"url(".concat(t.url,")")},onClick:function(){return e.handleClick(t.id)},className:"end"===e.state.status?"click-item shake":"click-item"})})),r.a.createElement(p,null,"Clicky Game!"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.f2523478.chunk.js.map