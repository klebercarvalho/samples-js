var fs = require("fs");

// Delete a File
console.log("Going to delete an existing file");
fs.unlink('input3.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});