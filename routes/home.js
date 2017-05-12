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
  // resp.send('Contact form posted!');
  const params = req.body;
  params.fullName = "Dictator " + params.fullName;
  resp.render('contact', params);
});

// when this file will be required, it will return the object
// assigned to module.exports
// (i.e. the router object)
module.exports = router;
