const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function inspectHero() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://gifted-attributes-102830.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 3000));

  const heroDetails = await page.evaluate(() => {
    // Get all top-level elements inside the main container
    const main = document.querySelector('main') || document.body;
    
    // Find hero container
    const topElements = Array.from(document.querySelectorAll('*')).filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.top < 700 && rect.height > 100 && rect.width > 300;
    });

    // Let's get the visual tree of the first 3 sections
    const getElemSummary = (el) => {
      const s = window.getComputedStyle(el);
      return {
        tag: el.tagName,
        className: el.className,
        text: el.innerText ? el.innerText.substring(0, 100).replace(/\n/g, ' ') : '',
        bg: s.backgroundColor,
        color: s.color,
        border: s.border,
        borderRadius: s.borderRadius,
        display: s.display,
        width: Math.round(el.getBoundingClientRect().width),
        height: Math.round(el.getBoundingClientRect().height),
        top: Math.round(el.getBoundingClientRect().top),
        left: Math.round(el.getBoundingClientRect().left),
      };
    };

    // Find all images
    const images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      width: img.width,
      height: img.height,
      alt: img.alt,
      top: Math.round(img.getBoundingClientRect().top),
      left: Math.round(img.getBoundingClientRect().left),
    }));

    return {
      images: images.slice(0, 15),
      firstSections: Array.from(document.querySelectorAll('section, [data-framer-name]'))
        .filter(el => el.getBoundingClientRect().height > 200)
        .slice(0, 10)
        .map(getElemSummary)
    };
  });

  fs.writeFileSync('hero_details.json', JSON.stringify(heroDetails, null, 2));
  console.log('Hero details saved');
  await browser.close();
}

inspectHero();

