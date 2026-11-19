const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

console.log('Spawning Window 1: Localhost (left half)...');
const w1 = spawn(chromePath, [
  '--new-window',
  '--window-position=0,0',
  '--window-size=960,1040',
  'http://localhost:3000/'
], { detached: true, stdio: 'ignore' });
w1.unref();

setTimeout(() => {
  console.log('Spawning Window 2: Framer reference (right half)...');
  const w2 = spawn(chromePath, [
    '--new-window',
    '--window-position=960,0',
    '--window-size=960,1040',
    'https://gifted-attributes-102830.framer.app/'
  ], { detached: true, stdio: 'ignore' });
  w2.unref();
  console.log('Both windows launched side by side successfully.');
}, 1200);

