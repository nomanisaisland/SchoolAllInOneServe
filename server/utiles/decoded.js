const jwt = require('jsonwebtoken');
const secretkey = "dasdasdsadsadsasdasdas";

function decoded (req, res, next) {
    let token = req.body.token || req.query.token || req.headers.token;
    return jwt.verify(token,secretkey,function(err,decode){
        if (decode) {
            return decode;
        }
    })

}
module.exports = { decoded }