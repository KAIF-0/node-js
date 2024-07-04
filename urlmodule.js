// import url from "url";                     //(THIS IS USED WHEN ES6 MODULE IS ON THE RUN)

const url = require("url");

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh'; 

console.log(myURL)

