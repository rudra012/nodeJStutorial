
// To get path for executing file
var path = require('path');
var appDir = path.dirname(process.mainModule.filename);
console.log(appDir);

var fs = require("fs");
var filepath = appDir + '/input.txt'

console.log("Reading TEXT File");
fs.readFile(filepath, function (error, data) {
    // If any error will come print error
    if (error) return console.error(error);
    // else print data
    console.log("\n\nDone with File read:\n" + data.toString());
});
// Call first
console.log("Program Ended");