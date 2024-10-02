# Test Browser

A simple setup to test your web application across different browsers using Playwright.

## Prerequisites

Before you begin, make sure you have Node.js version 20.17.0 installed.

### Install Node.js 20.17.0

You can download and install Node.js 20.17.0 from the [official Node.js site](https://nodejs.org/en/). Make sure it's set as your active version if you're using a version manager like `nvm`.

To check if you have Node.js 20.17.0 installed:

# Available Commands

Test in Safari (WebKit)

```bash
npm run test:safari
```


## Example: Browser Test with Playwright

Here is an example Playwright test script to help you test browser functionality:

```javascript
import { test } from '@playwright/test';

test('test browser', async ({ page }) => {
  // Point this to wherever you want
  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select');

  // Keep browser open
  await page.pause();
});
```

## Important Message

Playwright is a powerful tool for cross-browser testing, enabling developers to test their websites in multiple browsers, including Safari, without needing a physical macOS device. This is particularly beneficial for Windows users, as it eliminates the need for costly solutions or complicated setups. Playwright allows for seamless emulation of WebKit, ensuring sites are compatible across different platforms and enhancing the overall testing process.
