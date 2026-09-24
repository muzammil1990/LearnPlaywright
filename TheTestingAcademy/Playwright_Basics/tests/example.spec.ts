import { test, expect } from '@playwright/test';

/*test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});*/

test('verify the title will be TTA cart', async ({ page }) => {
  // await page.goto('https://playwright.dev/');

  // // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();


  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await expect(page).toHaveTitle("TTACart - Login"); // assertion - expect
  await page.waitForTimeout(5000);

});
