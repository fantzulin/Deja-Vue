const http = require('http');

const hostName = 'localhost';
const port = 5001;
let msg = 'Hello World'
let email = 'Hello fanchi0917'

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('content-Type', 'text/html');
    if (request.url == '/') {
        response.end(msg)
    } else if (request.url == '/email') {
        response.end(email)
    } else {
        response.end("error")
    }
});

server.listen(port, hostName, () => {
    console.log('Server running at http://127.0.0.1:5001/');
});

