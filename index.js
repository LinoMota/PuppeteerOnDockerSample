const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: true,
    executablePath: "/usr/bin/chromium-browser",
  });

  const browserVersion = await browser.version();

  console.log(`Started ${browserVersion}`);
  console.log("PUPPETEER ESTÁ FUNCIONANDO");

  const page = await browser.newPage();

  await page.goto("https://twitter.com/Pesgrau/status/1508153765739868169", {
    waitUntil: "networkidle0",
  });
  const pdfConfig = {
    path: "./url.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      // Word's default A4 margins
      top: "2.54cm",
      bottom: "2.54cm",
      left: "2.54cm",
      right: "2.54cm",
    },
  };

  await page.emulateMediaType("screen");

  await page.screenshot({ path: "./example.png" });
  await page.pdf(pdfConfig);

  await browser.close();
})();
