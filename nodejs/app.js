const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    let temp = '';
    if(req.url=='/home') temp = 'Welcome home'
    else if(req.url=='/about') temp = 'Welcome to About Us page'
    else if(req.url=='/node') temp = 'Welcome to my Node Js project'
    else temp = 'ONE PIECE is best'
    res.setHeader( 'Content-Type' , 'text/html' );
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>' );
    res.write(`<body><h1>${temp}</h1></body>`);
    res.write('</html>');
    res.end();
    });
    server.listen(4000);