const copy = require('copy');

copy('./src/api/**/*', './build/api', (err, files) => {
  if (err) throw err;
  console.log('Copied the ./api folder to ./build/api');
});
