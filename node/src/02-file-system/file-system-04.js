var fs = require("fs");

// Create a Directory
console.log("Going to create directory /tmp");
var directory = 'tmp';
fs.mkdir(directory, function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});