(this.webpackJsonpshowcase=this.webpackJsonpshowcase||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(24),r=n.n(i),o=n(25),l=n(13),b=n(20),j="TOGGLE_MENU",d="TOGGLE_LOADING",u={sideMenu:!1,loading:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(b.a)(Object(b.a)({},e),{},{sideMenu:!e.sideMenu});case d:return Object(b.a)(Object(b.a)({},e),{},{loading:!e.loading});default:return e}},m=(n(55),n(6)),x=n(7),O=n(9),k=n(8),p=(n(56),n(119)),f=n(120),w=n(121),v=n(122),N=n(123),g=n(124),y=n(125),B=n(126),C=function(e){return new RegExp(e)},S=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),L=n(4),M=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={home:!!C("/home").test(window.location.href),about:!!C("/about").test(window.location.href),skills:!!C("/skills").test(window.location.href),contact:!!C("/contact").test(window.location.href),work:!!C("/work").test(window.location.href)},e.openLink=function(e){switch(e){case"facebook":window.open("https://www.facebook.com/bar.linder");break;case"linkedin":window.open("https://www.linkedin.com/in/bar-linder-2242a9166");break;case"github":window.open("https://github.com/rednil-rab");break;default:return}},e.url={home:"/home",about:"/about",skills:"/contact",work:"/work"},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this,t=function(){e.setState({home:!!C("/cv").test(window.location.href),about:!!C("/about").test(window.location.href),skills:!!C("/skills").test(window.location.href),work:!!C("/work").test(window.location.href),contact:!!C("/contact").test(window.location.href)})},n=function(n){switch(t(),n){case 1:e.setState({home:!0});break;case 2:e.setState({about:!0});break;case 3:e.setState({skills:!0});break;case 4:e.setState({work:!0});break;case 5:e.setState({contact:!0});break;default:return}};return Object(c.jsxs)("div",{className:"side-nav",children:[Object(c.jsx)("h2",{children:"Bar"}),Object(c.jsxs)("div",{className:"icon-container",children:[this.state.home?Object(c.jsx)(L.b,{to:"/home",children:Object(c.jsx)("h3",{onMouseLeave:function(){return t()},children:"Home"})}):Object(c.jsx)(p.a,{onMouseEnter:function(){return n(1)},className:"icon"}),this.state.about?Object(c.jsx)(L.b,{to:"/about",children:Object(c.jsx)("h3",{onMouseLeave:function(){return t()},children:"About"})}):Object(c.jsx)(f.a,{onMouseEnter:function(){return n(2)},className:"icon"}),this.state.skills?Object(c.jsx)(L.b,{to:"/skills",children:Object(c.jsx)("h3",{onMouseLeave:function(){return t()},children:"Skills"})}):Object(c.jsx)(w.a,{onMouseEnter:function(){return n(3)},className:"icon"}),this.state.work?Object(c.jsx)(L.b,{to:"/work",children:Object(c.jsx)("h3",{onMouseLeave:function(){return t()},children:"Work"})}):Object(c.jsx)(v.a,{onMouseEnter:function(){return n(4)},className:"icon"}),this.state.contact?Object(c.jsx)(L.b,{to:"/contact",children:Object(c.jsx)("h3",{onMouseLeave:function(){return t()},children:"Contact"})}):Object(c.jsx)(N.a,{onMouseEnter:function(){return n(5)},className:"icon"})]}),Object(c.jsxs)("div",{className:"icon-container links",children:[Object(c.jsx)(g.a,{onClick:function(){return e.openLink("github")},className:"icon"}),Object(c.jsx)(y.a,{onClick:function(){return e.openLink("linkedin")},className:"icon"}),Object(c.jsx)(B.a,{onClick:function(){return e.openLink("facebook")},className:"icon"})]})]})}}]),n}(a.Component),E=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={home:!!C("/home").test(window.location.href),about:!!C("/about").test(window.location.href),skills:!!C("/skills").test(window.location.href),contact:!!C("/contact").test(window.location.href),work:!!C("/work").test(window.location.href)},e.openLink=function(e){switch(e){case"facebook":window.open("https://www.facebook.com/bar.linder");break;case"linkedin":window.open("https://www.linkedin.com/in/bar-linder-2242a9166");break;case"github":window.open("https://github.com/rednil-rab");break;case"phone":window.open("tel: +972504527530");break;default:return}},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this,t=function(t){switch(e.setState({home:!1,about:!1,skills:!1,work:!1,contact:!1}),t){case 1:e.setState({home:!0});break;case 2:e.setState({about:!0});break;case 3:e.setState({skills:!0});break;case 4:e.setState({work:!0});break;case 5:e.setState({contact:!0});break;default:return}};return Object(c.jsx)("div",{className:"side-nav",children:Object(c.jsxs)("div",{className:"icon-container-mob",children:[this.state.home?Object(c.jsx)(L.b,{to:"/cv",children:Object(c.jsx)("h3",{onClick:function(){return t(1)},children:"Home"})}):Object(c.jsx)(L.b,{to:"/cv",children:Object(c.jsx)(p.a,{onClick:function(){return t(1)},className:"icon"})}),this.state.about?Object(c.jsx)(L.b,{to:"/about",children:Object(c.jsx)("h3",{onClick:function(){return t(2)},children:"About"})}):Object(c.jsxs)(L.b,{to:"/about",children:[" ",Object(c.jsx)(f.a,{onClick:function(){return t(2)},className:"icon"})]}),this.state.skills?Object(c.jsx)(L.b,{to:"/skills",children:Object(c.jsx)("h3",{onClick:function(){return t(3)},children:"Skills"})}):Object(c.jsx)(L.b,{to:"/skills",children:Object(c.jsx)(w.a,{onClick:function(){return t(3)},className:"icon"})}),this.state.work?Object(c.jsx)(L.b,{to:"/work",children:Object(c.jsx)("h3",{onClick:function(){return t(4)},children:"Work"})}):Object(c.jsx)(L.b,{to:"/work",children:Object(c.jsx)(v.a,{onClick:function(){return t(4)},className:"icon"})}),this.state.contact?Object(c.jsx)(L.b,{to:"/contact",children:Object(c.jsx)("h3",{onClick:function(){return t(5)},children:"Contact"})}):Object(c.jsx)(L.b,{to:"/contact",children:Object(c.jsx)(N.a,{onClick:function(){return t(5)},className:"icon"})})]})})}}]),n}(a.Component),I=Object(l.b)((function(e){return{menu:e.sideMenu}}))(E),D=n(5),A=(n(58),n.p+"static/media/giantface.3569a95d.jpg"),_=n(19),T=n(127),F=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e.openLink=function(e){switch(e){case"facebook":window.open("https://www.facebook.com/bar.linder");break;case"linkedin":window.open("https://www.linkedin.com/in/bar-linder-2242a9166");break;case"github":window.open("https://github.com/rednil-rab");break;case"phone":window.open("tel: +972504527530");break;default:return}},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"icon-container-mob links",children:[Object(c.jsx)(g.a,{onClick:function(){return e.openLink("github")},className:"icon"}),Object(c.jsx)(y.a,{onClick:function(){return e.openLink("linkedin")},className:"icon"}),Object(c.jsx)(B.a,{onClick:function(){return e.openLink("facebook")},className:"icon"}),Object(c.jsx)(T.a,{onClick:function(){return e.openLink("phone")},className:"icon"})]})}}]),n}(a.Component),H=Object(l.b)((function(e){return{menu:e.sideMenu}}),(function(e){return{toggleMenu:function(){return e({type:j})}}}))(F),W=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={rubber:"none"},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this,t=this.props.width;return Object(c.jsxs)(D.a,{exec:!0,path:"/cv",children:[Object(c.jsx)("div",{className:"main-container",children:Object(c.jsxs)("div",{className:"text-container-home text-container",children:[Object(c.jsx)(_.Animated,{animationIn:"bounceInLeft",children:Object(c.jsx)("h1",{children:"Hi,"})}),Object(c.jsx)(_.Animated,{animationInDelay:250,ani:!0,animationIn:"bounceInLeft",children:Object(c.jsx)("h1",{children:"I'm Bar,"})}),Object(c.jsx)(_.Animated,{animationInDelay:500,animationIn:"bounceInLeft",children:Object(c.jsx)("h1",{children:"A Web developer."})}),Object(c.jsx)(_.Animated,{animationInDelay:1e3,animationIn:"fadeIn",children:Object(c.jsx)("h3",{children:"Frontend developer / Fullstack developer."})}),Object(c.jsx)(L.b,{to:"/contact",children:Object(c.jsx)("div",{className:"talk-btn-home",children:Object(c.jsx)("div",{className:"animated ".concat(this.state.rubber),onMouseOver:function(){"rubberBand"!==e.state.rubber&&(e.setState({rubber:"rubberBand"}),setTimeout((function(){e.setState({rubber:"none"})}),1e3))},children:Object(c.jsx)("h3",{children:"Let's talk"})})})}),t<=768?Object(c.jsx)(H,{}):""]})}),Object(c.jsx)("img",{className:"giant-face",alt:"bar's giant face",src:A})]})}}]),n}(a.Component),G=(n(112),function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(c.jsx)(D.a,{exec:!0,path:"/about",children:Object(c.jsx)("div",{className:"main-container",children:Object(c.jsxs)("div",{className:"text-container-about text-container",children:[Object(c.jsx)("h1",{children:"Hi, I'm Bar."}),Object(c.jsx)("br",{className:"deskBr"}),Object(c.jsxs)("h3",{children:["And for the past 2 years i've been working  as a ",Object(c.jsx)("br",{className:"deskBr"}),"Frontend developer.",Object(c.jsx)("br",{className:"deskBr"}),Object(c.jsx)("br",{className:"deskBr"}),Object(c.jsx)("br",{className:"mobBr"}),Object(c.jsx)("br",{className:"mobBr"}),"I\u2019m a hard working, problem ",Object(c.jsx)("br",{className:"mobBr"}),"solving, motivated,",Object(c.jsx)("br",{className:"deskBr"}),"self learning, ",Object(c.jsx)("br",{className:"mobBr"})," independent employee.",Object(c.jsx)("br",{className:"deskBr"}),Object(c.jsx)("br",{className:"deskBr"}),Object(c.jsx)("br",{className:"mobBr"}),Object(c.jsx)("br",{className:"mobBr"}),"A family man, father of ",Object(c.jsx)("br",{className:"mobBr"}),"amazing little Gaia.",Object(c.jsx)("br",{className:"deskBr"}),Object(c.jsx)("br",{className:"mobBr"}),"Fan of cinema, comic books and ",Object(c.jsx)("br",{className:"mobBr"}),"video games.",Object(c.jsx)("br",{className:"deskBr"}),Object(c.jsx)("br",{className:"deskBr"})]}),Object(c.jsxs)("div",{className:"flex-container-about",children:[Object(c.jsxs)("div",{className:"flex-text-about",children:[Object(c.jsx)("h3",{className:"lang",children:Object(c.jsx)("u",{children:"Languages"})}),Object(c.jsxs)("h3",{children:["                             Hebrew - native ",Object(c.jsx)("br",{}),"English - native level"]})]}),Object(c.jsxs)("div",{className:"flex-text-about",children:[Object(c.jsx)("h3",{className:"lang",children:Object(c.jsx)("u",{children:"Education"})}),Object(c.jsxs)("h3",{children:["Fullstack web developer course",Object(c.jsx)("br",{className:"deskBr "}),"John Bryce ",Object(c.jsx)("br",{className:"deskBr "}),"bootcamp"]})]}),Object(c.jsxs)("div",{className:"flex-text-about",children:[Object(c.jsx)("h3",{className:"lang",children:Object(c.jsx)("u",{children:"Military"})}),Object(c.jsx)("h3",{children:"Infentry, The 933th brigade"})]})]})]})})})}}]),n}(a.Component)),R=(n(113),function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(c.jsx)(D.a,{exec:!0,path:"/skills",children:Object(c.jsx)("div",{className:"main-container",children:Object(c.jsxs)("div",{className:"text-container-skills text-container",children:[Object(c.jsxs)("h1",{children:["Skills & ",Object(c.jsx)("br",{className:"mobBr"}),"Experience"]}),Object(c.jsx)("br",{className:"deskBr mobBr"}),Object(c.jsxs)("h3",{children:["Experienced with HTML5, CSS, ",Object(c.jsx)("br",{className:"mobBr"}),"Javascript, React.js,",Object(c.jsx)("br",{className:"deskBr"}),"redux,",Object(c.jsx)("br",{className:"mobBr"})," node.js, jQuery, Git, Typescript,",Object(c.jsx)("br",{className:"mobBr"})," SQL, Ajax, ",Object(c.jsx)("br",{className:"deskBr"}),"Bootstrap and jira."]}),Object(c.jsx)("a",{href:"/Resume - Bar Linder.pdf",download:!0,children:Object(c.jsx)("div",{className:"download-btn",children:"Download Resume"})}),Object(c.jsx)("h3",{children:Object(c.jsx)("u",{children:"2019 - present"})}),Object(c.jsxs)("div",{className:"flex-text-skills",children:[Object(c.jsxs)("h3",{children:[Object(c.jsx)("strong",{children:"Dolphin Soft,"})," Netanya"]}),Object(c.jsxs)("ul",{className:"round",children:[Object(c.jsxs)("li",{children:["Building one-page interactive rich ",Object(c.jsx)("br",{className:"mobBr"}),"media ads"]}),Object(c.jsxs)("li",{children:["Constructing and maintaining",Object(c.jsx)("br",{className:"mobBr"})," landing pages for ",Object(c.jsx)("br",{className:"deskBr "}),"a large ",Object(c.jsx)("br",{className:"mobBr"}),"corporation"]}),Object(c.jsxs)("li",{children:["Implementing creative design ",Object(c.jsx)("br",{className:"mobBr"}),"concepts while ",Object(c.jsx)("br",{className:"deskBr "}),"maintaining ",Object(c.jsx)("br",{className:"mobBr"}),Object(c.jsx)("br",{className:"deskBr "}),"standards and usability"]}),Object(c.jsxs)("li",{children:["Consistently displaying creative",Object(c.jsx)("br",{className:"mobBr"})," thinking and input to improve ",Object(c.jsx)("br",{className:"deskBr "}),"current products."]}),Object(c.jsx)("li",{children:"Writing and executing SQL queries"}),Object(c.jsxs)("li",{children:["Development and maintenance of several",Object(c.jsx)("br",{className:"mobBr"})," systems with unique ",Object(c.jsx)("br",{className:"deskBr "}),"functionalities. ",Object(c.jsx)("br",{className:"mobBr"}),"for various small buisnesses"]}),Object(c.jsx)("li",{children:"Analyzing google analytics data"}),Object(c.jsxs)("li",{children:[" Learned critical thinking and better",Object(c.jsx)("br",{className:"mobBr"})," decision making while",Object(c.jsx)("br",{className:"deskBr"})," attending ",Object(c.jsx)("br",{className:"mobBr"}),"various meetings and conferences",Object(c.jsx)("br",{className:"mobBr"})," through zoom"]})]})]})]})})})}}]),n}(a.Component)),z=(n(114),n(46)),P=n.n(z);function U(){var e=Object(l.c)();return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),e({type:d}),P.a.sendForm("service_7egxwda","template_lw6b5la",t.target,"user_TCXMaNyjBwQF4ayKFjyN3").then((function(t){e({type:d})}),(function(e){console.log(e.text)}))},children:Object(c.jsxs)("div",{className:"bl-form",children:[Object(c.jsxs)("div",{id:"nameDiv",className:"input-div",children:[Object(c.jsx)("label",{children:"Name"}),Object(c.jsx)("input",{name:"from_name",className:"top-input",type:"text"})]}),Object(c.jsxs)("div",{id:"PhoneDiv",className:"input-div",children:[Object(c.jsx)("label",{children:"Phone Number"}),Object(c.jsx)("input",{name:"phone",className:"top-input",type:"text"})]}),Object(c.jsxs)("div",{id:"mailDiv",className:"input-div",children:[Object(c.jsx)("label",{children:"E-mail"}),Object(c.jsx)("input",{name:"e_mail",className:"top-input",type:"text"})]}),Object(c.jsxs)("div",{id:"subjectDiv",className:"input-div",children:[Object(c.jsx)("label",{children:"Subject"}),Object(c.jsx)("input",{name:"subject",className:"top-input",type:"text"})]}),Object(c.jsxs)("div",{id:"contentDiv",className:"input-div",children:[Object(c.jsx)("label",{children:"Content"}),Object(c.jsx)("textarea",{name:"message",className:"content-input top-input"})]}),Object(c.jsx)("div",{id:"submitDiv",className:"input-div",children:Object(c.jsx)("input",{type:"submit",className:"bl-send-btn",value:"SUBMIT"})})]})})}var X=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(c.jsx)(D.a,{exec:!0,path:"/contact",children:Object(c.jsx)("div",{className:"main-container",children:Object(c.jsxs)("div",{className:"text-container-contact text-container",children:[Object(c.jsx)("h1",{children:"Let\u2019s talk"}),Object(c.jsx)("h3",{children:"I always love to hear about new opportunities."}),this.props.loading?Object(c.jsx)("div",{className:"lds-dual-ring"}):Object(c.jsx)(U,{})]})})})}}]),n}(a.Component),J=Object(l.b)((function(e){return{loading:e.loading}}))(X),Q=[{name:"Cellcom",campaign:"end of year",image:n.p+"static/media/c-eoy.420dbd6f.png",link:"https://cellcom-sales.co.il/endyear2020/"},{name:"Isracard",campaign:"tiktak",image:n.p+"static/media/i-tt.63659171.png",link:"https://adsil1.com/isracard/1120/tiktak/float/"},{name:"Susu & Sons",campaign:"tiktak",image:n.p+"static/media/susu.c9a3f7b4.png",link:"http://adsil1.com/susu/live/"},{name:"City Market",campaign:"tiktak",image:n.p+"static/media/market.e6e47ea3.png",link:"http://adsil1.com/market/live/"}];function q(e){var t=e.id,n=function(){null!=document.getElementById(t)&&(document.getElementById(t).style.animation="text-shadow 1.5s ease-in-out 1",setTimeout((function(){null!=document.getElementById(t)&&(document.getElementById(t).style.animation="")}),1500))};return Object(c.jsxs)("div",{className:"single-item",children:[Object(c.jsx)("h2",{id:t,onMouseOver:function(){},children:e.name}),Object(c.jsx)("img",{onClick:function(){S?(n(),setTimeout((function(){window.open(e.link)}),1500)):window.open(e.link)},onMouseOver:function(){return n()},src:e.image,alt:e.name})]})}n(117);var V=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){var e=Q.map((function(e,t){return Object(c.jsx)(q,{image:e.image,image2:e.image2,name:e.name,campaign:e.campaign,link:e.link,id:t},function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))}())}));return Object(c.jsx)(D.a,{exec:!0,path:"/work",children:Object(c.jsx)("div",{className:"main-container",children:Object(c.jsxs)("div",{className:"text-container-work",children:[Object(c.jsx)("h1",{children:"Work"}),Object(c.jsx)("div",{className:"portfolio-div",children:e})]})})})}}]),n}(a.Component),K=function(e){Object(O.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={width:window.innerWidth,height:window.innerHeight},e.updateDimensions=function(){e.setState({width:window.innerWidth,height:window.innerHeight})},e}return Object(x.a)(n,[{key:"render",value:function(){return Object(c.jsx)(L.a,{children:Object(c.jsxs)("div",{className:"App",children:[this.state.width<=768?"":Object(c.jsx)(M,{}),this.state.width<=768?Object(c.jsx)(I,{}):"",Object(c.jsx)(W,{width:this.state.width}),Object(c.jsx)(G,{}),Object(c.jsx)(V,{}),Object(c.jsx)(R,{}),Object(c.jsx)(J,{})]})})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}}]),n}(a.Component),Y=Object(l.b)((function(e){return{menu:e.sideMenu}}),(function(e){return{toggleMenu:function(){return e({type:j})}}}))(K),Z=Object(o.b)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l.a,{store:Z,children:Object(c.jsx)(Y,{})})}),document.getElementById("root"))},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.02c54bcd.chunk.js.map