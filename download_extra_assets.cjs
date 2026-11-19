const fs = require('fs');
const path = require('path');
const https = require('https');

const pathsDir = path.join(__dirname, 'public/images/paths');
const shopDir = path.join(__dirname, 'public/images/shop');

if (!fs.existsSync(pathsDir)) fs.mkdirSync(pathsDir, { recursive: true });
if (!fs.existsSync(shopDir)) fs.mkdirSync(shopDir, { recursive: true });

const pathAssets = [
  { url: 'https://drpmiller.com/assets/book-goodhood-CfuouYH_.webp', dest: path.join(pathsDir, 'path-goodhood.webp') },
  { url: 'https://drpmiller.com/assets/web-bc-BVgjKDOJ.jpg', dest: path.join(pathsDir, 'path-bc.jpg') },
  { url: 'https://drpmiller.com/assets/web-gutter-C2RYvMJs.jpg', dest: path.join(pathsDir, 'path-gutter.jpg') },
  { url: 'https://drpmiller.com/assets/web-gutterbooks-nrURP1RH.jpg', dest: path.join(pathsDir, 'path-gutterbooks.jpg') },
  { url: 'https://drpmiller.com/assets/web-stream-D2rfCCgj.jpg', dest: path.join(pathsDir, 'path-stream.jpg') },
  { url: 'https://drpmiller.com/assets/web-urbane-CJDD3mY2.jpg', dest: path.join(pathsDir, 'path-urbane.jpg') },
  { url: 'https://drpmiller.com/assets/web-ebm-Z34qfWwd.jpg', dest: path.join(pathsDir, 'path-ebm.jpg') }
];

const shopAssets = [
  { url: 'https://image.spreadshirtmedia.com/image-server/v1/products/T812A1272PA4267PT17X72Y45D1058512886W20134H25000/views/1,width=500,height=500,appearanceId=1272,backgroundColor=ffffff/green-tech-rochester-logo-png-mens-premium-t-shirt.jpg', dest: path.join(shopDir, 'merch-greentech-tee.jpg') },
  { url: 'https://image.spreadshirtmedia.com/image-server/v1/products/T813A2PA4249PT17X14Y52D1056002298W25000H1517/views/1,width=500,height=500,appearanceId=2,backgroundColor=ffffff/gg-word-mark-womens-premium-t-shirt.jpg', dest: path.join(shopDir, 'merch-wordmark-tee.jpg') },
  { url: 'https://image.spreadshirtmedia.com/image-server/v1/products/T20A1269PA4162PT17X64Y55D1056133452W20002H16932/views/1,width=500,height=500,appearanceId=1269,backgroundColor=ffffff/goldie-logo-mens-premium-hoodie.jpg', dest: path.join(shopDir, 'merch-goldie-hoodie.jpg') },
  { url: 'https://image.spreadshirtmedia.com/image-server/v1/products/T111A8PA4247PT17X13Y45D1056002404W32333H20827/views/1,width=500,height=500,appearanceId=8,backgroundColor=ffffff/logo-and-gtg-mens-hoodie.jpg', dest: path.join(shopDir, 'merch-gtg-hoodie.jpg') },
  { url: 'https://image.spreadshirtmedia.com/image-server/v1/products/T814A507PA4252PT17X25Y24D1056002332W11860H11064/views/1,width=500,height=500,appearanceId=507,backgroundColor=ffffff/gg-crest-gold-toddler-premium-t-shirt.jpg', dest: path.join(shopDir, 'merch-crest-toddler.jpg') },
  { url: 'https://image.spreadshirtmedia.com/image-server/v1/products/T401A469PA642PT17X3Y39D1056002333W15188H10994/views/1,width=500,height=500,appearanceId=469,backgroundColor=ffffff/setbacks-to-setups-organic-short-sleeve-baby-bodysuit.jpg', dest: path.join(shopDir, 'merch-baby-bodysuit.jpg') },
  { url: 'https://image.spreadshirtmedia.com/image-server/v1/products/T1186A359PA3066PT17X0Y76D1056002298W19184H1164/views/1,width=500,height=500,appearanceId=359,backgroundColor=ffffff/gg-word-mark-adjustable-apron.jpg', dest: path.join(shopDir, 'merch-apron.jpg') },
  { url: 'https://image.spreadshirtmedia.com/image-server/v1/products/T813A397PA4249PT17X53Y25D1058512886W17228H21392/views/1,width=500,height=500,appearanceId=397,backgroundColor=ffffff/green-tech-rochester-logo-png-womens-premium-t-shirt.jpg', dest: path.join(shopDir, 'merch-women-tee.jpg') }
];

function download(url, dest) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Saved: ${dest}`);
          resolve(true);
        });
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Failed ${url}: ${err.message}`);
      resolve(false);
    });
  });
}

(async () => {
  for (const item of [...pathAssets, ...shopAssets]) {
    await download(item.url, item.dest);
  }
  console.log('All paths and shop assets processed.');
})();
