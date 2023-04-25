import { test, expect } from '@playwright/test';

test('Check button performance', async ({ page }) => {
  const client = await page.context().newCDPSession(page);
  // Tell the devtools session ro record performance metrics
  await client.send('Performance.enable');

  await page.goto('/button', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/A Button/);
  await expect(page.locator('.basicbutton')).toBeVisible();
  const metrics = await client.send('Performance.getMetrics') as { metrics: { name: string; value: number; }[] };
  const processTimeMetric = metrics.metrics.find(metric => metric.name === 'ProcessTime');
  const jsheaptotalsize = metrics.metrics.find(metric => metric.name === 'JSHeapTotalSize');
  console.log('Process Time: ' + processTimeMetric?.value + ' Seconds');
  if (jsheaptotalsize) {
    const jsheapmb = jsheaptotalsize.value / (1024 * 1024);
    console.log('JSHeapTotalSize: ' + jsheapmb.toFixed(2) + ' MB');
  }
  expect(processTimeMetric?.value).toBeLessThan(1);
  expect(jsheaptotalsize?.value).toBeLessThan(95000000);
});

test('Check buttons performance', async ({ page }) => {
  const client = await page.context().newCDPSession(page);
  // Tell the devtools session ro record performance metrics
  await client.send('Performance.enable');

  await page.goto('/buttons', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/A Button/);
  await expect(page.locator('.basicbutton-outlined')).toBeVisible();
  await expect(page.locator('.basicbutton-filled')).toBeVisible();
  await expect(page.locator('.basicbutton-text')).toBeVisible();
  const metrics = await client.send('Performance.getMetrics') as { metrics: { name: string; value: number; }[] };
  const processTimeMetric = metrics.metrics.find(metric => metric.name === 'ProcessTime');
  const jsheaptotalsize = metrics.metrics.find(metric => metric.name === 'JSHeapTotalSize');
  console.log('Process Time: ' + processTimeMetric?.value + ' Seconds');
  if (jsheaptotalsize) {
    const jsheapmb = jsheaptotalsize.value / (1024 * 1024);
    console.log('JSHeapTotalSize: ' + jsheapmb.toFixed(2) + ' MB');
  }
  expect(processTimeMetric?.value).toBeLessThan(1);
  expect(jsheaptotalsize?.value).toBeLessThan(95200000);
});