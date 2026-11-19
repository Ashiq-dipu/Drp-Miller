const https = require('https');

async function get(path) {
  return new Promise(resolve => {
    https.get('https://drpmiller.com' + path, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    }).on('error', () => resolve(''));
  });
}

async function run() {
  const pages = ['/', '/about', '/speaking', '/media', '/coaching'];
  for (const p of pages) {
    const html = await get(p);
    const m = html.match(/(?:https?:\/\/[^\s"'<>]+\.(?:png|jpg|jpeg|webp)|\/__l5e\/assets-v1\/[^\s"'<>]+\.(?:png|jpg|jpeg|webp)|\/assets\/[^\s"'<>]+\.(?:png|jpg|jpeg|webp))/gi) || [];
    console.log(p, m);
  }
}

run();

