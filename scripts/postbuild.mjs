import fs from 'node:fs';
const playlists=JSON.parse(fs.readFileSync('src/playlists.json','utf8'));
if(playlists.length!==30 || new Set(playlists.map(p=>p.id)).size!==30 || playlists.some((p,i)=>p.chapter!==i || !/^[a-zA-Z0-9]{22}$/.test(p.id) || p.url!==`https://open.spotify.com/playlist/${p.id}` || p.name!==`Arca-∅ · ${i===0?'Prólogo':`Capítulo ${String(i).padStart(2,'0')}`}`)) throw new Error('Soundtrack must contain a unique, named Spotify playlist for the prologue and chapters 01–29.');
for (const file of fs.readdirSync('public/images')) {
 const b=fs.readFileSync('public/images/'+file);
 if(b.length<32 || b.toString('ascii',0,4)!=='RIFF' || b.toString('ascii',8,12)!=='WEBP') throw new Error('Invalid WebP asset: '+file);
}
const c=JSON.parse(fs.readFileSync('site.config.json','utf8'));
const root=c.siteOrigin.replace(/\/$/,'')+c.basePath;
const imageQuery='?v='+c.imageRevision;
let html=fs.readFileSync('dist/index.html','utf8').replaceAll('__OG_IMAGE__',root+'images/og-1600.webp'+imageQuery).replaceAll('__SITE_URL__',root);
const heroSet=[480,960,1600].map(w=>`${c.basePath}images/hero-${w}.webp${imageQuery} ${w}w`).join(', ');
const fonts=fs.readdirSync('dist/assets').filter(f=>/^(cormorant-garamond|manrope)-latin-400-normal.*\.woff2$/.test(f));
html=html.replace('</head>',`<link rel="preload" as="image" href="${c.basePath}images/hero-960.webp${imageQuery}" imagesrcset="${heroSet}" imagesizes="100vw" fetchpriority="high">${fonts.map(f=>`<link rel="preload" as="font" type="font/woff2" href="${c.basePath}assets/${f}" crossorigin>`).join('')}</head>`);
fs.writeFileSync('dist/index.html',html);
fs.writeFileSync('dist/404.html',html.replace('<head>','<head><script>if(!location.hash)location.replace('+JSON.stringify(c.basePath+'#/404')+');</script>'));
fs.writeFileSync('dist/robots.txt','User-agent: *\nAllow: /\nSitemap: '+root+'sitemap.xml\n');
fs.writeFileSync('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>'+root+'</loc></url></urlset>');

// Stable printed-book address, independent of the hash router.
fs.mkdirSync('dist/musica',{recursive:true});
fs.writeFileSync('dist/musica/index.html', '<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Experiencia sonora · ARCA-∅</title><meta http-equiv="refresh" content="0;url='+c.basePath+'#/musica"><script>location.replace('+JSON.stringify(c.basePath+'#/musica')+');</script></head><body><a href="'+c.basePath+'#/musica">Experiencia sonora · ARCA-∅</a></body></html>');
