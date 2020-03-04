const mymodule = require('./mymodule.js');
​
mymodule(process.argv[2], process.argv[3], (err, files) => {
  if (err) {
    console.error(err);
  }
 
  files.forEach((file) => {
    console.log(file);
  });
}); 