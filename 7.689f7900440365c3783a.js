(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{bzNi:function(t,e,i){"use strict";i.r(e),i.d(e,"ItemModule",(function(){return L}));var n=i("3Pt+"),s=i("ofXK"),c=i("tyNb"),r=i("fXoL");let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["ng-component"]],decls:1,vars:0,template:function(t,e){1&t&&r.Jb(0,"router-outlet")},directives:[c.g],encapsulation:2}),t})();var a=i("J9tS"),b=i("/xYi");function l(t,e){1&t&&(r.Lb(0,"span"),r.jc(1,"..."),r.Kb())}let u=(()=>{class t{constructor(t,e,i,n,s){this.accountService=t,this.client=e,this.activatedRoute=i,this.alertService=n,this.router=s,this.account=this.accountService.accountValue,this.itemid=this.activatedRoute.snapshot.params.itemid,this.deleting=!1,this.data=[],this.tags=[]}getData(){this.client.getItem(this.itemid,void 0,"application/json").subscribe(t=>{this.data=t},t=>console.error(t)),this.client.getTagsForItem(this.itemid).subscribe(t=>{t.forEach(t=>{this.tags.push(t.name)})},t=>console.error(t))}onDelete(){confirm("Are you sure to delete this item?")&&(this.deleting=!0,this.client.deleteItem(this.itemid).subscribe(()=>{this.alertService.success("Item deleted successfully",{keepAfterRouteChange:!0}),this.router.navigate(["/"])}))}ngOnInit(){this.getData()}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(a.a),r.Ib(b.b),r.Ib(c.a),r.Ib(a.b),r.Ib(c.c))},t.\u0275cmp=r.Cb({type:t,selectors:[["ng-component"]],decls:16,vars:9,consts:[["type","button",3,"disabled","click"],[4,"ngIf"]],template:function(t,e){1&t&&(r.Lb(0,"section"),r.Lb(1,"header"),r.Lb(2,"h2"),r.jc(3),r.Kb(),r.Lb(4,"p"),r.jc(5),r.Kb(),r.Lb(6,"p"),r.jc(7),r.Vb(8,"date"),r.Kb(),r.Lb(9,"p"),r.jc(10),r.Kb(),r.Kb(),r.Lb(11,"p"),r.jc(12),r.Kb(),r.Lb(13,"button",0),r.Sb("click",(function(){return e.onDelete()})),r.jc(14," Delete"),r.ic(15,l,2,0,"span",1),r.Kb(),r.Kb()),2&t&&(r.xb(3),r.kc(e.data.title),r.xb(2),r.kc(e.data.itemType),r.xb(2),r.kc(r.Wb(8,7,e.data.creationDate)),r.xb(3),r.kc(e.data.description),r.xb(2),r.kc(e.tags.toString()),r.xb(1),r.Zb("disabled",e.deleting),r.xb(2),r.Zb("ngIf",e.deleting))},directives:[s.k],pipes:[s.d],encapsulation:2}),t})();function d(t,e){1&t&&(r.Lb(0,"div"),r.jc(1,"Title is required"),r.Kb())}function h(t,e){if(1&t&&(r.Lb(0,"div"),r.ic(1,d,2,0,"div",2),r.Kb()),2&t){const t=r.Ub();r.xb(1),r.Zb("ngIf",t.f.title.errors.required)}}function m(t,e){if(1&t){const t=r.Mb();r.Lb(0,"div"),r.Lb(1,"input",12),r.Sb("change",(function(i){r.ec(t);const n=e.$implicit;return r.Ub().onChange(n.value,i.target.checked)})),r.Kb(),r.jc(2),r.Kb()}if(2&t){const t=e.$implicit;r.xb(2),r.lc(" ",t.name," ")}}function p(t,e){1&t&&(r.Lb(0,"span"),r.jc(1,"..."),r.Kb())}const f=function(t){return{"is-invalid":t}},g=[{path:"",component:o,children:[{path:"create",component:(()=>{class t{constructor(t,e,i,n,s){this.formBuilder=t,this.router=e,this.accountService=i,this.alertService=n,this.client=s,this.account=this.accountService.accountValue,this.loading=!1,this.submitted=!1,this.tagsData=[{value:"isPlayed",name:"Is Played?"},{value:"isFinished",name:"Is Finished?"}]}onChange(t,e){const i=this.form.controls.tags;if(e)i.push(new n.d(t));else{const e=i.controls.findIndex(e=>e.value===t);i.removeAt(e)}}ngOnInit(){this.form=this.formBuilder.group({title:["",n.n.required],description:[""],itemType:["Game",n.n.required],tags:this.formBuilder.array([])})}get f(){return this.form.controls}onSubmit(){if(this.submitted=!0,this.alertService.clear(),!this.form.invalid){this.loading=!0;var t=new b.c;t.title=this.f.title.value,t.description=this.f.description.value,t.itemType=this.f.itemType.value,t.tags=new Array,this.f.tags.value.forEach(e=>{var i=new b.d;i.name=e,t.tags.push(i)}),this.client.createItem(t).subscribe(t=>{this.alertService.success("New item is created!",{keepAfterRouteChange:!0}),this.router.navigate(["/"])},t=>{this.alertService.error(t),this.loading=!1})}}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(n.c),r.Ib(c.c),r.Ib(a.a),r.Ib(a.b),r.Ib(b.b))},t.\u0275cmp=r.Cb({type:t,selectors:[["ng-component"]],decls:29,vars:14,consts:[[3,"formGroup","ngSubmit"],["type","text","formControlName","title","size","20",3,"ngClass"],[4,"ngIf"],["formControlName","itemType",3,"ngClass"],["value","Game"],["value","Generic"],["value","Movie"],["value","Book"],[4,"ngFor","ngForOf"],["cols","40","rows","5","formControlName","description",3,"ngClass"],["type","submit",3,"disabled"],["routerLink","/","href",""],["type","checkbox",3,"change"]],template:function(t,e){1&t&&(r.Lb(0,"section"),r.Lb(1,"form",0),r.Sb("ngSubmit",(function(){return e.onSubmit()})),r.Lb(2,"header"),r.Lb(3,"h2"),r.jc(4,"Add a new item"),r.Kb(),r.Kb(),r.Lb(5,"label"),r.jc(6,"Title:"),r.Kb(),r.Jb(7,"input",1),r.ic(8,h,2,1,"div",2),r.Lb(9,"label"),r.jc(10,"Item type:"),r.Kb(),r.Lb(11,"select",3),r.Lb(12,"option",4),r.jc(13,"Game"),r.Kb(),r.Lb(14,"option",5),r.jc(15,"Generic"),r.Kb(),r.Lb(16,"option",6),r.jc(17,"Movie"),r.Kb(),r.Lb(18,"option",7),r.jc(19,"Book"),r.Kb(),r.Kb(),r.ic(20,m,3,1,"div",8),r.Lb(21,"label"),r.jc(22,"Description:"),r.Kb(),r.Jb(23,"textarea",9),r.Lb(24,"button",10),r.jc(25," Save"),r.ic(26,p,2,0,"span",2),r.Kb(),r.Lb(27,"a",11),r.jc(28,"Cancel"),r.Kb(),r.Kb(),r.Kb()),2&t&&(r.xb(1),r.Zb("formGroup",e.form),r.xb(6),r.Zb("ngClass",r.cc(8,f,e.submitted&&e.f.title.errors)),r.xb(1),r.Zb("ngIf",e.submitted&&e.f.title.errors),r.xb(3),r.Zb("ngClass",r.cc(10,f,e.submitted&&e.f.itemType.errors)),r.xb(9),r.Zb("ngForOf",e.tagsData),r.xb(3),r.Zb("ngClass",r.cc(12,f,e.submitted&&e.f.description.errors)),r.xb(1),r.Zb("disabled",e.loading),r.xb(2),r.Zb("ngIf",e.loading))},directives:[n.p,n.i,n.f,n.b,n.h,n.e,s.i,s.k,n.m,n.k,n.o,s.j,c.e],encapsulation:2}),t})()},{path:":itemid",component:u}]}];let v=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(e){return new(e||t)},imports:[[c.f.forChild(g)],c.f]}),t})(),L=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(e){return new(e||t)},imports:[[s.b,n.l,v]]}),t})()}}]);