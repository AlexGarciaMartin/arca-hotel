import { defineConfig, devices } from '@playwright/test';
import fs from 'node:fs';
const config=JSON.parse(fs.readFileSync(new URL('./site.config.json',import.meta.url),'utf8'));
export default defineConfig({testDir:'./tests',timeout:60000,retries:1,workers:2,reporter:[['list'],['html',{open:'never'}]],use:{baseURL:process.env.PUBLIC_URL||`http://127.0.0.1:4173${config.basePath}`,locale:'es-ES',trace:'retain-on-failure'},webServer:process.env.PUBLIC_URL?undefined:{command:'npm run preview -- --port 4173',url:`http://127.0.0.1:4173${config.basePath}`,reuseExistingServer:false},projects:[{name:'mobile',use:{...devices['iPhone 13'],defaultBrowserType:'chromium'}},{name:'desktop',use:{viewport:{width:1440,height:1000}}}]});
