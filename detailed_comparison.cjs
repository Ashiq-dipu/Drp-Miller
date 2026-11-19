const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function compare() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1000']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', msg => console.log('LOCAL LOG:', msg.type(), msg.text()));
  page.on('pageerror', err => console.error('LOCAL ERROR:', err.message));

  console.log('--- Loading Local Site ---');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0', timeout: 15000 });
  await page.screenshot({ path: 'local_current_hero.png' });

  // Get all section titles, heights, backgrounds on local
  const localSections = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section, header, footer')).map(el => ({
      tag: el.tagName,
      id: el.id,
      className: el.className,
      rect: el.getBoundingClientRect(),
      bg: window.getComputedStyle(el).backgroundColor,
      text: el.innerText.slice(0, 100)
    }));
  });
  console.log('Local sections count:', localSections.length);
  fs.writeFileSync('local_sections.json', JSON.stringify(localSections, null, 2));

  console.log('--- Loading Framer Reference Site ---');
  await page.goto('https://gifted-attributes-102830.framer.app/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'framer_current_hero.png' });

  const framerSections = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section, header, footer, [data-framer-name]')).map(el => ({
      tag: el.tagName,
      framerName: el.getAttribute('data-framer-name'),
      rect: el.getBoundingClientRect(),
      bg: window.getComputedStyle(el).backgroundColor,
      text: el.innerText ? el.innerText.slice(0, 100) : ''
    })).filter(s => s.rect.height > 100);
  });
  console.log('Framer sections count:', framerSections.length);
  fs.writeFileSync('framer_sections.json', JSON.stringify(framerSections, null, 2));

  await browser.close();
  console.log('Audit completed.');
}

compare().catch(e => console.error('Error:', e));

