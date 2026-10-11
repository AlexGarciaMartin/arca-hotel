import {readFileSync} from 'node:fs';
import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const routes=['/','/el-arca','/aurora','/suites','/gastronomia','/bienestar','/expeditions','/galeria','/como-llegar','/reservas','/equipo','/legal'];
for(const route of routes){test(`route ${route}`,async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 await page.goto('./#'+route);await expect(page.locator('h1')).toBeVisible();
 await page.evaluate(async()=>{for(const img of document.querySelectorAll('img')){img.loading='eager';await img.decode().catch(()=>{});}});
 expect(await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!(i as HTMLImageElement).naturalWidth).map(i=>(i as HTMLImageElement).src))).toEqual([]);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1)).toBeTruthy();
 expect(errors).toEqual([]);
 const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
 expect(axe.violations.map(v=>({id:v.id,description:v.description,nodes:v.nodes.map(n=>n.target)}))).toEqual([]);
 await page.reload();await expect(page.locator('h1')).toBeVisible();
 await expect(page.locator('.fund')).toHaveText('Un proyecto de');
 await expect(page.locator('.fund strong, .fund br')).toHaveCount(0);
 await expect(page.locator('body')).not.toContainText('[NOMBRE DEL FONDO]');
 const pageKeys=['home','arca','aurora','suites','dining','wellness','expeditions','gallery','arrival','reservations','team','legal'];
 const key=pageKeys[routes.indexOf(route)];
 const copies=JSON.parse(readFileSync(new URL('../src/locales/es.json',import.meta.url),'utf8'));
 const english=JSON.parse(readFileSync(new URL('../src/locales/en.json',import.meta.url),'utf8'));
 const compact=(s:string)=>s.replace(/\s+/g,' ').trim();
 await expect(page.locator('h1')).toHaveText(compact(copies[key].title));
 await page.getByRole('button',{name:'EN',exact:true}).click();
 await expect(page.locator('h1')).toHaveText(compact(english[key].title));
 await expect(page.locator('main')).toContainText(english[key].intro);
 await expect(page.locator('.fund')).toHaveText('A project by');
 await expect(page.locator('.clock time')).toHaveText(/\d{2}:\d{2}:\d{2}/);
 await expect(page.locator('.notice')).toContainText(english.notice.update);
 if(route==='/'||route==='/aurora')await expect(page.locator('.cam-status')).toContainText(english.aurora.camStatus);
 expect(errors).toEqual([]);
});}
test('language, menu, gallery, disabled reservations and 404',async({page})=>{
 await page.goto('./');await expect(page.locator('h1')).toContainText('Donde el tiempo');
 await page.getByRole('button',{name:'EN',exact:true}).click();await expect(page.locator('h1')).toContainText('Where time');
 await page.getByRole('button',{name:'Menu',exact:true}).click();await expect(page.locator('dialog.menu-dialog')).toBeVisible();
 await page.locator('dialog.menu-dialog').getByRole('link',{name:/Gallery/}).click();await expect(page.locator('h1')).toContainText('Chosen objects');
 await page.locator('.photo-grid button').first().click();await expect(page.locator('dialog.lightbox')).toBeVisible();await page.keyboard.press('Escape');
 await page.goto('./#/reservas');await expect(page.locator('fieldset')).toHaveAttribute('disabled','');for(const control of await page.locator('fieldset input, fieldset select, fieldset button').all())await expect(control).toBeDisabled();
 await page.goto('./#/nonexistent');await expect(page.locator('h1')).toContainText('taking longer');
});
test('visual captures',async({page},info)=>{await page.goto('./');await page.emulateMedia({reducedMotion:'reduce'});await page.evaluate(()=>document.fonts.ready);await page.evaluate(async()=>{await Promise.all([...document.images].map(async im=>{im.loading='eager';await im.decode().catch(()=>{});}));});await page.locator('.hero img').evaluate((im:HTMLImageElement)=>im.decode());await page.screenshot({path:`test-results/home-${info.project.name}.png`,fullPage:true});});

test('reservation access and suspension are visible on arrival',async({page})=>{
 await page.goto('./');
 const booking=page.locator('.hero-booking');
 await expect(page.locator('.reservation-link')).toBeVisible();
 await expect(booking).toContainText('Reservas suspendidas temporalmente');
 await expect(booking).toContainText('reembolsarán íntegramente');
 const box=await booking.boundingBox();expect(box).not.toBeNull();
 expect(box!.y+box!.height).toBeLessThanOrEqual(page.viewportSize()!.height);
 expect(box!.y).toBeGreaterThan(0);
 await booking.getByRole('link',{name:'Reservar',exact:false}).first().click();
 await expect(page).toHaveURL(/#\/reservas$/);
 await expect(page.locator('h1')).toContainText('Reservas suspendidas');
 for(const control of await page.locator('fieldset input, fieldset select, fieldset button').all())await expect(control).toBeDisabled();
});
