var fs = require("fs");

/*
	sync - blocking
	This example example shows that the program blocks until it reads
	the file and then only it proceeds to end the program.
*/
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");