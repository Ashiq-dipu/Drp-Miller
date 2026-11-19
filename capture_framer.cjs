const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to https://gifted-attributes-102830.framer.app/ ...');
  await page.goto('https://gifted-attributes-102830.framer.app/', { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait a few seconds for all Framer animations / hydrations to settle
  await new Promise(r => setTimeout(r, 4000));

  const screenshot1 = path.join(__dirname, 'framer_view_1.png');
  await page.screenshot({ path: screenshot1 });
  console.log('Captured screenshot 1:', screenshot1);

  // Scroll down and capture more
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 1000));
  const screenshot2 = path.join(__dirname, 'framer_view_2.png');
  await page.screenshot({ path: screenshot2 });
  console.log('Captured screenshot 2:', screenshot2);

  await page.evaluate(() => window.scrollBy(0, 1000));
  await new Promise(r => setTimeout(r, 1000));
  const screenshot3 = path.join(__dirname, 'framer_view_3.png');
  await page.screenshot({ path: screenshot3 });
  console.log('Captured screenshot 3:', screenshot3);

  // Full page screenshot
  const screenshotFull = path.join(__dirname, 'framer_fullpage.png');
  await page.screenshot({ path: screenshotFull, fullPage: true });
  console.log('Captured full page:', screenshotFull);

  // Extract layout data
  const layoutInfo = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section, header, footer, div[data-framer-name]'));
    return {
      bodyBg: window.getComputedStyle(document.body).backgroundColor,
      bodyColor: window.getComputedStyle(document.body).color,
      navText: document.querySelector('header, nav')?.innerText,
      mainHeadings: Array.from(document.querySelectorAll('h1, h2, h3')).map(h => ({
        tag: h.tagName,
        text: h.innerText,
        fontSize: window.getComputedStyle(h).fontSize,
        fontWeight: window.getComputedStyle(h).fontWeight,
        color: window.getComputedStyle(h).color,
        fontFamily: window.getComputedStyle(h).fontFamily,
      })),
      allButtons: Array.from(document.querySelectorAll('button, a')).filter(b => b.innerText.trim().length > 0 && b.innerText.trim().length < 40).map(b => b.innerText.trim())
    };
  });

  fs.writeFileSync('framer_layout_info.json', JSON.stringify(layoutInfo, null, 2));
  console.log('Layout info saved!');

  await browser.close();
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});

