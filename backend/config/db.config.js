const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Create a connection pool
const pool = mysql.createPool({
    host: '88.222.244.21',
    user: 'suraj',
    database: 'technosummit',
    port: 3306,
    password: 'Suraj123*',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export the pool promise
module.exports = pool.promise();
