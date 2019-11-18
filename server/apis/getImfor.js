const { exec } = require('../mysql/mysqlOpt');
const { decoded } = require('../utiles/decoded');

function getImfor(req, res, next) {
    let jwtDecoded = decoded(req, res, next);
    let sql2 = `SELECT * FROM USERS WHERE ID = ?`;
    let params = []
    params.push(jwtDecoded.id)
    exec(sql2,params, result => {
        res.send({code: 200,result: result})
    })
}

module.exports = {getImfor};