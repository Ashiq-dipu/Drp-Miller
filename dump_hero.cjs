const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function dumpHeroHTML() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://gifted-attributes-102830.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  const heroHTML = await page.evaluate(() => {
    const hero = document.querySelector('section.ms.ms-dark.msh') || document.querySelector('section');
    return {
      outerHTML: hero ? hero.outerHTML.substring(0, 3000) : 'none',
      navHTML: document.querySelector('header, nav') ? document.querySelector('header, nav').outerHTML.substring(0, 2000) : 'none'
    };
  });

  console.log('Hero HTML snippet:', heroHTML.outerHTML.substring(0, 1000));
  fs.writeFileSync('framer_hero_dump.json', JSON.stringify(heroHTML, null, 2));
  await browser.close();
}

dumpHeroHTML();

