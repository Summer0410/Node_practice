require('isomorphic-fetch')
const Dropbox = require('dropbox').Dropbox
var fs = require('fs');
var path = require('path');


const accessToken = 'YOUR ACCESS TOKEN';
const dbx = new Dropbox({ accessToken: accessToken });

fs.readFile(path.join(__dirname, '/test.js'), 'utf8', function (err, contents) {
    if (err) {
      console.log('Error: ', err);
    }

    // This uploads basic.js to the root of your dropbox
    dbx.filesUpload({ path: 'folder/hello.js', contents: contents })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

