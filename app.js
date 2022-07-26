const http = require('http');

//Request listener function which will be an argument in the 
//createServer() function
// function rqListener(req, res){

// }

//request listener as an anonymous function
// http.createServer(function(req, res){

// });


//request listener as an arrow function
http.createServer((req,res) => {
    console.log(req);
    
})