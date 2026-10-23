// To enable a real download, set RESUME_URL to the hosted PDF path, e.g. "Nurul-Islam-Faisal-Resume.pdf"
var RESUME_URL="";
document.getElementById("yr").textContent=new Date().getFullYear();
if(RESUME_URL){document.querySelectorAll("[data-resume]").forEach(function(a){a.href=RESUME_URL;a.setAttribute("download","");a.textContent="Download resume"})}
var hd=document.getElementById("hd"),pg=document.getElementById("prog"),nav=document.getElementById("nav"),mb=document.getElementById("mb");
function sc(){var y=window.scrollY,h=document.documentElement.scrollHeight-innerHeight;hd.classList.toggle("s",y>20);pg.style.width=(h>0?y/h*100:0)+"%"}
addEventListener("scroll",sc,{passive:true});sc();
mb.addEventListener("click",function(){var o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o);mb.setAttribute("aria-label",o?"Close menu":"Open menu")});
nav.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){nav.classList.remove("open");mb.setAttribute("aria-expanded","false")})});
addEventListener("keydown",function(e){if(e.key==="Escape"&&nav.classList.contains("open")){nav.classList.remove("open");mb.setAttribute("aria-expanded","false");mb.focus()}});
var links=[].slice.call(nav.querySelectorAll("a")),map={hotel:"about"};
if("IntersectionObserver" in window){
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var id=map[e.target.id]||e.target.id;links.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+id)})}})},{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("section[id]").forEach(function(s){so.observe(s)});
var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");ro.unobserve(e.target)}})},{threshold:.08});
document.querySelectorAll(".rv").forEach(function(r){ro.observe(r)});
}else{document.querySelectorAll(".rv").forEach(function(r){r.classList.add("in")})}

(function(){
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function idx(sel,cls){document.querySelectorAll(sel).forEach(function(el){[].slice.call(el.children).forEach(function(c,i){c.style.setProperty("--i",i);if(cls)c.classList.add(cls)})})}
idx(".hero .w","hin");
idx(".g2,.num,.cat,.ed,.ln,.tr,.sh,.two","st");
document.querySelectorAll(".use,.pf,.cb").forEach(function(e){e.classList.add("st")});
if(rm)return;
/* count-up for the two numeric highlights */
document.querySelectorAll(".proof b").forEach(function(b){
var m=b.textContent.match(/^~([\d,]+)$/);if(!m)return;
var end=parseInt(m[1].replace(/,/g,""),10),t0=null;b.textContent="~0";
function step(t){if(!t0)t0=t;var p=Math.min((t-t0)/1400,1),e=1-Math.pow(1-p,3);b.textContent="~"+Math.round(end*e).toLocaleString("en-US");if(p<1)requestAnimationFrame(step)}
setTimeout(function(){requestAnimationFrame(step)},1100)});
/* scroll: hero parallax + header hide/show */
var svg=document.querySelector(".hero svg"),last=0,tick=false;
function onS(){var y=scrollY;
if(y<1200&&svg){svg.style.setProperty("--py",(y*.16)+"px");svg.style.setProperty("--rot",(y*.02)+"deg")}
var d=y-last;if(y>420&&d>6&&!nav.classList.contains("open"))hd.classList.add("hide");else if(d<-6||y<=420)hd.classList.remove("hide");
last=y;tick=false}
addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(onS)}},{passive:true});
})();

(function(){
var d=document.querySelector(".mq div");if(!d)return;
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches,w=0,pos=0,ly=scrollY,vis=true,hov=false,mq=d.parentNode;
function build(){var base=d.children[0].cloneNode(true);d.innerHTML="";d.appendChild(base);w=base.offsetWidth;if(!w)return;var n=Math.ceil(innerWidth/w)+2;for(var i=0;i<n;i++)d.appendChild(base.cloneNode(true))}
build();
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(build);
addEventListener("resize",build);
mq.addEventListener("mouseenter",function(){hov=true});mq.addEventListener("mouseleave",function(){hov=false});
if("IntersectionObserver" in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(mq);
function tick(){var y=scrollY,v=y-ly;ly=y;
if(vis&&w){pos-=(hov?0:(rm?.35:.8))+(rm?0:v*.6);pos=pos%w;if(pos>0)pos-=w;d.style.transform="translate3d("+pos+"px,0,0)"}
requestAnimationFrame(tick)}
requestAnimationFrame(tick);
})();

(function(){var K="nif-theme",root=document.documentElement,mql=matchMedia("(prefers-color-scheme: light)"),btns=[].slice.call(document.querySelectorAll(".tm button")),mode="dark";
try{mode=localStorage.getItem(K)||"dark"}catch(e){}
function apply(m){var t=m==="auto"?(mql.matches?"light":"dark"):m;root.setAttribute("data-theme",t);btns.forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-m")===m?"true":"false")})}
apply(mode);
btns.forEach(function(b){b.addEventListener("click",function(){mode=b.getAttribute("data-m");try{localStorage.setItem(K,mode)}catch(e){}apply(mode)})});
if(mql.addEventListener)mql.addEventListener("change",function(){if(mode==="auto")apply("auto")});
})();

(function(){var fs=[].slice.call(document.querySelectorAll(".pfl button")),it=[].slice.call(document.querySelectorAll(".pi")),lb=document.getElementById("lb");if(!lb)return;
fs.forEach(function(b){b.addEventListener("click",function(){var f=b.getAttribute("data-f");fs.forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});it.forEach(function(p){p.hidden=!(f==="all"||p.getAttribute("data-c")===f);if(!p.hidden){p.style.animation="none";void p.offsetWidth;p.style.animation=""}})})});
document.querySelectorAll(".pb").forEach(function(b){b.addEventListener("click",function(){var im=b.querySelector("img");document.getElementById("lbi").src=im.src;document.getElementById("lbi").alt=im.alt;document.getElementById("lbc").textContent=im.alt;lb.showModal?lb.showModal():lb.setAttribute("open","")})});
function cl(){lb.close?lb.close():lb.removeAttribute("open")}
document.getElementById("lbx").addEventListener("click",cl);lb.addEventListener("click",function(e){if(e.target===lb)cl()});
document.querySelectorAll(".pi video").forEach(function(v){v.addEventListener("play",function(){document.querySelectorAll(".pi video").forEach(function(o){if(o!==v)o.pause()})})});
})();

(function(){var art=document.querySelector(".art");if(!art)return;
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function by(cs){var o=[];document.querySelectorAll(".pi:not(.vi)").forEach(function(p){if(cs.indexOf(p.getAttribute("data-c"))>-1){var im=p.querySelector("img");if(im)o.push(im.src)}});return o}
var T=[{k:"social",l:"Social media",c:["social","ads"]},{k:"web",l:"Websites",c:["web"]},{k:"brand",l:"Branding",c:["brand"]},{k:"print",l:"Print &amp; signage",c:["print"]}].map(function(t){t.list=by(t.c);return t}).filter(function(t){return t.list.length>1});
if(T.length<4)return;
art.innerHTML="";art.className+=" reel";art.removeAttribute("aria-label");art.setAttribute("role","group");art.setAttribute("aria-label","Animated reel of my work by skill");
var vis=true;if("IntersectionObserver" in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(art);
T.forEach(function(t,n){
var b=document.createElement("button");b.type="button";b.className="rt";b.setAttribute("aria-label","See "+t.l.replace("&amp;","and")+" work in the portfolio");
b.innerHTML='<div class="in"><img alt="" src="'+t.list[0]+'"><img class="tp" alt="" src="'+t.list[1]+'"></div><span class="lb">'+t.l+'</span>';
art.appendChild(b);
t.i=0;t.fl=false;var im=b.querySelectorAll("img");
b.addEventListener("click",function(){var f=document.querySelector('.pfl button[data-f="'+t.k+'"]');if(f)f.click();document.getElementById("portfolio").scrollIntoView({behavior:rm?"auto":"smooth"})});
var S=[["inset(50% 50% 50% 50% round 50%)","inset(0 0 0 0 round 0)"],["polygon(50% 0,50% 0,100% 50%,100% 50%,50% 100%,50% 100%,0 50%,0 50%)","polygon(0 0,100% 0,100% 0,100% 100%,100% 100%,0 100%,0 100%,0 0)"],["circle(0% at 50% 50%)","circle(78% at 50% 50%)"],["polygon(0 0,0 0,0 100%,0 100%)","polygon(0 0,125% 0,100% 100%,0 100%)"],["inset(0 0 100% 0)","inset(0 0 0 0)"],["circle(0% at 0% 100%)","circle(150% at 0% 100%)"]],k=n;
setTimeout(function(){setInterval(function(){
if(!vis||document.hidden||b.matches(":hover"))return;
var nx=(t.i+1)%t.list.length,top=im[1],base=im[0];top.src=t.list[nx];
if(rm){base.src=t.list[nx];t.i=nx;return}
var sh=S[k++%S.length];
var an=top.animate([{clipPath:sh[0]},{clipPath:sh[1]}],{duration:1200,easing:"cubic-bezier(.65,0,.35,1)",fill:"forwards"});
an.onfinish=function(){base.src=t.list[nx];t.i=nx;(base.decode?base.decode():Promise.resolve()).catch(function(){}).then(function(){an.cancel()})};
},3800)},n*950+1200);
});
})();
