(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{PN7o:function(n,o,t){"use strict";t.r(o),t.d(o,"AuthenticationModule",(function(){return f}));var i=t("ofXK"),r=t("tyNb"),e=t("3Pt+"),a=t("XXEo"),p=t("fXoL"),c=t("Wp6s"),g=t("kmnG"),m=t("qFsG"),l=t("bTqV"),d=[{path:"",component:function(){function n(n,o){this._formBuilder=n,this._loginService=o,this.loginForm=this._formBuilder.group({email:["",e.p.required],password:["",e.p.required]})}return n.prototype.onLoginSubmit=function(){if(this.loginForm.valid&&this.loginForm.dirty){var n=this.loginForm.value;this._loginService.login(n.email,n.password)}},n.\u0275fac=function(o){return new(o||n)(p.Mb(e.d),p.Mb(a.a))},n.\u0275cmp=p.Gb({type:n,selectors:[["app-login"]],decls:16,vars:2,consts:[[1,"login"],[1,"login__card"],[1,"login__formWrapper"],[1,"login__companyName"],["src","/src/assets/img/logo.png","alt","Steel Corporation"],[1,"login__form",3,"formGroup","submit"],[1,"login__input"],["type","email","matInput","","placeholder","Email","required","","formControlName","email"],["type","password","matInput","","placeholder","Senha","required","","formControlName","password","autocomplete","current-password"],["mat-button","","href","#",1,"login__forgotPassword"],["mat-raised-button","","color","primary","type","submit",1,"login__button",3,"disabled"]],template:function(n,o){1&n&&(p.Sb(0,"div",0),p.Sb(1,"mat-card",1),p.Sb(2,"mat-card-content",2),p.Sb(3,"div",3),p.Nb(4,"img",4),p.Sb(5,"h1"),p.zc(6,"Steel Corporation"),p.Rb(),p.Rb(),p.Sb(7,"form",5),p.Zb("submit",(function(){return o.onLoginSubmit()})),p.Sb(8,"mat-form-field",6),p.Nb(9,"input",7),p.Rb(),p.Sb(10,"mat-form-field",6),p.Nb(11,"input",8),p.Rb(),p.Sb(12,"a",9),p.zc(13,"Esqueceu a senha?"),p.Rb(),p.Sb(14,"button",10),p.zc(15,"Entrar"),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Rb()),2&n&&(p.Bb(7),p.ic("formGroup",o.loginForm),p.Bb(7),p.ic("disabled",!o.loginForm.valid))},directives:[c.a,c.b,e.q,e.l,e.f,g.b,m.b,e.c,e.o,e.k,e.e,l.a,l.b],styles:[".login[_ngcontent-%COMP%]{min-width:100%;min-height:100vh}.login[_ngcontent-%COMP%], .login__card[_ngcontent-%COMP%]{display:flex;width:100%}.login__card[_ngcontent-%COMP%]{align-items:center;justify-content:center;background:url(login-bg.7341604eddeafc0dae94.jpg) no-repeat;background-size:cover}.login__companyName[_ngcontent-%COMP%]{text-align:center}.login__companyName[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:128px;height:100%;max-height:128px}.login__companyName[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:2rem;font-weight:400;font-size:2rem;letter-spacing:2px;text-transform:uppercase;word-spacing:5px}.login__form[_ngcontent-%COMP%]{text-align:center}.login__formWrapper[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr 1fr;gap:1rem;width:100%;max-width:400px;padding:1.5rem;background:#fff;box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}@media only screen and (min-width:992px){.login__formWrapper[_ngcontent-%COMP%]{padding:2rem}}.login__button[_ngcontent-%COMP%]{width:100%;margin-top:1rem}.login__error[_ngcontent-%COMP%]{width:300px;padding:16px;color:#fff;background-color:red}"]}),n}()}],s=function(){function n(){}return n.\u0275mod=p.Kb({type:n}),n.\u0275inj=p.Jb({factory:function(o){return new(o||n)},imports:[[r.f.forChild(d)],r.f]}),n}(),b=t("agfR"),u=t("E2f4"),f=function(){function n(){}return n.\u0275mod=p.Kb({type:n}),n.\u0275inj=p.Jb({factory:function(o){return new(o||n)},providers:[a.a,u.a],imports:[[s,i.c,e.g,b.a,e.n,r.f]]}),n}()}}]);