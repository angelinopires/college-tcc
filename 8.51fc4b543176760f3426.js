(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{YloX:function(t,e,n){"use strict";n.r(e),n.d(e,"MaterialsModule",(function(){return D}));var a=n("ofXK"),o=n("tyNb"),c=n("X7KA"),i=n("+0xr"),r=n("Dh3D"),l=n("fXoL"),m=n("kmnG"),b=n("qFsG"),d=n("NFeN");function s(t,e){1&t&&(l.Sb(0,"mat-header-cell",24),l.zc(1,"#"),l.Rb())}function u(t,e){if(1&t&&(l.Sb(0,"mat-cell",25),l.zc(1),l.Rb()),2&t){var n=e.$implicit;l.Bb(1),l.Bc(" ",n.id," ")}}function f(t,e){1&t&&(l.Sb(0,"mat-header-cell",24),l.zc(1," Descri\xe7\xe3o "),l.Rb())}function p(t,e){if(1&t&&(l.Sb(0,"mat-cell",26),l.zc(1),l.Rb()),2&t){var n=e.$implicit;l.Bb(1),l.Bc(" ",n.description," ")}}function g(t,e){1&t&&(l.Sb(0,"mat-header-cell",24),l.zc(1," Unidade "),l.Rb())}function h(t,e){if(1&t&&(l.Sb(0,"mat-cell",27),l.zc(1),l.Rb()),2&t){var n=e.$implicit;l.Bb(1),l.Bc(" ",n.unity," ")}}function C(t,e){1&t&&(l.Sb(0,"mat-header-cell",24),l.zc(1," Grupo "),l.Rb())}function y(t,e){if(1&t&&(l.Sb(0,"mat-cell",28),l.zc(1),l.Rb()),2&t){var n=e.$implicit;l.Bb(1),l.Bc(" ",n.group.description," ")}}function S(t,e){1&t&&l.Nb(0,"mat-header-row")}function P(t,e){1&t&&l.Nb(0,"mat-row")}var M=function(){function t(t){this._materialService=t,this.dataSource=new i.k,this.columnsToDisplay=["id","description","unity","group"]}return t.prototype.ngOnInit=function(){this.dataSource.data=this._materialService.getMaterials()},t.prototype.ngAfterViewInit=function(){this.dataSource.sort=this.sort},t.prototype.applyFilter=function(t){this.dataSource.filter=t.trim().toLocaleLowerCase()},t.\u0275fac=function(e){return new(e||t)(l.Mb(c.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["app-dashboard"]],viewQuery:function(t,e){var n;1&t&&l.Cc(r.a,!0),2&t&&l.nc(n=l.ac())&&(e.sort=n.first)},decls:33,vars:3,consts:[[1,"main-content"],[1,"row"],[1,"col-12","col-md-3"],["appearance","outline"],["matInput","","placeholder","Nome ou descri\xe7\xe3o",3,"keyup"],["matSuffix",""],[1,"col-12"],[1,"card"],[1,"card-header","card-header-info"],[1,"card-title"],[1,"card-body"],[1,"table","table-responsive","mat-elevation-z8"],["matSort","","matSortActive","id","matSortDirection","asc","matSortDisableClear","",3,"dataSource"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["data-label","#",4,"matCellDef"],["matColumnDef","description"],["data-label","Descri\xe7\xe3o",4,"matCellDef"],["matColumnDef","unity"],["data-label","Unidade",4,"matCellDef"],["matColumnDef","group"],["data-label","Grupo",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["mat-sort-header",""],["data-label","#"],["data-label","Descri\xe7\xe3o"],["data-label","Unidade"],["data-label","Grupo"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"div",2),l.Sb(3,"mat-form-field",3),l.Sb(4,"mat-label"),l.zc(5,"Pesquisar"),l.Rb(),l.Sb(6,"input",4),l.Zb("keyup",(function(t){return e.applyFilter(t.target.value)})),l.Rb(),l.Sb(7,"mat-icon",5),l.zc(8,"search"),l.Rb(),l.Sb(9,"mat-hint"),l.zc(10,"Exemplo: Lingote de A\xe7o"),l.Rb(),l.Rb(),l.Rb(),l.Sb(11,"div",6),l.Sb(12,"div",7),l.Sb(13,"div",8),l.Sb(14,"h4",9),l.zc(15,"Materiais"),l.Rb(),l.Rb(),l.Sb(16,"div",10),l.Sb(17,"div",11),l.Sb(18,"mat-table",12),l.Qb(19,13),l.yc(20,s,2,0,"mat-header-cell",14),l.yc(21,u,2,1,"mat-cell",15),l.Pb(),l.Qb(22,16),l.yc(23,f,2,0,"mat-header-cell",14),l.yc(24,p,2,1,"mat-cell",17),l.Pb(),l.Qb(25,18),l.yc(26,g,2,0,"mat-header-cell",14),l.yc(27,h,2,1,"mat-cell",19),l.Pb(),l.Qb(28,20),l.yc(29,C,2,0,"mat-header-cell",14),l.yc(30,y,2,1,"mat-cell",21),l.Pb(),l.yc(31,S,1,0,"mat-header-row",22),l.yc(32,P,1,0,"mat-row",23),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&t&&(l.Bb(18),l.ic("dataSource",e.dataSource),l.Bb(13),l.ic("matHeaderRowDef",e.columnsToDisplay),l.Bb(1),l.ic("matRowDefColumns",e.columnsToDisplay))},directives:[m.b,m.f,b.b,d.a,m.g,m.e,i.j,r.a,i.c,i.e,i.b,i.g,i.i,i.d,r.b,i.a,i.f,i.h],styles:[".main-content[_ngcontent-%COMP%]   .td-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child){margin-right:.5rem}@media screen and (max-width:992px){.main-content[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{vertical-align:middle;border:0}.main-content[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1em}.main-content[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]{display:none}.main-content[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{display:block;border-bottom:5px solid #ddd}.main-content[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:30px;margin-bottom:4%;padding:0 1rem;overflow-y:auto;font-size:1em;text-align:right;border-bottom:1px solid #ddd}.main-content[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:before{float:left;margin-right:1rem;font-weight:700;font-size:.85em;text-transform:uppercase;content:attr(data-label)}.main-content[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:first-child{margin-top:4%}.main-content[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:last-child{margin-bottom:0;border-bottom:0}}"]}),t}(),w=[{path:"",component:n("1ua0").a,children:[{path:"",component:M}]}],R=function(){function t(){}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(w)],o.f]}),t}(),_=n("agfR"),v=n("PCNd"),O=n("oZWX"),D=function(){function t(){}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},providers:[O.a,c.a],imports:[[a.c,R,o.f,v.a,_.a]]}),t}()}}]);