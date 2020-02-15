var fs = require("fs");

console.log("Going to delete directory /tmp");
var directory = 'tmp';
fs.rmdir(directory,function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /tmp");
   
   fs.readdir(directory,function(err, files) {
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file) {
         console.log( file );
      });
   });
});
