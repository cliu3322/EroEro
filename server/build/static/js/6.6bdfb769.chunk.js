(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1085:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(20),i=a(22),l=a(23),c=a(24),o=a(1),s=a.n(o),p=a(35),m=a(119),u=a(26),d=a(1099),h=a(1107),E=a(1079),f=a(1080),g=a(1074),b=a(1072),y=a(1086),v=function(e){var t=e.type,a=e.text;return s.a.createElement("span",null,s.a.createElement(u.a,{type:t,style:{marginRight:8}}),a)},k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).handleOk=function(e){console.log(e),a.setState({visible:!1})},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},(0,a.props.initData)(a.props.match.params),a.state={visible:!1,id:"",myrecord:{}},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"popup",value:function(e){console.log(this.props.recordlist.find(function(t){return t._id===e})),this.setState({visible:!0,id:e,myrecord:this.props.recordlist.find(function(t){return t._id===e})})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(d.a,null,s.a.createElement(d.a.Item,null,s.a.createElement("a",{href:"/guest"},"Home"))),s.a.createElement(h.a,{bordered:!0,pagination:{pageSize:10},dataSource:this.props.recordlist,itemLayout:"vertical",loading:!1,renderItem:function(t){return s.a.createElement(h.a.Item,{key:t._id,extra:s.a.createElement("img",{width:150,alt:"logo",src:"http://localhost:9000/images/"+t.images[0],onClick:function(a){return e.popup(t._id)}})},s.a.createElement(h.a.Item.Meta,{title:s.a.createElement(E.a,null,s.a.createElement(f.a,{span:6},t.username),s.a.createElement(f.a,{span:6},t.service.map(function(a){return s.a.createElement(g.a,{onClick:function(a){return e.popup(t._id)}},a)}))),description:s.a.createElement(E.a,null,s.a.createElement(f.a,{span:6},"Add: ",t.address),s.a.createElement(f.a,{span:6},"Tel: ",t.phone),s.a.createElement(f.a,{span:6},Date(Date.now()).toString()))}),s.a.createElement(E.a,null,s.a.createElement(u.a,{onClick:function(a){return e.popup(t._id)},className:"App-todo-complete",type:"check"}),s.a.createElement(f.a,{span:1},s.a.createElement(v,{type:"star-o",text:t.reference_number})," |"),s.a.createElement(f.a,{span:2},s.a.createElement(v,{type:"like-o",text:"156"})," |"),s.a.createElement(f.a,{span:2},s.a.createElement(u.a,{type:"message",style:{marginRight:8},onClick:function(a){return e.popup(t._id)}}),"2")))}}),s.a.createElement(b.a,{title:"Basic Modal",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},s.a.createElement(y.a,{autoplay:!0},this.state.myrecord.images&&this.state.myrecord.images.map(function(e){return s.a.createElement("img",{width:150,alt:"logo",src:"http://localhost:9000/images/"+e})}))))}}]),t}(o.Component);t.default=Object(p.b)(function(e){return{recordlist:e.RecordList.recordlist}},m.a)(k)}}]);
//# sourceMappingURL=6.6bdfb769.chunk.js.map