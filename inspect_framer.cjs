const fs = require('fs');
const html = fs.readFileSync('framer_site.html', 'utf8');

console.log('Framer site length:', html.length);

// Extract title & meta
const titleMatch = html.match(/<title>(.*?)<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[1] : 'No title');

// Extract text nodes
const text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ');
console.log('Text snippet:', text.substring(0, 3000));

