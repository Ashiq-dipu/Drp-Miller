const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function extract() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--window-size=1440,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('https://gifted-attributes-102830.framer.app/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  const specs = await page.evaluate(() => {
    // 1. Navigation / Header
    const nav = document.querySelector('nav') || document.querySelector('header');
    
    // 2. All major visible sections
    const allDivs = Array.from(document.querySelectorAll('main > div, section, [data-framer-name]'));
    
    function getStyles(el) {
      if (!el) return null;
      const cs = window.getComputedStyle(el);
      return {
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        padding: cs.padding,
        margin: cs.margin,
        borderRadius: cs.borderRadius,
        border: cs.border,
        display: cs.display,
        gap: cs.gap,
        maxWidth: cs.maxWidth
      };
    }

    // Extract text elements with their computed styles
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, p, a, button, span')).map(el => {
      const text = el.innerText ? el.innerText.trim() : '';
      if (!text || text.length > 120 || el.children.length > 2) return null;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return null;
      return {
        tag: el.tagName,
        text: text,
        top: Math.round(rect.top + window.scrollY),
        styles: getStyles(el)
      };
    }).filter(Boolean);

    // Images
    const images = Array.from(document.querySelectorAll('img')).map(img => {
      const rect = img.getBoundingClientRect();
      return {
        src: img.src,
        alt: img.alt,
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        top: Math.round(rect.top + window.scrollY),
        aspectRatio: (rect.width / (rect.height || 1)).toFixed(2)
      };
    });

    return {
      title: document.title,
      bodyBg: window.getComputedStyle(document.body).backgroundColor,
      headings: headings.slice(0, 80),
      images: images.slice(0, 30)
    };
  });

  fs.writeFileSync('framer_exact_blueprint.json', JSON.stringify(specs, null, 2));
  console.log('Framer blueprint extracted successfully! Total headings/labels:', specs.headings.length, 'Images:', specs.images.length);
  await browser.close();
}

extract().catch(console.error);

