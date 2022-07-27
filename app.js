const http = require('http');

//Request listener function which will be an argument in the 
//createServer() function
// function rqListener(req, res){

// }

//request listener as an anonymous function
// http.createServer(function(req, res){

// });


//request listener as an arrow function
//createServer returns a server which you shoudld save in a constant
//or variable, const preferred
const server = http.createServer((req,res) => {
    // console.log(req.url, req.method, req.headers);
    // process.exit();

    //set headers in the response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');

    //tell node that we are done writing the response
    //no other code should come after this
    res.end();

})

server.listen(3000);