let http = require('http');
let fs = require('fs');

let hostname = '127.0.0.1';
let port = 3000;

let index = fs.readFileSync('index.html');
let about = fs.readFileSync('about.html');

let server = http.createServer((req, res)=>{
    console.log(req.url);
    let url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(index);
    }
    else if(url == '/about.html'){
        res.end(about);
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})