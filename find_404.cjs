const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  page.on('response', resp => {
    if (resp.status() >= 400) console.log('ERROR RESP:', resp.status(), resp.url());
  });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  await browser.close();
})();

