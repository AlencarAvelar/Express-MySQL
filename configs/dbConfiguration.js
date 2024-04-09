const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT
});

module.exports = connection;

console.log('MYSQL_HOST:', process.env.MYSQL_HOST);
console.log('MYSQL_USER:', process.env.MYSQL_USER);
console.log('MYSQL_PASS:', process.env.MYSQL_PASS);
console.log('MYSQL_DB:', process.env.MYSQL_DB);
console.log('MYSQL_PORT:', process.env.MYSQL_PORT);
