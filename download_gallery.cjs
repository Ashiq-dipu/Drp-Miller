const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/gallery';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const images = [
  { name: 'gallery-stage.webp', url: 'https://framerusercontent.com/images/hzb4tz2FTR7VoWUK174y3gdhQ.webp' },
  { name: 'gallery-frontrow.webp', url: 'https://framerusercontent.com/images/4t0hzwgLilvAkUvvCxjk75hnBc.webp' },
  { name: 'gallery-hallway.webp', url: 'https://framerusercontent.com/images/oaJqh2p6xHtk94e6lh4t7yfqnws.webp' },
  { name: 'gallery-dinner.webp', url: 'https://framerusercontent.com/images/dFeRgg3zGJcfBfJo4NsBS6rCbN0.webp' },
  { name: 'gallery-keynote.webp', url: 'https://framerusercontent.com/images/OMnTnPbzBQ0RmPr5U00kdEacY.webp' },
  { name: 'gallery-workshop.webp', url: 'https://framerusercontent.com/images/Od0sLPh3UNsr4tc9mwj2XeBTyb8.webp' }
];

let completed = 0;
images.forEach(img => {
  const dest = path.join(dir, img.name);
  const file = fs.createWriteStream(dest);
  https.get(img.url, resp => {
    resp.pipe(file);
    file.on('finish', () => {
      file.close();
      completed++;
      console.log(`Downloaded ${img.name} (${completed}/${images.length})`);
    });
  }).on('error', err => {
    console.error(`Error downloading ${img.name}:`, err.message);
  });
});

