(function(g){var window=this;var N5=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={I:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},S:[{I:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{I:"g",U:{transform:"translate(-1.000000, -3.000000)"},S:[{I:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{I:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.T().ca("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={I:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},S:[{I:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{I:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},S:[{I:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.V.call(this,{I:"button",ha:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},S:[d]});this.J=a;this.va("click",this.onClick,this);this.wa("title",g.RX(a,e,"i"));g.$f(this,g.pY(b.Ib(),this.element))},O5=function(a){g.V.call(this,{I:"div",
L:"ytp-miniplayer-ui"});this.fh=!1;this.player=a;this.R(a,"minimized",this.zi);this.R(a,"onStateChange",this.GQ)},P5=function(a){g.AS.call(this,a);
this.u=new O5(this.player);this.u.hide();g.vP(this.player,this.u.element,4);a.app.visibility.u&&(this.load(),g.I(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(N5,g.V);N5.prototype.onClick=function(){this.J.xa("onExpandMiniplayer")};g.u(O5,g.V);g.k=O5.prototype;
g.k.show=function(){this.Ed=new g.nn(this.Pp,null,this);this.Ed.start();if(!this.fh){this.tooltip=new g.G_(this.player,this);g.C(this,this.tooltip);g.vP(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Kb=new g.jY(this.player);g.C(this,this.Kb);this.Lk=new g.V({I:"div",L:"ytp-miniplayer-scrim"});g.C(this,this.Lk);this.Lk.fa(this.element);this.R(this.Lk.element,"click",this.FE);var a=new g.V({I:"button",ha:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.QN()]});
g.C(this,a);a.fa(this.Lk.element);this.R(a.element,"click",this.An);a=new N5(this.player,this);g.C(this,a);a.fa(this.Lk.element);this.pl=new g.V({I:"div",L:"ytp-miniplayer-controls"});g.C(this,this.pl);this.pl.fa(this.Lk.element);this.R(this.pl.element,"click",this.FE);var b=new g.V({I:"div",L:"ytp-miniplayer-button-container"});g.C(this,b);b.fa(this.pl.element);a=new g.V({I:"div",L:"ytp-miniplayer-play-button-container"});g.C(this,a);a.fa(this.pl.element);var c=new g.V({I:"div",L:"ytp-miniplayer-button-container"});
g.C(this,c);c.fa(this.pl.element);this.dF=new g.HZ(this.player,this,!1);g.C(this,this.dF);this.dF.fa(b.element);b=new g.EZ(this.player,this);g.C(this,b);b.fa(a.element);this.nextButton=new g.HZ(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.fa(c.element);this.Gh=new g.v_(this.player,this);g.C(this,this.Gh);this.Gh.fa(this.Lk.element);this.Oc=new g.LZ(this.player,this);g.C(this,this.Oc);g.vP(this.player,this.Oc.element,4);this.jt=new g.V({I:"div",L:"ytp-miniplayer-buttons"});g.C(this,
this.jt);g.vP(this.player,this.jt.element,4);a=new g.V({I:"button",ha:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.QN()]});g.C(this,a);a.fa(this.jt.element);this.R(a.element,"click",this.An);a=new g.V({I:"button",ha:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},S:[g.XN()]});g.C(this,a);a.fa(this.jt.element);this.R(a.element,"click",this.KO);this.R(this.player,"presentingplayerstatechange",this.Vb);this.R(this.player,"appresize",this.Sa);this.R(this.player,
"fullscreentoggled",this.Sa);this.Sa();this.fh=!0}0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Oc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ed&&(this.Ed.dispose(),this.Ed=void 0);g.V.prototype.hide.call(this);this.player.app.visibility.u||(this.fh&&this.Oc.hide(),this.player.loadModule("annotations_module"))};
g.k.aa=function(){this.Ed&&(this.Ed.dispose(),this.Ed=void 0);g.V.prototype.aa.call(this)};
g.k.An=function(){this.player.stopVideo();this.player.xa("onCloseMiniplayer")};
g.k.KO=function(){this.player.playVideo()};
g.k.FE=function(a){if(a.target===this.Lk.element||a.target===this.pl.element)g.Q(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.EL(g.tJ(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.xa("onExpandMiniplayer")};
g.k.zi=function(){g.I(this.player.getRootNode(),"ytp-player-minimized",this.player.app.visibility.u)};
g.k.Xd=function(){this.Oc.Gc();this.Gh.Gc()};
g.k.Pp=function(){this.Xd();this.Ed&&this.Ed.start()};
g.k.Vb=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.Sa=function(){this.Oc.setPosition(0,g.KG(this.player).getPlayerSize().width,!1);g.NZ(this.Oc)};
g.k.GQ=function(a){this.player.app.visibility.u&&(0===a?this.hide():this.show())};
g.k.Ib=function(){return this.tooltip};
g.k.Hd=function(){return!1};
g.k.oe=function(){return!1};
g.k.hh=function(){return!1};
g.k.Gy=function(){};
g.k.rl=function(){};
g.k.Lo=function(){};
g.k.Bl=function(){return null};
g.k.di=function(){return new g.eg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Hn=function(a,b,c,d,e){var f=0,h=d=0,l=g.Bg(a);if(b){c=g.wn(b,"ytp-prev-button")||g.wn(b,"ytp-next-button");var m=g.wn(b,"ytp-play-button"),n=g.wn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.zg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.wn(b,"ytp-miniplayer-button-top-left"),f=g.zg(b,this.element),b=g.Bg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.KG(this.player).getPlayerSize().width;e=f+(e||0);l=g.$d(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Hj=function(){};
g.k.cj=function(){return!1};g.u(P5,g.AS);P5.prototype.create=function(){};
P5.prototype.Ch=function(){return!1};
P5.prototype.load=function(){this.player.hideControls();this.u.show()};
P5.prototype.unload=function(){this.player.showControls();this.u.hide()};g.DX.miniplayer=P5;})(_yt_player);
