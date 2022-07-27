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
    console.log(req.url, req.method, req.headers);
    // process.exit();

})

server.listen(3000);