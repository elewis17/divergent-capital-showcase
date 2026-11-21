
(function(){"use strict";
var RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
/* arrival — car, waterfall, cave; then the network */
var arrival=document.getElementById("arrival"),arrT=null,arrHideT=null,arrDone=true;
function endArrival(){if(arrDone)return;arrDone=true;clearTimeout(arrT);arrival.classList.add("done");arrHideT=setTimeout(function(){arrival.style.display="none"},580)}
function playArrival(){clearTimeout(arrT);clearTimeout(arrHideT);arrDone=false;arrival.style.display="";arrival.classList.remove("done");arrT=setTimeout(endArrival,RM?900:4000)}
function replayArrival(){var c=arrival.cloneNode(true);c.classList.remove("done");c.style.display="";arrival.parentNode.replaceChild(c,arrival);arrival=c;arrival.addEventListener("click",endArrival);playArrival()}
arrival.addEventListener("click",endArrival);
addEventListener("keydown",function(e){if(!arrDone&&(e.key==="Enter"||e.key===" "||e.key==="Escape")&&document.activeElement===document.body)endArrival()});
if (RM) arrival.style.display = "none";
else playArrival();
addEventListener("pageshow", function(event) {
  if (event.persisted && !RM) replayArrival();
});
/* clock */
function pad(x){return(x<10?"0":"")+x}function tick(){var d=new Date();document.getElementById("clock").textContent=pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds());}tick();setInterval(tick,1000);
/* glow follows pointer */
var glow=document.getElementById("glow");addEventListener("pointermove",function(e){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"},{passive:true});
/* network */
var cv=document.getElementById("net"),cx=cv.getContext("2d"),pts=[],mouse={x:-9999,y:-9999},raf=null,on=!RM;
function size(){cv.width=innerWidth;cv.height=innerHeight;var c=Math.min(70,Math.floor(cv.width*cv.height/24000));pts=[];for(var i=0;i<c;i++)pts.push({x:Math.random()*cv.width,y:Math.random()*cv.height,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2})}
function draw(){raf=requestAnimationFrame(draw);cx.clearRect(0,0,cv.width,cv.height);var i,j,p,q,dx,dy,d;for(i=0;i<pts.length;i++){p=pts[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>cv.width)p.vx*=-1;if(p.y<0||p.y>cv.height)p.vy*=-1;dx=p.x-mouse.x;dy=p.y-mouse.y;d=Math.hypot(dx,dy);if(d<140&&d>1){p.x+=dx/d*.4;p.y+=dy/d*.4}}for(i=0;i<pts.length;i++)for(j=i+1;j<pts.length;j++){p=pts[i];q=pts[j];dx=p.x-q.x;dy=p.y-q.y;d=dx*dx+dy*dy;if(d<12500){cx.strokeStyle="rgba(61,220,151,"+(.11*(1-d/12500))+")";cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}cx.fillStyle="rgba(200,230,205,.45)";for(i=0;i<pts.length;i++){cx.beginPath();cx.arc(pts[i].x,pts[i].y,1.1,0,6.283);cx.fill()}}
if(on){size();draw()}addEventListener("resize",function(){if(on)size()});addEventListener("pointermove",function(e){mouse.x=e.clientX;mouse.y=e.clientY},{passive:true});
function setNet(v){on=v;if(on){size();if(!raf)draw();cv.style.display="block"}else{if(raf)cancelAnimationFrame(raf);raf=null;cv.style.display="none"}}
/* progress + counters + reveal */
var prog=document.getElementById("prog");addEventListener("scroll",function(){var m=document.documentElement.scrollHeight-innerHeight;prog.style.width=(m>0?scrollY/m*100:0)+"%"},{passive:true});
function count(el){var t=+el.dataset.c;if(RM){el.textContent=t;return}var s=null;function f(ts){if(!s)s=ts;var k=Math.min(1,(ts-s)/1000);el.textContent=Math.round(t*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
document.querySelectorAll("[data-c]").forEach(count);
var io=("IntersectionObserver" in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15}):null;
document.querySelectorAll(".rv").forEach(function(el){io?io.observe(el):el.classList.add("in")});setTimeout(function(){document.querySelectorAll(".rv:not(.in)").forEach(function(el){el.classList.add("in")})},2400);
/* atlas parallax */
var atlas=document.getElementById("atlas"),asvg=document.getElementById("asvg");
atlas.addEventListener("pointermove",function(e){if(RM)return;var r=atlas.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;asvg.style.transform="translate("+(x*10)+"px,"+(y*8)+"px) scale(1.012)"});
atlas.addEventListener("pointerleave",function(){asvg.style.transform=""});
function light(name,v){var l=atlas.querySelector('[data-link="'+name+'"]');if(l)l.classList.toggle("hot",v)}

var APPS={"lease": {"n": "01", "name": "Real Estate Portfolio", "symbol": "DS", "kind": "Application", "status": "Launch available", "desc": "Track rental properties, leases, mortgages, and investments in DealStack.", "detail": "Explore the illustrative portfolio or sign in to view your own records.", "url": "/dealstack/", "label": "Open DealStack", "direct": true}, "capital": {"n": "02", "name": "Divergent Capital", "symbol": "DC", "kind": "Website", "status": "Return to website", "desc": "The business website for Divergent Capital LLC.", "detail": "Return to the Divergent Capital homepage in this staging environment, or open the existing production site.", "url": "/", "label": "Return to homepage", "repo": "https://divergentcapitalllc.com/"}, "engineering": {"n": "03", "name": "AI Company OS", "symbol": "OS", "kind": "Framework", "status": "Repository", "desc": "The autonomous engineering framework behind the ecosystem.", "detail": "Open the source repository and its workflow evidence. ChatGPT and Codex remain the place to direct engineering work.", "url": "https://github.com/elewis17/ai-company-os", "label": "Open repository", "repo": "https://github.com/elewis17/lease-lens-dash/actions/runs/44202854255"}, "knowledge": {"n": "04", "name": "Knowledge", "symbol": "K", "kind": "Future space", "status": "Planned", "desc": "A future home for portable notes, context, and durable knowledge.", "detail": "Reserved for a future application. No knowledge integration or background sync is enabled here."}, "finance": {"n": "05", "name": "Finance", "symbol": "F", "kind": "Future space", "status": "Planned", "desc": "A future destination for finance and portfolio tools.", "detail": "Reserved for a future application. No financial account or data connection is enabled here."}, "future": {"n": "06", "name": "Your next application", "symbol": "+", "kind": "Future space", "status": "Reserved", "desc": "There is room for whatever you build next.", "detail": "A place in the ecosystem, ready for a future application."}};

var ORDER=["lease","capital","engineering","knowledge","finance","future"];
var idx=document.getElementById("index");
ORDER.forEach(function(k){var a=APPS[k],b=document.createElement(a.direct?"a":"button");b.className="irow";b.dataset.open=k;if(a.direct)b.href=a.url;b.innerHTML='<span class="no">'+a.n+'</span><span class="nm">'+a.name+'</span><span class="mt">'+a.kind+'</span><span class="st">'+a.status+'</span><span class="arr">→</span>';b.addEventListener("pointermove",function(e){var r=b.getBoundingClientRect();b.style.setProperty("--mx",((e.clientX-r.left)/r.width*100)+"%")});idx.appendChild(b)});
const sc = document.getElementById("sc");
const sheet = document.getElementById("sheet");
const title = document.getElementById("stitle");
const closeButton = document.getElementById("close");
const directory = document.querySelector(".wrap");
const terminal = document.querySelector(".term");
const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");
let selection = null;
let opener = null;
let source = null;
let transition = null;
let renderRevision = 0;
let fallback = [];
let namedSource = null;
let closing = false;
const handoffKey = "alfred-application-handoff";

sc.setAttribute("aria-hidden", "true");

function renderApplication(name) {
 const a = APPS[name];
 document.getElementById("crumb").textContent=a.n+" · "+a.name;document.getElementById("sk").textContent="Destination "+a.n;document.getElementById("stitle").textContent=a.name;document.getElementById("stag").textContent=a.desc;
 var stats=document.getElementById("sstats");stats.innerHTML='<span><b>'+a.kind+'</b>Destination</span><span><b>'+a.status+'</b>Access</span>';
 document.getElementById("slabel").textContent="Your destination";document.querySelector(".stage .sl .l").textContent=a.url?"↗ Open below":"Future space";
 var demo=document.getElementById("demo");demo.innerHTML='<div class="app-symbol">'+a.symbol+'</div>';var p=document.createElement("p");p.className="app-summary";p.textContent=a.detail;demo.appendChild(p);document.getElementById("dnote").textContent="";
 document.getElementById("access-label").textContent=a.url?"Application access":"Not connected";document.getElementById("launch-title").textContent=a.url?"Your next destination, sir.":"A place for what comes next.";
 var links=document.getElementById("launch-links");links.innerHTML="";
 if(a.url){var primary=document.createElement("a");primary.className="btn pri";primary.href=a.url;primary.textContent=a.label+" ↗";if(a.url!=="/"){primary.target="_blank";primary.rel="noopener noreferrer"}links.appendChild(primary);
 if(a.repo){var secondary=document.createElement("a");secondary.className="btn";secondary.href=a.repo;secondary.target="_blank";secondary.rel="noopener noreferrer";secondary.textContent=name==="capital"?"Open production site ↗":name==="engineering"?"Verified workflow run ↗":"Source repository ↗";links.appendChild(secondary)}}
 document.getElementById("launch-note").textContent=a.url?"Existing application permissions and sign-in continue to apply.":"This entry is a clearly labeled future space, not a live service.";
}
function appFromLocation() {
 const key = location.hash.slice(1);
 return ORDER.includes(key) ? key : null;
}

function sourceTitle(name, trigger) {
 const row = idx.querySelector('[data-open="' + name + '"] .nm');
 const mark = trigger?.querySelector(".nm, text");
 for (const candidate of [mark, row]) {
   if (!candidate) continue;
   const rect = candidate.getBoundingClientRect();
   if (rect.width && rect.bottom > 0 && rect.top < innerHeight) return candidate;
 }
 return null;
}

function setApplication(name, trigger, animate = true) {
 if (name === selection) return;
 transition?.skipTransition();
 fallback.forEach((animation) => animation.cancel());
 fallback = [];
 namedSource?.style.removeProperty("view-transition-name");
 title.style.removeProperty("view-transition-name");
 const revision = ++renderRevision;
 const opening = Boolean(name);
 const previous = selection;
 if (opening && !previous) opener = trigger || document.activeElement;
 const mark = opening ? sourceTitle(name, trigger) : source;
 const rect = mark?.getBoundingClientRect();
 const shared = mark && rect.width && rect.bottom > 0 && rect.top < innerHeight && (!opening || !previous);
 const nativeShared = shared && mark instanceof HTMLElement;
 const styles = getComputedStyle(document.documentElement);
 const duration = parseFloat(styles.getPropertyValue(opening ? "--alfred-enter-ms" : "--alfred-return-ms"));
 const easing = styles.getPropertyValue(opening ? "--alfred-ease" : "--alfred-return-ease").trim();
 const root = document.documentElement;

 function update() {
   if (revision !== renderRevision) return;
   mark?.style.removeProperty("view-transition-name");
   title.style.removeProperty("view-transition-name");
   root.dataset.alfredMotion = opening ? "enter" : "return";
   if (opening) {
     source = mark;
     renderApplication(name);
     const originX = shared ? (rect.left + rect.width / 2) + "px" : "50%";
     const originY = shared ? (rect.top + rect.height / 2) + "px" : "38%";
     sc.style.setProperty("--origin-x", originX);
     sc.style.setProperty("--origin-y", originY);
     sc.classList.add("open");
     sc.setAttribute("aria-hidden", "false");
     document.body.classList.add("lock");
     directory.inert = terminal.inert = true;
     sheet.scrollTop = 0;
     closeButton.focus({ preventScroll: true });
     if (nativeShared) title.style.viewTransitionName = "alfred-app";
   } else {
     directory.inert = terminal.inert = false;
     sc.classList.remove("open");
     sc.setAttribute("aria-hidden", "true");
     document.body.classList.remove("lock");
     if (opener instanceof HTMLElement || opener instanceof SVGElement) {
       if (opener !== document.body) opener.focus({ preventScroll: true });
     }
     if (nativeShared) mark.style.viewTransitionName = "alfred-app";
     source = opener = null;
   }
   selection = name;
 }

 if (!animate || motionPreference.matches) {
   update();
   namedSource?.style.removeProperty("view-transition-name");
   title.style.removeProperty("view-transition-name");
   delete root.dataset.alfredMotion;
   return;
 }

 if (document.startViewTransition && (!shared || nativeShared)) {
   namedSource = mark;
   root.dataset.alfredMotion = opening ? "enter" : "return";
   if (nativeShared) (opening ? mark : title).style.viewTransitionName = "alfred-app";
   transition = document.startViewTransition(update);
   transition.ready.catch(() => {});
   transition.finished.finally(() => {
     if (revision !== renderRevision) return;
     mark?.style.removeProperty("view-transition-name");
     title.style.removeProperty("view-transition-name");
     delete root.dataset.alfredMotion;
     transition = null;
   }).catch(() => {});
   return;
 }

 const before = opening ? rect : title.getBoundingClientRect();
 update();
 mark?.style.removeProperty("view-transition-name");
 title.style.removeProperty("view-transition-name");
 const surface = opening ? sc.querySelector(".veil") : directory;
 const surfaceAnimation = surface.animate(
   [{ opacity: opening ? 0 : .55, transform: opening ? "scale(1.008)" : "scale(.992)" },
    { opacity: opening ? .85 : 1, transform: "none" }],
   { duration, easing }
 );
 fallback.push(surfaceAnimation);
 if (shared) {
   const target = opening ? title : mark;
   const after = target.getBoundingClientRect();
   if (before.width && before.height && after.width && after.height) {
     fallback.push(target.animate([
       { transformOrigin: "0 0", transform: "translate(" + (before.left - after.left) + "px," +
         (before.top - after.top) + "px) scale(" + (before.width / after.width) + "," +
         (before.height / after.height) + ")", opacity: .72 },
       { transformOrigin: "0 0", transform: "none", opacity: 1 }
     ], { duration, easing }));
   }
 }
 surfaceAnimation.finished.finally(() => {
   if (revision === renderRevision) delete root.dataset.alfredMotion;
 }).catch(() => {});
}

function openSC(name, trigger) {
 const current = appFromLocation();
 if (closing || !ORDER.includes(name)) return;
 if (APPS[name].direct) { location.assign(APPS[name].url); return; }
 if (name === current) return;
 if (current) history.replaceState(history.state, "", "#" + name);
 else history.pushState({ alfredDirectory: true }, "", "#" + name);
 setApplication(name, trigger);
}

function closeSC() {
 if (closing || !appFromLocation()) return;
 if (history.state?.alfredDirectory) {
   closing = true;
   history.back();
 }
 else {
   history.replaceState(null, "", location.pathname + location.search);
   setApplication(null);
 }
}

addEventListener("popstate", () => {
 closing = false;
 if (pal.classList.contains("open")) closePal();
 setApplication(appFromLocation());
});
motionPreference.addEventListener("change", () => {
 if (!motionPreference.matches) return;
 transition?.skipTransition();
 fallback.forEach((animation) => animation.cancel());
});
closeButton.onclick = closeSC;

document.querySelectorAll("[data-open]").forEach((element) => {
 const name = element.dataset.open;
 if (element.localName !== "a") element.addEventListener("click", () => openSC(name, element));
 if (element.localName !== "button" && element.localName !== "a") element.addEventListener("keydown", (event) => {
   if (event.key !== "Enter" && event.key !== " ") return;
   event.preventDefault();
   openSC(name, element);
 });
 element.addEventListener("mouseenter", () => light(name, true));
 element.addEventListener("mouseleave", () => light(name, false));
});

function animateHandoff(surface, returning) {
 if (motionPreference.matches) return;
 surface.animate(
   returning ? [{ opacity: .65, transform: "translateY(5px)" }, { opacity: 1, transform: "none" }]
     : [{ opacity: 1, transform: "none" }, { opacity: .55, transform: "translateY(2px)", offset: .35 },
        { opacity: 1, transform: "none" }],
   { duration: 270, easing: getComputedStyle(document.documentElement).getPropertyValue("--alfred-ease").trim() }
 );
}

document.getElementById("launch-links").addEventListener("click", (event) => {
 const link = event.target.closest("a");
 if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || motionPreference.matches) return;
 animateHandoff(link, false);
 try { sessionStorage.setItem(handoffKey, selection); } catch { /* Navigation can proceed without storage. */ }
});

function returnFromApplication() {
 if (document.hidden || !appFromLocation()) return;
 try {
   if (sessionStorage.getItem(handoffKey) !== appFromLocation()) return;
   sessionStorage.removeItem(handoffKey);
 } catch { return; }
 animateHandoff(document.getElementById("launch-links"), true);
}

addEventListener("pageshow", returnFromApplication);
document.addEventListener("visibilitychange", returnFromApplication);
setApplication(appFromLocation(), null, false);
var out=document.getElementById("tout"),tin=document.getElementById("tin");
function say(text){var d=document.createElement("div");d.textContent="ALFRED // "+text;out.appendChild(d);while(out.children.length>5)out.removeChild(out.firstChild);out.scrollTop=out.scrollHeight}
function run(raw){var cmd=raw.trim().toLowerCase();if(!cmd)return;var found=ORDER.find(function(k){return cmd===k||cmd==="open "+k||cmd===APPS[k].name.toLowerCase()||cmd==="open "+APPS[k].name.toLowerCase()});if(found){openSC(found);return}if(cmd==="apps"||cmd==="atlas"){closeSC();document.getElementById("atlas").scrollIntoView({behavior:RM?"auto":"smooth"});return}if(cmd==="arrive"||cmd==="replay"){replayArrival();return}if(cmd==="network"){setNet(!on);say("The backdrop is now "+(on?"alive.":"at rest."));return}if(cmd==="clear"){out.innerHTML="";return}say("Find a destination: open real estate portfolio · divergent capital · ai company os · apps · network · replay. This is local navigation.")}
tin.addEventListener("keydown",function(e){if(e.key==="Enter"){run(tin.value);tin.value=""}});
var pal=document.getElementById("pal"),pin=document.getElementById("pin"),plist=document.getElementById("plist"),sel=0,vis=[],paletteLast=null;
var CMDS=ORDER.map(function(k){return[APPS[k].name.toLowerCase(),APPS[k].n+" · "+APPS[k].kind]}).concat([["apps","Return to atlas"],["replay","The way in"],["network","Toggle backdrop"]]);
function rp(){var q=pin.value.trim().toLowerCase();vis=CMDS.filter(function(c){return!q||c[0].includes(q)});sel=Math.min(sel,Math.max(0,vis.length-1));plist.innerHTML="";vis.forEach(function(c,i){var b=document.createElement("button");b.className="pitem"+(i===sel?" sel":"");var label=document.createElement("span");label.textContent="❯ "+c[0];var hint=document.createElement("span");hint.className="h";hint.textContent=c[1];b.append(label,hint);b.onclick=function(){closePal();run(c[0])};plist.appendChild(b)});if(!vis.length){var empty=document.createElement("p");empty.className="note";empty.textContent="No destination matches that search.";plist.appendChild(empty)}}
function closePal(){pal.classList.remove("open");pal.setAttribute("aria-hidden","true");if(paletteLast)paletteLast.focus()}
function openPal(){paletteLast=document.activeElement;pal.classList.add("open");pal.setAttribute("aria-hidden","false");pin.value="";sel=0;rp();pin.focus()}
pal.setAttribute("aria-hidden","true");document.getElementById("palbtn").onclick=openPal;pin.addEventListener("input",function(){sel=0;rp()});pin.addEventListener("keydown",function(e){if(e.key==="ArrowDown"){e.preventDefault();sel=Math.min(sel+1,vis.length-1);rp()}else if(e.key==="ArrowUp"){e.preventDefault();sel=Math.max(0,sel-1);rp()}else if(e.key==="Enter"&&vis[sel]){var cmd=vis[sel][0];closePal();run(cmd)}});pal.addEventListener("click",function(e){if(e.target===pal)closePal()});
addEventListener("keydown",function(e){if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();pal.classList.contains("open")?closePal():openPal();return}if(e.key==="Escape"){if(pal.classList.contains("open"))closePal();else if(sc.classList.contains("open"))closeSC();else endArrival();return}if(/^[1-6]$/.test(e.key)&&!sc.classList.contains("open")&&!pal.classList.contains("open")&&document.activeElement.tagName!=="INPUT"){openSC(ORDER[+e.key-1], sourceTitle(ORDER[+e.key-1])?.closest("[data-open]"));return}if(e.key==="Tab"){var active=pal.classList.contains("open")?pal:sc.classList.contains("open")?sc:null;if(active){var focusable=Array.from(active.querySelectorAll('button,a[href],input')).filter(function(el){return el.getClientRects().length});var first=focusable[0],lastItem=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();lastItem.focus()}else if(!e.shiftKey&&document.activeElement===lastItem){e.preventDefault();first.focus()}}}});
document.getElementById("sealbtn").onclick=replayArrival;
setTimeout(function(){say("Select an application or open the command palette.")},200);
})();
