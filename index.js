// write your code here
const http = require('http')

const server= http.createServer(function (req, res) {
//msg logged when reqest is received
//console.log('Hello World');

// send headers
res.writeHead(200, {'Content-Type': "text/plain"});


//send the body respose
res.end('Hello World');
});

// listen for incomming connections
server.listen(8080, 'localhost', null, function(){

    //log msg that the server is listening and which port
    console.log('Server is listening on localhost:8080');
});