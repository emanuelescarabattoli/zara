(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(e,t,n){e.exports=n(334)},192:function(e,t,n){},194:function(e,t,n){},319:function(e,t,n){},321:function(e,t,n){},323:function(e,t,n){},325:function(e,t,n){},327:function(e,t,n){},329:function(e,t,n){},331:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(68),l=n.n(o),i=n(343),c=n(13),u=n(145),s=n(166),d=n(341),m=n(169),p=n(15),h=Object(s.a)({uri:"https://zaraapp.herokuapp.com/app/graphql",credentials:"include"}),f=new d.a,E=new u.a({cache:f,link:p.a.from([Object(m.a)({defaults:{containers:{__typename:"Containers",dashboard:{__typename:"Container",default:null}}},resolvers:{Mutation:{}},cache:f}),h])}),b=n(17),v=n(18),w=n(20),g=n(19),O=n(21),C=n(344),j=n(168),k=n(93),y=n(342),D=n(94),S=n.n(D);function N(){var e=Object(k.a)(["\n  {\n    me {\n      username\n    }\n  }\n"]);return N=function(){return e},e}var R=S()(N()),$=function(e){var t=e.component,n=Object(j.a)(e,["component"]);return r.a.createElement(c.Query,{query:R},function(e){var a=e.loading,o=e.error,l=e.data;return a?r.a.createElement("div",null):r.a.createElement(C.a,Object.assign({},n,{render:function(e){return o||l.me.userneme?r.a.createElement(y.a,{to:"login"}):r.a.createElement(t,e)}}))})},q=(n(192),function(e){function t(){return Object(b.a)(this,t),Object(w.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component)),T=function(){return r.a.createElement("div",{className:"login-redirect"},r.a.createElement("span",null,"Redirecting..."))},M=(n(194),function(e){function t(){return Object(b.a)(this,t),Object(w.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){document.location.href="/accounts/login"}},{key:"render",value:function(){return r.a.createElement(T,null)}}]),t}(a.Component)),A=n(339),x=function(e){return r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"col-6 veritical-align-center"},r.a.createElement("h4",{className:"title-bar-title"},e.title)),r.a.createElement("div",{className:"col-6 align-right"},e.children))},I=function(e){return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"sidebar"},r.a.createElement("span",{className:"logo"},r.a.createElement("i",{className:"fas fa-chart-pie icon"}),"Zara"),r.a.createElement("div",{className:"menu-buttons"},r.a.createElement(A.a,{className:"button button-light",to:"/counter"},r.a.createElement("i",{className:"fas fa-plus fa-spacing"}),"New counter")),r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(A.a,{to:"/dashboard"},r.a.createElement("i",{className:"fas fa-chart-area fa-spacing"}),"Dashboard")),r.a.createElement("li",null,r.a.createElement(A.a,{to:"/counters"},r.a.createElement("i",{className:"fas fa-cube fa-spacing"}),"Counters")),r.a.createElement("li",null,r.a.createElement(A.a,{to:"/totals"},r.a.createElement("i",{className:"fas fa-cubes fa-spacing"}),"Totals")))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement(x,{title:e.title},r.a.createElement("a",{className:"logout",href:"/accounts/logout"},r.a.createElement("i",{className:"fas fa-sign-out-alt  fa-spacing"}),"Logout"))),r.a.createElement("div",{className:"main"},e.children)))};function L(){var e=Object(k.a)(["\n  {\n    listTotal {\n      title\n      totalrowSet {\n        counter {\n          title\n          counterrowSet {\n            description\n            amount\n          }\n        }\n      }\n    }\n  }\n"]);return L=function(){return e},e}function V(){var e=Object(k.a)(["\n  mutation mutationDeleteTotalRow($pk: Int!) {\n    mutationDeleteTotalRow(pk: $pk) {\n      success\n    }\n  }\n"]);return V=function(){return e},e}function F(){var e=Object(k.a)(["\n  mutation mutationTotalRow($id: ID!, $total: ID!, $counter: ID!) {\n    mutationTotalRow(input: { id: $id, total: $total, counter: $counter }) {\n      totalRow {\n        id\n      }\n      errors {\n        messages\n      }\n    }\n  }\n"]);return F=function(){return e},e}function Q(){var e=Object(k.a)(["\n  mutation mutationTotalRow($total: ID!, $counter: ID!) {\n    mutationTotalRow(input: { total: $total, counter: $counter }) {\n      totalRow {\n        id\n      }\n      errors {\n        messages\n      }\n    }\n  }\n"]);return Q=function(){return e},e}function P(){var e=Object(k.a)(["\n  mutation updateTotal($id: ID!, $title: String!) {\n    mutationTotal(input: { id: $id, title: $title }) {\n      total {\n        id\n      }\n      errors {\n        field\n        messages\n      }\n    }\n  }\n"]);return P=function(){return e},e}function B(){var e=Object(k.a)(["\n  mutation createTotal($title: String!) {\n    mutationTotal(input: { title: $title }) {\n      total {\n        id\n      }\n      errors {\n        field\n        messages\n      }\n    }\n  }\n"]);return B=function(){return e},e}function K(){var e=Object(k.a)(["\n  query($id: Int) {\n    detailTotal(id: $id) {\n      id\n      title\n      totalrowSet {\n        id\n        counter {\n          id\n          title\n          counterrowSet {\n            amount\n          }\n        }\n      }\n    }\n  }\n"]);return K=function(){return e},e}function W(){var e=Object(k.a)(["\n  mutation mutationDeleteTotal($pk: Int!) {\n    mutationDeleteTotal(pk: $pk) {\n      success\n    }\n  }\n"]);return W=function(){return e},e}function _(){var e=Object(k.a)(["\n  {\n    listTotal {\n      id\n      title\n    }\n  }\n"]);return _=function(){return e},e}function z(){var e=Object(k.a)(["\n  mutation mutationDeleteCounterRow($pk: Int!) {\n    mutationDeleteCounterRow(pk: $pk) {\n      success\n    }\n  }\n"]);return z=function(){return e},e}function J(){var e=Object(k.a)(["\n  mutation mutationCounterRow(\n    $id: ID!\n    $counter: ID!\n    $date: Date!\n    $description: String!\n    $period: String!\n    $amount: Float!\n  ) {\n    mutationCounterRow(\n      input: { id: $id, counter: $counter, date: $date, description: $description, period: $period, amount: $amount }\n    ) {\n      counterRow {\n        id\n      }\n      errors {\n        messages\n      }\n    }\n  }\n"]);return J=function(){return e},e}function Y(){var e=Object(k.a)(["\n  mutation mutationCounterRow($counter: ID!, $date: Date!, $description: String!, $period: String!, $amount: Float!) {\n    mutationCounterRow(\n      input: { counter: $counter, date: $date, description: $description, period: $period, amount: $amount }\n    ) {\n      counterRow {\n        id\n      }\n      errors {\n        messages\n      }\n    }\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(k.a)(["\n  mutation updateCounter($id: ID!, $title: String!) {\n    mutationCounter(input: { id: $id, title: $title }) {\n      counter {\n        id\n      }\n      errors {\n        field\n        messages\n      }\n    }\n  }\n"]);return Z=function(){return e},e}function G(){var e=Object(k.a)(["\n  mutation createCounter($title: String!) {\n    mutationCounter(input: { title: $title }) {\n      counter {\n        id\n      }\n      errors {\n        field\n        messages\n      }\n    }\n  }\n"]);return G=function(){return e},e}function H(){var e=Object(k.a)(["\n  query($id: Int) {\n    detailCounter(id: $id) {\n      id\n      title\n      counterrowSet {\n        id\n        date\n        description\n        period\n        amount\n      }\n    }\n  }\n"]);return H=function(){return e},e}function U(){var e=Object(k.a)(["\n  mutation mutationDeleteCounter($pk: Int!) {\n    mutationDeleteCounter(pk: $pk) {\n      success\n    }\n  }\n"]);return U=function(){return e},e}function X(){var e=Object(k.a)(["\n  {\n    listCounter {\n      id\n      title\n    }\n  }\n"]);return X=function(){return e},e}var ee=S()(X()),te=S()(U()),ne=S()(H()),ae=S()(G()),re=S()(Z()),oe=S()(Y()),le=S()(J()),ie=S()(z()),ce=S()(_()),ue=S()(W()),se=S()(K()),de=S()(B()),me=S()(P()),pe=S()(Q()),he=S()(F()),fe=S()(V()),Ee=S()(L()),be=function(e){return e?e.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"},ve=["#0088FE","#00C49F","#FFBB28","#FF8042"],we=n(340),ge=n(167),Oe=n(163),Ce=n(146),je=function(e){return r.a.createElement("div",{className:"card"},e.children)},ke=function(e){return r.a.createElement("div",{className:"card-header"},e.children)},ye=function(e){return r.a.createElement("div",{className:"card-section"},e.children)},De=function(e){return r.a.createElement("div",{className:"card-body"},e.children)},Se=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"grid"},e.list.map(function(e){return r.a.createElement("div",{className:"col-6"},r.a.createElement(je,null,r.a.createElement(ke,null,r.a.createElement(x,{title:e.title})),r.a.createElement(De,null,r.a.createElement("div",{className:"horizontal-align-center "},r.a.createElement(we.a,{width:300,height:300},r.a.createElement(ge.a,{data:e.data,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",fill:"red"},e.data.map(function(e,t){return r.a.createElement(Oe.a,{key:t,fill:ve[t%ve.length]})})),r.a.createElement(Ce.a,null))))))})))},Ne=(n(319),function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).adaptList=function(){var e=[];return n.props.query.listTotal.map(function(t){var n={title:"",data:[]},a=0;return t.totalrowSet.map(function(e){var t=e.counter.counterrowSet.reduce(function(e,t){return e+t.amount},0);return n.data.push({name:e.counter.title+" (\u20ac "+be(t)+")",value:Math.abs(t)}),a+=t,null}),n.title=t.title+" (\u20ac "+be(a)+")",e.push(n),null}),e},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e;return e=this.props.query.loading?"Loading...":r.a.createElement(Se,{list:this.adaptList()}),r.a.createElement(I,{title:"Dashboard"},e)}}]),t}(a.Component)),Re=Object(c.compose)(Object(c.graphql)(Ee,{name:"query"}))(Ne),$e=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(w.a)(this,Object(g.a)(t).call(this,e))).state={confirm:!1},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"delete"},this.state.confirm?null:r.a.createElement("div",null,r.a.createElement("button",{className:"button-icon red",onClick:function(){return e.setState({confirm:!0})}},r.a.createElement("i",{className:"fa fa-trash"}))),this.state.confirm?r.a.createElement("div",null,r.a.createElement("button",{className:"button-icon green",onClick:function(){return e.props.onClick()}},r.a.createElement("i",{className:"fa fa-check"})),r.a.createElement("button",{className:"button-icon red",onClick:function(){return e.setState({confirm:!1})}},r.a.createElement("i",{className:"fa fa-times"}))):null)}}]),t}(a.Component),qe=function(e){return r.a.createElement(A.a,{className:"button button-plus",to:e.link},r.a.createElement("i",{className:"fas fa-plus"}))},Te=function(e){return r.a.createElement("div",null,r.a.createElement(je,null,r.a.createElement(ke,null,r.a.createElement(x,{title:"Your counters"})),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"5%"},"Id"),r.a.createElement("th",null,"Title"),r.a.createElement("th",{width:"60px"}))),r.a.createElement("tbody",null,e.list.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,r.a.createElement(A.a,{to:"/counter/"+t.id},t.title)),r.a.createElement("td",null,r.a.createElement($e,{onClick:function(){return e.onDelete(t.id)}})))})))),r.a.createElement(qe,{link:"/counter"}))},Me=(n(321),function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).onDelete=function(e){n.props.delete({variables:{pk:e}})},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e;return e=this.props.query.loading?"Loading...":r.a.createElement(Te,{list:this.props.query.listCounter,onDelete:this.onDelete}),r.a.createElement(I,{title:"Counters"},e)}}]),t}(a.Component)),Ae=Object(c.compose)(Object(c.graphql)(ee,{name:"query",options:{notifyOnNetworkStatusChange:!0}}),Object(c.graphql)(te,{name:"delete",options:{refetchQueries:[{query:ee}]}}))(Me),xe=n(40),Ie=n(95),Le=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.name},e.description),r.a.createElement("input",{name:e.name,type:e.type?e.type:"text",value:e.value,onChange:e.onChange,placeholder:e.helpText}),r.a.createElement("small",null,e.error&&e.error.messages.join(", ")))},Ve=function(e){return r.a.createElement("button",{disabled:e.disabled,className:"button",onClick:e.onClick},e.children)},Fe=function(e){return r.a.createElement("span",{className:"total"},0===e.list.length?be(0):1===e.list.length?be(e.list[0][e.column]):be(e.list.reduce(function(t,n){return void 0!==t[e.column]?t[e.column]+n[e.column]:t+n[e.column]}))," ","\u20ac")},Qe=function(e){return r.a.createElement("div",{className:e.isVisible?"modal":"modal hidden"},r.a.createElement("div",null,r.a.createElement(x,{title:e.title},r.a.createElement("span",{className:"pointer",onClick:e.onCloseModal},r.a.createElement("i",{className:"fas fa-times"}))),r.a.createElement("div",null,e.children),r.a.createElement(Ve,{onClick:e.onValidate},"Save")))},Pe=function(e){return r.a.createElement("div",null,r.a.createElement(je,null,r.a.createElement(ke,null,r.a.createElement(x,{title:"Counter detail"},r.a.createElement(Ve,{onClick:e.onSave},"Save"))),r.a.createElement(De,null,r.a.createElement("div",null,r.a.createElement(Le,{name:"title",description:"Title",value:e.detail.title,helpText:"Title of conter",onChange:e.onChange,error:e.errors.find(function(e){return"title"===e.field})}))),r.a.createElement(ye,null,r.a.createElement(x,{title:"Rows"},r.a.createElement(Ve,{disabled:e.buttonAddDisabled,onClick:e.clickAdd},"Add"))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"5%"},"Id"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Period"),r.a.createElement("th",{className:"align-right"},"Amount"),r.a.createElement("th",{width:"60px"}))),r.a.createElement("tbody",null,e.list&&e.list.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.clickEdit(t.id)}},t.description)),r.a.createElement("td",null,t.date),r.a.createElement("td",null,t.period),r.a.createElement("td",{className:"align-right"},be(t.amount)," \u20ac"),r.a.createElement("td",null,r.a.createElement($e,{onClick:function(){return e.clickDelete(t.id)}})))})),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:5,className:"align-right"},r.a.createElement(Fe,{list:e.list||[],column:"amount"})),r.a.createElement("td",{colSpan:1}))))),r.a.createElement(Qe,{title:"Add a counter row",isVisible:e.modalVisible,onCloseModal:e.closeModal,onValidate:e.onSaveRow},r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"col-2"},r.a.createElement(Le,{type:"date",name:"date",description:"Date",value:e.rowDetail.date,helpText:"Date of counter row",onChange:e.onChangeRow,error:e.rowErrors.find(function(e){return"date"===e.field})})),r.a.createElement("div",{className:"col-6"},r.a.createElement(Le,{name:"description",description:"Description",value:e.rowDetail.description,helpText:"Description of counter row",onChange:e.onChangeRow,error:e.rowErrors.find(function(e){return"description"===e.field})})),r.a.createElement("div",{className:"col-2"},r.a.createElement(Le,{name:"period",description:"Period",value:e.rowDetail.period,helpText:"Period of counter row",onChange:e.onChangeRow,error:e.rowErrors.find(function(e){return"period"===e.field})})),r.a.createElement("div",{className:"col-2"},r.a.createElement(Le,{name:"amount",description:"Amount",value:e.rowDetail.amount,helpText:"Amount of counter row",onChange:e.onChangeRow,error:e.rowErrors.find(function(e){return"amount"===e.field})})))))},Be=(n(323),function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(w.a)(this,Object(g.a)(t).call(this,e))).onSave=function(){return n.save().then(function(e){return n.errorOrRedirect(e)})},n.onSaveRow=function(){return n.saveRow().then(function(e){return n.errorOrCloseModal(e)})},n.save=function(){return n.state.id?n.props.update({variables:{id:n.state.id,title:n.state.detail.title}}):n.props.create({variables:Object(Ie.a)({},n.state.detail)})},n.saveRow=function(){return n.state.rowDetail.id?n.props.updateRow({variables:Object(Ie.a)({},n.state.rowDetail,{counter:n.state.id})}):n.props.createRow({variables:Object(Ie.a)({},n.state.rowDetail,{counter:n.state.id})})},n.error=function(e){return n.setState({errors:e.data.mutationCounter.errors})},n.errorRow=function(e){return n.setState({rowErrors:e.data.mutationCounterRow.errors})},n.resetRow=function(){return n.setState({rowDetail:{description:"",date:"",period:"",amount:""},rowErrors:[]})},n.errorOrRedirect=function(e){return e.data.mutationCounter.errors.length>0?n.error(e):n.props.history.push("/counter/"+e.data.mutationCounter.counter.id)},n.errorOrOpenModalOnAdd=function(e){return e.data.mutationCounter.errors.length>0?n.error(e):(n.resetRow(),n.openModal())},n.errorOrOpenModalOnEdit=function(e,t){if(e.data.mutationCounter.errors.length>0)return n.error(e);var a=n.state.detail.counterrowSet.find(function(e){return e.id===t});return n.setState({rowDetail:a}),n.openModal()},n.errorOrCloseModal=function(e){return e.data.mutationCounterRow.errors.length>0&&n.errorRow(e),n.resetRow(),n.closeModal()},n.openModal=function(){return n.setState({modalVisible:!0})},n.closeModal=function(){return n.setState({modalVisible:!1})},n.clickAdd=function(){return n.save().then(function(e){return n.errorOrOpenModalOnAdd(e)})},n.onChange=function(e){return n.setState({detail:Object(Ie.a)({},n.state.detail,Object(xe.a)({},e.target.name,e.target.value))})},n.onChangeRow=function(e){return n.setState({rowDetail:Object(Ie.a)({},n.state.rowDetail,Object(xe.a)({},e.target.name,e.target.value))})},n.clickEdit=function(e){return n.save().then(function(t){return n.errorOrOpenModalOnEdit(t,e)})},n.clickDelete=function(e){return n.props.delete({variables:{pk:e}})},n.buttonAddDisabled=function(){return 0===n.state.id},n.state={id:0,detail:{title:""},errors:[],rowDetail:{description:"",date:"",period:"",amount:""},rowErrors:[],modalVisible:!1},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.query.detailCounter&&(this.setState({id:e.match.params.id}),this.setState({detail:e.query.detailCounter}))}},{key:"render",value:function(){var e;return e=this.props.query.loading?"Loading...":r.a.createElement(Pe,{detail:this.state.detail,onChange:this.onChange,onSave:this.onSave,errors:this.state.errors,list:this.state.detail.counterrowSet,clickAdd:this.clickAdd,closeModal:this.closeModal,modalVisible:this.state.modalVisible,rowDetail:this.state.rowDetail,rowErrors:this.state.rowErrors,onChangeRow:this.onChangeRow,onSaveRow:this.onSaveRow,clickEdit:this.clickEdit,clickDelete:this.clickDelete,buttonAddDisabled:this.buttonAddDisabled()}),r.a.createElement(I,{title:"Counter"},e)}}]),t}(a.Component)),Ke=Object(c.compose)(Object(c.graphql)(ne,{name:"query",options:function(e){return{notifyOnNetworkStatusChange:!0,variables:{id:e.match.params.id},fetchPolicy:"network-only"}}}),Object(c.graphql)(ae,{name:"create",options:{refetchQueries:[{query:ee}]}}),Object(c.graphql)(re,{name:"update",options:{refetchQueries:[{query:ee}]}}),Object(c.graphql)(oe,{name:"createRow",options:function(e){return{notifyOnNetworkStatusChange:!0,refetchQueries:[{query:ne,variables:{id:e.match.params.id}}]}}}),Object(c.graphql)(le,{name:"updateRow",options:function(e){return{notifyOnNetworkStatusChange:!0,refetchQueries:[{query:ne,variables:{id:e.match.params.id}}]}}}),Object(c.graphql)(ie,{name:"delete",options:function(e){return{notifyOnNetworkStatusChange:!0,refetchQueries:[{query:ne,variables:{id:e.match.params.id}}]}}}))(Be),We=function(e){return r.a.createElement("div",null,r.a.createElement(je,null,r.a.createElement(ke,null,r.a.createElement(x,{title:"Your totals"})),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"5%"},"Id"),r.a.createElement("th",null,"Title"),r.a.createElement("th",{width:"60px"}))),r.a.createElement("tbody",null,e.list.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,r.a.createElement(A.a,{to:"/total/"+t.id},t.title)),r.a.createElement("td",null,r.a.createElement($e,{onClick:function(){return e.onDelete(t.id)}})))})))),r.a.createElement(qe,{link:"/total"}))},_e=(n(325),function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).onDelete=function(e){n.props.delete({variables:{pk:e}})},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e;return e=this.props.query.loading?"Loading...":r.a.createElement(We,{list:this.props.query.listTotal,onDelete:this.onDelete}),r.a.createElement(I,{title:"Totals"},e)}}]),t}(a.Component)),ze=Object(c.compose)(Object(c.graphql)(ce,{name:"query",options:{notifyOnNetworkStatusChange:!0}}),Object(c.graphql)(ue,{name:"delete",options:{refetchQueries:[{query:ce}]}}))(_e),Je=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.name},e.description),r.a.createElement("select",{name:e.name,value:e.value,onChange:e.onChange},r.a.createElement("option",{value:void 0},"----"),e.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})),r.a.createElement("small",null,e.error&&e.error.messages.join(", ")))},Ye=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"col-7"},r.a.createElement(je,null,r.a.createElement(ke,null,r.a.createElement(x,{title:"Total detail"},r.a.createElement(Ve,{onClick:e.onSave},"Save"))),r.a.createElement(De,null,r.a.createElement("div",null,r.a.createElement(Le,{name:"title",description:"Title",value:e.detail.title,helpText:"Title of total",onChange:e.onChange,error:e.errors.find(function(e){return"title"===e.field})}))),r.a.createElement(ye,null,r.a.createElement(x,{title:"Rows"},r.a.createElement(Ve,{disabled:e.buttonAddDisabled,onClick:e.clickAdd},"Add"))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"5%"},"Id"),r.a.createElement("th",null,"Counter"),r.a.createElement("th",{className:"align-right"},"Amount"),r.a.createElement("th",{width:"60px"}))),r.a.createElement("tbody",null,e.list&&e.list.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.clickEdit(t.id)}},t.title)),r.a.createElement("td",{className:"align-right"},be(t.amount)," \u20ac"),r.a.createElement("td",null,r.a.createElement($e,{onClick:function(){return e.clickDelete(t.id)}})))})),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3,className:"align-right"},r.a.createElement(Fe,{list:e.list,column:"amount"})),r.a.createElement("td",{colSpan:1})))))),r.a.createElement("div",{className:"col-5"},r.a.createElement(je,null,r.a.createElement(ke,null,r.a.createElement(x,{title:"Chart"})),r.a.createElement(De,null,r.a.createElement("div",{className:"horizontal-align-center "},r.a.createElement(we.a,{width:300,height:300},r.a.createElement(ge.a,{data:e.chartData,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",fill:"red"},e.chartData.map(function(e,t){return r.a.createElement(Oe.a,{key:t,fill:ve[t%ve.length]})})),r.a.createElement(Ce.a,null))))))),r.a.createElement(Qe,{title:"Add a total row",isVisible:e.modalVisible,onCloseModal:e.closeModal,onValidate:e.onSaveRow},r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"col-6"},r.a.createElement(Je,{name:"counter",description:"Counter",value:e.rowDetail.counter.id,options:e.counterList,helpText:"Counter",onChange:e.onChangeRow,error:e.rowErrors.find(function(e){return"date"===e.field})})))))},Ze=(n(327),function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(w.a)(this,Object(g.a)(t).call(this,e))).onSave=function(){return n.save().then(function(e){return n.errorOrRedirect(e)})},n.onSaveRow=function(){return n.saveRow().then(function(e){return n.errorOrCloseModal(e)})},n.save=function(){return n.state.id?n.props.update({variables:{id:n.state.id,title:n.state.detail.title}}):n.props.create({variables:Object(Ie.a)({},n.state.detail)})},n.saveRow=function(){return n.state.rowDetail.id?n.props.updateRow({variables:Object(Ie.a)({},n.state.rowDetail,{total:n.state.id})}):n.props.createRow({variables:Object(Ie.a)({},n.state.rowDetail,{total:n.state.id})})},n.error=function(e){return n.setState({errors:e.data.mutationTotal.errors})},n.errorRow=function(e){return n.setState({rowErrors:e.data.mutationTotalRow.errors})},n.resetRow=function(){return n.setState({rowDetail:{counter:0},rowErrors:[]})},n.errorOrRedirect=function(e){return e.data.mutationTotal.errors.length>0?n.error(e):n.props.history.push("/total/"+e.data.mutationTotal.total.id)},n.errorOrOpenModalOnAdd=function(e){return e.data.mutationTotal.errors.length>0?n.error(e):(n.resetRow(),n.openModal())},n.errorOrOpenModalOnEdit=function(e,t){if(e.data.mutationTotal.errors.length>0)return n.error(e);var a=n.state.detail.totalrowSet.find(function(e){return e.counter.id===t});return n.setState({rowDetail:a}),n.openModal()},n.errorOrCloseModal=function(e){return e.data.mutationTotalRow.errors.length>0&&n.errorRow(e),n.resetRow(),n.closeModal()},n.openModal=function(){return n.setState({modalVisible:!0})},n.closeModal=function(){return n.setState({modalVisible:!1})},n.clickAdd=function(){return n.save().then(function(e){return n.errorOrOpenModalOnAdd(e)})},n.onChange=function(e){return n.setState({detail:Object(Ie.a)({},n.state.detail,Object(xe.a)({},e.target.name,e.target.value))})},n.onChangeRow=function(e){return n.setState({rowDetail:Object(Ie.a)({},n.state.rowDetail,Object(xe.a)({},e.target.name,e.target.value))})},n.clickEdit=function(e){return n.save().then(function(t){return n.errorOrOpenModalOnEdit(t,e)})},n.clickDelete=function(e){return n.props.delete({variables:{pk:e}})},n.buttonAddDisabled=function(){return 0===n.state.id},n.adaptCounterList=function(){var e=[];return n.props.queryListCounter.listCounter.map(function(t){return e.push({value:t.id,label:t.title})}),e},n.adaptTotalRowList=function(){var e=[];return n.state.detail.totalrowSet.map(function(t){var n=t.counter.counterrowSet.reduce(function(e,t){return e+t.amount},0);return e.push({id:t.id,title:t.counter.title,amount:n}),null}),e},n.chartData=function(){var e=[];return n.state.detail.totalrowSet.map(function(t){var n=t.counter.counterrowSet.reduce(function(e,t){return e+t.amount},0);return e.push({name:t.counter.title,value:Math.abs(n)}),null}),e},n.state={id:0,detail:{title:"",totalrowSet:[]},errors:[],rowDetail:{counter:{id:"",title:""}},rowErrors:[],modalVisible:!1},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.query.detailTotal&&(this.setState({id:e.match.params.id}),this.setState({detail:e.query.detailTotal}))}},{key:"render",value:function(){var e;return e=this.props.query.loading||this.props.queryListCounter.loading?"Loading...":r.a.createElement(Ye,{detail:this.state.detail,onChange:this.onChange,onSave:this.onSave,errors:this.state.errors,list:this.adaptTotalRowList(),clickAdd:this.clickAdd,closeModal:this.closeModal,modalVisible:this.state.modalVisible,rowDetail:this.state.rowDetail,rowErrors:this.state.rowErrors,onChangeRow:this.onChangeRow,onSaveRow:this.onSaveRow,clickEdit:this.clickEdit,clickDelete:this.clickDelete,buttonAddDisabled:this.buttonAddDisabled(),counterList:this.adaptCounterList(),chartData:this.chartData()}),r.a.createElement(I,{title:"Total"},e)}}]),t}(a.Component)),Ge=Object(c.compose)(Object(c.graphql)(se,{name:"query",options:function(e){return{notifyOnNetworkStatusChange:!0,variables:{id:e.match.params.id},fetchPolicy:"network-only"}}}),Object(c.graphql)(de,{name:"create",options:{refetchQueries:[{query:ce}]}}),Object(c.graphql)(me,{name:"update",options:{refetchQueries:[{query:ce}]}}),Object(c.graphql)(pe,{name:"createRow",options:function(e){return{notifyOnNetworkStatusChange:!0,refetchQueries:[{query:se,variables:{id:e.match.params.id}}]}}}),Object(c.graphql)(he,{name:"updateRow",options:function(e){return{notifyOnNetworkStatusChange:!0,refetchQueries:[{query:se,variables:{id:e.match.params.id}}]}}}),Object(c.graphql)(fe,{name:"delete",options:function(e){return{notifyOnNetworkStatusChange:!0,refetchQueries:[{query:se,variables:{id:e.match.params.id}}]}}}),Object(c.graphql)(ee,{name:"queryListCounter"}))(Ze),He=(n(329),function(e){function t(){return Object(b.a)(this,t),Object(w.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{exact:!0,path:"/login",component:M}),r.a.createElement(C.a,{exact:!0,path:"/demo",component:q}),r.a.createElement($,{exact:!0,path:"/",component:Re}),r.a.createElement($,{exact:!0,path:"/dashboard",component:Re}),r.a.createElement($,{exact:!0,path:"/counters",component:Ae}),r.a.createElement($,{exact:!0,path:"/counter",component:Ke}),r.a.createElement($,{exact:!0,path:"/counter/:id",component:Ke}),r.a.createElement($,{exact:!0,path:"/totals",component:ze}),r.a.createElement($,{exact:!0,path:"/total",component:Ge}),r.a.createElement($,{exact:!0,path:"/total/:id",component:Ge}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(331);l.a.render(r.a.createElement(c.ApolloProvider,{client:E},r.a.createElement(i.a,null,r.a.createElement(He,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[172,2,1]]]);
//# sourceMappingURL=main.228667a2.chunk.js.map