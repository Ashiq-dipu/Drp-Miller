const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function getSection2() {
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
    // Find all sections or elements with class starting with ms
    const sec1 = document.querySelector('.framer-1vhsw02') || Array.from(document.querySelectorAll('div')).find(d => d.innerText && d.innerText.includes('Three days. One room.'));
    return {
      text: sec1 ? sec1.innerText.substring(0, 1000) : 'not found',
      html: sec1 ? sec1.outerHTML.substring(0, 2000) : 'not found'
    };
  });

  console.log('Section 2:', data.text);
  await browser.close();
}

getSection2();

