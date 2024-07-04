const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 1000;

const server = http.createServer((req, res)=>{
    
    res.setHeader("Content-Type", 'text/html')

if(req.url == '/'){
    res.statusCode = 200;
    res.end("<h1>This is a custom http.</h1>");
}else if(req.url == '/about'){
    res.statusCode = 200;
    res.end("<h1>This is about custom http.</h1>");
} else if(req.url == '/nav'){
    res.statusCode = 200;
    const text = fs.readFileSync("website.html");
    res.end(text.toString());
}else{
    //res.kksnd();                               //(WILL CRASH THE WEBSITE)
    res.statusCode = 404;
    res.end("<h1>Page not found.</h1>");
}
 
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})