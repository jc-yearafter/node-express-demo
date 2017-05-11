// 1. Create project `yarn init`
// 2. Add express package `yarn add express`
// 3. Create `app.js` file
// 4. Require Express in `app.js`
// 5. Create a get route to server `/helloWorld`
// 6. Have server listen on PORT

// require is a function that is part of node that is used to load modules.
// It returns the object exported by the module.
const express = require('express');
console.log(express)

// creates an instance of a web app;
const app = express();


// URL: http://localhost:4545/helloWorld VERB: Get
// we expect somebody to send a 'get' request
// when someone goes to the path /helloWorld, callBack function runs
app.get('/helloWorld',(request,response)=>{
  // request: an object that contains the entire message from the client(usually a browser), use methods on request to get information from browser
  // response: an object that contains the message our server will reply with to the client, use methods on response to send information to the browser
  // This callback (which receives a request & response) is usually named Middleware
  response.send('Hello World');
});


app.get('',(request,response)=>{
  response.send('Huh?');
});


//
const PORT = 4545;
app.listen(
  PORT,
  // callback that will run when server is up and running
  ()=> {console.log(`💻Server listening on http://localhost:${PORT}`);}
);