const fs = require('fs');

console.log('Files present:');
fs.readdirSync('.').filter(f => f.endsWith('.png')).forEach(f => {
  const stat = fs.statSync(f);
  console.log(f, stat.size, 'bytes');
});

