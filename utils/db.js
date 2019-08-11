const mysql = require('mysql');
const config = require('./../config.json');
const pool = mysql.createPool({
  // Connection limit set low, raise this if more connections needed
  connectionLimit: 10,
  host: config.dbLogin.host,
  user: config.dbLogin.user,
  password: config.dbLogin.password,
  database: 'rohan',
});

pool.getConnection(function(err, connection){
  if (err) throw err;
  if (connection) connection.release();
  return;
});

module.exports = pool;
