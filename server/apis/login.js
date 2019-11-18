const {
    exec
} = require('../mysql/mysqlOpt');
const jwt = require('jsonwebtoken');
const secretkey = "dasdasdsadsadsasdasdas";

function loginGet(req, res, next) {
    let sql = "SELECT * FROM users WHERE user_account = ? AND user_password= ?";

    exec(sql, params, result => {
        if (!result) {

            res.json({
                msg: "请先登录"
            });
        } else {
            res.json({code: 200, data: result})
        }
    })
}

function loginPost(req, res, next) {
    let reqBody = req.body;
    let account = reqBody.account;
    let pwd = reqBody.password;
    console.log(`account【${account}】;密码【${pwd}】`);

    let sql = "SELECT * FROM USERS WHERE USER_ACCOUNT = ? AND USER_PASSWORD= ?";
    let params = [];

    params.push(account,pwd);

    exec(sql, params, result => {
        if (result.length === 0) {
            res.json({
                code: 204,
                msg: "用户名或者密码错误"
            });
        } else {

            if (result[0].user_password === pwd && result[0].user_account === account) {
                let sql = "SELECT * FROM USERS WHERE "

                let id = result[0].id;
                let name = result[0].name;
                let grade = result[0].class;
                let position = result[0].position;
                let avator = result[0].avator;
                let tid = result[0].tid;
                let token = jwt.sign({id:id,tid: tid},secretkey,{expiresIn: 60*8*100000100});
                res.cookie('cart', { id: id, name: name, grade: grade, position: position, avator: avator}, { maxAge: 60*8*100000100,signed:true,httpOnly:false });
                res.json({
                    code: 200,
                    msg: "success",
                    token: token,
                })
            } else {
                res.json({
                    msg: "email or password error"
                })
            }
        }
    })
}

module.exports = {
    loginGet,
    loginPost
};