const fs = require('fs');
const path = require('path');
​
module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, list) => {
    if(err) return callback(err);
    const files = list.filter((file) => { return path.extname(file) === '.' + ext;});
​
    callback(null, files);
  });
};