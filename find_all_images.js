const fs = require('fs');
const https = require('https');

async function checkSite(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function main() {
  const drp = await checkSite('https://drpmiller.com/');
  const vibe = fs.readFileSync('vibe_preview.html', 'utf8');
  
  const allHtml = drp + ' ' + vibe;
  const regex = /(?:https?:\/\/[^\s"'<>]+\.(?:png|jpg|jpeg|webp)|(?:__l5e|\/assets)[^\s"'<>]+\.(?:png|jpg|jpeg|webp))/gi;
  const matches = [...allHtml.matchAll(regex)].map(m => m[0]);
  const unique = Array.from(new Set(matches));
  console.log('Total unique image paths:', unique.length);
  console.log(unique);
}

main();

