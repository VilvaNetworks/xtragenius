import { test, expect } from '@playwright/test';

test('desktop homepage renders, filters programmes and opens learning pathways', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewportSize({ width:1440, height:1000 });
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('The potential');
  await expect(page.locator('.course-card')).toHaveCount(6);
  await page.getByRole('button', { name:'Future skills', exact:true }).click();
  await expect(page.locator('.course-card')).toHaveCount(2);
  await page.getByRole('button', { name:'Explore Robotics & AI for Kids' }).click();
  await expect(page.locator('dialog')).toBeVisible();
  await expect(page.locator('dialog h2')).toHaveText('Robotics & AI for Kids');
  await expect(page.locator('dialog')).toContainText('Partner educators are being onboarded');
  await page.keyboard.press('Escape');
  await expect(page.locator('dialog')).not.toBeVisible();
  expect(errors).toEqual([]);
});

test('enquiry prepares a download and clearly states it is not a live submission', async ({ page }) => {
  await page.goto('/');
  await page.locator('.header-cta').click();
  await page.getByLabel('Your name', {exact:true}).fill('Test Parent');
  await page.getByLabel('Email address').fill('parent@example.com');
  await page.getByLabel('Child’s age').selectOption('7–9 years');
  await page.getByRole('button', {name:'Prepare my enquiry'}).click();
  await expect(page.locator('dialog h2')).toHaveText('Your enquiry is ready.');
  await expect(page.locator('dialog')).toContainText('Your details have not been sent or stored.');
  const downloadEvent = page.waitForEvent('download');
  await page.getByRole('link', {name:'Download enquiry summary'}).click();
  expect((await downloadEvent).suggestedFilename()).toBe('xtragenius-enquiry.txt');
});

test('carousel, sculpture tabs and motion controls work', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-shape="2"]').click();
  await expect(page.locator('[data-shape="2"]')).toHaveAttribute('aria-pressed','true');
  await expect(page.locator('.caption-index')).toHaveText('FIG. 03');
  await page.locator('#motion-toggle').click();
  await expect(page.locator('#motion-toggle')).toHaveAttribute('aria-pressed','false');
  await page.locator('#banner-next').click();
  await expect(page.locator('#banner-number')).toHaveText('02 / 04');
  await page.locator('#banner-action').click();
  await expect(page.locator('dialog h2')).toHaveText('Let’s shape what’s next.');
  await expect(page.getByLabel('Institute / teaching specialism')).toBeVisible();
});

test('mobile navigation, layout, and reduced motion', async ({ page }) => {
  await page.setViewportSize({width:390,height:844});
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('/');
  await expect(page.locator('#motion-toggle')).toHaveAttribute('aria-pressed','false');
  await page.getByRole('button',{name:'Open navigation'}).click();
  await expect(page.locator('#navigation')).toBeVisible();
  await page.locator('#navigation').getByRole('link',{name:'Our approach'}).click();
  await expect(page.locator('.menu-toggle')).toHaveAttribute('aria-expanded','false');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
  await page.locator('[data-skill="0"]').click();
  await expect(page.locator('dialog')).toContainText('A little more focus.');
  await page.locator('dialog').getByRole('button',{name:'Abacus & Mental Maths',exact:false}).click();
  await expect(page.locator('dialog h2')).toHaveText('Abacus & Mental Maths');
});

test('responsive widths remain contained and the sculpture renders', async ({ page }) => {
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('/');
  for(const width of [320,390,768,1024,1440]) {
    await page.setViewportSize({width,height:1000});
    await page.evaluate(()=>document.fonts.ready);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth), `Overflow at ${width}px`).toBeTruthy();
  }
  await expect.poll(()=>page.locator('canvas').evaluate(c=>{
    const data=c.getContext('2d').getImageData(0,0,c.width,c.height).data;
    let pixels=0;for(let i=3;i<data.length;i+=4)if(data[i]>100)pixels++;
    return pixels;
  })).toBeGreaterThan(10000);
});
