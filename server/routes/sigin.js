const express = require('express');
const app = express();
const router = express.Router();
app.use(router);
const { loginPost, loginGet } = require('../apis/login');

//
// router.get('/',(req, res, next) => {
//     loginGet(req, res, next);
//     // req.end("hh")
// })
router.post('/',(req, res, next) => {
    // console.log(req.body)
    loginPost(req, res, next)
})

module.exports = router;