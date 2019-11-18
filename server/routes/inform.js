const express = require('express');
const app = express();
const router = express.Router();
app.use(router);
const { getInform } = require('../apis/getInform');
//
router.get('/',(req, res, next) => {+
    getInform(req, res, next);
})

module.exports = router;