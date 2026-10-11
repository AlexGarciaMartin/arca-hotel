import fs from 'node:fs';
for (const file of fs.readdirSync('public/images')) {
 const b=fs.readFileSync('public/images/'+file);
 if(b.length<32 || b.toString('ascii',0,4)!=='RIFF' || b.toString('ascii',8,12)!=='WEBP') throw new Error('Invalid WebP asset: '+file);
}
const c=JSON.parse(fs.readFileSync('site.config.json','utf8'));
const root=c.siteOrigin.replace(/\/$/,'')+c.basePath;
let html=fs.readFileSync('dist/index.html','utf8').replaceAll('__OG_IMAGE__',root+'images/og-1600.webp').replaceAll('__SITE_URL__',root);
fs.writeFileSync('dist/index.html',html);
fs.writeFileSync('dist/404.html',html.replace('<head>','<head><script>if(!location.hash)location.replace('+JSON.stringify(c.basePath+'#/404')+');</script>'));
fs.writeFileSync('dist/robots.txt','User-agent: *\nAllow: /\nSitemap: '+root+'sitemap.xml\n');
fs.writeFileSync('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>'+root+'</loc></url></urlset>');
