const fs = require('fs');
const html = fs.readFileSync('framer_site.html', 'utf8');

// find headings
const headings = [...html.matchAll(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Headings:', headings);

// find images
const imgMatches = [...html.matchAll(/https:\/\/framerusercontent\.com\/images\/[^\s"'<>]+\.(?:webp|png|jpg|jpeg)/gi)].map(m => m[0]);
console.log('Framer images count:', imgMatches.length);
console.log('Sample images:', Array.from(new Set(imgMatches)).slice(0, 10));

// find font families
const fontMatches = [...html.matchAll(/font-family:[^;"]+/gi)].map(m => m[0]);
console.log('Fonts:', Array.from(new Set(fontMatches)).slice(0, 10));

