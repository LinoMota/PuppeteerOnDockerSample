const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: [
            ' --no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage'
        ],
        executablePath: 'google-chrome-stable'
    });

    const browserVersion = await browser.version()
    
    console.log(`Started ${browserVersion}`)
    console.log("PUPPETEER ESTÁ FUNCIONANDO")

    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();