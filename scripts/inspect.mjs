import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
await mkdir('artifacts', {recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
await page.goto('http://127.0.0.1:3000');
await page.waitForTimeout(2000);
await page.screenshot({path:'artifacts/home-desktop.png'});
console.log('Images:',await page.locator('img').evaluateAll(imgs=>imgs.map(i=>({src:i.src,loaded:i.complete&&i.naturalWidth>0}))));
await page.evaluate(()=>document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible')));
await page.locator('#legacy').scrollIntoViewIfNeeded();
await page.waitForFunction(()=>[...document.images].every(img=>img.complete && img.naturalWidth>0));
await page.evaluate(()=>window.scrollTo(0,0));
await page.screenshot({path:'artifacts/home-full.png',fullPage:true});
await page.setViewportSize({width:390,height:844});
await page.goto('http://127.0.0.1:3000');
await page.waitForTimeout(1000);
await page.screenshot({path:'artifacts/home-mobile.png'});
try {
  await page.setViewportSize({width:1440,height:1000});
  await page.goto('https://shapeofintelligence.com/',{waitUntil:'domcontentloaded',timeout:30000});
  await page.screenshot({path:'artifacts/reference.png'});
  await writeFile('artifacts/reference.html',await page.content());
  console.log('Reference assets:',await page.locator('script[src],link[rel=stylesheet]').evaluateAll(els=>els.map(e=>e.src||e.href)));
} catch(error) {console.log('Reference inspection:',error.message);}
await browser.close();
