/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120731
*/
ZC.YZ=ZC.D1.B6({$i:function(a){this.b(a);this.N4=this.BF=null;this.KF="x1";this.GH="hide";this.NP=this.OJ=0;this.SR="none";this.NC="icon";this.FJ=9999;this.K0=this.E3=this.AI=this.SK=this.BC=null;this.HG=this.DX=0;this.D5={enabled:false,min:-1,max:-1,page:-1,pages:-1};this.KA=0;this.K7=-1},parse:function(){var a,e=this.A.H.AR,b="("+this.A.AC+")";this.b();this.Q4_a([["minimize","OJ","b"],["draggable","NP","b"],["overflow","SR"],["max-items","FJ","i"],["drag-handler","NC"]]);this.BC=new ZC.G4(this);
e.load(this.BC.o,b+".legend.item");if((a=this.o.item)!=null)this.BC.append(a);this.BC.parse();this.SK=new ZC.G4(this);e.load(this.SK.o,b+".legend.item-off");if((a=this.o["item-off"])!=null)this.SK.append(a);this.SK.parse();this.AI=new ZC.E5(this);e.load(this.AI.o,b+".legend.marker");this.AI.append(this.o.marker);this.AI.I.type="default";this.AI.I["show-marker"]=1;this.AI.I["show-line"]=0;if((a=this.AI.o.type)!=null)this.AI.I.type=a;if((a=this.AI.o["show-line"])!=null)this.AI.I["show-line"]=ZC._b_(a);
if((a=this.BC.o["marker-style"])!=null)this.AI.I.type=a;if((a=this.BC.o["show-line"])!=null)this.AI.I["show-line"]=ZC._b_(a);if((a=this.BC.o["show-marker"])!=null)this.AI.o.visible=ZC._b_(a);this.AI.parse();if((a=this.o.header)!=null||this.NP||this.OJ){this.E3=new ZC.D1(this);this.E3.F1="zc-legend-item "+this.P+"-header";this.E3.P=this.P+"-header";e.load(this.E3.o,b+".legend.header");this.E3.o.text=this.E3.o.text||" ";this.E3.append(a);this.E3.parse()}if((a=this.o.footer)!=null){this.K0=new ZC.D1(this);
this.K0.F1="zc-legend-item "+this.P+"-footer";this.K0.P=this.P+"-footer";e.load(this.K0.o,b+".legend.footer");this.K0.append(a);this.K0.parse()}if((a=this.o.layout)!=null)this.KF=a;if((a=this.o[ZC._[56]])!=null)this.GH=a;if(this.o.item!=null)if((a=this.o.item[ZC._[56]])!=null)this.GH=a;e=this.A.B0.AA;this.BF=[];b=0;for(var f=e.length;b<f;b++){var c=new ZC.D1(this);c.copy(this.BC);c.append(e[b].o["legend-item"]);var g=null;if((a=e[b].VU)!=null)g=a;if(g==null)if((a=e[b].AX)!=null)g=a;c.AX=g==null?"Series "+
b:g;c.OY=1;c.I.order=b;c.I.index=b;if(e[b].o["legend-item"]!=null&&(a=e[b].o["legend-item"].order)!=null)c.I.order=ZC._l_(ZC._i_(a)-1,0,f-1);c.parse();this.BF.push(c)}if(a=this.A.I["legend-info"])this.KA=a.collapsed;if(this.SR=="page"){if(a=this.A.I["legend-info"]){this.D5.min=a.min;this.D5.max=a.max;this.D5.page=a.page}else{this.D5.min=0;this.D5.max=this.FJ;this.D5.page=1}this.D5.pages=Math.ceil(this.BF.length/this.FJ);if(this.D5.page>this.D5.pages){this.D5.page=this.D5.pages;this.D5.min=(this.D5.page-
1)*this.FJ;this.D5.max=this.D5.page*this.FJ-1}this.D5.page=ZC.CT(this.D5.page,this.D5.pages)}else{this.D5.min=0;this.D5.max=this.SR=="hidden"?this.FJ:this.BF.length;this.D5.page=1}this.T5(false);this.BF.sort(function(w,t){return w.I.order>=t.I.order?1:-1});var s=this.A.G*0.9;if(this.o[ZC._[21]]!=null)s=this.G;e=c=0;g=-ZC.MAX;var q=-ZC.MAX,B=this.AI.I["show-line"]?3:2,u=0;if(this.KF=="float"){b=0;for(f=this.BF.length;b<f;b++){u+=this.BF[b].AM?1:0;if(!(b<this.D5.min||b>=this.D5.max||this.KA))if(this.BF[b].AM){var r=
this.BF[b].G+this.BF[b].CX+this.BF[b].CQ+B*this.BF[b].DS;q=ZC.BR(q,this.BF[b].E+this.BF[b].CS+this.BF[b].CM);if(c+r>s){g=ZC.BR(g,c);e+=q;c=r;q=ZC.BR(q,this.BF[b].E+this.BF[b].CS+this.BF[b].CM)}else c+=r}}if(q!=-ZC.MAX)e+=q;if(g!=-ZC.MAX)c=g}else{b=c=0;for(f=this.BF.length;b<f;b++){u+=this.BF[b].AM?1:0;b<this.D5.min||b>=this.D5.max||this.KA||(c+=this.BF[b].AM?1:0)}b=ZC.AV.T3(this.KF,c);s=b[0];c=b[1];b=0;for(f=this.BF.length;b<f;b++)if(!(b<this.D5.min||b>=this.D5.max||this.KA))if(this.BF[b].AM){g=ZC.BR(g,
this.BF[b].G+this.BF[b].CX+this.BF[b].CQ+B*this.BF[b].DS);q=ZC.BR(q,this.BF[b].E+this.BF[b].CS+this.BF[b].CM);if(c==1)e+=this.BF[b].E+this.BF[b].CS+this.BF[b].CM}c=c*g;e=s*q}if(this.SR=="page"&&u>this.FJ)this.D5.enabled=1;if(this.E3!=null){b=this.E3.G;if(this.NP&&this.NC=="icon"){b+=15;if(this.OJ)b+=25}else if(this.OJ)b+=15;if(c<b)c=b}f=b=0;if(this.o[ZC._[21]]==null){this.o[ZC._[21]]=c;b=1}if(this.o[ZC._[22]]==null){this.o[ZC._[22]]=e;f=1}this.iY=this.iX=-1;this.locate();if(!ZC.move&&(a=this.A.A.I["graph-"+
this.A.P+"-legend-info"])){if(a.x)this.iX=a.x;if(a.y)this.iY=a.y}this.HG=this.E;this.DX=this.iY;if(this.E3!=null){this.E+=this.E3.E;this.DX+=this.E3.E}if(this.K0!=null)this.E+=this.K0.E;if(this.D5.enabled&&!this.KA){a=new ZC.D1(this);a.AX=" ";a.append(this.o["page-status"]);a.parse();this.E+=a.E+4}if(b)this.o[ZC._[21]]=null;if(f)this.o[ZC._[22]]=null;this.iX-=this.ER+this.FL;if(!this.KA){this.G+=this.ER+this.FL;this.E+=this.GV+this.I0}},T5:function(a){if(typeof a==ZC._[33])a=1;this.A.I["legend-info"]=
{collapsed:this.KA,min:this.D5.min,max:this.D5.max,page:this.D5.page};if(a)this.A.A.I["graph-"+this.A.P+"-legend-info"]={x:this.iX+this.ER+this.FL,y:this.iY}},clear:function(a){if(a==null)a=0;var e=this.A.P+"-legend-";ZC.A3("."+e+"item").remove();ZC.A3("."+e+"header").remove();ZC.A3("."+e+"footer").remove();ZC.A3("#"+e+"page-status").remove();if(!a){ZC.move||this.unbind();ZC.A3("."+e+"page-area").remove();ZC.A3("."+e+"header-area").remove();ZC.A3("."+e+"item-area").remove()}ZC.move?ZC.L.J1(ZC.AN(e+
"c"),this.A.H.A5,this.A.iX,this.A.iY,this.A.G,this.A.E):ZC.L.J1(ZC.AN(e+"c"),this.A.H.A5,this.iX-2*this.AE-2*this.GL,this.iY-2*this.AE-2*this.GL,this.G+4*this.AE+4*this.GL,this.E+4*this.AE+4*this.GL)},unbind:function(){ZC.A3("#"+this.P+"-move-area").die(ZC.L.B7(ZC._[49]),this.QQ);ZC.A3("#"+this.P+"-minimize-area").die(ZC.L.B7("click"),this.SO);ZC.A3("."+this.P+"-page-area").die(ZC.L.B7("click"),this.QI);this.BC.o.reorder&&ZC.A3("."+this.A.P+"-legend-item-area").die(ZC._[49],this.OP)},paint:function(){var a=
this,e;if(a.AM){var b=a.A.B0.AA;a.V1=1;a.b();if(a.E3!=null){a.E3.iX=a.iX;a.E3.iY=a.iY;a.E3.G=a.G;a.E3.X=a.E3.BT=a.X;a.E3.paint();ZC.move||a.E3.D7();if(a.NP&&a.NC=="icon"){var f=new ZC.CY(a);f.X=a.X;f.AT="#000";f.AG=1;f.E9="line";f.append(a.o.icon);var c=a.E3.iX+a.E3.G-10,g=a.E3.iY+a.E3.E/2;f.C=[[c-7,g],[c+7,g],null,[c,g-7],[c,g+7],null,[c-6,g-1],[c-6,g+1],null,[c-5,g-2],[c-5,g+2],null,[c+6,g-1],[c+6,g+1],null,[c+5,g-2],[c+5,g+2],null,[c-1,g-6],[c+1,g-6],null,[c-2,g-5],[c+2,g-5],null,[c-1,g+6],[c+
1,g+6],null,[c-2,g+5],[c+2,g+5]];f.parse();f.paint()}if(a.OJ){f=new ZC.CY(a);f.X=a.X;f.AT="#000";f.AG=1;f.append(a.o.icon);f.E9="line";c=a.E3.iX+a.E3.G-10-(a.NP&&a.NC=="icon"?20:0);g=a.E3.iY+a.E3.E/2;f.C=[[c-7,g-2],[c+2,g-2],[c+2,g+7],[c-7,g+7],[c-7,g-2],[c+2,g-2],null,[c-4,g-5],[c+5,g-5],[c+5,g+4],[c-4,g+4],[c-4,g-5],[c+5,g-5]];f.parse();f.paint()}}if(a.K0!=null){a.K0.iX=a.iX;a.K0.iY=a.iY+a.E-a.K0.E;a.K0.G=a.G;a.K0.X=a.K0.BT=a.X;a.K0.paint();ZC.move||a.K0.D7()}c=f=0;for(g=a.BF.length;c<g;c++)c<a.D5.min||
c>=a.D5.max||a.KA||(f+=a.BF[c].AM?1:0);f=ZC.AV.T3(a.KF,f);var s=f[1],q=a.G/s,B=a.HG/f[0],u=0,r=0;a.N4=[];var w=0,t=-ZC.MAX,v=a.AI.I["show-line"]?3:2,x=null;f="";c=0;for(g=a.BF.length;c<g;c++)if(!(c<a.D5.min||c>=a.D5.max||a.KA)){var d=a.BF[c],j=d.I.index,h=new ZC.D1(a);h.P=a.P+"-item-"+j;h.F1="zc-legend-item "+a.P+"-item";h.copy(d);h.OY=1;a.A.I["plot"+j+".visible"]||h.append(a.SK.o);h.append(b[j].o["legend-item"]);h.KJ=function(i){return b[j]&&b[j].Q[0]?b[j].GG(0).KJ(i):i};h.parse();if(h.AM){if(a.KF==
"float"){t=ZC.BR(t,d.E);if(x==null){d.iX=a.iX+a.ER+d.CX+v*d.DS;d.iY=a.DX+a.GV+d.CS;w=a.DX}else{d.iX=x.iX+x.G+x.CQ+d.CX+v*d.DS;if(ZC._i_(d.iX+d.G+d.CQ)>ZC._i_(a.iX+a.G)){d.iX=a.iX+a.ER+d.CX+v*d.DS;w+=t+d.CS+d.CM;t=-ZC.MAX}d.iY=w+a.GV+d.CS}}else{d.iX=a.iX+(r==0?a.ER:0)+r*q+d.CX+v*d.DS;d.iY=a.DX+a.GV+u*B+d.CS;r++;if(r==s){r=0;u++}}x=d;h.iX=d.iX=ZC._i_(d.iX);h.iY=d.iY=ZC._i_(d.iY);h.X=d.BT=a.X;if(j==a.K7)h.iY=a.I["dragged-y"]-h.DS/4;h.paint();if(typeof a.I.showhide==ZC._[33]||a.I.showhide==null)ZC.move||
h.D7()}var p=a.AI.I.type;if(p=="match")p=(e=b[j].AI.o.type)!=null?e:"default";if(ZC.AH(["default","square"],p)!=-1)d=new ZC.G4(a);else{d=new ZC.CY(a);d.E9=p}d.append(a.AI.o);d.append(b[j].o["legend-marker"]);if(a.AI.I.type=="match")d.append(b[j].AI.o);else switch(b[j].AC){case "pie":case "pie3d":case "nestedpie":case "vbar":case "vbar3d":case "hbar":case "hbar3d":case "vbullet":case "hbullet":case "area":case "area3d":case "gauge":case "vfunnel":case "hfunnel":case "venn":d.Y=b[j].Y;d.A8=b[j].A8;
d.ET=b[j].ET;d.F5=b[j].F5;break;case "scatter":case "bubble":if(typeof(e=b[j].I["marker-style"])!=ZC._[33]){d.Y=e.Y;d.A8=e.A8;d.ET=e.ET;d.F5=e.F5}else{d.Y=b[j].AI.Y;d.A8=b[j].AI.A8;d.ET=b[j].AI.ET;d.F5=b[j].AI.F5}break;default:d.Y=b[j].AT;d.A8=b[j].AT}d.o["line-style"]="solid";d.o.type=d.E9;if(ZC.AH(["default","square"],p)!=-1)if((e=d.o[ZC._[23]])!=null){if(d.o[ZC._[21]]==null)d.o[ZC._[21]]=2*ZC._i_(e);if(d.o[ZC._[22]]==null)d.o[ZC._[22]]=2*ZC._i_(e)}d.P=a.P+"-marker-"+j;d.X=d.BT=a.X;d.iX=h.iX-v*
h.DS+(v-1)*h.DS/2+h.DS/2;d.iY=h.iY+(h.E-h.DS)/2+h.DS/2;d.parse();if(ZC.AH(["default","square"],p)!=-1){d.iX-=d.G/2;d.iY-=d.E/2}a.A.I["plot"+j+".visible"]||(d.AB/=4);if(a.AI.I["show-line"]){e=ZC.L.CN(a.X,a.A.H.A5);p=new ZC.E5(a);p.X=a.X;p.copy(b[j]);p.o["line-style"]=a.AI.FQ;p.parse();if(!a.A.I["plot"+j+".visible"])p.AB=0.25;var C=[];C.push([d.iX-1.25*h.DS,d.iY]);C.push([d.iX+1.25*h.DS,d.iY]);ZC.BW.paint(e,p,C)}if(j==a.K7)d.iY=a.I["dragged-y"];d.AM&&d.paint();a.N4.push(d);p=1;if((e=a.BC.o.toggle)!=
null)p=ZC._b_(e);a.I["item.toggle"]=p;if(h.AM||d.AM)if(ZC.AH(a.A.H.HS,ZC._[43])==-1)ZC.AN(h.P+"-area")||(f+=ZC.L.DJ("rect")+'class="'+(a.P+"-item-area zc-legend-item-area")+'" id="'+h.P+"-area"+ZC._[32]+ZC._i_(h.iX-1.5*h.DS+ZC.MAPTX)+","+ZC._i_(h.iY+ZC.MAPTX)+","+ZC._i_(h.iX+h.G+ZC.MAPTX)+","+ZC._i_(h.iY+h.E+ZC.MAPTX)+'"/>')}if(a.D5.enabled&&!a.KA){var k=new ZC.D1(a);k.X=a.X;k.P=a.P+"-page-status";k.AX=ZC.F7["legend-pagination"].replace("%page%",a.D5.page).replace("%pages%",a.D5.pages);k.append(a.o["page-status"]);
k.parse();if(a.G<k.G+48){k.AX=a.D5.page+"/"+a.D5.pages;k.parse()}k.iX=a.iX+a.G/2-k.G/2;k.iY=a.iY+a.E-(a.K0?a.K0.E:0)-k.E-4;k.AM&&k.paint();var o=new ZC.CY(a);o.X=o.BT=a.X;o.Y=o.A8=a.D5.page>1?"#f90":"#999";o.append(a.D5.page>1?a.o["page-on"]:a.o["page-off"]);var y=a.iX+a.G/2-k.G/2-6,z=k.iY+k.E/2;o.parse();o.AU=ZC.BR(o.AU,8);e=ZC._i_(o.AU*0.75);o.C=[[y,z-e],[y,z+e],[y-o.AU,z],[y,z-e]];o.AM&&o.paint();c=new ZC.CY(a);c.X=c.BT=a.X;c.Y=c.A8=a.D5.page<a.D5.pages?"#f90":"#999";c.append(a.D5.page<a.D5.pages?
a.o["page-on"]:a.o["page-off"]);o=a.iX+a.G/2+k.G/2+6;k=k.iY+k.E/2;c.parse();c.AU=ZC.BR(c.AU,8);e=ZC._i_(c.AU*0.75);c.C=[[o,k-e],[o,k+e],[o+c.AU,k],[o,k-e]];c.AM&&c.paint()}if(!ZC.move){if(a.D5.enabled){if(a.D5.page>1)f+=ZC.L.DJ("circle")+'class="'+(a.P+"-page-area zc-legend-page-area")+'" id="'+a.P+"-page-prev-area"+ZC._[32]+ZC._i_(y-2+ZC.MAPTX)+","+ZC._i_(z+ZC.MAPTX)+',10"/>';if(a.D5.page<a.D5.pages)f+=ZC.L.DJ("circle")+'class="'+(a.P+"-page-area zc-legend-page-area")+'" id="'+a.P+"-page-next-area"+
ZC._[32]+ZC._i_(o+2+ZC.MAPTX)+","+ZC._i_(k+ZC.MAPTX)+',10"/>'}if(a.E3&&a.NP){f+=ZC.L.DJ("rect")+'class="'+(a.P+"-header-area zc-legend-header-area")+'" id="'+a.P+"-move-area"+ZC._[32];f+=a.NC=="icon"?ZC._i_(a.E3.iX+a.E3.G-20+ZC.MAPTX)+","+ZC._i_(a.E3.iY+ZC.MAPTX)+","+ZC._i_(a.E3.iX+a.E3.G-1+ZC.MAPTX)+","+ZC._i_(a.E3.iY+a.E3.E+ZC.MAPTX):ZC._i_(a.E3.iX+ZC.MAPTX)+","+ZC._i_(a.E3.iY+ZC.MAPTX)+","+ZC._i_(a.E3.iX+a.E3.G-(a.OJ?23:0)+ZC.MAPTX)+","+ZC._i_(a.E3.iY+a.E3.E+ZC.MAPTX);f+='"/>'}if(a.OJ){f+=ZC.L.DJ("rect")+
'class="'+(a.P+"-header-area zc-legend-header-area")+'" id="'+a.P+"-minimize-area"+ZC._[32];f+=a.NP&&a.NC=="icon"?ZC._i_(a.E3.iX+a.E3.G-41+ZC.MAPTX)+","+ZC._i_(a.E3.iY+ZC.MAPTX)+","+ZC._i_(a.E3.iX+a.E3.G-22+ZC.MAPTX)+","+ZC._i_(a.E3.iY+a.E3.E+ZC.MAPTX):ZC._i_(a.E3.iX+a.E3.G-22+ZC.MAPTX)+","+ZC._i_(a.E3.iY+ZC.MAPTX)+","+ZC._i_(a.E3.iX+a.E3.G-1+ZC.MAPTX)+","+ZC._i_(a.E3.iY+a.E3.E+ZC.MAPTX);f+='"/>'}if(f!="")ZC.AN(a.A.A.P+"-map").innerHTML+=f;a.RC=0;a.RG=0;a.QQ=function(i){i.preventDefault();a.H.hideCM();
ZC.move=1;if(!(!ZC.mobile&&i.which>1)){a.A.A.I["graph-"+a.A.P+"-legend-info"]=null;i=ZC.L.KW(i);var l=ZC.A3("#"+a.A.A.P+"-top").offset();a.RC=i[0]-l.left-a.E3.iX;a.RG=i[1]-l.top-a.E3.iY;ZC.A3(document.body).bind(ZC.L.B7(ZC._[50]),a.QR);ZC.A3(document.body).bind(ZC.L.B7(ZC._[51]),a.S1)}};a.QR=function(i){var l=ZC.L.KW(i),m=ZC.A3("#"+a.A.A.P+"-top").offset();i=l[0]-m.left-a.RC;l=l[1]-m.top-a.RG;i=ZC.BR(i,a.A.iX+2);i=ZC.CT(i,a.A.iX+a.A.G-a.G+a.ER+a.FL-2);l=ZC.BR(l,a.A.iY+2);l=ZC.CT(l,a.A.iY+a.A.E-a.E-
2);a.o.x=i+a.ER+a.FL;a.o.y=l;a.o.position=null;a.clear(true);a.parse();a.paint()};a.S1=function(){ZC.move=0;ZC.A3(document.body).unbind(ZC.L.B7(ZC._[50]),a.QR);ZC.A3(document.body).unbind(ZC.L.B7(ZC._[51]),a.S1);a.clear(false);a.parse();a.paint();a.T5()};a.QI=function(i){if(i.target.id.indexOf("-page-next-area")!=-1){a.D5.min+=a.FJ;a.D5.max+=a.FJ;a.D5.page+=1}else{a.D5.min-=a.FJ;a.D5.max-=a.FJ;a.D5.page-=1}a.T5();a.clear(false);a.parse();a.paint()};a.SO=function(){a.KA=!a.KA;a.T5();a.clear(false);
a.parse();a.paint()};a.JN=function(i){ZC.move=1;i=ZC.L.KW(i);var l=ZC.A3("#"+a.A.A.P+"-top").offset(),m=i[1]-l.top;a.I["dragged-x"]=i[0]-l.left;a.I["dragged-y"]=m;a.T5();a.clear(false);a.parse();a.paint()};a.OP=function(i){i.preventDefault();a.H.hideCM();if(!(!ZC.mobile&&i.which>1)){if(i=RegExp("-legend-item-([0-9]+)-area","g").exec(i.target.id))a.K7=i[1];ZC.A3(document.body).bind(ZC.L.B7(ZC._[50]),a.JN);ZC.A3(document.body).bind(ZC.L.B7(ZC._[51]),a.PJ)}};a.PJ=function(){var i=a.K7;a.K7=-1;ZC.A3(document.body).unbind(ZC.L.B7(ZC._[50]),
a.JN);ZC.A3(document.body).unbind(ZC.L.B7(ZC._[51]),a.PJ);if(ZC.move){for(var l=a.A.B0.AA,m=0,n=l.length;m<n;m++){l[m].o["legend-item"]=l[m].o["legend-item"]||{};if(l[m].o["legend-item"].order==null)l[m].o["legend-item"].order=m+1}m=-1;n=0;for(var A=a.N4.length;n<A;n++)if(a.I["dragged-y"]>a.N4[n].iY)m=n;l[i].o["legend-item"].order=m==-1?1:l[m].o["legend-item"].order+1;n=0;for(A=a.N4.length;n<A;n++)if(m>i)n>=i&&n<=m&&l[n].o["legend-item"].order--;else m<i&&n>m&&n<i&&l[n].o["legend-item"].order++;n=
0;for(A=a.N4.length;n<A;n++)a.A.o[ZC._[13]][n]["z-index"]=l[n].o["legend-item"].order;ZC.move=0;a.clear(false);a.A.HA()}};ZC.A3("#"+a.P+"-move-area").live(ZC.L.B7(ZC._[49]),a.QQ);ZC.A3("#"+a.P+"-minimize-area").live(ZC.L.B7("click"),a.SO);ZC.A3("."+a.P+"-page-area").live(ZC.L.B7("click"),a.QI);a.BC.o.reorder&&ZC.A3("."+a.A.P+"-legend-item-area").live(ZC._[49],a.OP)}a.I.showhide=null}}});ZC.QU.push("legend");
ZC.HZ.prototype.A1V=function(){var a=this;if(a.I4!=null){a.I4.X=a.I4.BT=a.H.usc()?a.H.mc("top"):ZC.AN(a.P+"-legend-c");a.I4.paint();if(!a.MR)if(ZC.AH(a.H.HS,ZC._[43])==-1){a.OT=function(e){a.AJ&&a.A.AJ&&a.AJ.AM&&a.A.AJ.onmouseover(e)};a.NM=function(e){a.AJ&&a.A.AJ&&a.AJ.AM&&a.A.AJ.onmousemove(e)};a.P8=function(e){a.AJ&&a.A.AJ&&a.AJ.AM&&a.A.AJ.onmouseout(e)};a.QC=function(e){if(!(e.which>1)){e.preventDefault();if(a.A.L7)a.I4.GH="remove";var b=ZC._i_(e.target.id.replace(a.P+"-legend-item-","").replace("-area",
""));ZC.BP.DA("legend_item_click",a.A,{id:a.A.P,graphid:a.P,plotindex:b,visible:ZC._b_(a.I["plot"+b+".visible"]),ev:ZC.A3.B7(e)});if(a.I4.I["item.toggle"])switch(a.I4.GH){case "hide":case "remove":if(e.shiftKey)for(var f=e=0,c=a.B0.AA.length;f<c;f++){if(f!=b){e++;A0Y=e==c-1;a.MY({HA:A0Y,plotindex:f,"toggle-action":a.I4.GH})}}else a.MY({HA:1,plotindex:b,"toggle-action":a.I4.GH})}}};ZC.A3("."+a.P+"-legend-item-area").live("click",a.QC).live(ZC.L.B7("mouseover"),a.OT).live(ZC.L.B7("mouseout"),a.P8).live(ZC.L.B7(ZC._[50]),
a.NM)}}};
