import { expect, test } from '@playwright/test'

test('portfolio homepage loads', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: /Hind Boufeligha/i }),
  ).toBeVisible()
})