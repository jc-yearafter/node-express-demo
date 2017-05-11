// 1. Create project `yarn init`
// 2. Add express package `yarn add express`
// 3. Create `app.js` file
// 4. Require Express in `app.js`
// 5. Create a get route to server `/helloWorld`
// 6. Have server listen on PORT

// require is a function that is part of node that is used to load modules.
// It returns the object exported by the module.
const express = require('express');
const logger = require('morgan');

// creates an instance of a web app;
const app = express();

// Configure Express app to use the ejs templating engine for our app's views
app.set('view engine', 'ejs')


/*
// unlike app.get, app.get will work for all HTTP Verbs
// if we do not give a URL for the first argument, it will
// match for every URL
app.use((request, response, next)=>{
  console.log(`${request.method} - ${request.path} - ${new Date().toString()}`)
  next(); //next, a function and third argument of a middleware callback,
          // tells Express to move on to the next middleware
});
*/

app.use(logger('dev'));








// URL: http://localhost:4545/helloWorld VERB: Get
// we expect somebody to send a 'get' request
// when someone goes to the path /helloWorld, callBack function runs
app.get('/helloWorld',(request,response)=>{
  // debugger;
  // request: an object that contains the entire message from the client(usually a browser), use methods on request to get information from browser
  // response: an object that contains the message our server will reply with to the client, use methods on response to send information to the browser
  // next: tells express that we're done with this middleware
  // This callback (which receives a request & response) is usually named Middleware
  response.send('Hello World ._.');
});


// URL: http://localhost:4545/ VERB: Get
app.get('/',(request,response)=>{
  // use the response.render instead of response.send when you want to
  // show a view from your views folder
  response.render('index') // start of in views, don't need ./views/
});


//
const PORT = 4545;
app.listen(
  PORT,
  // callback that will run when server is up and running
  ()=> {console.log(`💻Server listening on http://localhost:${PORT}`);}
);
