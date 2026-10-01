import { test, expect } from '@playwright/test';

test('hydrates with extension markers injected before application scripts load', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.addInitScript(() => {
    document.addEventListener('xtragenius:hydrated', () => { window.appHydrated = true; });
  });

  // Hold the application scripts until the extension has marked the SSR DOM.
  let releaseScripts;
  const scriptsReady = new Promise(resolve => { releaseScripts = resolve; });
  await page.route('**/_next/**/*.js*', async route => {
    await scriptsReady;
    await route.continue();
  });
  await page.goto('/', { waitUntil: 'commit' });
  try {
    await page.waitForFunction(() => document.querySelector('.course-card'));
    await page.evaluate(() => {
      document.querySelectorAll('div').forEach(element => element.setAttribute('bis_skin_checked', '1'));
    });
    expect(await page.locator('[bis_skin_checked]').count()).toBeGreaterThan(20);
  } finally {
    releaseScripts();
  }

  await page.waitForFunction(() => window.appHydrated === true);
  await page.getByRole('button', { name: 'Future skills', exact: true }).click();
  await expect(page.locator('.course-card')).toHaveCount(2);
  await expect(page.locator('[bis_skin_checked]')).toHaveCount(0);
  await page.getByRole('button', { name: 'Explore Robotics & AI for Kids' }).click();
  await expect(page.locator('dialog')).toBeVisible();
  expect(errors).toEqual([]);
});
