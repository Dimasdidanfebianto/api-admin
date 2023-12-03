const mysql = require('mysql2');
const dbConnection = mysql.createConnection({
    host: '172.30.0.1',
    user: 'root',
    password: 'root',
    database: 'Pepustakaan',
    port: 3306,
  });
  
  dbConnection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL as id ' + dbConnection.threadId);
  });

  module.exports = dbConnection.promise();