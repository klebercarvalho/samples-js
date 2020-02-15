var fs = require("fs");

// Read Directory
console.log("Going to read directory /tmp");
var directory = 'tmp';
fs.readdir(directory,function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
      console.log( file );
   });
});