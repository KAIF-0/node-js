const http = require("http");

const port = process.env.PORT || 2000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/html');

    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');

    res.write("<h1>This is a custom http</h1>");

    return res.end();
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})