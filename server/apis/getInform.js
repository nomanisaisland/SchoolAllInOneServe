const { exec } = require('../mysql/mysqlOpt');
const { decoded } = require('../utiles/decoded');

function getInform(req, res, next) {
    let jwtDecoded = decoded(req, res, next);
    let sql2 = `SELECT inform.label,inform.content,inform.date,inform.title
                FROM 
                inform
                WHERE 
                inform.tea_id = ?`;
    let params1 = [jwtDecoded.tid]
    exec(sql2,params1, result => {
        console.log(result)
        res.send({code: 200,result: result})
    })
}

function getGrade(req, res, next) {
    let jwtDecoded = decoded(req, res, next);
    let sql2 = `SELECT class_name,class_subject
                FROM grade
                WHERE 
                gt_id = ?`;
    let params = [jwtDecoded.tid]
    exec(sql2,params, result => {
        res.send({code: 200,result: result})
    })
}

module.exports = { getInform,getGrade };