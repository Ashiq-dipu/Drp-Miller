const puppeteer = require('puppeteer-core');

async function launchLive() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false,
    defaultViewport: null,
    args: [
      '--start-maximized',
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');

  const page2 = await browser.newPage();
  await page2.goto('https://gifted-attributes-102830.framer.app/');

  // Keep open indefinitely until user closes the window
  await new Promise(r => browser.on('disconnected', r));
}

launchLive().catch(e => console.error('Launch error:', e));
