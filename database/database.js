const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

module.exports = pool; //{ pool } => 객체처리를 안해도 된다. 하지만 객체처리를 한다면 await database.query('SELECT * FROM test_db'); 이부분에 database.pool.query 로 변경해야한다.
