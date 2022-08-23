const http = require('http');

const routes = require('./routes');

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
const server = http.createServer(routes)

server.listen(3000);