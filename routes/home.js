const express = require('express');
// Create router object
const router = express.Router();

router.get('/', (req, resp)=>{
  resp.render('index');
});


// when this file will be required, it will return the object
// assigned to module.exports
// (i.e. the router object)
module.exports = router;
