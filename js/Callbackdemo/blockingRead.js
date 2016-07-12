
// To get path for executing file
var path = require('path');
var appDir = path.dirname(process.mainModule.filename);

// To do file system related operations. Here to read file
var fs = require("fs");
var filepath = appDir + '/input.txt'
var data = fs.readFileSync(filepath);

console.log("Reading TEXT File");
console.log("Done with File Read: \n" + data.toString());
// Prints After Reading
console.log("Program Ended");

