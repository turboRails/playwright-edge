// example.js
import { chromium } from 'playwright';

(async () => {
    const context = await chromium.launchPersistentContext('C:\\Users\\upend\\AppData\\Local\\Microsoft\\Edge\\User Data\\Profile 2',{
        channel: 'msedge',
        headless: false,
        args: ['--no-sandbox',
            '--profile-directory=Profile 2']
    });
    // const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.microsoft.com/edge');
    await page.screenshot({ path: 'example.png' });

    await context.close();
})();