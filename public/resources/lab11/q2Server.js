const http = require('http');
const fs = require('fs');
const { Console } = require('console');

const server = http.createServer((req,res)=>{
    const filePath = 'public/resources/lab11/bigImage.jpeg';
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'content-type' : 'image/jpeg',
        'content-length' : stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

const PORT = 3000;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
    console.log(`Server Running at http:://${HOST}:${PORT}/`);
});