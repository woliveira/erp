const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "0.0.0.0",
  user: "root",
  password: "root",
  database: "erp"
});

connection.connect(function(err) {
  if (err) {
    console.error('[MYSQL] Error on Connection: ' + err.stack);
    return;
  }
});

function query(sql) {
  return new Promise(resolve => {
    connection.query(sql, function(error, result, fields) {
      if (error) return error;
      const analise = result;
      resolve(analise);
    });
  });
}

exports.connection = connection;
exports.query = query;