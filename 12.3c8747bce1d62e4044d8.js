(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+olZ":function(t,e,a){"use strict";a.r(e),a.d(e,"RequestsModule",(function(){return E}));var n=a("ofXK"),o=a("tyNb"),c=a("agfR"),i=a("R0Ic"),r=a("+0xr"),l=a("RVEH"),b=a("fXoL"),d=a("Dh3D");function s(t,e){1&t&&(b.Sb(0,"th",31),b.zc(1," ID "),b.Rb())}function m(t,e){if(1&t&&(b.Sb(0,"td",32),b.zc(1),b.Rb()),2&t){var a=e.$implicit;b.Bb(1),b.Bc(" ",a.id," ")}}function f(t,e){1&t&&(b.Sb(0,"th",31),b.zc(1," Solicitante "),b.Rb())}function u(t,e){if(1&t&&(b.Sb(0,"td",32),b.zc(1),b.Rb()),2&t){var a=e.$implicit;b.Bb(1),b.Bc(" ",a.requester.name," ")}}function _(t,e){1&t&&(b.Sb(0,"th",31),b.zc(1," Observa\xe7\xe3o "),b.Rb())}function h(t,e){if(1&t&&(b.Sb(0,"td",33),b.zc(1),b.Rb()),2&t){var a=e.$implicit;b.Bb(1),b.Bc(" ",a.justification," ")}}function p(t,e){1&t&&(b.Sb(0,"th",31),b.zc(1," Data Requisitada "),b.Rb())}function w(t,e){if(1&t&&(b.Sb(0,"td",32),b.zc(1),b.ec(2,"date"),b.Rb()),2&t){var a=e.$implicit;b.Bb(1),b.Bc(" ",b.fc(2,1,a.requestDate)," ")}}function g(t,e){1&t&&(b.Sb(0,"th",31),b.zc(1," Data Desejada "),b.Rb())}function R(t,e){if(1&t&&(b.Sb(0,"td",32),b.zc(1),b.ec(2,"date"),b.Rb()),2&t){var a=e.$implicit;b.Bb(1),b.Bc(" ",b.fc(2,1,a.desiredDate)," ")}}function C(t,e){1&t&&(b.Sb(0,"th",34),b.zc(1," Prioridadade "),b.Rb())}function S(t,e){if(1&t&&(b.Sb(0,"td",35),b.zc(1),b.Rb()),2&t){var a=e.$implicit;b.Bb(1),b.Bc(" ",a.priority," ")}}function y(t,e){1&t&&(b.Sb(0,"th",34),b.zc(1," situa\xe7\xe3o "),b.Rb())}function D(t,e){if(1&t&&(b.Sb(0,"td",35),b.zc(1),b.Rb()),2&t){var a=e.$implicit;b.Bb(1),b.Bc(" ",a.status," ")}}function v(t,e){1&t&&(b.Sb(0,"th",36),b.zc(1," A\xe7\xf5es "),b.Rb())}function x(t,e){1&t&&(b.Sb(0,"td",37),b.Sb(1,"button",38),b.Zb("click",(function(){var t=e.$implicit;return t.isExpanded=!t.isExpanded})),b.Sb(2,"i",39),b.zc(3,"table_view"),b.Rb(),b.Rb(),b.Rb())}function O(t,e){if(1&t&&(b.Sb(0,"tr"),b.Sb(1,"td"),b.zc(2),b.Rb(),b.Sb(3,"td"),b.zc(4),b.Rb(),b.Sb(5,"td"),b.zc(6),b.Rb(),b.Rb()),2&t){var a=e.$implicit;b.Bb(2),b.Ac(a.id),b.Bb(2),b.Ac(a.description),b.Bb(2),b.Ac(a.amount)}}function P(t,e){if(1&t&&(b.Sb(0,"td",40),b.Sb(1,"div",41),b.Sb(2,"table",42),b.Sb(3,"thead"),b.Sb(4,"th"),b.zc(5,"ID"),b.Rb(),b.Sb(6,"th"),b.zc(7,"Descricao"),b.Rb(),b.Sb(8,"th"),b.zc(9,"Quantidade"),b.Rb(),b.Rb(),b.Sb(10,"tbody"),b.yc(11,O,7,3,"tr",43),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t){var a=e.$implicit,n=b.dc();b.Cb("colspan",n.columnsToDisplay.length),b.Bb(1),b.ic("@detailExpand",a.isExpanded?"expanded":"collapsed"),b.Bb(10),b.ic("ngForOf",a.materials)}}function z(t,e){1&t&&b.Nb(0,"tr",44)}function M(t,e){1&t&&b.Nb(0,"tr",45),2&t&&b.Eb("table__row--expanded",e.$implicit.isExpanded)}function B(t,e){1&t&&b.Nb(0,"tr",46)}var k=function(){return["expandedDetail"]},j=function(){function t(t){this._requestService=t,this.requestsList=new r.k,this.columnsToDisplay=["id","requesterName","justification","requestDate","desiredDate","priority","status","actions"]}return t.prototype.ngOnInit=function(){this.requestsList.data=this._requestService.getRequests()},t.\u0275fac=function(e){return new(e||t)(b.Mb(l.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-dashboard"]],decls:43,vars:6,consts:[[1,"main-content","dashboard"],[1,"dashboard__header"],[1,"dashboard__button"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header","card-header-info"],[1,"card-title"],[1,"card-body"],[1,"table-responsive"],["matSort","","multiTemplateDataRows","",1,"table","table-responsive","table-full-width",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","table__cell","mat-cell","",4,"matCellDef"],["matColumnDef","requesterName"],["matColumnDef","justification"],["class","table__cell table__cell--overflow","mat-cell","",4,"matCellDef"],["matColumnDef","requestDate"],["matColumnDef","desiredDate"],["matColumnDef","priority"],["class","text-center","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","table__cell text-center","mat-cell","",4,"matCellDef"],["matColumnDef","status"],["matColumnDef","actions"],["class","text-center","mat-header-cell","",4,"matHeaderCellDef"],["class","text-center td-actions","mat-cell","","title","Visualizar materiais",4,"matCellDef"],["matColumnDef","expandedDetail"],["mat-cell","",4,"matCellDef"],["class","table__row table__row--head","mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","table__row",3,"table__row--expanded",4,"matRowDef","matRowDefColumns"],["mat-row","","class","table__row--details",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",1,"table__cell"],["mat-cell","",1,"table__cell","table__cell--overflow"],["mat-header-cell","","mat-sort-header","",1,"text-center"],["mat-cell","",1,"table__cell","text-center"],["mat-header-cell","",1,"text-center"],["mat-cell","","title","Visualizar materiais",1,"text-center","td-actions"],["type","button","rel","tooltip",1,"btn","btn-info",3,"click"],[1,"material-icons"],["mat-cell",""],[1,"row","table__cell--details"],[1,"table-responsive","table-full-width"],[4,"ngFor","ngForOf"],["mat-header-row","",1,"table__row","table__row--head"],["mat-row","",1,"table__row"],["mat-row","",1,"table__row--details"]],template:function(t,e){1&t&&(b.Sb(0,"div",0),b.Sb(1,"div",1),b.Sb(2,"button",2),b.Sb(3,"p"),b.zc(4,"+"),b.Rb(),b.Rb(),b.Rb(),b.Sb(5,"div",3),b.Sb(6,"div",4),b.Sb(7,"div",5),b.Sb(8,"div",6),b.Sb(9,"h4",7),b.zc(10,"Solicita\xe7\xf5es de Compra"),b.Rb(),b.Rb(),b.Sb(11,"div",8),b.Sb(12,"div",9),b.Sb(13,"mat-table",10),b.Qb(14,11),b.yc(15,s,2,0,"th",12),b.yc(16,m,2,1,"td",13),b.Pb(),b.Qb(17,14),b.yc(18,f,2,0,"th",12),b.yc(19,u,2,1,"td",13),b.Pb(),b.Qb(20,15),b.yc(21,_,2,0,"th",12),b.yc(22,h,2,1,"td",16),b.Pb(),b.Qb(23,17),b.yc(24,p,2,0,"th",12),b.yc(25,w,3,3,"td",13),b.Pb(),b.Qb(26,18),b.yc(27,g,2,0,"th",12),b.yc(28,R,3,3,"td",13),b.Pb(),b.Qb(29,19),b.yc(30,C,2,0,"th",20),b.yc(31,S,2,1,"td",21),b.Pb(),b.Qb(32,22),b.yc(33,y,2,0,"th",20),b.yc(34,D,2,1,"td",21),b.Pb(),b.Qb(35,23),b.yc(36,v,2,0,"th",24),b.yc(37,x,4,0,"td",25),b.Pb(),b.Qb(38,26),b.yc(39,P,12,3,"td",27),b.Pb(),b.yc(40,z,1,0,"tr",28),b.yc(41,M,1,2,"tr",29),b.yc(42,B,1,0,"tr",30),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Bb(13),b.ic("dataSource",e.requestsList),b.Bb(27),b.ic("matHeaderRowDef",e.columnsToDisplay)("matHeaderRowDefSticky",!0),b.Bb(1),b.ic("matRowDefColumns",e.columnsToDisplay),b.Bb(1),b.ic("matRowDefColumns",b.kc(5,k)))},directives:[r.j,d.a,r.c,r.e,r.b,r.g,r.i,r.d,d.b,r.a,n.k,r.f,r.h],pipes:[n.e],styles:['.dashboard[_ngcontent-%COMP%]{padding-top:0}.dashboard__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;margin-bottom:1rem}.dashboard__button[_ngcontent-%COMP%]{width:50px;height:50px;color:#fff;font-weight:700;font-size:1.6rem;background-color:#6dd3d6;border:none;border-radius:50%}.dashboard[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-weight:500;font-size:1rem}.dashboard[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-weight:700;font-size:1rem}.card-body[_ngcontent-%COMP%]{padding:1rem 0}@media screen and (min-width:992px){.card-body[_ngcontent-%COMP%]{padding:.9375rem 20px}}.table[_ngcontent-%COMP%]{width:100%;min-height:50vh;margin-bottom:0;overflow:auto}.table__row[_ngcontent-%COMP%]{position:relative}.table__row[_ngcontent-%COMP%]:after{position:absolute;bottom:0;left:0;width:100%;height:1px;background-color:#acacac;content:""}.table__row--details[_ngcontent-%COMP%]{height:0;border:none}.table__row.table__row--head[_ngcontent-%COMP%]{min-height:auto;padding:1rem 0}.table__row.table__row--head[_ngcontent-%COMP%]:hover{background-color:transparent}.table__row[_ngcontent-%COMP%]:not(.table__row--expanded):hover{background-color:#efefef}.table__row[_ngcontent-%COMP%]:not(.table__row--expanded):active{background-color:#acacac}.table__row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:0}.table__row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none}@media only screen and (min-width:992px){.table__row[_ngcontent-%COMP%]{display:grid;grid-template-columns:50px 100px minmax(100px,1fr) repeat(5,80px);gap:1rem;align-items:center;min-height:80px}}.table__cell--overflow[_ngcontent-%COMP%]{overflow:auto}.table__cell--details[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:8px}.table__cell--details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#e1e1e1}'],data:{animation:[Object(i.n)("detailExpand",[Object(i.k)("collapsed",Object(i.l)({height:"0px",minHeight:"0"})),Object(i.k)("expanded",Object(i.l)({height:"*",minHeight:"*"})),Object(i.m)("expanded <=> collapsed",Object(i.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),t}(),q=[{path:"",component:a("1ua0").a,children:[{path:"",component:j}]}],$=function(){function t(){}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(q)],o.f]}),t}(),H=a("PCNd"),Q=a("oZWX"),E=function(){function t(){}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},providers:[Q.a],imports:[[n.c,c.a,$,o.f,H.a]]}),t}()}}]);