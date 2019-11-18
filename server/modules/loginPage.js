const { exec } = require('../mysql/mysqlOpt');



function loginPage(req, res, next) {
    let sql = "SELECT * FROM USERS WHERE id = 12312312";
    let params = [];
    exec(sql,params, result => {
        res.send({code: 200,result: result})
    })
}

module.exports = {loginPage};