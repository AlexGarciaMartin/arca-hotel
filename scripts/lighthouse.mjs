import lighthouse from 'lighthouse';
import {launch} from 'chrome-launcher';
import fs from 'node:fs';
const url=process.argv[2];
const chrome=await launch({chromeFlags:['--headless','--no-sandbox']});
try{
 const result=await lighthouse(url,{port:chrome.port,output:['json','html'],onlyCategories:['performance','accessibility','best-practices','seo']});
 fs.mkdirSync('audit',{recursive:true});fs.writeFileSync('audit/lighthouse.json',result.report[0]);fs.writeFileSync('audit/lighthouse.html',result.report[1]);
 const scores=Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,Math.round(v.score*100)]));console.log(JSON.stringify(scores));
 console.log('METRICS',JSON.stringify(Object.fromEntries(['first-contentful-paint','largest-contentful-paint','total-blocking-time','speed-index'].map(k=>[k,result.lhr.audits[k].displayValue]))));
 const trace=result.artifacts.Trace; fs.writeFileSync('audit/trace.json',JSON.stringify(trace)); console.log('LONG EVENTS',JSON.stringify(trace.traceEvents.filter(e=>e.ph==='X'&&e.dur>15000).sort((a,b)=>b.dur-a.dur).slice(0,25).map(e=>({name:e.name,duration:e.dur/1000,args:e.args}))));
 const failed=Object.entries(scores).filter(([,v])=>v<=90);if(failed.length)throw new Error('Lighthouse mobile scores must exceed 90: '+JSON.stringify(failed));
}finally{await chrome.kill()}
