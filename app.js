const http = require('http');

//Request listener function which will be an argument in the 
//createServer() function
function rqListener(req, res){

}

http.createServer(rqListener);