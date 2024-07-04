//NODE JS works on single thread, non blocking IO module.

//node --version (for node js version)
//node index.js OR node index (js will show console output)
//npm init (will ceate package.json)
//npm install OR npm i (will download module)
// npm install express@3 (will download the 3 version of express)
//npm install express --save (will install express package dependencies)
//npm i -g nodemon (will install nodemon package globally in your system)
//nodemon .\index.js (will use nodeman in index.js)
//npm uninstall nodemon (will uninstall nodemon package)
//npm install express --no-save (will install Express temporarily and not add it to the dependencies list)
//npm install --save-dev nodemon (will install nodemon package for only development)

//(FOR NODEMON: 1: "start": "nodemon filename.js"  write this command in package.json
//              2: then run " run npm start" or "nodemon" in terminal )



const khan = require("./second");
console.log("HELLO WORLD", khan)
