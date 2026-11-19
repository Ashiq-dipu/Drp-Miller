const data = require('./framer_exact_blueprint.json');
console.log('Images:');
data.images.forEach((img, i) => {
  console.log(`[${i}] top:${img.top} w:${img.width} h:${img.height} aspect:${img.aspectRatio} src:${img.src.slice(0, 80)}`);
});

