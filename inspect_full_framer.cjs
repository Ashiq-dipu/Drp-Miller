const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function inspectFullFramer() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://gifted-attributes-102830.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 3000));

  const sections = await page.evaluate(() => {
    // Get all top-level sections
    const all = Array.from(document.querySelectorAll('section, header, footer, [data-framer-name]'));
    
    // find unique main containers
    const res = [];
    document.querySelectorAll('h1, h2, h3').forEach(h => {
      let p = h.parentElement;
      while (p && p.tagName !== 'SECTION' && p.tagName !== 'BODY' && !p.className.includes('framer-')) {
        p = p.parentElement;
      }
      res.push({
        headingTag: h.tagName,
        headingText: h.innerText.replace(/\n/g, ' '),
        fontSize: window.getComputedStyle(h).fontSize,
        fontWeight: window.getComputedStyle(h).fontWeight,
        color: window.getComputedStyle(h).color,
        parentBg: p ? window.getComputedStyle(p).backgroundColor : 'unknown',
        parentClass: p ? p.className : 'unknown',
        parentTag: p ? p.tagName : 'unknown'
      });
    });

    return {
      title: document.title,
      headings: res,
    };
  });

  fs.writeFileSync('framer_full_analysis.json', JSON.stringify(sections, null, 2));
  console.log('Framer analysis written, total headings found:', sections.headings.length);
  await browser.close();
}

inspectFullFramer();

