"use strict";(self.webpackChunkbillingFront=self.webpackChunkbillingFront||[]).push([[307],{3686:(K,f,o)=>{o.d(f,{H:()=>r});var t=o(8966),i=o(6642),h=o(5e3),n=o(3075),v=o(5620);let r=(()=>{class s{constructor(p,u,P,m,g){var R,C,T;this.formBuilder=p,this.dialogRef=u,this.store=P,this.actions=m,this.data=g,this._saveInProgress=!1,this.inProgressSubscription=null,this.successCompleteSubscription=null,this.failCompleteSubscription=null,(null===(R=this.data)||void 0===R?void 0:R.inProgressAction)&&(this.inProgressSubscription=this.actions.pipe((0,i.l4)(this.data.inProgressAction)).subscribe(()=>this._saveInProgress=!0)),(null===(C=this.data)||void 0===C?void 0:C.successCompleteAction)&&(this.successCompleteSubscription=this.actions.pipe((0,i.l4)(this.data.successCompleteAction)).subscribe(()=>{this._saveInProgress=!1,this.dialogRef.close()})),(null===(T=this.data)||void 0===T?void 0:T.failCompleteAction)&&(this.failCompleteSubscription=this.actions.pipe((0,i.l4)(this.data.failCompleteAction)).subscribe(E=>{this._saveInProgress=!1,console.log(E)}))}get saveInProgress(){return this._saveInProgress}get valuePresent(){var p;return(null===(p=this.data)||void 0===p?void 0:p.value)||""}ngOnDestroy(){this.inProgressSubscription&&this.inProgressSubscription.unsubscribe(),this.successCompleteSubscription&&this.successCompleteSubscription.unsubscribe(),this.failCompleteSubscription&&this.failCompleteSubscription.unsubscribe()}complete(){this.data&&this.data.beforeCloseAction?this.data.beforeCloseAction(this.value):this.dialogRef.close()}close(){this.dialogRef.close()}}return s.\u0275fac=function(p){return new(p||s)(h.LFG(n.qu),h.LFG(t.so),h.LFG(v.yh),h.LFG(i.eX),h.LFG(t.WI))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac}),s})()},6184:(K,f,o)=>{o.d(f,{S:()=>R});var t=o(3075),i=o(8966),h=o(3686),n=o(5e3),v=o(5620),r=o(6642),s=o(7322),y=o(7531),p=o(7423),u=o(9808),P=o(5245),m=o(773);function g(C,T){1&C&&(n.TgZ(0,"mat-icon"),n._UZ(1,"mat-spinner",5),n.qZA())}let R=(()=>{class C extends h.H{constructor(E,I,a,M,d){super(E,I,a,M,d),this.formBuilder=E,this.dialogRef=I,this.store=a,this.actions=M,this.data=d,this.formGroup=this.formBuilder.group({editableValue:["",t.kI.required]})}get value(){var E;return(null===(E=this.formGroup.get("editableValue"))||void 0===E?void 0:E.value)||0}}return C.\u0275fac=function(E){return new(E||C)(n.Y36(t.qu),n.Y36(i.so),n.Y36(v.yh),n.Y36(r.eX),n.Y36(i.WI))},C.\u0275cmp=n.Xpm({type:C,selectors:[["app-simple-number-change"]],features:[n.qOj],decls:12,vars:4,consts:[[3,"formGroup"],["matInput","","formControlName","editableValue","type","number"],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"click"],[4,"ngIf"],["color","primary","diameter","20"]],template:function(E,I){1&E&&(n.TgZ(0,"mat-dialog-content"),n.TgZ(1,"form",0),n.TgZ(2,"h4"),n._uU(3),n.qZA(),n.TgZ(4,"mat-form-field",0),n._UZ(5,"input",1),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"mat-dialog-actions"),n.TgZ(7,"button",2),n.NdJ("click",function(){return I.close()}),n._uU(8,"\u041e\u0442\u043c\u0435\u043d\u0430"),n.qZA(),n.TgZ(9,"button",3),n.NdJ("click",function(){return I.complete()}),n._uU(10,"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c "),n.YNc(11,g,2,0,"mat-icon",4),n.qZA(),n.qZA()),2&E&&(n.xp6(1),n.Q6J("formGroup",I.formGroup),n.xp6(2),n.hij("\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 : ",I.valuePresent,""),n.xp6(1),n.Q6J("formGroup",I.formGroup),n.xp6(7),n.Q6J("ngIf",I.saveInProgress))},directives:[i.xY,t._Y,t.JL,t.sg,s.KE,y.Nt,t.Fj,t.wV,t.JJ,t.u,i.H8,p.lW,u.O5,P.Hw,m.$g],styles:[""]}),C})()},7641:(K,f,o)=>{o.d(f,{D:()=>I});var t=o(5e3);const i={address:"\u0410\u0434\u0440\u0435\u0441",type:"\u0422\u0438\u043f \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f",countSubscribed:"\u041f\u0440\u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445",countResident:"\u041f\u0440\u043e\u0436\u0438\u0432\u0430\u044e\u0449\u0438\u0445",countOwner:"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u0432",commonSquare:"\u041e\u0431\u0449\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u044c",debt:"\u0417\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c"},h={address:a=>a.address,type:()=>"\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",countSubscribed:a=>a.countSubscribed.toString(),countResident:a=>a.countResident.toString(),countOwner:a=>a.countOwner.toString(),commonSquare:()=>"100",debt:()=>"200"};var n=o(9804),v=o(5139),r=o(1043),s=o(9224),y=o(9808),p=o(7423),u=o(2181),P=o(5245),m=o(9291);function g(a,M){if(1&a){const d=t.EpF();t.ynx(0),t.TgZ(1,"button",9),t.NdJ("click",function(){const x=t.CHM(d).index,b=t.oxw(2).$implicit;return t.oxw().onActionClick(b,x)}),t.TgZ(2,"mat-icon"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.qZA(),t.BQk()}if(2&a){const d=M.index,_=t.oxw(2).$implicit,L=t.oxw();t.xp6(3),t.Oqu(L.getActionIconName(_,d)),t.xp6(2),t.Oqu(L.getActionName(_,d))}}function R(a,M){if(1&a&&(t.TgZ(0,"td",6),t.TgZ(1,"button",7),t.TgZ(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA(),t.qZA(),t.TgZ(4,"mat-menu",null,8),t.YNc(6,g,6,2,"ng-container",2),t.qZA(),t.qZA()),2&a){const d=t.MAs(5),_=t.oxw().$implicit,L=t.oxw();t.xp6(1),t.Q6J("matMenuTriggerFor",d),t.xp6(5),t.Q6J("ngForOf",L.getPropertyAction(_))}}function C(a,M){if(1&a&&(t.TgZ(0,"tr"),t.TgZ(1,"td",4),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.YNc(5,R,7,2,"td",5),t.qZA()),2&a){const d=M.$implicit,_=t.oxw();t.xp6(2),t.Oqu(_.getPropertyPresent(d)),t.xp6(2),t.Oqu(_.getValuePresent(d)),t.xp6(1),t.Q6J("ngIf",_.getPropertyAction(d).length>0)}}const T=function(a){return[a]};function E(a,M){if(1&a&&(t.TgZ(0,"mat-card-actions"),t.TgZ(1,"button",10),t._uU(2,"\u0414\u0430\u043b\u0435\u0435"),t.qZA(),t.qZA()),2&a){const d=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(1,T,d.item.id))}}let I=(()=>{class a{constructor(d,_,L){this.countResidentChangeAction=d,this.countSubscribedChangeAction=_,this.countOwnerChangeAction=L,this.chooseMode=!1,this.onChoose=new t.vpe}get keys(){let d=[];for(let _ in i)d.push(_);return d}get propertyChangeActions(){return{address:[],type:[],countSubscribed:[{name:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",iconName:"edit",action:this.countSubscribedChangeAction}],countResident:[{name:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",iconName:"edit",action:this.countResidentChangeAction}],countOwner:[{name:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",iconName:"edit",action:this.countOwnerChangeAction}],commonSquare:[],debt:[]}}getValuePresent(d){return h[d](this.item)}getPropertyPresent(d){return i[d]}getPropertyAction(d){return this.propertyChangeActions[d].map(_=>_.name)}getActionIconName(d,_){return this.propertyChangeActions[d][_].iconName}getActionName(d,_){return this.propertyChangeActions[d][_].name}onActionClick(d,_){this.propertyChangeActions[d][_].action.apply(this.item)}choose(){this.onChoose.emit(this.item)}}return a.\u0275fac=function(d){return new(d||a)(t.Y36(n.b),t.Y36(v.q),t.Y36(r.L))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-key-room-item"]],inputs:{item:"item",chooseMode:"chooseMode"},outputs:{onChoose:"onChoose"},decls:7,vars:3,consts:[[1,"key-room-card"],[1,"app-table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"key-room-property-column"],["class","app-action-column",4,"ngIf"],[1,"app-action-column"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menuType","matMenu"],["mat-menu-item","",3,"click"],["mat-button","",3,"routerLink"]],template:function(d,_){1&d&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"mat-card-title"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-content"),t.TgZ(4,"table",1),t.YNc(5,C,6,3,"tr",2),t.qZA(),t.qZA(),t.YNc(6,E,3,3,"mat-card-actions",3),t.qZA()),2&d&&(t.xp6(2),t.Oqu(_.item.id),t.xp6(3),t.Q6J("ngForOf",_.keys),t.xp6(1),t.Q6J("ngIf",_.chooseMode))},directives:[s.a8,s.n5,s.dn,y.sg,y.O5,p.lW,u.p6,P.Hw,u.VK,u.OP,s.hq,m.rH],styles:[".key-room-card[_ngcontent-%COMP%]{margin-top:10px;max-width:350px}.key-room-property-column[_ngcontent-%COMP%]{max-width:125px;min-width:125px}"]}),a})()},6697:(K,f,o)=>{o.d(f,{I:()=>y});var t=o(9808),i=o(9224),h=o(2181),n=o(5245),v=o(7423),r=o(9291),s=o(5e3);let y=(()=>{class p{}return p.\u0275fac=function(P){return new(P||p)},p.\u0275mod=s.oAB({type:p}),p.\u0275inj=s.cJS({imports:[[t.ez,r.Bz,i.QW,h.Tx,n.Ps,v.ot]]}),p})()},307:(K,f,o)=>{o.r(f),o.d(f,{KeyRoomModule:()=>nt});var t=o(9808),i=o(2155),h=o(9291),n=o(3647),v=o(4827),r=o(5e3),s=o(5620),y=o(7093),p=o(773),u=o(7423),P=o(7641);function m(e,c){1&e&&(r.TgZ(0,"div",2),r._UZ(1,"mat-spinner"),r.qZA())}function g(e,c){if(1&e){const l=r.EpF();r.TgZ(0,"app-key-room-item",8),r.NdJ("onChoose",function(D){return r.CHM(l),r.oxw(2).serCurrent(D)}),r.qZA()}2&e&&r.Q6J("item",c.$implicit)("chooseMode",!0)}function R(e,c){if(1&e&&(r.TgZ(0,"div",3),r.TgZ(1,"div",4),r.TgZ(2,"button",5),r._uU(3,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.qZA(),r.qZA(),r.TgZ(4,"div",6),r.YNc(5,g,1,2,"app-key-room-item",7),r.ALo(6,"async"),r.qZA(),r.qZA()),2&e){const l=r.oxw();r.xp6(5),r.Q6J("ngForOf",r.lcZ(6,1,l.items))}}const T=[{path:"",component:(()=>{class e{constructor(l,O){this.store=l,this.router=O,this._itemsIsLoaded=!1,this.items=this.store.select(v.gq),this.store.dispatch(n.P$()),this._itemsIsLoadedSubscription=this.items.pipe().subscribe(D=>this._itemsIsLoaded=null!=D)}get itemsIsLoaded(){return this._itemsIsLoaded}ngOnDestroy(){this._itemsIsLoadedSubscription.unsubscribe()}serCurrent(l){this.router.navigate([".",l.id])}}return e.\u0275fac=function(l){return new(l||e)(r.Y36(s.yh),r.Y36(h.F0))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-key-room"]],decls:2,vars:2,consts:[["fxLayout","column","fxFill","","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","column","class","card-container",4,"ngIf"],["fxLayout","column","fxFill","","fxLayoutAlign","center center"],["fxLayout","column",1,"card-container"],["fxLayout","row wrap",1,"button-row"],["mat-button","","color","primary","routerLink","new"],["fxLayout","row wrap","fxLayoutGap","10px","fxLayoutAlign","start start"],[3,"item","chooseMode","onChoose",4,"ngFor","ngForOf"],[3,"item","chooseMode","onChoose"]],template:function(l,O){1&l&&(r.YNc(0,m,2,0,"div",0),r.YNc(1,R,7,3,"div",1)),2&l&&(r.Q6J("ngIf",0==O.itemsIsLoaded),r.xp6(1),r.Q6J("ngIf",O.itemsIsLoaded))},directives:[t.O5,y.xw,y.s9,y.Wh,p.$g,u.lW,h.rH,y.SQ,t.sg,P.D],pipes:[t.Ov],styles:["[_nghost-%COMP%]{width:100%}.card-container[_ngcontent-%COMP%]{padding-left:10px}.button-row[_ngcontent-%COMP%]{width:100%}app-key-room-item[_ngcontent-%COMP%]{margin-top:10px}app-key-room-item[_ngcontent-%COMP%]:hover{background-color:#3f51b5;cursor:pointer}"]}),e})()},{path:"new",loadChildren:()=>Promise.all([o.e(999),o.e(356),o.e(592),o.e(525)]).then(o.bind(o,1525)).then(e=>e.KeyRoomAddModule)},{path:":id",loadChildren:()=>o.e(81).then(o.bind(o,5081)).then(e=>e.KeyRoomCurrentModule)}];let E=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[h.Bz.forChild(T)],h.Bz]}),e})();var I=o(6697),a=o(6642);const M={items:void 0,currentId:void 0};var d=o(6594);const _=(0,s.Lq)(M,(0,s.on)(n.X4,(e,c)=>e.currentId==c.currentId?e:Object.assign(Object.assign({},e),{currentId:c.currentId})),(0,s.on)(n.cK,(e,c)=>Object.assign(Object.assign({},e),{items:c.items})),(0,s.on)(n.tJ,(e,c)=>{if(!e.items)return Object.assign({},e);const l=[...e.items.values(),c];return Object.assign(Object.assign({},e),{items:new Map(l.map(O=>[O.id,O]))})}),(0,s.on)(n.Vn,(e,c)=>e.items?Object.assign(Object.assign({},e),{items:L(e.items,c)}):Object.assign({},e)),(0,s.on)(d.II,()=>M)),L=(e,c)=>(e.set(c.id,c),e);var x=o(5577),b=o(3900),B=o(4004),Y=o(262),F=o(9646),W=(()=>((W||(W={})).empty="[Common] empty",W))();const G=(0,s.PH)(W.empty);var V=o(520),J=o(4766),H=o(4086),U=o(2335);class j{constructor(){this.apiDomen=""}search(){return(0,F.of)([{id:"\u041f\u0435\u0440\u0432\u043e\u0435",address:"414000, \u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430, \u0434. 985, \u043a\u0432. 999",countResident:4,countSubscribed:4,countOwner:2,square:40,roomType:U.k[1]},{id:"\u0412\u0442\u043e\u0440\u043e\u0435",address:"414000, \u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430, \u0434. 985, \u043a\u0432. 999",countResident:4,countSubscribed:4,countOwner:4,square:50,roomType:U.k[1]},{id:"\u0422\u0440\u0435\u0442\u044c\u0435",address:"414000, \u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430, \u0434. 985, \u043a\u0432. 999",countResident:4,countSubscribed:4,countOwner:2,square:60,roomType:U.k[1]},{id:"\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u043e\u0435",address:"414000, \u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430, \u0434. 985, \u043a\u0432. 999",countResident:2,countSubscribed:2,countOwner:2,square:70,roomType:U.k[1]}]).pipe((0,H.g)(1500))}save(c){return(0,F.of)({id:c.id,address:c.address,countResident:c.countResident,countSubscribed:c.countSubscribed,countOwner:c.countOwner,square:c.square,roomType:U.k[c.roomTypeId]}).pipe((0,H.g)(1500))}}class z{constructor(c){this.http=c,this.endpoint=J.N.apiUrl,this.apiDomen="key-room"}search(){return this.http.get(`${this.endpoint}/${this.apiDomen}`)}save(c){return this.http.post(`${this.endpoint}/${this.apiDomen}`,JSON.stringify(c))}}let $=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275prov=r.Yz7({token:e,factory:function(l){let O=null;return O=l?new l:(e=>J.N.useServer?new z(e):new j)(r.LFG(V.eN)),O},providedIn:"root"}),e})(),X=(()=>{class e{constructor(l,O,D){this.actions=l,this.httpService=O,this.keyRoomStore=D,this.loadEffect=(0,a.GW)(()=>this.actions.pipe((0,a.l4)(n.P$),(0,x.z)(()=>this.keyRoomStore.select(v.gq)),(0,b.w)(A=>null==A?this.httpService.search().pipe((0,B.U)(Z=>n.cK({items:new Map(Z.map(S=>[S.id,S]))})),(0,Y.K)(()=>{throw new Error("could not get services from http")})):(0,F.of)(G)))),this.saveEffect=(0,a.GW)(()=>this.actions.pipe((0,a.l4)(n.$J),(0,x.z)(A=>this.httpService.save(A)),(0,b.w)(A=>[n.tJ(A),n.X4({currentId:A.id})]),(0,Y.K)(()=>{throw new Error("could not post from http")}))),this.updateItemEffect=(0,a.GW)(()=>this.actions.pipe((0,a.l4)(n.fC),(0,b.w)(A=>this.httpService.save(A)),(0,B.U)(A=>n.Vn(A))))}}return e.\u0275fac=function(l){return new(l||e)(r.LFG(a.eX),r.LFG($),r.LFG(s.yh))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})();var w=o(9804),k=o(5139),q=o(1043),tt=o(8675),ot=o(2182);let et=(()=>{class e{constructor(l,O){this.actions=l,this.appStore=O,this.loadKeyRoom=(0,a.GW)(()=>this.actions.pipe((0,a.l4)(ot.tr),(0,tt.O)("key-room/:id/**"),(0,x.z)(()=>this.appStore.select(D=>{var A,Z,S,N;return null===(N=null===(S=null===(Z=null===(A=D.router)||void 0===A?void 0:A.state)||void 0===Z?void 0:Z.root.firstChild)||void 0===S?void 0:S.firstChild)||void 0===N?void 0:N.params})),(0,x.z)(D=>null!=D&&null!=D.id?[n.P$(),n.X4({currentId:D.id})]:(0,F.of)(G()))))}}return e.\u0275fac=function(l){return new(l||e)(r.LFG(a.eX),r.LFG(s.yh))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})(),nt=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[{provide:w.b},{provide:k.q},{provide:q.L}],imports:[[t.ez,I.I,E,i.o9,u.ot,p.Cq,s.Aw.forFeature("key-room-list",_),a.sQ.forFeature([X,et])]]}),e})()},1043:(K,f,o)=>{o.d(f,{L:()=>p});var t=o(3647),i=o(5698),h=o(6184),n=o(9135),v=o(4827),r=o(5e3),s=o(8966),y=o(5620);let p=(()=>{class u{constructor(m,g){this.dialog=m,this.store=g}apply(m){this.dialog.open(h.S,{data:{value:m.countOwner,beforeCloseAction:this.changeValue(m.id),inProgressAction:t.fC,successCompleteAction:t.Vn},disableClose:!0})}changeValue(m){return g=>this.applyChanges(m,g)}applyChanges(m,g){this.store.select((0,v.Yn)(m)).pipe((0,i.q)(1)).subscribe(R=>{const C=(0,n.b)(R);C.countOwner=Number.parseInt(g),this.store.dispatch(t.fC(C))})}}return u.\u0275fac=function(m){return new(m||u)(r.LFG(s.uw),r.LFG(y.yh))},u.\u0275prov=r.Yz7({token:u,factory:u.\u0275fac}),u})()},9804:(K,f,o)=>{o.d(f,{b:()=>p});var t=o(3647),i=o(5698),h=o(6184),n=o(9135),v=o(4827),r=o(5e3),s=o(8966),y=o(5620);let p=(()=>{class u{constructor(m,g){this.dialog=m,this.store=g}apply(m){this.dialog.open(h.S,{data:{value:m.countResident,beforeCloseAction:this.changeValue(m.id),inProgressAction:t.fC,successCompleteAction:t.Vn},disableClose:!0})}changeValue(m){return g=>this.applyChanges(m,g)}applyChanges(m,g){this.store.select((0,v.Yn)(m)).pipe((0,i.q)(1)).subscribe(R=>{const C=(0,n.b)(R);C.countResident=Number.parseInt(g),this.store.dispatch(t.fC(C))})}}return u.\u0275fac=function(m){return new(m||u)(r.LFG(s.uw),r.LFG(y.yh))},u.\u0275prov=r.Yz7({token:u,factory:u.\u0275fac}),u})()},5139:(K,f,o)=>{o.d(f,{q:()=>p});var t=o(3647),i=o(5698),h=o(6184),n=o(9135),v=o(4827),r=o(5e3),s=o(8966),y=o(5620);let p=(()=>{class u{constructor(m,g){this.dialog=m,this.store=g}apply(m){this.dialog.open(h.S,{data:{value:m.countResident,beforeCloseAction:this.changeValue(m.id),inProgressAction:t.fC,successCompleteAction:t.Vn},disableClose:!0})}changeValue(m){return g=>this.applyChanges(m,g)}applyChanges(m,g){this.store.select((0,v.Yn)(m)).pipe((0,i.q)(1)).subscribe(R=>{const C=(0,n.b)(R);C.countSubscribed=Number.parseInt(g),this.store.dispatch(t.fC(C))})}}return u.\u0275fac=function(m){return new(m||u)(r.LFG(s.uw),r.LFG(y.yh))},u.\u0275prov=r.Yz7({token:u,factory:u.\u0275fac}),u})()},9135:(K,f,o)=>{o.d(f,{b:()=>t});const t=i=>({id:i.id,address:i.address,countResident:i.countResident,countSubscribed:i.countSubscribed,countOwner:i.countOwner,square:i.square,roomTypeId:i.roomType.id})},3647:(K,f,o)=>{o.d(f,{P$:()=>h,cK:()=>n,X4:()=>v,$J:()=>r,tJ:()=>s,fC:()=>y,Vn:()=>p});var t=o(5620),i=(()=>{return(u=i||(i={})).startLoadItemsFromApi="[KeyRoom] start load items from api",u.successfulLoadItemsFromApi="[KeyRoom] successful load items from api",u.finishChooseCurrent="[KeyRoom] finish choose current",u.AddKeyRoomStart="[KeyRoom] add new start",u.AddKeyRoomSuccess="[KeyRoom] add new success",u.startUpdateItem="[KeyRoom] start update item",u.completeUpdateItem="[KeyRoom] complete update item",i;var u})();const h=(0,t.PH)(i.startLoadItemsFromApi),n=(0,t.PH)(i.successfulLoadItemsFromApi,(0,t.Ky)()),v=(0,t.PH)(i.finishChooseCurrent,(0,t.Ky)()),r=(0,t.PH)(i.AddKeyRoomStart,(0,t.Ky)()),s=(0,t.PH)(i.AddKeyRoomSuccess,(0,t.Ky)()),y=(0,t.PH)(i.startUpdateItem,(0,t.Ky)()),p=(0,t.PH)(i.completeUpdateItem,(0,t.Ky)())},2335:(K,f,o)=>{o.d(f,{k:()=>t});const t={1:{id:1,present:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430"},2:{id:1,present:"\u0427\u0430\u0441\u0442\u043d\u044b\u0439 \u0434\u043e\u043c"}}},4827:(K,f,o)=>{o.d(f,{MY:()=>h,Fq:()=>n,Yn:()=>v,gq:()=>r});var t=o(5620);const i=(0,t.ZF)("key-room-list"),h=(0,t.P1)(i,s=>{if(s.items&&s.currentId&&s.items.size&&0!=s.items.size&&s.items.has(s.currentId))return s.items.get(s.currentId)}),n=(0,t.P1)(i,s=>s.currentId),v=s=>(0,t.P1)(i,y=>{if(!y.items)throw Error("asdasd");return y.items.get(s)}),r=(0,t.P1)(i,s=>{if(s.items&&s.items.size&&0!=s.items.size)return[...s.items.values()]})}}]);