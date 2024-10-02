import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select')

  // keep browser open
  await page.pause()
})
