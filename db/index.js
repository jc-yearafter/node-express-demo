const pgp = require('pg-promise')();
const db = pgp({
  // configure database
  host: 'localhost',
  database: 'ned'
});

module.exports = db;
