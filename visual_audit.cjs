const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function runVisualAudit() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Reference Site
  console.log('Navigating to Framer reference site...');
  await page.goto('https://gifted-attributes-102830.framer.app/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));

  await page.screenshot({ path: 'audit_framer_hero.png' });
  
  await page.evaluate(() => window.scrollTo(0, 950));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'audit_framer_sec1.png' });

  await page.evaluate(() => window.scrollTo(0, 2200));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'audit_framer_speakers.png' });

  // 2. Local Site
  console.log('Navigating to Local site...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  await page.screenshot({ path: 'audit_local_hero.png' });

  await page.evaluate(() => window.scrollTo(0, 950));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'audit_local_sec1.png' });

  await page.evaluate(() => window.scrollTo(0, 2200));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'audit_local_sessions.png' });

  console.log('Comparison screenshots captured successfully!');
  await browser.close();
}

runVisualAudit().catch(err => {
  console.error('Audit error:', err);
  process.exit(1);
});

