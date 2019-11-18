const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secretkey = "dasdasdsadsadsasdasdas";

const app = express();


app.use(cookieParser('123456'))

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.all('*',function (req, res, next) {
    res.header("Access-Control-Allow-Origin","http://localhost:8080");
    res.header("Access-Control-Allow-Methods","PUT, GET, POST, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(function(req,res,next){
    if(req.url !='/sigin' && req.url !='/register'){
        //token可能存在post请求和get请求
        let token = req.body.token || req.query.token || req.headers.token;
        jwt.verify(token,secretkey,function(err,decode){
            if(err){
                res.json({
                    message: 'token过期，请重新登录',
                    resultCode: '403'
                })
            }else{
                let decoded = decode.id;
                if (decode.exp >= Date.now()) {
                    res.end('Access token has expired', 400);
                } else {
                    next();
                }
            }
        })
    } else {
        next()
    }
})


const router = require('./server/routes');

router(app);

app.listen(8081, function () {
    console.log('服务器已启动')
})
