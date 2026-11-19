const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function getHeroChildren() {
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
    const section = document.querySelector('section.ms.ms-dark.msh');
    if (!section) return 'no section';
    
    const children = Array.from(section.children).filter(c => c.tagName !== 'STYLE' && c.tagName !== 'LINK');
    return children.map(c => ({
      tag: c.tagName,
      className: c.className,
      id: c.id,
      text: c.innerText.replace(/\n+/g, ' | ').substring(0, 300),
      html: c.outerHTML.substring(0, 500)
    }));
  });

  console.log('Hero direct children:', data);
  await browser.close();
}

getHeroChildren();

