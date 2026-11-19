const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function getStyles() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://gifted-attributes-102830.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  const styles = await page.evaluate(() => {
    const nav = document.querySelector('header') || document.querySelector('nav');
    const hero = document.querySelector('section');
    return {
      navBg: nav ? window.getComputedStyle(nav).backgroundColor : null,
      heroBg: hero ? window.getComputedStyle(hero).backgroundColor : null,
      links: Array.from(document.querySelectorAll('nav a, header a')).map(a => a.innerText.trim()),
      h1: document.querySelector('h1') ? {
        text: document.querySelector('h1').innerText,
        font: window.getComputedStyle(document.querySelector('h1')).font,
        size: window.getComputedStyle(document.querySelector('h1')).fontSize,
        lineHeight: window.getComputedStyle(document.querySelector('h1')).lineHeight,
      } : null,
    };
  });

  console.log('Styles:', styles);
  await browser.close();
}

getStyles();

