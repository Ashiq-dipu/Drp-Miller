const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream('public/images/audience-hall.webp');
https.get('https://framerusercontent.com/images/qwR2qk9zvVIVSl5n3WJCnswaEWY.webp', response => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Audience image downloaded successfully!');
  });
}).on('error', err => {
  fs.unlink('public/images/audience-hall.webp', () => {});
  console.error('Error downloading:', err.message);
});
