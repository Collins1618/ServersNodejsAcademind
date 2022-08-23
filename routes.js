const fs = require('fs');

//create an anonymous arrow function which 
//you store in a constant
const requestHandler = (req,res) => {

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
        //we do this by registering event 
        const body = []; //empty array
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });
    
        //register another event listenr, the end listener
        //will be fired once done parsing the incoming data
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
    
            //below code moved in the event listener to avoid
            //having it run to early
            fs.writeFile('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
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
};

module.exports = requestHandler; //request handler now stored in
//module.exports