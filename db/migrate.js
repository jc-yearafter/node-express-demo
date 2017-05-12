const db = require('./index');

// create database
db.query(`
  CREATE TABLE posts(
    id SERIAL,
    title VARCHAR(255),
    content TEXT,
    author VARCHAR(255)
  )
`)
  // promise, takes a callback
  .then(()=>{
    console.log('🛠 Created table posts!')
    process.exit();
  })
  .catch(err => {
    console.error(err)
    process.exit();
  });
