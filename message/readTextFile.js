/* message/readTextFile.js */
const fs = require('fs');
const path = require('path');

function readTextFile(relativePath, fn) {
  let fullPath = path.join(__dirname, '../') + relativePath;

  fs.readFile(fullPath, 'utf-8', function fileRead(err, text) {
    fn(err, text);
  });
}

module.exports = readTextFile;