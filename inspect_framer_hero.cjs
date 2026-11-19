const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function inspectHero() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--window-size=1440,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://gifted-attributes-102830.framer.app/', { waitUntil: 'networkidle2' });

  const heroDetails = await page.evaluate(() => {
    // Find watermark element containing "MAINSTAGE"
    const all = Array.from(document.querySelectorAll('*'));
    const watermark = all.find(el => el.children.length === 0 && el.innerText && el.innerText.trim() === 'MAINSTAGE');
    let wmStyles = null;
    if (watermark) {
      const cs = window.getComputedStyle(watermark);
      wmStyles = {
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        color: cs.color,
        letterSpacing: cs.letterSpacing,
        textTransform: cs.textTransform,
        opacity: cs.opacity,
        position: cs.position,
        bottom: cs.bottom,
        parentDisplay: window.getComputedStyle(watermark.parentElement).display
      };
    }

    // Inspect the navbar structure
    const navBar = document.querySelector('nav') || document.querySelector('header');
    
    // Inspect section 01 container and columns
    const sec1Heading = all.find(el => el.innerText && el.innerText.includes('01 · THE SUMMIT'));
    let sec1Info = null;
    if (sec1Heading) {
      const sec1Container = sec1Heading.closest('section') || sec1Heading.parentElement.parentElement;
      const cs = window.getComputedStyle(sec1Container);
      sec1Info = {
        bg: cs.backgroundColor,
        padding: cs.padding,
        maxWidth: cs.maxWidth
      };
    }

    return { wmStyles, sec1Info };
  });

  console.log('Hero details:', JSON.stringify(heroDetails, null, 2));
  await browser.close();
}

inspectHero().catch(console.error);

