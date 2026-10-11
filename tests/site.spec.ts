import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const routes=['/','/el-arca','/aurora','/suites','/gastronomia','/bienestar','/expeditions','/galeria','/como-llegar','/reservas','/equipo','/legal'];
for(const route of routes){test(`route ${route}`,async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('./#'+route);await expect(page.locator('h1')).toBeVisible();
 await page.evaluate(async()=>{for(const img of document.querySelectorAll('img')){img.loading='eager';await img.decode().catch(()=>{});}});
 expect(await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!(i as HTMLImageElement).naturalWidth).map(i=>(i as HTMLImageElement).src))).toEqual([]);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1)).toBeTruthy();
 expect(errors).toEqual([]);
 const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
 expect(axe.violations.map(v=>({id:v.id,description:v.description,nodes:v.nodes.map(n=>n.target)}))).toEqual([]);
 await page.reload();await expect(page.locator('h1')).toBeVisible();
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
