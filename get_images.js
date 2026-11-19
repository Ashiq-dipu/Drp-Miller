const fs = require('fs');
const html = fs.readFileSync('vibe_preview.html', 'utf8');
const matches = [...html.matchAll(/https?:\/\/[^\s"'<>]+\.(?:png|jpg|jpeg|webp|svg)/gi)].map(m => m[0]);
console.log(Array.from(new Set(matches)).join('\n'));
