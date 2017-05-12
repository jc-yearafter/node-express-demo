const express = require('express');
// Create router object
const router = express.Router();

// URL: http://localhost:4545/ VERB: Get
router.get('/', (req, resp)=>{
  resp.render('index');
});


// URL: http://localhost:4545/contact VERB: Get
router.get('/contact', (req, resp)=>{
  resp.render('contact', {fullName: '', email: '', comment: ''});
});

// URL: http://localhost:4545/contact VERB: Post
router.post('/contact', (req, resp)=>{
  const params = req.body;
  // params.fullName = "Dictator " + params.fullName;
  // Cookies are stored on the browser
  // To create a cookie, we must tell the browser in our response to add a cookie of given name with given values
  // 👇 would add...
  resp.cookie('fullName', params.fullName)
  resp.cookie('email', params.email)
  // YOu can store arrays and objects in cookies. However,
  // cookies parser transforms (or serializes) them into a string.
  // Then it parses it back into the respective JavaScript for your usage
  resp.cookie('things', ['Power Supply', 'Rubber Duck', 'Ice Cream'])
  resp.render('contact', params);
});

// when this file will be required, it will return the object
// assigned to module.exports
// (i.e. the router object)
module.exports = router;
