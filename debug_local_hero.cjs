const puppeteer = require('puppeteer-core');

async function debugLocalHero() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

  const heroDetails = await page.evaluate(() => {
    const hero = document.querySelector('section');
    if (!hero) return 'NO SECTION FOUND!';
    const img = hero.querySelector('img');
    const h1 = hero.querySelector('h1');
    return {
      heroHTML: hero.outerHTML.substring(0, 1000),
      h1Text: h1 ? h1.innerText : 'NO H1',
      imgSrc: img ? img.src : 'NO IMG',
      imgComplete: img ? img.complete : false,
      imgNaturalWidth: img ? img.naturalWidth : 0,
      imgNaturalHeight: img ? img.naturalHeight : 0,
      heroRect: hero.getBoundingClientRect(),
    };
  });

  console.log('Local hero details:', heroDetails);
  await browser.close();
}

debugLocalHero();

