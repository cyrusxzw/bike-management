(this.webpackJsonpbikemanager=this.webpackJsonpbikemanager||[]).push([[0],{187:function(e,t,a){e.exports=a(442)},194:function(e,t,a){},266:function(e,t,a){},271:function(e,t,a){},294:function(e,t,a){},299:function(e,t,a){},314:function(e,t,a){},327:function(e,t,a){},441:function(e,t,a){},442:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(15),o=a(16),m=a(18),s=a(19),u=a(107),p=a(29),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.children)}}]),a}(r.a.Component),y=(a(88),a(52)),E=a.n(y),h=(a(89),a(42)),f=a.n(h),b=(a(55),a(6)),g=a.n(b),k=(a(194),function(e){if(!e)return"";var t=e.getMinutes()<=9?"0".concat(e.getMinutes()):e.getMinutes(),a=e.getSeconds()<=9?"0".concat(e.getSeconds()):e.getSeconds();return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear()," ").concat(e.getHours(),":").concat(t,":").concat(a)}),v=a(184),w=a.n(v),C=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"getWeather",value:function(e){return w.a.get(e.url)}}]),e}(),O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={userName:"",picUrl:"",weather:"",temperature:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({userName:"xyz"}),setInterval((function(){var t=k(new Date);e.setState({sysTime:t})}),1e3),this.getWeatherAPIData()}},{key:"getWeatherAPIData",value:function(){var e=this;C.getWeather({url:"http://api.weatherstack.com/current?access_key=a8503431d7eeae0100eb9f9439f07018&query=".concat("melbourne")}).then((function(t){if(window.data=t,200===t.status){var a=t.data.current;e.setState({picUrl:a.weather_icons[0],weather:a.weather_descriptions[0],temperature:a.temperature})}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(E.a,{className:"header-top"},r.a.createElement(f.a,{span:"24"},r.a.createElement("span",null,"Welcome, ",this.state.userName),r.a.createElement(g.a,{type:"link"},"Logout"))),r.a.createElement(E.a,{className:"breadcrumb"},r.a.createElement(f.a,{span:"4",className:"breadcrumb-title"},"Home"),r.a.createElement(f.a,{span:"20",className:"weather"},r.a.createElement("span",{className:"date"},this.state.sysTime),r.a.createElement("span",{className:"weather-img"},r.a.createElement("img",{src:this.state.picUrl,alt:""})),r.a.createElement("span",{className:"weather-detail"},this.state.weather),r.a.createElement("span",{className:"weather-temperature"},this.state.temperature,"\u2103"))))}}]),a}(r.a.Component),j=(a(266),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={year:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.getYear();this.setState({year:e})}},{key:"getYear",value:function(){return(new Date).getFullYear()}},{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},"\xa9",this.state.year," Zengwei Xu")}}]),a}(r.a.Component)),N=(a(267),a(108)),M=a.n(N),T=(a(271),[{title:"Home",key:"/admin/home"},{title:"UI",key:"/admin/ui",children:[{title:"Button",key:"/admin/ui/buttons"},{title:"Modal",key:"/admin/ui/modals"},{title:"Loading",key:"/admin/ui/loadings"},{title:"Notification",key:"/admin/ui/notification"},{title:"Message",key:"/admin/ui/messages"},{title:"Tab",key:"/admin/ui/tabs"},{title:"Gallery",key:"/admin/ui/gallery"},{title:"Carousel",key:"/admin/ui/carousel"}]},{title:"Form",key:"/admin/form",children:[{title:"Login",key:"/admin/form/login"},{title:"Register",key:"/admin/form/reg"}]},{title:"Table",key:"/admin/table",children:[{title:"Basic Table",key:"/admin/table/basic"},{title:"Senior Table",key:"/admin/table/high"}]},{title:"Text",key:"/admin/rich"},{title:"City Management",key:"/admin/city"},{title:"Order Management",key:"/admin/order",btnList:[{title:"Order Details",key:"detail"},{title:"Finish",key:"finish"}]},{title:"User Management",key:"/admin/user"},{title:"Bike Map",key:"/admin/bikeMap"},{title:"Chart",key:"/admin/charts",children:[{title:"Bar Chart",key:"/admin/charts/bar"},{title:"Pie Chart",key:"/admin/charts/pie"},{title:"Line Chart",key:"/admin/charts/line"}]},{title:"Permission",key:"/admin/permission"}]),I=M.a.SubMenu,S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={menuTreeNode:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.renderMenu(T);this.setState({menuTreeNode:e})}},{key:"renderMenu",value:function(e){var t=this;return e.map((function(e){return e.children?r.a.createElement(I,{title:e.title,key:e.key},t.renderMenu(e.children)):r.a.createElement(M.a.Item,{title:e.title,key:e.key},r.a.createElement(u.b,{to:e.key},e.title))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"/assets/logo.svg",alt:""}),r.a.createElement("h1",null,"I Bike MS")),r.a.createElement(M.a,{theme:"dark"},this.state.menuTreeNode))}}]),a}(r.a.Component),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{className:"container"},r.a.createElement(f.a,{span:"4",className:"nav-left"},r.a.createElement(S,null)),r.a.createElement(f.a,{span:"20",className:"main"},r.a.createElement(O,null,"Header"),r.a.createElement(E.a,{className:"content"},this.props.children),r.a.createElement(j,null,"Footer")))}}]),a}(r.a.Component),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Login")}}]),a}(r.a.Component),W=(a(294),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-wrap"},"Welcome to Bike Management System")}}]),a}(r.a.Component)),D=(a(51),a(20)),L=a.n(D),x=a(85),A=(a(297),a(86)),z=a.n(A),F=(a(299),a(453)),K=a(452),G=a(451),H=a(450),R=a(449),U=a(456),q=a(457),Y=g.a.Group,_=z.a.Group,J=function(){var e=Object(n.useState)(!0),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),i=Object(x.a)(l,2),o=i[0],m=i[1];return r.a.createElement("div",{className:"content-container"},r.a.createElement(L.a,{title:"Basic Buttons",className:"card-wrap"},r.a.createElement(g.a,{type:"primary"},"Ibike"),r.a.createElement(g.a,null,"Ibike"),r.a.createElement(g.a,{type:"dashed"},"Ibike"),r.a.createElement(g.a,{type:"danger"},"Ibike"),r.a.createElement(g.a,{disabled:!0},"Ibike")),r.a.createElement(L.a,{title:"Buttons Contain Icon",className:"card-wrap"},r.a.createElement(g.a,{icon:r.a.createElement(F.a,null)},"Add"),r.a.createElement(g.a,{icon:r.a.createElement(K.a,null)},"Edit"),r.a.createElement(g.a,{icon:r.a.createElement(G.a,null)},"Delete"),r.a.createElement(g.a,{icon:r.a.createElement(H.a,null),shape:"circle"}),r.a.createElement(g.a,{icon:r.a.createElement(H.a,null)},"Search"),r.a.createElement(g.a,{icon:r.a.createElement(R.a,null)},"Download")),r.a.createElement(L.a,{title:"Loading",className:"card-wrap"},r.a.createElement(g.a,{type:"primary",loading:a},"Confirm"),r.a.createElement(g.a,{type:"primary",shape:"circle",loading:a}),r.a.createElement(g.a,{loading:a},"Loading"),r.a.createElement(g.a,{shape:"circle",loading:a}),r.a.createElement(g.a,{type:"primary",onClick:function(){c(!1)}},"Close")),r.a.createElement(L.a,{title:"Button Group",className:"card-wrap"},r.a.createElement(Y,null,r.a.createElement(g.a,null,r.a.createElement(U.a,null),"Prev"),r.a.createElement(g.a,null,"Next",r.a.createElement(q.a,null)))),r.a.createElement(L.a,{title:"Button Size",className:"card-wrap"},r.a.createElement(_,{defaultValue:o,onChange:function(e){m(e.target.value)}},r.a.createElement(z.a,{value:"small"},"Small"),r.a.createElement(z.a,null,"Medium"),r.a.createElement(z.a,{value:"large"},"Large")),r.a.createElement(g.a,{type:"primary",size:o},"Ibike"),r.a.createElement(g.a,{size:o},"Ibike"),r.a.createElement(g.a,{type:"dashed",size:o},"Ibike"),r.a.createElement(g.a,{type:"danger",size:o},"Ibike")))},$=(a(167),a(59)),Q=a.n($),V=a(186),X=(a(314),function(){var e=Object(n.useState)({showModal1:!1,showModal2:!1,showModal3:!1,showModal4:!1}),t=Object(x.a)(e,2),a=t[0],c=t[1],l=function(e){c(Object(V.a)({},e,!0))},i=function(e){Q.a[e]({title:[e],content:"Do you know?",onOk:function(){console.log("ok")},onCancel:function(){console.log("cancel")}})};return r.a.createElement("div",{className:"content-container"},r.a.createElement(L.a,{title:"Basic Modals",className:"card-wrap"},r.a.createElement(g.a,{type:"primary",onClick:function(){l("showModal1")}},"Open"),r.a.createElement(g.a,{type:"primary",onClick:function(){l("showModal2")}},"DIY Content"),r.a.createElement(g.a,{type:"primary",onClick:function(){l("showModal3")}},"Top 20px"),r.a.createElement(g.a,{type:"primary",onClick:function(){l("showModal4")}},"Center")),r.a.createElement(Q.a,{title:"React",visible:a.showModal1,onCancel:function(){c({showModal1:!1})}},"Welcome to my system!"),r.a.createElement(Q.a,{title:"React",visible:a.showModal2,okText:"Next",cancelText:"Quite",onCancel:function(){c({showModal2:!1})}},"Welcome to my system!"),r.a.createElement(Q.a,{title:"React",visible:a.showModal3,style:{top:20},onCancel:function(){c({showModal3:!1})}},"Welcome to my system!"),r.a.createElement(Q.a,{title:"React",wrapClassName:"vertical-modal",visible:a.showModal4,onCancel:function(){c({showModal4:!1})}},"Welcome to my system!"),r.a.createElement(L.a,{title:"Confirm Modals",className:"card-wrap"},r.a.createElement(g.a,{type:"primary",onClick:function(){i("info")}},"Info"),r.a.createElement(g.a,{type:"primary",onClick:function(){i("success")}},"Success"),r.a.createElement(g.a,{type:"primary",onClick:function(){i("error")}},"Error"),r.a.createElement(g.a,{type:"primary",onClick:function(){i("warning")}},"Warning"),r.a.createElement(g.a,{type:"primary",onClick:function(){i("confirm")}},"Confirm")))}),Z=(a(320),a(104)),ee=a.n(Z),te=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"openNotification",value:function(e,t){t&&ee.a.config({placement:t}),ee.a[e]({message:"Got Money!",description:"21 Days -- $5000"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content-container"},r.a.createElement(L.a,{title:"Notification",className:"card-wrap"},r.a.createElement(g.a,{type:"primary",onClick:function(){e.openNotification("success")}},"Success"),r.a.createElement(g.a,{type:"primary",onClick:function(){e.openNotification("info")}},"Info"),r.a.createElement(g.a,{type:"primary",onClick:function(){e.openNotification("warning")}},"Warning"),r.a.createElement(g.a,{type:"primary",onClick:function(){e.openNotification("error")}},"Error")),r.a.createElement(L.a,{title:"Notification",className:"card-wrap"},r.a.createElement(g.a,{type:"primary",onClick:function(){e.openNotification("success","topLeft")}},"Success"),r.a.createElement(g.a,{type:"primary",onClick:function(){e.openNotification("info","topRight")}},"Info"),r.a.createElement(g.a,{type:"primary",onClick:function(){e.openNotification("warning","bottomLeft")}},"Warning"),r.a.createElement(g.a,{type:"primary",onClick:function(){e.openNotification("error","bottomRight")}},"Error")))}}]),a}(r.a.Component),ae=(a(170),a(68)),ne=a.n(ae),re=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"showMessage",value:function(e){ne.a[e]("Content added!")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content-container"},r.a.createElement(L.a,{title:"Message",className:"card-wrap"},r.a.createElement(g.a,{type:"primary",onClick:function(){return e.showMessage("success")}},"Success"),r.a.createElement(g.a,{type:"primary",onClick:function(){return e.showMessage("info")}},"Info"),r.a.createElement(g.a,{type:"primary",onClick:function(){return e.showMessage("warning")}},"Warning"),r.a.createElement(g.a,{type:"primary",onClick:function(){return e.showMessage("error")}},"Error"),r.a.createElement(g.a,{type:"primary",onClick:function(){return e.showMessage("loading")}},"Loading")))}}]),a}(r.a.Component),ce=(a(323),a(84)),le=a.n(ce),ie=(a(325),a(63)),oe=a.n(ie),me=a(454),se=(a(327),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=r.a.createElement(me.a,null);return r.a.createElement("div",{className:"content-container"},r.a.createElement(L.a,{title:"Spin",className:"card-wrap"},r.a.createElement(oe.a,{size:"small"}),r.a.createElement(oe.a,{style:{margin:"0 20px"}}),r.a.createElement(oe.a,{size:"large"})),r.a.createElement(L.a,{title:"Alert"},r.a.createElement(oe.a,null,r.a.createElement(le.a,{message:"I-Bike",type:"info",description:"Welcome to I-Bike!"})),r.a.createElement(oe.a,{tip:"Loading...",wrapperClassName:"spin-middle"},r.a.createElement(le.a,{message:"I-Bike",type:"info",description:"Welcome to I-Bike!"})),r.a.createElement(oe.a,{indicator:e},r.a.createElement(le.a,{message:"I-Bike",type:"info",description:"Welcome to I-Bike!"}))))}}]),a}(r.a.Component)),ue=(a(166),a(74)),pe=a.n(ue),de=a(448),ye=a(455),Ee=pe.a.TabPane,he=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).newTabIndex=0,e.onChange=function(t){e.setState({activeKey:t})},e.onEdit=function(t,a){e[a](t)},e.add=function(){var t=e.state.panes,a="newTab ".concat(e.newTabIndex++);t.push({title:a,content:"New Tab Pane",key:a}),e.setState({panes:t,activeKey:a})},e.remove=function(t){var a,n=e.state.activeKey;e.state.panes.forEach((function(e,n){e.key===t&&(a=n-1)}));var r=e.state.panes.filter((function(e){return e.key!==t}));r.length&&n===t&&(n=a>=0?r[a].key:r[0].key),e.setState({panes:r,activeKey:n})},e}return Object(o.a)(a,[{key:"componentWillMount",value:function(){var e=[{title:"Tab 1",content:"This is the content of tab1",key:"1"},{title:"Tab 2",content:"This is the content of tab2",key:"2"},{title:"Tab 3",content:"This is the content of tab3",key:"3"}];this.setState({activeKey:e[0].key,panes:e})}},{key:"show",value:function(e){ne.a.info("Hi, the active tab is ".concat(e))}},{key:"render",value:function(){return r.a.createElement("div",{className:"content-container"},r.a.createElement(L.a,{title:"Tabs",className:"card-wrap"},r.a.createElement(pe.a,{defaultActiveKey:"1",onChange:this.show},r.a.createElement(Ee,{tab:"Tab 1",key:"1"},"Content of Tab Pane 1"),r.a.createElement(Ee,{tab:"Tab 2",key:"2"},"Content of Tab Pane 2"),r.a.createElement(Ee,{tab:"Tab 3",key:"3",disabled:!0},"Content of Tab Pane 3"))),r.a.createElement(L.a,{title:"Tabs with Icon",className:"card-wrap"},r.a.createElement(pe.a,{defaultActiveKey:"1",onChange:this.show},r.a.createElement(Ee,{tab:r.a.createElement("span",null,r.a.createElement(F.a,null),"Tab 1"),key:"1"},"Content of Tab Pane 1"),r.a.createElement(Ee,{tab:r.a.createElement("span",null,r.a.createElement(de.a,null),"Tab 2"),key:"2"},"Content of Tab Pane 2"),r.a.createElement(Ee,{tab:r.a.createElement("span",null,r.a.createElement(ye.a,null),"Tab 3"),key:"3"},"Content of Tab Pane 3"))),r.a.createElement(L.a,{title:"Dynamic Tabs",className:"card-wrap"},r.a.createElement(pe.a,{activeKey:this.state.activeKey,onChange:this.onChange,type:"editable-card",onEdit:this.onEdit},this.state.panes.map((function(e){return r.a.createElement(Ee,{tab:e.title,key:e.key},e.content)})))))}}]),a}(r.a.Component),fe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e.openGallery=function(t){e.setState({visible:!0,currentImg:t})},e}return Object(o.a)(a,[{key:"render",value:function(){for(var e=this,t=[],a=0;a<4;a++){t[a]=[];for(var n=0;n<4;n++)t[a][n]=4*a+n+1}var c=t.map((function(t){return t.map((function(t){return r.a.createElement(L.a,{style:{marginBottom:10},key:t,cover:r.a.createElement("img",{alt:t,src:"/gallery/".concat(t,".png"),onClick:function(){return e.openGallery(t)},style:{cursor:"pointer"}})},r.a.createElement(L.a.Meta,{title:"Title",description:"Content"}))}))}));return r.a.createElement("div",{className:"card-wrap"},r.a.createElement(E.a,{gutter:10},r.a.createElement(f.a,{md:6},c[0]),r.a.createElement(f.a,{md:6},c[1]),r.a.createElement(f.a,{md:6},c[2]),r.a.createElement(f.a,{md:6},c[3])),r.a.createElement(Q.a,{visible:this.state.visible,title:"Gallery",onCancel:function(){e.setState({visible:!1})},footer:null},r.a.createElement("img",{src:"/gallery/".concat(this.state.currentImg,".png"),alt:"",style:{width:"100%"}})))}}]),a}(r.a.Component),be=(a(335),a(140)),ge=a.n(be),ke=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e={height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},t={background:"#364d79",width:"100%"};return r.a.createElement("div",{style:{display:"block",width:"100%"}},r.a.createElement(L.a,{title:"Basic Carousel"},r.a.createElement(ge.a,{autoplay:!0},r.a.createElement("div",null,r.a.createElement("h3",{style:e},"1")),r.a.createElement("div",null,r.a.createElement("h3",{style:e},"2")),r.a.createElement("div",null,r.a.createElement("h3",{style:e},"3")),r.a.createElement("div",null,r.a.createElement("h3",{style:e},"4")))),r.a.createElement(L.a,{title:"Image Carousel"},r.a.createElement(ge.a,{autoplay:!0},r.a.createElement("div",null,r.a.createElement("img",{style:t,src:"/carousel-img/carousel-1.jpg",alt:""})),r.a.createElement("div",null,r.a.createElement("img",{style:t,src:"/carousel-img/carousel-2.jpg",alt:""})),r.a.createElement("div",null,r.a.createElement("img",{style:t,src:"/carousel-img/carousel-3.jpg",alt:""})))))}}]),a}(r.a.Component),ve=(a(347),a(87)),we=a.n(ve),Ce=(a(349),a(109)),Oe=a.n(Ce),je=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=Oe.a.Item;return r.a.createElement("div",{className:"content-container"},r.a.createElement(L.a,{title:"Login Inline Form"},r.a.createElement(Oe.a,{layout:"inline",onFinish:function(e){console.log(e.username)}},r.a.createElement(e,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(we.a,null)),r.a.createElement(e,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(we.a.Password,null)),r.a.createElement(e,null,r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit")))),r.a.createElement(L.a,{title:"Login Horizontal Form"},r.a.createElement(Oe.a,{style:{width:300}},r.a.createElement(e,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(we.a,null)),r.a.createElement(e,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(we.a.Password,null)),r.a.createElement(e,null,r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit")))))}}]),a}(r.a.Component),Ne=function(){return r.a.createElement("div",null,"404 Not Found!")},Me=(a(441),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(d,null,r.a.createElement(p.a,{path:"/login",component:P}),r.a.createElement(p.a,{path:"/admin",render:function(){return r.a.createElement(B,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/admin/home",component:W}),r.a.createElement(p.a,{path:"/admin/ui/buttons",component:J}),r.a.createElement(p.a,{path:"/admin/ui/modals",component:X}),r.a.createElement(p.a,{path:"/admin/ui/loadings",component:se}),r.a.createElement(p.a,{path:"/admin/ui/notification",component:te}),r.a.createElement(p.a,{path:"/admin/ui/messages",component:re}),r.a.createElement(p.a,{path:"/admin/ui/tabs",component:he}),r.a.createElement(p.a,{path:"/admin/ui/gallery",component:fe}),r.a.createElement(p.a,{path:"/admin/ui/carousel",component:ke}),r.a.createElement(p.a,{path:"/admin/form/login",component:je}),r.a.createElement(p.a,{component:Ne})))}}),r.a.createElement(p.a,{path:"/order/detail",component:P})))}}]),a}(r.a.Component));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.8bba446f.chunk.js.map