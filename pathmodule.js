const path = require("path");

const a1 = path.basename('C:\\temp\\myfile.html');                                 
console.log(a1)
const a2 = path.dirname('C:\\temp\\myfile.html');                                   //(dorectory name)
console.log(a2)
const a3 = path.extname(__filename);                                                //(extension name)
console.log(__filename, "", a3)