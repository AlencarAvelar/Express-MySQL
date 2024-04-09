const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

// Centralize as configurações do banco de dados
const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT
};

// Crie um pool de conexões
const pool = mysql.createPool(dbConfig);

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM produtos');
    connection.release();
    res.send(rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

/* GET home page clientes. */
router.get('/clientes', async function(req, res, next) {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM clientes');
    connection.release();
    res.send(rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
