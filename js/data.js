// Normalised, index-backed store built from js/catalog.js (your OEM catalogue). Lookups stay O(1).
import {SUZUKI_CATALOG as C} from './catalog.js';
export const store={models:new Map(),parts:new Map(),tasks:new Map(),byModel:new Map()};
export const addModel=m=>{store.models.set(m.id,m);if(!store.byModel.has(m.id))store.byModel.set(m.id,new Set());return m};
export const addPart=p=>store.parts.set(p.id,p);
export const addTask=t=>{store.tasks.set(t.id,t);for(const mid of t.models==='*'?store.models.keys():t.models)store.byModel.get(mid)?.add(t.id)};
export const tasksFor=mid=>[...(store.byModel.get(mid)||[])].map(id=>store.tasks.get(id));
export const importBulk=({models=[],parts=[],tasks=[]})=>{models.forEach(addModel);parts.forEach(addPart);tasks.forEach(addTask)};
export const loadCatalog=j=>{try{importBulk(typeof j==='string'?JSON.parse(j):j);return true}catch{return false}};
export const DEFAULT_SHOP=C.meta.shopBaseUrl+'{pn}';
export const CATALOG_VERSION=C.meta.version;
export const DISCLAIMERS=C.meta.disclaimers||[];

const ALIAS={'swift-dzire-2023-2026':['swift','dzire'],'spresso-2023-2026':['s-presso','spresso']};
const HOURS={Filters:.3,Hardware:.2,Ignition:.8,Braking:1,Belts:1,Clutch:2};
const HEAVY=new Set(['carry-2023-2026','apv-2023-2026']);
const S=C.maintenanceSchedules;
for(const m of Object.values(C.models)){
  addModel({id:m.modelId,name:m.name,year:m.years[m.years.length-1],alias:ALIAS[m.modelId]||[m.modelId.split('-')[0]],engine:m.engine,platform:m.platformCode});
  const hv=HEAVY.has(m.modelId),oilKm=hv?S.heavyDutyServiceIntervalKm:S.standardServiceIntervalKm,oilMo=hv?S.heavyDutyServiceIntervalMonths:S.standardServiceIntervalMonths;
  const filt=m.parts.find(p=>/oil filter/i.test(p.name));
  const oid=m.modelId+':oil';
  addPart({id:oid,name:'Engine oil',pn:'—',spec:`${m.engine.oilViscosity}${m.engine.oilCapacityWithFilterLiters?`, ${m.engine.oilCapacityWithFilterLiters} L with filter`:''}`});
  addTask({id:m.modelId+':t-oil',name:'Engine oil change',part:oid,km:oilKm,months:oilMo,hours:HOURS.Filters+.5,models:[m.modelId],fluid:true,extra:filt?[filt.id]:[]});
  for(const p of m.parts){
    addPart({id:p.id,name:p.name,pn:p.partNumber,price:p.price||0,spec:p.notes,supersedes:p.supersedes,category:p.category});
    addTask({id:m.modelId+':'+p.id,name:p.name,part:p.id,km:p.changeIntervalKm,months:p.changeIntervalMonths,hours:HOURS[p.category]||.5,models:[m.modelId],fluid:false,extra:[]});
  }
}
