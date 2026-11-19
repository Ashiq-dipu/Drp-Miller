const puppeteer = require('puppeteer-core');
const path = require('path');

async function captureLocal() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  const s1 = path.join(__dirname, 'local_view_1.png');
  await page.screenshot({ path: s1 });
  console.log('Local view 1 saved:', s1);

  await page.evaluate(() => window.scrollBy(0, 900));
  await new Promise(r => setTimeout(r, 1000));
  const s2 = path.join(__dirname, 'local_view_2.png');
  await page.screenshot({ path: s2 });
  console.log('Local view 2 saved:', s2);

  await browser.close();
}

captureLocal();

