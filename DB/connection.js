import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'MSP',
    user: 'root',
    password: 'w@2915djkq#'
});

export default connection;