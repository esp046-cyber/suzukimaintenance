import {store,tasksFor,loadCatalog,DEFAULT_SHOP,CATALOG_VERSION,DISCLAIMERS} from './data.js';
try{const c=localStorage.getItem('suzukicare.catalog');if(c)loadCatalog(c)}catch{}
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='suzukicare.v1';
const def={model:null,odo:0,rate:40,shop:'',accent:'#19e3ff',hc:false,haptics:true,done:{},streak:0,onboarded:false,since:Date.now()};
let S;try{S={...def,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{S={...def}}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch{}};
const buzz=(ms=12)=>{if(S.haptics)navigator.vibrate?.(ms)};
const MS=2629800000;
function status(t){const d=S.done[t.id]||{km:0,at:S.since};const pct=Math.max(0,Math.min(1.5,Math.max((S.odo-d.km)/t.km,(Date.now()-d.at)/MS/t.months)));
 return{pct,state:pct>=1?'due':pct>=.8?'soon':'ok'}}
const icon=k=>`<svg viewBox="0 0 24 24" aria-hidden="true">${{brake:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',cool:'<path d="M12 3v18M4 8l16 8M20 8L4 16"/>',cabin:'<rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 10h8M8 14h8"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',oil:'<path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10z"/>',filter:'<rect x="7" y="4" width="10" height="16" rx="3"/>',
 air:'<path d="M3 9h12a3 3 0 1 0-3-3M3 15h16a3 3 0 1 1-3 3"/>',plug:'<path d="M12 3v6m-3 0h6v4a3 3 0 0 1-6 0zm3 7v4"/>',batt:'<rect x="3" y="8" width="16" height="9" rx="2"/><path d="M21 11v3"/>'}[k]||'<circle cx="12" cy="12" r="8"/>'}</svg>`;
function render(){
 const r=document.documentElement;r.style.setProperty('--accent',S.accent);r.classList.toggle('hc',S.hc);
 const m=store.models.get(S.model);
 if(!m){$('#vitals').innerHTML='<h2 id="hVitals">Pick your Suzuki</h2><p class="muted">One tap and your schedule appears. No account needed.</p>';
  ['alerts','schedule','fluids','cost','compare','health'].forEach(i=>$('#'+i).innerHTML='<div class="skeleton"></div><div class="skeleton"></div>');$('#banner').hidden=true;return}
 const list=tasksFor(m.id).map(t=>({t,...status(t)})).sort((a,b)=>b.pct-a.pct);
 const due=list.filter(x=>x.state==='due'),soon=list.filter(x=>x.state==='soon');
 r.style.setProperty('--glow',due.length?'var(--bad)':soon.length?'var(--warn)':'var(--ok)');
 $('#vitals').innerHTML=`<h2 id="hVitals">${esc(m.year)} ${esc(m.name)}</h2><div class="big">${S.odo.toLocaleString()} <small class="muted">km</small></div><p class="muted">Care streak: <strong>${S.streak}</strong> on-time services</p>`;
 const b=$('#banner');b.hidden=!due.length;if(due.length)b.innerHTML=`<strong>${due.length} service${due.length>1?'s':''} overdue:</strong> ${due.map(x=>esc(x.t.name)).join(', ')}. Mark each done once serviced.`;
 $('#alerts').innerHTML=`<h2 id="hAlerts">Alerts</h2>`+(due.length+soon.length?[...due,...soon].map(x=>`<div class="item"><span></span><span>${esc(x.t.name)}</span><span class="tag ${x.state}">${x.state==='due'?'Overdue':'Due soon'}</span></div>`).join(''):'<p class="ok">All clear. Nothing due.</p>');
 $('#schedule').innerHTML=`<h2 id="hSched">Maintenance schedule</h2>`+list.map(({t,state})=>{const p=store.parts.get(t.part);return`<div class="item">${icon(t.part)}
  <span><strong>${esc(t.name)}</strong><br><span class="muted">Every ${t.km.toLocaleString()} km or ${t.months} mo · ${p.pn!=='—'?`Part <code>${esc(p.pn)}</code>`:esc(p.spec||'')}</span></span>
  <span class="row"><span class="tag ${state}">${state}</span><button class="pill ghost" data-done="${t.id}">Done</button>${p.pn!=='—'?`<button class="pill ghost" data-order="${esc(p.pn)}">Order</button>`:''}</span></div>`}).join('');
 $('#fluids').innerHTML=`<h2 id="hFluids">Fluid life</h2>`+list.filter(x=>x.t.fluid).map(({t,pct,state})=>{const life=Math.round(Math.max(0,1-pct)*100);
  return`<p>${esc(t.name)} <span class="muted">${life}% left</span></p><div class="bar ${state}" role="img" aria-label="${esc(t.name)} ${life}% life remaining"><i style="width:${life}%"></i></div>`}).join('');
 const total=list.filter(x=>x.state!=='ok').reduce((a,{t})=>a+[t.part,...t.extra].reduce((s,id)=>s+(store.parts.get(id)?.price||0),0)+t.hours*S.rate,0);
 $('#cost').innerHTML=`<h2 id="hCost">Estimated cost</h2><div class="big">$${total.toFixed(0)}</div><p class="muted">Items due or due soon: part prices (if in catalogue) plus ${S.rate}/h labour.</p>`;
 renderExtra();
}
function choose(id){S.model=id;save();render();$('#dlgVehicle').close();buzz()}
$('#modelList').innerHTML=[...store.models.values()].map(m=>`<button type="button" class="pill ghost" data-m="${m.id}">${esc(m.name)} ${m.year}</button>`).join('');
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;buzz();
 if(b.dataset.m)choose(b.dataset.m);
 if(b.dataset.done){const t=store.tasks.get(b.dataset.done);if(status(t).state!=='ok')S.streak++;S.done[t.id]={km:S.odo,at:Date.now()};save();render()}
 if(b.dataset.order){const tpl=S.shop||DEFAULT_SHOP;if(/^https:/.test(tpl))open(tpl.replace('{pn}',encodeURIComponent(b.dataset.order)),'_blank','noopener');
  else navigator.clipboard?.writeText(b.dataset.order).then(()=>alert('Part number copied. Add a parts shop URL in Settings to order directly.'),()=>{})}});
$('#btnVehicle').onclick=()=>$('#dlgVehicle').showModal();
$('#btnSettings').onclick=()=>{$('#odo').value=S.odo;$('#accent').value=S.accent;$('#rate').value=S.rate;$('#shop').value=S.shop;$('#hc').checked=S.hc;$('#haptics').checked=S.haptics;$('#dlgSettings').showModal()};
$('#dlgSettings').addEventListener('close',()=>{S.odo=Math.max(0,+$('#odo').value||0);S.accent=$('#accent').value;S.rate=Math.max(0,+$('#rate').value||0);S.shop=$('#shop').value.trim();S.hc=$('#hc').checked;S.haptics=$('#haptics').checked;save();$('#catMsg').textContent='Built-in catalogue v'+CATALOG_VERSION;$('#disc').innerHTML=DISCLAIMERS.map(d=>`<li>${esc(d)}</li>`).join('');render();notify(true)});
async function decode(vin){const msg=$('#vinMsg');if(!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin))return void(msg.textContent='Enter a valid 17-character VIN (no I, O or Q).');
 msg.textContent='Decoding…';try{const res=await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${vin}?format=json`);const v=(await res.json()).Results[0];
 msg.textContent=`${v.Make||'?'} ${v.Model||'?'} ${v.ModelYear||''}`;const hit=[...store.models.values()].find(m=>v.Model&&m.alias?.some(a=>v.Model.toLowerCase().includes(a)));
 if(hit)choose(hit.id);else msg.textContent+=' (not in catalogue yet, choose a model manually)'}catch{msg.textContent='VIN lookup needs a connection. Choose a model manually.'}}
$('#btnDecode').onclick=()=>decode($('#vin').value.trim().toUpperCase());
$('#btnScan').onclick=async()=>{const msg=$('#vinMsg');if(!('BarcodeDetector' in window)||!navigator.mediaDevices)return void(msg.textContent='Barcode scanning is not supported in this browser. Type the VIN instead.');
 try{const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}}),v=$('#cam');v.srcObject=s;v.hidden=false;await v.play();
 const det=new BarcodeDetector({formats:['code_39','code_128','data_matrix','qr_code']});const stop=()=>{s.getTracks().forEach(t=>t.stop());v.hidden=true};
 const tick=async()=>{if(v.hidden)return;try{const c=await det.detect(v);const raw=c.map(x=>x.rawValue).find(x=>x.length>=17);if(raw){stop();const vin=raw.slice(-17).toUpperCase();$('#vin').value=vin;return decode(vin)}}catch{}requestAnimationFrame(tick)};tick();$('#dlgVehicle').addEventListener('close',stop,{once:true})}
 catch{msg.textContent='Camera access was blocked. Allow it in browser settings or type the VIN.'}};
async function notify(quiet){try{if(!('Notification' in window))return;if(Notification.permission==='default'&&!quiet)await Notification.requestPermission();
 if(Notification.permission!=='granted'||!S.model)return;const d=tasksFor(S.model).filter(t=>status(t).state==='due');
 if(d.length){const reg=await navigator.serviceWorker?.ready;reg?.showNotification('Service overdue',{body:d.map(t=>t.name).join(', '),icon:'assets/icon.svg',tag:'due'})}}catch(e){console.warn(e)}}
$('#btnNotify').onclick=()=>notify(false);
const steps=['Pick your Suzuki with one tap, or scan your VIN.','Set your odometer in Settings so alerts stay accurate.','Tap Done after each service to keep your streak going.'];let si=0;
$('#obNext').onclick=()=>{si++;if(si>=steps.length){S.onboarded=true;save();$('#dlgOnboard').close()}else $('#obText').textContent=steps[si]};
function renderExtra(){
 const m=store.models.get(S.model);const ps=[...new Map(tasksFor(m.id).map(t=>[t.part,store.parts.get(t.part)])).values()].filter(Boolean);
 const opt=i=>ps.map((p,j)=>`<option value="${esc(p.id)}"${j===i?' selected':''}>${esc(p.name)}</option>`).join('');
 $('#compare').innerHTML=`<h2 id="hCompare">Compare parts</h2><div class="row"><select id="cA" aria-label="First part">${opt(0)}</select><select id="cB" aria-label="Second part">${opt(Math.min(1,ps.length-1))}</select></div><div class="scroll" id="cOut"></div>`;
 const draw=()=>{const a=store.parts.get($('#cA').value),b=store.parts.get($('#cB').value);if(!a||!b)return;const row=(l,f)=>`<tr><th scope="row">${l}</th><td>${esc(f(a))}</td><td>${esc(f(b))}</td></tr>`;
  $('#cOut').innerHTML=`<table class="cmp"><thead><tr><th></th><th>${esc(a.name)}</th><th>${esc(b.name)}</th></tr></thead><tbody>${row('Part no.',p=>p.pn)}${row('Price',p=>p.price?'$'+p.price:'Not listed')}${row('Replaces',p=>p.supersedes||'—')}${row('Spec',p=>p.spec||'Not set')}</tbody></table>`};
 $('#cA').onchange=$('#cB').onchange=draw;draw();
 const L=(S.batt||[]).filter(x=>x.m===m.id).sort((a,b)=>a.km-b.km);let svg='<p class="muted">No readings yet. Log your battery health % after each check.</p>';
 if(L.length){const W=300,H=110,mx=Math.max(...L.map(x=>x.km),1),pt=x=>`${10+(x.km/mx)*(W-20)},${H-10-(x.pct/100)*(H-20)}`;
  const last=L[L.length-1],drop=L.length>1?((L[0].pct-last.pct)/Math.max(1,last.km-L[0].km)*10000).toFixed(1):null;
  svg=`<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Battery health ${last.pct}% at ${last.km} km"><polyline points="${L.map(pt).join(' ')}" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linejoin="round"/>${L.map(x=>`<circle cx="${pt(x).split(',')[0]}" cy="${pt(x).split(',')[1]}" r="4" fill="var(--accent)"/>`).join('')}</svg><p>Latest <strong>${last.pct}%</strong>${drop!==null?` · ${drop} pts lost per 10,000 km`:''}</p>`}
 $('#health').innerHTML=`<h2 id="hHealth">Battery health</h2>${svg}<div class="row"><input id="bPct" type="number" min="0" max="100" aria-label="Battery health percent" placeholder="%"><button class="pill" id="bLog">Log reading</button></div>`;
 $('#bLog').onclick=()=>{const v=+$('#bPct').value;if(!(v>=0&&v<=100)||$('#bPct').value==='')return;(S.batt=S.batt||[]).push({m:m.id,km:S.odo,pct:v});save();render()};
}
async function pushSub(){const out=$('#pushOut');try{const k=$('#vapid').value.trim();if(!k)return void(out.textContent='Paste your VAPID public key first.');
 const reg=await navigator.serviceWorker.ready;const sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:Uint8Array.from(atob(k.replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0))});
 out.textContent=JSON.stringify(sub);}catch(e){out.textContent='Push setup failed: '+e.message}}
$('#btnPush').onclick=pushSub;
$('#catFile').onchange=async e=>{const f=e.target.files[0];if(!f)return;const t=await f.text();if(loadCatalog(t)){try{localStorage.setItem('suzukicare.catalog',t)}catch{}render();$('#catMsg').textContent='Catalogue imported.'}else $('#catMsg').textContent='Invalid JSON catalogue.'};
addEventListener('error',e=>console.error('Handled:',e.message));
render();notify(true);
if(!S.onboarded){$('#obText').textContent=steps[0];$('#dlgOnboard').showModal()}
if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
