(this["webpackJsonpnc-quiz-game"]=this["webpackJsonpnc-quiz-game"]||[]).push([[0],[,,function(e,o,t){e.exports=t.p+"static/media/lottery.6ab986a4.gif"},function(e,o,t){e.exports=t.p+"static/media/thinking.8ad91c09.gif"},,function(e,o,t){e.exports=t.p+"static/media/bonulsy.058abcde.gif"},function(e,o,t){e.exports=t.p+"static/media/share_bonusly_2.69920213.gif"},,,,,,function(e,o,t){e.exports=t.p+"static/media/share.e6233225.gif"},function(e,o,t){e.exports=t.p+"static/media/secret.36754390.gif"},function(e,o,t){e.exports=t.p+"static/media/ask.426586b6.gif"},,function(e,o,t){e.exports=t.p+"static/media/vote.6dcc5004.gif"},function(e,o,t){e.exports=t.p+"static/media/cooking.930959c0.gif"},function(e,o,t){e.exports=t.p+"static/media/chocolate.4359ca03.gif"},function(e,o,t){e.exports=t.p+"static/media/entertainment.02623dc1.gif"},function(e,o,t){e.exports=t.p+"static/media/truth.94eb340e.gif"},function(e,o,t){e.exports=t.p+"static/media/profession.b0009b72.gif"},function(e,o,t){e.exports=t.p+"static/media/army.60e65d8e.gif"},function(e,o,t){e.exports=t.p+"static/media/honest.4edbe630.gif"},,,,,function(e,o,t){e.exports=t.p+"static/media/minion.1934dacd.gif"},function(e,o,t){e.exports=t.p+"static/media/smile.a5a55f4f.gif"},function(e,o,t){e.exports=t.p+"static/media/bat.cdedef45.gif"},function(e,o,t){e.exports=t.p+"static/media/feast.e82dec55.gif"},function(e,o,t){e.exports=t.p+"static/media/explore.efd636a9.gif"},function(e,o,t){e.exports=t.p+"static/media/evil.7033de97.gif"},function(e,o,t){e.exports=t.p+"static/media/love.be8b47c3.gif"},function(e,o,t){e.exports=t.p+"static/media/scared.ebd41a34.gif"},function(e,o,t){e.exports=t.p+"static/media/minions.64a3febe.gif"},function(e,o,t){e.exports=t.p+"static/media/laugh.e69e0231.gif"},function(e,o,t){e.exports=t.p+"static/media/beach.49a99f93.gif"},function(e,o,t){e.exports=t.p+"static/media/question.1639ca8d.gif"},function(e,o,t){e.exports=t.p+"static/media/car.db9cf815.gif"},function(e,o,t){e.exports=t.p+"static/media/share_bonusly_1.8b68dcd2.gif"},,,,,function(e,o,t){e.exports=t.p+"static/media/NC_logo_white.9dc240bc.png"},function(e,o,t){e.exports=t.p+"static/media/card-flip.c27111d8.mp3"},function(e,o,t){e.exports=t.p+"static/media/card-flip-back.6860f843.mp3"},function(e,o,t){e.exports=t.p+"static/media/drumroll.0bb843d5.mp3"},function(e,o,t){e.exports=t.p+"static/media/losing.215b7741.mp3"},,function(e,o,t){e.exports=t.p+"static/media/timer1.d8a3c38d.gif"},function(e,o,t){e.exports=t.p+"static/media/timer2.d8a3c38d.gif"},function(e,o,t){e.exports=t(78)},,,,,function(e,o,t){},function(e,o,t){},function(e,o,t){},,,,,,,,,,,,,,,function(e,o,t){e.exports=t.p+"static/media/n1.798522af.svg"},function(e,o,t){e.exports=t.p+"static/media/amitabh.df2294d9.gif"},function(e,o,t){"use strict";t.r(o);var a=t(0),n=t.n(a),i=t(26),s=t.n(i),r=(t(59),t(60),t(61),t(7)),u=t(8),c=t(10),l=t(9),h=t(46),p=t.n(h),m=t(47),y=t.n(m),d=t(48),b=t.n(d),f=t(49),w=t.n(f),g=t(50),q=t.n(g),v={};v.flip=new Audio(y.a),v.flipBack=new Audio(b.a),v.tada=new Audio(w.a),v.lost=new Audio(q.a);var k=function(e){v[e]&&(v[e].currentTime=0,v[e].play())},B=t(11),A=t(4),x=function(e){Object(c.a)(t,e);var o=Object(l.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=o.call(this,e)).state={view:"number",completed:!1},a}return Object(u.a)(t,[{key:"clickHandler",value:function(e){var o=this;"number"===this.state.view?(k("flip"),setTimeout((function(){"question"===o.state.view&&("A"===o.props.question.type?k("tada"):"B"===o.props.question.type&&k("lost"))}),700),this.setState({view:"question",flipping:!0})):(k("flipBack"),this.setState({view:"number",completed:!0,flipping:!0}))}},{key:"getLabelBack",value:function(){return console.log(JSON.stringify(this.props.question.icon)),{__html:this.props.question.question}}},{key:"transitionEndHandler",value:function(e){"width"===e.propertyName&&(this.setState({flipping:!1}),console.log("event.propertyName === 'width'","width"===e.propertyName),console.log("event.propertyName",e.propertyName))}},{key:"render",value:function(){var e,o={width:this.props.width+"px",height:this.props.height+"px",transform:"translate3d("+this.props.left+"px,0px,0)",WebkitTransform:"translate3d("+this.props.left+"px,"+this.props.top+"px,0)"},t=this.state.completed?n.a.createElement("div",null,this.props.question.number," ",n.a.createElement(B.a,{icon:A.a})," "):n.a.createElement("span",{className:"number"},this.props.question.number),a="flipper";"number"!==this.state.view&&(a+=" flipped"),this.state.flipping&&(a+=" flipping"),this.props.question&&(e=n.a.createElement("img",{src:this.props.question.icon,alt:"Question img",height:"150",width:"300"}));var i={backgroundColor:this.props.question.color,border:"1px solid"+this.props.question.color};return n.a.createElement("div",{style:o,className:a,onTransitionEnd:this.transitionEndHandler.bind(this)},n.a.createElement("div",{className:"card"},n.a.createElement("div",{style:i,className:"front",onClick:this.clickHandler.bind(this)},t),n.a.createElement("div",{className:"back"},n.a.createElement("span",{className:"close",onClick:this.clickHandler.bind(this)},n.a.createElement(B.a,{icon:A.d})),n.a.createElement("p",null,e),n.a.createElement("span",{dangerouslySetInnerHTML:this.getLabelBack()}),n.a.createElement("img",{src:p.a,alt:"Netcentric logo"}))))}}]),t}(a.Component),C=t(15),E=t(51),W=t.n(E),N=function(e){Object(c.a)(t,e);var o=Object(l.a)(t);function t(){var e;return Object(r.a)(this,t),(e=o.call(this)).state={showModal:!1},e.handleOpenModal=e.handleOpenModal.bind(Object(C.a)(e)),e.handleCloseModal=e.handleCloseModal.bind(Object(C.a)(e)),e}return Object(u.a)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return n.a.createElement("div",{className:"headers"},n.a.createElement("div",null," Netcentric Magic Squares "),n.a.createElement("span",{className:"signout"},n.a.createElement(B.a,{icon:A.b,onClick:this.handleOpenModal})),n.a.createElement(W.a,{isOpen:this.state.showModal,contentLabel:"Minimal Modal Example",ariaHideApp:!1,className:"Modal",overlayClassName:"Overlay"},n.a.createElement("div",{className:"modalText"},n.a.createElement("h2",null,"Game Over"),n.a.createElement("h3",null,"Thank you for Participating",n.a.createElement(B.a,{icon:A.c})),n.a.createElement("button",{className:"closeModal",onClick:this.handleCloseModal},"Close"))))}}]),t}(a.Component),I=t(2),O=t.n(I),M=(t(76),t(12)),S=t.n(M),j=(t(77),t(28)),H=t.n(j),T=t(13),L=t.n(T),P=t(29),_=t.n(P),z=t(30),R=t.n(z),Y=t(31),K=t.n(Y),D=t(32),G=t.n(D),J=t(33),U=t.n(J),F=t(16),Q=t.n(F),$=t(34),V=t.n($),X=t(3),Z=t.n(X),ee=t(14),oe=t.n(ee),te=t(35),ae=t.n(te),ne=t(36),ie=t.n(ne),se=t(37),re=t.n(se),ue=t(38),ce=t.n(ue),le=t(39),he=t.n(le),pe=t(5),me=t.n(pe),ye=t(17),de=t.n(ye),be=t(40),fe=t.n(be),we=t(18),ge=t.n(we),qe=t(19),ve=t.n(qe),ke=t(20),Be=t.n(ke),Ae=t(41),xe=t.n(Ae),Ce=t(21),Ee=t.n(Ce),We=t(6),Ne=t.n(We),Ie=t(22),Oe=t.n(Ie),Me=t(23),Se=t.n(Me),je=t(52),He=t.n(je),Te=t(53),Le=t.n(Te),Pe=[{category:"Column 1",questions:[{number:1,type:"A",icon:H.a,color:"#5a3a97",question:"So you picked me, how about sharing a funny life incidence"},{number:2,type:"B",icon:L.a,color:"#7eaa38",question:" Ahh, 02 is the best number to know some hidden facts about you"},{type:"A",icon:_.a,color:"#5a3a97",number:3,question:"Lucky three you are just set free, but not without talking 3 good things about NC"},{number:4,type:"B",icon:R.a,color:"#7eaa38",question:"Mauke pe Chauak, So tell us about your mauke pe chauka incidence"},{number:5,type:"A",icon:K.a,color:"#5a3a97",question:"Five fingers together make a fist, so let\u2019s talk about your best feast moment"},{number:6,type:"B",icon:G.a,color:"#7eaa38",question:"It\u2019s a six, which six places you want to visit in India, why and with whom?"},{type:"A",icon:O.a,color:"#5a3a97",number:7,question:" It\u2019s a 7UP moment, what would you do with 7CR in your bag"},{number:8,type:"B",icon:O.a,color:"#7eaa38",question:"Congratulations, you have won 08 Bonusly points\u2026"},{number:9,type:"A",icon:U.a,color:"#5a3a97",question:"Nine is for crime, what is the biggest crime you have committed in your life"},{number:10,type:"B",icon:he.a,color:"#7eaa38",question:"Do you remember what you did when you were 10? If not what would you do if you were 10 now?"}]},{category:"Column 2",questions:[{number:11,type:"B",icon:He.a,color:"#7eaa38",question:"Name 11 movies of Mr Amitab Bachhan and win 05 bonusly points \u2013 30 secs"},{number:12,type:"A",icon:ie.a,color:"#5a3a97",question:"1 with 2, have you ever been a kebab mein haddi, how did you manage, share with us"},{number:13,type:"B",icon:re.a,color:"#7eaa38",question:"It\u2019s so good you picked me, laugh for me in 13 different ways\u2026"},{number:14,type:"A",icon:ce.a,color:"#5a3a97",question:"What is the first thing you would do after you reach Goa, India?"},{number:15,type:"B",icon:L.a,color:"#7eaa38",question:"Who was your fav star, when you were 15 and why?"},{number:16,type:"A",icon:me.a,color:"#5a3a97",question:"Sweet 16, You have won 16 bonusly points\u2026Enjoy!!!"},{number:17,type:"B",icon:ae.a,color:"#7eaa38",question:"17 ka khatra, what is the khatra moment of your life, when you got really scared"},{number:18,type:"A",icon:Q.a,color:"#5a3a97",question:"Ab main vote de sakta, whom would you vote as Master eater in NC? And why?"},{number:19,type:"B",icon:V.a,color:"#7eaa38",question:"When I was 19, I loved doing\u2026"},{number:20,type:"A",icon:Z.a,color:"#5a3a97",question:"20 saal badh, kya hoga\u2026What will be it like after 20 years\u202606 Bonusly points for your answer"}]},{category:"Column 3",questions:[{number:21,type:"A",icon:oe.a,color:"#5a3a97",question:"What is your best dream so far, if not that private would like to share with us"},{number:22,type:"B",icon:O.a,color:"#7eaa38",question:"Wohooo you have won 10 bonusly points!"},{number:23,type:"A",icon:de.a,color:"#5a3a97",question:"What is the best and the worst dish you have cooked so far?"},{number:24,type:"B",icon:Z.a,color:"#7eaa38",question:"Kya karuin ohh ladies main huin aadat se majboor, which is one that habit of yours you really hate and want to get rid of.."},{number:25,type:"A",icon:S.a,color:"#5a3a97",question:"Can you share a sweet message for your team members and Pune studio people"},{number:26,type:"B",icon:L.a,color:"#7eaa38",question:"What is that you don\u2019t like about Netcentric, be honest\u2026"},{number:27,type:"A",icon:Z.a,color:"#5a3a97",question:"If you had to spend a day with your favorite celebrity, what will be your plan?"},{number:28,type:"B",icon:O.a,color:"#7eaa38",question:"Congratulations, you have won 10 bonusly points"},{number:29,type:"A",icon:S.a,color:"#5a3a97",question:"Ohh yes, you are so kind. Share 10 Bonulsy points with someone."},{number:30,type:"B",icon:S.a,color:"#7eaa38",question:"Ohh yes, you are so kind. Share 10 Bonulsy points with someone."}]},{category:"Column 4",questions:[{number:31,type:"B",icon:fe.a,color:"#7eaa38",question:"3 friends in 1 car is always fun, where would plan a trip with your group of two"},{number:32,type:"A",icon:ge.a,color:"#5a3a97",question:"Treat your family with chocolates today and share the pic with us"},{number:33,type:"B",icon:ve.a,color:"#7eaa38",question:"What in your opinion is the best way to get entertained during lockdown?"},{number:34,type:"A",icon:Be.a,color:"#5a3a97",question:"Time to tell the truth, how many times you have used false medical prescription to move out of your house?"},{number:35,type:"B",icon:xe.a,color:"#7eaa38",question:" We love you for this, please share 10 bonuly points with someone"},{number:36,type:"A",icon:oe.a,color:"#5a3a97",question:"3 such moments that you want in your life to repeat at this moment"},{number:37,type:"B",icon:Ee.a,color:"#7eaa38",question:"Complete this\u2026had I not been in this profession, I would have been\u2026."},{number:38,type:"A",icon:O.a,color:"#5a3a97",question:"Congratulations you have won 05 bonusly points"},{number:39,type:"B",icon:Ne.a,color:"#7eaa38",question:"You are so kind, share 05 bonulsy points for a great work with someone"},{number:40,type:"A",icon:Oe.a,color:"#5a3a97",question:"If NC Pune was an army of soldiers name 05 people with their ranks and define why you think so"}]},{category:"Column 5",questions:[{number:41,type:"A",icon:Se.a,color:"#5a3a97",question:"What is that you don\u2019t like about Netcentric, be honest\u2026"},{number:42,type:"B",icon:Z.a,color:"#7eaa38",question:"If you had to spend a day with your favorite celebrity, what will be your plan?"},{number:43,type:"A",icon:O.a,color:"#5a3a97",question:"Congratulations, you have won 10 bonusly points"},{number:44,type:"B",icon:Ne.a,color:"#7eaa38",question:"Ohh yes, you are so kind. Share 10 Bonulsy points with someone"},{number:45,type:"A",icon:O.a,color:"#5a3a97",question:"Ohh yes, you are so kind. Share 10 Bonulsy points with someone"},{number:46,type:"B",icon:ge.a,color:"#7eaa38",question:"Treat your family with chocolates today and share the pic with us"},{number:47,type:"A",icon:ve.a,color:"#5a3a97",question:"What in your opinion is the best way to get entertained during lockdown?"},{number:48,type:"B",icon:Be.a,color:"#7eaa38",question:"Time to tell the truth, how many times you have used false medical prescription to move out of your house?"},{number:49,type:"A",icon:Ne.a,color:"#5a3a97",question:"We love you for this, please share 10 bonuly points with someone"},{number:50,type:"B",icon:oe.a,color:"#7eaa38",question:"3 such moments that you want in your life to repeat at this moment"}]},{category:"Column 6",questions:[{number:51,type:"B",icon:Ee.a,color:"#7eaa38",question:"Complete this\u2026had I not been in this profession, I would have been\u2026"},{number:52,type:"A",icon:me.a,color:"#5a3a97",question:"Congratulations you have won 05 bonusly points"},{number:53,type:"B",icon:Ne.a,color:"#7eaa38",question:"You are so kind, share 05 bonulsy points for a great work with someone"},{number:54,type:"A",icon:Oe.a,color:"#5a3a97",question:"If NC Pune was an army of soldiers name 05 people with their ranks and define why you think so."},{number:55,type:"B",icon:de.a,color:"#7eaa38",question:"What is the best and the worst dish you have cooked so far?"},{number:56,type:"A",icon:Z.a,color:"#5a3a97",question:"Kya karuin ohh ladies main huin aadat se majboor, which is one that habit of yours you really hate and want to get rid of"},{number:57,type:"B",icon:S.a,color:"#7eaa38",question:"Can you share a sweet message for your team members and Pune studio people"},{number:58,type:"A",icon:Se.a,color:"#5a3a97",question:"What is that you don\u2019t like about Netcentric, be honest\u2026"},{number:59,type:"B",icon:Q.a,color:"#7eaa38",question:"Whom would you vote as Master in making people laugh in NC? And why?"},{number:60,type:"A",icon:Z.a,color:"#5a3a97",question:"20 saal badh, kya hoga\u2026What will be it like after 20 years\u202605 Bonusly points for your answe"}]},{category:"Column 7",questions:[{number:61,type:"A",icon:H.a,color:"#5a3a97",question:"So you picked me, how about sharing a funny life incidence"},{number:62,type:"B",icon:L.a,color:"#7eaa38",question:"Share some hidden facts about you\u2026"},{number:63,type:"A",icon:_.a,color:"#5a3a97",question:"How about sharing 3 good things about NC\u2026"},{number:64,type:"B",icon:R.a,color:"#7eaa38",question:"Tell us about your mauke pe chauka incidence"},{number:65,type:"A",icon:K.a,color:"#5a3a97",question:"Let\u2019s talk about your best feast moment"},{number:66,type:"B",icon:G.a,color:"#7eaa38",question:"It\u2019s a six, which six places you want to visit in India, why and with whom?"},{number:67,type:"A",icon:O.a,color:"#5a3a97",question:"What would you do with 10CR in your bag"},{number:68,type:"B",icon:me.a,color:"#7eaa38",question:"Congratulations, you have won 05 Bonusly points\u2026"},{number:69,type:"A",icon:U.a,color:"#5a3a97",question:"What is the biggest crime you have committed in your life"},{number:70,type:"B",icon:he.a,color:"#7eaa38",question:"Do you remember what you did when you were 10? If not what would you do if you were 10 now?"}]},{category:"Column 8",questions:[{number:71,type:"B",icon:Le.a,color:"#7eaa38",question:"Name 11 movies of Mr. Shahrukh Khan  and win 05 bonusly points \u2013 30 secs"},{number:72,type:"A",icon:ie.a,color:"#5a3a97",question:"have you ever been a kebab mein haddi, how did you manage, share with us."},{number:73,type:"B",icon:re.a,color:"#7eaa38",question:"It\u2019s so good you picked me, laugh for me in 13 different ways\u2026"},{number:74,type:"A",icon:ce.a,color:"#5a3a97",question:"What is the first thing you would do after you reach Goa, India?"},{number:75,type:"B",icon:L.a,color:"#7eaa38",question:"Who was your fav star, when you were 15 and why?"},{number:76,type:"A",icon:me.a,color:"#5a3a97",question:"You have won 16 bonusly points\u2026Enjoy!!!"},{number:77,type:"B",icon:ae.a,color:"#7eaa38",question:"What is the khatra moment of your life, when you got really scared"},{number:78,type:"A",icon:Q.a,color:"#5a3a97",question:"whom would you vote as Master eater in NC? And why?"},{number:79,type:"B",icon:V.a,color:"#7eaa38",question:"When I was 19, I loved doing\u2026"},{number:80,type:"A",icon:Z.a,color:"#5a3a97",question:"20 saal badh, kya hoga\u2026What will be it like after 20 years\u202606 Bonusly points for your answer."}]},{category:"Column 9",questions:[{number:81,type:"A",icon:oe.a,color:"#5a3a97",question:"What is your best dream so far, if not that private would like to share with us"},{number:82,type:"B",icon:me.a,color:"#7eaa38",question:"Wohooo you have won 10 bonusly points!"},{number:83,type:"A",icon:de.a,color:"#5a3a97",question:"What is the best and the worst dish you have cooked so far?"},{number:84,type:"B",icon:Z.a,color:"#7eaa38",question:" Kya karuin ohh ladies main huin aadat se majboor, which is one that habit of yours you really hate and want to get rid of"},{number:85,type:"A",icon:S.a,color:"#5a3a97",question:"Can you share a sweet message for your team members and Pune studio people"},{number:86,type:"B",icon:Se.a,color:"#7eaa38",question:"What is that you don\u2019t like about Netcentric, be honest\u2026"},{number:87,type:"A",icon:Z.a,color:"#5a3a97",question:"If you had to spend a day with your favorite celebrity, what will be your plan?"},{number:88,type:"B",icon:me.a,color:"#7eaa38",question:"Congratulations, you have won 10 bonusly points"},{number:89,type:"A",icon:O.a,color:"#5a3a97",question:" Ohh yes, you are so kind. Share 10 Bonulsy points with someone.."},{number:90,type:"B",icon:Ne.a,color:"#7eaa38",question:" Ohh yes, you are so kind. Share 10 Bonulsy points with someone.."}]},{category:"Column 10",questions:[{number:91,type:"B",icon:fe.a,color:"#7eaa38",question:"3 friends in 1 car is always fun, where would plan a trip with your group of two?"},{number:92,type:"A",icon:ge.a,color:"#5a3a97",question:" Treat your family with chocolates today and share the pic with us"},{number:93,type:"B",icon:ve.a,color:"#7eaa38",question:"What in your opinion is the best way to get entertained during lockdown?"},{number:94,type:"A",icon:Be.a,color:"#5a3a97",question:"Time to tell the truth, how many times you have used false medical prescription to move out of your house?"},{number:95,type:"B",icon:Ne.a,color:"#7eaa38",question:"We love you for this, please share 10 bonuly points with someone"},{number:96,type:"A",icon:oe.a,color:"#5a3a97",question:"3 such moments that you want in your life to repeat at this moment"},{number:97,type:"B",icon:Ee.a,color:"#7eaa38",question:"Complete this\u2026had I not been in this profession, I would have been\u2026."},{number:98,type:"A",icon:O.a,color:"#5a3a97",question:"Congratulations you have won 05 bonusly points"},{number:99,type:"B",icon:xe.a,color:"#7eaa38",question:"You are so kind, share 05 bonulsy points for a great work with someone"},{number:100,type:"A",icon:Oe.a,color:"#5a3a97",question:"If NC Pune was an army of soldiers name 05 people with their ranks and define why you think so?"}]}],_e=function(e){Object(c.a)(t,e);var o=Object(l.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=o.call(this,e)).state={windowWidth:window.innerWidth,windowHeight:window.innerHeight,data:[]},a}return Object(u.a)(t,[{key:"handleResize",value:function(e){this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize.bind(this));var e=0;Pe.forEach((function(o){o.questions.length>e&&(e=o.questions.length)})),this.setState({data:Pe,rows:e,cols:Pe.length})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.state.windowWidth>640?60:32,o=this.state.windowWidth/this.state.cols,t=(this.state.windowHeight-e)/this.state.rows,a=[];return console.log("cardWidth",o),console.log("cardHeight",t),this.state.data.forEach((function(i,s){var r=s*o;i.questions.forEach((function(i,u){a.push(n.a.createElement(x,{left:r,top:u*t+e,height:t,width:o,question:i,key:s+"-"+u}))}))})),n.a.createElement("div",null,n.a.createElement(N,{data:this.state.data}),a)}}]),t}(a.Component);var ze=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(_e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[54,1,2]]]);
//# sourceMappingURL=main.f008b050.chunk.js.map