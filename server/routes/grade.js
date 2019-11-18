const express = require('express');
const app = express();
const router = express.Router();
app.use(router);
const { getGrade } = require('../apis/getInform');
//
router.get('/',(req, res, next) => {
    getGrade(req, res, next)
})

module.exports = router;