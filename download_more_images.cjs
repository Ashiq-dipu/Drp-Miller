const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = './public/images';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const toDownload = {
  'ben-crump.jpg': 'https://drpmiller.com/__l5e/assets-v1/5f07ea49-99e8-46b8-9151-133e9873332c/ben-crump.jpg',
  'brand-speaking.jpg': 'https://drpmiller.com/__l5e/assets-v1/69939e53-8d54-4537-adc8-4197ac8f14cf/brand-3.jpg',
  'brand-coaching.jpg': 'https://drpmiller.com/__l5e/assets-v1/17d4ba05-17a6-47c2-8fce-3ed9a744e23a/brand-1.jpg',
  'stage-media-7.jpg': 'https://drpmiller.com/assets/media-7-BMemTYtW.jpg',
  'stage-media-8.jpg': 'https://drpmiller.com/assets/media-8-DJRJ2poV.jpg',
  'netroots-stage-1.jpg': 'https://drpmiller.com/assets/media-netroots1-C8iLdNlr.jpg',
  'netroots-stage-2.jpg': 'https://drpmiller.com/assets/media-netroots2-D1-UCoun.jpg',
  'netroots-stage-3.jpg': 'https://drpmiller.com/assets/media-netroots3-CXy8UuxZ.jpg',
  'edceptional-1.jpg': 'https://drpmiller.com/assets/media-edceptional1-B6J-9nSf.jpg',
  'edceptional-2.jpg': 'https://drpmiller.com/assets/media-edceptional2-D597bqg6.jpg',
  'reader-youth.jpg': 'https://drpmiller.com/__l5e/assets-v1/f15b9803-d7fa-49d1-b087-dcf700f31fbf/gutter-greatness-reader.jpg',
  'press-wxxi.jpg': 'https://drpmiller.com/assets/press-wxxi-C9zlXODI.jpg'
};

Object.entries(toDownload).forEach(([filename, url]) => {
  const filePath = path.join(dir, filename);
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const s = fs.createWriteStream(filePath);
      res.pipe(s);
      s.on('finish', () => console.log('Saved:', filename));
    } else {
      console.log('HTTP', res.statusCode, filename);
    }
  }).on('error', (e) => console.error('Err:', filename, e.message));
});

