const express = require('express');
const router = express.Router();
const db = require('../db');        // connect to database


// URL: /posts                VERB: GET ACTION: Read
router.get('/', (req, res) =>{
  db.query(`SELECT * FROM posts ORDER BY id DESC`)
    .then(posts => {
      // res.send(posts);
      // {posts} = {posts:posts}
      res.render('posts/index', {posts})
    })
    .catch(err => {
      res.send(err);
    });
});

// URL: /posts/:id            VERB: GET ACTION: Read
router.get('/:id', (req,res)=>{
  const {id} = req.params;

  db.one(`SELECT * FROM posts WHERE id =$<id> LIMIT 1`, {id})
    .then(post => {
      // ^ post = result from query
      res.render('posts/show', {post})
    })
    .catch(err => {res.send(err)})

  // res.send(req.params)
});

module.exports = router;
