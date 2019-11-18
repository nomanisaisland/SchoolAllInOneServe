const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'school'
});

connection.connect();

//事务处理
function exec(sql, params, callback) {
    connection.query(sql, params, (err, result) => {
        if (err) {
            console.log(err.message);
            return;
        }
        if (callback) {
            callback(result);
        }
    })
}

module.exports = { exec };