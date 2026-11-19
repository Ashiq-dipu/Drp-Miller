const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function getSec3() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://gifted-attributes-102830.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  const data = await page.evaluate(() => {
    const sec = Array.from(document.querySelectorAll('div, section')).find(d => d.innerText && d.innerText.includes('Sixty-four people worth the flight'));
    return sec ? sec.innerText.substring(0, 1500) : 'not found';
  });

  console.log('Section 3:', data);
  await browser.close();
}

getSec3();

