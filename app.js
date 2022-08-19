const http = require('http');
const fs = require('fs');

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

    //routing requests
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write("<body><form action='/message' method='POST'><input name='message' type='text'><button type='submit'>Send</button></form></body>");
        res.write('</html>');
        return res.end(); //add to get out of the anonymous event listener function
        //and to ensure the subsequent code after this is not executed
        //turns out res.end() does not stop execution on its own
    }

    //redirect to / and create a new file and store the message the 
    //user entered in it
    if(url === '/message' && method === 'POST'){
        //get our request data before writing to the file
        //and before sending a response
        //we do this by registering event listeners
        req.on();
        fs.writeFileSync('message.txt', 'Dummy');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

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
