(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1084:function(n,e,t){"use strict";t.r(e);var a=t(19),r=t(20),c=t(22),o=t(23),i=t(24),s=t(1),u=t.n(s),d=t(33),l=t(612),p=t(681),f=t(204),h=t(158),b=t(100),g=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=Object(c.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(i)))).state={loading:!1},t.checkDemo=function(){t.setState({loading:!0}),b.a.checkDemoPage(t.props.token).then(function(n){n.error?Object(h.a)("error",n.error):Object(h.a)("success","status: ".concat(n.status),n.message),t.setState({loading:!1})})},t}return Object(i.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){return u.a.createElement(l.a,{style:{height:"100vh"}},u.a.createElement(p.a,null,u.a.createElement(f.a,{loading:this.state.loading,onClick:this.checkDemo},"Check Auth Status")))}}]),e}(s.Component);e.default=Object(d.b)(function(n){return{token:n.Auth.idToken}},{})(g)},612:function(n,e,t){"use strict";var a=t(1),r=t.n(a),c=t(25);function o(){var n=Object(c.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return o=function(){return n},n}var i=t(21).b.div(o());e.a=function(n){return r.a.createElement(i,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},681:function(n,e,t){"use strict";var a=t(25),r=t(21),c=t(3);function o(){var n=Object(a.a)(["\n  width: 100%;\n  padding: 35px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  height: 100%;\n"]);return o=function(){return n},n}var i=r.b.div(o(),Object(c.palette)("border",0));e.a=i}}]);
//# sourceMappingURL=13.d4d33a19.chunk.js.map