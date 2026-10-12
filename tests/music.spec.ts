import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {readFileSync} from 'node:fs';
const playlists: {chapter:number;name:string;id:string;url:string}[]=JSON.parse(readFileSync(new URL('../src/playlists.json',import.meta.url),'utf8'));

test('printed URL, complete soundtrack, navigation, persistence and languages', async ({page}, info) => {
 const errors: string[] = [];
 page.on('pageerror', e => errors.push(e.message));
 // UI tests do not depend on Spotify availability or account state.
 await page.route('https://open.spotify.com/embed/**', route => route.fulfill({contentType:'text/html',body:'<!doctype html><html lang="es"><title>Spotify test frame</title><body>Player boundary</body></html>'}));
 // Pages redirects directory URLs to a trailing slash; Vite preview does not.
 await page.goto(process.env.PUBLIC_URL ? './musica' : './musica/');
 await expect(page).toHaveURL(/#\/musica$/);
 await expect(page.locator('h1')).toHaveText('Escucha el silencio.');
 await expect(page).toHaveTitle('Experiencia sonora · ARCA-∅');
 const select=page.getByRole('combobox',{name:'Seleccionar capítulo'});
 await expect(select.locator('option')).toHaveCount(30);
 await expect(select).toHaveValue('0');
 await expect(page.getByRole('button',{name:'Capítulo anterior'})).toBeDisabled();
 await expect(page.locator('.sound-player iframe')).toHaveCount(0);
 const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
 expect(axe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))).toEqual([]);
 await page.getByRole('button',{name:'Cargar reproductor de Spotify'}).click();
 const iframe=page.locator('.sound-player iframe');
 for(const playlist of playlists){
  await select.selectOption(String(playlist.chapter));
  await expect(iframe).toHaveCount(1);
  await expect(iframe).toHaveAttribute('src',`https://open.spotify.com/embed/playlist/${playlist.id}?theme=0`);
  await expect(page.getByRole('link',{name:'Abrir en Spotify'})).toHaveAttribute('href',playlist.url);
 }
 await expect(page.getByRole('button',{name:'Capítulo siguiente'})).toBeDisabled();
 await page.getByRole('button',{name:'Capítulo anterior'}).click();
 await expect(select).toHaveValue('28');
 await page.getByRole('button',{name:'Capítulo siguiente'}).click();
 await expect(select).toHaveValue('29');
 await select.selectOption('12');
 const previousFrame=await iframe.elementHandle();
 await page.getByRole('button',{name:'Capítulo siguiente'}).click();
 expect(await previousFrame!.evaluate(el=>el.isConnected)).toBe(false);
 await expect(page.getByRole('status')).toHaveText('Capítulo 13');
 await page.reload();
 await expect(select).toHaveValue('13');
 await expect(iframe).toHaveCount(0);
 await page.getByRole('button',{name:'EN',exact:true}).click();
 await expect(page.locator('h1')).toHaveText('Listen to the silence.');
 await expect(page.getByRole('combobox',{name:'Select chapter'})).toHaveValue('13');
 await expect(page.locator('.clock time')).toHaveText(/\d{2}:\d{2}:\d{2}/);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 expect(errors).toEqual([]);
 await page.screenshot({path:`test-results/music-${info.project.name}.png`,fullPage:true});
 await page.getByRole('button',{name:'Load Spotify player'}).click();
 await page.locator('.brand').click();
 await expect(iframe).toHaveCount(0);
});

test('chapter selection works when local storage is unavailable',async({page})=>{
 await page.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage unavailable')}}));
 await page.goto('./#/musica');
 await page.getByRole('combobox',{name:'Seleccionar capítulo'}).selectOption('12');
 await expect(page.getByRole('status')).toHaveText('Capítulo 12');
 await page.getByRole('button',{name:'Capítulo siguiente'}).click();
 await expect(page.getByRole('status')).toHaveText('Capítulo 13');
});
