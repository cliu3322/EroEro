(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1074:function(n,e,t){"use strict";var r=t(4),a=t.n(r),i=t(8),o=t.n(i),l=t(9),c=t.n(l),s=t(15),d=t.n(s),p=t(7),f=t.n(p),u=t(10),m=t.n(u),h=t(1),g=t(18),b=t(64),x=t(17),y=t.n(x),v=t(88),O=t(54),j=t(26),w=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&(t[r[a]]=n[r[a]])}return t},C=function(n){function e(){c()(this,e);var n=f()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return n.handleClick=function(){var e=n.props,t=e.checked,r=e.onChange;r&&r(!t)},n}return m()(e,n),d()(e,[{key:"render",value:function(){var n,e=this.props,t=e.prefixCls,r=void 0===t?"ant-tag":t,i=e.className,l=e.checked,c=w(e,["prefixCls","className","checked"]),s=y()(r,(n={},o()(n,r+"-checkable",!0),o()(n,r+"-checkable-checked",l),n),i);return delete c.onChange,h.createElement("div",a()({},c,{className:s,onClick:this.handleClick}))}}]),e}(h.Component),k=t(218),E=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&(t[r[a]]=n[r[a]])}return t},N=function(n){function e(){c()(this,e);var n=f()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return n.state={closing:!1,closed:!1,visible:!0,mounted:!1},n.handleIconClick=function(e){var t=n.props.onClose;t&&t(e),e.defaultPrevented||"visible"in n.props||n.setState({visible:!1})},n.close=function(){if(!n.state.closing&&!n.state.closed){var e=g.findDOMNode(n);e.style.width=e.getBoundingClientRect().width+"px",e.style.width=e.getBoundingClientRect().width+"px",n.setState({closing:!0})}},n.show=function(){n.setState({closed:!1})},n.animationEnd=function(e,t){if(t||n.state.closed)n.setState({closed:!1});else{n.setState({closed:!0,closing:!1});var r=n.props.afterClose;r&&r()}},n}return m()(e,n),d()(e,[{key:"componentDidUpdate",value:function(n,e){e.visible&&!this.state.visible?this.close():!e.visible&&this.state.visible&&this.show()}},{key:"isPresetColor",value:function(n){return!!n&&/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(n)}},{key:"render",value:function(){var n,e=this.props,t=e.prefixCls,r=e.closable,i=e.color,l=e.className,c=e.children,s=e.style,d=E(e,["prefixCls","closable","color","className","children","style"]),p=r?h.createElement(j.a,{type:"close",onClick:this.handleIconClick}):"",f=this.isPresetColor(i),u=y()(t,(n={},o()(n,t+"-"+i,f),o()(n,t+"-has-color",i&&!f),o()(n,t+"-close",this.state.closing),n),l),m=Object(v.a)(d,["onClose","afterClose","visible"]),g=a()({backgroundColor:i&&!f?i:null},s),x=this.state.closed?h.createElement("span",null):h.createElement("div",a()({"data-show":!this.state.closing},m,{className:u,style:g}),c,p);return h.createElement(k.a,null,h.createElement(b.a,{component:"",showProp:"data-show",transitionName:t+"-zoom",transitionAppear:!0,onEnd:this.animationEnd},x))}}],[{key:"getDerivedStateFromProps",value:function(n,e){if("visible"in n){var t={visible:n.visible,mounted:!0};return e.mounted||(t=a()({},t,{closed:!n.visible})),t}return null}}]),e}(h.Component);N.CheckableTag=C,N.defaultProps={prefixCls:"ant-tag",closable:!1},Object(O.polyfill)(N);e.a=N},1095:function(n,e,t){"use strict";t.r(e);var r=t(19),a=t(20),i=t(22),o=t(23),l=t(24),c=t(1),s=t.n(c),d=t(200),p=t.n(d),f=t(26),u=t(25),m=t(21),h=t(3),g=t(14),b=t(34);function x(){var n=Object(u.a)(["\n  padding: 50px 35px;\n\n  @media only screen and (max-width: 767px) {\n    padding: 30px 20px;\n  }\n\n  .isoControlBar {\n    width: 100%;\n    display: flex;\n    margin-bottom: 30px;\n    align-items: center;\n\n    @media only screen and (max-width: 767px) {\n      align-items: flex-start;\n      flex-direction: column;\n    }\n\n    > * {\n      display: flex;\n      align-items: center;\n\n      .isoControlBtn {\n        font-size: 12px;\n        font-weight: 400;\n        text-transform: uppercase;\n        color: #ffffff;\n        background-color: ",";\n        border: 0;\n        outline: 0;\n        display: -webkit-inline-flex;\n        display: -ms-inline-flex;\n        display: inline-flex;\n        align-items: center;\n        height: 35px;\n        padding: 0 15px;\n        margin-right: ",";\n        margin-left: ",";\n        cursor: pointer;\n        ",";\n        ",";\n\n        @media only screen and (max-width: 430px) {\n          padding: 0 10px;\n        }\n\n        i {\n          padding-right: ",";\n          padding-left: ",";\n        }\n\n        &:last-child {\n          margin-right: ",";\n          margin-left: ",";\n        }\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n\n      &.isoControlBtnGroup {\n        margin-left: ",";\n        margin-right: ",";\n\n        @media only screen and (max-width: 767px) {\n          margin-left: ",";\n          margin-right: ",";\n          margin-top: 20px;\n        }\n      }\n    }\n  }\n\n  .isoAddRemoveControlBar {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-top: 30px;\n\n    .isoControlBtnGroup {\n      display: flex;\n      align-items: center;\n\n      .isoControlBtn {\n        font-size: 12px;\n        font-weight: 400;\n        padding: 0;\n        text-transform: uppercase;\n        color: #ffffff;\n        background-color: ",";\n        border: 0;\n        outline: 0;\n        height: 30px;\n        padding: 0 15px;\n        margin-right: ",";\n        margin-left: ",";\n        cursor: pointer;\n        ",";\n        ",";\n\n        i {\n          padding-right: ",";\n          padding-left: ",";\n        }\n\n        &:last-child {\n          margin: 0;\n        }\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n    }\n  }\n\n  &.grid {\n    .isoSortableCardsContainer {\n      ul {\n        width: 100%;\n        display: flex;\n        flex-flow: row wrap;\n      }\n    }\n  }\n"]);return x=function(){return n},n}function y(){var n=Object(u.a)(["\n  padding: 15px;\n  background-color: #ffffff;\n  position: relative;\n  margin-bottom: 5px;\n  ",";\n\n  .isoCardImage {\n    overflow: hidden;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: center;\n    background-color: ",";\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .isoCardContent {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin: 0 15px;\n\n    .isoCardTitle {\n      font-size: 14px;\n      font-weight: 500;\n      color: ",";\n      margin: 0 0 3px;\n    }\n\n    .isoCardDate {\n      font-size: 12px;\n      font-weight: 400;\n      color: ",";\n    }\n  }\n\n  .isoDeleteBtn {\n    width: 24px;\n    height: 24px;\n    background-color: transparent;\n    flex-shrink: 0;\n    padding: 0;\n    border: 0;\n    font-size: 14px;\n    color: ",";\n    cursor: pointer;\n    ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  &.list {\n    width: 100%;\n    display: flex;\n    align-items: center;\n\n    .isoCardImage {\n      width: 35px;\n      height: 35px;\n      display: -webkit-inline-flex;\n      display: -ms-inline-flex;\n      display: inline-flex;\n      ",";\n    }\n  }\n\n  &.grid {\n    width: calc(100% / 3 - 15px);\n    display: flex;\n    flex-direction: column;\n    margin: 0 7px 15px;\n    padding: 0;\n\n    @media only screen and (max-width: 767px) {\n      width: calc(100% / 2 - 10px);\n      margin: 0 5px 10px;\n    }\n\n    @media only screen and (max-width: 480px) {\n      width: 100%;\n      margin-right: ",";\n      margin-left: ",";\n    }\n\n    @media only screen and (min-width: 1400px) {\n      width: calc(100% / 4 - 15px);\n      margin: 0 7px 15px;\n    }\n\n    .isoCardImage {\n      width: 100%;\n      height: 260px;\n      display: flex;\n\n      @media only screen and (min-width: 960px) {\n        height: 330px;\n      }\n    }\n\n    .isoCardContent {\n      padding: 15px;\n      margin: 0;\n    }\n\n    .isoDeleteBtn {\n      position: absolute;\n      top: 0;\n      right: ",";\n      left: ",";\n    }\n  }\n"]);return y=function(){return n},n}var v=m.b.li(y(),Object(g.b)("0 0 1px rgba(0,0,0,0.15)"),Object(h.palette)("grayscale",6),Object(h.palette)("text",0),Object(h.palette)("grayscale",0),Object(h.palette)("grayscale",0),Object(g.c)(),Object(h.palette)("primary",0),Object(g.a)("50%"),function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"}),O=m.b.div(x(),Object(h.palette)("primary",0),function(n){return"rtl"===n["data-rtl"]?"0":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"0"},Object(g.a)("3px"),Object(g.c)(),function(n){return"rtl"===n["data-rtl"]?"0":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"0"},function(n){return n["data-rtl"],"0"},function(n){return n["data-rtl"],"0"},Object(h.palette)("primary",1),function(n){return"rtl"===n["data-rtl"]?"inherit":"auto"},function(n){return"rtl"===n["data-rtl"]?"auto":"inherit"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(h.palette)("primary",0),function(n){return"rtl"===n["data-rtl"]?"0":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"0"},Object(g.a)("3px"),Object(g.c)(),function(n){return"rtl"===n["data-rtl"]?"0":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"0"},Object(h.palette)("primary",1)),j=Object(b.a)(v),w=Object(b.a)(O),C=t(1079),k=t(1080),E=t(1074).a;function N(){var n=Object(u.a)(["\n  display: inline-block;\n\n  .ant-tag {\n    display: inline-block;\n    line-height: 24px;\n    height: 26px;\n    padding: 0 10px;\n    border-radius: 4px;\n    border: 1px solid ",";\n    background: ",";\n    font-size: 12px;\n    color: ",";\n    opacity: 1;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    margin-right: ",";\n    margin-left: ",";\n    cursor: pointer;\n    white-space: nowrap;\n    ",";\n\n    a {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .anticon-cross {\n      margin: ",";\n    }\n\n    &.ant-tag-has-color {\n      line-height: 24px;\n      color: #ffffff;\n      border: 0;\n    }\n\n    &.ant-tag-checkable {\n      background-color: transparent;\n      border-color: transparent;\n\n      &:not(.ant-tag-checkable-checked) {\n        &:hover {\n          background-color: ",";\n          color: #ffffff;\n        }\n      }\n\n      &:active {\n        background-color: ",";\n        color: #ffffff;\n      }\n\n      &.ant-tag-checkable-checked {\n        background-color: ",";\n        color: #ffffff;\n      }\n    }\n  }\n"]);return N=function(){return n},n}var P=m.b.div(N(),Object(h.palette)("border",0),Object(h.palette)("grayscale",6),Object(h.palette)("text",3),function(n){return"rtl"===n["data-rtl"]?"inherit":"8px"},function(n){return"rtl"===n["data-rtl"]?"8px":"inherit"},Object(g.c)(),Object(h.palette)("text",3),Object(h.palette)("text",3),function(n){return"rtl"===n["data-rtl"]?"0 3px 0 0":"0 0 0 3px"},Object(h.palette)("primary",0),Object(h.palette)("primary",0),Object(h.palette)("primary",0)),S=Object(b.a)(P),B=function(n){return s.a.createElement(S,null,s.a.createElement(E,n,n.children))},D=function(n){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){var n={width:"100%",display:"flex",flexFlow:"row wrap"},e="isoSingleCard card ".concat(this.props.view),t={zIndex:100-this.props.index};return s.a.createElement(j,{id:this.props.id,className:e,style:t},s.a.createElement("div",{className:"isoCardImage"},s.a.createElement("img",{alt:"#",src:""+this.props.img})),s.a.createElement("div",{className:"isoCardContent"},s.a.createElement("h3",{className:"isoCardTitle"},this.props.name),s.a.createElement(C.a,{style:n,gutter:16,justify:"start"},s.a.createElement(k.a,null,s.a.createElement("span",{className:"isoCardDate"},this.props.location)),s.a.createElement(k.a,null,s.a.createElement("span",{className:"isoCardDate"},p()(this.props.timestamp).format("MMM Do, YYYY")))),s.a.createElement(C.a,{style:n,gutter:16,justify:"start"},s.a.createElement(B,{color:"#2db7f5"},"#2db7f5"),s.a.createElement(B,{color:"#2db7f5"},"#2db7f5"),s.a.createElement(B,{color:"#2db7f5"},"#2db7f5"))),s.a.createElement("button",{className:"isoDeleteBtn",onClick:this.props.clickHandler},s.a.createElement(f.a,{type:"close"})))}}]),e}(c.Component),z=t(929),_=t.n(z),I=t(930),A=t.n(I);t.d(e,"default",function(){return M});var M=function(n){function e(n){var t;Object(r.a)(this,e),t=Object(i.a)(this,Object(o.a)(e).call(this,n));var a=[{id:"a",timestamp:8113968e5,name:"sddssddssd",img:_.a,location:"location 1",tag:{race:"asian",incall:1,outcall:0,Catalog:"SPA/Agency"},Contact:{phone:"222334564",email:""},price:{type:"Over Market price",exact:"Pleace contact the provider"},appointmentNeeded:1},{id:"b",timestamp:11087028e5,name:"sddssdd",img:A.a,location:"kujhjhj",race:"international spa"}];return t.state={records:a},t}return Object(l.a)(e,n),Object(a.a)(e,[{key:"renderArticles",value:function(){return this.state.records.map(function(n,e){return s.a.createElement(D,Object.assign({key:n.id,view:"list",index:e},n))})}},{key:"render",value:function(){return s.a.createElement(w,{id:"shuffle",className:"isomorphicSortableCardsHolder"},s.a.createElement("h1",null,"Blank Page"),s.a.createElement("div",{className:"isoSortableCardsContainer"},this.renderArticles()))}}]),e}(c.Component)},929:function(n,e,t){n.exports=t.p+"static/media/1.57c4a8ee.jpg"},930:function(n,e,t){n.exports=t.p+"static/media/2.b3c1af26.jpg"}}]);
//# sourceMappingURL=11.df26bc4d.chunk.js.map